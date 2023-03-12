<template>
    <div class="bg-white w-fit h-fit p-8 rounded-lg">
        <div class="">
            <h2 class="text-4xl font-extrabold mb-5">Welcome To <span>PHP Quiz</span>!</h2>
            <p class="text-xl">Improve Your Skills In PHP And Become a Master With Quizsite</p>
            <ul class="list-disc pl-8 text-xl leading-9">
                <li>Each question has four answers</li>
                <li>Each question has one and only one correct answer </li>
                <li>Your score will be shown at the end</li>
                <li>Good luck and remember IF IT WORKS DON'T TOUCH IT</li>
            </ul>
            <button 
                class="bg-sky-900 px-5 py-2 rounded-lg text-white text-xl mt-8"
                @click.prevent="this.$parent.startQuiz()"
            >Get Started</button>
        </div>
    </div>
</template>

<script>
export default{
    props : ['startQuiz'],
    methods: {
    }
}
</script>

<style></style>