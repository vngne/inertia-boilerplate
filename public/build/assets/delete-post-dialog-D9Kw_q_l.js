import{a as d,j as e}from"./app-CAHxE6qR.js";import{t as u}from"./index-DQcjt4qT.js";import{B as i}from"./button-q_DT5Xf7.js";import{D as m,a as D,b as p,c as x,d as h,e as j}from"./dialog-NzrUXviL.js";import"./index-Cb5HZPd5.js";import"./index-DVH31z4S.js";import"./Combination-Ditgza0Z.js";function B({post:s,open:r,onOpenChange:t}){const{delete:l,processing:o,reset:a}=d(),n=c=>{c.preventDefault(),l(route("posts.destroy",{post:s==null?void 0:s.slug}),{onSuccess:()=>{u.success("Post deleted successfully"),t(!1)},onFinish:()=>a()})};return e.jsx(m,{open:r,onOpenChange:t,children:e.jsx(D,{children:e.jsxs("form",{onSubmit:n,children:[e.jsxs(p,{children:[e.jsx(x,{children:"Are you absolutely sure?"}),e.jsx(h,{children:"This action cannot be undone. This will permanently delete the post."})]}),e.jsxs(j,{children:[e.jsx(i,{type:"button",variant:"outline",onClick:()=>t(!1),disabled:o,children:"Cancel"}),e.jsx(i,{type:"submit",variant:"destructive",disabled:o,children:"Delete Post"})]})]})})})}export{B as DeletePostDialog};
