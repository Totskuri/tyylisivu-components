import{r as i,j as d,F as h,a as e}from"./index-dbdb7fdf.js";import{c as p}from"./classNames-79438458.js";import{u as w}from"./useOnClickOutside-8fff9407.js";import{c as y}from"./ComponentDefaults-1da687e3.js";const b="_drawer_1chd2_1",g="_body_1chd2_17",C="_iconContainer_1chd2_25",v="_closeButton_1chd2_35",N="_top_1chd2_47",D="_open_1chd2_61",O="_right_1chd2_69",x="_bottom_1chd2_91",B="_left_1chd2_113",j="_slideLeft_1chd2_1",k="_overlay_1chd2_139",t={drawer:b,body:g,iconContainer:C,closeButton:v,top:N,open:D,right:O,bottom:x,left:B,slideLeft:j,overlay:k},E=({children:r,isOpen:c,handleClose:o,position:a="left",iconClose:n=void 0,className:l="",style:s={}})=>{const m=i.useRef(null);w(m,o);const u=()=>c?t.open:"",f=()=>t[a];return d(h,{children:[e("div",{className:p([t.overlay,u()])}),e("div",{ref:m,className:p([t.drawer,u(),f(),l]),style:s,children:d("div",{className:t.body,children:[n&&e("div",{className:t.iconContainer,children:e("button",{type:"button",onClick:o,className:t.closeButton,"aria-label":"Close drawer",children:n})}),r]})})]})},P={title:"navigation"},_=({children:r,position:c,iconClose:o,className:a,style:n})=>{const[l,s]=i.useState(!1);return d(i.Fragment,{children:[e("button",{type:"button",onClick:()=>s(!0),children:"Open drawer"}),e(E,{isOpen:l,handleClose:()=>s(!1),position:c,iconClose:o,className:a,style:n,children:r})]})};_.storyName="Drawer";_.args={children:"Drawer children",position:"left",iconClose:"iconClose",...y};_.argTypes={position:{options:["top","right","bottom","left"],control:{type:"select"},defaultValue:"left"}};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{_ as Default,P as default};
