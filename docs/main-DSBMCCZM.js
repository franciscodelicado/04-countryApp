import{G as l,H as d,I as f,K as u,N as a,P as h,Q as M,f as r,h as c,i,s,t as m,u as p}from"./chunk-P2IP5LW3.js";var v=[{path:"countries",loadChildren:()=>import("./chunk-AGDJ5QVH.js").then(o=>o.CountriesModule)},{path:"**",redirectTo:"countries/by-capital"}],C=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i({type:t}),t.\u0275inj=r({imports:[a.forRoot(v),a]});let o=t;return o})();var b=(()=>{let t=class t{constructor(){this.title="countryApp"}};t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c({type:t,selectors:[["app-root"]],decls:5,vars:0,consts:[[1,"row","mt-4"],[1,"col-2"],[1,"col-10"]],template:function(e,w){e&1&&(s(0,"div",0)(1,"div",1),p(2,"share-sidebar"),m(),s(3,"div",2),p(4,"router-outlet"),m()())},dependencies:[u,h]});let o=t;return o})();var g=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i({type:t,bootstrap:[b]}),t.\u0275inj=r({imports:[C,f,l,M]});let o=t;return o})();d().bootstrapModule(g).catch(o=>console.error(o));