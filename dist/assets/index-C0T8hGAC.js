function I_(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function S_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var R_={exports:{}},xc={},A_={exports:{}},fe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cl=Symbol.for("react.element"),CS=Symbol.for("react.portal"),PS=Symbol.for("react.fragment"),kS=Symbol.for("react.strict_mode"),NS=Symbol.for("react.profiler"),DS=Symbol.for("react.provider"),xS=Symbol.for("react.context"),bS=Symbol.for("react.forward_ref"),OS=Symbol.for("react.suspense"),LS=Symbol.for("react.memo"),MS=Symbol.for("react.lazy"),mg=Symbol.iterator;function VS(t){return t===null||typeof t!="object"?null:(t=mg&&t[mg]||t["@@iterator"],typeof t=="function"?t:null)}var C_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},P_=Object.assign,k_={};function vo(t,e,n){this.props=t,this.context=e,this.refs=k_,this.updater=n||C_}vo.prototype.isReactComponent={};vo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};vo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function N_(){}N_.prototype=vo.prototype;function Bf(t,e,n){this.props=t,this.context=e,this.refs=k_,this.updater=n||C_}var zf=Bf.prototype=new N_;zf.constructor=Bf;P_(zf,vo.prototype);zf.isPureReactComponent=!0;var gg=Array.isArray,D_=Object.prototype.hasOwnProperty,$f={current:null},x_={key:!0,ref:!0,__self:!0,__source:!0};function b_(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)D_.call(e,r)&&!x_.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:cl,type:t,key:s,ref:o,props:i,_owner:$f.current}}function US(t,e){return{$$typeof:cl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Hf(t){return typeof t=="object"&&t!==null&&t.$$typeof===cl}function FS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var yg=/\/+/g;function Ch(t,e){return typeof t=="object"&&t!==null&&t.key!=null?FS(""+t.key):e.toString(36)}function vu(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case cl:case CS:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Ch(o,0):r,gg(i)?(n="",t!=null&&(n=t.replace(yg,"$&/")+"/"),vu(i,e,n,"",function(c){return c})):i!=null&&(Hf(i)&&(i=US(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(yg,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",gg(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+Ch(s,l);o+=vu(s,e,n,u,i)}else if(u=VS(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+Ch(s,l++),o+=vu(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Kl(t,e,n){if(t==null)return t;var r=[],i=0;return vu(t,r,"","",function(s){return e.call(n,s,i++)}),r}function jS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ht={current:null},_u={transition:null},BS={ReactCurrentDispatcher:Ht,ReactCurrentBatchConfig:_u,ReactCurrentOwner:$f};function O_(){throw Error("act(...) is not supported in production builds of React.")}fe.Children={map:Kl,forEach:function(t,e,n){Kl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Kl(t,function(){e++}),e},toArray:function(t){return Kl(t,function(e){return e})||[]},only:function(t){if(!Hf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};fe.Component=vo;fe.Fragment=PS;fe.Profiler=NS;fe.PureComponent=Bf;fe.StrictMode=kS;fe.Suspense=OS;fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=BS;fe.act=O_;fe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=P_({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=$f.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)D_.call(e,u)&&!x_.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:cl,type:t.type,key:i,ref:s,props:r,_owner:o}};fe.createContext=function(t){return t={$$typeof:xS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:DS,_context:t},t.Consumer=t};fe.createElement=b_;fe.createFactory=function(t){var e=b_.bind(null,t);return e.type=t,e};fe.createRef=function(){return{current:null}};fe.forwardRef=function(t){return{$$typeof:bS,render:t}};fe.isValidElement=Hf;fe.lazy=function(t){return{$$typeof:MS,_payload:{_status:-1,_result:t},_init:jS}};fe.memo=function(t,e){return{$$typeof:LS,type:t,compare:e===void 0?null:e}};fe.startTransition=function(t){var e=_u.transition;_u.transition={};try{t()}finally{_u.transition=e}};fe.unstable_act=O_;fe.useCallback=function(t,e){return Ht.current.useCallback(t,e)};fe.useContext=function(t){return Ht.current.useContext(t)};fe.useDebugValue=function(){};fe.useDeferredValue=function(t){return Ht.current.useDeferredValue(t)};fe.useEffect=function(t,e){return Ht.current.useEffect(t,e)};fe.useId=function(){return Ht.current.useId()};fe.useImperativeHandle=function(t,e,n){return Ht.current.useImperativeHandle(t,e,n)};fe.useInsertionEffect=function(t,e){return Ht.current.useInsertionEffect(t,e)};fe.useLayoutEffect=function(t,e){return Ht.current.useLayoutEffect(t,e)};fe.useMemo=function(t,e){return Ht.current.useMemo(t,e)};fe.useReducer=function(t,e,n){return Ht.current.useReducer(t,e,n)};fe.useRef=function(t){return Ht.current.useRef(t)};fe.useState=function(t){return Ht.current.useState(t)};fe.useSyncExternalStore=function(t,e,n){return Ht.current.useSyncExternalStore(t,e,n)};fe.useTransition=function(){return Ht.current.useTransition()};fe.version="18.3.1";A_.exports=fe;var U=A_.exports;const zS=S_(U),$S=I_({__proto__:null,default:zS},[U]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var HS=U,WS=Symbol.for("react.element"),qS=Symbol.for("react.fragment"),KS=Object.prototype.hasOwnProperty,GS=HS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,QS={key:!0,ref:!0,__self:!0,__source:!0};function L_(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)KS.call(e,r)&&!QS.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:WS,type:t,key:s,ref:o,props:i,_owner:GS.current}}xc.Fragment=qS;xc.jsx=L_;xc.jsxs=L_;R_.exports=xc;var D=R_.exports,M_={exports:{}},dn={},V_={exports:{}},U_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(G,X){var ae=G.length;G.push(X);e:for(;0<ae;){var Ae=ae-1>>>1,ve=G[Ae];if(0<i(ve,X))G[Ae]=X,G[ae]=ve,ae=Ae;else break e}}function n(G){return G.length===0?null:G[0]}function r(G){if(G.length===0)return null;var X=G[0],ae=G.pop();if(ae!==X){G[0]=ae;e:for(var Ae=0,ve=G.length,Re=ve>>>1;Ae<Re;){var At=2*(Ae+1)-1,Ft=G[At],st=At+1,gt=G[st];if(0>i(Ft,ae))st<ve&&0>i(gt,Ft)?(G[Ae]=gt,G[st]=ae,Ae=st):(G[Ae]=Ft,G[At]=ae,Ae=At);else if(st<ve&&0>i(gt,ae))G[Ae]=gt,G[st]=ae,Ae=st;else break e}}return X}function i(G,X){var ae=G.sortIndex-X.sortIndex;return ae!==0?ae:G.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],d=1,p=null,g=3,v=!1,A=!1,P=!1,b=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(G){for(var X=n(c);X!==null;){if(X.callback===null)r(c);else if(X.startTime<=G)r(c),X.sortIndex=X.expirationTime,e(u,X);else break;X=n(c)}}function O(G){if(P=!1,S(G),!A)if(n(u)!==null)A=!0,tn(B);else{var X=n(c);X!==null&&qt(O,X.startTime-G)}}function B(G,X){A=!1,P&&(P=!1,E(m),m=-1),v=!0;var ae=g;try{for(S(X),p=n(u);p!==null&&(!(p.expirationTime>X)||G&&!C());){var Ae=p.callback;if(typeof Ae=="function"){p.callback=null,g=p.priorityLevel;var ve=Ae(p.expirationTime<=X);X=t.unstable_now(),typeof ve=="function"?p.callback=ve:p===n(u)&&r(u),S(X)}else r(u);p=n(u)}if(p!==null)var Re=!0;else{var At=n(c);At!==null&&qt(O,At.startTime-X),Re=!1}return Re}finally{p=null,g=ae,v=!1}}var F=!1,T=null,m=-1,w=5,I=-1;function C(){return!(t.unstable_now()-I<w)}function x(){if(T!==null){var G=t.unstable_now();I=G;var X=!0;try{X=T(!0,G)}finally{X?R():(F=!1,T=null)}}else F=!1}var R;if(typeof _=="function")R=function(){_(x)};else if(typeof MessageChannel<"u"){var Te=new MessageChannel,Rt=Te.port2;Te.port1.onmessage=x,R=function(){Rt.postMessage(null)}}else R=function(){b(x,0)};function tn(G){T=G,F||(F=!0,R())}function qt(G,X){m=b(function(){G(t.unstable_now())},X)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(G){G.callback=null},t.unstable_continueExecution=function(){A||v||(A=!0,tn(B))},t.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<G?Math.floor(1e3/G):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(G){switch(g){case 1:case 2:case 3:var X=3;break;default:X=g}var ae=g;g=X;try{return G()}finally{g=ae}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(G,X){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var ae=g;g=G;try{return X()}finally{g=ae}},t.unstable_scheduleCallback=function(G,X,ae){var Ae=t.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?Ae+ae:Ae):ae=Ae,G){case 1:var ve=-1;break;case 2:ve=250;break;case 5:ve=1073741823;break;case 4:ve=1e4;break;default:ve=5e3}return ve=ae+ve,G={id:d++,callback:X,priorityLevel:G,startTime:ae,expirationTime:ve,sortIndex:-1},ae>Ae?(G.sortIndex=ae,e(c,G),n(u)===null&&G===n(c)&&(P?(E(m),m=-1):P=!0,qt(O,ae-Ae))):(G.sortIndex=ve,e(u,G),A||v||(A=!0,tn(B))),G},t.unstable_shouldYield=C,t.unstable_wrapCallback=function(G){var X=g;return function(){var ae=g;g=X;try{return G.apply(this,arguments)}finally{g=ae}}}})(U_);V_.exports=U_;var XS=V_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var YS=U,hn=XS;function W(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var F_=new Set,xa={};function ss(t,e){to(t,e),to(t+"Capture",e)}function to(t,e){for(xa[t]=e,t=0;t<e.length;t++)F_.add(e[t])}var wr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ed=Object.prototype.hasOwnProperty,JS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,vg={},_g={};function ZS(t){return Ed.call(_g,t)?!0:Ed.call(vg,t)?!1:JS.test(t)?_g[t]=!0:(vg[t]=!0,!1)}function eR(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function tR(t,e,n,r){if(e===null||typeof e>"u"||eR(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Wt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var It={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){It[t]=new Wt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];It[e]=new Wt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){It[t]=new Wt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){It[t]=new Wt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){It[t]=new Wt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){It[t]=new Wt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){It[t]=new Wt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){It[t]=new Wt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){It[t]=new Wt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Wf=/[\-:]([a-z])/g;function qf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Wf,qf);It[e]=new Wt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Wf,qf);It[e]=new Wt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Wf,qf);It[e]=new Wt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){It[t]=new Wt(t,1,!1,t.toLowerCase(),null,!1,!1)});It.xlinkHref=new Wt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){It[t]=new Wt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Kf(t,e,n,r){var i=It.hasOwnProperty(e)?It[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(tR(e,n,i,r)&&(n=null),r||i===null?ZS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Pr=YS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Gl=Symbol.for("react.element"),Ns=Symbol.for("react.portal"),Ds=Symbol.for("react.fragment"),Gf=Symbol.for("react.strict_mode"),Td=Symbol.for("react.profiler"),j_=Symbol.for("react.provider"),B_=Symbol.for("react.context"),Qf=Symbol.for("react.forward_ref"),Id=Symbol.for("react.suspense"),Sd=Symbol.for("react.suspense_list"),Xf=Symbol.for("react.memo"),Ur=Symbol.for("react.lazy"),z_=Symbol.for("react.offscreen"),wg=Symbol.iterator;function Ko(t){return t===null||typeof t!="object"?null:(t=wg&&t[wg]||t["@@iterator"],typeof t=="function"?t:null)}var We=Object.assign,Ph;function oa(t){if(Ph===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ph=e&&e[1]||""}return`
`+Ph+t}var kh=!1;function Nh(t,e){if(!t||kh)return"";kh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{kh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?oa(t):""}function nR(t){switch(t.tag){case 5:return oa(t.type);case 16:return oa("Lazy");case 13:return oa("Suspense");case 19:return oa("SuspenseList");case 0:case 2:case 15:return t=Nh(t.type,!1),t;case 11:return t=Nh(t.type.render,!1),t;case 1:return t=Nh(t.type,!0),t;default:return""}}function Rd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ds:return"Fragment";case Ns:return"Portal";case Td:return"Profiler";case Gf:return"StrictMode";case Id:return"Suspense";case Sd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case B_:return(t.displayName||"Context")+".Consumer";case j_:return(t._context.displayName||"Context")+".Provider";case Qf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Xf:return e=t.displayName||null,e!==null?e:Rd(t.type)||"Memo";case Ur:e=t._payload,t=t._init;try{return Rd(t(e))}catch{}}return null}function rR(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Rd(e);case 8:return e===Gf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ui(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function $_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function iR(t){var e=$_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ql(t){t._valueTracker||(t._valueTracker=iR(t))}function H_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=$_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Fu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ad(t,e){var n=e.checked;return We({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Eg(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=ui(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function W_(t,e){e=e.checked,e!=null&&Kf(t,"checked",e,!1)}function Cd(t,e){W_(t,e);var n=ui(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Pd(t,e.type,n):e.hasOwnProperty("defaultValue")&&Pd(t,e.type,ui(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Tg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Pd(t,e,n){(e!=="number"||Fu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var aa=Array.isArray;function Ws(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+ui(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function kd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(W(91));return We({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ig(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(W(92));if(aa(n)){if(1<n.length)throw Error(W(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ui(n)}}function q_(t,e){var n=ui(e.value),r=ui(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Sg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function K_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Nd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?K_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Xl,G_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Xl=Xl||document.createElement("div"),Xl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Xl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ba(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ga={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},sR=["Webkit","ms","Moz","O"];Object.keys(ga).forEach(function(t){sR.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ga[e]=ga[t]})});function Q_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ga.hasOwnProperty(t)&&ga[t]?(""+e).trim():e+"px"}function X_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Q_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var oR=We({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Dd(t,e){if(e){if(oR[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(W(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(W(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(W(61))}if(e.style!=null&&typeof e.style!="object")throw Error(W(62))}}function xd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bd=null;function Yf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Od=null,qs=null,Ks=null;function Rg(t){if(t=fl(t)){if(typeof Od!="function")throw Error(W(280));var e=t.stateNode;e&&(e=Vc(e),Od(t.stateNode,t.type,e))}}function Y_(t){qs?Ks?Ks.push(t):Ks=[t]:qs=t}function J_(){if(qs){var t=qs,e=Ks;if(Ks=qs=null,Rg(t),e)for(t=0;t<e.length;t++)Rg(e[t])}}function Z_(t,e){return t(e)}function e0(){}var Dh=!1;function t0(t,e,n){if(Dh)return t(e,n);Dh=!0;try{return Z_(t,e,n)}finally{Dh=!1,(qs!==null||Ks!==null)&&(e0(),J_())}}function Oa(t,e){var n=t.stateNode;if(n===null)return null;var r=Vc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(W(231,e,typeof n));return n}var Ld=!1;if(wr)try{var Go={};Object.defineProperty(Go,"passive",{get:function(){Ld=!0}}),window.addEventListener("test",Go,Go),window.removeEventListener("test",Go,Go)}catch{Ld=!1}function aR(t,e,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var ya=!1,ju=null,Bu=!1,Md=null,lR={onError:function(t){ya=!0,ju=t}};function uR(t,e,n,r,i,s,o,l,u){ya=!1,ju=null,aR.apply(lR,arguments)}function cR(t,e,n,r,i,s,o,l,u){if(uR.apply(this,arguments),ya){if(ya){var c=ju;ya=!1,ju=null}else throw Error(W(198));Bu||(Bu=!0,Md=c)}}function os(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function n0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ag(t){if(os(t)!==t)throw Error(W(188))}function hR(t){var e=t.alternate;if(!e){if(e=os(t),e===null)throw Error(W(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Ag(i),t;if(s===r)return Ag(i),e;s=s.sibling}throw Error(W(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(W(189))}}if(n.alternate!==r)throw Error(W(190))}if(n.tag!==3)throw Error(W(188));return n.stateNode.current===n?t:e}function r0(t){return t=hR(t),t!==null?i0(t):null}function i0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=i0(t);if(e!==null)return e;t=t.sibling}return null}var s0=hn.unstable_scheduleCallback,Cg=hn.unstable_cancelCallback,dR=hn.unstable_shouldYield,fR=hn.unstable_requestPaint,Ze=hn.unstable_now,pR=hn.unstable_getCurrentPriorityLevel,Jf=hn.unstable_ImmediatePriority,o0=hn.unstable_UserBlockingPriority,zu=hn.unstable_NormalPriority,mR=hn.unstable_LowPriority,a0=hn.unstable_IdlePriority,bc=null,Qn=null;function gR(t){if(Qn&&typeof Qn.onCommitFiberRoot=="function")try{Qn.onCommitFiberRoot(bc,t,void 0,(t.current.flags&128)===128)}catch{}}var Un=Math.clz32?Math.clz32:_R,yR=Math.log,vR=Math.LN2;function _R(t){return t>>>=0,t===0?32:31-(yR(t)/vR|0)|0}var Yl=64,Jl=4194304;function la(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function $u(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=la(l):(s&=o,s!==0&&(r=la(s)))}else o=n&~i,o!==0?r=la(o):s!==0&&(r=la(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Un(e),i=1<<n,r|=t[n],e&=~i;return r}function wR(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ER(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Un(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=wR(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function Vd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function l0(){var t=Yl;return Yl<<=1,!(Yl&4194240)&&(Yl=64),t}function xh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function hl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Un(e),t[e]=n}function TR(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Un(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Zf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Un(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Ce=0;function u0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var c0,ep,h0,d0,f0,Ud=!1,Zl=[],Yr=null,Jr=null,Zr=null,La=new Map,Ma=new Map,jr=[],IR="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Pg(t,e){switch(t){case"focusin":case"focusout":Yr=null;break;case"dragenter":case"dragleave":Jr=null;break;case"mouseover":case"mouseout":Zr=null;break;case"pointerover":case"pointerout":La.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ma.delete(e.pointerId)}}function Qo(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=fl(e),e!==null&&ep(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function SR(t,e,n,r,i){switch(e){case"focusin":return Yr=Qo(Yr,t,e,n,r,i),!0;case"dragenter":return Jr=Qo(Jr,t,e,n,r,i),!0;case"mouseover":return Zr=Qo(Zr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return La.set(s,Qo(La.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ma.set(s,Qo(Ma.get(s)||null,t,e,n,r,i)),!0}return!1}function p0(t){var e=Mi(t.target);if(e!==null){var n=os(e);if(n!==null){if(e=n.tag,e===13){if(e=n0(n),e!==null){t.blockedOn=e,f0(t.priority,function(){h0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function wu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Fd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);bd=r,n.target.dispatchEvent(r),bd=null}else return e=fl(n),e!==null&&ep(e),t.blockedOn=n,!1;e.shift()}return!0}function kg(t,e,n){wu(t)&&n.delete(e)}function RR(){Ud=!1,Yr!==null&&wu(Yr)&&(Yr=null),Jr!==null&&wu(Jr)&&(Jr=null),Zr!==null&&wu(Zr)&&(Zr=null),La.forEach(kg),Ma.forEach(kg)}function Xo(t,e){t.blockedOn===e&&(t.blockedOn=null,Ud||(Ud=!0,hn.unstable_scheduleCallback(hn.unstable_NormalPriority,RR)))}function Va(t){function e(i){return Xo(i,t)}if(0<Zl.length){Xo(Zl[0],t);for(var n=1;n<Zl.length;n++){var r=Zl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Yr!==null&&Xo(Yr,t),Jr!==null&&Xo(Jr,t),Zr!==null&&Xo(Zr,t),La.forEach(e),Ma.forEach(e),n=0;n<jr.length;n++)r=jr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<jr.length&&(n=jr[0],n.blockedOn===null);)p0(n),n.blockedOn===null&&jr.shift()}var Gs=Pr.ReactCurrentBatchConfig,Hu=!0;function AR(t,e,n,r){var i=Ce,s=Gs.transition;Gs.transition=null;try{Ce=1,tp(t,e,n,r)}finally{Ce=i,Gs.transition=s}}function CR(t,e,n,r){var i=Ce,s=Gs.transition;Gs.transition=null;try{Ce=4,tp(t,e,n,r)}finally{Ce=i,Gs.transition=s}}function tp(t,e,n,r){if(Hu){var i=Fd(t,e,n,r);if(i===null)zh(t,e,r,Wu,n),Pg(t,r);else if(SR(i,t,e,n,r))r.stopPropagation();else if(Pg(t,r),e&4&&-1<IR.indexOf(t)){for(;i!==null;){var s=fl(i);if(s!==null&&c0(s),s=Fd(t,e,n,r),s===null&&zh(t,e,r,Wu,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else zh(t,e,r,null,n)}}var Wu=null;function Fd(t,e,n,r){if(Wu=null,t=Yf(r),t=Mi(t),t!==null)if(e=os(t),e===null)t=null;else if(n=e.tag,n===13){if(t=n0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Wu=t,null}function m0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(pR()){case Jf:return 1;case o0:return 4;case zu:case mR:return 16;case a0:return 536870912;default:return 16}default:return 16}}var Kr=null,np=null,Eu=null;function g0(){if(Eu)return Eu;var t,e=np,n=e.length,r,i="value"in Kr?Kr.value:Kr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Eu=i.slice(t,1<r?1-r:void 0)}function Tu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function eu(){return!0}function Ng(){return!1}function fn(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?eu:Ng,this.isPropagationStopped=Ng,this}return We(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=eu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=eu)},persist:function(){},isPersistent:eu}),e}var _o={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rp=fn(_o),dl=We({},_o,{view:0,detail:0}),PR=fn(dl),bh,Oh,Yo,Oc=We({},dl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ip,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Yo&&(Yo&&t.type==="mousemove"?(bh=t.screenX-Yo.screenX,Oh=t.screenY-Yo.screenY):Oh=bh=0,Yo=t),bh)},movementY:function(t){return"movementY"in t?t.movementY:Oh}}),Dg=fn(Oc),kR=We({},Oc,{dataTransfer:0}),NR=fn(kR),DR=We({},dl,{relatedTarget:0}),Lh=fn(DR),xR=We({},_o,{animationName:0,elapsedTime:0,pseudoElement:0}),bR=fn(xR),OR=We({},_o,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),LR=fn(OR),MR=We({},_o,{data:0}),xg=fn(MR),VR={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},UR={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},FR={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jR(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=FR[t])?!!e[t]:!1}function ip(){return jR}var BR=We({},dl,{key:function(t){if(t.key){var e=VR[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Tu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?UR[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ip,charCode:function(t){return t.type==="keypress"?Tu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Tu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),zR=fn(BR),$R=We({},Oc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bg=fn($R),HR=We({},dl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ip}),WR=fn(HR),qR=We({},_o,{propertyName:0,elapsedTime:0,pseudoElement:0}),KR=fn(qR),GR=We({},Oc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),QR=fn(GR),XR=[9,13,27,32],sp=wr&&"CompositionEvent"in window,va=null;wr&&"documentMode"in document&&(va=document.documentMode);var YR=wr&&"TextEvent"in window&&!va,y0=wr&&(!sp||va&&8<va&&11>=va),Og=" ",Lg=!1;function v0(t,e){switch(t){case"keyup":return XR.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var xs=!1;function JR(t,e){switch(t){case"compositionend":return _0(e);case"keypress":return e.which!==32?null:(Lg=!0,Og);case"textInput":return t=e.data,t===Og&&Lg?null:t;default:return null}}function ZR(t,e){if(xs)return t==="compositionend"||!sp&&v0(t,e)?(t=g0(),Eu=np=Kr=null,xs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return y0&&e.locale!=="ko"?null:e.data;default:return null}}var e1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!e1[t.type]:e==="textarea"}function w0(t,e,n,r){Y_(r),e=qu(e,"onChange"),0<e.length&&(n=new rp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var _a=null,Ua=null;function t1(t){D0(t,0)}function Lc(t){var e=Ls(t);if(H_(e))return t}function n1(t,e){if(t==="change")return e}var E0=!1;if(wr){var Mh;if(wr){var Vh="oninput"in document;if(!Vh){var Vg=document.createElement("div");Vg.setAttribute("oninput","return;"),Vh=typeof Vg.oninput=="function"}Mh=Vh}else Mh=!1;E0=Mh&&(!document.documentMode||9<document.documentMode)}function Ug(){_a&&(_a.detachEvent("onpropertychange",T0),Ua=_a=null)}function T0(t){if(t.propertyName==="value"&&Lc(Ua)){var e=[];w0(e,Ua,t,Yf(t)),t0(t1,e)}}function r1(t,e,n){t==="focusin"?(Ug(),_a=e,Ua=n,_a.attachEvent("onpropertychange",T0)):t==="focusout"&&Ug()}function i1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Lc(Ua)}function s1(t,e){if(t==="click")return Lc(e)}function o1(t,e){if(t==="input"||t==="change")return Lc(e)}function a1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var jn=typeof Object.is=="function"?Object.is:a1;function Fa(t,e){if(jn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ed.call(e,i)||!jn(t[i],e[i]))return!1}return!0}function Fg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function jg(t,e){var n=Fg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Fg(n)}}function I0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?I0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function S0(){for(var t=window,e=Fu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Fu(t.document)}return e}function op(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function l1(t){var e=S0(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&I0(n.ownerDocument.documentElement,n)){if(r!==null&&op(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=jg(n,s);var o=jg(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var u1=wr&&"documentMode"in document&&11>=document.documentMode,bs=null,jd=null,wa=null,Bd=!1;function Bg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Bd||bs==null||bs!==Fu(r)||(r=bs,"selectionStart"in r&&op(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),wa&&Fa(wa,r)||(wa=r,r=qu(jd,"onSelect"),0<r.length&&(e=new rp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=bs)))}function tu(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Os={animationend:tu("Animation","AnimationEnd"),animationiteration:tu("Animation","AnimationIteration"),animationstart:tu("Animation","AnimationStart"),transitionend:tu("Transition","TransitionEnd")},Uh={},R0={};wr&&(R0=document.createElement("div").style,"AnimationEvent"in window||(delete Os.animationend.animation,delete Os.animationiteration.animation,delete Os.animationstart.animation),"TransitionEvent"in window||delete Os.transitionend.transition);function Mc(t){if(Uh[t])return Uh[t];if(!Os[t])return t;var e=Os[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in R0)return Uh[t]=e[n];return t}var A0=Mc("animationend"),C0=Mc("animationiteration"),P0=Mc("animationstart"),k0=Mc("transitionend"),N0=new Map,zg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function pi(t,e){N0.set(t,e),ss(e,[t])}for(var Fh=0;Fh<zg.length;Fh++){var jh=zg[Fh],c1=jh.toLowerCase(),h1=jh[0].toUpperCase()+jh.slice(1);pi(c1,"on"+h1)}pi(A0,"onAnimationEnd");pi(C0,"onAnimationIteration");pi(P0,"onAnimationStart");pi("dblclick","onDoubleClick");pi("focusin","onFocus");pi("focusout","onBlur");pi(k0,"onTransitionEnd");to("onMouseEnter",["mouseout","mouseover"]);to("onMouseLeave",["mouseout","mouseover"]);to("onPointerEnter",["pointerout","pointerover"]);to("onPointerLeave",["pointerout","pointerover"]);ss("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ss("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ss("onBeforeInput",["compositionend","keypress","textInput","paste"]);ss("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ss("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ss("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ua="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),d1=new Set("cancel close invalid load scroll toggle".split(" ").concat(ua));function $g(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,cR(r,e,void 0,t),t.currentTarget=null}function D0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;$g(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;$g(i,l,c),s=u}}}if(Bu)throw t=Md,Bu=!1,Md=null,t}function Ve(t,e){var n=e[qd];n===void 0&&(n=e[qd]=new Set);var r=t+"__bubble";n.has(r)||(x0(e,t,2,!1),n.add(r))}function Bh(t,e,n){var r=0;e&&(r|=4),x0(n,t,r,e)}var nu="_reactListening"+Math.random().toString(36).slice(2);function ja(t){if(!t[nu]){t[nu]=!0,F_.forEach(function(n){n!=="selectionchange"&&(d1.has(n)||Bh(n,!1,t),Bh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[nu]||(e[nu]=!0,Bh("selectionchange",!1,e))}}function x0(t,e,n,r){switch(m0(e)){case 1:var i=AR;break;case 4:i=CR;break;default:i=tp}n=i.bind(null,e,n,t),i=void 0,!Ld||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function zh(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Mi(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}t0(function(){var c=s,d=Yf(n),p=[];e:{var g=N0.get(t);if(g!==void 0){var v=rp,A=t;switch(t){case"keypress":if(Tu(n)===0)break e;case"keydown":case"keyup":v=zR;break;case"focusin":A="focus",v=Lh;break;case"focusout":A="blur",v=Lh;break;case"beforeblur":case"afterblur":v=Lh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Dg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=NR;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=WR;break;case A0:case C0:case P0:v=bR;break;case k0:v=KR;break;case"scroll":v=PR;break;case"wheel":v=QR;break;case"copy":case"cut":case"paste":v=LR;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=bg}var P=(e&4)!==0,b=!P&&t==="scroll",E=P?g!==null?g+"Capture":null:g;P=[];for(var _=c,S;_!==null;){S=_;var O=S.stateNode;if(S.tag===5&&O!==null&&(S=O,E!==null&&(O=Oa(_,E),O!=null&&P.push(Ba(_,O,S)))),b)break;_=_.return}0<P.length&&(g=new v(g,A,null,n,d),p.push({event:g,listeners:P}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",v=t==="mouseout"||t==="pointerout",g&&n!==bd&&(A=n.relatedTarget||n.fromElement)&&(Mi(A)||A[Er]))break e;if((v||g)&&(g=d.window===d?d:(g=d.ownerDocument)?g.defaultView||g.parentWindow:window,v?(A=n.relatedTarget||n.toElement,v=c,A=A?Mi(A):null,A!==null&&(b=os(A),A!==b||A.tag!==5&&A.tag!==6)&&(A=null)):(v=null,A=c),v!==A)){if(P=Dg,O="onMouseLeave",E="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(P=bg,O="onPointerLeave",E="onPointerEnter",_="pointer"),b=v==null?g:Ls(v),S=A==null?g:Ls(A),g=new P(O,_+"leave",v,n,d),g.target=b,g.relatedTarget=S,O=null,Mi(d)===c&&(P=new P(E,_+"enter",A,n,d),P.target=S,P.relatedTarget=b,O=P),b=O,v&&A)t:{for(P=v,E=A,_=0,S=P;S;S=Is(S))_++;for(S=0,O=E;O;O=Is(O))S++;for(;0<_-S;)P=Is(P),_--;for(;0<S-_;)E=Is(E),S--;for(;_--;){if(P===E||E!==null&&P===E.alternate)break t;P=Is(P),E=Is(E)}P=null}else P=null;v!==null&&Hg(p,g,v,P,!1),A!==null&&b!==null&&Hg(p,b,A,P,!0)}}e:{if(g=c?Ls(c):window,v=g.nodeName&&g.nodeName.toLowerCase(),v==="select"||v==="input"&&g.type==="file")var B=n1;else if(Mg(g))if(E0)B=o1;else{B=i1;var F=r1}else(v=g.nodeName)&&v.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(B=s1);if(B&&(B=B(t,c))){w0(p,B,n,d);break e}F&&F(t,g,c),t==="focusout"&&(F=g._wrapperState)&&F.controlled&&g.type==="number"&&Pd(g,"number",g.value)}switch(F=c?Ls(c):window,t){case"focusin":(Mg(F)||F.contentEditable==="true")&&(bs=F,jd=c,wa=null);break;case"focusout":wa=jd=bs=null;break;case"mousedown":Bd=!0;break;case"contextmenu":case"mouseup":case"dragend":Bd=!1,Bg(p,n,d);break;case"selectionchange":if(u1)break;case"keydown":case"keyup":Bg(p,n,d)}var T;if(sp)e:{switch(t){case"compositionstart":var m="onCompositionStart";break e;case"compositionend":m="onCompositionEnd";break e;case"compositionupdate":m="onCompositionUpdate";break e}m=void 0}else xs?v0(t,n)&&(m="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(m="onCompositionStart");m&&(y0&&n.locale!=="ko"&&(xs||m!=="onCompositionStart"?m==="onCompositionEnd"&&xs&&(T=g0()):(Kr=d,np="value"in Kr?Kr.value:Kr.textContent,xs=!0)),F=qu(c,m),0<F.length&&(m=new xg(m,t,null,n,d),p.push({event:m,listeners:F}),T?m.data=T:(T=_0(n),T!==null&&(m.data=T)))),(T=YR?JR(t,n):ZR(t,n))&&(c=qu(c,"onBeforeInput"),0<c.length&&(d=new xg("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:c}),d.data=T))}D0(p,e)})}function Ba(t,e,n){return{instance:t,listener:e,currentTarget:n}}function qu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Oa(t,n),s!=null&&r.unshift(Ba(t,s,i)),s=Oa(t,e),s!=null&&r.push(Ba(t,s,i))),t=t.return}return r}function Is(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Hg(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=Oa(n,s),u!=null&&o.unshift(Ba(n,u,l))):i||(u=Oa(n,s),u!=null&&o.push(Ba(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var f1=/\r\n?/g,p1=/\u0000|\uFFFD/g;function Wg(t){return(typeof t=="string"?t:""+t).replace(f1,`
`).replace(p1,"")}function ru(t,e,n){if(e=Wg(e),Wg(t)!==e&&n)throw Error(W(425))}function Ku(){}var zd=null,$d=null;function Hd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Wd=typeof setTimeout=="function"?setTimeout:void 0,m1=typeof clearTimeout=="function"?clearTimeout:void 0,qg=typeof Promise=="function"?Promise:void 0,g1=typeof queueMicrotask=="function"?queueMicrotask:typeof qg<"u"?function(t){return qg.resolve(null).then(t).catch(y1)}:Wd;function y1(t){setTimeout(function(){throw t})}function $h(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Va(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Va(e)}function ei(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Kg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var wo=Math.random().toString(36).slice(2),Kn="__reactFiber$"+wo,za="__reactProps$"+wo,Er="__reactContainer$"+wo,qd="__reactEvents$"+wo,v1="__reactListeners$"+wo,_1="__reactHandles$"+wo;function Mi(t){var e=t[Kn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Er]||n[Kn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Kg(t);t!==null;){if(n=t[Kn])return n;t=Kg(t)}return e}t=n,n=t.parentNode}return null}function fl(t){return t=t[Kn]||t[Er],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ls(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(W(33))}function Vc(t){return t[za]||null}var Kd=[],Ms=-1;function mi(t){return{current:t}}function Ue(t){0>Ms||(t.current=Kd[Ms],Kd[Ms]=null,Ms--)}function be(t,e){Ms++,Kd[Ms]=t.current,t.current=e}var ci={},Vt=mi(ci),Xt=mi(!1),qi=ci;function no(t,e){var n=t.type.contextTypes;if(!n)return ci;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Yt(t){return t=t.childContextTypes,t!=null}function Gu(){Ue(Xt),Ue(Vt)}function Gg(t,e,n){if(Vt.current!==ci)throw Error(W(168));be(Vt,e),be(Xt,n)}function b0(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(W(108,rR(t)||"Unknown",i));return We({},n,r)}function Qu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ci,qi=Vt.current,be(Vt,t),be(Xt,Xt.current),!0}function Qg(t,e,n){var r=t.stateNode;if(!r)throw Error(W(169));n?(t=b0(t,e,qi),r.__reactInternalMemoizedMergedChildContext=t,Ue(Xt),Ue(Vt),be(Vt,t)):Ue(Xt),be(Xt,n)}var ur=null,Uc=!1,Hh=!1;function O0(t){ur===null?ur=[t]:ur.push(t)}function w1(t){Uc=!0,O0(t)}function gi(){if(!Hh&&ur!==null){Hh=!0;var t=0,e=Ce;try{var n=ur;for(Ce=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}ur=null,Uc=!1}catch(i){throw ur!==null&&(ur=ur.slice(t+1)),s0(Jf,gi),i}finally{Ce=e,Hh=!1}}return null}var Vs=[],Us=0,Xu=null,Yu=0,yn=[],vn=0,Ki=null,cr=1,hr="";function xi(t,e){Vs[Us++]=Yu,Vs[Us++]=Xu,Xu=t,Yu=e}function L0(t,e,n){yn[vn++]=cr,yn[vn++]=hr,yn[vn++]=Ki,Ki=t;var r=cr;t=hr;var i=32-Un(r)-1;r&=~(1<<i),n+=1;var s=32-Un(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,cr=1<<32-Un(e)+i|n<<i|r,hr=s+t}else cr=1<<s|n<<i|r,hr=t}function ap(t){t.return!==null&&(xi(t,1),L0(t,1,0))}function lp(t){for(;t===Xu;)Xu=Vs[--Us],Vs[Us]=null,Yu=Vs[--Us],Vs[Us]=null;for(;t===Ki;)Ki=yn[--vn],yn[vn]=null,hr=yn[--vn],yn[vn]=null,cr=yn[--vn],yn[vn]=null}var un=null,an=null,Be=!1,Mn=null;function M0(t,e){var n=wn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Xg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,un=t,an=ei(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,un=t,an=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ki!==null?{id:cr,overflow:hr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=wn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,un=t,an=null,!0):!1;default:return!1}}function Gd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Qd(t){if(Be){var e=an;if(e){var n=e;if(!Xg(t,e)){if(Gd(t))throw Error(W(418));e=ei(n.nextSibling);var r=un;e&&Xg(t,e)?M0(r,n):(t.flags=t.flags&-4097|2,Be=!1,un=t)}}else{if(Gd(t))throw Error(W(418));t.flags=t.flags&-4097|2,Be=!1,un=t}}}function Yg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;un=t}function iu(t){if(t!==un)return!1;if(!Be)return Yg(t),Be=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Hd(t.type,t.memoizedProps)),e&&(e=an)){if(Gd(t))throw V0(),Error(W(418));for(;e;)M0(t,e),e=ei(e.nextSibling)}if(Yg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(W(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){an=ei(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}an=null}}else an=un?ei(t.stateNode.nextSibling):null;return!0}function V0(){for(var t=an;t;)t=ei(t.nextSibling)}function ro(){an=un=null,Be=!1}function up(t){Mn===null?Mn=[t]:Mn.push(t)}var E1=Pr.ReactCurrentBatchConfig;function Jo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(W(309));var r=n.stateNode}if(!r)throw Error(W(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(W(284));if(!n._owner)throw Error(W(290,t))}return t}function su(t,e){throw t=Object.prototype.toString.call(e),Error(W(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Jg(t){var e=t._init;return e(t._payload)}function U0(t){function e(E,_){if(t){var S=E.deletions;S===null?(E.deletions=[_],E.flags|=16):S.push(_)}}function n(E,_){if(!t)return null;for(;_!==null;)e(E,_),_=_.sibling;return null}function r(E,_){for(E=new Map;_!==null;)_.key!==null?E.set(_.key,_):E.set(_.index,_),_=_.sibling;return E}function i(E,_){return E=ii(E,_),E.index=0,E.sibling=null,E}function s(E,_,S){return E.index=S,t?(S=E.alternate,S!==null?(S=S.index,S<_?(E.flags|=2,_):S):(E.flags|=2,_)):(E.flags|=1048576,_)}function o(E){return t&&E.alternate===null&&(E.flags|=2),E}function l(E,_,S,O){return _===null||_.tag!==6?(_=Yh(S,E.mode,O),_.return=E,_):(_=i(_,S),_.return=E,_)}function u(E,_,S,O){var B=S.type;return B===Ds?d(E,_,S.props.children,O,S.key):_!==null&&(_.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===Ur&&Jg(B)===_.type)?(O=i(_,S.props),O.ref=Jo(E,_,S),O.return=E,O):(O=ku(S.type,S.key,S.props,null,E.mode,O),O.ref=Jo(E,_,S),O.return=E,O)}function c(E,_,S,O){return _===null||_.tag!==4||_.stateNode.containerInfo!==S.containerInfo||_.stateNode.implementation!==S.implementation?(_=Jh(S,E.mode,O),_.return=E,_):(_=i(_,S.children||[]),_.return=E,_)}function d(E,_,S,O,B){return _===null||_.tag!==7?(_=$i(S,E.mode,O,B),_.return=E,_):(_=i(_,S),_.return=E,_)}function p(E,_,S){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Yh(""+_,E.mode,S),_.return=E,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Gl:return S=ku(_.type,_.key,_.props,null,E.mode,S),S.ref=Jo(E,null,_),S.return=E,S;case Ns:return _=Jh(_,E.mode,S),_.return=E,_;case Ur:var O=_._init;return p(E,O(_._payload),S)}if(aa(_)||Ko(_))return _=$i(_,E.mode,S,null),_.return=E,_;su(E,_)}return null}function g(E,_,S,O){var B=_!==null?_.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return B!==null?null:l(E,_,""+S,O);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Gl:return S.key===B?u(E,_,S,O):null;case Ns:return S.key===B?c(E,_,S,O):null;case Ur:return B=S._init,g(E,_,B(S._payload),O)}if(aa(S)||Ko(S))return B!==null?null:d(E,_,S,O,null);su(E,S)}return null}function v(E,_,S,O,B){if(typeof O=="string"&&O!==""||typeof O=="number")return E=E.get(S)||null,l(_,E,""+O,B);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case Gl:return E=E.get(O.key===null?S:O.key)||null,u(_,E,O,B);case Ns:return E=E.get(O.key===null?S:O.key)||null,c(_,E,O,B);case Ur:var F=O._init;return v(E,_,S,F(O._payload),B)}if(aa(O)||Ko(O))return E=E.get(S)||null,d(_,E,O,B,null);su(_,O)}return null}function A(E,_,S,O){for(var B=null,F=null,T=_,m=_=0,w=null;T!==null&&m<S.length;m++){T.index>m?(w=T,T=null):w=T.sibling;var I=g(E,T,S[m],O);if(I===null){T===null&&(T=w);break}t&&T&&I.alternate===null&&e(E,T),_=s(I,_,m),F===null?B=I:F.sibling=I,F=I,T=w}if(m===S.length)return n(E,T),Be&&xi(E,m),B;if(T===null){for(;m<S.length;m++)T=p(E,S[m],O),T!==null&&(_=s(T,_,m),F===null?B=T:F.sibling=T,F=T);return Be&&xi(E,m),B}for(T=r(E,T);m<S.length;m++)w=v(T,E,m,S[m],O),w!==null&&(t&&w.alternate!==null&&T.delete(w.key===null?m:w.key),_=s(w,_,m),F===null?B=w:F.sibling=w,F=w);return t&&T.forEach(function(C){return e(E,C)}),Be&&xi(E,m),B}function P(E,_,S,O){var B=Ko(S);if(typeof B!="function")throw Error(W(150));if(S=B.call(S),S==null)throw Error(W(151));for(var F=B=null,T=_,m=_=0,w=null,I=S.next();T!==null&&!I.done;m++,I=S.next()){T.index>m?(w=T,T=null):w=T.sibling;var C=g(E,T,I.value,O);if(C===null){T===null&&(T=w);break}t&&T&&C.alternate===null&&e(E,T),_=s(C,_,m),F===null?B=C:F.sibling=C,F=C,T=w}if(I.done)return n(E,T),Be&&xi(E,m),B;if(T===null){for(;!I.done;m++,I=S.next())I=p(E,I.value,O),I!==null&&(_=s(I,_,m),F===null?B=I:F.sibling=I,F=I);return Be&&xi(E,m),B}for(T=r(E,T);!I.done;m++,I=S.next())I=v(T,E,m,I.value,O),I!==null&&(t&&I.alternate!==null&&T.delete(I.key===null?m:I.key),_=s(I,_,m),F===null?B=I:F.sibling=I,F=I);return t&&T.forEach(function(x){return e(E,x)}),Be&&xi(E,m),B}function b(E,_,S,O){if(typeof S=="object"&&S!==null&&S.type===Ds&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case Gl:e:{for(var B=S.key,F=_;F!==null;){if(F.key===B){if(B=S.type,B===Ds){if(F.tag===7){n(E,F.sibling),_=i(F,S.props.children),_.return=E,E=_;break e}}else if(F.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===Ur&&Jg(B)===F.type){n(E,F.sibling),_=i(F,S.props),_.ref=Jo(E,F,S),_.return=E,E=_;break e}n(E,F);break}else e(E,F);F=F.sibling}S.type===Ds?(_=$i(S.props.children,E.mode,O,S.key),_.return=E,E=_):(O=ku(S.type,S.key,S.props,null,E.mode,O),O.ref=Jo(E,_,S),O.return=E,E=O)}return o(E);case Ns:e:{for(F=S.key;_!==null;){if(_.key===F)if(_.tag===4&&_.stateNode.containerInfo===S.containerInfo&&_.stateNode.implementation===S.implementation){n(E,_.sibling),_=i(_,S.children||[]),_.return=E,E=_;break e}else{n(E,_);break}else e(E,_);_=_.sibling}_=Jh(S,E.mode,O),_.return=E,E=_}return o(E);case Ur:return F=S._init,b(E,_,F(S._payload),O)}if(aa(S))return A(E,_,S,O);if(Ko(S))return P(E,_,S,O);su(E,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,_!==null&&_.tag===6?(n(E,_.sibling),_=i(_,S),_.return=E,E=_):(n(E,_),_=Yh(S,E.mode,O),_.return=E,E=_),o(E)):n(E,_)}return b}var io=U0(!0),F0=U0(!1),Ju=mi(null),Zu=null,Fs=null,cp=null;function hp(){cp=Fs=Zu=null}function dp(t){var e=Ju.current;Ue(Ju),t._currentValue=e}function Xd(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Qs(t,e){Zu=t,cp=Fs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Qt=!0),t.firstContext=null)}function In(t){var e=t._currentValue;if(cp!==t)if(t={context:t,memoizedValue:e,next:null},Fs===null){if(Zu===null)throw Error(W(308));Fs=t,Zu.dependencies={lanes:0,firstContext:t}}else Fs=Fs.next=t;return e}var Vi=null;function fp(t){Vi===null?Vi=[t]:Vi.push(t)}function j0(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,fp(e)):(n.next=i.next,i.next=n),e.interleaved=n,Tr(t,r)}function Tr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Fr=!1;function pp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function B0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function gr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ti(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,Ee&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Tr(t,n)}return i=r.interleaved,i===null?(e.next=e,fp(r)):(e.next=i.next,i.next=e),r.interleaved=e,Tr(t,n)}function Iu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Zf(t,n)}}function Zg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ec(t,e,n,r){var i=t.updateQueue;Fr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=c:l.next=c,d.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,d=c=u=null,l=s;do{var g=l.lane,v=l.eventTime;if((r&g)===g){d!==null&&(d=d.next={eventTime:v,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var A=t,P=l;switch(g=e,v=n,P.tag){case 1:if(A=P.payload,typeof A=="function"){p=A.call(v,p,g);break e}p=A;break e;case 3:A.flags=A.flags&-65537|128;case 0:if(A=P.payload,g=typeof A=="function"?A.call(v,p,g):A,g==null)break e;p=We({},p,g);break e;case 2:Fr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,g=i.effects,g===null?i.effects=[l]:g.push(l))}else v={eventTime:v,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(c=d=v,u=p):d=d.next=v,o|=g;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;g=l,l=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(d===null&&(u=p),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Qi|=o,t.lanes=o,t.memoizedState=p}}function ey(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(W(191,i));i.call(r)}}}var pl={},Xn=mi(pl),$a=mi(pl),Ha=mi(pl);function Ui(t){if(t===pl)throw Error(W(174));return t}function mp(t,e){switch(be(Ha,e),be($a,t),be(Xn,pl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Nd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Nd(e,t)}Ue(Xn),be(Xn,e)}function so(){Ue(Xn),Ue($a),Ue(Ha)}function z0(t){Ui(Ha.current);var e=Ui(Xn.current),n=Nd(e,t.type);e!==n&&(be($a,t),be(Xn,n))}function gp(t){$a.current===t&&(Ue(Xn),Ue($a))}var $e=mi(0);function tc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Wh=[];function yp(){for(var t=0;t<Wh.length;t++)Wh[t]._workInProgressVersionPrimary=null;Wh.length=0}var Su=Pr.ReactCurrentDispatcher,qh=Pr.ReactCurrentBatchConfig,Gi=0,He=null,at=null,ft=null,nc=!1,Ea=!1,Wa=0,T1=0;function Dt(){throw Error(W(321))}function vp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!jn(t[n],e[n]))return!1;return!0}function _p(t,e,n,r,i,s){if(Gi=s,He=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Su.current=t===null||t.memoizedState===null?A1:C1,t=n(r,i),Ea){s=0;do{if(Ea=!1,Wa=0,25<=s)throw Error(W(301));s+=1,ft=at=null,e.updateQueue=null,Su.current=P1,t=n(r,i)}while(Ea)}if(Su.current=rc,e=at!==null&&at.next!==null,Gi=0,ft=at=He=null,nc=!1,e)throw Error(W(300));return t}function wp(){var t=Wa!==0;return Wa=0,t}function qn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ft===null?He.memoizedState=ft=t:ft=ft.next=t,ft}function Sn(){if(at===null){var t=He.alternate;t=t!==null?t.memoizedState:null}else t=at.next;var e=ft===null?He.memoizedState:ft.next;if(e!==null)ft=e,at=t;else{if(t===null)throw Error(W(310));at=t,t={memoizedState:at.memoizedState,baseState:at.baseState,baseQueue:at.baseQueue,queue:at.queue,next:null},ft===null?He.memoizedState=ft=t:ft=ft.next=t}return ft}function qa(t,e){return typeof e=="function"?e(t):e}function Kh(t){var e=Sn(),n=e.queue;if(n===null)throw Error(W(311));n.lastRenderedReducer=t;var r=at,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var d=c.lane;if((Gi&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var p={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,He.lanes|=d,Qi|=d}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,jn(r,e.memoizedState)||(Qt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,He.lanes|=s,Qi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Gh(t){var e=Sn(),n=e.queue;if(n===null)throw Error(W(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);jn(s,e.memoizedState)||(Qt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function $0(){}function H0(t,e){var n=He,r=Sn(),i=e(),s=!jn(r.memoizedState,i);if(s&&(r.memoizedState=i,Qt=!0),r=r.queue,Ep(K0.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||ft!==null&&ft.memoizedState.tag&1){if(n.flags|=2048,Ka(9,q0.bind(null,n,r,i,e),void 0,null),mt===null)throw Error(W(349));Gi&30||W0(n,e,i)}return i}function W0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=He.updateQueue,e===null?(e={lastEffect:null,stores:null},He.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function q0(t,e,n,r){e.value=n,e.getSnapshot=r,G0(e)&&Q0(t)}function K0(t,e,n){return n(function(){G0(e)&&Q0(t)})}function G0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!jn(t,n)}catch{return!0}}function Q0(t){var e=Tr(t,1);e!==null&&Fn(e,t,1,-1)}function ty(t){var e=qn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:qa,lastRenderedState:t},e.queue=t,t=t.dispatch=R1.bind(null,He,t),[e.memoizedState,t]}function Ka(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=He.updateQueue,e===null?(e={lastEffect:null,stores:null},He.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function X0(){return Sn().memoizedState}function Ru(t,e,n,r){var i=qn();He.flags|=t,i.memoizedState=Ka(1|e,n,void 0,r===void 0?null:r)}function Fc(t,e,n,r){var i=Sn();r=r===void 0?null:r;var s=void 0;if(at!==null){var o=at.memoizedState;if(s=o.destroy,r!==null&&vp(r,o.deps)){i.memoizedState=Ka(e,n,s,r);return}}He.flags|=t,i.memoizedState=Ka(1|e,n,s,r)}function ny(t,e){return Ru(8390656,8,t,e)}function Ep(t,e){return Fc(2048,8,t,e)}function Y0(t,e){return Fc(4,2,t,e)}function J0(t,e){return Fc(4,4,t,e)}function Z0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function ew(t,e,n){return n=n!=null?n.concat([t]):null,Fc(4,4,Z0.bind(null,e,t),n)}function Tp(){}function tw(t,e){var n=Sn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&vp(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function nw(t,e){var n=Sn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&vp(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function rw(t,e,n){return Gi&21?(jn(n,e)||(n=l0(),He.lanes|=n,Qi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Qt=!0),t.memoizedState=n)}function I1(t,e){var n=Ce;Ce=n!==0&&4>n?n:4,t(!0);var r=qh.transition;qh.transition={};try{t(!1),e()}finally{Ce=n,qh.transition=r}}function iw(){return Sn().memoizedState}function S1(t,e,n){var r=ri(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},sw(t))ow(e,n);else if(n=j0(t,e,n,r),n!==null){var i=$t();Fn(n,t,r,i),aw(n,e,r)}}function R1(t,e,n){var r=ri(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(sw(t))ow(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,jn(l,o)){var u=e.interleaved;u===null?(i.next=i,fp(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=j0(t,e,i,r),n!==null&&(i=$t(),Fn(n,t,r,i),aw(n,e,r))}}function sw(t){var e=t.alternate;return t===He||e!==null&&e===He}function ow(t,e){Ea=nc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function aw(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Zf(t,n)}}var rc={readContext:In,useCallback:Dt,useContext:Dt,useEffect:Dt,useImperativeHandle:Dt,useInsertionEffect:Dt,useLayoutEffect:Dt,useMemo:Dt,useReducer:Dt,useRef:Dt,useState:Dt,useDebugValue:Dt,useDeferredValue:Dt,useTransition:Dt,useMutableSource:Dt,useSyncExternalStore:Dt,useId:Dt,unstable_isNewReconciler:!1},A1={readContext:In,useCallback:function(t,e){return qn().memoizedState=[t,e===void 0?null:e],t},useContext:In,useEffect:ny,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ru(4194308,4,Z0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ru(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ru(4,2,t,e)},useMemo:function(t,e){var n=qn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=qn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=S1.bind(null,He,t),[r.memoizedState,t]},useRef:function(t){var e=qn();return t={current:t},e.memoizedState=t},useState:ty,useDebugValue:Tp,useDeferredValue:function(t){return qn().memoizedState=t},useTransition:function(){var t=ty(!1),e=t[0];return t=I1.bind(null,t[1]),qn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=He,i=qn();if(Be){if(n===void 0)throw Error(W(407));n=n()}else{if(n=e(),mt===null)throw Error(W(349));Gi&30||W0(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,ny(K0.bind(null,r,s,t),[t]),r.flags|=2048,Ka(9,q0.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=qn(),e=mt.identifierPrefix;if(Be){var n=hr,r=cr;n=(r&~(1<<32-Un(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Wa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=T1++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},C1={readContext:In,useCallback:tw,useContext:In,useEffect:Ep,useImperativeHandle:ew,useInsertionEffect:Y0,useLayoutEffect:J0,useMemo:nw,useReducer:Kh,useRef:X0,useState:function(){return Kh(qa)},useDebugValue:Tp,useDeferredValue:function(t){var e=Sn();return rw(e,at.memoizedState,t)},useTransition:function(){var t=Kh(qa)[0],e=Sn().memoizedState;return[t,e]},useMutableSource:$0,useSyncExternalStore:H0,useId:iw,unstable_isNewReconciler:!1},P1={readContext:In,useCallback:tw,useContext:In,useEffect:Ep,useImperativeHandle:ew,useInsertionEffect:Y0,useLayoutEffect:J0,useMemo:nw,useReducer:Gh,useRef:X0,useState:function(){return Gh(qa)},useDebugValue:Tp,useDeferredValue:function(t){var e=Sn();return at===null?e.memoizedState=t:rw(e,at.memoizedState,t)},useTransition:function(){var t=Gh(qa)[0],e=Sn().memoizedState;return[t,e]},useMutableSource:$0,useSyncExternalStore:H0,useId:iw,unstable_isNewReconciler:!1};function bn(t,e){if(t&&t.defaultProps){e=We({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Yd(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:We({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var jc={isMounted:function(t){return(t=t._reactInternals)?os(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=$t(),i=ri(t),s=gr(r,i);s.payload=e,n!=null&&(s.callback=n),e=ti(t,s,i),e!==null&&(Fn(e,t,i,r),Iu(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=$t(),i=ri(t),s=gr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ti(t,s,i),e!==null&&(Fn(e,t,i,r),Iu(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=$t(),r=ri(t),i=gr(n,r);i.tag=2,e!=null&&(i.callback=e),e=ti(t,i,r),e!==null&&(Fn(e,t,r,n),Iu(e,t,r))}};function ry(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Fa(n,r)||!Fa(i,s):!0}function lw(t,e,n){var r=!1,i=ci,s=e.contextType;return typeof s=="object"&&s!==null?s=In(s):(i=Yt(e)?qi:Vt.current,r=e.contextTypes,s=(r=r!=null)?no(t,i):ci),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=jc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function iy(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&jc.enqueueReplaceState(e,e.state,null)}function Jd(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},pp(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=In(s):(s=Yt(e)?qi:Vt.current,i.context=no(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Yd(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&jc.enqueueReplaceState(i,i.state,null),ec(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function oo(t,e){try{var n="",r=e;do n+=nR(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Qh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Zd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var k1=typeof WeakMap=="function"?WeakMap:Map;function uw(t,e,n){n=gr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){sc||(sc=!0,cf=r),Zd(t,e)},n}function cw(t,e,n){n=gr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Zd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Zd(t,e),typeof r!="function"&&(ni===null?ni=new Set([this]):ni.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function sy(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new k1;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=$1.bind(null,t,e,n),e.then(t,t))}function oy(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function ay(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=gr(-1,1),e.tag=2,ti(n,e,1))),n.lanes|=1),t)}var N1=Pr.ReactCurrentOwner,Qt=!1;function zt(t,e,n,r){e.child=t===null?F0(e,null,n,r):io(e,t.child,n,r)}function ly(t,e,n,r,i){n=n.render;var s=e.ref;return Qs(e,i),r=_p(t,e,n,r,s,i),n=wp(),t!==null&&!Qt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Ir(t,e,i)):(Be&&n&&ap(e),e.flags|=1,zt(t,e,r,i),e.child)}function uy(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Np(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,hw(t,e,s,r,i)):(t=ku(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Fa,n(o,r)&&t.ref===e.ref)return Ir(t,e,i)}return e.flags|=1,t=ii(s,r),t.ref=e.ref,t.return=e,e.child=t}function hw(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Fa(s,r)&&t.ref===e.ref)if(Qt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Qt=!0);else return e.lanes=t.lanes,Ir(t,e,i)}return ef(t,e,n,r,i)}function dw(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},be(Bs,sn),sn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,be(Bs,sn),sn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,be(Bs,sn),sn|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,be(Bs,sn),sn|=r;return zt(t,e,i,n),e.child}function fw(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ef(t,e,n,r,i){var s=Yt(n)?qi:Vt.current;return s=no(e,s),Qs(e,i),n=_p(t,e,n,r,s,i),r=wp(),t!==null&&!Qt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Ir(t,e,i)):(Be&&r&&ap(e),e.flags|=1,zt(t,e,n,i),e.child)}function cy(t,e,n,r,i){if(Yt(n)){var s=!0;Qu(e)}else s=!1;if(Qs(e,i),e.stateNode===null)Au(t,e),lw(e,n,r),Jd(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=In(c):(c=Yt(n)?qi:Vt.current,c=no(e,c));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&iy(e,o,r,c),Fr=!1;var g=e.memoizedState;o.state=g,ec(e,r,o,i),u=e.memoizedState,l!==r||g!==u||Xt.current||Fr?(typeof d=="function"&&(Yd(e,n,d,r),u=e.memoizedState),(l=Fr||ry(e,n,l,r,g,u,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,B0(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:bn(e.type,l),o.props=c,p=e.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=In(u):(u=Yt(n)?qi:Vt.current,u=no(e,u));var v=n.getDerivedStateFromProps;(d=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||g!==u)&&iy(e,o,r,u),Fr=!1,g=e.memoizedState,o.state=g,ec(e,r,o,i);var A=e.memoizedState;l!==p||g!==A||Xt.current||Fr?(typeof v=="function"&&(Yd(e,n,v,r),A=e.memoizedState),(c=Fr||ry(e,n,c,r,g,A,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,A,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,A,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=A),o.props=r,o.state=A,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return tf(t,e,n,r,s,i)}function tf(t,e,n,r,i,s){fw(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Qg(e,n,!1),Ir(t,e,s);r=e.stateNode,N1.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=io(e,t.child,null,s),e.child=io(e,null,l,s)):zt(t,e,l,s),e.memoizedState=r.state,i&&Qg(e,n,!0),e.child}function pw(t){var e=t.stateNode;e.pendingContext?Gg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Gg(t,e.context,!1),mp(t,e.containerInfo)}function hy(t,e,n,r,i){return ro(),up(i),e.flags|=256,zt(t,e,n,r),e.child}var nf={dehydrated:null,treeContext:null,retryLane:0};function rf(t){return{baseLanes:t,cachePool:null,transitions:null}}function mw(t,e,n){var r=e.pendingProps,i=$e.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),be($e,i&1),t===null)return Qd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=$c(o,r,0,null),t=$i(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=rf(n),e.memoizedState=nf,t):Ip(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return D1(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=ii(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=ii(l,s):(s=$i(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?rf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=nf,r}return s=t.child,t=s.sibling,r=ii(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Ip(t,e){return e=$c({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ou(t,e,n,r){return r!==null&&up(r),io(e,t.child,null,n),t=Ip(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function D1(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Qh(Error(W(422))),ou(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=$c({mode:"visible",children:r.children},i,0,null),s=$i(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&io(e,t.child,null,o),e.child.memoizedState=rf(o),e.memoizedState=nf,s);if(!(e.mode&1))return ou(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(W(419)),r=Qh(s,r,void 0),ou(t,e,o,r)}if(l=(o&t.childLanes)!==0,Qt||l){if(r=mt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Tr(t,i),Fn(r,t,i,-1))}return kp(),r=Qh(Error(W(421))),ou(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=H1.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,an=ei(i.nextSibling),un=e,Be=!0,Mn=null,t!==null&&(yn[vn++]=cr,yn[vn++]=hr,yn[vn++]=Ki,cr=t.id,hr=t.overflow,Ki=e),e=Ip(e,r.children),e.flags|=4096,e)}function dy(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Xd(t.return,e,n)}function Xh(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function gw(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(zt(t,e,r.children,n),r=$e.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&dy(t,n,e);else if(t.tag===19)dy(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(be($e,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&tc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Xh(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&tc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Xh(e,!0,n,null,s);break;case"together":Xh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Au(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ir(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Qi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(W(153));if(e.child!==null){for(t=e.child,n=ii(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ii(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function x1(t,e,n){switch(e.tag){case 3:pw(e),ro();break;case 5:z0(e);break;case 1:Yt(e.type)&&Qu(e);break;case 4:mp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;be(Ju,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(be($e,$e.current&1),e.flags|=128,null):n&e.child.childLanes?mw(t,e,n):(be($e,$e.current&1),t=Ir(t,e,n),t!==null?t.sibling:null);be($e,$e.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return gw(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),be($e,$e.current),r)break;return null;case 22:case 23:return e.lanes=0,dw(t,e,n)}return Ir(t,e,n)}var yw,sf,vw,_w;yw=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};sf=function(){};vw=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Ui(Xn.current);var s=null;switch(n){case"input":i=Ad(t,i),r=Ad(t,r),s=[];break;case"select":i=We({},i,{value:void 0}),r=We({},r,{value:void 0}),s=[];break;case"textarea":i=kd(t,i),r=kd(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ku)}Dd(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(xa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(xa.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&Ve("scroll",t),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};_w=function(t,e,n,r){n!==r&&(e.flags|=4)};function Zo(t,e){if(!Be)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function xt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function b1(t,e,n){var r=e.pendingProps;switch(lp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xt(e),null;case 1:return Yt(e.type)&&Gu(),xt(e),null;case 3:return r=e.stateNode,so(),Ue(Xt),Ue(Vt),yp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(iu(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Mn!==null&&(ff(Mn),Mn=null))),sf(t,e),xt(e),null;case 5:gp(e);var i=Ui(Ha.current);if(n=e.type,t!==null&&e.stateNode!=null)vw(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(W(166));return xt(e),null}if(t=Ui(Xn.current),iu(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Kn]=e,r[za]=s,t=(e.mode&1)!==0,n){case"dialog":Ve("cancel",r),Ve("close",r);break;case"iframe":case"object":case"embed":Ve("load",r);break;case"video":case"audio":for(i=0;i<ua.length;i++)Ve(ua[i],r);break;case"source":Ve("error",r);break;case"img":case"image":case"link":Ve("error",r),Ve("load",r);break;case"details":Ve("toggle",r);break;case"input":Eg(r,s),Ve("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Ve("invalid",r);break;case"textarea":Ig(r,s),Ve("invalid",r)}Dd(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&ru(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&ru(r.textContent,l,t),i=["children",""+l]):xa.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Ve("scroll",r)}switch(n){case"input":Ql(r),Tg(r,s,!0);break;case"textarea":Ql(r),Sg(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ku)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=K_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Kn]=e,t[za]=r,yw(t,e,!1,!1),e.stateNode=t;e:{switch(o=xd(n,r),n){case"dialog":Ve("cancel",t),Ve("close",t),i=r;break;case"iframe":case"object":case"embed":Ve("load",t),i=r;break;case"video":case"audio":for(i=0;i<ua.length;i++)Ve(ua[i],t);i=r;break;case"source":Ve("error",t),i=r;break;case"img":case"image":case"link":Ve("error",t),Ve("load",t),i=r;break;case"details":Ve("toggle",t),i=r;break;case"input":Eg(t,r),i=Ad(t,r),Ve("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=We({},r,{value:void 0}),Ve("invalid",t);break;case"textarea":Ig(t,r),i=kd(t,r),Ve("invalid",t);break;default:i=r}Dd(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?X_(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&G_(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&ba(t,u):typeof u=="number"&&ba(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(xa.hasOwnProperty(s)?u!=null&&s==="onScroll"&&Ve("scroll",t):u!=null&&Kf(t,s,u,o))}switch(n){case"input":Ql(t),Tg(t,r,!1);break;case"textarea":Ql(t),Sg(t);break;case"option":r.value!=null&&t.setAttribute("value",""+ui(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Ws(t,!!r.multiple,s,!1):r.defaultValue!=null&&Ws(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Ku)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return xt(e),null;case 6:if(t&&e.stateNode!=null)_w(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(W(166));if(n=Ui(Ha.current),Ui(Xn.current),iu(e)){if(r=e.stateNode,n=e.memoizedProps,r[Kn]=e,(s=r.nodeValue!==n)&&(t=un,t!==null))switch(t.tag){case 3:ru(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ru(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Kn]=e,e.stateNode=r}return xt(e),null;case 13:if(Ue($e),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Be&&an!==null&&e.mode&1&&!(e.flags&128))V0(),ro(),e.flags|=98560,s=!1;else if(s=iu(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(W(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(W(317));s[Kn]=e}else ro(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;xt(e),s=!1}else Mn!==null&&(ff(Mn),Mn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||$e.current&1?ut===0&&(ut=3):kp())),e.updateQueue!==null&&(e.flags|=4),xt(e),null);case 4:return so(),sf(t,e),t===null&&ja(e.stateNode.containerInfo),xt(e),null;case 10:return dp(e.type._context),xt(e),null;case 17:return Yt(e.type)&&Gu(),xt(e),null;case 19:if(Ue($e),s=e.memoizedState,s===null)return xt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Zo(s,!1);else{if(ut!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=tc(t),o!==null){for(e.flags|=128,Zo(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return be($e,$e.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ze()>ao&&(e.flags|=128,r=!0,Zo(s,!1),e.lanes=4194304)}else{if(!r)if(t=tc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Zo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Be)return xt(e),null}else 2*Ze()-s.renderingStartTime>ao&&n!==1073741824&&(e.flags|=128,r=!0,Zo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ze(),e.sibling=null,n=$e.current,be($e,r?n&1|2:n&1),e):(xt(e),null);case 22:case 23:return Pp(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?sn&1073741824&&(xt(e),e.subtreeFlags&6&&(e.flags|=8192)):xt(e),null;case 24:return null;case 25:return null}throw Error(W(156,e.tag))}function O1(t,e){switch(lp(e),e.tag){case 1:return Yt(e.type)&&Gu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return so(),Ue(Xt),Ue(Vt),yp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return gp(e),null;case 13:if(Ue($e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(W(340));ro()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ue($e),null;case 4:return so(),null;case 10:return dp(e.type._context),null;case 22:case 23:return Pp(),null;case 24:return null;default:return null}}var au=!1,Lt=!1,L1=typeof WeakSet=="function"?WeakSet:Set,Y=null;function js(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Qe(t,e,r)}else n.current=null}function of(t,e,n){try{n()}catch(r){Qe(t,e,r)}}var fy=!1;function M1(t,e){if(zd=Hu,t=S0(),op(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,d=0,p=t,g=null;t:for(;;){for(var v;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(v=p.firstChild)!==null;)g=p,p=v;for(;;){if(p===t)break t;if(g===n&&++c===i&&(l=o),g===s&&++d===r&&(u=o),(v=p.nextSibling)!==null)break;p=g,g=p.parentNode}p=v}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for($d={focusedElem:t,selectionRange:n},Hu=!1,Y=e;Y!==null;)if(e=Y,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Y=t;else for(;Y!==null;){e=Y;try{var A=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(A!==null){var P=A.memoizedProps,b=A.memoizedState,E=e.stateNode,_=E.getSnapshotBeforeUpdate(e.elementType===e.type?P:bn(e.type,P),b);E.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(W(163))}}catch(O){Qe(e,e.return,O)}if(t=e.sibling,t!==null){t.return=e.return,Y=t;break}Y=e.return}return A=fy,fy=!1,A}function Ta(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&of(e,n,s)}i=i.next}while(i!==r)}}function Bc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function af(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function ww(t){var e=t.alternate;e!==null&&(t.alternate=null,ww(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Kn],delete e[za],delete e[qd],delete e[v1],delete e[_1])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Ew(t){return t.tag===5||t.tag===3||t.tag===4}function py(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ew(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function lf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ku));else if(r!==4&&(t=t.child,t!==null))for(lf(t,e,n),t=t.sibling;t!==null;)lf(t,e,n),t=t.sibling}function uf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(uf(t,e,n),t=t.sibling;t!==null;)uf(t,e,n),t=t.sibling}var vt=null,On=!1;function Lr(t,e,n){for(n=n.child;n!==null;)Tw(t,e,n),n=n.sibling}function Tw(t,e,n){if(Qn&&typeof Qn.onCommitFiberUnmount=="function")try{Qn.onCommitFiberUnmount(bc,n)}catch{}switch(n.tag){case 5:Lt||js(n,e);case 6:var r=vt,i=On;vt=null,Lr(t,e,n),vt=r,On=i,vt!==null&&(On?(t=vt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):vt.removeChild(n.stateNode));break;case 18:vt!==null&&(On?(t=vt,n=n.stateNode,t.nodeType===8?$h(t.parentNode,n):t.nodeType===1&&$h(t,n),Va(t)):$h(vt,n.stateNode));break;case 4:r=vt,i=On,vt=n.stateNode.containerInfo,On=!0,Lr(t,e,n),vt=r,On=i;break;case 0:case 11:case 14:case 15:if(!Lt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&of(n,e,o),i=i.next}while(i!==r)}Lr(t,e,n);break;case 1:if(!Lt&&(js(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Qe(n,e,l)}Lr(t,e,n);break;case 21:Lr(t,e,n);break;case 22:n.mode&1?(Lt=(r=Lt)||n.memoizedState!==null,Lr(t,e,n),Lt=r):Lr(t,e,n);break;default:Lr(t,e,n)}}function my(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new L1),e.forEach(function(r){var i=W1.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function xn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:vt=l.stateNode,On=!1;break e;case 3:vt=l.stateNode.containerInfo,On=!0;break e;case 4:vt=l.stateNode.containerInfo,On=!0;break e}l=l.return}if(vt===null)throw Error(W(160));Tw(s,o,i),vt=null,On=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Qe(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Iw(e,t),e=e.sibling}function Iw(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(xn(e,t),Wn(t),r&4){try{Ta(3,t,t.return),Bc(3,t)}catch(P){Qe(t,t.return,P)}try{Ta(5,t,t.return)}catch(P){Qe(t,t.return,P)}}break;case 1:xn(e,t),Wn(t),r&512&&n!==null&&js(n,n.return);break;case 5:if(xn(e,t),Wn(t),r&512&&n!==null&&js(n,n.return),t.flags&32){var i=t.stateNode;try{ba(i,"")}catch(P){Qe(t,t.return,P)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&W_(i,s),xd(l,o);var c=xd(l,s);for(o=0;o<u.length;o+=2){var d=u[o],p=u[o+1];d==="style"?X_(i,p):d==="dangerouslySetInnerHTML"?G_(i,p):d==="children"?ba(i,p):Kf(i,d,p,c)}switch(l){case"input":Cd(i,s);break;case"textarea":q_(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var v=s.value;v!=null?Ws(i,!!s.multiple,v,!1):g!==!!s.multiple&&(s.defaultValue!=null?Ws(i,!!s.multiple,s.defaultValue,!0):Ws(i,!!s.multiple,s.multiple?[]:"",!1))}i[za]=s}catch(P){Qe(t,t.return,P)}}break;case 6:if(xn(e,t),Wn(t),r&4){if(t.stateNode===null)throw Error(W(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(P){Qe(t,t.return,P)}}break;case 3:if(xn(e,t),Wn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Va(e.containerInfo)}catch(P){Qe(t,t.return,P)}break;case 4:xn(e,t),Wn(t);break;case 13:xn(e,t),Wn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Ap=Ze())),r&4&&my(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Lt=(c=Lt)||d,xn(e,t),Lt=c):xn(e,t),Wn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(Y=t,d=t.child;d!==null;){for(p=Y=d;Y!==null;){switch(g=Y,v=g.child,g.tag){case 0:case 11:case 14:case 15:Ta(4,g,g.return);break;case 1:js(g,g.return);var A=g.stateNode;if(typeof A.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,A.props=e.memoizedProps,A.state=e.memoizedState,A.componentWillUnmount()}catch(P){Qe(r,n,P)}}break;case 5:js(g,g.return);break;case 22:if(g.memoizedState!==null){yy(p);continue}}v!==null?(v.return=g,Y=v):yy(p)}d=d.sibling}e:for(d=null,p=t;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Q_("display",o))}catch(P){Qe(t,t.return,P)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(P){Qe(t,t.return,P)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:xn(e,t),Wn(t),r&4&&my(t);break;case 21:break;default:xn(e,t),Wn(t)}}function Wn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Ew(n)){var r=n;break e}n=n.return}throw Error(W(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ba(i,""),r.flags&=-33);var s=py(t);uf(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=py(t);lf(t,l,o);break;default:throw Error(W(161))}}catch(u){Qe(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function V1(t,e,n){Y=t,Sw(t)}function Sw(t,e,n){for(var r=(t.mode&1)!==0;Y!==null;){var i=Y,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||au;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||Lt;l=au;var c=Lt;if(au=o,(Lt=u)&&!c)for(Y=i;Y!==null;)o=Y,u=o.child,o.tag===22&&o.memoizedState!==null?vy(i):u!==null?(u.return=o,Y=u):vy(i);for(;s!==null;)Y=s,Sw(s),s=s.sibling;Y=i,au=l,Lt=c}gy(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,Y=s):gy(t)}}function gy(t){for(;Y!==null;){var e=Y;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Lt||Bc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Lt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:bn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&ey(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}ey(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&Va(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(W(163))}Lt||e.flags&512&&af(e)}catch(g){Qe(e,e.return,g)}}if(e===t){Y=null;break}if(n=e.sibling,n!==null){n.return=e.return,Y=n;break}Y=e.return}}function yy(t){for(;Y!==null;){var e=Y;if(e===t){Y=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Y=n;break}Y=e.return}}function vy(t){for(;Y!==null;){var e=Y;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Bc(4,e)}catch(u){Qe(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Qe(e,i,u)}}var s=e.return;try{af(e)}catch(u){Qe(e,s,u)}break;case 5:var o=e.return;try{af(e)}catch(u){Qe(e,o,u)}}}catch(u){Qe(e,e.return,u)}if(e===t){Y=null;break}var l=e.sibling;if(l!==null){l.return=e.return,Y=l;break}Y=e.return}}var U1=Math.ceil,ic=Pr.ReactCurrentDispatcher,Sp=Pr.ReactCurrentOwner,En=Pr.ReactCurrentBatchConfig,Ee=0,mt=null,it=null,Et=0,sn=0,Bs=mi(0),ut=0,Ga=null,Qi=0,zc=0,Rp=0,Ia=null,Gt=null,Ap=0,ao=1/0,lr=null,sc=!1,cf=null,ni=null,lu=!1,Gr=null,oc=0,Sa=0,hf=null,Cu=-1,Pu=0;function $t(){return Ee&6?Ze():Cu!==-1?Cu:Cu=Ze()}function ri(t){return t.mode&1?Ee&2&&Et!==0?Et&-Et:E1.transition!==null?(Pu===0&&(Pu=l0()),Pu):(t=Ce,t!==0||(t=window.event,t=t===void 0?16:m0(t.type)),t):1}function Fn(t,e,n,r){if(50<Sa)throw Sa=0,hf=null,Error(W(185));hl(t,n,r),(!(Ee&2)||t!==mt)&&(t===mt&&(!(Ee&2)&&(zc|=n),ut===4&&Br(t,Et)),Jt(t,r),n===1&&Ee===0&&!(e.mode&1)&&(ao=Ze()+500,Uc&&gi()))}function Jt(t,e){var n=t.callbackNode;ER(t,e);var r=$u(t,t===mt?Et:0);if(r===0)n!==null&&Cg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Cg(n),e===1)t.tag===0?w1(_y.bind(null,t)):O0(_y.bind(null,t)),g1(function(){!(Ee&6)&&gi()}),n=null;else{switch(u0(r)){case 1:n=Jf;break;case 4:n=o0;break;case 16:n=zu;break;case 536870912:n=a0;break;default:n=zu}n=xw(n,Rw.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Rw(t,e){if(Cu=-1,Pu=0,Ee&6)throw Error(W(327));var n=t.callbackNode;if(Xs()&&t.callbackNode!==n)return null;var r=$u(t,t===mt?Et:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=ac(t,r);else{e=r;var i=Ee;Ee|=2;var s=Cw();(mt!==t||Et!==e)&&(lr=null,ao=Ze()+500,zi(t,e));do try{B1();break}catch(l){Aw(t,l)}while(!0);hp(),ic.current=s,Ee=i,it!==null?e=0:(mt=null,Et=0,e=ut)}if(e!==0){if(e===2&&(i=Vd(t),i!==0&&(r=i,e=df(t,i))),e===1)throw n=Ga,zi(t,0),Br(t,r),Jt(t,Ze()),n;if(e===6)Br(t,r);else{if(i=t.current.alternate,!(r&30)&&!F1(i)&&(e=ac(t,r),e===2&&(s=Vd(t),s!==0&&(r=s,e=df(t,s))),e===1))throw n=Ga,zi(t,0),Br(t,r),Jt(t,Ze()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(W(345));case 2:bi(t,Gt,lr);break;case 3:if(Br(t,r),(r&130023424)===r&&(e=Ap+500-Ze(),10<e)){if($u(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){$t(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Wd(bi.bind(null,t,Gt,lr),e);break}bi(t,Gt,lr);break;case 4:if(Br(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Un(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ze()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*U1(r/1960))-r,10<r){t.timeoutHandle=Wd(bi.bind(null,t,Gt,lr),r);break}bi(t,Gt,lr);break;case 5:bi(t,Gt,lr);break;default:throw Error(W(329))}}}return Jt(t,Ze()),t.callbackNode===n?Rw.bind(null,t):null}function df(t,e){var n=Ia;return t.current.memoizedState.isDehydrated&&(zi(t,e).flags|=256),t=ac(t,e),t!==2&&(e=Gt,Gt=n,e!==null&&ff(e)),t}function ff(t){Gt===null?Gt=t:Gt.push.apply(Gt,t)}function F1(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!jn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Br(t,e){for(e&=~Rp,e&=~zc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Un(e),r=1<<n;t[n]=-1,e&=~r}}function _y(t){if(Ee&6)throw Error(W(327));Xs();var e=$u(t,0);if(!(e&1))return Jt(t,Ze()),null;var n=ac(t,e);if(t.tag!==0&&n===2){var r=Vd(t);r!==0&&(e=r,n=df(t,r))}if(n===1)throw n=Ga,zi(t,0),Br(t,e),Jt(t,Ze()),n;if(n===6)throw Error(W(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,bi(t,Gt,lr),Jt(t,Ze()),null}function Cp(t,e){var n=Ee;Ee|=1;try{return t(e)}finally{Ee=n,Ee===0&&(ao=Ze()+500,Uc&&gi())}}function Xi(t){Gr!==null&&Gr.tag===0&&!(Ee&6)&&Xs();var e=Ee;Ee|=1;var n=En.transition,r=Ce;try{if(En.transition=null,Ce=1,t)return t()}finally{Ce=r,En.transition=n,Ee=e,!(Ee&6)&&gi()}}function Pp(){sn=Bs.current,Ue(Bs)}function zi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,m1(n)),it!==null)for(n=it.return;n!==null;){var r=n;switch(lp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Gu();break;case 3:so(),Ue(Xt),Ue(Vt),yp();break;case 5:gp(r);break;case 4:so();break;case 13:Ue($e);break;case 19:Ue($e);break;case 10:dp(r.type._context);break;case 22:case 23:Pp()}n=n.return}if(mt=t,it=t=ii(t.current,null),Et=sn=e,ut=0,Ga=null,Rp=zc=Qi=0,Gt=Ia=null,Vi!==null){for(e=0;e<Vi.length;e++)if(n=Vi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Vi=null}return t}function Aw(t,e){do{var n=it;try{if(hp(),Su.current=rc,nc){for(var r=He.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}nc=!1}if(Gi=0,ft=at=He=null,Ea=!1,Wa=0,Sp.current=null,n===null||n.return===null){ut=1,Ga=e,it=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=Et,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=l,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var g=d.alternate;g?(d.updateQueue=g.updateQueue,d.memoizedState=g.memoizedState,d.lanes=g.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=oy(o);if(v!==null){v.flags&=-257,ay(v,o,l,s,e),v.mode&1&&sy(s,c,e),e=v,u=c;var A=e.updateQueue;if(A===null){var P=new Set;P.add(u),e.updateQueue=P}else A.add(u);break e}else{if(!(e&1)){sy(s,c,e),kp();break e}u=Error(W(426))}}else if(Be&&l.mode&1){var b=oy(o);if(b!==null){!(b.flags&65536)&&(b.flags|=256),ay(b,o,l,s,e),up(oo(u,l));break e}}s=u=oo(u,l),ut!==4&&(ut=2),Ia===null?Ia=[s]:Ia.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var E=uw(s,u,e);Zg(s,E);break e;case 1:l=u;var _=s.type,S=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(ni===null||!ni.has(S)))){s.flags|=65536,e&=-e,s.lanes|=e;var O=cw(s,l,e);Zg(s,O);break e}}s=s.return}while(s!==null)}kw(n)}catch(B){e=B,it===n&&n!==null&&(it=n=n.return);continue}break}while(!0)}function Cw(){var t=ic.current;return ic.current=rc,t===null?rc:t}function kp(){(ut===0||ut===3||ut===2)&&(ut=4),mt===null||!(Qi&268435455)&&!(zc&268435455)||Br(mt,Et)}function ac(t,e){var n=Ee;Ee|=2;var r=Cw();(mt!==t||Et!==e)&&(lr=null,zi(t,e));do try{j1();break}catch(i){Aw(t,i)}while(!0);if(hp(),Ee=n,ic.current=r,it!==null)throw Error(W(261));return mt=null,Et=0,ut}function j1(){for(;it!==null;)Pw(it)}function B1(){for(;it!==null&&!dR();)Pw(it)}function Pw(t){var e=Dw(t.alternate,t,sn);t.memoizedProps=t.pendingProps,e===null?kw(t):it=e,Sp.current=null}function kw(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=O1(n,e),n!==null){n.flags&=32767,it=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ut=6,it=null;return}}else if(n=b1(n,e,sn),n!==null){it=n;return}if(e=e.sibling,e!==null){it=e;return}it=e=t}while(e!==null);ut===0&&(ut=5)}function bi(t,e,n){var r=Ce,i=En.transition;try{En.transition=null,Ce=1,z1(t,e,n,r)}finally{En.transition=i,Ce=r}return null}function z1(t,e,n,r){do Xs();while(Gr!==null);if(Ee&6)throw Error(W(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(W(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(TR(t,s),t===mt&&(it=mt=null,Et=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||lu||(lu=!0,xw(zu,function(){return Xs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=En.transition,En.transition=null;var o=Ce;Ce=1;var l=Ee;Ee|=4,Sp.current=null,M1(t,n),Iw(n,t),l1($d),Hu=!!zd,$d=zd=null,t.current=n,V1(n),fR(),Ee=l,Ce=o,En.transition=s}else t.current=n;if(lu&&(lu=!1,Gr=t,oc=i),s=t.pendingLanes,s===0&&(ni=null),gR(n.stateNode),Jt(t,Ze()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(sc)throw sc=!1,t=cf,cf=null,t;return oc&1&&t.tag!==0&&Xs(),s=t.pendingLanes,s&1?t===hf?Sa++:(Sa=0,hf=t):Sa=0,gi(),null}function Xs(){if(Gr!==null){var t=u0(oc),e=En.transition,n=Ce;try{if(En.transition=null,Ce=16>t?16:t,Gr===null)var r=!1;else{if(t=Gr,Gr=null,oc=0,Ee&6)throw Error(W(331));var i=Ee;for(Ee|=4,Y=t.current;Y!==null;){var s=Y,o=s.child;if(Y.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(Y=c;Y!==null;){var d=Y;switch(d.tag){case 0:case 11:case 15:Ta(8,d,s)}var p=d.child;if(p!==null)p.return=d,Y=p;else for(;Y!==null;){d=Y;var g=d.sibling,v=d.return;if(ww(d),d===c){Y=null;break}if(g!==null){g.return=v,Y=g;break}Y=v}}}var A=s.alternate;if(A!==null){var P=A.child;if(P!==null){A.child=null;do{var b=P.sibling;P.sibling=null,P=b}while(P!==null)}}Y=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Y=o;else e:for(;Y!==null;){if(s=Y,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ta(9,s,s.return)}var E=s.sibling;if(E!==null){E.return=s.return,Y=E;break e}Y=s.return}}var _=t.current;for(Y=_;Y!==null;){o=Y;var S=o.child;if(o.subtreeFlags&2064&&S!==null)S.return=o,Y=S;else e:for(o=_;Y!==null;){if(l=Y,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Bc(9,l)}}catch(B){Qe(l,l.return,B)}if(l===o){Y=null;break e}var O=l.sibling;if(O!==null){O.return=l.return,Y=O;break e}Y=l.return}}if(Ee=i,gi(),Qn&&typeof Qn.onPostCommitFiberRoot=="function")try{Qn.onPostCommitFiberRoot(bc,t)}catch{}r=!0}return r}finally{Ce=n,En.transition=e}}return!1}function wy(t,e,n){e=oo(n,e),e=uw(t,e,1),t=ti(t,e,1),e=$t(),t!==null&&(hl(t,1,e),Jt(t,e))}function Qe(t,e,n){if(t.tag===3)wy(t,t,n);else for(;e!==null;){if(e.tag===3){wy(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ni===null||!ni.has(r))){t=oo(n,t),t=cw(e,t,1),e=ti(e,t,1),t=$t(),e!==null&&(hl(e,1,t),Jt(e,t));break}}e=e.return}}function $1(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=$t(),t.pingedLanes|=t.suspendedLanes&n,mt===t&&(Et&n)===n&&(ut===4||ut===3&&(Et&130023424)===Et&&500>Ze()-Ap?zi(t,0):Rp|=n),Jt(t,e)}function Nw(t,e){e===0&&(t.mode&1?(e=Jl,Jl<<=1,!(Jl&130023424)&&(Jl=4194304)):e=1);var n=$t();t=Tr(t,e),t!==null&&(hl(t,e,n),Jt(t,n))}function H1(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Nw(t,n)}function W1(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(W(314))}r!==null&&r.delete(e),Nw(t,n)}var Dw;Dw=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Xt.current)Qt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Qt=!1,x1(t,e,n);Qt=!!(t.flags&131072)}else Qt=!1,Be&&e.flags&1048576&&L0(e,Yu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Au(t,e),t=e.pendingProps;var i=no(e,Vt.current);Qs(e,n),i=_p(null,e,r,t,i,n);var s=wp();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Yt(r)?(s=!0,Qu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,pp(e),i.updater=jc,e.stateNode=i,i._reactInternals=e,Jd(e,r,t,n),e=tf(null,e,r,!0,s,n)):(e.tag=0,Be&&s&&ap(e),zt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Au(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=K1(r),t=bn(r,t),i){case 0:e=ef(null,e,r,t,n);break e;case 1:e=cy(null,e,r,t,n);break e;case 11:e=ly(null,e,r,t,n);break e;case 14:e=uy(null,e,r,bn(r.type,t),n);break e}throw Error(W(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:bn(r,i),ef(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:bn(r,i),cy(t,e,r,i,n);case 3:e:{if(pw(e),t===null)throw Error(W(387));r=e.pendingProps,s=e.memoizedState,i=s.element,B0(t,e),ec(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=oo(Error(W(423)),e),e=hy(t,e,r,n,i);break e}else if(r!==i){i=oo(Error(W(424)),e),e=hy(t,e,r,n,i);break e}else for(an=ei(e.stateNode.containerInfo.firstChild),un=e,Be=!0,Mn=null,n=F0(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ro(),r===i){e=Ir(t,e,n);break e}zt(t,e,r,n)}e=e.child}return e;case 5:return z0(e),t===null&&Qd(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Hd(r,i)?o=null:s!==null&&Hd(r,s)&&(e.flags|=32),fw(t,e),zt(t,e,o,n),e.child;case 6:return t===null&&Qd(e),null;case 13:return mw(t,e,n);case 4:return mp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=io(e,null,r,n):zt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:bn(r,i),ly(t,e,r,i,n);case 7:return zt(t,e,e.pendingProps,n),e.child;case 8:return zt(t,e,e.pendingProps.children,n),e.child;case 12:return zt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,be(Ju,r._currentValue),r._currentValue=o,s!==null)if(jn(s.value,o)){if(s.children===i.children&&!Xt.current){e=Ir(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=gr(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Xd(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(W(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Xd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}zt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Qs(e,n),i=In(i),r=r(i),e.flags|=1,zt(t,e,r,n),e.child;case 14:return r=e.type,i=bn(r,e.pendingProps),i=bn(r.type,i),uy(t,e,r,i,n);case 15:return hw(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:bn(r,i),Au(t,e),e.tag=1,Yt(r)?(t=!0,Qu(e)):t=!1,Qs(e,n),lw(e,r,i),Jd(e,r,i,n),tf(null,e,r,!0,t,n);case 19:return gw(t,e,n);case 22:return dw(t,e,n)}throw Error(W(156,e.tag))};function xw(t,e){return s0(t,e)}function q1(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wn(t,e,n,r){return new q1(t,e,n,r)}function Np(t){return t=t.prototype,!(!t||!t.isReactComponent)}function K1(t){if(typeof t=="function")return Np(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Qf)return 11;if(t===Xf)return 14}return 2}function ii(t,e){var n=t.alternate;return n===null?(n=wn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ku(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Np(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ds:return $i(n.children,i,s,e);case Gf:o=8,i|=8;break;case Td:return t=wn(12,n,e,i|2),t.elementType=Td,t.lanes=s,t;case Id:return t=wn(13,n,e,i),t.elementType=Id,t.lanes=s,t;case Sd:return t=wn(19,n,e,i),t.elementType=Sd,t.lanes=s,t;case z_:return $c(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case j_:o=10;break e;case B_:o=9;break e;case Qf:o=11;break e;case Xf:o=14;break e;case Ur:o=16,r=null;break e}throw Error(W(130,t==null?t:typeof t,""))}return e=wn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function $i(t,e,n,r){return t=wn(7,t,r,e),t.lanes=n,t}function $c(t,e,n,r){return t=wn(22,t,r,e),t.elementType=z_,t.lanes=n,t.stateNode={isHidden:!1},t}function Yh(t,e,n){return t=wn(6,t,null,e),t.lanes=n,t}function Jh(t,e,n){return e=wn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function G1(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xh(0),this.expirationTimes=xh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xh(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Dp(t,e,n,r,i,s,o,l,u){return t=new G1(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=wn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},pp(s),t}function Q1(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ns,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function bw(t){if(!t)return ci;t=t._reactInternals;e:{if(os(t)!==t||t.tag!==1)throw Error(W(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Yt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(W(171))}if(t.tag===1){var n=t.type;if(Yt(n))return b0(t,n,e)}return e}function Ow(t,e,n,r,i,s,o,l,u){return t=Dp(n,r,!0,t,i,s,o,l,u),t.context=bw(null),n=t.current,r=$t(),i=ri(n),s=gr(r,i),s.callback=e??null,ti(n,s,i),t.current.lanes=i,hl(t,i,r),Jt(t,r),t}function Hc(t,e,n,r){var i=e.current,s=$t(),o=ri(i);return n=bw(n),e.context===null?e.context=n:e.pendingContext=n,e=gr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=ti(i,e,o),t!==null&&(Fn(t,i,o,s),Iu(t,i,o)),o}function lc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Ey(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function xp(t,e){Ey(t,e),(t=t.alternate)&&Ey(t,e)}function X1(){return null}var Lw=typeof reportError=="function"?reportError:function(t){console.error(t)};function bp(t){this._internalRoot=t}Wc.prototype.render=bp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(W(409));Hc(t,e,null,null)};Wc.prototype.unmount=bp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Xi(function(){Hc(null,t,null,null)}),e[Er]=null}};function Wc(t){this._internalRoot=t}Wc.prototype.unstable_scheduleHydration=function(t){if(t){var e=d0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<jr.length&&e!==0&&e<jr[n].priority;n++);jr.splice(n,0,t),n===0&&p0(t)}};function Op(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function qc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ty(){}function Y1(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=lc(o);s.call(c)}}var o=Ow(e,r,t,0,null,!1,!1,"",Ty);return t._reactRootContainer=o,t[Er]=o.current,ja(t.nodeType===8?t.parentNode:t),Xi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=lc(u);l.call(c)}}var u=Dp(t,0,!1,null,null,!1,!1,"",Ty);return t._reactRootContainer=u,t[Er]=u.current,ja(t.nodeType===8?t.parentNode:t),Xi(function(){Hc(e,u,n,r)}),u}function Kc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=lc(o);l.call(u)}}Hc(e,o,t,i)}else o=Y1(n,e,t,i,r);return lc(o)}c0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=la(e.pendingLanes);n!==0&&(Zf(e,n|1),Jt(e,Ze()),!(Ee&6)&&(ao=Ze()+500,gi()))}break;case 13:Xi(function(){var r=Tr(t,1);if(r!==null){var i=$t();Fn(r,t,1,i)}}),xp(t,1)}};ep=function(t){if(t.tag===13){var e=Tr(t,134217728);if(e!==null){var n=$t();Fn(e,t,134217728,n)}xp(t,134217728)}};h0=function(t){if(t.tag===13){var e=ri(t),n=Tr(t,e);if(n!==null){var r=$t();Fn(n,t,e,r)}xp(t,e)}};d0=function(){return Ce};f0=function(t,e){var n=Ce;try{return Ce=t,e()}finally{Ce=n}};Od=function(t,e,n){switch(e){case"input":if(Cd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Vc(r);if(!i)throw Error(W(90));H_(r),Cd(r,i)}}}break;case"textarea":q_(t,n);break;case"select":e=n.value,e!=null&&Ws(t,!!n.multiple,e,!1)}};Z_=Cp;e0=Xi;var J1={usingClientEntryPoint:!1,Events:[fl,Ls,Vc,Y_,J_,Cp]},ea={findFiberByHostInstance:Mi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Z1={bundleType:ea.bundleType,version:ea.version,rendererPackageName:ea.rendererPackageName,rendererConfig:ea.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Pr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=r0(t),t===null?null:t.stateNode},findFiberByHostInstance:ea.findFiberByHostInstance||X1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var uu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!uu.isDisabled&&uu.supportsFiber)try{bc=uu.inject(Z1),Qn=uu}catch{}}dn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=J1;dn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Op(e))throw Error(W(200));return Q1(t,e,null,n)};dn.createRoot=function(t,e){if(!Op(t))throw Error(W(299));var n=!1,r="",i=Lw;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Dp(t,1,!1,null,null,n,!1,r,i),t[Er]=e.current,ja(t.nodeType===8?t.parentNode:t),new bp(e)};dn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(W(188)):(t=Object.keys(t).join(","),Error(W(268,t)));return t=r0(e),t=t===null?null:t.stateNode,t};dn.flushSync=function(t){return Xi(t)};dn.hydrate=function(t,e,n){if(!qc(e))throw Error(W(200));return Kc(null,t,e,!0,n)};dn.hydrateRoot=function(t,e,n){if(!Op(t))throw Error(W(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Lw;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Ow(e,null,t,1,n??null,i,!1,s,o),t[Er]=e.current,ja(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Wc(e)};dn.render=function(t,e,n){if(!qc(e))throw Error(W(200));return Kc(null,t,e,!1,n)};dn.unmountComponentAtNode=function(t){if(!qc(t))throw Error(W(40));return t._reactRootContainer?(Xi(function(){Kc(null,null,t,!1,function(){t._reactRootContainer=null,t[Er]=null})}),!0):!1};dn.unstable_batchedUpdates=Cp;dn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!qc(n))throw Error(W(200));if(t==null||t._reactInternals===void 0)throw Error(W(38));return Kc(t,e,n,!1,r)};dn.version="18.3.1-next-f1338f8080-20240426";function Mw(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Mw)}catch(t){console.error(t)}}Mw(),M_.exports=dn;var Lp=M_.exports;const eA=S_(Lp),tA=I_({__proto__:null,default:eA},[Lp]);var Vw,Iy=Lp;Vw=Iy.createRoot,Iy.hydrateRoot;/**
 * @remix-run/router v1.19.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ze(){return ze=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ze.apply(this,arguments)}var rt;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(rt||(rt={}));const Sy="popstate";function nA(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return Qa("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Yi(i)}return iA(e,n,null,t)}function de(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function lo(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function rA(){return Math.random().toString(36).substr(2,8)}function Ry(t,e){return{usr:t.state,key:t.key,idx:e}}function Qa(t,e,n,r){return n===void 0&&(n=null),ze({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?yi(e):e,{state:n,key:e&&e.key||r||rA()})}function Yi(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function yi(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function iA(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=rt.Pop,u=null,c=d();c==null&&(c=0,o.replaceState(ze({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function p(){l=rt.Pop;let b=d(),E=b==null?null:b-c;c=b,u&&u({action:l,location:P.location,delta:E})}function g(b,E){l=rt.Push;let _=Qa(P.location,b,E);c=d()+1;let S=Ry(_,c),O=P.createHref(_);try{o.pushState(S,"",O)}catch(B){if(B instanceof DOMException&&B.name==="DataCloneError")throw B;i.location.assign(O)}s&&u&&u({action:l,location:P.location,delta:1})}function v(b,E){l=rt.Replace;let _=Qa(P.location,b,E);c=d();let S=Ry(_,c),O=P.createHref(_);o.replaceState(S,"",O),s&&u&&u({action:l,location:P.location,delta:0})}function A(b){let E=i.location.origin!=="null"?i.location.origin:i.location.href,_=typeof b=="string"?b:Yi(b);return _=_.replace(/ $/,"%20"),de(E,"No window.location.(origin|href) available to create URL for href: "+_),new URL(_,E)}let P={get action(){return l},get location(){return t(i,o)},listen(b){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Sy,p),u=b,()=>{i.removeEventListener(Sy,p),u=null}},createHref(b){return e(i,b)},createURL:A,encodeLocation(b){let E=A(b);return{pathname:E.pathname,search:E.search,hash:E.hash}},push:g,replace:v,go(b){return o.go(b)}};return P}var ke;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(ke||(ke={}));const sA=new Set(["lazy","caseSensitive","path","id","index","children"]);function oA(t){return t.index===!0}function Xa(t,e,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),t.map((i,s)=>{let o=[...n,String(s)],l=typeof i.id=="string"?i.id:o.join("-");if(de(i.index!==!0||!i.children,"Cannot specify children on an index route"),de(!r[l],'Found a route id collision on id "'+l+`".  Route id's must be globally unique within Data Router usages`),oA(i)){let u=ze({},i,e(i),{id:l});return r[l]=u,u}else{let u=ze({},i,e(i),{id:l,children:void 0});return r[l]=u,i.children&&(u.children=Xa(i.children,e,o,r)),u}})}function Li(t,e,n){return n===void 0&&(n="/"),Nu(t,e,n,!1)}function Nu(t,e,n,r){let i=typeof e=="string"?yi(e):e,s=Eo(i.pathname||"/",n);if(s==null)return null;let o=Uw(t);lA(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let c=_A(s);l=yA(o[u],c,r)}return l}function aA(t,e){let{route:n,pathname:r,params:i}=t;return{id:n.id,pathname:r,params:i,data:e[n.id],handle:n.handle}}function Uw(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(de(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=yr([r,u.relativePath]),d=n.concat(u);s.children&&s.children.length>0&&(de(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Uw(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:mA(c,s.index),routesMeta:d})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let u of Fw(s.path))i(s,o,u)}),e}function Fw(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=Fw(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function lA(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:gA(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const uA=/^:[\w-]+$/,cA=3,hA=2,dA=1,fA=10,pA=-2,Ay=t=>t==="*";function mA(t,e){let n=t.split("/"),r=n.length;return n.some(Ay)&&(r+=pA),e&&(r+=hA),n.filter(i=>!Ay(i)).reduce((i,s)=>i+(uA.test(s)?cA:s===""?dA:fA),r)}function gA(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function yA(t,e,n){n===void 0&&(n=!1);let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],c=l===r.length-1,d=s==="/"?e:e.slice(s.length)||"/",p=Cy({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},d),g=u.route;if(!p&&c&&n&&!r[r.length-1].route.index&&(p=Cy({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},d)),!p)return null;Object.assign(i,p.params),o.push({params:i,pathname:yr([s,p.pathname]),pathnameBase:TA(yr([s,p.pathnameBase])),route:g}),p.pathnameBase!=="/"&&(s=yr([s,p.pathnameBase]))}return o}function Cy(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=vA(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,d,p)=>{let{paramName:g,isOptional:v}=d;if(g==="*"){let P=l[p]||"";o=s.slice(0,s.length-P.length).replace(/(.)\/+$/,"$1")}const A=l[p];return v&&!A?c[g]=void 0:c[g]=(A||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function vA(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),lo(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function _A(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return lo(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Eo(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function wA(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?yi(t):t;return{pathname:n?n.startsWith("/")?n:EA(n,e):e,search:IA(r),hash:SA(i)}}function EA(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Zh(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function jw(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Mp(t,e){let n=jw(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Vp(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=yi(t):(i=ze({},t),de(!i.pathname||!i.pathname.includes("?"),Zh("?","pathname","search",i)),de(!i.pathname||!i.pathname.includes("#"),Zh("#","pathname","hash",i)),de(!i.search||!i.search.includes("#"),Zh("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let p=e.length-1;if(!r&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),p-=1;i.pathname=g.join("/")}l=p>=0?e[p]:"/"}let u=wA(i,l),c=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}const yr=t=>t.join("/").replace(/\/\/+/g,"/"),TA=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),IA=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,SA=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class uc{constructor(e,n,r,i){i===void 0&&(i=!1),this.status=e,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function Gc(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Bw=["post","put","patch","delete"],RA=new Set(Bw),AA=["get",...Bw],CA=new Set(AA),PA=new Set([301,302,303,307,308]),kA=new Set([307,308]),ed={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},NA={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},ta={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},Up=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,DA=t=>({hasErrorBoundary:!!t.hasErrorBoundary}),zw="remix-router-transitions";function xA(t){const e=t.window?t.window:typeof window<"u"?window:void 0,n=typeof e<"u"&&typeof e.document<"u"&&typeof e.document.createElement<"u",r=!n;de(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let i;if(t.mapRouteProperties)i=t.mapRouteProperties;else if(t.detectErrorBoundary){let k=t.detectErrorBoundary;i=N=>({hasErrorBoundary:k(N)})}else i=DA;let s={},o=Xa(t.routes,i,void 0,s),l,u=t.basename||"/",c=t.unstable_dataStrategy||UA,d=t.unstable_patchRoutesOnNavigation,p=ze({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1,v7_skipActionErrorRevalidation:!1},t.future),g=null,v=new Set,A=1e3,P=new Set,b=null,E=null,_=null,S=t.hydrationData!=null,O=Li(o,t.history.location,u),B=null;if(O==null&&!d){let k=Bt(404,{pathname:t.history.location.pathname}),{matches:N,route:M}=My(o);O=N,B={[M.id]:k}}O&&!t.hydrationData&&et(O,o,t.history.location.pathname).active&&(O=null);let F;if(O)if(O.some(k=>k.route.lazy))F=!1;else if(!O.some(k=>k.route.loader))F=!0;else if(p.v7_partialHydration){let k=t.hydrationData?t.hydrationData.loaderData:null,N=t.hydrationData?t.hydrationData.errors:null,M=z=>z.route.loader?typeof z.route.loader=="function"&&z.route.loader.hydrate===!0?!1:k&&k[z.route.id]!==void 0||N&&N[z.route.id]!==void 0:!0;if(N){let z=O.findIndex(Q=>N[Q.route.id]!==void 0);F=O.slice(0,z+1).every(M)}else F=O.every(M)}else F=t.hydrationData!=null;else if(F=!1,O=[],p.v7_partialHydration){let k=et(null,o,t.history.location.pathname);k.active&&k.matches&&(O=k.matches)}let T,m={historyAction:t.history.action,location:t.history.location,matches:O,initialized:F,navigation:ed,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||B,fetchers:new Map,blockers:new Map},w=rt.Pop,I=!1,C,x=!1,R=new Map,Te=null,Rt=!1,tn=!1,qt=[],G=new Set,X=new Map,ae=0,Ae=-1,ve=new Map,Re=new Set,At=new Map,Ft=new Map,st=new Set,gt=new Map,rr=new Map,vh=new Map,ir;function ps(){if(g=t.history.listen(k=>{let{action:N,location:M,delta:z}=k;if(ir){ir(),ir=void 0;return}lo(rr.size===0||z!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let Q=ys({currentLocation:m.location,nextLocation:M,historyAction:N});if(Q&&z!=null){let ne=new Promise(se=>{ir=se});t.history.go(z*-1),Hn(Q,{state:"blocked",location:M,proceed(){Hn(Q,{state:"proceeding",proceed:void 0,reset:void 0,location:M}),ne.then(()=>t.history.go(z))},reset(){let se=new Map(m.blockers);se.set(Q,ta),ot({blockers:se})}});return}return sr(N,M)}),n){ZA(e,R);let k=()=>eC(e,R);e.addEventListener("pagehide",k),Te=()=>e.removeEventListener("pagehide",k)}return m.initialized||sr(rt.Pop,m.location,{initialHydration:!0}),T}function ko(){g&&g(),Te&&Te(),v.clear(),C&&C.abort(),m.fetchers.forEach((k,N)=>Ti(N)),m.blockers.forEach((k,N)=>Mo(N))}function No(k){return v.add(k),()=>v.delete(k)}function ot(k,N){N===void 0&&(N={}),m=ze({},m,k);let M=[],z=[];p.v7_fetcherPersist&&m.fetchers.forEach((Q,ne)=>{Q.state==="idle"&&(st.has(ne)?z.push(ne):M.push(ne))}),[...v].forEach(Q=>Q(m,{deletedFetchers:z,unstable_viewTransitionOpts:N.viewTransitionOpts,unstable_flushSync:N.flushSync===!0})),p.v7_fetcherPersist&&(M.forEach(Q=>m.fetchers.delete(Q)),z.forEach(Q=>Ti(Q)))}function $n(k,N,M){var z,Q;let{flushSync:ne}=M===void 0?{}:M,se=m.actionData!=null&&m.navigation.formMethod!=null&&Ln(m.navigation.formMethod)&&m.navigation.state==="loading"&&((z=k.state)==null?void 0:z._isRedirect)!==!0,q;N.actionData?Object.keys(N.actionData).length>0?q=N.actionData:q=null:se?q=m.actionData:q=null;let te=N.loaderData?Oy(m.loaderData,N.loaderData,N.matches||[],N.errors):m.loaderData,J=m.blockers;J.size>0&&(J=new Map(J),J.forEach((we,Pe)=>J.set(Pe,ta)));let ee=I===!0||m.navigation.formMethod!=null&&Ln(m.navigation.formMethod)&&((Q=k.state)==null?void 0:Q._isRedirect)!==!0;l&&(o=l,l=void 0),Rt||w===rt.Pop||(w===rt.Push?t.history.push(k,k.state):w===rt.Replace&&t.history.replace(k,k.state));let ge;if(w===rt.Pop){let we=R.get(m.location.pathname);we&&we.has(k.pathname)?ge={currentLocation:m.location,nextLocation:k}:R.has(k.pathname)&&(ge={currentLocation:k,nextLocation:m.location})}else if(x){let we=R.get(m.location.pathname);we?we.add(k.pathname):(we=new Set([k.pathname]),R.set(m.location.pathname,we)),ge={currentLocation:m.location,nextLocation:k}}ot(ze({},N,{actionData:q,loaderData:te,historyAction:w,location:k,initialized:!0,navigation:ed,revalidation:"idle",restoreScrollPosition:Uo(k,N.matches||m.matches),preventScrollReset:ee,blockers:J}),{viewTransitionOpts:ge,flushSync:ne===!0}),w=rt.Pop,I=!1,x=!1,Rt=!1,tn=!1,qt=[]}async function Do(k,N){if(typeof k=="number"){t.history.go(k);return}let M=pf(m.location,m.matches,u,p.v7_prependBasename,k,p.v7_relativeSplatPath,N==null?void 0:N.fromRouteId,N==null?void 0:N.relative),{path:z,submission:Q,error:ne}=Py(p.v7_normalizeFormMethod,!1,M,N),se=m.location,q=Qa(m.location,z,N&&N.state);q=ze({},q,t.history.encodeLocation(q));let te=N&&N.replace!=null?N.replace:void 0,J=rt.Push;te===!0?J=rt.Replace:te===!1||Q!=null&&Ln(Q.formMethod)&&Q.formAction===m.location.pathname+m.location.search&&(J=rt.Replace);let ee=N&&"preventScrollReset"in N?N.preventScrollReset===!0:void 0,ge=(N&&N.unstable_flushSync)===!0,we=ys({currentLocation:se,nextLocation:q,historyAction:J});if(we){Hn(we,{state:"blocked",location:q,proceed(){Hn(we,{state:"proceeding",proceed:void 0,reset:void 0,location:q}),Do(k,N)},reset(){let Pe=new Map(m.blockers);Pe.set(we,ta),ot({blockers:Pe})}});return}return await sr(J,q,{submission:Q,pendingError:ne,preventScrollReset:ee,replace:N&&N.replace,enableViewTransition:N&&N.unstable_viewTransition,flushSync:ge})}function _h(){if(ms(),ot({revalidation:"loading"}),m.navigation.state!=="submitting"){if(m.navigation.state==="idle"){sr(m.historyAction,m.location,{startUninterruptedRevalidation:!0});return}sr(w||m.historyAction,m.navigation.location,{overrideNavigation:m.navigation,enableViewTransition:x===!0})}}async function sr(k,N,M){C&&C.abort(),C=null,w=k,Rt=(M&&M.startUninterruptedRevalidation)===!0,Si(m.location,m.matches),I=(M&&M.preventScrollReset)===!0,x=(M&&M.enableViewTransition)===!0;let z=l||o,Q=M&&M.overrideNavigation,ne=Li(z,N,u),se=(M&&M.flushSync)===!0,q=et(ne,z,N.pathname);if(q.active&&q.matches&&(ne=q.matches),!ne){let{error:pe,notFoundMatches:tt,route:Oe}=Ii(N.pathname);$n(N,{matches:tt,loaderData:{},errors:{[Oe.id]:pe}},{flushSync:se});return}if(m.initialized&&!tn&&HA(m.location,N)&&!(M&&M.submission&&Ln(M.submission.formMethod))){$n(N,{matches:ne},{flushSync:se});return}C=new AbortController;let te=Ss(t.history,N,C.signal,M&&M.submission),J;if(M&&M.pendingError)J=[zs(ne).route.id,{type:ke.error,error:M.pendingError}];else if(M&&M.submission&&Ln(M.submission.formMethod)){let pe=await kl(te,N,M.submission,ne,q.active,{replace:M.replace,flushSync:se});if(pe.shortCircuited)return;if(pe.pendingActionResult){let[tt,Oe]=pe.pendingActionResult;if(on(Oe)&&Gc(Oe.error)&&Oe.error.status===404){C=null,$n(N,{matches:pe.matches,loaderData:{},errors:{[tt]:Oe.error}});return}}ne=pe.matches||ne,J=pe.pendingActionResult,Q=td(N,M.submission),se=!1,q.active=!1,te=Ss(t.history,te.url,te.signal)}let{shortCircuited:ee,matches:ge,loaderData:we,errors:Pe}=await xo(te,N,ne,q.active,Q,M&&M.submission,M&&M.fetcherSubmission,M&&M.replace,M&&M.initialHydration===!0,se,J);ee||(C=null,$n(N,ze({matches:ge||ne},Ly(J),{loaderData:we,errors:Pe})))}async function kl(k,N,M,z,Q,ne){ne===void 0&&(ne={}),ms();let se=YA(N,M);if(ot({navigation:se},{flushSync:ne.flushSync===!0}),Q){let J=await Ri(z,N.pathname,k.signal);if(J.type==="aborted")return{shortCircuited:!0};if(J.type==="error"){let{boundaryId:ee,error:ge}=mn(N.pathname,J);return{matches:J.partialMatches,pendingActionResult:[ee,{type:ke.error,error:ge}]}}else if(J.matches)z=J.matches;else{let{notFoundMatches:ee,error:ge,route:we}=Ii(N.pathname);return{matches:ee,pendingActionResult:[we.id,{type:ke.error,error:ge}]}}}let q,te=ca(z,N);if(!te.route.action&&!te.route.lazy)q={type:ke.error,error:Bt(405,{method:k.method,pathname:N.pathname,routeId:te.route.id})};else if(q=(await Ye("action",m,k,[te],z,null))[te.route.id],k.signal.aborted)return{shortCircuited:!0};if(Fi(q)){let J;return ne&&ne.replace!=null?J=ne.replace:J=Dy(q.response.headers.get("Location"),new URL(k.url),u)===m.location.pathname+m.location.search,await je(k,q,!0,{submission:M,replace:J}),{shortCircuited:!0}}if(Qr(q))throw Bt(400,{type:"defer-action"});if(on(q)){let J=zs(z,te.route.id);return(ne&&ne.replace)!==!0&&(w=rt.Push),{matches:z,pendingActionResult:[J.route.id,q]}}return{matches:z,pendingActionResult:[te.route.id,q]}}async function xo(k,N,M,z,Q,ne,se,q,te,J,ee){let ge=Q||td(N,ne),we=ne||se||Uy(ge),Pe=!Rt&&(!p.v7_partialHydration||!te);if(z){if(Pe){let xe=bo(ee);ot(ze({navigation:ge},xe!==void 0?{actionData:xe}:{}),{flushSync:J})}let ue=await Ri(M,N.pathname,k.signal);if(ue.type==="aborted")return{shortCircuited:!0};if(ue.type==="error"){let{boundaryId:xe,error:Pt}=mn(N.pathname,ue);return{matches:ue.partialMatches,loaderData:{},errors:{[xe]:Pt}}}else if(ue.matches)M=ue.matches;else{let{error:xe,notFoundMatches:Pt,route:Le}=Ii(N.pathname);return{matches:Pt,loaderData:{},errors:{[Le.id]:xe}}}}let pe=l||o,[tt,Oe]=ky(t.history,m,M,we,N,p.v7_partialHydration&&te===!0,p.v7_skipActionErrorRevalidation,tn,qt,G,st,At,Re,pe,u,ee);if(vs(ue=>!(M&&M.some(xe=>xe.route.id===ue))||tt&&tt.some(xe=>xe.route.id===ue)),Ae=++ae,tt.length===0&&Oe.length===0){let ue=bl();return $n(N,ze({matches:M,loaderData:{},errors:ee&&on(ee[1])?{[ee[0]]:ee[1].error}:null},Ly(ee),ue?{fetchers:new Map(m.fetchers)}:{}),{flushSync:J}),{shortCircuited:!0}}if(Pe){let ue={};if(!z){ue.navigation=ge;let xe=bo(ee);xe!==void 0&&(ue.actionData=xe)}Oe.length>0&&(ue.fetchers=wh(Oe)),ot(ue,{flushSync:J})}Oe.forEach(ue=>{X.has(ue.key)&&pn(ue.key),ue.controller&&X.set(ue.key,ue.controller)});let Dr=()=>Oe.forEach(ue=>pn(ue.key));C&&C.signal.addEventListener("abort",Dr);let{loaderResults:nn,fetcherResults:gn}=await Ei(m,M,tt,Oe,k);if(k.signal.aborted)return{shortCircuited:!0};C&&C.signal.removeEventListener("abort",Dr),Oe.forEach(ue=>X.delete(ue.key));let Ct=cu(nn);if(Ct)return await je(k,Ct.result,!0,{replace:q}),{shortCircuited:!0};if(Ct=cu(gn),Ct)return Re.add(Ct.key),await je(k,Ct.result,!0,{replace:q}),{shortCircuited:!0};let{loaderData:xr,errors:kn}=by(m,M,tt,nn,ee,Oe,gn,gt);gt.forEach((ue,xe)=>{ue.subscribe(Pt=>{(Pt||ue.done)&&gt.delete(xe)})}),p.v7_partialHydration&&te&&m.errors&&Object.entries(m.errors).filter(ue=>{let[xe]=ue;return!tt.some(Pt=>Pt.route.id===xe)}).forEach(ue=>{let[xe,Pt]=ue;kn=Object.assign(kn||{},{[xe]:Pt})});let Ci=bl(),Pi=gs(Ae),ki=Ci||Pi||Oe.length>0;return ze({matches:M,loaderData:xr,errors:kn},ki?{fetchers:new Map(m.fetchers)}:{})}function bo(k){if(k&&!on(k[1]))return{[k[0]]:k[1].data};if(m.actionData)return Object.keys(m.actionData).length===0?null:m.actionData}function wh(k){return k.forEach(N=>{let M=m.fetchers.get(N.key),z=na(void 0,M?M.data:void 0);m.fetchers.set(N.key,z)}),new Map(m.fetchers)}function Oo(k,N,M,z){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");X.has(k)&&pn(k);let Q=(z&&z.unstable_flushSync)===!0,ne=l||o,se=pf(m.location,m.matches,u,p.v7_prependBasename,M,p.v7_relativeSplatPath,N,z==null?void 0:z.relative),q=Li(ne,se,u),te=et(q,ne,se);if(te.active&&te.matches&&(q=te.matches),!q){Pn(k,N,Bt(404,{pathname:se}),{flushSync:Q});return}let{path:J,submission:ee,error:ge}=Py(p.v7_normalizeFormMethod,!0,se,z);if(ge){Pn(k,N,ge,{flushSync:Q});return}let we=ca(q,J);if(I=(z&&z.preventScrollReset)===!0,ee&&Ln(ee.formMethod)){Lo(k,N,J,we,q,te.active,Q,ee);return}At.set(k,{routeId:N,path:J}),Nl(k,N,J,we,q,te.active,Q,ee)}async function Lo(k,N,M,z,Q,ne,se,q){ms(),At.delete(k);function te(Le){if(!Le.route.action&&!Le.route.lazy){let Nn=Bt(405,{method:q.formMethod,pathname:M,routeId:N});return Pn(k,N,Nn,{flushSync:se}),!0}return!1}if(!ne&&te(z))return;let J=m.fetchers.get(k);Cn(k,JA(q,J),{flushSync:se});let ee=new AbortController,ge=Ss(t.history,M,ee.signal,q);if(ne){let Le=await Ri(Q,M,ge.signal);if(Le.type==="aborted")return;if(Le.type==="error"){let{error:Nn}=mn(M,Le);Pn(k,N,Nn,{flushSync:se});return}else if(Le.matches){if(Q=Le.matches,z=ca(Q,M),te(z))return}else{Pn(k,N,Bt(404,{pathname:M}),{flushSync:se});return}}X.set(k,ee);let we=ae,pe=(await Ye("action",m,ge,[z],Q,k))[z.route.id];if(ge.signal.aborted){X.get(k)===ee&&X.delete(k);return}if(p.v7_fetcherPersist&&st.has(k)){if(Fi(pe)||on(pe)){Cn(k,Vr(void 0));return}}else{if(Fi(pe))if(X.delete(k),Ae>we){Cn(k,Vr(void 0));return}else return Re.add(k),Cn(k,na(q)),je(ge,pe,!1,{fetcherSubmission:q});if(on(pe)){Pn(k,N,pe.error);return}}if(Qr(pe))throw Bt(400,{type:"defer-action"});let tt=m.navigation.location||m.location,Oe=Ss(t.history,tt,ee.signal),Dr=l||o,nn=m.navigation.state!=="idle"?Li(Dr,m.navigation.location,u):m.matches;de(nn,"Didn't find any matches after fetcher action");let gn=++ae;ve.set(k,gn);let Ct=na(q,pe.data);m.fetchers.set(k,Ct);let[xr,kn]=ky(t.history,m,nn,q,tt,!1,p.v7_skipActionErrorRevalidation,tn,qt,G,st,At,Re,Dr,u,[z.route.id,pe]);kn.filter(Le=>Le.key!==k).forEach(Le=>{let Nn=Le.key,Ll=m.fetchers.get(Nn),Ml=na(void 0,Ll?Ll.data:void 0);m.fetchers.set(Nn,Ml),X.has(Nn)&&pn(Nn),Le.controller&&X.set(Nn,Le.controller)}),ot({fetchers:new Map(m.fetchers)});let Ci=()=>kn.forEach(Le=>pn(Le.key));ee.signal.addEventListener("abort",Ci);let{loaderResults:Pi,fetcherResults:ki}=await Ei(m,nn,xr,kn,Oe);if(ee.signal.aborted)return;ee.signal.removeEventListener("abort",Ci),ve.delete(k),X.delete(k),kn.forEach(Le=>X.delete(Le.key));let ue=cu(Pi);if(ue)return je(Oe,ue.result,!1);if(ue=cu(ki),ue)return Re.add(ue.key),je(Oe,ue.result,!1);let{loaderData:xe,errors:Pt}=by(m,nn,xr,Pi,void 0,kn,ki,gt);if(m.fetchers.has(k)){let Le=Vr(pe.data);m.fetchers.set(k,Le)}gs(gn),m.navigation.state==="loading"&&gn>Ae?(de(w,"Expected pending action"),C&&C.abort(),$n(m.navigation.location,{matches:nn,loaderData:xe,errors:Pt,fetchers:new Map(m.fetchers)})):(ot({errors:Pt,loaderData:Oy(m.loaderData,xe,nn,Pt),fetchers:new Map(m.fetchers)}),tn=!1)}async function Nl(k,N,M,z,Q,ne,se,q){let te=m.fetchers.get(k);Cn(k,na(q,te?te.data:void 0),{flushSync:se});let J=new AbortController,ee=Ss(t.history,M,J.signal);if(ne){let pe=await Ri(Q,M,ee.signal);if(pe.type==="aborted")return;if(pe.type==="error"){let{error:tt}=mn(M,pe);Pn(k,N,tt,{flushSync:se});return}else if(pe.matches)Q=pe.matches,z=ca(Q,M);else{Pn(k,N,Bt(404,{pathname:M}),{flushSync:se});return}}X.set(k,J);let ge=ae,Pe=(await Ye("loader",m,ee,[z],Q,k))[z.route.id];if(Qr(Pe)&&(Pe=await Fp(Pe,ee.signal,!0)||Pe),X.get(k)===J&&X.delete(k),!ee.signal.aborted){if(st.has(k)){Cn(k,Vr(void 0));return}if(Fi(Pe))if(Ae>ge){Cn(k,Vr(void 0));return}else{Re.add(k),await je(ee,Pe,!1);return}if(on(Pe)){Pn(k,N,Pe.error);return}de(!Qr(Pe),"Unhandled fetcher deferred data"),Cn(k,Vr(Pe.data))}}async function je(k,N,M,z){let{submission:Q,fetcherSubmission:ne,replace:se}=z===void 0?{}:z;N.response.headers.has("X-Remix-Revalidate")&&(tn=!0);let q=N.response.headers.get("Location");de(q,"Expected a Location header on the redirect Response"),q=Dy(q,new URL(k.url),u);let te=Qa(m.location,q,{_isRedirect:!0});if(n){let pe=!1;if(N.response.headers.has("X-Remix-Reload-Document"))pe=!0;else if(Up.test(q)){const tt=t.history.createURL(q);pe=tt.origin!==e.location.origin||Eo(tt.pathname,u)==null}if(pe){se?e.location.replace(q):e.location.assign(q);return}}C=null;let J=se===!0||N.response.headers.has("X-Remix-Replace")?rt.Replace:rt.Push,{formMethod:ee,formAction:ge,formEncType:we}=m.navigation;!Q&&!ne&&ee&&ge&&we&&(Q=Uy(m.navigation));let Pe=Q||ne;if(kA.has(N.response.status)&&Pe&&Ln(Pe.formMethod))await sr(J,te,{submission:ze({},Pe,{formAction:q}),preventScrollReset:I,enableViewTransition:M?x:void 0});else{let pe=td(te,Q);await sr(J,te,{overrideNavigation:pe,fetcherSubmission:ne,preventScrollReset:I,enableViewTransition:M?x:void 0})}}async function Ye(k,N,M,z,Q,ne){let se,q={};try{se=await FA(c,k,N,M,z,Q,ne,s,i)}catch(te){return z.forEach(J=>{q[J.route.id]={type:ke.error,error:te}}),q}for(let[te,J]of Object.entries(se))if(qA(J)){let ee=J.result;q[te]={type:ke.redirect,response:zA(ee,M,te,Q,u,p.v7_relativeSplatPath)}}else q[te]=await BA(J);return q}async function Ei(k,N,M,z,Q){let ne=k.matches,se=Ye("loader",k,Q,M,N,null),q=Promise.all(z.map(async ee=>{if(ee.matches&&ee.match&&ee.controller){let we=(await Ye("loader",k,Ss(t.history,ee.path,ee.controller.signal),[ee.match],ee.matches,ee.key))[ee.match.route.id];return{[ee.key]:we}}else return Promise.resolve({[ee.key]:{type:ke.error,error:Bt(404,{pathname:ee.path})}})})),te=await se,J=(await q).reduce((ee,ge)=>Object.assign(ee,ge),{});return await Promise.all([QA(N,te,Q.signal,ne,k.loaderData),XA(N,J,z)]),{loaderResults:te,fetcherResults:J}}function ms(){tn=!0,qt.push(...vs()),At.forEach((k,N)=>{X.has(N)&&(G.add(N),pn(N))})}function Cn(k,N,M){M===void 0&&(M={}),m.fetchers.set(k,N),ot({fetchers:new Map(m.fetchers)},{flushSync:(M&&M.flushSync)===!0})}function Pn(k,N,M,z){z===void 0&&(z={});let Q=zs(m.matches,N);Ti(k),ot({errors:{[Q.route.id]:M},fetchers:new Map(m.fetchers)},{flushSync:(z&&z.flushSync)===!0})}function kr(k){return p.v7_fetcherPersist&&(Ft.set(k,(Ft.get(k)||0)+1),st.has(k)&&st.delete(k)),m.fetchers.get(k)||NA}function Ti(k){let N=m.fetchers.get(k);X.has(k)&&!(N&&N.state==="loading"&&ve.has(k))&&pn(k),At.delete(k),ve.delete(k),Re.delete(k),st.delete(k),G.delete(k),m.fetchers.delete(k)}function Dl(k){if(p.v7_fetcherPersist){let N=(Ft.get(k)||0)-1;N<=0?(Ft.delete(k),st.add(k)):Ft.set(k,N)}else Ti(k);ot({fetchers:new Map(m.fetchers)})}function pn(k){let N=X.get(k);de(N,"Expected fetch controller: "+k),N.abort(),X.delete(k)}function xl(k){for(let N of k){let M=kr(N),z=Vr(M.data);m.fetchers.set(N,z)}}function bl(){let k=[],N=!1;for(let M of Re){let z=m.fetchers.get(M);de(z,"Expected fetcher: "+M),z.state==="loading"&&(Re.delete(M),k.push(M),N=!0)}return xl(k),N}function gs(k){let N=[];for(let[M,z]of ve)if(z<k){let Q=m.fetchers.get(M);de(Q,"Expected fetcher: "+M),Q.state==="loading"&&(pn(M),ve.delete(M),N.push(M))}return xl(N),N.length>0}function Ol(k,N){let M=m.blockers.get(k)||ta;return rr.get(k)!==N&&rr.set(k,N),M}function Mo(k){m.blockers.delete(k),rr.delete(k)}function Hn(k,N){let M=m.blockers.get(k)||ta;de(M.state==="unblocked"&&N.state==="blocked"||M.state==="blocked"&&N.state==="blocked"||M.state==="blocked"&&N.state==="proceeding"||M.state==="blocked"&&N.state==="unblocked"||M.state==="proceeding"&&N.state==="unblocked","Invalid blocker state transition: "+M.state+" -> "+N.state);let z=new Map(m.blockers);z.set(k,N),ot({blockers:z})}function ys(k){let{currentLocation:N,nextLocation:M,historyAction:z}=k;if(rr.size===0)return;rr.size>1&&lo(!1,"A router only supports one blocker at a time");let Q=Array.from(rr.entries()),[ne,se]=Q[Q.length-1],q=m.blockers.get(ne);if(!(q&&q.state==="proceeding")&&se({currentLocation:N,nextLocation:M,historyAction:z}))return ne}function Ii(k){let N=Bt(404,{pathname:k}),M=l||o,{matches:z,route:Q}=My(M);return vs(),{notFoundMatches:z,route:Q,error:N}}function mn(k,N){return{boundaryId:zs(N.partialMatches).route.id,error:Bt(400,{type:"route-discovery",pathname:k,message:N.error!=null&&"message"in N.error?N.error:String(N.error)})}}function vs(k){let N=[];return gt.forEach((M,z)=>{(!k||k(z))&&(M.cancel(),N.push(z),gt.delete(z))}),N}function _s(k,N,M){if(b=k,_=N,E=M||null,!S&&m.navigation===ed){S=!0;let z=Uo(m.location,m.matches);z!=null&&ot({restoreScrollPosition:z})}return()=>{b=null,_=null,E=null}}function Vo(k,N){return E&&E(k,N.map(z=>aA(z,m.loaderData)))||k.key}function Si(k,N){if(b&&_){let M=Vo(k,N);b[M]=_()}}function Uo(k,N){if(b){let M=Vo(k,N),z=b[M];if(typeof z=="number")return z}return null}function et(k,N,M){if(d){if(P.has(M))return{active:!1,matches:k};if(k){if(Object.keys(k[0].params).length>0)return{active:!0,matches:Nu(N,M,u,!0)}}else return{active:!0,matches:Nu(N,M,u,!0)||[]}}return{active:!1,matches:null}}async function Ri(k,N,M){let z=k;for(;;){let Q=l==null,ne=l||o;try{await MA(d,N,z,ne,s,i,vh,M)}catch(te){return{type:"error",error:te,partialMatches:z}}finally{Q&&(o=[...o])}if(M.aborted)return{type:"aborted"};let se=Li(ne,N,u);if(se)return Nr(N,P),{type:"success",matches:se};let q=Nu(ne,N,u,!0);if(!q||z.length===q.length&&z.every((te,J)=>te.route.id===q[J].route.id))return Nr(N,P),{type:"success",matches:null};z=q}}function Nr(k,N){if(N.size>=A){let M=N.values().next().value;N.delete(M)}N.add(k)}function Ai(k){s={},l=Xa(k,i,void 0,s)}function Eh(k,N){let M=l==null;Hw(k,N,l||o,s,i),M&&(o=[...o],ot({}))}return T={get basename(){return u},get future(){return p},get state(){return m},get routes(){return o},get window(){return e},initialize:ps,subscribe:No,enableScrollRestoration:_s,navigate:Do,fetch:Oo,revalidate:_h,createHref:k=>t.history.createHref(k),encodeLocation:k=>t.history.encodeLocation(k),getFetcher:kr,deleteFetcher:Dl,dispose:ko,getBlocker:Ol,deleteBlocker:Mo,patchRoutes:Eh,_internalFetchControllers:X,_internalActiveDeferreds:gt,_internalSetRoutes:Ai},T}function bA(t){return t!=null&&("formData"in t&&t.formData!=null||"body"in t&&t.body!==void 0)}function pf(t,e,n,r,i,s,o,l){let u,c;if(o){u=[];for(let p of e)if(u.push(p),p.route.id===o){c=p;break}}else u=e,c=e[e.length-1];let d=Vp(i||".",Mp(u,s),Eo(t.pathname,n)||t.pathname,l==="path");return i==null&&(d.search=t.search,d.hash=t.hash),(i==null||i===""||i===".")&&c&&c.route.index&&!jp(d.search)&&(d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(d.pathname=d.pathname==="/"?n:yr([n,d.pathname])),Yi(d)}function Py(t,e,n,r){if(!r||!bA(r))return{path:n};if(r.formMethod&&!GA(r.formMethod))return{path:n,error:Bt(405,{method:r.formMethod})};let i=()=>({path:n,error:Bt(400,{type:"invalid-body"})}),s=r.formMethod||"get",o=t?s.toUpperCase():s.toLowerCase(),l=Ww(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!Ln(o))return i();let g=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((v,A)=>{let[P,b]=A;return""+v+P+"="+b+`
`},""):String(r.body);return{path:n,submission:{formMethod:o,formAction:l,formEncType:r.formEncType,formData:void 0,json:void 0,text:g}}}else if(r.formEncType==="application/json"){if(!Ln(o))return i();try{let g=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:o,formAction:l,formEncType:r.formEncType,formData:void 0,json:g,text:void 0}}}catch{return i()}}}de(typeof FormData=="function","FormData is not available in this environment");let u,c;if(r.formData)u=mf(r.formData),c=r.formData;else if(r.body instanceof FormData)u=mf(r.body),c=r.body;else if(r.body instanceof URLSearchParams)u=r.body,c=xy(u);else if(r.body==null)u=new URLSearchParams,c=new FormData;else try{u=new URLSearchParams(r.body),c=xy(u)}catch{return i()}let d={formMethod:o,formAction:l,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:c,json:void 0,text:void 0};if(Ln(d.formMethod))return{path:n,submission:d};let p=yi(n);return e&&p.search&&jp(p.search)&&u.append("index",""),p.search="?"+u,{path:Yi(p),submission:d}}function OA(t,e){let n=t;if(e){let r=t.findIndex(i=>i.route.id===e);r>=0&&(n=t.slice(0,r))}return n}function ky(t,e,n,r,i,s,o,l,u,c,d,p,g,v,A,P){let b=P?on(P[1])?P[1].error:P[1].data:void 0,E=t.createURL(e.location),_=t.createURL(i),S=P&&on(P[1])?P[0]:void 0,O=S?OA(n,S):n,B=P?P[1].statusCode:void 0,F=o&&B&&B>=400,T=O.filter((w,I)=>{let{route:C}=w;if(C.lazy)return!0;if(C.loader==null)return!1;if(s)return typeof C.loader!="function"||C.loader.hydrate?!0:e.loaderData[C.id]===void 0&&(!e.errors||e.errors[C.id]===void 0);if(LA(e.loaderData,e.matches[I],w)||u.some(Te=>Te===w.route.id))return!0;let x=e.matches[I],R=w;return Ny(w,ze({currentUrl:E,currentParams:x.params,nextUrl:_,nextParams:R.params},r,{actionResult:b,actionStatus:B,defaultShouldRevalidate:F?!1:l||E.pathname+E.search===_.pathname+_.search||E.search!==_.search||$w(x,R)}))}),m=[];return p.forEach((w,I)=>{if(s||!n.some(Rt=>Rt.route.id===w.routeId)||d.has(I))return;let C=Li(v,w.path,A);if(!C){m.push({key:I,routeId:w.routeId,path:w.path,matches:null,match:null,controller:null});return}let x=e.fetchers.get(I),R=ca(C,w.path),Te=!1;g.has(I)?Te=!1:c.has(I)?(c.delete(I),Te=!0):x&&x.state!=="idle"&&x.data===void 0?Te=l:Te=Ny(R,ze({currentUrl:E,currentParams:e.matches[e.matches.length-1].params,nextUrl:_,nextParams:n[n.length-1].params},r,{actionResult:b,actionStatus:B,defaultShouldRevalidate:F?!1:l})),Te&&m.push({key:I,routeId:w.routeId,path:w.path,matches:C,match:R,controller:new AbortController})}),[T,m]}function LA(t,e,n){let r=!e||n.route.id!==e.route.id,i=t[n.route.id]===void 0;return r||i}function $w(t,e){let n=t.route.path;return t.pathname!==e.pathname||n!=null&&n.endsWith("*")&&t.params["*"]!==e.params["*"]}function Ny(t,e){if(t.route.shouldRevalidate){let n=t.route.shouldRevalidate(e);if(typeof n=="boolean")return n}return e.defaultShouldRevalidate}async function MA(t,e,n,r,i,s,o,l){let u=[e,...n.map(c=>c.route.id)].join("-");try{let c=o.get(u);c||(c=t({path:e,matches:n,patch:(d,p)=>{l.aborted||Hw(d,p,r,i,s)}}),o.set(u,c)),c&&WA(c)&&await c}finally{o.delete(u)}}function Hw(t,e,n,r,i){if(t){var s;let o=r[t];de(o,"No route found to patch children into: routeId = "+t);let l=Xa(e,i,[t,"patch",String(((s=o.children)==null?void 0:s.length)||"0")],r);o.children?o.children.push(...l):o.children=l}else{let o=Xa(e,i,["patch",String(n.length||"0")],r);n.push(...o)}}async function VA(t,e,n){if(!t.lazy)return;let r=await t.lazy();if(!t.lazy)return;let i=n[t.id];de(i,"No route found in manifest");let s={};for(let o in r){let u=i[o]!==void 0&&o!=="hasErrorBoundary";lo(!u,'Route "'+i.id+'" has a static property "'+o+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+o+'" will be ignored.')),!u&&!sA.has(o)&&(s[o]=r[o])}Object.assign(i,s),Object.assign(i,ze({},e(i),{lazy:void 0}))}async function UA(t){let{matches:e}=t,n=e.filter(i=>i.shouldLoad);return(await Promise.all(n.map(i=>i.resolve()))).reduce((i,s,o)=>Object.assign(i,{[n[o].route.id]:s}),{})}async function FA(t,e,n,r,i,s,o,l,u,c){let d=s.map(v=>v.route.lazy?VA(v.route,u,l):void 0),p=s.map((v,A)=>{let P=d[A],b=i.some(_=>_.route.id===v.route.id);return ze({},v,{shouldLoad:b,resolve:async _=>(_&&r.method==="GET"&&(v.route.lazy||v.route.loader)&&(b=!0),b?jA(e,r,v,P,_,c):Promise.resolve({type:ke.data,result:void 0}))})}),g=await t({matches:p,request:r,params:s[0].params,fetcherKey:o,context:c});try{await Promise.all(d)}catch{}return g}async function jA(t,e,n,r,i,s){let o,l,u=c=>{let d,p=new Promise((A,P)=>d=P);l=()=>d(),e.signal.addEventListener("abort",l);let g=A=>typeof c!="function"?Promise.reject(new Error("You cannot call the handler for a route which defines a boolean "+('"'+t+'" [routeId: '+n.route.id+"]"))):c({request:e,params:n.params,context:s},...A!==void 0?[A]:[]),v=(async()=>{try{return{type:"data",result:await(i?i(P=>g(P)):g())}}catch(A){return{type:"error",result:A}}})();return Promise.race([v,p])};try{let c=n.route[t];if(r)if(c){let d,[p]=await Promise.all([u(c).catch(g=>{d=g}),r]);if(d!==void 0)throw d;o=p}else if(await r,c=n.route[t],c)o=await u(c);else if(t==="action"){let d=new URL(e.url),p=d.pathname+d.search;throw Bt(405,{method:e.method,pathname:p,routeId:n.route.id})}else return{type:ke.data,result:void 0};else if(c)o=await u(c);else{let d=new URL(e.url),p=d.pathname+d.search;throw Bt(404,{pathname:p})}de(o.result!==void 0,"You defined "+(t==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+t+"` ")+"function. Please return a value or `null`.")}catch(c){return{type:ke.error,result:c}}finally{l&&e.signal.removeEventListener("abort",l)}return o}async function BA(t){let{result:e,type:n}=t;if(qw(e)){let c;try{let d=e.headers.get("Content-Type");d&&/\bapplication\/json\b/.test(d)?e.body==null?c=null:c=await e.json():c=await e.text()}catch(d){return{type:ke.error,error:d}}return n===ke.error?{type:ke.error,error:new uc(e.status,e.statusText,c),statusCode:e.status,headers:e.headers}:{type:ke.data,data:c,statusCode:e.status,headers:e.headers}}if(n===ke.error){if(Vy(e)){var r;if(e.data instanceof Error){var i;return{type:ke.error,error:e.data,statusCode:(i=e.init)==null?void 0:i.status}}e=new uc(((r=e.init)==null?void 0:r.status)||500,void 0,e.data)}return{type:ke.error,error:e,statusCode:Gc(e)?e.status:void 0}}if(KA(e)){var s,o;return{type:ke.deferred,deferredData:e,statusCode:(s=e.init)==null?void 0:s.status,headers:((o=e.init)==null?void 0:o.headers)&&new Headers(e.init.headers)}}if(Vy(e)){var l,u;return{type:ke.data,data:e.data,statusCode:(l=e.init)==null?void 0:l.status,headers:(u=e.init)!=null&&u.headers?new Headers(e.init.headers):void 0}}return{type:ke.data,data:e}}function zA(t,e,n,r,i,s){let o=t.headers.get("Location");if(de(o,"Redirects returned/thrown from loaders/actions must have a Location header"),!Up.test(o)){let l=r.slice(0,r.findIndex(u=>u.route.id===n)+1);o=pf(new URL(e.url),l,i,!0,o,s),t.headers.set("Location",o)}return t}function Dy(t,e,n){if(Up.test(t)){let r=t,i=r.startsWith("//")?new URL(e.protocol+r):new URL(r),s=Eo(i.pathname,n)!=null;if(i.origin===e.origin&&s)return i.pathname+i.search+i.hash}return t}function Ss(t,e,n,r){let i=t.createURL(Ww(e)).toString(),s={signal:n};if(r&&Ln(r.formMethod)){let{formMethod:o,formEncType:l}=r;s.method=o.toUpperCase(),l==="application/json"?(s.headers=new Headers({"Content-Type":l}),s.body=JSON.stringify(r.json)):l==="text/plain"?s.body=r.text:l==="application/x-www-form-urlencoded"&&r.formData?s.body=mf(r.formData):s.body=r.formData}return new Request(i,s)}function mf(t){let e=new URLSearchParams;for(let[n,r]of t.entries())e.append(n,typeof r=="string"?r:r.name);return e}function xy(t){let e=new FormData;for(let[n,r]of t.entries())e.append(n,r);return e}function $A(t,e,n,r,i){let s={},o=null,l,u=!1,c={},d=n&&on(n[1])?n[1].error:void 0;return t.forEach(p=>{if(!(p.route.id in e))return;let g=p.route.id,v=e[g];if(de(!Fi(v),"Cannot handle redirect results in processLoaderData"),on(v)){let A=v.error;d!==void 0&&(A=d,d=void 0),o=o||{};{let P=zs(t,g);o[P.route.id]==null&&(o[P.route.id]=A)}s[g]=void 0,u||(u=!0,l=Gc(v.error)?v.error.status:500),v.headers&&(c[g]=v.headers)}else Qr(v)?(r.set(g,v.deferredData),s[g]=v.deferredData.data,v.statusCode!=null&&v.statusCode!==200&&!u&&(l=v.statusCode),v.headers&&(c[g]=v.headers)):(s[g]=v.data,v.statusCode&&v.statusCode!==200&&!u&&(l=v.statusCode),v.headers&&(c[g]=v.headers))}),d!==void 0&&n&&(o={[n[0]]:d},s[n[0]]=void 0),{loaderData:s,errors:o,statusCode:l||200,loaderHeaders:c}}function by(t,e,n,r,i,s,o,l){let{loaderData:u,errors:c}=$A(e,r,i,l);return s.forEach(d=>{let{key:p,match:g,controller:v}=d,A=o[p];if(de(A,"Did not find corresponding fetcher result"),!(v&&v.signal.aborted))if(on(A)){let P=zs(t.matches,g==null?void 0:g.route.id);c&&c[P.route.id]||(c=ze({},c,{[P.route.id]:A.error})),t.fetchers.delete(p)}else if(Fi(A))de(!1,"Unhandled fetcher revalidation redirect");else if(Qr(A))de(!1,"Unhandled fetcher deferred data");else{let P=Vr(A.data);t.fetchers.set(p,P)}}),{loaderData:u,errors:c}}function Oy(t,e,n,r){let i=ze({},e);for(let s of n){let o=s.route.id;if(e.hasOwnProperty(o)?e[o]!==void 0&&(i[o]=e[o]):t[o]!==void 0&&s.route.loader&&(i[o]=t[o]),r&&r.hasOwnProperty(o))break}return i}function Ly(t){return t?on(t[1])?{actionData:{}}:{actionData:{[t[0]]:t[1].data}}:{}}function zs(t,e){return(e?t.slice(0,t.findIndex(r=>r.route.id===e)+1):[...t]).reverse().find(r=>r.route.hasErrorBoundary===!0)||t[0]}function My(t){let e=t.length===1?t[0]:t.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function Bt(t,e){let{pathname:n,routeId:r,method:i,type:s,message:o}=e===void 0?{}:e,l="Unknown Server Error",u="Unknown @remix-run/router error";return t===400?(l="Bad Request",s==="route-discovery"?u='Unable to match URL "'+n+'" - the `unstable_patchRoutesOnNavigation()` '+(`function threw the following error:
`+o):i&&n&&r?u="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":s==="defer-action"?u="defer() is not supported in actions":s==="invalid-body"&&(u="Unable to encode submission body")):t===403?(l="Forbidden",u='Route "'+r+'" does not match URL "'+n+'"'):t===404?(l="Not Found",u='No route matches URL "'+n+'"'):t===405&&(l="Method Not Allowed",i&&n&&r?u="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(u='Invalid request method "'+i.toUpperCase()+'"')),new uc(t||500,l,new Error(u),!0)}function cu(t){let e=Object.entries(t);for(let n=e.length-1;n>=0;n--){let[r,i]=e[n];if(Fi(i))return{key:r,result:i}}}function Ww(t){let e=typeof t=="string"?yi(t):t;return Yi(ze({},e,{hash:""}))}function HA(t,e){return t.pathname!==e.pathname||t.search!==e.search?!1:t.hash===""?e.hash!=="":t.hash===e.hash?!0:e.hash!==""}function WA(t){return typeof t=="object"&&t!=null&&"then"in t}function qA(t){return qw(t.result)&&PA.has(t.result.status)}function Qr(t){return t.type===ke.deferred}function on(t){return t.type===ke.error}function Fi(t){return(t&&t.type)===ke.redirect}function Vy(t){return typeof t=="object"&&t!=null&&"type"in t&&"data"in t&&"init"in t&&t.type==="DataWithResponseInit"}function KA(t){let e=t;return e&&typeof e=="object"&&typeof e.data=="object"&&typeof e.subscribe=="function"&&typeof e.cancel=="function"&&typeof e.resolveData=="function"}function qw(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function GA(t){return CA.has(t.toLowerCase())}function Ln(t){return RA.has(t.toLowerCase())}async function QA(t,e,n,r,i){let s=Object.entries(e);for(let o=0;o<s.length;o++){let[l,u]=s[o],c=t.find(g=>(g==null?void 0:g.route.id)===l);if(!c)continue;let d=r.find(g=>g.route.id===c.route.id),p=d!=null&&!$w(d,c)&&(i&&i[c.route.id])!==void 0;Qr(u)&&p&&await Fp(u,n,!1).then(g=>{g&&(e[l]=g)})}}async function XA(t,e,n){for(let r=0;r<n.length;r++){let{key:i,routeId:s,controller:o}=n[r],l=e[i];t.find(c=>(c==null?void 0:c.route.id)===s)&&Qr(l)&&(de(o,"Expected an AbortController for revalidating fetcher deferred result"),await Fp(l,o.signal,!0).then(c=>{c&&(e[i]=c)}))}}async function Fp(t,e,n){if(n===void 0&&(n=!1),!await t.deferredData.resolveData(e)){if(n)try{return{type:ke.data,data:t.deferredData.unwrappedData}}catch(i){return{type:ke.error,error:i}}return{type:ke.data,data:t.deferredData.data}}}function jp(t){return new URLSearchParams(t).getAll("index").some(e=>e==="")}function ca(t,e){let n=typeof e=="string"?yi(e).search:e.search;if(t[t.length-1].route.index&&jp(n||""))return t[t.length-1];let r=jw(t);return r[r.length-1]}function Uy(t){let{formMethod:e,formAction:n,formEncType:r,text:i,formData:s,json:o}=t;if(!(!e||!n||!r)){if(i!=null)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:void 0,text:i};if(s!=null)return{formMethod:e,formAction:n,formEncType:r,formData:s,json:void 0,text:void 0};if(o!==void 0)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:o,text:void 0}}}function td(t,e){return e?{state:"loading",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}:{state:"loading",location:t,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function YA(t,e){return{state:"submitting",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}}function na(t,e){return t?{state:"loading",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function JA(t,e){return{state:"submitting",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e?e.data:void 0}}function Vr(t){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function ZA(t,e){try{let n=t.sessionStorage.getItem(zw);if(n){let r=JSON.parse(n);for(let[i,s]of Object.entries(r||{}))s&&Array.isArray(s)&&e.set(i,new Set(s||[]))}}catch{}}function eC(t,e){if(e.size>0){let n={};for(let[r,i]of e)n[r]=[...i];try{t.sessionStorage.setItem(zw,JSON.stringify(n))}catch(r){lo(!1,"Failed to save applied view transitions in sessionStorage ("+r+").")}}}/**
 * React Router v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function cc(){return cc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},cc.apply(this,arguments)}const Qc=U.createContext(null),Kw=U.createContext(null),as=U.createContext(null),Bp=U.createContext(null),vi=U.createContext({outlet:null,matches:[],isDataRoute:!1}),Gw=U.createContext(null);function tC(t,e){let{relative:n}=e===void 0?{}:e;ml()||de(!1);let{basename:r,navigator:i}=U.useContext(as),{hash:s,pathname:o,search:l}=Yw(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:yr([r,o])),i.createHref({pathname:u,search:l,hash:s})}function ml(){return U.useContext(Bp)!=null}function ls(){return ml()||de(!1),U.useContext(Bp).location}function Qw(t){U.useContext(as).static||U.useLayoutEffect(t)}function zp(){let{isDataRoute:t}=U.useContext(vi);return t?pC():nC()}function nC(){ml()||de(!1);let t=U.useContext(Qc),{basename:e,future:n,navigator:r}=U.useContext(as),{matches:i}=U.useContext(vi),{pathname:s}=ls(),o=JSON.stringify(Mp(i,n.v7_relativeSplatPath)),l=U.useRef(!1);return Qw(()=>{l.current=!0}),U.useCallback(function(c,d){if(d===void 0&&(d={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let p=Vp(c,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:yr([e,p.pathname])),(d.replace?r.replace:r.push)(p,d.state,d)},[e,r,o,s,t])}const Xw=U.createContext(null);function gl(){return U.useContext(Xw)}function rC(t){let e=U.useContext(vi).outlet;return e&&U.createElement(Xw.Provider,{value:t},e)}function Yw(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=U.useContext(as),{matches:i}=U.useContext(vi),{pathname:s}=ls(),o=JSON.stringify(Mp(i,r.v7_relativeSplatPath));return U.useMemo(()=>Vp(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function iC(t,e,n,r){ml()||de(!1);let{navigator:i}=U.useContext(as),{matches:s}=U.useContext(vi),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=ls(),d;d=c;let p=d.pathname||"/",g=p;if(u!=="/"){let P=u.replace(/^\//,"").split("/");g="/"+p.replace(/^\//,"").split("/").slice(P.length).join("/")}let v=Li(t,{pathname:g});return uC(v&&v.map(P=>Object.assign({},P,{params:Object.assign({},l,P.params),pathname:yr([u,i.encodeLocation?i.encodeLocation(P.pathname).pathname:P.pathname]),pathnameBase:P.pathnameBase==="/"?u:yr([u,i.encodeLocation?i.encodeLocation(P.pathnameBase).pathname:P.pathnameBase])})),s,n,r)}function sC(){let t=fC(),e=Gc(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return U.createElement(U.Fragment,null,U.createElement("h2",null,"Unexpected Application Error!"),U.createElement("h3",{style:{fontStyle:"italic"}},e),n?U.createElement("pre",{style:i},n):null,null)}const oC=U.createElement(sC,null);class aC extends U.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?U.createElement(vi.Provider,{value:this.props.routeContext},U.createElement(Gw.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function lC(t){let{routeContext:e,match:n,children:r}=t,i=U.useContext(Qc);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),U.createElement(vi.Provider,{value:e},r)}function uC(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let d=o.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);d>=0||de(!1),o=o.slice(0,Math.min(o.length,d+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let p=o[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(c=d),p.route.id){let{loaderData:g,errors:v}=n,A=p.route.loader&&g[p.route.id]===void 0&&(!v||v[p.route.id]===void 0);if(p.route.lazy||A){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,p,g)=>{let v,A=!1,P=null,b=null;n&&(v=l&&p.route.id?l[p.route.id]:void 0,P=p.route.errorElement||oC,u&&(c<0&&g===0?(mC("route-fallback"),A=!0,b=null):c===g&&(A=!0,b=p.route.hydrateFallbackElement||null)));let E=e.concat(o.slice(0,g+1)),_=()=>{let S;return v?S=P:A?S=b:p.route.Component?S=U.createElement(p.route.Component,null):p.route.element?S=p.route.element:S=d,U.createElement(lC,{match:p,routeContext:{outlet:d,matches:E,isDataRoute:n!=null},children:S})};return n&&(p.route.ErrorBoundary||p.route.errorElement||g===0)?U.createElement(aC,{location:n.location,revalidation:n.revalidation,component:P,error:v,children:_(),routeContext:{outlet:null,matches:E,isDataRoute:!0}}):_()},null)}var Jw=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Jw||{}),hc=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(hc||{});function cC(t){let e=U.useContext(Qc);return e||de(!1),e}function hC(t){let e=U.useContext(Kw);return e||de(!1),e}function dC(t){let e=U.useContext(vi);return e||de(!1),e}function Zw(t){let e=dC(),n=e.matches[e.matches.length-1];return n.route.id||de(!1),n.route.id}function fC(){var t;let e=U.useContext(Gw),n=hC(hc.UseRouteError),r=Zw(hc.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function pC(){let{router:t}=cC(Jw.UseNavigateStable),e=Zw(hc.UseNavigateStable),n=U.useRef(!1);return Qw(()=>{n.current=!0}),U.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,cc({fromRouteId:e},s)))},[t,e])}const Fy={};function mC(t,e,n){Fy[t]||(Fy[t]=!0)}function gC(t){return rC(t.context)}function yC(t){let{basename:e="/",children:n=null,location:r,navigationType:i=rt.Pop,navigator:s,static:o=!1,future:l}=t;ml()&&de(!1);let u=e.replace(/^\/*/,"/"),c=U.useMemo(()=>({basename:u,navigator:s,static:o,future:cc({v7_relativeSplatPath:!1},l)}),[u,l,s,o]);typeof r=="string"&&(r=yi(r));let{pathname:d="/",search:p="",hash:g="",state:v=null,key:A="default"}=r,P=U.useMemo(()=>{let b=Eo(d,u);return b==null?null:{location:{pathname:b,search:p,hash:g,state:v,key:A},navigationType:i}},[u,d,p,g,v,A,i]);return P==null?null:U.createElement(as.Provider,{value:c},U.createElement(Bp.Provider,{children:n,value:P}))}new Promise(()=>{});function vC(t){let e={hasErrorBoundary:t.ErrorBoundary!=null||t.errorElement!=null};return t.Component&&Object.assign(e,{element:U.createElement(t.Component),Component:void 0}),t.HydrateFallback&&Object.assign(e,{hydrateFallbackElement:U.createElement(t.HydrateFallback),HydrateFallback:void 0}),t.ErrorBoundary&&Object.assign(e,{errorElement:U.createElement(t.ErrorBoundary),ErrorBoundary:void 0}),e}/**
 * React Router DOM v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ya(){return Ya=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ya.apply(this,arguments)}function _C(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function wC(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function EC(t,e){return t.button===0&&(!e||e==="_self")&&!wC(t)}const TC=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],IC="6";try{window.__reactRouterVersion=IC}catch{}function SC(t,e){return xA({basename:void 0,future:Ya({},void 0,{v7_prependBasename:!0}),history:nA({window:void 0}),hydrationData:RC(),routes:t,mapRouteProperties:vC,unstable_dataStrategy:void 0,unstable_patchRoutesOnNavigation:void 0,window:void 0}).initialize()}function RC(){var t;let e=(t=window)==null?void 0:t.__staticRouterHydrationData;return e&&e.errors&&(e=Ya({},e,{errors:AC(e.errors)})),e}function AC(t){if(!t)return null;let e=Object.entries(t),n={};for(let[r,i]of e)if(i&&i.__type==="RouteErrorResponse")n[r]=new uc(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let s=window[i.__subType];if(typeof s=="function")try{let o=new s(i.message);o.stack="",n[r]=o}catch{}}if(n[r]==null){let s=new Error(i.message);s.stack="",n[r]=s}}else n[r]=i;return n}const CC=U.createContext({isTransitioning:!1}),PC=U.createContext(new Map),kC="startTransition",jy=$S[kC],NC="flushSync",By=tA[NC];function DC(t){jy?jy(t):t()}function ra(t){By?By(t):t()}let xC=class{constructor(){this.status="pending",this.promise=new Promise((e,n)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",e(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",n(r))}})}};function bC(t){let{fallbackElement:e,router:n,future:r}=t,[i,s]=U.useState(n.state),[o,l]=U.useState(),[u,c]=U.useState({isTransitioning:!1}),[d,p]=U.useState(),[g,v]=U.useState(),[A,P]=U.useState(),b=U.useRef(new Map),{v7_startTransition:E}=r||{},_=U.useCallback(m=>{E?DC(m):m()},[E]),S=U.useCallback((m,w)=>{let{deletedFetchers:I,unstable_flushSync:C,unstable_viewTransitionOpts:x}=w;I.forEach(Te=>b.current.delete(Te)),m.fetchers.forEach((Te,Rt)=>{Te.data!==void 0&&b.current.set(Rt,Te.data)});let R=n.window==null||n.window.document==null||typeof n.window.document.startViewTransition!="function";if(!x||R){C?ra(()=>s(m)):_(()=>s(m));return}if(C){ra(()=>{g&&(d&&d.resolve(),g.skipTransition()),c({isTransitioning:!0,flushSync:!0,currentLocation:x.currentLocation,nextLocation:x.nextLocation})});let Te=n.window.document.startViewTransition(()=>{ra(()=>s(m))});Te.finished.finally(()=>{ra(()=>{p(void 0),v(void 0),l(void 0),c({isTransitioning:!1})})}),ra(()=>v(Te));return}g?(d&&d.resolve(),g.skipTransition(),P({state:m,currentLocation:x.currentLocation,nextLocation:x.nextLocation})):(l(m),c({isTransitioning:!0,flushSync:!1,currentLocation:x.currentLocation,nextLocation:x.nextLocation}))},[n.window,g,d,b,_]);U.useLayoutEffect(()=>n.subscribe(S),[n,S]),U.useEffect(()=>{u.isTransitioning&&!u.flushSync&&p(new xC)},[u]),U.useEffect(()=>{if(d&&o&&n.window){let m=o,w=d.promise,I=n.window.document.startViewTransition(async()=>{_(()=>s(m)),await w});I.finished.finally(()=>{p(void 0),v(void 0),l(void 0),c({isTransitioning:!1})}),v(I)}},[_,o,d,n.window]),U.useEffect(()=>{d&&o&&i.location.key===o.location.key&&d.resolve()},[d,g,i.location,o]),U.useEffect(()=>{!u.isTransitioning&&A&&(l(A.state),c({isTransitioning:!0,flushSync:!1,currentLocation:A.currentLocation,nextLocation:A.nextLocation}),P(void 0))},[u.isTransitioning,A]),U.useEffect(()=>{},[]);let O=U.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:m=>n.navigate(m),push:(m,w,I)=>n.navigate(m,{state:w,preventScrollReset:I==null?void 0:I.preventScrollReset}),replace:(m,w,I)=>n.navigate(m,{replace:!0,state:w,preventScrollReset:I==null?void 0:I.preventScrollReset})}),[n]),B=n.basename||"/",F=U.useMemo(()=>({router:n,navigator:O,static:!1,basename:B}),[n,O,B]),T=U.useMemo(()=>({v7_relativeSplatPath:n.future.v7_relativeSplatPath}),[n.future.v7_relativeSplatPath]);return U.createElement(U.Fragment,null,U.createElement(Qc.Provider,{value:F},U.createElement(Kw.Provider,{value:i},U.createElement(PC.Provider,{value:b.current},U.createElement(CC.Provider,{value:u},U.createElement(yC,{basename:B,location:i.location,navigationType:i.historyAction,navigator:O,future:T},i.initialized||n.future.v7_partialHydration?U.createElement(OC,{routes:n.routes,future:n.future,state:i}):e))))),null)}const OC=U.memo(LC);function LC(t){let{routes:e,future:n,state:r}=t;return iC(e,void 0,r,n)}const MC=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",VC=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,pt=U.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:u,to:c,preventScrollReset:d,unstable_viewTransition:p}=e,g=_C(e,TC),{basename:v}=U.useContext(as),A,P=!1;if(typeof c=="string"&&VC.test(c)&&(A=c,MC))try{let S=new URL(window.location.href),O=c.startsWith("//")?new URL(S.protocol+c):new URL(c),B=Eo(O.pathname,v);O.origin===S.origin&&B!=null?c=B+O.search+O.hash:P=!0}catch{}let b=tC(c,{relative:i}),E=UC(c,{replace:o,state:l,target:u,preventScrollReset:d,relative:i,unstable_viewTransition:p});function _(S){r&&r(S),S.defaultPrevented||E(S)}return U.createElement("a",Ya({},g,{href:A||b,onClick:P||s?r:_,ref:n,target:u}))});var zy;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(zy||(zy={}));var $y;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})($y||($y={}));function UC(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:l}=e===void 0?{}:e,u=zp(),c=ls(),d=Yw(t,{relative:o});return U.useCallback(p=>{if(EC(p,n)){p.preventDefault();let g=r!==void 0?r:Yi(c)===Yi(d);u(t,{replace:g,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:l})}},[c,u,d,r,i,n,t,s,o,l])}const FC="/assets/logo2-Dme3yehf.png";var Hy={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},jC=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},tE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,d=s>>2,p=(s&3)<<4|l>>4;let g=(l&15)<<2|c>>6,v=c&63;u||(v=64,o||(g=64)),r.push(n[d],n[p],n[g],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(eE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):jC(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||p==null)throw new BC;const g=s<<2|l>>4;if(r.push(g),c!==64){const v=l<<4&240|c>>2;if(r.push(v),p!==64){const A=c<<6&192|p;r.push(A)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class BC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const zC=function(t){const e=eE(t);return tE.encodeByteArray(e,!0)},dc=function(t){return zC(t).replace(/\./g,"")},nE=function(t){try{return tE.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $C(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HC=()=>$C().__FIREBASE_DEFAULTS__,WC=()=>{if(typeof process>"u"||typeof Hy>"u")return;const t=Hy.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},qC=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&nE(t[1]);return e&&JSON.parse(e)},Xc=()=>{try{return HC()||WC()||qC()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},rE=t=>{var e,n;return(n=(e=Xc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},iE=t=>{const e=rE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},sE=()=>{var t;return(t=Xc())===null||t===void 0?void 0:t.config},oE=t=>{var e;return(e=Xc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KC{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[dc(JSON.stringify(n)),dc(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function GC(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ut())}function QC(){var t;const e=(t=Xc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function lE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function XC(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function YC(){const t=Ut();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function JC(){return!QC()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function uE(){try{return typeof indexedDB=="object"}catch{return!1}}function cE(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function ZC(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eP="FirebaseError";class An extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=eP,Object.setPrototypeOf(this,An.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,us.prototype.create)}}class us{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?tP(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new An(i,l,r)}}function tP(t,e){return t.replace(nP,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const nP=/\{\$([^}]+)}/g;function rP(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ja(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Wy(s)&&Wy(o)){if(!Ja(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Wy(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yl(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ha(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function da(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function iP(t,e){const n=new sP(t,e);return n.subscribe.bind(n)}class sP{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");oP(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=nd),i.error===void 0&&(i.error=nd),i.complete===void 0&&(i.complete=nd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function oP(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function nd(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aP=1e3,lP=2,uP=4*60*60*1e3,cP=.5;function qy(t,e=aP,n=lP){const r=e*Math.pow(n,t),i=Math.round(cP*r*(Math.random()-.5)*2);return Math.min(uP,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(t){return t&&t._delegate?t._delegate:t}class Rn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hP{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new KC;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(fP(e))try{this.getOrInitializeService({instanceIdentifier:Oi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Oi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Oi){return this.instances.has(e)}getOptions(e=Oi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:dP(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Oi){return this.component?this.component.multipleInstances?e:Oi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function dP(t){return t===Oi?void 0:t}function fP(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pP{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new hP(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ye;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ye||(ye={}));const mP={debug:ye.DEBUG,verbose:ye.VERBOSE,info:ye.INFO,warn:ye.WARN,error:ye.ERROR,silent:ye.SILENT},gP=ye.INFO,yP={[ye.DEBUG]:"log",[ye.VERBOSE]:"log",[ye.INFO]:"info",[ye.WARN]:"warn",[ye.ERROR]:"error"},vP=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=yP[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Yc{constructor(e){this.name=e,this._logLevel=gP,this._logHandler=vP,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ye))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?mP[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ye.DEBUG,...e),this._logHandler(this,ye.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ye.VERBOSE,...e),this._logHandler(this,ye.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ye.INFO,...e),this._logHandler(this,ye.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ye.WARN,...e),this._logHandler(this,ye.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ye.ERROR,...e),this._logHandler(this,ye.ERROR,...e)}}const _P=(t,e)=>e.some(n=>t instanceof n);let Ky,Gy;function wP(){return Ky||(Ky=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function EP(){return Gy||(Gy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const hE=new WeakMap,gf=new WeakMap,dE=new WeakMap,rd=new WeakMap,$p=new WeakMap;function TP(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(si(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&hE.set(n,t)}).catch(()=>{}),$p.set(e,t),e}function IP(t){if(gf.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});gf.set(t,e)}let yf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return gf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||dE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return si(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function SP(t){yf=t(yf)}function RP(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(id(this),e,...n);return dE.set(r,e.sort?e.sort():[e]),si(r)}:EP().includes(t)?function(...e){return t.apply(id(this),e),si(hE.get(this))}:function(...e){return si(t.apply(id(this),e))}}function AP(t){return typeof t=="function"?RP(t):(t instanceof IDBTransaction&&IP(t),_P(t,wP())?new Proxy(t,yf):t)}function si(t){if(t instanceof IDBRequest)return TP(t);if(rd.has(t))return rd.get(t);const e=AP(t);return e!==t&&(rd.set(t,e),$p.set(e,t)),e}const id=t=>$p.get(t);function fE(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=si(o);return r&&o.addEventListener("upgradeneeded",u=>{r(si(o.result),u.oldVersion,u.newVersion,si(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const CP=["get","getKey","getAll","getAllKeys","count"],PP=["put","add","delete","clear"],sd=new Map;function Qy(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(sd.get(e))return sd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=PP.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||CP.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return sd.set(e,s),s}SP(t=>({...t,get:(e,n,r)=>Qy(e,n)||t.get(e,n,r),has:(e,n)=>!!Qy(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kP{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(NP(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function NP(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const vf="@firebase/app",Xy="0.10.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sr=new Yc("@firebase/app"),DP="@firebase/app-compat",xP="@firebase/analytics-compat",bP="@firebase/analytics",OP="@firebase/app-check-compat",LP="@firebase/app-check",MP="@firebase/auth",VP="@firebase/auth-compat",UP="@firebase/database",FP="@firebase/database-compat",jP="@firebase/functions",BP="@firebase/functions-compat",zP="@firebase/installations",$P="@firebase/installations-compat",HP="@firebase/messaging",WP="@firebase/messaging-compat",qP="@firebase/performance",KP="@firebase/performance-compat",GP="@firebase/remote-config",QP="@firebase/remote-config-compat",XP="@firebase/storage",YP="@firebase/storage-compat",JP="@firebase/firestore",ZP="@firebase/vertexai-preview",ek="@firebase/firestore-compat",tk="firebase",nk="10.13.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _f="[DEFAULT]",rk={[vf]:"fire-core",[DP]:"fire-core-compat",[bP]:"fire-analytics",[xP]:"fire-analytics-compat",[LP]:"fire-app-check",[OP]:"fire-app-check-compat",[MP]:"fire-auth",[VP]:"fire-auth-compat",[UP]:"fire-rtdb",[FP]:"fire-rtdb-compat",[jP]:"fire-fn",[BP]:"fire-fn-compat",[zP]:"fire-iid",[$P]:"fire-iid-compat",[HP]:"fire-fcm",[WP]:"fire-fcm-compat",[qP]:"fire-perf",[KP]:"fire-perf-compat",[GP]:"fire-rc",[QP]:"fire-rc-compat",[XP]:"fire-gcs",[YP]:"fire-gcs-compat",[JP]:"fire-fst",[ek]:"fire-fst-compat",[ZP]:"fire-vertex","fire-js":"fire-js",[tk]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fc=new Map,ik=new Map,wf=new Map;function Yy(t,e){try{t.container.addComponent(e)}catch(n){Sr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Bn(t){const e=t.name;if(wf.has(e))return Sr.debug(`There were multiple attempts to register component ${e}.`),!1;wf.set(e,t);for(const n of fc.values())Yy(n,t);for(const n of ik.values())Yy(n,t);return!0}function _i(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function dr(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sk={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},oi=new us("app","Firebase",sk);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ok{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Rn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw oi.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cs=nk;function pE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:_f,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw oi.create("bad-app-name",{appName:String(i)});if(n||(n=sE()),!n)throw oi.create("no-options");const s=fc.get(i);if(s){if(Ja(n,s.options)&&Ja(r,s.config))return s;throw oi.create("duplicate-app",{appName:i})}const o=new pP(i);for(const u of wf.values())o.addComponent(u);const l=new ok(n,r,o);return fc.set(i,l),l}function Jc(t=_f){const e=fc.get(t);if(!e&&t===_f&&sE())return pE();if(!e)throw oi.create("no-app",{appName:t});return e}function Zt(t,e,n){var r;let i=(r=rk[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Sr.warn(l.join(" "));return}Bn(new Rn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ak="firebase-heartbeat-database",lk=1,Za="firebase-heartbeat-store";let od=null;function mE(){return od||(od=fE(ak,lk,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Za)}catch(n){console.warn(n)}}}}).catch(t=>{throw oi.create("idb-open",{originalErrorMessage:t.message})})),od}async function uk(t){try{const n=(await mE()).transaction(Za),r=await n.objectStore(Za).get(gE(t));return await n.done,r}catch(e){if(e instanceof An)Sr.warn(e.message);else{const n=oi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Sr.warn(n.message)}}}async function Jy(t,e){try{const r=(await mE()).transaction(Za,"readwrite");await r.objectStore(Za).put(e,gE(t)),await r.done}catch(n){if(n instanceof An)Sr.warn(n.message);else{const r=oi.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Sr.warn(r.message)}}}function gE(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ck=1024,hk=30*24*60*60*1e3;class dk{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new pk(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Zy();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=hk}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Sr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Zy(),{heartbeatsToSend:r,unsentEntries:i}=fk(this._heartbeatsCache.heartbeats),s=dc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Sr.warn(n),""}}}function Zy(){return new Date().toISOString().substring(0,10)}function fk(t,e=ck){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),ev(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ev(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class pk{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return uE()?cE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await uk(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Jy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Jy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ev(t){return dc(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mk(t){Bn(new Rn("platform-logger",e=>new kP(e),"PRIVATE")),Bn(new Rn("heartbeat",e=>new dk(e),"PRIVATE")),Zt(vf,Xy,t),Zt(vf,Xy,"esm2017"),Zt("fire-js","")}mk("");var tv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Hi,yE;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,m){function w(){}w.prototype=m.prototype,T.D=m.prototype,T.prototype=new w,T.prototype.constructor=T,T.C=function(I,C,x){for(var R=Array(arguments.length-2),Te=2;Te<arguments.length;Te++)R[Te-2]=arguments[Te];return m.prototype[C].apply(I,R)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(T,m,w){w||(w=0);var I=Array(16);if(typeof m=="string")for(var C=0;16>C;++C)I[C]=m.charCodeAt(w++)|m.charCodeAt(w++)<<8|m.charCodeAt(w++)<<16|m.charCodeAt(w++)<<24;else for(C=0;16>C;++C)I[C]=m[w++]|m[w++]<<8|m[w++]<<16|m[w++]<<24;m=T.g[0],w=T.g[1],C=T.g[2];var x=T.g[3],R=m+(x^w&(C^x))+I[0]+3614090360&4294967295;m=w+(R<<7&4294967295|R>>>25),R=x+(C^m&(w^C))+I[1]+3905402710&4294967295,x=m+(R<<12&4294967295|R>>>20),R=C+(w^x&(m^w))+I[2]+606105819&4294967295,C=x+(R<<17&4294967295|R>>>15),R=w+(m^C&(x^m))+I[3]+3250441966&4294967295,w=C+(R<<22&4294967295|R>>>10),R=m+(x^w&(C^x))+I[4]+4118548399&4294967295,m=w+(R<<7&4294967295|R>>>25),R=x+(C^m&(w^C))+I[5]+1200080426&4294967295,x=m+(R<<12&4294967295|R>>>20),R=C+(w^x&(m^w))+I[6]+2821735955&4294967295,C=x+(R<<17&4294967295|R>>>15),R=w+(m^C&(x^m))+I[7]+4249261313&4294967295,w=C+(R<<22&4294967295|R>>>10),R=m+(x^w&(C^x))+I[8]+1770035416&4294967295,m=w+(R<<7&4294967295|R>>>25),R=x+(C^m&(w^C))+I[9]+2336552879&4294967295,x=m+(R<<12&4294967295|R>>>20),R=C+(w^x&(m^w))+I[10]+4294925233&4294967295,C=x+(R<<17&4294967295|R>>>15),R=w+(m^C&(x^m))+I[11]+2304563134&4294967295,w=C+(R<<22&4294967295|R>>>10),R=m+(x^w&(C^x))+I[12]+1804603682&4294967295,m=w+(R<<7&4294967295|R>>>25),R=x+(C^m&(w^C))+I[13]+4254626195&4294967295,x=m+(R<<12&4294967295|R>>>20),R=C+(w^x&(m^w))+I[14]+2792965006&4294967295,C=x+(R<<17&4294967295|R>>>15),R=w+(m^C&(x^m))+I[15]+1236535329&4294967295,w=C+(R<<22&4294967295|R>>>10),R=m+(C^x&(w^C))+I[1]+4129170786&4294967295,m=w+(R<<5&4294967295|R>>>27),R=x+(w^C&(m^w))+I[6]+3225465664&4294967295,x=m+(R<<9&4294967295|R>>>23),R=C+(m^w&(x^m))+I[11]+643717713&4294967295,C=x+(R<<14&4294967295|R>>>18),R=w+(x^m&(C^x))+I[0]+3921069994&4294967295,w=C+(R<<20&4294967295|R>>>12),R=m+(C^x&(w^C))+I[5]+3593408605&4294967295,m=w+(R<<5&4294967295|R>>>27),R=x+(w^C&(m^w))+I[10]+38016083&4294967295,x=m+(R<<9&4294967295|R>>>23),R=C+(m^w&(x^m))+I[15]+3634488961&4294967295,C=x+(R<<14&4294967295|R>>>18),R=w+(x^m&(C^x))+I[4]+3889429448&4294967295,w=C+(R<<20&4294967295|R>>>12),R=m+(C^x&(w^C))+I[9]+568446438&4294967295,m=w+(R<<5&4294967295|R>>>27),R=x+(w^C&(m^w))+I[14]+3275163606&4294967295,x=m+(R<<9&4294967295|R>>>23),R=C+(m^w&(x^m))+I[3]+4107603335&4294967295,C=x+(R<<14&4294967295|R>>>18),R=w+(x^m&(C^x))+I[8]+1163531501&4294967295,w=C+(R<<20&4294967295|R>>>12),R=m+(C^x&(w^C))+I[13]+2850285829&4294967295,m=w+(R<<5&4294967295|R>>>27),R=x+(w^C&(m^w))+I[2]+4243563512&4294967295,x=m+(R<<9&4294967295|R>>>23),R=C+(m^w&(x^m))+I[7]+1735328473&4294967295,C=x+(R<<14&4294967295|R>>>18),R=w+(x^m&(C^x))+I[12]+2368359562&4294967295,w=C+(R<<20&4294967295|R>>>12),R=m+(w^C^x)+I[5]+4294588738&4294967295,m=w+(R<<4&4294967295|R>>>28),R=x+(m^w^C)+I[8]+2272392833&4294967295,x=m+(R<<11&4294967295|R>>>21),R=C+(x^m^w)+I[11]+1839030562&4294967295,C=x+(R<<16&4294967295|R>>>16),R=w+(C^x^m)+I[14]+4259657740&4294967295,w=C+(R<<23&4294967295|R>>>9),R=m+(w^C^x)+I[1]+2763975236&4294967295,m=w+(R<<4&4294967295|R>>>28),R=x+(m^w^C)+I[4]+1272893353&4294967295,x=m+(R<<11&4294967295|R>>>21),R=C+(x^m^w)+I[7]+4139469664&4294967295,C=x+(R<<16&4294967295|R>>>16),R=w+(C^x^m)+I[10]+3200236656&4294967295,w=C+(R<<23&4294967295|R>>>9),R=m+(w^C^x)+I[13]+681279174&4294967295,m=w+(R<<4&4294967295|R>>>28),R=x+(m^w^C)+I[0]+3936430074&4294967295,x=m+(R<<11&4294967295|R>>>21),R=C+(x^m^w)+I[3]+3572445317&4294967295,C=x+(R<<16&4294967295|R>>>16),R=w+(C^x^m)+I[6]+76029189&4294967295,w=C+(R<<23&4294967295|R>>>9),R=m+(w^C^x)+I[9]+3654602809&4294967295,m=w+(R<<4&4294967295|R>>>28),R=x+(m^w^C)+I[12]+3873151461&4294967295,x=m+(R<<11&4294967295|R>>>21),R=C+(x^m^w)+I[15]+530742520&4294967295,C=x+(R<<16&4294967295|R>>>16),R=w+(C^x^m)+I[2]+3299628645&4294967295,w=C+(R<<23&4294967295|R>>>9),R=m+(C^(w|~x))+I[0]+4096336452&4294967295,m=w+(R<<6&4294967295|R>>>26),R=x+(w^(m|~C))+I[7]+1126891415&4294967295,x=m+(R<<10&4294967295|R>>>22),R=C+(m^(x|~w))+I[14]+2878612391&4294967295,C=x+(R<<15&4294967295|R>>>17),R=w+(x^(C|~m))+I[5]+4237533241&4294967295,w=C+(R<<21&4294967295|R>>>11),R=m+(C^(w|~x))+I[12]+1700485571&4294967295,m=w+(R<<6&4294967295|R>>>26),R=x+(w^(m|~C))+I[3]+2399980690&4294967295,x=m+(R<<10&4294967295|R>>>22),R=C+(m^(x|~w))+I[10]+4293915773&4294967295,C=x+(R<<15&4294967295|R>>>17),R=w+(x^(C|~m))+I[1]+2240044497&4294967295,w=C+(R<<21&4294967295|R>>>11),R=m+(C^(w|~x))+I[8]+1873313359&4294967295,m=w+(R<<6&4294967295|R>>>26),R=x+(w^(m|~C))+I[15]+4264355552&4294967295,x=m+(R<<10&4294967295|R>>>22),R=C+(m^(x|~w))+I[6]+2734768916&4294967295,C=x+(R<<15&4294967295|R>>>17),R=w+(x^(C|~m))+I[13]+1309151649&4294967295,w=C+(R<<21&4294967295|R>>>11),R=m+(C^(w|~x))+I[4]+4149444226&4294967295,m=w+(R<<6&4294967295|R>>>26),R=x+(w^(m|~C))+I[11]+3174756917&4294967295,x=m+(R<<10&4294967295|R>>>22),R=C+(m^(x|~w))+I[2]+718787259&4294967295,C=x+(R<<15&4294967295|R>>>17),R=w+(x^(C|~m))+I[9]+3951481745&4294967295,T.g[0]=T.g[0]+m&4294967295,T.g[1]=T.g[1]+(C+(R<<21&4294967295|R>>>11))&4294967295,T.g[2]=T.g[2]+C&4294967295,T.g[3]=T.g[3]+x&4294967295}r.prototype.u=function(T,m){m===void 0&&(m=T.length);for(var w=m-this.blockSize,I=this.B,C=this.h,x=0;x<m;){if(C==0)for(;x<=w;)i(this,T,x),x+=this.blockSize;if(typeof T=="string"){for(;x<m;)if(I[C++]=T.charCodeAt(x++),C==this.blockSize){i(this,I),C=0;break}}else for(;x<m;)if(I[C++]=T[x++],C==this.blockSize){i(this,I),C=0;break}}this.h=C,this.o+=m},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var m=1;m<T.length-8;++m)T[m]=0;var w=8*this.o;for(m=T.length-8;m<T.length;++m)T[m]=w&255,w/=256;for(this.u(T),T=Array(16),m=w=0;4>m;++m)for(var I=0;32>I;I+=8)T[w++]=this.g[m]>>>I&255;return T};function s(T,m){var w=l;return Object.prototype.hasOwnProperty.call(w,T)?w[T]:w[T]=m(T)}function o(T,m){this.h=m;for(var w=[],I=!0,C=T.length-1;0<=C;C--){var x=T[C]|0;I&&x==m||(w[C]=x,I=!1)}this.g=w}var l={};function u(T){return-128<=T&&128>T?s(T,function(m){return new o([m|0],0>m?-1:0)}):new o([T|0],0>T?-1:0)}function c(T){if(isNaN(T)||!isFinite(T))return p;if(0>T)return b(c(-T));for(var m=[],w=1,I=0;T>=w;I++)m[I]=T/w|0,w*=4294967296;return new o(m,0)}function d(T,m){if(T.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(T.charAt(0)=="-")return b(d(T.substring(1),m));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=c(Math.pow(m,8)),I=p,C=0;C<T.length;C+=8){var x=Math.min(8,T.length-C),R=parseInt(T.substring(C,C+x),m);8>x?(x=c(Math.pow(m,x)),I=I.j(x).add(c(R))):(I=I.j(w),I=I.add(c(R)))}return I}var p=u(0),g=u(1),v=u(16777216);t=o.prototype,t.m=function(){if(P(this))return-b(this).m();for(var T=0,m=1,w=0;w<this.g.length;w++){var I=this.i(w);T+=(0<=I?I:4294967296+I)*m,m*=4294967296}return T},t.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(A(this))return"0";if(P(this))return"-"+b(this).toString(T);for(var m=c(Math.pow(T,6)),w=this,I="";;){var C=O(w,m).g;w=E(w,C.j(m));var x=((0<w.g.length?w.g[0]:w.h)>>>0).toString(T);if(w=C,A(w))return x+I;for(;6>x.length;)x="0"+x;I=x+I}},t.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function A(T){if(T.h!=0)return!1;for(var m=0;m<T.g.length;m++)if(T.g[m]!=0)return!1;return!0}function P(T){return T.h==-1}t.l=function(T){return T=E(this,T),P(T)?-1:A(T)?0:1};function b(T){for(var m=T.g.length,w=[],I=0;I<m;I++)w[I]=~T.g[I];return new o(w,~T.h).add(g)}t.abs=function(){return P(this)?b(this):this},t.add=function(T){for(var m=Math.max(this.g.length,T.g.length),w=[],I=0,C=0;C<=m;C++){var x=I+(this.i(C)&65535)+(T.i(C)&65535),R=(x>>>16)+(this.i(C)>>>16)+(T.i(C)>>>16);I=R>>>16,x&=65535,R&=65535,w[C]=R<<16|x}return new o(w,w[w.length-1]&-2147483648?-1:0)};function E(T,m){return T.add(b(m))}t.j=function(T){if(A(this)||A(T))return p;if(P(this))return P(T)?b(this).j(b(T)):b(b(this).j(T));if(P(T))return b(this.j(b(T)));if(0>this.l(v)&&0>T.l(v))return c(this.m()*T.m());for(var m=this.g.length+T.g.length,w=[],I=0;I<2*m;I++)w[I]=0;for(I=0;I<this.g.length;I++)for(var C=0;C<T.g.length;C++){var x=this.i(I)>>>16,R=this.i(I)&65535,Te=T.i(C)>>>16,Rt=T.i(C)&65535;w[2*I+2*C]+=R*Rt,_(w,2*I+2*C),w[2*I+2*C+1]+=x*Rt,_(w,2*I+2*C+1),w[2*I+2*C+1]+=R*Te,_(w,2*I+2*C+1),w[2*I+2*C+2]+=x*Te,_(w,2*I+2*C+2)}for(I=0;I<m;I++)w[I]=w[2*I+1]<<16|w[2*I];for(I=m;I<2*m;I++)w[I]=0;return new o(w,0)};function _(T,m){for(;(T[m]&65535)!=T[m];)T[m+1]+=T[m]>>>16,T[m]&=65535,m++}function S(T,m){this.g=T,this.h=m}function O(T,m){if(A(m))throw Error("division by zero");if(A(T))return new S(p,p);if(P(T))return m=O(b(T),m),new S(b(m.g),b(m.h));if(P(m))return m=O(T,b(m)),new S(b(m.g),m.h);if(30<T.g.length){if(P(T)||P(m))throw Error("slowDivide_ only works with positive integers.");for(var w=g,I=m;0>=I.l(T);)w=B(w),I=B(I);var C=F(w,1),x=F(I,1);for(I=F(I,2),w=F(w,2);!A(I);){var R=x.add(I);0>=R.l(T)&&(C=C.add(w),x=R),I=F(I,1),w=F(w,1)}return m=E(T,C.j(m)),new S(C,m)}for(C=p;0<=T.l(m);){for(w=Math.max(1,Math.floor(T.m()/m.m())),I=Math.ceil(Math.log(w)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),x=c(w),R=x.j(m);P(R)||0<R.l(T);)w-=I,x=c(w),R=x.j(m);A(x)&&(x=g),C=C.add(x),T=E(T,R)}return new S(C,T)}t.A=function(T){return O(this,T).h},t.and=function(T){for(var m=Math.max(this.g.length,T.g.length),w=[],I=0;I<m;I++)w[I]=this.i(I)&T.i(I);return new o(w,this.h&T.h)},t.or=function(T){for(var m=Math.max(this.g.length,T.g.length),w=[],I=0;I<m;I++)w[I]=this.i(I)|T.i(I);return new o(w,this.h|T.h)},t.xor=function(T){for(var m=Math.max(this.g.length,T.g.length),w=[],I=0;I<m;I++)w[I]=this.i(I)^T.i(I);return new o(w,this.h^T.h)};function B(T){for(var m=T.g.length+1,w=[],I=0;I<m;I++)w[I]=T.i(I)<<1|T.i(I-1)>>>31;return new o(w,T.h)}function F(T,m){var w=m>>5;m%=32;for(var I=T.g.length-w,C=[],x=0;x<I;x++)C[x]=0<m?T.i(x+w)>>>m|T.i(x+w+1)<<32-m:T.i(x+w);return new o(C,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,yE=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,Hi=o}).apply(typeof tv<"u"?tv:typeof self<"u"?self:typeof window<"u"?window:{});var hu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var vE,_E,fa,wE,Du,Ef,EE,TE,IE;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,f){return a==Array.prototype||a==Object.prototype||(a[h]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof hu=="object"&&hu];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var f=r;a=a.split(".");for(var y=0;y<a.length-1;y++){var L=a[y];if(!(L in f))break e;f=f[L]}a=a[a.length-1],y=f[a],h=h(y),h!=y&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}function s(a,h){a instanceof String&&(a+="");var f=0,y=!1,L={next:function(){if(!y&&f<a.length){var V=f++;return{value:h(V,a[V]),done:!1}}return y=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}i("Array.prototype.values",function(a){return a||function(){return s(this,function(h,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function c(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function d(a,h,f){return a.call.apply(a.bind,arguments)}function p(a,h,f){if(!a)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,y),a.apply(h,L)}}return function(){return a.apply(h,arguments)}}function g(a,h,f){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,g.apply(null,arguments)}function v(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var y=f.slice();return y.push.apply(y,arguments),a.apply(this,y)}}function A(a,h){function f(){}f.prototype=h.prototype,a.aa=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(y,L,V){for(var K=Array(arguments.length-2),Ne=2;Ne<arguments.length;Ne++)K[Ne-2]=arguments[Ne];return h.prototype[L].apply(y,K)}}function P(a){const h=a.length;if(0<h){const f=Array(h);for(let y=0;y<h;y++)f[y]=a[y];return f}return[]}function b(a,h){for(let f=1;f<arguments.length;f++){const y=arguments[f];if(u(y)){const L=a.length||0,V=y.length||0;a.length=L+V;for(let K=0;K<V;K++)a[L+K]=y[K]}else a.push(y)}}class E{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function _(a){return/^[\s\xa0]*$/.test(a)}function S(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function O(a){return O[" "](a),a}O[" "]=function(){};var B=S().indexOf("Gecko")!=-1&&!(S().toLowerCase().indexOf("webkit")!=-1&&S().indexOf("Edge")==-1)&&!(S().indexOf("Trident")!=-1||S().indexOf("MSIE")!=-1)&&S().indexOf("Edge")==-1;function F(a,h,f){for(const y in a)h.call(f,a[y],y,a)}function T(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function m(a){const h={};for(const f in a)h[f]=a[f];return h}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(a,h){let f,y;for(let L=1;L<arguments.length;L++){y=arguments[L];for(f in y)a[f]=y[f];for(let V=0;V<w.length;V++)f=w[V],Object.prototype.hasOwnProperty.call(y,f)&&(a[f]=y[f])}}function C(a){var h=1;a=a.split(":");const f=[];for(;0<h&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function x(a){l.setTimeout(()=>{throw a},0)}function R(){var a=X;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class Te{constructor(){this.h=this.g=null}add(h,f){const y=Rt.get();y.set(h,f),this.h?this.h.next=y:this.g=y,this.h=y}}var Rt=new E(()=>new tn,a=>a.reset());class tn{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let qt,G=!1,X=new Te,ae=()=>{const a=l.Promise.resolve(void 0);qt=()=>{a.then(Ae)}};var Ae=()=>{for(var a;a=R();){try{a.h.call(a.g)}catch(f){x(f)}var h=Rt;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}G=!1};function ve(){this.s=this.s,this.C=this.C}ve.prototype.s=!1,ve.prototype.ma=function(){this.s||(this.s=!0,this.N())},ve.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Re(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}Re.prototype.h=function(){this.defaultPrevented=!0};var At=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,h),l.removeEventListener("test",f,h)}catch{}return a}();function Ft(a,h){if(Re.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,y=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(B){e:{try{O(h.nodeName);var L=!0;break e}catch{}L=!1}L||(h=null)}}else f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement);this.relatedTarget=h,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:st[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Ft.aa.h.call(this)}}A(Ft,Re);var st={2:"touch",3:"pen",4:"mouse"};Ft.prototype.h=function(){Ft.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var gt="closure_listenable_"+(1e6*Math.random()|0),rr=0;function vh(a,h,f,y,L){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!y,this.ha=L,this.key=++rr,this.da=this.fa=!1}function ir(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function ps(a){this.src=a,this.g={},this.h=0}ps.prototype.add=function(a,h,f,y,L){var V=a.toString();a=this.g[V],a||(a=this.g[V]=[],this.h++);var K=No(a,h,y,L);return-1<K?(h=a[K],f||(h.fa=!1)):(h=new vh(h,this.src,V,!!y,L),h.fa=f,a.push(h)),h};function ko(a,h){var f=h.type;if(f in a.g){var y=a.g[f],L=Array.prototype.indexOf.call(y,h,void 0),V;(V=0<=L)&&Array.prototype.splice.call(y,L,1),V&&(ir(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function No(a,h,f,y){for(var L=0;L<a.length;++L){var V=a[L];if(!V.da&&V.listener==h&&V.capture==!!f&&V.ha==y)return L}return-1}var ot="closure_lm_"+(1e6*Math.random()|0),$n={};function Do(a,h,f,y,L){if(Array.isArray(h)){for(var V=0;V<h.length;V++)Do(a,h[V],f,y,L);return null}return f=Nl(f),a&&a[gt]?a.K(h,f,c(y)?!!y.capture:!!y,L):_h(a,h,f,!1,y,L)}function _h(a,h,f,y,L,V){if(!h)throw Error("Invalid event type");var K=c(L)?!!L.capture:!!L,Ne=Oo(a);if(Ne||(a[ot]=Ne=new ps(a)),f=Ne.add(h,f,y,K,V),f.proxy)return f;if(y=sr(),f.proxy=y,y.src=a,y.listener=f,a.addEventListener)At||(L=K),L===void 0&&(L=!1),a.addEventListener(h.toString(),y,L);else if(a.attachEvent)a.attachEvent(bo(h.toString()),y);else if(a.addListener&&a.removeListener)a.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return f}function sr(){function a(f){return h.call(a.src,a.listener,f)}const h=wh;return a}function kl(a,h,f,y,L){if(Array.isArray(h))for(var V=0;V<h.length;V++)kl(a,h[V],f,y,L);else y=c(y)?!!y.capture:!!y,f=Nl(f),a&&a[gt]?(a=a.i,h=String(h).toString(),h in a.g&&(V=a.g[h],f=No(V,f,y,L),-1<f&&(ir(V[f]),Array.prototype.splice.call(V,f,1),V.length==0&&(delete a.g[h],a.h--)))):a&&(a=Oo(a))&&(h=a.g[h.toString()],a=-1,h&&(a=No(h,f,y,L)),(f=-1<a?h[a]:null)&&xo(f))}function xo(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[gt])ko(h.i,a);else{var f=a.type,y=a.proxy;h.removeEventListener?h.removeEventListener(f,y,a.capture):h.detachEvent?h.detachEvent(bo(f),y):h.addListener&&h.removeListener&&h.removeListener(y),(f=Oo(h))?(ko(f,a),f.h==0&&(f.src=null,h[ot]=null)):ir(a)}}}function bo(a){return a in $n?$n[a]:$n[a]="on"+a}function wh(a,h){if(a.da)a=!0;else{h=new Ft(h,this);var f=a.listener,y=a.ha||a.src;a.fa&&xo(a),a=f.call(y,h)}return a}function Oo(a){return a=a[ot],a instanceof ps?a:null}var Lo="__closure_events_fn_"+(1e9*Math.random()>>>0);function Nl(a){return typeof a=="function"?a:(a[Lo]||(a[Lo]=function(h){return a.handleEvent(h)}),a[Lo])}function je(){ve.call(this),this.i=new ps(this),this.M=this,this.F=null}A(je,ve),je.prototype[gt]=!0,je.prototype.removeEventListener=function(a,h,f,y){kl(this,a,h,f,y)};function Ye(a,h){var f,y=a.F;if(y)for(f=[];y;y=y.F)f.push(y);if(a=a.M,y=h.type||h,typeof h=="string")h=new Re(h,a);else if(h instanceof Re)h.target=h.target||a;else{var L=h;h=new Re(y,a),I(h,L)}if(L=!0,f)for(var V=f.length-1;0<=V;V--){var K=h.g=f[V];L=Ei(K,y,!0,h)&&L}if(K=h.g=a,L=Ei(K,y,!0,h)&&L,L=Ei(K,y,!1,h)&&L,f)for(V=0;V<f.length;V++)K=h.g=f[V],L=Ei(K,y,!1,h)&&L}je.prototype.N=function(){if(je.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var f=a.g[h],y=0;y<f.length;y++)ir(f[y]);delete a.g[h],a.h--}}this.F=null},je.prototype.K=function(a,h,f,y){return this.i.add(String(a),h,!1,f,y)},je.prototype.L=function(a,h,f,y){return this.i.add(String(a),h,!0,f,y)};function Ei(a,h,f,y){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var L=!0,V=0;V<h.length;++V){var K=h[V];if(K&&!K.da&&K.capture==f){var Ne=K.listener,yt=K.ha||K.src;K.fa&&ko(a.i,K),L=Ne.call(yt,y)!==!1&&L}}return L&&!y.defaultPrevented}function ms(a,h,f){if(typeof a=="function")f&&(a=g(a,f));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function Cn(a){a.g=ms(()=>{a.g=null,a.i&&(a.i=!1,Cn(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class Pn extends ve{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Cn(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function kr(a){ve.call(this),this.h=a,this.g={}}A(kr,ve);var Ti=[];function Dl(a){F(a.g,function(h,f){this.g.hasOwnProperty(f)&&xo(h)},a),a.g={}}kr.prototype.N=function(){kr.aa.N.call(this),Dl(this)},kr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var pn=l.JSON.stringify,xl=l.JSON.parse,bl=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function gs(){}gs.prototype.h=null;function Ol(a){return a.h||(a.h=a.i())}function Mo(){}var Hn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ys(){Re.call(this,"d")}A(ys,Re);function Ii(){Re.call(this,"c")}A(Ii,Re);var mn={},vs=null;function _s(){return vs=vs||new je}mn.La="serverreachability";function Vo(a){Re.call(this,mn.La,a)}A(Vo,Re);function Si(a){const h=_s();Ye(h,new Vo(h))}mn.STAT_EVENT="statevent";function Uo(a,h){Re.call(this,mn.STAT_EVENT,a),this.stat=h}A(Uo,Re);function et(a){const h=_s();Ye(h,new Uo(h,a))}mn.Ma="timingevent";function Ri(a,h){Re.call(this,mn.Ma,a),this.size=h}A(Ri,Re);function Nr(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function Ai(){this.g=!0}Ai.prototype.xa=function(){this.g=!1};function Eh(a,h,f,y,L,V){a.info(function(){if(a.g)if(V)for(var K="",Ne=V.split("&"),yt=0;yt<Ne.length;yt++){var Ie=Ne[yt].split("=");if(1<Ie.length){var kt=Ie[0];Ie=Ie[1];var Nt=kt.split("_");K=2<=Nt.length&&Nt[1]=="type"?K+(kt+"="+Ie+"&"):K+(kt+"=redacted&")}}else K=null;else K=V;return"XMLHTTP REQ ("+y+") [attempt "+L+"]: "+h+`
`+f+`
`+K})}function k(a,h,f,y,L,V,K){a.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+L+"]: "+h+`
`+f+`
`+V+" "+K})}function N(a,h,f,y){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+z(a,f)+(y?" "+y:"")})}function M(a,h){a.info(function(){return"TIMEOUT: "+h})}Ai.prototype.info=function(){};function z(a,h){if(!a.g)return h;if(!h)return null;try{var f=JSON.parse(h);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var y=f[a];if(!(2>y.length)){var L=y[1];if(Array.isArray(L)&&!(1>L.length)){var V=L[0];if(V!="noop"&&V!="stop"&&V!="close")for(var K=1;K<L.length;K++)L[K]=""}}}}return pn(f)}catch{return h}}var Q={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ne={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},se;function q(){}A(q,gs),q.prototype.g=function(){return new XMLHttpRequest},q.prototype.i=function(){return{}},se=new q;function te(a,h,f,y){this.j=a,this.i=h,this.l=f,this.R=y||1,this.U=new kr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new J}function J(){this.i=null,this.g="",this.h=!1}var ee={},ge={};function we(a,h,f){a.L=1,a.v=Fl(or(h)),a.m=f,a.P=!0,Pe(a,null)}function Pe(a,h){a.F=Date.now(),Oe(a),a.A=or(a.v);var f=a.A,y=a.R;Array.isArray(y)||(y=[String(y)]),Km(f.i,"t",y),a.C=0,f=a.j.J,a.h=new J,a.g=hg(a.j,f?h:null,!a.m),0<a.O&&(a.M=new Pn(g(a.Y,a,a.g),a.O)),h=a.U,f=a.g,y=a.ca;var L="readystatechange";Array.isArray(L)||(L&&(Ti[0]=L.toString()),L=Ti);for(var V=0;V<L.length;V++){var K=Do(f,L[V],y||h.handleEvent,!1,h.h||h);if(!K)break;h.g[K.key]=K}h=a.H?m(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),Si(),Eh(a.i,a.u,a.A,a.l,a.R,a.m)}te.prototype.ca=function(a){a=a.target;const h=this.M;h&&ar(a)==3?h.j():this.Y(a)},te.prototype.Y=function(a){try{if(a==this.g)e:{const Nt=ar(this.g);var h=this.g.Ba();const Ts=this.g.Z();if(!(3>Nt)&&(Nt!=3||this.g&&(this.h.h||this.g.oa()||eg(this.g)))){this.J||Nt!=4||h==7||(h==8||0>=Ts?Si(3):Si(2)),nn(this);var f=this.g.Z();this.X=f;t:if(pe(this)){var y=eg(this.g);a="";var L=y.length,V=ar(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ct(this),gn(this);var K="";break t}this.h.i=new l.TextDecoder}for(h=0;h<L;h++)this.h.h=!0,a+=this.h.i.decode(y[h],{stream:!(V&&h==L-1)});y.length=0,this.h.g+=a,this.C=0,K=this.h.g}else K=this.g.oa();if(this.o=f==200,k(this.i,this.u,this.A,this.l,this.R,Nt,f),this.o){if(this.T&&!this.K){t:{if(this.g){var Ne,yt=this.g;if((Ne=yt.g?yt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(Ne)){var Ie=Ne;break t}}Ie=null}if(f=Ie)N(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,xr(this,f);else{this.o=!1,this.s=3,et(12),Ct(this),gn(this);break e}}if(this.P){f=!0;let Dn;for(;!this.J&&this.C<K.length;)if(Dn=tt(this,K),Dn==ge){Nt==4&&(this.s=4,et(14),f=!1),N(this.i,this.l,null,"[Incomplete Response]");break}else if(Dn==ee){this.s=4,et(15),N(this.i,this.l,K,"[Invalid Chunk]"),f=!1;break}else N(this.i,this.l,Dn,null),xr(this,Dn);if(pe(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Nt!=4||K.length!=0||this.h.h||(this.s=1,et(16),f=!1),this.o=this.o&&f,!f)N(this.i,this.l,K,"[Invalid Chunked Response]"),Ct(this),gn(this);else if(0<K.length&&!this.W){this.W=!0;var kt=this.j;kt.g==this&&kt.ba&&!kt.M&&(kt.j.info("Great, no buffering proxy detected. Bytes received: "+K.length),Rh(kt),kt.M=!0,et(11))}}else N(this.i,this.l,K,null),xr(this,K);Nt==4&&Ct(this),this.o&&!this.J&&(Nt==4?ag(this.j,this):(this.o=!1,Oe(this)))}else RS(this.g),f==400&&0<K.indexOf("Unknown SID")?(this.s=3,et(12)):(this.s=0,et(13)),Ct(this),gn(this)}}}catch{}finally{}};function pe(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function tt(a,h){var f=a.C,y=h.indexOf(`
`,f);return y==-1?ge:(f=Number(h.substring(f,y)),isNaN(f)?ee:(y+=1,y+f>h.length?ge:(h=h.slice(y,y+f),a.C=y+f,h)))}te.prototype.cancel=function(){this.J=!0,Ct(this)};function Oe(a){a.S=Date.now()+a.I,Dr(a,a.I)}function Dr(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Nr(g(a.ba,a),h)}function nn(a){a.B&&(l.clearTimeout(a.B),a.B=null)}te.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(M(this.i,this.A),this.L!=2&&(Si(),et(17)),Ct(this),this.s=2,gn(this)):Dr(this,this.S-a)};function gn(a){a.j.G==0||a.J||ag(a.j,a)}function Ct(a){nn(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,Dl(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function xr(a,h){try{var f=a.j;if(f.G!=0&&(f.g==a||ue(f.h,a))){if(!a.K&&ue(f.h,a)&&f.G==3){try{var y=f.Da.g.parse(h)}catch{y=null}if(Array.isArray(y)&&y.length==3){var L=y;if(L[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)Hl(f),zl(f);else break e;Sh(f),et(18)}}else f.za=L[1],0<f.za-f.T&&37500>L[2]&&f.F&&f.v==0&&!f.C&&(f.C=Nr(g(f.Za,f),6e3));if(1>=ki(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else Di(f,11)}else if((a.K||f.g==a)&&Hl(f),!_(h))for(L=f.Da.g.parse(h),h=0;h<L.length;h++){let Ie=L[h];if(f.T=Ie[0],Ie=Ie[1],f.G==2)if(Ie[0]=="c"){f.K=Ie[1],f.ia=Ie[2];const kt=Ie[3];kt!=null&&(f.la=kt,f.j.info("VER="+f.la));const Nt=Ie[4];Nt!=null&&(f.Aa=Nt,f.j.info("SVER="+f.Aa));const Ts=Ie[5];Ts!=null&&typeof Ts=="number"&&0<Ts&&(y=1.5*Ts,f.L=y,f.j.info("backChannelRequestTimeoutMs_="+y)),y=f;const Dn=a.g;if(Dn){const ql=Dn.g?Dn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ql){var V=y.h;V.g||ql.indexOf("spdy")==-1&&ql.indexOf("quic")==-1&&ql.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(xe(V,V.h),V.h=null))}if(y.D){const Ah=Dn.g?Dn.g.getResponseHeader("X-HTTP-Session-Id"):null;Ah&&(y.ya=Ah,Me(y.I,y.D,Ah))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),y=f;var K=a;if(y.qa=cg(y,y.J?y.ia:null,y.W),K.K){Pt(y.h,K);var Ne=K,yt=y.L;yt&&(Ne.I=yt),Ne.B&&(nn(Ne),Oe(Ne)),y.g=K}else sg(y);0<f.i.length&&$l(f)}else Ie[0]!="stop"&&Ie[0]!="close"||Di(f,7);else f.G==3&&(Ie[0]=="stop"||Ie[0]=="close"?Ie[0]=="stop"?Di(f,7):Ih(f):Ie[0]!="noop"&&f.l&&f.l.ta(Ie),f.v=0)}}Si(4)}catch{}}var kn=class{constructor(a,h){this.g=a,this.map=h}};function Ci(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Pi(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function ki(a){return a.h?1:a.g?a.g.size:0}function ue(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function xe(a,h){a.g?a.g.add(h):a.h=h}function Pt(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Ci.prototype.cancel=function(){if(this.i=Le(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Le(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.D);return h}return P(a.i)}function Nn(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var h=[],f=a.length,y=0;y<f;y++)h.push(a[y]);return h}h=[],f=0;for(y in a)h[f++]=a[y];return h}function Ll(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var h=[];a=a.length;for(var f=0;f<a;f++)h.push(f);return h}h=[],f=0;for(const y in a)h[f++]=y;return h}}}function Ml(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var f=Ll(a),y=Nn(a),L=y.length,V=0;V<L;V++)h.call(void 0,y[V],f&&f[V],a)}var zm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function dS(a,h){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var y=a[f].indexOf("="),L=null;if(0<=y){var V=a[f].substring(0,y);L=a[f].substring(y+1)}else V=a[f];h(V,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function Ni(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Ni){this.h=a.h,Vl(this,a.j),this.o=a.o,this.g=a.g,Ul(this,a.s),this.l=a.l;var h=a.i,f=new Bo;f.i=h.i,h.g&&(f.g=new Map(h.g),f.h=h.h),$m(this,f),this.m=a.m}else a&&(h=String(a).match(zm))?(this.h=!1,Vl(this,h[1]||"",!0),this.o=Fo(h[2]||""),this.g=Fo(h[3]||"",!0),Ul(this,h[4]),this.l=Fo(h[5]||"",!0),$m(this,h[6]||"",!0),this.m=Fo(h[7]||"")):(this.h=!1,this.i=new Bo(null,this.h))}Ni.prototype.toString=function(){var a=[],h=this.j;h&&a.push(jo(h,Hm,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(jo(h,Hm,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(jo(f,f.charAt(0)=="/"?mS:pS,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",jo(f,yS)),a.join("")};function or(a){return new Ni(a)}function Vl(a,h,f){a.j=f?Fo(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Ul(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function $m(a,h,f){h instanceof Bo?(a.i=h,vS(a.i,a.h)):(f||(h=jo(h,gS)),a.i=new Bo(h,a.h))}function Me(a,h,f){a.i.set(h,f)}function Fl(a){return Me(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Fo(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function jo(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,fS),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function fS(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Hm=/[#\/\?@]/g,pS=/[#\?:]/g,mS=/[#\?]/g,gS=/[#\?@]/g,yS=/#/g;function Bo(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function br(a){a.g||(a.g=new Map,a.h=0,a.i&&dS(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}t=Bo.prototype,t.add=function(a,h){br(this),this.i=null,a=ws(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function Wm(a,h){br(a),h=ws(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function qm(a,h){return br(a),h=ws(a,h),a.g.has(h)}t.forEach=function(a,h){br(this),this.g.forEach(function(f,y){f.forEach(function(L){a.call(h,L,y,this)},this)},this)},t.na=function(){br(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),f=[];for(let y=0;y<h.length;y++){const L=a[y];for(let V=0;V<L.length;V++)f.push(h[y])}return f},t.V=function(a){br(this);let h=[];if(typeof a=="string")qm(this,a)&&(h=h.concat(this.g.get(ws(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)h=h.concat(a[f])}return h},t.set=function(a,h){return br(this),this.i=null,a=ws(this,a),qm(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function Km(a,h,f){Wm(a,h),0<f.length&&(a.i=null,a.g.set(ws(a,h),P(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var f=0;f<h.length;f++){var y=h[f];const V=encodeURIComponent(String(y)),K=this.V(y);for(y=0;y<K.length;y++){var L=V;K[y]!==""&&(L+="="+encodeURIComponent(String(K[y]))),a.push(L)}}return this.i=a.join("&")};function ws(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function vS(a,h){h&&!a.j&&(br(a),a.i=null,a.g.forEach(function(f,y){var L=y.toLowerCase();y!=L&&(Wm(this,y),Km(this,L,f))},a)),a.j=h}function _S(a,h){const f=new Ai;if(l.Image){const y=new Image;y.onload=v(Or,f,"TestLoadImage: loaded",!0,h,y),y.onerror=v(Or,f,"TestLoadImage: error",!1,h,y),y.onabort=v(Or,f,"TestLoadImage: abort",!1,h,y),y.ontimeout=v(Or,f,"TestLoadImage: timeout",!1,h,y),l.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=a}else h(!1)}function wS(a,h){const f=new Ai,y=new AbortController,L=setTimeout(()=>{y.abort(),Or(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:y.signal}).then(V=>{clearTimeout(L),V.ok?Or(f,"TestPingServer: ok",!0,h):Or(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(L),Or(f,"TestPingServer: error",!1,h)})}function Or(a,h,f,y,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),y(f)}catch{}}function ES(){this.g=new bl}function TS(a,h,f){const y=f||"";try{Ml(a,function(L,V){let K=L;c(L)&&(K=pn(L)),h.push(y+V+"="+encodeURIComponent(K))})}catch(L){throw h.push(y+"type="+encodeURIComponent("_badmap")),L}}function zo(a){this.l=a.Ub||null,this.j=a.eb||!1}A(zo,gs),zo.prototype.g=function(){return new jl(this.l,this.j)},zo.prototype.i=function(a){return function(){return a}}({});function jl(a,h){je.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}A(jl,je),t=jl.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,Ho(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,$o(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ho(this)),this.g&&(this.readyState=3,Ho(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Gm(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Gm(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?$o(this):Ho(this),this.readyState==3&&Gm(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,$o(this))},t.Qa=function(a){this.g&&(this.response=a,$o(this))},t.ga=function(){this.g&&$o(this)};function $o(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Ho(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function Ho(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(jl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Qm(a){let h="";return F(a,function(f,y){h+=y,h+=":",h+=f,h+=`\r
`}),h}function Th(a,h,f){e:{for(y in f){var y=!1;break e}y=!0}y||(f=Qm(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):Me(a,h,f))}function Ge(a){je.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}A(Ge,je);var IS=/^https?$/i,SS=["POST","PUT"];t=Ge.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,f,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():se.g(),this.v=this.o?Ol(this.o):Ol(se),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(V){Xm(this,V);return}if(a=f||"",f=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var L in y)f.set(L,y[L]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const V of y.keys())f.set(V,y.get(V));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(f.keys()).find(V=>V.toLowerCase()=="content-type"),L=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(SS,h,void 0))||y||L||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,K]of f)this.g.setRequestHeader(V,K);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Zm(this),this.u=!0,this.g.send(a),this.u=!1}catch(V){Xm(this,V)}};function Xm(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,Ym(a),Bl(a)}function Ym(a){a.A||(a.A=!0,Ye(a,"complete"),Ye(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,Ye(this,"complete"),Ye(this,"abort"),Bl(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Bl(this,!0)),Ge.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Jm(this):this.bb())},t.bb=function(){Jm(this)};function Jm(a){if(a.h&&typeof o<"u"&&(!a.v[1]||ar(a)!=4||a.Z()!=2)){if(a.u&&ar(a)==4)ms(a.Ea,0,a);else if(Ye(a,"readystatechange"),ar(a)==4){a.h=!1;try{const K=a.Z();e:switch(K){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var y;if(y=K===0){var L=String(a.D).match(zm)[1]||null;!L&&l.self&&l.self.location&&(L=l.self.location.protocol.slice(0,-1)),y=!IS.test(L?L.toLowerCase():"")}f=y}if(f)Ye(a,"complete"),Ye(a,"success");else{a.m=6;try{var V=2<ar(a)?a.g.statusText:""}catch{V=""}a.l=V+" ["+a.Z()+"]",Ym(a)}}finally{Bl(a)}}}}function Bl(a,h){if(a.g){Zm(a);const f=a.g,y=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||Ye(a,"ready");try{f.onreadystatechange=y}catch{}}}function Zm(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function ar(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<ar(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),xl(h)}};function eg(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function RS(a){const h={};a=(a.g&&2<=ar(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<a.length;y++){if(_(a[y]))continue;var f=C(a[y]);const L=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const V=h[L]||[];h[L]=V,V.push(f)}T(h,function(y){return y.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Wo(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function tg(a){this.Aa=0,this.i=[],this.j=new Ai,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Wo("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Wo("baseRetryDelayMs",5e3,a),this.cb=Wo("retryDelaySeedMs",1e4,a),this.Wa=Wo("forwardChannelMaxRetries",2,a),this.wa=Wo("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Ci(a&&a.concurrentRequestLimit),this.Da=new ES,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=tg.prototype,t.la=8,t.G=1,t.connect=function(a,h,f,y){et(0),this.W=a,this.H=h||{},f&&y!==void 0&&(this.H.OSID=f,this.H.OAID=y),this.F=this.X,this.I=cg(this,null,this.W),$l(this)};function Ih(a){if(ng(a),a.G==3){var h=a.U++,f=or(a.I);if(Me(f,"SID",a.K),Me(f,"RID",h),Me(f,"TYPE","terminate"),qo(a,f),h=new te(a,a.j,h),h.L=2,h.v=Fl(or(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=h.v,f=!0),f||(h.g=hg(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Oe(h)}ug(a)}function zl(a){a.g&&(Rh(a),a.g.cancel(),a.g=null)}function ng(a){zl(a),a.u&&(l.clearTimeout(a.u),a.u=null),Hl(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function $l(a){if(!Pi(a.h)&&!a.s){a.s=!0;var h=a.Ga;qt||ae(),G||(qt(),G=!0),X.add(h,a),a.B=0}}function AS(a,h){return ki(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Nr(g(a.Ga,a,h),lg(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const L=new te(this,this.j,a);let V=this.o;if(this.S&&(V?(V=m(V),I(V,this.S)):V=this.S),this.m!==null||this.O||(L.H=V,V=null),this.P)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var y=this.i[f];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(h+=y,4096<h){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=ig(this,L,h),f=or(this.I),Me(f,"RID",a),Me(f,"CVER",22),this.D&&Me(f,"X-HTTP-Session-Id",this.D),qo(this,f),V&&(this.O?h="headers="+encodeURIComponent(String(Qm(V)))+"&"+h:this.m&&Th(f,this.m,V)),xe(this.h,L),this.Ua&&Me(f,"TYPE","init"),this.P?(Me(f,"$req",h),Me(f,"SID","null"),L.T=!0,we(L,f,null)):we(L,f,h),this.G=2}}else this.G==3&&(a?rg(this,a):this.i.length==0||Pi(this.h)||rg(this))};function rg(a,h){var f;h?f=h.l:f=a.U++;const y=or(a.I);Me(y,"SID",a.K),Me(y,"RID",f),Me(y,"AID",a.T),qo(a,y),a.m&&a.o&&Th(y,a.m,a.o),f=new te(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),h&&(a.i=h.D.concat(a.i)),h=ig(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),xe(a.h,f),we(f,y,h)}function qo(a,h){a.H&&F(a.H,function(f,y){Me(h,y,f)}),a.l&&Ml({},function(f,y){Me(h,y,f)})}function ig(a,h,f){f=Math.min(a.i.length,f);var y=a.l?g(a.l.Na,a.l,a):null;e:{var L=a.i;let V=-1;for(;;){const K=["count="+f];V==-1?0<f?(V=L[0].g,K.push("ofs="+V)):V=0:K.push("ofs="+V);let Ne=!0;for(let yt=0;yt<f;yt++){let Ie=L[yt].g;const kt=L[yt].map;if(Ie-=V,0>Ie)V=Math.max(0,L[yt].g-100),Ne=!1;else try{TS(kt,K,"req"+Ie+"_")}catch{y&&y(kt)}}if(Ne){y=K.join("&");break e}}}return a=a.i.splice(0,f),h.D=a,y}function sg(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;qt||ae(),G||(qt(),G=!0),X.add(h,a),a.v=0}}function Sh(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Nr(g(a.Fa,a),lg(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,og(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Nr(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,et(10),zl(this),og(this))};function Rh(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function og(a){a.g=new te(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=or(a.qa);Me(h,"RID","rpc"),Me(h,"SID",a.K),Me(h,"AID",a.T),Me(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&Me(h,"TO",a.ja),Me(h,"TYPE","xmlhttp"),qo(a,h),a.m&&a.o&&Th(h,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=Fl(or(h)),f.m=null,f.P=!0,Pe(f,a)}t.Za=function(){this.C!=null&&(this.C=null,zl(this),Sh(this),et(19))};function Hl(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function ag(a,h){var f=null;if(a.g==h){Hl(a),Rh(a),a.g=null;var y=2}else if(ue(a.h,h))f=h.D,Pt(a.h,h),y=1;else return;if(a.G!=0){if(h.o)if(y==1){f=h.m?h.m.length:0,h=Date.now()-h.F;var L=a.B;y=_s(),Ye(y,new Ri(y,f)),$l(a)}else sg(a);else if(L=h.s,L==3||L==0&&0<h.X||!(y==1&&AS(a,h)||y==2&&Sh(a)))switch(f&&0<f.length&&(h=a.h,h.i=h.i.concat(f)),L){case 1:Di(a,5);break;case 4:Di(a,10);break;case 3:Di(a,6);break;default:Di(a,2)}}}function lg(a,h){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*h}function Di(a,h){if(a.j.info("Error code "+h),h==2){var f=g(a.fb,a),y=a.Xa;const L=!y;y=new Ni(y||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Vl(y,"https"),Fl(y),L?_S(y.toString(),f):wS(y.toString(),f)}else et(2);a.G=0,a.l&&a.l.sa(h),ug(a),ng(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),et(2)):(this.j.info("Failed to ping google.com"),et(1))};function ug(a){if(a.G=0,a.ka=[],a.l){const h=Le(a.h);(h.length!=0||a.i.length!=0)&&(b(a.ka,h),b(a.ka,a.i),a.h.i.length=0,P(a.i),a.i.length=0),a.l.ra()}}function cg(a,h,f){var y=f instanceof Ni?or(f):new Ni(f);if(y.g!="")h&&(y.g=h+"."+y.g),Ul(y,y.s);else{var L=l.location;y=L.protocol,h=h?h+"."+L.hostname:L.hostname,L=+L.port;var V=new Ni(null);y&&Vl(V,y),h&&(V.g=h),L&&Ul(V,L),f&&(V.l=f),y=V}return f=a.D,h=a.ya,f&&h&&Me(y,f,h),Me(y,"VER",a.la),qo(a,y),y}function hg(a,h,f){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Ge(new zo({eb:f})):new Ge(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function dg(){}t=dg.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Wl(){}Wl.prototype.g=function(a,h){return new rn(a,h)};function rn(a,h){je.call(this),this.g=new tg(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!_(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!_(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Es(this)}A(rn,je),rn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},rn.prototype.close=function(){Ih(this.g)},rn.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=pn(a),a=f);h.i.push(new kn(h.Ya++,a)),h.G==3&&$l(h)},rn.prototype.N=function(){this.g.l=null,delete this.j,Ih(this.g),delete this.g,rn.aa.N.call(this)};function fg(a){ys.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}A(fg,ys);function pg(){Ii.call(this),this.status=1}A(pg,Ii);function Es(a){this.g=a}A(Es,dg),Es.prototype.ua=function(){Ye(this.g,"a")},Es.prototype.ta=function(a){Ye(this.g,new fg(a))},Es.prototype.sa=function(a){Ye(this.g,new pg)},Es.prototype.ra=function(){Ye(this.g,"b")},Wl.prototype.createWebChannel=Wl.prototype.g,rn.prototype.send=rn.prototype.o,rn.prototype.open=rn.prototype.m,rn.prototype.close=rn.prototype.close,IE=function(){return new Wl},TE=function(){return _s()},EE=mn,Ef={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Q.NO_ERROR=0,Q.TIMEOUT=8,Q.HTTP_ERROR=6,Du=Q,ne.COMPLETE="complete",wE=ne,Mo.EventType=Hn,Hn.OPEN="a",Hn.CLOSE="b",Hn.ERROR="c",Hn.MESSAGE="d",je.prototype.listen=je.prototype.K,fa=Mo,_E=zo,Ge.prototype.listenOnce=Ge.prototype.L,Ge.prototype.getLastError=Ge.prototype.Ka,Ge.prototype.getLastErrorCode=Ge.prototype.Ba,Ge.prototype.getStatus=Ge.prototype.Z,Ge.prototype.getResponseJson=Ge.prototype.Oa,Ge.prototype.getResponseText=Ge.prototype.oa,Ge.prototype.send=Ge.prototype.ea,Ge.prototype.setWithCredentials=Ge.prototype.Ha,vE=Ge}).apply(typeof hu<"u"?hu:typeof self<"u"?self:typeof window<"u"?window:{});const nv="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ot.UNAUTHENTICATED=new Ot(null),Ot.GOOGLE_CREDENTIALS=new Ot("google-credentials-uid"),Ot.FIRST_PARTY=new Ot("first-party-uid"),Ot.MOCK_USER=new Ot("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let To="10.13.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ji=new Yc("@firebase/firestore");function ia(){return Ji.logLevel}function Z(t,...e){if(Ji.logLevel<=ye.DEBUG){const n=e.map(Hp);Ji.debug(`Firestore (${To}): ${t}`,...n)}}function Rr(t,...e){if(Ji.logLevel<=ye.ERROR){const n=e.map(Hp);Ji.error(`Firestore (${To}): ${t}`,...n)}}function uo(t,...e){if(Ji.logLevel<=ye.WARN){const n=e.map(Hp);Ji.warn(`Firestore (${To}): ${t}`,...n)}}function Hp(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(t="Unexpected state"){const e=`FIRESTORE (${To}) INTERNAL ASSERTION FAILED: `+t;throw Rr(e),new Error(e)}function De(t,e){t||le()}function he(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class re extends An{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SE{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class gk{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ot.UNAUTHENTICATED))}shutdown(){}}class yk{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class vk{constructor(e){this.t=e,this.currentUser=Ot.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new ai;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new ai,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{Z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(Z("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new ai)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(De(typeof r.accessToken=="string"),new SE(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return De(e===null||typeof e=="string"),new Ot(e)}}class _k{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Ot.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class wk{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new _k(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Ot.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ek{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Tk{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&Z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,Z("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{Z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):Z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(De(typeof n.token=="string"),this.R=n.token,new Ek(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ik(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RE{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=Ik(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function Se(t,e){return t<e?-1:t>e?1:0}function co(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new re(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new re(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new re(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new re(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ct.fromMillis(Date.now())}static fromDate(e){return ct.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new ct(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Se(this.nanoseconds,e.nanoseconds):Se(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ce(e)}static min(){return new ce(new ct(0,0))}static max(){return new ce(new ct(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(e,n,r){n===void 0?n=0:n>e.length&&le(),r===void 0?r=e.length-n:r>e.length-n&&le(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return el.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof el?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Xe extends el{construct(e,n,r){return new Xe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new re(H.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Xe(n)}static emptyPath(){return new Xe([])}}const Sk=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class wt extends el{construct(e,n,r){return new wt(e,n,r)}static isValidIdentifier(e){return Sk.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),wt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new wt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new re(H.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new re(H.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new re(H.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new re(H.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new wt(n)}static emptyPath(){return new wt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e){this.path=e}static fromPath(e){return new ie(Xe.fromString(e))}static fromName(e){return new ie(Xe.fromString(e).popFirst(5))}static empty(){return new ie(Xe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Xe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Xe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ie(new Xe(e.slice()))}}function Rk(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ce.fromTimestamp(r===1e9?new ct(n+1,0):new ct(n,r));return new hi(i,ie.empty(),e)}function Ak(t){return new hi(t.readTime,t.key,-1)}class hi{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new hi(ce.min(),ie.empty(),-1)}static max(){return new hi(ce.max(),ie.empty(),-1)}}function Ck(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ie.comparator(t.documentKey,e.documentKey),n!==0?n:Se(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pk="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class kk{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vl(t){if(t.code!==H.FAILED_PRECONDITION||t.message!==Pk)throw t;Z("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&le(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new $((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof $?n:$.resolve(n)}catch(n){return $.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):$.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):$.reject(n)}static resolve(e){return new $((n,r)=>{n(e)})}static reject(e){return new $((n,r)=>{r(e)})}static waitFor(e){return new $((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=$.resolve(!1);for(const r of e)n=n.next(i=>i?$.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new $((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(d=>{o[c]=d,++l,l===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new $((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function Nk(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function _l(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wp{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Wp.oe=-1;function Zc(t){return t==null}function pc(t){return t===0&&1/t==-1/0}function Dk(t){return typeof t=="number"&&Number.isInteger(t)&&!pc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rv(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Io(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function AE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e,n){this.comparator=e,this.root=n||_t.EMPTY}insert(e,n){return new qe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,_t.BLACK,null,null))}remove(e){return new qe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,_t.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new du(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new du(this.root,e,this.comparator,!1)}getReverseIterator(){return new du(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new du(this.root,e,this.comparator,!0)}}class du{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class _t{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??_t.RED,this.left=i??_t.EMPTY,this.right=s??_t.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new _t(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return _t.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return _t.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,_t.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,_t.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw le();const e=this.left.check();if(e!==this.right.check())throw le();return e+(this.isRed()?0:1)}}_t.EMPTY=null,_t.RED=!0,_t.BLACK=!1;_t.EMPTY=new class{constructor(){this.size=0}get key(){throw le()}get value(){throw le()}get color(){throw le()}get left(){throw le()}get right(){throw le()}copy(e,n,r,i,s){return this}insert(e,n,r){return new _t(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e){this.comparator=e,this.data=new qe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new iv(this.data.getIterator())}getIteratorFrom(e){return new iv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Tt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Tt(this.comparator);return n.data=e,n}}class iv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(e){this.fields=e,e.sort(wt.comparator)}static empty(){return new Vn([])}unionWith(e){let n=new Tt(wt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Vn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return co(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new CE("Invalid base64 string: "+s):s}}(e);return new St(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new St(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Se(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}St.EMPTY_BYTE_STRING=new St("");const xk=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function di(t){if(De(!!t),typeof t=="string"){let e=0;const n=xk.exec(t);if(De(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Je(t.seconds),nanos:Je(t.nanos)}}function Je(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Zi(t){return typeof t=="string"?St.fromBase64String(t):St.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qp(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Kp(t){const e=t.mapValue.fields.__previous_value__;return qp(e)?Kp(e):e}function tl(t){const e=di(t.mapValue.fields.__local_write_time__.timestampValue);return new ct(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bk{constructor(e,n,r,i,s,o,l,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c}}class nl{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new nl("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof nl&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fu={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function es(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?qp(t)?4:Lk(t)?9007199254740991:Ok(t)?10:11:le()}function tr(t,e){if(t===e)return!0;const n=es(t);if(n!==es(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return tl(t).isEqual(tl(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=di(i.timestampValue),l=di(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Zi(i.bytesValue).isEqual(Zi(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Je(i.geoPointValue.latitude)===Je(s.geoPointValue.latitude)&&Je(i.geoPointValue.longitude)===Je(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Je(i.integerValue)===Je(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Je(i.doubleValue),l=Je(s.doubleValue);return o===l?pc(o)===pc(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return co(t.arrayValue.values||[],e.arrayValue.values||[],tr);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(rv(o)!==rv(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!tr(o[u],l[u])))return!1;return!0}(t,e);default:return le()}}function rl(t,e){return(t.values||[]).find(n=>tr(n,e))!==void 0}function ho(t,e){if(t===e)return 0;const n=es(t),r=es(e);if(n!==r)return Se(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Se(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Je(s.integerValue||s.doubleValue),u=Je(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return sv(t.timestampValue,e.timestampValue);case 4:return sv(tl(t),tl(e));case 5:return Se(t.stringValue,e.stringValue);case 6:return function(s,o){const l=Zi(s),u=Zi(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const d=Se(l[c],u[c]);if(d!==0)return d}return Se(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=Se(Je(s.latitude),Je(o.latitude));return l!==0?l:Se(Je(s.longitude),Je(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return ov(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,c,d;const p=s.fields||{},g=o.fields||{},v=(l=p.value)===null||l===void 0?void 0:l.arrayValue,A=(u=g.value)===null||u===void 0?void 0:u.arrayValue,P=Se(((c=v==null?void 0:v.values)===null||c===void 0?void 0:c.length)||0,((d=A==null?void 0:A.values)===null||d===void 0?void 0:d.length)||0);return P!==0?P:ov(v,A)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===fu.mapValue&&o===fu.mapValue)return 0;if(s===fu.mapValue)return 1;if(o===fu.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let p=0;p<u.length&&p<d.length;++p){const g=Se(u[p],d[p]);if(g!==0)return g;const v=ho(l[u[p]],c[d[p]]);if(v!==0)return v}return Se(u.length,d.length)}(t.mapValue,e.mapValue);default:throw le()}}function sv(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Se(t,e);const n=di(t),r=di(e),i=Se(n.seconds,r.seconds);return i!==0?i:Se(n.nanos,r.nanos)}function ov(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=ho(n[i],r[i]);if(s)return s}return Se(n.length,r.length)}function fo(t){return Tf(t)}function Tf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=di(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Zi(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ie.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Tf(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Tf(n.fields[o])}`;return i+"}"}(t.mapValue):le()}function If(t){return!!t&&"integerValue"in t}function Gp(t){return!!t&&"arrayValue"in t}function av(t){return!!t&&"nullValue"in t}function lv(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function xu(t){return!!t&&"mapValue"in t}function Ok(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Ra(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Io(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ra(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ra(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Lk(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(e){this.value=e}static empty(){return new _n({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!xu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ra(n)}setAll(e){let n=wt.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=Ra(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());xu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return tr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];xu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Io(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new _n(Ra(this.value))}}function PE(t){const e=[];return Io(t.fields,(n,r)=>{const i=new wt([n]);if(xu(r)){const s=PE(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Vn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Mt(e,0,ce.min(),ce.min(),ce.min(),_n.empty(),0)}static newFoundDocument(e,n,r,i){return new Mt(e,1,n,ce.min(),r,i,0)}static newNoDocument(e,n){return new Mt(e,2,n,ce.min(),ce.min(),_n.empty(),0)}static newUnknownDocument(e,n){return new Mt(e,3,n,ce.min(),ce.min(),_n.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ce.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=_n.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=_n.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ce.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Mt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Mt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(e,n){this.position=e,this.inclusive=n}}function uv(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=ie.comparator(ie.fromName(o.referenceValue),n.key):r=ho(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function cv(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!tr(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(e,n="asc"){this.field=e,this.dir=n}}function Mk(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kE{}class lt extends kE{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Uk(e,n,r):n==="array-contains"?new Bk(e,r):n==="in"?new zk(e,r):n==="not-in"?new $k(e,r):n==="array-contains-any"?new Hk(e,r):new lt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Fk(e,r):new jk(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ho(n,this.value)):n!==null&&es(this.value)===es(n)&&this.matchesComparison(ho(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return le()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class nr extends kE{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new nr(e,n)}matches(e){return NE(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function NE(t){return t.op==="and"}function DE(t){return Vk(t)&&NE(t)}function Vk(t){for(const e of t.filters)if(e instanceof nr)return!1;return!0}function Sf(t){if(t instanceof lt)return t.field.canonicalString()+t.op.toString()+fo(t.value);if(DE(t))return t.filters.map(e=>Sf(e)).join(",");{const e=t.filters.map(n=>Sf(n)).join(",");return`${t.op}(${e})`}}function xE(t,e){return t instanceof lt?function(r,i){return i instanceof lt&&r.op===i.op&&r.field.isEqual(i.field)&&tr(r.value,i.value)}(t,e):t instanceof nr?function(r,i){return i instanceof nr&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&xE(o,i.filters[l]),!0):!1}(t,e):void le()}function bE(t){return t instanceof lt?function(n){return`${n.field.canonicalString()} ${n.op} ${fo(n.value)}`}(t):t instanceof nr?function(n){return n.op.toString()+" {"+n.getFilters().map(bE).join(" ,")+"}"}(t):"Filter"}class Uk extends lt{constructor(e,n,r){super(e,n,r),this.key=ie.fromName(r.referenceValue)}matches(e){const n=ie.comparator(e.key,this.key);return this.matchesComparison(n)}}class Fk extends lt{constructor(e,n){super(e,"in",n),this.keys=OE("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class jk extends lt{constructor(e,n){super(e,"not-in",n),this.keys=OE("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function OE(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ie.fromName(r.referenceValue))}class Bk extends lt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Gp(n)&&rl(n.arrayValue,this.value)}}class zk extends lt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&rl(this.value.arrayValue,n)}}class $k extends lt{constructor(e,n){super(e,"not-in",n)}matches(e){if(rl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!rl(this.value.arrayValue,n)}}class Hk extends lt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Gp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>rl(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wk{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function hv(t,e=null,n=[],r=[],i=null,s=null,o=null){return new Wk(t,e,n,r,i,s,o)}function Qp(t){const e=he(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Sf(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Zc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>fo(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>fo(r)).join(",")),e.ue=n}return e.ue}function Xp(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Mk(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!xE(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!cv(t.startAt,e.startAt)&&cv(t.endAt,e.endAt)}function Rf(t){return ie.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function qk(t,e,n,r,i,s,o,l){return new eh(t,e,n,r,i,s,o,l)}function Yp(t){return new eh(t)}function dv(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Kk(t){return t.collectionGroup!==null}function Aa(t){const e=he(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Tt(wt.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new gc(s,r))}),n.has(wt.keyField().canonicalString())||e.ce.push(new gc(wt.keyField(),r))}return e.ce}function Yn(t){const e=he(t);return e.le||(e.le=Gk(e,Aa(t))),e.le}function Gk(t,e){if(t.limitType==="F")return hv(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new gc(i.field,s)});const n=t.endAt?new mc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new mc(t.startAt.position,t.startAt.inclusive):null;return hv(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Af(t,e,n){return new eh(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function th(t,e){return Xp(Yn(t),Yn(e))&&t.limitType===e.limitType}function LE(t){return`${Qp(Yn(t))}|lt:${t.limitType}`}function As(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>bE(i)).join(", ")}]`),Zc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>fo(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>fo(i)).join(",")),`Target(${r})`}(Yn(t))}; limitType=${t.limitType})`}function nh(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):ie.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Aa(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=uv(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,Aa(r),i)||r.endAt&&!function(o,l,u){const c=uv(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,Aa(r),i))}(t,e)}function Qk(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function ME(t){return(e,n)=>{let r=!1;for(const i of Aa(t)){const s=Xk(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Xk(t,e,n){const r=t.field.isKeyField()?ie.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?ho(u,c):le()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return le()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Io(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return AE(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yk=new qe(ie.comparator);function Ar(){return Yk}const VE=new qe(ie.comparator);function pa(...t){let e=VE;for(const n of t)e=e.insert(n.key,n);return e}function UE(t){let e=VE;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ji(){return Ca()}function FE(){return Ca()}function Ca(){return new So(t=>t.toString(),(t,e)=>t.isEqual(e))}const Jk=new qe(ie.comparator),Zk=new Tt(ie.comparator);function me(...t){let e=Zk;for(const n of t)e=e.add(n);return e}const eN=new Tt(Se);function tN(){return eN}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jp(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:pc(e)?"-0":e}}function jE(t){return{integerValue:""+t}}function nN(t,e){return Dk(e)?jE(e):Jp(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(){this._=void 0}}function rN(t,e,n){return t instanceof yc?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&qp(s)&&(s=Kp(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof il?zE(t,e):t instanceof sl?$E(t,e):function(i,s){const o=BE(i,s),l=fv(o)+fv(i.Pe);return If(o)&&If(i.Pe)?jE(l):Jp(i.serializer,l)}(t,e)}function iN(t,e,n){return t instanceof il?zE(t,e):t instanceof sl?$E(t,e):n}function BE(t,e){return t instanceof vc?function(r){return If(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class yc extends rh{}class il extends rh{constructor(e){super(),this.elements=e}}function zE(t,e){const n=HE(e);for(const r of t.elements)n.some(i=>tr(i,r))||n.push(r);return{arrayValue:{values:n}}}class sl extends rh{constructor(e){super(),this.elements=e}}function $E(t,e){let n=HE(e);for(const r of t.elements)n=n.filter(i=>!tr(i,r));return{arrayValue:{values:n}}}class vc extends rh{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function fv(t){return Je(t.integerValue||t.doubleValue)}function HE(t){return Gp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function sN(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof il&&i instanceof il||r instanceof sl&&i instanceof sl?co(r.elements,i.elements,tr):r instanceof vc&&i instanceof vc?tr(r.Pe,i.Pe):r instanceof yc&&i instanceof yc}(t.transform,e.transform)}class oN{constructor(e,n){this.version=e,this.transformResults=n}}class vr{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new vr}static exists(e){return new vr(void 0,e)}static updateTime(e){return new vr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function bu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ih{}function WE(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new KE(t.key,vr.none()):new wl(t.key,t.data,vr.none());{const n=t.data,r=_n.empty();let i=new Tt(wt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new hs(t.key,r,new Vn(i.toArray()),vr.none())}}function aN(t,e,n){t instanceof wl?function(i,s,o){const l=i.value.clone(),u=mv(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof hs?function(i,s,o){if(!bu(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=mv(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(qE(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Pa(t,e,n,r){return t instanceof wl?function(s,o,l,u){if(!bu(s.precondition,o))return l;const c=s.value.clone(),d=gv(s.fieldTransforms,u,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof hs?function(s,o,l,u){if(!bu(s.precondition,o))return l;const c=gv(s.fieldTransforms,u,o),d=o.data;return d.setAll(qE(s)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,l){return bu(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function lN(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=BE(r.transform,i||null);s!=null&&(n===null&&(n=_n.empty()),n.set(r.field,s))}return n||null}function pv(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&co(r,i,(s,o)=>sN(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class wl extends ih{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class hs extends ih{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function qE(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function mv(t,e,n){const r=new Map;De(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,iN(o,l,n[i]))}return r}function gv(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,rN(s,o,e))}return r}class KE extends ih{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class uN extends ih{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cN{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&aN(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Pa(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Pa(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=FE();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=WE(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(ce.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),me())}isEqual(e){return this.batchId===e.batchId&&co(this.mutations,e.mutations,(n,r)=>pv(n,r))&&co(this.baseMutations,e.baseMutations,(n,r)=>pv(n,r))}}class Zp{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){De(e.mutations.length===r.length);let i=function(){return Jk}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Zp(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hN{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dN{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var nt,_e;function fN(t){switch(t){default:return le();case H.CANCELLED:case H.UNKNOWN:case H.DEADLINE_EXCEEDED:case H.RESOURCE_EXHAUSTED:case H.INTERNAL:case H.UNAVAILABLE:case H.UNAUTHENTICATED:return!1;case H.INVALID_ARGUMENT:case H.NOT_FOUND:case H.ALREADY_EXISTS:case H.PERMISSION_DENIED:case H.FAILED_PRECONDITION:case H.ABORTED:case H.OUT_OF_RANGE:case H.UNIMPLEMENTED:case H.DATA_LOSS:return!0}}function GE(t){if(t===void 0)return Rr("GRPC error has no .code"),H.UNKNOWN;switch(t){case nt.OK:return H.OK;case nt.CANCELLED:return H.CANCELLED;case nt.UNKNOWN:return H.UNKNOWN;case nt.DEADLINE_EXCEEDED:return H.DEADLINE_EXCEEDED;case nt.RESOURCE_EXHAUSTED:return H.RESOURCE_EXHAUSTED;case nt.INTERNAL:return H.INTERNAL;case nt.UNAVAILABLE:return H.UNAVAILABLE;case nt.UNAUTHENTICATED:return H.UNAUTHENTICATED;case nt.INVALID_ARGUMENT:return H.INVALID_ARGUMENT;case nt.NOT_FOUND:return H.NOT_FOUND;case nt.ALREADY_EXISTS:return H.ALREADY_EXISTS;case nt.PERMISSION_DENIED:return H.PERMISSION_DENIED;case nt.FAILED_PRECONDITION:return H.FAILED_PRECONDITION;case nt.ABORTED:return H.ABORTED;case nt.OUT_OF_RANGE:return H.OUT_OF_RANGE;case nt.UNIMPLEMENTED:return H.UNIMPLEMENTED;case nt.DATA_LOSS:return H.DATA_LOSS;default:return le()}}(_e=nt||(nt={}))[_e.OK=0]="OK",_e[_e.CANCELLED=1]="CANCELLED",_e[_e.UNKNOWN=2]="UNKNOWN",_e[_e.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",_e[_e.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",_e[_e.NOT_FOUND=5]="NOT_FOUND",_e[_e.ALREADY_EXISTS=6]="ALREADY_EXISTS",_e[_e.PERMISSION_DENIED=7]="PERMISSION_DENIED",_e[_e.UNAUTHENTICATED=16]="UNAUTHENTICATED",_e[_e.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",_e[_e.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",_e[_e.ABORTED=10]="ABORTED",_e[_e.OUT_OF_RANGE=11]="OUT_OF_RANGE",_e[_e.UNIMPLEMENTED=12]="UNIMPLEMENTED",_e[_e.INTERNAL=13]="INTERNAL",_e[_e.UNAVAILABLE=14]="UNAVAILABLE",_e[_e.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pN(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mN=new Hi([4294967295,4294967295],0);function yv(t){const e=pN().encode(t),n=new yE;return n.update(e),new Uint8Array(n.digest())}function vv(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Hi([n,r],0),new Hi([i,s],0)]}class em{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ma(`Invalid padding: ${n}`);if(r<0)throw new ma(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ma(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ma(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Hi.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(Hi.fromNumber(r)));return i.compare(mN)===1&&(i=new Hi([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=yv(e),[r,i]=vv(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new em(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=yv(e),[r,i]=vv(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ma extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,El.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new sh(ce.min(),i,new qe(Se),Ar(),me())}}class El{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new El(r,n,me(),me(),me())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class QE{constructor(e,n){this.targetId=e,this.me=n}}class XE{constructor(e,n,r=St.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class _v{constructor(){this.fe=0,this.ge=Ev(),this.pe=St.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=me(),n=me(),r=me();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:le()}}),new El(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Ev()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,De(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class gN{constructor(e){this.Le=e,this.Be=new Map,this.ke=Ar(),this.qe=wv(),this.Qe=new qe(Se)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:le()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(Rf(s))if(r===0){const o=new ie(s.path);this.Ue(n,o,Mt.newNoDocument(o,ce.min()))}else De(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=Zi(r).toUint8Array()}catch(u){if(u instanceof CE)return uo("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new em(o,i,s)}catch(u){return uo(u instanceof ma?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&Rf(l.target)){const u=new ie(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,Mt.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=me();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new sh(e,n,this.Qe,this.ke,r);return this.ke=Ar(),this.qe=wv(),this.Qe=new qe(Se),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new _v,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Tt(Se),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||Z("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new _v),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function wv(){return new qe(ie.comparator)}function Ev(){return new qe(ie.comparator)}const yN={asc:"ASCENDING",desc:"DESCENDING"},vN={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},_N={and:"AND",or:"OR"};class wN{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Cf(t,e){return t.useProto3Json||Zc(e)?e:{value:e}}function _c(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function YE(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function EN(t,e){return _c(t,e.toTimestamp())}function Jn(t){return De(!!t),ce.fromTimestamp(function(n){const r=di(n);return new ct(r.seconds,r.nanos)}(t))}function tm(t,e){return Pf(t,e).canonicalString()}function Pf(t,e){const n=function(i){return new Xe(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function JE(t){const e=Xe.fromString(t);return De(rT(e)),e}function kf(t,e){return tm(t.databaseId,e.path)}function ad(t,e){const n=JE(e);if(n.get(1)!==t.databaseId.projectId)throw new re(H.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new re(H.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ie(eT(n))}function ZE(t,e){return tm(t.databaseId,e)}function TN(t){const e=JE(t);return e.length===4?Xe.emptyPath():eT(e)}function Nf(t){return new Xe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function eT(t){return De(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Tv(t,e,n){return{name:kf(t,e),fields:n.value.mapValue.fields}}function IN(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:le()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,d){return c.useProto3Json?(De(d===void 0||typeof d=="string"),St.fromBase64String(d||"")):(De(d===void 0||d instanceof Buffer||d instanceof Uint8Array),St.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const d=c.code===void 0?H.UNKNOWN:GE(c.code);return new re(d,c.message||"")}(o);n=new XE(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=ad(t,r.document.name),s=Jn(r.document.updateTime),o=r.document.createTime?Jn(r.document.createTime):ce.min(),l=new _n({mapValue:{fields:r.document.fields}}),u=Mt.newFoundDocument(i,s,o,l),c=r.targetIds||[],d=r.removedTargetIds||[];n=new Ou(c,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=ad(t,r.document),s=r.readTime?Jn(r.readTime):ce.min(),o=Mt.newNoDocument(i,s),l=r.removedTargetIds||[];n=new Ou([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=ad(t,r.document),s=r.removedTargetIds||[];n=new Ou([],s,i,null)}else{if(!("filter"in e))return le();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new dN(i,s),l=r.targetId;n=new QE(l,o)}}return n}function SN(t,e){let n;if(e instanceof wl)n={update:Tv(t,e.key,e.value)};else if(e instanceof KE)n={delete:kf(t,e.key)};else if(e instanceof hs)n={update:Tv(t,e.key,e.data),updateMask:bN(e.fieldMask)};else{if(!(e instanceof uN))return le();n={verify:kf(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof yc)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof il)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof sl)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof vc)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw le()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:EN(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:le()}(t,e.precondition)),n}function RN(t,e){return t&&t.length>0?(De(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Jn(i.updateTime):Jn(s);return o.isEqual(ce.min())&&(o=Jn(s)),new oN(o,i.transformResults||[])}(n,e))):[]}function AN(t,e){return{documents:[ZE(t,e.path)]}}function CN(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=ZE(t,i);const s=function(c){if(c.length!==0)return nT(nr.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(d=>function(g){return{field:Cs(g.field),direction:NN(g.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Cf(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function PN(t){let e=TN(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){De(r===1);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(p){const g=tT(p);return g instanceof nr&&DE(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(g=>function(A){return new gc(Ps(A.field),function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(A.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(p){let g;return g=typeof p=="object"?p.value:p,Zc(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(p){const g=!!p.before,v=p.values||[];return new mc(v,g)}(n.startAt));let c=null;return n.endAt&&(c=function(p){const g=!p.before,v=p.values||[];return new mc(v,g)}(n.endAt)),qk(e,i,o,s,l,"F",u,c)}function kN(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return le()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function tT(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ps(n.unaryFilter.field);return lt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ps(n.unaryFilter.field);return lt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ps(n.unaryFilter.field);return lt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ps(n.unaryFilter.field);return lt.create(o,"!=",{nullValue:"NULL_VALUE"});default:return le()}}(t):t.fieldFilter!==void 0?function(n){return lt.create(Ps(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return le()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return nr.create(n.compositeFilter.filters.map(r=>tT(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return le()}}(n.compositeFilter.op))}(t):le()}function NN(t){return yN[t]}function DN(t){return vN[t]}function xN(t){return _N[t]}function Cs(t){return{fieldPath:t.canonicalString()}}function Ps(t){return wt.fromServerFormat(t.fieldPath)}function nT(t){return t instanceof lt?function(n){if(n.op==="=="){if(lv(n.value))return{unaryFilter:{field:Cs(n.field),op:"IS_NAN"}};if(av(n.value))return{unaryFilter:{field:Cs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(lv(n.value))return{unaryFilter:{field:Cs(n.field),op:"IS_NOT_NAN"}};if(av(n.value))return{unaryFilter:{field:Cs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Cs(n.field),op:DN(n.op),value:n.value}}}(t):t instanceof nr?function(n){const r=n.getFilters().map(i=>nT(i));return r.length===1?r[0]:{compositeFilter:{op:xN(n.op),filters:r}}}(t):le()}function bN(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function rT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(e,n,r,i,s=ce.min(),o=ce.min(),l=St.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Xr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Xr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Xr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Xr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ON{constructor(e){this.ct=e}}function LN(t){const e=PN({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Af(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MN{constructor(){this.un=new VN}addToCollectionParentIndex(e,n){return this.un.add(n),$.resolve()}getCollectionParents(e,n){return $.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return $.resolve()}deleteFieldIndex(e,n){return $.resolve()}deleteAllFieldIndexes(e){return $.resolve()}createTargetIndexes(e,n){return $.resolve()}getDocumentsMatchingTarget(e,n){return $.resolve(null)}getIndexType(e,n){return $.resolve(0)}getFieldIndexes(e,n){return $.resolve([])}getNextCollectionGroupToUpdate(e){return $.resolve(null)}getMinOffset(e,n){return $.resolve(hi.min())}getMinOffsetFromCollectionGroup(e,n){return $.resolve(hi.min())}updateCollectionGroup(e,n,r){return $.resolve()}updateIndexEntries(e,n){return $.resolve()}}class VN{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Tt(Xe.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Tt(Xe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new po(0)}static kn(){return new po(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UN{constructor(){this.changes=new So(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Mt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?$.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FN{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jN{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Pa(r.mutation,i,Vn.empty(),ct.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,me()).next(()=>r))}getLocalViewOfDocuments(e,n,r=me()){const i=ji();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=pa();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=ji();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,me()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Ar();const o=Ca(),l=function(){return Ca()}();return n.forEach((u,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof hs)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),Pa(d.mutation,c,d.mutation.getFieldMask(),ct.now())):o.set(c.key,Vn.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>{var p;return l.set(c,new FN(d,(p=o.get(c))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Ca();let i=new qe((o,l)=>o-l),s=me();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let d=r.get(u)||Vn.empty();d=l.applyToLocalView(c,d),r.set(u,d);const p=(i.get(l.batchId)||me()).add(u);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,d=u.value,p=FE();d.forEach(g=>{if(!s.has(g)){const v=WE(n.get(g),r.get(g));v!==null&&p.set(g,v),s=s.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,p))}return $.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return ie.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Kk(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):$.resolve(ji());let l=-1,u=s;return o.next(c=>$.forEach(c,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(d)?$.resolve():this.remoteDocumentCache.getEntry(e,d).next(g=>{u=u.insert(d,g)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,me())).next(d=>({batchId:l,changes:UE(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ie(n)).next(r=>{let i=pa();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=pa();return this.indexManager.getCollectionParents(e,s).next(l=>$.forEach(l,u=>{const c=function(p,g){return new eh(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,Mt.newInvalidDocument(d)))});let l=pa();return o.forEach((u,c)=>{const d=s.get(u);d!==void 0&&Pa(d.mutation,c,Vn.empty(),ct.now()),nh(n,c)&&(l=l.insert(u,c))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BN{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return $.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Jn(i.createTime)}}(n)),$.resolve()}getNamedQuery(e,n){return $.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:LN(i.bundledQuery),readTime:Jn(i.readTime)}}(n)),$.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zN{constructor(){this.overlays=new qe(ie.comparator),this.Ir=new Map}getOverlay(e,n){return $.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ji();return $.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),$.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),$.resolve()}getOverlaysForCollection(e,n,r){const i=ji(),s=n.length+1,o=new ie(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return $.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new qe((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=ji(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const l=ji(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>l.set(c,d)),!(l.size()>=i)););return $.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new hN(n,r));let s=this.Ir.get(n);s===void 0&&(s=me(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $N{constructor(){this.sessionToken=St.EMPTY_BYTE_STRING}getSessionToken(e){return $.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,$.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{constructor(){this.Tr=new Tt(dt.Er),this.dr=new Tt(dt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new dt(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new dt(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new ie(new Xe([])),r=new dt(n,e),i=new dt(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new ie(new Xe([])),r=new dt(n,e),i=new dt(n,e+1);let s=me();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new dt(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class dt{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return ie.comparator(e.key,n.key)||Se(e.wr,n.wr)}static Ar(e,n){return Se(e.wr,n.wr)||ie.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HN{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new Tt(dt.Er)}checkEmpty(e){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new cN(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.br=this.br.add(new dt(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return $.resolve(o)}lookupMutationBatch(e,n){return $.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return $.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new dt(n,0),i=new dt(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const l=this.Dr(o.wr);s.push(l)}),$.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Tt(Se);return n.forEach(i=>{const s=new dt(i,0),o=new dt(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],l=>{r=r.add(l.wr)})}),$.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;ie.isDocumentKey(s)||(s=s.child(""));const o=new dt(new ie(s),0);let l=new Tt(Se);return this.br.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.wr)),!0)},o),$.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){De(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return $.forEach(n.mutations,i=>{const s=new dt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new dt(n,0),i=this.br.firstAfterOrEqual(r);return $.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,$.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WN{constructor(e){this.Mr=e,this.docs=function(){return new qe(ie.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return $.resolve(r?r.document.mutableCopy():Mt.newInvalidDocument(n))}getEntries(e,n){let r=Ar();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Mt.newInvalidDocument(i))}),$.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Ar();const o=n.path,l=new ie(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||Ck(Ak(d),r)<=0||(i.has(d.key)||nh(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return $.resolve(s)}getAllFromCollectionGroup(e,n,r,i){le()}Or(e,n){return $.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new qN(this)}getSize(e){return $.resolve(this.size)}}class qN extends UN{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),$.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KN{constructor(e){this.persistence=e,this.Nr=new So(n=>Qp(n),Xp),this.lastRemoteSnapshotVersion=ce.min(),this.highestTargetId=0,this.Lr=0,this.Br=new nm,this.targetCount=0,this.kr=po.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),$.resolve()}getLastRemoteSnapshotVersion(e){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),$.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new po(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,$.resolve()}updateTargetData(e,n){return this.Kn(n),$.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,$.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),$.waitFor(s).next(()=>i)}getTargetCount(e){return $.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return $.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),$.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),$.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),$.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return $.resolve(r)}containsKey(e,n){return $.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GN{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Wp(0),this.Kr=!1,this.Kr=!0,this.$r=new $N,this.referenceDelegate=e(this),this.Ur=new KN(this),this.indexManager=new MN,this.remoteDocumentCache=function(i){return new WN(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new ON(n),this.Gr=new BN(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new zN,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new HN(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){Z("MemoryPersistence","Starting transaction:",e);const i=new QN(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return $.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class QN extends kk{constructor(e){super(),this.currentSequenceNumber=e}}class rm{constructor(e){this.persistence=e,this.Jr=new nm,this.Yr=null}static Zr(e){return new rm(e)}get Xr(){if(this.Yr)return this.Yr;throw le()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),$.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),$.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),$.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.Xr,r=>{const i=ie.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,ce.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return $.or([()=>$.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class im{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=me(),i=me();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new im(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XN{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YN{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return JC()?8:Nk(Ut())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new XN;return this.Xi(e,n,o).next(l=>{if(s.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(ia()<=ye.DEBUG&&Z("QueryEngine","SDK will not create cache indexes for query:",As(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),$.resolve()):(ia()<=ye.DEBUG&&Z("QueryEngine","Query:",As(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(ia()<=ye.DEBUG&&Z("QueryEngine","The SDK decides to create cache indexes for query:",As(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Yn(n))):$.resolve())}Yi(e,n){if(dv(n))return $.resolve(null);let r=Yn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Af(n,null,"F"),r=Yn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=me(...s);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.ts(n,l);return this.ns(n,c,o,u.readTime)?this.Yi(e,Af(n,null,"F")):this.rs(e,c,n,u)}))})))}Zi(e,n,r,i){return dv(n)||i.isEqual(ce.min())?$.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?$.resolve(null):(ia()<=ye.DEBUG&&Z("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),As(n)),this.rs(e,o,n,Rk(i,-1)).next(l=>l))})}ts(e,n){let r=new Tt(ME(e));return n.forEach((i,s)=>{nh(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return ia()<=ye.DEBUG&&Z("QueryEngine","Using full collection scan to execute query:",As(n)),this.Ji.getDocumentsMatchingQuery(e,n,hi.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JN{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new qe(Se),this._s=new So(s=>Qp(s),Xp),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new jN(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function ZN(t,e,n,r){return new JN(t,e,n,r)}async function iT(t,e){const n=he(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=me();for(const c of i){o.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of s){l.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:l}))})})}function eD(t,e){const n=he(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,c,d){const p=c.batch,g=p.keys();let v=$.resolve();return g.forEach(A=>{v=v.next(()=>d.getEntry(u,A)).next(P=>{const b=c.docVersions.get(A);De(b!==null),P.version.compareTo(b)<0&&(p.applyToRemoteDocument(P,c),P.isValidDocument()&&(P.setReadTime(c.commitVersion),d.addEntry(P)))})}),v.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=me();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function sT(t){const e=he(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function tD(t,e){const n=he(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const l=[];e.targetChanges.forEach((d,p)=>{const g=i.get(p);if(!g)return;l.push(n.Ur.removeMatchingKeys(s,d.removedDocuments,p).next(()=>n.Ur.addMatchingKeys(s,d.addedDocuments,p)));let v=g.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?v=v.withResumeToken(St.EMPTY_BYTE_STRING,ce.min()).withLastLimboFreeSnapshotVersion(ce.min()):d.resumeToken.approximateByteSize()>0&&(v=v.withResumeToken(d.resumeToken,r)),i=i.insert(p,v),function(P,b,E){return P.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(g,v,d)&&l.push(n.Ur.updateTargetData(s,v))});let u=Ar(),c=me();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),l.push(nD(s,o,e.documentUpdates).next(d=>{u=d.Ps,c=d.Is})),!r.isEqual(ce.min())){const d=n.Ur.getLastRemoteSnapshotVersion(s).next(p=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(d)}return $.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.os=i,s))}function nD(t,e,n){let r=me(),i=me();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Ar();return n.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(ce.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):Z("LocalStore","Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function rD(t,e){const n=he(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function iD(t,e){const n=he(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,$.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new Xr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Df(t,e,n){const r=he(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!_l(o))throw o;Z("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function Iv(t,e,n){const r=he(t);let i=ce.min(),s=me();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,d){const p=he(u),g=p._s.get(d);return g!==void 0?$.resolve(p.os.get(g)):p.Ur.getTargetData(c,d)}(r,o,Yn(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:ce.min(),n?s:me())).next(l=>(sD(r,Qk(e),l),{documents:l,Ts:s})))}function sD(t,e,n){let r=t.us.get(e)||ce.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class Sv{constructor(){this.activeTargetIds=tN()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class oD{constructor(){this.so=new Sv,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Sv,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aD{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rv{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){Z("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){Z("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pu=null;function ld(){return pu===null?pu=function(){return 268435456+Math.round(2147483648*Math.random())}():pu++,"0x"+pu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lD={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uD{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bt="WebChannelConnection";class cD extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const l=ld(),u=this.xo(n,r.toUriEncodedString());Z("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,s,o),this.No(n,u,c,i).then(d=>(Z("RestConnection",`Received RPC '${n}' ${l}: `,d),d),d=>{throw uo("RestConnection",`RPC '${n}' ${l} failed with error: `,d,"url: ",u,"request:",i),d})}Lo(n,r,i,s,o,l){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+To}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=lD[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=ld();return new Promise((o,l)=>{const u=new vE;u.setWithCredentials(!0),u.listenOnce(wE.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Du.NO_ERROR:const d=u.getResponseJson();Z(bt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(d)),o(d);break;case Du.TIMEOUT:Z(bt,`RPC '${e}' ${s} timed out`),l(new re(H.DEADLINE_EXCEEDED,"Request time out"));break;case Du.HTTP_ERROR:const p=u.getStatus();if(Z(bt,`RPC '${e}' ${s} failed with status:`,p,"response text:",u.getResponseText()),p>0){let g=u.getResponseJson();Array.isArray(g)&&(g=g[0]);const v=g==null?void 0:g.error;if(v&&v.status&&v.message){const A=function(b){const E=b.toLowerCase().replace(/_/g,"-");return Object.values(H).indexOf(E)>=0?E:H.UNKNOWN}(v.status);l(new re(A,v.message))}else l(new re(H.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new re(H.UNAVAILABLE,"Connection failed."));break;default:le()}}finally{Z(bt,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);Z(bt,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Bo(e,n,r){const i=ld(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=IE(),l=TE(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.xmlHttpFactory=new _E({})),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const d=s.join("");Z(bt,`Creating RPC '${e}' stream ${i}: ${d}`,u);const p=o.createWebChannel(d,u);let g=!1,v=!1;const A=new uD({Io:b=>{v?Z(bt,`Not sending because RPC '${e}' stream ${i} is closed:`,b):(g||(Z(bt,`Opening RPC '${e}' stream ${i} transport.`),p.open(),g=!0),Z(bt,`RPC '${e}' stream ${i} sending:`,b),p.send(b))},To:()=>p.close()}),P=(b,E,_)=>{b.listen(E,S=>{try{_(S)}catch(O){setTimeout(()=>{throw O},0)}})};return P(p,fa.EventType.OPEN,()=>{v||(Z(bt,`RPC '${e}' stream ${i} transport opened.`),A.yo())}),P(p,fa.EventType.CLOSE,()=>{v||(v=!0,Z(bt,`RPC '${e}' stream ${i} transport closed`),A.So())}),P(p,fa.EventType.ERROR,b=>{v||(v=!0,uo(bt,`RPC '${e}' stream ${i} transport errored:`,b),A.So(new re(H.UNAVAILABLE,"The operation could not be completed")))}),P(p,fa.EventType.MESSAGE,b=>{var E;if(!v){const _=b.data[0];De(!!_);const S=_,O=S.error||((E=S[0])===null||E===void 0?void 0:E.error);if(O){Z(bt,`RPC '${e}' stream ${i} received error:`,O);const B=O.status;let F=function(w){const I=nt[w];if(I!==void 0)return GE(I)}(B),T=O.message;F===void 0&&(F=H.INTERNAL,T="Unknown error status: "+B+" with message "+O.message),v=!0,A.So(new re(F,T)),p.close()}else Z(bt,`RPC '${e}' stream ${i} received:`,_),A.bo(_)}}),P(l,EE.STAT_EVENT,b=>{b.stat===Ef.PROXY?Z(bt,`RPC '${e}' stream ${i} detected buffering proxy`):b.stat===Ef.NOPROXY&&Z(bt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{A.wo()},0),A}}function ud(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oh(t){return new wN(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oT{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&Z("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aT{constructor(e,n,r,i,s,o,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new oT(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===H.RESOURCE_EXHAUSTED?(Rr(n.toString()),Rr("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===H.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new re(H.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return Z("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(Z("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class hD extends aT{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=IN(this.serializer,e),r=function(s){if(!("targetChange"in s))return ce.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?ce.min():o.readTime?Jn(o.readTime):ce.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Nf(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=Rf(u)?{documents:AN(s,u)}:{query:CN(s,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=YE(s,o.resumeToken);const c=Cf(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(ce.min())>0){l.readTime=_c(s,o.snapshotVersion.toTimestamp());const c=Cf(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=kN(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Nf(this.serializer),n.removeTarget=e,this.a_(n)}}class dD extends aT{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return De(!!e.streamToken),this.lastStreamToken=e.streamToken,De(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){De(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=RN(e.writeResults,e.commitTime),r=Jn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Nf(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>SN(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fD extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new re(H.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,Pf(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new re(H.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,Pf(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new re(H.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class pD{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Rr(n),this.D_=!1):Z("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mD{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{ds(this)&&(Z("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=he(u);c.L_.add(4),await Tl(c),c.q_.set("Unknown"),c.L_.delete(4),await ah(c)}(this))})}),this.q_=new pD(r,i)}}async function ah(t){if(ds(t))for(const e of t.B_)await e(!0)}async function Tl(t){for(const e of t.B_)await e(!1)}function lT(t,e){const n=he(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),lm(n)?am(n):Ro(n).r_()&&om(n,e))}function sm(t,e){const n=he(t),r=Ro(n);n.N_.delete(e),r.r_()&&uT(n,e),n.N_.size===0&&(r.r_()?r.o_():ds(n)&&n.q_.set("Unknown"))}function om(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ce.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ro(t).A_(e)}function uT(t,e){t.Q_.xe(e),Ro(t).R_(e)}function am(t){t.Q_=new gN({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Ro(t).start(),t.q_.v_()}function lm(t){return ds(t)&&!Ro(t).n_()&&t.N_.size>0}function ds(t){return he(t).L_.size===0}function cT(t){t.Q_=void 0}async function gD(t){t.q_.set("Online")}async function yD(t){t.N_.forEach((e,n)=>{om(t,e)})}async function vD(t,e){cT(t),lm(t)?(t.q_.M_(e),am(t)):t.q_.set("Unknown")}async function _D(t,e,n){if(t.q_.set("Online"),e instanceof XE&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.N_.delete(l),i.Q_.removeTarget(l))}(t,e)}catch(r){Z("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await wc(t,r)}else if(e instanceof Ou?t.Q_.Ke(e):e instanceof QE?t.Q_.He(e):t.Q_.We(e),!n.isEqual(ce.min()))try{const r=await sT(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Q_.rt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const d=s.N_.get(c);d&&s.N_.set(c,d.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const d=s.N_.get(u);if(!d)return;s.N_.set(u,d.withResumeToken(St.EMPTY_BYTE_STRING,d.snapshotVersion)),uT(s,u);const p=new Xr(d.target,u,c,d.sequenceNumber);om(s,p)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){Z("RemoteStore","Failed to raise snapshot:",r),await wc(t,r)}}async function wc(t,e,n){if(!_l(e))throw e;t.L_.add(1),await Tl(t),t.q_.set("Offline"),n||(n=()=>sT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Z("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await ah(t)})}function hT(t,e){return e().catch(n=>wc(t,n,e))}async function lh(t){const e=he(t),n=fi(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;wD(e);)try{const i=await rD(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,ED(e,i)}catch(i){await wc(e,i)}dT(e)&&fT(e)}function wD(t){return ds(t)&&t.O_.length<10}function ED(t,e){t.O_.push(e);const n=fi(t);n.r_()&&n.V_&&n.m_(e.mutations)}function dT(t){return ds(t)&&!fi(t).n_()&&t.O_.length>0}function fT(t){fi(t).start()}async function TD(t){fi(t).p_()}async function ID(t){const e=fi(t);for(const n of t.O_)e.m_(n.mutations)}async function SD(t,e,n){const r=t.O_.shift(),i=Zp.from(r,e,n);await hT(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await lh(t)}async function RD(t,e){e&&fi(t).V_&&await async function(r,i){if(function(o){return fN(o)&&o!==H.ABORTED}(i.code)){const s=r.O_.shift();fi(r).s_(),await hT(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await lh(r)}}(t,e),dT(t)&&fT(t)}async function Av(t,e){const n=he(t);n.asyncQueue.verifyOperationInProgress(),Z("RemoteStore","RemoteStore received new credentials");const r=ds(n);n.L_.add(3),await Tl(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await ah(n)}async function AD(t,e){const n=he(t);e?(n.L_.delete(2),await ah(n)):e||(n.L_.add(2),await Tl(n),n.q_.set("Unknown"))}function Ro(t){return t.K_||(t.K_=function(n,r,i){const s=he(n);return s.w_(),new hD(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:gD.bind(null,t),Ro:yD.bind(null,t),mo:vD.bind(null,t),d_:_D.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),lm(t)?am(t):t.q_.set("Unknown")):(await t.K_.stop(),cT(t))})),t.K_}function fi(t){return t.U_||(t.U_=function(n,r,i){const s=he(n);return s.w_(),new dD(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:TD.bind(null,t),mo:RD.bind(null,t),f_:ID.bind(null,t),g_:SD.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await lh(t)):(await t.U_.stop(),t.O_.length>0&&(Z("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class um{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new ai,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new um(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new re(H.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function cm(t,e){if(Rr("AsyncQueue",`${e}: ${t}`),_l(t))return new re(H.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(e){this.comparator=e?(n,r)=>e(n,r)||ie.comparator(n.key,r.key):(n,r)=>ie.comparator(n.key,r.key),this.keyedMap=pa(),this.sortedSet=new qe(this.comparator)}static emptySet(e){return new Ys(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ys)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ys;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cv{constructor(){this.W_=new qe(ie.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):le():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class mo{constructor(e,n,r,i,s,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new mo(e,n,Ys.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&th(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CD{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class PD{constructor(){this.queries=Pv(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=he(n),s=i.queries;i.queries=Pv(),s.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new re(H.ABORTED,"Firestore shutting down"))}}function Pv(){return new So(t=>LE(t),th)}async function kD(t,e){const n=he(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new CD,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=cm(o,`Initialization of query '${As(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&hm(n)}async function ND(t,e){const n=he(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function DD(t,e){const n=he(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.j_)l.X_(i)&&(r=!0);o.z_=i}}r&&hm(n)}function xD(t,e,n){const r=he(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function hm(t){t.Y_.forEach(e=>{e.next()})}var xf,kv;(kv=xf||(xf={})).ea="default",kv.Cache="cache";class bD{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new mo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=mo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==xf.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pT{constructor(e){this.key=e}}class mT{constructor(e){this.key=e}}class OD{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=me(),this.mutatedKeys=me(),this.Aa=ME(e),this.Ra=new Ys(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new Cv,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,p)=>{const g=i.get(d),v=nh(this.query,p)?p:null,A=!!g&&this.mutatedKeys.has(g.key),P=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let b=!1;g&&v?g.data.isEqual(v.data)?A!==P&&(r.track({type:3,doc:v}),b=!0):this.ga(g,v)||(r.track({type:2,doc:v}),b=!0,(u&&this.Aa(v,u)>0||c&&this.Aa(v,c)<0)&&(l=!0)):!g&&v?(r.track({type:0,doc:v}),b=!0):g&&!v&&(r.track({type:1,doc:g}),b=!0,(u||c)&&(l=!0)),b&&(v?(o=o.add(v),s=P?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{Ra:o,fa:r,ns:l,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((d,p)=>function(v,A){const P=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return le()}};return P(v)-P(A)}(d.type,p.type)||this.Aa(d.doc,p.doc)),this.pa(r),i=i!=null&&i;const l=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,c=u!==this.Ea;return this.Ea=u,o.length!==0||c?{snapshot:new mo(this.query,e.Ra,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Cv,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=me(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new mT(r))}),this.da.forEach(r=>{e.has(r)||n.push(new pT(r))}),n}ba(e){this.Ta=e.Ts,this.da=me();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return mo.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class LD{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class MD{constructor(e){this.key=e,this.va=!1}}class VD{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new So(l=>LE(l),th),this.Ma=new Map,this.xa=new Set,this.Oa=new qe(ie.comparator),this.Na=new Map,this.La=new nm,this.Ba={},this.ka=new Map,this.qa=po.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function UD(t,e,n=!0){const r=ET(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await gT(r,e,n,!0),i}async function FD(t,e){const n=ET(t);await gT(n,e,!0,!1)}async function gT(t,e,n,r){const i=await iD(t.localStore,Yn(e)),s=i.targetId,o=n?t.sharedClientState.addLocalQueryTarget(s):"not-current";let l;return r&&(l=await jD(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&lT(t.remoteStore,i),l}async function jD(t,e,n,r,i){t.Ka=(p,g,v)=>async function(P,b,E,_){let S=b.view.ma(E);S.ns&&(S=await Iv(P.localStore,b.query,!1).then(({documents:T})=>b.view.ma(T,S)));const O=_&&_.targetChanges.get(b.targetId),B=_&&_.targetMismatches.get(b.targetId)!=null,F=b.view.applyChanges(S,P.isPrimaryClient,O,B);return Dv(P,b.targetId,F.wa),F.snapshot}(t,p,g,v);const s=await Iv(t.localStore,e,!0),o=new OD(e,s.Ts),l=o.ma(s.documents),u=El.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(l,t.isPrimaryClient,u);Dv(t,n,c.wa);const d=new LD(e,n,o);return t.Fa.set(e,d),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),c.snapshot}async function BD(t,e,n){const r=he(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!th(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Df(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&sm(r.remoteStore,i.targetId),bf(r,i.targetId)}).catch(vl)):(bf(r,i.targetId),await Df(r.localStore,i.targetId,!0))}async function zD(t,e){const n=he(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),sm(n.remoteStore,r.targetId))}async function $D(t,e,n){const r=XD(t);try{const i=await function(o,l){const u=he(o),c=ct.now(),d=l.reduce((v,A)=>v.add(A.key),me());let p,g;return u.persistence.runTransaction("Locally write mutations","readwrite",v=>{let A=Ar(),P=me();return u.cs.getEntries(v,d).next(b=>{A=b,A.forEach((E,_)=>{_.isValidDocument()||(P=P.add(E))})}).next(()=>u.localDocuments.getOverlayedDocuments(v,A)).next(b=>{p=b;const E=[];for(const _ of l){const S=lN(_,p.get(_.key).overlayedDocument);S!=null&&E.push(new hs(_.key,S,PE(S.value.mapValue),vr.exists(!0)))}return u.mutationQueue.addMutationBatch(v,c,E,l)}).next(b=>{g=b;const E=b.applyToLocalDocumentSet(p,P);return u.documentOverlayCache.saveOverlays(v,b.batchId,E)})}).then(()=>({batchId:g.batchId,changes:UE(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.Ba[o.currentUser.toKey()];c||(c=new qe(Se)),c=c.insert(l,u),o.Ba[o.currentUser.toKey()]=c}(r,i.batchId,n),await Il(r,i.changes),await lh(r.remoteStore)}catch(i){const s=cm(i,"Failed to persist write");n.reject(s)}}async function yT(t,e){const n=he(t);try{const r=await tD(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(De(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?De(o.va):i.removedDocuments.size>0&&(De(o.va),o.va=!1))}),await Il(n,r,e)}catch(r){await vl(r)}}function Nv(t,e,n){const r=he(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const l=o.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=he(o);u.onlineState=l;let c=!1;u.queries.forEach((d,p)=>{for(const g of p.j_)g.Z_(l)&&(c=!0)}),c&&hm(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function HD(t,e,n){const r=he(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new qe(ie.comparator);o=o.insert(s,Mt.newNoDocument(s,ce.min()));const l=me().add(s),u=new sh(ce.min(),new Map,new qe(Se),o,l);await yT(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),dm(r)}else await Df(r.localStore,e,!1).then(()=>bf(r,e,n)).catch(vl)}async function WD(t,e){const n=he(t),r=e.batch.batchId;try{const i=await eD(n.localStore,e);_T(n,r,null),vT(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Il(n,i)}catch(i){await vl(i)}}async function qD(t,e,n){const r=he(t);try{const i=await function(o,l){const u=he(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return u.mutationQueue.lookupMutationBatch(c,l).next(p=>(De(p!==null),d=p.keys(),u.mutationQueue.removeMutationBatch(c,p))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,d,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>u.localDocuments.getDocuments(c,d))})}(r.localStore,e);_T(r,e,n),vT(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Il(r,i)}catch(i){await vl(i)}}function vT(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function _T(t,e,n){const r=he(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function bf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||wT(t,r)})}function wT(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(sm(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),dm(t))}function Dv(t,e,n){for(const r of n)r instanceof pT?(t.La.addReference(r.key,e),KD(t,r)):r instanceof mT?(Z("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||wT(t,r.key)):le()}function KD(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(Z("SyncEngine","New document in limbo: "+n),t.xa.add(r),dm(t))}function dm(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new ie(Xe.fromString(e)),r=t.qa.next();t.Na.set(r,new MD(n)),t.Oa=t.Oa.insert(n,r),lT(t.remoteStore,new Xr(Yn(Yp(n.path)),r,"TargetPurposeLimboResolution",Wp.oe))}}async function Il(t,e,n){const r=he(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(c=>{var d;if((c||n)&&r.isPrimaryClient){const p=c?!c.fromCache:(d=n==null?void 0:n.targetChanges.get(u.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(c){i.push(c);const p=im.Wi(u.targetId,c);s.push(p)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,c){const d=he(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>$.forEach(c,g=>$.forEach(g.$i,v=>d.persistence.referenceDelegate.addReference(p,g.targetId,v)).next(()=>$.forEach(g.Ui,v=>d.persistence.referenceDelegate.removeReference(p,g.targetId,v)))))}catch(p){if(!_l(p))throw p;Z("LocalStore","Failed to update sequence numbers: "+p)}for(const p of c){const g=p.targetId;if(!p.fromCache){const v=d.os.get(g),A=v.snapshotVersion,P=v.withLastLimboFreeSnapshotVersion(A);d.os=d.os.insert(g,P)}}}(r.localStore,s))}async function GD(t,e){const n=he(t);if(!n.currentUser.isEqual(e)){Z("SyncEngine","User change. New user:",e.toKey());const r=await iT(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new re(H.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Il(n,r.hs)}}function QD(t,e){const n=he(t),r=n.Na.get(e);if(r&&r.va)return me().add(r.key);{let i=me();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const l=n.Fa.get(o);i=i.unionWith(l.view.Va)}return i}}function ET(t){const e=he(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=yT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=QD.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=HD.bind(null,e),e.Ca.d_=DD.bind(null,e.eventManager),e.Ca.$a=xD.bind(null,e.eventManager),e}function XD(t){const e=he(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=WD.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=qD.bind(null,e),e}class xv{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=oh(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return ZN(this.persistence,new YN,e.initialUser,this.serializer)}createPersistence(e){return new GN(rm.Zr,this.serializer)}createSharedClientState(e){return new oD}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class YD{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Nv(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=GD.bind(null,this.syncEngine),await AD(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new PD}()}createDatastore(e){const n=oh(e.databaseInfo.databaseId),r=function(s){return new cD(s)}(e.databaseInfo);return function(s,o,l,u){return new fD(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new mD(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Nv(this.syncEngine,n,0),function(){return Rv.D()?new Rv:new aD}())}createSyncEngine(e,n){return function(i,s,o,l,u,c,d){const p=new VD(i,s,o,l,u,c);return d&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=he(i);Z("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await Tl(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JD{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ga(this.observer.next,e)}error(e){this.observer.error?this.Ga(this.observer.error,e):Rr("Uncaught Error in snapshot listener:",e.toString())}za(){this.muted=!0}Ga(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZD{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Ot.UNAUTHENTICATED,this.clientId=RE.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{Z("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(Z("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new re(H.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ai;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=cm(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function cd(t,e){t.asyncQueue.verifyOperationInProgress(),Z("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await iT(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function bv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await tx(t);Z("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Av(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Av(e.remoteStore,i)),t._onlineComponents=e}function ex(t){return t.name==="FirebaseError"?t.code===H.FAILED_PRECONDITION||t.code===H.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function tx(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Z("FirestoreClient","Using user provided OfflineComponentProvider");try{await cd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!ex(n))throw n;uo("Error using user provided cache. Falling back to memory cache: "+n),await cd(t,new xv)}}else Z("FirestoreClient","Using default OfflineComponentProvider"),await cd(t,new xv);return t._offlineComponents}async function TT(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Z("FirestoreClient","Using user provided OnlineComponentProvider"),await bv(t,t._uninitializedComponentsProvider._online)):(Z("FirestoreClient","Using default OnlineComponentProvider"),await bv(t,new YD))),t._onlineComponents}function nx(t){return TT(t).then(e=>e.syncEngine)}async function rx(t){const e=await TT(t),n=e.eventManager;return n.onListen=UD.bind(null,e.syncEngine),n.onUnlisten=BD.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=FD.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=zD.bind(null,e.syncEngine),n}function ix(t,e,n={}){const r=new ai;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const d=new JD({next:g=>{o.enqueueAndForget(()=>ND(s,p));const v=g.docs.has(l);!v&&g.fromCache?c.reject(new re(H.UNAVAILABLE,"Failed to get document because the client is offline.")):v&&g.fromCache&&u&&u.source==="server"?c.reject(new re(H.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(g)},error:g=>c.reject(g)}),p=new bD(Yp(l.path),d,{includeMetadataChanges:!0,_a:!0});return kD(s,p)}(await rx(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IT(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ov=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sx(t,e,n){if(!n)throw new re(H.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function ox(t,e,n,r){if(e===!0&&r===!0)throw new re(H.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Lv(t){if(!ie.isDocumentKey(t))throw new re(H.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function fm(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":le()}function ol(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new re(H.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=fm(t);throw new re(H.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mv{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new re(H.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new re(H.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}ox("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=IT((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new re(H.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new re(H.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new re(H.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class pm{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Mv({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new re(H.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new re(H.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Mv(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new gk;switch(r.type){case"firstParty":return new wk(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new re(H.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Ov.get(n);r&&(Z("ComponentProvider","Removing Datastore"),Ov.delete(n),r.terminate())}(this),Promise.resolve()}}function ax(t,e,n,r={}){var i;const s=(t=ol(t,pm))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&uo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=Ot.MOCK_USER;else{l=aE(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new re(H.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Ot(c)}t._authCredentials=new yk(new SE(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mm{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new mm(this.firestore,e,this._query)}}class Tn{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new al(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Tn(this.firestore,e,this._key)}}class al extends mm{constructor(e,n,r){super(e,n,Yp(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Tn(this.firestore,null,new ie(e))}withConverter(e){return new al(this.firestore,e,this._path)}}function Ec(t,e,...n){if(t=ht(t),arguments.length===1&&(e=RE.newId()),sx("doc","path",e),t instanceof pm){const r=Xe.fromString(e,...n);return Lv(r),new Tn(t,null,new ie(r))}{if(!(t instanceof Tn||t instanceof al))throw new re(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Xe.fromString(e,...n));return Lv(r),new Tn(t.firestore,t instanceof al?t.converter:null,new ie(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lx{constructor(){this.au=Promise.resolve(),this.uu=[],this.cu=!1,this.lu=[],this.hu=null,this.Pu=!1,this.Iu=!1,this.Tu=[],this.t_=new oT(this,"async_queue_retry"),this.Eu=()=>{const n=ud();n&&Z("AsyncQueue","Visibility state changed to "+n.visibilityState),this.t_.jo()};const e=ud();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Eu)}get isShuttingDown(){return this.cu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.du(),this.Au(e)}enterRestrictedMode(e){if(!this.cu){this.cu=!0,this.Iu=e||!1;const n=ud();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Eu)}}enqueue(e){if(this.du(),this.cu)return new Promise(()=>{});const n=new ai;return this.Au(()=>this.cu&&this.Iu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.uu.push(e),this.Ru()))}async Ru(){if(this.uu.length!==0){try{await this.uu[0](),this.uu.shift(),this.t_.reset()}catch(e){if(!_l(e))throw e;Z("AsyncQueue","Operation failed with retryable error: "+e)}this.uu.length>0&&this.t_.Go(()=>this.Ru())}}Au(e){const n=this.au.then(()=>(this.Pu=!0,e().catch(r=>{this.hu=r,this.Pu=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Rr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Pu=!1,r))));return this.au=n,n}enqueueAfterDelay(e,n,r){this.du(),this.Tu.indexOf(e)>-1&&(n=0);const i=um.createAndSchedule(this,e,n,r,s=>this.Vu(s));return this.lu.push(i),i}du(){this.hu&&le()}verifyOperationInProgress(){}async mu(){let e;do e=this.au,await e;while(e!==this.au)}fu(e){for(const n of this.lu)if(n.timerId===e)return!0;return!1}gu(e){return this.mu().then(()=>{this.lu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.lu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.mu()})}pu(e){this.Tu.push(e)}Vu(e){const n=this.lu.indexOf(e);this.lu.splice(n,1)}}class gm extends pm{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new lx}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||RT(this),this._firestoreClient.terminate()}}function ux(t,e){const n=typeof t=="object"?t:Jc(),r=typeof t=="string"?t:"(default)",i=_i(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=iE("firestore");s&&ax(i,...s)}return i}function ST(t){return t._firestoreClient||RT(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function RT(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,c,d){return new bk(l,u,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,IT(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new ZD(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(e){this._byteString=e}static fromBase64String(e){try{return new go(St.fromBase64String(e))}catch(n){throw new re(H.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new go(St.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ym{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new re(H.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new wt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AT{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vm{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new re(H.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new re(H.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Se(this._lat,e._lat)||Se(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _m{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cx=/^__.*__$/;class hx{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new hs(e,this.data,this.fieldMask,n,this.fieldTransforms):new wl(e,this.data,n,this.fieldTransforms)}}function CT(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw le()}}class wm{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.yu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get wu(){return this.settings.wu}Su(e){return new wm(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}bu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Su({path:r,Du:!1});return i.vu(e),i}Cu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Su({path:r,Du:!1});return i.yu(),i}Fu(e){return this.Su({path:void 0,Du:!0})}Mu(e){return Tc(e,this.settings.methodName,this.settings.xu||!1,this.path,this.settings.Ou)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}yu(){if(this.path)for(let e=0;e<this.path.length;e++)this.vu(this.path.get(e))}vu(e){if(e.length===0)throw this.Mu("Document fields must not be empty");if(CT(this.wu)&&cx.test(e))throw this.Mu('Document fields cannot begin and end with "__"')}}class dx{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||oh(e)}Nu(e,n,r,i=!1){return new wm({wu:e,methodName:n,Ou:r,path:wt.emptyPath(),Du:!1,xu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function fx(t){const e=t._freezeSettings(),n=oh(t._databaseId);return new dx(t._databaseId,!!e.ignoreUndefinedProperties,n)}function px(t,e,n,r,i,s={}){const o=t.Nu(s.merge||s.mergeFields?2:0,e,n,i);DT("Data must be an object, but it was:",o,r);const l=kT(r,o);let u,c;if(s.merge)u=new Vn(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const p of s.mergeFields){const g=mx(e,p,n);if(!o.contains(g))throw new re(H.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);yx(d,g)||d.push(g)}u=new Vn(d),c=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,c=o.fieldTransforms;return new hx(new _n(l),u,c)}function PT(t,e){if(NT(t=ht(t)))return DT("Unsupported field value:",e,t),kT(t,e);if(t instanceof AT)return function(r,i){if(!CT(i.wu))throw i.Mu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Mu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Du&&e.wu!==4)throw e.Mu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=PT(l,i.Fu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=ht(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return nN(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=ct.fromDate(r);return{timestampValue:_c(i.serializer,s)}}if(r instanceof ct){const s=new ct(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:_c(i.serializer,s)}}if(r instanceof vm)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof go)return{bytesValue:YE(i.serializer,r._byteString)};if(r instanceof Tn){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:tm(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof _m)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Mu("VectorValues must only contain numeric values.");return Jp(l.serializer,u)})}}}}}}(r,i);throw i.Mu(`Unsupported field value: ${fm(r)}`)}(t,e)}function kT(t,e){const n={};return AE(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Io(t,(r,i)=>{const s=PT(i,e.bu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function NT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ct||t instanceof vm||t instanceof go||t instanceof Tn||t instanceof AT||t instanceof _m)}function DT(t,e,n){if(!NT(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=fm(n);throw r==="an object"?e.Mu(t+" a custom object"):e.Mu(t+" "+r)}}function mx(t,e,n){if((e=ht(e))instanceof ym)return e._internalPath;if(typeof e=="string")return xT(t,e);throw Tc("Field path arguments must be of type string or ",t,!1,void 0,n)}const gx=new RegExp("[~\\*/\\[\\]]");function xT(t,e,n){if(e.search(gx)>=0)throw Tc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ym(...e.split("."))._internalPath}catch{throw Tc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Tc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new re(H.INVALID_ARGUMENT,l+t+u)}function yx(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bT{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Tn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new vx(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(OT("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class vx extends bT{data(){return super.data()}}function OT(t,e){return typeof e=="string"?xT(t,e):e instanceof ym?e._internalPath:e._delegate._internalPath}class _x{convertValue(e,n="none"){switch(es(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Je(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Zi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw le()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Io(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Je(o.doubleValue));return new _m(s)}convertGeoPoint(e){return new vm(Je(e.latitude),Je(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Kp(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(tl(e));default:return null}}convertTimestamp(e){const n=di(e);return new ct(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Xe.fromString(e);De(rT(r));const i=new nl(r.get(1),r.get(3)),s=new ie(r.popFirst(5));return i.isEqual(n)||Rr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wx(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ex{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class LT extends bT{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Tx(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(OT("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Tx extends LT{data(e={}){return super.data(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MT(t){t=ol(t,Tn);const e=ol(t.firestore,gm);return ix(ST(e),t._key).then(n=>Rx(e,t,n))}class Ix extends _x{constructor(e){super(),this.firestore=e}convertBytes(e){return new go(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Tn(this.firestore,null,n)}}function VT(t,e,n){t=ol(t,Tn);const r=ol(t.firestore,gm),i=wx(t.converter,e);return Sx(r,[px(fx(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,vr.none())])}function Sx(t,e){return function(r,i){const s=new ai;return r.asyncQueue.enqueueAndForget(async()=>$D(await nx(r),i,s)),s.promise}(ST(t),e)}function Rx(t,e,n){const r=n.docs.get(e._key),i=new Ix(t);return new LT(t,i,e._key,r,new Ex(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){To=i})(cs),Bn(new Rn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new gm(new vk(r.getProvider("auth-internal")),new Tk(r.getProvider("app-check-internal")),function(c,d){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new re(H.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new nl(c.options.projectId,d)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Zt(nv,"4.7.1",e),Zt(nv,"4.7.1","esm2017")})();function Em(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function UT(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ax=UT,FT=new us("auth","Firebase",UT());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ic=new Yc("@firebase/auth");function Cx(t,...e){Ic.logLevel<=ye.WARN&&Ic.warn(`Auth (${cs}): ${t}`,...e)}function Lu(t,...e){Ic.logLevel<=ye.ERROR&&Ic.error(`Auth (${cs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zn(t,...e){throw Tm(t,...e)}function Zn(t,...e){return Tm(t,...e)}function jT(t,e,n){const r=Object.assign(Object.assign({},Ax()),{[e]:n});return new us("auth","Firebase",r).create(e,{appName:t.name})}function li(t){return jT(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Tm(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return FT.create(t,...e)}function oe(t,e,...n){if(!t)throw Tm(e,...n)}function fr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Lu(e),new Error(e)}function Cr(t,e){t||fr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Of(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Px(){return Vv()==="http:"||Vv()==="https:"}function Vv(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kx(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Px()||lE()||"connection"in navigator)?navigator.onLine:!0}function Nx(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(e,n){this.shortDelay=e,this.longDelay=n,Cr(n>e,"Short delay should be less than long delay!"),this.isMobile=GC()||XC()}get(){return kx()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Im(t,e){Cr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BT{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;fr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;fr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;fr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dx={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xx=new Sl(3e4,6e4);function fs(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function wi(t,e,n,r,i={}){return zT(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=yl(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode),BT.fetch()($T(t,t.config.apiHost,n,l),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},s))})}async function zT(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Dx),e);try{const i=new Ox(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw mu(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw mu(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw mu(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw mu(t,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw jT(t,d,c);zn(t,d)}}catch(i){if(i instanceof An)throw i;zn(t,"network-request-failed",{message:String(i)})}}async function uh(t,e,n,r,i={}){const s=await wi(t,e,n,r,i);return"mfaPendingCredential"in s&&zn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function $T(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Im(t.config,i):`${t.config.apiScheme}://${i}`}function bx(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Ox{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Zn(this.auth,"network-request-failed")),xx.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function mu(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Zn(t,e,r);return i.customData._tokenResponse=n,i}function Uv(t){return t!==void 0&&t.enterprise!==void 0}class Lx{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return bx(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Mx(t,e){return wi(t,"GET","/v2/recaptchaConfig",fs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vx(t,e){return wi(t,"POST","/v1/accounts:delete",e)}async function HT(t,e){return wi(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ka(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ux(t,e=!1){const n=ht(t),r=await n.getIdToken(e),i=Sm(r);oe(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ka(hd(i.auth_time)),issuedAtTime:ka(hd(i.iat)),expirationTime:ka(hd(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function hd(t){return Number(t)*1e3}function Sm(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Lu("JWT malformed, contained fewer than 3 sections"),null;try{const i=nE(n);return i?JSON.parse(i):(Lu("Failed to decode base64 JWT payload"),null)}catch(i){return Lu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Fv(t){const e=Sm(t);return oe(e,"internal-error"),oe(typeof e.exp<"u","internal-error"),oe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ll(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof An&&Fx(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Fx({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jx{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lf{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ka(this.lastLoginAt),this.creationTime=ka(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sc(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ll(t,HT(n,{idToken:r}));oe(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?WT(s.providerUserInfo):[],l=zx(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),d=u?c:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Lf(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function Bx(t){const e=ht(t);await Sc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function zx(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function WT(t){return t.map(e=>{var{providerId:n}=e,r=Em(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $x(t,e){const n=await zT(t,{},async()=>{const r=yl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=$T(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",BT.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Hx(t,e){return wi(t,"POST","/v2/accounts:revokeToken",fs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){oe(e.idToken,"internal-error"),oe(typeof e.idToken<"u","internal-error"),oe(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Fv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){oe(e.length!==0,"internal-error");const n=Fv(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(oe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await $x(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Js;return r&&(oe(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(oe(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(oe(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Js,this.toJSON())}_performRefresh(){return fr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mr(t,e){oe(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class pr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Em(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new jx(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Lf(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ll(this,this.stsTokenManager.getToken(this.auth,e));return oe(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Ux(this,e)}reload(){return Bx(this)}_assign(e){this!==e&&(oe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new pr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){oe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Sc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(dr(this.auth.app))return Promise.reject(li(this.auth));const e=await this.getIdToken();return await ll(this,Vx(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,c,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(i=n.email)!==null&&i!==void 0?i:void 0,v=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,A=(o=n.photoURL)!==null&&o!==void 0?o:void 0,P=(l=n.tenantId)!==null&&l!==void 0?l:void 0,b=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,E=(c=n.createdAt)!==null&&c!==void 0?c:void 0,_=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:S,emailVerified:O,isAnonymous:B,providerData:F,stsTokenManager:T}=n;oe(S&&T,e,"internal-error");const m=Js.fromJSON(this.name,T);oe(typeof S=="string",e,"internal-error"),Mr(p,e.name),Mr(g,e.name),oe(typeof O=="boolean",e,"internal-error"),oe(typeof B=="boolean",e,"internal-error"),Mr(v,e.name),Mr(A,e.name),Mr(P,e.name),Mr(b,e.name),Mr(E,e.name),Mr(_,e.name);const w=new pr({uid:S,auth:e,email:g,emailVerified:O,displayName:p,isAnonymous:B,photoURL:A,phoneNumber:v,tenantId:P,stsTokenManager:m,createdAt:E,lastLoginAt:_});return F&&Array.isArray(F)&&(w.providerData=F.map(I=>Object.assign({},I))),b&&(w._redirectEventId=b),w}static async _fromIdTokenResponse(e,n,r=!1){const i=new Js;i.updateFromServerResponse(n);const s=new pr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Sc(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];oe(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?WT(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Js;l.updateFromIdToken(r);const u=new pr({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Lf(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jv=new Map;function mr(t){Cr(t instanceof Function,"Expected a class definition");let e=jv.get(t);return e?(Cr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,jv.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}qT.type="NONE";const Bv=qT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mu(t,e,n){return`firebase:${t}:${e}:${n}`}class Zs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Mu(this.userKey,i.apiKey,s),this.fullPersistenceKey=Mu("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?pr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Zs(mr(Bv),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||mr(Bv);const o=Mu(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const d=await c._get(o);if(d){const p=pr._fromJSON(e,d);c!==s&&(l=p),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Zs(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Zs(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(XT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(KT(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(JT(e))return"Blackberry";if(ZT(e))return"Webos";if(GT(e))return"Safari";if((e.includes("chrome/")||QT(e))&&!e.includes("edge/"))return"Chrome";if(YT(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function KT(t=Ut()){return/firefox\//i.test(t)}function GT(t=Ut()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function QT(t=Ut()){return/crios\//i.test(t)}function XT(t=Ut()){return/iemobile/i.test(t)}function YT(t=Ut()){return/android/i.test(t)}function JT(t=Ut()){return/blackberry/i.test(t)}function ZT(t=Ut()){return/webos/i.test(t)}function Rm(t=Ut()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Wx(t=Ut()){var e;return Rm(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function qx(){return YC()&&document.documentMode===10}function eI(t=Ut()){return Rm(t)||YT(t)||ZT(t)||JT(t)||/windows phone/i.test(t)||XT(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tI(t,e=[]){let n;switch(t){case"Browser":n=zv(Ut());break;case"Worker":n=`${zv(Ut())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${cs}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kx{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gx(t,e={}){return wi(t,"GET","/v2/passwordPolicy",fs(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qx=6;class Xx{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Qx,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yx{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new $v(this),this.idTokenSubscription=new $v(this),this.beforeStateQueue=new Kx(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=FT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=mr(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Zs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await HT(this,{idToken:e}),r=await pr._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(dr(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return oe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Sc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Nx()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(dr(this.app))return Promise.reject(li(this));const n=e?ht(e):null;return n&&oe(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&oe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return dr(this.app)?Promise.reject(li(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return dr(this.app)?Promise.reject(li(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(mr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Gx(this),n=new Xx(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new us("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Hx(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&mr(e)||this._popupRedirectResolver;oe(n,this,"argument-error"),this.redirectPersistenceManager=await Zs.create(this,[mr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(oe(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return oe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=tI(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Cx(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ao(t){return ht(t)}class $v{constructor(e){this.auth=e,this.observer=null,this.addObserver=iP(n=>this.observer=n)}get next(){return oe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ch={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Jx(t){ch=t}function nI(t){return ch.loadJS(t)}function Zx(){return ch.recaptchaEnterpriseScript}function eb(){return ch.gapiScript}function tb(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const nb="recaptcha-enterprise",rb="NO_RECAPTCHA";class ib{constructor(e){this.type=nb,this.auth=Ao(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{Mx(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new Lx(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;Uv(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(rb)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&Uv(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=Zx();u.length!==0&&(u+=l),nI(u).then(()=>{i(l,s,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function Hv(t,e,n,r=!1){const i=new ib(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Wv(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Hv(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Hv(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sb(t,e){const n=_i(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Ja(s,e??{}))return i;zn(i,"already-initialized")}return n.initialize({options:e})}function ob(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(mr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function ab(t,e,n){const r=Ao(t);oe(r._canInitEmulator,r,"emulator-config-failed"),oe(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=rI(e),{host:o,port:l}=lb(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),ub()}function rI(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function lb(t){const e=rI(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:qv(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:qv(o)}}}function qv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function ub(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return fr("not implemented")}_getIdTokenResponse(e){return fr("not implemented")}_linkToIdToken(e,n){return fr("not implemented")}_getReauthenticationResolver(e){return fr("not implemented")}}async function cb(t,e){return wi(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hb(t,e){return uh(t,"POST","/v1/accounts:signInWithPassword",fs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function db(t,e){return uh(t,"POST","/v1/accounts:signInWithEmailLink",fs(t,e))}async function fb(t,e){return uh(t,"POST","/v1/accounts:signInWithEmailLink",fs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul extends Am{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ul(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ul(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Wv(e,n,"signInWithPassword",hb);case"emailLink":return db(e,{email:this._email,oobCode:this._password});default:zn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Wv(e,r,"signUpPassword",cb);case"emailLink":return fb(e,{idToken:n,email:this._email,oobCode:this._password});default:zn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eo(t,e){return uh(t,"POST","/v1/accounts:signInWithIdp",fs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pb="http://localhost";class ts extends Am{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ts(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):zn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Em(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new ts(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return eo(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,eo(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,eo(e,n)}buildRequest(){const e={requestUri:pb,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=yl(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mb(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function gb(t){const e=ha(da(t)).link,n=e?ha(da(e)).deep_link_id:null,r=ha(da(t)).deep_link_id;return(r?ha(da(r)).link:null)||r||n||e||t}class Cm{constructor(e){var n,r,i,s,o,l;const u=ha(da(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,d=(r=u.oobCode)!==null&&r!==void 0?r:null,p=mb((i=u.mode)!==null&&i!==void 0?i:null);oe(c&&d&&p,"argument-error"),this.apiKey=c,this.operation=p,this.code=d,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=gb(e);try{return new Cm(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(){this.providerId=Co.PROVIDER_ID}static credential(e,n){return ul._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Cm.parseLink(n);return oe(r,"argument-error"),ul._fromEmailAndCode(e,r.code,r.tenantId)}}Co.PROVIDER_ID="password";Co.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Co.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iI{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl extends iI{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr extends Rl{constructor(){super("facebook.com")}static credential(e){return ts._fromParams({providerId:zr.PROVIDER_ID,signInMethod:zr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return zr.credentialFromTaggedObject(e)}static credentialFromError(e){return zr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return zr.credential(e.oauthAccessToken)}catch{return null}}}zr.FACEBOOK_SIGN_IN_METHOD="facebook.com";zr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r extends Rl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ts._fromParams({providerId:$r.PROVIDER_ID,signInMethod:$r.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return $r.credentialFromTaggedObject(e)}static credentialFromError(e){return $r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return $r.credential(n,r)}catch{return null}}}$r.GOOGLE_SIGN_IN_METHOD="google.com";$r.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr extends Rl{constructor(){super("github.com")}static credential(e){return ts._fromParams({providerId:Hr.PROVIDER_ID,signInMethod:Hr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Hr.credentialFromTaggedObject(e)}static credentialFromError(e){return Hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Hr.credential(e.oauthAccessToken)}catch{return null}}}Hr.GITHUB_SIGN_IN_METHOD="github.com";Hr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr extends Rl{constructor(){super("twitter.com")}static credential(e,n){return ts._fromParams({providerId:Wr.PROVIDER_ID,signInMethod:Wr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Wr.credentialFromTaggedObject(e)}static credentialFromError(e){return Wr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Wr.credential(n,r)}catch{return null}}}Wr.TWITTER_SIGN_IN_METHOD="twitter.com";Wr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await pr._fromIdTokenResponse(e,r,i),o=Kv(r);return new yo({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Kv(r);return new yo({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Kv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc extends An{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Rc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Rc(e,n,r,i)}}function sI(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Rc._fromErrorAndOperation(t,s,e,r):s})}async function yb(t,e,n=!1){const r=await ll(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return yo._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vb(t,e,n=!1){const{auth:r}=t;if(dr(r.app))return Promise.reject(li(r));const i="reauthenticate";try{const s=await ll(t,sI(r,i,e,t),n);oe(s.idToken,r,"internal-error");const o=Sm(s.idToken);oe(o,r,"internal-error");const{sub:l}=o;return oe(t.uid===l,r,"user-mismatch"),yo._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&zn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oI(t,e,n=!1){if(dr(t.app))return Promise.reject(li(t));const r="signIn",i=await sI(t,r,e),s=await yo._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function _b(t,e){return oI(Ao(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wb(t){const e=Ao(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function Eb(t,e,n){return dr(t.app)?Promise.reject(li(t)):_b(ht(t),Co.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&wb(t),r})}function Tb(t,e,n,r){return ht(t).onIdTokenChanged(e,n,r)}function Ib(t,e,n){return ht(t).beforeAuthStateChanged(e,n)}function Sb(t,e,n,r){return ht(t).onAuthStateChanged(e,n,r)}function Rb(t){return ht(t).signOut()}const Ac="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aI{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ac,"1"),this.storage.removeItem(Ac),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ab=1e3,Cb=10;class lI extends aI{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=eI(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);qx()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Cb):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Ab)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}lI.type="LOCAL";const Pb=lI;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uI extends aI{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}uI.type="SESSION";const cI=uI;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kb(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new hh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),u=await kb(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}hh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pm(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nb{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const c=Pm("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const g=p;if(g.data.eventId===c)switch(g.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(g.data.response);break;default:clearTimeout(d),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function er(){return window}function Db(t){er().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hI(){return typeof er().WorkerGlobalScope<"u"&&typeof er().importScripts=="function"}async function xb(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function bb(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Ob(){return hI()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dI="firebaseLocalStorageDb",Lb=1,Cc="firebaseLocalStorage",fI="fbase_key";class Al{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function dh(t,e){return t.transaction([Cc],e?"readwrite":"readonly").objectStore(Cc)}function Mb(){const t=indexedDB.deleteDatabase(dI);return new Al(t).toPromise()}function Mf(){const t=indexedDB.open(dI,Lb);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Cc,{keyPath:fI})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Cc)?e(r):(r.close(),await Mb(),e(await Mf()))})})}async function Gv(t,e,n){const r=dh(t,!0).put({[fI]:e,value:n});return new Al(r).toPromise()}async function Vb(t,e){const n=dh(t,!1).get(e),r=await new Al(n).toPromise();return r===void 0?null:r.value}function Qv(t,e){const n=dh(t,!0).delete(e);return new Al(n).toPromise()}const Ub=800,Fb=3;class pI{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Mf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Fb)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return hI()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=hh._getInstance(Ob()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await xb(),!this.activeServiceWorker)return;this.sender=new Nb(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||bb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Mf();return await Gv(e,Ac,"1"),await Qv(e,Ac),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Gv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Vb(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Qv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=dh(i,!1).getAll();return new Al(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ub)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}pI.type="LOCAL";const jb=pI;new Sl(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bb(t,e){return e?mr(e):(oe(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class km extends Am{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return eo(e,this._buildIdpRequest())}_linkToIdToken(e,n){return eo(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return eo(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function zb(t){return oI(t.auth,new km(t),t.bypassAuthState)}function $b(t){const{auth:e,user:n}=t;return oe(n,e,"internal-error"),vb(n,new km(t),t.bypassAuthState)}async function Hb(t){const{auth:e,user:n}=t;return oe(n,e,"internal-error"),yb(n,new km(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mI{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return zb;case"linkViaPopup":case"linkViaRedirect":return Hb;case"reauthViaPopup":case"reauthViaRedirect":return $b;default:zn(this.auth,"internal-error")}}resolve(e){Cr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Cr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wb=new Sl(2e3,1e4);class $s extends mI{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,$s.currentPopupAction&&$s.currentPopupAction.cancel(),$s.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return oe(e,this.auth,"internal-error"),e}async onExecution(){Cr(this.filter.length===1,"Popup operations only handle one event");const e=Pm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Zn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Zn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,$s.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Zn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Wb.get())};e()}}$s.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qb="pendingRedirect",Vu=new Map;class Kb extends mI{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Vu.get(this.auth._key());if(!e){try{const r=await Gb(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Vu.set(this.auth._key(),e)}return this.bypassAuthState||Vu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Gb(t,e){const n=Yb(e),r=Xb(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Qb(t,e){Vu.set(t._key(),e)}function Xb(t){return mr(t._redirectPersistence)}function Yb(t){return Mu(qb,t.config.apiKey,t.name)}async function Jb(t,e,n=!1){if(dr(t.app))return Promise.reject(li(t));const r=Ao(t),i=Bb(r,e),o=await new Kb(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zb=10*60*1e3;class eO{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!tO(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!gI(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Zn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Zb&&this.cachedEventUids.clear(),this.cachedEventUids.has(Xv(e))}saveEventToCache(e){this.cachedEventUids.add(Xv(e)),this.lastProcessedEventTime=Date.now()}}function Xv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function gI({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function tO(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return gI(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nO(t,e={}){return wi(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rO=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,iO=/^https?/;async function sO(t){if(t.config.emulator)return;const{authorizedDomains:e}=await nO(t);for(const n of e)try{if(oO(n))return}catch{}zn(t,"unauthorized-domain")}function oO(t){const e=Of(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!iO.test(n))return!1;if(rO.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aO=new Sl(3e4,6e4);function Yv(){const t=er().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function lO(t){return new Promise((e,n)=>{var r,i,s;function o(){Yv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Yv(),n(Zn(t,"network-request-failed"))},timeout:aO.get()})}if(!((i=(r=er().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=er().gapi)===null||s===void 0)&&s.load)o();else{const l=tb("iframefcb");return er()[l]=()=>{gapi.load?o():n(Zn(t,"network-request-failed"))},nI(`${eb()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Uu=null,e})}let Uu=null;function uO(t){return Uu=Uu||lO(t),Uu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cO=new Sl(5e3,15e3),hO="__/auth/iframe",dO="emulator/auth/iframe",fO={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},pO=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function mO(t){const e=t.config;oe(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Im(e,dO):`https://${t.config.authDomain}/${hO}`,r={apiKey:e.apiKey,appName:t.name,v:cs},i=pO.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${yl(r).slice(1)}`}async function gO(t){const e=await uO(t),n=er().gapi;return oe(n,t,"internal-error"),e.open({where:document.body,url:mO(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:fO,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Zn(t,"network-request-failed"),l=er().setTimeout(()=>{s(o)},cO.get());function u(){er().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yO={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},vO=500,_O=600,wO="_blank",EO="http://localhost";class Jv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function TO(t,e,n,r=vO,i=_O){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},yO),{width:r.toString(),height:i.toString(),top:s,left:o}),c=Ut().toLowerCase();n&&(l=QT(c)?wO:n),KT(c)&&(e=e||EO,u.scrollbars="yes");const d=Object.entries(u).reduce((g,[v,A])=>`${g}${v}=${A},`,"");if(Wx(c)&&l!=="_self")return IO(e||"",l),new Jv(null);const p=window.open(e||"",l,d);oe(p,t,"popup-blocked");try{p.focus()}catch{}return new Jv(p)}function IO(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SO="__/auth/handler",RO="emulator/auth/handler",AO=encodeURIComponent("fac");async function Zv(t,e,n,r,i,s){oe(t.config.authDomain,t,"auth-domain-config-required"),oe(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:cs,eventId:i};if(e instanceof iI){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",rP(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof Rl){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const u=await t._getAppCheckToken(),c=u?`#${AO}=${encodeURIComponent(u)}`:"";return`${CO(t)}?${yl(l).slice(1)}${c}`}function CO({config:t}){return t.emulator?Im(t,RO):`https://${t.authDomain}/${SO}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dd="webStorageSupport";class PO{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=cI,this._completeRedirectFn=Jb,this._overrideRedirectResult=Qb}async _openPopup(e,n,r,i){var s;Cr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Zv(e,n,r,Of(),i);return TO(e,o,Pm())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Zv(e,n,r,Of(),i);return Db(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Cr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await gO(e),r=new eO(e);return n.register("authEvent",i=>(oe(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(dd,{type:dd},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[dd];o!==void 0&&n(!!o),zn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=sO(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return eI()||GT()||Rm()}}const kO=PO;var e_="@firebase/auth",t_="1.7.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NO{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){oe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DO(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function xO(t){Bn(new Rn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;oe(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:tI(t)},c=new Yx(r,i,s,u);return ob(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Bn(new Rn("auth-internal",e=>{const n=Ao(e.getProvider("auth").getImmediate());return(r=>new NO(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Zt(e_,t_,DO(t)),Zt(e_,t_,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bO=5*60,OO=oE("authIdTokenMaxAge")||bO;let n_=null;const LO=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>OO)return;const i=n==null?void 0:n.token;n_!==i&&(n_=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function MO(t=Jc()){const e=_i(t,"auth");if(e.isInitialized())return e.getImmediate();const n=sb(t,{popupRedirectResolver:kO,persistence:[jb,Pb,cI]}),r=oE("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=LO(s.toString());Ib(n,o,()=>o(n.currentUser)),Tb(n,l=>o(l))}}const i=rE("auth");return i&&ab(n,`http://${i}`),n}function VO(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Jx({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Zn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",VO().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});xO("Browser");var UO="firebase",FO="10.13.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Zt(UO,FO,"app");const yI="@firebase/installations",Nm="0.6.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vI=1e4,_I=`w:${Nm}`,wI="FIS_v2",jO="https://firebaseinstallations.googleapis.com/v1",BO=60*60*1e3,zO="installations",$O="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HO={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ns=new us(zO,$O,HO);function EI(t){return t instanceof An&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TI({projectId:t}){return`${jO}/projects/${t}/installations`}function II(t){return{token:t.token,requestStatus:2,expiresIn:qO(t.expiresIn),creationTime:Date.now()}}async function SI(t,e){const r=(await e.json()).error;return ns.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function RI({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function WO(t,{refreshToken:e}){const n=RI(t);return n.append("Authorization",KO(e)),n}async function AI(t){const e=await t();return e.status>=500&&e.status<600?t():e}function qO(t){return Number(t.replace("s","000"))}function KO(t){return`${wI} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GO({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=TI(t),i=RI(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:wI,appId:t.appId,sdkVersion:_I},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await AI(()=>fetch(r,l));if(u.ok){const c=await u.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:II(c.authToken)}}else throw await SI("Create Installation",u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CI(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QO(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XO=/^[cdef][\w-]{21}$/,Vf="";function YO(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=JO(t);return XO.test(n)?n:Vf}catch{return Vf}}function JO(t){return QO(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fh(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PI=new Map;function kI(t,e){const n=fh(t);NI(n,e),ZO(n,e)}function NI(t,e){const n=PI.get(t);if(n)for(const r of n)r(e)}function ZO(t,e){const n=eL();n&&n.postMessage({key:t,fid:e}),tL()}let Bi=null;function eL(){return!Bi&&"BroadcastChannel"in self&&(Bi=new BroadcastChannel("[Firebase] FID Change"),Bi.onmessage=t=>{NI(t.data.key,t.data.fid)}),Bi}function tL(){PI.size===0&&Bi&&(Bi.close(),Bi=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nL="firebase-installations-database",rL=1,rs="firebase-installations-store";let fd=null;function Dm(){return fd||(fd=fE(nL,rL,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(rs)}}})),fd}async function Pc(t,e){const n=fh(t),i=(await Dm()).transaction(rs,"readwrite"),s=i.objectStore(rs),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&kI(t,e.fid),e}async function DI(t){const e=fh(t),r=(await Dm()).transaction(rs,"readwrite");await r.objectStore(rs).delete(e),await r.done}async function ph(t,e){const n=fh(t),i=(await Dm()).transaction(rs,"readwrite"),s=i.objectStore(rs),o=await s.get(n),l=e(o);return l===void 0?await s.delete(n):await s.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&kI(t,l.fid),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xm(t){let e;const n=await ph(t.appConfig,r=>{const i=iL(r),s=sL(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Vf?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function iL(t){const e=t||{fid:YO(),registrationStatus:0};return xI(e)}function sL(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(ns.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=oL(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:aL(t)}:{installationEntry:e}}async function oL(t,e){try{const n=await GO(t,e);return Pc(t.appConfig,n)}catch(n){throw EI(n)&&n.customData.serverCode===409?await DI(t.appConfig):await Pc(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function aL(t){let e=await r_(t.appConfig);for(;e.registrationStatus===1;)await CI(100),e=await r_(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await xm(t);return r||n}return e}function r_(t){return ph(t,e=>{if(!e)throw ns.create("installation-not-found");return xI(e)})}function xI(t){return lL(t)?{fid:t.fid,registrationStatus:0}:t}function lL(t){return t.registrationStatus===1&&t.registrationTime+vI<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uL({appConfig:t,heartbeatServiceProvider:e},n){const r=cL(t,n),i=WO(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:_I,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await AI(()=>fetch(r,l));if(u.ok){const c=await u.json();return II(c)}else throw await SI("Generate Auth Token",u)}function cL(t,{fid:e}){return`${TI(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bm(t,e=!1){let n;const r=await ph(t.appConfig,s=>{if(!bI(s))throw ns.create("not-registered");const o=s.authToken;if(!e&&fL(o))return s;if(o.requestStatus===1)return n=hL(t,e),s;{if(!navigator.onLine)throw ns.create("app-offline");const l=mL(s);return n=dL(t,l),l}});return n?await n:r.authToken}async function hL(t,e){let n=await i_(t.appConfig);for(;n.authToken.requestStatus===1;)await CI(100),n=await i_(t.appConfig);const r=n.authToken;return r.requestStatus===0?bm(t,e):r}function i_(t){return ph(t,e=>{if(!bI(e))throw ns.create("not-registered");const n=e.authToken;return gL(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function dL(t,e){try{const n=await uL(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Pc(t.appConfig,r),n}catch(n){if(EI(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await DI(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Pc(t.appConfig,r)}throw n}}function bI(t){return t!==void 0&&t.registrationStatus===2}function fL(t){return t.requestStatus===2&&!pL(t)}function pL(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+BO}function mL(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function gL(t){return t.requestStatus===1&&t.requestTime+vI<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yL(t){const e=t,{installationEntry:n,registrationPromise:r}=await xm(e);return r?r.catch(console.error):bm(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vL(t,e=!1){const n=t;return await _L(n),(await bm(n,e)).token}async function _L(t){const{registrationPromise:e}=await xm(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wL(t){if(!t||!t.options)throw pd("App Configuration");if(!t.name)throw pd("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw pd(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function pd(t){return ns.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OI="installations",EL="installations-internal",TL=t=>{const e=t.getProvider("app").getImmediate(),n=wL(e),r=_i(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},IL=t=>{const e=t.getProvider("app").getImmediate(),n=_i(e,OI).getImmediate();return{getId:()=>yL(n),getToken:i=>vL(n,i)}};function SL(){Bn(new Rn(OI,TL,"PUBLIC")),Bn(new Rn(EL,IL,"PRIVATE"))}SL();Zt(yI,Nm);Zt(yI,Nm,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kc="analytics",RL="firebase_id",AL="origin",CL=60*1e3,PL="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Om="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const en=new Yc("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kL={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},cn=new us("analytics","Analytics",kL);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NL(t){if(!t.startsWith(Om)){const e=cn.create("invalid-gtag-resource",{gtagURL:t});return en.warn(e.message),""}return t}function LI(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function DL(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function xL(t,e){const n=DL("firebase-js-sdk-policy",{createScriptURL:NL}),r=document.createElement("script"),i=`${Om}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function bL(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function OL(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const u=(await LI(n)).find(c=>c.measurementId===i);u&&await e[u.appId]}}catch(l){en.error(l)}t("config",i,s)}async function LL(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const l=await LI(n);for(const u of o){const c=l.find(p=>p.measurementId===u),d=c&&e[c.appId];if(d)s.push(d);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){en.error(s)}}function ML(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[l,u]=o;await LL(t,e,n,l,u)}else if(s==="config"){const[l,u]=o;await OL(t,e,n,r,l,u)}else if(s==="consent"){const[l,u]=o;t("consent",l,u)}else if(s==="get"){const[l,u,c]=o;t("get",l,u,c)}else if(s==="set"){const[l]=o;t("set",l)}else t(s,...o)}catch(l){en.error(l)}}return i}function VL(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=ML(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function UL(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Om)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FL=30,jL=1e3;class BL{constructor(e={},n=jL){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const MI=new BL;function zL(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function $L(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:zL(r)},s=PL.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let l="";try{const u=await o.json();!((e=u.error)===null||e===void 0)&&e.message&&(l=u.error.message)}catch{}throw cn.create("config-fetch-failed",{httpStatus:o.status,responseMessage:l})}return o.json()}async function HL(t,e=MI,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw cn.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw cn.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new KL;return setTimeout(async()=>{l.abort()},CL),VI({appId:r,apiKey:i,measurementId:s},o,l,e)}async function VI(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=MI){var s;const{appId:o,measurementId:l}=t;try{await WL(r,e)}catch(u){if(l)return en.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:l};throw u}try{const u=await $L(t);return i.deleteThrottleMetadata(o),u}catch(u){const c=u;if(!qL(c)){if(i.deleteThrottleMetadata(o),l)return en.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:l};throw u}const d=Number((s=c==null?void 0:c.customData)===null||s===void 0?void 0:s.httpStatus)===503?qy(n,i.intervalMillis,FL):qy(n,i.intervalMillis),p={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return i.setThrottleMetadata(o,p),en.debug(`Calling attemptFetch again in ${d} millis`),VI(t,p,r,i)}}function WL(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(cn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function qL(t){if(!(t instanceof An)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class KL{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function GL(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QL(){if(uE())try{await cE()}catch(t){return en.warn(cn.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return en.warn(cn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function XL(t,e,n,r,i,s,o){var l;const u=HL(t);u.then(v=>{n[v.measurementId]=v.appId,t.options.measurementId&&v.measurementId!==t.options.measurementId&&en.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${v.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(v=>en.error(v)),e.push(u);const c=QL().then(v=>{if(v)return r.getId()}),[d,p]=await Promise.all([u,c]);UL(s)||xL(s,d.measurementId),i("js",new Date);const g=(l=o==null?void 0:o.config)!==null&&l!==void 0?l:{};return g[AL]="firebase",g.update=!0,p!=null&&(g[RL]=p),i("config",d.measurementId,g),d.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YL{constructor(e){this.app=e}_delete(){return delete Na[this.app.options.appId],Promise.resolve()}}let Na={},s_=[];const o_={};let md="dataLayer",JL="gtag",a_,UI,l_=!1;function ZL(){const t=[];if(lE()&&t.push("This is a browser extension environment."),ZC()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=cn.create("invalid-analytics-context",{errorInfo:e});en.warn(n.message)}}function eM(t,e,n){ZL();const r=t.options.appId;if(!r)throw cn.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)en.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw cn.create("no-api-key");if(Na[r]!=null)throw cn.create("already-exists",{id:r});if(!l_){bL(md);const{wrappedGtag:s,gtagCore:o}=VL(Na,s_,o_,md,JL);UI=s,a_=o,l_=!0}return Na[r]=XL(t,s_,o_,e,a_,md,n),new YL(t)}function tM(t=Jc()){t=ht(t);const e=_i(t,kc);return e.isInitialized()?e.getImmediate():nM(t)}function nM(t,e={}){const n=_i(t,kc);if(n.isInitialized()){const i=n.getImmediate();if(Ja(e,n.getOptions()))return i;throw cn.create("already-initialized")}return n.initialize({options:e})}function rM(t,e,n,r){t=ht(t),GL(UI,Na[t.app.options.appId],e,n,r).catch(i=>en.error(i))}const u_="@firebase/analytics",c_="0.10.7";function iM(){Bn(new Rn(kc,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return eM(r,i,n)},"PUBLIC")),Bn(new Rn("analytics-internal",t,"PRIVATE")),Zt(u_,c_),Zt(u_,c_,"esm2017");function t(e){try{const n=e.getProvider(kc).getImmediate();return{logEvent:(r,i,s)=>rM(n,r,i,s)}}catch(n){throw cn.create("interop-component-reg-failed",{reason:n})}}}iM();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FI="firebasestorage.googleapis.com",jI="storageBucket",sM=2*60*1e3,oM=10*60*1e3,aM=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke extends An{constructor(e,n,r=0){super(gd(e),`Firebase Storage: ${n} (${gd(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ke.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return gd(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Fe;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Fe||(Fe={}));function gd(t){return"storage/"+t}function Lm(){const t="An unknown error occurred, please check the error payload for server response.";return new Ke(Fe.UNKNOWN,t)}function lM(t){return new Ke(Fe.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function uM(t){return new Ke(Fe.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function cM(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ke(Fe.UNAUTHENTICATED,t)}function hM(){return new Ke(Fe.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function dM(t){return new Ke(Fe.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function BI(){return new Ke(Fe.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function zI(){return new Ke(Fe.CANCELED,"User canceled the upload/download.")}function fM(t){return new Ke(Fe.INVALID_URL,"Invalid URL '"+t+"'.")}function pM(t){return new Ke(Fe.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function mM(){return new Ke(Fe.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+jI+"' property when initializing the app?")}function $I(){return new Ke(Fe.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function gM(){return new Ke(Fe.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function yM(){return new Ke(Fe.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function vM(t){return new Ke(Fe.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Uf(t){return new Ke(Fe.INVALID_ARGUMENT,t)}function HI(){return new Ke(Fe.APP_DELETED,"The Firebase app was deleted.")}function _M(t){return new Ke(Fe.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Da(t,e){return new Ke(Fe.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function sa(t){throw new Ke(Fe.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=ln.makeFromUrl(e,n)}catch{return new ln(e,"")}if(r.path==="")return r;throw pM(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(O){O.path.charAt(O.path.length-1)==="/"&&(O.path_=O.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function c(O){O.path_=decodeURIComponent(O.path)}const d="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",v=new RegExp(`^https?://${p}/${d}/b/${i}/o${g}`,"i"),A={bucket:1,path:3},P=n===FI?"(?:storage.googleapis.com|storage.cloud.google.com)":n,b="([^?#]*)",E=new RegExp(`^https?://${P}/${i}/${b}`,"i"),S=[{regex:l,indices:u,postModify:s},{regex:v,indices:A,postModify:c},{regex:E,indices:{bucket:1,path:2},postModify:c}];for(let O=0;O<S.length;O++){const B=S[O],F=B.regex.exec(e);if(F){const T=F[B.indices.bucket];let m=F[B.indices.path];m||(m=""),r=new ln(T,m),B.postModify(r);break}}if(r==null)throw fM(e);return r}}class wM{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EM(t,e,n){let r=1,i=null,s=null,o=!1,l=0;function u(){return l===2}let c=!1;function d(...b){c||(c=!0,e.apply(null,b))}function p(b){i=setTimeout(()=>{i=null,t(v,u())},b)}function g(){s&&clearTimeout(s)}function v(b,...E){if(c){g();return}if(b){g(),d.call(null,b,...E);return}if(u()||o){g(),d.call(null,b,...E);return}r<64&&(r*=2);let S;l===1?(l=2,S=0):S=(r+Math.random())*1e3,p(S)}let A=!1;function P(b){A||(A=!0,g(),!c&&(i!==null?(b||(l=2),clearTimeout(i),p(0)):b||(l=1)))}return p(0),s=setTimeout(()=>{o=!0,P(!0)},n),P}function TM(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IM(t){return t!==void 0}function SM(t){return typeof t=="function"}function RM(t){return typeof t=="object"&&!Array.isArray(t)}function mh(t){return typeof t=="string"||t instanceof String}function h_(t){return Mm()&&t instanceof Blob}function Mm(){return typeof Blob<"u"}function d_(t,e,n,r){if(r<e)throw Uf(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Uf(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cl(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function WI(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var Wi;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Wi||(Wi={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qI(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AM{constructor(e,n,r,i,s,o,l,u,c,d,p,g=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=d,this.connectionFactory_=p,this.retry=g,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((v,A)=>{this.resolve_=v,this.reject_=A,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new gu(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=l=>{const u=l.loaded,c=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const l=s.getErrorCode()===Wi.NO_ERROR,u=s.getStatus();if(!l||qI(u,this.additionalRetryCodes_)&&this.retry){const d=s.getErrorCode()===Wi.ABORT;r(!1,new gu(!1,null,d));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new gu(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());IM(u)?s(u):s()}catch(u){o(u)}else if(l!==null){const u=Lm();u.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,u)):o(u)}else if(i.canceled){const u=this.appDelete_?HI():zI();o(u)}else{const u=BI();o(u)}};this.canceled_?n(!1,new gu(!1,null,!0)):this.backoffId_=EM(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&TM(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class gu{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function CM(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function PM(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function kM(t,e){e&&(t["X-Firebase-GMPID"]=e)}function NM(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function DM(t,e,n,r,i,s,o=!0){const l=WI(t.urlParams),u=t.url+l,c=Object.assign({},t.headers);return kM(c,e),CM(c,n),PM(c,s),NM(c,r),new AM(u,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xM(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function bM(...t){const e=xM();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Mm())return new Blob(t);throw new Ke(Fe.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function OM(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LM(t){if(typeof atob>"u")throw vM("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class yd{constructor(e,n){this.data=e,this.contentType=n||null}}function MM(t,e){switch(t){case Gn.RAW:return new yd(KI(e));case Gn.BASE64:case Gn.BASE64URL:return new yd(GI(t,e));case Gn.DATA_URL:return new yd(UM(e),FM(e))}throw Lm()}function KI(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function VM(t){let e;try{e=decodeURIComponent(t)}catch{throw Da(Gn.DATA_URL,"Malformed data URL.")}return KI(e)}function GI(t,e){switch(t){case Gn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw Da(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Gn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw Da(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=LM(e)}catch(i){throw i.message.includes("polyfill")?i:Da(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class QI{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Da(Gn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=jM(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function UM(t){const e=new QI(t);return e.base64?GI(Gn.BASE64,e.rest):VM(e.rest)}function FM(t){return new QI(t).contentType}function jM(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(e,n){let r=0,i="";h_(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(h_(this.data_)){const r=this.data_,i=OM(r,e,n);return i===null?null:new qr(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new qr(r,!0)}}static getBlob(...e){if(Mm()){const n=e.map(r=>r instanceof qr?r.data_:r);return new qr(bM.apply(null,n))}else{const n=e.map(o=>mh(o)?MM(Gn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)i[s++]=o[l]}),new qr(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XI(t){let e;try{e=JSON.parse(t)}catch{return null}return RM(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BM(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function zM(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function YI(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $M(t,e){return e}class jt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||$M}}let yu=null;function HM(t){return!mh(t)||t.length<2?t:YI(t)}function JI(){if(yu)return yu;const t=[];t.push(new jt("bucket")),t.push(new jt("generation")),t.push(new jt("metageneration")),t.push(new jt("name","fullPath",!0));function e(s,o){return HM(o)}const n=new jt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new jt("size");return i.xform=r,t.push(i),t.push(new jt("timeCreated")),t.push(new jt("updated")),t.push(new jt("md5Hash",null,!0)),t.push(new jt("cacheControl",null,!0)),t.push(new jt("contentDisposition",null,!0)),t.push(new jt("contentEncoding",null,!0)),t.push(new jt("contentLanguage",null,!0)),t.push(new jt("contentType",null,!0)),t.push(new jt("metadata","customMetadata",!0)),yu=t,yu}function WM(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new ln(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function qM(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return WM(r,t),r}function ZI(t,e,n){const r=XI(e);return r===null?null:qM(t,r,n)}function KM(t,e,n,r){const i=XI(e);if(i===null||!mh(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(c=>{const d=t.bucket,p=t.fullPath,g="/b/"+o(d)+"/o/"+o(p),v=Cl(g,n,r),A=WI({alt:"media",token:c});return v+A})[0]}function eS(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class Po{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _r(t){if(!t)throw Lm()}function Vm(t,e){function n(r,i){const s=ZI(t,i,e);return _r(s!==null),s}return n}function GM(t,e){function n(r,i){const s=ZI(t,i,e);return _r(s!==null),KM(s,i,t.host,t._protocol)}return n}function Pl(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=hM():i=cM():n.getStatus()===402?i=uM(t.bucket):n.getStatus()===403?i=dM(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function tS(t){const e=Pl(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=lM(t.path)),s.serverResponse=i.serverResponse,s}return n}function QM(t,e,n){const r=e.fullServerUrl(),i=Cl(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,l=new Po(i,s,Vm(t,n),o);return l.errorHandler=tS(e),l}function XM(t,e,n){const r=e.fullServerUrl(),i=Cl(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,l=new Po(i,s,GM(t,n),o);return l.errorHandler=tS(e),l}function YM(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function nS(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=YM(null,e)),r}function JM(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let S="";for(let O=0;O<2;O++)S=S+Math.random().toString().slice(2);return S}const u=l();o["Content-Type"]="multipart/related; boundary="+u;const c=nS(e,r,i),d=eS(c,n),p="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+u+`\r
Content-Type: `+c.contentType+`\r
\r
`,g=`\r
--`+u+"--",v=qr.getBlob(p,r,g);if(v===null)throw $I();const A={name:c.fullPath},P=Cl(s,t.host,t._protocol),b="POST",E=t.maxUploadRetryTime,_=new Po(P,b,Vm(t,n),E);return _.urlParams=A,_.headers=o,_.body=v.uploadData(),_.errorHandler=Pl(e),_}class Nc{constructor(e,n,r,i){this.current=e,this.total=n,this.finalized=!!r,this.metadata=i||null}}function Um(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{_r(!1)}return _r(!!n&&(e||["active"]).indexOf(n)!==-1),n}function ZM(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o=nS(e,r,i),l={name:o.fullPath},u=Cl(s,t.host,t._protocol),c="POST",d={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},p=eS(o,n),g=t.maxUploadRetryTime;function v(P){Um(P);let b;try{b=P.getResponseHeader("X-Goog-Upload-URL")}catch{_r(!1)}return _r(mh(b)),b}const A=new Po(u,c,v,g);return A.urlParams=l,A.headers=d,A.body=p,A.errorHandler=Pl(e),A}function e2(t,e,n,r){const i={"X-Goog-Upload-Command":"query"};function s(c){const d=Um(c,["active","final"]);let p=null;try{p=c.getResponseHeader("X-Goog-Upload-Size-Received")}catch{_r(!1)}p||_r(!1);const g=Number(p);return _r(!isNaN(g)),new Nc(g,r.size(),d==="final")}const o="POST",l=t.maxUploadRetryTime,u=new Po(n,o,s,l);return u.headers=i,u.errorHandler=Pl(e),u}const f_=256*1024;function t2(t,e,n,r,i,s,o,l){const u=new Nc(0,0);if(o?(u.current=o.current,u.total=o.total):(u.current=0,u.total=r.size()),r.size()!==u.total)throw gM();const c=u.total-u.current;let d=c;i>0&&(d=Math.min(d,i));const p=u.current,g=p+d;let v="";d===0?v="finalize":c===d?v="upload, finalize":v="upload";const A={"X-Goog-Upload-Command":v,"X-Goog-Upload-Offset":`${u.current}`},P=r.slice(p,g);if(P===null)throw $I();function b(O,B){const F=Um(O,["active","final"]),T=u.current+d,m=r.size();let w;return F==="final"?w=Vm(e,s)(O,B):w=null,new Nc(T,m,F==="final",w)}const E="POST",_=e.maxUploadRetryTime,S=new Po(n,E,b,_);return S.headers=A,S.body=P.uploadData(),S.progressCallback=l||null,S.errorHandler=Pl(t),S}const Kt={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function vd(t){switch(t){case"running":case"pausing":case"canceling":return Kt.RUNNING;case"paused":return Kt.PAUSED;case"success":return Kt.SUCCESS;case"canceled":return Kt.CANCELED;case"error":return Kt.ERROR;default:return Kt.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n2{constructor(e,n,r){if(SM(e)||n!=null||r!=null)this.next=e,this.error=n??void 0,this.complete=r??void 0;else{const s=e;this.next=s.next,this.error=s.error,this.complete=s.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rs(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class r2{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Wi.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Wi.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Wi.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw sa("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw sa("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw sa("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw sa("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw sa("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class i2 extends r2{initXhr(){this.xhr_.responseType="text"}}function ks(){return new i2}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s2{constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=JI(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{if(this._request=void 0,this._chunkMultiplier=1,i._codeEquals(Fe.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const s=this.isExponentialBackoffExpired();if(qI(i.status,[]))if(s)i=BI();else{this.sleepTime=Math.max(this.sleepTime*2,aM),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=i,this._transition("error")}},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals(Fe.CANCELED)?this.completeTransitions_():(this._error=i,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((i,s)=>{this._resolve=i,this._reject=s,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=ZM(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,ks,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._uploadUrl=s,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const i=e2(this._ref.storage,this._ref._location,e,this._blob),s=this._ref.storage._makeRequest(i,ks,n,r);this._request=s,s.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=f_*this._chunkMultiplier,n=new Nc(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((i,s)=>{let o;try{o=t2(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(u){this._error=u,this._transition("error");return}const l=this._ref.storage._makeRequest(o,ks,i,s,!1);this._request=l,l.getPromise().then(u=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(u.current),u.finalized?(this._metadata=u.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){f_*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=QM(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(r,ks,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=JM(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,ks,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=zI(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=vd(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,i){const s=new n2(n||void 0,r||void 0,i||void 0);return this._addObserver(s),()=>{this._removeObserver(s)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(vd(this._state)){case Kt.SUCCESS:Rs(this._resolve.bind(null,this.snapshot))();break;case Kt.CANCELED:case Kt.ERROR:const n=this._reject;Rs(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(vd(this._state)){case Kt.RUNNING:case Kt.PAUSED:e.next&&Rs(e.next.bind(e,this.snapshot))();break;case Kt.SUCCESS:e.complete&&Rs(e.complete.bind(e))();break;case Kt.CANCELED:case Kt.ERROR:e.error&&Rs(e.error.bind(e,this._error))();break;default:e.error&&Rs(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e,n){this._service=e,n instanceof ln?this._location=n:this._location=ln.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new is(e,n)}get root(){const e=new ln(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return YI(this._location.path)}get storage(){return this._service}get parent(){const e=BM(this._location.path);if(e===null)return null;const n=new ln(this._location.bucket,e);return new is(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw _M(e)}}function o2(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new s2(t,new qr(e),n)}function a2(t){t._throwIfRoot("getDownloadURL");const e=XM(t.storage,t._location,JI());return t.storage.makeRequestWithTokens(e,ks).then(n=>{if(n===null)throw yM();return n})}function l2(t,e){const n=zM(t._location.path,e),r=new ln(t._location.bucket,n);return new is(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u2(t){return/^[A-Za-z]+:\/\//.test(t)}function c2(t,e){return new is(t,e)}function rS(t,e){if(t instanceof Fm){const n=t;if(n._bucket==null)throw mM();const r=new is(n,n._bucket);return e!=null?rS(r,e):r}else return e!==void 0?l2(t,e):t}function h2(t,e){if(e&&u2(e)){if(t instanceof Fm)return c2(t,e);throw Uf("To use ref(service, url), the first argument must be a Storage instance.")}else return rS(t,e)}function p_(t,e){const n=e==null?void 0:e[jI];return n==null?null:ln.makeFromBucketSpec(n,t)}function d2(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:aE(i,t.app.options.projectId))}class Fm{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=FI,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=sM,this._maxUploadRetryTime=oM,this._requests=new Set,i!=null?this._bucket=ln.makeFromBucketSpec(i,this._host):this._bucket=p_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=ln.makeFromBucketSpec(this._url,e):this._bucket=p_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){d_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){d_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new is(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new wM(HI());{const o=DM(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const m_="@firebase/storage",g_="0.13.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iS="storage";function f2(t,e,n){return t=ht(t),o2(t,e,n)}function p2(t){return t=ht(t),a2(t)}function m2(t,e){return t=ht(t),h2(t,e)}function g2(t=Jc(),e){t=ht(t);const r=_i(t,iS).getImmediate({identifier:e}),i=iE("storage");return i&&y2(r,...i),r}function y2(t,e,n,r={}){d2(t,e,n,r)}function v2(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Fm(n,r,i,e,cs)}function _2(){Bn(new Rn(iS,v2,"PUBLIC").setMultipleInstances(!0)),Zt(m_,g_,""),Zt(m_,g_,"esm2017")}_2();const w2={apiKey:"AIzaSyAacfv7r3YWPHucqubBNNDAD-loLCSNmLs",authDomain:"digital-aura-f399b.firebaseapp.com",projectId:"digital-aura-f399b",storageBucket:"digital-aura-f399b.appspot.com",messagingSenderId:"921083620090",appId:"1:921083620090:web:d4fbcd31c23d1d38ca7743",measurementId:"G-QC8BNYKBNM"},gh=pE(w2);tM(gh);const Dc=ux(gh),E2=g2(gh),jm=MO(gh),sS=U.createContext(),T2=({children:t})=>{const[e,n]=U.useState(!1);return console.log(e),U.useEffect(()=>{const r=Sb(jm,i=>{n(!!i)});return()=>r()},[]),D.jsx(sS.Provider,{value:{isAuthenticated:e,setIsAuthenticated:n},children:t})},Bm=()=>U.useContext(sS);function I2({showNav:t,setShowNav:e,search:n,setSearch:r}){const{isAuthenticated:i,setIsAuthenticated:s}=Bm();function o(){e(!0)}function l(){e(!1)}return D.jsxs("div",{className:"header",children:[D.jsx("div",{className:"logo",children:D.jsxs(pt,{to:"/",children:[" ",D.jsx("img",{src:FC,alt:""})]})}),D.jsxs("div",{className:"navLinks",children:[D.jsx(pt,{to:"/",className:"navLink",children:"Home"}),D.jsx(pt,{to:"/categoryPage?category=programming",className:"navLink",children:"Programming"}),D.jsx(pt,{to:"/categoryPage?category=gadgets",className:"navLink",children:"Gadgets "}),D.jsx(pt,{to:"/categoryPage?category=trends",className:"navLink",children:"Trends"}),D.jsx(pt,{to:"/categoryPage?category=techNews",className:"navLink",children:"Tech News"})]}),D.jsxs("div",{className:"navIcons",style:{display:"flex",alignItems:"center"},children:[D.jsxs("div",{className:"navSearch",children:[D.jsx("i",{className:"fa-solid fa-magnifying-glass"}),D.jsx("input",{type:"text",placeholder:"Search...",value:n,onChange:u=>{r(u.target.value)}})]}),D.jsx(pt,{to:i?"/dashboard":"/login",className:"profileIcon",children:D.jsx("img",{src:"https://cdn-icons-png.flaticon.com/128/3135/3135715.png",alt:""})}),D.jsx("div",{className:"menuBar",children:t?D.jsx("i",{className:"fa-regular fa-circle-xmark ",onClick:l,style:{opacity:".8",display:t?"block":"none",cursor:"pointer"}}):D.jsx("i",{className:"fa-solid fa-bars ",onClick:o,style:{opacity:".8",display:t?"none":"inline-block",cursor:"pointer"}})})]})]})}function S2(){return D.jsx("div",{className:"footer",children:D.jsx("div",{children:D.jsx("p",{children:"© 2024: All Right Reserved "})})})}function R2({showNav:t,setShowNav:e}){return D.jsx("div",{className:"sideNav",style:{display:t?"block":"none"},children:D.jsxs("div",{className:"sideNavLinks",children:[D.jsx(pt,{to:"/",className:"sideNavLink",children:"Home"}),D.jsx(pt,{to:"/categoryPage?category=programming",className:"sideNavLink",children:"Programming"}),D.jsx(pt,{to:"/categoryPage?category=gadgets",className:"sideNavLink",children:"Gadgets "}),D.jsx(pt,{to:"/categoryPage?category=trends",className:"sideNavLink",children:"Trends"}),D.jsx(pt,{to:"/categoryPage?category=techNews",className:"sideNavLink",children:"Tech News"})]})})}function A2({search:t,setSearch:e,blogData:n}){let r=t.trim();const i=n.filter(o=>o.category.toLowerCase().includes(r.toLowerCase())||o.title.toLowerCase().includes(r.toLowerCase()));console.log(i);function s(){e("")}return D.jsx("div",{className:"searchContainer",style:{display:r==""?"none":"flex"},children:D.jsx("div",{className:"searchTab",style:{paddingBottom:"10px"},children:i.map(o=>D.jsx(pt,{to:`/detail?id=${o.id}`,className:"searchLink",onClick:s,children:o.title},o.id))})})}function C2(){const[t,e]=U.useState([]),[n,r]=U.useState(!1),[i,s]=U.useState("");return console.log(i),U.useEffect(()=>{(async()=>{const l=Ec(Dc,"blogData","blogData"),u=await MT(l);if(u.exists()){const c=u.data().blogData||[];e(c)}else console.log("No such document!")})()},[]),D.jsxs(D.Fragment,{children:[D.jsx(I2,{showNav:n,setShowNav:r,search:i,setSearch:s}),D.jsx(R2,{showNav:n,setShowNav:r}),D.jsx(A2,{search:i,setSearch:s,blogData:t}),D.jsx(gC,{context:{blogData:t,setBlogData:e,search:i,setSearch:s}}),D.jsx(S2,{})]})}function P2({data:t}){return D.jsxs(pt,{to:`/detail?id=${t.id}`,className:"mainCard",children:[D.jsx("div",{className:"mainCardImg",children:D.jsx("img",{src:t.imageUrl,alt:""})}),D.jsxs("div",{className:"mainCardContent",children:[D.jsx("div",{className:"category",children:D.jsx("p",{children:t.category})}),D.jsx("div",{className:"title",children:D.jsx("p",{children:t.title})}),D.jsxs("div",{className:"publishDetail",children:[D.jsxs("p",{children:[" ",D.jsx("i",{className:"fa-solid fa-user"}),"Jazab"]}),D.jsxs("p",{children:[D.jsx("i",{className:"fa-regular fa-calendar-days"}),"17 July"]})]}),D.jsx("div",{className:"mainCardText",children:D.jsx("p",{children:"Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet ..."})})]})]})}function yh(){const{pathname:t}=ls();return U.useEffect(()=>{window.scrollTo(0,0)},[t]),null}function k2({data:t}){return D.jsxs(pt,{to:`/detail?id=${t.id}`,className:"mainCard",children:[D.jsx("div",{className:"mainCardImg",children:D.jsx("img",{src:t.imageUrl,alt:""})}),D.jsx("div",{className:"TrendCardContent",children:D.jsx("div",{className:"TrendCardTitle",children:D.jsxs("p",{children:[t.title.split(" ").slice(0,7).join(" "),"..."]})})}),D.jsx(yh,{})]})}function oS({data:t}){const e=(n,r)=>{const i=document.createElement("div");return i.innerHTML=n,(i.textContent||i.innerText||"").split(" ").slice(0,r).join(" ")+"..."};return D.jsxs(pt,{to:`/detail?id=${t.id}`,className:"blogCard",children:[D.jsx("div",{className:"blogImg",children:D.jsx("img",{src:t.imageUrl,alt:""})}),D.jsxs("div",{className:"blogCartContent",children:[D.jsx("div",{className:"cardCategory",children:D.jsx("p",{children:t.category})}),D.jsx("div",{className:"cardTitle",children:D.jsx("p",{children:t.title})}),D.jsx("div",{className:"cardText",children:D.jsx("p",{children:e(t.content,18)})})]})]})}function N2(){const{blogData:t,setBlogData:e}=gl(),n=t.slice(-3),r=t.slice(1,4),i=t.slice(1,2);return t.length===0?D.jsx("div",{style:{marginTop:"200px",marginBottom:"200px"},children:D.jsx("p",{children:"Loading..."})}):D.jsxs("div",{className:"home",children:[D.jsxs("div",{className:"mainSection",children:[D.jsx("div",{className:"mainCard",children:i.map((s,o)=>D.jsx(P2,{data:s},o))}),D.jsxs("div",{className:"TrendingBlog",children:[D.jsx("p",{className:"trendingTitle",children:"Trending Blogs"}),r.map((s,o)=>D.jsx(k2,{data:s},o))]})]}),D.jsxs("div",{className:"recentBlogs",children:[D.jsx("h1",{children:"Recent Post"}),D.jsx("div",{className:"recentBlogBox",children:n.map((s,o)=>D.jsx(oS,{data:s},o))})]}),D.jsx(yh,{})]})}function D2(){const{blogData:t,setBlogData:e}=gl(),n=ls(),i=new URLSearchParams(n.search).get("id"),s=t.filter(o=>o.id==i);return s.length==0?D.jsx("div",{children:D.jsx("p",{children:"Loading..."})}):D.jsxs("div",{className:"detail",children:[D.jsxs("div",{className:"detailBox",children:[D.jsx("div",{className:"detailImg",children:D.jsx("img",{src:s[0].imageUrl,alt:""})}),D.jsxs("div",{className:"detailContent",children:[D.jsx("div",{className:"detailTitle",children:D.jsx("p",{children:"Running macOS and Windows 10 on the Same Computer"})}),D.jsx("div",{className:"detailCategory",children:D.jsx("p",{children:"Tech News"})}),D.jsx("div",{className:"detailText",children:D.jsx("div",{dangerouslySetInnerHTML:{__html:s.length>0?s[0].content:""}})})]})]}),D.jsx(yh,{})]})}function x2(){const{blogData:t,setBlogData:e}=gl(),n=ls(),i=new URLSearchParams(n.search).get("category"),s=t.filter(o=>o.category==i);return console.log(s),t.length===0?D.jsx("div",{children:D.jsx("p",{children:"Loading..."})}):D.jsxs("div",{className:"categoryPage",children:[D.jsx("h1",{children:"Tech News"}),D.jsx("div",{className:"cardContainer",children:s.map((o,l)=>D.jsx(oS,{data:o},l))})]})}var aS={exports:{}},b2="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",O2=b2,L2=O2;function lS(){}function uS(){}uS.resetWarningCache=lS;var M2=function(){function t(r,i,s,o,l,u){if(u!==L2){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:uS,resetWarningCache:lS};return n.PropTypes=n,n};aS.exports=M2();var j=aS.exports,Ff=function(){return Ff=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},Ff.apply(this,arguments)},cS={onActivate:j.func,onAddUndo:j.func,onBeforeAddUndo:j.func,onBeforeExecCommand:j.func,onBeforeGetContent:j.func,onBeforeRenderUI:j.func,onBeforeSetContent:j.func,onBeforePaste:j.func,onBlur:j.func,onChange:j.func,onClearUndos:j.func,onClick:j.func,onContextMenu:j.func,onCommentChange:j.func,onCompositionEnd:j.func,onCompositionStart:j.func,onCompositionUpdate:j.func,onCopy:j.func,onCut:j.func,onDblclick:j.func,onDeactivate:j.func,onDirty:j.func,onDrag:j.func,onDragDrop:j.func,onDragEnd:j.func,onDragGesture:j.func,onDragOver:j.func,onDrop:j.func,onExecCommand:j.func,onFocus:j.func,onFocusIn:j.func,onFocusOut:j.func,onGetContent:j.func,onHide:j.func,onInit:j.func,onInput:j.func,onKeyDown:j.func,onKeyPress:j.func,onKeyUp:j.func,onLoadContent:j.func,onMouseDown:j.func,onMouseEnter:j.func,onMouseLeave:j.func,onMouseMove:j.func,onMouseOut:j.func,onMouseOver:j.func,onMouseUp:j.func,onNodeChange:j.func,onObjectResizeStart:j.func,onObjectResized:j.func,onObjectSelected:j.func,onPaste:j.func,onPostProcess:j.func,onPostRender:j.func,onPreProcess:j.func,onProgressState:j.func,onRedo:j.func,onRemove:j.func,onReset:j.func,onSaveContent:j.func,onSelectionChange:j.func,onSetAttrib:j.func,onSetContent:j.func,onShow:j.func,onSubmit:j.func,onUndo:j.func,onVisualAid:j.func,onSkinLoadError:j.func,onThemeLoadError:j.func,onModelLoadError:j.func,onPluginLoadError:j.func,onIconsLoadError:j.func,onLanguageLoadError:j.func,onScriptsLoad:j.func,onScriptsLoadError:j.func},V2=Ff({apiKey:j.string,licenseKey:j.string,id:j.string,inline:j.bool,init:j.object,initialValue:j.string,onEditorChange:j.func,value:j.string,tagName:j.string,tabIndex:j.number,cloudChannel:j.string,plugins:j.oneOfType([j.string,j.array]),toolbar:j.oneOfType([j.string,j.array]),disabled:j.bool,textareaName:j.string,tinymceScriptSrc:j.oneOfType([j.string,j.arrayOf(j.string),j.arrayOf(j.shape({src:j.string,async:j.bool,defer:j.bool}))]),rollback:j.oneOfType([j.number,j.oneOf([!1])]),scriptLoading:j.shape({async:j.bool,defer:j.bool,delay:j.number})},cS),_d=function(t){return typeof t=="function"},y_=function(t){return t in cS},v_=function(t){return t.substr(2)},U2=function(t,e,n,r,i,s,o){var l=Object.keys(i).filter(y_),u=Object.keys(s).filter(y_),c=l.filter(function(p){return s[p]===void 0}),d=u.filter(function(p){return i[p]===void 0});c.forEach(function(p){var g=v_(p),v=o[g];n(g,v),delete o[g]}),d.forEach(function(p){var g=r(t,p),v=v_(p);o[v]=g,e(v,g)})},F2=function(t,e,n,r,i){return U2(i,t.on.bind(t),t.off.bind(t),function(s,o){return function(l){var u;return(u=s(o))===null||u===void 0?void 0:u(l,t)}},e,n,r)},__=0,hS=function(t){var e=Date.now(),n=Math.floor(Math.random()*1e9);return __++,t+"_"+n+__+String(e)},w_=function(t){return t!==null&&(t.tagName.toLowerCase()==="textarea"||t.tagName.toLowerCase()==="input")},E_=function(t){return typeof t>"u"||t===""?[]:Array.isArray(t)?t:t.split(" ")},j2=function(t,e){return E_(t).concat(E_(e))},B2=function(){return window.InputEvent&&typeof InputEvent.prototype.getTargetRanges=="function"},z2=function(t){if(!("isConnected"in Node.prototype)){for(var e=t,n=t.parentNode;n!=null;)e=n,n=e.parentNode;return e===t.ownerDocument}return t.isConnected},T_=function(t,e){t!==void 0&&(t.mode!=null&&typeof t.mode=="object"&&typeof t.mode.set=="function"?t.mode.set(e):t.setMode(e))},jf=function(){return jf=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},jf.apply(this,arguments)},$2=function(t,e,n){var r,i,s=t.createElement("script");s.referrerPolicy="origin",s.type="application/javascript",s.id=e.id,s.src=e.src,s.async=(r=e.async)!==null&&r!==void 0?r:!1,s.defer=(i=e.defer)!==null&&i!==void 0?i:!1;var o=function(){s.removeEventListener("load",o),s.removeEventListener("error",l),n(e.src)},l=function(u){s.removeEventListener("load",o),s.removeEventListener("error",l),n(e.src,u)};s.addEventListener("load",o),s.addEventListener("error",l),t.head&&t.head.appendChild(s)},H2=function(t){var e={},n=function(o,l){var u=e[o];u.done=!0,u.error=l;for(var c=0,d=u.handlers;c<d.length;c++){var p=d[c];p(o,l)}u.handlers=[]},r=function(o,l,u){var c=function(_){return u!==void 0?u(_):console.error(_)};if(o.length===0){c(new Error("At least one script must be provided"));return}for(var d=0,p=!1,g=function(_,S){p||(S?(p=!0,c(S)):++d===o.length&&l())},v=0,A=o;v<A.length;v++){var P=A[v],b=e[P.src];if(b)b.done?g(P.src,b.error):b.handlers.push(g);else{var E=hS("tiny-");e[P.src]={id:E,src:P.src,done:!1,error:null,handlers:[g]},$2(t,jf({id:E},P),n)}}},i=function(){for(var o,l=0,u=Object.values(e);l<u.length;l++){var c=u[l],d=t.getElementById(c.id);d!=null&&d.tagName==="SCRIPT"&&((o=d.parentNode)===null||o===void 0||o.removeChild(d))}e={}},s=function(){return t};return{loadScripts:r,deleteScripts:i,getDocument:s}},W2=function(){var t=[],e=function(i){var s=t.find(function(o){return o.getDocument()===i});return s===void 0&&(s=H2(i),t.push(s)),s},n=function(i,s,o,l,u){var c=function(){return e(i).loadScripts(s,l,u)};o>0?setTimeout(c,o):c()},r=function(){for(var i=t.pop();i!=null;i=t.pop())i.deleteScripts()};return{loadList:n,reinitialize:r}},q2=W2(),wd=function(t){var e=t;return e&&e.tinymce?e.tinymce:null},K2=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(r[s]=i[s])},t(e,n)};return function(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");t(e,n);function r(){this.constructor=e}e.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),Hs=function(){return Hs=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},Hs.apply(this,arguments)},G2=function(t){K2(e,t);function e(n){var r,i,s,o=t.call(this,n)||this;return o.rollbackTimer=void 0,o.valueCursor=void 0,o.rollbackChange=function(){var l=o.editor,u=o.props.value;l&&u&&u!==o.currentContent&&l.undoManager.ignore(function(){if(l.setContent(u),o.valueCursor&&(!o.inline||l.hasFocus()))try{l.selection.moveToBookmark(o.valueCursor)}catch{}}),o.rollbackTimer=void 0},o.handleBeforeInput=function(l){if(o.props.value!==void 0&&o.props.value===o.currentContent&&o.editor&&(!o.inline||o.editor.hasFocus()))try{o.valueCursor=o.editor.selection.getBookmark(3)}catch{}},o.handleBeforeInputSpecial=function(l){(l.key==="Enter"||l.key==="Backspace"||l.key==="Delete")&&o.handleBeforeInput(l)},o.handleEditorChange=function(l){var u=o.editor;if(u&&u.initialized){var c=u.getContent();o.props.value!==void 0&&o.props.value!==c&&o.props.rollback!==!1&&(o.rollbackTimer||(o.rollbackTimer=window.setTimeout(o.rollbackChange,typeof o.props.rollback=="number"?o.props.rollback:200))),c!==o.currentContent&&(o.currentContent=c,_d(o.props.onEditorChange)&&o.props.onEditorChange(c,u))}},o.handleEditorChangeSpecial=function(l){(l.key==="Backspace"||l.key==="Delete")&&o.handleEditorChange(l)},o.initialise=function(l){var u,c,d;l===void 0&&(l=0);var p=o.elementRef.current;if(p){if(!z2(p)){if(l===0)setTimeout(function(){return o.initialise(1)},1);else if(l<100)setTimeout(function(){return o.initialise(l+1)},100);else throw new Error("tinymce can only be initialised when in a document");return}var g=wd(o.view);if(!g)throw new Error("tinymce should have been loaded into global scope");var v=Hs(Hs(Hs(Hs({},o.props.init),{selector:void 0,target:p,readonly:o.props.disabled,inline:o.inline,plugins:j2((u=o.props.init)===null||u===void 0?void 0:u.plugins,o.props.plugins),toolbar:(c=o.props.toolbar)!==null&&c!==void 0?c:(d=o.props.init)===null||d===void 0?void 0:d.toolbar}),o.props.licenseKey?{license_key:o.props.licenseKey}:{}),{setup:function(A){o.editor=A,o.bindHandlers({}),o.inline&&!w_(p)&&A.once("PostRender",function(P){A.setContent(o.getInitialValue(),{no_events:!0})}),o.props.init&&_d(o.props.init.setup)&&o.props.init.setup(A)},init_instance_callback:function(A){var P,b,E=o.getInitialValue();o.currentContent=(P=o.currentContent)!==null&&P!==void 0?P:A.getContent(),o.currentContent!==E&&(o.currentContent=E,A.setContent(E),A.undoManager.clear(),A.undoManager.add(),A.setDirty(!1));var _=(b=o.props.disabled)!==null&&b!==void 0?b:!1;T_(o.editor,_?"readonly":"design"),o.props.init&&_d(o.props.init.init_instance_callback)&&o.props.init.init_instance_callback(A)}});o.inline||(p.style.visibility=""),w_(p)&&(p.value=o.getInitialValue()),g.init(v)}},o.id=o.props.id||hS("tiny-react"),o.elementRef=U.createRef(),o.inline=(s=(r=o.props.inline)!==null&&r!==void 0?r:(i=o.props.init)===null||i===void 0?void 0:i.inline)!==null&&s!==void 0?s:!1,o.boundHandlers={},o}return Object.defineProperty(e.prototype,"view",{get:function(){var n,r;return(r=(n=this.elementRef.current)===null||n===void 0?void 0:n.ownerDocument.defaultView)!==null&&r!==void 0?r:window},enumerable:!1,configurable:!0}),e.prototype.componentDidUpdate=function(n){var r=this,i,s;if(this.rollbackTimer&&(clearTimeout(this.rollbackTimer),this.rollbackTimer=void 0),this.editor&&(this.bindHandlers(n),this.editor.initialized)){if(this.currentContent=(i=this.currentContent)!==null&&i!==void 0?i:this.editor.getContent(),typeof this.props.initialValue=="string"&&this.props.initialValue!==n.initialValue)this.editor.setContent(this.props.initialValue),this.editor.undoManager.clear(),this.editor.undoManager.add(),this.editor.setDirty(!1);else if(typeof this.props.value=="string"&&this.props.value!==this.currentContent){var o=this.editor;o.undoManager.transact(function(){var u;if(!r.inline||o.hasFocus())try{u=o.selection.getBookmark(3)}catch{}var c=r.valueCursor;if(o.setContent(r.props.value),!r.inline||o.hasFocus())for(var d=0,p=[u,c];d<p.length;d++){var g=p[d];if(g)try{o.selection.moveToBookmark(g),r.valueCursor=g;break}catch{}}})}if(this.props.disabled!==n.disabled){var l=(s=this.props.disabled)!==null&&s!==void 0?s:!1;T_(this.editor,l?"readonly":"design")}}},e.prototype.componentDidMount=function(){var n=this,r,i,s,o,l;if(wd(this.view)!==null)this.initialise();else if(Array.isArray(this.props.tinymceScriptSrc)&&this.props.tinymceScriptSrc.length===0)(i=(r=this.props).onScriptsLoadError)===null||i===void 0||i.call(r,new Error("No `tinymce` global is present but the `tinymceScriptSrc` prop was an empty array."));else if(!((s=this.elementRef.current)===null||s===void 0)&&s.ownerDocument){var u=function(){var d,p;(p=(d=n.props).onScriptsLoad)===null||p===void 0||p.call(d),n.initialise()},c=function(d){var p,g;(g=(p=n.props).onScriptsLoadError)===null||g===void 0||g.call(p,d)};q2.loadList(this.elementRef.current.ownerDocument,this.getScriptSources(),(l=(o=this.props.scriptLoading)===null||o===void 0?void 0:o.delay)!==null&&l!==void 0?l:0,u,c)}},e.prototype.componentWillUnmount=function(){var n=this,r=this.editor;r&&(r.off(this.changeEvents(),this.handleEditorChange),r.off(this.beforeInputEvent(),this.handleBeforeInput),r.off("keypress",this.handleEditorChangeSpecial),r.off("keydown",this.handleBeforeInputSpecial),r.off("NewBlock",this.handleEditorChange),Object.keys(this.boundHandlers).forEach(function(i){r.off(i,n.boundHandlers[i])}),this.boundHandlers={},r.remove(),this.editor=void 0)},e.prototype.render=function(){return this.inline?this.renderInline():this.renderIframe()},e.prototype.changeEvents=function(){var n,r,i,s=(i=(r=(n=wd(this.view))===null||n===void 0?void 0:n.Env)===null||r===void 0?void 0:r.browser)===null||i===void 0?void 0:i.isIE();return s?"change keyup compositionend setcontent CommentChange":"change input compositionend setcontent CommentChange"},e.prototype.beforeInputEvent=function(){return B2()?"beforeinput SelectionChange":"SelectionChange"},e.prototype.renderInline=function(){var n=this.props.tagName,r=n===void 0?"div":n;return U.createElement(r,{ref:this.elementRef,id:this.id,tabIndex:this.props.tabIndex})},e.prototype.renderIframe=function(){return U.createElement("textarea",{ref:this.elementRef,style:{visibility:"hidden"},name:this.props.textareaName,id:this.id,tabIndex:this.props.tabIndex})},e.prototype.getScriptSources=function(){var n,r,i=(n=this.props.scriptLoading)===null||n===void 0?void 0:n.async,s=(r=this.props.scriptLoading)===null||r===void 0?void 0:r.defer;if(this.props.tinymceScriptSrc!==void 0)return typeof this.props.tinymceScriptSrc=="string"?[{src:this.props.tinymceScriptSrc,async:i,defer:s}]:this.props.tinymceScriptSrc.map(function(c){return typeof c=="string"?{src:c,async:i,defer:s}:c});var o=this.props.cloudChannel,l=this.props.apiKey?this.props.apiKey:"no-api-key",u="https://cdn.tiny.cloud/1/".concat(l,"/tinymce/").concat(o,"/tinymce.min.js");return[{src:u,async:i,defer:s}]},e.prototype.getInitialValue=function(){return typeof this.props.initialValue=="string"?this.props.initialValue:typeof this.props.value=="string"?this.props.value:""},e.prototype.bindHandlers=function(n){var r=this;if(this.editor!==void 0){F2(this.editor,n,this.props,this.boundHandlers,function(l){return r.props[l]});var i=function(l){return l.onEditorChange!==void 0||l.value!==void 0},s=i(n),o=i(this.props);!s&&o?(this.editor.on(this.changeEvents(),this.handleEditorChange),this.editor.on(this.beforeInputEvent(),this.handleBeforeInput),this.editor.on("keydown",this.handleBeforeInputSpecial),this.editor.on("keyup",this.handleEditorChangeSpecial),this.editor.on("NewBlock",this.handleEditorChange)):s&&!o&&(this.editor.off(this.changeEvents(),this.handleEditorChange),this.editor.off(this.beforeInputEvent(),this.handleBeforeInput),this.editor.off("keydown",this.handleBeforeInputSpecial),this.editor.off("keyup",this.handleEditorChangeSpecial),this.editor.off("NewBlock",this.handleEditorChange))}},e.propTypes=V2,e.defaultProps={cloudChannel:"7"},e}(U.Component);function Q2(){const[t,e]=U.useState(""),[n,r]=U.useState(null),[i,s]=U.useState(""),[o,l]=U.useState(0),[u,c]=U.useState(""),[d,p]=U.useState(""),{blogData:g,setBlogData:v}=gl(),A=zp();U.useEffect(()=>{l(0)},[n]),U.useEffect(()=>{(async()=>{const B=Ec(Dc,"blogData","blogData"),F=await MT(B);if(F.exists()){const T=F.data().blogData||[];v(T)}else console.log("No such document!")})()},[]);const P=async()=>{if(!n)return;const O=m2(E2,`images/${n.name}`),B=f2(O,n);B.on("state_changed",F=>{const T=Math.round(F.bytesTransferred/F.totalBytes*100);l(T)},F=>{console.error("Upload error:",F)},async()=>{const F=await p2(B.snapshot.ref);s(F),console.log("File available at:",F);const T={content:t,category:u,title:d,id:crypto.randomUUID(),imageUrl:F},m=[...g,T];v(m);try{await VT(Ec(Dc,"blogData","blogData"),{blogData:m}),alert("Editor content saved")}catch(w){console.error("Error saving blog data:",w),alert("Failed to save blog data")}})},b=O=>{O.target.files&&O.target.files[0]&&r(O.target.files[0])},E=O=>{c(O.target.value)},_=O=>{p(O.target.value)},S=()=>{A(-1)};return D.jsxs("div",{className:"createBlog",children:[D.jsxs("div",{style:{marginTop:"20px"},children:[D.jsx("i",{className:"fa-solid fa-arrow-left",onClick:S}),D.jsx("h1",{style:{textAlign:"center"},children:"Create Your Blog"})]}),n&&D.jsxs("div",{style:{textAlign:"center"},children:[D.jsx("h3",{children:"Selected Image Preview:"}),D.jsx("img",{src:URL.createObjectURL(n),alt:"Selected",style:{width:"60%",height:"auto",marginTop:"10px"}})]}),D.jsx("div",{style:{width:`${o}%`,height:"20px",backgroundColor:o===100?"green":"blue",transition:"width 0.3s ease"},children:o>0&&D.jsxs("p",{style:{textAlign:"center"},children:[o,"%"]})}),D.jsxs("div",{className:"blogInputs",style:{textAlign:"center"},children:[D.jsx("input",{type:"file",accept:"image/*",onChange:b}),D.jsx("input",{type:"text",value:d,onChange:_,placeholder:"Enter blog title"}),D.jsxs("select",{name:"category",id:"category",value:u,onChange:E,children:[D.jsx("option",{value:"",children:"--Select a category--"}),D.jsx("option",{value:"programming",children:"Programming"}),D.jsx("option",{value:"gadgets",children:"Gadgets"}),D.jsx("option",{value:"trends",children:"Trends"}),D.jsx("option",{value:"techNews",children:"Tech News"})]})]}),D.jsx(G2,{apiKey:"24oaivpa1zr4ml2v1eibef6iliv16fww5kojtx5njped0hya",init:{plugins:["anchor","autolink","charmap","codesample","emoticons","image","link","lists","media","searchreplace","table","visualblocks","wordcount","checklist","mediaembed","casechange","export","formatpainter","pageembed","a11ychecker","tinymcespellchecker","permanentpen","powerpaste","advtable","advcode","editimage","advtemplate","mentions","tableofcontents","footnotes","mergetags","autocorrect","typography","inlinecss","markdown"],toolbar:"undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat"},onEditorChange:O=>e(O)}),D.jsx("button",{onClick:P,className:"saveBtn",children:"Save Content"}),D.jsxs("div",{style:{marginTop:"20px"},children:[D.jsx("h3",{children:"Preview:"}),D.jsx("div",{style:{marginBottom:"100px"},dangerouslySetInnerHTML:{__html:t}})]}),D.jsx(yh,{})]})}function X2(){const{blogData:t,setBlogData:e}=gl(),{setIsAuthenticated:n,isAuthenticated:r}=Bm();function i(){Rb(jm).then(()=>{console.log("User signed out")}).catch(o=>{console.error("Error during logout:",o)})}async function s(o){const l=t.filter(u=>u.id!=o);try{await VT(Ec(Dc,"blogData","blogData"),{blogData:l}),e(l),alert("Blog deleted Succesfully")}catch(u){console.error("Error deleting blog:",u),alert("Failed to delete blog data")}}return D.jsxs("div",{className:"dashboardContainer",children:[D.jsxs("div",{className:"dashboardHeader",children:[D.jsx("div",{className:"profileSection",children:D.jsx("img",{className:"profileImage",src:"https://cdn-icons-png.flaticon.com/128/3135/3135715.png",alt:"profile"})}),D.jsxs("div",{className:"profileDetails",children:[D.jsx("h1",{className:"profileName",children:"Jazab Ahmad"}),D.jsx("h2",{className:"profileRole",children:"Software Developer"}),D.jsxs("h2",{className:"profileBlogsCount",children:[D.jsx("span",{children:"Total Blog: "})," ",t.length]}),D.jsxs("div",{className:"actionButtons",children:[D.jsx("div",{className:"buttonContainer",children:r?D.jsx(pt,{to:"/createblog",className:"button createBlogButton",children:"Create Blog"}):D.jsx(pt,{to:"/login",className:"button createBlogButton",children:"Login"})}),D.jsx("div",{className:"buttonContainer",children:r?D.jsx("button",{className:"button logoutButton",onClick:i,children:"Logout"}):""})]})]})]}),D.jsx("hr",{className:"separatorLine"}),D.jsx("div",{className:"blogTableContainer",children:D.jsx("div",{className:"tableWrapper",children:r&&D.jsxs("table",{className:"blogTable",children:[D.jsx("thead",{className:"tableHeader",children:D.jsxs("tr",{children:[D.jsx("th",{className:"tableHeading",children:"S.No"}),D.jsx("th",{className:"tableHeading",children:"Thumbnail"}),D.jsx("th",{className:"tableHeading",children:"Title"}),D.jsx("th",{className:"tableHeading",children:"Category"}),D.jsx("th",{className:"tableHeading",children:"Date"}),D.jsx("th",{className:"tableHeading",children:"Action"})]})}),D.jsx("tbody",{children:t.map((o,l)=>D.jsxs("tr",{className:"tableRow",children:[D.jsxs("td",{className:"tableData",children:[l+1,"."]}),D.jsx("td",{className:"tableData",children:D.jsx("img",{className:"thumbnailImage",src:o.imageUrl,alt:"thumbnail"})}),D.jsx("td",{className:"tableData",children:o.title}),D.jsx("td",{className:"tableData",children:o.category}),D.jsx("td",{className:"tableData",children:"sep 20, 2024"}),D.jsx("td",{className:"tableData",children:D.jsx("button",{className:"deleteButton",onClick:()=>{s(o.id)},children:"Delete"})})]},l))})]})})})]})}function Y2(){const[t,e]=U.useState(""),[n,r]=U.useState(""),{setIsAuthenticated:i,isAuthenticated:s}=Bm(),o=zp(),l=async u=>{u.preventDefault();try{const c=await Eb(jm,t,n);console.log("Login successful:",c),i(!0),o("/dashboard")}catch(c){console.error("Login error:",c)}};return D.jsx("div",{className:"adminLoginContainer",children:D.jsxs("div",{className:"adminLoginCard",children:[D.jsxs("div",{className:"adminLoginHeader",children:[D.jsx("div",{className:"adminLoginIcon",children:D.jsx("img",{src:"https://cdn-icons-png.flaticon.com/128/727/727399.png",alt:"Admin Icon"})}),D.jsx("h4",{className:"adminLoginTitle",children:"Admin Login"})]}),D.jsx("div",{className:"adminLoginBody",children:D.jsxs("form",{className:"adminLoginForm",onSubmit:l,children:[D.jsx("div",{children:D.jsx("input",{type:"email",name:"email",className:"adminLoginInput",placeholder:"Email",value:t,onChange:u=>e(u.target.value),required:!0})}),D.jsx("div",{children:D.jsx("input",{type:"password",name:"password",className:"adminLoginInput",placeholder:"Password",value:n,onChange:u=>r(u.target.value),required:!0})}),D.jsx("button",{type:"submit",className:"adminLoginButton",children:"Login"})]})})]})})}const J2=SC([{path:"/",element:D.jsx(C2,{}),children:[{path:"",element:D.jsx(N2,{})},{path:"detail",element:D.jsx(D2,{})},{path:"categoryPage",element:D.jsx(x2,{})},{path:"createBlog",element:D.jsx(Q2,{})},{path:"/dashboard",element:D.jsx(X2,{})},{path:"/login",element:D.jsx(Y2,{})}]}]);Vw(document.getElementById("root")).render(D.jsx(U.StrictMode,{children:D.jsx(T2,{children:D.jsx(bC,{router:J2})})}));
