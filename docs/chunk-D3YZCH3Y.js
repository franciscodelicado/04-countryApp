import{A as u,B as a,C as v,D as P,E as D,F as M,G as F,H as X,I as V,J as Y,K as Z,O as ee,Q as te,R as ie,S as A,T as j,U as T,W as ne,a as N,b as J,c as U,d as H,e as _,f as q,g as L,h as G,i as f,j as R,k as K,l as Q,m as w,n as l,o as g,p,q as d,r as h,s as b,t as S,u as E,v as r,w as o,x as m,y as W,z as B}from"./chunk-GNFXVI62.js";var $="https://restcountries.com/v3.1",C=(()=>{let e=class e{constructor(i){this.httpClient=i,this.countries=[],this.cacheStore={byCapital:{term:"",countries:[]},byCountries:{term:"",countries:[]},byRegions:{region:"",countries:[]}},this._loadFromLocalStorage()}_save2LocalStorage(){localStorage.setItem("cacheStore",JSON.stringify(this.cacheStore))}_loadFromLocalStorage(){localStorage.getItem("cacheStore")&&(this.cacheStore=JSON.parse(localStorage.getItem("cacheStore")))}_getURL(i){return this.httpClient.get(i).pipe(U(n=>N([])))}searchCapital(i){let n=`${$}/capital/${i}`;return this._getURL(n).pipe(_(s=>this.cacheStore.byCapital={term:i,countries:s}),_(()=>this._save2LocalStorage()))}searchCountry(i){let n=`${$}/name/${i}`;return this._getURL(n).pipe(_(s=>this.cacheStore.byCountries={term:i,countries:s}),_(()=>this._save2LocalStorage()))}searchRegion(i){let n=`${$}/region/${i}`;return this._getURL(n).pipe(_(s=>this.cacheStore.byRegions={region:i,countries:s}),_(()=>this._save2LocalStorage()))}searchCountryByAlpha(i){return this.httpClient.get(`${$}/alpha/${i}`).pipe(J(n=>n.length>0?n[0]:null),U(n=>N(null)))}};e.\u0275fac=function(n){return new(n||e)(G(Z))},e.\u0275prov=q({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var ue=t=>["/countries/by/",t];function de(t,e){if(t&1&&(r(0,"tr")(1,"td"),a(2),o(),r(3,"td"),m(4,"img",2),o(),r(5,"td"),a(6),o(),r(7,"td"),a(8),o(),r(9,"td",3),a(10),M(11,"number"),o(),r(12,"td")(13,"a",4),a(14,"Info"),o()()()),t&2){let c=e.$implicit,i=e.$index;l(2),v(i+1),l(2),p("src",c.flags.svg,w),l(2),v(c.name.official),l(2),v(c.capital),l(2),v(F(11,6,c.population)),l(3),p("routerLink",D(8,ue,c.cca3))}}function he(t,e){if(t&1&&(r(0,"table",1)(1,"thead")(2,"tr")(3,"th"),a(4,"#"),o(),r(5,"th"),a(6,"Flag"),o(),r(7,"th"),a(8,"Name"),o(),r(9,"th"),a(10,"Capital"),o(),r(11,"th"),a(12,"Population"),o(),m(13,"th"),o()(),r(14,"tbody"),S(15,de,15,10,"tr",null,b),o()()),t&2){let c=u();l(15),E(c.countries)}}function fe(t,e){t&1&&(r(0,"div",5)(1,"h4"),a(2,"There are no countries to show"),o()())}var I=(()=>{let e=class e{constructor(){this.countries=[]}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=f({type:e,selectors:[["countries-table"]],inputs:{countries:"countries"},decls:2,vars:1,consts:[["class","table table-hover"],[1,"table","table-hover"],[3,"src"],[2,"text-align","right"],[1,"btn","btn-outline-primary",3,"routerLink"],[1,"alert","alert-warning","text-center"]],template:function(n,s){n&1&&d(0,he,17,0,"table",0)(1,fe,3,0),n&2&&h(0,s.countries.length>0?0:1)},dependencies:[ie,V],styles:["table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse}td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{border:1px solid #d3d3d3;padding:5px}tr[_ngcontent-%COMP%]:nth-child(2n){background-color:#f2f2f2}img[_ngcontent-%COMP%]{width:25px}"]});let t=e;return t})();function Ce(t,e){t&1&&m(0,"shared-loading-spinner")}function ye(t,e){if(t&1&&m(0,"countries-table",3),t&2){let c=u();p("countries",c.countries)}}var ae=(()=>{let e=class e{constructor(i){this._countriesService=i,this.countries=[],this.initialValue="",this.isLoading=!1}ngOnInit(){this.countries=this._countriesService.cacheStore.byCapital.countries,this.initialValue=this._countriesService.cacheStore.byCapital.term}searchByCapital(i){this.isLoading=!0,this._countriesService.searchCapital(i).subscribe(n=>{this.countries=n,this.isLoading=!1}),console.log({countries:this.countries})}};e.\u0275fac=function(n){return new(n||e)(g(C))},e.\u0275cmp=f({type:e,selectors:[["countries-by-capital-page"]],decls:11,vars:2,consts:[[1,"row"],[1,"col"],["placeholder","Buscar por capital",3,"initialValue","onDebounce","onValue"],[3,"countries"]],template:function(n,s){n&1&&(r(0,"h2"),a(1,"Por Capital"),o(),m(2,"hr"),r(3,"div",0)(4,"div",1)(5,"shared-search-box",2),B("onDebounce",function(y){return s.searchByCapital(y)})("onValue",function(y){return s.searchByCapital(y)}),o()()(),r(6,"div",0)(7,"div",1),m(8,"hr"),d(9,Ce,1,0,"shared-loading-spinner")(10,ye,1,1),o()()),n&2&&(l(5),p("initialValue",s.initialValue),l(4),h(9,s.isLoading?9:10))},dependencies:[j,T,I],encapsulation:2});let t=e;return t})();function _e(t,e){t&1&&m(0,"shared-loading-spinner")}function ve(t,e){if(t&1&&m(0,"countries-table",3),t&2){let c=u();p("countries",c.countries)}}var ce=(()=>{let e=class e{constructor(i){this._countriesService=i,this.countries=[],this.initialValue="",this.isLoading=!1}ngOnInit(){this.countries=this._countriesService.cacheStore.byCountries.countries,this.initialValue=this._countriesService.cacheStore.byCountries.term}searchByCountry(i){this.isLoading=!0,this._countriesService.searchCountry(i).subscribe(n=>{this.countries=n,this.isLoading=!1}),console.log({countries:this.countries})}};e.\u0275fac=function(n){return new(n||e)(g(C))},e.\u0275cmp=f({type:e,selectors:[["countries-by-county-page"]],decls:11,vars:2,consts:[[1,"row"],[1,"col"],["placeholder","Buscar por pa\xEDs",3,"initialValue","onDebounce","onValue"],[3,"countries"]],template:function(n,s){n&1&&(r(0,"h2"),a(1,"Por Pa\xEDs"),o(),m(2,"hr"),r(3,"div",0)(4,"div",1)(5,"shared-search-box",2),B("onDebounce",function(y){return s.searchByCountry(y)})("onValue",function(y){return s.searchByCountry(y)}),o()()(),r(6,"div",0)(7,"div",1),m(8,"hr"),d(9,_e,1,0,"shared-loading-spinner")(10,ve,1,1),o()()),n&2&&(l(5),p("initialValue",s.initialValue),l(4),h(9,s.isLoading?9:10))},dependencies:[j,T,I]});let t=e;return t})();var xe=t=>({"btn-outline-primary":t});function be(t,e){if(t&1){let c=W();r(0,"button",4),B("click",function(){K(c);let n=u().$implicit,s=u();return Q(s.searchByRegion(n))}),a(1),o()}if(t&2){let c=u().$implicit,i=u();p("ngClass",D(2,xe,c===i.selectedRegion)),l(1),P(" ",c," ")}}function Se(t,e){if(t&1&&d(0,be,2,4,"button",3),t&2){let c=e.$implicit;h(0,c!==""?0:-1)}}function Ee(t,e){t&1&&m(0,"shared-loading-spinner")}function Be(t,e){if(t&1&&m(0,"countries-table",5),t&2){let c=u();p("countries",c.countries)}}var se=(()=>{let e=class e{constructor(i){this._countriesService=i,this.countries=[],this.regions=["Africa","Americas","Asia","Europe","Oceania"],this.isLoading=!1}ngOnInit(){this.countries=this._countriesService.cacheStore.byRegions.countries,this.selectedRegion=this._countriesService.cacheStore.byRegions.region}searchByRegion(i){this.selectedRegion=i,this.isLoading=!0,this._countriesService.searchRegion(i).subscribe(n=>{this.countries=n,this.isLoading=!1}),console.log({countries:this.countries})}};e.\u0275fac=function(n){return new(n||e)(g(C))},e.\u0275cmp=f({type:e,selectors:[["countries-by-region-page"]],decls:12,vars:1,consts:[[1,"row"],[1,"col","text-center"],[1,"col"],["class","btn mx-2 ",3,"ngClass"],[1,"btn","mx-2",3,"ngClass","click"],[3,"countries"]],template:function(n,s){n&1&&(r(0,"h2"),a(1,"Por Regi\xF3n"),o(),m(2,"hr"),r(3,"div",0)(4,"div",1),S(5,Se,1,1,null,null,b),o()(),r(7,"div",0)(8,"div",2),m(9,"hr"),d(10,Ee,1,0,"shared-loading-spinner")(11,Be,1,1),o()()),n&2&&(l(5),E(s.regions),l(5),h(10,s.isLoading?10:11))},dependencies:[X,T,I]});let t=e;return t})();function Pe(t,e){t&1&&(r(0,"div",1),a(1," No existe el pa\xEDs "),o())}function Te(t,e){if(t&1&&(r(0,"span",11),a(1),o()),t&2){let c=e.$implicit;l(1),P("",c.common," ")}}function Ie(t,e){if(t&1&&(r(0,"div")(1,"div",2)(2,"div",3)(3,"h2"),a(4," Pa\xEDs: "),r(5,"strong"),a(6),o()()()(),r(7,"div",2)(8,"div",4)(9,"h3"),a(10,"Bandera"),o(),m(11,"img",5),o(),r(12,"div",6)(13,"h3"),a(14,"Information"),o(),r(15,"ul",7)(16,"li",8)(17,"strong"),a(18,"Population:"),o(),a(19),M(20,"number"),o(),r(21,"li",8)(22,"strong"),a(23,"Country Code:"),o(),a(24),o()()()(),r(25,"div",9)(26,"div",6)(27,"h3"),a(28,"Translation"),o(),r(29,"div",10),S(30,Te,2,1,"span",12,b),o()()()()),t&2){let c=u();l(6),v(c.country.name.common),l(5),p("src",c.country.flags.png,w)("alt",c.country.name.common),l(8),P(" ",F(20,5,c.country.population)," "),l(5),P(" ",c.country.cca3," "),l(6),E(c.object.values(c.country.translations))}}var le=(()=>{let e=class e{constructor(i,n,s){this._activateRoute=i,this._countryService=n,this._router=s,this.object=Object}ngOnInit(){this._activateRoute.params.pipe(H(({id:i})=>this._countryService.searchCountryByAlpha(i))).subscribe(i=>{if(!i){this._router.navigateByUrl("/countries");return}this.country=i})}};e.\u0275fac=function(n){return new(n||e)(g(ee),g(C),g(te))},e.\u0275cmp=f({type:e,selectors:[["countries-country-page"]],decls:2,vars:1,consts:[["class","alert alert-danger","role","alert"],["role","alert",1,"alert","alert-danger"],[1,"row"],[1,"col-12"],[1,"col-4"],[1,"img-thumbnail",3,"src","alt"],[1,"col"],[1,"list-group"],[1,"list-group-item"],[1,"row","mt-2"],[1,"d-flex","flex-wrap"],[1,"badge","bg-primary","m-1"],["class","badge bg-primary m-1"]],template:function(n,s){n&1&&d(0,Pe,2,0,"div",0)(1,Ie,32,7),n&2&&h(0,s.country?1:0)},dependencies:[V]});let t=e;return t})();var Le=[{path:"by-region",component:se},{path:"by-capital",component:ae},{path:"by-country",component:ce},{path:"by/:id",component:le},{path:"**",redirectTo:"by-capital"}],me=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=R({type:e}),e.\u0275inj=L({imports:[A.forChild(Le),A]});let t=e;return t})();var it=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=R({type:e}),e.\u0275inj=L({imports:[Y,me,ne]});let t=e;return t})();export{it as CountriesModule};
