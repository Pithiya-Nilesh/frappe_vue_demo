import{_ as u,D as g,d as m,l as n,w as s,b as r,t as d,r as c,o as _,q as l}from"./index.42109519.js";const f={name:"Home",data(){return{showDialog:!1}},resources:{ping:{method:"ping"}},components:{Dialog:g}},D={class:"max-w-3xl py-12 mx-auto"},h=l(" Click to send 'pong' request "),w=l("Open Dialog"),k=l(" Dialog content ");function C(o,e,V,$,t,v){const a=c("Button"),p=c("Dialog");return _(),m("div",D,[n(a,{"icon-left":"code",onClick:o.$resources.ping.fetch,loading:o.$resources.ping.loading},{default:s(()=>[h]),_:1},8,["onClick","loading"]),r("div",null,d(o.$resources.ping.data),1),r("pre",null,d(o.$resources.ping),1),n(a,{onClick:e[0]||(e[0]=i=>t.showDialog=!0)},{default:s(()=>[w]),_:1}),n(p,{title:"Title",modelValue:t.showDialog,"onUpdate:modelValue":e[1]||(e[1]=i=>t.showDialog=i)},{default:s(()=>[k]),_:1},8,["modelValue"])])}var x=u(f,[["render",C]]);export{x as default};
