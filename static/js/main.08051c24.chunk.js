(this.webpackJsonpcrud=this.webpackJsonpcrud||[]).push([[0],{70:function(e,t,n){},79:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(26),i=n.n(r),l=n(15),j=n(13),s=n(127),o=n(126),d=n(129),b=n(130),u=n(123),O=n(128),x=n(122),h=n(124),f=(n(70),n(2));var v=function(){var e=Object(c.useState)(""),t=Object(j.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),i=Object(j.a)(r,2),v=i[0],m=i[1],p=Object(c.useState)(""),g=Object(j.a)(p,2),y=g[0],C=g[1],N=Object(c.useState)(""),S=Object(j.a)(N,2),w=S[0],k=S[1],E=Object(c.useState)([]),P=Object(j.a)(E,2),D=P[0],G=P[1],I=Object(c.useState)("add"),J=Object(j.a)(I,2),L=J[0],A=J[1],B=Object(c.useState)(""),M=Object(j.a)(B,2),R=M[0],U=M[1];return console.log(D),Object(f.jsxs)("div",{children:[Object(f.jsx)(o.a,{sx:{flexGrow:1},children:Object(f.jsx)(s.a,{position:"static",color:"secondary",children:Object(f.jsx)(d.a,{style:{textAlign:"center"},children:Object(f.jsx)(b.a,{variant:"h6",component:"div",sx:{flexGrow:1},children:"CRUD Operation"})})})}),Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),Object(f.jsx)(o.a,{style:{display:"flex",justifyContent:"center"},sx:{display:"flex",flexWrap:"wrap","& > :not(style)":{m:1,width:628,height:250}},children:Object(f.jsxs)(O.a,{elevation:3,style:{display:"flex",flexDirection:"column",justifyContent:"space-around",alignItems:"center"},children:[Object(f.jsx)("br",{}),Object(f.jsxs)("div",{children:[Object(f.jsx)(x.a,{value:n,label:"Name",variant:"outlined",onChange:function(e){return a(e.target.value)}}),Object(f.jsx)(x.a,{value:v,style:{marginLeft:"50px"},label:"Email",variant:"outlined",onChange:function(e){return m(e.target.value)}})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)(x.a,{value:y,label:"Phone Number",variant:"outlined",onChange:function(e){return C(e.target.value)}}),Object(f.jsx)(x.a,{value:w,style:{marginLeft:"50px"},label:"Place",variant:"outlined",onChange:function(e){return k(e.target.value)}})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)(u.a,{variant:"contained",onClick:function(){return function(){if(w){if("add"===L){var e={id:Object(h.a)(),name:n,email:v,phoneNumber:y,place:w};G([].concat(Object(l.a)(D),[e]))}else if("edit"===L){var t=D.filter((function(e){return e.id!=R})),c={id:R,name:n,email:v,phoneNumber:y,place:w};G([].concat(Object(l.a)(t),[c]))}a(""),m(""),C(""),k(""),A("add")}else alert("Please enter all values!")}()},color:"success",children:"Submit"}),Object(f.jsx)("br",{}),Object(f.jsx)("br",{})]})]})}),Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),Object(f.jsx)("div",{style:{display:"flex",justifyContent:"center",overflowX:"auto"},children:Object(f.jsxs)("table",{border:"1",children:[Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{children:"Name"}),Object(f.jsx)("th",{children:"Email"}),Object(f.jsx)("th",{children:"Phone Number"}),Object(f.jsx)("th",{children:"Place"}),Object(f.jsx)("th",{children:"Edit"}),Object(f.jsx)("th",{children:"Delete"})]}),D.length>0?D.map((function(e){return Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:e.name}),Object(f.jsx)("td",{children:e.email}),Object(f.jsx)("td",{children:e.phoneNumber}),Object(f.jsx)("td",{children:e.place}),Object(f.jsx)("td",{children:Object(f.jsx)(u.a,{variant:"contained",onClick:function(){return function(e){console.log(e);var t=D.filter((function(t){return t.id==e}));console.log(t),a(t[0].name),m(t[0].email),C(t[0].phoneNumber),k(t[0].place),U(t[0].id),A("edit")}(e.id)},children:"Edit"})}),Object(f.jsx)("td",{children:Object(f.jsx)(u.a,{variant:"contained",onClick:function(){return function(e){console.log(e);var t=D.filter((function(t){return t.id!=e}));G(t)}(e.id)},color:"error",children:"Delete"})})]})})):Object(f.jsx)("span",{children:"No datas are present"})]})})]})};i.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(v,{})}),document.getElementById("root"))}},[[79,1,2]]]);
//# sourceMappingURL=main.08051c24.chunk.js.map