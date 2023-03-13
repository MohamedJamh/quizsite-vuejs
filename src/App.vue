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
        ></info>
        <questions
            v-if="activeStep == 1"
            :questions="questions"
            @details = "onFinish"
        ></questions>
        <score
            v-if="activeStep == 2"
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
        this.getQuestions()
    },
    data(){
        return{
            questions : [],
            activeStep : 0,
            steps : [
                { icon : "fa-info"},
                { icon : "fa-code"},
                { icon : "fa-list-check"},
            ],
            details : {}
        };
    },
    methods:{
        async getQuestions(){
            let res = await fetch('questions.json')
            this.questions = await res.json()
        },
        startQuiz(){
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
        height: 100vh;
        background: url('./assets/img/layered-waves-haikei.svg') no-repeat center center fixed;
    }
</style>