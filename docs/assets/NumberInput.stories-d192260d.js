import{r as f,a as p}from"./index-d976e444.js";import{c as x}from"./classNames-61f86064.js";import{s as c,u as K}from"./useOnKeyDownInput-3aacd23c.js";import{c as D}from"./ComponentDefaults-1da687e3.js";const I=({value:t,onChange:o,min:n=void 0,max:s=void 0,readOnly:e=!1,autoFocus:a=!1,onSubmit:r=()=>{},className:u="",style:m={},enterKeyHint:i=void 0,autoComplete:y="off",onFocus:v=()=>{},onBlur:b=()=>{}})=>{const d=f.useRef(null),w=K(d,r),g=()=>e?c.readonly:"";return p("input",{ref:d,type:"number",className:x([c.input,g(),u]),style:m,value:t,onChange:N=>o(Number(N.target.value)),min:n,max:s,readOnly:e,autoFocus:a,onKeyDown:w,autoComplete:y,enterKeyHint:i,onFocus:v,onBlur:b})},H={title:"form"},l=({min:t,max:o,readOnly:n,autoFocus:s,className:e,style:a,enterKeyHint:r})=>{const[u,m]=f.useState(0);return p(I,{value:u,onChange:i=>m(i),onSubmit:()=>alert("onSubmit"),min:t,max:o,readOnly:n,autoFocus:s,className:e,style:a,enterKeyHint:r})};l.storyName="NumberInput";l.args={min:void 0,max:void 0,readOnly:!1,autoFocus:!1,enterKeyHint:void 0,...D};l.argTypes={enterKeyHint:{options:["none","enter","done","go","next","previous","search","send"],control:{type:"select"},defaultValue:void 0}};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{l as Default,H as default};