"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[850],{3850:function(e,a,t){t.r(a);var r=t(885),n=t(2791),s=t(9434),o=t(5984),u=t(3541),l=t(5822),i=t(6504),c=t(8260),m=t(3329);a.default=function(){var e=(0,n.useState)(""),a=(0,r.Z)(e,2),t=a[0],p=a[1],d=(0,n.useState)(""),_=(0,r.Z)(d,2),h=_[0],b=_[1],f=(0,n.useState)(""),x=(0,r.Z)(f,2),v=x[0],C=x[1],Z=function(e){var a=e.target,t=a.name,r=a.value;switch(t){case"userName":p(r);break;case"userEmail":b(r);break;case"userPassword":C(r);break;default:p(""),b(""),C("")}},w=(0,s.I0)(),g=(0,s.v9)(u.v),N=g.isLoading,j=g.isLoggedIn,k=(0,n.useMemo)((function(){return(0,o.x0)()}),[]),F=(0,n.useMemo)((function(){return(0,o.x0)()}),[]),y=(0,n.useMemo)((function(){return(0,o.x0)()}),[]);return(0,m.jsxs)("form",{onSubmit:function(e){e.preventDefault(),w((0,l.a$)({name:t,email:h,password:v})),j&&(p(""),b(""),C(""))},className:i.Z.insertWrapper,children:[(0,m.jsx)("label",{className:i.Z.label,htmlFor:k,children:"Name"}),(0,m.jsx)("input",{id:k,type:"text",name:"userName",value:t,onChange:Z,required:!0,placeholder:"User_Name",className:i.Z.input}),(0,m.jsx)("label",{className:i.Z.label,htmlFor:F,children:"Email"}),(0,m.jsx)("input",{id:F,type:"email",name:"userEmail",value:h,onChange:Z,required:!0,placeholder:"your_email@mail.com",className:i.Z.input}),(0,m.jsx)("label",{className:i.Z.label,htmlFor:y,children:"Password"}),(0,m.jsx)("input",{id:y,type:"password",name:"userPassword",value:v,onChange:Z,required:!0,placeholder:"min 7 symbols",className:i.Z.input}),N?(0,m.jsx)(c.a,{}):(0,m.jsx)("button",{type:"submit",className:i.Z.button,children:"Sign Up"})]})}},6504:function(e,a){a.Z={insertWrapper:"ContactForm_insertWrapper__ZCraW",label:"ContactForm_label__YXYvo",input:"ContactForm_input__dxiTT",button:"ContactForm_button__nVfZI",loader:"ContactForm_loader__rMVvC",switchText:"ContactForm_switchText__brpmM"}},5984:function(e,a,t){t.d(a,{x0:function(){return r}});var r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,a){return e+=(a&=63)<36?a.toString(36):a<62?(a-26).toString(36).toUpperCase():a>62?"-":"_"}),"")}}}]);
//# sourceMappingURL=850.b94c7625.chunk.js.map