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
        ></questions>
    </main>
</template>
<script>
import stepper from "./components/Stepper.vue";
import info from "./components/Info.vue";
import questions from "./components/Questions.vue";

export default{
    components:{
        stepper,
        info,
        questions
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
            ]
        };
    },
    methods:{
        async getQuestions(){
            let res = await fetch('questions.json')
            this.questions = await res.json()
        },
        startQuiz(){
            this.activeStep = 1;
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