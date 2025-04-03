import{c as l,a as m}from"./button-q_DT5Xf7.js";import{r as o,j as i}from"./app-CAHxE6qR.js";import{b as C,a as N,j as p}from"./Combination-Ditgza0Z.js";import{P as y}from"./index-Cb5HZPd5.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=l("ChevronsUpDown",[["path",{d:"m7 15 5 5 5-5",key:"1hf1tw"}],["path",{d:"m7 9 5-5 5 5",key:"sgt6xg"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H=l("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=l("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=l("UserCog",[["circle",{cx:"18",cy:"15",r:"3",key:"gjjjvw"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M10 15H6a4 4 0 0 0-4 4v2",key:"1nfge6"}],["path",{d:"m21.7 16.4-.9-.3",key:"12j9ji"}],["path",{d:"m15.2 13.9-.9-.3",key:"1fdjdi"}],["path",{d:"m16.6 18.7.3-.9",key:"heedtr"}],["path",{d:"m19.1 12.2.3-.9",key:"1af3ki"}],["path",{d:"m19.6 18.7-.4-1",key:"1x9vze"}],["path",{d:"m16.8 12.3-.4-1",key:"vqeiwj"}],["path",{d:"m14.3 16.6 1-.4",key:"1qlj63"}],["path",{d:"m20.7 13.8 1-.4",key:"1v5t8k"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=l("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);var f="Avatar",[b,O]=C(f),[I,h]=b(f),v=o.forwardRef((a,e)=>{const{__scopeAvatar:t,...r}=a,[n,s]=o.useState("idle");return i.jsx(I,{scope:t,imageLoadingStatus:n,onImageLoadingStatusChange:s,children:i.jsx(y.span,{...r,ref:e})})});v.displayName=f;var k="AvatarImage",x=o.forwardRef((a,e)=>{const{__scopeAvatar:t,src:r,onLoadingStatusChange:n=()=>{},...s}=a,c=h(k,t),d=R(r,s.referrerPolicy),u=N(g=>{n(g),c.onImageLoadingStatusChange(g)});return p(()=>{d!=="idle"&&u(d)},[d,u]),d==="loaded"?i.jsx(y.img,{...s,ref:e,src:r}):null});x.displayName=k;var w="AvatarFallback",A=o.forwardRef((a,e)=>{const{__scopeAvatar:t,delayMs:r,...n}=a,s=h(w,t),[c,d]=o.useState(r===void 0);return o.useEffect(()=>{if(r!==void 0){const u=window.setTimeout(()=>d(!0),r);return()=>window.clearTimeout(u)}},[r]),c&&s.imageLoadingStatus!=="loaded"?i.jsx(y.span,{...n,ref:e}):null});A.displayName=w;function R(a,e){const[t,r]=o.useState("idle");return p(()=>{if(!a){r("error");return}let n=!0;const s=new window.Image,c=d=>()=>{n&&r(d)};return r("loading"),s.onload=c("loaded"),s.onerror=c("error"),s.src=a,e&&(s.referrerPolicy=e),()=>{n=!1}},[a,e]),t}var j=v,L=x,S=A;const M=o.forwardRef(({className:a,...e},t)=>i.jsx(j,{ref:t,className:m("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",a),...e}));M.displayName=j.displayName;const _=o.forwardRef(({className:a,...e},t)=>i.jsx(L,{ref:t,className:m("aspect-square h-full w-full",a),...e}));_.displayName=L.displayName;const E=o.forwardRef(({className:a,...e},t)=>i.jsx(S,{ref:t,className:m("flex h-full w-full items-center justify-center rounded-full bg-muted",a),...e}));E.displayName=S.displayName;export{M as A,q as C,H as L,z as U,_ as a,E as b,T as c,$ as d};
