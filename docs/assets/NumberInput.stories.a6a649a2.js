import{r as f,j as y}from"./index.7e72a468.js";import{s as p,K as g,a as w,b as x}from"./input.module.1147b980.js";/* empty css                  */import{c as K}from"./classNames.f0b147c7.js";import{c as N}from"./ComponentDefaults.a1832928.js";const h=({value:o,onChange:n,min:s=void 0,max:a=void 0,readOnly:e=!1,autoFocus:r=!1,onSubmit:u=()=>{},className:i="",style:l={},enterKeyHint:m=void 0})=>{const t=f.exports.useRef(null),b=()=>e?p.readonly:"",v=()=>{t&&t.current&&t.current.blur()},E=d=>{new g([{key:w,action:u},{key:x,action:v}]).listen(d)};return y("input",{ref:t,type:"number",className:K([p.input,b(),i]),style:l,value:o,onChange:d=>n(Number(d.target.value)),min:s,max:a,readOnly:e,autoFocus:r,onKeyDown:E,autoComplete:"off",enterKeyHint:m})},R={title:"form"},c=({min:o,max:n,readOnly:s,autoFocus:a,className:e,style:r,enterKeyHint:u})=>{const[i,l]=f.exports.useState(0);return y(h,{value:i,onChange:m=>l(m),onSubmit:()=>alert("onSubmit"),min:o,max:n,readOnly:s,autoFocus:a,className:e,style:r,enterKeyHint:u})};c.storyName="NumberInput";c.args={min:void 0,max:void 0,placeholder:"",readOnly:!1,autoFocus:!1,maxLength:524288,enterKeyHint:void 0,...N};c.argTypes={enterKeyHint:{options:["none","enter","done","go","next","previous","search","send"],control:{type:"select"},defaultValue:"none"}};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{c as Default,R as default};
