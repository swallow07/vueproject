import{g as N,u as M,q as O,h as v,l as U,L as $,M as z,a as u,o as b,c as k,b as s,w as e,f as t,i as a,N as E,O as F,P as L,k as d,F as R,d as A,m as G,t as i,p as P,e as T,_ as j}from"./index-35928c40.js";const c=p=>(P("data-v-7155c769"),p=p(),T(),p),H={class:"container"},J=c(()=>t("h1",{class:"tip"},"确认挂号信息",-1)),K={class:"card-header"},Q=c(()=>t("span",null,"请选择就诊人",-1)),W={class:"user"},X=c(()=>t("div",{class:"card-header"},[t("span",null,"挂号信息")],-1)),Y=c(()=>t("div",{class:"cell-item"},"就诊日期：",-1)),Z=c(()=>t("div",{class:"cell-item"},"就诊医院:",-1)),ee=c(()=>t("div",{class:"cell-item"},"就诊科室:",-1)),te=c(()=>t("div",{class:"cell-item"},"医生姓名:",-1)),se=c(()=>t("div",{class:"cell-item"},"医生职称",-1)),ae=c(()=>t("div",{class:"cell-item"},"医生专长:",-1)),le=c(()=>t("div",{class:"cell-item"},"医生服务费:",-1)),oe={style:{color:"red"}},ce={class:"btn"},ne=N({__name:"register_step2",setup(p){let y=M(),q=O(),l=v({}),m=v(-1),f=v([]);U(()=>{w(),C()});const w=async()=>{let o=await $();o.code==200&&(f.value=o.data)},C=async()=>{let o=await z(q.query.docId);o.code==200&&(l.value=o.data)},S=o=>{m.value=o},V=async()=>{let o=l.value.hoscode,I=l.value.id,h=f.value[m.value].id,_=await E(o,I,h);_.code==200?y.push({path:"/user/order",query:{orderId:_.data}}):F({type:"error",message:_.message})},B=()=>{y.push({path:"/user/patient",query:{type:"add"}})};return(o,I)=>{const h=u("el-button"),_=u("Visitor"),g=u("el-card"),r=u("el-descriptions-item"),D=u("el-descriptions");return b(),k("div",H,[J,s(g,{class:"box-card"},{header:e(()=>[t("div",K,[Q,s(h,{type:"primary",size:"default",icon:a(L),onClick:B},{default:e(()=>[d("添加就诊人")]),_:1},8,["icon"])])]),default:e(()=>[t("div",W,[(b(!0),k(R,null,A(a(f),(n,x)=>(b(),G(_,{onClick:de=>S(x),key:n.id,class:"item",user:n,index:x,currentIndex:a(m)},null,8,["onClick","user","index","currentIndex"]))),128))])]),_:1}),s(g,{class:"box-card"},{header:e(()=>[X]),default:e(()=>[s(D,{class:"margin-top",column:2,border:""},{default:e(()=>[s(r,null,{label:e(()=>[Y]),default:e(()=>[d(" "+i(a(l).workDate),1)]),_:1}),s(r,null,{label:e(()=>[Z]),default:e(()=>{var n;return[d(" "+i((n=a(l).param)==null?void 0:n.hosname),1)]}),_:1}),s(r,null,{label:e(()=>[ee]),default:e(()=>{var n;return[d(" "+i((n=a(l).param)==null?void 0:n.depname),1)]}),_:1}),s(r,null,{label:e(()=>[te]),default:e(()=>[d(" "+i(a(l).docname),1)]),_:1}),s(r,null,{label:e(()=>[se]),default:e(()=>[d(" "+i(a(l).title),1)]),_:1}),s(r,null,{label:e(()=>[ae]),default:e(()=>[d(" "+i(a(l).skill),1)]),_:1}),s(r,null,{label:e(()=>[le]),default:e(()=>[t("span",oe,i(a(l).amount),1)]),_:1})]),_:1})]),_:1}),t("div",ce,[s(h,{type:"primary",size:"default",disabled:a(m)==-1,onClick:V},{default:e(()=>[d("确认挂号")]),_:1},8,["disabled"])])])}}});const ie=j(ne,[["__scopeId","data-v-7155c769"]]);export{ie as default};
