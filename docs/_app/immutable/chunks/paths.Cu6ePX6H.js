import{n as u,s as h}from"./scheduler.DZs670Vv.js";const i=[];function q(e,o){return{subscribe:p(e,o).subscribe}}function p(e,o=u){let n;const r=new Set;function b(t){if(h(e,t)&&(e=t,n)){const c=!i.length;for(const s of r)s[1](),i.push(s,e);if(c){for(let s=0;s<i.length;s+=2)i[s][0](i[s+1]);i.length=0}}}function a(t){b(t(e))}function _(t,c=u){const s=[t,c];return r.add(s),r.size===1&&(n=o(b,a)||u),t(e),()=>{r.delete(s),r.size===0&&n&&(n(),n=null)}}return{set:b,update:a,subscribe:_}}var f;const d=((f=globalThis.__sveltekit_66niri)==null?void 0:f.base)??"";var l;const k=((l=globalThis.__sveltekit_66niri)==null?void 0:l.assets)??d;export{k as a,d as b,q as r,p as w};
