<template>
    <p>{{pages[0].content}}</p>
</template>

<script>
import PageViewer from './components/PageViewer.vue'

export default{
    components:{
        PageViewer
    },
    data(){
        return{
            activePage: 0,
            pages:[
                {
                    link : {text:'Home',url:'index.html'},
                    pageTitle:'lets Learn vuejs',
                    content : 'Vuejs is easy if you already now basic html javascript. So go for it'
                },
                {
                    link : {text:'About',url:'About.html'},
                    pageTitle:'About us',
                    content : 'We are students from youcode'
                },
                {
                    link : {text:'contact',url:'contact.html'},
                    pageTitle:'Contact us',
                    content : 'Visit our web site'
                },
            ]
        };
    }
}
</script>