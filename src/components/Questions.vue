<template>
    <div class="container">
        <div class="bg-white w-full rounded-lg p-5">
            <div class="my-2">
                <p class="font-semibold text-3xl">{{ questions[currentQuestion].question }}</p>
            </div>
            <div class="my-2">
                <div 
                v-for="(choice , index) in questions[currentQuestion].choices" 
                :key="index"
                :ref="`answer-${index}`"
                :class="{'bg-sky-900 text-white font-bold': this.selctedAnswer == index}"
                class="border rounded-lg border-slate-500 p-3 my-3 cursor-pointer"
                @click="submitQuestion(index)">
                    <p>
                        {{ choice }}
                    </p>
                </div>
            </div>
            <div class="flex gap-3 items-center">
                <div class="border w-full rounded-xl overflow-hidden">
                    <div 
                    style="transition-duration: 0.3s;" 
                    :style="`width:${percentage}%`" 
                    class="bg-sky-900 text-white font-bold text-center w-1/2"
                    >{{ percentage }}%</div>
                </div>
                <button
                    v-if="currentQuestion == this.questions.length"
                    class="bg-rose-600 px-10 py-2 rounded-lg text-white text-xl"
                    @click="this.finishQuiz()"
                >Finish</button>
            </div>
        </div>
    </div>

</template>
<script>
export default {
    props : ['questions'],
    created(){
        this.percentage = this.perQuestion
        this.questions.sort(function(){ return Math.random() - 0.5; })
    },
    data(){
        return{
            selctedAnswer : null,
            currentQuestion : 0,
            perQuestion : 100 / this.questions.length,
            percentage : 0,
            score:0,
            log : []
        };
    },
    methods: {
        submitQuestion(index){
            if(this.currentQuestion != this.questions.length ){
                this.selctedAnswer = index
                if(index+1 == this.questions[this.currentQuestion].answer){
                    this.score += this.perQuestion
                }else{
                    // log logique here
                    let answer = {}
                    let corrcetAnswerIndex = this.questions[this.currentQuestion].answer - 1
                    answer['question'] = this.questions[this.currentQuestion].question
                    answer['wrong-answer'] = this.questions[this.currentQuestion].choices[index]
                    answer['correct-answer'] = this.questions[this.currentQuestion].choices[corrcetAnswerIndex]
                    answer['explanation'] = this.questions[this.currentQuestion].explanation
                    this.log.unshift(answer)
                }
                setTimeout(function(){
                    this.nextQuestion()
                }.bind(this),1000);
            }
        },
        nextQuestion(){
            this.currentQuestion += 1 
            this.selctedAnswer = null
            this.percentage += this.perQuestion
        },
        finishQuiz(){
            this.$emit('details',{
                'score' : this.score,
                'log' : this.log
            })
            this.$parent.activeStep = 2
        }
    },
}
</script>
<style>
</style>