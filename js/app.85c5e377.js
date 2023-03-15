(function(){"use strict";var e={4875:function(e,t,s){var i=s(9242),n=s(3396);const o={class:"flex justify-center"};function r(e,t,s,i,r,u){const l=(0,n.up)("stepper"),a=(0,n.up)("info"),c=(0,n.up)("questions"),d=(0,n.up)("score");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",null,[(0,n.Wm)(l,{"active-step":r.activeStep,steps:r.steps},null,8,["active-step","steps"])]),(0,n._)("main",o,[0==r.activeStep?((0,n.wg)(),(0,n.j4)(a,{key:0,quizes:r.quizes},null,8,["quizes"])):(0,n.kq)("",!0),1==r.activeStep?((0,n.wg)(),(0,n.j4)(c,{key:1,questions:r.questions,onDetails:u.onFinish},null,8,["questions","onDetails"])):(0,n.kq)("",!0),2==r.activeStep?((0,n.wg)(),(0,n.j4)(d,{key:2,"choosed-quiz":r.choosedQuiz,details:r.details},null,8,["choosed-quiz","details"])):(0,n.kq)("",!0)])],64)}var u=s(7139);const l={class:"bg-white w-96 py-2 rounded-lg flex justify-around text-3xl mx-auto mt-10 mb-20"};function a(e,t,s,i,o,r){return(0,n.wg)(),(0,n.iD)("div",l,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(s.steps,((e,t)=>((0,n.wg)(),(0,n.iD)("span",{key:t,class:(0,u.C_)(["fa-solid",e.icon,{"text-rose-600":s.activeStep===t}])},null,2)))),128))])}var c={props:["steps","activeStep"]},d=s(89);const h=(0,d.Z)(c,[["render",a]]);var p=h;const f={class:"bg-white w-fit h-fit p-8 rounded-lg"},g={class:""},w=(0,n._)("h2",{class:"text-4xl font-extrabold mb-5"},"Welcome To Quizsite!",-1),v=(0,n._)("p",{class:"text-xl"},"Improve Your Skills In Several Technologies And Become a Master With Quizsite",-1),x=(0,n._)("ul",{class:"list-disc pl-8 text-xl leading-9"},[(0,n._)("li",null,"Each question has four answers"),(0,n._)("li",null,"Each question has one and only one correct answer "),(0,n._)("li",null,"Your score will be shown at the end"),(0,n._)("li",null,[(0,n.Uk)("Good luck and remember "),(0,n._)("span",{class:"underline"},"IF IT WORKS DON'T TOUCH IT")])],-1),b={class:"flex items-center justify-between my-4"},m=["value"],y=(0,n._)("label",{"data-te-select-label-ref":""},"Example label",-1);function q(e,t,s,o,r,l){return(0,n.wg)(),(0,n.iD)("div",f,[(0,n._)("div",g,[w,v,x,(0,n._)("div",b,[(0,n._)("button",{class:"bg-sky-900 px-5 py-2 rounded-lg text-white text-xl",onClick:t[0]||(t[0]=(0,i.iM)((e=>this.$parent.startQuiz(this.choosedQuiz)),["prevent"]))},"Get Started"),(0,n.wy)((0,n._)("select",{"onUpdate:modelValue":t[1]||(t[1]=e=>r.choosedQuiz=e),class:"w-2/3 border py-2 outline-0 rounded-lg px-1"},[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(this.quizes,((e,t)=>((0,n.wg)(),(0,n.iD)("option",{key:t,value:e.pathName,class:"py-2 text-xl rounded-0 hover:bg-red"},(0,u.zw)(e.name),9,m)))),128)),y],512),[[i.bM,r.choosedQuiz]])])])])}var _={props:["quizes"],data(){return{choosedQuiz:this.quizes[0].pathName}}};const Q=(0,d.Z)(_,[["render",q]]);var z=Q;const k={class:"container"},j={class:"bg-white w-full rounded-lg p-5"},D={class:"my-2"},S={class:"font-semibold text-3xl"},O={class:"my-2"},C=["onClick"],T={class:"flex gap-3 items-center"},Y={class:"border w-full rounded-xl overflow-hidden"};function $(e,t,s,i,o,r){return(0,n.wg)(),(0,n.iD)("div",k,[(0,n._)("div",j,[(0,n._)("div",D,[(0,n._)("p",S,(0,u.zw)(s.questions[o.currentQuestion].question),1)]),(0,n._)("div",O,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(s.questions[o.currentQuestion].choices,((e,t)=>((0,n.wg)(),(0,n.iD)("div",{key:t,ref_for:!0,ref:`answer-${t}`,class:(0,u.C_)([{"bg-sky-900 text-white font-bold":this.selctedAnswer==t},"border rounded-lg border-slate-500 p-3 my-3 cursor-pointer"]),onClick:e=>r.submitQuestion(t)},[(0,n._)("p",null,(0,u.zw)(e),1)],10,C)))),128))]),(0,n._)("div",T,[(0,n._)("div",Y,[(0,n._)("div",{style:(0,u.j5)([{"transition-duration":"0.3s"},`width:${o.percentage}%`]),class:"bg-sky-900 text-white font-bold text-center w-1/2"},(0,u.zw)(o.percentage)+"%",5)]),o.currentQuestion==this.questions.length?((0,n.wg)(),(0,n.iD)("button",{key:0,class:"bg-rose-600 px-10 py-2 rounded-lg text-white text-xl",onClick:t[0]||(t[0]=e=>this.finishQuiz())},"Finish")):(0,n.kq)("",!0)])])])}s(541);var H={props:["questions"],created(){this.percentage=this.perQuestion,this.questions.sort((function(){return Math.random()-.5}))},data(){return{selctedAnswer:null,currentQuestion:0,perQuestion:100/this.questions.length,percentage:0,score:0,log:[]}},methods:{submitQuestion(e){if(this.selctedAnswer=e,e+1==this.questions[this.currentQuestion].answer)this.score+=this.perQuestion;else{let t={},s=this.questions[this.currentQuestion].answer-1;t["question"]=this.questions[this.currentQuestion].question,t["wrong-answer"]=this.questions[this.currentQuestion].choices[e],t["correct-answer"]=this.questions[this.currentQuestion].choices[s],t["explanation"]=this.questions[this.currentQuestion].explanation,this.log.unshift(t)}setTimeout(function(){this.nextQuestion()}.bind(this),1e3)},nextQuestion(){console.log(this.currentQuestion),this.currentQuestion+=1,this.selctedAnswer=null,this.percentage+=this.perQuestion,this.currentQuestion===this.questions.length&&this.finishQuiz()},finishQuiz(){this.$emit("details",{score:this.score,log:this.log}),this.$parent.activeStep=2}}};const A=(0,d.Z)(H,[["render",$]]);var E=A;const F={class:"bg-white container text-left rounded-xl px-5 py-3"},I={class:"text-3xl my-2 font-bold"},K={class:"border-2 border-slate-200 rounded-lg mx-2 p-5 my-5"},M={class:"text-2xl"},N={class:"text-lg"},Z={class:"block my-2 px-3 py-2 bg-rose-400 text-white rounded-lg"},P={class:"block my-2 px-3 py-2 bg-green-400 text-white rounded-lg"},U={class:"block my-2"},W=(0,n._)("em",{class:"underline"},"Explanation",-1),G={key:1,class:"text-center text-3xl"},J={class:"flex gap-5 justify-end my-3"},V=(0,n._)("i",{class:"fa-solid fa-repeat"},null,-1),B=[V],R=(0,n._)("i",{class:"fa-solid fa-right-from-bracket"},null,-1),L=[R];function X(e,t,s,i,o,r){return(0,n.wg)(),(0,n.iD)("div",F,[(0,n._)("p",I,"Your Score is : "+(0,u.zw)(this.details.score)+"% ",1),(0,n._)("div",null,[0!=this.details.log.length?((0,n.wg)(!0),(0,n.iD)(n.HY,{key:0},(0,n.Ko)(this.details.log,(e=>((0,n.wg)(),(0,n.iD)("div",K,[(0,n._)("p",M,(0,u.zw)(e.question),1),(0,n._)("div",N,[(0,n._)("span",Z,(0,u.zw)(e["wrong-answer"]),1),(0,n._)("span",P,(0,u.zw)(e["correct-answer"]),1),(0,n._)("span",U,[W,(0,n.Uk)(" : "+(0,u.zw)(e["explanation"]),1)])])])))),256)):((0,n.wg)(),(0,n.iD)("div",G,"**Good Job**"))]),(0,n._)("div",J,[(0,n._)("button",{class:"bg-rose-600 px-10 py-2 rounded-lg text-white text-xl",onClick:t[0]||(t[0]=e=>this.$parent.startQuiz(this.choosedQuiz))},B),(0,n._)("button",{class:"bg-rose-600 px-10 py-2 rounded-lg text-white text-xl",onClick:t[1]||(t[1]=e=>r.quitQuiz())},L)])])}var ee={props:["questions","details","choosedQuiz"],methods:{quitQuiz(){this.$parent.activeStep=0}}};const te=(0,d.Z)(ee,[["render",X]]);var se=te,ie={components:{stepper:p,info:z,questions:E,score:se},created(){},data(){return{choosedQuiz:null,questions:[],activeStep:0,steps:[{icon:"fa-info"},{icon:"fa-code"},{icon:"fa-list-check"}],quizes:[{name:"PHP",pathName:"php"},{name:"VueJs",pathName:"vuejs"}],details:{}}},methods:{async getQuestions(e){let t=await fetch(`${e}.json`);this.questions=await t.json()},async startQuiz(e){this.choosedQuiz=e,await this.getQuestions(e),this.activeStep=1},onFinish(e){this.details=e}}};const ne=(0,d.Z)(ie,[["render",r]]);var oe=ne;(0,i.ri)(oe).mount("#app")}},t={};function s(i){var n=t[i];if(void 0!==n)return n.exports;var o=t[i]={exports:{}};return e[i](o,o.exports,s),o.exports}s.m=e,function(){var e=[];s.O=function(t,i,n,o){if(!i){var r=1/0;for(c=0;c<e.length;c++){i=e[c][0],n=e[c][1],o=e[c][2];for(var u=!0,l=0;l<i.length;l++)(!1&o||r>=o)&&Object.keys(s.O).every((function(e){return s.O[e](i[l])}))?i.splice(l--,1):(u=!1,o<r&&(r=o));if(u){e.splice(c--,1);var a=n();void 0!==a&&(t=a)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[i,n,o]}}(),function(){s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,{a:t}),t}}(),function(){s.d=function(e,t){for(var i in t)s.o(t,i)&&!s.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};s.O.j=function(t){return 0===e[t]};var t=function(t,i){var n,o,r=i[0],u=i[1],l=i[2],a=0;if(r.some((function(t){return 0!==e[t]}))){for(n in u)s.o(u,n)&&(s.m[n]=u[n]);if(l)var c=l(s)}for(t&&t(i);a<r.length;a++)o=r[a],s.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return s.O(c)},i=self["webpackChunkquizsite_vuejs"]=self["webpackChunkquizsite_vuejs"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=s.O(void 0,[998],(function(){return s(4875)}));i=s.O(i)})();
//# sourceMappingURL=app.85c5e377.js.map