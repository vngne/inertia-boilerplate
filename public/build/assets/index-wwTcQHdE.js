import{V as j,r as c,j as e,M as f,U as t}from"./app-CAHxE6qR.js";import{A as u,a as p,b as g}from"./avatar-Doqk81eY.js";import{B as a}from"./button-q_DT5Xf7.js";import{C as v,a as C,b as N,d as w,e as D}from"./card-B7ZE15b_.js";import{R as P}from"./layout-Dwt6rbXp.js";import{DeletePostDialog as b}from"./delete-post-dialog-D9Kw_q_l.js";import{P as y}from"./paginate-RhFosy0u.js";import{C as A}from"./calendar-BaYvsS0a.js";import"./Combination-Ditgza0Z.js";import"./index-Cb5HZPd5.js";import"./dropdown-menu-CbOv2XFj.js";import"./command-D4qPr1am.js";import"./index-DQcjt4qT.js";import"./dialog-NzrUXviL.js";import"./index-DVH31z4S.js";function V({posts:r}){const l=j().props.auth;console.log("index posts",r);const[o,m]=c.useState(null),[x,i]=c.useState(!1),h=s=>{m(s),i(!0)};return e.jsxs(P,{children:[e.jsx(f,{title:"Posts"}),e.jsxs("div",{children:[e.jsx("h1",{className:"mb-8 text-3xl font-bold",children:e.jsxs("div",{className:"flex flex-row items-center justify-start gap-4",children:["All Post (",r.data.length,")",l.user&&e.jsx(t,{href:"/posts/create",children:e.jsx(a,{children:"Create"})})]})}),e.jsx("div",{className:"grid gap-6 md:grid-cols-2 lg:grid-cols-3",children:r.data.map(s=>{var n,d;return e.jsxs(v,{children:[e.jsxs(t,{href:`/posts/${s.slug}`,children:[e.jsx(C,{children:e.jsx(N,{children:s.title})}),e.jsx(w,{children:e.jsx("p",{className:"truncate text-muted-foreground text-nowrap",children:s.content.slice(0,30)})})]}),e.jsxs(D,{className:"flex flex-col justify-end flex-grow",children:[e.jsxs("div",{className:"flex items-center justify-between gap-4 mb-4 text-sm text-muted-foreground",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx(A,{className:"w-4 h-4 mr-1"}),e.jsx("span",{children:s.created_at.split("T")[0].split("-").reverse().join("/")})]}),e.jsxs("div",{className:"flex items-center",children:[e.jsxs(u,{className:"w-6 h-6 me-2",children:[e.jsx(p,{src:s.user.image||""}),e.jsx(g,{children:(n=s.user.name)==null?void 0:n.slice(0,2).toUpperCase()})]}),e.jsx("span",{children:s.user.name})]})]}),e.jsx("div",{children:((d=l.user)==null?void 0:d.id)===s.user_id&&e.jsxs("div",{className:"flex gap-2",children:[e.jsx(t,{href:`/posts/${s.slug}/edit`,children:e.jsx(a,{variant:"secondary",className:"w-full",children:"Edit"})}),e.jsx(a,{variant:"destructive",onClick:()=>h(s),children:"Delete"})]})})]})]},s.id)})}),e.jsx(b,{post:o,open:x,onOpenChange:i})]}),e.jsx(y,{links:r.links})]})}export{V as default};
