"use strict";var x=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var g=x(function(D,d){
var j=require('@stdlib/assert-is-almost-same-value/dist');function k(e,r,a,i,u,t,l,f){var o,n,v,c,s,q,m;for(o=a.data,n=t.data,v=a.accessors[0],c=t.accessors[0],s=u,q=f,m=0;m<e;m++){if(j(v(o,s),c(n,q),r))return m;s+=i,q+=l}return-1}d.exports=k
});var y=x(function(E,S){
var A=require('@stdlib/array-base-arraylike2object/dist'),O=require('@stdlib/assert-is-almost-same-value/dist'),P=g();function R(e,r,a,i,u,t,l,f){var o,n,v,c,s;if(e<=0)return-1;if(v=A(a),c=A(t),v.accessorProtocol||c.accessorProtocol)return P(e,r,v,i,u,c,l,f);for(o=u,n=f,s=0;s<e;s++){if(O(a[o],t[n],r))return s;o+=i,n+=l}return-1}S.exports=R
});var b=x(function(F,p){
var V=require('@stdlib/strided-base-stride2offset/dist'),h=y();function w(e,r,a,i,u,t){return h(e,r,a,i,V(e,i),u,t,V(e,t))}p.exports=w
});var z=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),I=b(),B=y();z(I,"ndarray",B);module.exports=I;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
