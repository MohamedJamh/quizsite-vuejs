<template>
    <div>
        <stepper
            :active-step="activeStep"
            :steps="steps"
        ></stepper>
    </div>
    <main class="flex justify-center">
        <info
            v-if="activeStep == 0"
            :quizes="quizes"
        ></info>
        <questions
            v-if="activeStep == 1"
            :questions="questions"
            @details = "onFinish"
        ></questions>
        <score
            v-if="activeStep == 2"
            :choosed-quiz="choosedQuiz"
            :details="details"
        ></score>
    </main>
</template>
<script>
import stepper from "./components/Stepper.vue";
import info from "./components/Info.vue";
import questions from "./components/Questions.vue";
import score from "./components/Score.vue";

export default{
    components:{
        stepper,
        info,
        questions,
        score
    },
    created(){
    },
    data(){
        return{
            choosedQuiz : null,
            questions : [],
            activeStep : 0,
            steps : [
                { icon : "fa-info"},
                { icon : "fa-code"},
                { icon : "fa-list-check"},
            ],
            quizes : [
                {name:"PHP",pathName:"php"},
                {name:"VueJs",pathName:"vuejs"}
            ],
            details : {}
        };
    },
    methods:{
        async getQuestions(value){
            let res = await fetch(`${value}.json`)
            this.questions = await res.json()
        },
        async startQuiz(choosedQuiz){
            this.choosedQuiz = choosedQuiz
            await this.getQuestions(choosedQuiz)
            this.activeStep = 1;
        },
        onFinish(details){
            this.details = details
        }
    }
}
</script>

<style>
@import './assets/css/style.css';
    body{
        height: 80vh;
        background: url('./assets/img/layered-waves-haikei.svg') no-repeat center center fixed;
    }
</style>