<template>
    <nav class="flex space-between items-center bg-slate-800">
        <div class="flex items-center gap-5 px-2">
            <a href="#" class="text-xl text-white font-semibold">Vue</a>
            <ul >
                <li v-for="(page, index) in pages" :key="index">
                    <navbar-link
                        :page="page"
                        :isActive=" activePage === index "
                        @click.prevent="navLinkClick(index)"
                    ></navbar-link>
                </li>
            </ul>
        </div>
        <div class="px-2">
            <small>Prefered Theme <i>{{ theme }}</i></small>
        </div>
    </nav>
</template>
<script>
import NavbarLink from './NavbarLink.vue';
export default{
    components:{
        NavbarLink
    },
    props : ['theme','pages','activePage','navLinkClick']
}
</script>