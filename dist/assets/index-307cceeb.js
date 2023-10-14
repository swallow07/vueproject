import{g as L,h as v,Q,l as X,R as Z,T as G,a as i,o as _,m as b,w as e,f as c,b as a,i as l,A as J,k as d,t as x,K as F,c as k,d as W,F as Y,j as ee,O as U,U as te,p as ae,e as le,_ as oe}from"./index-35928c40.js";const se="/assets/auth_example-9b25c4a0.png",h=g=>(ae("data-v-8a9b60a0"),g=g(),le(),g),re=h(()=>c("div",{class:"card-header"},[c("h1",null,"实名信息")],-1)),ie={class:"tip",style:{color:"#7f7f7f"}},ne=h(()=>c("div",{class:"cell-item"}," 用户姓名 ",-1)),ce=h(()=>c("div",{class:"cell-item"}," 证件类型 ",-1)),de=h(()=>c("div",{class:"cell-item"}," 证件号码 ",-1)),ue=h(()=>c("img",{style:{width:"100%",height:"100%"},src:se,alt:""},null,-1)),pe=["src"],_e=L({__name:"index",setup(g){let V=v(),w=v(),u=v({}),N=v([]),f=v(!1),s=Q({certificatesNo:"",certificatesType:"",certificatesUrl:"",name:""});X(()=>{T(),E()});const T=async()=>{let r=await Z();r.code==200&&(u.value=r.data)},E=async()=>{let r=await G();r.code==200&&(N.value=r.data)},I=()=>{U({type:"error",message:"最多只能上传一张图片"})},q=(r,t,o)=>{w.value.clearValidate(),s.certificatesUrl=r.data},D=()=>{f.value=!0},S=()=>{s.certificatesUrl=""},O=()=>{V.value.clearFiles(),Object.assign(s,{certificatesNo:"",certificatesType:"",certificatesUrl:"",name:""})},z=async()=>{await w.value.validate();try{await te(s),U({type:"success",message:"认证成功"}),T()}catch{U({type:"error",message:"认证失败"})}},A={name:[{required:!0,validator:(r,t,o)=>{/^[\u00B7\u3007\u3400-\u4DBF\u4E00-\u9FFF\uE000-\uF8FF\uD840-\uD8C0\uDC00-\uDFFF\uF900-\uFAFF]+$/.test(t)?o():o(new Error("请输入正确姓名"))}}],certificatesType:[{required:!0,validator:(r,t,o)=>{t=="10"||t=="20"?o():o(new Error("请选择证件类型"))}}],certificatesNo:[{required:!0,validator:(r,t,o)=>{let p=/^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,m=/^[a-zA-Z0-9]{3,21}$/;p.test(t)||m.test(t)?o():o(new Error("请输入正确的证件号"))}}],certificatesUrl:[{required:!0,validator:(r,t,o)=>{t.length?o():o(new Error("请上传证件照图片"))}}]};return(r,t)=>{const o=i("el-icon"),p=i("el-button"),m=i("el-descriptions-item"),P=i("el-descriptions"),C=i("el-input"),y=i("el-form-item"),R=i("el-option"),j=i("el-select"),B=i("el-upload"),M=i("el-dialog"),$=i("el-form"),H=i("el-card");return _(),b(H,{class:"box-card"},{header:e(()=>[re]),default:e(()=>[c("div",ie,[c("p",null,[a(o,null,{default:e(()=>[a(l(J))]),_:1}),d(" 完成实名认证后才能添加就诊人,正常进行挂号,为不影响后续步骤,建议提前实名认证")])]),l(u).authStatus==1?(_(),b(P,{key:0,class:"margin-top",column:1,border:"",style:{margin:"20px auto"},size:"small"},{extra:e(()=>[a(p,{type:"primary"},{default:e(()=>[d("Operation")]),_:1})]),default:e(()=>[a(m,{"label-align":"center",width:"10px"},{label:e(()=>[ne]),default:e(()=>[d(" "+x(l(u).name),1)]),_:1}),a(m,{"label-align":"center",width:"10px"},{label:e(()=>[ce]),default:e(()=>[d(" "+x(l(u).certificatesType=="10"?"身份证":"户口本"),1)]),_:1}),a(m,{"label-align":"center",width:"10px"},{label:e(()=>[de]),default:e(()=>[d(" "+x(l(u).certificatesNo),1)]),_:1})]),_:1})):F("",!0),l(u).authStatus==0?(_(),b($,{key:1,style:{width:"60%",margin:"20px auto"},"label-width":"80",model:l(s),rules:A,ref_key:"form",ref:w},{default:e(()=>[a(y,{label:"用户姓名",prop:"name"},{default:e(()=>[a(C,{placeholder:"请输入用户姓名",modelValue:l(s).name,"onUpdate:modelValue":t[0]||(t[0]=n=>l(s).name=n)},null,8,["modelValue"])]),_:1}),a(y,{label:"证件类型",prop:"certificatesType"},{default:e(()=>[a(j,{style:{width:"100%"},placeholder:"请选择证件类型",modelValue:l(s).certificatesType,"onUpdate:modelValue":t[1]||(t[1]=n=>l(s).certificatesType=n)},{default:e(()=>[(_(!0),k(Y,null,W(l(N),(n,K)=>(_(),b(R,{label:n.name,value:n.value,key:K},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(y,{label:"证件号码",prop:"certificatesNo"},{default:e(()=>[a(C,{placeholder:"请输入证件号码",modelValue:l(s).certificatesNo,"onUpdate:modelValue":t[2]||(t[2]=n=>l(s).certificatesNo=n)},null,8,["modelValue"])]),_:1}),a(y,{label:"上传证件",prop:"certificatesUrl"},{default:e(()=>[a(B,{ref_key:"upload",ref:V,"list-type":"picture-card",action:"/api/oss/file/fileUpload?fileHost=userAuah",limit:1,"on-exceed":I,"on-success":q,"on-preview":D,"on-remove":S},{default:e(()=>[ue]),_:1},512),a(M,{modelValue:l(f),"onUpdate:modelValue":t[3]||(t[3]=n=>ee(f)?f.value=n:f=n)},{default:e(()=>[l(s).certificatesUrl?(_(),k("img",{key:0,"w-full":"",src:l(s).certificatesUrl,alt:"Preview Image",style:{width:"100%",height:"100%"}},null,8,pe)):F("",!0)]),_:1},8,["modelValue"])]),_:1}),a(y,null,{default:e(()=>[a(p,{type:"primary",size:"default",onClick:z},{default:e(()=>[d("提交")]),_:1}),a(p,{onClick:O},{default:e(()=>[d("重置")]),_:1})]),_:1})]),_:1},8,["model"])):F("",!0)]),_:1})}}});const ge=oe(_e,[["__scopeId","data-v-8a9b60a0"]]);export{ge as default};
