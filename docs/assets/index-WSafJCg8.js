var ze=Object.defineProperty;var Je=(t,e,n)=>e in t?ze(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var ge=(t,e,n)=>(Je(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&l(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();function J(){}function We(t){return t()}function Ae(){return Object.create(null)}function q(t){t.forEach(We)}function Ne(t){return typeof t=="function"}function xe(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let ce;function Qe(t,e){return t===e?!0:(ce||(ce=document.createElement("a")),ce.href=e,t===ce.href)}function Xe(t){return Object.keys(t).length===0}function s(t,e){t.appendChild(e)}function R(t,e,n){t.insertBefore(e,n||null)}function T(t){t.parentNode&&t.parentNode.removeChild(t)}function Ee(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function d(t){return document.createElement(t)}function H(t){return document.createTextNode(t)}function L(){return H(" ")}function Me(){return H("")}function O(t,e,n,l){return t.addEventListener(e,n,l),()=>t.removeEventListener(e,n,l)}function p(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function qe(t){return Array.from(t.childNodes)}function ae(t,e){e=""+e,t.data!==e&&(t.data=e)}function _e(t,e){t.value=e??""}function U(t,e,n,l){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,l?"important":"")}function Be(t,e,n){for(let l=0;l<t.options.length;l+=1){const o=t.options[l];if(o.__value===e){o.selected=!0;return}}(!n||e!==void 0)&&(t.selectedIndex=-1)}function He(t){const e=t.querySelector(":checked");return e&&e.__value}let ye;function le(t){ye=t}const ee=[],me=[];let te=[];const Le=[],Ue=Promise.resolve();let be=!1;function Ke(){be||(be=!0,Ue.then(Ye))}function Ve(){return Ke(),Ue}function fe(t){te.push(t)}const pe=new Set;let $=0;function Ye(){if($!==0)return;const t=ye;do{try{for(;$<ee.length;){const e=ee[$];$++,le(e),Ge(e.$$)}}catch(e){throw ee.length=0,$=0,e}for(le(null),ee.length=0,$=0;me.length;)me.pop()();for(let e=0;e<te.length;e+=1){const n=te[e];pe.has(n)||(pe.add(n),n())}te.length=0}while(ee.length);for(;Le.length;)Le.pop()();be=!1,pe.clear(),le(t)}function Ge(t){if(t.fragment!==null){t.update(),q(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(fe)}}function Ze(t){const e=[],n=[];te.forEach(l=>t.indexOf(l)===-1?e.push(l):n.push(l)),n.forEach(l=>l()),te=e}const $e=new Set;function je(t,e){t&&t.i&&($e.delete(t),t.i(e))}function oe(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function et(t,e){t.d(1),e.delete(t.key)}function tt(t,e,n,l,o,r,u,i,c,f,v,F){let m=t.length,b=r.length,k=m;const _={};for(;k--;)_[t[k].key]=k;const I=[],K=new Map,C=new Map,S=[];for(k=b;k--;){const w=F(o,r,k),y=n(w);let E=u.get(y);E?l&&S.push(()=>E.p(w,e)):(E=f(y,w),E.c()),K.set(y,I[k]=E),y in _&&C.set(y,Math.abs(k-_[y]))}const N=new Set,Q=new Set;function Y(w){je(w,1),w.m(i,v),u.set(w.key,w),v=w.first,b--}for(;m&&b;){const w=I[b-1],y=t[m-1],E=w.key,j=y.key;w===y?(v=w.first,m--,b--):K.has(j)?!u.has(E)||N.has(E)?Y(w):Q.has(j)?m--:C.get(E)>C.get(j)?(Q.add(E),Y(w)):(N.add(j),m--):(c(y,u),m--)}for(;m--;){const w=t[m];K.has(w.key)||c(w,u)}for(;b;)Y(I[b-1]);return q(S),I}function nt(t,e,n){const{fragment:l,after_update:o}=t.$$;l&&l.m(e,n),fe(()=>{const r=t.$$.on_mount.map(We).filter(Ne);t.$$.on_destroy?t.$$.on_destroy.push(...r):q(r),t.$$.on_mount=[]}),o.forEach(fe)}function lt(t,e){const n=t.$$;n.fragment!==null&&(Ze(n.after_update),q(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ot(t,e){t.$$.dirty[0]===-1&&(ee.push(t),Ke(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ut(t,e,n,l,o,r,u=null,i=[-1]){const c=ye;le(t);const f=t.$$={fragment:null,ctx:[],props:r,update:J,not_equal:o,bound:Ae(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:Ae(),dirty:i,skip_bound:!1,root:e.target||c.$$.root};u&&u(f.root);let v=!1;if(f.ctx=n?n(t,e.props||{},(F,m,...b)=>{const k=b.length?b[0]:m;return f.ctx&&o(f.ctx[F],f.ctx[F]=k)&&(!f.skip_bound&&f.bound[F]&&f.bound[F](k),v&&ot(t,F)),m}):[],f.update(),v=!0,q(f.before_update),f.fragment=l?l(f.ctx):!1,e.target){if(e.hydrate){const F=qe(e.target);f.fragment&&f.fragment.l(F),F.forEach(T)}else f.fragment&&f.fragment.c();e.intro&&je(t.$$.fragment),nt(t,e.target,e.anchor),Ye()}le(c)}class rt{constructor(){ge(this,"$$");ge(this,"$$set")}$destroy(){lt(this,1),this.$destroy=J}$on(e,n){if(!Ne(n))return J;const l=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return l.push(n),()=>{const o=l.indexOf(n);o!==-1&&l.splice(o,1)}}$set(e){this.$$set&&!Xe(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const it="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(it);function st(t){const e={title:"",lines:[]};let n=[],l=0;return t.split(`
`).forEach(o=>{let r=l;l+=o.length+1,o.trim().length!=0&&(o.indexOf("!!")===0&&!e.title.length?e.title=o.substring(2):(n.length==2&&(e.lines.push({targetLanguage:n[0],originalLanguage:n[1],words:[]}),n.length=0),o[0]=="-"?(n.length==1&&(e.lines.push({targetLanguage:n[0],words:[]}),n.length=0),e.lines.push({isLineBreak:!0,words:[]})):n.push({value:o,start:r,end:r+o.length})))}),n.length&&e.lines.push({targetLanguage:n[0],originalLanguage:n[1],words:[]}),e.lines.forEach(o=>{o.words=ct(o.targetLanguage,o.originalLanguage)}),e}function ct(t,e){const n=Se(t),l=Se(e),o=[],r=Math.max(n.length,l.length);for(let u=0;u<r;u++)o.push({left:n[u],right:l[u]});return o}function Se(t){return t==null?[]:ft(dt(at(t)))}function ft(t){const e=[];for(let n=0;n<t.length;n++){const l=t[n],o=l.value,r=o[0]=="{"&&o[o.length-1]=="}";if(n>0&&r){const u=e[e.length-1];u.tooltip=o.substring(1,o.length-1)}else e.push(l)}return e}function at(t){const e=/[^+{} ]+|\+|{.+?}/gm,n=[];let l;for(;(l=e.exec(t.value))!==null;){l.index===e.lastIndex&&e.lastIndex++;const o=t.start+l.index;n.push({value:l[0],start:o,end:o+l[0].length})}return n}function dt(t){const e=[];for(let n=0;n<t.length;n++){let l=t[n];if(l.value=="+"&&n>0&&n<t.length-1){const o=e[e.length-1];let r;do r=t[n+1],n++;while(r.value=="+"&&n<t.length-1);const u={value:o.value+" "+r.value,start:o.start,end:r.end};e[e.length-1]=u}else e.push(l)}return e}const ve=[{name:"Classic",foreground:"#009682",background:"#26d1ba"},{name:"Red",foreground:"#D32F2F",background:"#FF8A80"},{name:"Pink",foreground:"#C2185B",background:"#FF80AB"},{name:"Purple",foreground:"#7B1FA2",background:"hsl(292 60% 75% / 1)"},{name:"Deep Purple",foreground:"#512DA8",background:"#B388FF"},{name:"Indigo",foreground:"#303F9F",background:"#8C9EFF"},{name:"Blue",foreground:"#1976D2",background:"#82B1FF"},{name:"Light Blue",foreground:"#0288D1",background:"#1f7fb2"},{name:"Cyan",foreground:"#0097A7",background:"#a3e0e0"},{name:"Teal",foreground:"#00796B",background:"#A7FFEB"},{name:"Green",foreground:"#388E3C",background:"#B9F6CA"},{name:"Light Green",foreground:"#689F38",background:"#CCFF90"},{name:"Lime",foreground:"#AFB42B",background:"#F4FF81"},{name:"Yellow",foreground:"#FBC02D",background:"#FFFF8D"},{name:"Amber",foreground:"#FFA000",background:"#FFE57F"},{name:"Orange",foreground:"#F57C00",background:"#FFD180"},{name:"Deep Orange",foreground:"#E64A19",background:"#FF9E80"}],ht="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAABnUlEQVRYw+2XQcrCMBCFP8WN0CLoUroTryC46in0DvYC3XWnJ2hP0Z0uxGPoDRRU0APoyn+ThErbNFoa+MHJcl7mJTN5kwR+9h+sxYSQlD1nXrw4syclZEKrfvAhK068SsaJFcPvg/eJeZQGl+NBTP+b8DPulcHluDP7LHiH5C3Akx0BPiMcHEb4BOx4vmESOqbhu6wzE68EuIU4l4BrBrmma7b6TSa/EY4W7RBl6rQx2UWSWfvUaMfTzD6SKvBcQQ94xjXzOKh5cx1wwE2t3vvoWHhqFzcG5bBY5b44OXKVxYmStYjLVSshUQlCRwCRWl6JupcCcCk9OXoCh4vwL4vcbY7CvShNoZ4AFsJ/pJ13TpRqe193r55S9yTvDIVrW6v7bkWUMO9KhSuoRRCIKGneJaXi1yLwlUxzJiU21kyvKjKMldxyJjXg1iJwlRbsEzSeIpMiVxNoimxyTKsJNMfURGjVBBqhmbSKKgJtq2i82TXeri1cOI1fmRYu/cafLRYeXhaejo0/fi083y18QKx8oSx8Aq18Y3/WvP0BRWMFw2a7DC4AAAAASUVORK5CYII=";function De(t,e,n){const l=t.slice();return l[31]=e[n],l}function Te(t,e,n){const l=t.slice();return l[34]=e[n],l}function gt(t,e,n){const l=t.slice();return l[37]=e[n],l}function pt(t){let e;return{c(){e=d("option"),e.textContent=`${t[37].name} `,e.__value=t[37],_e(e,e.__value)},m(n,l){R(n,e,l)},p:J,d(n){n&&T(e)}}}function Pe(t){let e,n=t[2].title+"",l;return{c(){e=d("h3"),l=H(n)},m(o,r){R(o,e,r),s(e,l)},p(o,r){r[0]&4&&n!==(n=o[2].title+"")&&ae(l,n)},d(o){o&&T(e)}}}function _t(t){let e=[],n=new Map,l,o=oe(t[31].words);const r=u=>ue(u[34]);for(let u=0;u<o.length;u+=1){let i=Te(t,o,u),c=r(i);n.set(c,e[u]=Re(c,i))}return{c(){for(let u=0;u<e.length;u+=1)e[u].c();l=Me()},m(u,i){for(let c=0;c<e.length;c+=1)e[c]&&e[c].m(u,i);R(u,l,i)},p(u,i){i[0]&65996&&(o=oe(u[31].words),e=tt(e,i,r,1,u,o,n,l.parentNode,et,Re,l,Te))},d(u){u&&T(l);for(let i=0;i<e.length;i+=1)e[i].d(u)}}}function mt(t){let e;return{c(){e=d("hr")},m(n,l){R(n,e,l)},p:J,d(n){n&&T(e)}}}function bt(t){let e;return{c(){e=d("span"),e.textContent="⚠️",U(e,"font-style","normal")},m(n,l){R(n,e,l)},p:J,d(n){n&&T(e)}}}function vt(t){let e=t[34].left.value+"",n,l,o,r=t[34].left.tooltip&&Oe(t);return{c(){n=H(e),l=L(),r&&r.c(),o=Me()},m(u,i){R(u,n,i),R(u,l,i),r&&r.m(u,i),R(u,o,i)},p(u,i){i[0]&4&&e!==(e=u[34].left.value+"")&&ae(n,e),u[34].left.tooltip?r?r.p(u,i):(r=Oe(u),r.c(),r.m(o.parentNode,o)):r&&(r.d(1),r=null)},d(u){u&&(T(n),T(l),T(o)),r&&r.d(u)}}}function Oe(t){let e,n,l,o,r,u=t[34].left.tooltip+"",i;return{c(){e=d("div"),n=d("img"),o=L(),r=d("span"),i=H(u),p(n,"alt",""),Qe(n.src,l=ht)||p(n,"src",l),U(n,"width","20px"),U(n,"margin-left","4px"),p(r,"class","tooltiptext"),p(e,"class","tooltip")},m(c,f){R(c,e,f),s(e,n),s(e,o),s(e,r),s(r,i)},p(c,f){f[0]&4&&u!==(u=c[34].left.tooltip+"")&&ae(i,u)},d(c){c&&T(e)}}}function yt(t){let e;return{c(){e=d("span"),e.textContent="⚠️",U(e,"font-style","normal")},m(n,l){R(n,e,l)},p:J,d(n){n&&T(e)}}}function kt(t){let e=t[34].right.value+"",n;return{c(){n=H(e)},m(l,o){R(l,n,o)},p(l,o){o[0]&4&&e!==(e=l[34].right.value+"")&&ae(n,e)},d(l){l&&T(n)}}}function Re(t,e){let n,l,o,r,u,i,c,f;function v(C,S){return C[34].left?vt:bt}let F=v(e),m=F(e);function b(C,S){return C[34].right?kt:yt}let k=b(e),_=k(e);function I(){return e[22](e[34])}function K(...C){return e[24](e[34],...C)}return{key:t,first:null,c(){n=d("div"),l=d("div"),m.c(),o=L(),r=d("div"),_.c(),i=L(),p(l,"data-type","left"),p(r,"data-type","right"),p(r,"style",u=e[6][ue(e[34])]?e[8]:e[7]),p(n,"class","dword"),this.first=n},m(C,S){R(C,n,S),s(n,l),m.m(l,null),s(n,o),s(n,r),_.m(r,null),s(n,i),c||(f=[O(n,"mouseenter",I),O(n,"mouseleave",e[23]),O(n,"click",K)],c=!0)},p(C,S){e=C,F===(F=v(e))&&m?m.p(e,S):(m.d(1),m=F(e),m&&(m.c(),m.m(l,null))),k===(k=b(e))&&_?_.p(e,S):(_.d(1),_=k(e),_&&(_.c(),_.m(r,null))),S[0]&452&&u!==(u=e[6][ue(e[34])]?e[8]:e[7])&&p(r,"style",u)},d(C){C&&T(n),m.d(),_.d(),c=!1,q(f)}}}function Ie(t){let e,n;function l(u,i){return u[31].isLineBreak?mt:_t}let o=l(t),r=o(t);return{c(){e=d("div"),r.c(),n=L(),p(e,"class","line")},m(u,i){R(u,e,i),r.m(e,null),s(e,n)},p(u,i){o===(o=l(u))&&r?r.p(u,i):(r.d(1),r=o(u),r&&(r.c(),r.m(e,n)))},d(u){u&&T(e),r.d()}}}function wt(t){let e,n,l,o,r,u,i,c,f,v,F,m,b,k,_,I,K,C,S,N,Q,Y,w,y,E,j,V,re,ne,W,ie,x,h,g,B,G,ke,z,de,se,he,we,Fe=oe(ve),X=[];for(let a=0;a<Fe.length;a+=1)X[a]=pt(gt(t,Fe,a));let P=t[2].title.length&&Pe(t),Z=oe(t[2].lines),D=[];for(let a=0;a<Z.length;a+=1)D[a]=Ie(De(t,Z,a));return{c(){e=d("div"),n=d("div"),l=d("div"),o=d("div"),r=d("div"),u=d("button"),i=H("Editor"),f=L(),v=d("div"),F=d("button"),F.textContent="Hide all",m=L(),b=d("button"),b.textContent="Show all",k=L(),_=d("div"),I=d("button"),I.textContent="Clear",K=L(),C=d("button"),C.textContent="Load TXT",S=L(),N=d("input"),Q=L(),Y=d("button"),Y.textContent="Save TXT",w=L(),y=d("div"),E=d("button"),E.textContent="Help",j=L(),V=d("button"),V.textContent="Print",re=L(),ne=d("span"),W=d("select");for(let a=0;a<X.length;a+=1)X[a].c();ie=L(),x=d("div"),h=d("div"),g=d("textarea"),ke=L(),z=d("div"),P&&P.c(),de=L();for(let a=0;a<D.length;a+=1)D[a].c();p(u,"class",c="editor-button "+(t[5]?"button-primary":"")),p(r,"class","two columns"),p(v,"class","three columns"),p(N,"type","file"),p(N,"accept",".txt"),p(N,"id","uploadFile"),N.hidden=!0,p(_,"class","four columns"),U(_,"text-align","right"),U(W,"width","50px"),U(W,"appearance","none"),U(W,"border","2px solid "+t[1].foreground),t[1]===void 0&&fe(()=>t[19].call(W)),p(y,"class","three columns"),U(y,"text-align","right"),p(o,"class","controls row"),p(g,"class",B=t[5]?"splitted":""),p(g,"spellcheck","false"),p(g,"placeholder","Paste text here"),p(h,"class",G="one-third column editor "+(t[5]?"":"hidden")),p(z,"class",se="column content "+(t[5]?"splitted two-thirds":"")),p(x,"class","row"),p(l,"class","column"),p(n,"class","row"),U(n,"margin-top","1%"),U(n,"margin-bottom","1%"),p(e,"class","container")},m(a,M){R(a,e,M),s(e,n),s(n,l),s(l,o),s(o,r),s(r,u),s(u,i),s(o,f),s(o,v),s(v,F),s(v,m),s(v,b),s(o,k),s(o,_),s(_,I),s(_,K),s(_,C),s(_,S),s(_,N),s(_,Q),s(_,Y),s(o,w),s(o,y),s(y,E),s(y,j),s(y,V),s(y,re),s(y,ne),s(ne,W);for(let A=0;A<X.length;A+=1)X[A]&&X[A].m(W,null);Be(W,t[1],!0),s(l,ie),s(l,x),s(x,h),s(h,g),_e(g,t[0]),t[21](g),s(x,ke),s(x,z),P&&P.m(z,null),s(z,de);for(let A=0;A<D.length;A+=1)D[A]&&D[A].m(z,null);he||(we=[O(u,"click",t[12]),O(F,"click",t[17]),O(b,"click",t[18]),O(I,"click",t[13]),O(C,"click",Ft),O(N,"change",t[14]),O(Y,"click",t[15]),O(E,"click",t[10]),O(V,"click",t[11]),O(W,"change",t[19]),O(g,"input",t[20])],he=!0)},p(a,M){if(M[0]&32&&c!==(c="editor-button "+(a[5]?"button-primary":""))&&p(u,"class",c),M[0]&2&&U(W,"border","2px solid "+a[1].foreground),M[0]&2&&Be(W,a[1]),M[0]&32&&B!==(B=a[5]?"splitted":"")&&p(g,"class",B),M[0]&1&&_e(g,a[0]),M[0]&32&&G!==(G="one-third column editor "+(a[5]?"":"hidden"))&&p(h,"class",G),a[2].title.length?P?P.p(a,M):(P=Pe(a),P.c(),P.m(z,de)):P&&(P.d(1),P=null),M[0]&65996){Z=oe(a[2].lines);let A;for(A=0;A<Z.length;A+=1){const Ce=De(a,Z,A);D[A]?D[A].p(Ce,M):(D[A]=Ie(Ce),D[A].c(),D[A].m(z,null))}for(;A<D.length;A+=1)D[A].d(1);D.length=Z.length}M[0]&32&&se!==(se="column content "+(a[5]?"splitted two-thirds":""))&&p(z,"class",se)},i:J,o:J,d(a){a&&T(e),Ee(X,a),t[21](null),P&&P.d(),Ee(D,a),he=!1,q(we)}}}function Ft(){document.getElementById("uploadFile").click()}function ue(t){var e,n;return((e=t.left)==null?void 0:e.start)??((n=t.right)==null?void 0:n.start)??-1}function Ct(t,e,n){t.focus();const l=t.value;t.value=l.substring(0,n),t.scrollTop=t.scrollHeight,t.value=l,t.setSelectionRange(e,n)}function At(t,e){var n=e.getBoundingClientRect(),l=t.clientY-n.top,o=n.bottom-n.top;return l<o/2?0:1}function Et(t,e,n){let l,o;const r=`!!Language Learning Tool

try to+click on words {this is a tooltip} and buttons

попробуй нажать на слова и кнопки
let's learn
давай изучать

your language {here is another tooltip!!}
твой язык

(hover a+word and press "Q" for fun)
наведи на+слово и нажми "Q" для веселья
-
while you're+enjoying+it
пока тебе+это+нравится
`;let u=null,i="",c,f=!0,v;const F=localStorage.getItem("selectedColorName"),m=ve.find(h=>h.name==F);m?v=m:v=ve[0];let b={};window.onload=()=>{n(0,i=c.value)};let k={title:"",lines:[]};window.onbeforeunload=function(h){i.trim()!=""&&h.preventDefault()},document.body.addEventListener("keydown",h=>{h.code=="KeyQ"&&(u!=null&&u.length)&&(h.preventDefault(),window.open("https://wooordhunt.ru/word/"+u))});function _(h){if(h){const g={};k.lines.flatMap(B=>B.words.map(ue)).forEach(B=>{g[B]=!0}),n(6,b=g)}else n(6,b={})}function I(){n(5,f=!0),(!i.length||confirm("Are you sure? Your text will be discarded"))&&n(0,i=r)}async function K(){n(5,f=!1),_(!1),await Ve(),print()}function C(){n(5,f=!f)}function S(){confirm("Are you sure? Your text will be discarded")&&(n(5,f=!0),n(0,i=""))}function N(){const h=document.getElementById("uploadFile").files[0];h&&Q(h,document.querySelector(".editor>textarea"))}function Q(h,g){const B=new FileReader;B.addEventListener("load",G=>{n(0,i=G.target.result.toString()),document.getElementById("uploadFile").value=null}),B.readAsText(h)}function Y(){let h=document.title+"-"+Date.now()+".txt",g=document.createElement("a");g.download=h;let B=new Blob([""+i],{type:"text/plain"});g.href=URL.createObjectURL(B),g.click(),URL.revokeObjectURL(g.href)}function w(h,g){if(f)g.right&&g.left?At(h,h.currentTarget)==1?y(g.right):y(g.left):g.right?y(g.right):g.left&&y(g.left);else{const B=ue(g);b[B]?delete b[B]:n(6,b[B]=!0,b),n(6,b),n(0,i)}}function y(h){Ct(c,h.start,h.end)}const E=()=>_(!0),j=()=>_(!1);function V(){v=He(this),n(1,v)}function re(){i=this.value,n(0,i)}function ne(h){me[h?"unshift":"push"](()=>{c=h,n(4,c)})}const W=h=>{var g;return n(3,u=(g=h.left)==null?void 0:g.value)},ie=()=>n(3,u=void 0),x=(h,g)=>w(g,h);return t.$$.update=()=>{t.$$.dirty[0]&2&&n(8,l=`background: ${v.background}; color: ${v.background}`),t.$$.dirty[0]&2&&n(7,o=`color: ${v.foreground}`),t.$$.dirty[0]&2&&localStorage.setItem("selectedColorName",v.name),t.$$.dirty[0]&5&&(n(2,k=st(i)),document.title=k.title),t.$$.dirty[0]&1&&n(6,b={})},[i,v,k,u,c,f,b,o,l,_,I,K,C,S,N,Y,w,E,j,V,re,ne,W,ie,x]}class Bt extends rt{constructor(e){super(),ut(this,e,Et,wt,xe,{},null,[-1,-1])}}new Bt({target:document.getElementById("app")});
