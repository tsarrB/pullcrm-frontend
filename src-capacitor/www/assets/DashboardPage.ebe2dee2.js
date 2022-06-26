import{b as D,u as F}from"./base.bf638541.js";import{u as $}from"./analytics.cfdf7f39.js";import{u as P}from"./quasar.esm.prod.c88b943c.js";import{f as I}from"./money.dd3f296a.js";import{_ as N}from"./InfoPanel.7748dd80.js";import{a4 as x,Q as n,aG as t,x as r,ay as c,W as U,a2 as e,b1 as s,X as E,I as A,aE as B,U as g,a1 as _,D as C,ak as w,V as T,A as S,br as k}from"./index.90ead00b.js";import{u as V}from"./popup.f1a4d1c1.js";import{A as j}from"./roles.61f7d6b9.js";import"./dayjs.228bf609.js";import{d as M}from"./isTomorrow.a3ceb101.js";import"./_commonjsHelpers.2cf1d77b.js";const Q={key:0,class:"dashboard-page-numbers"},q=_(" \u041E\u0433\u043B\u044F\u0434 "),G={class:"ui-grid"},K=x({setup(p){const a=$(),u=n(()=>a.simpleStats),o=n(()=>u.value.dayTotal),h=n(()=>u.value.monthTotal),m=n(()=>u.value.monthAverage),i=n(()=>[{name:"\u0414\u043E\u0445\u0456\u0434 \u0437\u0430 \u0441\u044C\u043E\u0433\u043E\u0434\u043D\u0456",total:o.value,theme:"blue",icon:"solid/sun-horizon-fill"},{name:"\u0414\u043E\u0445\u0456\u0434 \u0437\u0430 \u043F\u043E\u0442\u043E\u0447\u043D\u0438\u0439 \u043C\u0456\u0441\u044F\u0446\u044C",total:h.value,theme:"green",icon:"solid/calendar-fill"},{name:"\u0421\u0435\u0440\u0435\u0434\u043D\u0456\u0439 \u0447\u0435\u043A \u0437\u0430 \u043C\u0456\u0441\u044F\u0446\u044C",total:m.value,theme:"yellow",icon:"solid/receipt-fill"}]);return(d,f)=>{const v=t("UiTitle"),b=t("UiText");return r(u)?(c(),U("div",Q,[e(v,{class:"dashboard-page-numbers__title",size:"s",responsive:""},{default:s(()=>[q]),_:1}),E("div",G,[(c(!0),U(A,null,B(r(i),(l,y)=>(c(),g(N,w({key:`item-${y}`,class:["ui-grid-item","ui-grid-item_12","ui-grid-item_tablet_6","ui-grid-item_laptop_4"]},l),{default:s(()=>[e(b,{size:"m",responsive:""},{default:s(()=>[_(C(l.name),1)]),_:2},1024),e(v,{size:"s",responsive:""},{default:s(()=>[_(C(r(I)(l.total)),1)]),_:2},1024)]),_:2},1040))),128))])])):T("",!0)}}});const L={class:"dashboard-page-company__avatar"},O=x({props:{position:{type:Object,required:!0}},setup(p){const a=p,u=D(),o=n(()=>a.position.company),h=n(()=>{var f;return(f=o.value.logo)==null?void 0:f.path}),m=n(()=>[o.value.city.name,o.value.address].filter(Boolean).join(", ")),i=n(()=>u.companyId),d=n(()=>o.value.id===i.value);return(f,v)=>{const b=t("UiAvatar"),l=t("UiIcon"),y=t("UiText"),z=t("UiPanel");return c(),g(z,{class:S(["dashboard-page-company",{_active:r(d)}]),size:"s",responsive:""},{default:s(()=>[E("div",L,[e(b,{image:r(h),name:r(o).name,size:"m"},null,8,["image","name"]),r(d)?(c(),g(l,{key:0,name:"solid/check-circle-fill",size:"s"})):T("",!0)]),e(y,{class:"dashboard-page-company__name",size:"l",strong:"",responsive:""},{default:s(()=>[_(C(r(o).name),1)]),_:1}),e(y,{class:"dashboard-page-company__type",size:"m",responsive:""},{default:s(()=>[_(C(r(o).type.name),1)]),_:1}),e(y,{class:"dashboard-page-company__address",size:"m","left-icon":"solid/map-pin-fill",responsive:""},{default:s(()=>[_(C(r(m)),1)]),_:1})]),_:1},8,["class"])}}});const W={},X=_(" \u0414\u043E\u0434\u0430\u0442\u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0456\u044E ");function H(p,a){const u=t("UiText"),o=t("UiPanel");return c(),g(o,{class:"dashboard-page-company-button",to:{name:"companyCreate"},size:"s",responsive:""},{default:s(()=>[e(u,{size:"m",responsive:"","right-icon":"outlined/plus"},{default:s(()=>[X]),_:1})]),_:1})}var J=k(W,[["render",H]]);const R={class:"dashboard-page-companies"},Y=_(" \u041C\u043E\u0457 \u043A\u043E\u043C\u043F\u0430\u043D\u0456\u0457 "),Z=x({setup(p){const a=F(),u=D(),o=n(()=>u.companyId),h=n(()=>u.positions);async function m(i){i.company.id!==o.value&&(await a.refreshTokenByPosition(i),location.reload())}return(i,d)=>{const f=t("UiTitle"),v=t("UiCarouselItem"),b=t("UiCarousel");return c(),U("div",R,[e(f,{class:"dashboard-page-companies__title",size:"s",responsive:""},{default:s(()=>[Y]),_:1}),e(b,{class:"dashboard-page-companies__carousel"},{default:s(()=>[(c(!0),U(A,null,B(r(h),l=>(c(),g(v,{key:`company-${l.company.id}`},{default:s(()=>[e(O,{position:l,onClick:y=>m(l)},null,8,["position","onClick"])]),_:2},1024))),128)),e(v,null,{default:s(()=>[e(J)]),_:1})]),_:1})])}}});var ee="assets/money-draw.3f97e69b.svg";const te=_(" \u0417\u0431\u0438\u0440\u0430\u0454\u043C\u043E \u0433\u0440\u043E\u0448\u0456 \u043D\u0430 \u0444\u0443\u043D\u043A\u0446\u0456\u043E\u043D\u0430\u043B \u0441\u043F\u0438\u0441\u043A\u0443 \u043A\u043B\u0456\u0454\u043D\u0442\u0456\u0432 \u043A\u043E\u043C\u043F\u0430\u043D\u0456\u0457! "),se=E("img",{class:"dashboard-donate-banner__image",src:ee},null,-1),oe={class:"dashboard-donate-banner__actions"},ue=_(" \u0414\u043E\u043F\u043E\u043C\u043E\u0433\u0442\u0438 \u043F\u0440\u043E\u0435\u043A\u0442\u0443 "),ne=x({setup(p){const a=V();async function u(){await a.askQuestion({title:"\u041C\u0438 \u043F\u0435\u0440\u0435\u043D\u0430\u043F\u0440\u0430\u0432\u0438\u043C\u043E \u0432\u0430\u0441 \u043D\u0430 \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0443 \u0434\u043E\u043D\u0430\u0442\u0456\u0432",acceptButtonTitle:"\u0412\u0456\u0434\u043A\u0440\u0438\u0442\u0438"})&&window.open("https://send.monobank.ua/jar/8KENSAmnm","_blank")}return(o,h)=>{const m=t("UiTitle"),i=t("UiButton"),d=t("UiPanel");return c(),g(d,{class:"dashboard-donate-banner",size:"m",responsive:""},{default:s(()=>[e(m,{class:"dashboard-donate-banner__title",size:"xl",responsive:""},{default:s(()=>[te]),_:1}),se,E("div",oe,[e(i,{theme:"yellow",responsive:"",onClick:u},{default:s(()=>[ue]),_:1})])]),_:1})}}});const ae={components:{Numbers:K,Companies:Z,DonateBanner:ne},async preFetch(){const p=D(),a=$();p.role.name===j&&await a.fetchSimpleStats({date:M()})},setup(){P({title:"\u0413\u043E\u043B\u043E\u0432\u043D\u0438\u0439 \u0434\u0430\u0448\u0431\u043E\u0440\u0434 - pullcrm"})}},ie={class:"dashboard-page"},re={class:"ui-grid"};function ce(p,a,u,o,h,m){const i=t("Companies"),d=t("Numbers"),f=t("DonateBanner"),v=t("UiContainer");return c(),U("div",ie,[e(v,null,{default:s(()=>[e(i,{class:"dashboard-page__section"}),e(d,{class:"dashboard-page__section"}),E("div",re,[e(f,{class:S(["ui-grid-item","ui-grid-item_12"])})])]),_:1})])}var Ce=k(ae,[["render",ce]]);export{Ce as default};