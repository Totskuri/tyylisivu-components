import{r as h,a as m,j as e}from"./index.3caea08c.js";/* empty css                  */import{c as d}from"./classNames.f0b147c7.js";import{M as p}from"./MenuButton.e3fd1dba.js";import{c as w}from"./ComponentDefaults.a1832928.js";const v="_navbar_zdnzq_1",b="_menu_zdnzq_21",N="_menuButton_zdnzq_33",g="_hidden_zdnzq_71",i={navbar:v,menu:b,menuButton:N,hidden:g},x=({children:n,brand:t=void 0,className:o="",style:r={}})=>{const[c,l]=h.exports.useState(!1),_=()=>c?"":i.hidden;return m("div",{className:d([i.navbar,o]),style:r,children:[e("div",{children:t}),e(p,{onToggle:u=>l(u),toggled:c,className:i.menuButton}),e("div",{className:d([i.menu,_()]),children:n})]})},D="_item_1k1kr_1",y={item:D},a=({children:n,href:t,className:o="",style:r={}})=>e("a",{href:t,className:d([y.item,o]),style:r,children:n}),z="_dropdown_be0f1_1",I="_textRow_be0f1_15",B="_text_be0f1_15",q="_content_be0f1_61",R="_center_be0f1_87",j="_left_be0f1_97",E="_right_be0f1_105",s={dropdown:z,textRow:I,text:B,content:q,center:R,left:j,right:E},T=({children:n,text:t,href:o="",align:r="left",className:c="",style:l={}})=>{const _=()=>s[r],u=()=>o.length>0?e("a",{className:s.text,href:o,children:t}):e("div",{className:s.text,children:t});return m("div",{className:d([s.dropdown,c]),style:l,children:[e("div",{className:s.textRow,children:u()}),e("div",{className:d([s.content,_()]),children:n})]})},$={title:"navigation"},f=({className:n,style:t})=>m(x,{className:n,style:t,brand:"Tyylisivu",children:[e(a,{href:"#",children:"Item 1"}),e(a,{href:"#",children:"Item 2"}),m(T,{text:"Dropdown",children:[e(a,{href:"#",children:"Dropdown item 1"},"DropdownItem1"),e(a,{href:"#",children:"Dropdown item 2"},"DropdownItem2")]}),e(a,{href:"#",children:"Item 4"})]});f.storyName="Navbar";f.args={...w};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{f as Default,$ as default};
