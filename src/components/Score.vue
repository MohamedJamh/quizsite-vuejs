<template>
    <div class="bg-white container text-left rounded-xl px-5 py-3">
        <p class="text-3xl my-2 font-bold">Your Score is : {{ this.details.score }}% </p>
        <div>
            <div
            v-if="this.details.log.length != 0"
            v-for="(question) in this.details.log" 
            class="border-2 border-slate-200 rounded-lg mx-2 p-5 my-5">
                <p class="text-2xl">{{ question.question }}</p>
                <div class="text-lg">
                    <span class="block my-2 px-3 py-2 bg-rose-400 text-white rounded-lg">{{ question['wrong-answer'] }}</span>
                    <span class="block my-2 px-3 py-2 bg-green-400 text-white rounded-lg">{{ question['correct-answer'] }}</span>
                    <span class="block my-2"><em class="underline">Explanation</em> : {{ question['explanation'] }}</span>
                </div>
            </div>
            <div v-else class="text-center text-3xl">**Good Job**</div>
        </div>
        <div class="flex gap-5 justify-end my-3">
            <button class="bg-rose-600 px-10 py-2 rounded-lg text-white text-xl" @click="this.$parent.startQuiz()">
                <i class="fa-solid fa-repeat" ></i>
            </button>
            <button class="bg-rose-600 px-10 py-2 rounded-lg text-white text-xl" @click="quitQuiz()">
                <i class="fa-solid fa-right-from-bracket"></i>
            </button>
        </div>
    </div>

</template>

<script>
export default{
    props:['questions','details'],
    methods: {
        quitQuiz(){
            this.$parent.activeStep = 0
        }
    },
}
</script>

<style></style>