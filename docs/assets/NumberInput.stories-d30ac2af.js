import{r as f,a as p}from"./index-286dece4.js";import{c as g}from"./classNames-d27d0bef.js";import{s as c,u as N}from"./useOnKeyDownInput-3aacd23c.js";import{c as x}from"./ComponentDefaults-1da687e3.js";const K=({value:t,onChange:o,min:n=void 0,max:s=void 0,readOnly:e=!1,autoFocus:a=!1,onSubmit:r=()=>{},className:u="",style:m={},enterKeyHint:i=void 0,autoComplete:y="off"})=>{const d=f.useRef(null),v=N(d,r),b=()=>e?c.readonly:"";return p("input",{ref:d,type:"number",className:g([c.input,b(),u]),style:m,value:t,onChange:w=>o(Number(w.target.value)),min:n,max:s,readOnly:e,autoFocus:a,onKeyDown:v,autoComplete:y,enterKeyHint:i})},E={title:"form"},l=({min:t,max:o,readOnly:n,autoFocus:s,className:e,style:a,enterKeyHint:r})=>{const[u,m]=f.useState(0);return p(K,{value:u,onChange:i=>m(i),onSubmit:()=>alert("onSubmit"),min:t,max:o,readOnly:n,autoFocus:s,className:e,style:a,enterKeyHint:r})};l.storyName="NumberInput";l.args={min:void 0,max:void 0,readOnly:!1,autoFocus:!1,enterKeyHint:void 0,...x};l.argTypes={enterKeyHint:{options:["none","enter","done","go","next","previous","search","send"],control:{type:"select"},defaultValue:void 0}};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{l as Default,E as default};