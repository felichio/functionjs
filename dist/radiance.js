!function(t,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof exports?exports.r=r():t.r=r()}(this,function(){return function(t){var r={};function n(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=r,n.d=function(t,r,e){n.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:e})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,r){if(1&r&&(t=n(t)),8&r)return t;if(4&r&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var o in t)n.d(e,o,function(r){return t[r]}.bind(null,o));return e},n.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(r,"a",r),r},n.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},n.p="",n(n.s=0)}([function(t,r,n){"use strict";n.r(r);var e={};n.r(e),n.d(e,"empty",function(){return J}),n.d(e,"prepend",function(){return N}),n.d(e,"fromArray",function(){return Q}),n.d(e,"concat",function(){return U}),n.d(e,"mconcat",function(){return V}),n.d(e,"foldl",function(){return X}),n.d(e,"foldr",function(){return Y}),n.d(e,"toArray",function(){return Z}),n.d(e,"reverse",function(){return $}),n.d(e,"map",function(){return tt}),n.d(e,"filter",function(){return rt}),n.d(e,"takeWhile",function(){return nt}),n.d(e,"zip",function(){return et}),n.d(e,"join",function(){return ot}),n.d(e,"chain",function(){return ut}),n.d(e,"forEach",function(){return it}),n.d(e,"print",function(){return ct});var o={};n.r(o),n.d(o,"empty",function(){return vt}),n.d(o,"delay",function(){return ht}),n.d(o,"delayv",function(){return xt}),n.d(o,"prepend",function(){return gt}),n.d(o,"fromArray",function(){return At}),n.d(o,"fromPair",function(){return Ct}),n.d(o,"toPair",function(){return zt}),n.d(o,"concat",function(){return Et}),n.d(o,"mconcat",function(){return wt}),n.d(o,"foldl",function(){return bt}),n.d(o,"foldr",function(){return Pt}),n.d(o,"toArray",function(){return jt}),n.d(o,"map",function(){return Lt}),n.d(o,"filter",function(){return kt}),n.d(o,"lfilter",function(){return Wt}),n.d(o,"takeWhile",function(){return St}),n.d(o,"zip",function(){return Rt}),n.d(o,"join",function(){return Tt}),n.d(o,"chain",function(){return Kt}),n.d(o,"tramboline",function(){return qt}),n.d(o,"print",function(){return Bt}),n.d(o,"take",function(){return _t}),n.d(o,"repeat",function(){return Mt}),n.d(o,"range",function(){return Ot});var u=(t,r=t.length)=>{const n=(...e)=>(...o)=>(r<=e.length+o.length?t:n)(...e,...o);return n()};var i=u((t,r)=>t+r);var c=u((t,r)=>t-r);var a=u((t,r)=>t*r);var f=u((t,r)=>t/r);var d=u((t,r,n)=>{switch(t){case"+":return n+r;case"-":return n-r;case"/":return n/r;case"*":return n*r;case"=":return n===r;case">":return n>r;case"<":return n<r}});var l=(t,r=t.length)=>{const n=(...e)=>o=>(r<=e.length+1?t:n)(...e,o);return n()};var p=t=>(...r)=>t.bind(...r)();var s=t=>(r,n)=>t(n,r),y=u(s(p(Array.prototype.map))),m=u(s(p(Array.prototype.filter)));var v=u((t=>(r,n,e)=>t(e,r,n))(p(Array.prototype.reduce)));var g=u((t=>(r,n,e)=>t(e,r,n))(p(Array.prototype.reduceRight)));var h=t=>t;var x=t=>(...r)=>r.reduce((t,r)=>t(r),t),P=u(s(p(Array.prototype.every))),b=u(s(p(Array.prototype.some)));var A=u((t=>(r,n)=>t(r,n))(p(Array.prototype.concat)));const C=(t,r,[n,...e])=>void 0===n?r:C(t,u(t)(r)(n),e);var j=u(C);const z=(t,r,[n,...e])=>void 0===n?r:u(t)(n)(z(t,r,e));var L=u(z),k=L(A)([]);const W=(t,r)=>k(y(r,t));Array.prototype.chain=function(t){return W(this,t)};var O=u(W);const S=(t,r)=>n=>t(r(n));var M=(...t)=>j(S)(h)(t);var _=u((t,r,n=(r-t<0?-1:1))=>y((r,e)=>t+e*n)(Array(Math.ceil((r-t)/n)).fill(0)));const E=(t,r)=>n=>r(t(n));var w=(...t)=>j(E)(h)(t);const R=(t,r)=>(...n)=>t(r(...n));var T=(...t)=>j(R)(h)(t);const K=(t,r)=>n=>r(n).chain(t);var q=(...t)=>t.reduce(K);const B=(t,r)=>(...n)=>r(t(...n));var D=(...t)=>j(B)(h)(t);const F=t=>r=>t,G=h,H=t=>t(F),I=t=>t(F(G)),J=null,N=u((t,r)=>(t=>r=>n=>n(t)(r))(t)(r)),Q=L(N)(J),U=u((t,r)=>t===J?r:N(H(t),U(I(t),r))),V=L(U)(J),X=u((t,r,n)=>n===J?r:X(t,t(r,H(n)),I(n))),Y=u((t,r,n)=>n===J?r:t(H(n),Y(t,r,I(n)))),Z=t=>Y((t,r)=>[t,...r],[],t),$=t=>t===J?J:U($(I(t)),N(H(t),J)),tt=u((t,r)=>r===J?J:N(t(H(r)),tt(t,I(r)))),rt=u((t,r)=>r===J?J:t(H(r))?N(H(r),rt(t,I(r))):rt(t,I(r))),nt=u((t,r)=>r===J?J:t(H(r))?N(H(r),nt(t,I(r))):J),et=u((t,r)=>t===J||r===J?J:N([H(t),H(r)],et(I(t),I(r)))),ot=u(Y)(U,J),ut=u((t,r)=>M(ot,u(tt)(r))(t)),it=u((t,r)=>(X((r,n)=>t(n),J,r),r)),ct=t=>it(t=>console.log(t),t);var at=e;const ft=t=>{const r=t=>(...r)=>ft(t(...r));return{map:n=>r(tt)(n,t),filter:n=>r(rt)(n,t),forEach:n=>r(it)(n,t),print:()=>r(it)(t=>console.log(t),t),foldl:(r,n)=>X(r,n,t),foldr:(r,n)=>Y(r,n,t),toArray:()=>Z(t),toStream:()=>Ht.fromList(ft(t)),concat:n=>r(U)(t,n.getPairContext()),mconcat:n=>r(U)(t,L((t,n)=>r(U)(t.getPairContext(),n.getPairContext()),ft(J))(n).getPairContext()),takeWhile:n=>r(nt)(n,t),zip:n=>r(et)(t,n.getPairContext()),reverse:()=>r($)(t),join:()=>Y((t,n)=>r(U)(t.getPairContext(),n.getPairContext()),ft(J),t),chain:n=>r(ut)(t,t=>n(t).getPairContext()),getPairContext:()=>t}},dt=T(ft,(t=>(...r)=>r.length>1?t(r):1===r.length?Array.isArray(r[0])?t(r[0]):t([r[0]]):t([]))(Q));dt.listWrapper=t=>ft(t),dt.fromArray=t=>dt(t),dt.toStream=t=>t.toStream(),dt.map=u((t,r)=>r.map(t)),dt.filter=u((t,r)=>r.filter(t)),dt.forEach=u((t,r)=>r.forEach(t)),dt.print=t=>t.print(),dt.foldl=u((t,r,n)=>n.foldl(t,r)),dt.foldr=u((t,r,n)=>n.foldr(t,r)),dt.toArray=t=>t.toArray(),dt.concat=u((t,r)=>t.concat(r)),dt.mconcat=t=>ft(J).mconcat(t),dt.takeWhile=u((t,r)=>r.takeWhile(t)),dt.zip=u((t,r)=>t.zip(r)),dt.reverse=t=>t.reverse(),dt.join=t=>t.join(),dt.chain=u((t,r)=>t.chain(r)),dt.getPairContext=t=>t.getPairContext();var lt=dt;const pt=t=>r=>t,st=h,yt=t=>t(pt),mt=t=>t(pt(st)),vt=null,gt=(t,r)=>(t=>r=>n=>n(t)(r))(t)(r),ht=t=>(...r)=>()=>t(...r),xt=t=>()=>t,Pt=u((t,r,n)=>{const e=n();return e===vt?r:t(yt(e),Pt(t,r,mt(e)))}),bt=u((t,r,n)=>{const e=n();return e===vt?r:bt(t,t(r,yt(e)),mt(e))}),At=ht(([t,...r])=>void 0===t?vt:gt(t,At(r))),Ct=ht(t=>t===vt?vt:gt(yt(t),Ct(mt(t)))),jt=t=>Pt((t,r)=>[t,...r],[],t),zt=t=>Pt(gt,vt,t),Lt=u(ht((t,r)=>{const n=r();return n===vt?vt:gt(t(yt(n)),Lt(t,mt(n)))}),2),kt=u((t,r)=>{const n=(t,r)=>{const e=r();return e===vt?vt:t(yt(e))?gt(yt(e),n(t,mt(e))):n(t,mt(e))};return Ct(n(t,r))}),Wt=u(ht((t,r)=>{const n=r();return n===vt?vt:t(yt(n))?gt(yt(n),Wt(t,mt(n))):Wt(t,mt(n))()}),2),Ot=ht((t,r,n=(r-t<0?-1:1))=>n>=0?t>=r?vt:gt(t,Ot(t+n,r,n)):t<=r?vt:gt(t,Ot(t+n,r,n))),St=u(ht((t,r)=>{const n=r();return n===vt?vt:t(yt(n))?gt(yt(n),St(t,mt(n))):vt}),2),Mt=ht(t=>gt(t,Mt(t))),_t=u((t,r)=>{const n=(t,r)=>{const e=r();return t<1||e===vt?vt:gt(yt(e),n(t-1,mt(e)))};return Ct(n(t,r))}),Et=u(ht((t,r)=>{const n=t();return n===vt?r():gt(yt(n),Et(mt(n),r))}),2),wt=L(Et)(xt(vt)),Rt=u(ht((t,r)=>{const n=t(),e=r();return n===vt||e===vt?vt:gt([yt(n),yt(e)],Rt(mt(n),mt(e)))}),2),Tt=u(Pt)(u(Et,2),xt(vt)),Kt=u((t,r)=>M(Tt,Lt(r))(t)),qt=u((t,r)=>{const n=r;let e;for(;(e=r())!==vt;)t(yt(e)),r=mt(e);return n}),Bt=qt(console.log.bind(console));var Dt=o;const Ft=t=>{const r=t=>(...r)=>Ft(t(...r));return{map:n=>r(Lt)(n,t),filter:n=>r(kt)(n,t),lfilter:n=>r(Wt)(n,t),foldl:(r,n)=>bt(r,n,t),foldr:(r,n)=>Pt(r,n,t),takeWhile:n=>r(St)(n,t),toArray:()=>jt(t),toList:()=>M(lt.listWrapper,zt)(t),concat:n=>r(Et)(t,n.getLazyPairContext()),mconcat:n=>r(Et)(t,L((t,n)=>r(Et)(t.getLazyPairContext(),n.getLazyPairContext()),Ft(xt(vt)),n).getLazyPairContext()),zip:n=>r(Rt)(t,n.getLazyPairContext()),take:n=>r(_t)(n,t),join:()=>Pt((t,n)=>r(Et)(t.getLazyPairContext(),n.getLazyPairContext()),Ft(xt(vt)),t),chain:n=>r(Kt)(t,t=>n(t).getLazyPairContext()),tramboline:n=>r(qt)(n,t),print:()=>r(qt)(console.log.bind(console),t),getLazyPairContext:()=>t}},Gt=T(Ft,(t=>(...r)=>r.length>1?t(r):1===r.length?Array.isArray(r[0])?t(r[0]):t([r[0]]):t([]))(At));Gt.streamWrapper=t=>Ft(t),Gt.fromArray=t=>Gt(t),Gt.fromList=t=>M(Ft,Ct)(t.getPairContext()),Gt.toList=t=>t.toList(),Gt.toArray=t=>t.toArray(),Gt.range=T(Ft,Ot),Gt.map=u((t,r)=>r.map(t)),Gt.filter=u((t,r)=>r.filter(t)),Gt.lfilter=u((t,r)=>r.lfilter(t)),Gt.foldl=u((t,r,n)=>n.foldl(t,r)),Gt.foldr=u((t,r,n)=>n.foldr(t,r)),Gt.concat=u((t,r)=>t.concat(r)),Gt.mconcat=t=>Ft(xt(vt)).mconcat(t),Gt.takeWhile=u((t,r)=>r.takeWhile(t)),Gt.take=u((t,r)=>r.take(t)),Gt.zip=u((t,r)=>t.zip(r)),Gt.join=t=>t.join(),Gt.chain=u((t,r)=>t.chain(r)),Gt.tramboline=u((t,r)=>r.tramboline(t)),Gt.print=t=>t.print(),Gt.getLazyPairContext=t=>t.getLazyPairContext(),Gt.repeat=t=>Gt.streamWrapper(Mt(t));var Ht=Gt;n.d(r,"add",function(){return i}),n.d(r,"subtract",function(){return c}),n.d(r,"multiply",function(){return a}),n.d(r,"divide",function(){return f}),n.d(r,"binaryOp",function(){return d}),n.d(r,"curry",function(){return l}),n.d(r,"pcurry",function(){return u}),n.d(r,"unmethod",function(){return p}),n.d(r,"flip",function(){return s}),n.d(r,"map",function(){return y}),n.d(r,"filter",function(){return m}),n.d(r,"reduce",function(){return v}),n.d(r,"reduceRight",function(){return g}),n.d(r,"identity",function(){return h}),n.d(r,"uncurry",function(){return x}),n.d(r,"every",function(){return P}),n.d(r,"some",function(){return b}),n.d(r,"concat",function(){return A}),n.d(r,"foldl",function(){return j}),n.d(r,"foldr",function(){return L}),n.d(r,"join",function(){return k}),n.d(r,"chain",function(){return O}),n.d(r,"compose",function(){return M}),n.d(r,"range",function(){return _}),n.d(r,"pipe",function(){return w}),n.d(r,"composeM",function(){return T}),n.d(r,"composeK",function(){return q}),n.d(r,"pipeM",function(){return D}),n.d(r,"pair",function(){return at}),n.d(r,"list",function(){return lt}),n.d(r,"lpair",function(){return Dt}),n.d(r,"stream",function(){return Ht})}])});