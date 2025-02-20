import{j as e,r as l,U as f}from"./app-CAHxE6qR.js";import{c as d,a as t,e as h}from"./button-q_DT5Xf7.js";import{i as j}from"./dropdown-menu-CbOv2XFj.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=d("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]),c=({className:s,...a})=>e.jsx("nav",{role:"navigation","aria-label":"pagination",className:t("mx-auto flex w-full justify-center",s),...a});c.displayName="Pagination";const u=l.forwardRef(({className:s,...a},n)=>e.jsx("ul",{ref:n,className:t("flex flex-row items-center gap-1",s),...a}));u.displayName="PaginationContent";const i=l.forwardRef(({className:s,...a},n)=>e.jsx("li",{ref:n,className:t("",s),...a}));i.displayName="PaginationItem";const r=({className:s,isActive:a,sizes:n="icon",...o})=>e.jsx(f,{"aria-current":a?"page":void 0,className:t(h({variant:a?"outline":"ghost",size:n}),s),...o});r.displayName="PaginationLink";const m=({className:s,...a})=>e.jsxs(r,{"aria-label":"Go to previous page",sizes:"default",className:t("gap-1 pl-2.5",s),...a,children:[e.jsx(N,{className:"w-4 h-4"}),e.jsx("span",{children:"Previous"})]});m.displayName="PaginationPrevious";const x=({className:s,...a})=>e.jsxs(r,{"aria-label":"Go to next page",sizes:"default",className:t("gap-1 pr-2.5",s),...a,children:[e.jsx("span",{children:"Next"}),e.jsx(j,{className:"w-4 h-4"})]});x.displayName="PaginationNext";function b({links:s}){return!s||s.length===0?null:e.jsx("div",{className:"mt-4",children:e.jsx(c,{children:e.jsx(u,{children:s.map((a,n)=>{const o=a.url===null,p=a.label.includes("&laquo;"),g=a.label.includes("&raquo;");return o?e.jsx(i,{},n):p?e.jsx(i,{children:e.jsx(m,{href:a.url||"#"})},n):g?e.jsx(i,{children:e.jsx(x,{href:a.url||"#"})},n):e.jsx(i,{children:e.jsx(r,{href:a.url||"#",isActive:a.active,dangerouslySetInnerHTML:{__html:a.label}})},n)})})})})}export{b as P};
