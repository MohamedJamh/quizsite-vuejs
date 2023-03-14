<template>
    <div class="bg-white w-fit h-fit p-8 rounded-lg">
        <div class="">
            <h2 class="text-4xl font-extrabold mb-5">Welcome To Quizsite!</h2>
            <p class="text-xl">Improve Your Skills In Several Technologies And Become a Master With Quizsite</p>
            <ul class="list-disc pl-8 text-xl leading-9">
                <li>Each question has four answers</li>
                <li>Each question has one and only one correct answer </li>
                <li>Your score will be shown at the end</li>
                <li>Good luck and remember <span class="underline">IF IT WORKS DON'T TOUCH IT</span></li>
            </ul>
            <div class="flex items-center justify-between my-4">
                <button 
                    class="bg-sky-900 px-5 py-2 rounded-lg text-white text-xl"
                    @click.prevent="this.$parent.startQuiz(this.choosedQuiz)"
                >Get Started</button>
                <select v-model="choosedQuiz" class="w-2/3 border py-2 outline-0 rounded-lg px-1" >
                    <option
                    v-for="(quiz , index) in this.quizes"
                    :key="index"
                    :value="quiz.pathName"
                    class="py-2 text-xl rounded-0 hover:bg-red"
                    >{{ quiz.name }}</option>
                    <label data-te-select-label-ref>Example label</label>
                </select>

            </div>
        </div>
    </div>
</template>

<script>
export default{
    props:["quizes"],
    data(){
        return{
            choosedQuiz : this.quizes[0].pathName
        }
    }
}
</script>

<style></style>