import{c as u}from"./ComponentDefaults.a1832928.js";/* empty css                  */import{c as f}from"./classNames.f0b147c7.js";import{j as n}from"./index.24832105.js";const m="_hero_19956_1",_="_half_19956_23",h="_full_19956_31",p="_dark_19956_39",y="_content_19956_47",o={hero:m,default:"_default_19956_15",half:_,full:h,dark:p,content:y},v=({children:l,backgroundImage:s="none",height:e=void 0,overlay:t=void 0,className:a="",style:r={}})=>{const d=()=>e?o[e]:"",i=()=>t?o[t]:"";return n("section",{className:f([o.hero,d(),a]),style:{backgroundImage:s,...r},children:n("div",{className:i(),children:n("div",{className:o.content,children:l})})})},N={title:"layout"},c=({children:l,backgroundImage:s,height:e,overlay:t,className:a,style:r})=>n(v,{backgroundImage:s,height:e,overlay:t,className:a,style:r,children:l});c.storyName="Hero";c.args={children:"Hero children",backgroundImage:"none",height:void 0,overlay:void 0,...u};c.argTypes={height:{options:["","default","half","full"],control:{type:"select"},defaultValue:void 0},overlay:{options:["","dark"],control:{type:"select"},defaultValue:void 0}};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{c as Default,N as default};