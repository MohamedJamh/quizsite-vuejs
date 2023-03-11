<template>
    <navbar
        :theme="theme"
        :activePage="activePage"
        :pages="pages"
        :nav-link-click="(index) => activePage = index"
    ></navbar>

    <page-viewer
        v-if="pages.length > 0"
        :page="pages[activePage]"
    ></page-viewer>
</template>
<script>
import Navbar from './components/Navbar.vue';
import PageViewer from './components/PageViewer.vue';

export default{
    components:{
        Navbar,
        PageViewer
    },
    created(){
        this.getPages();
        this.getThemeSettings()
    },
    data(){
        return{
            theme: '-',
            activePage: 0,
            pages: []
        };
    },
    methods:{
        async getPages(){
            let res = await fetch('page.json')
            let data = await res.json();

            this.pages = data
        },
        getThemeSettings(){
            let theme = localStorage.getItem('theme')
            if(theme){
                this.theme = theme
            }
        }
    }
}
</script>