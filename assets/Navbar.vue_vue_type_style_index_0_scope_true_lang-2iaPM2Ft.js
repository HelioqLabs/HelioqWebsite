import{_ as g,h as w,n as y,Z as B}from"./iconify-W-pUlauI.js";import{d as x,r as l,A as L,k as V,g as N,o,c as r,b as a,a as c,w as b,e as m,h as k,j as p,s as C,F as h,q as T,l as E,t as D}from"./index-vGxT3uyM.js";const H={class:"container px-3"},M=["src"],S={id:"navbarNav"},q={key:0},z=a("ul",{class:"navbar-nav me-auto mb-2 mb-lg-0"},[a("a",{class:"nav-link",href:"https://x.com/HelioqLabs",target:"_blank",rel:"noopener noreferrer"}," HelioqLabs@X.com ")],-1),F=[z],I=a("span",{class:"navbar-toggler-icon"},null,-1),O=[I],Q={class:"navbar-nav me-auto mb-2 mb-lg-0"},A=x({__name:"Navbar",props:{isDark:{type:Boolean,default:!1},isTransparent:{type:Boolean,default:!0},stuck:{type:Boolean,default:!1},absolute:{type:Boolean,default:!0},borderBottom:{type:Boolean,default:!1},fixedTop:{type:Boolean,default:!1},navbarSticky:{type:Boolean,default:!0},isBorder:{type:Boolean,default:!1}},setup(e){const v=e,i=l(!0),d=l(v.stuck),u=l(!1),n=l(!1);return L(()=>{v.stuck||window.addEventListener("scroll",()=>{window.scrollY>700?(i.value=!1,d.value=!0):(i.value=!0,d.value=!1)}),window.addEventListener("resize",()=>{u.value=window.innerWidth<990}),u.value=window.innerWidth<990}),V.currentRoute.value.name,(W,s)=>{const f=N("router-link"),_=B;return o(),r(h,null,[a("header",{class:C(["header navbar navbar-expand-lg navbar-sticky",{"bg-transparent":i.value&&e.isTransparent,"bg-light shadow-sm":!e.isTransparent,"navbar-dark bg-dark":e.isDark,"navbar-stuck":d.value,"position-absolute":e.absolute,"border-bottom":e.borderBottom,"fixed-top":e.fixedTop,"navbar-sticky":e.navbarSticky,"border-bottom border-light":e.isBorder}])},[a("div",H,[c(f,{class:"navbar-brand pe-3",to:"/"},{default:b(()=>[a("img",{src:m(g),alt:"HELIOQ",width:"47"},null,8,M),k(" HELIOQ ")]),_:1}),a("div",S,[u.value?p("",!0):(o(),r("div",q,F))]),c(w),a("button",{class:"navbar-toggler",type:"button",onClick:s[0]||(s[0]=t=>n.value=!n.value)},O)])],2),c(_,{placement:"end",modelValue:n.value,"onUpdate:modelValue":s[1]||(s[1]=t=>n.value=t),title:"Menu","header-class":"border-bottom","footer-class":"border-top"},{default:b(()=>[a("ul",Q,[(o(!0),r(h,null,T(m(y),(t,Z)=>(o(),r("li",{key:t.title,class:"nav-item dropdown"},[t.link?(o(),E(f,{key:0,class:"nav-link",to:{name:t.link.name}},{default:b(()=>[k(D(t.title),1)]),_:2},1032,["to"])):p("",!0)]))),128))])]),_:1},8,["modelValue"])],64)}}});export{A as _};
