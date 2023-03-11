<template>
    <a 
        class="text-sm"
        :class="activeClasses"
        :title="`This title goes to ${page.link.url}`"
        :href="page.link.url"
    >{{page.link.text}}</a>

</template>

<script>
export default{
    props : ['page','isActive'],
    computed:{
        activeClasses(){
            return{
                'text-white': this.isActive,
                emphasize : this.isActive 
            };
        }
    }
}
</script>

<style>
    .emphasize{
        text-decoration: underline;
    }
</style>