import{c as d}from"./classNames.841c5f85.js";import{j as n}from"./index.f49791e0.js";import{c as m}from"./ComponentDefaults.a1832928.js";const l="_container_mr9qc_1",i="_badge_mr9qc_11",s={container:l,badge:i},u=({labels:e,className:t="",style:a={}})=>n("div",{className:d([s.container,t]),style:a,children:e.map((o,c)=>n("div",{className:s.badge,children:o},`${o}_${c}`))}),_={title:"data"},r=({labels:e,className:t,style:a})=>n(u,{labels:e,className:t,style:a});r.storyName="Badge";r.args={labels:["label1","label2","label3"],...m};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{r as Default,_ as default};