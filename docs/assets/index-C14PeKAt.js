import{t as f,r as h,b,e as p,f as u,d as x,p as y,c as C}from"./registry-CtNeIPU8.js";/* empty css              */import{_ as g,a as v,b as w,c as S}from"./index-DC55x-1T.js";import{_ as c}from"./render-tag-mtfFSHEK.js";class $ extends Marko.Component{forwardEvent(e,s,a){const l=a||this.el.querySelector("input"),k=l.value,r=l.checked;this.emit(`${e}`,{originalEvent:s,value:k,checked:r})}}const n="IJvdHPpd",t=f(n);function E(){}h.r(n,()=>$);const _={};t._=b(function(o,e,s,a,l,k){const{class:r,style:m,size:i,iconStyle:H,...d}=o;o.toJSON=E,e.be("span",{class:p(["checkbox",r]),style:u(m)},"0",a,null,1),e.e("input",x(y(d),{class:"checkbox__control",type:"checkbox"}),"1",a,0,4,{onclick:s.d("click","forwardEvent",!1,["change"]),onfocus:s.d("focus","forwardEvent",!1,["focus"]),onkeydown:s.d("keydown","forwardEvent",!1,["keydown"])}),e.be("span",{class:"checkbox__icon",hidden:""},"2",a,null,0),i==="large"?(c(g,{class:"checkbox__unchecked",focusable:"false",noSkinClasses:!0},e,s,"3"),c(v,{class:"checkbox__checked",focusable:"false",noSkinClasses:!0},e,s,"4")):(c(w,{class:"checkbox__unchecked",focusable:"false",noSkinClasses:!0},e,s,"5"),c(S,{class:"checkbox__checked",focusable:"false",noSkinClasses:!0},e,s,"6")),e.ee(),e.ee()},{t:n,s:!0},_);t.Component=C(_,t._);export{t as _};