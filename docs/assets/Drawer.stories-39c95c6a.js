import{r as o,a,j as u}from"./index-f4b01a7d.js";import{c as m}from"./classNames-2f94c022.js";import{u as p}from"./useOnClickOutside-fa18df81.js";import{c as w}from"./ComponentDefaults-1da687e3.js";const f="_drawer_aii12_1",_="_open_aii12_23",i={drawer:f,open:_},D=({children:t,isOpen:r,handleClose:s,className:n="",style:e={}})=>{const c=o.useRef(null);p(c,s);const l=()=>r?i.open:"";return a("div",{ref:c,className:m([i.drawer,l(),n]),style:e,children:t})},x={title:"navigation"},d=({children:t,className:r,style:s})=>{const[n,e]=o.useState(!1);return u(o.Fragment,{children:[a("button",{type:"button",onClick:()=>e(!0),children:"Open drawer"}),a(D,{isOpen:n,handleClose:()=>e(!1),className:r,style:s,children:t})]})};d.storyName="Drawer";d.args={children:"Drawer children",...w};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{d as Default,x as default};