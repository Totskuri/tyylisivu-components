import{r as o}from"./index.d1225526.js";const u=(t,n)=>{const e=r=>{!t||!t.current||t.current.contains(r.target)||n(r)};o.exports.useEffect(()=>(document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),()=>{document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}),[t,n])};export{u};