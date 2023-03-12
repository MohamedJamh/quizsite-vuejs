<template>
    <div>
        <stepper
            :active-step="activeStep"
            :steps="steps"
        ></stepper>
    </div>
    <main class="flex justify-center">
        <Info
            v-if="activeStep == 0"
            
        ></Info>
    </main>
</template>
<script>
import Stepper from "./components/Stepper.vue";
import Info from "./components/Info.vue";

export default{
    components:{
        Stepper,
        Info
    },
    created(){
    },
    data(){
        return{
            activeStep : 0,
            steps : [
                { icon : "fa-info"},
                { icon : "fa-code"},
                { icon : "fa-list-check"},
            ]
        };
    },
    methods:{
        getQuestions(){
            
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