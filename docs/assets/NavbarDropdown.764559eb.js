import{r as u,j as t,a as m}from"./index.3daf8faa.js";/* empty css                  */import{c as r}from"./classNames.f0b147c7.js";import{M as v}from"./MenuButton.d4e5c81b.js";const b="_navbar_ak54u_1",f="_container_ak54u_13",N="_menu_ak54u_31",h="_menuButton_ak54u_43",p="_hidden_ak54u_79",c={navbar:b,container:f,menu:N,menuButton:h,hidden:p},T=({children:o,brand:e=void 0,className:n="",style:a={}})=>{const[_,i]=u.exports.useState(!1),d=()=>_?"":c.hidden;return t("div",{className:r([c.navbar,n]),style:a,children:m("div",{className:c.container,children:[t("div",{children:e}),t(v,{onToggle:l=>i(l),toggled:_,className:c.menuButton}),t("nav",{className:r([c.menu,d()]),children:o})]})})},x="_item_1k1kr_1",g={item:x},$=({children:o,href:e,className:n="",style:a={}})=>t("a",{href:e,className:r([g.item,n]),style:a,children:o}),w="_dropdown_be0f1_1",k="_textRow_be0f1_15",B="_text_be0f1_15",R="_content_be0f1_61",j="_center_be0f1_87",y="_left_be0f1_97",C="_right_be0f1_105",s={dropdown:w,textRow:k,text:B,content:R,center:j,left:y,right:C},A=({children:o,text:e,href:n="",align:a="left",className:_="",style:i={}})=>{const d=()=>s[a],l=()=>n.length>0?t("a",{className:s.text,href:n,children:e}):t("div",{className:s.text,children:e});return m("div",{className:r([s.dropdown,_]),style:i,children:[t("div",{className:s.textRow,children:l()}),t("div",{className:r([s.content,d()]),children:o})]})};export{T as N,$ as a,A as b};
