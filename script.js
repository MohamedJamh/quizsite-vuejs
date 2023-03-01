
let app = Vue.createApp({
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
})
app.component('page-content',{
    props : ['page'],
    template : `
        <div>
            <h1 class="text-3xl">{{page.pageTitle}}</h1>
            <p>{{page.content}}</p>
        </div>
    `
})

app.mount('#app');
