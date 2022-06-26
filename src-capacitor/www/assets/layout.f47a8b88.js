var V=Object.defineProperty,A=Object.defineProperties;var N=Object.getOwnPropertyDescriptors;var D=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var S=(t,u,e)=>u in t?V(t,u,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[u]=e,m=(t,u)=>{for(var e in u||(u={}))T.call(u,e)&&S(t,e,u[e]);if(D)for(var e of D(u))I.call(u,e)&&S(t,e,u[e]);return t},d=(t,u)=>A(t,N(u));import{u as F}from"./specialist.8713490f.js";import{a4 as w,bD as U,Q as i,aG as s,x as v,ay as g,W as b,a2 as c,V as C,k as R,U as E,b1 as h,X as L,a1 as B,bs as $,bx as z,D as j}from"./index.53588f62.js";import{u as q,b as P}from"./base.686dbe64.js";import{S as x}from"./roles.61f7d6b9.js";import{u as G}from"./toasts.113f48d8.js";import{api as O}from"./api.50e126cb.js";import"./_commonjsHelpers.2cf1d77b.js";const Q={key:0,class:"specialist-page-company-picker"},W=w({name:"CompanyPicker",setup(t){const u=U(),e=q(),o=P(),p=i(()=>o.role),_=i(()=>p.value.name===x),n=i(()=>o.companyId),r=i(()=>[...o.positions.map(a=>d(m({},a),{title:a.company.name})),{title:"\u0421\u0442\u0432\u043E\u0440\u0438\u0442\u0438 \u043D\u043E\u0432\u0443 \u043A\u043E\u043C\u043F\u0430\u043D\u0456\u044E",id:0}]),l=i(()=>r.value.find(a=>a.company.id===n.value));async function f(a){if(a.id===0)return u.push({name:"companyCreate"});await e.refreshTokenByPosition(a);const{href:y}=u.resolve({name:"dashboard"});window.location.href=y}return(a,y)=>{const k=s("UiSelect");return v(_)?(g(),b("div",Q,[c(k,{"model-value":v(l),options:v(r),"label-key":"title",placeholder:"\u0412\u0430\u0448\u0456 \u043A\u043E\u043C\u043F\u0430\u043D\u0456\u0457","onUpdate:modelValue":f},null,8,["model-value","options"])])):C("",!0)}}});const X=L("strong",null,"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F \u043D\u0435 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0430!",-1),H=B(" \u0412\u0456\u0434\u043F\u0440\u0430\u0432\u0438\u0442\u0438 \u0421\u041C\u0421 \u0437 \u043F\u043E\u0441\u0438\u043B\u0430\u043D\u044F\u043C \u0434\u043B\u044F \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u044F \u0440\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u0457? "),J=B(" \u0412\u0456\u0434\u043F\u0440\u0430\u0432\u0438\u0442\u0438 "),K=w({name:"PhoneConfirmation",props:{specialist:{type:Object,required:!0}},setup(t){const u=t,e=G(),o=R(!1),p=i(()=>u.specialist.user.active===!1);async function _(){try{o.value=!0,await O.specialist.sendFinishLink(u.specialist.id),e.show({title:"\u0412\u0456\u0434\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043E"})}catch(n){if(n.status===400){e.show({title:"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F \u0432\u0436\u0435 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0430",type:"error"});return}if(n.status===403){e.show({title:"\u0422\u0430\u043A\u043E\u0433\u043E \u0441\u043F\u0435\u0446\u0456\u0430\u043B\u0456\u0441\u0442\u0430 \u043D\u0435 \u0456\u0441\u043D\u0443\u0454",type:"error"});return}throw n}finally{o.value=!1}}return(n,r)=>{const l=s("UiButton"),f=s("UiAlert");return v(p)?(g(),E(f,{key:0,theme:"warning",class:"specialist-page-phone-confirmation"},{append:h(()=>[c(l,{size:"s",theme:"yellow",loading:o.value,onClick:_},{default:h(()=>[J]),_:1},8,["loading"])]),default:h(()=>[X,H]),_:1})):C("",!0)}}});const M={components:{CompanyPicker:W,PhoneConfirmation:K},async preFetch({currentRoute:t}){const u=Number(t.params.slug),e=F();await e.fetch(u),await e.fetchAvatars()},setup(){const t=z(),u=U(),e=P(),o=F(),p=i(()=>[{name:"\u0406\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044F",to:d(m({},t),{name:"specialistInfo"})},{name:"\u0416\u0443\u0440\u043D\u0430\u043B \u0437\u0430\u043F\u0438\u0441\u0456\u0432",to:d(m({},t),{name:"specialistSchedule"})},{name:"\u041F\u043E\u0441\u043B\u0443\u0433\u0438",to:d(m({},t),{name:"specialistProcedures"})},{name:"\u041D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F",to:d(m({},t),{name:"specialistSettings"})}].filter(Boolean)),_=i(()=>o.specialist),n=i(()=>e.role),r=i(()=>n.value.name!==x);async function l(){await u.push({name:"specialists"})}return{navigation:p,specialist:_,onBack:l,hasBack:r}}},Y={class:"specialist-page-layout"};function Z(t,u,e,o,p,_){const n=s("UiBack"),r=s("UiTitle"),l=s("PhoneConfirmation"),f=s("CompanyPicker"),a=s("UiNavigation"),y=s("RouterView"),k=s("UiContainer");return g(),b("div",Y,[c(k,{narrow:""},{default:h(()=>[o.hasBack?(g(),E(n,{key:0,class:"specialist-page-layout__back",onClick:o.onBack},null,8,["onClick"])):C("",!0),c(r,{class:"specialist-page-layout__title",size:"l",responsive:""},{default:h(()=>[B(j(o.specialist.user.fullName),1)]),_:1}),c(l,{specialist:o.specialist,class:"specialist-page-layout__phone-confirmation"},null,8,["specialist"]),c(f,{class:"specialist-page-layout__company-picker"}),c(a,{class:"specialist-page-layout__navigation",navigation:o.navigation},null,8,["navigation"]),c(y)]),_:1})])}var cu=$(M,[["render",Z]]);export{cu as default};