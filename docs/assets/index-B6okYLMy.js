import{t as L,r as S,b as U,d as g,p as b,e as p,f,c as B}from"./registry-BVpmXZbM.js";/* empty css             */import{_ as N}from"./dynamic-tag-CptWGHl0.js";import{_ as q}from"./index-EuiajR5E.js";import{_ as x}from"./render-tag-mtfFSHEK.js";import{_ as G}from"./index-BYXJZKRQ.js";import{_ as Q}from"./of-fallback-C2gEBeKK.js";import{a as W,r as Y}from"./index-eGtaP7gF.js";import{c as z}from"./index-DSBRYoSW.js";import{s as F}from"./index-D52eSIAE.js";import{h as J,a as X}from"./index-blmbJU0z.js";import{M as Z,s as D}from"./index-DnXwn7Kz.js";const ee=1300;class te extends Z{onCreate(){D(this)}toggleItemChecked(e,t,s){const a=this.isRadio()&&e!==this.state.checkedIndex;this.toggleChecked(e),a?this.emitComponentEvent({index:e,eventType:"change",el:s,originalEvent:t}):this.type!=="radio"&&this.emitComponentEvent({index:e,eventType:this.type?"change":"select",el:s,originalEvent:t}),this.rovingTabindex&&(this.tabindexPosition=this.rovingTabindex.items.findIndex(d=>d.tabIndex===0))}handleItemClick(e,t,s){this.toggleItemChecked(e,t,s)}handleItemKeydown(e,t,s){J(t,()=>{this.emitComponentEvent({eventType:"keydown",originalEvent:t,index:e})}),X(t,()=>this.toggleItemChecked(e,t,s))}handleItemKeypress({key:e}){const t=this.getTypeaheadIndex(this.getEl("menu").children,e,this.input.typeaheadTimeoutLength||ee);t!==-1&&(this.tabindexPosition=this.rovingTabindex.index=t)}emitComponentEvent({eventType:e,el:t,originalEvent:s,index:a}){const d=this.getCheckedIndexes(),l=this.type==="checkbox",n={el:t,originalEvent:s};l&&d&&d.length>1?Object.assign(n,{index:a,indexes:this.getCheckedIndexes(),checked:this.getCheckedIndexes(),checkedValues:this.getCheckedValues()}):l||this.isRadio()?Object.assign(n,{index:a,checked:this.getCheckedIndexes(),checkedValues:this.getCheckedValues()}):Object.assign(n,{index:a,checked:[a]}),this.emit(`${e}`,n)}onInput(e){this.state=this.getInputState(e)}onRender(){typeof window<"u"&&this._cleanupMakeup()}onMount(){this.tabindexPosition=0,this._setupMakeup()}onUpdate(){this._setupMakeup()}onDestroy(){this._cleanupMakeup()}_setupMakeup(){this.contentEl=this.getEl("menu"),this.rovingTabindex=z(this.contentEl,"div",{index:this.tabindexPosition,autoReset:null}),W(this.contentEl);const{getIndex:e,destroy:t}=F();this.getTypeaheadIndex=e,this.destroyTypeahead=t}_cleanupMakeup(){this.rovingTabindex&&(this.rovingTabindex.destroy(),Y(this.contentEl)),this.destroyTypeahead&&this.destroyTypeahead()}}const _="jqxpkQam",h=L(_),ye=h;S.r(_,()=>h);const C=te;h._=U(function(k,e,t,s,a,d){const{class:l,style:n,classPrefix:y,type:m,reverse:I,fixWidth:v,items:se,...T}=k;var M=m==="radio",E=m==="checkbox",$=m==="checkbox"||m==="radio",i=y||"menu",w=s.getSeparatorMap(k);e.be("span",g(b(T),{class:p([y?`${i}__menu`:"menu",I&&`${i}__menu--reverse`,v&&`${i}__menu--fix-width`,l]),style:f(n)}),"0",s,null,4),e.be("div",{role:"menu",class:p(`${i}__items`),id:t.elId("menu")},"@menu",s,null,0);{let R=0;for(const j of Q(s.items)){let o=R++;const r=`[${o}]`,{class:O,style:A,value:ae,checked:ie,badgeNumber:u,disabled:c,renderBody:V,...H}=j;var K=M?"menuitemradio":E?"menuitemcheckbox":"menuitem",P=s.isChecked(o);w[o]&&e.e("hr",{class:p(`${i}__separator`),role:"separator"},"1"+r,s,0,0),e.be("div",g(b(H),{class:p([`${i}__item`,O,u!==void 0&&`${i}__item--badged`]),style:f(A),"aria-checked":$&&(P?"true":"false"),"aria-disabled":c&&"true",role:K}),"@item[]",s,null,4,{onclick:t.d("click",!c&&"handleItemClick",!1,[o]),onkeydown:t.d("keydown",!c&&"handleItemKeydown",!1,[o]),onkeypress:t.d("keypress",!c&&"handleItemKeypress",!1)}),e.be("span",null,"2"+r,s,null,0),N(e,V,null,null,null,null,t,"3"+r),u&&x(q,{type:"menu",number:u},e,t,"4"+r),e.ee(),x(G,{},e,t,"5"+r),e.ee()}}e.ee(),e.ee()},{t:_},C);h.Component=B(C,h._);export{ye as C};