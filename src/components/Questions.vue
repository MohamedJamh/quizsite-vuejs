<template>
    <div class="container">
        <div class="bg-white w-full rounded-lg p-5">
            <div class="my-2">
                <p class="font-semibold text-3xl">{{ questions[currentQuestion].question }}</p>
            </div>
            <div class="my-2">
                <div v-for="(choice , index) in questions[currentQuestion].choices" :key="index" class="border rounded-lg border-slate-500 p-3 my-3">
                    <p>
                        {{ choice }}
                    </p>
                </div>
            </div>
            <div class="flex gap-3 items-center">
                <div class="border w-full rounded-xl overflow-hidden">
                    <div class="bg-sky-100 text-center">0%</div>
                </div>
                <button 
                    class="bg-rose-600 px-10 py-2 rounded-lg text-white text-xl"
                    @click="nextQuestion()"
                >Next</button>
            </div>
        </div>
    </div>

</template>
<script>
export default {
    props : ['questions'],
    data(){
        return{
            currentQuestion : 0
        };
    },
    methods: {
        nextQuestion(){
            this.currentQuestion += 1
        }
    },
}
</script>
<style>
    
</style>