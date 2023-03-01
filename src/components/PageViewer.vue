<template>
    <div>
        <h1 class="text-3xl">{{page.pageTitle}}</h1>
        <p>{{page.content}}</p>
    </div>
</template>

<script>
export default{
    props : ['page']
}
</script>