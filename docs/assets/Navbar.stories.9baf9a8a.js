import{r as h,a as m,j as e}from"./index.4ab26671.js";/* empty css                  */import{c}from"./classNames.f0b147c7.js";import{M as b}from"./MenuButton.d9cf02f2.js";import{c as p}from"./ComponentDefaults.a1832928.js";const w="_navbar_13bsn_1",v="_menu_13bsn_21",N="_menuButton_13bsn_35",g="_hidden_13bsn_73",i={navbar:w,menu:v,menuButton:N,hidden:g},x=({children:n,brand:t=void 0,className:o="",style:r={}})=>{const[d,l]=h.exports.useState(!1),_=()=>d?"":i.hidden;return m("div",{className:c([i.navbar,o]),style:r,children:[e("div",{children:t}),e(b,{onToggle:u=>l(u),toggled:d,className:i.menuButton}),e("div",{className:c([i.menu,_()]),children:n})]})},D="_item_1k1kr_1",y={item:D},a=({children:n,href:t,className:o="",style:r={}})=>e("a",{href:t,className:c([y.item,o]),style:r,children:n}),I="_dropdown_be0f1_1",B="_textRow_be0f1_15",R="_text_be0f1_15",j="_content_be0f1_61",E="_center_be0f1_87",T="_left_be0f1_97",k="_right_be0f1_105",s={dropdown:I,textRow:B,text:R,content:j,center:E,left:T,right:k},A=({children:n,text:t,href:o="",align:r="left",className:d="",style:l={}})=>{const _=()=>s[r],u=()=>o.length>0?e("a",{className:s.text,href:o,children:t}):e("div",{className:s.text,children:t});return m("div",{className:c([s.dropdown,d]),style:l,children:[e("div",{className:s.textRow,children:u()}),e("div",{className:c([s.content,_()]),children:n})]})},S={title:"navigation"},f=({className:n,style:t})=>m(x,{className:n,style:t,brand:"Tyylisivu",children:[e(a,{href:"#",children:"Item 1"}),e(a,{href:"#",children:"Item 2"}),m(A,{text:"Dropdown",children:[e(a,{href:"#",children:"Dropdown item 1"},"DropdownItem1"),e(a,{href:"#",children:"Dropdown item 2"},"DropdownItem2")]}),e(a,{href:"#",children:"Item 4"})]});f.storyName="Navbar";f.args={...p};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{f as Default,S as default};
