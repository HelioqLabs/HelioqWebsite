import{U as P,I as h,a as U,V as A,N as I,L as $,b as j,m as z,u as B,p as q}from"./iconify-W-pUlauI.js";import{d as E,r as d,u as L,c as g,a as e,b as s,w as t,n as M,e as c,F as T,f as D,g as G,o as w,h as a,i as O,j as R,k as v}from"./index-vGxT3uyM.js";import{_ as H}from"./Navbar.vue_vue_type_style_index_0_scope_true_lang-2iaPM2Ft.js";import{b as J}from"./signin-bg-81XvDJ86.js";import{_ as K}from"./PasswordInput.vue_vue_type_script_setup_true_lang-8_F7bEV4.js";import{_ as Q}from"./bxl-google-L8wO2I8x.js";import{_ as W}from"./bxl-facebook-mVXR6ZT-.js";const X={class:"position-relative h-100 pt-5 pb-4"},Y={class:"w-100 align-self-end pt-1 pt-md-4 pb-4",style:{"max-width":"526px"}},Z=s("h1",{class:"text-center text-xl-start"},"Create Account",-1),ee={class:"text-center text-xl-start pb-3 mb-3"},se={key:0,class:"text-danger pb-2"},te=s("label",{for:"password-confirm",class:"form-label fs-base"},"Confirm password",-1),oe={class:"password-toggle"},ae=["type"],le={class:"password-toggle-btn","aria-label":"Show/hide password"},ne=s("span",{class:"password-toggle-indicator"},null,-1),re=s("div",{class:"invalid-feedback position-absolute start-0 top-100"},"Please enter a password!",-1),ce={class:"mb-4"},ie=s("a",{href:"#"},"Terms & Conditions",-1),de=s("hr",{class:"my-4"},null,-1),ue=s("h6",{class:"text-center mb-4"},"Or sign up with your social network",-1),me={href:"#",class:"btn btn-icon btn-secondary btn-google btn-lg w-100"},_e={href:"#",class:"btn btn-icon btn-secondary btn-facebook btn-lg w-100"},pe=s("div",{class:"w-100 align-self-end"},[s("p",{class:"nav d-block fs-xs text-center text-xl-start pb-2 mb-0"},[a(" © All rights reserved. Made by "),s("a",{class:"nav-link d-inline-block p-0",href:"https://stackbros.in/",target:"_blank",rel:"noopener"},"Stackbros")])],-1),Ve=E({__name:"index",setup(fe){const i=d(!1),x=()=>i.value=!i.value,k=L(),o=d({fullName:"",email:"",password:""}),u=d(!1),m=D(),y=()=>{if(k.signUp(o.value.fullName,o.value.email,o.value.password))return m.query.redirectFrom?v.push(`${m.query.redirectFrom}`):v.push("/");u.value=!0};return(be,l)=>{const V=G("router-link"),_=U,p=A,f=I,n=$,b=j,N=z,C=B,F=q,S=P;return w(),g(T,null,[e(H),s("section",X,[e(S,{class:"d-flex flex-wrap justify-content-center justify-content-xl-start h-100 pt-5"},{default:t(()=>[s("div",Y,[Z,s("p",ee,[a(" Already have an account? "),e(V,{to:{name:"account.sign-in"}},{default:t(()=>[a("Sign in here.")]),_:1},8,["to"])]),e(F,{onSubmit:O(y,["prevent"])},{default:t(()=>[u.value?(w(),g("div",se,"Please Provide valid credentials")):R("",!0),e(b,null,{default:t(()=>[e(n,{sm:"6",class:"mb-4"},{default:t(()=>[e(f,{label:"Full name","label-for":"name","label-class":"fs-base"},{default:t(()=>[e(_,{id:"name",type:"text",class:"form-control-lg",modelValue:o.value.fullName,"onUpdate:modelValue":l[0]||(l[0]=r=>o.value.fullName=r)},null,8,["modelValue"]),e(p,null,{default:t(()=>[a("Please enter your name!")]),_:1})]),_:1})]),_:1}),e(n,{sm:"6",class:"mb-4"},{default:t(()=>[e(f,{label:"Email","label-for":"email","label-class":"fs-base"},{default:t(()=>[e(_,{id:"email",type:"email",class:"form-control-lg",modelValue:o.value.email,"onUpdate:modelValue":l[1]||(l[1]=r=>o.value.email=r)},null,8,["modelValue"]),e(p,null,{default:t(()=>[a("Please enter your email!")]),_:1})]),_:1})]),_:1}),e(n,{cols:"12",class:"mb-4"},{default:t(()=>[e(K,{"place-holder":"",modelValue:o.value.password,"onUpdate:modelValue":l[2]||(l[2]=r=>o.value.password=r)},null,8,["modelValue"])]),_:1}),e(n,{cols:"12",class:"mb-4"},{default:t(()=>[te,s("div",oe,[s("input",{type:i.value?"text":"password",id:"password-confirm",class:"form-control form-control-lg"},null,8,ae),s("label",le,[s("input",{class:"password-toggle-check",type:"checkbox",onChange:x},null,32),ne]),re])]),_:1})]),_:1}),s("div",ce,[e(N,{id:"terms",class:"fs-base"},{default:t(()=>[a("I agree to "),ie]),_:1})]),e(C,{variant:"primary",size:"lg",type:"submit",class:"shadow-primary w-100"},{default:t(()=>[a("Sign up")]),_:1})]),_:1}),de,ue,e(b,{class:"row-cols-1 row-cols-sm-2"},{default:t(()=>[e(n,{class:"mb-3"},{default:t(()=>[s("a",me,[e(c(h),{icon:c(Q),class:"fs-xl me-2"},null,8,["icon"]),a(" Google ")])]),_:1}),e(n,{class:"mb-3"},{default:t(()=>[s("a",_e,[e(c(h),{icon:c(W),class:"fs-xl me-2"},null,8,["icon"]),a(" Facebook ")])]),_:1})]),_:1})]),pe]),_:1}),s("div",{class:"position-absolute top-0 end-0 w-50 h-100 bg-position-center bg-repeat-0 bg-size-cover d-none d-xl-block",style:M({backgroundImage:`url(${c(J)})`})},null,4)])],64)}}});export{Ve as default};
