import{r as p,a as f}from"./index-eba37fcf.js";import{c as K}from"./classNames-79438458.js";import{s as m,u as D}from"./useOnKeyDownInput-3aacd23c.js";import{c as I}from"./ComponentDefaults-1da687e3.js";const T=({value:t,onChange:o,placeholder:n="",readOnly:e=!1,autoFocus:s=!1,maxLength:a=524288,onSubmit:r=()=>{},className:u="",style:l={},enterKeyHint:c=void 0,autoComplete:y="off",onFocus:x=()=>{},onBlur:g=()=>{}})=>{const i=p.useRef(null),w=D(i,r),v=()=>e?m.readonly:"";return f("input",{ref:i,type:"text",className:K([m.input,v(),u]),style:l,placeholder:n,value:t,onChange:h=>o(h.target.value),readOnly:e,maxLength:a,autoFocus:s,onKeyDown:w,autoComplete:y,enterKeyHint:c,onFocus:x,onBlur:g})},S={title:"form"},d=({placeholder:t,readOnly:o,autoFocus:n,maxLength:e,className:s,style:a,enterKeyHint:r})=>{const[u,l]=p.useState("");return f(T,{value:u,onChange:c=>l(c),onSubmit:()=>alert("onSubmit"),placeholder:t,readOnly:o,autoFocus:n,maxLength:e,className:s,style:a,enterKeyHint:r})};d.storyName="TextInput";d.args={placeholder:"",readOnly:!1,autoFocus:!1,maxLength:524288,enterKeyHint:void 0,...I};d.argTypes={enterKeyHint:{options:["none","enter","done","go","next","previous","search","send"],control:{type:"select"},defaultValue:void 0}};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{d as Default,S as default};