import{r as n,j as w,a}from"./index-ed1bbcd0.js";import{c as i}from"./classNames-1c296867.js";import{u as z}from"./useOnClickOutside-687ceba7.js";import{c as b}from"./ComponentDefaults-1da687e3.js";const g="_dropdown_z3z5f_1",h="_button_z3z5f_11",D="_content_z3z5f_25",C="_center_z3z5f_49",O="_left_z3z5f_59",y="_right_z3z5f_67",N="_open_z3z5f_75",t={dropdown:g,button:h,content:D,center:C,left:O,right:y,open:N},k=({children:o,items:s,align:c="left",className:r="",style:u={}})=>{const d=n.useRef(null),[e,l]=n.useState(!1),p=n.useCallback(()=>{e&&l(!1)},[e]);z(d,p);const m=()=>t[c],_=()=>e?t.open:"";return w("div",{ref:d,className:i([t.dropdown,r]),style:u,children:[a("button",{type:"button",className:t.button,onClick:()=>{l(!e)},children:o}),a("div",{className:i([t.content,m(),_()]),children:s})]})},A={title:"navigation"},f=({children:o,items:s,className:c,style:r})=>(n.useState(!1),a(k,{items:s,className:c,style:r,children:o}));f.storyName="Dropdown";f.args={children:"Dropdown children",items:"Dropdown items",...b};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{f as Default,A as default};
