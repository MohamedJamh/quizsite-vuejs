<template>
    <div class="bg-white w-96 py-2 rounded-lg flex justify-around text-3xl mx-auto mt-10 mb-20">
        <span v-for="(step , index) in steps" :key="index"
            class="fa-solid"
            :class="step.icon"
            v-bind:class="{'text-rose-600': activeStep === index}"
        ></span>
    </div>
</template>

<script>
export default{
    props : ['steps','activeStep']
}
</script>

<style></style>