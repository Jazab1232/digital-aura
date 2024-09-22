function b_(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var st=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function x_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var D_={exports:{}},Uc={},O_={exports:{}},fe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dl=Symbol.for("react.element"),FS=Symbol.for("react.portal"),jS=Symbol.for("react.fragment"),BS=Symbol.for("react.strict_mode"),zS=Symbol.for("react.profiler"),$S=Symbol.for("react.provider"),HS=Symbol.for("react.context"),WS=Symbol.for("react.forward_ref"),qS=Symbol.for("react.suspense"),KS=Symbol.for("react.memo"),GS=Symbol.for("react.lazy"),Tg=Symbol.iterator;function QS(t){return t===null||typeof t!="object"?null:(t=Tg&&t[Tg]||t["@@iterator"],typeof t=="function"?t:null)}var L_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M_=Object.assign,V_={};function wo(t,e,n){this.props=t,this.context=e,this.refs=V_,this.updater=n||L_}wo.prototype.isReactComponent={};wo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};wo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function U_(){}U_.prototype=wo.prototype;function Gf(t,e,n){this.props=t,this.context=e,this.refs=V_,this.updater=n||L_}var Qf=Gf.prototype=new U_;Qf.constructor=Gf;M_(Qf,wo.prototype);Qf.isPureReactComponent=!0;var Ig=Array.isArray,F_=Object.prototype.hasOwnProperty,Xf={current:null},j_={key:!0,ref:!0,__self:!0,__source:!0};function B_(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)F_.call(e,r)&&!j_.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:dl,type:t,key:s,ref:o,props:i,_owner:Xf.current}}function XS(t,e){return{$$typeof:dl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Yf(t){return typeof t=="object"&&t!==null&&t.$$typeof===dl}function YS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Sg=/\/+/g;function Dh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?YS(""+t.key):e.toString(36)}function Tu(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case dl:case FS:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Dh(o,0):r,Ig(i)?(n="",t!=null&&(n=t.replace(Sg,"$&/")+"/"),Tu(i,e,n,"",function(c){return c})):i!=null&&(Yf(i)&&(i=XS(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Sg,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Ig(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+Dh(s,l);o+=Tu(s,e,n,u,i)}else if(u=QS(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+Dh(s,l++),o+=Tu(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Xl(t,e,n){if(t==null)return t;var r=[],i=0;return Tu(t,r,"","",function(s){return e.call(n,s,i++)}),r}function JS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Wt={current:null},Iu={transition:null},ZS={ReactCurrentDispatcher:Wt,ReactCurrentBatchConfig:Iu,ReactCurrentOwner:Xf};function z_(){throw Error("act(...) is not supported in production builds of React.")}fe.Children={map:Xl,forEach:function(t,e,n){Xl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Xl(t,function(){e++}),e},toArray:function(t){return Xl(t,function(e){return e})||[]},only:function(t){if(!Yf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};fe.Component=wo;fe.Fragment=jS;fe.Profiler=zS;fe.PureComponent=Gf;fe.StrictMode=BS;fe.Suspense=qS;fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ZS;fe.act=z_;fe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=M_({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Xf.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)F_.call(e,u)&&!j_.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:dl,type:t.type,key:i,ref:s,props:r,_owner:o}};fe.createContext=function(t){return t={$$typeof:HS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:$S,_context:t},t.Consumer=t};fe.createElement=B_;fe.createFactory=function(t){var e=B_.bind(null,t);return e.type=t,e};fe.createRef=function(){return{current:null}};fe.forwardRef=function(t){return{$$typeof:WS,render:t}};fe.isValidElement=Yf;fe.lazy=function(t){return{$$typeof:GS,_payload:{_status:-1,_result:t},_init:JS}};fe.memo=function(t,e){return{$$typeof:KS,type:t,compare:e===void 0?null:e}};fe.startTransition=function(t){var e=Iu.transition;Iu.transition={};try{t()}finally{Iu.transition=e}};fe.unstable_act=z_;fe.useCallback=function(t,e){return Wt.current.useCallback(t,e)};fe.useContext=function(t){return Wt.current.useContext(t)};fe.useDebugValue=function(){};fe.useDeferredValue=function(t){return Wt.current.useDeferredValue(t)};fe.useEffect=function(t,e){return Wt.current.useEffect(t,e)};fe.useId=function(){return Wt.current.useId()};fe.useImperativeHandle=function(t,e,n){return Wt.current.useImperativeHandle(t,e,n)};fe.useInsertionEffect=function(t,e){return Wt.current.useInsertionEffect(t,e)};fe.useLayoutEffect=function(t,e){return Wt.current.useLayoutEffect(t,e)};fe.useMemo=function(t,e){return Wt.current.useMemo(t,e)};fe.useReducer=function(t,e,n){return Wt.current.useReducer(t,e,n)};fe.useRef=function(t){return Wt.current.useRef(t)};fe.useState=function(t){return Wt.current.useState(t)};fe.useSyncExternalStore=function(t,e,n){return Wt.current.useSyncExternalStore(t,e,n)};fe.useTransition=function(){return Wt.current.useTransition()};fe.version="18.3.1";O_.exports=fe;var U=O_.exports;const eR=x_(U),tR=b_({__proto__:null,default:eR},[U]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nR=U,rR=Symbol.for("react.element"),iR=Symbol.for("react.fragment"),sR=Object.prototype.hasOwnProperty,oR=nR.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,aR={key:!0,ref:!0,__self:!0,__source:!0};function $_(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)sR.call(e,r)&&!aR.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:rR,type:t,key:s,ref:o,props:i,_owner:oR.current}}Uc.Fragment=iR;Uc.jsx=$_;Uc.jsxs=$_;D_.exports=Uc;var b=D_.exports,H_={exports:{}},fn={},W_={exports:{}},q_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(G,X){var ae=G.length;G.push(X);e:for(;0<ae;){var Ae=ae-1>>>1,ve=G[Ae];if(0<i(ve,X))G[Ae]=X,G[ae]=ve,ae=Ae;else break e}}function n(G){return G.length===0?null:G[0]}function r(G){if(G.length===0)return null;var X=G[0],ae=G.pop();if(ae!==X){G[0]=ae;e:for(var Ae=0,ve=G.length,Re=ve>>>1;Ae<Re;){var Ct=2*(Ae+1)-1,jt=G[Ct],ot=Ct+1,yt=G[ot];if(0>i(jt,ae))ot<ve&&0>i(yt,jt)?(G[Ae]=yt,G[ot]=ae,Ae=ot):(G[Ae]=jt,G[Ct]=ae,Ae=Ct);else if(ot<ve&&0>i(yt,ae))G[Ae]=yt,G[ot]=ae,Ae=ot;else break e}}return X}function i(G,X){var ae=G.sortIndex-X.sortIndex;return ae!==0?ae:G.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],d=1,p=null,g=3,v=!1,A=!1,C=!1,D=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(G){for(var X=n(c);X!==null;){if(X.callback===null)r(c);else if(X.startTime<=G)r(c),X.sortIndex=X.expirationTime,e(u,X);else break;X=n(c)}}function O(G){if(C=!1,S(G),!A)if(n(u)!==null)A=!0,nn(z);else{var X=n(c);X!==null&&Kt(O,X.startTime-G)}}function z(G,X){A=!1,C&&(C=!1,T(m),m=-1),v=!0;var ae=g;try{for(S(X),p=n(u);p!==null&&(!(p.expirationTime>X)||G&&!P());){var Ae=p.callback;if(typeof Ae=="function"){p.callback=null,g=p.priorityLevel;var ve=Ae(p.expirationTime<=X);X=t.unstable_now(),typeof ve=="function"?p.callback=ve:p===n(u)&&r(u),S(X)}else r(u);p=n(u)}if(p!==null)var Re=!0;else{var Ct=n(c);Ct!==null&&Kt(O,Ct.startTime-X),Re=!1}return Re}finally{p=null,g=ae,v=!1}}var F=!1,I=null,m=-1,w=5,E=-1;function P(){return!(t.unstable_now()-E<w)}function x(){if(I!==null){var G=t.unstable_now();E=G;var X=!0;try{X=I(!0,G)}finally{X?R():(F=!1,I=null)}}else F=!1}var R;if(typeof _=="function")R=function(){_(x)};else if(typeof MessageChannel<"u"){var Te=new MessageChannel,At=Te.port2;Te.port1.onmessage=x,R=function(){At.postMessage(null)}}else R=function(){D(x,0)};function nn(G){I=G,F||(F=!0,R())}function Kt(G,X){m=D(function(){G(t.unstable_now())},X)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(G){G.callback=null},t.unstable_continueExecution=function(){A||v||(A=!0,nn(z))},t.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<G?Math.floor(1e3/G):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(G){switch(g){case 1:case 2:case 3:var X=3;break;default:X=g}var ae=g;g=X;try{return G()}finally{g=ae}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(G,X){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var ae=g;g=G;try{return X()}finally{g=ae}},t.unstable_scheduleCallback=function(G,X,ae){var Ae=t.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?Ae+ae:Ae):ae=Ae,G){case 1:var ve=-1;break;case 2:ve=250;break;case 5:ve=1073741823;break;case 4:ve=1e4;break;default:ve=5e3}return ve=ae+ve,G={id:d++,callback:X,priorityLevel:G,startTime:ae,expirationTime:ve,sortIndex:-1},ae>Ae?(G.sortIndex=ae,e(c,G),n(u)===null&&G===n(c)&&(C?(T(m),m=-1):C=!0,Kt(O,ae-Ae))):(G.sortIndex=ve,e(u,G),A||v||(A=!0,nn(z))),G},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(G){var X=g;return function(){var ae=g;g=X;try{return G.apply(this,arguments)}finally{g=ae}}}})(q_);W_.exports=q_;var lR=W_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uR=U,dn=lR;function W(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var K_=new Set,Oa={};function as(t,e){ro(t,e),ro(t+"Capture",e)}function ro(t,e){for(Oa[t]=e,t=0;t<e.length;t++)K_.add(e[t])}var Er=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Pd=Object.prototype.hasOwnProperty,cR=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Rg={},Ag={};function hR(t){return Pd.call(Ag,t)?!0:Pd.call(Rg,t)?!1:cR.test(t)?Ag[t]=!0:(Rg[t]=!0,!1)}function dR(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function fR(t,e,n,r){if(e===null||typeof e>"u"||dR(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function qt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var St={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){St[t]=new qt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];St[e]=new qt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){St[t]=new qt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){St[t]=new qt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){St[t]=new qt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){St[t]=new qt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){St[t]=new qt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){St[t]=new qt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){St[t]=new qt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Jf=/[\-:]([a-z])/g;function Zf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Jf,Zf);St[e]=new qt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Jf,Zf);St[e]=new qt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Jf,Zf);St[e]=new qt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){St[t]=new qt(t,1,!1,t.toLowerCase(),null,!1,!1)});St.xlinkHref=new qt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){St[t]=new qt(t,1,!1,t.toLowerCase(),null,!0,!0)});function ep(t,e,n,r){var i=St.hasOwnProperty(e)?St[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(fR(e,n,i,r)&&(n=null),r||i===null?hR(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var kr=uR.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Yl=Symbol.for("react.element"),xs=Symbol.for("react.portal"),Ds=Symbol.for("react.fragment"),tp=Symbol.for("react.strict_mode"),kd=Symbol.for("react.profiler"),G_=Symbol.for("react.provider"),Q_=Symbol.for("react.context"),np=Symbol.for("react.forward_ref"),Nd=Symbol.for("react.suspense"),bd=Symbol.for("react.suspense_list"),rp=Symbol.for("react.memo"),Fr=Symbol.for("react.lazy"),X_=Symbol.for("react.offscreen"),Cg=Symbol.iterator;function Qo(t){return t===null||typeof t!="object"?null:(t=Cg&&t[Cg]||t["@@iterator"],typeof t=="function"?t:null)}var We=Object.assign,Oh;function la(t){if(Oh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Oh=e&&e[1]||""}return`
`+Oh+t}var Lh=!1;function Mh(t,e){if(!t||Lh)return"";Lh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Lh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?la(t):""}function pR(t){switch(t.tag){case 5:return la(t.type);case 16:return la("Lazy");case 13:return la("Suspense");case 19:return la("SuspenseList");case 0:case 2:case 15:return t=Mh(t.type,!1),t;case 11:return t=Mh(t.type.render,!1),t;case 1:return t=Mh(t.type,!0),t;default:return""}}function xd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ds:return"Fragment";case xs:return"Portal";case kd:return"Profiler";case tp:return"StrictMode";case Nd:return"Suspense";case bd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Q_:return(t.displayName||"Context")+".Consumer";case G_:return(t._context.displayName||"Context")+".Provider";case np:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case rp:return e=t.displayName||null,e!==null?e:xd(t.type)||"Memo";case Fr:e=t._payload,t=t._init;try{return xd(t(e))}catch{}}return null}function mR(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return xd(e);case 8:return e===tp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ci(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Y_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function gR(t){var e=Y_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Jl(t){t._valueTracker||(t._valueTracker=gR(t))}function J_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Y_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function $u(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Dd(t,e){var n=e.checked;return We({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Pg(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=ci(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Z_(t,e){e=e.checked,e!=null&&ep(t,"checked",e,!1)}function Od(t,e){Z_(t,e);var n=ci(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ld(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ld(t,e.type,ci(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function kg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ld(t,e,n){(e!=="number"||$u(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ua=Array.isArray;function Ks(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+ci(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Md(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(W(91));return We({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ng(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(W(92));if(ua(n)){if(1<n.length)throw Error(W(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ci(n)}}function e0(t,e){var n=ci(e.value),r=ci(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function bg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function t0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Vd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?t0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Zl,n0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Zl=Zl||document.createElement("div"),Zl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Zl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function La(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var va={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},yR=["Webkit","ms","Moz","O"];Object.keys(va).forEach(function(t){yR.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),va[e]=va[t]})});function r0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||va.hasOwnProperty(t)&&va[t]?(""+e).trim():e+"px"}function i0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=r0(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var vR=We({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ud(t,e){if(e){if(vR[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(W(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(W(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(W(61))}if(e.style!=null&&typeof e.style!="object")throw Error(W(62))}}function Fd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var jd=null;function ip(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Bd=null,Gs=null,Qs=null;function xg(t){if(t=ml(t)){if(typeof Bd!="function")throw Error(W(280));var e=t.stateNode;e&&(e=$c(e),Bd(t.stateNode,t.type,e))}}function s0(t){Gs?Qs?Qs.push(t):Qs=[t]:Gs=t}function o0(){if(Gs){var t=Gs,e=Qs;if(Qs=Gs=null,xg(t),e)for(t=0;t<e.length;t++)xg(e[t])}}function a0(t,e){return t(e)}function l0(){}var Vh=!1;function u0(t,e,n){if(Vh)return t(e,n);Vh=!0;try{return a0(t,e,n)}finally{Vh=!1,(Gs!==null||Qs!==null)&&(l0(),o0())}}function Ma(t,e){var n=t.stateNode;if(n===null)return null;var r=$c(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(W(231,e,typeof n));return n}var zd=!1;if(Er)try{var Xo={};Object.defineProperty(Xo,"passive",{get:function(){zd=!0}}),window.addEventListener("test",Xo,Xo),window.removeEventListener("test",Xo,Xo)}catch{zd=!1}function _R(t,e,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var _a=!1,Hu=null,Wu=!1,$d=null,wR={onError:function(t){_a=!0,Hu=t}};function ER(t,e,n,r,i,s,o,l,u){_a=!1,Hu=null,_R.apply(wR,arguments)}function TR(t,e,n,r,i,s,o,l,u){if(ER.apply(this,arguments),_a){if(_a){var c=Hu;_a=!1,Hu=null}else throw Error(W(198));Wu||(Wu=!0,$d=c)}}function ls(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function c0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Dg(t){if(ls(t)!==t)throw Error(W(188))}function IR(t){var e=t.alternate;if(!e){if(e=ls(t),e===null)throw Error(W(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Dg(i),t;if(s===r)return Dg(i),e;s=s.sibling}throw Error(W(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(W(189))}}if(n.alternate!==r)throw Error(W(190))}if(n.tag!==3)throw Error(W(188));return n.stateNode.current===n?t:e}function h0(t){return t=IR(t),t!==null?d0(t):null}function d0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=d0(t);if(e!==null)return e;t=t.sibling}return null}var f0=dn.unstable_scheduleCallback,Og=dn.unstable_cancelCallback,SR=dn.unstable_shouldYield,RR=dn.unstable_requestPaint,Ze=dn.unstable_now,AR=dn.unstable_getCurrentPriorityLevel,sp=dn.unstable_ImmediatePriority,p0=dn.unstable_UserBlockingPriority,qu=dn.unstable_NormalPriority,CR=dn.unstable_LowPriority,m0=dn.unstable_IdlePriority,Fc=null,Xn=null;function PR(t){if(Xn&&typeof Xn.onCommitFiberRoot=="function")try{Xn.onCommitFiberRoot(Fc,t,void 0,(t.current.flags&128)===128)}catch{}}var Fn=Math.clz32?Math.clz32:bR,kR=Math.log,NR=Math.LN2;function bR(t){return t>>>=0,t===0?32:31-(kR(t)/NR|0)|0}var eu=64,tu=4194304;function ca(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ku(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=ca(l):(s&=o,s!==0&&(r=ca(s)))}else o=n&~i,o!==0?r=ca(o):s!==0&&(r=ca(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Fn(e),i=1<<n,r|=t[n],e&=~i;return r}function xR(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function DR(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Fn(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=xR(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function Hd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function g0(){var t=eu;return eu<<=1,!(eu&4194240)&&(eu=64),t}function Uh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function fl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Fn(e),t[e]=n}function OR(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Fn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function op(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Fn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Ce=0;function y0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var v0,ap,_0,w0,E0,Wd=!1,nu=[],Jr=null,Zr=null,ei=null,Va=new Map,Ua=new Map,Br=[],LR="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Lg(t,e){switch(t){case"focusin":case"focusout":Jr=null;break;case"dragenter":case"dragleave":Zr=null;break;case"mouseover":case"mouseout":ei=null;break;case"pointerover":case"pointerout":Va.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ua.delete(e.pointerId)}}function Yo(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ml(e),e!==null&&ap(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function MR(t,e,n,r,i){switch(e){case"focusin":return Jr=Yo(Jr,t,e,n,r,i),!0;case"dragenter":return Zr=Yo(Zr,t,e,n,r,i),!0;case"mouseover":return ei=Yo(ei,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Va.set(s,Yo(Va.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ua.set(s,Yo(Ua.get(s)||null,t,e,n,r,i)),!0}return!1}function T0(t){var e=Vi(t.target);if(e!==null){var n=ls(e);if(n!==null){if(e=n.tag,e===13){if(e=c0(n),e!==null){t.blockedOn=e,E0(t.priority,function(){_0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Su(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=qd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);jd=r,n.target.dispatchEvent(r),jd=null}else return e=ml(n),e!==null&&ap(e),t.blockedOn=n,!1;e.shift()}return!0}function Mg(t,e,n){Su(t)&&n.delete(e)}function VR(){Wd=!1,Jr!==null&&Su(Jr)&&(Jr=null),Zr!==null&&Su(Zr)&&(Zr=null),ei!==null&&Su(ei)&&(ei=null),Va.forEach(Mg),Ua.forEach(Mg)}function Jo(t,e){t.blockedOn===e&&(t.blockedOn=null,Wd||(Wd=!0,dn.unstable_scheduleCallback(dn.unstable_NormalPriority,VR)))}function Fa(t){function e(i){return Jo(i,t)}if(0<nu.length){Jo(nu[0],t);for(var n=1;n<nu.length;n++){var r=nu[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Jr!==null&&Jo(Jr,t),Zr!==null&&Jo(Zr,t),ei!==null&&Jo(ei,t),Va.forEach(e),Ua.forEach(e),n=0;n<Br.length;n++)r=Br[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Br.length&&(n=Br[0],n.blockedOn===null);)T0(n),n.blockedOn===null&&Br.shift()}var Xs=kr.ReactCurrentBatchConfig,Gu=!0;function UR(t,e,n,r){var i=Ce,s=Xs.transition;Xs.transition=null;try{Ce=1,lp(t,e,n,r)}finally{Ce=i,Xs.transition=s}}function FR(t,e,n,r){var i=Ce,s=Xs.transition;Xs.transition=null;try{Ce=4,lp(t,e,n,r)}finally{Ce=i,Xs.transition=s}}function lp(t,e,n,r){if(Gu){var i=qd(t,e,n,r);if(i===null)Gh(t,e,r,Qu,n),Lg(t,r);else if(MR(i,t,e,n,r))r.stopPropagation();else if(Lg(t,r),e&4&&-1<LR.indexOf(t)){for(;i!==null;){var s=ml(i);if(s!==null&&v0(s),s=qd(t,e,n,r),s===null&&Gh(t,e,r,Qu,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Gh(t,e,r,null,n)}}var Qu=null;function qd(t,e,n,r){if(Qu=null,t=ip(r),t=Vi(t),t!==null)if(e=ls(t),e===null)t=null;else if(n=e.tag,n===13){if(t=c0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Qu=t,null}function I0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(AR()){case sp:return 1;case p0:return 4;case qu:case CR:return 16;case m0:return 536870912;default:return 16}default:return 16}}var Gr=null,up=null,Ru=null;function S0(){if(Ru)return Ru;var t,e=up,n=e.length,r,i="value"in Gr?Gr.value:Gr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ru=i.slice(t,1<r?1-r:void 0)}function Au(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ru(){return!0}function Vg(){return!1}function pn(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ru:Vg,this.isPropagationStopped=Vg,this}return We(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ru)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ru)},persist:function(){},isPersistent:ru}),e}var Eo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cp=pn(Eo),pl=We({},Eo,{view:0,detail:0}),jR=pn(pl),Fh,jh,Zo,jc=We({},pl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Zo&&(Zo&&t.type==="mousemove"?(Fh=t.screenX-Zo.screenX,jh=t.screenY-Zo.screenY):jh=Fh=0,Zo=t),Fh)},movementY:function(t){return"movementY"in t?t.movementY:jh}}),Ug=pn(jc),BR=We({},jc,{dataTransfer:0}),zR=pn(BR),$R=We({},pl,{relatedTarget:0}),Bh=pn($R),HR=We({},Eo,{animationName:0,elapsedTime:0,pseudoElement:0}),WR=pn(HR),qR=We({},Eo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),KR=pn(qR),GR=We({},Eo,{data:0}),Fg=pn(GR),QR={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},XR={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},YR={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function JR(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=YR[t])?!!e[t]:!1}function hp(){return JR}var ZR=We({},pl,{key:function(t){if(t.key){var e=QR[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Au(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?XR[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hp,charCode:function(t){return t.type==="keypress"?Au(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Au(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),e1=pn(ZR),t1=We({},jc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jg=pn(t1),n1=We({},pl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hp}),r1=pn(n1),i1=We({},Eo,{propertyName:0,elapsedTime:0,pseudoElement:0}),s1=pn(i1),o1=We({},jc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),a1=pn(o1),l1=[9,13,27,32],dp=Er&&"CompositionEvent"in window,wa=null;Er&&"documentMode"in document&&(wa=document.documentMode);var u1=Er&&"TextEvent"in window&&!wa,R0=Er&&(!dp||wa&&8<wa&&11>=wa),Bg=" ",zg=!1;function A0(t,e){switch(t){case"keyup":return l1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function C0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Os=!1;function c1(t,e){switch(t){case"compositionend":return C0(e);case"keypress":return e.which!==32?null:(zg=!0,Bg);case"textInput":return t=e.data,t===Bg&&zg?null:t;default:return null}}function h1(t,e){if(Os)return t==="compositionend"||!dp&&A0(t,e)?(t=S0(),Ru=up=Gr=null,Os=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return R0&&e.locale!=="ko"?null:e.data;default:return null}}var d1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $g(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!d1[t.type]:e==="textarea"}function P0(t,e,n,r){s0(r),e=Xu(e,"onChange"),0<e.length&&(n=new cp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ea=null,ja=null;function f1(t){F0(t,0)}function Bc(t){var e=Vs(t);if(J_(e))return t}function p1(t,e){if(t==="change")return e}var k0=!1;if(Er){var zh;if(Er){var $h="oninput"in document;if(!$h){var Hg=document.createElement("div");Hg.setAttribute("oninput","return;"),$h=typeof Hg.oninput=="function"}zh=$h}else zh=!1;k0=zh&&(!document.documentMode||9<document.documentMode)}function Wg(){Ea&&(Ea.detachEvent("onpropertychange",N0),ja=Ea=null)}function N0(t){if(t.propertyName==="value"&&Bc(ja)){var e=[];P0(e,ja,t,ip(t)),u0(f1,e)}}function m1(t,e,n){t==="focusin"?(Wg(),Ea=e,ja=n,Ea.attachEvent("onpropertychange",N0)):t==="focusout"&&Wg()}function g1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Bc(ja)}function y1(t,e){if(t==="click")return Bc(e)}function v1(t,e){if(t==="input"||t==="change")return Bc(e)}function _1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Bn=typeof Object.is=="function"?Object.is:_1;function Ba(t,e){if(Bn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Pd.call(e,i)||!Bn(t[i],e[i]))return!1}return!0}function qg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Kg(t,e){var n=qg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=qg(n)}}function b0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?b0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function x0(){for(var t=window,e=$u();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=$u(t.document)}return e}function fp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function w1(t){var e=x0(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&b0(n.ownerDocument.documentElement,n)){if(r!==null&&fp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Kg(n,s);var o=Kg(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var E1=Er&&"documentMode"in document&&11>=document.documentMode,Ls=null,Kd=null,Ta=null,Gd=!1;function Gg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Gd||Ls==null||Ls!==$u(r)||(r=Ls,"selectionStart"in r&&fp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ta&&Ba(Ta,r)||(Ta=r,r=Xu(Kd,"onSelect"),0<r.length&&(e=new cp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ls)))}function iu(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ms={animationend:iu("Animation","AnimationEnd"),animationiteration:iu("Animation","AnimationIteration"),animationstart:iu("Animation","AnimationStart"),transitionend:iu("Transition","TransitionEnd")},Hh={},D0={};Er&&(D0=document.createElement("div").style,"AnimationEvent"in window||(delete Ms.animationend.animation,delete Ms.animationiteration.animation,delete Ms.animationstart.animation),"TransitionEvent"in window||delete Ms.transitionend.transition);function zc(t){if(Hh[t])return Hh[t];if(!Ms[t])return t;var e=Ms[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in D0)return Hh[t]=e[n];return t}var O0=zc("animationend"),L0=zc("animationiteration"),M0=zc("animationstart"),V0=zc("transitionend"),U0=new Map,Qg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function mi(t,e){U0.set(t,e),as(e,[t])}for(var Wh=0;Wh<Qg.length;Wh++){var qh=Qg[Wh],T1=qh.toLowerCase(),I1=qh[0].toUpperCase()+qh.slice(1);mi(T1,"on"+I1)}mi(O0,"onAnimationEnd");mi(L0,"onAnimationIteration");mi(M0,"onAnimationStart");mi("dblclick","onDoubleClick");mi("focusin","onFocus");mi("focusout","onBlur");mi(V0,"onTransitionEnd");ro("onMouseEnter",["mouseout","mouseover"]);ro("onMouseLeave",["mouseout","mouseover"]);ro("onPointerEnter",["pointerout","pointerover"]);ro("onPointerLeave",["pointerout","pointerover"]);as("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));as("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));as("onBeforeInput",["compositionend","keypress","textInput","paste"]);as("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));as("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));as("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ha="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),S1=new Set("cancel close invalid load scroll toggle".split(" ").concat(ha));function Xg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,TR(r,e,void 0,t),t.currentTarget=null}function F0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;Xg(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;Xg(i,l,c),s=u}}}if(Wu)throw t=$d,Wu=!1,$d=null,t}function Ve(t,e){var n=e[Zd];n===void 0&&(n=e[Zd]=new Set);var r=t+"__bubble";n.has(r)||(j0(e,t,2,!1),n.add(r))}function Kh(t,e,n){var r=0;e&&(r|=4),j0(n,t,r,e)}var su="_reactListening"+Math.random().toString(36).slice(2);function za(t){if(!t[su]){t[su]=!0,K_.forEach(function(n){n!=="selectionchange"&&(S1.has(n)||Kh(n,!1,t),Kh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[su]||(e[su]=!0,Kh("selectionchange",!1,e))}}function j0(t,e,n,r){switch(I0(e)){case 1:var i=UR;break;case 4:i=FR;break;default:i=lp}n=i.bind(null,e,n,t),i=void 0,!zd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Gh(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Vi(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}u0(function(){var c=s,d=ip(n),p=[];e:{var g=U0.get(t);if(g!==void 0){var v=cp,A=t;switch(t){case"keypress":if(Au(n)===0)break e;case"keydown":case"keyup":v=e1;break;case"focusin":A="focus",v=Bh;break;case"focusout":A="blur",v=Bh;break;case"beforeblur":case"afterblur":v=Bh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Ug;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=zR;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=r1;break;case O0:case L0:case M0:v=WR;break;case V0:v=s1;break;case"scroll":v=jR;break;case"wheel":v=a1;break;case"copy":case"cut":case"paste":v=KR;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=jg}var C=(e&4)!==0,D=!C&&t==="scroll",T=C?g!==null?g+"Capture":null:g;C=[];for(var _=c,S;_!==null;){S=_;var O=S.stateNode;if(S.tag===5&&O!==null&&(S=O,T!==null&&(O=Ma(_,T),O!=null&&C.push($a(_,O,S)))),D)break;_=_.return}0<C.length&&(g=new v(g,A,null,n,d),p.push({event:g,listeners:C}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",v=t==="mouseout"||t==="pointerout",g&&n!==jd&&(A=n.relatedTarget||n.fromElement)&&(Vi(A)||A[Tr]))break e;if((v||g)&&(g=d.window===d?d:(g=d.ownerDocument)?g.defaultView||g.parentWindow:window,v?(A=n.relatedTarget||n.toElement,v=c,A=A?Vi(A):null,A!==null&&(D=ls(A),A!==D||A.tag!==5&&A.tag!==6)&&(A=null)):(v=null,A=c),v!==A)){if(C=Ug,O="onMouseLeave",T="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(C=jg,O="onPointerLeave",T="onPointerEnter",_="pointer"),D=v==null?g:Vs(v),S=A==null?g:Vs(A),g=new C(O,_+"leave",v,n,d),g.target=D,g.relatedTarget=S,O=null,Vi(d)===c&&(C=new C(T,_+"enter",A,n,d),C.target=S,C.relatedTarget=D,O=C),D=O,v&&A)t:{for(C=v,T=A,_=0,S=C;S;S=Rs(S))_++;for(S=0,O=T;O;O=Rs(O))S++;for(;0<_-S;)C=Rs(C),_--;for(;0<S-_;)T=Rs(T),S--;for(;_--;){if(C===T||T!==null&&C===T.alternate)break t;C=Rs(C),T=Rs(T)}C=null}else C=null;v!==null&&Yg(p,g,v,C,!1),A!==null&&D!==null&&Yg(p,D,A,C,!0)}}e:{if(g=c?Vs(c):window,v=g.nodeName&&g.nodeName.toLowerCase(),v==="select"||v==="input"&&g.type==="file")var z=p1;else if($g(g))if(k0)z=v1;else{z=g1;var F=m1}else(v=g.nodeName)&&v.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(z=y1);if(z&&(z=z(t,c))){P0(p,z,n,d);break e}F&&F(t,g,c),t==="focusout"&&(F=g._wrapperState)&&F.controlled&&g.type==="number"&&Ld(g,"number",g.value)}switch(F=c?Vs(c):window,t){case"focusin":($g(F)||F.contentEditable==="true")&&(Ls=F,Kd=c,Ta=null);break;case"focusout":Ta=Kd=Ls=null;break;case"mousedown":Gd=!0;break;case"contextmenu":case"mouseup":case"dragend":Gd=!1,Gg(p,n,d);break;case"selectionchange":if(E1)break;case"keydown":case"keyup":Gg(p,n,d)}var I;if(dp)e:{switch(t){case"compositionstart":var m="onCompositionStart";break e;case"compositionend":m="onCompositionEnd";break e;case"compositionupdate":m="onCompositionUpdate";break e}m=void 0}else Os?A0(t,n)&&(m="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(m="onCompositionStart");m&&(R0&&n.locale!=="ko"&&(Os||m!=="onCompositionStart"?m==="onCompositionEnd"&&Os&&(I=S0()):(Gr=d,up="value"in Gr?Gr.value:Gr.textContent,Os=!0)),F=Xu(c,m),0<F.length&&(m=new Fg(m,t,null,n,d),p.push({event:m,listeners:F}),I?m.data=I:(I=C0(n),I!==null&&(m.data=I)))),(I=u1?c1(t,n):h1(t,n))&&(c=Xu(c,"onBeforeInput"),0<c.length&&(d=new Fg("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:c}),d.data=I))}F0(p,e)})}function $a(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Xu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ma(t,n),s!=null&&r.unshift($a(t,s,i)),s=Ma(t,e),s!=null&&r.push($a(t,s,i))),t=t.return}return r}function Rs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Yg(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=Ma(n,s),u!=null&&o.unshift($a(n,u,l))):i||(u=Ma(n,s),u!=null&&o.push($a(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var R1=/\r\n?/g,A1=/\u0000|\uFFFD/g;function Jg(t){return(typeof t=="string"?t:""+t).replace(R1,`
`).replace(A1,"")}function ou(t,e,n){if(e=Jg(e),Jg(t)!==e&&n)throw Error(W(425))}function Yu(){}var Qd=null,Xd=null;function Yd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Jd=typeof setTimeout=="function"?setTimeout:void 0,C1=typeof clearTimeout=="function"?clearTimeout:void 0,Zg=typeof Promise=="function"?Promise:void 0,P1=typeof queueMicrotask=="function"?queueMicrotask:typeof Zg<"u"?function(t){return Zg.resolve(null).then(t).catch(k1)}:Jd;function k1(t){setTimeout(function(){throw t})}function Qh(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Fa(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Fa(e)}function ti(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function ey(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var To=Math.random().toString(36).slice(2),Gn="__reactFiber$"+To,Ha="__reactProps$"+To,Tr="__reactContainer$"+To,Zd="__reactEvents$"+To,N1="__reactListeners$"+To,b1="__reactHandles$"+To;function Vi(t){var e=t[Gn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Tr]||n[Gn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=ey(t);t!==null;){if(n=t[Gn])return n;t=ey(t)}return e}t=n,n=t.parentNode}return null}function ml(t){return t=t[Gn]||t[Tr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Vs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(W(33))}function $c(t){return t[Ha]||null}var ef=[],Us=-1;function gi(t){return{current:t}}function Ue(t){0>Us||(t.current=ef[Us],ef[Us]=null,Us--)}function De(t,e){Us++,ef[Us]=t.current,t.current=e}var hi={},Ut=gi(hi),Yt=gi(!1),Ki=hi;function io(t,e){var n=t.type.contextTypes;if(!n)return hi;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Jt(t){return t=t.childContextTypes,t!=null}function Ju(){Ue(Yt),Ue(Ut)}function ty(t,e,n){if(Ut.current!==hi)throw Error(W(168));De(Ut,e),De(Yt,n)}function B0(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(W(108,mR(t)||"Unknown",i));return We({},n,r)}function Zu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||hi,Ki=Ut.current,De(Ut,t),De(Yt,Yt.current),!0}function ny(t,e,n){var r=t.stateNode;if(!r)throw Error(W(169));n?(t=B0(t,e,Ki),r.__reactInternalMemoizedMergedChildContext=t,Ue(Yt),Ue(Ut),De(Ut,t)):Ue(Yt),De(Yt,n)}var cr=null,Hc=!1,Xh=!1;function z0(t){cr===null?cr=[t]:cr.push(t)}function x1(t){Hc=!0,z0(t)}function yi(){if(!Xh&&cr!==null){Xh=!0;var t=0,e=Ce;try{var n=cr;for(Ce=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}cr=null,Hc=!1}catch(i){throw cr!==null&&(cr=cr.slice(t+1)),f0(sp,yi),i}finally{Ce=e,Xh=!1}}return null}var Fs=[],js=0,ec=null,tc=0,vn=[],_n=0,Gi=null,hr=1,dr="";function Di(t,e){Fs[js++]=tc,Fs[js++]=ec,ec=t,tc=e}function $0(t,e,n){vn[_n++]=hr,vn[_n++]=dr,vn[_n++]=Gi,Gi=t;var r=hr;t=dr;var i=32-Fn(r)-1;r&=~(1<<i),n+=1;var s=32-Fn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,hr=1<<32-Fn(e)+i|n<<i|r,dr=s+t}else hr=1<<s|n<<i|r,dr=t}function pp(t){t.return!==null&&(Di(t,1),$0(t,1,0))}function mp(t){for(;t===ec;)ec=Fs[--js],Fs[js]=null,tc=Fs[--js],Fs[js]=null;for(;t===Gi;)Gi=vn[--_n],vn[_n]=null,dr=vn[--_n],vn[_n]=null,hr=vn[--_n],vn[_n]=null}var cn=null,ln=null,Be=!1,Vn=null;function H0(t,e){var n=En(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function ry(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,cn=t,ln=ti(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,cn=t,ln=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Gi!==null?{id:hr,overflow:dr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=En(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,cn=t,ln=null,!0):!1;default:return!1}}function tf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function nf(t){if(Be){var e=ln;if(e){var n=e;if(!ry(t,e)){if(tf(t))throw Error(W(418));e=ti(n.nextSibling);var r=cn;e&&ry(t,e)?H0(r,n):(t.flags=t.flags&-4097|2,Be=!1,cn=t)}}else{if(tf(t))throw Error(W(418));t.flags=t.flags&-4097|2,Be=!1,cn=t}}}function iy(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;cn=t}function au(t){if(t!==cn)return!1;if(!Be)return iy(t),Be=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Yd(t.type,t.memoizedProps)),e&&(e=ln)){if(tf(t))throw W0(),Error(W(418));for(;e;)H0(t,e),e=ti(e.nextSibling)}if(iy(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(W(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){ln=ti(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}ln=null}}else ln=cn?ti(t.stateNode.nextSibling):null;return!0}function W0(){for(var t=ln;t;)t=ti(t.nextSibling)}function so(){ln=cn=null,Be=!1}function gp(t){Vn===null?Vn=[t]:Vn.push(t)}var D1=kr.ReactCurrentBatchConfig;function ea(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(W(309));var r=n.stateNode}if(!r)throw Error(W(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(W(284));if(!n._owner)throw Error(W(290,t))}return t}function lu(t,e){throw t=Object.prototype.toString.call(e),Error(W(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function sy(t){var e=t._init;return e(t._payload)}function q0(t){function e(T,_){if(t){var S=T.deletions;S===null?(T.deletions=[_],T.flags|=16):S.push(_)}}function n(T,_){if(!t)return null;for(;_!==null;)e(T,_),_=_.sibling;return null}function r(T,_){for(T=new Map;_!==null;)_.key!==null?T.set(_.key,_):T.set(_.index,_),_=_.sibling;return T}function i(T,_){return T=si(T,_),T.index=0,T.sibling=null,T}function s(T,_,S){return T.index=S,t?(S=T.alternate,S!==null?(S=S.index,S<_?(T.flags|=2,_):S):(T.flags|=2,_)):(T.flags|=1048576,_)}function o(T){return t&&T.alternate===null&&(T.flags|=2),T}function l(T,_,S,O){return _===null||_.tag!==6?(_=rd(S,T.mode,O),_.return=T,_):(_=i(_,S),_.return=T,_)}function u(T,_,S,O){var z=S.type;return z===Ds?d(T,_,S.props.children,O,S.key):_!==null&&(_.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===Fr&&sy(z)===_.type)?(O=i(_,S.props),O.ref=ea(T,_,S),O.return=T,O):(O=Du(S.type,S.key,S.props,null,T.mode,O),O.ref=ea(T,_,S),O.return=T,O)}function c(T,_,S,O){return _===null||_.tag!==4||_.stateNode.containerInfo!==S.containerInfo||_.stateNode.implementation!==S.implementation?(_=id(S,T.mode,O),_.return=T,_):(_=i(_,S.children||[]),_.return=T,_)}function d(T,_,S,O,z){return _===null||_.tag!==7?(_=Hi(S,T.mode,O,z),_.return=T,_):(_=i(_,S),_.return=T,_)}function p(T,_,S){if(typeof _=="string"&&_!==""||typeof _=="number")return _=rd(""+_,T.mode,S),_.return=T,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Yl:return S=Du(_.type,_.key,_.props,null,T.mode,S),S.ref=ea(T,null,_),S.return=T,S;case xs:return _=id(_,T.mode,S),_.return=T,_;case Fr:var O=_._init;return p(T,O(_._payload),S)}if(ua(_)||Qo(_))return _=Hi(_,T.mode,S,null),_.return=T,_;lu(T,_)}return null}function g(T,_,S,O){var z=_!==null?_.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return z!==null?null:l(T,_,""+S,O);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Yl:return S.key===z?u(T,_,S,O):null;case xs:return S.key===z?c(T,_,S,O):null;case Fr:return z=S._init,g(T,_,z(S._payload),O)}if(ua(S)||Qo(S))return z!==null?null:d(T,_,S,O,null);lu(T,S)}return null}function v(T,_,S,O,z){if(typeof O=="string"&&O!==""||typeof O=="number")return T=T.get(S)||null,l(_,T,""+O,z);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case Yl:return T=T.get(O.key===null?S:O.key)||null,u(_,T,O,z);case xs:return T=T.get(O.key===null?S:O.key)||null,c(_,T,O,z);case Fr:var F=O._init;return v(T,_,S,F(O._payload),z)}if(ua(O)||Qo(O))return T=T.get(S)||null,d(_,T,O,z,null);lu(_,O)}return null}function A(T,_,S,O){for(var z=null,F=null,I=_,m=_=0,w=null;I!==null&&m<S.length;m++){I.index>m?(w=I,I=null):w=I.sibling;var E=g(T,I,S[m],O);if(E===null){I===null&&(I=w);break}t&&I&&E.alternate===null&&e(T,I),_=s(E,_,m),F===null?z=E:F.sibling=E,F=E,I=w}if(m===S.length)return n(T,I),Be&&Di(T,m),z;if(I===null){for(;m<S.length;m++)I=p(T,S[m],O),I!==null&&(_=s(I,_,m),F===null?z=I:F.sibling=I,F=I);return Be&&Di(T,m),z}for(I=r(T,I);m<S.length;m++)w=v(I,T,m,S[m],O),w!==null&&(t&&w.alternate!==null&&I.delete(w.key===null?m:w.key),_=s(w,_,m),F===null?z=w:F.sibling=w,F=w);return t&&I.forEach(function(P){return e(T,P)}),Be&&Di(T,m),z}function C(T,_,S,O){var z=Qo(S);if(typeof z!="function")throw Error(W(150));if(S=z.call(S),S==null)throw Error(W(151));for(var F=z=null,I=_,m=_=0,w=null,E=S.next();I!==null&&!E.done;m++,E=S.next()){I.index>m?(w=I,I=null):w=I.sibling;var P=g(T,I,E.value,O);if(P===null){I===null&&(I=w);break}t&&I&&P.alternate===null&&e(T,I),_=s(P,_,m),F===null?z=P:F.sibling=P,F=P,I=w}if(E.done)return n(T,I),Be&&Di(T,m),z;if(I===null){for(;!E.done;m++,E=S.next())E=p(T,E.value,O),E!==null&&(_=s(E,_,m),F===null?z=E:F.sibling=E,F=E);return Be&&Di(T,m),z}for(I=r(T,I);!E.done;m++,E=S.next())E=v(I,T,m,E.value,O),E!==null&&(t&&E.alternate!==null&&I.delete(E.key===null?m:E.key),_=s(E,_,m),F===null?z=E:F.sibling=E,F=E);return t&&I.forEach(function(x){return e(T,x)}),Be&&Di(T,m),z}function D(T,_,S,O){if(typeof S=="object"&&S!==null&&S.type===Ds&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case Yl:e:{for(var z=S.key,F=_;F!==null;){if(F.key===z){if(z=S.type,z===Ds){if(F.tag===7){n(T,F.sibling),_=i(F,S.props.children),_.return=T,T=_;break e}}else if(F.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===Fr&&sy(z)===F.type){n(T,F.sibling),_=i(F,S.props),_.ref=ea(T,F,S),_.return=T,T=_;break e}n(T,F);break}else e(T,F);F=F.sibling}S.type===Ds?(_=Hi(S.props.children,T.mode,O,S.key),_.return=T,T=_):(O=Du(S.type,S.key,S.props,null,T.mode,O),O.ref=ea(T,_,S),O.return=T,T=O)}return o(T);case xs:e:{for(F=S.key;_!==null;){if(_.key===F)if(_.tag===4&&_.stateNode.containerInfo===S.containerInfo&&_.stateNode.implementation===S.implementation){n(T,_.sibling),_=i(_,S.children||[]),_.return=T,T=_;break e}else{n(T,_);break}else e(T,_);_=_.sibling}_=id(S,T.mode,O),_.return=T,T=_}return o(T);case Fr:return F=S._init,D(T,_,F(S._payload),O)}if(ua(S))return A(T,_,S,O);if(Qo(S))return C(T,_,S,O);lu(T,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,_!==null&&_.tag===6?(n(T,_.sibling),_=i(_,S),_.return=T,T=_):(n(T,_),_=rd(S,T.mode,O),_.return=T,T=_),o(T)):n(T,_)}return D}var oo=q0(!0),K0=q0(!1),nc=gi(null),rc=null,Bs=null,yp=null;function vp(){yp=Bs=rc=null}function _p(t){var e=nc.current;Ue(nc),t._currentValue=e}function rf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ys(t,e){rc=t,yp=Bs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Xt=!0),t.firstContext=null)}function Sn(t){var e=t._currentValue;if(yp!==t)if(t={context:t,memoizedValue:e,next:null},Bs===null){if(rc===null)throw Error(W(308));Bs=t,rc.dependencies={lanes:0,firstContext:t}}else Bs=Bs.next=t;return e}var Ui=null;function wp(t){Ui===null?Ui=[t]:Ui.push(t)}function G0(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,wp(e)):(n.next=i.next,i.next=n),e.interleaved=n,Ir(t,r)}function Ir(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var jr=!1;function Ep(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Q0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function yr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ni(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,Ee&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Ir(t,n)}return i=r.interleaved,i===null?(e.next=e,wp(r)):(e.next=i.next,i.next=e),r.interleaved=e,Ir(t,n)}function Cu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,op(t,n)}}function oy(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ic(t,e,n,r){var i=t.updateQueue;jr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=c:l.next=c,d.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,d=c=u=null,l=s;do{var g=l.lane,v=l.eventTime;if((r&g)===g){d!==null&&(d=d.next={eventTime:v,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var A=t,C=l;switch(g=e,v=n,C.tag){case 1:if(A=C.payload,typeof A=="function"){p=A.call(v,p,g);break e}p=A;break e;case 3:A.flags=A.flags&-65537|128;case 0:if(A=C.payload,g=typeof A=="function"?A.call(v,p,g):A,g==null)break e;p=We({},p,g);break e;case 2:jr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,g=i.effects,g===null?i.effects=[l]:g.push(l))}else v={eventTime:v,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(c=d=v,u=p):d=d.next=v,o|=g;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;g=l,l=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(d===null&&(u=p),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Xi|=o,t.lanes=o,t.memoizedState=p}}function ay(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(W(191,i));i.call(r)}}}var gl={},Yn=gi(gl),Wa=gi(gl),qa=gi(gl);function Fi(t){if(t===gl)throw Error(W(174));return t}function Tp(t,e){switch(De(qa,e),De(Wa,t),De(Yn,gl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Vd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Vd(e,t)}Ue(Yn),De(Yn,e)}function ao(){Ue(Yn),Ue(Wa),Ue(qa)}function X0(t){Fi(qa.current);var e=Fi(Yn.current),n=Vd(e,t.type);e!==n&&(De(Wa,t),De(Yn,n))}function Ip(t){Wa.current===t&&(Ue(Yn),Ue(Wa))}var $e=gi(0);function sc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Yh=[];function Sp(){for(var t=0;t<Yh.length;t++)Yh[t]._workInProgressVersionPrimary=null;Yh.length=0}var Pu=kr.ReactCurrentDispatcher,Jh=kr.ReactCurrentBatchConfig,Qi=0,He=null,lt=null,pt=null,oc=!1,Ia=!1,Ka=0,O1=0;function xt(){throw Error(W(321))}function Rp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Bn(t[n],e[n]))return!1;return!0}function Ap(t,e,n,r,i,s){if(Qi=s,He=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Pu.current=t===null||t.memoizedState===null?U1:F1,t=n(r,i),Ia){s=0;do{if(Ia=!1,Ka=0,25<=s)throw Error(W(301));s+=1,pt=lt=null,e.updateQueue=null,Pu.current=j1,t=n(r,i)}while(Ia)}if(Pu.current=ac,e=lt!==null&&lt.next!==null,Qi=0,pt=lt=He=null,oc=!1,e)throw Error(W(300));return t}function Cp(){var t=Ka!==0;return Ka=0,t}function Kn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pt===null?He.memoizedState=pt=t:pt=pt.next=t,pt}function Rn(){if(lt===null){var t=He.alternate;t=t!==null?t.memoizedState:null}else t=lt.next;var e=pt===null?He.memoizedState:pt.next;if(e!==null)pt=e,lt=t;else{if(t===null)throw Error(W(310));lt=t,t={memoizedState:lt.memoizedState,baseState:lt.baseState,baseQueue:lt.baseQueue,queue:lt.queue,next:null},pt===null?He.memoizedState=pt=t:pt=pt.next=t}return pt}function Ga(t,e){return typeof e=="function"?e(t):e}function Zh(t){var e=Rn(),n=e.queue;if(n===null)throw Error(W(311));n.lastRenderedReducer=t;var r=lt,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var d=c.lane;if((Qi&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var p={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,He.lanes|=d,Xi|=d}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,Bn(r,e.memoizedState)||(Xt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,He.lanes|=s,Xi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ed(t){var e=Rn(),n=e.queue;if(n===null)throw Error(W(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Bn(s,e.memoizedState)||(Xt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Y0(){}function J0(t,e){var n=He,r=Rn(),i=e(),s=!Bn(r.memoizedState,i);if(s&&(r.memoizedState=i,Xt=!0),r=r.queue,Pp(tw.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||pt!==null&&pt.memoizedState.tag&1){if(n.flags|=2048,Qa(9,ew.bind(null,n,r,i,e),void 0,null),gt===null)throw Error(W(349));Qi&30||Z0(n,e,i)}return i}function Z0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=He.updateQueue,e===null?(e={lastEffect:null,stores:null},He.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function ew(t,e,n,r){e.value=n,e.getSnapshot=r,nw(e)&&rw(t)}function tw(t,e,n){return n(function(){nw(e)&&rw(t)})}function nw(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Bn(t,n)}catch{return!0}}function rw(t){var e=Ir(t,1);e!==null&&jn(e,t,1,-1)}function ly(t){var e=Kn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ga,lastRenderedState:t},e.queue=t,t=t.dispatch=V1.bind(null,He,t),[e.memoizedState,t]}function Qa(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=He.updateQueue,e===null?(e={lastEffect:null,stores:null},He.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function iw(){return Rn().memoizedState}function ku(t,e,n,r){var i=Kn();He.flags|=t,i.memoizedState=Qa(1|e,n,void 0,r===void 0?null:r)}function Wc(t,e,n,r){var i=Rn();r=r===void 0?null:r;var s=void 0;if(lt!==null){var o=lt.memoizedState;if(s=o.destroy,r!==null&&Rp(r,o.deps)){i.memoizedState=Qa(e,n,s,r);return}}He.flags|=t,i.memoizedState=Qa(1|e,n,s,r)}function uy(t,e){return ku(8390656,8,t,e)}function Pp(t,e){return Wc(2048,8,t,e)}function sw(t,e){return Wc(4,2,t,e)}function ow(t,e){return Wc(4,4,t,e)}function aw(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function lw(t,e,n){return n=n!=null?n.concat([t]):null,Wc(4,4,aw.bind(null,e,t),n)}function kp(){}function uw(t,e){var n=Rn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Rp(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function cw(t,e){var n=Rn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Rp(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function hw(t,e,n){return Qi&21?(Bn(n,e)||(n=g0(),He.lanes|=n,Xi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Xt=!0),t.memoizedState=n)}function L1(t,e){var n=Ce;Ce=n!==0&&4>n?n:4,t(!0);var r=Jh.transition;Jh.transition={};try{t(!1),e()}finally{Ce=n,Jh.transition=r}}function dw(){return Rn().memoizedState}function M1(t,e,n){var r=ii(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},fw(t))pw(e,n);else if(n=G0(t,e,n,r),n!==null){var i=Ht();jn(n,t,r,i),mw(n,e,r)}}function V1(t,e,n){var r=ii(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(fw(t))pw(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Bn(l,o)){var u=e.interleaved;u===null?(i.next=i,wp(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=G0(t,e,i,r),n!==null&&(i=Ht(),jn(n,t,r,i),mw(n,e,r))}}function fw(t){var e=t.alternate;return t===He||e!==null&&e===He}function pw(t,e){Ia=oc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function mw(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,op(t,n)}}var ac={readContext:Sn,useCallback:xt,useContext:xt,useEffect:xt,useImperativeHandle:xt,useInsertionEffect:xt,useLayoutEffect:xt,useMemo:xt,useReducer:xt,useRef:xt,useState:xt,useDebugValue:xt,useDeferredValue:xt,useTransition:xt,useMutableSource:xt,useSyncExternalStore:xt,useId:xt,unstable_isNewReconciler:!1},U1={readContext:Sn,useCallback:function(t,e){return Kn().memoizedState=[t,e===void 0?null:e],t},useContext:Sn,useEffect:uy,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ku(4194308,4,aw.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ku(4194308,4,t,e)},useInsertionEffect:function(t,e){return ku(4,2,t,e)},useMemo:function(t,e){var n=Kn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Kn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=M1.bind(null,He,t),[r.memoizedState,t]},useRef:function(t){var e=Kn();return t={current:t},e.memoizedState=t},useState:ly,useDebugValue:kp,useDeferredValue:function(t){return Kn().memoizedState=t},useTransition:function(){var t=ly(!1),e=t[0];return t=L1.bind(null,t[1]),Kn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=He,i=Kn();if(Be){if(n===void 0)throw Error(W(407));n=n()}else{if(n=e(),gt===null)throw Error(W(349));Qi&30||Z0(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,uy(tw.bind(null,r,s,t),[t]),r.flags|=2048,Qa(9,ew.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Kn(),e=gt.identifierPrefix;if(Be){var n=dr,r=hr;n=(r&~(1<<32-Fn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ka++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=O1++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},F1={readContext:Sn,useCallback:uw,useContext:Sn,useEffect:Pp,useImperativeHandle:lw,useInsertionEffect:sw,useLayoutEffect:ow,useMemo:cw,useReducer:Zh,useRef:iw,useState:function(){return Zh(Ga)},useDebugValue:kp,useDeferredValue:function(t){var e=Rn();return hw(e,lt.memoizedState,t)},useTransition:function(){var t=Zh(Ga)[0],e=Rn().memoizedState;return[t,e]},useMutableSource:Y0,useSyncExternalStore:J0,useId:dw,unstable_isNewReconciler:!1},j1={readContext:Sn,useCallback:uw,useContext:Sn,useEffect:Pp,useImperativeHandle:lw,useInsertionEffect:sw,useLayoutEffect:ow,useMemo:cw,useReducer:ed,useRef:iw,useState:function(){return ed(Ga)},useDebugValue:kp,useDeferredValue:function(t){var e=Rn();return lt===null?e.memoizedState=t:hw(e,lt.memoizedState,t)},useTransition:function(){var t=ed(Ga)[0],e=Rn().memoizedState;return[t,e]},useMutableSource:Y0,useSyncExternalStore:J0,useId:dw,unstable_isNewReconciler:!1};function On(t,e){if(t&&t.defaultProps){e=We({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function sf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:We({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var qc={isMounted:function(t){return(t=t._reactInternals)?ls(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ht(),i=ii(t),s=yr(r,i);s.payload=e,n!=null&&(s.callback=n),e=ni(t,s,i),e!==null&&(jn(e,t,i,r),Cu(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ht(),i=ii(t),s=yr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ni(t,s,i),e!==null&&(jn(e,t,i,r),Cu(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ht(),r=ii(t),i=yr(n,r);i.tag=2,e!=null&&(i.callback=e),e=ni(t,i,r),e!==null&&(jn(e,t,r,n),Cu(e,t,r))}};function cy(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ba(n,r)||!Ba(i,s):!0}function gw(t,e,n){var r=!1,i=hi,s=e.contextType;return typeof s=="object"&&s!==null?s=Sn(s):(i=Jt(e)?Ki:Ut.current,r=e.contextTypes,s=(r=r!=null)?io(t,i):hi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=qc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function hy(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&qc.enqueueReplaceState(e,e.state,null)}function of(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Ep(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Sn(s):(s=Jt(e)?Ki:Ut.current,i.context=io(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(sf(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&qc.enqueueReplaceState(i,i.state,null),ic(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function lo(t,e){try{var n="",r=e;do n+=pR(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function td(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function af(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var B1=typeof WeakMap=="function"?WeakMap:Map;function yw(t,e,n){n=yr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){uc||(uc=!0,yf=r),af(t,e)},n}function vw(t,e,n){n=yr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){af(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){af(t,e),typeof r!="function"&&(ri===null?ri=new Set([this]):ri.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function dy(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new B1;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=tA.bind(null,t,e,n),e.then(t,t))}function fy(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function py(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=yr(-1,1),e.tag=2,ni(n,e,1))),n.lanes|=1),t)}var z1=kr.ReactCurrentOwner,Xt=!1;function $t(t,e,n,r){e.child=t===null?K0(e,null,n,r):oo(e,t.child,n,r)}function my(t,e,n,r,i){n=n.render;var s=e.ref;return Ys(e,i),r=Ap(t,e,n,r,s,i),n=Cp(),t!==null&&!Xt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Sr(t,e,i)):(Be&&n&&pp(e),e.flags|=1,$t(t,e,r,i),e.child)}function gy(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Vp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,_w(t,e,s,r,i)):(t=Du(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ba,n(o,r)&&t.ref===e.ref)return Sr(t,e,i)}return e.flags|=1,t=si(s,r),t.ref=e.ref,t.return=e,e.child=t}function _w(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Ba(s,r)&&t.ref===e.ref)if(Xt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Xt=!0);else return e.lanes=t.lanes,Sr(t,e,i)}return lf(t,e,n,r,i)}function ww(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},De($s,on),on|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,De($s,on),on|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,De($s,on),on|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,De($s,on),on|=r;return $t(t,e,i,n),e.child}function Ew(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function lf(t,e,n,r,i){var s=Jt(n)?Ki:Ut.current;return s=io(e,s),Ys(e,i),n=Ap(t,e,n,r,s,i),r=Cp(),t!==null&&!Xt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Sr(t,e,i)):(Be&&r&&pp(e),e.flags|=1,$t(t,e,n,i),e.child)}function yy(t,e,n,r,i){if(Jt(n)){var s=!0;Zu(e)}else s=!1;if(Ys(e,i),e.stateNode===null)Nu(t,e),gw(e,n,r),of(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Sn(c):(c=Jt(n)?Ki:Ut.current,c=io(e,c));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&hy(e,o,r,c),jr=!1;var g=e.memoizedState;o.state=g,ic(e,r,o,i),u=e.memoizedState,l!==r||g!==u||Yt.current||jr?(typeof d=="function"&&(sf(e,n,d,r),u=e.memoizedState),(l=jr||cy(e,n,l,r,g,u,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Q0(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:On(e.type,l),o.props=c,p=e.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Sn(u):(u=Jt(n)?Ki:Ut.current,u=io(e,u));var v=n.getDerivedStateFromProps;(d=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||g!==u)&&hy(e,o,r,u),jr=!1,g=e.memoizedState,o.state=g,ic(e,r,o,i);var A=e.memoizedState;l!==p||g!==A||Yt.current||jr?(typeof v=="function"&&(sf(e,n,v,r),A=e.memoizedState),(c=jr||cy(e,n,c,r,g,A,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,A,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,A,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=A),o.props=r,o.state=A,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return uf(t,e,n,r,s,i)}function uf(t,e,n,r,i,s){Ew(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&ny(e,n,!1),Sr(t,e,s);r=e.stateNode,z1.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=oo(e,t.child,null,s),e.child=oo(e,null,l,s)):$t(t,e,l,s),e.memoizedState=r.state,i&&ny(e,n,!0),e.child}function Tw(t){var e=t.stateNode;e.pendingContext?ty(t,e.pendingContext,e.pendingContext!==e.context):e.context&&ty(t,e.context,!1),Tp(t,e.containerInfo)}function vy(t,e,n,r,i){return so(),gp(i),e.flags|=256,$t(t,e,n,r),e.child}var cf={dehydrated:null,treeContext:null,retryLane:0};function hf(t){return{baseLanes:t,cachePool:null,transitions:null}}function Iw(t,e,n){var r=e.pendingProps,i=$e.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),De($e,i&1),t===null)return nf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Qc(o,r,0,null),t=Hi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=hf(n),e.memoizedState=cf,t):Np(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return $1(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=si(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=si(l,s):(s=Hi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?hf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=cf,r}return s=t.child,t=s.sibling,r=si(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Np(t,e){return e=Qc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function uu(t,e,n,r){return r!==null&&gp(r),oo(e,t.child,null,n),t=Np(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function $1(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=td(Error(W(422))),uu(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Qc({mode:"visible",children:r.children},i,0,null),s=Hi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&oo(e,t.child,null,o),e.child.memoizedState=hf(o),e.memoizedState=cf,s);if(!(e.mode&1))return uu(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(W(419)),r=td(s,r,void 0),uu(t,e,o,r)}if(l=(o&t.childLanes)!==0,Xt||l){if(r=gt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Ir(t,i),jn(r,t,i,-1))}return Mp(),r=td(Error(W(421))),uu(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=nA.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,ln=ti(i.nextSibling),cn=e,Be=!0,Vn=null,t!==null&&(vn[_n++]=hr,vn[_n++]=dr,vn[_n++]=Gi,hr=t.id,dr=t.overflow,Gi=e),e=Np(e,r.children),e.flags|=4096,e)}function _y(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),rf(t.return,e,n)}function nd(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Sw(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if($t(t,e,r.children,n),r=$e.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&_y(t,n,e);else if(t.tag===19)_y(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(De($e,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&sc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),nd(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&sc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}nd(e,!0,n,null,s);break;case"together":nd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Nu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Sr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Xi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(W(153));if(e.child!==null){for(t=e.child,n=si(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=si(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function H1(t,e,n){switch(e.tag){case 3:Tw(e),so();break;case 5:X0(e);break;case 1:Jt(e.type)&&Zu(e);break;case 4:Tp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;De(nc,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(De($e,$e.current&1),e.flags|=128,null):n&e.child.childLanes?Iw(t,e,n):(De($e,$e.current&1),t=Sr(t,e,n),t!==null?t.sibling:null);De($e,$e.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Sw(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),De($e,$e.current),r)break;return null;case 22:case 23:return e.lanes=0,ww(t,e,n)}return Sr(t,e,n)}var Rw,df,Aw,Cw;Rw=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};df=function(){};Aw=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Fi(Yn.current);var s=null;switch(n){case"input":i=Dd(t,i),r=Dd(t,r),s=[];break;case"select":i=We({},i,{value:void 0}),r=We({},r,{value:void 0}),s=[];break;case"textarea":i=Md(t,i),r=Md(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Yu)}Ud(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Oa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Oa.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&Ve("scroll",t),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Cw=function(t,e,n,r){n!==r&&(e.flags|=4)};function ta(t,e){if(!Be)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Dt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function W1(t,e,n){var r=e.pendingProps;switch(mp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Dt(e),null;case 1:return Jt(e.type)&&Ju(),Dt(e),null;case 3:return r=e.stateNode,ao(),Ue(Yt),Ue(Ut),Sp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(au(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Vn!==null&&(wf(Vn),Vn=null))),df(t,e),Dt(e),null;case 5:Ip(e);var i=Fi(qa.current);if(n=e.type,t!==null&&e.stateNode!=null)Aw(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(W(166));return Dt(e),null}if(t=Fi(Yn.current),au(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Gn]=e,r[Ha]=s,t=(e.mode&1)!==0,n){case"dialog":Ve("cancel",r),Ve("close",r);break;case"iframe":case"object":case"embed":Ve("load",r);break;case"video":case"audio":for(i=0;i<ha.length;i++)Ve(ha[i],r);break;case"source":Ve("error",r);break;case"img":case"image":case"link":Ve("error",r),Ve("load",r);break;case"details":Ve("toggle",r);break;case"input":Pg(r,s),Ve("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Ve("invalid",r);break;case"textarea":Ng(r,s),Ve("invalid",r)}Ud(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&ou(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&ou(r.textContent,l,t),i=["children",""+l]):Oa.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Ve("scroll",r)}switch(n){case"input":Jl(r),kg(r,s,!0);break;case"textarea":Jl(r),bg(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Yu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=t0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Gn]=e,t[Ha]=r,Rw(t,e,!1,!1),e.stateNode=t;e:{switch(o=Fd(n,r),n){case"dialog":Ve("cancel",t),Ve("close",t),i=r;break;case"iframe":case"object":case"embed":Ve("load",t),i=r;break;case"video":case"audio":for(i=0;i<ha.length;i++)Ve(ha[i],t);i=r;break;case"source":Ve("error",t),i=r;break;case"img":case"image":case"link":Ve("error",t),Ve("load",t),i=r;break;case"details":Ve("toggle",t),i=r;break;case"input":Pg(t,r),i=Dd(t,r),Ve("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=We({},r,{value:void 0}),Ve("invalid",t);break;case"textarea":Ng(t,r),i=Md(t,r),Ve("invalid",t);break;default:i=r}Ud(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?i0(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&n0(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&La(t,u):typeof u=="number"&&La(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Oa.hasOwnProperty(s)?u!=null&&s==="onScroll"&&Ve("scroll",t):u!=null&&ep(t,s,u,o))}switch(n){case"input":Jl(t),kg(t,r,!1);break;case"textarea":Jl(t),bg(t);break;case"option":r.value!=null&&t.setAttribute("value",""+ci(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Ks(t,!!r.multiple,s,!1):r.defaultValue!=null&&Ks(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Yu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Dt(e),null;case 6:if(t&&e.stateNode!=null)Cw(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(W(166));if(n=Fi(qa.current),Fi(Yn.current),au(e)){if(r=e.stateNode,n=e.memoizedProps,r[Gn]=e,(s=r.nodeValue!==n)&&(t=cn,t!==null))switch(t.tag){case 3:ou(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ou(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Gn]=e,e.stateNode=r}return Dt(e),null;case 13:if(Ue($e),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Be&&ln!==null&&e.mode&1&&!(e.flags&128))W0(),so(),e.flags|=98560,s=!1;else if(s=au(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(W(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(W(317));s[Gn]=e}else so(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Dt(e),s=!1}else Vn!==null&&(wf(Vn),Vn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||$e.current&1?ct===0&&(ct=3):Mp())),e.updateQueue!==null&&(e.flags|=4),Dt(e),null);case 4:return ao(),df(t,e),t===null&&za(e.stateNode.containerInfo),Dt(e),null;case 10:return _p(e.type._context),Dt(e),null;case 17:return Jt(e.type)&&Ju(),Dt(e),null;case 19:if(Ue($e),s=e.memoizedState,s===null)return Dt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ta(s,!1);else{if(ct!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=sc(t),o!==null){for(e.flags|=128,ta(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return De($e,$e.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ze()>uo&&(e.flags|=128,r=!0,ta(s,!1),e.lanes=4194304)}else{if(!r)if(t=sc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ta(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Be)return Dt(e),null}else 2*Ze()-s.renderingStartTime>uo&&n!==1073741824&&(e.flags|=128,r=!0,ta(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ze(),e.sibling=null,n=$e.current,De($e,r?n&1|2:n&1),e):(Dt(e),null);case 22:case 23:return Lp(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?on&1073741824&&(Dt(e),e.subtreeFlags&6&&(e.flags|=8192)):Dt(e),null;case 24:return null;case 25:return null}throw Error(W(156,e.tag))}function q1(t,e){switch(mp(e),e.tag){case 1:return Jt(e.type)&&Ju(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ao(),Ue(Yt),Ue(Ut),Sp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Ip(e),null;case 13:if(Ue($e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(W(340));so()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ue($e),null;case 4:return ao(),null;case 10:return _p(e.type._context),null;case 22:case 23:return Lp(),null;case 24:return null;default:return null}}var cu=!1,Mt=!1,K1=typeof WeakSet=="function"?WeakSet:Set,Y=null;function zs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Qe(t,e,r)}else n.current=null}function ff(t,e,n){try{n()}catch(r){Qe(t,e,r)}}var wy=!1;function G1(t,e){if(Qd=Gu,t=x0(),fp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,d=0,p=t,g=null;t:for(;;){for(var v;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(v=p.firstChild)!==null;)g=p,p=v;for(;;){if(p===t)break t;if(g===n&&++c===i&&(l=o),g===s&&++d===r&&(u=o),(v=p.nextSibling)!==null)break;p=g,g=p.parentNode}p=v}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Xd={focusedElem:t,selectionRange:n},Gu=!1,Y=e;Y!==null;)if(e=Y,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Y=t;else for(;Y!==null;){e=Y;try{var A=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(A!==null){var C=A.memoizedProps,D=A.memoizedState,T=e.stateNode,_=T.getSnapshotBeforeUpdate(e.elementType===e.type?C:On(e.type,C),D);T.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(W(163))}}catch(O){Qe(e,e.return,O)}if(t=e.sibling,t!==null){t.return=e.return,Y=t;break}Y=e.return}return A=wy,wy=!1,A}function Sa(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&ff(e,n,s)}i=i.next}while(i!==r)}}function Kc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function pf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Pw(t){var e=t.alternate;e!==null&&(t.alternate=null,Pw(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Gn],delete e[Ha],delete e[Zd],delete e[N1],delete e[b1])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function kw(t){return t.tag===5||t.tag===3||t.tag===4}function Ey(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||kw(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function mf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Yu));else if(r!==4&&(t=t.child,t!==null))for(mf(t,e,n),t=t.sibling;t!==null;)mf(t,e,n),t=t.sibling}function gf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(gf(t,e,n),t=t.sibling;t!==null;)gf(t,e,n),t=t.sibling}var _t=null,Ln=!1;function Mr(t,e,n){for(n=n.child;n!==null;)Nw(t,e,n),n=n.sibling}function Nw(t,e,n){if(Xn&&typeof Xn.onCommitFiberUnmount=="function")try{Xn.onCommitFiberUnmount(Fc,n)}catch{}switch(n.tag){case 5:Mt||zs(n,e);case 6:var r=_t,i=Ln;_t=null,Mr(t,e,n),_t=r,Ln=i,_t!==null&&(Ln?(t=_t,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):_t.removeChild(n.stateNode));break;case 18:_t!==null&&(Ln?(t=_t,n=n.stateNode,t.nodeType===8?Qh(t.parentNode,n):t.nodeType===1&&Qh(t,n),Fa(t)):Qh(_t,n.stateNode));break;case 4:r=_t,i=Ln,_t=n.stateNode.containerInfo,Ln=!0,Mr(t,e,n),_t=r,Ln=i;break;case 0:case 11:case 14:case 15:if(!Mt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&ff(n,e,o),i=i.next}while(i!==r)}Mr(t,e,n);break;case 1:if(!Mt&&(zs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Qe(n,e,l)}Mr(t,e,n);break;case 21:Mr(t,e,n);break;case 22:n.mode&1?(Mt=(r=Mt)||n.memoizedState!==null,Mr(t,e,n),Mt=r):Mr(t,e,n);break;default:Mr(t,e,n)}}function Ty(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new K1),e.forEach(function(r){var i=rA.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Dn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:_t=l.stateNode,Ln=!1;break e;case 3:_t=l.stateNode.containerInfo,Ln=!0;break e;case 4:_t=l.stateNode.containerInfo,Ln=!0;break e}l=l.return}if(_t===null)throw Error(W(160));Nw(s,o,i),_t=null,Ln=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Qe(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)bw(e,t),e=e.sibling}function bw(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Dn(e,t),qn(t),r&4){try{Sa(3,t,t.return),Kc(3,t)}catch(C){Qe(t,t.return,C)}try{Sa(5,t,t.return)}catch(C){Qe(t,t.return,C)}}break;case 1:Dn(e,t),qn(t),r&512&&n!==null&&zs(n,n.return);break;case 5:if(Dn(e,t),qn(t),r&512&&n!==null&&zs(n,n.return),t.flags&32){var i=t.stateNode;try{La(i,"")}catch(C){Qe(t,t.return,C)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Z_(i,s),Fd(l,o);var c=Fd(l,s);for(o=0;o<u.length;o+=2){var d=u[o],p=u[o+1];d==="style"?i0(i,p):d==="dangerouslySetInnerHTML"?n0(i,p):d==="children"?La(i,p):ep(i,d,p,c)}switch(l){case"input":Od(i,s);break;case"textarea":e0(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var v=s.value;v!=null?Ks(i,!!s.multiple,v,!1):g!==!!s.multiple&&(s.defaultValue!=null?Ks(i,!!s.multiple,s.defaultValue,!0):Ks(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ha]=s}catch(C){Qe(t,t.return,C)}}break;case 6:if(Dn(e,t),qn(t),r&4){if(t.stateNode===null)throw Error(W(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(C){Qe(t,t.return,C)}}break;case 3:if(Dn(e,t),qn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Fa(e.containerInfo)}catch(C){Qe(t,t.return,C)}break;case 4:Dn(e,t),qn(t);break;case 13:Dn(e,t),qn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Dp=Ze())),r&4&&Ty(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Mt=(c=Mt)||d,Dn(e,t),Mt=c):Dn(e,t),qn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(Y=t,d=t.child;d!==null;){for(p=Y=d;Y!==null;){switch(g=Y,v=g.child,g.tag){case 0:case 11:case 14:case 15:Sa(4,g,g.return);break;case 1:zs(g,g.return);var A=g.stateNode;if(typeof A.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,A.props=e.memoizedProps,A.state=e.memoizedState,A.componentWillUnmount()}catch(C){Qe(r,n,C)}}break;case 5:zs(g,g.return);break;case 22:if(g.memoizedState!==null){Sy(p);continue}}v!==null?(v.return=g,Y=v):Sy(p)}d=d.sibling}e:for(d=null,p=t;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=r0("display",o))}catch(C){Qe(t,t.return,C)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(C){Qe(t,t.return,C)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Dn(e,t),qn(t),r&4&&Ty(t);break;case 21:break;default:Dn(e,t),qn(t)}}function qn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(kw(n)){var r=n;break e}n=n.return}throw Error(W(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(La(i,""),r.flags&=-33);var s=Ey(t);gf(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Ey(t);mf(t,l,o);break;default:throw Error(W(161))}}catch(u){Qe(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Q1(t,e,n){Y=t,xw(t)}function xw(t,e,n){for(var r=(t.mode&1)!==0;Y!==null;){var i=Y,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||cu;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||Mt;l=cu;var c=Mt;if(cu=o,(Mt=u)&&!c)for(Y=i;Y!==null;)o=Y,u=o.child,o.tag===22&&o.memoizedState!==null?Ry(i):u!==null?(u.return=o,Y=u):Ry(i);for(;s!==null;)Y=s,xw(s),s=s.sibling;Y=i,cu=l,Mt=c}Iy(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,Y=s):Iy(t)}}function Iy(t){for(;Y!==null;){var e=Y;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Mt||Kc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Mt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:On(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&ay(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}ay(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&Fa(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(W(163))}Mt||e.flags&512&&pf(e)}catch(g){Qe(e,e.return,g)}}if(e===t){Y=null;break}if(n=e.sibling,n!==null){n.return=e.return,Y=n;break}Y=e.return}}function Sy(t){for(;Y!==null;){var e=Y;if(e===t){Y=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Y=n;break}Y=e.return}}function Ry(t){for(;Y!==null;){var e=Y;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Kc(4,e)}catch(u){Qe(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Qe(e,i,u)}}var s=e.return;try{pf(e)}catch(u){Qe(e,s,u)}break;case 5:var o=e.return;try{pf(e)}catch(u){Qe(e,o,u)}}}catch(u){Qe(e,e.return,u)}if(e===t){Y=null;break}var l=e.sibling;if(l!==null){l.return=e.return,Y=l;break}Y=e.return}}var X1=Math.ceil,lc=kr.ReactCurrentDispatcher,bp=kr.ReactCurrentOwner,Tn=kr.ReactCurrentBatchConfig,Ee=0,gt=null,it=null,Tt=0,on=0,$s=gi(0),ct=0,Xa=null,Xi=0,Gc=0,xp=0,Ra=null,Qt=null,Dp=0,uo=1/0,ur=null,uc=!1,yf=null,ri=null,hu=!1,Qr=null,cc=0,Aa=0,vf=null,bu=-1,xu=0;function Ht(){return Ee&6?Ze():bu!==-1?bu:bu=Ze()}function ii(t){return t.mode&1?Ee&2&&Tt!==0?Tt&-Tt:D1.transition!==null?(xu===0&&(xu=g0()),xu):(t=Ce,t!==0||(t=window.event,t=t===void 0?16:I0(t.type)),t):1}function jn(t,e,n,r){if(50<Aa)throw Aa=0,vf=null,Error(W(185));fl(t,n,r),(!(Ee&2)||t!==gt)&&(t===gt&&(!(Ee&2)&&(Gc|=n),ct===4&&zr(t,Tt)),Zt(t,r),n===1&&Ee===0&&!(e.mode&1)&&(uo=Ze()+500,Hc&&yi()))}function Zt(t,e){var n=t.callbackNode;DR(t,e);var r=Ku(t,t===gt?Tt:0);if(r===0)n!==null&&Og(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Og(n),e===1)t.tag===0?x1(Ay.bind(null,t)):z0(Ay.bind(null,t)),P1(function(){!(Ee&6)&&yi()}),n=null;else{switch(y0(r)){case 1:n=sp;break;case 4:n=p0;break;case 16:n=qu;break;case 536870912:n=m0;break;default:n=qu}n=jw(n,Dw.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Dw(t,e){if(bu=-1,xu=0,Ee&6)throw Error(W(327));var n=t.callbackNode;if(Js()&&t.callbackNode!==n)return null;var r=Ku(t,t===gt?Tt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=hc(t,r);else{e=r;var i=Ee;Ee|=2;var s=Lw();(gt!==t||Tt!==e)&&(ur=null,uo=Ze()+500,$i(t,e));do try{Z1();break}catch(l){Ow(t,l)}while(!0);vp(),lc.current=s,Ee=i,it!==null?e=0:(gt=null,Tt=0,e=ct)}if(e!==0){if(e===2&&(i=Hd(t),i!==0&&(r=i,e=_f(t,i))),e===1)throw n=Xa,$i(t,0),zr(t,r),Zt(t,Ze()),n;if(e===6)zr(t,r);else{if(i=t.current.alternate,!(r&30)&&!Y1(i)&&(e=hc(t,r),e===2&&(s=Hd(t),s!==0&&(r=s,e=_f(t,s))),e===1))throw n=Xa,$i(t,0),zr(t,r),Zt(t,Ze()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(W(345));case 2:Oi(t,Qt,ur);break;case 3:if(zr(t,r),(r&130023424)===r&&(e=Dp+500-Ze(),10<e)){if(Ku(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Ht(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Jd(Oi.bind(null,t,Qt,ur),e);break}Oi(t,Qt,ur);break;case 4:if(zr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Fn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ze()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*X1(r/1960))-r,10<r){t.timeoutHandle=Jd(Oi.bind(null,t,Qt,ur),r);break}Oi(t,Qt,ur);break;case 5:Oi(t,Qt,ur);break;default:throw Error(W(329))}}}return Zt(t,Ze()),t.callbackNode===n?Dw.bind(null,t):null}function _f(t,e){var n=Ra;return t.current.memoizedState.isDehydrated&&($i(t,e).flags|=256),t=hc(t,e),t!==2&&(e=Qt,Qt=n,e!==null&&wf(e)),t}function wf(t){Qt===null?Qt=t:Qt.push.apply(Qt,t)}function Y1(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Bn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function zr(t,e){for(e&=~xp,e&=~Gc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Fn(e),r=1<<n;t[n]=-1,e&=~r}}function Ay(t){if(Ee&6)throw Error(W(327));Js();var e=Ku(t,0);if(!(e&1))return Zt(t,Ze()),null;var n=hc(t,e);if(t.tag!==0&&n===2){var r=Hd(t);r!==0&&(e=r,n=_f(t,r))}if(n===1)throw n=Xa,$i(t,0),zr(t,e),Zt(t,Ze()),n;if(n===6)throw Error(W(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Oi(t,Qt,ur),Zt(t,Ze()),null}function Op(t,e){var n=Ee;Ee|=1;try{return t(e)}finally{Ee=n,Ee===0&&(uo=Ze()+500,Hc&&yi())}}function Yi(t){Qr!==null&&Qr.tag===0&&!(Ee&6)&&Js();var e=Ee;Ee|=1;var n=Tn.transition,r=Ce;try{if(Tn.transition=null,Ce=1,t)return t()}finally{Ce=r,Tn.transition=n,Ee=e,!(Ee&6)&&yi()}}function Lp(){on=$s.current,Ue($s)}function $i(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,C1(n)),it!==null)for(n=it.return;n!==null;){var r=n;switch(mp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ju();break;case 3:ao(),Ue(Yt),Ue(Ut),Sp();break;case 5:Ip(r);break;case 4:ao();break;case 13:Ue($e);break;case 19:Ue($e);break;case 10:_p(r.type._context);break;case 22:case 23:Lp()}n=n.return}if(gt=t,it=t=si(t.current,null),Tt=on=e,ct=0,Xa=null,xp=Gc=Xi=0,Qt=Ra=null,Ui!==null){for(e=0;e<Ui.length;e++)if(n=Ui[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Ui=null}return t}function Ow(t,e){do{var n=it;try{if(vp(),Pu.current=ac,oc){for(var r=He.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}oc=!1}if(Qi=0,pt=lt=He=null,Ia=!1,Ka=0,bp.current=null,n===null||n.return===null){ct=1,Xa=e,it=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=Tt,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=l,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var g=d.alternate;g?(d.updateQueue=g.updateQueue,d.memoizedState=g.memoizedState,d.lanes=g.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=fy(o);if(v!==null){v.flags&=-257,py(v,o,l,s,e),v.mode&1&&dy(s,c,e),e=v,u=c;var A=e.updateQueue;if(A===null){var C=new Set;C.add(u),e.updateQueue=C}else A.add(u);break e}else{if(!(e&1)){dy(s,c,e),Mp();break e}u=Error(W(426))}}else if(Be&&l.mode&1){var D=fy(o);if(D!==null){!(D.flags&65536)&&(D.flags|=256),py(D,o,l,s,e),gp(lo(u,l));break e}}s=u=lo(u,l),ct!==4&&(ct=2),Ra===null?Ra=[s]:Ra.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var T=yw(s,u,e);oy(s,T);break e;case 1:l=u;var _=s.type,S=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(ri===null||!ri.has(S)))){s.flags|=65536,e&=-e,s.lanes|=e;var O=vw(s,l,e);oy(s,O);break e}}s=s.return}while(s!==null)}Vw(n)}catch(z){e=z,it===n&&n!==null&&(it=n=n.return);continue}break}while(!0)}function Lw(){var t=lc.current;return lc.current=ac,t===null?ac:t}function Mp(){(ct===0||ct===3||ct===2)&&(ct=4),gt===null||!(Xi&268435455)&&!(Gc&268435455)||zr(gt,Tt)}function hc(t,e){var n=Ee;Ee|=2;var r=Lw();(gt!==t||Tt!==e)&&(ur=null,$i(t,e));do try{J1();break}catch(i){Ow(t,i)}while(!0);if(vp(),Ee=n,lc.current=r,it!==null)throw Error(W(261));return gt=null,Tt=0,ct}function J1(){for(;it!==null;)Mw(it)}function Z1(){for(;it!==null&&!SR();)Mw(it)}function Mw(t){var e=Fw(t.alternate,t,on);t.memoizedProps=t.pendingProps,e===null?Vw(t):it=e,bp.current=null}function Vw(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=q1(n,e),n!==null){n.flags&=32767,it=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ct=6,it=null;return}}else if(n=W1(n,e,on),n!==null){it=n;return}if(e=e.sibling,e!==null){it=e;return}it=e=t}while(e!==null);ct===0&&(ct=5)}function Oi(t,e,n){var r=Ce,i=Tn.transition;try{Tn.transition=null,Ce=1,eA(t,e,n,r)}finally{Tn.transition=i,Ce=r}return null}function eA(t,e,n,r){do Js();while(Qr!==null);if(Ee&6)throw Error(W(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(W(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(OR(t,s),t===gt&&(it=gt=null,Tt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||hu||(hu=!0,jw(qu,function(){return Js(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Tn.transition,Tn.transition=null;var o=Ce;Ce=1;var l=Ee;Ee|=4,bp.current=null,G1(t,n),bw(n,t),w1(Xd),Gu=!!Qd,Xd=Qd=null,t.current=n,Q1(n),RR(),Ee=l,Ce=o,Tn.transition=s}else t.current=n;if(hu&&(hu=!1,Qr=t,cc=i),s=t.pendingLanes,s===0&&(ri=null),PR(n.stateNode),Zt(t,Ze()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(uc)throw uc=!1,t=yf,yf=null,t;return cc&1&&t.tag!==0&&Js(),s=t.pendingLanes,s&1?t===vf?Aa++:(Aa=0,vf=t):Aa=0,yi(),null}function Js(){if(Qr!==null){var t=y0(cc),e=Tn.transition,n=Ce;try{if(Tn.transition=null,Ce=16>t?16:t,Qr===null)var r=!1;else{if(t=Qr,Qr=null,cc=0,Ee&6)throw Error(W(331));var i=Ee;for(Ee|=4,Y=t.current;Y!==null;){var s=Y,o=s.child;if(Y.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(Y=c;Y!==null;){var d=Y;switch(d.tag){case 0:case 11:case 15:Sa(8,d,s)}var p=d.child;if(p!==null)p.return=d,Y=p;else for(;Y!==null;){d=Y;var g=d.sibling,v=d.return;if(Pw(d),d===c){Y=null;break}if(g!==null){g.return=v,Y=g;break}Y=v}}}var A=s.alternate;if(A!==null){var C=A.child;if(C!==null){A.child=null;do{var D=C.sibling;C.sibling=null,C=D}while(C!==null)}}Y=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Y=o;else e:for(;Y!==null;){if(s=Y,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Sa(9,s,s.return)}var T=s.sibling;if(T!==null){T.return=s.return,Y=T;break e}Y=s.return}}var _=t.current;for(Y=_;Y!==null;){o=Y;var S=o.child;if(o.subtreeFlags&2064&&S!==null)S.return=o,Y=S;else e:for(o=_;Y!==null;){if(l=Y,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Kc(9,l)}}catch(z){Qe(l,l.return,z)}if(l===o){Y=null;break e}var O=l.sibling;if(O!==null){O.return=l.return,Y=O;break e}Y=l.return}}if(Ee=i,yi(),Xn&&typeof Xn.onPostCommitFiberRoot=="function")try{Xn.onPostCommitFiberRoot(Fc,t)}catch{}r=!0}return r}finally{Ce=n,Tn.transition=e}}return!1}function Cy(t,e,n){e=lo(n,e),e=yw(t,e,1),t=ni(t,e,1),e=Ht(),t!==null&&(fl(t,1,e),Zt(t,e))}function Qe(t,e,n){if(t.tag===3)Cy(t,t,n);else for(;e!==null;){if(e.tag===3){Cy(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ri===null||!ri.has(r))){t=lo(n,t),t=vw(e,t,1),e=ni(e,t,1),t=Ht(),e!==null&&(fl(e,1,t),Zt(e,t));break}}e=e.return}}function tA(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ht(),t.pingedLanes|=t.suspendedLanes&n,gt===t&&(Tt&n)===n&&(ct===4||ct===3&&(Tt&130023424)===Tt&&500>Ze()-Dp?$i(t,0):xp|=n),Zt(t,e)}function Uw(t,e){e===0&&(t.mode&1?(e=tu,tu<<=1,!(tu&130023424)&&(tu=4194304)):e=1);var n=Ht();t=Ir(t,e),t!==null&&(fl(t,e,n),Zt(t,n))}function nA(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Uw(t,n)}function rA(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(W(314))}r!==null&&r.delete(e),Uw(t,n)}var Fw;Fw=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Yt.current)Xt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Xt=!1,H1(t,e,n);Xt=!!(t.flags&131072)}else Xt=!1,Be&&e.flags&1048576&&$0(e,tc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Nu(t,e),t=e.pendingProps;var i=io(e,Ut.current);Ys(e,n),i=Ap(null,e,r,t,i,n);var s=Cp();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Jt(r)?(s=!0,Zu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ep(e),i.updater=qc,e.stateNode=i,i._reactInternals=e,of(e,r,t,n),e=uf(null,e,r,!0,s,n)):(e.tag=0,Be&&s&&pp(e),$t(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Nu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=sA(r),t=On(r,t),i){case 0:e=lf(null,e,r,t,n);break e;case 1:e=yy(null,e,r,t,n);break e;case 11:e=my(null,e,r,t,n);break e;case 14:e=gy(null,e,r,On(r.type,t),n);break e}throw Error(W(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:On(r,i),lf(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:On(r,i),yy(t,e,r,i,n);case 3:e:{if(Tw(e),t===null)throw Error(W(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Q0(t,e),ic(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=lo(Error(W(423)),e),e=vy(t,e,r,n,i);break e}else if(r!==i){i=lo(Error(W(424)),e),e=vy(t,e,r,n,i);break e}else for(ln=ti(e.stateNode.containerInfo.firstChild),cn=e,Be=!0,Vn=null,n=K0(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(so(),r===i){e=Sr(t,e,n);break e}$t(t,e,r,n)}e=e.child}return e;case 5:return X0(e),t===null&&nf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Yd(r,i)?o=null:s!==null&&Yd(r,s)&&(e.flags|=32),Ew(t,e),$t(t,e,o,n),e.child;case 6:return t===null&&nf(e),null;case 13:return Iw(t,e,n);case 4:return Tp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=oo(e,null,r,n):$t(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:On(r,i),my(t,e,r,i,n);case 7:return $t(t,e,e.pendingProps,n),e.child;case 8:return $t(t,e,e.pendingProps.children,n),e.child;case 12:return $t(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,De(nc,r._currentValue),r._currentValue=o,s!==null)if(Bn(s.value,o)){if(s.children===i.children&&!Yt.current){e=Sr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=yr(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),rf(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(W(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),rf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}$t(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ys(e,n),i=Sn(i),r=r(i),e.flags|=1,$t(t,e,r,n),e.child;case 14:return r=e.type,i=On(r,e.pendingProps),i=On(r.type,i),gy(t,e,r,i,n);case 15:return _w(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:On(r,i),Nu(t,e),e.tag=1,Jt(r)?(t=!0,Zu(e)):t=!1,Ys(e,n),gw(e,r,i),of(e,r,i,n),uf(null,e,r,!0,t,n);case 19:return Sw(t,e,n);case 22:return ww(t,e,n)}throw Error(W(156,e.tag))};function jw(t,e){return f0(t,e)}function iA(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function En(t,e,n,r){return new iA(t,e,n,r)}function Vp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function sA(t){if(typeof t=="function")return Vp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===np)return 11;if(t===rp)return 14}return 2}function si(t,e){var n=t.alternate;return n===null?(n=En(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Du(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Vp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ds:return Hi(n.children,i,s,e);case tp:o=8,i|=8;break;case kd:return t=En(12,n,e,i|2),t.elementType=kd,t.lanes=s,t;case Nd:return t=En(13,n,e,i),t.elementType=Nd,t.lanes=s,t;case bd:return t=En(19,n,e,i),t.elementType=bd,t.lanes=s,t;case X_:return Qc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case G_:o=10;break e;case Q_:o=9;break e;case np:o=11;break e;case rp:o=14;break e;case Fr:o=16,r=null;break e}throw Error(W(130,t==null?t:typeof t,""))}return e=En(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Hi(t,e,n,r){return t=En(7,t,r,e),t.lanes=n,t}function Qc(t,e,n,r){return t=En(22,t,r,e),t.elementType=X_,t.lanes=n,t.stateNode={isHidden:!1},t}function rd(t,e,n){return t=En(6,t,null,e),t.lanes=n,t}function id(t,e,n){return e=En(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function oA(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Uh(0),this.expirationTimes=Uh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Uh(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Up(t,e,n,r,i,s,o,l,u){return t=new oA(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=En(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ep(s),t}function aA(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:xs,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Bw(t){if(!t)return hi;t=t._reactInternals;e:{if(ls(t)!==t||t.tag!==1)throw Error(W(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Jt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(W(171))}if(t.tag===1){var n=t.type;if(Jt(n))return B0(t,n,e)}return e}function zw(t,e,n,r,i,s,o,l,u){return t=Up(n,r,!0,t,i,s,o,l,u),t.context=Bw(null),n=t.current,r=Ht(),i=ii(n),s=yr(r,i),s.callback=e??null,ni(n,s,i),t.current.lanes=i,fl(t,i,r),Zt(t,r),t}function Xc(t,e,n,r){var i=e.current,s=Ht(),o=ii(i);return n=Bw(n),e.context===null?e.context=n:e.pendingContext=n,e=yr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=ni(i,e,o),t!==null&&(jn(t,i,o,s),Cu(t,i,o)),o}function dc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Py(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Fp(t,e){Py(t,e),(t=t.alternate)&&Py(t,e)}function lA(){return null}var $w=typeof reportError=="function"?reportError:function(t){console.error(t)};function jp(t){this._internalRoot=t}Yc.prototype.render=jp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(W(409));Xc(t,e,null,null)};Yc.prototype.unmount=jp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Yi(function(){Xc(null,t,null,null)}),e[Tr]=null}};function Yc(t){this._internalRoot=t}Yc.prototype.unstable_scheduleHydration=function(t){if(t){var e=w0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Br.length&&e!==0&&e<Br[n].priority;n++);Br.splice(n,0,t),n===0&&T0(t)}};function Bp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Jc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function ky(){}function uA(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=dc(o);s.call(c)}}var o=zw(e,r,t,0,null,!1,!1,"",ky);return t._reactRootContainer=o,t[Tr]=o.current,za(t.nodeType===8?t.parentNode:t),Yi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=dc(u);l.call(c)}}var u=Up(t,0,!1,null,null,!1,!1,"",ky);return t._reactRootContainer=u,t[Tr]=u.current,za(t.nodeType===8?t.parentNode:t),Yi(function(){Xc(e,u,n,r)}),u}function Zc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=dc(o);l.call(u)}}Xc(e,o,t,i)}else o=uA(n,e,t,i,r);return dc(o)}v0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ca(e.pendingLanes);n!==0&&(op(e,n|1),Zt(e,Ze()),!(Ee&6)&&(uo=Ze()+500,yi()))}break;case 13:Yi(function(){var r=Ir(t,1);if(r!==null){var i=Ht();jn(r,t,1,i)}}),Fp(t,1)}};ap=function(t){if(t.tag===13){var e=Ir(t,134217728);if(e!==null){var n=Ht();jn(e,t,134217728,n)}Fp(t,134217728)}};_0=function(t){if(t.tag===13){var e=ii(t),n=Ir(t,e);if(n!==null){var r=Ht();jn(n,t,e,r)}Fp(t,e)}};w0=function(){return Ce};E0=function(t,e){var n=Ce;try{return Ce=t,e()}finally{Ce=n}};Bd=function(t,e,n){switch(e){case"input":if(Od(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=$c(r);if(!i)throw Error(W(90));J_(r),Od(r,i)}}}break;case"textarea":e0(t,n);break;case"select":e=n.value,e!=null&&Ks(t,!!n.multiple,e,!1)}};a0=Op;l0=Yi;var cA={usingClientEntryPoint:!1,Events:[ml,Vs,$c,s0,o0,Op]},na={findFiberByHostInstance:Vi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},hA={bundleType:na.bundleType,version:na.version,rendererPackageName:na.rendererPackageName,rendererConfig:na.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:kr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=h0(t),t===null?null:t.stateNode},findFiberByHostInstance:na.findFiberByHostInstance||lA,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var du=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!du.isDisabled&&du.supportsFiber)try{Fc=du.inject(hA),Xn=du}catch{}}fn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cA;fn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Bp(e))throw Error(W(200));return aA(t,e,null,n)};fn.createRoot=function(t,e){if(!Bp(t))throw Error(W(299));var n=!1,r="",i=$w;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Up(t,1,!1,null,null,n,!1,r,i),t[Tr]=e.current,za(t.nodeType===8?t.parentNode:t),new jp(e)};fn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(W(188)):(t=Object.keys(t).join(","),Error(W(268,t)));return t=h0(e),t=t===null?null:t.stateNode,t};fn.flushSync=function(t){return Yi(t)};fn.hydrate=function(t,e,n){if(!Jc(e))throw Error(W(200));return Zc(null,t,e,!0,n)};fn.hydrateRoot=function(t,e,n){if(!Bp(t))throw Error(W(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=$w;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=zw(e,null,t,1,n??null,i,!1,s,o),t[Tr]=e.current,za(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Yc(e)};fn.render=function(t,e,n){if(!Jc(e))throw Error(W(200));return Zc(null,t,e,!1,n)};fn.unmountComponentAtNode=function(t){if(!Jc(t))throw Error(W(40));return t._reactRootContainer?(Yi(function(){Zc(null,null,t,!1,function(){t._reactRootContainer=null,t[Tr]=null})}),!0):!1};fn.unstable_batchedUpdates=Op;fn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Jc(n))throw Error(W(200));if(t==null||t._reactInternals===void 0)throw Error(W(38));return Zc(t,e,n,!1,r)};fn.version="18.3.1-next-f1338f8080-20240426";function Hw(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Hw)}catch(t){console.error(t)}}Hw(),H_.exports=fn;var zp=H_.exports;const dA=x_(zp),fA=b_({__proto__:null,default:dA},[zp]);var Ww,Ny=zp;Ww=Ny.createRoot,Ny.hydrateRoot;/**
 * @remix-run/router v1.19.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ze(){return ze=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ze.apply(this,arguments)}var rt;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(rt||(rt={}));const by="popstate";function pA(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return Ya("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Ji(i)}return gA(e,n,null,t)}function de(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function co(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function mA(){return Math.random().toString(36).substr(2,8)}function xy(t,e){return{usr:t.state,key:t.key,idx:e}}function Ya(t,e,n,r){return n===void 0&&(n=null),ze({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?vi(e):e,{state:n,key:e&&e.key||r||mA()})}function Ji(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function vi(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function gA(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=rt.Pop,u=null,c=d();c==null&&(c=0,o.replaceState(ze({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function p(){l=rt.Pop;let D=d(),T=D==null?null:D-c;c=D,u&&u({action:l,location:C.location,delta:T})}function g(D,T){l=rt.Push;let _=Ya(C.location,D,T);c=d()+1;let S=xy(_,c),O=C.createHref(_);try{o.pushState(S,"",O)}catch(z){if(z instanceof DOMException&&z.name==="DataCloneError")throw z;i.location.assign(O)}s&&u&&u({action:l,location:C.location,delta:1})}function v(D,T){l=rt.Replace;let _=Ya(C.location,D,T);c=d();let S=xy(_,c),O=C.createHref(_);o.replaceState(S,"",O),s&&u&&u({action:l,location:C.location,delta:0})}function A(D){let T=i.location.origin!=="null"?i.location.origin:i.location.href,_=typeof D=="string"?D:Ji(D);return _=_.replace(/ $/,"%20"),de(T,"No window.location.(origin|href) available to create URL for href: "+_),new URL(_,T)}let C={get action(){return l},get location(){return t(i,o)},listen(D){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(by,p),u=D,()=>{i.removeEventListener(by,p),u=null}},createHref(D){return e(i,D)},createURL:A,encodeLocation(D){let T=A(D);return{pathname:T.pathname,search:T.search,hash:T.hash}},push:g,replace:v,go(D){return o.go(D)}};return C}var ke;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(ke||(ke={}));const yA=new Set(["lazy","caseSensitive","path","id","index","children"]);function vA(t){return t.index===!0}function Ja(t,e,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),t.map((i,s)=>{let o=[...n,String(s)],l=typeof i.id=="string"?i.id:o.join("-");if(de(i.index!==!0||!i.children,"Cannot specify children on an index route"),de(!r[l],'Found a route id collision on id "'+l+`".  Route id's must be globally unique within Data Router usages`),vA(i)){let u=ze({},i,e(i),{id:l});return r[l]=u,u}else{let u=ze({},i,e(i),{id:l,children:void 0});return r[l]=u,i.children&&(u.children=Ja(i.children,e,o,r)),u}})}function Mi(t,e,n){return n===void 0&&(n="/"),Ou(t,e,n,!1)}function Ou(t,e,n,r){let i=typeof e=="string"?vi(e):e,s=Io(i.pathname||"/",n);if(s==null)return null;let o=qw(t);wA(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let c=bA(s);l=kA(o[u],c,r)}return l}function _A(t,e){let{route:n,pathname:r,params:i}=t;return{id:n.id,pathname:r,params:i,data:e[n.id],handle:n.handle}}function qw(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(de(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=vr([r,u.relativePath]),d=n.concat(u);s.children&&s.children.length>0&&(de(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),qw(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:CA(c,s.index),routesMeta:d})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let u of Kw(s.path))i(s,o,u)}),e}function Kw(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=Kw(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function wA(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:PA(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const EA=/^:[\w-]+$/,TA=3,IA=2,SA=1,RA=10,AA=-2,Dy=t=>t==="*";function CA(t,e){let n=t.split("/"),r=n.length;return n.some(Dy)&&(r+=AA),e&&(r+=IA),n.filter(i=>!Dy(i)).reduce((i,s)=>i+(EA.test(s)?TA:s===""?SA:RA),r)}function PA(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function kA(t,e,n){n===void 0&&(n=!1);let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],c=l===r.length-1,d=s==="/"?e:e.slice(s.length)||"/",p=Oy({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},d),g=u.route;if(!p&&c&&n&&!r[r.length-1].route.index&&(p=Oy({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},d)),!p)return null;Object.assign(i,p.params),o.push({params:i,pathname:vr([s,p.pathname]),pathnameBase:OA(vr([s,p.pathnameBase])),route:g}),p.pathnameBase!=="/"&&(s=vr([s,p.pathnameBase]))}return o}function Oy(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=NA(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,d,p)=>{let{paramName:g,isOptional:v}=d;if(g==="*"){let C=l[p]||"";o=s.slice(0,s.length-C.length).replace(/(.)\/+$/,"$1")}const A=l[p];return v&&!A?c[g]=void 0:c[g]=(A||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function NA(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),co(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function bA(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return co(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Io(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function xA(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?vi(t):t;return{pathname:n?n.startsWith("/")?n:DA(n,e):e,search:LA(r),hash:MA(i)}}function DA(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function sd(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Gw(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function $p(t,e){let n=Gw(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Hp(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=vi(t):(i=ze({},t),de(!i.pathname||!i.pathname.includes("?"),sd("?","pathname","search",i)),de(!i.pathname||!i.pathname.includes("#"),sd("#","pathname","hash",i)),de(!i.search||!i.search.includes("#"),sd("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let p=e.length-1;if(!r&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),p-=1;i.pathname=g.join("/")}l=p>=0?e[p]:"/"}let u=xA(i,l),c=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}const vr=t=>t.join("/").replace(/\/\/+/g,"/"),OA=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),LA=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,MA=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class fc{constructor(e,n,r,i){i===void 0&&(i=!1),this.status=e,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function eh(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Qw=["post","put","patch","delete"],VA=new Set(Qw),UA=["get",...Qw],FA=new Set(UA),jA=new Set([301,302,303,307,308]),BA=new Set([307,308]),od={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},zA={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},ra={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},Wp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,$A=t=>({hasErrorBoundary:!!t.hasErrorBoundary}),Xw="remix-router-transitions";function HA(t){const e=t.window?t.window:typeof window<"u"?window:void 0,n=typeof e<"u"&&typeof e.document<"u"&&typeof e.document.createElement<"u",r=!n;de(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let i;if(t.mapRouteProperties)i=t.mapRouteProperties;else if(t.detectErrorBoundary){let k=t.detectErrorBoundary;i=N=>({hasErrorBoundary:k(N)})}else i=$A;let s={},o=Ja(t.routes,i,void 0,s),l,u=t.basename||"/",c=t.unstable_dataStrategy||XA,d=t.unstable_patchRoutesOnNavigation,p=ze({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1,v7_skipActionErrorRevalidation:!1},t.future),g=null,v=new Set,A=1e3,C=new Set,D=null,T=null,_=null,S=t.hydrationData!=null,O=Mi(o,t.history.location,u),z=null;if(O==null&&!d){let k=zt(404,{pathname:t.history.location.pathname}),{matches:N,route:M}=$y(o);O=N,z={[M.id]:k}}O&&!t.hydrationData&&et(O,o,t.history.location.pathname).active&&(O=null);let F;if(O)if(O.some(k=>k.route.lazy))F=!1;else if(!O.some(k=>k.route.loader))F=!0;else if(p.v7_partialHydration){let k=t.hydrationData?t.hydrationData.loaderData:null,N=t.hydrationData?t.hydrationData.errors:null,M=B=>B.route.loader?typeof B.route.loader=="function"&&B.route.loader.hydrate===!0?!1:k&&k[B.route.id]!==void 0||N&&N[B.route.id]!==void 0:!0;if(N){let B=O.findIndex(Q=>N[Q.route.id]!==void 0);F=O.slice(0,B+1).every(M)}else F=O.every(M)}else F=t.hydrationData!=null;else if(F=!1,O=[],p.v7_partialHydration){let k=et(null,o,t.history.location.pathname);k.active&&k.matches&&(O=k.matches)}let I,m={historyAction:t.history.action,location:t.history.location,matches:O,initialized:F,navigation:od,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||z,fetchers:new Map,blockers:new Map},w=rt.Pop,E=!1,P,x=!1,R=new Map,Te=null,At=!1,nn=!1,Kt=[],G=new Set,X=new Map,ae=0,Ae=-1,ve=new Map,Re=new Set,Ct=new Map,jt=new Map,ot=new Set,yt=new Map,ir=new Map,Sh=new Map,sr;function gs(){if(g=t.history.listen(k=>{let{action:N,location:M,delta:B}=k;if(sr){sr(),sr=void 0;return}co(ir.size===0||B!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let Q=_s({currentLocation:m.location,nextLocation:M,historyAction:N});if(Q&&B!=null){let ne=new Promise(se=>{sr=se});t.history.go(B*-1),Wn(Q,{state:"blocked",location:M,proceed(){Wn(Q,{state:"proceeding",proceed:void 0,reset:void 0,location:M}),ne.then(()=>t.history.go(B))},reset(){let se=new Map(m.blockers);se.set(Q,ra),at({blockers:se})}});return}return or(N,M)}),n){hC(e,R);let k=()=>dC(e,R);e.addEventListener("pagehide",k),Te=()=>e.removeEventListener("pagehide",k)}return m.initialized||or(rt.Pop,m.location,{initialHydration:!0}),I}function bo(){g&&g(),Te&&Te(),v.clear(),P&&P.abort(),m.fetchers.forEach((k,N)=>Ii(N)),m.blockers.forEach((k,N)=>Uo(N))}function xo(k){return v.add(k),()=>v.delete(k)}function at(k,N){N===void 0&&(N={}),m=ze({},m,k);let M=[],B=[];p.v7_fetcherPersist&&m.fetchers.forEach((Q,ne)=>{Q.state==="idle"&&(ot.has(ne)?B.push(ne):M.push(ne))}),[...v].forEach(Q=>Q(m,{deletedFetchers:B,unstable_viewTransitionOpts:N.viewTransitionOpts,unstable_flushSync:N.flushSync===!0})),p.v7_fetcherPersist&&(M.forEach(Q=>m.fetchers.delete(Q)),B.forEach(Q=>Ii(Q)))}function Hn(k,N,M){var B,Q;let{flushSync:ne}=M===void 0?{}:M,se=m.actionData!=null&&m.navigation.formMethod!=null&&Mn(m.navigation.formMethod)&&m.navigation.state==="loading"&&((B=k.state)==null?void 0:B._isRedirect)!==!0,q;N.actionData?Object.keys(N.actionData).length>0?q=N.actionData:q=null:se?q=m.actionData:q=null;let te=N.loaderData?By(m.loaderData,N.loaderData,N.matches||[],N.errors):m.loaderData,J=m.blockers;J.size>0&&(J=new Map(J),J.forEach((we,Pe)=>J.set(Pe,ra)));let ee=E===!0||m.navigation.formMethod!=null&&Mn(m.navigation.formMethod)&&((Q=k.state)==null?void 0:Q._isRedirect)!==!0;l&&(o=l,l=void 0),At||w===rt.Pop||(w===rt.Push?t.history.push(k,k.state):w===rt.Replace&&t.history.replace(k,k.state));let ge;if(w===rt.Pop){let we=R.get(m.location.pathname);we&&we.has(k.pathname)?ge={currentLocation:m.location,nextLocation:k}:R.has(k.pathname)&&(ge={currentLocation:k,nextLocation:m.location})}else if(x){let we=R.get(m.location.pathname);we?we.add(k.pathname):(we=new Set([k.pathname]),R.set(m.location.pathname,we)),ge={currentLocation:m.location,nextLocation:k}}at(ze({},N,{actionData:q,loaderData:te,historyAction:w,location:k,initialized:!0,navigation:od,revalidation:"idle",restoreScrollPosition:jo(k,N.matches||m.matches),preventScrollReset:ee,blockers:J}),{viewTransitionOpts:ge,flushSync:ne===!0}),w=rt.Pop,E=!1,x=!1,At=!1,nn=!1,Kt=[]}async function Do(k,N){if(typeof k=="number"){t.history.go(k);return}let M=Ef(m.location,m.matches,u,p.v7_prependBasename,k,p.v7_relativeSplatPath,N==null?void 0:N.fromRouteId,N==null?void 0:N.relative),{path:B,submission:Q,error:ne}=Ly(p.v7_normalizeFormMethod,!1,M,N),se=m.location,q=Ya(m.location,B,N&&N.state);q=ze({},q,t.history.encodeLocation(q));let te=N&&N.replace!=null?N.replace:void 0,J=rt.Push;te===!0?J=rt.Replace:te===!1||Q!=null&&Mn(Q.formMethod)&&Q.formAction===m.location.pathname+m.location.search&&(J=rt.Replace);let ee=N&&"preventScrollReset"in N?N.preventScrollReset===!0:void 0,ge=(N&&N.unstable_flushSync)===!0,we=_s({currentLocation:se,nextLocation:q,historyAction:J});if(we){Wn(we,{state:"blocked",location:q,proceed(){Wn(we,{state:"proceeding",proceed:void 0,reset:void 0,location:q}),Do(k,N)},reset(){let Pe=new Map(m.blockers);Pe.set(we,ra),at({blockers:Pe})}});return}return await or(J,q,{submission:Q,pendingError:ne,preventScrollReset:ee,replace:N&&N.replace,enableViewTransition:N&&N.unstable_viewTransition,flushSync:ge})}function Rh(){if(ys(),at({revalidation:"loading"}),m.navigation.state!=="submitting"){if(m.navigation.state==="idle"){or(m.historyAction,m.location,{startUninterruptedRevalidation:!0});return}or(w||m.historyAction,m.navigation.location,{overrideNavigation:m.navigation,enableViewTransition:x===!0})}}async function or(k,N,M){P&&P.abort(),P=null,w=k,At=(M&&M.startUninterruptedRevalidation)===!0,Ri(m.location,m.matches),E=(M&&M.preventScrollReset)===!0,x=(M&&M.enableViewTransition)===!0;let B=l||o,Q=M&&M.overrideNavigation,ne=Mi(B,N,u),se=(M&&M.flushSync)===!0,q=et(ne,B,N.pathname);if(q.active&&q.matches&&(ne=q.matches),!ne){let{error:pe,notFoundMatches:tt,route:Oe}=Si(N.pathname);Hn(N,{matches:tt,loaderData:{},errors:{[Oe.id]:pe}},{flushSync:se});return}if(m.initialized&&!nn&&nC(m.location,N)&&!(M&&M.submission&&Mn(M.submission.formMethod))){Hn(N,{matches:ne},{flushSync:se});return}P=new AbortController;let te=As(t.history,N,P.signal,M&&M.submission),J;if(M&&M.pendingError)J=[Hs(ne).route.id,{type:ke.error,error:M.pendingError}];else if(M&&M.submission&&Mn(M.submission.formMethod)){let pe=await xl(te,N,M.submission,ne,q.active,{replace:M.replace,flushSync:se});if(pe.shortCircuited)return;if(pe.pendingActionResult){let[tt,Oe]=pe.pendingActionResult;if(an(Oe)&&eh(Oe.error)&&Oe.error.status===404){P=null,Hn(N,{matches:pe.matches,loaderData:{},errors:{[tt]:Oe.error}});return}}ne=pe.matches||ne,J=pe.pendingActionResult,Q=ad(N,M.submission),se=!1,q.active=!1,te=As(t.history,te.url,te.signal)}let{shortCircuited:ee,matches:ge,loaderData:we,errors:Pe}=await Oo(te,N,ne,q.active,Q,M&&M.submission,M&&M.fetcherSubmission,M&&M.replace,M&&M.initialHydration===!0,se,J);ee||(P=null,Hn(N,ze({matches:ge||ne},zy(J),{loaderData:we,errors:Pe})))}async function xl(k,N,M,B,Q,ne){ne===void 0&&(ne={}),ys();let se=uC(N,M);if(at({navigation:se},{flushSync:ne.flushSync===!0}),Q){let J=await Ai(B,N.pathname,k.signal);if(J.type==="aborted")return{shortCircuited:!0};if(J.type==="error"){let{boundaryId:ee,error:ge}=gn(N.pathname,J);return{matches:J.partialMatches,pendingActionResult:[ee,{type:ke.error,error:ge}]}}else if(J.matches)B=J.matches;else{let{notFoundMatches:ee,error:ge,route:we}=Si(N.pathname);return{matches:ee,pendingActionResult:[we.id,{type:ke.error,error:ge}]}}}let q,te=da(B,N);if(!te.route.action&&!te.route.lazy)q={type:ke.error,error:zt(405,{method:k.method,pathname:N.pathname,routeId:te.route.id})};else if(q=(await Ye("action",m,k,[te],B,null))[te.route.id],k.signal.aborted)return{shortCircuited:!0};if(ji(q)){let J;return ne&&ne.replace!=null?J=ne.replace:J=Uy(q.response.headers.get("Location"),new URL(k.url),u)===m.location.pathname+m.location.search,await je(k,q,!0,{submission:M,replace:J}),{shortCircuited:!0}}if(Xr(q))throw zt(400,{type:"defer-action"});if(an(q)){let J=Hs(B,te.route.id);return(ne&&ne.replace)!==!0&&(w=rt.Push),{matches:B,pendingActionResult:[J.route.id,q]}}return{matches:B,pendingActionResult:[te.route.id,q]}}async function Oo(k,N,M,B,Q,ne,se,q,te,J,ee){let ge=Q||ad(N,ne),we=ne||se||Wy(ge),Pe=!At&&(!p.v7_partialHydration||!te);if(B){if(Pe){let xe=Lo(ee);at(ze({navigation:ge},xe!==void 0?{actionData:xe}:{}),{flushSync:J})}let ue=await Ai(M,N.pathname,k.signal);if(ue.type==="aborted")return{shortCircuited:!0};if(ue.type==="error"){let{boundaryId:xe,error:kt}=gn(N.pathname,ue);return{matches:ue.partialMatches,loaderData:{},errors:{[xe]:kt}}}else if(ue.matches)M=ue.matches;else{let{error:xe,notFoundMatches:kt,route:Le}=Si(N.pathname);return{matches:kt,loaderData:{},errors:{[Le.id]:xe}}}}let pe=l||o,[tt,Oe]=My(t.history,m,M,we,N,p.v7_partialHydration&&te===!0,p.v7_skipActionErrorRevalidation,nn,Kt,G,ot,Ct,Re,pe,u,ee);if(ws(ue=>!(M&&M.some(xe=>xe.route.id===ue))||tt&&tt.some(xe=>xe.route.id===ue)),Ae=++ae,tt.length===0&&Oe.length===0){let ue=Ml();return Hn(N,ze({matches:M,loaderData:{},errors:ee&&an(ee[1])?{[ee[0]]:ee[1].error}:null},zy(ee),ue?{fetchers:new Map(m.fetchers)}:{}),{flushSync:J}),{shortCircuited:!0}}if(Pe){let ue={};if(!B){ue.navigation=ge;let xe=Lo(ee);xe!==void 0&&(ue.actionData=xe)}Oe.length>0&&(ue.fetchers=Ah(Oe)),at(ue,{flushSync:J})}Oe.forEach(ue=>{X.has(ue.key)&&mn(ue.key),ue.controller&&X.set(ue.key,ue.controller)});let xr=()=>Oe.forEach(ue=>mn(ue.key));P&&P.signal.addEventListener("abort",xr);let{loaderResults:rn,fetcherResults:yn}=await Ti(m,M,tt,Oe,k);if(k.signal.aborted)return{shortCircuited:!0};P&&P.signal.removeEventListener("abort",xr),Oe.forEach(ue=>X.delete(ue.key));let Pt=fu(rn);if(Pt)return await je(k,Pt.result,!0,{replace:q}),{shortCircuited:!0};if(Pt=fu(yn),Pt)return Re.add(Pt.key),await je(k,Pt.result,!0,{replace:q}),{shortCircuited:!0};let{loaderData:Dr,errors:Nn}=jy(m,M,tt,rn,ee,Oe,yn,yt);yt.forEach((ue,xe)=>{ue.subscribe(kt=>{(kt||ue.done)&&yt.delete(xe)})}),p.v7_partialHydration&&te&&m.errors&&Object.entries(m.errors).filter(ue=>{let[xe]=ue;return!tt.some(kt=>kt.route.id===xe)}).forEach(ue=>{let[xe,kt]=ue;Nn=Object.assign(Nn||{},{[xe]:kt})});let Pi=Ml(),ki=vs(Ae),Ni=Pi||ki||Oe.length>0;return ze({matches:M,loaderData:Dr,errors:Nn},Ni?{fetchers:new Map(m.fetchers)}:{})}function Lo(k){if(k&&!an(k[1]))return{[k[0]]:k[1].data};if(m.actionData)return Object.keys(m.actionData).length===0?null:m.actionData}function Ah(k){return k.forEach(N=>{let M=m.fetchers.get(N.key),B=ia(void 0,M?M.data:void 0);m.fetchers.set(N.key,B)}),new Map(m.fetchers)}function Mo(k,N,M,B){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");X.has(k)&&mn(k);let Q=(B&&B.unstable_flushSync)===!0,ne=l||o,se=Ef(m.location,m.matches,u,p.v7_prependBasename,M,p.v7_relativeSplatPath,N,B==null?void 0:B.relative),q=Mi(ne,se,u),te=et(q,ne,se);if(te.active&&te.matches&&(q=te.matches),!q){kn(k,N,zt(404,{pathname:se}),{flushSync:Q});return}let{path:J,submission:ee,error:ge}=Ly(p.v7_normalizeFormMethod,!0,se,B);if(ge){kn(k,N,ge,{flushSync:Q});return}let we=da(q,J);if(E=(B&&B.preventScrollReset)===!0,ee&&Mn(ee.formMethod)){Vo(k,N,J,we,q,te.active,Q,ee);return}Ct.set(k,{routeId:N,path:J}),Dl(k,N,J,we,q,te.active,Q,ee)}async function Vo(k,N,M,B,Q,ne,se,q){ys(),Ct.delete(k);function te(Le){if(!Le.route.action&&!Le.route.lazy){let bn=zt(405,{method:q.formMethod,pathname:M,routeId:N});return kn(k,N,bn,{flushSync:se}),!0}return!1}if(!ne&&te(B))return;let J=m.fetchers.get(k);Pn(k,cC(q,J),{flushSync:se});let ee=new AbortController,ge=As(t.history,M,ee.signal,q);if(ne){let Le=await Ai(Q,M,ge.signal);if(Le.type==="aborted")return;if(Le.type==="error"){let{error:bn}=gn(M,Le);kn(k,N,bn,{flushSync:se});return}else if(Le.matches){if(Q=Le.matches,B=da(Q,M),te(B))return}else{kn(k,N,zt(404,{pathname:M}),{flushSync:se});return}}X.set(k,ee);let we=ae,pe=(await Ye("action",m,ge,[B],Q,k))[B.route.id];if(ge.signal.aborted){X.get(k)===ee&&X.delete(k);return}if(p.v7_fetcherPersist&&ot.has(k)){if(ji(pe)||an(pe)){Pn(k,Ur(void 0));return}}else{if(ji(pe))if(X.delete(k),Ae>we){Pn(k,Ur(void 0));return}else return Re.add(k),Pn(k,ia(q)),je(ge,pe,!1,{fetcherSubmission:q});if(an(pe)){kn(k,N,pe.error);return}}if(Xr(pe))throw zt(400,{type:"defer-action"});let tt=m.navigation.location||m.location,Oe=As(t.history,tt,ee.signal),xr=l||o,rn=m.navigation.state!=="idle"?Mi(xr,m.navigation.location,u):m.matches;de(rn,"Didn't find any matches after fetcher action");let yn=++ae;ve.set(k,yn);let Pt=ia(q,pe.data);m.fetchers.set(k,Pt);let[Dr,Nn]=My(t.history,m,rn,q,tt,!1,p.v7_skipActionErrorRevalidation,nn,Kt,G,ot,Ct,Re,xr,u,[B.route.id,pe]);Nn.filter(Le=>Le.key!==k).forEach(Le=>{let bn=Le.key,Ul=m.fetchers.get(bn),Fl=ia(void 0,Ul?Ul.data:void 0);m.fetchers.set(bn,Fl),X.has(bn)&&mn(bn),Le.controller&&X.set(bn,Le.controller)}),at({fetchers:new Map(m.fetchers)});let Pi=()=>Nn.forEach(Le=>mn(Le.key));ee.signal.addEventListener("abort",Pi);let{loaderResults:ki,fetcherResults:Ni}=await Ti(m,rn,Dr,Nn,Oe);if(ee.signal.aborted)return;ee.signal.removeEventListener("abort",Pi),ve.delete(k),X.delete(k),Nn.forEach(Le=>X.delete(Le.key));let ue=fu(ki);if(ue)return je(Oe,ue.result,!1);if(ue=fu(Ni),ue)return Re.add(ue.key),je(Oe,ue.result,!1);let{loaderData:xe,errors:kt}=jy(m,rn,Dr,ki,void 0,Nn,Ni,yt);if(m.fetchers.has(k)){let Le=Ur(pe.data);m.fetchers.set(k,Le)}vs(yn),m.navigation.state==="loading"&&yn>Ae?(de(w,"Expected pending action"),P&&P.abort(),Hn(m.navigation.location,{matches:rn,loaderData:xe,errors:kt,fetchers:new Map(m.fetchers)})):(at({errors:kt,loaderData:By(m.loaderData,xe,rn,kt),fetchers:new Map(m.fetchers)}),nn=!1)}async function Dl(k,N,M,B,Q,ne,se,q){let te=m.fetchers.get(k);Pn(k,ia(q,te?te.data:void 0),{flushSync:se});let J=new AbortController,ee=As(t.history,M,J.signal);if(ne){let pe=await Ai(Q,M,ee.signal);if(pe.type==="aborted")return;if(pe.type==="error"){let{error:tt}=gn(M,pe);kn(k,N,tt,{flushSync:se});return}else if(pe.matches)Q=pe.matches,B=da(Q,M);else{kn(k,N,zt(404,{pathname:M}),{flushSync:se});return}}X.set(k,J);let ge=ae,Pe=(await Ye("loader",m,ee,[B],Q,k))[B.route.id];if(Xr(Pe)&&(Pe=await qp(Pe,ee.signal,!0)||Pe),X.get(k)===J&&X.delete(k),!ee.signal.aborted){if(ot.has(k)){Pn(k,Ur(void 0));return}if(ji(Pe))if(Ae>ge){Pn(k,Ur(void 0));return}else{Re.add(k),await je(ee,Pe,!1);return}if(an(Pe)){kn(k,N,Pe.error);return}de(!Xr(Pe),"Unhandled fetcher deferred data"),Pn(k,Ur(Pe.data))}}async function je(k,N,M,B){let{submission:Q,fetcherSubmission:ne,replace:se}=B===void 0?{}:B;N.response.headers.has("X-Remix-Revalidate")&&(nn=!0);let q=N.response.headers.get("Location");de(q,"Expected a Location header on the redirect Response"),q=Uy(q,new URL(k.url),u);let te=Ya(m.location,q,{_isRedirect:!0});if(n){let pe=!1;if(N.response.headers.has("X-Remix-Reload-Document"))pe=!0;else if(Wp.test(q)){const tt=t.history.createURL(q);pe=tt.origin!==e.location.origin||Io(tt.pathname,u)==null}if(pe){se?e.location.replace(q):e.location.assign(q);return}}P=null;let J=se===!0||N.response.headers.has("X-Remix-Replace")?rt.Replace:rt.Push,{formMethod:ee,formAction:ge,formEncType:we}=m.navigation;!Q&&!ne&&ee&&ge&&we&&(Q=Wy(m.navigation));let Pe=Q||ne;if(BA.has(N.response.status)&&Pe&&Mn(Pe.formMethod))await or(J,te,{submission:ze({},Pe,{formAction:q}),preventScrollReset:E,enableViewTransition:M?x:void 0});else{let pe=ad(te,Q);await or(J,te,{overrideNavigation:pe,fetcherSubmission:ne,preventScrollReset:E,enableViewTransition:M?x:void 0})}}async function Ye(k,N,M,B,Q,ne){let se,q={};try{se=await YA(c,k,N,M,B,Q,ne,s,i)}catch(te){return B.forEach(J=>{q[J.route.id]={type:ke.error,error:te}}),q}for(let[te,J]of Object.entries(se))if(iC(J)){let ee=J.result;q[te]={type:ke.redirect,response:eC(ee,M,te,Q,u,p.v7_relativeSplatPath)}}else q[te]=await ZA(J);return q}async function Ti(k,N,M,B,Q){let ne=k.matches,se=Ye("loader",k,Q,M,N,null),q=Promise.all(B.map(async ee=>{if(ee.matches&&ee.match&&ee.controller){let we=(await Ye("loader",k,As(t.history,ee.path,ee.controller.signal),[ee.match],ee.matches,ee.key))[ee.match.route.id];return{[ee.key]:we}}else return Promise.resolve({[ee.key]:{type:ke.error,error:zt(404,{pathname:ee.path})}})})),te=await se,J=(await q).reduce((ee,ge)=>Object.assign(ee,ge),{});return await Promise.all([aC(N,te,Q.signal,ne,k.loaderData),lC(N,J,B)]),{loaderResults:te,fetcherResults:J}}function ys(){nn=!0,Kt.push(...ws()),Ct.forEach((k,N)=>{X.has(N)&&(G.add(N),mn(N))})}function Pn(k,N,M){M===void 0&&(M={}),m.fetchers.set(k,N),at({fetchers:new Map(m.fetchers)},{flushSync:(M&&M.flushSync)===!0})}function kn(k,N,M,B){B===void 0&&(B={});let Q=Hs(m.matches,N);Ii(k),at({errors:{[Q.route.id]:M},fetchers:new Map(m.fetchers)},{flushSync:(B&&B.flushSync)===!0})}function Nr(k){return p.v7_fetcherPersist&&(jt.set(k,(jt.get(k)||0)+1),ot.has(k)&&ot.delete(k)),m.fetchers.get(k)||zA}function Ii(k){let N=m.fetchers.get(k);X.has(k)&&!(N&&N.state==="loading"&&ve.has(k))&&mn(k),Ct.delete(k),ve.delete(k),Re.delete(k),ot.delete(k),G.delete(k),m.fetchers.delete(k)}function Ol(k){if(p.v7_fetcherPersist){let N=(jt.get(k)||0)-1;N<=0?(jt.delete(k),ot.add(k)):jt.set(k,N)}else Ii(k);at({fetchers:new Map(m.fetchers)})}function mn(k){let N=X.get(k);de(N,"Expected fetch controller: "+k),N.abort(),X.delete(k)}function Ll(k){for(let N of k){let M=Nr(N),B=Ur(M.data);m.fetchers.set(N,B)}}function Ml(){let k=[],N=!1;for(let M of Re){let B=m.fetchers.get(M);de(B,"Expected fetcher: "+M),B.state==="loading"&&(Re.delete(M),k.push(M),N=!0)}return Ll(k),N}function vs(k){let N=[];for(let[M,B]of ve)if(B<k){let Q=m.fetchers.get(M);de(Q,"Expected fetcher: "+M),Q.state==="loading"&&(mn(M),ve.delete(M),N.push(M))}return Ll(N),N.length>0}function Vl(k,N){let M=m.blockers.get(k)||ra;return ir.get(k)!==N&&ir.set(k,N),M}function Uo(k){m.blockers.delete(k),ir.delete(k)}function Wn(k,N){let M=m.blockers.get(k)||ra;de(M.state==="unblocked"&&N.state==="blocked"||M.state==="blocked"&&N.state==="blocked"||M.state==="blocked"&&N.state==="proceeding"||M.state==="blocked"&&N.state==="unblocked"||M.state==="proceeding"&&N.state==="unblocked","Invalid blocker state transition: "+M.state+" -> "+N.state);let B=new Map(m.blockers);B.set(k,N),at({blockers:B})}function _s(k){let{currentLocation:N,nextLocation:M,historyAction:B}=k;if(ir.size===0)return;ir.size>1&&co(!1,"A router only supports one blocker at a time");let Q=Array.from(ir.entries()),[ne,se]=Q[Q.length-1],q=m.blockers.get(ne);if(!(q&&q.state==="proceeding")&&se({currentLocation:N,nextLocation:M,historyAction:B}))return ne}function Si(k){let N=zt(404,{pathname:k}),M=l||o,{matches:B,route:Q}=$y(M);return ws(),{notFoundMatches:B,route:Q,error:N}}function gn(k,N){return{boundaryId:Hs(N.partialMatches).route.id,error:zt(400,{type:"route-discovery",pathname:k,message:N.error!=null&&"message"in N.error?N.error:String(N.error)})}}function ws(k){let N=[];return yt.forEach((M,B)=>{(!k||k(B))&&(M.cancel(),N.push(B),yt.delete(B))}),N}function Es(k,N,M){if(D=k,_=N,T=M||null,!S&&m.navigation===od){S=!0;let B=jo(m.location,m.matches);B!=null&&at({restoreScrollPosition:B})}return()=>{D=null,_=null,T=null}}function Fo(k,N){return T&&T(k,N.map(B=>_A(B,m.loaderData)))||k.key}function Ri(k,N){if(D&&_){let M=Fo(k,N);D[M]=_()}}function jo(k,N){if(D){let M=Fo(k,N),B=D[M];if(typeof B=="number")return B}return null}function et(k,N,M){if(d){if(C.has(M))return{active:!1,matches:k};if(k){if(Object.keys(k[0].params).length>0)return{active:!0,matches:Ou(N,M,u,!0)}}else return{active:!0,matches:Ou(N,M,u,!0)||[]}}return{active:!1,matches:null}}async function Ai(k,N,M){let B=k;for(;;){let Q=l==null,ne=l||o;try{await GA(d,N,B,ne,s,i,Sh,M)}catch(te){return{type:"error",error:te,partialMatches:B}}finally{Q&&(o=[...o])}if(M.aborted)return{type:"aborted"};let se=Mi(ne,N,u);if(se)return br(N,C),{type:"success",matches:se};let q=Ou(ne,N,u,!0);if(!q||B.length===q.length&&B.every((te,J)=>te.route.id===q[J].route.id))return br(N,C),{type:"success",matches:null};B=q}}function br(k,N){if(N.size>=A){let M=N.values().next().value;N.delete(M)}N.add(k)}function Ci(k){s={},l=Ja(k,i,void 0,s)}function Ch(k,N){let M=l==null;Jw(k,N,l||o,s,i),M&&(o=[...o],at({}))}return I={get basename(){return u},get future(){return p},get state(){return m},get routes(){return o},get window(){return e},initialize:gs,subscribe:xo,enableScrollRestoration:Es,navigate:Do,fetch:Mo,revalidate:Rh,createHref:k=>t.history.createHref(k),encodeLocation:k=>t.history.encodeLocation(k),getFetcher:Nr,deleteFetcher:Ol,dispose:bo,getBlocker:Vl,deleteBlocker:Uo,patchRoutes:Ch,_internalFetchControllers:X,_internalActiveDeferreds:yt,_internalSetRoutes:Ci},I}function WA(t){return t!=null&&("formData"in t&&t.formData!=null||"body"in t&&t.body!==void 0)}function Ef(t,e,n,r,i,s,o,l){let u,c;if(o){u=[];for(let p of e)if(u.push(p),p.route.id===o){c=p;break}}else u=e,c=e[e.length-1];let d=Hp(i||".",$p(u,s),Io(t.pathname,n)||t.pathname,l==="path");return i==null&&(d.search=t.search,d.hash=t.hash),(i==null||i===""||i===".")&&c&&c.route.index&&!Kp(d.search)&&(d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(d.pathname=d.pathname==="/"?n:vr([n,d.pathname])),Ji(d)}function Ly(t,e,n,r){if(!r||!WA(r))return{path:n};if(r.formMethod&&!oC(r.formMethod))return{path:n,error:zt(405,{method:r.formMethod})};let i=()=>({path:n,error:zt(400,{type:"invalid-body"})}),s=r.formMethod||"get",o=t?s.toUpperCase():s.toLowerCase(),l=Zw(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!Mn(o))return i();let g=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((v,A)=>{let[C,D]=A;return""+v+C+"="+D+`
`},""):String(r.body);return{path:n,submission:{formMethod:o,formAction:l,formEncType:r.formEncType,formData:void 0,json:void 0,text:g}}}else if(r.formEncType==="application/json"){if(!Mn(o))return i();try{let g=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:o,formAction:l,formEncType:r.formEncType,formData:void 0,json:g,text:void 0}}}catch{return i()}}}de(typeof FormData=="function","FormData is not available in this environment");let u,c;if(r.formData)u=Tf(r.formData),c=r.formData;else if(r.body instanceof FormData)u=Tf(r.body),c=r.body;else if(r.body instanceof URLSearchParams)u=r.body,c=Fy(u);else if(r.body==null)u=new URLSearchParams,c=new FormData;else try{u=new URLSearchParams(r.body),c=Fy(u)}catch{return i()}let d={formMethod:o,formAction:l,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:c,json:void 0,text:void 0};if(Mn(d.formMethod))return{path:n,submission:d};let p=vi(n);return e&&p.search&&Kp(p.search)&&u.append("index",""),p.search="?"+u,{path:Ji(p),submission:d}}function qA(t,e){let n=t;if(e){let r=t.findIndex(i=>i.route.id===e);r>=0&&(n=t.slice(0,r))}return n}function My(t,e,n,r,i,s,o,l,u,c,d,p,g,v,A,C){let D=C?an(C[1])?C[1].error:C[1].data:void 0,T=t.createURL(e.location),_=t.createURL(i),S=C&&an(C[1])?C[0]:void 0,O=S?qA(n,S):n,z=C?C[1].statusCode:void 0,F=o&&z&&z>=400,I=O.filter((w,E)=>{let{route:P}=w;if(P.lazy)return!0;if(P.loader==null)return!1;if(s)return typeof P.loader!="function"||P.loader.hydrate?!0:e.loaderData[P.id]===void 0&&(!e.errors||e.errors[P.id]===void 0);if(KA(e.loaderData,e.matches[E],w)||u.some(Te=>Te===w.route.id))return!0;let x=e.matches[E],R=w;return Vy(w,ze({currentUrl:T,currentParams:x.params,nextUrl:_,nextParams:R.params},r,{actionResult:D,actionStatus:z,defaultShouldRevalidate:F?!1:l||T.pathname+T.search===_.pathname+_.search||T.search!==_.search||Yw(x,R)}))}),m=[];return p.forEach((w,E)=>{if(s||!n.some(At=>At.route.id===w.routeId)||d.has(E))return;let P=Mi(v,w.path,A);if(!P){m.push({key:E,routeId:w.routeId,path:w.path,matches:null,match:null,controller:null});return}let x=e.fetchers.get(E),R=da(P,w.path),Te=!1;g.has(E)?Te=!1:c.has(E)?(c.delete(E),Te=!0):x&&x.state!=="idle"&&x.data===void 0?Te=l:Te=Vy(R,ze({currentUrl:T,currentParams:e.matches[e.matches.length-1].params,nextUrl:_,nextParams:n[n.length-1].params},r,{actionResult:D,actionStatus:z,defaultShouldRevalidate:F?!1:l})),Te&&m.push({key:E,routeId:w.routeId,path:w.path,matches:P,match:R,controller:new AbortController})}),[I,m]}function KA(t,e,n){let r=!e||n.route.id!==e.route.id,i=t[n.route.id]===void 0;return r||i}function Yw(t,e){let n=t.route.path;return t.pathname!==e.pathname||n!=null&&n.endsWith("*")&&t.params["*"]!==e.params["*"]}function Vy(t,e){if(t.route.shouldRevalidate){let n=t.route.shouldRevalidate(e);if(typeof n=="boolean")return n}return e.defaultShouldRevalidate}async function GA(t,e,n,r,i,s,o,l){let u=[e,...n.map(c=>c.route.id)].join("-");try{let c=o.get(u);c||(c=t({path:e,matches:n,patch:(d,p)=>{l.aborted||Jw(d,p,r,i,s)}}),o.set(u,c)),c&&rC(c)&&await c}finally{o.delete(u)}}function Jw(t,e,n,r,i){if(t){var s;let o=r[t];de(o,"No route found to patch children into: routeId = "+t);let l=Ja(e,i,[t,"patch",String(((s=o.children)==null?void 0:s.length)||"0")],r);o.children?o.children.push(...l):o.children=l}else{let o=Ja(e,i,["patch",String(n.length||"0")],r);n.push(...o)}}async function QA(t,e,n){if(!t.lazy)return;let r=await t.lazy();if(!t.lazy)return;let i=n[t.id];de(i,"No route found in manifest");let s={};for(let o in r){let u=i[o]!==void 0&&o!=="hasErrorBoundary";co(!u,'Route "'+i.id+'" has a static property "'+o+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+o+'" will be ignored.')),!u&&!yA.has(o)&&(s[o]=r[o])}Object.assign(i,s),Object.assign(i,ze({},e(i),{lazy:void 0}))}async function XA(t){let{matches:e}=t,n=e.filter(i=>i.shouldLoad);return(await Promise.all(n.map(i=>i.resolve()))).reduce((i,s,o)=>Object.assign(i,{[n[o].route.id]:s}),{})}async function YA(t,e,n,r,i,s,o,l,u,c){let d=s.map(v=>v.route.lazy?QA(v.route,u,l):void 0),p=s.map((v,A)=>{let C=d[A],D=i.some(_=>_.route.id===v.route.id);return ze({},v,{shouldLoad:D,resolve:async _=>(_&&r.method==="GET"&&(v.route.lazy||v.route.loader)&&(D=!0),D?JA(e,r,v,C,_,c):Promise.resolve({type:ke.data,result:void 0}))})}),g=await t({matches:p,request:r,params:s[0].params,fetcherKey:o,context:c});try{await Promise.all(d)}catch{}return g}async function JA(t,e,n,r,i,s){let o,l,u=c=>{let d,p=new Promise((A,C)=>d=C);l=()=>d(),e.signal.addEventListener("abort",l);let g=A=>typeof c!="function"?Promise.reject(new Error("You cannot call the handler for a route which defines a boolean "+('"'+t+'" [routeId: '+n.route.id+"]"))):c({request:e,params:n.params,context:s},...A!==void 0?[A]:[]),v=(async()=>{try{return{type:"data",result:await(i?i(C=>g(C)):g())}}catch(A){return{type:"error",result:A}}})();return Promise.race([v,p])};try{let c=n.route[t];if(r)if(c){let d,[p]=await Promise.all([u(c).catch(g=>{d=g}),r]);if(d!==void 0)throw d;o=p}else if(await r,c=n.route[t],c)o=await u(c);else if(t==="action"){let d=new URL(e.url),p=d.pathname+d.search;throw zt(405,{method:e.method,pathname:p,routeId:n.route.id})}else return{type:ke.data,result:void 0};else if(c)o=await u(c);else{let d=new URL(e.url),p=d.pathname+d.search;throw zt(404,{pathname:p})}de(o.result!==void 0,"You defined "+(t==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+t+"` ")+"function. Please return a value or `null`.")}catch(c){return{type:ke.error,result:c}}finally{l&&e.signal.removeEventListener("abort",l)}return o}async function ZA(t){let{result:e,type:n}=t;if(eE(e)){let c;try{let d=e.headers.get("Content-Type");d&&/\bapplication\/json\b/.test(d)?e.body==null?c=null:c=await e.json():c=await e.text()}catch(d){return{type:ke.error,error:d}}return n===ke.error?{type:ke.error,error:new fc(e.status,e.statusText,c),statusCode:e.status,headers:e.headers}:{type:ke.data,data:c,statusCode:e.status,headers:e.headers}}if(n===ke.error){if(Hy(e)){var r;if(e.data instanceof Error){var i;return{type:ke.error,error:e.data,statusCode:(i=e.init)==null?void 0:i.status}}e=new fc(((r=e.init)==null?void 0:r.status)||500,void 0,e.data)}return{type:ke.error,error:e,statusCode:eh(e)?e.status:void 0}}if(sC(e)){var s,o;return{type:ke.deferred,deferredData:e,statusCode:(s=e.init)==null?void 0:s.status,headers:((o=e.init)==null?void 0:o.headers)&&new Headers(e.init.headers)}}if(Hy(e)){var l,u;return{type:ke.data,data:e.data,statusCode:(l=e.init)==null?void 0:l.status,headers:(u=e.init)!=null&&u.headers?new Headers(e.init.headers):void 0}}return{type:ke.data,data:e}}function eC(t,e,n,r,i,s){let o=t.headers.get("Location");if(de(o,"Redirects returned/thrown from loaders/actions must have a Location header"),!Wp.test(o)){let l=r.slice(0,r.findIndex(u=>u.route.id===n)+1);o=Ef(new URL(e.url),l,i,!0,o,s),t.headers.set("Location",o)}return t}function Uy(t,e,n){if(Wp.test(t)){let r=t,i=r.startsWith("//")?new URL(e.protocol+r):new URL(r),s=Io(i.pathname,n)!=null;if(i.origin===e.origin&&s)return i.pathname+i.search+i.hash}return t}function As(t,e,n,r){let i=t.createURL(Zw(e)).toString(),s={signal:n};if(r&&Mn(r.formMethod)){let{formMethod:o,formEncType:l}=r;s.method=o.toUpperCase(),l==="application/json"?(s.headers=new Headers({"Content-Type":l}),s.body=JSON.stringify(r.json)):l==="text/plain"?s.body=r.text:l==="application/x-www-form-urlencoded"&&r.formData?s.body=Tf(r.formData):s.body=r.formData}return new Request(i,s)}function Tf(t){let e=new URLSearchParams;for(let[n,r]of t.entries())e.append(n,typeof r=="string"?r:r.name);return e}function Fy(t){let e=new FormData;for(let[n,r]of t.entries())e.append(n,r);return e}function tC(t,e,n,r,i){let s={},o=null,l,u=!1,c={},d=n&&an(n[1])?n[1].error:void 0;return t.forEach(p=>{if(!(p.route.id in e))return;let g=p.route.id,v=e[g];if(de(!ji(v),"Cannot handle redirect results in processLoaderData"),an(v)){let A=v.error;d!==void 0&&(A=d,d=void 0),o=o||{};{let C=Hs(t,g);o[C.route.id]==null&&(o[C.route.id]=A)}s[g]=void 0,u||(u=!0,l=eh(v.error)?v.error.status:500),v.headers&&(c[g]=v.headers)}else Xr(v)?(r.set(g,v.deferredData),s[g]=v.deferredData.data,v.statusCode!=null&&v.statusCode!==200&&!u&&(l=v.statusCode),v.headers&&(c[g]=v.headers)):(s[g]=v.data,v.statusCode&&v.statusCode!==200&&!u&&(l=v.statusCode),v.headers&&(c[g]=v.headers))}),d!==void 0&&n&&(o={[n[0]]:d},s[n[0]]=void 0),{loaderData:s,errors:o,statusCode:l||200,loaderHeaders:c}}function jy(t,e,n,r,i,s,o,l){let{loaderData:u,errors:c}=tC(e,r,i,l);return s.forEach(d=>{let{key:p,match:g,controller:v}=d,A=o[p];if(de(A,"Did not find corresponding fetcher result"),!(v&&v.signal.aborted))if(an(A)){let C=Hs(t.matches,g==null?void 0:g.route.id);c&&c[C.route.id]||(c=ze({},c,{[C.route.id]:A.error})),t.fetchers.delete(p)}else if(ji(A))de(!1,"Unhandled fetcher revalidation redirect");else if(Xr(A))de(!1,"Unhandled fetcher deferred data");else{let C=Ur(A.data);t.fetchers.set(p,C)}}),{loaderData:u,errors:c}}function By(t,e,n,r){let i=ze({},e);for(let s of n){let o=s.route.id;if(e.hasOwnProperty(o)?e[o]!==void 0&&(i[o]=e[o]):t[o]!==void 0&&s.route.loader&&(i[o]=t[o]),r&&r.hasOwnProperty(o))break}return i}function zy(t){return t?an(t[1])?{actionData:{}}:{actionData:{[t[0]]:t[1].data}}:{}}function Hs(t,e){return(e?t.slice(0,t.findIndex(r=>r.route.id===e)+1):[...t]).reverse().find(r=>r.route.hasErrorBoundary===!0)||t[0]}function $y(t){let e=t.length===1?t[0]:t.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function zt(t,e){let{pathname:n,routeId:r,method:i,type:s,message:o}=e===void 0?{}:e,l="Unknown Server Error",u="Unknown @remix-run/router error";return t===400?(l="Bad Request",s==="route-discovery"?u='Unable to match URL "'+n+'" - the `unstable_patchRoutesOnNavigation()` '+(`function threw the following error:
`+o):i&&n&&r?u="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":s==="defer-action"?u="defer() is not supported in actions":s==="invalid-body"&&(u="Unable to encode submission body")):t===403?(l="Forbidden",u='Route "'+r+'" does not match URL "'+n+'"'):t===404?(l="Not Found",u='No route matches URL "'+n+'"'):t===405&&(l="Method Not Allowed",i&&n&&r?u="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(u='Invalid request method "'+i.toUpperCase()+'"')),new fc(t||500,l,new Error(u),!0)}function fu(t){let e=Object.entries(t);for(let n=e.length-1;n>=0;n--){let[r,i]=e[n];if(ji(i))return{key:r,result:i}}}function Zw(t){let e=typeof t=="string"?vi(t):t;return Ji(ze({},e,{hash:""}))}function nC(t,e){return t.pathname!==e.pathname||t.search!==e.search?!1:t.hash===""?e.hash!=="":t.hash===e.hash?!0:e.hash!==""}function rC(t){return typeof t=="object"&&t!=null&&"then"in t}function iC(t){return eE(t.result)&&jA.has(t.result.status)}function Xr(t){return t.type===ke.deferred}function an(t){return t.type===ke.error}function ji(t){return(t&&t.type)===ke.redirect}function Hy(t){return typeof t=="object"&&t!=null&&"type"in t&&"data"in t&&"init"in t&&t.type==="DataWithResponseInit"}function sC(t){let e=t;return e&&typeof e=="object"&&typeof e.data=="object"&&typeof e.subscribe=="function"&&typeof e.cancel=="function"&&typeof e.resolveData=="function"}function eE(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function oC(t){return FA.has(t.toLowerCase())}function Mn(t){return VA.has(t.toLowerCase())}async function aC(t,e,n,r,i){let s=Object.entries(e);for(let o=0;o<s.length;o++){let[l,u]=s[o],c=t.find(g=>(g==null?void 0:g.route.id)===l);if(!c)continue;let d=r.find(g=>g.route.id===c.route.id),p=d!=null&&!Yw(d,c)&&(i&&i[c.route.id])!==void 0;Xr(u)&&p&&await qp(u,n,!1).then(g=>{g&&(e[l]=g)})}}async function lC(t,e,n){for(let r=0;r<n.length;r++){let{key:i,routeId:s,controller:o}=n[r],l=e[i];t.find(c=>(c==null?void 0:c.route.id)===s)&&Xr(l)&&(de(o,"Expected an AbortController for revalidating fetcher deferred result"),await qp(l,o.signal,!0).then(c=>{c&&(e[i]=c)}))}}async function qp(t,e,n){if(n===void 0&&(n=!1),!await t.deferredData.resolveData(e)){if(n)try{return{type:ke.data,data:t.deferredData.unwrappedData}}catch(i){return{type:ke.error,error:i}}return{type:ke.data,data:t.deferredData.data}}}function Kp(t){return new URLSearchParams(t).getAll("index").some(e=>e==="")}function da(t,e){let n=typeof e=="string"?vi(e).search:e.search;if(t[t.length-1].route.index&&Kp(n||""))return t[t.length-1];let r=Gw(t);return r[r.length-1]}function Wy(t){let{formMethod:e,formAction:n,formEncType:r,text:i,formData:s,json:o}=t;if(!(!e||!n||!r)){if(i!=null)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:void 0,text:i};if(s!=null)return{formMethod:e,formAction:n,formEncType:r,formData:s,json:void 0,text:void 0};if(o!==void 0)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:o,text:void 0}}}function ad(t,e){return e?{state:"loading",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}:{state:"loading",location:t,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function uC(t,e){return{state:"submitting",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}}function ia(t,e){return t?{state:"loading",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function cC(t,e){return{state:"submitting",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e?e.data:void 0}}function Ur(t){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function hC(t,e){try{let n=t.sessionStorage.getItem(Xw);if(n){let r=JSON.parse(n);for(let[i,s]of Object.entries(r||{}))s&&Array.isArray(s)&&e.set(i,new Set(s||[]))}}catch{}}function dC(t,e){if(e.size>0){let n={};for(let[r,i]of e)n[r]=[...i];try{t.sessionStorage.setItem(Xw,JSON.stringify(n))}catch(r){co(!1,"Failed to save applied view transitions in sessionStorage ("+r+").")}}}/**
 * React Router v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function pc(){return pc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},pc.apply(this,arguments)}const th=U.createContext(null),tE=U.createContext(null),us=U.createContext(null),Gp=U.createContext(null),_i=U.createContext({outlet:null,matches:[],isDataRoute:!1}),nE=U.createContext(null);function fC(t,e){let{relative:n}=e===void 0?{}:e;yl()||de(!1);let{basename:r,navigator:i}=U.useContext(us),{hash:s,pathname:o,search:l}=sE(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:vr([r,o])),i.createHref({pathname:u,search:l,hash:s})}function yl(){return U.useContext(Gp)!=null}function cs(){return yl()||de(!1),U.useContext(Gp).location}function rE(t){U.useContext(us).static||U.useLayoutEffect(t)}function Qp(){let{isDataRoute:t}=U.useContext(_i);return t?AC():pC()}function pC(){yl()||de(!1);let t=U.useContext(th),{basename:e,future:n,navigator:r}=U.useContext(us),{matches:i}=U.useContext(_i),{pathname:s}=cs(),o=JSON.stringify($p(i,n.v7_relativeSplatPath)),l=U.useRef(!1);return rE(()=>{l.current=!0}),U.useCallback(function(c,d){if(d===void 0&&(d={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let p=Hp(c,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:vr([e,p.pathname])),(d.replace?r.replace:r.push)(p,d.state,d)},[e,r,o,s,t])}const iE=U.createContext(null);function vl(){return U.useContext(iE)}function mC(t){let e=U.useContext(_i).outlet;return e&&U.createElement(iE.Provider,{value:t},e)}function sE(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=U.useContext(us),{matches:i}=U.useContext(_i),{pathname:s}=cs(),o=JSON.stringify($p(i,r.v7_relativeSplatPath));return U.useMemo(()=>Hp(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function gC(t,e,n,r){yl()||de(!1);let{navigator:i}=U.useContext(us),{matches:s}=U.useContext(_i),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=cs(),d;d=c;let p=d.pathname||"/",g=p;if(u!=="/"){let C=u.replace(/^\//,"").split("/");g="/"+p.replace(/^\//,"").split("/").slice(C.length).join("/")}let v=Mi(t,{pathname:g});return EC(v&&v.map(C=>Object.assign({},C,{params:Object.assign({},l,C.params),pathname:vr([u,i.encodeLocation?i.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?u:vr([u,i.encodeLocation?i.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),s,n,r)}function yC(){let t=RC(),e=eh(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return U.createElement(U.Fragment,null,U.createElement("h2",null,"Unexpected Application Error!"),U.createElement("h3",{style:{fontStyle:"italic"}},e),n?U.createElement("pre",{style:i},n):null,null)}const vC=U.createElement(yC,null);class _C extends U.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?U.createElement(_i.Provider,{value:this.props.routeContext},U.createElement(nE.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function wC(t){let{routeContext:e,match:n,children:r}=t,i=U.useContext(th);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),U.createElement(_i.Provider,{value:e},r)}function EC(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let d=o.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);d>=0||de(!1),o=o.slice(0,Math.min(o.length,d+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let p=o[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(c=d),p.route.id){let{loaderData:g,errors:v}=n,A=p.route.loader&&g[p.route.id]===void 0&&(!v||v[p.route.id]===void 0);if(p.route.lazy||A){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,p,g)=>{let v,A=!1,C=null,D=null;n&&(v=l&&p.route.id?l[p.route.id]:void 0,C=p.route.errorElement||vC,u&&(c<0&&g===0?(CC("route-fallback"),A=!0,D=null):c===g&&(A=!0,D=p.route.hydrateFallbackElement||null)));let T=e.concat(o.slice(0,g+1)),_=()=>{let S;return v?S=C:A?S=D:p.route.Component?S=U.createElement(p.route.Component,null):p.route.element?S=p.route.element:S=d,U.createElement(wC,{match:p,routeContext:{outlet:d,matches:T,isDataRoute:n!=null},children:S})};return n&&(p.route.ErrorBoundary||p.route.errorElement||g===0)?U.createElement(_C,{location:n.location,revalidation:n.revalidation,component:C,error:v,children:_(),routeContext:{outlet:null,matches:T,isDataRoute:!0}}):_()},null)}var oE=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(oE||{}),mc=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(mc||{});function TC(t){let e=U.useContext(th);return e||de(!1),e}function IC(t){let e=U.useContext(tE);return e||de(!1),e}function SC(t){let e=U.useContext(_i);return e||de(!1),e}function aE(t){let e=SC(),n=e.matches[e.matches.length-1];return n.route.id||de(!1),n.route.id}function RC(){var t;let e=U.useContext(nE),n=IC(mc.UseRouteError),r=aE(mc.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function AC(){let{router:t}=TC(oE.UseNavigateStable),e=aE(mc.UseNavigateStable),n=U.useRef(!1);return rE(()=>{n.current=!0}),U.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,pc({fromRouteId:e},s)))},[t,e])}const qy={};function CC(t,e,n){qy[t]||(qy[t]=!0)}function PC(t){return mC(t.context)}function kC(t){let{basename:e="/",children:n=null,location:r,navigationType:i=rt.Pop,navigator:s,static:o=!1,future:l}=t;yl()&&de(!1);let u=e.replace(/^\/*/,"/"),c=U.useMemo(()=>({basename:u,navigator:s,static:o,future:pc({v7_relativeSplatPath:!1},l)}),[u,l,s,o]);typeof r=="string"&&(r=vi(r));let{pathname:d="/",search:p="",hash:g="",state:v=null,key:A="default"}=r,C=U.useMemo(()=>{let D=Io(d,u);return D==null?null:{location:{pathname:D,search:p,hash:g,state:v,key:A},navigationType:i}},[u,d,p,g,v,A,i]);return C==null?null:U.createElement(us.Provider,{value:c},U.createElement(Gp.Provider,{children:n,value:C}))}new Promise(()=>{});function NC(t){let e={hasErrorBoundary:t.ErrorBoundary!=null||t.errorElement!=null};return t.Component&&Object.assign(e,{element:U.createElement(t.Component),Component:void 0}),t.HydrateFallback&&Object.assign(e,{hydrateFallbackElement:U.createElement(t.HydrateFallback),HydrateFallback:void 0}),t.ErrorBoundary&&Object.assign(e,{errorElement:U.createElement(t.ErrorBoundary),ErrorBoundary:void 0}),e}/**
 * React Router DOM v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Za(){return Za=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Za.apply(this,arguments)}function bC(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function xC(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function DC(t,e){return t.button===0&&(!e||e==="_self")&&!xC(t)}const OC=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],LC="6";try{window.__reactRouterVersion=LC}catch{}function MC(t,e){return HA({basename:void 0,future:Za({},void 0,{v7_prependBasename:!0}),history:pA({window:void 0}),hydrationData:VC(),routes:t,mapRouteProperties:NC,unstable_dataStrategy:void 0,unstable_patchRoutesOnNavigation:void 0,window:void 0}).initialize()}function VC(){var t;let e=(t=window)==null?void 0:t.__staticRouterHydrationData;return e&&e.errors&&(e=Za({},e,{errors:UC(e.errors)})),e}function UC(t){if(!t)return null;let e=Object.entries(t),n={};for(let[r,i]of e)if(i&&i.__type==="RouteErrorResponse")n[r]=new fc(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let s=window[i.__subType];if(typeof s=="function")try{let o=new s(i.message);o.stack="",n[r]=o}catch{}}if(n[r]==null){let s=new Error(i.message);s.stack="",n[r]=s}}else n[r]=i;return n}const FC=U.createContext({isTransitioning:!1}),jC=U.createContext(new Map),BC="startTransition",Ky=tR[BC],zC="flushSync",Gy=fA[zC];function $C(t){Ky?Ky(t):t()}function sa(t){Gy?Gy(t):t()}let HC=class{constructor(){this.status="pending",this.promise=new Promise((e,n)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",e(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",n(r))}})}};function WC(t){let{fallbackElement:e,router:n,future:r}=t,[i,s]=U.useState(n.state),[o,l]=U.useState(),[u,c]=U.useState({isTransitioning:!1}),[d,p]=U.useState(),[g,v]=U.useState(),[A,C]=U.useState(),D=U.useRef(new Map),{v7_startTransition:T}=r||{},_=U.useCallback(m=>{T?$C(m):m()},[T]),S=U.useCallback((m,w)=>{let{deletedFetchers:E,unstable_flushSync:P,unstable_viewTransitionOpts:x}=w;E.forEach(Te=>D.current.delete(Te)),m.fetchers.forEach((Te,At)=>{Te.data!==void 0&&D.current.set(At,Te.data)});let R=n.window==null||n.window.document==null||typeof n.window.document.startViewTransition!="function";if(!x||R){P?sa(()=>s(m)):_(()=>s(m));return}if(P){sa(()=>{g&&(d&&d.resolve(),g.skipTransition()),c({isTransitioning:!0,flushSync:!0,currentLocation:x.currentLocation,nextLocation:x.nextLocation})});let Te=n.window.document.startViewTransition(()=>{sa(()=>s(m))});Te.finished.finally(()=>{sa(()=>{p(void 0),v(void 0),l(void 0),c({isTransitioning:!1})})}),sa(()=>v(Te));return}g?(d&&d.resolve(),g.skipTransition(),C({state:m,currentLocation:x.currentLocation,nextLocation:x.nextLocation})):(l(m),c({isTransitioning:!0,flushSync:!1,currentLocation:x.currentLocation,nextLocation:x.nextLocation}))},[n.window,g,d,D,_]);U.useLayoutEffect(()=>n.subscribe(S),[n,S]),U.useEffect(()=>{u.isTransitioning&&!u.flushSync&&p(new HC)},[u]),U.useEffect(()=>{if(d&&o&&n.window){let m=o,w=d.promise,E=n.window.document.startViewTransition(async()=>{_(()=>s(m)),await w});E.finished.finally(()=>{p(void 0),v(void 0),l(void 0),c({isTransitioning:!1})}),v(E)}},[_,o,d,n.window]),U.useEffect(()=>{d&&o&&i.location.key===o.location.key&&d.resolve()},[d,g,i.location,o]),U.useEffect(()=>{!u.isTransitioning&&A&&(l(A.state),c({isTransitioning:!0,flushSync:!1,currentLocation:A.currentLocation,nextLocation:A.nextLocation}),C(void 0))},[u.isTransitioning,A]),U.useEffect(()=>{},[]);let O=U.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:m=>n.navigate(m),push:(m,w,E)=>n.navigate(m,{state:w,preventScrollReset:E==null?void 0:E.preventScrollReset}),replace:(m,w,E)=>n.navigate(m,{replace:!0,state:w,preventScrollReset:E==null?void 0:E.preventScrollReset})}),[n]),z=n.basename||"/",F=U.useMemo(()=>({router:n,navigator:O,static:!1,basename:z}),[n,O,z]),I=U.useMemo(()=>({v7_relativeSplatPath:n.future.v7_relativeSplatPath}),[n.future.v7_relativeSplatPath]);return U.createElement(U.Fragment,null,U.createElement(th.Provider,{value:F},U.createElement(tE.Provider,{value:i},U.createElement(jC.Provider,{value:D.current},U.createElement(FC.Provider,{value:u},U.createElement(kC,{basename:z,location:i.location,navigationType:i.historyAction,navigator:O,future:I},i.initialized||n.future.v7_partialHydration?U.createElement(qC,{routes:n.routes,future:n.future,state:i}):e))))),null)}const qC=U.memo(KC);function KC(t){let{routes:e,future:n,state:r}=t;return gC(e,void 0,r,n)}const GC=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",QC=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,mt=U.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:u,to:c,preventScrollReset:d,unstable_viewTransition:p}=e,g=bC(e,OC),{basename:v}=U.useContext(us),A,C=!1;if(typeof c=="string"&&QC.test(c)&&(A=c,GC))try{let S=new URL(window.location.href),O=c.startsWith("//")?new URL(S.protocol+c):new URL(c),z=Io(O.pathname,v);O.origin===S.origin&&z!=null?c=z+O.search+O.hash:C=!0}catch{}let D=fC(c,{relative:i}),T=XC(c,{replace:o,state:l,target:u,preventScrollReset:d,relative:i,unstable_viewTransition:p});function _(S){r&&r(S),S.defaultPrevented||T(S)}return U.createElement("a",Za({},g,{href:A||D,onClick:C||s?r:_,ref:n,target:u}))});var Qy;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Qy||(Qy={}));var Xy;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Xy||(Xy={}));function XC(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:l}=e===void 0?{}:e,u=Qp(),c=cs(),d=sE(t,{relative:o});return U.useCallback(p=>{if(DC(p,n)){p.preventDefault();let g=r!==void 0?r:Ji(c)===Ji(d);u(t,{replace:g,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:l})}},[c,u,d,r,i,n,t,s,o,l])}const YC="/assets/logo2-Dme3yehf.png";var Yy={};/**
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
 */const lE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},JC=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},uE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,d=s>>2,p=(s&3)<<4|l>>4;let g=(l&15)<<2|c>>6,v=c&63;u||(v=64,o||(g=64)),r.push(n[d],n[p],n[g],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(lE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):JC(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||p==null)throw new ZC;const g=s<<2|l>>4;if(r.push(g),c!==64){const v=l<<4&240|c>>2;if(r.push(v),p!==64){const A=c<<6&192|p;r.push(A)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class ZC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const eP=function(t){const e=lE(t);return uE.encodeByteArray(e,!0)},gc=function(t){return eP(t).replace(/\./g,"")},cE=function(t){try{return uE.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function tP(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const nP=()=>tP().__FIREBASE_DEFAULTS__,rP=()=>{if(typeof process>"u"||typeof Yy>"u")return;const t=Yy.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},iP=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&cE(t[1]);return e&&JSON.parse(e)},nh=()=>{try{return nP()||rP()||iP()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},hE=t=>{var e,n;return(n=(e=nh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},dE=t=>{const e=hE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},fE=()=>{var t;return(t=nh())===null||t===void 0?void 0:t.config},pE=t=>{var e;return(e=nh())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class sP{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function mE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[gc(JSON.stringify(n)),gc(JSON.stringify(o)),""].join(".")}/**
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
 */function Ft(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function oP(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ft())}function aP(){var t;const e=(t=nh())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function gE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function lP(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function uP(){const t=Ft();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function cP(){return!aP()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function yE(){try{return typeof indexedDB=="object"}catch{return!1}}function vE(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function hP(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const dP="FirebaseError";class Cn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=dP,Object.setPrototypeOf(this,Cn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,hs.prototype.create)}}class hs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?fP(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Cn(i,l,r)}}function fP(t,e){return t.replace(pP,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const pP=/\{\$([^}]+)}/g;function mP(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function el(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Jy(s)&&Jy(o)){if(!el(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Jy(t){return t!==null&&typeof t=="object"}/**
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
 */function _l(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function fa(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function pa(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function gP(t,e){const n=new yP(t,e);return n.subscribe.bind(n)}class yP{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");vP(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=ld),i.error===void 0&&(i.error=ld),i.complete===void 0&&(i.complete=ld);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function vP(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ld(){}/**
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
 */const _P=1e3,wP=2,EP=4*60*60*1e3,TP=.5;function Zy(t,e=_P,n=wP){const r=e*Math.pow(n,t),i=Math.round(TP*r*(Math.random()-.5)*2);return Math.min(EP,r+i)}/**
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
 */function dt(t){return t&&t._delegate?t._delegate:t}class An{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Li="[DEFAULT]";/**
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
 */class IP{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new sP;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(RP(e))try{this.getOrInitializeService({instanceIdentifier:Li})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Li){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Li){return this.instances.has(e)}getOptions(e=Li){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:SP(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Li){return this.component?this.component.multipleInstances?e:Li:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function SP(t){return t===Li?void 0:t}function RP(t){return t.instantiationMode==="EAGER"}/**
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
 */class AP{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new IP(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ye;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ye||(ye={}));const CP={debug:ye.DEBUG,verbose:ye.VERBOSE,info:ye.INFO,warn:ye.WARN,error:ye.ERROR,silent:ye.SILENT},PP=ye.INFO,kP={[ye.DEBUG]:"log",[ye.VERBOSE]:"log",[ye.INFO]:"info",[ye.WARN]:"warn",[ye.ERROR]:"error"},NP=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=kP[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class rh{constructor(e){this.name=e,this._logLevel=PP,this._logHandler=NP,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ye))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?CP[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ye.DEBUG,...e),this._logHandler(this,ye.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ye.VERBOSE,...e),this._logHandler(this,ye.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ye.INFO,...e),this._logHandler(this,ye.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ye.WARN,...e),this._logHandler(this,ye.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ye.ERROR,...e),this._logHandler(this,ye.ERROR,...e)}}const bP=(t,e)=>e.some(n=>t instanceof n);let ev,tv;function xP(){return ev||(ev=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function DP(){return tv||(tv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const _E=new WeakMap,If=new WeakMap,wE=new WeakMap,ud=new WeakMap,Xp=new WeakMap;function OP(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(oi(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&_E.set(n,t)}).catch(()=>{}),Xp.set(e,t),e}function LP(t){if(If.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});If.set(t,e)}let Sf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return If.get(t);if(e==="objectStoreNames")return t.objectStoreNames||wE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return oi(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function MP(t){Sf=t(Sf)}function VP(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(cd(this),e,...n);return wE.set(r,e.sort?e.sort():[e]),oi(r)}:DP().includes(t)?function(...e){return t.apply(cd(this),e),oi(_E.get(this))}:function(...e){return oi(t.apply(cd(this),e))}}function UP(t){return typeof t=="function"?VP(t):(t instanceof IDBTransaction&&LP(t),bP(t,xP())?new Proxy(t,Sf):t)}function oi(t){if(t instanceof IDBRequest)return OP(t);if(ud.has(t))return ud.get(t);const e=UP(t);return e!==t&&(ud.set(t,e),Xp.set(e,t)),e}const cd=t=>Xp.get(t);function EE(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=oi(o);return r&&o.addEventListener("upgradeneeded",u=>{r(oi(o.result),u.oldVersion,u.newVersion,oi(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const FP=["get","getKey","getAll","getAllKeys","count"],jP=["put","add","delete","clear"],hd=new Map;function nv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(hd.get(e))return hd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=jP.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||FP.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return hd.set(e,s),s}MP(t=>({...t,get:(e,n,r)=>nv(e,n)||t.get(e,n,r),has:(e,n)=>!!nv(e,n)||t.has(e,n)}));/**
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
 */class BP{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(zP(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function zP(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Rf="@firebase/app",rv="0.10.10";/**
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
 */const Rr=new rh("@firebase/app"),$P="@firebase/app-compat",HP="@firebase/analytics-compat",WP="@firebase/analytics",qP="@firebase/app-check-compat",KP="@firebase/app-check",GP="@firebase/auth",QP="@firebase/auth-compat",XP="@firebase/database",YP="@firebase/database-compat",JP="@firebase/functions",ZP="@firebase/functions-compat",ek="@firebase/installations",tk="@firebase/installations-compat",nk="@firebase/messaging",rk="@firebase/messaging-compat",ik="@firebase/performance",sk="@firebase/performance-compat",ok="@firebase/remote-config",ak="@firebase/remote-config-compat",lk="@firebase/storage",uk="@firebase/storage-compat",ck="@firebase/firestore",hk="@firebase/vertexai-preview",dk="@firebase/firestore-compat",fk="firebase",pk="10.13.1";/**
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
 */const Af="[DEFAULT]",mk={[Rf]:"fire-core",[$P]:"fire-core-compat",[WP]:"fire-analytics",[HP]:"fire-analytics-compat",[KP]:"fire-app-check",[qP]:"fire-app-check-compat",[GP]:"fire-auth",[QP]:"fire-auth-compat",[XP]:"fire-rtdb",[YP]:"fire-rtdb-compat",[JP]:"fire-fn",[ZP]:"fire-fn-compat",[ek]:"fire-iid",[tk]:"fire-iid-compat",[nk]:"fire-fcm",[rk]:"fire-fcm-compat",[ik]:"fire-perf",[sk]:"fire-perf-compat",[ok]:"fire-rc",[ak]:"fire-rc-compat",[lk]:"fire-gcs",[uk]:"fire-gcs-compat",[ck]:"fire-fst",[dk]:"fire-fst-compat",[hk]:"fire-vertex","fire-js":"fire-js",[fk]:"fire-js-all"};/**
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
 */const yc=new Map,gk=new Map,Cf=new Map;function iv(t,e){try{t.container.addComponent(e)}catch(n){Rr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function zn(t){const e=t.name;if(Cf.has(e))return Rr.debug(`There were multiple attempts to register component ${e}.`),!1;Cf.set(e,t);for(const n of yc.values())iv(n,t);for(const n of gk.values())iv(n,t);return!0}function wi(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function fr(t){return t.settings!==void 0}/**
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
 */const yk={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ai=new hs("app","Firebase",yk);/**
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
 */class vk{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new An("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ai.create("app-deleted",{appName:this._name})}}/**
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
 */const ds=pk;function TE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Af,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw ai.create("bad-app-name",{appName:String(i)});if(n||(n=fE()),!n)throw ai.create("no-options");const s=yc.get(i);if(s){if(el(n,s.options)&&el(r,s.config))return s;throw ai.create("duplicate-app",{appName:i})}const o=new AP(i);for(const u of Cf.values())o.addComponent(u);const l=new vk(n,r,o);return yc.set(i,l),l}function ih(t=Af){const e=yc.get(t);if(!e&&t===Af&&fE())return TE();if(!e)throw ai.create("no-app",{appName:t});return e}function en(t,e,n){var r;let i=(r=mk[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Rr.warn(l.join(" "));return}zn(new An(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const _k="firebase-heartbeat-database",wk=1,tl="firebase-heartbeat-store";let dd=null;function IE(){return dd||(dd=EE(_k,wk,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(tl)}catch(n){console.warn(n)}}}}).catch(t=>{throw ai.create("idb-open",{originalErrorMessage:t.message})})),dd}async function Ek(t){try{const n=(await IE()).transaction(tl),r=await n.objectStore(tl).get(SE(t));return await n.done,r}catch(e){if(e instanceof Cn)Rr.warn(e.message);else{const n=ai.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Rr.warn(n.message)}}}async function sv(t,e){try{const r=(await IE()).transaction(tl,"readwrite");await r.objectStore(tl).put(e,SE(t)),await r.done}catch(n){if(n instanceof Cn)Rr.warn(n.message);else{const r=ai.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Rr.warn(r.message)}}}function SE(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Tk=1024,Ik=30*24*60*60*1e3;class Sk{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Ak(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=ov();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=Ik}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Rr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ov(),{heartbeatsToSend:r,unsentEntries:i}=Rk(this._heartbeatsCache.heartbeats),s=gc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Rr.warn(n),""}}}function ov(){return new Date().toISOString().substring(0,10)}function Rk(t,e=Tk){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),av(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),av(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Ak{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return yE()?vE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Ek(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return sv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return sv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function av(t){return gc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Ck(t){zn(new An("platform-logger",e=>new BP(e),"PRIVATE")),zn(new An("heartbeat",e=>new Sk(e),"PRIVATE")),en(Rf,rv,t),en(Rf,rv,"esm2017"),en("fire-js","")}Ck("");var lv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Wi,RE;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,m){function w(){}w.prototype=m.prototype,I.D=m.prototype,I.prototype=new w,I.prototype.constructor=I,I.C=function(E,P,x){for(var R=Array(arguments.length-2),Te=2;Te<arguments.length;Te++)R[Te-2]=arguments[Te];return m.prototype[P].apply(E,R)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(I,m,w){w||(w=0);var E=Array(16);if(typeof m=="string")for(var P=0;16>P;++P)E[P]=m.charCodeAt(w++)|m.charCodeAt(w++)<<8|m.charCodeAt(w++)<<16|m.charCodeAt(w++)<<24;else for(P=0;16>P;++P)E[P]=m[w++]|m[w++]<<8|m[w++]<<16|m[w++]<<24;m=I.g[0],w=I.g[1],P=I.g[2];var x=I.g[3],R=m+(x^w&(P^x))+E[0]+3614090360&4294967295;m=w+(R<<7&4294967295|R>>>25),R=x+(P^m&(w^P))+E[1]+3905402710&4294967295,x=m+(R<<12&4294967295|R>>>20),R=P+(w^x&(m^w))+E[2]+606105819&4294967295,P=x+(R<<17&4294967295|R>>>15),R=w+(m^P&(x^m))+E[3]+3250441966&4294967295,w=P+(R<<22&4294967295|R>>>10),R=m+(x^w&(P^x))+E[4]+4118548399&4294967295,m=w+(R<<7&4294967295|R>>>25),R=x+(P^m&(w^P))+E[5]+1200080426&4294967295,x=m+(R<<12&4294967295|R>>>20),R=P+(w^x&(m^w))+E[6]+2821735955&4294967295,P=x+(R<<17&4294967295|R>>>15),R=w+(m^P&(x^m))+E[7]+4249261313&4294967295,w=P+(R<<22&4294967295|R>>>10),R=m+(x^w&(P^x))+E[8]+1770035416&4294967295,m=w+(R<<7&4294967295|R>>>25),R=x+(P^m&(w^P))+E[9]+2336552879&4294967295,x=m+(R<<12&4294967295|R>>>20),R=P+(w^x&(m^w))+E[10]+4294925233&4294967295,P=x+(R<<17&4294967295|R>>>15),R=w+(m^P&(x^m))+E[11]+2304563134&4294967295,w=P+(R<<22&4294967295|R>>>10),R=m+(x^w&(P^x))+E[12]+1804603682&4294967295,m=w+(R<<7&4294967295|R>>>25),R=x+(P^m&(w^P))+E[13]+4254626195&4294967295,x=m+(R<<12&4294967295|R>>>20),R=P+(w^x&(m^w))+E[14]+2792965006&4294967295,P=x+(R<<17&4294967295|R>>>15),R=w+(m^P&(x^m))+E[15]+1236535329&4294967295,w=P+(R<<22&4294967295|R>>>10),R=m+(P^x&(w^P))+E[1]+4129170786&4294967295,m=w+(R<<5&4294967295|R>>>27),R=x+(w^P&(m^w))+E[6]+3225465664&4294967295,x=m+(R<<9&4294967295|R>>>23),R=P+(m^w&(x^m))+E[11]+643717713&4294967295,P=x+(R<<14&4294967295|R>>>18),R=w+(x^m&(P^x))+E[0]+3921069994&4294967295,w=P+(R<<20&4294967295|R>>>12),R=m+(P^x&(w^P))+E[5]+3593408605&4294967295,m=w+(R<<5&4294967295|R>>>27),R=x+(w^P&(m^w))+E[10]+38016083&4294967295,x=m+(R<<9&4294967295|R>>>23),R=P+(m^w&(x^m))+E[15]+3634488961&4294967295,P=x+(R<<14&4294967295|R>>>18),R=w+(x^m&(P^x))+E[4]+3889429448&4294967295,w=P+(R<<20&4294967295|R>>>12),R=m+(P^x&(w^P))+E[9]+568446438&4294967295,m=w+(R<<5&4294967295|R>>>27),R=x+(w^P&(m^w))+E[14]+3275163606&4294967295,x=m+(R<<9&4294967295|R>>>23),R=P+(m^w&(x^m))+E[3]+4107603335&4294967295,P=x+(R<<14&4294967295|R>>>18),R=w+(x^m&(P^x))+E[8]+1163531501&4294967295,w=P+(R<<20&4294967295|R>>>12),R=m+(P^x&(w^P))+E[13]+2850285829&4294967295,m=w+(R<<5&4294967295|R>>>27),R=x+(w^P&(m^w))+E[2]+4243563512&4294967295,x=m+(R<<9&4294967295|R>>>23),R=P+(m^w&(x^m))+E[7]+1735328473&4294967295,P=x+(R<<14&4294967295|R>>>18),R=w+(x^m&(P^x))+E[12]+2368359562&4294967295,w=P+(R<<20&4294967295|R>>>12),R=m+(w^P^x)+E[5]+4294588738&4294967295,m=w+(R<<4&4294967295|R>>>28),R=x+(m^w^P)+E[8]+2272392833&4294967295,x=m+(R<<11&4294967295|R>>>21),R=P+(x^m^w)+E[11]+1839030562&4294967295,P=x+(R<<16&4294967295|R>>>16),R=w+(P^x^m)+E[14]+4259657740&4294967295,w=P+(R<<23&4294967295|R>>>9),R=m+(w^P^x)+E[1]+2763975236&4294967295,m=w+(R<<4&4294967295|R>>>28),R=x+(m^w^P)+E[4]+1272893353&4294967295,x=m+(R<<11&4294967295|R>>>21),R=P+(x^m^w)+E[7]+4139469664&4294967295,P=x+(R<<16&4294967295|R>>>16),R=w+(P^x^m)+E[10]+3200236656&4294967295,w=P+(R<<23&4294967295|R>>>9),R=m+(w^P^x)+E[13]+681279174&4294967295,m=w+(R<<4&4294967295|R>>>28),R=x+(m^w^P)+E[0]+3936430074&4294967295,x=m+(R<<11&4294967295|R>>>21),R=P+(x^m^w)+E[3]+3572445317&4294967295,P=x+(R<<16&4294967295|R>>>16),R=w+(P^x^m)+E[6]+76029189&4294967295,w=P+(R<<23&4294967295|R>>>9),R=m+(w^P^x)+E[9]+3654602809&4294967295,m=w+(R<<4&4294967295|R>>>28),R=x+(m^w^P)+E[12]+3873151461&4294967295,x=m+(R<<11&4294967295|R>>>21),R=P+(x^m^w)+E[15]+530742520&4294967295,P=x+(R<<16&4294967295|R>>>16),R=w+(P^x^m)+E[2]+3299628645&4294967295,w=P+(R<<23&4294967295|R>>>9),R=m+(P^(w|~x))+E[0]+4096336452&4294967295,m=w+(R<<6&4294967295|R>>>26),R=x+(w^(m|~P))+E[7]+1126891415&4294967295,x=m+(R<<10&4294967295|R>>>22),R=P+(m^(x|~w))+E[14]+2878612391&4294967295,P=x+(R<<15&4294967295|R>>>17),R=w+(x^(P|~m))+E[5]+4237533241&4294967295,w=P+(R<<21&4294967295|R>>>11),R=m+(P^(w|~x))+E[12]+1700485571&4294967295,m=w+(R<<6&4294967295|R>>>26),R=x+(w^(m|~P))+E[3]+2399980690&4294967295,x=m+(R<<10&4294967295|R>>>22),R=P+(m^(x|~w))+E[10]+4293915773&4294967295,P=x+(R<<15&4294967295|R>>>17),R=w+(x^(P|~m))+E[1]+2240044497&4294967295,w=P+(R<<21&4294967295|R>>>11),R=m+(P^(w|~x))+E[8]+1873313359&4294967295,m=w+(R<<6&4294967295|R>>>26),R=x+(w^(m|~P))+E[15]+4264355552&4294967295,x=m+(R<<10&4294967295|R>>>22),R=P+(m^(x|~w))+E[6]+2734768916&4294967295,P=x+(R<<15&4294967295|R>>>17),R=w+(x^(P|~m))+E[13]+1309151649&4294967295,w=P+(R<<21&4294967295|R>>>11),R=m+(P^(w|~x))+E[4]+4149444226&4294967295,m=w+(R<<6&4294967295|R>>>26),R=x+(w^(m|~P))+E[11]+3174756917&4294967295,x=m+(R<<10&4294967295|R>>>22),R=P+(m^(x|~w))+E[2]+718787259&4294967295,P=x+(R<<15&4294967295|R>>>17),R=w+(x^(P|~m))+E[9]+3951481745&4294967295,I.g[0]=I.g[0]+m&4294967295,I.g[1]=I.g[1]+(P+(R<<21&4294967295|R>>>11))&4294967295,I.g[2]=I.g[2]+P&4294967295,I.g[3]=I.g[3]+x&4294967295}r.prototype.u=function(I,m){m===void 0&&(m=I.length);for(var w=m-this.blockSize,E=this.B,P=this.h,x=0;x<m;){if(P==0)for(;x<=w;)i(this,I,x),x+=this.blockSize;if(typeof I=="string"){for(;x<m;)if(E[P++]=I.charCodeAt(x++),P==this.blockSize){i(this,E),P=0;break}}else for(;x<m;)if(E[P++]=I[x++],P==this.blockSize){i(this,E),P=0;break}}this.h=P,this.o+=m},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var m=1;m<I.length-8;++m)I[m]=0;var w=8*this.o;for(m=I.length-8;m<I.length;++m)I[m]=w&255,w/=256;for(this.u(I),I=Array(16),m=w=0;4>m;++m)for(var E=0;32>E;E+=8)I[w++]=this.g[m]>>>E&255;return I};function s(I,m){var w=l;return Object.prototype.hasOwnProperty.call(w,I)?w[I]:w[I]=m(I)}function o(I,m){this.h=m;for(var w=[],E=!0,P=I.length-1;0<=P;P--){var x=I[P]|0;E&&x==m||(w[P]=x,E=!1)}this.g=w}var l={};function u(I){return-128<=I&&128>I?s(I,function(m){return new o([m|0],0>m?-1:0)}):new o([I|0],0>I?-1:0)}function c(I){if(isNaN(I)||!isFinite(I))return p;if(0>I)return D(c(-I));for(var m=[],w=1,E=0;I>=w;E++)m[E]=I/w|0,w*=4294967296;return new o(m,0)}function d(I,m){if(I.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(I.charAt(0)=="-")return D(d(I.substring(1),m));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=c(Math.pow(m,8)),E=p,P=0;P<I.length;P+=8){var x=Math.min(8,I.length-P),R=parseInt(I.substring(P,P+x),m);8>x?(x=c(Math.pow(m,x)),E=E.j(x).add(c(R))):(E=E.j(w),E=E.add(c(R)))}return E}var p=u(0),g=u(1),v=u(16777216);t=o.prototype,t.m=function(){if(C(this))return-D(this).m();for(var I=0,m=1,w=0;w<this.g.length;w++){var E=this.i(w);I+=(0<=E?E:4294967296+E)*m,m*=4294967296}return I},t.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(A(this))return"0";if(C(this))return"-"+D(this).toString(I);for(var m=c(Math.pow(I,6)),w=this,E="";;){var P=O(w,m).g;w=T(w,P.j(m));var x=((0<w.g.length?w.g[0]:w.h)>>>0).toString(I);if(w=P,A(w))return x+E;for(;6>x.length;)x="0"+x;E=x+E}},t.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function A(I){if(I.h!=0)return!1;for(var m=0;m<I.g.length;m++)if(I.g[m]!=0)return!1;return!0}function C(I){return I.h==-1}t.l=function(I){return I=T(this,I),C(I)?-1:A(I)?0:1};function D(I){for(var m=I.g.length,w=[],E=0;E<m;E++)w[E]=~I.g[E];return new o(w,~I.h).add(g)}t.abs=function(){return C(this)?D(this):this},t.add=function(I){for(var m=Math.max(this.g.length,I.g.length),w=[],E=0,P=0;P<=m;P++){var x=E+(this.i(P)&65535)+(I.i(P)&65535),R=(x>>>16)+(this.i(P)>>>16)+(I.i(P)>>>16);E=R>>>16,x&=65535,R&=65535,w[P]=R<<16|x}return new o(w,w[w.length-1]&-2147483648?-1:0)};function T(I,m){return I.add(D(m))}t.j=function(I){if(A(this)||A(I))return p;if(C(this))return C(I)?D(this).j(D(I)):D(D(this).j(I));if(C(I))return D(this.j(D(I)));if(0>this.l(v)&&0>I.l(v))return c(this.m()*I.m());for(var m=this.g.length+I.g.length,w=[],E=0;E<2*m;E++)w[E]=0;for(E=0;E<this.g.length;E++)for(var P=0;P<I.g.length;P++){var x=this.i(E)>>>16,R=this.i(E)&65535,Te=I.i(P)>>>16,At=I.i(P)&65535;w[2*E+2*P]+=R*At,_(w,2*E+2*P),w[2*E+2*P+1]+=x*At,_(w,2*E+2*P+1),w[2*E+2*P+1]+=R*Te,_(w,2*E+2*P+1),w[2*E+2*P+2]+=x*Te,_(w,2*E+2*P+2)}for(E=0;E<m;E++)w[E]=w[2*E+1]<<16|w[2*E];for(E=m;E<2*m;E++)w[E]=0;return new o(w,0)};function _(I,m){for(;(I[m]&65535)!=I[m];)I[m+1]+=I[m]>>>16,I[m]&=65535,m++}function S(I,m){this.g=I,this.h=m}function O(I,m){if(A(m))throw Error("division by zero");if(A(I))return new S(p,p);if(C(I))return m=O(D(I),m),new S(D(m.g),D(m.h));if(C(m))return m=O(I,D(m)),new S(D(m.g),m.h);if(30<I.g.length){if(C(I)||C(m))throw Error("slowDivide_ only works with positive integers.");for(var w=g,E=m;0>=E.l(I);)w=z(w),E=z(E);var P=F(w,1),x=F(E,1);for(E=F(E,2),w=F(w,2);!A(E);){var R=x.add(E);0>=R.l(I)&&(P=P.add(w),x=R),E=F(E,1),w=F(w,1)}return m=T(I,P.j(m)),new S(P,m)}for(P=p;0<=I.l(m);){for(w=Math.max(1,Math.floor(I.m()/m.m())),E=Math.ceil(Math.log(w)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),x=c(w),R=x.j(m);C(R)||0<R.l(I);)w-=E,x=c(w),R=x.j(m);A(x)&&(x=g),P=P.add(x),I=T(I,R)}return new S(P,I)}t.A=function(I){return O(this,I).h},t.and=function(I){for(var m=Math.max(this.g.length,I.g.length),w=[],E=0;E<m;E++)w[E]=this.i(E)&I.i(E);return new o(w,this.h&I.h)},t.or=function(I){for(var m=Math.max(this.g.length,I.g.length),w=[],E=0;E<m;E++)w[E]=this.i(E)|I.i(E);return new o(w,this.h|I.h)},t.xor=function(I){for(var m=Math.max(this.g.length,I.g.length),w=[],E=0;E<m;E++)w[E]=this.i(E)^I.i(E);return new o(w,this.h^I.h)};function z(I){for(var m=I.g.length+1,w=[],E=0;E<m;E++)w[E]=I.i(E)<<1|I.i(E-1)>>>31;return new o(w,I.h)}function F(I,m){var w=m>>5;m%=32;for(var E=I.g.length-w,P=[],x=0;x<E;x++)P[x]=0<m?I.i(x+w)>>>m|I.i(x+w+1)<<32-m:I.i(x+w);return new o(P,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,RE=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,Wi=o}).apply(typeof lv<"u"?lv:typeof self<"u"?self:typeof window<"u"?window:{});var pu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var AE,CE,ma,PE,Lu,Pf,kE,NE,bE;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,f){return a==Array.prototype||a==Object.prototype||(a[h]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof pu=="object"&&pu];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var f=r;a=a.split(".");for(var y=0;y<a.length-1;y++){var L=a[y];if(!(L in f))break e;f=f[L]}a=a[a.length-1],y=f[a],h=h(y),h!=y&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}function s(a,h){a instanceof String&&(a+="");var f=0,y=!1,L={next:function(){if(!y&&f<a.length){var V=f++;return{value:h(V,a[V]),done:!1}}return y=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}i("Array.prototype.values",function(a){return a||function(){return s(this,function(h,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function c(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function d(a,h,f){return a.call.apply(a.bind,arguments)}function p(a,h,f){if(!a)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,y),a.apply(h,L)}}return function(){return a.apply(h,arguments)}}function g(a,h,f){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,g.apply(null,arguments)}function v(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var y=f.slice();return y.push.apply(y,arguments),a.apply(this,y)}}function A(a,h){function f(){}f.prototype=h.prototype,a.aa=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(y,L,V){for(var K=Array(arguments.length-2),Ne=2;Ne<arguments.length;Ne++)K[Ne-2]=arguments[Ne];return h.prototype[L].apply(y,K)}}function C(a){const h=a.length;if(0<h){const f=Array(h);for(let y=0;y<h;y++)f[y]=a[y];return f}return[]}function D(a,h){for(let f=1;f<arguments.length;f++){const y=arguments[f];if(u(y)){const L=a.length||0,V=y.length||0;a.length=L+V;for(let K=0;K<V;K++)a[L+K]=y[K]}else a.push(y)}}class T{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function _(a){return/^[\s\xa0]*$/.test(a)}function S(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function O(a){return O[" "](a),a}O[" "]=function(){};var z=S().indexOf("Gecko")!=-1&&!(S().toLowerCase().indexOf("webkit")!=-1&&S().indexOf("Edge")==-1)&&!(S().indexOf("Trident")!=-1||S().indexOf("MSIE")!=-1)&&S().indexOf("Edge")==-1;function F(a,h,f){for(const y in a)h.call(f,a[y],y,a)}function I(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function m(a){const h={};for(const f in a)h[f]=a[f];return h}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(a,h){let f,y;for(let L=1;L<arguments.length;L++){y=arguments[L];for(f in y)a[f]=y[f];for(let V=0;V<w.length;V++)f=w[V],Object.prototype.hasOwnProperty.call(y,f)&&(a[f]=y[f])}}function P(a){var h=1;a=a.split(":");const f=[];for(;0<h&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function x(a){l.setTimeout(()=>{throw a},0)}function R(){var a=X;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class Te{constructor(){this.h=this.g=null}add(h,f){const y=At.get();y.set(h,f),this.h?this.h.next=y:this.g=y,this.h=y}}var At=new T(()=>new nn,a=>a.reset());class nn{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let Kt,G=!1,X=new Te,ae=()=>{const a=l.Promise.resolve(void 0);Kt=()=>{a.then(Ae)}};var Ae=()=>{for(var a;a=R();){try{a.h.call(a.g)}catch(f){x(f)}var h=At;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}G=!1};function ve(){this.s=this.s,this.C=this.C}ve.prototype.s=!1,ve.prototype.ma=function(){this.s||(this.s=!0,this.N())},ve.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Re(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}Re.prototype.h=function(){this.defaultPrevented=!0};var Ct=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,h),l.removeEventListener("test",f,h)}catch{}return a}();function jt(a,h){if(Re.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,y=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(z){e:{try{O(h.nodeName);var L=!0;break e}catch{}L=!1}L||(h=null)}}else f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement);this.relatedTarget=h,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:ot[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&jt.aa.h.call(this)}}A(jt,Re);var ot={2:"touch",3:"pen",4:"mouse"};jt.prototype.h=function(){jt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var yt="closure_listenable_"+(1e6*Math.random()|0),ir=0;function Sh(a,h,f,y,L){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!y,this.ha=L,this.key=++ir,this.da=this.fa=!1}function sr(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function gs(a){this.src=a,this.g={},this.h=0}gs.prototype.add=function(a,h,f,y,L){var V=a.toString();a=this.g[V],a||(a=this.g[V]=[],this.h++);var K=xo(a,h,y,L);return-1<K?(h=a[K],f||(h.fa=!1)):(h=new Sh(h,this.src,V,!!y,L),h.fa=f,a.push(h)),h};function bo(a,h){var f=h.type;if(f in a.g){var y=a.g[f],L=Array.prototype.indexOf.call(y,h,void 0),V;(V=0<=L)&&Array.prototype.splice.call(y,L,1),V&&(sr(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function xo(a,h,f,y){for(var L=0;L<a.length;++L){var V=a[L];if(!V.da&&V.listener==h&&V.capture==!!f&&V.ha==y)return L}return-1}var at="closure_lm_"+(1e6*Math.random()|0),Hn={};function Do(a,h,f,y,L){if(Array.isArray(h)){for(var V=0;V<h.length;V++)Do(a,h[V],f,y,L);return null}return f=Dl(f),a&&a[yt]?a.K(h,f,c(y)?!!y.capture:!!y,L):Rh(a,h,f,!1,y,L)}function Rh(a,h,f,y,L,V){if(!h)throw Error("Invalid event type");var K=c(L)?!!L.capture:!!L,Ne=Mo(a);if(Ne||(a[at]=Ne=new gs(a)),f=Ne.add(h,f,y,K,V),f.proxy)return f;if(y=or(),f.proxy=y,y.src=a,y.listener=f,a.addEventListener)Ct||(L=K),L===void 0&&(L=!1),a.addEventListener(h.toString(),y,L);else if(a.attachEvent)a.attachEvent(Lo(h.toString()),y);else if(a.addListener&&a.removeListener)a.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return f}function or(){function a(f){return h.call(a.src,a.listener,f)}const h=Ah;return a}function xl(a,h,f,y,L){if(Array.isArray(h))for(var V=0;V<h.length;V++)xl(a,h[V],f,y,L);else y=c(y)?!!y.capture:!!y,f=Dl(f),a&&a[yt]?(a=a.i,h=String(h).toString(),h in a.g&&(V=a.g[h],f=xo(V,f,y,L),-1<f&&(sr(V[f]),Array.prototype.splice.call(V,f,1),V.length==0&&(delete a.g[h],a.h--)))):a&&(a=Mo(a))&&(h=a.g[h.toString()],a=-1,h&&(a=xo(h,f,y,L)),(f=-1<a?h[a]:null)&&Oo(f))}function Oo(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[yt])bo(h.i,a);else{var f=a.type,y=a.proxy;h.removeEventListener?h.removeEventListener(f,y,a.capture):h.detachEvent?h.detachEvent(Lo(f),y):h.addListener&&h.removeListener&&h.removeListener(y),(f=Mo(h))?(bo(f,a),f.h==0&&(f.src=null,h[at]=null)):sr(a)}}}function Lo(a){return a in Hn?Hn[a]:Hn[a]="on"+a}function Ah(a,h){if(a.da)a=!0;else{h=new jt(h,this);var f=a.listener,y=a.ha||a.src;a.fa&&Oo(a),a=f.call(y,h)}return a}function Mo(a){return a=a[at],a instanceof gs?a:null}var Vo="__closure_events_fn_"+(1e9*Math.random()>>>0);function Dl(a){return typeof a=="function"?a:(a[Vo]||(a[Vo]=function(h){return a.handleEvent(h)}),a[Vo])}function je(){ve.call(this),this.i=new gs(this),this.M=this,this.F=null}A(je,ve),je.prototype[yt]=!0,je.prototype.removeEventListener=function(a,h,f,y){xl(this,a,h,f,y)};function Ye(a,h){var f,y=a.F;if(y)for(f=[];y;y=y.F)f.push(y);if(a=a.M,y=h.type||h,typeof h=="string")h=new Re(h,a);else if(h instanceof Re)h.target=h.target||a;else{var L=h;h=new Re(y,a),E(h,L)}if(L=!0,f)for(var V=f.length-1;0<=V;V--){var K=h.g=f[V];L=Ti(K,y,!0,h)&&L}if(K=h.g=a,L=Ti(K,y,!0,h)&&L,L=Ti(K,y,!1,h)&&L,f)for(V=0;V<f.length;V++)K=h.g=f[V],L=Ti(K,y,!1,h)&&L}je.prototype.N=function(){if(je.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var f=a.g[h],y=0;y<f.length;y++)sr(f[y]);delete a.g[h],a.h--}}this.F=null},je.prototype.K=function(a,h,f,y){return this.i.add(String(a),h,!1,f,y)},je.prototype.L=function(a,h,f,y){return this.i.add(String(a),h,!0,f,y)};function Ti(a,h,f,y){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var L=!0,V=0;V<h.length;++V){var K=h[V];if(K&&!K.da&&K.capture==f){var Ne=K.listener,vt=K.ha||K.src;K.fa&&bo(a.i,K),L=Ne.call(vt,y)!==!1&&L}}return L&&!y.defaultPrevented}function ys(a,h,f){if(typeof a=="function")f&&(a=g(a,f));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function Pn(a){a.g=ys(()=>{a.g=null,a.i&&(a.i=!1,Pn(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class kn extends ve{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Pn(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Nr(a){ve.call(this),this.h=a,this.g={}}A(Nr,ve);var Ii=[];function Ol(a){F(a.g,function(h,f){this.g.hasOwnProperty(f)&&Oo(h)},a),a.g={}}Nr.prototype.N=function(){Nr.aa.N.call(this),Ol(this)},Nr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var mn=l.JSON.stringify,Ll=l.JSON.parse,Ml=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function vs(){}vs.prototype.h=null;function Vl(a){return a.h||(a.h=a.i())}function Uo(){}var Wn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function _s(){Re.call(this,"d")}A(_s,Re);function Si(){Re.call(this,"c")}A(Si,Re);var gn={},ws=null;function Es(){return ws=ws||new je}gn.La="serverreachability";function Fo(a){Re.call(this,gn.La,a)}A(Fo,Re);function Ri(a){const h=Es();Ye(h,new Fo(h))}gn.STAT_EVENT="statevent";function jo(a,h){Re.call(this,gn.STAT_EVENT,a),this.stat=h}A(jo,Re);function et(a){const h=Es();Ye(h,new jo(h,a))}gn.Ma="timingevent";function Ai(a,h){Re.call(this,gn.Ma,a),this.size=h}A(Ai,Re);function br(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function Ci(){this.g=!0}Ci.prototype.xa=function(){this.g=!1};function Ch(a,h,f,y,L,V){a.info(function(){if(a.g)if(V)for(var K="",Ne=V.split("&"),vt=0;vt<Ne.length;vt++){var Ie=Ne[vt].split("=");if(1<Ie.length){var Nt=Ie[0];Ie=Ie[1];var bt=Nt.split("_");K=2<=bt.length&&bt[1]=="type"?K+(Nt+"="+Ie+"&"):K+(Nt+"=redacted&")}}else K=null;else K=V;return"XMLHTTP REQ ("+y+") [attempt "+L+"]: "+h+`
`+f+`
`+K})}function k(a,h,f,y,L,V,K){a.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+L+"]: "+h+`
`+f+`
`+V+" "+K})}function N(a,h,f,y){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+B(a,f)+(y?" "+y:"")})}function M(a,h){a.info(function(){return"TIMEOUT: "+h})}Ci.prototype.info=function(){};function B(a,h){if(!a.g)return h;if(!h)return null;try{var f=JSON.parse(h);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var y=f[a];if(!(2>y.length)){var L=y[1];if(Array.isArray(L)&&!(1>L.length)){var V=L[0];if(V!="noop"&&V!="stop"&&V!="close")for(var K=1;K<L.length;K++)L[K]=""}}}}return mn(f)}catch{return h}}var Q={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ne={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},se;function q(){}A(q,vs),q.prototype.g=function(){return new XMLHttpRequest},q.prototype.i=function(){return{}},se=new q;function te(a,h,f,y){this.j=a,this.i=h,this.l=f,this.R=y||1,this.U=new Nr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new J}function J(){this.i=null,this.g="",this.h=!1}var ee={},ge={};function we(a,h,f){a.L=1,a.v=zl(ar(h)),a.m=f,a.P=!0,Pe(a,null)}function Pe(a,h){a.F=Date.now(),Oe(a),a.A=ar(a.v);var f=a.A,y=a.R;Array.isArray(y)||(y=[String(y)]),eg(f.i,"t",y),a.C=0,f=a.j.J,a.h=new J,a.g=vg(a.j,f?h:null,!a.m),0<a.O&&(a.M=new kn(g(a.Y,a,a.g),a.O)),h=a.U,f=a.g,y=a.ca;var L="readystatechange";Array.isArray(L)||(L&&(Ii[0]=L.toString()),L=Ii);for(var V=0;V<L.length;V++){var K=Do(f,L[V],y||h.handleEvent,!1,h.h||h);if(!K)break;h.g[K.key]=K}h=a.H?m(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),Ri(),Ch(a.i,a.u,a.A,a.l,a.R,a.m)}te.prototype.ca=function(a){a=a.target;const h=this.M;h&&lr(a)==3?h.j():this.Y(a)},te.prototype.Y=function(a){try{if(a==this.g)e:{const bt=lr(this.g);var h=this.g.Ba();const Ss=this.g.Z();if(!(3>bt)&&(bt!=3||this.g&&(this.h.h||this.g.oa()||ag(this.g)))){this.J||bt!=4||h==7||(h==8||0>=Ss?Ri(3):Ri(2)),rn(this);var f=this.g.Z();this.X=f;t:if(pe(this)){var y=ag(this.g);a="";var L=y.length,V=lr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Pt(this),yn(this);var K="";break t}this.h.i=new l.TextDecoder}for(h=0;h<L;h++)this.h.h=!0,a+=this.h.i.decode(y[h],{stream:!(V&&h==L-1)});y.length=0,this.h.g+=a,this.C=0,K=this.h.g}else K=this.g.oa();if(this.o=f==200,k(this.i,this.u,this.A,this.l,this.R,bt,f),this.o){if(this.T&&!this.K){t:{if(this.g){var Ne,vt=this.g;if((Ne=vt.g?vt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(Ne)){var Ie=Ne;break t}}Ie=null}if(f=Ie)N(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Dr(this,f);else{this.o=!1,this.s=3,et(12),Pt(this),yn(this);break e}}if(this.P){f=!0;let xn;for(;!this.J&&this.C<K.length;)if(xn=tt(this,K),xn==ge){bt==4&&(this.s=4,et(14),f=!1),N(this.i,this.l,null,"[Incomplete Response]");break}else if(xn==ee){this.s=4,et(15),N(this.i,this.l,K,"[Invalid Chunk]"),f=!1;break}else N(this.i,this.l,xn,null),Dr(this,xn);if(pe(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),bt!=4||K.length!=0||this.h.h||(this.s=1,et(16),f=!1),this.o=this.o&&f,!f)N(this.i,this.l,K,"[Invalid Chunked Response]"),Pt(this),yn(this);else if(0<K.length&&!this.W){this.W=!0;var Nt=this.j;Nt.g==this&&Nt.ba&&!Nt.M&&(Nt.j.info("Great, no buffering proxy detected. Bytes received: "+K.length),bh(Nt),Nt.M=!0,et(11))}}else N(this.i,this.l,K,null),Dr(this,K);bt==4&&Pt(this),this.o&&!this.J&&(bt==4?pg(this.j,this):(this.o=!1,Oe(this)))}else VS(this.g),f==400&&0<K.indexOf("Unknown SID")?(this.s=3,et(12)):(this.s=0,et(13)),Pt(this),yn(this)}}}catch{}finally{}};function pe(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function tt(a,h){var f=a.C,y=h.indexOf(`
`,f);return y==-1?ge:(f=Number(h.substring(f,y)),isNaN(f)?ee:(y+=1,y+f>h.length?ge:(h=h.slice(y,y+f),a.C=y+f,h)))}te.prototype.cancel=function(){this.J=!0,Pt(this)};function Oe(a){a.S=Date.now()+a.I,xr(a,a.I)}function xr(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=br(g(a.ba,a),h)}function rn(a){a.B&&(l.clearTimeout(a.B),a.B=null)}te.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(M(this.i,this.A),this.L!=2&&(Ri(),et(17)),Pt(this),this.s=2,yn(this)):xr(this,this.S-a)};function yn(a){a.j.G==0||a.J||pg(a.j,a)}function Pt(a){rn(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,Ol(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function Dr(a,h){try{var f=a.j;if(f.G!=0&&(f.g==a||ue(f.h,a))){if(!a.K&&ue(f.h,a)&&f.G==3){try{var y=f.Da.g.parse(h)}catch{y=null}if(Array.isArray(y)&&y.length==3){var L=y;if(L[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)Kl(f),Wl(f);else break e;Nh(f),et(18)}}else f.za=L[1],0<f.za-f.T&&37500>L[2]&&f.F&&f.v==0&&!f.C&&(f.C=br(g(f.Za,f),6e3));if(1>=Ni(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else xi(f,11)}else if((a.K||f.g==a)&&Kl(f),!_(h))for(L=f.Da.g.parse(h),h=0;h<L.length;h++){let Ie=L[h];if(f.T=Ie[0],Ie=Ie[1],f.G==2)if(Ie[0]=="c"){f.K=Ie[1],f.ia=Ie[2];const Nt=Ie[3];Nt!=null&&(f.la=Nt,f.j.info("VER="+f.la));const bt=Ie[4];bt!=null&&(f.Aa=bt,f.j.info("SVER="+f.Aa));const Ss=Ie[5];Ss!=null&&typeof Ss=="number"&&0<Ss&&(y=1.5*Ss,f.L=y,f.j.info("backChannelRequestTimeoutMs_="+y)),y=f;const xn=a.g;if(xn){const Ql=xn.g?xn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ql){var V=y.h;V.g||Ql.indexOf("spdy")==-1&&Ql.indexOf("quic")==-1&&Ql.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(xe(V,V.h),V.h=null))}if(y.D){const xh=xn.g?xn.g.getResponseHeader("X-HTTP-Session-Id"):null;xh&&(y.ya=xh,Me(y.I,y.D,xh))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),y=f;var K=a;if(y.qa=yg(y,y.J?y.ia:null,y.W),K.K){kt(y.h,K);var Ne=K,vt=y.L;vt&&(Ne.I=vt),Ne.B&&(rn(Ne),Oe(Ne)),y.g=K}else dg(y);0<f.i.length&&ql(f)}else Ie[0]!="stop"&&Ie[0]!="close"||xi(f,7);else f.G==3&&(Ie[0]=="stop"||Ie[0]=="close"?Ie[0]=="stop"?xi(f,7):kh(f):Ie[0]!="noop"&&f.l&&f.l.ta(Ie),f.v=0)}}Ri(4)}catch{}}var Nn=class{constructor(a,h){this.g=a,this.map=h}};function Pi(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ki(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Ni(a){return a.h?1:a.g?a.g.size:0}function ue(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function xe(a,h){a.g?a.g.add(h):a.h=h}function kt(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Pi.prototype.cancel=function(){if(this.i=Le(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Le(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.D);return h}return C(a.i)}function bn(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var h=[],f=a.length,y=0;y<f;y++)h.push(a[y]);return h}h=[],f=0;for(y in a)h[f++]=a[y];return h}function Ul(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var h=[];a=a.length;for(var f=0;f<a;f++)h.push(f);return h}h=[],f=0;for(const y in a)h[f++]=y;return h}}}function Fl(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var f=Ul(a),y=bn(a),L=y.length,V=0;V<L;V++)h.call(void 0,y[V],f&&f[V],a)}var Qm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function SS(a,h){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var y=a[f].indexOf("="),L=null;if(0<=y){var V=a[f].substring(0,y);L=a[f].substring(y+1)}else V=a[f];h(V,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function bi(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof bi){this.h=a.h,jl(this,a.j),this.o=a.o,this.g=a.g,Bl(this,a.s),this.l=a.l;var h=a.i,f=new $o;f.i=h.i,h.g&&(f.g=new Map(h.g),f.h=h.h),Xm(this,f),this.m=a.m}else a&&(h=String(a).match(Qm))?(this.h=!1,jl(this,h[1]||"",!0),this.o=Bo(h[2]||""),this.g=Bo(h[3]||"",!0),Bl(this,h[4]),this.l=Bo(h[5]||"",!0),Xm(this,h[6]||"",!0),this.m=Bo(h[7]||"")):(this.h=!1,this.i=new $o(null,this.h))}bi.prototype.toString=function(){var a=[],h=this.j;h&&a.push(zo(h,Ym,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(zo(h,Ym,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(zo(f,f.charAt(0)=="/"?CS:AS,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",zo(f,kS)),a.join("")};function ar(a){return new bi(a)}function jl(a,h,f){a.j=f?Bo(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Bl(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function Xm(a,h,f){h instanceof $o?(a.i=h,NS(a.i,a.h)):(f||(h=zo(h,PS)),a.i=new $o(h,a.h))}function Me(a,h,f){a.i.set(h,f)}function zl(a){return Me(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Bo(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function zo(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,RS),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function RS(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Ym=/[#\/\?@]/g,AS=/[#\?:]/g,CS=/[#\?]/g,PS=/[#\?@]/g,kS=/#/g;function $o(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Or(a){a.g||(a.g=new Map,a.h=0,a.i&&SS(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}t=$o.prototype,t.add=function(a,h){Or(this),this.i=null,a=Ts(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function Jm(a,h){Or(a),h=Ts(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Zm(a,h){return Or(a),h=Ts(a,h),a.g.has(h)}t.forEach=function(a,h){Or(this),this.g.forEach(function(f,y){f.forEach(function(L){a.call(h,L,y,this)},this)},this)},t.na=function(){Or(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),f=[];for(let y=0;y<h.length;y++){const L=a[y];for(let V=0;V<L.length;V++)f.push(h[y])}return f},t.V=function(a){Or(this);let h=[];if(typeof a=="string")Zm(this,a)&&(h=h.concat(this.g.get(Ts(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)h=h.concat(a[f])}return h},t.set=function(a,h){return Or(this),this.i=null,a=Ts(this,a),Zm(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function eg(a,h,f){Jm(a,h),0<f.length&&(a.i=null,a.g.set(Ts(a,h),C(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var f=0;f<h.length;f++){var y=h[f];const V=encodeURIComponent(String(y)),K=this.V(y);for(y=0;y<K.length;y++){var L=V;K[y]!==""&&(L+="="+encodeURIComponent(String(K[y]))),a.push(L)}}return this.i=a.join("&")};function Ts(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function NS(a,h){h&&!a.j&&(Or(a),a.i=null,a.g.forEach(function(f,y){var L=y.toLowerCase();y!=L&&(Jm(this,y),eg(this,L,f))},a)),a.j=h}function bS(a,h){const f=new Ci;if(l.Image){const y=new Image;y.onload=v(Lr,f,"TestLoadImage: loaded",!0,h,y),y.onerror=v(Lr,f,"TestLoadImage: error",!1,h,y),y.onabort=v(Lr,f,"TestLoadImage: abort",!1,h,y),y.ontimeout=v(Lr,f,"TestLoadImage: timeout",!1,h,y),l.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=a}else h(!1)}function xS(a,h){const f=new Ci,y=new AbortController,L=setTimeout(()=>{y.abort(),Lr(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:y.signal}).then(V=>{clearTimeout(L),V.ok?Lr(f,"TestPingServer: ok",!0,h):Lr(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(L),Lr(f,"TestPingServer: error",!1,h)})}function Lr(a,h,f,y,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),y(f)}catch{}}function DS(){this.g=new Ml}function OS(a,h,f){const y=f||"";try{Fl(a,function(L,V){let K=L;c(L)&&(K=mn(L)),h.push(y+V+"="+encodeURIComponent(K))})}catch(L){throw h.push(y+"type="+encodeURIComponent("_badmap")),L}}function Ho(a){this.l=a.Ub||null,this.j=a.eb||!1}A(Ho,vs),Ho.prototype.g=function(){return new $l(this.l,this.j)},Ho.prototype.i=function(a){return function(){return a}}({});function $l(a,h){je.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}A($l,je),t=$l.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,qo(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Wo(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,qo(this)),this.g&&(this.readyState=3,qo(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;tg(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function tg(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Wo(this):qo(this),this.readyState==3&&tg(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Wo(this))},t.Qa=function(a){this.g&&(this.response=a,Wo(this))},t.ga=function(){this.g&&Wo(this)};function Wo(a){a.readyState=4,a.l=null,a.j=null,a.v=null,qo(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function qo(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty($l.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function ng(a){let h="";return F(a,function(f,y){h+=y,h+=":",h+=f,h+=`\r
`}),h}function Ph(a,h,f){e:{for(y in f){var y=!1;break e}y=!0}y||(f=ng(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):Me(a,h,f))}function Ge(a){je.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}A(Ge,je);var LS=/^https?$/i,MS=["POST","PUT"];t=Ge.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,f,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():se.g(),this.v=this.o?Vl(this.o):Vl(se),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(V){rg(this,V);return}if(a=f||"",f=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var L in y)f.set(L,y[L]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const V of y.keys())f.set(V,y.get(V));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(f.keys()).find(V=>V.toLowerCase()=="content-type"),L=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(MS,h,void 0))||y||L||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,K]of f)this.g.setRequestHeader(V,K);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{og(this),this.u=!0,this.g.send(a),this.u=!1}catch(V){rg(this,V)}};function rg(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,ig(a),Hl(a)}function ig(a){a.A||(a.A=!0,Ye(a,"complete"),Ye(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,Ye(this,"complete"),Ye(this,"abort"),Hl(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Hl(this,!0)),Ge.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?sg(this):this.bb())},t.bb=function(){sg(this)};function sg(a){if(a.h&&typeof o<"u"&&(!a.v[1]||lr(a)!=4||a.Z()!=2)){if(a.u&&lr(a)==4)ys(a.Ea,0,a);else if(Ye(a,"readystatechange"),lr(a)==4){a.h=!1;try{const K=a.Z();e:switch(K){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var y;if(y=K===0){var L=String(a.D).match(Qm)[1]||null;!L&&l.self&&l.self.location&&(L=l.self.location.protocol.slice(0,-1)),y=!LS.test(L?L.toLowerCase():"")}f=y}if(f)Ye(a,"complete"),Ye(a,"success");else{a.m=6;try{var V=2<lr(a)?a.g.statusText:""}catch{V=""}a.l=V+" ["+a.Z()+"]",ig(a)}}finally{Hl(a)}}}}function Hl(a,h){if(a.g){og(a);const f=a.g,y=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||Ye(a,"ready");try{f.onreadystatechange=y}catch{}}}function og(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function lr(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<lr(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),Ll(h)}};function ag(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function VS(a){const h={};a=(a.g&&2<=lr(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<a.length;y++){if(_(a[y]))continue;var f=P(a[y]);const L=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const V=h[L]||[];h[L]=V,V.push(f)}I(h,function(y){return y.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ko(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function lg(a){this.Aa=0,this.i=[],this.j=new Ci,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ko("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ko("baseRetryDelayMs",5e3,a),this.cb=Ko("retryDelaySeedMs",1e4,a),this.Wa=Ko("forwardChannelMaxRetries",2,a),this.wa=Ko("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Pi(a&&a.concurrentRequestLimit),this.Da=new DS,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=lg.prototype,t.la=8,t.G=1,t.connect=function(a,h,f,y){et(0),this.W=a,this.H=h||{},f&&y!==void 0&&(this.H.OSID=f,this.H.OAID=y),this.F=this.X,this.I=yg(this,null,this.W),ql(this)};function kh(a){if(ug(a),a.G==3){var h=a.U++,f=ar(a.I);if(Me(f,"SID",a.K),Me(f,"RID",h),Me(f,"TYPE","terminate"),Go(a,f),h=new te(a,a.j,h),h.L=2,h.v=zl(ar(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=h.v,f=!0),f||(h.g=vg(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Oe(h)}gg(a)}function Wl(a){a.g&&(bh(a),a.g.cancel(),a.g=null)}function ug(a){Wl(a),a.u&&(l.clearTimeout(a.u),a.u=null),Kl(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function ql(a){if(!ki(a.h)&&!a.s){a.s=!0;var h=a.Ga;Kt||ae(),G||(Kt(),G=!0),X.add(h,a),a.B=0}}function US(a,h){return Ni(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=br(g(a.Ga,a,h),mg(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const L=new te(this,this.j,a);let V=this.o;if(this.S&&(V?(V=m(V),E(V,this.S)):V=this.S),this.m!==null||this.O||(L.H=V,V=null),this.P)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var y=this.i[f];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(h+=y,4096<h){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=hg(this,L,h),f=ar(this.I),Me(f,"RID",a),Me(f,"CVER",22),this.D&&Me(f,"X-HTTP-Session-Id",this.D),Go(this,f),V&&(this.O?h="headers="+encodeURIComponent(String(ng(V)))+"&"+h:this.m&&Ph(f,this.m,V)),xe(this.h,L),this.Ua&&Me(f,"TYPE","init"),this.P?(Me(f,"$req",h),Me(f,"SID","null"),L.T=!0,we(L,f,null)):we(L,f,h),this.G=2}}else this.G==3&&(a?cg(this,a):this.i.length==0||ki(this.h)||cg(this))};function cg(a,h){var f;h?f=h.l:f=a.U++;const y=ar(a.I);Me(y,"SID",a.K),Me(y,"RID",f),Me(y,"AID",a.T),Go(a,y),a.m&&a.o&&Ph(y,a.m,a.o),f=new te(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),h&&(a.i=h.D.concat(a.i)),h=hg(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),xe(a.h,f),we(f,y,h)}function Go(a,h){a.H&&F(a.H,function(f,y){Me(h,y,f)}),a.l&&Fl({},function(f,y){Me(h,y,f)})}function hg(a,h,f){f=Math.min(a.i.length,f);var y=a.l?g(a.l.Na,a.l,a):null;e:{var L=a.i;let V=-1;for(;;){const K=["count="+f];V==-1?0<f?(V=L[0].g,K.push("ofs="+V)):V=0:K.push("ofs="+V);let Ne=!0;for(let vt=0;vt<f;vt++){let Ie=L[vt].g;const Nt=L[vt].map;if(Ie-=V,0>Ie)V=Math.max(0,L[vt].g-100),Ne=!1;else try{OS(Nt,K,"req"+Ie+"_")}catch{y&&y(Nt)}}if(Ne){y=K.join("&");break e}}}return a=a.i.splice(0,f),h.D=a,y}function dg(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;Kt||ae(),G||(Kt(),G=!0),X.add(h,a),a.v=0}}function Nh(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=br(g(a.Fa,a),mg(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,fg(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=br(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,et(10),Wl(this),fg(this))};function bh(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function fg(a){a.g=new te(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=ar(a.qa);Me(h,"RID","rpc"),Me(h,"SID",a.K),Me(h,"AID",a.T),Me(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&Me(h,"TO",a.ja),Me(h,"TYPE","xmlhttp"),Go(a,h),a.m&&a.o&&Ph(h,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=zl(ar(h)),f.m=null,f.P=!0,Pe(f,a)}t.Za=function(){this.C!=null&&(this.C=null,Wl(this),Nh(this),et(19))};function Kl(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function pg(a,h){var f=null;if(a.g==h){Kl(a),bh(a),a.g=null;var y=2}else if(ue(a.h,h))f=h.D,kt(a.h,h),y=1;else return;if(a.G!=0){if(h.o)if(y==1){f=h.m?h.m.length:0,h=Date.now()-h.F;var L=a.B;y=Es(),Ye(y,new Ai(y,f)),ql(a)}else dg(a);else if(L=h.s,L==3||L==0&&0<h.X||!(y==1&&US(a,h)||y==2&&Nh(a)))switch(f&&0<f.length&&(h=a.h,h.i=h.i.concat(f)),L){case 1:xi(a,5);break;case 4:xi(a,10);break;case 3:xi(a,6);break;default:xi(a,2)}}}function mg(a,h){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*h}function xi(a,h){if(a.j.info("Error code "+h),h==2){var f=g(a.fb,a),y=a.Xa;const L=!y;y=new bi(y||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||jl(y,"https"),zl(y),L?bS(y.toString(),f):xS(y.toString(),f)}else et(2);a.G=0,a.l&&a.l.sa(h),gg(a),ug(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),et(2)):(this.j.info("Failed to ping google.com"),et(1))};function gg(a){if(a.G=0,a.ka=[],a.l){const h=Le(a.h);(h.length!=0||a.i.length!=0)&&(D(a.ka,h),D(a.ka,a.i),a.h.i.length=0,C(a.i),a.i.length=0),a.l.ra()}}function yg(a,h,f){var y=f instanceof bi?ar(f):new bi(f);if(y.g!="")h&&(y.g=h+"."+y.g),Bl(y,y.s);else{var L=l.location;y=L.protocol,h=h?h+"."+L.hostname:L.hostname,L=+L.port;var V=new bi(null);y&&jl(V,y),h&&(V.g=h),L&&Bl(V,L),f&&(V.l=f),y=V}return f=a.D,h=a.ya,f&&h&&Me(y,f,h),Me(y,"VER",a.la),Go(a,y),y}function vg(a,h,f){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Ge(new Ho({eb:f})):new Ge(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function _g(){}t=_g.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Gl(){}Gl.prototype.g=function(a,h){return new sn(a,h)};function sn(a,h){je.call(this),this.g=new lg(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!_(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!_(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Is(this)}A(sn,je),sn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},sn.prototype.close=function(){kh(this.g)},sn.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=mn(a),a=f);h.i.push(new Nn(h.Ya++,a)),h.G==3&&ql(h)},sn.prototype.N=function(){this.g.l=null,delete this.j,kh(this.g),delete this.g,sn.aa.N.call(this)};function wg(a){_s.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}A(wg,_s);function Eg(){Si.call(this),this.status=1}A(Eg,Si);function Is(a){this.g=a}A(Is,_g),Is.prototype.ua=function(){Ye(this.g,"a")},Is.prototype.ta=function(a){Ye(this.g,new wg(a))},Is.prototype.sa=function(a){Ye(this.g,new Eg)},Is.prototype.ra=function(){Ye(this.g,"b")},Gl.prototype.createWebChannel=Gl.prototype.g,sn.prototype.send=sn.prototype.o,sn.prototype.open=sn.prototype.m,sn.prototype.close=sn.prototype.close,bE=function(){return new Gl},NE=function(){return Es()},kE=gn,Pf={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Q.NO_ERROR=0,Q.TIMEOUT=8,Q.HTTP_ERROR=6,Lu=Q,ne.COMPLETE="complete",PE=ne,Uo.EventType=Wn,Wn.OPEN="a",Wn.CLOSE="b",Wn.ERROR="c",Wn.MESSAGE="d",je.prototype.listen=je.prototype.K,ma=Uo,CE=Ho,Ge.prototype.listenOnce=Ge.prototype.L,Ge.prototype.getLastError=Ge.prototype.Ka,Ge.prototype.getLastErrorCode=Ge.prototype.Ba,Ge.prototype.getStatus=Ge.prototype.Z,Ge.prototype.getResponseJson=Ge.prototype.Oa,Ge.prototype.getResponseText=Ge.prototype.oa,Ge.prototype.send=Ge.prototype.ea,Ge.prototype.setWithCredentials=Ge.prototype.Ha,AE=Ge}).apply(typeof pu<"u"?pu:typeof self<"u"?self:typeof window<"u"?window:{});const uv="@firebase/firestore";/**
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
 */class Lt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Lt.UNAUTHENTICATED=new Lt(null),Lt.GOOGLE_CREDENTIALS=new Lt("google-credentials-uid"),Lt.FIRST_PARTY=new Lt("first-party-uid"),Lt.MOCK_USER=new Lt("mock-user");/**
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
 */let So="10.13.1";/**
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
 */const Zi=new rh("@firebase/firestore");function oa(){return Zi.logLevel}function Z(t,...e){if(Zi.logLevel<=ye.DEBUG){const n=e.map(Yp);Zi.debug(`Firestore (${So}): ${t}`,...n)}}function Ar(t,...e){if(Zi.logLevel<=ye.ERROR){const n=e.map(Yp);Zi.error(`Firestore (${So}): ${t}`,...n)}}function ho(t,...e){if(Zi.logLevel<=ye.WARN){const n=e.map(Yp);Zi.warn(`Firestore (${So}): ${t}`,...n)}}function Yp(t){if(typeof t=="string")return t;try{/**
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
 */function le(t="Unexpected state"){const e=`FIRESTORE (${So}) INTERNAL ASSERTION FAILED: `+t;throw Ar(e),new Error(e)}function be(t,e){t||le()}function he(t,e){return t}/**
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
 */const H={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class re extends Cn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class li{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class xE{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Pk{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Lt.UNAUTHENTICATED))}shutdown(){}}class kk{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Nk{constructor(e){this.t=e,this.currentUser=Lt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new li;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new li,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{Z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(Z("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new li)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(be(typeof r.accessToken=="string"),new xE(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return be(e===null||typeof e=="string"),new Lt(e)}}class bk{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Lt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class xk{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new bk(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Lt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Dk{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ok{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&Z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,Z("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{Z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):Z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(be(typeof n.token=="string"),this.R=n.token,new Dk(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Lk(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class DE{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=Lk(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function Se(t,e){return t<e?-1:t>e?1:0}function fo(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class ht{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new re(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new re(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new re(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new re(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ht.fromMillis(Date.now())}static fromDate(e){return ht.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new ht(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Se(this.nanoseconds,e.nanoseconds):Se(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ce{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ce(e)}static min(){return new ce(new ht(0,0))}static max(){return new ce(new ht(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class nl{constructor(e,n,r){n===void 0?n=0:n>e.length&&le(),r===void 0?r=e.length-n:r>e.length-n&&le(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return nl.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof nl?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Xe extends nl{construct(e,n,r){return new Xe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new re(H.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Xe(n)}static emptyPath(){return new Xe([])}}const Mk=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Et extends nl{construct(e,n,r){return new Et(e,n,r)}static isValidIdentifier(e){return Mk.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Et.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Et(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new re(H.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new re(H.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new re(H.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new re(H.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Et(n)}static emptyPath(){return new Et([])}}/**
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
 */class ie{constructor(e){this.path=e}static fromPath(e){return new ie(Xe.fromString(e))}static fromName(e){return new ie(Xe.fromString(e).popFirst(5))}static empty(){return new ie(Xe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Xe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Xe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ie(new Xe(e.slice()))}}function Vk(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ce.fromTimestamp(r===1e9?new ht(n+1,0):new ht(n,r));return new di(i,ie.empty(),e)}function Uk(t){return new di(t.readTime,t.key,-1)}class di{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new di(ce.min(),ie.empty(),-1)}static max(){return new di(ce.max(),ie.empty(),-1)}}function Fk(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ie.comparator(t.documentKey,e.documentKey),n!==0?n:Se(t.largestBatchId,e.largestBatchId))}/**
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
 */const jk="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Bk{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function wl(t){if(t.code!==H.FAILED_PRECONDITION||t.message!==jk)throw t;Z("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class ${constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&le(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new $((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof $?n:$.resolve(n)}catch(n){return $.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):$.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):$.reject(n)}static resolve(e){return new $((n,r)=>{n(e)})}static reject(e){return new $((n,r)=>{r(e)})}static waitFor(e){return new $((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=$.resolve(!1);for(const r of e)n=n.next(i=>i?$.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new $((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(d=>{o[c]=d,++l,l===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new $((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function zk(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function El(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Jp{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Jp.oe=-1;function sh(t){return t==null}function vc(t){return t===0&&1/t==-1/0}function $k(t){return typeof t=="number"&&Number.isInteger(t)&&!vc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function cv(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ro(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function OE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class qe{constructor(e,n){this.comparator=e,this.root=n||wt.EMPTY}insert(e,n){return new qe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,wt.BLACK,null,null))}remove(e){return new qe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,wt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new mu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new mu(this.root,e,this.comparator,!1)}getReverseIterator(){return new mu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new mu(this.root,e,this.comparator,!0)}}class mu{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class wt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??wt.RED,this.left=i??wt.EMPTY,this.right=s??wt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new wt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return wt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return wt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,wt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,wt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw le();const e=this.left.check();if(e!==this.right.check())throw le();return e+(this.isRed()?0:1)}}wt.EMPTY=null,wt.RED=!0,wt.BLACK=!1;wt.EMPTY=new class{constructor(){this.size=0}get key(){throw le()}get value(){throw le()}get color(){throw le()}get left(){throw le()}get right(){throw le()}copy(e,n,r,i,s){return this}insert(e,n,r){return new wt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class It{constructor(e){this.comparator=e,this.data=new qe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new hv(this.data.getIterator())}getIteratorFrom(e){return new hv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof It)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new It(this.comparator);return n.data=e,n}}class hv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Un{constructor(e){this.fields=e,e.sort(Et.comparator)}static empty(){return new Un([])}unionWith(e){let n=new It(Et.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Un(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return fo(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class LE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Rt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new LE("Invalid base64 string: "+s):s}}(e);return new Rt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Rt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Se(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Rt.EMPTY_BYTE_STRING=new Rt("");const Hk=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function fi(t){if(be(!!t),typeof t=="string"){let e=0;const n=Hk.exec(t);if(be(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Je(t.seconds),nanos:Je(t.nanos)}}function Je(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function es(t){return typeof t=="string"?Rt.fromBase64String(t):Rt.fromUint8Array(t)}/**
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
 */function Zp(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function em(t){const e=t.mapValue.fields.__previous_value__;return Zp(e)?em(e):e}function rl(t){const e=fi(t.mapValue.fields.__local_write_time__.timestampValue);return new ht(e.seconds,e.nanos)}/**
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
 */class Wk{constructor(e,n,r,i,s,o,l,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c}}class il{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new il("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof il&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const gu={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ts(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Zp(t)?4:Kk(t)?9007199254740991:qk(t)?10:11:le()}function nr(t,e){if(t===e)return!0;const n=ts(t);if(n!==ts(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return rl(t).isEqual(rl(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=fi(i.timestampValue),l=fi(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return es(i.bytesValue).isEqual(es(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Je(i.geoPointValue.latitude)===Je(s.geoPointValue.latitude)&&Je(i.geoPointValue.longitude)===Je(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Je(i.integerValue)===Je(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Je(i.doubleValue),l=Je(s.doubleValue);return o===l?vc(o)===vc(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return fo(t.arrayValue.values||[],e.arrayValue.values||[],nr);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(cv(o)!==cv(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!nr(o[u],l[u])))return!1;return!0}(t,e);default:return le()}}function sl(t,e){return(t.values||[]).find(n=>nr(n,e))!==void 0}function po(t,e){if(t===e)return 0;const n=ts(t),r=ts(e);if(n!==r)return Se(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Se(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Je(s.integerValue||s.doubleValue),u=Je(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return dv(t.timestampValue,e.timestampValue);case 4:return dv(rl(t),rl(e));case 5:return Se(t.stringValue,e.stringValue);case 6:return function(s,o){const l=es(s),u=es(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const d=Se(l[c],u[c]);if(d!==0)return d}return Se(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=Se(Je(s.latitude),Je(o.latitude));return l!==0?l:Se(Je(s.longitude),Je(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return fv(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,c,d;const p=s.fields||{},g=o.fields||{},v=(l=p.value)===null||l===void 0?void 0:l.arrayValue,A=(u=g.value)===null||u===void 0?void 0:u.arrayValue,C=Se(((c=v==null?void 0:v.values)===null||c===void 0?void 0:c.length)||0,((d=A==null?void 0:A.values)===null||d===void 0?void 0:d.length)||0);return C!==0?C:fv(v,A)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===gu.mapValue&&o===gu.mapValue)return 0;if(s===gu.mapValue)return 1;if(o===gu.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let p=0;p<u.length&&p<d.length;++p){const g=Se(u[p],d[p]);if(g!==0)return g;const v=po(l[u[p]],c[d[p]]);if(v!==0)return v}return Se(u.length,d.length)}(t.mapValue,e.mapValue);default:throw le()}}function dv(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Se(t,e);const n=fi(t),r=fi(e),i=Se(n.seconds,r.seconds);return i!==0?i:Se(n.nanos,r.nanos)}function fv(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=po(n[i],r[i]);if(s)return s}return Se(n.length,r.length)}function mo(t){return kf(t)}function kf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=fi(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return es(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ie.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=kf(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${kf(n.fields[o])}`;return i+"}"}(t.mapValue):le()}function Nf(t){return!!t&&"integerValue"in t}function tm(t){return!!t&&"arrayValue"in t}function pv(t){return!!t&&"nullValue"in t}function mv(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Mu(t){return!!t&&"mapValue"in t}function qk(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Ca(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ro(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ca(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ca(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Kk(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class wn{constructor(e){this.value=e}static empty(){return new wn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Mu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ca(n)}setAll(e){let n=Et.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=Ca(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Mu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return nr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Mu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Ro(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new wn(Ca(this.value))}}function ME(t){const e=[];return Ro(t.fields,(n,r)=>{const i=new Et([n]);if(Mu(r)){const s=ME(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Un(e)}/**
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
 */class Vt{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Vt(e,0,ce.min(),ce.min(),ce.min(),wn.empty(),0)}static newFoundDocument(e,n,r,i){return new Vt(e,1,n,ce.min(),r,i,0)}static newNoDocument(e,n){return new Vt(e,2,n,ce.min(),ce.min(),wn.empty(),0)}static newUnknownDocument(e,n){return new Vt(e,3,n,ce.min(),ce.min(),wn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ce.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=wn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=wn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ce.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Vt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Vt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class _c{constructor(e,n){this.position=e,this.inclusive=n}}function gv(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=ie.comparator(ie.fromName(o.referenceValue),n.key):r=po(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function yv(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!nr(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class wc{constructor(e,n="asc"){this.field=e,this.dir=n}}function Gk(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class VE{}class ut extends VE{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Xk(e,n,r):n==="array-contains"?new Zk(e,r):n==="in"?new eN(e,r):n==="not-in"?new tN(e,r):n==="array-contains-any"?new nN(e,r):new ut(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Yk(e,r):new Jk(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(po(n,this.value)):n!==null&&ts(this.value)===ts(n)&&this.matchesComparison(po(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return le()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class rr extends VE{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new rr(e,n)}matches(e){return UE(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function UE(t){return t.op==="and"}function FE(t){return Qk(t)&&UE(t)}function Qk(t){for(const e of t.filters)if(e instanceof rr)return!1;return!0}function bf(t){if(t instanceof ut)return t.field.canonicalString()+t.op.toString()+mo(t.value);if(FE(t))return t.filters.map(e=>bf(e)).join(",");{const e=t.filters.map(n=>bf(n)).join(",");return`${t.op}(${e})`}}function jE(t,e){return t instanceof ut?function(r,i){return i instanceof ut&&r.op===i.op&&r.field.isEqual(i.field)&&nr(r.value,i.value)}(t,e):t instanceof rr?function(r,i){return i instanceof rr&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&jE(o,i.filters[l]),!0):!1}(t,e):void le()}function BE(t){return t instanceof ut?function(n){return`${n.field.canonicalString()} ${n.op} ${mo(n.value)}`}(t):t instanceof rr?function(n){return n.op.toString()+" {"+n.getFilters().map(BE).join(" ,")+"}"}(t):"Filter"}class Xk extends ut{constructor(e,n,r){super(e,n,r),this.key=ie.fromName(r.referenceValue)}matches(e){const n=ie.comparator(e.key,this.key);return this.matchesComparison(n)}}class Yk extends ut{constructor(e,n){super(e,"in",n),this.keys=zE("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Jk extends ut{constructor(e,n){super(e,"not-in",n),this.keys=zE("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function zE(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ie.fromName(r.referenceValue))}class Zk extends ut{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return tm(n)&&sl(n.arrayValue,this.value)}}class eN extends ut{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&sl(this.value.arrayValue,n)}}class tN extends ut{constructor(e,n){super(e,"not-in",n)}matches(e){if(sl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!sl(this.value.arrayValue,n)}}class nN extends ut{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!tm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>sl(this.value.arrayValue,r))}}/**
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
 */class rN{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function vv(t,e=null,n=[],r=[],i=null,s=null,o=null){return new rN(t,e,n,r,i,s,o)}function nm(t){const e=he(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>bf(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),sh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>mo(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>mo(r)).join(",")),e.ue=n}return e.ue}function rm(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Gk(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!jE(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!yv(t.startAt,e.startAt)&&yv(t.endAt,e.endAt)}function xf(t){return ie.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class oh{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function iN(t,e,n,r,i,s,o,l){return new oh(t,e,n,r,i,s,o,l)}function im(t){return new oh(t)}function _v(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function sN(t){return t.collectionGroup!==null}function Pa(t){const e=he(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new It(Et.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new wc(s,r))}),n.has(Et.keyField().canonicalString())||e.ce.push(new wc(Et.keyField(),r))}return e.ce}function Jn(t){const e=he(t);return e.le||(e.le=oN(e,Pa(t))),e.le}function oN(t,e){if(t.limitType==="F")return vv(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new wc(i.field,s)});const n=t.endAt?new _c(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new _c(t.startAt.position,t.startAt.inclusive):null;return vv(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Df(t,e,n){return new oh(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ah(t,e){return rm(Jn(t),Jn(e))&&t.limitType===e.limitType}function $E(t){return`${nm(Jn(t))}|lt:${t.limitType}`}function Ps(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>BE(i)).join(", ")}]`),sh(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>mo(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>mo(i)).join(",")),`Target(${r})`}(Jn(t))}; limitType=${t.limitType})`}function lh(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):ie.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Pa(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=gv(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,Pa(r),i)||r.endAt&&!function(o,l,u){const c=gv(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,Pa(r),i))}(t,e)}function aN(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function HE(t){return(e,n)=>{let r=!1;for(const i of Pa(t)){const s=lN(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function lN(t,e,n){const r=t.field.isKeyField()?ie.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?po(u,c):le()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return le()}}/**
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
 */class Ao{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ro(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return OE(this.inner)}size(){return this.innerSize}}/**
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
 */const uN=new qe(ie.comparator);function Cr(){return uN}const WE=new qe(ie.comparator);function ga(...t){let e=WE;for(const n of t)e=e.insert(n.key,n);return e}function qE(t){let e=WE;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Bi(){return ka()}function KE(){return ka()}function ka(){return new Ao(t=>t.toString(),(t,e)=>t.isEqual(e))}const cN=new qe(ie.comparator),hN=new It(ie.comparator);function me(...t){let e=hN;for(const n of t)e=e.add(n);return e}const dN=new It(Se);function fN(){return dN}/**
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
 */function sm(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:vc(e)?"-0":e}}function GE(t){return{integerValue:""+t}}function pN(t,e){return $k(e)?GE(e):sm(t,e)}/**
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
 */class uh{constructor(){this._=void 0}}function mN(t,e,n){return t instanceof Ec?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Zp(s)&&(s=em(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof ol?XE(t,e):t instanceof al?YE(t,e):function(i,s){const o=QE(i,s),l=wv(o)+wv(i.Pe);return Nf(o)&&Nf(i.Pe)?GE(l):sm(i.serializer,l)}(t,e)}function gN(t,e,n){return t instanceof ol?XE(t,e):t instanceof al?YE(t,e):n}function QE(t,e){return t instanceof Tc?function(r){return Nf(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Ec extends uh{}class ol extends uh{constructor(e){super(),this.elements=e}}function XE(t,e){const n=JE(e);for(const r of t.elements)n.some(i=>nr(i,r))||n.push(r);return{arrayValue:{values:n}}}class al extends uh{constructor(e){super(),this.elements=e}}function YE(t,e){let n=JE(e);for(const r of t.elements)n=n.filter(i=>!nr(i,r));return{arrayValue:{values:n}}}class Tc extends uh{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function wv(t){return Je(t.integerValue||t.doubleValue)}function JE(t){return tm(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function yN(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof ol&&i instanceof ol||r instanceof al&&i instanceof al?fo(r.elements,i.elements,nr):r instanceof Tc&&i instanceof Tc?nr(r.Pe,i.Pe):r instanceof Ec&&i instanceof Ec}(t.transform,e.transform)}class vN{constructor(e,n){this.version=e,this.transformResults=n}}class _r{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new _r}static exists(e){return new _r(void 0,e)}static updateTime(e){return new _r(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Vu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ch{}function ZE(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new tT(t.key,_r.none()):new Tl(t.key,t.data,_r.none());{const n=t.data,r=wn.empty();let i=new It(Et.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new fs(t.key,r,new Un(i.toArray()),_r.none())}}function _N(t,e,n){t instanceof Tl?function(i,s,o){const l=i.value.clone(),u=Tv(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof fs?function(i,s,o){if(!Vu(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=Tv(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(eT(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Na(t,e,n,r){return t instanceof Tl?function(s,o,l,u){if(!Vu(s.precondition,o))return l;const c=s.value.clone(),d=Iv(s.fieldTransforms,u,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof fs?function(s,o,l,u){if(!Vu(s.precondition,o))return l;const c=Iv(s.fieldTransforms,u,o),d=o.data;return d.setAll(eT(s)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,l){return Vu(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function wN(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=QE(r.transform,i||null);s!=null&&(n===null&&(n=wn.empty()),n.set(r.field,s))}return n||null}function Ev(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&fo(r,i,(s,o)=>yN(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Tl extends ch{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class fs extends ch{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function eT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Tv(t,e,n){const r=new Map;be(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,gN(o,l,n[i]))}return r}function Iv(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,mN(s,o,e))}return r}class tT extends ch{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class EN extends ch{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class TN{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&_N(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Na(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Na(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=KE();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=ZE(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(ce.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),me())}isEqual(e){return this.batchId===e.batchId&&fo(this.mutations,e.mutations,(n,r)=>Ev(n,r))&&fo(this.baseMutations,e.baseMutations,(n,r)=>Ev(n,r))}}class om{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){be(e.mutations.length===r.length);let i=function(){return cN}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new om(e,n,r,i)}}/**
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
 */class IN{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class SN{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var nt,_e;function RN(t){switch(t){default:return le();case H.CANCELLED:case H.UNKNOWN:case H.DEADLINE_EXCEEDED:case H.RESOURCE_EXHAUSTED:case H.INTERNAL:case H.UNAVAILABLE:case H.UNAUTHENTICATED:return!1;case H.INVALID_ARGUMENT:case H.NOT_FOUND:case H.ALREADY_EXISTS:case H.PERMISSION_DENIED:case H.FAILED_PRECONDITION:case H.ABORTED:case H.OUT_OF_RANGE:case H.UNIMPLEMENTED:case H.DATA_LOSS:return!0}}function nT(t){if(t===void 0)return Ar("GRPC error has no .code"),H.UNKNOWN;switch(t){case nt.OK:return H.OK;case nt.CANCELLED:return H.CANCELLED;case nt.UNKNOWN:return H.UNKNOWN;case nt.DEADLINE_EXCEEDED:return H.DEADLINE_EXCEEDED;case nt.RESOURCE_EXHAUSTED:return H.RESOURCE_EXHAUSTED;case nt.INTERNAL:return H.INTERNAL;case nt.UNAVAILABLE:return H.UNAVAILABLE;case nt.UNAUTHENTICATED:return H.UNAUTHENTICATED;case nt.INVALID_ARGUMENT:return H.INVALID_ARGUMENT;case nt.NOT_FOUND:return H.NOT_FOUND;case nt.ALREADY_EXISTS:return H.ALREADY_EXISTS;case nt.PERMISSION_DENIED:return H.PERMISSION_DENIED;case nt.FAILED_PRECONDITION:return H.FAILED_PRECONDITION;case nt.ABORTED:return H.ABORTED;case nt.OUT_OF_RANGE:return H.OUT_OF_RANGE;case nt.UNIMPLEMENTED:return H.UNIMPLEMENTED;case nt.DATA_LOSS:return H.DATA_LOSS;default:return le()}}(_e=nt||(nt={}))[_e.OK=0]="OK",_e[_e.CANCELLED=1]="CANCELLED",_e[_e.UNKNOWN=2]="UNKNOWN",_e[_e.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",_e[_e.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",_e[_e.NOT_FOUND=5]="NOT_FOUND",_e[_e.ALREADY_EXISTS=6]="ALREADY_EXISTS",_e[_e.PERMISSION_DENIED=7]="PERMISSION_DENIED",_e[_e.UNAUTHENTICATED=16]="UNAUTHENTICATED",_e[_e.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",_e[_e.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",_e[_e.ABORTED=10]="ABORTED",_e[_e.OUT_OF_RANGE=11]="OUT_OF_RANGE",_e[_e.UNIMPLEMENTED=12]="UNIMPLEMENTED",_e[_e.INTERNAL=13]="INTERNAL",_e[_e.UNAVAILABLE=14]="UNAVAILABLE",_e[_e.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function AN(){return new TextEncoder}/**
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
 */const CN=new Wi([4294967295,4294967295],0);function Sv(t){const e=AN().encode(t),n=new RE;return n.update(e),new Uint8Array(n.digest())}function Rv(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Wi([n,r],0),new Wi([i,s],0)]}class am{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ya(`Invalid padding: ${n}`);if(r<0)throw new ya(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ya(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ya(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Wi.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(Wi.fromNumber(r)));return i.compare(CN)===1&&(i=new Wi([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Sv(e),[r,i]=Rv(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new am(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=Sv(e),[r,i]=Rv(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ya extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class hh{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Il.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new hh(ce.min(),i,new qe(Se),Cr(),me())}}class Il{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Il(r,n,me(),me(),me())}}/**
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
 */class Uu{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class rT{constructor(e,n){this.targetId=e,this.me=n}}class iT{constructor(e,n,r=Rt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Av{constructor(){this.fe=0,this.ge=Pv(),this.pe=Rt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=me(),n=me(),r=me();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:le()}}),new Il(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Pv()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,be(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class PN{constructor(e){this.Le=e,this.Be=new Map,this.ke=Cr(),this.qe=Cv(),this.Qe=new qe(Se)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:le()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(xf(s))if(r===0){const o=new ie(s.path);this.Ue(n,o,Vt.newNoDocument(o,ce.min()))}else be(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=es(r).toUint8Array()}catch(u){if(u instanceof LE)return ho("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new am(o,i,s)}catch(u){return ho(u instanceof ya?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&xf(l.target)){const u=new ie(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,Vt.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=me();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new hh(e,n,this.Qe,this.ke,r);return this.ke=Cr(),this.qe=Cv(),this.Qe=new qe(Se),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Av,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new It(Se),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||Z("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Av),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Cv(){return new qe(ie.comparator)}function Pv(){return new qe(ie.comparator)}const kN={asc:"ASCENDING",desc:"DESCENDING"},NN={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},bN={and:"AND",or:"OR"};class xN{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Of(t,e){return t.useProto3Json||sh(e)?e:{value:e}}function Ic(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function sT(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function DN(t,e){return Ic(t,e.toTimestamp())}function Zn(t){return be(!!t),ce.fromTimestamp(function(n){const r=fi(n);return new ht(r.seconds,r.nanos)}(t))}function lm(t,e){return Lf(t,e).canonicalString()}function Lf(t,e){const n=function(i){return new Xe(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function oT(t){const e=Xe.fromString(t);return be(hT(e)),e}function Mf(t,e){return lm(t.databaseId,e.path)}function fd(t,e){const n=oT(e);if(n.get(1)!==t.databaseId.projectId)throw new re(H.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new re(H.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ie(lT(n))}function aT(t,e){return lm(t.databaseId,e)}function ON(t){const e=oT(t);return e.length===4?Xe.emptyPath():lT(e)}function Vf(t){return new Xe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function lT(t){return be(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function kv(t,e,n){return{name:Mf(t,e),fields:n.value.mapValue.fields}}function LN(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:le()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,d){return c.useProto3Json?(be(d===void 0||typeof d=="string"),Rt.fromBase64String(d||"")):(be(d===void 0||d instanceof Buffer||d instanceof Uint8Array),Rt.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const d=c.code===void 0?H.UNKNOWN:nT(c.code);return new re(d,c.message||"")}(o);n=new iT(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=fd(t,r.document.name),s=Zn(r.document.updateTime),o=r.document.createTime?Zn(r.document.createTime):ce.min(),l=new wn({mapValue:{fields:r.document.fields}}),u=Vt.newFoundDocument(i,s,o,l),c=r.targetIds||[],d=r.removedTargetIds||[];n=new Uu(c,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=fd(t,r.document),s=r.readTime?Zn(r.readTime):ce.min(),o=Vt.newNoDocument(i,s),l=r.removedTargetIds||[];n=new Uu([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=fd(t,r.document),s=r.removedTargetIds||[];n=new Uu([],s,i,null)}else{if(!("filter"in e))return le();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new SN(i,s),l=r.targetId;n=new rT(l,o)}}return n}function MN(t,e){let n;if(e instanceof Tl)n={update:kv(t,e.key,e.value)};else if(e instanceof tT)n={delete:Mf(t,e.key)};else if(e instanceof fs)n={update:kv(t,e.key,e.data),updateMask:WN(e.fieldMask)};else{if(!(e instanceof EN))return le();n={verify:Mf(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof Ec)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof ol)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof al)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Tc)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw le()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:DN(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:le()}(t,e.precondition)),n}function VN(t,e){return t&&t.length>0?(be(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Zn(i.updateTime):Zn(s);return o.isEqual(ce.min())&&(o=Zn(s)),new vN(o,i.transformResults||[])}(n,e))):[]}function UN(t,e){return{documents:[aT(t,e.path)]}}function FN(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=aT(t,i);const s=function(c){if(c.length!==0)return cT(rr.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(d=>function(g){return{field:ks(g.field),direction:zN(g.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Of(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function jN(t){let e=ON(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){be(r===1);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(p){const g=uT(p);return g instanceof rr&&FE(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(g=>function(A){return new wc(Ns(A.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(A.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(p){let g;return g=typeof p=="object"?p.value:p,sh(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(p){const g=!!p.before,v=p.values||[];return new _c(v,g)}(n.startAt));let c=null;return n.endAt&&(c=function(p){const g=!p.before,v=p.values||[];return new _c(v,g)}(n.endAt)),iN(e,i,o,s,l,"F",u,c)}function BN(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return le()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function uT(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ns(n.unaryFilter.field);return ut.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ns(n.unaryFilter.field);return ut.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ns(n.unaryFilter.field);return ut.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ns(n.unaryFilter.field);return ut.create(o,"!=",{nullValue:"NULL_VALUE"});default:return le()}}(t):t.fieldFilter!==void 0?function(n){return ut.create(Ns(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return le()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return rr.create(n.compositeFilter.filters.map(r=>uT(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return le()}}(n.compositeFilter.op))}(t):le()}function zN(t){return kN[t]}function $N(t){return NN[t]}function HN(t){return bN[t]}function ks(t){return{fieldPath:t.canonicalString()}}function Ns(t){return Et.fromServerFormat(t.fieldPath)}function cT(t){return t instanceof ut?function(n){if(n.op==="=="){if(mv(n.value))return{unaryFilter:{field:ks(n.field),op:"IS_NAN"}};if(pv(n.value))return{unaryFilter:{field:ks(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(mv(n.value))return{unaryFilter:{field:ks(n.field),op:"IS_NOT_NAN"}};if(pv(n.value))return{unaryFilter:{field:ks(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ks(n.field),op:$N(n.op),value:n.value}}}(t):t instanceof rr?function(n){const r=n.getFilters().map(i=>cT(i));return r.length===1?r[0]:{compositeFilter:{op:HN(n.op),filters:r}}}(t):le()}function WN(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function hT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Yr{constructor(e,n,r,i,s=ce.min(),o=ce.min(),l=Rt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Yr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Yr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Yr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Yr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class qN{constructor(e){this.ct=e}}function KN(t){const e=jN({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Df(e,e.limit,"L"):e}/**
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
 */class GN{constructor(){this.un=new QN}addToCollectionParentIndex(e,n){return this.un.add(n),$.resolve()}getCollectionParents(e,n){return $.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return $.resolve()}deleteFieldIndex(e,n){return $.resolve()}deleteAllFieldIndexes(e){return $.resolve()}createTargetIndexes(e,n){return $.resolve()}getDocumentsMatchingTarget(e,n){return $.resolve(null)}getIndexType(e,n){return $.resolve(0)}getFieldIndexes(e,n){return $.resolve([])}getNextCollectionGroupToUpdate(e){return $.resolve(null)}getMinOffset(e,n){return $.resolve(di.min())}getMinOffsetFromCollectionGroup(e,n){return $.resolve(di.min())}updateCollectionGroup(e,n,r){return $.resolve()}updateIndexEntries(e,n){return $.resolve()}}class QN{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new It(Xe.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new It(Xe.comparator)).toArray()}}/**
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
 */class go{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new go(0)}static kn(){return new go(-1)}}/**
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
 */class XN{constructor(){this.changes=new Ao(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Vt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?$.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class YN{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class JN{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Na(r.mutation,i,Un.empty(),ht.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,me()).next(()=>r))}getLocalViewOfDocuments(e,n,r=me()){const i=Bi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=ga();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Bi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,me()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Cr();const o=ka(),l=function(){return ka()}();return n.forEach((u,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof fs)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),Na(d.mutation,c,d.mutation.getFieldMask(),ht.now())):o.set(c.key,Un.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>{var p;return l.set(c,new YN(d,(p=o.get(c))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=ka();let i=new qe((o,l)=>o-l),s=me();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let d=r.get(u)||Un.empty();d=l.applyToLocalView(c,d),r.set(u,d);const p=(i.get(l.batchId)||me()).add(u);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,d=u.value,p=KE();d.forEach(g=>{if(!s.has(g)){const v=ZE(n.get(g),r.get(g));v!==null&&p.set(g,v),s=s.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,p))}return $.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return ie.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):sN(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):$.resolve(Bi());let l=-1,u=s;return o.next(c=>$.forEach(c,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(d)?$.resolve():this.remoteDocumentCache.getEntry(e,d).next(g=>{u=u.insert(d,g)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,me())).next(d=>({batchId:l,changes:qE(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ie(n)).next(r=>{let i=ga();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=ga();return this.indexManager.getCollectionParents(e,s).next(l=>$.forEach(l,u=>{const c=function(p,g){return new oh(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,Vt.newInvalidDocument(d)))});let l=ga();return o.forEach((u,c)=>{const d=s.get(u);d!==void 0&&Na(d.mutation,c,Un.empty(),ht.now()),lh(n,c)&&(l=l.insert(u,c))}),l})}}/**
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
 */class ZN{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return $.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Zn(i.createTime)}}(n)),$.resolve()}getNamedQuery(e,n){return $.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:KN(i.bundledQuery),readTime:Zn(i.readTime)}}(n)),$.resolve()}}/**
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
 */class eb{constructor(){this.overlays=new qe(ie.comparator),this.Ir=new Map}getOverlay(e,n){return $.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Bi();return $.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),$.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),$.resolve()}getOverlaysForCollection(e,n,r){const i=Bi(),s=n.length+1,o=new ie(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return $.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new qe((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=Bi(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const l=Bi(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>l.set(c,d)),!(l.size()>=i)););return $.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new IN(n,r));let s=this.Ir.get(n);s===void 0&&(s=me(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
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
 */class tb{constructor(){this.sessionToken=Rt.EMPTY_BYTE_STRING}getSessionToken(e){return $.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,$.resolve()}}/**
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
 */class um{constructor(){this.Tr=new It(ft.Er),this.dr=new It(ft.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new ft(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new ft(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new ie(new Xe([])),r=new ft(n,e),i=new ft(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new ie(new Xe([])),r=new ft(n,e),i=new ft(n,e+1);let s=me();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new ft(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ft{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return ie.comparator(e.key,n.key)||Se(e.wr,n.wr)}static Ar(e,n){return Se(e.wr,n.wr)||ie.comparator(e.key,n.key)}}/**
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
 */class nb{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new It(ft.Er)}checkEmpty(e){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new TN(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.br=this.br.add(new ft(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return $.resolve(o)}lookupMutationBatch(e,n){return $.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return $.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ft(n,0),i=new ft(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const l=this.Dr(o.wr);s.push(l)}),$.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new It(Se);return n.forEach(i=>{const s=new ft(i,0),o=new ft(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],l=>{r=r.add(l.wr)})}),$.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;ie.isDocumentKey(s)||(s=s.child(""));const o=new ft(new ie(s),0);let l=new It(Se);return this.br.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.wr)),!0)},o),$.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){be(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return $.forEach(n.mutations,i=>{const s=new ft(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new ft(n,0),i=this.br.firstAfterOrEqual(r);return $.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,$.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class rb{constructor(e){this.Mr=e,this.docs=function(){return new qe(ie.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return $.resolve(r?r.document.mutableCopy():Vt.newInvalidDocument(n))}getEntries(e,n){let r=Cr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Vt.newInvalidDocument(i))}),$.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Cr();const o=n.path,l=new ie(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||Fk(Uk(d),r)<=0||(i.has(d.key)||lh(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return $.resolve(s)}getAllFromCollectionGroup(e,n,r,i){le()}Or(e,n){return $.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new ib(this)}getSize(e){return $.resolve(this.size)}}class ib extends XN{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),$.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
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
 */class sb{constructor(e){this.persistence=e,this.Nr=new Ao(n=>nm(n),rm),this.lastRemoteSnapshotVersion=ce.min(),this.highestTargetId=0,this.Lr=0,this.Br=new um,this.targetCount=0,this.kr=go.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),$.resolve()}getLastRemoteSnapshotVersion(e){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),$.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new go(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,$.resolve()}updateTargetData(e,n){return this.Kn(n),$.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,$.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),$.waitFor(s).next(()=>i)}getTargetCount(e){return $.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return $.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),$.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),$.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),$.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return $.resolve(r)}containsKey(e,n){return $.resolve(this.Br.containsKey(n))}}/**
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
 */class ob{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Jp(0),this.Kr=!1,this.Kr=!0,this.$r=new tb,this.referenceDelegate=e(this),this.Ur=new sb(this),this.indexManager=new GN,this.remoteDocumentCache=function(i){return new rb(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new qN(n),this.Gr=new ZN(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new eb,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new nb(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){Z("MemoryPersistence","Starting transaction:",e);const i=new ab(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return $.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class ab extends Bk{constructor(e){super(),this.currentSequenceNumber=e}}class cm{constructor(e){this.persistence=e,this.Jr=new um,this.Yr=null}static Zr(e){return new cm(e)}get Xr(){if(this.Yr)return this.Yr;throw le()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),$.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),$.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),$.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.Xr,r=>{const i=ie.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,ce.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return $.or([()=>$.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
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
 */class hm{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=me(),i=me();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new hm(e,n.fromCache,r,i)}}/**
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
 */class lb{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class ub{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return cP()?8:zk(Ft())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new lb;return this.Xi(e,n,o).next(l=>{if(s.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(oa()<=ye.DEBUG&&Z("QueryEngine","SDK will not create cache indexes for query:",Ps(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),$.resolve()):(oa()<=ye.DEBUG&&Z("QueryEngine","Query:",Ps(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(oa()<=ye.DEBUG&&Z("QueryEngine","The SDK decides to create cache indexes for query:",Ps(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Jn(n))):$.resolve())}Yi(e,n){if(_v(n))return $.resolve(null);let r=Jn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Df(n,null,"F"),r=Jn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=me(...s);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.ts(n,l);return this.ns(n,c,o,u.readTime)?this.Yi(e,Df(n,null,"F")):this.rs(e,c,n,u)}))})))}Zi(e,n,r,i){return _v(n)||i.isEqual(ce.min())?$.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?$.resolve(null):(oa()<=ye.DEBUG&&Z("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ps(n)),this.rs(e,o,n,Vk(i,-1)).next(l=>l))})}ts(e,n){let r=new It(HE(e));return n.forEach((i,s)=>{lh(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return oa()<=ye.DEBUG&&Z("QueryEngine","Using full collection scan to execute query:",Ps(n)),this.Ji.getDocumentsMatchingQuery(e,n,di.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class cb{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new qe(Se),this._s=new Ao(s=>nm(s),rm),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new JN(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function hb(t,e,n,r){return new cb(t,e,n,r)}async function dT(t,e){const n=he(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=me();for(const c of i){o.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of s){l.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:l}))})})}function db(t,e){const n=he(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,c,d){const p=c.batch,g=p.keys();let v=$.resolve();return g.forEach(A=>{v=v.next(()=>d.getEntry(u,A)).next(C=>{const D=c.docVersions.get(A);be(D!==null),C.version.compareTo(D)<0&&(p.applyToRemoteDocument(C,c),C.isValidDocument()&&(C.setReadTime(c.commitVersion),d.addEntry(C)))})}),v.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=me();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function fT(t){const e=he(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function fb(t,e){const n=he(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const l=[];e.targetChanges.forEach((d,p)=>{const g=i.get(p);if(!g)return;l.push(n.Ur.removeMatchingKeys(s,d.removedDocuments,p).next(()=>n.Ur.addMatchingKeys(s,d.addedDocuments,p)));let v=g.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?v=v.withResumeToken(Rt.EMPTY_BYTE_STRING,ce.min()).withLastLimboFreeSnapshotVersion(ce.min()):d.resumeToken.approximateByteSize()>0&&(v=v.withResumeToken(d.resumeToken,r)),i=i.insert(p,v),function(C,D,T){return C.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-C.snapshotVersion.toMicroseconds()>=3e8?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(g,v,d)&&l.push(n.Ur.updateTargetData(s,v))});let u=Cr(),c=me();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),l.push(pb(s,o,e.documentUpdates).next(d=>{u=d.Ps,c=d.Is})),!r.isEqual(ce.min())){const d=n.Ur.getLastRemoteSnapshotVersion(s).next(p=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(d)}return $.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.os=i,s))}function pb(t,e,n){let r=me(),i=me();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Cr();return n.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(ce.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):Z("LocalStore","Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function mb(t,e){const n=he(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function gb(t,e){const n=he(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,$.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new Yr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Uf(t,e,n){const r=he(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!El(o))throw o;Z("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function Nv(t,e,n){const r=he(t);let i=ce.min(),s=me();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,d){const p=he(u),g=p._s.get(d);return g!==void 0?$.resolve(p.os.get(g)):p.Ur.getTargetData(c,d)}(r,o,Jn(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:ce.min(),n?s:me())).next(l=>(yb(r,aN(e),l),{documents:l,Ts:s})))}function yb(t,e,n){let r=t.us.get(e)||ce.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class bv{constructor(){this.activeTargetIds=fN()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class vb{constructor(){this.so=new bv,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new bv,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class _b{_o(e){}shutdown(){}}/**
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
 */class xv{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){Z("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){Z("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let yu=null;function pd(){return yu===null?yu=function(){return 268435456+Math.round(2147483648*Math.random())}():yu++,"0x"+yu.toString(16)}/**
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
 */const wb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class Eb{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const Ot="WebChannelConnection";class Tb extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const l=pd(),u=this.xo(n,r.toUriEncodedString());Z("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,s,o),this.No(n,u,c,i).then(d=>(Z("RestConnection",`Received RPC '${n}' ${l}: `,d),d),d=>{throw ho("RestConnection",`RPC '${n}' ${l} failed with error: `,d,"url: ",u,"request:",i),d})}Lo(n,r,i,s,o,l){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+So}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=wb[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=pd();return new Promise((o,l)=>{const u=new AE;u.setWithCredentials(!0),u.listenOnce(PE.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Lu.NO_ERROR:const d=u.getResponseJson();Z(Ot,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(d)),o(d);break;case Lu.TIMEOUT:Z(Ot,`RPC '${e}' ${s} timed out`),l(new re(H.DEADLINE_EXCEEDED,"Request time out"));break;case Lu.HTTP_ERROR:const p=u.getStatus();if(Z(Ot,`RPC '${e}' ${s} failed with status:`,p,"response text:",u.getResponseText()),p>0){let g=u.getResponseJson();Array.isArray(g)&&(g=g[0]);const v=g==null?void 0:g.error;if(v&&v.status&&v.message){const A=function(D){const T=D.toLowerCase().replace(/_/g,"-");return Object.values(H).indexOf(T)>=0?T:H.UNKNOWN}(v.status);l(new re(A,v.message))}else l(new re(H.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new re(H.UNAVAILABLE,"Connection failed."));break;default:le()}}finally{Z(Ot,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);Z(Ot,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Bo(e,n,r){const i=pd(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=bE(),l=NE(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.xmlHttpFactory=new CE({})),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const d=s.join("");Z(Ot,`Creating RPC '${e}' stream ${i}: ${d}`,u);const p=o.createWebChannel(d,u);let g=!1,v=!1;const A=new Eb({Io:D=>{v?Z(Ot,`Not sending because RPC '${e}' stream ${i} is closed:`,D):(g||(Z(Ot,`Opening RPC '${e}' stream ${i} transport.`),p.open(),g=!0),Z(Ot,`RPC '${e}' stream ${i} sending:`,D),p.send(D))},To:()=>p.close()}),C=(D,T,_)=>{D.listen(T,S=>{try{_(S)}catch(O){setTimeout(()=>{throw O},0)}})};return C(p,ma.EventType.OPEN,()=>{v||(Z(Ot,`RPC '${e}' stream ${i} transport opened.`),A.yo())}),C(p,ma.EventType.CLOSE,()=>{v||(v=!0,Z(Ot,`RPC '${e}' stream ${i} transport closed`),A.So())}),C(p,ma.EventType.ERROR,D=>{v||(v=!0,ho(Ot,`RPC '${e}' stream ${i} transport errored:`,D),A.So(new re(H.UNAVAILABLE,"The operation could not be completed")))}),C(p,ma.EventType.MESSAGE,D=>{var T;if(!v){const _=D.data[0];be(!!_);const S=_,O=S.error||((T=S[0])===null||T===void 0?void 0:T.error);if(O){Z(Ot,`RPC '${e}' stream ${i} received error:`,O);const z=O.status;let F=function(w){const E=nt[w];if(E!==void 0)return nT(E)}(z),I=O.message;F===void 0&&(F=H.INTERNAL,I="Unknown error status: "+z+" with message "+O.message),v=!0,A.So(new re(F,I)),p.close()}else Z(Ot,`RPC '${e}' stream ${i} received:`,_),A.bo(_)}}),C(l,kE.STAT_EVENT,D=>{D.stat===Pf.PROXY?Z(Ot,`RPC '${e}' stream ${i} detected buffering proxy`):D.stat===Pf.NOPROXY&&Z(Ot,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{A.wo()},0),A}}function md(){return typeof document<"u"?document:null}/**
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
 */function dh(t){return new xN(t,!0)}/**
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
 */class pT{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&Z("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class mT{constructor(e,n,r,i,s,o,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new pT(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===H.RESOURCE_EXHAUSTED?(Ar(n.toString()),Ar("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===H.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new re(H.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return Z("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(Z("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Ib extends mT{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=LN(this.serializer,e),r=function(s){if(!("targetChange"in s))return ce.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?ce.min():o.readTime?Zn(o.readTime):ce.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Vf(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=xf(u)?{documents:UN(s,u)}:{query:FN(s,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=sT(s,o.resumeToken);const c=Of(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(ce.min())>0){l.readTime=Ic(s,o.snapshotVersion.toTimestamp());const c=Of(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=BN(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Vf(this.serializer),n.removeTarget=e,this.a_(n)}}class Sb extends mT{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return be(!!e.streamToken),this.lastStreamToken=e.streamToken,be(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){be(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=VN(e.writeResults,e.commitTime),r=Zn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Vf(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>MN(this.serializer,r))};this.a_(n)}}/**
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
 */class Rb extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new re(H.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,Lf(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new re(H.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,Lf(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new re(H.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class Ab{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Ar(n),this.D_=!1):Z("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class Cb{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{ps(this)&&(Z("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=he(u);c.L_.add(4),await Sl(c),c.q_.set("Unknown"),c.L_.delete(4),await fh(c)}(this))})}),this.q_=new Ab(r,i)}}async function fh(t){if(ps(t))for(const e of t.B_)await e(!0)}async function Sl(t){for(const e of t.B_)await e(!1)}function gT(t,e){const n=he(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),mm(n)?pm(n):Co(n).r_()&&fm(n,e))}function dm(t,e){const n=he(t),r=Co(n);n.N_.delete(e),r.r_()&&yT(n,e),n.N_.size===0&&(r.r_()?r.o_():ps(n)&&n.q_.set("Unknown"))}function fm(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ce.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Co(t).A_(e)}function yT(t,e){t.Q_.xe(e),Co(t).R_(e)}function pm(t){t.Q_=new PN({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Co(t).start(),t.q_.v_()}function mm(t){return ps(t)&&!Co(t).n_()&&t.N_.size>0}function ps(t){return he(t).L_.size===0}function vT(t){t.Q_=void 0}async function Pb(t){t.q_.set("Online")}async function kb(t){t.N_.forEach((e,n)=>{fm(t,e)})}async function Nb(t,e){vT(t),mm(t)?(t.q_.M_(e),pm(t)):t.q_.set("Unknown")}async function bb(t,e,n){if(t.q_.set("Online"),e instanceof iT&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.N_.delete(l),i.Q_.removeTarget(l))}(t,e)}catch(r){Z("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Sc(t,r)}else if(e instanceof Uu?t.Q_.Ke(e):e instanceof rT?t.Q_.He(e):t.Q_.We(e),!n.isEqual(ce.min()))try{const r=await fT(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Q_.rt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const d=s.N_.get(c);d&&s.N_.set(c,d.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const d=s.N_.get(u);if(!d)return;s.N_.set(u,d.withResumeToken(Rt.EMPTY_BYTE_STRING,d.snapshotVersion)),yT(s,u);const p=new Yr(d.target,u,c,d.sequenceNumber);fm(s,p)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){Z("RemoteStore","Failed to raise snapshot:",r),await Sc(t,r)}}async function Sc(t,e,n){if(!El(e))throw e;t.L_.add(1),await Sl(t),t.q_.set("Offline"),n||(n=()=>fT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Z("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await fh(t)})}function _T(t,e){return e().catch(n=>Sc(t,n,e))}async function ph(t){const e=he(t),n=pi(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;xb(e);)try{const i=await mb(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,Db(e,i)}catch(i){await Sc(e,i)}wT(e)&&ET(e)}function xb(t){return ps(t)&&t.O_.length<10}function Db(t,e){t.O_.push(e);const n=pi(t);n.r_()&&n.V_&&n.m_(e.mutations)}function wT(t){return ps(t)&&!pi(t).n_()&&t.O_.length>0}function ET(t){pi(t).start()}async function Ob(t){pi(t).p_()}async function Lb(t){const e=pi(t);for(const n of t.O_)e.m_(n.mutations)}async function Mb(t,e,n){const r=t.O_.shift(),i=om.from(r,e,n);await _T(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await ph(t)}async function Vb(t,e){e&&pi(t).V_&&await async function(r,i){if(function(o){return RN(o)&&o!==H.ABORTED}(i.code)){const s=r.O_.shift();pi(r).s_(),await _T(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await ph(r)}}(t,e),wT(t)&&ET(t)}async function Dv(t,e){const n=he(t);n.asyncQueue.verifyOperationInProgress(),Z("RemoteStore","RemoteStore received new credentials");const r=ps(n);n.L_.add(3),await Sl(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await fh(n)}async function Ub(t,e){const n=he(t);e?(n.L_.delete(2),await fh(n)):e||(n.L_.add(2),await Sl(n),n.q_.set("Unknown"))}function Co(t){return t.K_||(t.K_=function(n,r,i){const s=he(n);return s.w_(),new Ib(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:Pb.bind(null,t),Ro:kb.bind(null,t),mo:Nb.bind(null,t),d_:bb.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),mm(t)?pm(t):t.q_.set("Unknown")):(await t.K_.stop(),vT(t))})),t.K_}function pi(t){return t.U_||(t.U_=function(n,r,i){const s=he(n);return s.w_(),new Sb(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:Ob.bind(null,t),mo:Vb.bind(null,t),f_:Lb.bind(null,t),g_:Mb.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await ph(t)):(await t.U_.stop(),t.O_.length>0&&(Z("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
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
 */class gm{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new li,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new gm(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new re(H.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ym(t,e){if(Ar("AsyncQueue",`${e}: ${t}`),El(t))return new re(H.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Zs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||ie.comparator(n.key,r.key):(n,r)=>ie.comparator(n.key,r.key),this.keyedMap=ga(),this.sortedSet=new qe(this.comparator)}static emptySet(e){return new Zs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Zs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Zs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Ov{constructor(){this.W_=new qe(ie.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):le():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class yo{constructor(e,n,r,i,s,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new yo(e,n,Zs.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ah(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class Fb{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class jb{constructor(){this.queries=Lv(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=he(n),s=i.queries;i.queries=Lv(),s.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new re(H.ABORTED,"Firestore shutting down"))}}function Lv(){return new Ao(t=>$E(t),ah)}async function Bb(t,e){const n=he(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new Fb,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=ym(o,`Initialization of query '${Ps(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&vm(n)}async function zb(t,e){const n=he(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function $b(t,e){const n=he(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.j_)l.X_(i)&&(r=!0);o.z_=i}}r&&vm(n)}function Hb(t,e,n){const r=he(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function vm(t){t.Y_.forEach(e=>{e.next()})}var Ff,Mv;(Mv=Ff||(Ff={})).ea="default",Mv.Cache="cache";class Wb{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new yo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=yo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Ff.Cache}}/**
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
 */class TT{constructor(e){this.key=e}}class IT{constructor(e){this.key=e}}class qb{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=me(),this.mutatedKeys=me(),this.Aa=HE(e),this.Ra=new Zs(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new Ov,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,p)=>{const g=i.get(d),v=lh(this.query,p)?p:null,A=!!g&&this.mutatedKeys.has(g.key),C=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let D=!1;g&&v?g.data.isEqual(v.data)?A!==C&&(r.track({type:3,doc:v}),D=!0):this.ga(g,v)||(r.track({type:2,doc:v}),D=!0,(u&&this.Aa(v,u)>0||c&&this.Aa(v,c)<0)&&(l=!0)):!g&&v?(r.track({type:0,doc:v}),D=!0):g&&!v&&(r.track({type:1,doc:g}),D=!0,(u||c)&&(l=!0)),D&&(v?(o=o.add(v),s=C?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{Ra:o,fa:r,ns:l,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((d,p)=>function(v,A){const C=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return le()}};return C(v)-C(A)}(d.type,p.type)||this.Aa(d.doc,p.doc)),this.pa(r),i=i!=null&&i;const l=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,c=u!==this.Ea;return this.Ea=u,o.length!==0||c?{snapshot:new yo(this.query,e.Ra,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Ov,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=me(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new IT(r))}),this.da.forEach(r=>{e.has(r)||n.push(new TT(r))}),n}ba(e){this.Ta=e.Ts,this.da=me();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return yo.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class Kb{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class Gb{constructor(e){this.key=e,this.va=!1}}class Qb{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Ao(l=>$E(l),ah),this.Ma=new Map,this.xa=new Set,this.Oa=new qe(ie.comparator),this.Na=new Map,this.La=new um,this.Ba={},this.ka=new Map,this.qa=go.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function Xb(t,e,n=!0){const r=kT(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await ST(r,e,n,!0),i}async function Yb(t,e){const n=kT(t);await ST(n,e,!0,!1)}async function ST(t,e,n,r){const i=await gb(t.localStore,Jn(e)),s=i.targetId,o=n?t.sharedClientState.addLocalQueryTarget(s):"not-current";let l;return r&&(l=await Jb(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&gT(t.remoteStore,i),l}async function Jb(t,e,n,r,i){t.Ka=(p,g,v)=>async function(C,D,T,_){let S=D.view.ma(T);S.ns&&(S=await Nv(C.localStore,D.query,!1).then(({documents:I})=>D.view.ma(I,S)));const O=_&&_.targetChanges.get(D.targetId),z=_&&_.targetMismatches.get(D.targetId)!=null,F=D.view.applyChanges(S,C.isPrimaryClient,O,z);return Uv(C,D.targetId,F.wa),F.snapshot}(t,p,g,v);const s=await Nv(t.localStore,e,!0),o=new qb(e,s.Ts),l=o.ma(s.documents),u=Il.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(l,t.isPrimaryClient,u);Uv(t,n,c.wa);const d=new Kb(e,n,o);return t.Fa.set(e,d),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),c.snapshot}async function Zb(t,e,n){const r=he(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!ah(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Uf(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&dm(r.remoteStore,i.targetId),jf(r,i.targetId)}).catch(wl)):(jf(r,i.targetId),await Uf(r.localStore,i.targetId,!0))}async function ex(t,e){const n=he(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),dm(n.remoteStore,r.targetId))}async function tx(t,e,n){const r=lx(t);try{const i=await function(o,l){const u=he(o),c=ht.now(),d=l.reduce((v,A)=>v.add(A.key),me());let p,g;return u.persistence.runTransaction("Locally write mutations","readwrite",v=>{let A=Cr(),C=me();return u.cs.getEntries(v,d).next(D=>{A=D,A.forEach((T,_)=>{_.isValidDocument()||(C=C.add(T))})}).next(()=>u.localDocuments.getOverlayedDocuments(v,A)).next(D=>{p=D;const T=[];for(const _ of l){const S=wN(_,p.get(_.key).overlayedDocument);S!=null&&T.push(new fs(_.key,S,ME(S.value.mapValue),_r.exists(!0)))}return u.mutationQueue.addMutationBatch(v,c,T,l)}).next(D=>{g=D;const T=D.applyToLocalDocumentSet(p,C);return u.documentOverlayCache.saveOverlays(v,D.batchId,T)})}).then(()=>({batchId:g.batchId,changes:qE(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.Ba[o.currentUser.toKey()];c||(c=new qe(Se)),c=c.insert(l,u),o.Ba[o.currentUser.toKey()]=c}(r,i.batchId,n),await Rl(r,i.changes),await ph(r.remoteStore)}catch(i){const s=ym(i,"Failed to persist write");n.reject(s)}}async function RT(t,e){const n=he(t);try{const r=await fb(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(be(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?be(o.va):i.removedDocuments.size>0&&(be(o.va),o.va=!1))}),await Rl(n,r,e)}catch(r){await wl(r)}}function Vv(t,e,n){const r=he(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const l=o.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=he(o);u.onlineState=l;let c=!1;u.queries.forEach((d,p)=>{for(const g of p.j_)g.Z_(l)&&(c=!0)}),c&&vm(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function nx(t,e,n){const r=he(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new qe(ie.comparator);o=o.insert(s,Vt.newNoDocument(s,ce.min()));const l=me().add(s),u=new hh(ce.min(),new Map,new qe(Se),o,l);await RT(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),_m(r)}else await Uf(r.localStore,e,!1).then(()=>jf(r,e,n)).catch(wl)}async function rx(t,e){const n=he(t),r=e.batch.batchId;try{const i=await db(n.localStore,e);CT(n,r,null),AT(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Rl(n,i)}catch(i){await wl(i)}}async function ix(t,e,n){const r=he(t);try{const i=await function(o,l){const u=he(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return u.mutationQueue.lookupMutationBatch(c,l).next(p=>(be(p!==null),d=p.keys(),u.mutationQueue.removeMutationBatch(c,p))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,d,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>u.localDocuments.getDocuments(c,d))})}(r.localStore,e);CT(r,e,n),AT(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Rl(r,i)}catch(i){await wl(i)}}function AT(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function CT(t,e,n){const r=he(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function jf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||PT(t,r)})}function PT(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(dm(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),_m(t))}function Uv(t,e,n){for(const r of n)r instanceof TT?(t.La.addReference(r.key,e),sx(t,r)):r instanceof IT?(Z("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||PT(t,r.key)):le()}function sx(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(Z("SyncEngine","New document in limbo: "+n),t.xa.add(r),_m(t))}function _m(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new ie(Xe.fromString(e)),r=t.qa.next();t.Na.set(r,new Gb(n)),t.Oa=t.Oa.insert(n,r),gT(t.remoteStore,new Yr(Jn(im(n.path)),r,"TargetPurposeLimboResolution",Jp.oe))}}async function Rl(t,e,n){const r=he(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(c=>{var d;if((c||n)&&r.isPrimaryClient){const p=c?!c.fromCache:(d=n==null?void 0:n.targetChanges.get(u.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(c){i.push(c);const p=hm.Wi(u.targetId,c);s.push(p)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,c){const d=he(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>$.forEach(c,g=>$.forEach(g.$i,v=>d.persistence.referenceDelegate.addReference(p,g.targetId,v)).next(()=>$.forEach(g.Ui,v=>d.persistence.referenceDelegate.removeReference(p,g.targetId,v)))))}catch(p){if(!El(p))throw p;Z("LocalStore","Failed to update sequence numbers: "+p)}for(const p of c){const g=p.targetId;if(!p.fromCache){const v=d.os.get(g),A=v.snapshotVersion,C=v.withLastLimboFreeSnapshotVersion(A);d.os=d.os.insert(g,C)}}}(r.localStore,s))}async function ox(t,e){const n=he(t);if(!n.currentUser.isEqual(e)){Z("SyncEngine","User change. New user:",e.toKey());const r=await dT(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new re(H.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Rl(n,r.hs)}}function ax(t,e){const n=he(t),r=n.Na.get(e);if(r&&r.va)return me().add(r.key);{let i=me();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const l=n.Fa.get(o);i=i.unionWith(l.view.Va)}return i}}function kT(t){const e=he(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=RT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ax.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=nx.bind(null,e),e.Ca.d_=$b.bind(null,e.eventManager),e.Ca.$a=Hb.bind(null,e.eventManager),e}function lx(t){const e=he(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=rx.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ix.bind(null,e),e}class Fv{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=dh(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return hb(this.persistence,new ub,e.initialUser,this.serializer)}createPersistence(e){return new ob(cm.Zr,this.serializer)}createSharedClientState(e){return new vb}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class ux{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Vv(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=ox.bind(null,this.syncEngine),await Ub(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new jb}()}createDatastore(e){const n=dh(e.databaseInfo.databaseId),r=function(s){return new Tb(s)}(e.databaseInfo);return function(s,o,l,u){return new Rb(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new Cb(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Vv(this.syncEngine,n,0),function(){return xv.D()?new xv:new _b}())}createSyncEngine(e,n){return function(i,s,o,l,u,c,d){const p=new Qb(i,s,o,l,u,c);return d&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=he(i);Z("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await Sl(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}/**
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
 */class cx{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ga(this.observer.next,e)}error(e){this.observer.error?this.Ga(this.observer.error,e):Ar("Uncaught Error in snapshot listener:",e.toString())}za(){this.muted=!0}Ga(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class hx{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Lt.UNAUTHENTICATED,this.clientId=DE.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{Z("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(Z("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new re(H.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new li;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=ym(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function gd(t,e){t.asyncQueue.verifyOperationInProgress(),Z("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await dT(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function jv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await fx(t);Z("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Dv(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Dv(e.remoteStore,i)),t._onlineComponents=e}function dx(t){return t.name==="FirebaseError"?t.code===H.FAILED_PRECONDITION||t.code===H.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function fx(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Z("FirestoreClient","Using user provided OfflineComponentProvider");try{await gd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!dx(n))throw n;ho("Error using user provided cache. Falling back to memory cache: "+n),await gd(t,new Fv)}}else Z("FirestoreClient","Using default OfflineComponentProvider"),await gd(t,new Fv);return t._offlineComponents}async function NT(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Z("FirestoreClient","Using user provided OnlineComponentProvider"),await jv(t,t._uninitializedComponentsProvider._online)):(Z("FirestoreClient","Using default OnlineComponentProvider"),await jv(t,new ux))),t._onlineComponents}function px(t){return NT(t).then(e=>e.syncEngine)}async function mx(t){const e=await NT(t),n=e.eventManager;return n.onListen=Xb.bind(null,e.syncEngine),n.onUnlisten=Zb.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=Yb.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=ex.bind(null,e.syncEngine),n}function gx(t,e,n={}){const r=new li;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const d=new cx({next:g=>{o.enqueueAndForget(()=>zb(s,p));const v=g.docs.has(l);!v&&g.fromCache?c.reject(new re(H.UNAVAILABLE,"Failed to get document because the client is offline.")):v&&g.fromCache&&u&&u.source==="server"?c.reject(new re(H.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(g)},error:g=>c.reject(g)}),p=new Wb(im(l.path),d,{includeMetadataChanges:!0,_a:!0});return Bb(s,p)}(await mx(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function bT(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Bv=new Map;/**
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
 */function yx(t,e,n){if(!n)throw new re(H.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function vx(t,e,n,r){if(e===!0&&r===!0)throw new re(H.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function zv(t){if(!ie.isDocumentKey(t))throw new re(H.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function wm(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":le()}function ll(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new re(H.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=wm(t);throw new re(H.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class $v{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new re(H.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new re(H.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}vx("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=bT((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new re(H.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new re(H.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new re(H.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Em{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new $v({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new re(H.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new re(H.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new $v(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Pk;switch(r.type){case"firstParty":return new xk(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new re(H.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Bv.get(n);r&&(Z("ComponentProvider","Removing Datastore"),Bv.delete(n),r.terminate())}(this),Promise.resolve()}}function _x(t,e,n,r={}){var i;const s=(t=ll(t,Em))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&ho("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=Lt.MOCK_USER;else{l=mE(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new re(H.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Lt(c)}t._authCredentials=new kk(new xE(l,u))}}/**
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
 */class Tm{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Tm(this.firestore,e,this._query)}}class In{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ul(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new In(this.firestore,e,this._key)}}class ul extends Tm{constructor(e,n,r){super(e,n,im(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new In(this.firestore,null,new ie(e))}withConverter(e){return new ul(this.firestore,e,this._path)}}function Rc(t,e,...n){if(t=dt(t),arguments.length===1&&(e=DE.newId()),yx("doc","path",e),t instanceof Em){const r=Xe.fromString(e,...n);return zv(r),new In(t,null,new ie(r))}{if(!(t instanceof In||t instanceof ul))throw new re(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Xe.fromString(e,...n));return zv(r),new In(t.firestore,t instanceof ul?t.converter:null,new ie(r))}}/**
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
 */class wx{constructor(){this.au=Promise.resolve(),this.uu=[],this.cu=!1,this.lu=[],this.hu=null,this.Pu=!1,this.Iu=!1,this.Tu=[],this.t_=new pT(this,"async_queue_retry"),this.Eu=()=>{const n=md();n&&Z("AsyncQueue","Visibility state changed to "+n.visibilityState),this.t_.jo()};const e=md();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Eu)}get isShuttingDown(){return this.cu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.du(),this.Au(e)}enterRestrictedMode(e){if(!this.cu){this.cu=!0,this.Iu=e||!1;const n=md();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Eu)}}enqueue(e){if(this.du(),this.cu)return new Promise(()=>{});const n=new li;return this.Au(()=>this.cu&&this.Iu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.uu.push(e),this.Ru()))}async Ru(){if(this.uu.length!==0){try{await this.uu[0](),this.uu.shift(),this.t_.reset()}catch(e){if(!El(e))throw e;Z("AsyncQueue","Operation failed with retryable error: "+e)}this.uu.length>0&&this.t_.Go(()=>this.Ru())}}Au(e){const n=this.au.then(()=>(this.Pu=!0,e().catch(r=>{this.hu=r,this.Pu=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Ar("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Pu=!1,r))));return this.au=n,n}enqueueAfterDelay(e,n,r){this.du(),this.Tu.indexOf(e)>-1&&(n=0);const i=gm.createAndSchedule(this,e,n,r,s=>this.Vu(s));return this.lu.push(i),i}du(){this.hu&&le()}verifyOperationInProgress(){}async mu(){let e;do e=this.au,await e;while(e!==this.au)}fu(e){for(const n of this.lu)if(n.timerId===e)return!0;return!1}gu(e){return this.mu().then(()=>{this.lu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.lu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.mu()})}pu(e){this.Tu.push(e)}Vu(e){const n=this.lu.indexOf(e);this.lu.splice(n,1)}}class Im extends Em{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new wx}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||DT(this),this._firestoreClient.terminate()}}function Ex(t,e){const n=typeof t=="object"?t:ih(),r=typeof t=="string"?t:"(default)",i=wi(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=dE("firestore");s&&_x(i,...s)}return i}function xT(t){return t._firestoreClient||DT(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function DT(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,c,d){return new Wk(l,u,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,bT(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new hx(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
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
 */class vo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new vo(Rt.fromBase64String(e))}catch(n){throw new re(H.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new vo(Rt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Sm{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new re(H.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Et(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class OT{constructor(e){this._methodName=e}}/**
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
 */class Rm{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new re(H.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new re(H.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Se(this._lat,e._lat)||Se(this._long,e._long)}}/**
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
 */class Am{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
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
 */const Tx=/^__.*__$/;class Ix{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new fs(e,this.data,this.fieldMask,n,this.fieldTransforms):new Tl(e,this.data,n,this.fieldTransforms)}}function LT(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw le()}}class Cm{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.yu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get wu(){return this.settings.wu}Su(e){return new Cm(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}bu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Su({path:r,Du:!1});return i.vu(e),i}Cu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Su({path:r,Du:!1});return i.yu(),i}Fu(e){return this.Su({path:void 0,Du:!0})}Mu(e){return Ac(e,this.settings.methodName,this.settings.xu||!1,this.path,this.settings.Ou)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}yu(){if(this.path)for(let e=0;e<this.path.length;e++)this.vu(this.path.get(e))}vu(e){if(e.length===0)throw this.Mu("Document fields must not be empty");if(LT(this.wu)&&Tx.test(e))throw this.Mu('Document fields cannot begin and end with "__"')}}class Sx{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||dh(e)}Nu(e,n,r,i=!1){return new Cm({wu:e,methodName:n,Ou:r,path:Et.emptyPath(),Du:!1,xu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Rx(t){const e=t._freezeSettings(),n=dh(t._databaseId);return new Sx(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Ax(t,e,n,r,i,s={}){const o=t.Nu(s.merge||s.mergeFields?2:0,e,n,i);FT("Data must be an object, but it was:",o,r);const l=VT(r,o);let u,c;if(s.merge)u=new Un(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const p of s.mergeFields){const g=Cx(e,p,n);if(!o.contains(g))throw new re(H.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);kx(d,g)||d.push(g)}u=new Un(d),c=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,c=o.fieldTransforms;return new Ix(new wn(l),u,c)}function MT(t,e){if(UT(t=dt(t)))return FT("Unsupported field value:",e,t),VT(t,e);if(t instanceof OT)return function(r,i){if(!LT(i.wu))throw i.Mu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Mu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Du&&e.wu!==4)throw e.Mu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=MT(l,i.Fu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=dt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return pN(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=ht.fromDate(r);return{timestampValue:Ic(i.serializer,s)}}if(r instanceof ht){const s=new ht(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ic(i.serializer,s)}}if(r instanceof Rm)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof vo)return{bytesValue:sT(i.serializer,r._byteString)};if(r instanceof In){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:lm(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Am)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Mu("VectorValues must only contain numeric values.");return sm(l.serializer,u)})}}}}}}(r,i);throw i.Mu(`Unsupported field value: ${wm(r)}`)}(t,e)}function VT(t,e){const n={};return OE(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ro(t,(r,i)=>{const s=MT(i,e.bu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function UT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ht||t instanceof Rm||t instanceof vo||t instanceof In||t instanceof OT||t instanceof Am)}function FT(t,e,n){if(!UT(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=wm(n);throw r==="an object"?e.Mu(t+" a custom object"):e.Mu(t+" "+r)}}function Cx(t,e,n){if((e=dt(e))instanceof Sm)return e._internalPath;if(typeof e=="string")return jT(t,e);throw Ac("Field path arguments must be of type string or ",t,!1,void 0,n)}const Px=new RegExp("[~\\*/\\[\\]]");function jT(t,e,n){if(e.search(Px)>=0)throw Ac(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Sm(...e.split("."))._internalPath}catch{throw Ac(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ac(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new re(H.INVALID_ARGUMENT,l+t+u)}function kx(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class BT{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new In(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Nx(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(zT("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Nx extends BT{data(){return super.data()}}function zT(t,e){return typeof e=="string"?jT(t,e):e instanceof Sm?e._internalPath:e._delegate._internalPath}class bx{convertValue(e,n="none"){switch(ts(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Je(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(es(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw le()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Ro(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Je(o.doubleValue));return new Am(s)}convertGeoPoint(e){return new Rm(Je(e.latitude),Je(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=em(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(rl(e));default:return null}}convertTimestamp(e){const n=fi(e);return new ht(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Xe.fromString(e);be(hT(r));const i=new il(r.get(1),r.get(3)),s=new ie(r.popFirst(5));return i.isEqual(n)||Ar(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function xx(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
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
 */class Dx{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class $T extends BT{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ox(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(zT("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ox extends $T{data(e={}){return super.data(e)}}/**
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
 */function HT(t){t=ll(t,In);const e=ll(t.firestore,Im);return gx(xT(e),t._key).then(n=>Vx(e,t,n))}class Lx extends bx{constructor(e){super(),this.firestore=e}convertBytes(e){return new vo(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new In(this.firestore,null,n)}}function WT(t,e,n){t=ll(t,In);const r=ll(t.firestore,Im),i=xx(t.converter,e);return Mx(r,[Ax(Rx(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,_r.none())])}function Mx(t,e){return function(r,i){const s=new li;return r.asyncQueue.enqueueAndForget(async()=>tx(await px(r),i,s)),s.promise}(xT(t),e)}function Vx(t,e,n){const r=n.docs.get(e._key),i=new Lx(t);return new $T(t,i,e._key,r,new Dx(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){So=i})(ds),zn(new An("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new Im(new Nk(r.getProvider("auth-internal")),new Ok(r.getProvider("app-check-internal")),function(c,d){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new re(H.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new il(c.options.projectId,d)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),en(uv,"4.7.1",e),en(uv,"4.7.1","esm2017")})();function Pm(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function qT(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ux=qT,KT=new hs("auth","Firebase",qT());/**
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
 */const Cc=new rh("@firebase/auth");function Fx(t,...e){Cc.logLevel<=ye.WARN&&Cc.warn(`Auth (${ds}): ${t}`,...e)}function Fu(t,...e){Cc.logLevel<=ye.ERROR&&Cc.error(`Auth (${ds}): ${t}`,...e)}/**
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
 */function $n(t,...e){throw km(t,...e)}function er(t,...e){return km(t,...e)}function GT(t,e,n){const r=Object.assign(Object.assign({},Ux()),{[e]:n});return new hs("auth","Firebase",r).create(e,{appName:t.name})}function ui(t){return GT(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function km(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return KT.create(t,...e)}function oe(t,e,...n){if(!t)throw km(e,...n)}function pr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Fu(e),new Error(e)}function Pr(t,e){t||pr(e)}/**
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
 */function Bf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function jx(){return Hv()==="http:"||Hv()==="https:"}function Hv(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Bx(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(jx()||gE()||"connection"in navigator)?navigator.onLine:!0}function zx(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Al{constructor(e,n){this.shortDelay=e,this.longDelay=n,Pr(n>e,"Short delay should be less than long delay!"),this.isMobile=oP()||lP()}get(){return Bx()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Nm(t,e){Pr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class QT{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;pr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;pr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;pr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const $x={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Hx=new Al(3e4,6e4);function ms(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ei(t,e,n,r,i={}){return XT(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=_l(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode),QT.fetch()(YT(t,t.config.apiHost,n,l),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},s))})}async function XT(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},$x),e);try{const i=new qx(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw vu(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw vu(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw vu(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw vu(t,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw GT(t,d,c);$n(t,d)}}catch(i){if(i instanceof Cn)throw i;$n(t,"network-request-failed",{message:String(i)})}}async function mh(t,e,n,r,i={}){const s=await Ei(t,e,n,r,i);return"mfaPendingCredential"in s&&$n(t,"multi-factor-auth-required",{_serverResponse:s}),s}function YT(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Nm(t.config,i):`${t.config.apiScheme}://${i}`}function Wx(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class qx{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(er(this.auth,"network-request-failed")),Hx.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function vu(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=er(t,e,r);return i.customData._tokenResponse=n,i}function Wv(t){return t!==void 0&&t.enterprise!==void 0}class Kx{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Wx(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Gx(t,e){return Ei(t,"GET","/v2/recaptchaConfig",ms(t,e))}/**
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
 */async function Qx(t,e){return Ei(t,"POST","/v1/accounts:delete",e)}async function JT(t,e){return Ei(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ba(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Xx(t,e=!1){const n=dt(t),r=await n.getIdToken(e),i=bm(r);oe(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ba(yd(i.auth_time)),issuedAtTime:ba(yd(i.iat)),expirationTime:ba(yd(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function yd(t){return Number(t)*1e3}function bm(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Fu("JWT malformed, contained fewer than 3 sections"),null;try{const i=cE(n);return i?JSON.parse(i):(Fu("Failed to decode base64 JWT payload"),null)}catch(i){return Fu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function qv(t){const e=bm(t);return oe(e,"internal-error"),oe(typeof e.exp<"u","internal-error"),oe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function cl(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Cn&&Yx(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Yx({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Jx{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class zf{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ba(this.lastLoginAt),this.creationTime=ba(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Pc(t){var e;const n=t.auth,r=await t.getIdToken(),i=await cl(t,JT(n,{idToken:r}));oe(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?ZT(s.providerUserInfo):[],l=eD(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),d=u?c:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new zf(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function Zx(t){const e=dt(t);await Pc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function eD(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function ZT(t){return t.map(e=>{var{providerId:n}=e,r=Pm(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function tD(t,e){const n=await XT(t,{},async()=>{const r=_l({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=YT(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",QT.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function nD(t,e){return Ei(t,"POST","/v2/accounts:revokeToken",ms(t,e))}/**
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
 */class eo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){oe(e.idToken,"internal-error"),oe(typeof e.idToken<"u","internal-error"),oe(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):qv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){oe(e.length!==0,"internal-error");const n=qv(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(oe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await tD(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new eo;return r&&(oe(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(oe(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(oe(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new eo,this.toJSON())}_performRefresh(){return pr("not implemented")}}/**
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
 */function Vr(t,e){oe(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class mr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Pm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Jx(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new zf(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await cl(this,this.stsTokenManager.getToken(this.auth,e));return oe(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Xx(this,e)}reload(){return Zx(this)}_assign(e){this!==e&&(oe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new mr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){oe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Pc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(fr(this.auth.app))return Promise.reject(ui(this.auth));const e=await this.getIdToken();return await cl(this,Qx(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,c,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(i=n.email)!==null&&i!==void 0?i:void 0,v=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,A=(o=n.photoURL)!==null&&o!==void 0?o:void 0,C=(l=n.tenantId)!==null&&l!==void 0?l:void 0,D=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,T=(c=n.createdAt)!==null&&c!==void 0?c:void 0,_=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:S,emailVerified:O,isAnonymous:z,providerData:F,stsTokenManager:I}=n;oe(S&&I,e,"internal-error");const m=eo.fromJSON(this.name,I);oe(typeof S=="string",e,"internal-error"),Vr(p,e.name),Vr(g,e.name),oe(typeof O=="boolean",e,"internal-error"),oe(typeof z=="boolean",e,"internal-error"),Vr(v,e.name),Vr(A,e.name),Vr(C,e.name),Vr(D,e.name),Vr(T,e.name),Vr(_,e.name);const w=new mr({uid:S,auth:e,email:g,emailVerified:O,displayName:p,isAnonymous:z,photoURL:A,phoneNumber:v,tenantId:C,stsTokenManager:m,createdAt:T,lastLoginAt:_});return F&&Array.isArray(F)&&(w.providerData=F.map(E=>Object.assign({},E))),D&&(w._redirectEventId=D),w}static async _fromIdTokenResponse(e,n,r=!1){const i=new eo;i.updateFromServerResponse(n);const s=new mr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Pc(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];oe(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?ZT(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new eo;l.updateFromIdToken(r);const u=new mr({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new zf(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
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
 */const Kv=new Map;function gr(t){Pr(t instanceof Function,"Expected a class definition");let e=Kv.get(t);return e?(Pr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Kv.set(t,e),e)}/**
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
 */class eI{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}eI.type="NONE";const Gv=eI;/**
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
 */function ju(t,e,n){return`firebase:${t}:${e}:${n}`}class to{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ju(this.userKey,i.apiKey,s),this.fullPersistenceKey=ju("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?mr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new to(gr(Gv),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||gr(Gv);const o=ju(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const d=await c._get(o);if(d){const p=mr._fromJSON(e,d);c!==s&&(l=p),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new to(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new to(s,e,r))}}/**
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
 */function Qv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(iI(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(tI(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(oI(e))return"Blackberry";if(aI(e))return"Webos";if(nI(e))return"Safari";if((e.includes("chrome/")||rI(e))&&!e.includes("edge/"))return"Chrome";if(sI(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function tI(t=Ft()){return/firefox\//i.test(t)}function nI(t=Ft()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function rI(t=Ft()){return/crios\//i.test(t)}function iI(t=Ft()){return/iemobile/i.test(t)}function sI(t=Ft()){return/android/i.test(t)}function oI(t=Ft()){return/blackberry/i.test(t)}function aI(t=Ft()){return/webos/i.test(t)}function xm(t=Ft()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function rD(t=Ft()){var e;return xm(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function iD(){return uP()&&document.documentMode===10}function lI(t=Ft()){return xm(t)||sI(t)||aI(t)||oI(t)||/windows phone/i.test(t)||iI(t)}/**
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
 */function uI(t,e=[]){let n;switch(t){case"Browser":n=Qv(Ft());break;case"Worker":n=`${Qv(Ft())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ds}/${r}`}/**
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
 */class sD{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function oD(t,e={}){return Ei(t,"GET","/v2/passwordPolicy",ms(t,e))}/**
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
 */const aD=6;class lD{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:aD,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class uD{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Xv(this),this.idTokenSubscription=new Xv(this),this.beforeStateQueue=new sD(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=KT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=gr(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await to.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await JT(this,{idToken:e}),r=await mr._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(fr(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return oe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Pc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=zx()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(fr(this.app))return Promise.reject(ui(this));const n=e?dt(e):null;return n&&oe(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&oe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return fr(this.app)?Promise.reject(ui(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return fr(this.app)?Promise.reject(ui(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(gr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await oD(this),n=new lD(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new hs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await nD(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&gr(e)||this._popupRedirectResolver;oe(n,this,"argument-error"),this.redirectPersistenceManager=await to.create(this,[gr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(oe(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return oe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=uI(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Fx(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Po(t){return dt(t)}class Xv{constructor(e){this.auth=e,this.observer=null,this.addObserver=gP(n=>this.observer=n)}get next(){return oe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let gh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function cD(t){gh=t}function cI(t){return gh.loadJS(t)}function hD(){return gh.recaptchaEnterpriseScript}function dD(){return gh.gapiScript}function fD(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const pD="recaptcha-enterprise",mD="NO_RECAPTCHA";class gD{constructor(e){this.type=pD,this.auth=Po(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{Gx(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new Kx(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;Wv(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(mD)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&Wv(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=hD();u.length!==0&&(u+=l),cI(u).then(()=>{i(l,s,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function Yv(t,e,n,r=!1){const i=new gD(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Jv(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Yv(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Yv(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
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
 */function yD(t,e){const n=wi(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(el(s,e??{}))return i;$n(i,"already-initialized")}return n.initialize({options:e})}function vD(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(gr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function _D(t,e,n){const r=Po(t);oe(r._canInitEmulator,r,"emulator-config-failed"),oe(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=hI(e),{host:o,port:l}=wD(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),ED()}function hI(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function wD(t){const e=hI(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Zv(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Zv(o)}}}function Zv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function ED(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Dm{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return pr("not implemented")}_getIdTokenResponse(e){return pr("not implemented")}_linkToIdToken(e,n){return pr("not implemented")}_getReauthenticationResolver(e){return pr("not implemented")}}async function TD(t,e){return Ei(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function ID(t,e){return mh(t,"POST","/v1/accounts:signInWithPassword",ms(t,e))}/**
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
 */async function SD(t,e){return mh(t,"POST","/v1/accounts:signInWithEmailLink",ms(t,e))}async function RD(t,e){return mh(t,"POST","/v1/accounts:signInWithEmailLink",ms(t,e))}/**
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
 */class hl extends Dm{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new hl(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new hl(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Jv(e,n,"signInWithPassword",ID);case"emailLink":return SD(e,{email:this._email,oobCode:this._password});default:$n(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Jv(e,r,"signUpPassword",TD);case"emailLink":return RD(e,{idToken:n,email:this._email,oobCode:this._password});default:$n(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function no(t,e){return mh(t,"POST","/v1/accounts:signInWithIdp",ms(t,e))}/**
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
 */const AD="http://localhost";class ns extends Dm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ns(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):$n("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Pm(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new ns(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return no(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,no(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,no(e,n)}buildRequest(){const e={requestUri:AD,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=_l(n)}return e}}/**
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
 */function CD(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function PD(t){const e=fa(pa(t)).link,n=e?fa(pa(e)).deep_link_id:null,r=fa(pa(t)).deep_link_id;return(r?fa(pa(r)).link:null)||r||n||e||t}class Om{constructor(e){var n,r,i,s,o,l;const u=fa(pa(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,d=(r=u.oobCode)!==null&&r!==void 0?r:null,p=CD((i=u.mode)!==null&&i!==void 0?i:null);oe(c&&d&&p,"argument-error"),this.apiKey=c,this.operation=p,this.code=d,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=PD(e);try{return new Om(n)}catch{return null}}}/**
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
 */class ko{constructor(){this.providerId=ko.PROVIDER_ID}static credential(e,n){return hl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Om.parseLink(n);return oe(r,"argument-error"),hl._fromEmailAndCode(e,r.code,r.tenantId)}}ko.PROVIDER_ID="password";ko.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ko.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class dI{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Cl extends dI{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class $r extends Cl{constructor(){super("facebook.com")}static credential(e){return ns._fromParams({providerId:$r.PROVIDER_ID,signInMethod:$r.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $r.credentialFromTaggedObject(e)}static credentialFromError(e){return $r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $r.credential(e.oauthAccessToken)}catch{return null}}}$r.FACEBOOK_SIGN_IN_METHOD="facebook.com";$r.PROVIDER_ID="facebook.com";/**
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
 */class Hr extends Cl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ns._fromParams({providerId:Hr.PROVIDER_ID,signInMethod:Hr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Hr.credentialFromTaggedObject(e)}static credentialFromError(e){return Hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Hr.credential(n,r)}catch{return null}}}Hr.GOOGLE_SIGN_IN_METHOD="google.com";Hr.PROVIDER_ID="google.com";/**
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
 */class Wr extends Cl{constructor(){super("github.com")}static credential(e){return ns._fromParams({providerId:Wr.PROVIDER_ID,signInMethod:Wr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Wr.credentialFromTaggedObject(e)}static credentialFromError(e){return Wr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Wr.credential(e.oauthAccessToken)}catch{return null}}}Wr.GITHUB_SIGN_IN_METHOD="github.com";Wr.PROVIDER_ID="github.com";/**
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
 */class qr extends Cl{constructor(){super("twitter.com")}static credential(e,n){return ns._fromParams({providerId:qr.PROVIDER_ID,signInMethod:qr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return qr.credentialFromTaggedObject(e)}static credentialFromError(e){return qr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return qr.credential(n,r)}catch{return null}}}qr.TWITTER_SIGN_IN_METHOD="twitter.com";qr.PROVIDER_ID="twitter.com";/**
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
 */class _o{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await mr._fromIdTokenResponse(e,r,i),o=e_(r);return new _o({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=e_(r);return new _o({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function e_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class kc extends Cn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,kc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new kc(e,n,r,i)}}function fI(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?kc._fromErrorAndOperation(t,s,e,r):s})}async function kD(t,e,n=!1){const r=await cl(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return _o._forOperation(t,"link",r)}/**
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
 */async function ND(t,e,n=!1){const{auth:r}=t;if(fr(r.app))return Promise.reject(ui(r));const i="reauthenticate";try{const s=await cl(t,fI(r,i,e,t),n);oe(s.idToken,r,"internal-error");const o=bm(s.idToken);oe(o,r,"internal-error");const{sub:l}=o;return oe(t.uid===l,r,"user-mismatch"),_o._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&$n(r,"user-mismatch"),s}}/**
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
 */async function pI(t,e,n=!1){if(fr(t.app))return Promise.reject(ui(t));const r="signIn",i=await fI(t,r,e),s=await _o._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function bD(t,e){return pI(Po(t),e)}/**
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
 */async function xD(t){const e=Po(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function DD(t,e,n){return fr(t.app)?Promise.reject(ui(t)):bD(dt(t),ko.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&xD(t),r})}function OD(t,e,n,r){return dt(t).onIdTokenChanged(e,n,r)}function LD(t,e,n){return dt(t).beforeAuthStateChanged(e,n)}function MD(t,e,n,r){return dt(t).onAuthStateChanged(e,n,r)}function VD(t){return dt(t).signOut()}const Nc="__sak";/**
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
 */class mI{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Nc,"1"),this.storage.removeItem(Nc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const UD=1e3,FD=10;class gI extends mI{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=lI(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);iD()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,FD):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},UD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}gI.type="LOCAL";const jD=gI;/**
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
 */class yI extends mI{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}yI.type="SESSION";const vI=yI;/**
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
 */function BD(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class yh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new yh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),u=await BD(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}yh.receivers=[];/**
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
 */function Lm(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class zD{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const c=Lm("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const g=p;if(g.data.eventId===c)switch(g.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(g.data.response);break;default:clearTimeout(d),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function tr(){return window}function $D(t){tr().location.href=t}/**
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
 */function _I(){return typeof tr().WorkerGlobalScope<"u"&&typeof tr().importScripts=="function"}async function HD(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function WD(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function qD(){return _I()?self:null}/**
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
 */const wI="firebaseLocalStorageDb",KD=1,bc="firebaseLocalStorage",EI="fbase_key";class Pl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function vh(t,e){return t.transaction([bc],e?"readwrite":"readonly").objectStore(bc)}function GD(){const t=indexedDB.deleteDatabase(wI);return new Pl(t).toPromise()}function $f(){const t=indexedDB.open(wI,KD);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(bc,{keyPath:EI})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(bc)?e(r):(r.close(),await GD(),e(await $f()))})})}async function t_(t,e,n){const r=vh(t,!0).put({[EI]:e,value:n});return new Pl(r).toPromise()}async function QD(t,e){const n=vh(t,!1).get(e),r=await new Pl(n).toPromise();return r===void 0?null:r.value}function n_(t,e){const n=vh(t,!0).delete(e);return new Pl(n).toPromise()}const XD=800,YD=3;class TI{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await $f(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>YD)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return _I()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=yh._getInstance(qD()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await HD(),!this.activeServiceWorker)return;this.sender=new zD(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||WD()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await $f();return await t_(e,Nc,"1"),await n_(e,Nc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>t_(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>QD(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>n_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=vh(i,!1).getAll();return new Pl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),XD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}TI.type="LOCAL";const JD=TI;new Al(3e4,6e4);/**
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
 */function ZD(t,e){return e?gr(e):(oe(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Mm extends Dm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return no(e,this._buildIdpRequest())}_linkToIdToken(e,n){return no(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return no(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function eO(t){return pI(t.auth,new Mm(t),t.bypassAuthState)}function tO(t){const{auth:e,user:n}=t;return oe(n,e,"internal-error"),ND(n,new Mm(t),t.bypassAuthState)}async function nO(t){const{auth:e,user:n}=t;return oe(n,e,"internal-error"),kD(n,new Mm(t),t.bypassAuthState)}/**
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
 */class II{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return eO;case"linkViaPopup":case"linkViaRedirect":return nO;case"reauthViaPopup":case"reauthViaRedirect":return tO;default:$n(this.auth,"internal-error")}}resolve(e){Pr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Pr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const rO=new Al(2e3,1e4);class Ws extends II{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ws.currentPopupAction&&Ws.currentPopupAction.cancel(),Ws.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return oe(e,this.auth,"internal-error"),e}async onExecution(){Pr(this.filter.length===1,"Popup operations only handle one event");const e=Lm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(er(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(er(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ws.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(er(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,rO.get())};e()}}Ws.currentPopupAction=null;/**
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
 */const iO="pendingRedirect",Bu=new Map;class sO extends II{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Bu.get(this.auth._key());if(!e){try{const r=await oO(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Bu.set(this.auth._key(),e)}return this.bypassAuthState||Bu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function oO(t,e){const n=uO(e),r=lO(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function aO(t,e){Bu.set(t._key(),e)}function lO(t){return gr(t._redirectPersistence)}function uO(t){return ju(iO,t.config.apiKey,t.name)}async function cO(t,e,n=!1){if(fr(t.app))return Promise.reject(ui(t));const r=Po(t),i=ZD(r,e),o=await new sO(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const hO=10*60*1e3;class dO{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!fO(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!SI(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(er(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=hO&&this.cachedEventUids.clear(),this.cachedEventUids.has(r_(e))}saveEventToCache(e){this.cachedEventUids.add(r_(e)),this.lastProcessedEventTime=Date.now()}}function r_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function SI({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function fO(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return SI(t);default:return!1}}/**
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
 */async function pO(t,e={}){return Ei(t,"GET","/v1/projects",e)}/**
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
 */const mO=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,gO=/^https?/;async function yO(t){if(t.config.emulator)return;const{authorizedDomains:e}=await pO(t);for(const n of e)try{if(vO(n))return}catch{}$n(t,"unauthorized-domain")}function vO(t){const e=Bf(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!gO.test(n))return!1;if(mO.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const _O=new Al(3e4,6e4);function i_(){const t=tr().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function wO(t){return new Promise((e,n)=>{var r,i,s;function o(){i_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{i_(),n(er(t,"network-request-failed"))},timeout:_O.get()})}if(!((i=(r=tr().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=tr().gapi)===null||s===void 0)&&s.load)o();else{const l=fD("iframefcb");return tr()[l]=()=>{gapi.load?o():n(er(t,"network-request-failed"))},cI(`${dD()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw zu=null,e})}let zu=null;function EO(t){return zu=zu||wO(t),zu}/**
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
 */const TO=new Al(5e3,15e3),IO="__/auth/iframe",SO="emulator/auth/iframe",RO={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},AO=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function CO(t){const e=t.config;oe(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Nm(e,SO):`https://${t.config.authDomain}/${IO}`,r={apiKey:e.apiKey,appName:t.name,v:ds},i=AO.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${_l(r).slice(1)}`}async function PO(t){const e=await EO(t),n=tr().gapi;return oe(n,t,"internal-error"),e.open({where:document.body,url:CO(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:RO,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=er(t,"network-request-failed"),l=tr().setTimeout(()=>{s(o)},TO.get());function u(){tr().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const kO={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},NO=500,bO=600,xO="_blank",DO="http://localhost";class s_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function OO(t,e,n,r=NO,i=bO){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},kO),{width:r.toString(),height:i.toString(),top:s,left:o}),c=Ft().toLowerCase();n&&(l=rI(c)?xO:n),tI(c)&&(e=e||DO,u.scrollbars="yes");const d=Object.entries(u).reduce((g,[v,A])=>`${g}${v}=${A},`,"");if(rD(c)&&l!=="_self")return LO(e||"",l),new s_(null);const p=window.open(e||"",l,d);oe(p,t,"popup-blocked");try{p.focus()}catch{}return new s_(p)}function LO(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const MO="__/auth/handler",VO="emulator/auth/handler",UO=encodeURIComponent("fac");async function o_(t,e,n,r,i,s){oe(t.config.authDomain,t,"auth-domain-config-required"),oe(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ds,eventId:i};if(e instanceof dI){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",mP(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof Cl){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const u=await t._getAppCheckToken(),c=u?`#${UO}=${encodeURIComponent(u)}`:"";return`${FO(t)}?${_l(l).slice(1)}${c}`}function FO({config:t}){return t.emulator?Nm(t,VO):`https://${t.authDomain}/${MO}`}/**
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
 */const vd="webStorageSupport";class jO{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=vI,this._completeRedirectFn=cO,this._overrideRedirectResult=aO}async _openPopup(e,n,r,i){var s;Pr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await o_(e,n,r,Bf(),i);return OO(e,o,Lm())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await o_(e,n,r,Bf(),i);return $D(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Pr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await PO(e),r=new dO(e);return n.register("authEvent",i=>(oe(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(vd,{type:vd},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[vd];o!==void 0&&n(!!o),$n(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=yO(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return lI()||nI()||xm()}}const BO=jO;var a_="@firebase/auth",l_="1.7.8";/**
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
 */class zO{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){oe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function $O(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function HO(t){zn(new An("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;oe(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:uI(t)},c=new uD(r,i,s,u);return vD(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),zn(new An("auth-internal",e=>{const n=Po(e.getProvider("auth").getImmediate());return(r=>new zO(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),en(a_,l_,$O(t)),en(a_,l_,"esm2017")}/**
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
 */const WO=5*60,qO=pE("authIdTokenMaxAge")||WO;let u_=null;const KO=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>qO)return;const i=n==null?void 0:n.token;u_!==i&&(u_=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function GO(t=ih()){const e=wi(t,"auth");if(e.isInitialized())return e.getImmediate();const n=yD(t,{popupRedirectResolver:BO,persistence:[JD,jD,vI]}),r=pE("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=KO(s.toString());LD(n,o,()=>o(n.currentUser)),OD(n,l=>o(l))}}const i=hE("auth");return i&&_D(n,`http://${i}`),n}function QO(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}cD({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=er("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",QO().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});HO("Browser");var XO="firebase",YO="10.13.1";/**
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
 */en(XO,YO,"app");const RI="@firebase/installations",Vm="0.6.8";/**
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
 */const AI=1e4,CI=`w:${Vm}`,PI="FIS_v2",JO="https://firebaseinstallations.googleapis.com/v1",ZO=60*60*1e3,eL="installations",tL="Installations";/**
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
 */const nL={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},rs=new hs(eL,tL,nL);function kI(t){return t instanceof Cn&&t.code.includes("request-failed")}/**
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
 */function NI({projectId:t}){return`${JO}/projects/${t}/installations`}function bI(t){return{token:t.token,requestStatus:2,expiresIn:iL(t.expiresIn),creationTime:Date.now()}}async function xI(t,e){const r=(await e.json()).error;return rs.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function DI({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function rL(t,{refreshToken:e}){const n=DI(t);return n.append("Authorization",sL(e)),n}async function OI(t){const e=await t();return e.status>=500&&e.status<600?t():e}function iL(t){return Number(t.replace("s","000"))}function sL(t){return`${PI} ${t}`}/**
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
 */async function oL({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=NI(t),i=DI(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:PI,appId:t.appId,sdkVersion:CI},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await OI(()=>fetch(r,l));if(u.ok){const c=await u.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:bI(c.authToken)}}else throw await xI("Create Installation",u)}/**
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
 */function LI(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function aL(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const lL=/^[cdef][\w-]{21}$/,Hf="";function uL(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=cL(t);return lL.test(n)?n:Hf}catch{return Hf}}function cL(t){return aL(t).substr(0,22)}/**
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
 */function _h(t){return`${t.appName}!${t.appId}`}/**
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
 */const MI=new Map;function VI(t,e){const n=_h(t);UI(n,e),hL(n,e)}function UI(t,e){const n=MI.get(t);if(n)for(const r of n)r(e)}function hL(t,e){const n=dL();n&&n.postMessage({key:t,fid:e}),fL()}let zi=null;function dL(){return!zi&&"BroadcastChannel"in self&&(zi=new BroadcastChannel("[Firebase] FID Change"),zi.onmessage=t=>{UI(t.data.key,t.data.fid)}),zi}function fL(){MI.size===0&&zi&&(zi.close(),zi=null)}/**
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
 */const pL="firebase-installations-database",mL=1,is="firebase-installations-store";let _d=null;function Um(){return _d||(_d=EE(pL,mL,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(is)}}})),_d}async function xc(t,e){const n=_h(t),i=(await Um()).transaction(is,"readwrite"),s=i.objectStore(is),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&VI(t,e.fid),e}async function FI(t){const e=_h(t),r=(await Um()).transaction(is,"readwrite");await r.objectStore(is).delete(e),await r.done}async function wh(t,e){const n=_h(t),i=(await Um()).transaction(is,"readwrite"),s=i.objectStore(is),o=await s.get(n),l=e(o);return l===void 0?await s.delete(n):await s.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&VI(t,l.fid),l}/**
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
 */async function Fm(t){let e;const n=await wh(t.appConfig,r=>{const i=gL(r),s=yL(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Hf?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function gL(t){const e=t||{fid:uL(),registrationStatus:0};return jI(e)}function yL(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(rs.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=vL(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:_L(t)}:{installationEntry:e}}async function vL(t,e){try{const n=await oL(t,e);return xc(t.appConfig,n)}catch(n){throw kI(n)&&n.customData.serverCode===409?await FI(t.appConfig):await xc(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function _L(t){let e=await c_(t.appConfig);for(;e.registrationStatus===1;)await LI(100),e=await c_(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Fm(t);return r||n}return e}function c_(t){return wh(t,e=>{if(!e)throw rs.create("installation-not-found");return jI(e)})}function jI(t){return wL(t)?{fid:t.fid,registrationStatus:0}:t}function wL(t){return t.registrationStatus===1&&t.registrationTime+AI<Date.now()}/**
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
 */async function EL({appConfig:t,heartbeatServiceProvider:e},n){const r=TL(t,n),i=rL(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:CI,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await OI(()=>fetch(r,l));if(u.ok){const c=await u.json();return bI(c)}else throw await xI("Generate Auth Token",u)}function TL(t,{fid:e}){return`${NI(t)}/${e}/authTokens:generate`}/**
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
 */async function jm(t,e=!1){let n;const r=await wh(t.appConfig,s=>{if(!BI(s))throw rs.create("not-registered");const o=s.authToken;if(!e&&RL(o))return s;if(o.requestStatus===1)return n=IL(t,e),s;{if(!navigator.onLine)throw rs.create("app-offline");const l=CL(s);return n=SL(t,l),l}});return n?await n:r.authToken}async function IL(t,e){let n=await h_(t.appConfig);for(;n.authToken.requestStatus===1;)await LI(100),n=await h_(t.appConfig);const r=n.authToken;return r.requestStatus===0?jm(t,e):r}function h_(t){return wh(t,e=>{if(!BI(e))throw rs.create("not-registered");const n=e.authToken;return PL(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function SL(t,e){try{const n=await EL(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await xc(t.appConfig,r),n}catch(n){if(kI(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await FI(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await xc(t.appConfig,r)}throw n}}function BI(t){return t!==void 0&&t.registrationStatus===2}function RL(t){return t.requestStatus===2&&!AL(t)}function AL(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+ZO}function CL(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function PL(t){return t.requestStatus===1&&t.requestTime+AI<Date.now()}/**
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
 */async function kL(t){const e=t,{installationEntry:n,registrationPromise:r}=await Fm(e);return r?r.catch(console.error):jm(e).catch(console.error),n.fid}/**
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
 */async function NL(t,e=!1){const n=t;return await bL(n),(await jm(n,e)).token}async function bL(t){const{registrationPromise:e}=await Fm(t);e&&await e}/**
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
 */function xL(t){if(!t||!t.options)throw wd("App Configuration");if(!t.name)throw wd("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw wd(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function wd(t){return rs.create("missing-app-config-values",{valueName:t})}/**
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
 */const zI="installations",DL="installations-internal",OL=t=>{const e=t.getProvider("app").getImmediate(),n=xL(e),r=wi(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},LL=t=>{const e=t.getProvider("app").getImmediate(),n=wi(e,zI).getImmediate();return{getId:()=>kL(n),getToken:i=>NL(n,i)}};function ML(){zn(new An(zI,OL,"PUBLIC")),zn(new An(DL,LL,"PRIVATE"))}ML();en(RI,Vm);en(RI,Vm,"esm2017");/**
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
 */const Dc="analytics",VL="firebase_id",UL="origin",FL=60*1e3,jL="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Bm="https://www.googletagmanager.com/gtag/js";/**
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
 */const tn=new rh("@firebase/analytics");/**
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
 */const BL={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},hn=new hs("analytics","Analytics",BL);/**
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
 */function zL(t){if(!t.startsWith(Bm)){const e=hn.create("invalid-gtag-resource",{gtagURL:t});return tn.warn(e.message),""}return t}function $I(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function $L(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function HL(t,e){const n=$L("firebase-js-sdk-policy",{createScriptURL:zL}),r=document.createElement("script"),i=`${Bm}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function WL(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function qL(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const u=(await $I(n)).find(c=>c.measurementId===i);u&&await e[u.appId]}}catch(l){tn.error(l)}t("config",i,s)}async function KL(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const l=await $I(n);for(const u of o){const c=l.find(p=>p.measurementId===u),d=c&&e[c.appId];if(d)s.push(d);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){tn.error(s)}}function GL(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[l,u]=o;await KL(t,e,n,l,u)}else if(s==="config"){const[l,u]=o;await qL(t,e,n,r,l,u)}else if(s==="consent"){const[l,u]=o;t("consent",l,u)}else if(s==="get"){const[l,u,c]=o;t("get",l,u,c)}else if(s==="set"){const[l]=o;t("set",l)}else t(s,...o)}catch(l){tn.error(l)}}return i}function QL(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=GL(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function XL(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Bm)&&n.src.includes(t))return n;return null}/**
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
 */const YL=30,JL=1e3;class ZL{constructor(e={},n=JL){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const HI=new ZL;function eM(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function tM(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:eM(r)},s=jL.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let l="";try{const u=await o.json();!((e=u.error)===null||e===void 0)&&e.message&&(l=u.error.message)}catch{}throw hn.create("config-fetch-failed",{httpStatus:o.status,responseMessage:l})}return o.json()}async function nM(t,e=HI,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw hn.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw hn.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new sM;return setTimeout(async()=>{l.abort()},FL),WI({appId:r,apiKey:i,measurementId:s},o,l,e)}async function WI(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=HI){var s;const{appId:o,measurementId:l}=t;try{await rM(r,e)}catch(u){if(l)return tn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:l};throw u}try{const u=await tM(t);return i.deleteThrottleMetadata(o),u}catch(u){const c=u;if(!iM(c)){if(i.deleteThrottleMetadata(o),l)return tn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:l};throw u}const d=Number((s=c==null?void 0:c.customData)===null||s===void 0?void 0:s.httpStatus)===503?Zy(n,i.intervalMillis,YL):Zy(n,i.intervalMillis),p={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return i.setThrottleMetadata(o,p),tn.debug(`Calling attemptFetch again in ${d} millis`),WI(t,p,r,i)}}function rM(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(hn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function iM(t){if(!(t instanceof Cn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class sM{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function oM(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
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
 */async function aM(){if(yE())try{await vE()}catch(t){return tn.warn(hn.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return tn.warn(hn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function lM(t,e,n,r,i,s,o){var l;const u=nM(t);u.then(v=>{n[v.measurementId]=v.appId,t.options.measurementId&&v.measurementId!==t.options.measurementId&&tn.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${v.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(v=>tn.error(v)),e.push(u);const c=aM().then(v=>{if(v)return r.getId()}),[d,p]=await Promise.all([u,c]);XL(s)||HL(s,d.measurementId),i("js",new Date);const g=(l=o==null?void 0:o.config)!==null&&l!==void 0?l:{};return g[UL]="firebase",g.update=!0,p!=null&&(g[VL]=p),i("config",d.measurementId,g),d.measurementId}/**
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
 */class uM{constructor(e){this.app=e}_delete(){return delete xa[this.app.options.appId],Promise.resolve()}}let xa={},d_=[];const f_={};let Ed="dataLayer",cM="gtag",p_,qI,m_=!1;function hM(){const t=[];if(gE()&&t.push("This is a browser extension environment."),hP()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=hn.create("invalid-analytics-context",{errorInfo:e});tn.warn(n.message)}}function dM(t,e,n){hM();const r=t.options.appId;if(!r)throw hn.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)tn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw hn.create("no-api-key");if(xa[r]!=null)throw hn.create("already-exists",{id:r});if(!m_){WL(Ed);const{wrappedGtag:s,gtagCore:o}=QL(xa,d_,f_,Ed,cM);qI=s,p_=o,m_=!0}return xa[r]=lM(t,d_,f_,e,p_,Ed,n),new uM(t)}function fM(t=ih()){t=dt(t);const e=wi(t,Dc);return e.isInitialized()?e.getImmediate():pM(t)}function pM(t,e={}){const n=wi(t,Dc);if(n.isInitialized()){const i=n.getImmediate();if(el(e,n.getOptions()))return i;throw hn.create("already-initialized")}return n.initialize({options:e})}function mM(t,e,n,r){t=dt(t),oM(qI,xa[t.app.options.appId],e,n,r).catch(i=>tn.error(i))}const g_="@firebase/analytics",y_="0.10.7";function gM(){zn(new An(Dc,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return dM(r,i,n)},"PUBLIC")),zn(new An("analytics-internal",t,"PRIVATE")),en(g_,y_),en(g_,y_,"esm2017");function t(e){try{const n=e.getProvider(Dc).getImmediate();return{logEvent:(r,i,s)=>mM(n,r,i,s)}}catch(n){throw hn.create("interop-component-reg-failed",{reason:n})}}}gM();/**
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
 */const KI="firebasestorage.googleapis.com",GI="storageBucket",yM=2*60*1e3,vM=10*60*1e3,_M=1e3;/**
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
 */class Ke extends Cn{constructor(e,n,r=0){super(Td(e),`Firebase Storage: ${n} (${Td(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ke.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Td(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Fe;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Fe||(Fe={}));function Td(t){return"storage/"+t}function zm(){const t="An unknown error occurred, please check the error payload for server response.";return new Ke(Fe.UNKNOWN,t)}function wM(t){return new Ke(Fe.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function EM(t){return new Ke(Fe.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function TM(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ke(Fe.UNAUTHENTICATED,t)}function IM(){return new Ke(Fe.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function SM(t){return new Ke(Fe.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function QI(){return new Ke(Fe.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function XI(){return new Ke(Fe.CANCELED,"User canceled the upload/download.")}function RM(t){return new Ke(Fe.INVALID_URL,"Invalid URL '"+t+"'.")}function AM(t){return new Ke(Fe.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function CM(){return new Ke(Fe.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+GI+"' property when initializing the app?")}function YI(){return new Ke(Fe.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function PM(){return new Ke(Fe.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function kM(){return new Ke(Fe.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function NM(t){return new Ke(Fe.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Wf(t){return new Ke(Fe.INVALID_ARGUMENT,t)}function JI(){return new Ke(Fe.APP_DELETED,"The Firebase app was deleted.")}function bM(t){return new Ke(Fe.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Da(t,e){return new Ke(Fe.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function aa(t){throw new Ke(Fe.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class un{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=un.makeFromUrl(e,n)}catch{return new un(e,"")}if(r.path==="")return r;throw AM(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(O){O.path.charAt(O.path.length-1)==="/"&&(O.path_=O.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function c(O){O.path_=decodeURIComponent(O.path)}const d="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",v=new RegExp(`^https?://${p}/${d}/b/${i}/o${g}`,"i"),A={bucket:1,path:3},C=n===KI?"(?:storage.googleapis.com|storage.cloud.google.com)":n,D="([^?#]*)",T=new RegExp(`^https?://${C}/${i}/${D}`,"i"),S=[{regex:l,indices:u,postModify:s},{regex:v,indices:A,postModify:c},{regex:T,indices:{bucket:1,path:2},postModify:c}];for(let O=0;O<S.length;O++){const z=S[O],F=z.regex.exec(e);if(F){const I=F[z.indices.bucket];let m=F[z.indices.path];m||(m=""),r=new un(I,m),z.postModify(r);break}}if(r==null)throw RM(e);return r}}class xM{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function DM(t,e,n){let r=1,i=null,s=null,o=!1,l=0;function u(){return l===2}let c=!1;function d(...D){c||(c=!0,e.apply(null,D))}function p(D){i=setTimeout(()=>{i=null,t(v,u())},D)}function g(){s&&clearTimeout(s)}function v(D,...T){if(c){g();return}if(D){g(),d.call(null,D,...T);return}if(u()||o){g(),d.call(null,D,...T);return}r<64&&(r*=2);let S;l===1?(l=2,S=0):S=(r+Math.random())*1e3,p(S)}let A=!1;function C(D){A||(A=!0,g(),!c&&(i!==null?(D||(l=2),clearTimeout(i),p(0)):D||(l=1)))}return p(0),s=setTimeout(()=>{o=!0,C(!0)},n),C}function OM(t){t(!1)}/**
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
 */function LM(t){return t!==void 0}function MM(t){return typeof t=="function"}function VM(t){return typeof t=="object"&&!Array.isArray(t)}function Eh(t){return typeof t=="string"||t instanceof String}function v_(t){return $m()&&t instanceof Blob}function $m(){return typeof Blob<"u"}function __(t,e,n,r){if(r<e)throw Wf(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Wf(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function kl(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function ZI(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var qi;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(qi||(qi={}));/**
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
 */function eS(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class UM{constructor(e,n,r,i,s,o,l,u,c,d,p,g=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=d,this.connectionFactory_=p,this.retry=g,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((v,A)=>{this.resolve_=v,this.reject_=A,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new _u(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=l=>{const u=l.loaded,c=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const l=s.getErrorCode()===qi.NO_ERROR,u=s.getStatus();if(!l||eS(u,this.additionalRetryCodes_)&&this.retry){const d=s.getErrorCode()===qi.ABORT;r(!1,new _u(!1,null,d));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new _u(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());LM(u)?s(u):s()}catch(u){o(u)}else if(l!==null){const u=zm();u.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,u)):o(u)}else if(i.canceled){const u=this.appDelete_?JI():XI();o(u)}else{const u=QI();o(u)}};this.canceled_?n(!1,new _u(!1,null,!0)):this.backoffId_=DM(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&OM(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class _u{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function FM(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function jM(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function BM(t,e){e&&(t["X-Firebase-GMPID"]=e)}function zM(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function $M(t,e,n,r,i,s,o=!0){const l=ZI(t.urlParams),u=t.url+l,c=Object.assign({},t.headers);return BM(c,e),FM(c,n),jM(c,s),zM(c,r),new UM(u,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function HM(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function WM(...t){const e=HM();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if($m())return new Blob(t);throw new Ke(Fe.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function qM(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function KM(t){if(typeof atob>"u")throw NM("base-64");return atob(t)}/**
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
 */const Qn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Id{constructor(e,n){this.data=e,this.contentType=n||null}}function GM(t,e){switch(t){case Qn.RAW:return new Id(tS(e));case Qn.BASE64:case Qn.BASE64URL:return new Id(nS(t,e));case Qn.DATA_URL:return new Id(XM(e),YM(e))}throw zm()}function tS(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function QM(t){let e;try{e=decodeURIComponent(t)}catch{throw Da(Qn.DATA_URL,"Malformed data URL.")}return tS(e)}function nS(t,e){switch(t){case Qn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw Da(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Qn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw Da(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=KM(e)}catch(i){throw i.message.includes("polyfill")?i:Da(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class rS{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Da(Qn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=JM(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function XM(t){const e=new rS(t);return e.base64?nS(Qn.BASE64,e.rest):QM(e.rest)}function YM(t){return new rS(t).contentType}function JM(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class Kr{constructor(e,n){let r=0,i="";v_(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(v_(this.data_)){const r=this.data_,i=qM(r,e,n);return i===null?null:new Kr(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Kr(r,!0)}}static getBlob(...e){if($m()){const n=e.map(r=>r instanceof Kr?r.data_:r);return new Kr(WM.apply(null,n))}else{const n=e.map(o=>Eh(o)?GM(Qn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)i[s++]=o[l]}),new Kr(i,!0)}}uploadData(){return this.data_}}/**
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
 */function iS(t){let e;try{e=JSON.parse(t)}catch{return null}return VM(e)?e:null}/**
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
 */function ZM(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function e2(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function sS(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function t2(t,e){return e}class Bt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||t2}}let wu=null;function n2(t){return!Eh(t)||t.length<2?t:sS(t)}function oS(){if(wu)return wu;const t=[];t.push(new Bt("bucket")),t.push(new Bt("generation")),t.push(new Bt("metageneration")),t.push(new Bt("name","fullPath",!0));function e(s,o){return n2(o)}const n=new Bt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new Bt("size");return i.xform=r,t.push(i),t.push(new Bt("timeCreated")),t.push(new Bt("updated")),t.push(new Bt("md5Hash",null,!0)),t.push(new Bt("cacheControl",null,!0)),t.push(new Bt("contentDisposition",null,!0)),t.push(new Bt("contentEncoding",null,!0)),t.push(new Bt("contentLanguage",null,!0)),t.push(new Bt("contentType",null,!0)),t.push(new Bt("metadata","customMetadata",!0)),wu=t,wu}function r2(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new un(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function i2(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return r2(r,t),r}function aS(t,e,n){const r=iS(e);return r===null?null:i2(t,r,n)}function s2(t,e,n,r){const i=iS(e);if(i===null||!Eh(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(c=>{const d=t.bucket,p=t.fullPath,g="/b/"+o(d)+"/o/"+o(p),v=kl(g,n,r),A=ZI({alt:"media",token:c});return v+A})[0]}function lS(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class No{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function wr(t){if(!t)throw zm()}function Hm(t,e){function n(r,i){const s=aS(t,i,e);return wr(s!==null),s}return n}function o2(t,e){function n(r,i){const s=aS(t,i,e);return wr(s!==null),s2(s,i,t.host,t._protocol)}return n}function Nl(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=IM():i=TM():n.getStatus()===402?i=EM(t.bucket):n.getStatus()===403?i=SM(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function uS(t){const e=Nl(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=wM(t.path)),s.serverResponse=i.serverResponse,s}return n}function a2(t,e,n){const r=e.fullServerUrl(),i=kl(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,l=new No(i,s,Hm(t,n),o);return l.errorHandler=uS(e),l}function l2(t,e,n){const r=e.fullServerUrl(),i=kl(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,l=new No(i,s,o2(t,n),o);return l.errorHandler=uS(e),l}function u2(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function cS(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=u2(null,e)),r}function c2(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let S="";for(let O=0;O<2;O++)S=S+Math.random().toString().slice(2);return S}const u=l();o["Content-Type"]="multipart/related; boundary="+u;const c=cS(e,r,i),d=lS(c,n),p="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+u+`\r
Content-Type: `+c.contentType+`\r
\r
`,g=`\r
--`+u+"--",v=Kr.getBlob(p,r,g);if(v===null)throw YI();const A={name:c.fullPath},C=kl(s,t.host,t._protocol),D="POST",T=t.maxUploadRetryTime,_=new No(C,D,Hm(t,n),T);return _.urlParams=A,_.headers=o,_.body=v.uploadData(),_.errorHandler=Nl(e),_}class Oc{constructor(e,n,r,i){this.current=e,this.total=n,this.finalized=!!r,this.metadata=i||null}}function Wm(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{wr(!1)}return wr(!!n&&(e||["active"]).indexOf(n)!==-1),n}function h2(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o=cS(e,r,i),l={name:o.fullPath},u=kl(s,t.host,t._protocol),c="POST",d={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},p=lS(o,n),g=t.maxUploadRetryTime;function v(C){Wm(C);let D;try{D=C.getResponseHeader("X-Goog-Upload-URL")}catch{wr(!1)}return wr(Eh(D)),D}const A=new No(u,c,v,g);return A.urlParams=l,A.headers=d,A.body=p,A.errorHandler=Nl(e),A}function d2(t,e,n,r){const i={"X-Goog-Upload-Command":"query"};function s(c){const d=Wm(c,["active","final"]);let p=null;try{p=c.getResponseHeader("X-Goog-Upload-Size-Received")}catch{wr(!1)}p||wr(!1);const g=Number(p);return wr(!isNaN(g)),new Oc(g,r.size(),d==="final")}const o="POST",l=t.maxUploadRetryTime,u=new No(n,o,s,l);return u.headers=i,u.errorHandler=Nl(e),u}const w_=256*1024;function f2(t,e,n,r,i,s,o,l){const u=new Oc(0,0);if(o?(u.current=o.current,u.total=o.total):(u.current=0,u.total=r.size()),r.size()!==u.total)throw PM();const c=u.total-u.current;let d=c;i>0&&(d=Math.min(d,i));const p=u.current,g=p+d;let v="";d===0?v="finalize":c===d?v="upload, finalize":v="upload";const A={"X-Goog-Upload-Command":v,"X-Goog-Upload-Offset":`${u.current}`},C=r.slice(p,g);if(C===null)throw YI();function D(O,z){const F=Wm(O,["active","final"]),I=u.current+d,m=r.size();let w;return F==="final"?w=Hm(e,s)(O,z):w=null,new Oc(I,m,F==="final",w)}const T="POST",_=e.maxUploadRetryTime,S=new No(n,T,D,_);return S.headers=A,S.body=C.uploadData(),S.progressCallback=l||null,S.errorHandler=Nl(t),S}const Gt={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Sd(t){switch(t){case"running":case"pausing":case"canceling":return Gt.RUNNING;case"paused":return Gt.PAUSED;case"success":return Gt.SUCCESS;case"canceled":return Gt.CANCELED;case"error":return Gt.ERROR;default:return Gt.ERROR}}/**
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
 */class p2{constructor(e,n,r){if(MM(e)||n!=null||r!=null)this.next=e,this.error=n??void 0,this.complete=r??void 0;else{const s=e;this.next=s.next,this.error=s.error,this.complete=s.complete}}}/**
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
 */function Cs(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class m2{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=qi.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=qi.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=qi.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw aa("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw aa("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw aa("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw aa("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw aa("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class g2 extends m2{initXhr(){this.xhr_.responseType="text"}}function bs(){return new g2}/**
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
 */class y2{constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=oS(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{if(this._request=void 0,this._chunkMultiplier=1,i._codeEquals(Fe.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const s=this.isExponentialBackoffExpired();if(eS(i.status,[]))if(s)i=QI();else{this.sleepTime=Math.max(this.sleepTime*2,_M),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=i,this._transition("error")}},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals(Fe.CANCELED)?this.completeTransitions_():(this._error=i,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((i,s)=>{this._resolve=i,this._reject=s,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=h2(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,bs,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._uploadUrl=s,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const i=d2(this._ref.storage,this._ref._location,e,this._blob),s=this._ref.storage._makeRequest(i,bs,n,r);this._request=s,s.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=w_*this._chunkMultiplier,n=new Oc(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((i,s)=>{let o;try{o=f2(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(u){this._error=u,this._transition("error");return}const l=this._ref.storage._makeRequest(o,bs,i,s,!1);this._request=l,l.getPromise().then(u=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(u.current),u.finalized?(this._metadata=u.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){w_*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=a2(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(r,bs,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=c2(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,bs,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=XI(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=Sd(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,i){const s=new p2(n||void 0,r||void 0,i||void 0);return this._addObserver(s),()=>{this._removeObserver(s)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(Sd(this._state)){case Gt.SUCCESS:Cs(this._resolve.bind(null,this.snapshot))();break;case Gt.CANCELED:case Gt.ERROR:const n=this._reject;Cs(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(Sd(this._state)){case Gt.RUNNING:case Gt.PAUSED:e.next&&Cs(e.next.bind(e,this.snapshot))();break;case Gt.SUCCESS:e.complete&&Cs(e.complete.bind(e))();break;case Gt.CANCELED:case Gt.ERROR:e.error&&Cs(e.error.bind(e,this._error))();break;default:e.error&&Cs(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
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
 */class ss{constructor(e,n){this._service=e,n instanceof un?this._location=n:this._location=un.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new ss(e,n)}get root(){const e=new un(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return sS(this._location.path)}get storage(){return this._service}get parent(){const e=ZM(this._location.path);if(e===null)return null;const n=new un(this._location.bucket,e);return new ss(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw bM(e)}}function v2(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new y2(t,new Kr(e),n)}function _2(t){t._throwIfRoot("getDownloadURL");const e=l2(t.storage,t._location,oS());return t.storage.makeRequestWithTokens(e,bs).then(n=>{if(n===null)throw kM();return n})}function w2(t,e){const n=e2(t._location.path,e),r=new un(t._location.bucket,n);return new ss(t.storage,r)}/**
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
 */function E2(t){return/^[A-Za-z]+:\/\//.test(t)}function T2(t,e){return new ss(t,e)}function hS(t,e){if(t instanceof qm){const n=t;if(n._bucket==null)throw CM();const r=new ss(n,n._bucket);return e!=null?hS(r,e):r}else return e!==void 0?w2(t,e):t}function I2(t,e){if(e&&E2(e)){if(t instanceof qm)return T2(t,e);throw Wf("To use ref(service, url), the first argument must be a Storage instance.")}else return hS(t,e)}function E_(t,e){const n=e==null?void 0:e[GI];return n==null?null:un.makeFromBucketSpec(n,t)}function S2(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:mE(i,t.app.options.projectId))}class qm{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=KI,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=yM,this._maxUploadRetryTime=vM,this._requests=new Set,i!=null?this._bucket=un.makeFromBucketSpec(i,this._host):this._bucket=E_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=un.makeFromBucketSpec(this._url,e):this._bucket=E_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){__("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){__("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ss(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new xM(JI());{const o=$M(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const T_="@firebase/storage",I_="0.13.1";/**
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
 */const dS="storage";function R2(t,e,n){return t=dt(t),v2(t,e,n)}function A2(t){return t=dt(t),_2(t)}function C2(t,e){return t=dt(t),I2(t,e)}function P2(t=ih(),e){t=dt(t);const r=wi(t,dS).getImmediate({identifier:e}),i=dE("storage");return i&&k2(r,...i),r}function k2(t,e,n,r={}){S2(t,e,n,r)}function N2(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new qm(n,r,i,e,ds)}function b2(){zn(new An(dS,N2,"PUBLIC").setMultipleInstances(!0)),en(T_,I_,""),en(T_,I_,"esm2017")}b2();const x2={apiKey:"AIzaSyAacfv7r3YWPHucqubBNNDAD-loLCSNmLs",authDomain:"digital-aura-f399b.firebaseapp.com",projectId:"digital-aura-f399b",storageBucket:"digital-aura-f399b.appspot.com",messagingSenderId:"921083620090",appId:"1:921083620090:web:d4fbcd31c23d1d38ca7743",measurementId:"G-QC8BNYKBNM"},Th=TE(x2);fM(Th);const Lc=Ex(Th),D2=P2(Th),Km=GO(Th),fS=U.createContext(),O2=({children:t})=>{const[e,n]=U.useState(!1);return console.log(e),U.useEffect(()=>{const r=MD(Km,i=>{n(!!i)});return()=>r()},[]),b.jsx(fS.Provider,{value:{isAuthenticated:e,setIsAuthenticated:n},children:t})},Gm=()=>U.useContext(fS);function L2({showNav:t,setShowNav:e,search:n,setSearch:r}){const{isAuthenticated:i,setIsAuthenticated:s}=Gm();function o(){e(!0)}function l(){e(!1)}return b.jsxs("div",{className:"header",children:[b.jsx("div",{className:"logo",children:b.jsxs(mt,{to:"/",children:[" ",b.jsx("img",{src:YC,alt:""})]})}),b.jsxs("div",{className:"navLinks",children:[b.jsx(mt,{to:"/",className:"navLink",children:"Home"}),b.jsx(mt,{to:"/categoryPage?category=programming",className:"navLink",children:"Programming"}),b.jsx(mt,{to:"/categoryPage?category=gadgets",className:"navLink",children:"Gadgets "}),b.jsx(mt,{to:"/categoryPage?category=trends",className:"navLink",children:"Trends"}),b.jsx(mt,{to:"/categoryPage?category=techNews",className:"navLink",children:"Tech News"})]}),b.jsxs("div",{className:"navIcons",style:{display:"flex",alignItems:"center"},children:[b.jsxs("div",{className:"navSearch",children:[b.jsx("i",{className:"fa-solid fa-magnifying-glass"}),b.jsx("input",{type:"text",placeholder:"Search...",value:n,onChange:u=>{r(u.target.value)}})]}),b.jsx(mt,{to:i?"/dashboard":"/login",className:"profileIcon",children:b.jsx("img",{src:"https://cdn-icons-png.flaticon.com/128/3135/3135715.png",alt:""})}),b.jsx("div",{className:"menuBar",children:t?b.jsx("i",{className:"fa-regular fa-circle-xmark ",onClick:l,style:{opacity:".8",display:t?"block":"none",cursor:"pointer"}}):b.jsx("i",{className:"fa-solid fa-bars ",onClick:o,style:{opacity:".8",display:t?"none":"inline-block",cursor:"pointer"}})})]})]})}function M2(){return b.jsx("div",{className:"footer",children:b.jsx("div",{children:b.jsx("p",{children:"© 2024: All Right Reserved "})})})}function V2({showNav:t,setShowNav:e}){return b.jsx("div",{className:"sideNav",style:{display:t?"block":"none"},children:b.jsxs("div",{className:"sideNavLinks",children:[b.jsx(mt,{to:"/",className:"sideNavLink",onClick:()=>{e(!1)},children:"Home"}),b.jsx(mt,{to:"/categoryPage?category=programming",className:"sideNavLink",onClick:()=>{e(!1)},children:"Programming"}),b.jsx(mt,{to:"/categoryPage?category=gadgets",className:"sideNavLink",onClick:()=>{e(!1)},children:"Gadgets "}),b.jsx(mt,{to:"/categoryPage?category=trends",className:"sideNavLink",onClick:()=>{e(!1)},children:"Trends"}),b.jsx(mt,{to:"/categoryPage?category=techNews",className:"sideNavLink",onClick:()=>{e(!1)},children:"Tech News"})]})})}function U2({search:t,setSearch:e,blogData:n}){let r=t.trim();const i=n.filter(o=>o.category.toLowerCase().includes(r.toLowerCase())||o.title.toLowerCase().includes(r.toLowerCase()));console.log(i);function s(){e("")}return b.jsx("div",{className:"searchContainer",style:{display:r==""?"none":"flex"},children:b.jsx("div",{className:"searchTab",style:{paddingBottom:"10px"},children:i.map(o=>b.jsx(mt,{to:`/detail?id=${o.id}`,className:"searchLink",onClick:s,children:o.title},o.id))})})}function F2(){const[t,e]=U.useState([]),[n,r]=U.useState(!1),[i,s]=U.useState("");return console.log(i),U.useEffect(()=>{(async()=>{const l=Rc(Lc,"blogData","blogData"),u=await HT(l);if(u.exists()){const c=u.data().blogData||[];e(c)}else console.log("No such document!")})()},[]),b.jsxs(b.Fragment,{children:[b.jsx(L2,{showNav:n,setShowNav:r,search:i,setSearch:s}),b.jsx(V2,{showNav:n,setShowNav:r}),b.jsx(U2,{search:i,setSearch:s,blogData:t}),b.jsx(PC,{context:{blogData:t,setBlogData:e,search:i,setSearch:s}}),b.jsx(M2,{})]})}function j2({data:t}){return b.jsxs(mt,{to:`/detail?id=${t.id}`,className:"mainCard",children:[b.jsx("div",{className:"mainCardImg",children:b.jsx("img",{src:t.imageUrl,alt:""})}),b.jsxs("div",{className:"mainCardContent",children:[b.jsx("div",{className:"category",children:b.jsx("p",{children:t.category})}),b.jsx("div",{className:"title",children:b.jsx("p",{children:t.title})}),b.jsxs("div",{className:"publishDetail",children:[b.jsxs("p",{children:[" ",b.jsx("i",{className:"fa-solid fa-user"}),"Jazab"]}),b.jsxs("p",{children:[b.jsx("i",{className:"fa-regular fa-calendar-days"}),"17 July"]})]}),b.jsx("div",{className:"mainCardText",children:b.jsx("p",{children:"Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet ..."})})]})]})}function Ih(){const{pathname:t}=cs();return U.useEffect(()=>{window.scrollTo(0,0)},[t]),null}function B2({data:t}){return b.jsxs(mt,{to:`/detail?id=${t.id}`,className:"mainCard",children:[b.jsx("div",{className:"mainCardImg",children:b.jsx("img",{src:t.imageUrl,alt:""})}),b.jsx("div",{className:"TrendCardContent",children:b.jsx("div",{className:"TrendCardTitle",children:b.jsxs("p",{children:[t.title.split(" ").slice(0,7).join(" "),"..."]})})}),b.jsx(Ih,{})]})}function pS({data:t}){const e=(n,r)=>{const i=document.createElement("div");return i.innerHTML=n,(i.textContent||i.innerText||"").split(" ").slice(0,r).join(" ")+"..."};return b.jsxs(mt,{to:`/detail?id=${t.id}`,className:"blogCard",children:[b.jsx("div",{className:"blogImg",children:b.jsx("img",{src:t.imageUrl,alt:""})}),b.jsxs("div",{className:"blogCartContent",children:[b.jsx("div",{className:"cardCategory",children:b.jsx("p",{children:t.category})}),b.jsx("div",{className:"cardTitle",children:b.jsx("p",{children:t.title})}),b.jsx("div",{className:"cardText",children:b.jsx("p",{children:e(t.content,18)})})]})]})}var mS={},os={};Object.defineProperty(os,"__esModule",{value:!0});os.cssValue=os.parseLengthAndUnit=void 0;var z2={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function gS(t){if(typeof t=="number")return{value:t,unit:"px"};var e,n=(t.match(/^[0-9.]*/)||"").toString();n.includes(".")?e=parseFloat(n):e=parseInt(n,10);var r=(t.match(/[^0-9]*$/)||"").toString();return z2[r]?{value:e,unit:r}:(console.warn("React Spinners: ".concat(t," is not a valid css value. Defaulting to ").concat(e,"px.")),{value:e,unit:"px"})}os.parseLengthAndUnit=gS;function $2(t){var e=gS(t);return"".concat(e.value).concat(e.unit)}os.cssValue=$2;var bl={};Object.defineProperty(bl,"__esModule",{value:!0});bl.createAnimation=void 0;var H2=function(t,e,n){var r="react-spinners-".concat(t,"-").concat(n);if(typeof window>"u"||!window.document)return r;var i=document.createElement("style");document.head.appendChild(i);var s=i.sheet,o=`
    @keyframes `.concat(r,` {
      `).concat(e,`
    }
  `);return s&&s.insertRule(o,0),r};bl.createAnimation=H2;var Mc=st&&st.__assign||function(){return Mc=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},Mc.apply(this,arguments)},W2=st&&st.__createBinding||(Object.create?function(t,e,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(e,n);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[n]}}),Object.defineProperty(t,r,i)}:function(t,e,n,r){r===void 0&&(r=n),t[r]=e[n]}),q2=st&&st.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),K2=st&&st.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var n in t)n!=="default"&&Object.prototype.hasOwnProperty.call(t,n)&&W2(e,t,n);return q2(e,t),e},G2=st&&st.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n};Object.defineProperty(mS,"__esModule",{value:!0});var Eu=K2(U),Rd=os,Q2=bl,X2=(0,Q2.createAnimation)("BeatLoader","50% {transform: scale(0.75);opacity: 0.2} 100% {transform: scale(1);opacity: 1}","beat");function Y2(t){var e=t.loading,n=e===void 0?!0:e,r=t.color,i=r===void 0?"#000000":r,s=t.speedMultiplier,o=s===void 0?1:s,l=t.cssOverride,u=l===void 0?{}:l,c=t.size,d=c===void 0?15:c,p=t.margin,g=p===void 0?2:p,v=G2(t,["loading","color","speedMultiplier","cssOverride","size","margin"]),A=Mc({display:"inherit"},u),C=function(D){return{display:"inline-block",backgroundColor:i,width:(0,Rd.cssValue)(d),height:(0,Rd.cssValue)(d),margin:(0,Rd.cssValue)(g),borderRadius:"100%",animation:"".concat(X2," ").concat(.7/o,"s ").concat(D%2?"0s":"".concat(.35/o,"s")," infinite linear"),animationFillMode:"both"}};return n?Eu.createElement("span",Mc({style:A},v),Eu.createElement("span",{style:C(1)}),Eu.createElement("span",{style:C(2)}),Eu.createElement("span",{style:C(3)})):null}var J2=mS.default=Y2;function Z2(){const{blogData:t,setBlogData:e}=vl(),n=t.slice(-3),r=t.slice(1,4),i=t.slice(1,2);return t.length===0?b.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},children:b.jsx(J2,{color:"#214252",size:30})}):b.jsxs("div",{className:"home",children:[b.jsxs("div",{className:"mainSection",children:[b.jsx("div",{className:"mainCard",children:i.map((s,o)=>b.jsx(j2,{data:s},o))}),b.jsxs("div",{className:"TrendingBlog",children:[b.jsx("p",{className:"trendingTitle",children:"Trending Blogs"}),r.map((s,o)=>b.jsx(B2,{data:s},o))]})]}),b.jsxs("div",{className:"recentBlogs",children:[b.jsx("h1",{children:"Recent Post"}),b.jsx("div",{className:"recentBlogBox",children:n.map((s,o)=>b.jsx(pS,{data:s},o))})]}),b.jsx(Ih,{})]})}function eV(){const{blogData:t,setBlogData:e}=vl(),n=cs(),i=new URLSearchParams(n.search).get("id"),s=t.filter(o=>o.id==i);return s.length==0?b.jsx("div",{children:b.jsx("p",{children:"Loading..."})}):b.jsxs("div",{className:"detail",children:[b.jsxs("div",{className:"detailBox",children:[b.jsx("div",{className:"detailImg",children:b.jsx("img",{src:s[0].imageUrl,alt:""})}),b.jsxs("div",{className:"detailContent",children:[b.jsx("div",{className:"detailTitle",children:b.jsx("p",{children:"Running macOS and Windows 10 on the Same Computer"})}),b.jsx("div",{className:"detailCategory",children:b.jsx("p",{children:"Tech News"})}),b.jsx("div",{className:"detailText",children:b.jsx("div",{dangerouslySetInnerHTML:{__html:s.length>0?s[0].content:""}})})]})]}),b.jsx(Ih,{})]})}function tV(){const{blogData:t,setBlogData:e}=vl(),n=cs(),i=new URLSearchParams(n.search).get("category"),s=t.filter(o=>o.category==i);return console.log(s),t.length===0?b.jsx("div",{children:b.jsx("p",{children:"Loading..."})}):b.jsxs("div",{className:"categoryPage",children:[b.jsx("h1",{style:{textTransform:"capitalize"},children:i=="techNews"?"Tech News":i}),b.jsx("div",{className:"cardContainer",children:s.map((o,l)=>b.jsx(pS,{data:o},l))})]})}var yS={exports:{}},nV="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",rV=nV,iV=rV;function vS(){}function _S(){}_S.resetWarningCache=vS;var sV=function(){function t(r,i,s,o,l,u){if(u!==iV){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:_S,resetWarningCache:vS};return n.PropTypes=n,n};yS.exports=sV();var j=yS.exports,qf=function(){return qf=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},qf.apply(this,arguments)},wS={onActivate:j.func,onAddUndo:j.func,onBeforeAddUndo:j.func,onBeforeExecCommand:j.func,onBeforeGetContent:j.func,onBeforeRenderUI:j.func,onBeforeSetContent:j.func,onBeforePaste:j.func,onBlur:j.func,onChange:j.func,onClearUndos:j.func,onClick:j.func,onContextMenu:j.func,onCommentChange:j.func,onCompositionEnd:j.func,onCompositionStart:j.func,onCompositionUpdate:j.func,onCopy:j.func,onCut:j.func,onDblclick:j.func,onDeactivate:j.func,onDirty:j.func,onDrag:j.func,onDragDrop:j.func,onDragEnd:j.func,onDragGesture:j.func,onDragOver:j.func,onDrop:j.func,onExecCommand:j.func,onFocus:j.func,onFocusIn:j.func,onFocusOut:j.func,onGetContent:j.func,onHide:j.func,onInit:j.func,onInput:j.func,onKeyDown:j.func,onKeyPress:j.func,onKeyUp:j.func,onLoadContent:j.func,onMouseDown:j.func,onMouseEnter:j.func,onMouseLeave:j.func,onMouseMove:j.func,onMouseOut:j.func,onMouseOver:j.func,onMouseUp:j.func,onNodeChange:j.func,onObjectResizeStart:j.func,onObjectResized:j.func,onObjectSelected:j.func,onPaste:j.func,onPostProcess:j.func,onPostRender:j.func,onPreProcess:j.func,onProgressState:j.func,onRedo:j.func,onRemove:j.func,onReset:j.func,onSaveContent:j.func,onSelectionChange:j.func,onSetAttrib:j.func,onSetContent:j.func,onShow:j.func,onSubmit:j.func,onUndo:j.func,onVisualAid:j.func,onSkinLoadError:j.func,onThemeLoadError:j.func,onModelLoadError:j.func,onPluginLoadError:j.func,onIconsLoadError:j.func,onLanguageLoadError:j.func,onScriptsLoad:j.func,onScriptsLoadError:j.func},oV=qf({apiKey:j.string,licenseKey:j.string,id:j.string,inline:j.bool,init:j.object,initialValue:j.string,onEditorChange:j.func,value:j.string,tagName:j.string,tabIndex:j.number,cloudChannel:j.string,plugins:j.oneOfType([j.string,j.array]),toolbar:j.oneOfType([j.string,j.array]),disabled:j.bool,textareaName:j.string,tinymceScriptSrc:j.oneOfType([j.string,j.arrayOf(j.string),j.arrayOf(j.shape({src:j.string,async:j.bool,defer:j.bool}))]),rollback:j.oneOfType([j.number,j.oneOf([!1])]),scriptLoading:j.shape({async:j.bool,defer:j.bool,delay:j.number})},wS),Ad=function(t){return typeof t=="function"},S_=function(t){return t in wS},R_=function(t){return t.substr(2)},aV=function(t,e,n,r,i,s,o){var l=Object.keys(i).filter(S_),u=Object.keys(s).filter(S_),c=l.filter(function(p){return s[p]===void 0}),d=u.filter(function(p){return i[p]===void 0});c.forEach(function(p){var g=R_(p),v=o[g];n(g,v),delete o[g]}),d.forEach(function(p){var g=r(t,p),v=R_(p);o[v]=g,e(v,g)})},lV=function(t,e,n,r,i){return aV(i,t.on.bind(t),t.off.bind(t),function(s,o){return function(l){var u;return(u=s(o))===null||u===void 0?void 0:u(l,t)}},e,n,r)},A_=0,ES=function(t){var e=Date.now(),n=Math.floor(Math.random()*1e9);return A_++,t+"_"+n+A_+String(e)},C_=function(t){return t!==null&&(t.tagName.toLowerCase()==="textarea"||t.tagName.toLowerCase()==="input")},P_=function(t){return typeof t>"u"||t===""?[]:Array.isArray(t)?t:t.split(" ")},uV=function(t,e){return P_(t).concat(P_(e))},cV=function(){return window.InputEvent&&typeof InputEvent.prototype.getTargetRanges=="function"},hV=function(t){if(!("isConnected"in Node.prototype)){for(var e=t,n=t.parentNode;n!=null;)e=n,n=e.parentNode;return e===t.ownerDocument}return t.isConnected},k_=function(t,e){t!==void 0&&(t.mode!=null&&typeof t.mode=="object"&&typeof t.mode.set=="function"?t.mode.set(e):t.setMode(e))},Kf=function(){return Kf=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},Kf.apply(this,arguments)},dV=function(t,e,n){var r,i,s=t.createElement("script");s.referrerPolicy="origin",s.type="application/javascript",s.id=e.id,s.src=e.src,s.async=(r=e.async)!==null&&r!==void 0?r:!1,s.defer=(i=e.defer)!==null&&i!==void 0?i:!1;var o=function(){s.removeEventListener("load",o),s.removeEventListener("error",l),n(e.src)},l=function(u){s.removeEventListener("load",o),s.removeEventListener("error",l),n(e.src,u)};s.addEventListener("load",o),s.addEventListener("error",l),t.head&&t.head.appendChild(s)},fV=function(t){var e={},n=function(o,l){var u=e[o];u.done=!0,u.error=l;for(var c=0,d=u.handlers;c<d.length;c++){var p=d[c];p(o,l)}u.handlers=[]},r=function(o,l,u){var c=function(_){return u!==void 0?u(_):console.error(_)};if(o.length===0){c(new Error("At least one script must be provided"));return}for(var d=0,p=!1,g=function(_,S){p||(S?(p=!0,c(S)):++d===o.length&&l())},v=0,A=o;v<A.length;v++){var C=A[v],D=e[C.src];if(D)D.done?g(C.src,D.error):D.handlers.push(g);else{var T=ES("tiny-");e[C.src]={id:T,src:C.src,done:!1,error:null,handlers:[g]},dV(t,Kf({id:T},C),n)}}},i=function(){for(var o,l=0,u=Object.values(e);l<u.length;l++){var c=u[l],d=t.getElementById(c.id);d!=null&&d.tagName==="SCRIPT"&&((o=d.parentNode)===null||o===void 0||o.removeChild(d))}e={}},s=function(){return t};return{loadScripts:r,deleteScripts:i,getDocument:s}},pV=function(){var t=[],e=function(i){var s=t.find(function(o){return o.getDocument()===i});return s===void 0&&(s=fV(i),t.push(s)),s},n=function(i,s,o,l,u){var c=function(){return e(i).loadScripts(s,l,u)};o>0?setTimeout(c,o):c()},r=function(){for(var i=t.pop();i!=null;i=t.pop())i.deleteScripts()};return{loadList:n,reinitialize:r}},mV=pV(),Cd=function(t){var e=t;return e&&e.tinymce?e.tinymce:null},gV=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(r[s]=i[s])},t(e,n)};return function(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");t(e,n);function r(){this.constructor=e}e.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),qs=function(){return qs=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},qs.apply(this,arguments)},yV=function(t){gV(e,t);function e(n){var r,i,s,o=t.call(this,n)||this;return o.rollbackTimer=void 0,o.valueCursor=void 0,o.rollbackChange=function(){var l=o.editor,u=o.props.value;l&&u&&u!==o.currentContent&&l.undoManager.ignore(function(){if(l.setContent(u),o.valueCursor&&(!o.inline||l.hasFocus()))try{l.selection.moveToBookmark(o.valueCursor)}catch{}}),o.rollbackTimer=void 0},o.handleBeforeInput=function(l){if(o.props.value!==void 0&&o.props.value===o.currentContent&&o.editor&&(!o.inline||o.editor.hasFocus()))try{o.valueCursor=o.editor.selection.getBookmark(3)}catch{}},o.handleBeforeInputSpecial=function(l){(l.key==="Enter"||l.key==="Backspace"||l.key==="Delete")&&o.handleBeforeInput(l)},o.handleEditorChange=function(l){var u=o.editor;if(u&&u.initialized){var c=u.getContent();o.props.value!==void 0&&o.props.value!==c&&o.props.rollback!==!1&&(o.rollbackTimer||(o.rollbackTimer=window.setTimeout(o.rollbackChange,typeof o.props.rollback=="number"?o.props.rollback:200))),c!==o.currentContent&&(o.currentContent=c,Ad(o.props.onEditorChange)&&o.props.onEditorChange(c,u))}},o.handleEditorChangeSpecial=function(l){(l.key==="Backspace"||l.key==="Delete")&&o.handleEditorChange(l)},o.initialise=function(l){var u,c,d;l===void 0&&(l=0);var p=o.elementRef.current;if(p){if(!hV(p)){if(l===0)setTimeout(function(){return o.initialise(1)},1);else if(l<100)setTimeout(function(){return o.initialise(l+1)},100);else throw new Error("tinymce can only be initialised when in a document");return}var g=Cd(o.view);if(!g)throw new Error("tinymce should have been loaded into global scope");var v=qs(qs(qs(qs({},o.props.init),{selector:void 0,target:p,readonly:o.props.disabled,inline:o.inline,plugins:uV((u=o.props.init)===null||u===void 0?void 0:u.plugins,o.props.plugins),toolbar:(c=o.props.toolbar)!==null&&c!==void 0?c:(d=o.props.init)===null||d===void 0?void 0:d.toolbar}),o.props.licenseKey?{license_key:o.props.licenseKey}:{}),{setup:function(A){o.editor=A,o.bindHandlers({}),o.inline&&!C_(p)&&A.once("PostRender",function(C){A.setContent(o.getInitialValue(),{no_events:!0})}),o.props.init&&Ad(o.props.init.setup)&&o.props.init.setup(A)},init_instance_callback:function(A){var C,D,T=o.getInitialValue();o.currentContent=(C=o.currentContent)!==null&&C!==void 0?C:A.getContent(),o.currentContent!==T&&(o.currentContent=T,A.setContent(T),A.undoManager.clear(),A.undoManager.add(),A.setDirty(!1));var _=(D=o.props.disabled)!==null&&D!==void 0?D:!1;k_(o.editor,_?"readonly":"design"),o.props.init&&Ad(o.props.init.init_instance_callback)&&o.props.init.init_instance_callback(A)}});o.inline||(p.style.visibility=""),C_(p)&&(p.value=o.getInitialValue()),g.init(v)}},o.id=o.props.id||ES("tiny-react"),o.elementRef=U.createRef(),o.inline=(s=(r=o.props.inline)!==null&&r!==void 0?r:(i=o.props.init)===null||i===void 0?void 0:i.inline)!==null&&s!==void 0?s:!1,o.boundHandlers={},o}return Object.defineProperty(e.prototype,"view",{get:function(){var n,r;return(r=(n=this.elementRef.current)===null||n===void 0?void 0:n.ownerDocument.defaultView)!==null&&r!==void 0?r:window},enumerable:!1,configurable:!0}),e.prototype.componentDidUpdate=function(n){var r=this,i,s;if(this.rollbackTimer&&(clearTimeout(this.rollbackTimer),this.rollbackTimer=void 0),this.editor&&(this.bindHandlers(n),this.editor.initialized)){if(this.currentContent=(i=this.currentContent)!==null&&i!==void 0?i:this.editor.getContent(),typeof this.props.initialValue=="string"&&this.props.initialValue!==n.initialValue)this.editor.setContent(this.props.initialValue),this.editor.undoManager.clear(),this.editor.undoManager.add(),this.editor.setDirty(!1);else if(typeof this.props.value=="string"&&this.props.value!==this.currentContent){var o=this.editor;o.undoManager.transact(function(){var u;if(!r.inline||o.hasFocus())try{u=o.selection.getBookmark(3)}catch{}var c=r.valueCursor;if(o.setContent(r.props.value),!r.inline||o.hasFocus())for(var d=0,p=[u,c];d<p.length;d++){var g=p[d];if(g)try{o.selection.moveToBookmark(g),r.valueCursor=g;break}catch{}}})}if(this.props.disabled!==n.disabled){var l=(s=this.props.disabled)!==null&&s!==void 0?s:!1;k_(this.editor,l?"readonly":"design")}}},e.prototype.componentDidMount=function(){var n=this,r,i,s,o,l;if(Cd(this.view)!==null)this.initialise();else if(Array.isArray(this.props.tinymceScriptSrc)&&this.props.tinymceScriptSrc.length===0)(i=(r=this.props).onScriptsLoadError)===null||i===void 0||i.call(r,new Error("No `tinymce` global is present but the `tinymceScriptSrc` prop was an empty array."));else if(!((s=this.elementRef.current)===null||s===void 0)&&s.ownerDocument){var u=function(){var d,p;(p=(d=n.props).onScriptsLoad)===null||p===void 0||p.call(d),n.initialise()},c=function(d){var p,g;(g=(p=n.props).onScriptsLoadError)===null||g===void 0||g.call(p,d)};mV.loadList(this.elementRef.current.ownerDocument,this.getScriptSources(),(l=(o=this.props.scriptLoading)===null||o===void 0?void 0:o.delay)!==null&&l!==void 0?l:0,u,c)}},e.prototype.componentWillUnmount=function(){var n=this,r=this.editor;r&&(r.off(this.changeEvents(),this.handleEditorChange),r.off(this.beforeInputEvent(),this.handleBeforeInput),r.off("keypress",this.handleEditorChangeSpecial),r.off("keydown",this.handleBeforeInputSpecial),r.off("NewBlock",this.handleEditorChange),Object.keys(this.boundHandlers).forEach(function(i){r.off(i,n.boundHandlers[i])}),this.boundHandlers={},r.remove(),this.editor=void 0)},e.prototype.render=function(){return this.inline?this.renderInline():this.renderIframe()},e.prototype.changeEvents=function(){var n,r,i,s=(i=(r=(n=Cd(this.view))===null||n===void 0?void 0:n.Env)===null||r===void 0?void 0:r.browser)===null||i===void 0?void 0:i.isIE();return s?"change keyup compositionend setcontent CommentChange":"change input compositionend setcontent CommentChange"},e.prototype.beforeInputEvent=function(){return cV()?"beforeinput SelectionChange":"SelectionChange"},e.prototype.renderInline=function(){var n=this.props.tagName,r=n===void 0?"div":n;return U.createElement(r,{ref:this.elementRef,id:this.id,tabIndex:this.props.tabIndex})},e.prototype.renderIframe=function(){return U.createElement("textarea",{ref:this.elementRef,style:{visibility:"hidden"},name:this.props.textareaName,id:this.id,tabIndex:this.props.tabIndex})},e.prototype.getScriptSources=function(){var n,r,i=(n=this.props.scriptLoading)===null||n===void 0?void 0:n.async,s=(r=this.props.scriptLoading)===null||r===void 0?void 0:r.defer;if(this.props.tinymceScriptSrc!==void 0)return typeof this.props.tinymceScriptSrc=="string"?[{src:this.props.tinymceScriptSrc,async:i,defer:s}]:this.props.tinymceScriptSrc.map(function(c){return typeof c=="string"?{src:c,async:i,defer:s}:c});var o=this.props.cloudChannel,l=this.props.apiKey?this.props.apiKey:"no-api-key",u="https://cdn.tiny.cloud/1/".concat(l,"/tinymce/").concat(o,"/tinymce.min.js");return[{src:u,async:i,defer:s}]},e.prototype.getInitialValue=function(){return typeof this.props.initialValue=="string"?this.props.initialValue:typeof this.props.value=="string"?this.props.value:""},e.prototype.bindHandlers=function(n){var r=this;if(this.editor!==void 0){lV(this.editor,n,this.props,this.boundHandlers,function(l){return r.props[l]});var i=function(l){return l.onEditorChange!==void 0||l.value!==void 0},s=i(n),o=i(this.props);!s&&o?(this.editor.on(this.changeEvents(),this.handleEditorChange),this.editor.on(this.beforeInputEvent(),this.handleBeforeInput),this.editor.on("keydown",this.handleBeforeInputSpecial),this.editor.on("keyup",this.handleEditorChangeSpecial),this.editor.on("NewBlock",this.handleEditorChange)):s&&!o&&(this.editor.off(this.changeEvents(),this.handleEditorChange),this.editor.off(this.beforeInputEvent(),this.handleBeforeInput),this.editor.off("keydown",this.handleBeforeInputSpecial),this.editor.off("keyup",this.handleEditorChangeSpecial),this.editor.off("NewBlock",this.handleEditorChange))}},e.propTypes=oV,e.defaultProps={cloudChannel:"7"},e}(U.Component),TS={},Vc=st&&st.__assign||function(){return Vc=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},Vc.apply(this,arguments)},vV=st&&st.__createBinding||(Object.create?function(t,e,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(e,n);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[n]}}),Object.defineProperty(t,r,i)}:function(t,e,n,r){r===void 0&&(r=n),t[r]=e[n]}),_V=st&&st.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),wV=st&&st.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var n in t)n!=="default"&&Object.prototype.hasOwnProperty.call(t,n)&&vV(e,t,n);return _V(e,t),e},EV=st&&st.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n};Object.defineProperty(TS,"__esModule",{value:!0});var TV=wV(U),N_=os,IV=bl,SV=(0,IV.createAnimation)("ClipLoader","0% {transform: rotate(0deg) scale(1)} 50% {transform: rotate(180deg) scale(0.8)} 100% {transform: rotate(360deg) scale(1)}","clip");function RV(t){var e=t.loading,n=e===void 0?!0:e,r=t.color,i=r===void 0?"#000000":r,s=t.speedMultiplier,o=s===void 0?1:s,l=t.cssOverride,u=l===void 0?{}:l,c=t.size,d=c===void 0?35:c,p=EV(t,["loading","color","speedMultiplier","cssOverride","size"]),g=Vc({background:"transparent !important",width:(0,N_.cssValue)(d),height:(0,N_.cssValue)(d),borderRadius:"100%",border:"2px solid",borderTopColor:i,borderBottomColor:"transparent",borderLeftColor:i,borderRightColor:i,display:"inline-block",animation:"".concat(SV," ").concat(.75/o,"s 0s infinite linear"),animationFillMode:"both"},u);return n?TV.createElement("span",Vc({style:g},p)):null}var IS=TS.default=RV;function AV(){const[t,e]=U.useState(!1),[n,r]=U.useState(""),[i,s]=U.useState(null),[o,l]=U.useState(""),[u,c]=U.useState(0),[d,p]=U.useState(""),[g,v]=U.useState(""),{blogData:A,setBlogData:C}=vl(),D=Qp();U.useEffect(()=>{c(0)},[i]),U.useEffect(()=>{(async()=>{const I=Rc(Lc,"blogData","blogData"),m=await HT(I);if(m.exists()){const w=m.data().blogData||[];C(w)}else console.log("No such document!")})()},[]);const T=async()=>{if(!i)return;e(!0);const F=C2(D2,`images/${i.name}`),I=R2(F,i);I.on("state_changed",m=>{const w=Math.round(m.bytesTransferred/m.totalBytes*100);c(w)},m=>{console.error("Upload error:",m),e(!1)},async()=>{const m=await A2(I.snapshot.ref);l(m),console.log("File available at:",m);const w={content:n,category:d,title:g,id:crypto.randomUUID(),imageUrl:m},E=[...A,w];C(E);try{await WT(Rc(Lc,"blogData","blogData"),{blogData:E}),alert("Editor content saved")}catch(P){console.error("Error saving blog data:",P),alert("Failed to save blog data")}finally{e(!1)}})},_=F=>{F.target.files&&F.target.files[0]&&s(F.target.files[0])},S=F=>{p(F.target.value)},O=F=>{v(F.target.value)},z=()=>{D(-1)};return b.jsxs("div",{className:"createBlog",children:[b.jsxs("div",{style:{marginTop:"20px"},children:[b.jsx("i",{className:"fa-solid fa-arrow-left",onClick:z}),b.jsx("h1",{style:{textAlign:"center"},children:"Create Your Blog"})]}),i&&b.jsxs("div",{style:{textAlign:"center"},children:[b.jsx("h3",{children:"Selected Image Preview:"}),b.jsx("img",{src:URL.createObjectURL(i),alt:"Selected",style:{width:"60%",height:"auto",marginTop:"10px"}})]}),b.jsx("div",{style:{width:`${u}%`,height:"20px",backgroundColor:u===100?"green":"blue",transition:"width 0.3s ease"},children:u>0&&b.jsxs("p",{style:{textAlign:"center"},children:[u,"%"]})}),b.jsxs("div",{className:"blogInputs",style:{textAlign:"center"},children:[b.jsx("input",{type:"file",accept:"image/*",onChange:_}),b.jsx("input",{type:"text",value:g,onChange:O,placeholder:"Enter blog title"}),b.jsxs("select",{name:"category",id:"category",value:d,onChange:S,children:[b.jsx("option",{value:"",children:"--Select a category--"}),b.jsx("option",{value:"programming",children:"Programming"}),b.jsx("option",{value:"gadgets",children:"Gadgets"}),b.jsx("option",{value:"trends",children:"Trends"}),b.jsx("option",{value:"techNews",children:"Tech News"})]})]}),b.jsx(yV,{apiKey:"24oaivpa1zr4ml2v1eibef6iliv16fww5kojtx5njped0hya",init:{plugins:["anchor","autolink","charmap","codesample","emoticons","image","link","lists","media","searchreplace","table","visualblocks","wordcount","checklist","mediaembed","casechange","export","formatpainter","pageembed","a11ychecker","tinymcespellchecker","permanentpen","powerpaste","advtable","advcode","editimage","advtemplate","mentions","tableofcontents","footnotes","mergetags","autocorrect","typography","inlinecss","markdown"],toolbar:"undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat"},onEditorChange:F=>r(F)}),b.jsx("button",{onClick:T,className:"saveBtn",disabled:t,children:t?b.jsx(IS,{color:"#ffffff",loading:t,size:20}):"Save Content"}),b.jsxs("div",{style:{marginTop:"20px"},children:[b.jsx("h3",{children:"Preview:"}),b.jsx("div",{style:{marginBottom:"100px"},dangerouslySetInnerHTML:{__html:n}})]}),b.jsx(Ih,{})]})}function CV(){const{blogData:t,setBlogData:e}=vl(),{setIsAuthenticated:n,isAuthenticated:r}=Gm();function i(){VD(Km).then(()=>{console.log("User signed out")}).catch(o=>{console.error("Error during logout:",o)})}async function s(o){const l=t.filter(u=>u.id!=o);try{await WT(Rc(Lc,"blogData","blogData"),{blogData:l}),e(l),alert("Blog deleted Succesfully")}catch(u){console.error("Error deleting blog:",u),alert("Failed to delete blog data")}}return b.jsxs("div",{className:"dashboardContainer",children:[b.jsxs("div",{className:"dashboardHeader",children:[b.jsx("div",{className:"profileSection",children:b.jsx("img",{className:"profileImage",src:"https://cdn-icons-png.flaticon.com/128/3135/3135715.png",alt:"profile"})}),b.jsxs("div",{className:"profileDetails",children:[b.jsx("h1",{className:"profileName",children:"Jazab Ahmad"}),b.jsx("h2",{className:"profileRole",children:"Software Developer"}),b.jsxs("h2",{className:"profileBlogsCount",children:[b.jsx("span",{children:"Total Blog: "})," ",t.length]}),b.jsxs("div",{className:"actionButtons",children:[b.jsx("div",{className:"buttonContainer",children:r?b.jsx(mt,{to:"/createblog",className:"button createBlogButton",children:"Create Blog"}):b.jsx(mt,{to:"/login",className:"button createBlogButton",children:"Login"})}),b.jsx("div",{className:"buttonContainer",children:r?b.jsx("button",{className:"button logoutButton",onClick:i,children:"Logout"}):""})]})]})]}),b.jsx("hr",{className:"separatorLine"}),b.jsx("div",{className:"blogTableContainer",children:b.jsx("div",{className:"tableWrapper",children:r&&b.jsxs("table",{className:"blogTable",children:[b.jsx("thead",{className:"tableHeader",children:b.jsxs("tr",{children:[b.jsx("th",{className:"tableHeading",children:"S.No"}),b.jsx("th",{className:"tableHeading",children:"Thumbnail"}),b.jsx("th",{className:"tableHeading",children:"Title"}),b.jsx("th",{className:"tableHeading",children:"Category"}),b.jsx("th",{className:"tableHeading",children:"Date"}),b.jsx("th",{className:"tableHeading",children:"Action"})]})}),b.jsx("tbody",{children:t.map((o,l)=>b.jsxs("tr",{className:"tableRow",children:[b.jsxs("td",{className:"tableData",children:[l+1,"."]}),b.jsx("td",{className:"tableData",children:b.jsx("img",{className:"thumbnailImage",src:o.imageUrl,alt:"thumbnail"})}),b.jsx("td",{className:"tableData",children:o.title}),b.jsx("td",{className:"tableData",children:o.category}),b.jsx("td",{className:"tableData",children:"sep 20, 2024"}),b.jsx("td",{className:"tableData",children:b.jsx("button",{className:"deleteButton",onClick:()=>{s(o.id)},children:"Delete"})})]},l))})]})})})]})}function PV(){const[t,e]=U.useState(""),[n,r]=U.useState(""),{setIsAuthenticated:i,isAuthenticated:s}=Gm(),[o,l]=U.useState(!1),u=Qp(),c=async d=>{d.preventDefault();try{l(!0);const p=await DD(Km,t,n);console.log("Login successful:",p),i(!0),u("/dashboard")}catch(p){console.error("Login error:",p)}finally{l(!1)}};return b.jsx("div",{className:"adminLoginContainer",children:b.jsxs("div",{className:"adminLoginCard",children:[b.jsxs("div",{className:"adminLoginHeader",children:[b.jsx("div",{className:"adminLoginIcon",children:b.jsx("img",{src:"https://cdn-icons-png.flaticon.com/128/727/727399.png",alt:"Admin Icon"})}),b.jsx("h4",{className:"adminLoginTitle",children:"Admin Login"})]}),b.jsx("div",{className:"adminLoginBody",children:b.jsxs("form",{className:"adminLoginForm",children:[b.jsx("div",{children:b.jsx("input",{type:"email",name:"email",className:"adminLoginInput",placeholder:"Email",value:t,onChange:d=>e(d.target.value),required:!0})}),b.jsx("div",{children:b.jsx("input",{type:"password",name:"password",className:"adminLoginInput",placeholder:"Password",value:n,onChange:d=>r(d.target.value),required:!0})}),b.jsx("button",{type:"submit",className:"adminLoginButton",onClick:c,children:o?b.jsx(IS,{color:"#ffffff",loading:o,size:20}):"Login"})]})})]})})}const kV=MC([{path:"/",element:b.jsx(F2,{}),children:[{path:"",element:b.jsx(Z2,{})},{path:"detail",element:b.jsx(eV,{})},{path:"categoryPage",element:b.jsx(tV,{})},{path:"createBlog",element:b.jsx(AV,{})},{path:"/dashboard",element:b.jsx(CV,{})},{path:"/login",element:b.jsx(PV,{})}]}]);Ww(document.getElementById("root")).render(b.jsx(U.StrictMode,{children:b.jsx(O2,{children:b.jsx(WC,{router:kV})})}));
