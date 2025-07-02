import{_ as m,a as g}from"./UIKitPageTitle.vue_vue_type_script_setup_true_lang-KS0xqGuz.js";import{_ as e}from"./CustomSyntax.vue_vue_type_script_setup_true_lang-zeeAGI-G.js";import{t as o,a as c}from"./02-X4VDLiYB.js";import{t as l,c as r,a as d,b as u}from"./08-UNsq7hFo.js";import{a as h}from"./angular-gray-SzHZOhS5.js";import{a as _,b as p}from"./angular-color-light-nZyr_JNI.js";import{_ as f}from"./AnchorNavigation.vue_vue_type_script_setup_true_lang-0HrBL56p.js";import{d as w,l as b,w as a,o as v,a as t,b as s,e as i}from"./index-8anZz6eV.js";import"./iconify-YDvRXT-1.js";import"./LoadingSpinner-t91bLfTR.js";/* empty css                                                                       */import"./_plugin-vue_export-helper-x3n3nnut.js";import"./BackToTop.vue_vue_type_script_setup_true_lang-hclfNlv-.js";import"./vue.runtime.esm-bundler-8gaOUC7j.js";const C={class:"row g-3 gx-sm-4",style:{"max-width":"50rem"}},x={class:"col-sm-4 col-6"},j=["src"],I={class:"col-sm-4 col-6"},S=["src"],y={class:"col-sm-4 col-6"},k=["src"],q={class:"row g-3 gx-sm-4",style:{"max-width":"50rem"}},A={class:"col-sm-4 col-6"},R=["src"],F={class:"col-sm-4 col-6"},$=["src"],B={class:"col-sm-4 col-6"},N=["src"],D={class:"row g-3 gx-sm-4",style:{"max-width":"50rem"}},T={class:"col-sm-4 col-6"},V={class:"figure mb-sm-0"},L=["src"],W=s("figcaption",{class:"figure-caption"},"Caption on the left",-1),z={class:"col-sm-4 col-6"},E={class:"figure mb-sm-0"},G=["src"],H=s("figcaption",{class:"figure-caption text-center"},"Caption in the center",-1),J={class:"col-sm-4 col-6"},K={class:"figure mb-0"},M=["src"],O=s("figcaption",{class:"figure-caption text-end"},"Caption on the right",-1),P={class:"swap-image my-n4"},Q=["src"],U={class:"swap-to"},X=["src"],Y=["src"],Z=`<!-- Square image (default) -->
<img src="@/assets/img/team/01.jpg" alt="Square image">

<!-- Rounded image -->
<img src="@/assets/img/team/02.jpg" class="rounded-3" alt="Rounded image">

<!-- Circle image -->
<img src="@/assets/img/team/03.jpg" class="rounded-circle" alt="Circle image">`,ss=`<!-- Square thumbnail -->
<img src="@/assets/img/team/08.jpg" class="img-thumbnail rounded-0" alt="Square thumbnail">

<!-- Rounded thumbnail -->
<img src="@/assets/img/team/06.jpg" class="img-thumbnail" alt="Rounded thumbnail">

<!-- Circle thumbnail -->
<img src="@/assets/img/team/07.jpg" class="img-thumbnail rounded-circle" alt="Circle thumbnail">`,is=`<!-- Caption on the left -->
<figure class="figure">
  <img src="@/assets/img/team/01.jpg" class="figure-img" alt="...">
  <figcaption class="figure-caption">Caption on the left</figcaption>
</figure>

<!-- Caption in the center -->
<figure class="figure">
  <img src="@/assets/img/team/02.jpg" class="figure-img" alt="...">
  <figcaption class="figure-caption text-center">Caption in the center</figcaption>
</figure>

<!-- Caption on the right -->
<figure class="figure">
  <img src="@/assets/img/team/03.jpg" class="figure-img" alt="...">
  <figcaption class="figure-caption text-end">Caption on the right</figcaption>
</figure>`,as=`<!-- Image swap on hover -->
<div class="swap-image">
  <img src="@/assets/img/landing/app-showcase-3/integrations/angular-gray.svg" class="swap-from" width="196" alt="Angular">
  <div class="swap-to">
    <img src="@/assets/img/landing/app-showcase-3/integrations/angular-color-light.svg" class="light-mode-img" width="196" alt="Angular">
    <img src="@/assets/img/landing/app-showcase-3/integrations/angular-color-dark.svg" class="dark-mode-img" width="196" alt="Angular">
  </div>
</div>`,vs=w({__name:"Images",setup(ts){const n=[{id:"image-shapes",title:"Image shapes"},{id:"image-thumbnails",title:"Thumbnails"},{id:"image-figures",title:"Figures with caption"},{id:"image-swap",title:"Image swap on hover"}];return(es,os)=>(v(),b(m,null,{"anchor-navigation":a(()=>[t(f,{elements:n})]),default:a(()=>[t(g,{title:"Images & figures",description:"Image styles and figure component for displaying images and text."}),t(e,{id:"image-shapes",title:"Image shapes",code:Z},{default:a(()=>[s("div",C,[s("div",x,[s("img",{src:i(o),alt:"Square image"},null,8,j)]),s("div",I,[s("img",{class:"rounded-3",src:i(c),alt:"Rounded image"},null,8,S)]),s("div",y,[s("img",{class:"rounded-circle",src:i(l),alt:"Circle image"},null,8,k)])])]),_:1}),t(e,{id:"image-thumbnails",title:"Thumbnails",code:ss},{default:a(()=>[s("div",q,[s("div",A,[s("img",{src:i(r),class:"img-thumbnail rounded-0",alt:"Square thumbnail"},null,8,R)]),s("div",F,[s("img",{class:"img-thumbnail",src:i(d),alt:"Rounded thumbnail"},null,8,$)]),s("div",B,[s("img",{class:"img-thumbnail rounded-circle",src:i(u),alt:"Circle thumbnail"},null,8,N)])])]),_:1}),t(e,{id:"image-figures",title:"Figures with caption",code:is},{default:a(()=>[s("div",D,[s("div",T,[s("figure",V,[s("img",{class:"figure-img",src:i(o),alt:"Figure with caption"},null,8,L),W])]),s("div",z,[s("figure",E,[s("img",{class:"figure-img",src:i(c),alt:"Figure with caption"},null,8,G),H])]),s("div",J,[s("figure",K,[s("img",{class:"figure-img",src:i(l),alt:"Figure with caption"},null,8,M),O])])])]),_:1}),t(e,{id:"image-swap",title:"Image swap on hover",code:as},{default:a(()=>[s("div",P,[s("img",{src:i(h),class:"swap-from",width:"196",alt:"Angular"},null,8,Q),s("div",U,[s("img",{src:i(_),class:"light-mode-img",width:"196",alt:"Angular"},null,8,X),s("img",{src:i(p),class:"dark-mode-img",width:"196",alt:"Angular"},null,8,Y)])])]),_:1})]),_:1}))}});export{vs as default};
