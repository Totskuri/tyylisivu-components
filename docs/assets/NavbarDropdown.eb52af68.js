import{r as p,j as t,a as m}from"./index.9a64f62d.js";/* empty css                  */import{c as i}from"./classNames.f0b147c7.js";import{M as v}from"./MenuButton.745afcad.js";const b="_navbar_ak54u_1",f="_container_ak54u_13",N="_menu_ak54u_31",h="_menuButton_ak54u_43",g="_hidden_ak54u_79",r={navbar:b,container:f,menu:N,menuButton:h,hidden:g},$=({children:o,brand:e=void 0,className:n="",style:a={}})=>{const[c,_]=p.exports.useState(!1),d=()=>c?"isOpen":"",l=()=>c?"":r.hidden;return t("div",{className:i([r.navbar,d(),n]),style:a,children:m("div",{className:r.container,children:[t("div",{children:e}),t(v,{onToggle:u=>_(u),toggled:c,className:r.menuButton}),t("nav",{className:i([r.menu,l()]),children:o})]})})},x="_item_1k1kr_1",w={item:x},A=({children:o,href:e,className:n="",style:a={}})=>t("a",{href:e,className:i([w.item,n]),style:a,children:o}),k="_dropdown_be0f1_1",B="_textRow_be0f1_15",O="_text_be0f1_15",R="_content_be0f1_61",j="_center_be0f1_87",y="_left_be0f1_97",C="_right_be0f1_105",s={dropdown:k,textRow:B,text:O,content:R,center:j,left:y,right:C},E=({children:o,text:e,href:n="",align:a="left",className:c="",style:_={}})=>{const d=()=>s[a],l=()=>n.length>0?t("a",{className:s.text,href:n,children:e}):t("div",{className:s.text,children:e});return m("div",{className:i([s.dropdown,c]),style:_,children:[t("div",{className:s.textRow,children:l()}),t("div",{className:i([s.content,d()]),children:o})]})};export{$ as N,A as a,E as b};