(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{146:function(t,e,n){var content=n(157);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(51).default)("7174965a",content,!0,{sourceMap:!1})},147:function(t,e,n){var content=n(159);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(51).default)("542f030f",content,!0,{sourceMap:!1})},148:function(t,e,n){var content=n(161);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(51).default)("1b5215f3",content,!0,{sourceMap:!1})},149:function(t,e,n){var content=n(163);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(51).default)("26c9d79a",content,!0,{sourceMap:!1})},150:function(t,e,n){var content=n(165);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(51).default)("09eac232",content,!0,{sourceMap:!1})},153:function(t,e,n){"use strict";var r=n(3),o=n(14),l=n(20),c=n(93),f=n(53),d=n(9),k=n(36).f,h=n(54).f,m=n(8).f,x=n(154).trim,v=r.Number,y=v,_=v.prototype,N="Number"==l(n(66)(_)),w="trim"in String.prototype,C=function(t){var e=f(t,!1);if("string"==typeof e&&e.length>2){var n,r,o,l=(e=w?e.trim():x(e,3)).charCodeAt(0);if(43===l||45===l){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===l){switch(e.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+e}for(var code,c=e.slice(2),i=0,d=c.length;i<d;i++)if((code=c.charCodeAt(i))<48||code>o)return NaN;return parseInt(c,r)}}return+e};if(!v(" 0o1")||!v("0b1")||v("+0x1")){v=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof v&&(N?d(function(){_.valueOf.call(n)}):"Number"!=l(n))?c(new y(C(e)),n,v):C(e)};for(var I,T=n(6)?k(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),E=0;T.length>E;E++)o(y,I=T[E])&&!o(v,I)&&m(v,I,h(y,I));v.prototype=_,_.constructor=v,n(10)(r,"Number",v)}},154:function(t,e,n){var r=n(5),o=n(19),l=n(9),c=n(155),f="["+c+"]",d=RegExp("^"+f+f+"*"),k=RegExp(f+f+"*$"),h=function(t,e,n){var o={},f=l(function(){return!!c[t]()||"​"!="​"[t]()}),d=o[t]=f?e(m):c[t];n&&(o[n]=d),r(r.P+r.F*f,"String",o)},m=h.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(d,"")),2&e&&(t=t.replace(k,"")),t};t.exports=h},155:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},156:function(t,e,n){"use strict";var r=n(146);n.n(r).a},157:function(t,e,n){(t.exports=n(50)(!1)).push([t.i,".task-progress{position:relative;width:80%;border:1px solid #fff;color:#fff;border-radius:8px;margin-bottom:15px;display:flex;flex-direction:column;align-items:center}.progress-bar{position:absolute;border-radius:8px;height:100%;background-color:#4caf50;align-self:flex-start}.progress-value{z-index:1;font-size:1.5rem}",""])},158:function(t,e,n){"use strict";var r=n(147);n.n(r).a},159:function(t,e,n){(t.exports=n(50)(!1)).push([t.i,".new-task{margin:35px}.form-element{outline:none;font-size:2rem;border:1px solid #fff;padding:5px 10px 8px;color:#fff}input.form-element{width:500px;background:hsla(0,0%,100%,.13333);border-top-left-radius:8px;border-bottom-left-radius:8px}button.form-element{border-left:none;background-color:#2196f3;border-top-right-radius:8px;border-bottom-right-radius:8px}",""])},160:function(t,e,n){"use strict";var r=n(148);n.n(r).a},161:function(t,e,n){(t.exports=n(50)(!1)).push([t.i,".task{position:relative;box-sizing:border-box;width:350px;height:150px;padding:10px;border-radius:8px;font-size:2rem;font-weight:300;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:flex;justify-content:center;align-items:center}.pending{border-left:12px solid #b73229;background-color:#f44336}.done{color:#ddd;border-left:12px solid #0a8f08;background-color:#4caf50;text-decoration:line-through}.pending .close{background-color:#b73229}.done.close{background-color:#0a8f08}.close{position:absolute;right:10px;top:10px;font-size:.9rem;font-weight:600;height:20px;width:20px;border-radius:10px;display:flex;justify-content:center}",""])},162:function(t,e,n){"use strict";var r=n(149);n.n(r).a},163:function(t,e,n){(t.exports=n(50)(!1)).push([t.i,".task-grid{display:flex;justify-content:center;flex-wrap:wrap}.task-grid .task{margin:10px}.no-task{color:#aaa;font-size:1.7rem}",""])},164:function(t,e,n){"use strict";var r=n(150);n.n(r).a},165:function(t,e,n){(t.exports=n(50)(!1)).push([t.i,"body{font-family:Lato,sans-serif;background:#536976;background:linear-gradient(90deg,#292e49,#536976);color:#fff}#app{display:flex;flex:1;flex-direction:column;justify-content:center;align-items:center;height:100vh}#app h1{margin-bottom:5px;font-weight:300;font-size:3rem}",""])},170:function(t,e,n){"use strict";n.r(e);n(52),n(153);var r={props:{progress:{type:Number,default:0}}},o=(n(156),n(18)),l=Object(o.a)(r,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"task-progress"},[e("span",{staticClass:"progress-value"},[this._v(this._s(this.progress)+"%")]),this._v(" "),e("div",{staticClass:"progress-bar",style:{width:this.progress+"%"}})])},[],!1,null,null,null).exports,c={data:function(){return{name:""}},methods:{add:function(){this.$emit("taskAdded",{name:this.name}),this.name=""}}},f=(n(158),Object(o.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"new-task"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-element",attrs:{type:"text",placeholder:"O que fará hoje?"},domProps:{value:t.name},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.add(e)},input:function(e){e.target.composing||(t.name=e.target.value)}}}),t._v(" "),n("button",{staticClass:"form-element",on:{click:t.add}},[t._v("+")])])},[],!1,null,null,null).exports),d={props:{task:{type:Object,required:!0}},computed:{stateClass:function(){return{pending:this.task.pending,done:!this.task.pending}}}},k=(n(160),{components:{Task:Object(o.a)(d,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"task",class:t.stateClass,on:{click:function(e){return t.$emit("taskStateChange",t.task)}}},[n("span",{staticClass:"close",on:{click:function(e){return e.stopPropagation(),t.$emit("taskDeleted",t.task)}}},[t._v("x")]),t._v(" "),n("p",[t._v(t._s(t.task.name))])])},[],!1,null,null,null).exports},props:{tasks:{type:Array,required:!0}}}),h=(n(162),{components:{TaskProgress:l,NewTask:f,TaskGrid:Object(o.a)(k,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"task-grid"},[t.tasks.length?t._l(t.tasks,function(e,i){return n("Task",{key:e.name,attrs:{task:e},on:{taskStateChange:function(e){return t.$emit("taskStateChange",i)},taskDeleted:function(e){return t.$emit("taskDeleted",i)}}})}):n("p",{staticClass:"no-task"},[t._v(" Nothing to do :( ")])],2)},[],!1,null,null,null).exports},data:function(){return{tasks:[]}},computed:{progress:function(){var t=this.tasks.length,e=this.tasks.filter(function(t){return!t.pending}).length;return Math.round(e/t*100)||0}},watch:{tasks:{deep:!0,handler:function(){localStorage.setItem("tasks",JSON.stringify(this.tasks))}}},methods:{addTask:function(t){0==this.tasks.filter(function(e){return e.name===t.name}).length&&this.tasks.push({name:t.name,pending:t.pending||!0})},deleteTask:function(i){this.tasks.splice(i,1)},toggleTaskState:function(i){this.tasks[i].pending=!this.tasks[i].pending}},created:function(){var t=localStorage.getItem("tasks"),e=JSON.parse(t);this.tasks=Array.isArray(e)?e:[]}}),m=(n(164),Object(o.a)(h,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("h1",[t._v("To do list!")]),t._v(" "),n("TaskProgress",{attrs:{progress:t.progress}}),t._v(" "),n("NewTask",{on:{taskAdded:t.addTask}}),t._v(" "),n("TaskGrid",{attrs:{tasks:t.tasks},on:{taskDeleted:t.deleteTask,taskStateChange:t.toggleTaskState}})],1)},[],!1,null,null,null));e.default=m.exports}}]);