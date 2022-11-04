"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[396],{6396:function(e,t,n){n.r(t),n.d(t,{default:function(){return F}});var a=n(885),r=n(2791),o=n(5984),c=n(8174),s=n(1538),i=n(826),l=n(9434),u=n(6504),d=n(8260),m=n(3329),p=function(){var e=(0,r.useState)(""),t=(0,a.Z)(e,2),n=t[0],p=t[1],h=(0,r.useState)(""),_=(0,a.Z)(h,2),f=_[0],b=_[1],x=function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"contactName":p(a);break;case"contactNumber":b(a);break;default:p(""),b("")}},v=(0,l.I0)(),C=(0,l.v9)(s.K),g=C.items,j=C.addingLoader,N=function(e,t){if(function(e,t){return g.find((function(n){return n.name.toLocaleLowerCase()===e.toLocaleLowerCase()||n.number===t}))}(e,t))return c.Am.error("".concat(e," ").concat(t," is already in Phonebook"));v((0,i.uK)({name:e,number:t}))},w=(0,o.x0)(),y=(0,o.x0)();return(0,m.jsxs)("form",{onSubmit:function(e){e.preventDefault(),N(n,f),p(""),b("")},className:u.Z.insertWrapper,children:[(0,m.jsx)("label",{className:u.Z.label,htmlFor:w,children:"Name"}),(0,m.jsx)("input",{id:w,type:"text",name:"contactName",value:n,onChange:x,pattern:"^[a-zA-Za-\u044f\u0410-\u042f]+(([' -][a-zA-Za-\u044f\u0410-\u042f ])?[a-zA-Za-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,placeholder:"Input name",className:u.Z.input}),(0,m.jsx)("label",{className:u.Z.label,htmlFor:y,children:"Number"}),(0,m.jsx)("input",{id:y,type:"tel",name:"contactNumber",value:f,onChange:x,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,placeholder:"Input number",className:u.Z.input}),j?(0,m.jsx)(d.a,{}):(0,m.jsx)("button",{type:"submit",className:u.Z.button,children:"Add contact"})]})},h=n(1634),_="ContactItem_contactItem__Pnk5T",f="ContactItem_contactText__Unqs0",b="ContactItem_contactBtn__JQaBo",x=function(e){var t=e.data,n=(0,l.I0)(),a=t.id,r=t.name,o=t.number;return(0,m.jsxs)("li",{className:_,children:[(0,m.jsxs)("p",{className:f,children:[r,": ",o]}),(0,m.jsx)("button",{type:"button",className:b,id:a,onClick:function(e){return function(e,t){t===e.target.id&&(e.target.textContent="Deleting...",e.target.setAttribute("disabled","true")),n((0,i.zY)(t))}(e,a)},children:"Delete"})]})},v="ContactList_list__lyie7",C=function(){var e=(0,l.I0)(),t=(0,l.v9)(s.K),n=t.items,a=t.error,o=t.isLoading,c=(0,l.v9)(h.zK);(0,r.useEffect)((function(){e((0,i.yF)())}),[e]);var u=c?(console.log(n),n.filter((function(e){return e.name.toLocaleLowerCase().includes(c.toLocaleLowerCase())}))):n;return(0,m.jsxs)("ul",{className:v,children:[o?(0,m.jsx)("div",{children:"Loading..."}):u.map((function(e){return(0,m.jsx)(x,{data:e},e.id)})),a&&(0,m.jsx)("div",{children:"Something went wrong, please, try again"})]})},g="Filter_filterWrapper__-LBgt",j="Filter_label__hOULN",N="Filter_input__8EywS",w=function(){var e=(0,l.I0)(),t=(0,l.v9)((function(e){return e.filter})),n=(0,o.x0)();return(0,m.jsxs)("div",{className:g,children:[(0,m.jsx)("label",{htmlFor:n,className:j,children:"Find contacts by name"}),(0,m.jsx)("input",{id:n,type:"text",name:"filter",value:t,onChange:function(t){e((0,h.Tv)(t.target.value))},className:N,placeholder:"Input name"})]})},y="Phonebook_title__ipARL",F=function(){return(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)("div",{style:{padding:"40px"},children:[(0,m.jsx)("h1",{className:y,children:"Phonebook"}),(0,m.jsx)(p,{}),(0,m.jsx)("h2",{className:y,children:"Contacts"}),(0,m.jsx)(w,{}),(0,m.jsx)(C,{})]})})}},6504:function(e,t){t.Z={insertWrapper:"ContactForm_insertWrapper__ZCraW",label:"ContactForm_label__YXYvo",input:"ContactForm_input__dxiTT",button:"ContactForm_button__nVfZI",loader:"ContactForm_loader__rMVvC",switchText:"ContactForm_switchText__brpmM"}},5984:function(e,t,n){n.d(t,{x0:function(){return a}});var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,t){return e+=(t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_"}),"")}}}]);
//# sourceMappingURL=396.f78a5ef8.chunk.js.map