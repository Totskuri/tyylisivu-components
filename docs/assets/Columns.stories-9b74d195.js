import{a as s,j as t,r as h}from"./index-d976e444.js";import{c as f}from"./ComponentDefaults-1da687e3.js";import{c as o}from"./classNames-61f86064.js";const C="_columns_c0261_1",w={columns:C},d=({children:m,className:i="",style:e={}})=>s("div",{className:o([w.columns,i]),style:e,children:m}),p="_column_13b14_1",g="_content_13b14_15",z={column:p,content:g,"size-1":"_size-1_13b14_23","size-2":"_size-2_13b14_23","size-3":"_size-3_13b14_23","size-4":"_size-4_13b14_23","size-5":"_size-5_13b14_23","size-6":"_size-6_13b14_23","size-7":"_size-7_13b14_23","size-8":"_size-8_13b14_23","size-9":"_size-9_13b14_23","size-10":"_size-10_13b14_23","size-11":"_size-11_13b14_23","size-12":"_size-12_13b14_23","size-md-1":"_size-md-1_13b14_129","size-md-2":"_size-md-2_13b14_129","size-md-3":"_size-md-3_13b14_129","size-md-4":"_size-md-4_13b14_129","size-md-5":"_size-md-5_13b14_129","size-md-6":"_size-md-6_13b14_129","size-md-7":"_size-md-7_13b14_129","size-md-8":"_size-md-8_13b14_129","size-md-9":"_size-md-9_13b14_129","size-md-10":"_size-md-10_13b14_129","size-md-11":"_size-md-11_13b14_129","size-md-12":"_size-md-12_13b14_129","size-sm-1":"_size-sm-1_13b14_237","size-sm-2":"_size-sm-2_13b14_237","size-sm-3":"_size-sm-3_13b14_237","size-sm-4":"_size-sm-4_13b14_237","size-sm-5":"_size-sm-5_13b14_237","size-sm-6":"_size-sm-6_13b14_237","size-sm-7":"_size-sm-7_13b14_237","size-sm-8":"_size-sm-8_13b14_237","size-sm-9":"_size-sm-9_13b14_237","size-sm-10":"_size-sm-10_13b14_237","size-sm-11":"_size-sm-11_13b14_237","size-sm-12":"_size-sm-12_13b14_237"},_=({children:m,size:i=void 0,sizeMd:e=void 0,sizeSm:n=void 0,className:l="",style:r={}})=>{const b=()=>i?z[`size-${i}`]:"",a=()=>e?z[`size-md-${e}`]:"",u=()=>n?z[`size-sm-${n}`]:"";return s("div",{className:o([z.column,b(),a(),u(),l]),style:r,children:s("div",{className:z.content,children:m})})},x={title:"layout"},c=({className:m,style:i})=>{const e=n=>s("div",{style:{padding:15,backgroundColor:"#f4f4f4"},children:n});return t(h.Fragment,{children:[s("h3",{children:"Columns with equal width"}),t(d,{className:m,style:i,children:[s(_,{children:e("col 1")}),s(_,{children:e("col 2")}),s(_,{children:e("col 3")}),s(_,{children:e("col 4")})]}),s("h3",{children:"Columns with different width"}),s("p",{children:"Full width on small screens"}),t(d,{className:m,style:i,children:[s(_,{size:6,sizeSm:12,children:e("50%")}),s(_,{size:3,sizeSm:12,children:e("25%")}),s(_,{size:3,sizeSm:12,children:e("25%")})]})]})};c.storyName="Columns";c.args={...f};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{c as Default,x as default};