import{r,j as w,a}from"./index-286dece4.js";import{c as i}from"./classNames-d27d0bef.js";import{u as z}from"./useOnClickOutside-6aeaf040.js";import{c as b}from"./ComponentDefaults-1da687e3.js";const g="_dropdown_z3z5f_1",h="_button_z3z5f_11",D="_content_z3z5f_25",C="_center_z3z5f_49",O="_left_z3z5f_59",y="_right_z3z5f_67",N="_open_z3z5f_75",t={dropdown:g,button:h,content:D,center:C,left:O,right:y,open:N},k=({children:n,items:o,align:s="left",className:c="",style:p={}})=>{const d=r.useRef(null),[e,l]=r.useState(!1),u=r.useCallback(()=>{e&&l(!1)},[e]);z(d,u);const m=()=>t[s],_=()=>e?t.open:"";return w("div",{ref:d,className:i([t.dropdown,c]),style:p,children:[a("button",{type:"button",className:t.button,onClick:()=>{l(!e)},children:n}),a("div",{className:i([t.content,m(),_()]),children:o})]})},A={title:"navigation"},f=({children:n,items:o,className:s,style:c})=>a(k,{items:o,className:s,style:c,children:n});f.storyName="Dropdown";f.args={children:"Dropdown children",items:"Dropdown items",...b};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{f as Default,A as default};
