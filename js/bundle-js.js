/* NUGET: BEGIN LICENSE TEXT
 *
 * Microsoft grants you the right to use these script files for the sole
 * purpose of either: (i) interacting through your browser with the Microsoft
 * website or online service, subject to the applicable licensing or use
 * terms; or (ii) using the files as included with a Microsoft product subject
 * to that product's license terms. Microsoft reserves all other rights to the
 * files not expressly granted by Microsoft, whether by implication, estoppel
 * or otherwise. Insofar as a script file is dual licensed under GPL,
 * Microsoft neither took the code under GPL nor distributes it thereunder but
 * under the terms set out in this paragraph. All notices and licenses
 * below are for informational purposes only.
 *
 * JQUERY CORE 1.10.2; Copyright 2005, 2013 jQuery Foundation, Inc. and other contributors; http://jquery.org/license
 * Includes Sizzle.js; Copyright 2013 jQuery Foundation, Inc. and other contributors; http://opensource.org/licenses/MIT
 *
 * NUGET: END LICENSE TEXT */
/*! jQuery v1.10.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery-1.10.2.min.map
*/
(function(e,t){var n,r,i=typeof t,o=e.location,a=e.document,s=a.documentElement,l=e.jQuery,u=e.$,c={},p=[],f="1.10.2",d=p.concat,h=p.push,g=p.slice,m=p.indexOf,y=c.toString,v=c.hasOwnProperty,b=f.trim,x=function(e,t){return new x.fn.init(e,t,r)},w=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=/\S+/g,C=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,k=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,E=/^[\],:{}\s]*$/,S=/(?:^|:|,)(?:\s*\[)+/g,A=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,j=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,D=/^-ms-/,L=/-([\da-z])/gi,H=function(e,t){return t.toUpperCase()},q=function(e){(a.addEventListener||"load"===e.type||"complete"===a.readyState)&&(_(),x.ready())},_=function(){a.addEventListener?(a.removeEventListener("DOMContentLoaded",q,!1),e.removeEventListener("load",q,!1)):(a.detachEvent("onreadystatechange",q),e.detachEvent("onload",q))};x.fn=x.prototype={jquery:f,constructor:x,init:function(e,n,r){var i,o;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof x?n[0]:n,x.merge(this,x.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:a,!0)),k.test(i[1])&&x.isPlainObject(n))for(i in n)x.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(o=a.getElementById(i[2]),o&&o.parentNode){if(o.id!==i[2])return r.find(e);this.length=1,this[0]=o}return this.context=a,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))},selector:"",length:0,toArray:function(){return g.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return x.each(this,e,t)},ready:function(e){return x.ready.promise().done(e),this},slice:function(){return this.pushStack(g.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},l=1,u=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},l=2),"object"==typeof s||x.isFunction(s)||(s={}),u===l&&(s=this,--l);u>l;l++)if(null!=(o=arguments[l]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(x.isPlainObject(r)||(n=x.isArray(r)))?(n?(n=!1,a=e&&x.isArray(e)?e:[]):a=e&&x.isPlainObject(e)?e:{},s[i]=x.extend(c,a,r)):r!==t&&(s[i]=r));return s},x.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=l),x},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)},ready:function(e){if(e===!0?!--x.readyWait:!x.isReady){if(!a.body)return setTimeout(x.ready);x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(a,[x]),x.fn.trigger&&x(a).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===x.type(e)},isArray:Array.isArray||function(e){return"array"===x.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?c[y.call(e)]||"object":typeof e},isPlainObject:function(e){var n;if(!e||"object"!==x.type(e)||e.nodeType||x.isWindow(e))return!1;try{if(e.constructor&&!v.call(e,"constructor")&&!v.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(r){return!1}if(x.support.ownLast)for(n in e)return v.call(e,n);for(n in e);return n===t||v.call(e,n)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||a;var r=k.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=x.trim(n),n&&E.test(n.replace(A,"@").replace(j,"]").replace(S,"")))?Function("return "+n)():(x.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||x.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&x.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(D,"ms-").replace(L,H)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:b&&!b.call("\ufeff\u00a0")?function(e){return null==e?"":b.call(e)}:function(e){return null==e?"":(e+"").replace(C,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(M(Object(e))?x.merge(n,"string"==typeof e?[e]:e):h.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(m)return m.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else while(n[o]!==t)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return d.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),x.isFunction(e)?(r=g.call(arguments,2),i=function(){return e.apply(n||this,r.concat(g.call(arguments)))},i.guid=e.guid=e.guid||x.guid++,i):t},access:function(e,n,r,i,o,a,s){var l=0,u=e.length,c=null==r;if("object"===x.type(r)){o=!0;for(l in r)x.access(e,n,l,r[l],!0,a,s)}else if(i!==t&&(o=!0,x.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(x(e),n)})),n))for(;u>l;l++)n(e[l],r,s?i:i.call(e[l],l,n(e[l],r)));return o?e:c?n.call(e):u?n(e[0],r):a},now:function(){return(new Date).getTime()},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),x.ready.promise=function(t){if(!n)if(n=x.Deferred(),"complete"===a.readyState)setTimeout(x.ready);else if(a.addEventListener)a.addEventListener("DOMContentLoaded",q,!1),e.addEventListener("load",q,!1);else{a.attachEvent("onreadystatechange",q),e.attachEvent("onload",q);var r=!1;try{r=null==e.frameElement&&a.documentElement}catch(i){}r&&r.doScroll&&function o(){if(!x.isReady){try{r.doScroll("left")}catch(e){return setTimeout(o,50)}_(),x.ready()}}()}return n.promise(t)},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){c["[object "+t+"]"]=t.toLowerCase()});function M(e){var t=e.length,n=x.type(e);return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}r=x(a),function(e,t){var n,r,i,o,a,s,l,u,c,p,f,d,h,g,m,y,v,b="sizzle"+-new Date,w=e.document,T=0,C=0,N=st(),k=st(),E=st(),S=!1,A=function(e,t){return e===t?(S=!0,0):0},j=typeof t,D=1<<31,L={}.hasOwnProperty,H=[],q=H.pop,_=H.push,M=H.push,O=H.slice,F=H.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},B="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",P="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",W=R.replace("w","w#"),$="\\["+P+"*("+R+")"+P+"*(?:([*^$|!~]?=)"+P+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+W+")|)|)"+P+"*\\]",I=":("+R+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+$.replace(3,8)+")*)|.*)\\)|)",z=RegExp("^"+P+"+|((?:^|[^\\\\])(?:\\\\.)*)"+P+"+$","g"),X=RegExp("^"+P+"*,"+P+"*"),U=RegExp("^"+P+"*([>+~]|"+P+")"+P+"*"),V=RegExp(P+"*[+~]"),Y=RegExp("="+P+"*([^\\]'\"]*)"+P+"*\\]","g"),J=RegExp(I),G=RegExp("^"+W+"$"),Q={ID:RegExp("^#("+R+")"),CLASS:RegExp("^\\.("+R+")"),TAG:RegExp("^("+R.replace("w","w*")+")"),ATTR:RegExp("^"+$),PSEUDO:RegExp("^"+I),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+P+"*(even|odd|(([+-]|)(\\d*)n|)"+P+"*(?:([+-]|)"+P+"*(\\d+)|))"+P+"*\\)|)","i"),bool:RegExp("^(?:"+B+")$","i"),needsContext:RegExp("^"+P+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+P+"*((?:-\\d)?\\d*)"+P+"*\\)|)(?=[^-]|$)","i")},K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,et=/^(?:input|select|textarea|button)$/i,tt=/^h\d$/i,nt=/'|\\/g,rt=RegExp("\\\\([\\da-f]{1,6}"+P+"?|("+P+")|.)","ig"),it=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)};try{M.apply(H=O.call(w.childNodes),w.childNodes),H[w.childNodes.length].nodeType}catch(ot){M={apply:H.length?function(e,t){_.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function at(e,t,n,i){var o,a,s,l,u,c,d,m,y,x;if((t?t.ownerDocument||t:w)!==f&&p(t),t=t||f,n=n||[],!e||"string"!=typeof e)return n;if(1!==(l=t.nodeType)&&9!==l)return[];if(h&&!i){if(o=Z.exec(e))if(s=o[1]){if(9===l){if(a=t.getElementById(s),!a||!a.parentNode)return n;if(a.id===s)return n.push(a),n}else if(t.ownerDocument&&(a=t.ownerDocument.getElementById(s))&&v(t,a)&&a.id===s)return n.push(a),n}else{if(o[2])return M.apply(n,t.getElementsByTagName(e)),n;if((s=o[3])&&r.getElementsByClassName&&t.getElementsByClassName)return M.apply(n,t.getElementsByClassName(s)),n}if(r.qsa&&(!g||!g.test(e))){if(m=d=b,y=t,x=9===l&&e,1===l&&"object"!==t.nodeName.toLowerCase()){c=mt(e),(d=t.getAttribute("id"))?m=d.replace(nt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",u=c.length;while(u--)c[u]=m+yt(c[u]);y=V.test(e)&&t.parentNode||t,x=c.join(",")}if(x)try{return M.apply(n,y.querySelectorAll(x)),n}catch(T){}finally{d||t.removeAttribute("id")}}}return kt(e.replace(z,"$1"),t,n,i)}function st(){var e=[];function t(n,r){return e.push(n+=" ")>o.cacheLength&&delete t[e.shift()],t[n]=r}return t}function lt(e){return e[b]=!0,e}function ut(e){var t=f.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function ct(e,t){var n=e.split("|"),r=e.length;while(r--)o.attrHandle[n[r]]=t}function pt(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function ft(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function dt(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function ht(e){return lt(function(t){return t=+t,lt(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}s=at.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},r=at.support={},p=at.setDocument=function(e){var n=e?e.ownerDocument||e:w,i=n.defaultView;return n!==f&&9===n.nodeType&&n.documentElement?(f=n,d=n.documentElement,h=!s(n),i&&i.attachEvent&&i!==i.top&&i.attachEvent("onbeforeunload",function(){p()}),r.attributes=ut(function(e){return e.className="i",!e.getAttribute("className")}),r.getElementsByTagName=ut(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),r.getElementsByClassName=ut(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),r.getById=ut(function(e){return d.appendChild(e).id=b,!n.getElementsByName||!n.getElementsByName(b).length}),r.getById?(o.find.ID=function(e,t){if(typeof t.getElementById!==j&&h){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){return e.getAttribute("id")===t}}):(delete o.find.ID,o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){var n=typeof e.getAttributeNode!==j&&e.getAttributeNode("id");return n&&n.value===t}}),o.find.TAG=r.getElementsByTagName?function(e,n){return typeof n.getElementsByTagName!==j?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},o.find.CLASS=r.getElementsByClassName&&function(e,n){return typeof n.getElementsByClassName!==j&&h?n.getElementsByClassName(e):t},m=[],g=[],(r.qsa=K.test(n.querySelectorAll))&&(ut(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||g.push("\\["+P+"*(?:value|"+B+")"),e.querySelectorAll(":checked").length||g.push(":checked")}),ut(function(e){var t=n.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&g.push("[*^$]="+P+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||g.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),g.push(",.*:")})),(r.matchesSelector=K.test(y=d.webkitMatchesSelector||d.mozMatchesSelector||d.oMatchesSelector||d.msMatchesSelector))&&ut(function(e){r.disconnectedMatch=y.call(e,"div"),y.call(e,"[s!='']:x"),m.push("!=",I)}),g=g.length&&RegExp(g.join("|")),m=m.length&&RegExp(m.join("|")),v=K.test(d.contains)||d.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},A=d.compareDocumentPosition?function(e,t){if(e===t)return S=!0,0;var i=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t);return i?1&i||!r.sortDetached&&t.compareDocumentPosition(e)===i?e===n||v(w,e)?-1:t===n||v(w,t)?1:c?F.call(c,e)-F.call(c,t):0:4&i?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];if(e===t)return S=!0,0;if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:c?F.call(c,e)-F.call(c,t):0;if(o===a)return pt(e,t);r=e;while(r=r.parentNode)s.unshift(r);r=t;while(r=r.parentNode)l.unshift(r);while(s[i]===l[i])i++;return i?pt(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0},n):f},at.matches=function(e,t){return at(e,null,null,t)},at.matchesSelector=function(e,t){if((e.ownerDocument||e)!==f&&p(e),t=t.replace(Y,"='$1']"),!(!r.matchesSelector||!h||m&&m.test(t)||g&&g.test(t)))try{var n=y.call(e,t);if(n||r.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(i){}return at(t,f,null,[e]).length>0},at.contains=function(e,t){return(e.ownerDocument||e)!==f&&p(e),v(e,t)},at.attr=function(e,n){(e.ownerDocument||e)!==f&&p(e);var i=o.attrHandle[n.toLowerCase()],a=i&&L.call(o.attrHandle,n.toLowerCase())?i(e,n,!h):t;return a===t?r.attributes||!h?e.getAttribute(n):(a=e.getAttributeNode(n))&&a.specified?a.value:null:a},at.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},at.uniqueSort=function(e){var t,n=[],i=0,o=0;if(S=!r.detectDuplicates,c=!r.sortStable&&e.slice(0),e.sort(A),S){while(t=e[o++])t===e[o]&&(i=n.push(o));while(i--)e.splice(n[i],1)}return e},a=at.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=a(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=a(t);return n},o=at.selectors={cacheLength:50,createPseudo:lt,match:Q,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(rt,it),e[3]=(e[4]||e[5]||"").replace(rt,it),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||at.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&at.error(e[0]),e},PSEUDO:function(e){var n,r=!e[5]&&e[2];return Q.CHILD.test(e[0])?null:(e[3]&&e[4]!==t?e[2]=e[4]:r&&J.test(r)&&(n=mt(r,!0))&&(n=r.indexOf(")",r.length-n)-r.length)&&(e[0]=e[0].slice(0,n),e[2]=r.slice(0,n)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(rt,it).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=N[e+" "];return t||(t=RegExp("(^|"+P+")"+e+"("+P+"|$)"))&&N(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==j&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=at.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,l){var u,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!l&&!s;if(m){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[b]||(m[b]={}),u=c[e]||[],d=u[0]===T&&u[1],f=u[0]===T&&u[2],p=d&&m.childNodes[d];while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[T,d,f];break}}else if(v&&(u=(t[b]||(t[b]={}))[e])&&u[0]===T)f=u[1];else while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[b]||(p[b]={}))[e]=[T,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=o.pseudos[e]||o.setFilters[e.toLowerCase()]||at.error("unsupported pseudo: "+e);return r[b]?r(t):r.length>1?(n=[e,e,"",t],o.setFilters.hasOwnProperty(e.toLowerCase())?lt(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=F.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:lt(function(e){var t=[],n=[],r=l(e.replace(z,"$1"));return r[b]?lt(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:lt(function(e){return function(t){return at(e,t).length>0}}),contains:lt(function(e){return function(t){return(t.textContent||t.innerText||a(t)).indexOf(e)>-1}}),lang:lt(function(e){return G.test(e||"")||at.error("unsupported lang: "+e),e=e.replace(rt,it).toLowerCase(),function(t){var n;do if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===d},focus:function(e){return e===f.activeElement&&(!f.hasFocus||f.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!o.pseudos.empty(e)},header:function(e){return tt.test(e.nodeName)},input:function(e){return et.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:ht(function(){return[0]}),last:ht(function(e,t){return[t-1]}),eq:ht(function(e,t,n){return[0>n?n+t:n]}),even:ht(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:ht(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:ht(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:ht(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}},o.pseudos.nth=o.pseudos.eq;for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})o.pseudos[n]=ft(n);for(n in{submit:!0,reset:!0})o.pseudos[n]=dt(n);function gt(){}gt.prototype=o.filters=o.pseudos,o.setFilters=new gt;function mt(e,t){var n,r,i,a,s,l,u,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,l=[],u=o.preFilter;while(s){(!n||(r=X.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),l.push(i=[])),n=!1,(r=U.exec(s))&&(n=r.shift(),i.push({value:n,type:r[0].replace(z," ")}),s=s.slice(n.length));for(a in o.filter)!(r=Q[a].exec(s))||u[a]&&!(r=u[a](r))||(n=r.shift(),i.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?at.error(e):k(e,l).slice(0)}function yt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function vt(e,t,n){var r=t.dir,o=n&&"parentNode"===r,a=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||o)return e(t,n,i)}:function(t,n,s){var l,u,c,p=T+" "+a;if(s){while(t=t[r])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[r])if(1===t.nodeType||o)if(c=t[b]||(t[b]={}),(u=c[r])&&u[0]===p){if((l=u[1])===!0||l===i)return l===!0}else if(u=c[r]=[p],u[1]=e(t,n,s)||i,u[1]===!0)return!0}}function bt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function xt(e,t,n,r,i){var o,a=[],s=0,l=e.length,u=null!=t;for(;l>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),u&&t.push(s));return a}function wt(e,t,n,r,i,o){return r&&!r[b]&&(r=wt(r)),i&&!i[b]&&(i=wt(i,o)),lt(function(o,a,s,l){var u,c,p,f=[],d=[],h=a.length,g=o||Nt(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:xt(g,f,e,s,l),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,l),r){u=xt(y,d),r(u,[],s,l),c=u.length;while(c--)(p=u[c])&&(y[d[c]]=!(m[d[c]]=p))}if(o){if(i||e){if(i){u=[],c=y.length;while(c--)(p=y[c])&&u.push(m[c]=p);i(null,y=[],u,l)}c=y.length;while(c--)(p=y[c])&&(u=i?F.call(o,p):f[c])>-1&&(o[u]=!(a[u]=p))}}else y=xt(y===a?y.splice(h,y.length):y),i?i(null,a,y,l):M.apply(a,y)})}function Tt(e){var t,n,r,i=e.length,a=o.relative[e[0].type],s=a||o.relative[" "],l=a?1:0,c=vt(function(e){return e===t},s,!0),p=vt(function(e){return F.call(t,e)>-1},s,!0),f=[function(e,n,r){return!a&&(r||n!==u)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;i>l;l++)if(n=o.relative[e[l].type])f=[vt(bt(f),n)];else{if(n=o.filter[e[l].type].apply(null,e[l].matches),n[b]){for(r=++l;i>r;r++)if(o.relative[e[r].type])break;return wt(l>1&&bt(f),l>1&&yt(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(z,"$1"),n,r>l&&Tt(e.slice(l,r)),i>r&&Tt(e=e.slice(r)),i>r&&yt(e))}f.push(n)}return bt(f)}function Ct(e,t){var n=0,r=t.length>0,a=e.length>0,s=function(s,l,c,p,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,C=u,N=s||a&&o.find.TAG("*",d&&l.parentNode||l),k=T+=null==C?1:Math.random()||.1;for(w&&(u=l!==f&&l,i=n);null!=(h=N[b]);b++){if(a&&h){g=0;while(m=e[g++])if(m(h,l,c)){p.push(h);break}w&&(T=k,i=++n)}r&&((h=!m&&h)&&v--,s&&x.push(h))}if(v+=b,r&&b!==v){g=0;while(m=t[g++])m(x,y,l,c);if(s){if(v>0)while(b--)x[b]||y[b]||(y[b]=q.call(p));y=xt(y)}M.apply(p,y),w&&!s&&y.length>0&&v+t.length>1&&at.uniqueSort(p)}return w&&(T=k,u=C),x};return r?lt(s):s}l=at.compile=function(e,t){var n,r=[],i=[],o=E[e+" "];if(!o){t||(t=mt(e)),n=t.length;while(n--)o=Tt(t[n]),o[b]?r.push(o):i.push(o);o=E(e,Ct(i,r))}return o};function Nt(e,t,n){var r=0,i=t.length;for(;i>r;r++)at(e,t[r],n);return n}function kt(e,t,n,i){var a,s,u,c,p,f=mt(e);if(!i&&1===f.length){if(s=f[0]=f[0].slice(0),s.length>2&&"ID"===(u=s[0]).type&&r.getById&&9===t.nodeType&&h&&o.relative[s[1].type]){if(t=(o.find.ID(u.matches[0].replace(rt,it),t)||[])[0],!t)return n;e=e.slice(s.shift().value.length)}a=Q.needsContext.test(e)?0:s.length;while(a--){if(u=s[a],o.relative[c=u.type])break;if((p=o.find[c])&&(i=p(u.matches[0].replace(rt,it),V.test(s[0].type)&&t.parentNode||t))){if(s.splice(a,1),e=i.length&&yt(s),!e)return M.apply(n,i),n;break}}}return l(e,f)(i,t,!h,n,V.test(e)),n}r.sortStable=b.split("").sort(A).join("")===b,r.detectDuplicates=S,p(),r.sortDetached=ut(function(e){return 1&e.compareDocumentPosition(f.createElement("div"))}),ut(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||ct("type|href|height|width",function(e,n,r){return r?t:e.getAttribute(n,"type"===n.toLowerCase()?1:2)}),r.attributes&&ut(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||ct("value",function(e,n,r){return r||"input"!==e.nodeName.toLowerCase()?t:e.defaultValue}),ut(function(e){return null==e.getAttribute("disabled")})||ct(B,function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&i.specified?i.value:e[n]===!0?n.toLowerCase():null}),x.find=at,x.expr=at.selectors,x.expr[":"]=x.expr.pseudos,x.unique=at.uniqueSort,x.text=at.getText,x.isXMLDoc=at.isXML,x.contains=at.contains}(e);var O={};function F(e){var t=O[e]={};return x.each(e.match(T)||[],function(e,n){t[n]=!0}),t}x.Callbacks=function(e){e="string"==typeof e?O[e]||F(e):x.extend({},e);var n,r,i,o,a,s,l=[],u=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=l.length,n=!0;l&&o>a;a++)if(l[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,l&&(u?u.length&&c(u.shift()):r?l=[]:p.disable())},p={add:function(){if(l){var t=l.length;(function i(t){x.each(t,function(t,n){var r=x.type(n);"function"===r?e.unique&&p.has(n)||l.push(n):n&&n.length&&"string"!==r&&i(n)})})(arguments),n?o=l.length:r&&(s=t,c(r))}return this},remove:function(){return l&&x.each(arguments,function(e,t){var r;while((r=x.inArray(t,l,r))>-1)l.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)}),this},has:function(e){return e?x.inArray(e,l)>-1:!(!l||!l.length)},empty:function(){return l=[],o=0,this},disable:function(){return l=u=r=t,this},disabled:function(){return!l},lock:function(){return u=t,r||p.disable(),this},locked:function(){return!u},fireWith:function(e,t){return!l||i&&!u||(t=t||[],t=[e,t.slice?t.slice():t],n?u.push(t):c(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return x.Deferred(function(n){x.each(t,function(t,o){var a=o[0],s=x.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?x.extend(e,r):r}},i={};return r.pipe=r.then,x.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=g.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?g.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,l,u;if(r>1)for(s=Array(r),l=Array(r),u=Array(r);r>t;t++)n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(a(t,u,n)).fail(o.reject).progress(a(t,l,s)):--i;return i||o.resolveWith(u,n),o.promise()}}),x.support=function(t){var n,r,o,s,l,u,c,p,f,d=a.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*")||[],r=d.getElementsByTagName("a")[0],!r||!r.style||!n.length)return t;s=a.createElement("select"),u=s.appendChild(a.createElement("option")),o=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t.getSetAttribute="t"!==d.className,t.leadingWhitespace=3===d.firstChild.nodeType,t.tbody=!d.getElementsByTagName("tbody").length,t.htmlSerialize=!!d.getElementsByTagName("link").length,t.style=/top/.test(r.getAttribute("style")),t.hrefNormalized="/a"===r.getAttribute("href"),t.opacity=/^0.5/.test(r.style.opacity),t.cssFloat=!!r.style.cssFloat,t.checkOn=!!o.value,t.optSelected=u.selected,t.enctype=!!a.createElement("form").enctype,t.html5Clone="<:nav></:nav>"!==a.createElement("nav").cloneNode(!0).outerHTML,t.inlineBlockNeedsLayout=!1,t.shrinkWrapBlocks=!1,t.pixelPosition=!1,t.deleteExpando=!0,t.noCloneEvent=!0,t.reliableMarginRight=!0,t.boxSizingReliable=!0,o.checked=!0,t.noCloneChecked=o.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!u.disabled;try{delete d.test}catch(h){t.deleteExpando=!1}o=a.createElement("input"),o.setAttribute("value",""),t.input=""===o.getAttribute("value"),o.value="t",o.setAttribute("type","radio"),t.radioValue="t"===o.value,o.setAttribute("checked","t"),o.setAttribute("name","t"),l=a.createDocumentFragment(),l.appendChild(o),t.appendChecked=o.checked,t.checkClone=l.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1}),d.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1;d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip;for(f in x(t))break;return t.ownLast="0"!==f,x(function(){var n,r,o,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",l=a.getElementsByTagName("body")[0];l&&(n=a.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",l.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",o=d.getElementsByTagName("td"),o[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===o[0].offsetHeight,o[0].style.display="",o[1].style.display="none",t.reliableHiddenOffsets=p&&0===o[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",x.swap(l,null!=l.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===d.offsetWidth}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(a.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(l.style.zoom=1)),l.removeChild(n),n=d=o=r=null)}),n=s=l=u=r=o=null,t
}({});var B=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;function R(e,n,r,i){if(x.acceptData(e)){var o,a,s=x.expando,l=e.nodeType,u=l?x.cache:e,c=l?e[s]:e[s]&&s;if(c&&u[c]&&(i||u[c].data)||r!==t||"string"!=typeof n)return c||(c=l?e[s]=p.pop()||x.guid++:s),u[c]||(u[c]=l?{}:{toJSON:x.noop}),("object"==typeof n||"function"==typeof n)&&(i?u[c]=x.extend(u[c],n):u[c].data=x.extend(u[c].data,n)),a=u[c],i||(a.data||(a.data={}),a=a.data),r!==t&&(a[x.camelCase(n)]=r),"string"==typeof n?(o=a[n],null==o&&(o=a[x.camelCase(n)])):o=a,o}}function W(e,t,n){if(x.acceptData(e)){var r,i,o=e.nodeType,a=o?x.cache:e,s=o?e[x.expando]:x.expando;if(a[s]){if(t&&(r=n?a[s]:a[s].data)){x.isArray(t)?t=t.concat(x.map(t,x.camelCase)):t in r?t=[t]:(t=x.camelCase(t),t=t in r?[t]:t.split(" ")),i=t.length;while(i--)delete r[t[i]];if(n?!I(r):!x.isEmptyObject(r))return}(n||(delete a[s].data,I(a[s])))&&(o?x.cleanData([e],!0):x.support.deleteExpando||a!=a.window?delete a[s]:a[s]=null)}}}x.extend({cache:{},noData:{applet:!0,embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(e){return e=e.nodeType?x.cache[e[x.expando]]:e[x.expando],!!e&&!I(e)},data:function(e,t,n){return R(e,t,n)},removeData:function(e,t){return W(e,t)},_data:function(e,t,n){return R(e,t,n,!0)},_removeData:function(e,t){return W(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&x.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),x.fn.extend({data:function(e,n){var r,i,o=null,a=0,s=this[0];if(e===t){if(this.length&&(o=x.data(s),1===s.nodeType&&!x._data(s,"parsedAttrs"))){for(r=s.attributes;r.length>a;a++)i=r[a].name,0===i.indexOf("data-")&&(i=x.camelCase(i.slice(5)),$(s,i,o[i]));x._data(s,"parsedAttrs",!0)}return o}return"object"==typeof e?this.each(function(){x.data(this,e)}):arguments.length>1?this.each(function(){x.data(this,e,n)}):s?$(s,e,x.data(s,e)):null},removeData:function(e){return this.each(function(){x.removeData(this,e)})}});function $(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(P,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:B.test(r)?x.parseJSON(r):r}catch(o){}x.data(e,n,r)}else r=t}return r}function I(e){var t;for(t in e)if(("data"!==t||!x.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}x.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=x._data(e,n),r&&(!i||x.isArray(r)?i=x._data(e,n,x.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),a=function(){x.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return x._data(e,n)||x._data(e,n,{empty:x.Callbacks("once memory").add(function(){x._removeData(e,t+"queue"),x._removeData(e,n)})})}}),x.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?x.queue(this[0],e):n===t?this:this.each(function(){var t=x.queue(this,e,n);x._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&x.dequeue(this,e)})},dequeue:function(e){return this.each(function(){x.dequeue(this,e)})},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=x.Deferred(),a=this,s=this.length,l=function(){--i||o.resolveWith(a,[a])};"string"!=typeof e&&(n=e,e=t),e=e||"fx";while(s--)r=x._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(l));return l(),o.promise(n)}});var z,X,U=/[\t\r\n\f]/g,V=/\r/g,Y=/^(?:input|select|textarea|button|object)$/i,J=/^(?:a|area)$/i,G=/^(?:checked|selected)$/i,Q=x.support.getSetAttribute,K=x.support.input;x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)})},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)},removeProp:function(e){return e=x.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,l="string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).addClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=x.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,l=0===arguments.length||"string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?x.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var t,r=0,o=x(this),a=e.match(T)||[];while(t=a[r++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else(n===i||"boolean"===n)&&(this.className&&x._data(this,"__className__",this.className),this.className=this.className||e===!1?"":x._data(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(U," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=x.isFunction(e),this.each(function(n){var o;1===this.nodeType&&(o=i?e.call(this,n,x(this).val()):e,null==o?o="":"number"==typeof o?o+="":x.isArray(o)&&(o=x.map(o,function(e){return null==e?"":e+""})),r=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))});if(o)return r=x.valHooks[o.type]||x.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(V,""):null==n?"":n)}}}),x.extend({valHooks:{option:{get:function(e){var t=x.find.attr(e,"value");return null!=t?t:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,l=0>i?s:o?i:0;for(;s>l;l++)if(n=r[l],!(!n.selected&&l!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),a=i.length;while(a--)r=i[a],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}},attr:function(e,n,r){var o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return typeof e.getAttribute===i?x.prop(e,n,r):(1===s&&x.isXMLDoc(e)||(n=n.toLowerCase(),o=x.attrHooks[n]||(x.expr.match.bool.test(n)?X:z)),r===t?o&&"get"in o&&null!==(a=o.get(e,n))?a:(a=x.find.attr(e,n),null==a?t:a):null!==r?o&&"set"in o&&(a=o.set(e,r,n))!==t?a:(e.setAttribute(n,r+""),r):(x.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(T);if(o&&1===e.nodeType)while(n=o[i++])r=x.propFix[n]||n,x.expr.match.bool.test(n)?K&&Q||!G.test(n)?e[r]=!1:e[x.camelCase("default-"+n)]=e[r]=!1:x.attr(e,n,""),e.removeAttribute(Q?n:r)},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!x.isXMLDoc(e),a&&(n=x.propFix[n]||n,o=x.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var t=x.find.attr(e,"tabindex");return t?parseInt(t,10):Y.test(e.nodeName)||J.test(e.nodeName)&&e.href?0:-1}}}}),X={set:function(e,t,n){return t===!1?x.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&x.propFix[n]||n,n):e[x.camelCase("default-"+n)]=e[n]=!0,n}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,n){var r=x.expr.attrHandle[n]||x.find.attr;x.expr.attrHandle[n]=K&&Q||!G.test(n)?function(e,n,i){var o=x.expr.attrHandle[n],a=i?t:(x.expr.attrHandle[n]=t)!=r(e,n,i)?n.toLowerCase():null;return x.expr.attrHandle[n]=o,a}:function(e,n,r){return r?t:e[x.camelCase("default-"+n)]?n.toLowerCase():null}}),K&&Q||(x.attrHooks.value={set:function(e,n,r){return x.nodeName(e,"input")?(e.defaultValue=n,t):z&&z.set(e,n,r)}}),Q||(z={set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},x.expr.attrHandle.id=x.expr.attrHandle.name=x.expr.attrHandle.coords=function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&""!==i.value?i.value:null},x.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&r.specified?r.value:t},set:z.set},x.attrHooks.contenteditable={set:function(e,t,n){z.set(e,""===t?!1:t,n)}},x.each(["width","height"],function(e,n){x.attrHooks[n]={set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}}})),x.support.hrefNormalized||x.each(["href","src"],function(e,t){x.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}}),x.support.style||(x.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this}),x.support.enctype||(x.propFix.enctype="encoding"),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,n){return x.isArray(n)?e.checked=x.inArray(x(e).val(),n)>=0:t}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;function it(){return!0}function ot(){return!1}function at(){try{return a.activeElement}catch(e){}}x.event={global:{},add:function(e,n,r,o,a){var s,l,u,c,p,f,d,h,g,m,y,v=x._data(e);if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=x.guid++),(l=v.events)||(l=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof x===i||e&&x.event.triggered===e.type?t:x.event.dispatch.apply(f.elem,arguments)},f.elem=e),n=(n||"").match(T)||[""],u=n.length;while(u--)s=rt.exec(n[u])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),g&&(p=x.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=x.event.special[g]||{},d=x.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&x.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=l[g])||(h=l[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),x.event.global[g]=!0);e=null}},remove:function(e,t,n,r,i){var o,a,s,l,u,c,p,f,d,h,g,m=x.hasData(e)&&x._data(e);if(m&&(c=m.events)){t=(t||"").match(T)||[""],u=t.length;while(u--)if(s=rt.exec(t[u])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=x.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),l=o=f.length;while(o--)a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a));l&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||x.removeEvent(e,d,m.handle),delete c[d])}else for(d in c)x.event.remove(e,d+t[u],n,r,!0);x.isEmptyObject(c)&&(delete m.handle,x._removeData(e,"events"))}},trigger:function(n,r,i,o){var s,l,u,c,p,f,d,h=[i||a],g=v.call(n,"type")?n.type:n,m=v.call(n,"namespace")?n.namespace.split("."):[];if(u=f=i=i||a,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+x.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),l=0>g.indexOf(":")&&"on"+g,n=n[x.expando]?n:new x.Event(g,"object"==typeof n&&n),n.isTrigger=o?2:3,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:x.makeArray(r,[n]),p=x.event.special[g]||{},o||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!o&&!p.noBubble&&!x.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(u=u.parentNode);u;u=u.parentNode)h.push(u),f=u;f===(i.ownerDocument||a)&&h.push(f.defaultView||f.parentWindow||e)}d=0;while((u=h[d++])&&!n.isPropagationStopped())n.type=d>1?c:p.bindType||g,s=(x._data(u,"events")||{})[n.type]&&x._data(u,"handle"),s&&s.apply(u,r),s=l&&u[l],s&&x.acceptData(u)&&s.apply&&s.apply(u,r)===!1&&n.preventDefault();if(n.type=g,!o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(h.pop(),r)===!1)&&x.acceptData(i)&&l&&i[g]&&!x.isWindow(i)){f=i[l],f&&(i[l]=null),x.event.triggered=g;try{i[g]()}catch(y){}x.event.triggered=t,f&&(i[l]=f)}return n.result}},dispatch:function(e){e=x.event.fix(e);var n,r,i,o,a,s=[],l=g.call(arguments),u=(x._data(this,"events")||{})[e.type]||[],c=x.event.special[e.type]||{};if(l[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=x.event.handlers.call(this,e,u),n=0;while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((x.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,l),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],l=n.delegateCount,u=e.target;if(l&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!=this;u=u.parentNode||this)if(1===u.nodeType&&(u.disabled!==!0||"click"!==e.type)){for(o=[],a=0;l>a;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?x(r,this).index(u)>=0:x.find(r,this,null,[u]).length),o[r]&&o.push(i);o.length&&s.push({elem:u,handlers:o})}return n.length>l&&s.push({elem:this,handlers:n.slice(l)}),s},fix:function(e){if(e[x.expando])return e;var t,n,r,i=e.type,o=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new x.Event(o),t=r.length;while(t--)n=r[t],e[n]=o[n];return e.target||(e.target=o.srcElement||a),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,o):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,o,s=n.button,l=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||a,o=i.documentElement,r=i.body,e.pageX=n.clientX+(o&&o.scrollLeft||r&&r.scrollLeft||0)-(o&&o.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(o&&o.scrollTop||r&&r.scrollTop||0)-(o&&o.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&l&&(e.relatedTarget=l===e.target?n.toElement:l),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==at()&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===at()&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},click:{trigger:function(){return x.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t},_default:function(e){return x.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},x.removeEvent=a.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))},x.Event=function(e,n){return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&x.extend(this,n),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,t):new x.Event(e,n)},x.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),x.support.submitBubbles||(x.event.special.submit={setup:function(){return x.nodeName(this,"form")?!1:(x.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=x.nodeName(n,"input")||x.nodeName(n,"button")?n.form:t;r&&!x._data(r,"submitBubbles")&&(x.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),x._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&x.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return x.nodeName(this,"form")?!1:(x.event.remove(this,"._submit"),t)}}),x.support.changeBubbles||(x.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(x.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),x.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),x.event.simulate("change",this,e,!0)})),!1):(x.event.add(this,"beforeactivate._change",function(e){var t=e.target;Z.test(t.nodeName)&&!x._data(t,"changeBubbles")&&(x.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||x.event.simulate("change",this.parentNode,e,!0)}),x._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return x.event.remove(this,"._change"),!Z.test(this.nodeName)}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)};x.event.special[t]={setup:function(){0===n++&&a.addEventListener(e,r,!0)},teardown:function(){0===--n&&a.removeEventListener(e,r,!0)}}}),x.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=ot;else if(!i)return this;return 1===o&&(s=i,i=function(e){return x().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=x.guid++)),this.each(function(){x.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,x(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){x.event.remove(this,e,r,n)})},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?x.event.trigger(e,n,r,!0):t}});var st=/^.[^:#\[\.,]*$/,lt=/^(?:parents|prev(?:Until|All))/,ut=x.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};x.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(x(e).filter(function(){for(t=0;i>t;t++)if(x.contains(r[t],this))return!0}));for(t=0;i>t;t++)x.find(e,r[t],n);return n=this.pushStack(i>1?x.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},has:function(e){var t,n=x(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(x.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e||[],!0))},filter:function(e){return this.pushStack(ft(this,e||[],!1))},is:function(e){return!!ft(this,"string"==typeof e&&ut.test(e)?x(e):e||[],!1).length},closest:function(e,t){var n,r=0,i=this.length,o=[],a=ut.test(e)||"string"!=typeof e?x(e,t||this.context):0;for(;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(11>n.nodeType&&(a?a.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);break}return this.pushStack(o.length>1?x.unique(o):o)},index:function(e){return e?"string"==typeof e?x.inArray(this[0],x(e)):x.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);return this.pushStack(x.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function pt(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}x.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return x.dir(e,"parentNode")},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)},next:function(e){return pt(e,"nextSibling")},prev:function(e){return pt(e,"previousSibling")},nextAll:function(e){return x.dir(e,"nextSibling")},prevAll:function(e){return x.dir(e,"previousSibling")},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return x.sibling(e.firstChild)},contents:function(e){return x.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:x.merge([],e.childNodes)}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(ct[e]||(i=x.unique(i)),lt.test(e)&&(i=i.reverse())),this.pushStack(i)}}),x.extend({filter:function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType}))},dir:function(e,n,r){var i=[],o=e[n];while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!x(o).is(r)))1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function ft(e,t,n){if(x.isFunction(t))return x.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return x.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(st.test(t))return x.filter(t,e,n);t=x.filter(t,e)}return x.grep(e,function(e){return x.inArray(e,t)>=0!==n})}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Ct=/^(?:checkbox|radio)$/i,Nt=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:x.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(a),Dt=jt.appendChild(a.createElement("div"));At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===t?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||a).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;for(;null!=(n=r[i]);i++)t||1!==n.nodeType||x.cleanData(Ft(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&_t(Ft(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++){1===e.nodeType&&x.cleanData(Ft(e,!1));while(e.firstChild)e.removeChild(e.firstChild);e.options&&x.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)})},html:function(e){return x.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(gt,""):t;if(!("string"!=typeof e||Tt.test(e)||!x.support.htmlSerialize&&mt.test(e)||!x.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(x.cleanData(Ft(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];i&&(r&&r.parentNode!==i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))},!0),t?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=d.apply([],e);var r,i,o,a,s,l,u=0,c=this.length,p=this,f=c-1,h=e[0],g=x.isFunction(h);if(g||!(1>=c||"string"!=typeof h||x.support.checkClone)&&Nt.test(h))return this.each(function(r){var i=p.eq(r);g&&(e[0]=h.call(this,r,i.html())),i.domManip(e,t,n)});if(c&&(l=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),r=l.firstChild,1===l.childNodes.length&&(l=r),r)){for(a=x.map(Ft(l,"script"),Ht),o=a.length;c>u;u++)i=l,u!==f&&(i=x.clone(i,!0,!0),o&&x.merge(a,Ft(i,"script"))),t.call(this[u],i,u);if(o)for(s=a[a.length-1].ownerDocument,x.map(a,qt),u=0;o>u;u++)i=a[u],kt.test(i.type||"")&&!x._data(i,"globalEval")&&x.contains(s,i)&&(i.src?x._evalUrl(i.src):x.globalEval((i.text||i.textContent||i.innerHTML||"").replace(St,"")));l=r=null}return this}});function Lt(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function Ht(e){return e.type=(null!==x.find.attr(e,"type"))+"/"+e.type,e}function qt(e){var t=Et.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function _t(e,t){var n,r=0;for(;null!=(n=e[r]);r++)x._data(n,"globalEval",!t||x._data(t[r],"globalEval"))}function Mt(e,t){if(1===t.nodeType&&x.hasData(e)){var n,r,i,o=x._data(e),a=x._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)x.event.add(t,n,s[n][r])}a.data&&(a.data=x.extend({},a.data))}}function Ot(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!x.support.noCloneEvent&&t[x.expando]){i=x._data(t);for(r in i.events)x.removeEvent(t,r,i.handle);t.removeAttribute(x.expando)}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),x.support.html5Clone&&e.innerHTML&&!x.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Ct.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){var n,r=0,i=[],o=x(e),a=o.length-1;for(;a>=r;r++)n=r===a?this:this.clone(!0),x(o[r])[t](n),h.apply(i,n.get());return this.pushStack(i)}});function Ft(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;if(!s)for(s=[],r=e.childNodes||e;null!=(o=r[a]);a++)!n||x.nodeName(o,n)?s.push(o):x.merge(s,Ft(o,n));return n===t||n&&x.nodeName(e,n)?x.merge([e],s):s}function Bt(e){Ct.test(e.type)&&(e.defaultChecked=e.checked)}x.extend({clone:function(e,t,n){var r,i,o,a,s,l=x.contains(e.ownerDocument,e);if(x.support.html5Clone||x.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(x.support.noCloneEvent&&x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e)))for(r=Ft(o),s=Ft(e),a=0;null!=(i=s[a]);++a)r[a]&&Ot(i,r[a]);if(t)if(n)for(s=s||Ft(e),r=r||Ft(o),a=0;null!=(i=s[a]);a++)Mt(i,r[a]);else Mt(e,o);return r=Ft(o,"script"),r.length>0&&_t(r,!l&&Ft(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){var i,o,a,s,l,u,c,p=e.length,f=dt(t),d=[],h=0;for(;p>h;h++)if(o=e[h],o||0===o)if("object"===x.type(o))x.merge(d,o.nodeType?[o]:o);else if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),l=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[l]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];while(i--)s=s.lastChild;if(!x.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!x.support.tbody){o="table"!==l||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;while(i--)x.nodeName(u=o.childNodes[i],"tbody")&&!u.childNodes.length&&o.removeChild(u)}x.merge(d,s.childNodes),s.textContent="";while(s.firstChild)s.removeChild(s.firstChild);s=f.lastChild}else d.push(t.createTextNode(o));s&&f.removeChild(s),x.support.appendChecked||x.grep(Ft(d,"input"),Bt),h=0;while(o=d[h++])if((!r||-1===x.inArray(o,r))&&(a=x.contains(o.ownerDocument,o),s=Ft(f.appendChild(o),"script"),a&&_t(s),n)){i=0;while(o=s[i++])kt.test(o.type||"")&&n.push(o)}return s=null,f},cleanData:function(e,t){var n,r,o,a,s=0,l=x.expando,u=x.cache,c=x.support.deleteExpando,f=x.event.special;for(;null!=(n=e[s]);s++)if((t||x.acceptData(n))&&(o=n[l],a=o&&u[o])){if(a.events)for(r in a.events)f[r]?x.event.remove(n,r):x.removeEvent(n,r,a.handle);
u[o]&&(delete u[o],c?delete n[l]:typeof n.removeAttribute!==i?n.removeAttribute(l):n[l]=null,p.push(o))}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})}}),x.fn.extend({wrapAll:function(e){if(x.isFunction(e))return this.each(function(t){x(this).wrapAll(e.call(this,t))});if(this[0]){var t=x(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&1===e.firstChild.nodeType)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return x.isFunction(e)?this.each(function(t){x(this).wrapInner(e.call(this,t))}):this.each(function(){var t=x(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=x.isFunction(e);return this.each(function(n){x(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){x.nodeName(this,"body")||x(this).replaceWith(this.childNodes)}).end()}});var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+w+")(.*)$","i"),Yt=RegExp("^("+w+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+w+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];function tn(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;while(i--)if(t=en[i]+n,t in e)return t;return r}function nn(e,t){return e=t||e,"none"===x.css(e,"display")||!x.contains(e.ownerDocument,e)}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;for(;s>a;a++)r=e[a],r.style&&(o[a]=x._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=x._data(r,"olddisplay",ln(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&x._data(r,"olddisplay",i?n:x.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}x.fn.extend({css:function(e,n){return x.access(this,function(e,n,r){var i,o,a={},s=0;if(x.isArray(n)){for(o=Rt(e),i=n.length;i>s;s++)a[n[s]]=x.css(e,n[s],!1,o);return a}return r!==t?x.style(e,n,r):x.css(e,n)},e,n,arguments.length>1)},show:function(){return rn(this,!0)},hide:function(){return rn(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){nn(this)?x(this).show():x(this).hide()})}}),x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":x.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,l=x.camelCase(n),u=e.style;if(n=x.cssProps[l]||(x.cssProps[l]=tn(u,l)),s=x.cssHooks[n]||x.cssHooks[l],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:u[n];if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(x.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||x.cssNumber[l]||(r+="px"),x.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(u[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{u[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,l=x.camelCase(n);return n=x.cssProps[l]||(x.cssProps[l]=tn(e.style,l)),s=x.cssHooks[n]||x.cssHooks[l],s&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||x.isNumeric(o)?o||0:a):a}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s.getPropertyValue(n)||s[n]:t,u=e.style;return s&&(""!==l||x.contains(e.ownerDocument,e)||(l=x.style(e,n)),Yt.test(l)&&Ut.test(n)&&(i=u.width,o=u.minWidth,a=u.maxWidth,u.minWidth=u.maxWidth=u.width=l,l=s.width,u.width=i,u.minWidth=o,u.maxWidth=a)),l}):a.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s[n]:t,u=e.style;return null==l&&u&&u[n]&&(l=u[n]),Yt.test(l)&&!zt.test(n)&&(i=u.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),u.left="fontSize"===n?"1em":l,l=u.pixelLeft+"px",u.left=i,a&&(o.left=a)),""===l?"auto":l});function on(e,t,n){var r=Vt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;for(;4>o;o+=2)"margin"===n&&(a+=x.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=x.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=x.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=x.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=x.css(e,"border"+Zt[o]+"Width",!0,i)));return a}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i))return i;r=a&&(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"}function ln(e){var t=a,n=Gt[e];return n||(n=un(e,t),"none"!==n&&n||(Pt=(Pt||x("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=un(e,t),Pt.detach()),Gt[e]=n),n}function un(e,t){var n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],"display");return n.remove(),r}x.each(["height","width"],function(e,n){x.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(x.css(e,"display"))?x.swap(e,Qt,function(){return sn(e,n,i)}):sn(e,n,i):t},set:function(e,t,r){var i=r&&Rt(e);return on(e,t,r?an(e,n,r,x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,i),i):0)}}}),x.support.opacity||(x.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=x.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===x.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)}}),x(function(){x.support.reliableMarginRight||(x.cssHooks.marginRight={get:function(e,n){return n?x.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t}}),!x.support.pixelPosition&&x.fn.position&&x.each(["top","left"],function(e,n){x.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?x(e).position()[n]+"px":r):t}}})}),x.expr&&x.expr.filters&&(x.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!x.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||x.css(e,"display"))},x.expr.filters.visible=function(e){return!x.expr.filters.hidden(e)}),x.each({margin:"",padding:"",border:"Width"},function(e,t){x.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+Zt[r]+t]=o[r]||o[r-2]||o[0];return i}},Ut.test(e)||(x.cssHooks[e+t].set=on)});var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;x.fn.extend({serialize:function(){return x.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");return e?x.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!x(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Ct.test(e))}).map(function(e,t){var n=x(this).val();return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}}):{name:t.name,value:n.replace(fn,"\r\n")}}).get()}}),x.param=function(e,n){var r,i=[],o=function(e,t){t=x.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e))x.each(e,function(){o(this.name,this.value)});else for(r in e)gn(r,e[r],n,o);return i.join("&").replace(cn,"+")};function gn(e,t,n,r){var i;if(x.isArray(t))x.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==x.type(t))r(e,t);else for(i in t)gn(e+"["+i+"]",t[i],n,r)}x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){x.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),x.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var mn,yn,vn=x.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Cn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Nn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=x.fn.load,An={},jn={},Dn="*/".concat("*");try{yn=o.href}catch(Ln){yn=a.createElement("a"),yn.href="",yn=yn.href}mn=En.exec(yn.toLowerCase())||[];function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(T)||[];if(x.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function qn(e,n,r,i){var o={},a=e===jn;function s(l){var u;return o[l]=!0,x.each(e[l]||[],function(e,l){var c=l(n,r,i);return"string"!=typeof c||a||o[c]?a?!(u=c):t:(n.dataTypes.unshift(c),s(c),!1)}),u}return s(n.dataTypes[0])||!o["*"]&&s("*")}function _n(e,n){var r,i,o=x.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&x.extend(!0,e,r),e}x.fn.load=function(e,n,r){if("string"!=typeof e&&Sn)return Sn.apply(this,arguments);var i,o,a,s=this,l=e.indexOf(" ");return l>=0&&(i=e.slice(l,e.length),e=e.slice(0,l)),x.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&x.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?x("<div>").append(x.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){x.fn[t]=function(e){return this.on(t,e)}}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Cn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":x.parseJSON,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?_n(_n(e,x.ajaxSettings),t):_n(x.ajaxSettings,e)},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};var r,i,o,a,s,l,u,c,p=x.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?x(f):x.event,h=x.Deferred(),g=x.Callbacks("once memory"),m=p.statusCode||{},y={},v={},b=0,w="canceled",C={readyState:0,getResponseHeader:function(e){var t;if(2===b){if(!c){c={};while(t=Tn.exec(a))c[t[1].toLowerCase()]=t[2]}t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===b?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return b||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return b||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>b)for(t in e)m[t]=[m[t],e[t]];else C.always(e[C.status]);return this},abort:function(e){var t=e||w;return u&&u.abort(t),k(0,t),this}};if(h.promise(C).complete=g.add,C.success=C.done,C.error=C.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=x.trim(p.dataType||"*").toLowerCase().match(T)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?"80":"443"))===(mn[3]||("http:"===mn[1]?"80":"443")))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=x.param(p.data,p.traditional)),qn(An,p,n,C),2===b)return C;l=p.global,l&&0===x.active++&&x.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Nn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(x.lastModified[o]&&C.setRequestHeader("If-Modified-Since",x.lastModified[o]),x.etag[o]&&C.setRequestHeader("If-None-Match",x.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&C.setRequestHeader("Content-Type",p.contentType),C.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);for(i in p.headers)C.setRequestHeader(i,p.headers[i]);if(p.beforeSend&&(p.beforeSend.call(f,C,p)===!1||2===b))return C.abort();w="abort";for(i in{success:1,error:1,complete:1})C[i](p[i]);if(u=qn(jn,p,n,C)){C.readyState=1,l&&d.trigger("ajaxSend",[C,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){C.abort("timeout")},p.timeout));try{b=1,u.send(y,k)}catch(N){if(!(2>b))throw N;k(-1,N)}}else k(-1,"No Transport");function k(e,n,r,i){var c,y,v,w,T,N=n;2!==b&&(b=2,s&&clearTimeout(s),u=t,a=i||"",C.readyState=e>0?4:0,c=e>=200&&300>e||304===e,r&&(w=Mn(p,C,r)),w=On(p,w,C,c),c?(p.ifModified&&(T=C.getResponseHeader("Last-Modified"),T&&(x.lastModified[o]=T),T=C.getResponseHeader("etag"),T&&(x.etag[o]=T)),204===e||"HEAD"===p.type?N="nocontent":304===e?N="notmodified":(N=w.state,y=w.data,v=w.error,c=!v)):(v=N,(e||!N)&&(N="error",0>e&&(e=0))),C.status=e,C.statusText=(n||N)+"",c?h.resolveWith(f,[y,N,C]):h.rejectWith(f,[C,N,v]),C.statusCode(m),m=t,l&&d.trigger(c?"ajaxSuccess":"ajaxError",[C,p,c?y:v]),g.fireWith(f,[C,N]),l&&(d.trigger("ajaxComplete",[C,p]),--x.active||x.event.trigger("ajaxStop")))}return C},getJSON:function(e,t,n){return x.get(e,t,n,"json")},getScript:function(e,n){return x.get(e,t,n,"script")}}),x.each(["get","post"],function(e,n){x[n]=function(e,r,i,o){return x.isFunction(r)&&(o=o||i,i=r,r=t),x.ajax({url:e,type:n,dataType:o,data:r,success:i})}});function Mn(e,n,r){var i,o,a,s,l=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));if(o)for(s in l)if(l[s]&&l[s].test(o)){u.unshift(s);break}if(u[0]in r)a=u[0];else{for(s in r){if(!u[0]||e.converters[s+" "+u[0]]){a=s;break}i||(i=s)}a=a||i}return a?(a!==u[0]&&u.unshift(a),r[a]):t}function On(e,t,n,r){var i,o,a,s,l,u={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)u[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!l&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=o,o=c.shift())if("*"===o)o=l;else if("*"!==l&&l!==o){if(a=u[l+" "+o]||u["* "+o],!a)for(i in u)if(s=i.split(" "),s[1]===o&&(a=u[l+" "+s[0]]||u["* "+s[0]])){a===!0?a=u[i]:u[i]!==!0&&(o=s[0],c.unshift(s[1]));break}if(a!==!0)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(p){return{state:"parsererror",error:a?p:"No conversion from "+l+" to "+o}}}return{state:"success",data:t}}x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return x.globalEval(e),e}}}),x.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),x.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=a.head||x("head")[0]||a.documentElement;return{send:function(t,i){n=a.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var Fn=[],Bn=/(=)\?(?=&|$)|\?\?/;x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Fn.pop()||x.expando+"_"+vn++;return this[e]=!0,e}}),x.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,l=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");return l||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=x.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,l?n[l]=n[l].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||x.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,Fn.push(o)),s&&x.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;for(e in Pn)Pn[e](t,!0)};function In(){try{return new e.XMLHttpRequest}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}x.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&In()||zn()}:In,Rn=x.ajaxSettings.xhr(),x.support.cors=!!Rn&&"withCredentials"in Rn,Rn=x.support.ajax=!!Rn,Rn&&x.ajaxTransport(function(n){if(!n.crossDomain||x.support.cors){var r;return{send:function(i,o){var a,s,l=n.xhr();if(n.username?l.open(n.type,n.url,n.async,n.username,n.password):l.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)l[s]=n.xhrFields[s];n.mimeType&&l.overrideMimeType&&l.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)l.setRequestHeader(s,i[s])}catch(u){}l.send(n.hasContent&&n.data||null),r=function(e,i){var s,u,c,p;try{if(r&&(i||4===l.readyState))if(r=t,a&&(l.onreadystatechange=x.noop,$n&&delete Pn[a]),i)4!==l.readyState&&l.abort();else{p={},s=l.status,u=l.getAllResponseHeaders(),"string"==typeof l.responseText&&(p.text=l.responseText);try{c=l.statusText}catch(f){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404}}catch(d){i||o(-1,d)}p&&o(s,c,p,u)},n.async?4===l.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},x(e).unload($n)),Pn[a]=r),l.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+w+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Yn.exec(t),o=i&&i[3]||(x.cssNumber[e]?"":"px"),a=(x.cssNumber[e]||"px"!==o&&+r)&&Yn.exec(x.css(n.elem,e)),s=1,l=20;if(a&&a[3]!==o){o=o||a[3],i=i||[],a=+r||1;do s=s||".5",a/=s,x.style(n.elem,e,a+o);while(s!==(s=n.cur()/r)&&1!==s&&--l)}return i&&(a=n.start=+a||+r||0,n.unit=o,n.end=i[1]?a+(i[1]+1)*i[2]:+i[2]),n}]};function Kn(){return setTimeout(function(){Xn=t}),Xn=x.now()}function Zn(e,t,n){var r,i=(Qn[t]||[]).concat(Qn["*"]),o=0,a=i.length;for(;a>o;o++)if(r=i[o].call(n,t,e))return r}function er(e,t,n){var r,i,o=0,a=Gn.length,s=x.Deferred().always(function(){delete l.elem}),l=function(){if(i)return!1;var t=Xn||Kn(),n=Math.max(0,u.startTime+u.duration-t),r=n/u.duration||0,o=1-r,a=0,l=u.tweens.length;for(;l>a;a++)u.tweens[a].run(o);return s.notifyWith(e,[u,o,n]),1>o&&l?n:(s.resolveWith(e,[u]),!1)},u=s.promise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=x.Tween(e,u.opts,t,n,u.opts.specialEasing[t]||u.opts.easing);return u.tweens.push(r),r},stop:function(t){var n=0,r=t?u.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)u.tweens[n].run(1);return t?s.resolveWith(e,[u,t]):s.rejectWith(e,[u,t]),this}}),c=u.props;for(tr(c,u.opts.specialEasing);a>o;o++)if(r=Gn[o].call(u,e,c,u.opts))return r;return x.map(c,Zn,u),x.isFunction(u.opts.start)&&u.opts.start.call(e,u),x.fx.timer(x.extend(l,{elem:e,anim:u,queue:u.opts.queue})),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always)}function tr(e,t){var n,r,i,o,a;for(n in e)if(r=x.camelCase(n),i=t[r],o=e[n],x.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),a=x.cssHooks[r],a&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}x.Animation=x.extend(er,{tweener:function(e,t){x.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)}});function nr(e,t,n){var r,i,o,a,s,l,u=this,c={},p=e.style,f=e.nodeType&&nn(e),d=x._data(e,"fxshow");n.queue||(s=x._queueHooks(e,"fx"),null==s.unqueued&&(s.unqueued=0,l=s.empty.fire,s.empty.fire=function(){s.unqueued||l()}),s.unqueued++,u.always(function(){u.always(function(){s.unqueued--,x.queue(e,"fx").length||s.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],"inline"===x.css(e,"display")&&"none"===x.css(e,"float")&&(x.support.inlineBlockNeedsLayout&&"inline"!==ln(e.nodeName)?p.zoom=1:p.display="inline-block")),n.overflow&&(p.overflow="hidden",x.support.shrinkWrapBlocks||u.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],Vn.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(f?"hide":"show"))continue;c[r]=d&&d[r]||x.style(e,r)}if(!x.isEmptyObject(c)){d?"hidden"in d&&(f=d.hidden):d=x._data(e,"fxshow",{}),o&&(d.hidden=!f),f?x(e).show():u.done(function(){x(e).hide()}),u.done(function(){var t;x._removeData(e,"fxshow");for(t in c)x.style(e,t,c[t])});for(r in c)a=Zn(f?d[r]:0,r,u),r in d||(d[r]=a.start,f&&(a.end=a.start,a.start="width"===r||"height"===r?1:0))}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)}x.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?"":"px")},cur:function(){var e=rr.propHooks[this.prop];return e&&e.get?e.get(this):rr.propHooks._default.get(this)},run:function(e){var t,n=rr.propHooks[this.prop];return this.pos=t=this.options.duration?x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=x.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){x.fx.step[e.prop]?x.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[x.cssProps[e.prop]]||x.cssHooks[e.prop])?x.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},x.each(["toggle","show","hide"],function(e,t){var n=x.fn[t];x.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)}}),x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=x.isEmptyObject(e),o=x.speed(t,n,r),a=function(){var t=er(this,x.extend({},e),o);(i||x._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=x.timers,a=x._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Jn.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&x.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=x._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=x.timers,a=r?r.length:0;for(n.finish=!0,x.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function ir(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=Zt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}x.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){x.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),x.speed=function(e,t,n){var r=e&&"object"==typeof e?x.extend({},e):{complete:n||!n&&t||x.isFunction(e)&&e,duration:e,easing:n&&t||t&&!x.isFunction(t)&&t};return r.duration=x.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in x.fx.speeds?x.fx.speeds[r.duration]:x.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){x.isFunction(r.old)&&r.old.call(this),r.queue&&x.dequeue(this,r.queue)},r},x.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},x.timers=[],x.fx=rr.prototype.init,x.fx.tick=function(){var e,n=x.timers,r=0;for(Xn=x.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||x.fx.stop(),Xn=t},x.fx.timer=function(e){e()&&x.timers.push(e)&&x.fx.start()},x.fx.interval=13,x.fx.start=function(){Un||(Un=setInterval(x.fx.tick,x.fx.interval))},x.fx.stop=function(){clearInterval(Un),Un=null},x.fx.speeds={slow:600,fast:200,_default:400},x.fx.step={},x.expr&&x.expr.filters&&(x.expr.filters.animated=function(e){return x.grep(x.timers,function(t){return e===t.elem}).length}),x.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){x.offset.setOffset(this,e,t)});var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;if(s)return n=s.documentElement,x.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o},x.offset={setOffset:function(e,t,n){var r=x.css(e,"position");"static"===r&&(e.style.position="relative");var i=x(e),o=i.offset(),a=x.css(e,"top"),s=x.css(e,"left"),l=("absolute"===r||"fixed"===r)&&x.inArray("auto",[a,s])>-1,u={},c={},p,f;l?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),x.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(u.top=t.top-o.top+p),null!=t.left&&(u.left=t.left-o.left+f),"using"in t?t.using.call(e,u):i.css(u)}},x.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===x.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),x.nodeName(e[0],"html")||(n=e.offset()),n.top+=x.css(e[0],"borderTopWidth",!0),n.left+=x.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-x.css(r,"marginTop",!0),left:t.left-n.left-x.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||s;while(e&&!x.nodeName(e,"html")&&"static"===x.css(e,"position"))e=e.offsetParent;return e||s})}}),x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);x.fn[e]=function(i){return x.access(this,function(e,i,o){var a=or(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?x(a).scrollLeft():o,r?o:x(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}});function or(e){return x.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}x.each({Height:"height",Width:"width"},function(e,n){x.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){x.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return x.access(this,function(n,r,i){var o;return x.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?x.css(n,r,s):x.style(n,r,i,s)},n,a?i:t,a,null)}})}),x.fn.size=function(){return this.length},x.fn.andSelf=x.fn.addBack,"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:(e.jQuery=e.$=x,"function"==typeof define&&define.amd&&define("jquery",[],function(){return x}))})(window);

/* NUGET: BEGIN LICENSE TEXT
 *
 * Microsoft grants you the right to use these script files for the sole
 * purpose of either: (i) interacting through your browser with the Microsoft
 * website or online service, subject to the applicable licensing or use
 * terms; or (ii) using the files as included with a Microsoft product subject
 * to that product's license terms. Microsoft reserves all other rights to the
 * files not expressly granted by Microsoft, whether by implication, estoppel
 * or otherwise. Insofar as a script file is dual licensed under GPL,
 * Microsoft neither took the code under GPL nor distributes it thereunder but
 * under the terms set out in this paragraph. All notices and licenses
 * below are for informational purposes only.
 *
 * NUGET: END LICENSE TEXT */

/**
* bootstrap.js v3.0.0 by @fat and @mdo
* Copyright 2013 Twitter Inc.
* http://www.apache.org/licenses/LICENSE-2.0
*/
if(!jQuery)throw new Error("Bootstrap requires jQuery");+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]}}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one(a.support.transition.end,function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b()})}(window.jQuery),+function(a){"use strict";var b='[data-dismiss="alert"]',c=function(c){a(c).on("click",b,this.close)};c.prototype.close=function(b){function c(){f.trigger("closed.bs.alert").remove()}var d=a(this),e=d.attr("data-target");e||(e=d.attr("href"),e=e&&e.replace(/.*(?=#[^\s]*$)/,""));var f=a(e);b&&b.preventDefault(),f.length||(f=d.hasClass("alert")?d:d.parent()),f.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one(a.support.transition.end,c).emulateTransitionEnd(150):c())};var d=a.fn.alert;a.fn.alert=function(b){return this.each(function(){var d=a(this),e=d.data("bs.alert");e||d.data("bs.alert",e=new c(this)),"string"==typeof b&&e[b].call(d)})},a.fn.alert.Constructor=c,a.fn.alert.noConflict=function(){return a.fn.alert=d,this},a(document).on("click.bs.alert.data-api",b,c.prototype.close)}(window.jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d)};b.DEFAULTS={loadingText:"loading..."},b.prototype.setState=function(a){var b="disabled",c=this.$element,d=c.is("input")?"val":"html",e=c.data();a+="Text",e.resetText||c.data("resetText",c[d]()),c[d](e[a]||this.options[a]),setTimeout(function(){"loadingText"==a?c.addClass(b).attr(b,b):c.removeClass(b).removeAttr(b)},0)},b.prototype.toggle=function(){var a=this.$element.closest('[data-toggle="buttons"]');if(a.length){var b=this.$element.find("input").prop("checked",!this.$element.hasClass("active")).trigger("change");"radio"===b.prop("type")&&a.find(".active").removeClass("active")}this.$element.toggleClass("active")};var c=a.fn.button;a.fn.button=function(c){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof c&&c;e||d.data("bs.button",e=new b(this,f)),"toggle"==c?e.toggle():c&&e.setState(c)})},a.fn.button.Constructor=b,a.fn.button.noConflict=function(){return a.fn.button=c,this},a(document).on("click.bs.button.data-api","[data-toggle^=button]",function(b){var c=a(b.target);c.hasClass("btn")||(c=c.closest(".btn")),c.button("toggle"),b.preventDefault()})}(window.jQuery),+function(a){"use strict";var b=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=this.sliding=this.interval=this.$active=this.$items=null,"hover"==this.options.pause&&this.$element.on("mouseenter",a.proxy(this.pause,this)).on("mouseleave",a.proxy(this.cycle,this))};b.DEFAULTS={interval:5e3,pause:"hover",wrap:!0},b.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},b.prototype.getActiveIndex=function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},b.prototype.to=function(b){var c=this,d=this.getActiveIndex();return b>this.$items.length-1||0>b?void 0:this.sliding?this.$element.one("slid",function(){c.to(b)}):d==b?this.pause().cycle():this.slide(b>d?"next":"prev",a(this.$items[b]))},b.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition.end&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},b.prototype.next=function(){return this.sliding?void 0:this.slide("next")},b.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},b.prototype.slide=function(b,c){var d=this.$element.find(".item.active"),e=c||d[b](),f=this.interval,g="next"==b?"left":"right",h="next"==b?"first":"last",i=this;if(!e.length){if(!this.options.wrap)return;e=this.$element.find(".item")[h]()}this.sliding=!0,f&&this.pause();var j=a.Event("slide.bs.carousel",{relatedTarget:e[0],direction:g});if(!e.hasClass("active")){if(this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid",function(){var b=a(i.$indicators.children()[i.getActiveIndex()]);b&&b.addClass("active")})),a.support.transition&&this.$element.hasClass("slide")){if(this.$element.trigger(j),j.isDefaultPrevented())return;e.addClass(b),e[0].offsetWidth,d.addClass(g),e.addClass(g),d.one(a.support.transition.end,function(){e.removeClass([b,g].join(" ")).addClass("active"),d.removeClass(["active",g].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger("slid")},0)}).emulateTransitionEnd(600)}else{if(this.$element.trigger(j),j.isDefaultPrevented())return;d.removeClass("active"),e.addClass("active"),this.sliding=!1,this.$element.trigger("slid")}return f&&this.cycle(),this}};var c=a.fn.carousel;a.fn.carousel=function(c){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c),g="string"==typeof c?c:f.slide;e||d.data("bs.carousel",e=new b(this,f)),"number"==typeof c?e.to(c):g?e[g]():f.interval&&e.pause().cycle()})},a.fn.carousel.Constructor=b,a.fn.carousel.noConflict=function(){return a.fn.carousel=c,this},a(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(b){var c,d=a(this),e=a(d.attr("data-target")||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"")),f=a.extend({},e.data(),d.data()),g=d.attr("data-slide-to");g&&(f.interval=!1),e.carousel(f),(g=d.attr("data-slide-to"))&&e.data("bs.carousel").to(g),b.preventDefault()}),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var b=a(this);b.carousel(b.data())})})}(window.jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.transitioning=null,this.options.parent&&(this.$parent=a(this.options.parent)),this.options.toggle&&this.toggle()};b.DEFAULTS={toggle:!0},b.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},b.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b=a.Event("show.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.$parent&&this.$parent.find("> .panel > .in");if(c&&c.length){var d=c.data("bs.collapse");if(d&&d.transitioning)return;c.collapse("hide"),d||c.data("bs.collapse",null)}var e=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[e](0),this.transitioning=1;var f=function(){this.$element.removeClass("collapsing").addClass("in")[e]("auto"),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return f.call(this);var g=a.camelCase(["scroll",e].join("-"));this.$element.one(a.support.transition.end,a.proxy(f,this)).emulateTransitionEnd(350)[e](this.$element[0][g])}}},b.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var d=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};return a.support.transition?(this.$element[c](0).one(a.support.transition.end,a.proxy(d,this)).emulateTransitionEnd(350),void 0):d.call(this)}}},b.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var c=a.fn.collapse;a.fn.collapse=function(c){return this.each(function(){var d=a(this),e=d.data("bs.collapse"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c);e||d.data("bs.collapse",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.collapse.Constructor=b,a.fn.collapse.noConflict=function(){return a.fn.collapse=c,this},a(document).on("click.bs.collapse.data-api","[data-toggle=collapse]",function(b){var c,d=a(this),e=d.attr("data-target")||b.preventDefault()||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,""),f=a(e),g=f.data("bs.collapse"),h=g?"toggle":d.data(),i=d.attr("data-parent"),j=i&&a(i);g&&g.transitioning||(j&&j.find('[data-toggle=collapse][data-parent="'+i+'"]').not(d).addClass("collapsed"),d[f.hasClass("in")?"addClass":"removeClass"]("collapsed")),f.collapse(h)})}(window.jQuery),+function(a){"use strict";function b(){a(d).remove(),a(e).each(function(b){var d=c(a(this));d.hasClass("open")&&(d.trigger(b=a.Event("hide.bs.dropdown")),b.isDefaultPrevented()||d.removeClass("open").trigger("hidden.bs.dropdown"))})}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}var d=".dropdown-backdrop",e="[data-toggle=dropdown]",f=function(b){a(b).on("click.bs.dropdown",this.toggle)};f.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){if("ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b),f.trigger(d=a.Event("show.bs.dropdown")),d.isDefaultPrevented())return;f.toggleClass("open").trigger("shown.bs.dropdown"),e.focus()}return!1}},f.prototype.keydown=function(b){if(/(38|40|27)/.test(b.keyCode)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var f=c(d),g=f.hasClass("open");if(!g||g&&27==b.keyCode)return 27==b.which&&f.find(e).focus(),d.click();var h=a("[role=menu] li:not(.divider):visible a",f);if(h.length){var i=h.index(h.filter(":focus"));38==b.keyCode&&i>0&&i--,40==b.keyCode&&i<h.length-1&&i++,~i||(i=0),h.eq(i).focus()}}}};var g=a.fn.dropdown;a.fn.dropdown=function(b){return this.each(function(){var c=a(this),d=c.data("dropdown");d||c.data("dropdown",d=new f(this)),"string"==typeof b&&d[b].call(c)})},a.fn.dropdown.Constructor=f,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=g,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",e,f.prototype.toggle).on("keydown.bs.dropdown.data-api",e+", [role=menu]",f.prototype.keydown)}(window.jQuery),+function(a){"use strict";var b=function(b,c){this.options=c,this.$element=a(b),this.$backdrop=this.isShown=null,this.options.remote&&this.$element.load(this.options.remote)};b.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},b.prototype.toggle=function(a){return this[this.isShown?"hide":"show"](a)},b.prototype.show=function(b){var c=this,d=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(d),this.isShown||d.isDefaultPrevented()||(this.isShown=!0,this.escape(),this.$element.on("click.dismiss.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.backdrop(function(){var d=a.support.transition&&c.$element.hasClass("fade");c.$element.parent().length||c.$element.appendTo(document.body),c.$element.show(),d&&c.$element[0].offsetWidth,c.$element.addClass("in").attr("aria-hidden",!1),c.enforceFocus();var e=a.Event("shown.bs.modal",{relatedTarget:b});d?c.$element.find(".modal-dialog").one(a.support.transition.end,function(){c.$element.focus().trigger(e)}).emulateTransitionEnd(300):c.$element.focus().trigger(e)}))},b.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one(a.support.transition.end,a.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal())},b.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.focus()},this))},b.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},b.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.removeBackdrop(),a.$element.trigger("hidden.bs.modal")})},b.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},b.prototype.backdrop=function(b){var c=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var d=a.support.transition&&c;if(this.$backdrop=a('<div class="modal-backdrop '+c+'" />').appendTo(document.body),this.$element.on("click.dismiss.modal",a.proxy(function(a){a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),d&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;d?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()):b&&b()};var c=a.fn.modal;a.fn.modal=function(c,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},b.DEFAULTS,e.data(),"object"==typeof c&&c);f||e.data("bs.modal",f=new b(this,g)),"string"==typeof c?f[c](d):g.show&&f.show(d)})},a.fn.modal.Constructor=b,a.fn.modal.noConflict=function(){return a.fn.modal=c,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(b){var c=a(this),d=c.attr("href"),e=a(c.attr("data-target")||d&&d.replace(/.*(?=#[^\s]+$)/,"")),f=e.data("modal")?"toggle":a.extend({remote:!/#/.test(d)&&d},e.data(),c.data());b.preventDefault(),e.modal(f,this).one("hide",function(){c.is(":visible")&&c.focus()})}),a(document).on("show.bs.modal",".modal",function(){a(document.body).addClass("modal-open")}).on("hidden.bs.modal",".modal",function(){a(document.body).removeClass("modal-open")})}(window.jQuery),+function(a){"use strict";var b=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};b.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},b.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d);for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focus",i="hover"==g?"mouseleave":"blur";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},b.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},b.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show),void 0):c.show()},b.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide),void 0):c.hide()},b.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){if(this.$element.trigger(b),b.isDefaultPrevented())return;var c=this.tip();this.setContent(),this.options.animation&&c.addClass("fade");var d="function"==typeof this.options.placement?this.options.placement.call(this,c[0],this.$element[0]):this.options.placement,e=/\s?auto?\s?/i,f=e.test(d);f&&(d=d.replace(e,"")||"top"),c.detach().css({top:0,left:0,display:"block"}).addClass(d),this.options.container?c.appendTo(this.options.container):c.insertAfter(this.$element);var g=this.getPosition(),h=c[0].offsetWidth,i=c[0].offsetHeight;if(f){var j=this.$element.parent(),k=d,l=document.documentElement.scrollTop||document.body.scrollTop,m="body"==this.options.container?window.innerWidth:j.outerWidth(),n="body"==this.options.container?window.innerHeight:j.outerHeight(),o="body"==this.options.container?0:j.offset().left;d="bottom"==d&&g.top+g.height+i-l>n?"top":"top"==d&&g.top-l-i<0?"bottom":"right"==d&&g.right+h>m?"left":"left"==d&&g.left-h<o?"right":d,c.removeClass(k).addClass(d)}var p=this.getCalculatedOffset(d,g,h,i);this.applyPlacement(p,d),this.$element.trigger("shown.bs."+this.type)}},b.prototype.applyPlacement=function(a,b){var c,d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),a.top=a.top+g,a.left=a.left+h,d.offset(a).addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;if("top"==b&&j!=f&&(c=!0,a.top=a.top+f-j),/bottom|top/.test(b)){var k=0;a.left<0&&(k=-2*a.left,a.left=0,d.offset(a),i=d[0].offsetWidth,j=d[0].offsetHeight),this.replaceArrow(k-e+i,i,"left")}else this.replaceArrow(j-f,j,"top");c&&d.offset(a)},b.prototype.replaceArrow=function(a,b,c){this.arrow().css(c,a?50*(1-a/b)+"%":"")},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},b.prototype.hide=function(){function b(){"in"!=c.hoverState&&d.detach()}var c=this,d=this.tip(),e=a.Event("hide.bs."+this.type);return this.$element.trigger(e),e.isDefaultPrevented()?void 0:(d.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?d.one(a.support.transition.end,b).emulateTransitionEnd(150):b(),this.$element.trigger("hidden.bs."+this.type),this)},b.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},b.prototype.hasContent=function(){return this.getTitle()},b.prototype.getPosition=function(){var b=this.$element[0];return a.extend({},"function"==typeof b.getBoundingClientRect?b.getBoundingClientRect():{width:b.offsetWidth,height:b.offsetHeight},this.$element.offset())},b.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},b.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},b.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},b.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},b.prototype.enable=function(){this.enabled=!0},b.prototype.disable=function(){this.enabled=!1},b.prototype.toggleEnabled=function(){this.enabled=!this.enabled},b.prototype.toggle=function(b){var c=b?a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type):this;c.tip().hasClass("in")?c.leave(c):c.enter(c)},b.prototype.destroy=function(){this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var c=a.fn.tooltip;a.fn.tooltip=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof c&&c;e||d.data("bs.tooltip",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.tooltip.Constructor=b,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=c,this}}(window.jQuery),+function(a){"use strict";var b=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");b.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),b.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),b.prototype.constructor=b,b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content")[this.options.html?"html":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},b.prototype.hasContent=function(){return this.getTitle()||this.getContent()},b.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},b.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var c=a.fn.popover;a.fn.popover=function(c){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof c&&c;e||d.data("bs.popover",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.popover.Constructor=b,a.fn.popover.noConflict=function(){return a.fn.popover=c,this}}(window.jQuery),+function(a){"use strict";function b(c,d){var e,f=a.proxy(this.process,this);this.$element=a(c).is("body")?a(window):a(c),this.$body=a("body"),this.$scrollElement=this.$element.on("scroll.bs.scroll-spy.data-api",f),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||(e=a(c).attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.offsets=a([]),this.targets=a([]),this.activeTarget=null,this.refresh(),this.process()}b.DEFAULTS={offset:10},b.prototype.refresh=function(){var b=this.$element[0]==window?"offset":"position";this.offsets=a([]),this.targets=a([]);var c=this;this.$body.find(this.selector).map(function(){var d=a(this),e=d.data("target")||d.attr("href"),f=/^#\w/.test(e)&&a(e);return f&&f.length&&[[f[b]().top+(!a.isWindow(c.$scrollElement.get(0))&&c.$scrollElement.scrollTop()),e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){c.offsets.push(this[0]),c.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,d=c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(b>=d)return g!=(a=f.last()[0])&&this.activate(a);for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(!e[a+1]||b<=e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,a(this.selector).parents(".active").removeClass("active");var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate")};var c=a.fn.scrollspy;a.fn.scrollspy=function(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=c,this},a(window).on("load",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);b.scrollspy(b.data())})})}(window.jQuery),+function(a){"use strict";var b=function(b){this.element=a(b)};b.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.attr("data-target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a")[0],f=a.Event("show.bs.tab",{relatedTarget:e});if(b.trigger(f),!f.isDefaultPrevented()){var g=a(d);this.activate(b.parent("li"),c),this.activate(g,g.parent(),function(){b.trigger({type:"shown.bs.tab",relatedTarget:e})})}}},b.prototype.activate=function(b,c,d){function e(){f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),b.addClass("active"),g?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active"),d&&d()}var f=c.find("> .active"),g=d&&a.support.transition&&f.hasClass("fade");g?f.one(a.support.transition.end,e).emulateTransitionEnd(150):e(),f.removeClass("in")};var c=a.fn.tab;a.fn.tab=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new b(this)),"string"==typeof c&&e[c]()})},a.fn.tab.Constructor=b,a.fn.tab.noConflict=function(){return a.fn.tab=c,this},a(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(b){b.preventDefault(),a(this).tab("show")})}(window.jQuery),+function(a){"use strict";var b=function(c,d){this.options=a.extend({},b.DEFAULTS,d),this.$window=a(window).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(c),this.affixed=this.unpin=null,this.checkPosition()};b.RESET="affix affix-top affix-bottom",b.DEFAULTS={offset:0},b.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},b.prototype.checkPosition=function(){if(this.$element.is(":visible")){var c=a(document).height(),d=this.$window.scrollTop(),e=this.$element.offset(),f=this.options.offset,g=f.top,h=f.bottom;"object"!=typeof f&&(h=g=f),"function"==typeof g&&(g=f.top()),"function"==typeof h&&(h=f.bottom());var i=null!=this.unpin&&d+this.unpin<=e.top?!1:null!=h&&e.top+this.$element.height()>=c-h?"bottom":null!=g&&g>=d?"top":!1;this.affixed!==i&&(this.unpin&&this.$element.css("top",""),this.affixed=i,this.unpin="bottom"==i?e.top-d:null,this.$element.removeClass(b.RESET).addClass("affix"+(i?"-"+i:"")),"bottom"==i&&this.$element.offset({top:document.body.offsetHeight-h-this.$element.height()}))}};var c=a.fn.affix;a.fn.affix=function(c){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof c&&c;e||d.data("bs.affix",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.affix.Constructor=b,a.fn.affix.noConflict=function(){return a.fn.affix=c,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var b=a(this),c=b.data();c.offset=c.offset||{},c.offsetBottom&&(c.offset.bottom=c.offsetBottom),c.offsetTop&&(c.offset.top=c.offsetTop),b.affix(c)})})}(window.jQuery);
/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */

/*global define: false*/

(function (root, factory) {
  if (typeof exports === "object" && exports) {
    factory(exports); // CommonJS
  } else {
    var mustache = {};
    factory(mustache);
    if (typeof define === "function" && define.amd) {
      define(mustache); // AMD
    } else {
      root.Mustache = mustache; // <script>
    }
  }
}(this, function (mustache) {

  var whiteRe = /\s*/;
  var spaceRe = /\s+/;
  var nonSpaceRe = /\S/;
  var eqRe = /\s*=/;
  var curlyRe = /\s*\}/;
  var tagRe = /#|\^|\/|>|\{|&|=|!/;

  // Workaround for https://issues.apache.org/jira/browse/COUCHDB-577
  // See https://github.com/janl/mustache.js/issues/189
  var RegExp_test = RegExp.prototype.test;
  function testRegExp(re, string) {
    return RegExp_test.call(re, string);
  }

  function isWhitespace(string) {
    return !testRegExp(nonSpaceRe, string);
  }

  var Object_toString = Object.prototype.toString;
  var isArray = Array.isArray || function (object) {
    return Object_toString.call(object) === '[object Array]';
  };

  function isFunction(object) {
    return typeof object === 'function';
  }

  function escapeRegExp(string) {
    return string.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
  }

  var entityMap = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': '&quot;',
    "'": '&#39;',
    "/": '&#x2F;'
  };

  function escapeHtml(string) {
    return String(string).replace(/[&<>"'\/]/g, function (s) {
      return entityMap[s];
    });
  }

  function escapeTags(tags) {
    if (!isArray(tags) || tags.length !== 2) {
      throw new Error('Invalid tags: ' + tags);
    }

    return [
      new RegExp(escapeRegExp(tags[0]) + "\\s*"),
      new RegExp("\\s*" + escapeRegExp(tags[1]))
    ];
  }

  /**
   * Breaks up the given `template` string into a tree of tokens. If the `tags`
   * argument is given here it must be an array with two string values: the
   * opening and closing tags used in the template (e.g. [ "<%", "%>" ]). Of
   * course, the default is to use mustaches (i.e. mustache.tags).
   *
   * A token is an array with at least 4 elements. The first element is the
   * mustache symbol that was used inside the tag, e.g. "#" or "&". If the tag
   * did not contain a symbol (i.e. {{myValue}}) this element is "name". For
   * all template text that appears outside a symbol this element is "text".
   *
   * The second element of a token is its "value". For mustache tags this is
   * whatever else was inside the tag besides the opening symbol. For text tokens
   * this is the text itself.
   *
   * The third and fourth elements of the token are the start and end indices
   * in the original template of the token, respectively.
   *
   * Tokens that are the root node of a subtree contain two more elements: an
   * array of tokens in the subtree and the index in the original template at which
   * the closing tag for that section begins.
   */
  function parseTemplate(template, tags) {
    tags = tags || mustache.tags;
    template = template || '';

    if (typeof tags === 'string') {
      tags = tags.split(spaceRe);
    }

    var tagRes = escapeTags(tags);
    var scanner = new Scanner(template);

    var sections = [];     // Stack to hold section tokens
    var tokens = [];       // Buffer to hold the tokens
    var spaces = [];       // Indices of whitespace tokens on the current line
    var hasTag = false;    // Is there a {{tag}} on the current line?
    var nonSpace = false;  // Is there a non-space char on the current line?

    // Strips all whitespace tokens array for the current line
    // if there was a {{#tag}} on it and otherwise only space.
    function stripSpace() {
      if (hasTag && !nonSpace) {
        while (spaces.length) {
          delete tokens[spaces.pop()];
        }
      } else {
        spaces = [];
      }

      hasTag = false;
      nonSpace = false;
    }

    var start, type, value, chr, token, openSection;
    while (!scanner.eos()) {
      start = scanner.pos;

      // Match any text between tags.
      value = scanner.scanUntil(tagRes[0]);
      if (value) {
        for (var i = 0, len = value.length; i < len; ++i) {
          chr = value.charAt(i);

          if (isWhitespace(chr)) {
            spaces.push(tokens.length);
          } else {
            nonSpace = true;
          }

          tokens.push(['text', chr, start, start + 1]);
          start += 1;

          // Check for whitespace on the current line.
          if (chr === '\n') {
            stripSpace();
          }
        }
      }

      // Match the opening tag.
      if (!scanner.scan(tagRes[0])) break;
      hasTag = true;

      // Get the tag type.
      type = scanner.scan(tagRe) || 'name';
      scanner.scan(whiteRe);

      // Get the tag value.
      if (type === '=') {
        value = scanner.scanUntil(eqRe);
        scanner.scan(eqRe);
        scanner.scanUntil(tagRes[1]);
      } else if (type === '{') {
        value = scanner.scanUntil(new RegExp('\\s*' + escapeRegExp('}' + tags[1])));
        scanner.scan(curlyRe);
        scanner.scanUntil(tagRes[1]);
        type = '&';
      } else {
        value = scanner.scanUntil(tagRes[1]);
      }

      // Match the closing tag.
      if (!scanner.scan(tagRes[1])) {
        throw new Error('Unclosed tag at ' + scanner.pos);
      }

      token = [ type, value, start, scanner.pos ];
      tokens.push(token);

      if (type === '#' || type === '^') {
        sections.push(token);
      } else if (type === '/') {
        // Check section nesting.
        openSection = sections.pop();

        if (!openSection) {
          throw new Error('Unopened section "' + value + '" at ' + start);
        }
        if (openSection[1] !== value) {
          throw new Error('Unclosed section "' + openSection[1] + '" at ' + start);
        }
      } else if (type === 'name' || type === '{' || type === '&') {
        nonSpace = true;
      } else if (type === '=') {
        // Set the tags for the next time around.
        tagRes = escapeTags(tags = value.split(spaceRe));
      }
    }

    // Make sure there are no open sections when we're done.
    openSection = sections.pop();
    if (openSection) {
      throw new Error('Unclosed section "' + openSection[1] + '" at ' + scanner.pos);
    }

    return nestTokens(squashTokens(tokens));
  }

  /**
   * Combines the values of consecutive text tokens in the given `tokens` array
   * to a single token.
   */
  function squashTokens(tokens) {
    var squashedTokens = [];

    var token, lastToken;
    for (var i = 0, len = tokens.length; i < len; ++i) {
      token = tokens[i];

      if (token) {
        if (token[0] === 'text' && lastToken && lastToken[0] === 'text') {
          lastToken[1] += token[1];
          lastToken[3] = token[3];
        } else {
          squashedTokens.push(token);
          lastToken = token;
        }
      }
    }

    return squashedTokens;
  }

  /**
   * Forms the given array of `tokens` into a nested tree structure where
   * tokens that represent a section have two additional items: 1) an array of
   * all tokens that appear in that section and 2) the index in the original
   * template that represents the end of that section.
   */
  function nestTokens(tokens) {
    var nestedTokens = [];
    var collector = nestedTokens;
    var sections = [];

    var token, section;
    for (var i = 0, len = tokens.length; i < len; ++i) {
      token = tokens[i];

      switch (token[0]) {
      case '#':
      case '^':
        collector.push(token);
        sections.push(token);
        collector = token[4] = [];
        break;
      case '/':
        section = sections.pop();
        section[5] = token[2];
        collector = sections.length > 0 ? sections[sections.length - 1][4] : nestedTokens;
        break;
      default:
        collector.push(token);
      }
    }

    return nestedTokens;
  }

  /**
   * A simple string scanner that is used by the template parser to find
   * tokens in template strings.
   */
  function Scanner(string) {
    this.string = string;
    this.tail = string;
    this.pos = 0;
  }

  /**
   * Returns `true` if the tail is empty (end of string).
   */
  Scanner.prototype.eos = function () {
    return this.tail === "";
  };

  /**
   * Tries to match the given regular expression at the current position.
   * Returns the matched text if it can match, the empty string otherwise.
   */
  Scanner.prototype.scan = function (re) {
    var match = this.tail.match(re);

    if (match && match.index === 0) {
      var string = match[0];
      this.tail = this.tail.substring(string.length);
      this.pos += string.length;
      return string;
    }

    return "";
  };

  /**
   * Skips all text until the given regular expression can be matched. Returns
   * the skipped string, which is the entire tail if no match can be made.
   */
  Scanner.prototype.scanUntil = function (re) {
    var index = this.tail.search(re), match;

    switch (index) {
    case -1:
      match = this.tail;
      this.tail = "";
      break;
    case 0:
      match = "";
      break;
    default:
      match = this.tail.substring(0, index);
      this.tail = this.tail.substring(index);
    }

    this.pos += match.length;

    return match;
  };

  /**
   * Represents a rendering context by wrapping a view object and
   * maintaining a reference to the parent context.
   */
  function Context(view, parentContext) {
    this.view = view == null ? {} : view;
    this.cache = { '.': this.view };
    this.parent = parentContext;
  }

  /**
   * Creates a new context using the given view with this context
   * as the parent.
   */
  Context.prototype.push = function (view) {
    return new Context(view, this);
  };

  /**
   * Returns the value of the given name in this context, traversing
   * up the context hierarchy if the value is absent in this context's view.
   */
  Context.prototype.lookup = function (name) {
    var value;
    if (name in this.cache) {
      value = this.cache[name];
    } else {
      var context = this;

      while (context) {
        if (name.indexOf('.') > 0) {
          value = context.view;

          var names = name.split('.'), i = 0;
          while (value != null && i < names.length) {
            value = value[names[i++]];
          }
        } else {
          value = context.view[name];
        }

        if (value != null) break;

        context = context.parent;
      }

      this.cache[name] = value;
    }

    if (isFunction(value)) {
      value = value.call(this.view);
    }

    return value;
  };

  /**
   * A Writer knows how to take a stream of tokens and render them to a
   * string, given a context. It also maintains a cache of templates to
   * avoid the need to parse the same template twice.
   */
  function Writer() {
    this.cache = {};
  }

  /**
   * Clears all cached templates in this writer.
   */
  Writer.prototype.clearCache = function () {
    this.cache = {};
  };

  /**
   * Parses and caches the given `template` and returns the array of tokens
   * that is generated from the parse.
   */
  Writer.prototype.parse = function (template, tags) {
    var cache = this.cache;
    var tokens = cache[template];

    if (tokens == null) {
      tokens = cache[template] = parseTemplate(template, tags);
    }

    return tokens;
  };

  /**
   * High-level method that is used to render the given `template` with
   * the given `view`.
   *
   * The optional `partials` argument may be an object that contains the
   * names and templates of partials that are used in the template. It may
   * also be a function that is used to load partial templates on the fly
   * that takes a single argument: the name of the partial.
   */
  Writer.prototype.render = function (template, view, partials) {
    var tokens = this.parse(template);
    var context = (view instanceof Context) ? view : new Context(view);
    return this.renderTokens(tokens, context, partials, template);
  };

  /**
   * Low-level method that renders the given array of `tokens` using
   * the given `context` and `partials`.
   *
   * Note: The `originalTemplate` is only ever used to extract the portion
   * of the original template that was contained in a higher-order section.
   * If the template doesn't use higher-order sections, this argument may
   * be omitted.
   */
  Writer.prototype.renderTokens = function (tokens, context, partials, originalTemplate) {
    var buffer = '';

    // This function is used to render an arbitrary template
    // in the current context by higher-order sections.
    var self = this;
    function subRender(template) {
      return self.render(template, context, partials);
    }

    var token, value;
    for (var i = 0, len = tokens.length; i < len; ++i) {
      token = tokens[i];

      switch (token[0]) {
      case '#':
        value = context.lookup(token[1]);
        if (!value) continue;

        if (isArray(value)) {
          for (var j = 0, jlen = value.length; j < jlen; ++j) {
            buffer += this.renderTokens(token[4], context.push(value[j]), partials, originalTemplate);
          }
        } else if (typeof value === 'object' || typeof value === 'string') {
          buffer += this.renderTokens(token[4], context.push(value), partials, originalTemplate);
        } else if (isFunction(value)) {
          if (typeof originalTemplate !== 'string') {
            throw new Error('Cannot use higher-order sections without the original template');
          }

          // Extract the portion of the original template that the section contains.
          value = value.call(context.view, originalTemplate.slice(token[3], token[5]), subRender);

          if (value != null) buffer += value;
        } else {
          buffer += this.renderTokens(token[4], context, partials, originalTemplate);
        }

        break;
      case '^':
        value = context.lookup(token[1]);

        // Use JavaScript's definition of falsy. Include empty arrays.
        // See https://github.com/janl/mustache.js/issues/186
        if (!value || (isArray(value) && value.length === 0)) {
          buffer += this.renderTokens(token[4], context, partials, originalTemplate);
        }

        break;
      case '>':
        if (!partials) continue;
        value = isFunction(partials) ? partials(token[1]) : partials[token[1]];
        if (value != null) buffer += this.renderTokens(this.parse(value), context, partials, value);
        break;
      case '&':
        value = context.lookup(token[1]);
        if (value != null) buffer += value;
        break;
      case 'name':
        value = context.lookup(token[1]);
        if (value != null) buffer += mustache.escape(value);
        break;
      case 'text':
        buffer += token[1];
        break;
      }
    }

    return buffer;
  };

  mustache.name = "mustache.js";
  mustache.version = "0.8.1";
  mustache.tags = [ "{{", "}}" ];

  // All high-level mustache.* functions use this writer.
  var defaultWriter = new Writer();

  /**
   * Clears all cached templates in the default writer.
   */
  mustache.clearCache = function () {
    return defaultWriter.clearCache();
  };

  /**
   * Parses and caches the given template in the default writer and returns the
   * array of tokens it contains. Doing this ahead of time avoids the need to
   * parse templates on the fly as they are rendered.
   */
  mustache.parse = function (template, tags) {
    return defaultWriter.parse(template, tags);
  };

  /**
   * Renders the `template` with the given `view` and `partials` using the
   * default writer.
   */
  mustache.render = function (template, view, partials) {
    return defaultWriter.render(template, view, partials);
  };

  // This is here for backwards compatibility with 0.4.x.
  mustache.to_html = function (template, view, partials, send) {
    var result = mustache.render(template, view, partials);

    if (isFunction(send)) {
      send(result);
    } else {
      return result;
    }
  };

  // Export the escaping function so that the user may override it.
  // See https://github.com/janl/mustache.js/issues/244
  mustache.escape = escapeHtml;

  // Export these mainly for testing, but also for advanced usage.
  mustache.Scanner = Scanner;
  mustache.Context = Context;
  mustache.Writer = Writer;

}));

/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.6.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):"undefined"!=typeof exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){"use strict";var b=window.Slick||{};b=function(){function c(c,d){var f,e=this;e.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:a(c),appendDots:a(c),arrows:!0,asNavFor:null,prevArrow:'<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',nextArrow:'<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(b,c){return a('<button type="button" data-role="none" role="button" tabindex="0" />').text(c+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},e.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},a.extend(e,e.initials),e.activeBreakpoint=null,e.animType=null,e.animProp=null,e.breakpoints=[],e.breakpointSettings=[],e.cssTransitions=!1,e.focussed=!1,e.interrupted=!1,e.hidden="hidden",e.paused=!0,e.positionProp=null,e.respondTo=null,e.rowCount=1,e.shouldClick=!0,e.$slider=a(c),e.$slidesCache=null,e.transformType=null,e.transitionType=null,e.visibilityChange="visibilitychange",e.windowWidth=0,e.windowTimer=null,f=a(c).data("slick")||{},e.options=a.extend({},e.defaults,d,f),e.currentSlide=e.options.initialSlide,e.originalSettings=e.options,"undefined"!=typeof document.mozHidden?(e.hidden="mozHidden",e.visibilityChange="mozvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(e.hidden="webkitHidden",e.visibilityChange="webkitvisibilitychange"),e.autoPlay=a.proxy(e.autoPlay,e),e.autoPlayClear=a.proxy(e.autoPlayClear,e),e.autoPlayIterator=a.proxy(e.autoPlayIterator,e),e.changeSlide=a.proxy(e.changeSlide,e),e.clickHandler=a.proxy(e.clickHandler,e),e.selectHandler=a.proxy(e.selectHandler,e),e.setPosition=a.proxy(e.setPosition,e),e.swipeHandler=a.proxy(e.swipeHandler,e),e.dragHandler=a.proxy(e.dragHandler,e),e.keyHandler=a.proxy(e.keyHandler,e),e.instanceUid=b++,e.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,e.registerBreakpoints(),e.init(!0)}var b=0;return c}(),b.prototype.activateADA=function(){var a=this;a.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},b.prototype.addSlide=b.prototype.slickAdd=function(b,c,d){var e=this;if("boolean"==typeof c)d=c,c=null;else if(0>c||c>=e.slideCount)return!1;e.unload(),"number"==typeof c?0===c&&0===e.$slides.length?a(b).appendTo(e.$slideTrack):d?a(b).insertBefore(e.$slides.eq(c)):a(b).insertAfter(e.$slides.eq(c)):d===!0?a(b).prependTo(e.$slideTrack):a(b).appendTo(e.$slideTrack),e.$slides=e.$slideTrack.children(this.options.slide),e.$slideTrack.children(this.options.slide).detach(),e.$slideTrack.append(e.$slides),e.$slides.each(function(b,c){a(c).attr("data-slick-index",b)}),e.$slidesCache=e.$slides,e.reinit()},b.prototype.animateHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.animate({height:b},a.options.speed)}},b.prototype.animateSlide=function(b,c){var d={},e=this;e.animateHeight(),e.options.rtl===!0&&e.options.vertical===!1&&(b=-b),e.transformsEnabled===!1?e.options.vertical===!1?e.$slideTrack.animate({left:b},e.options.speed,e.options.easing,c):e.$slideTrack.animate({top:b},e.options.speed,e.options.easing,c):e.cssTransitions===!1?(e.options.rtl===!0&&(e.currentLeft=-e.currentLeft),a({animStart:e.currentLeft}).animate({animStart:b},{duration:e.options.speed,easing:e.options.easing,step:function(a){a=Math.ceil(a),e.options.vertical===!1?(d[e.animType]="translate("+a+"px, 0px)",e.$slideTrack.css(d)):(d[e.animType]="translate(0px,"+a+"px)",e.$slideTrack.css(d))},complete:function(){c&&c.call()}})):(e.applyTransition(),b=Math.ceil(b),e.options.vertical===!1?d[e.animType]="translate3d("+b+"px, 0px, 0px)":d[e.animType]="translate3d(0px,"+b+"px, 0px)",e.$slideTrack.css(d),c&&setTimeout(function(){e.disableTransition(),c.call()},e.options.speed))},b.prototype.getNavTarget=function(){var b=this,c=b.options.asNavFor;return c&&null!==c&&(c=a(c).not(b.$slider)),c},b.prototype.asNavFor=function(b){var c=this,d=c.getNavTarget();null!==d&&"object"==typeof d&&d.each(function(){var c=a(this).slick("getSlick");c.unslicked||c.slideHandler(b,!0)})},b.prototype.applyTransition=function(a){var b=this,c={};b.options.fade===!1?c[b.transitionType]=b.transformType+" "+b.options.speed+"ms "+b.options.cssEase:c[b.transitionType]="opacity "+b.options.speed+"ms "+b.options.cssEase,b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.autoPlay=function(){var a=this;a.autoPlayClear(),a.slideCount>a.options.slidesToShow&&(a.autoPlayTimer=setInterval(a.autoPlayIterator,a.options.autoplaySpeed))},b.prototype.autoPlayClear=function(){var a=this;a.autoPlayTimer&&clearInterval(a.autoPlayTimer)},b.prototype.autoPlayIterator=function(){var a=this,b=a.currentSlide+a.options.slidesToScroll;a.paused||a.interrupted||a.focussed||(a.options.infinite===!1&&(1===a.direction&&a.currentSlide+1===a.slideCount-1?a.direction=0:0===a.direction&&(b=a.currentSlide-a.options.slidesToScroll,a.currentSlide-1===0&&(a.direction=1))),a.slideHandler(b))},b.prototype.buildArrows=function(){var b=this;b.options.arrows===!0&&(b.$prevArrow=a(b.options.prevArrow).addClass("slick-arrow"),b.$nextArrow=a(b.options.nextArrow).addClass("slick-arrow"),b.slideCount>b.options.slidesToShow?(b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),b.htmlExpr.test(b.options.prevArrow)&&b.$prevArrow.prependTo(b.options.appendArrows),b.htmlExpr.test(b.options.nextArrow)&&b.$nextArrow.appendTo(b.options.appendArrows),b.options.infinite!==!0&&b.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},b.prototype.buildDots=function(){var c,d,b=this;if(b.options.dots===!0&&b.slideCount>b.options.slidesToShow){for(b.$slider.addClass("slick-dotted"),d=a("<ul />").addClass(b.options.dotsClass),c=0;c<=b.getDotCount();c+=1)d.append(a("<li />").append(b.options.customPaging.call(this,b,c)));b.$dots=d.appendTo(b.options.appendDots),b.$dots.find("li").first().addClass("slick-active").attr("aria-hidden","false")}},b.prototype.buildOut=function(){var b=this;b.$slides=b.$slider.children(b.options.slide+":not(.slick-cloned)").addClass("slick-slide"),b.slideCount=b.$slides.length,b.$slides.each(function(b,c){a(c).attr("data-slick-index",b).data("originalStyling",a(c).attr("style")||"")}),b.$slider.addClass("slick-slider"),b.$slideTrack=0===b.slideCount?a('<div class="slick-track"/>').appendTo(b.$slider):b.$slides.wrapAll('<div class="slick-track"/>').parent(),b.$list=b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(),b.$slideTrack.css("opacity",0),(b.options.centerMode===!0||b.options.swipeToSlide===!0)&&(b.options.slidesToScroll=1),a("img[data-lazy]",b.$slider).not("[src]").addClass("slick-loading"),b.setupInfinite(),b.buildArrows(),b.buildDots(),b.updateDots(),b.setSlideClasses("number"==typeof b.currentSlide?b.currentSlide:0),b.options.draggable===!0&&b.$list.addClass("draggable")},b.prototype.buildRows=function(){var b,c,d,e,f,g,h,a=this;if(e=document.createDocumentFragment(),g=a.$slider.children(),a.options.rows>1){for(h=a.options.slidesPerRow*a.options.rows,f=Math.ceil(g.length/h),b=0;f>b;b++){var i=document.createElement("div");for(c=0;c<a.options.rows;c++){var j=document.createElement("div");for(d=0;d<a.options.slidesPerRow;d++){var k=b*h+(c*a.options.slidesPerRow+d);g.get(k)&&j.appendChild(g.get(k))}i.appendChild(j)}e.appendChild(i)}a.$slider.empty().append(e),a.$slider.children().children().children().css({width:100/a.options.slidesPerRow+"%",display:"inline-block"})}},b.prototype.checkResponsive=function(b,c){var e,f,g,d=this,h=!1,i=d.$slider.width(),j=window.innerWidth||a(window).width();if("window"===d.respondTo?g=j:"slider"===d.respondTo?g=i:"min"===d.respondTo&&(g=Math.min(j,i)),d.options.responsive&&d.options.responsive.length&&null!==d.options.responsive){f=null;for(e in d.breakpoints)d.breakpoints.hasOwnProperty(e)&&(d.originalSettings.mobileFirst===!1?g<d.breakpoints[e]&&(f=d.breakpoints[e]):g>d.breakpoints[e]&&(f=d.breakpoints[e]));null!==f?null!==d.activeBreakpoint?(f!==d.activeBreakpoint||c)&&(d.activeBreakpoint=f,"unslick"===d.breakpointSettings[f]?d.unslick(f):(d.options=a.extend({},d.originalSettings,d.breakpointSettings[f]),b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b)),h=f):(d.activeBreakpoint=f,"unslick"===d.breakpointSettings[f]?d.unslick(f):(d.options=a.extend({},d.originalSettings,d.breakpointSettings[f]),b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b)),h=f):null!==d.activeBreakpoint&&(d.activeBreakpoint=null,d.options=d.originalSettings,b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b),h=f),b||h===!1||d.$slider.trigger("breakpoint",[d,h])}},b.prototype.changeSlide=function(b,c){var f,g,h,d=this,e=a(b.currentTarget);switch(e.is("a")&&b.preventDefault(),e.is("li")||(e=e.closest("li")),h=d.slideCount%d.options.slidesToScroll!==0,f=h?0:(d.slideCount-d.currentSlide)%d.options.slidesToScroll,b.data.message){case"previous":g=0===f?d.options.slidesToScroll:d.options.slidesToShow-f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide-g,!1,c);break;case"next":g=0===f?d.options.slidesToScroll:f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide+g,!1,c);break;case"index":var i=0===b.data.index?0:b.data.index||e.index()*d.options.slidesToScroll;d.slideHandler(d.checkNavigable(i),!1,c),e.children().trigger("focus");break;default:return}},b.prototype.checkNavigable=function(a){var c,d,b=this;if(c=b.getNavigableIndexes(),d=0,a>c[c.length-1])a=c[c.length-1];else for(var e in c){if(a<c[e]){a=d;break}d=c[e]}return a},b.prototype.cleanUpEvents=function(){var b=this;b.options.dots&&null!==b.$dots&&a("li",b.$dots).off("click.slick",b.changeSlide).off("mouseenter.slick",a.proxy(b.interrupt,b,!0)).off("mouseleave.slick",a.proxy(b.interrupt,b,!1)),b.$slider.off("focus.slick blur.slick"),b.options.arrows===!0&&b.slideCount>b.options.slidesToShow&&(b.$prevArrow&&b.$prevArrow.off("click.slick",b.changeSlide),b.$nextArrow&&b.$nextArrow.off("click.slick",b.changeSlide)),b.$list.off("touchstart.slick mousedown.slick",b.swipeHandler),b.$list.off("touchmove.slick mousemove.slick",b.swipeHandler),b.$list.off("touchend.slick mouseup.slick",b.swipeHandler),b.$list.off("touchcancel.slick mouseleave.slick",b.swipeHandler),b.$list.off("click.slick",b.clickHandler),a(document).off(b.visibilityChange,b.visibility),b.cleanUpSlideEvents(),b.options.accessibility===!0&&b.$list.off("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().off("click.slick",b.selectHandler),a(window).off("orientationchange.slick.slick-"+b.instanceUid,b.orientationChange),a(window).off("resize.slick.slick-"+b.instanceUid,b.resize),a("[draggable!=true]",b.$slideTrack).off("dragstart",b.preventDefault),a(window).off("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).off("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.cleanUpSlideEvents=function(){var b=this;b.$list.off("mouseenter.slick",a.proxy(b.interrupt,b,!0)),b.$list.off("mouseleave.slick",a.proxy(b.interrupt,b,!1))},b.prototype.cleanUpRows=function(){var b,a=this;a.options.rows>1&&(b=a.$slides.children().children(),b.removeAttr("style"),a.$slider.empty().append(b))},b.prototype.clickHandler=function(a){var b=this;b.shouldClick===!1&&(a.stopImmediatePropagation(),a.stopPropagation(),a.preventDefault())},b.prototype.destroy=function(b){var c=this;c.autoPlayClear(),c.touchObject={},c.cleanUpEvents(),a(".slick-cloned",c.$slider).detach(),c.$dots&&c.$dots.remove(),c.$prevArrow&&c.$prevArrow.length&&(c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),c.htmlExpr.test(c.options.prevArrow)&&c.$prevArrow.remove()),c.$nextArrow&&c.$nextArrow.length&&(c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),c.htmlExpr.test(c.options.nextArrow)&&c.$nextArrow.remove()),c.$slides&&(c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){a(this).attr("style",a(this).data("originalStyling"))}),c.$slideTrack.children(this.options.slide).detach(),c.$slideTrack.detach(),c.$list.detach(),c.$slider.append(c.$slides)),c.cleanUpRows(),c.$slider.removeClass("slick-slider"),c.$slider.removeClass("slick-initialized"),c.$slider.removeClass("slick-dotted"),c.unslicked=!0,b||c.$slider.trigger("destroy",[c])},b.prototype.disableTransition=function(a){var b=this,c={};c[b.transitionType]="",b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.fadeSlide=function(a,b){var c=this;c.cssTransitions===!1?(c.$slides.eq(a).css({zIndex:c.options.zIndex}),c.$slides.eq(a).animate({opacity:1},c.options.speed,c.options.easing,b)):(c.applyTransition(a),c.$slides.eq(a).css({opacity:1,zIndex:c.options.zIndex}),b&&setTimeout(function(){c.disableTransition(a),b.call()},c.options.speed))},b.prototype.fadeSlideOut=function(a){var b=this;b.cssTransitions===!1?b.$slides.eq(a).animate({opacity:0,zIndex:b.options.zIndex-2},b.options.speed,b.options.easing):(b.applyTransition(a),b.$slides.eq(a).css({opacity:0,zIndex:b.options.zIndex-2}))},b.prototype.filterSlides=b.prototype.slickFilter=function(a){var b=this;null!==a&&(b.$slidesCache=b.$slides,b.unload(),b.$slideTrack.children(this.options.slide).detach(),b.$slidesCache.filter(a).appendTo(b.$slideTrack),b.reinit())},b.prototype.focusHandler=function(){var b=this;b.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*:not(.slick-arrow)",function(c){c.stopImmediatePropagation();var d=a(this);setTimeout(function(){b.options.pauseOnFocus&&(b.focussed=d.is(":focus"),b.autoPlay())},0)})},b.prototype.getCurrent=b.prototype.slickCurrentSlide=function(){var a=this;return a.currentSlide},b.prototype.getDotCount=function(){var a=this,b=0,c=0,d=0;if(a.options.infinite===!0)for(;b<a.slideCount;)++d,b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;else if(a.options.centerMode===!0)d=a.slideCount;else if(a.options.asNavFor)for(;b<a.slideCount;)++d,b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;else d=1+Math.ceil((a.slideCount-a.options.slidesToShow)/a.options.slidesToScroll);return d-1},b.prototype.getLeft=function(a){var c,d,f,b=this,e=0;return b.slideOffset=0,d=b.$slides.first().outerHeight(!0),b.options.infinite===!0?(b.slideCount>b.options.slidesToShow&&(b.slideOffset=b.slideWidth*b.options.slidesToShow*-1,e=d*b.options.slidesToShow*-1),b.slideCount%b.options.slidesToScroll!==0&&a+b.options.slidesToScroll>b.slideCount&&b.slideCount>b.options.slidesToShow&&(a>b.slideCount?(b.slideOffset=(b.options.slidesToShow-(a-b.slideCount))*b.slideWidth*-1,e=(b.options.slidesToShow-(a-b.slideCount))*d*-1):(b.slideOffset=b.slideCount%b.options.slidesToScroll*b.slideWidth*-1,e=b.slideCount%b.options.slidesToScroll*d*-1))):a+b.options.slidesToShow>b.slideCount&&(b.slideOffset=(a+b.options.slidesToShow-b.slideCount)*b.slideWidth,e=(a+b.options.slidesToShow-b.slideCount)*d),b.slideCount<=b.options.slidesToShow&&(b.slideOffset=0,e=0),b.options.centerMode===!0&&b.options.infinite===!0?b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)-b.slideWidth:b.options.centerMode===!0&&(b.slideOffset=0,b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)),c=b.options.vertical===!1?a*b.slideWidth*-1+b.slideOffset:a*d*-1+e,b.options.variableWidth===!0&&(f=b.slideCount<=b.options.slidesToShow||b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow),c=b.options.rtl===!0?f[0]?-1*(b.$slideTrack.width()-f[0].offsetLeft-f.width()):0:f[0]?-1*f[0].offsetLeft:0,b.options.centerMode===!0&&(f=b.slideCount<=b.options.slidesToShow||b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow+1),c=b.options.rtl===!0?f[0]?-1*(b.$slideTrack.width()-f[0].offsetLeft-f.width()):0:f[0]?-1*f[0].offsetLeft:0,c+=(b.$list.width()-f.outerWidth())/2)),c},b.prototype.getOption=b.prototype.slickGetOption=function(a){var b=this;return b.options[a]},b.prototype.getNavigableIndexes=function(){var e,a=this,b=0,c=0,d=[];for(a.options.infinite===!1?e=a.slideCount:(b=-1*a.options.slidesToScroll,c=-1*a.options.slidesToScroll,e=2*a.slideCount);e>b;)d.push(b),b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;return d},b.prototype.getSlick=function(){return this},b.prototype.getSlideCount=function(){var c,d,e,b=this;return e=b.options.centerMode===!0?b.slideWidth*Math.floor(b.options.slidesToShow/2):0,b.options.swipeToSlide===!0?(b.$slideTrack.find(".slick-slide").each(function(c,f){return f.offsetLeft-e+a(f).outerWidth()/2>-1*b.swipeLeft?(d=f,!1):void 0}),c=Math.abs(a(d).attr("data-slick-index")-b.currentSlide)||1):b.options.slidesToScroll},b.prototype.goTo=b.prototype.slickGoTo=function(a,b){var c=this;c.changeSlide({data:{message:"index",index:parseInt(a)}},b)},b.prototype.init=function(b){var c=this;a(c.$slider).hasClass("slick-initialized")||(a(c.$slider).addClass("slick-initialized"),c.buildRows(),c.buildOut(),c.setProps(),c.startLoad(),c.loadSlider(),c.initializeEvents(),c.updateArrows(),c.updateDots(),c.checkResponsive(!0),c.focusHandler()),b&&c.$slider.trigger("init",[c]),c.options.accessibility===!0&&c.initADA(),c.options.autoplay&&(c.paused=!1,c.autoPlay())},b.prototype.initADA=function(){var b=this;b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),b.$slideTrack.attr("role","listbox"),b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function(c){a(this).attr({role:"option","aria-describedby":"slick-slide"+b.instanceUid+c})}),null!==b.$dots&&b.$dots.attr("role","tablist").find("li").each(function(c){a(this).attr({role:"presentation","aria-selected":"false","aria-controls":"navigation"+b.instanceUid+c,id:"slick-slide"+b.instanceUid+c})}).first().attr("aria-selected","true").end().find("button").attr("role","button").end().closest("div").attr("role","toolbar"),b.activateADA()},b.prototype.initArrowEvents=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},a.changeSlide),a.$nextArrow.off("click.slick").on("click.slick",{message:"next"},a.changeSlide))},b.prototype.initDotEvents=function(){var b=this;b.options.dots===!0&&b.slideCount>b.options.slidesToShow&&a("li",b.$dots).on("click.slick",{message:"index"},b.changeSlide),b.options.dots===!0&&b.options.pauseOnDotsHover===!0&&a("li",b.$dots).on("mouseenter.slick",a.proxy(b.interrupt,b,!0)).on("mouseleave.slick",a.proxy(b.interrupt,b,!1))},b.prototype.initSlideEvents=function(){var b=this;b.options.pauseOnHover&&(b.$list.on("mouseenter.slick",a.proxy(b.interrupt,b,!0)),b.$list.on("mouseleave.slick",a.proxy(b.interrupt,b,!1)))},b.prototype.initializeEvents=function(){var b=this;b.initArrowEvents(),b.initDotEvents(),b.initSlideEvents(),b.$list.on("touchstart.slick mousedown.slick",{action:"start"},b.swipeHandler),b.$list.on("touchmove.slick mousemove.slick",{action:"move"},b.swipeHandler),b.$list.on("touchend.slick mouseup.slick",{action:"end"},b.swipeHandler),b.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},b.swipeHandler),b.$list.on("click.slick",b.clickHandler),a(document).on(b.visibilityChange,a.proxy(b.visibility,b)),b.options.accessibility===!0&&b.$list.on("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),a(window).on("orientationchange.slick.slick-"+b.instanceUid,a.proxy(b.orientationChange,b)),a(window).on("resize.slick.slick-"+b.instanceUid,a.proxy(b.resize,b)),a("[draggable!=true]",b.$slideTrack).on("dragstart",b.preventDefault),a(window).on("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).on("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.initUI=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.show(),a.$nextArrow.show()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.show()},b.prototype.keyHandler=function(a){var b=this;a.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===a.keyCode&&b.options.accessibility===!0?b.changeSlide({data:{message:b.options.rtl===!0?"next":"previous"}}):39===a.keyCode&&b.options.accessibility===!0&&b.changeSlide({data:{message:b.options.rtl===!0?"previous":"next"}}))},b.prototype.lazyLoad=function(){function g(c){a("img[data-lazy]",c).each(function(){var c=a(this),d=a(this).attr("data-lazy"),e=document.createElement("img");e.onload=function(){c.animate({opacity:0},100,function(){c.attr("src",d).animate({opacity:1},200,function(){c.removeAttr("data-lazy").removeClass("slick-loading")}),b.$slider.trigger("lazyLoaded",[b,c,d])})},e.onerror=function(){c.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),b.$slider.trigger("lazyLoadError",[b,c,d])},e.src=d})}var c,d,e,f,b=this;b.options.centerMode===!0?b.options.infinite===!0?(e=b.currentSlide+(b.options.slidesToShow/2+1),f=e+b.options.slidesToShow+2):(e=Math.max(0,b.currentSlide-(b.options.slidesToShow/2+1)),f=2+(b.options.slidesToShow/2+1)+b.currentSlide):(e=b.options.infinite?b.options.slidesToShow+b.currentSlide:b.currentSlide,f=Math.ceil(e+b.options.slidesToShow),b.options.fade===!0&&(e>0&&e--,f<=b.slideCount&&f++)),c=b.$slider.find(".slick-slide").slice(e,f),g(c),b.slideCount<=b.options.slidesToShow?(d=b.$slider.find(".slick-slide"),g(d)):b.currentSlide>=b.slideCount-b.options.slidesToShow?(d=b.$slider.find(".slick-cloned").slice(0,b.options.slidesToShow),g(d)):0===b.currentSlide&&(d=b.$slider.find(".slick-cloned").slice(-1*b.options.slidesToShow),g(d))},b.prototype.loadSlider=function(){var a=this;a.setPosition(),a.$slideTrack.css({opacity:1}),a.$slider.removeClass("slick-loading"),a.initUI(),"progressive"===a.options.lazyLoad&&a.progressiveLazyLoad()},b.prototype.next=b.prototype.slickNext=function(){var a=this;a.changeSlide({data:{message:"next"}})},b.prototype.orientationChange=function(){var a=this;a.checkResponsive(),a.setPosition()},b.prototype.pause=b.prototype.slickPause=function(){var a=this;a.autoPlayClear(),a.paused=!0},b.prototype.play=b.prototype.slickPlay=function(){var a=this;a.autoPlay(),a.options.autoplay=!0,a.paused=!1,a.focussed=!1,a.interrupted=!1},b.prototype.postSlide=function(a){var b=this;b.unslicked||(b.$slider.trigger("afterChange",[b,a]),b.animating=!1,b.setPosition(),b.swipeLeft=null,b.options.autoplay&&b.autoPlay(),b.options.accessibility===!0&&b.initADA())},b.prototype.prev=b.prototype.slickPrev=function(){var a=this;a.changeSlide({data:{message:"previous"}})},b.prototype.preventDefault=function(a){a.preventDefault()},b.prototype.progressiveLazyLoad=function(b){b=b||1;var e,f,g,c=this,d=a("img[data-lazy]",c.$slider);d.length?(e=d.first(),f=e.attr("data-lazy"),g=document.createElement("img"),g.onload=function(){e.attr("src",f).removeAttr("data-lazy").removeClass("slick-loading"),c.options.adaptiveHeight===!0&&c.setPosition(),c.$slider.trigger("lazyLoaded",[c,e,f]),c.progressiveLazyLoad()},g.onerror=function(){3>b?setTimeout(function(){c.progressiveLazyLoad(b+1)},500):(e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),c.$slider.trigger("lazyLoadError",[c,e,f]),c.progressiveLazyLoad())},g.src=f):c.$slider.trigger("allImagesLoaded",[c])},b.prototype.refresh=function(b){var d,e,c=this;e=c.slideCount-c.options.slidesToShow,!c.options.infinite&&c.currentSlide>e&&(c.currentSlide=e),c.slideCount<=c.options.slidesToShow&&(c.currentSlide=0),d=c.currentSlide,c.destroy(!0),a.extend(c,c.initials,{currentSlide:d}),c.init(),b||c.changeSlide({data:{message:"index",index:d}},!1)},b.prototype.registerBreakpoints=function(){var c,d,e,b=this,f=b.options.responsive||null;if("array"===a.type(f)&&f.length){b.respondTo=b.options.respondTo||"window";for(c in f)if(e=b.breakpoints.length-1,d=f[c].breakpoint,f.hasOwnProperty(c)){for(;e>=0;)b.breakpoints[e]&&b.breakpoints[e]===d&&b.breakpoints.splice(e,1),e--;b.breakpoints.push(d),b.breakpointSettings[d]=f[c].settings}b.breakpoints.sort(function(a,c){return b.options.mobileFirst?a-c:c-a})}},b.prototype.reinit=function(){var b=this;b.$slides=b.$slideTrack.children(b.options.slide).addClass("slick-slide"),b.slideCount=b.$slides.length,b.currentSlide>=b.slideCount&&0!==b.currentSlide&&(b.currentSlide=b.currentSlide-b.options.slidesToScroll),b.slideCount<=b.options.slidesToShow&&(b.currentSlide=0),b.registerBreakpoints(),b.setProps(),b.setupInfinite(),b.buildArrows(),b.updateArrows(),b.initArrowEvents(),b.buildDots(),b.updateDots(),b.initDotEvents(),b.cleanUpSlideEvents(),b.initSlideEvents(),b.checkResponsive(!1,!0),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),b.setSlideClasses("number"==typeof b.currentSlide?b.currentSlide:0),b.setPosition(),b.focusHandler(),b.paused=!b.options.autoplay,b.autoPlay(),b.$slider.trigger("reInit",[b])},b.prototype.resize=function(){var b=this;a(window).width()!==b.windowWidth&&(clearTimeout(b.windowDelay),b.windowDelay=window.setTimeout(function(){b.windowWidth=a(window).width(),b.checkResponsive(),b.unslicked||b.setPosition()},50))},b.prototype.removeSlide=b.prototype.slickRemove=function(a,b,c){var d=this;return"boolean"==typeof a?(b=a,a=b===!0?0:d.slideCount-1):a=b===!0?--a:a,d.slideCount<1||0>a||a>d.slideCount-1?!1:(d.unload(),c===!0?d.$slideTrack.children().remove():d.$slideTrack.children(this.options.slide).eq(a).remove(),d.$slides=d.$slideTrack.children(this.options.slide),d.$slideTrack.children(this.options.slide).detach(),d.$slideTrack.append(d.$slides),d.$slidesCache=d.$slides,void d.reinit())},b.prototype.setCSS=function(a){var d,e,b=this,c={};b.options.rtl===!0&&(a=-a),d="left"==b.positionProp?Math.ceil(a)+"px":"0px",e="top"==b.positionProp?Math.ceil(a)+"px":"0px",c[b.positionProp]=a,b.transformsEnabled===!1?b.$slideTrack.css(c):(c={},b.cssTransitions===!1?(c[b.animType]="translate("+d+", "+e+")",b.$slideTrack.css(c)):(c[b.animType]="translate3d("+d+", "+e+", 0px)",b.$slideTrack.css(c)))},b.prototype.setDimensions=function(){var a=this;a.options.vertical===!1?a.options.centerMode===!0&&a.$list.css({padding:"0px "+a.options.centerPadding}):(a.$list.height(a.$slides.first().outerHeight(!0)*a.options.slidesToShow),a.options.centerMode===!0&&a.$list.css({padding:a.options.centerPadding+" 0px"})),a.listWidth=a.$list.width(),a.listHeight=a.$list.height(),a.options.vertical===!1&&a.options.variableWidth===!1?(a.slideWidth=Math.ceil(a.listWidth/a.options.slidesToShow),a.$slideTrack.width(Math.ceil(a.slideWidth*a.$slideTrack.children(".slick-slide").length))):a.options.variableWidth===!0?a.$slideTrack.width(5e3*a.slideCount):(a.slideWidth=Math.ceil(a.listWidth),a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0)*a.$slideTrack.children(".slick-slide").length)));var b=a.$slides.first().outerWidth(!0)-a.$slides.first().width();a.options.variableWidth===!1&&a.$slideTrack.children(".slick-slide").width(a.slideWidth-b)},b.prototype.setFade=function(){var c,b=this;b.$slides.each(function(d,e){c=b.slideWidth*d*-1,b.options.rtl===!0?a(e).css({position:"relative",right:c,top:0,zIndex:b.options.zIndex-2,opacity:0}):a(e).css({position:"relative",left:c,top:0,zIndex:b.options.zIndex-2,opacity:0})}),b.$slides.eq(b.currentSlide).css({zIndex:b.options.zIndex-1,opacity:1})},b.prototype.setHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.css("height",b)}},b.prototype.setOption=b.prototype.slickSetOption=function(){var c,d,e,f,h,b=this,g=!1;if("object"===a.type(arguments[0])?(e=arguments[0],g=arguments[1],h="multiple"):"string"===a.type(arguments[0])&&(e=arguments[0],f=arguments[1],g=arguments[2],"responsive"===arguments[0]&&"array"===a.type(arguments[1])?h="responsive":"undefined"!=typeof arguments[1]&&(h="single")),"single"===h)b.options[e]=f;else if("multiple"===h)a.each(e,function(a,c){b.options[a]=c});else if("responsive"===h)for(d in f)if("array"!==a.type(b.options.responsive))b.options.responsive=[f[d]];else{for(c=b.options.responsive.length-1;c>=0;)b.options.responsive[c].breakpoint===f[d].breakpoint&&b.options.responsive.splice(c,1),c--;b.options.responsive.push(f[d])}g&&(b.unload(),b.reinit())},b.prototype.setPosition=function(){var a=this;a.setDimensions(),a.setHeight(),a.options.fade===!1?a.setCSS(a.getLeft(a.currentSlide)):a.setFade(),a.$slider.trigger("setPosition",[a])},b.prototype.setProps=function(){var a=this,b=document.body.style;a.positionProp=a.options.vertical===!0?"top":"left","top"===a.positionProp?a.$slider.addClass("slick-vertical"):a.$slider.removeClass("slick-vertical"),(void 0!==b.WebkitTransition||void 0!==b.MozTransition||void 0!==b.msTransition)&&a.options.useCSS===!0&&(a.cssTransitions=!0),a.options.fade&&("number"==typeof a.options.zIndex?a.options.zIndex<3&&(a.options.zIndex=3):a.options.zIndex=a.defaults.zIndex),void 0!==b.OTransform&&(a.animType="OTransform",a.transformType="-o-transform",a.transitionType="OTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.MozTransform&&(a.animType="MozTransform",a.transformType="-moz-transform",a.transitionType="MozTransition",void 0===b.perspectiveProperty&&void 0===b.MozPerspective&&(a.animType=!1)),void 0!==b.webkitTransform&&(a.animType="webkitTransform",a.transformType="-webkit-transform",a.transitionType="webkitTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.msTransform&&(a.animType="msTransform",a.transformType="-ms-transform",a.transitionType="msTransition",void 0===b.msTransform&&(a.animType=!1)),void 0!==b.transform&&a.animType!==!1&&(a.animType="transform",a.transformType="transform",a.transitionType="transition"),a.transformsEnabled=a.options.useTransform&&null!==a.animType&&a.animType!==!1},b.prototype.setSlideClasses=function(a){var c,d,e,f,b=this;d=b.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),b.$slides.eq(a).addClass("slick-current"),b.options.centerMode===!0?(c=Math.floor(b.options.slidesToShow/2),b.options.infinite===!0&&(a>=c&&a<=b.slideCount-1-c?b.$slides.slice(a-c,a+c+1).addClass("slick-active").attr("aria-hidden","false"):(e=b.options.slidesToShow+a,
d.slice(e-c+1,e+c+2).addClass("slick-active").attr("aria-hidden","false")),0===a?d.eq(d.length-1-b.options.slidesToShow).addClass("slick-center"):a===b.slideCount-1&&d.eq(b.options.slidesToShow).addClass("slick-center")),b.$slides.eq(a).addClass("slick-center")):a>=0&&a<=b.slideCount-b.options.slidesToShow?b.$slides.slice(a,a+b.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):d.length<=b.options.slidesToShow?d.addClass("slick-active").attr("aria-hidden","false"):(f=b.slideCount%b.options.slidesToShow,e=b.options.infinite===!0?b.options.slidesToShow+a:a,b.options.slidesToShow==b.options.slidesToScroll&&b.slideCount-a<b.options.slidesToShow?d.slice(e-(b.options.slidesToShow-f),e+f).addClass("slick-active").attr("aria-hidden","false"):d.slice(e,e+b.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false")),"ondemand"===b.options.lazyLoad&&b.lazyLoad()},b.prototype.setupInfinite=function(){var c,d,e,b=this;if(b.options.fade===!0&&(b.options.centerMode=!1),b.options.infinite===!0&&b.options.fade===!1&&(d=null,b.slideCount>b.options.slidesToShow)){for(e=b.options.centerMode===!0?b.options.slidesToShow+1:b.options.slidesToShow,c=b.slideCount;c>b.slideCount-e;c-=1)d=c-1,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d-b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");for(c=0;e>c;c+=1)d=c,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d+b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");b.$slideTrack.find(".slick-cloned").find("[id]").each(function(){a(this).attr("id","")})}},b.prototype.interrupt=function(a){var b=this;a||b.autoPlay(),b.interrupted=a},b.prototype.selectHandler=function(b){var c=this,d=a(b.target).is(".slick-slide")?a(b.target):a(b.target).parents(".slick-slide"),e=parseInt(d.attr("data-slick-index"));return e||(e=0),c.slideCount<=c.options.slidesToShow?(c.setSlideClasses(e),void c.asNavFor(e)):void c.slideHandler(e)},b.prototype.slideHandler=function(a,b,c){var d,e,f,g,j,h=null,i=this;return b=b||!1,i.animating===!0&&i.options.waitForAnimate===!0||i.options.fade===!0&&i.currentSlide===a||i.slideCount<=i.options.slidesToShow?void 0:(b===!1&&i.asNavFor(a),d=a,h=i.getLeft(d),g=i.getLeft(i.currentSlide),i.currentLeft=null===i.swipeLeft?g:i.swipeLeft,i.options.infinite===!1&&i.options.centerMode===!1&&(0>a||a>i.getDotCount()*i.options.slidesToScroll)?void(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d)}):i.postSlide(d))):i.options.infinite===!1&&i.options.centerMode===!0&&(0>a||a>i.slideCount-i.options.slidesToScroll)?void(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d)}):i.postSlide(d))):(i.options.autoplay&&clearInterval(i.autoPlayTimer),e=0>d?i.slideCount%i.options.slidesToScroll!==0?i.slideCount-i.slideCount%i.options.slidesToScroll:i.slideCount+d:d>=i.slideCount?i.slideCount%i.options.slidesToScroll!==0?0:d-i.slideCount:d,i.animating=!0,i.$slider.trigger("beforeChange",[i,i.currentSlide,e]),f=i.currentSlide,i.currentSlide=e,i.setSlideClasses(i.currentSlide),i.options.asNavFor&&(j=i.getNavTarget(),j=j.slick("getSlick"),j.slideCount<=j.options.slidesToShow&&j.setSlideClasses(i.currentSlide)),i.updateDots(),i.updateArrows(),i.options.fade===!0?(c!==!0?(i.fadeSlideOut(f),i.fadeSlide(e,function(){i.postSlide(e)})):i.postSlide(e),void i.animateHeight()):void(c!==!0?i.animateSlide(h,function(){i.postSlide(e)}):i.postSlide(e))))},b.prototype.startLoad=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.hide(),a.$nextArrow.hide()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.hide(),a.$slider.addClass("slick-loading")},b.prototype.swipeDirection=function(){var a,b,c,d,e=this;return a=e.touchObject.startX-e.touchObject.curX,b=e.touchObject.startY-e.touchObject.curY,c=Math.atan2(b,a),d=Math.round(180*c/Math.PI),0>d&&(d=360-Math.abs(d)),45>=d&&d>=0?e.options.rtl===!1?"left":"right":360>=d&&d>=315?e.options.rtl===!1?"left":"right":d>=135&&225>=d?e.options.rtl===!1?"right":"left":e.options.verticalSwiping===!0?d>=35&&135>=d?"down":"up":"vertical"},b.prototype.swipeEnd=function(a){var c,d,b=this;if(b.dragging=!1,b.interrupted=!1,b.shouldClick=b.touchObject.swipeLength>10?!1:!0,void 0===b.touchObject.curX)return!1;if(b.touchObject.edgeHit===!0&&b.$slider.trigger("edge",[b,b.swipeDirection()]),b.touchObject.swipeLength>=b.touchObject.minSwipe){switch(d=b.swipeDirection()){case"left":case"down":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide+b.getSlideCount()):b.currentSlide+b.getSlideCount(),b.currentDirection=0;break;case"right":case"up":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide-b.getSlideCount()):b.currentSlide-b.getSlideCount(),b.currentDirection=1}"vertical"!=d&&(b.slideHandler(c),b.touchObject={},b.$slider.trigger("swipe",[b,d]))}else b.touchObject.startX!==b.touchObject.curX&&(b.slideHandler(b.currentSlide),b.touchObject={})},b.prototype.swipeHandler=function(a){var b=this;if(!(b.options.swipe===!1||"ontouchend"in document&&b.options.swipe===!1||b.options.draggable===!1&&-1!==a.type.indexOf("mouse")))switch(b.touchObject.fingerCount=a.originalEvent&&void 0!==a.originalEvent.touches?a.originalEvent.touches.length:1,b.touchObject.minSwipe=b.listWidth/b.options.touchThreshold,b.options.verticalSwiping===!0&&(b.touchObject.minSwipe=b.listHeight/b.options.touchThreshold),a.data.action){case"start":b.swipeStart(a);break;case"move":b.swipeMove(a);break;case"end":b.swipeEnd(a)}},b.prototype.swipeMove=function(a){var d,e,f,g,h,b=this;return h=void 0!==a.originalEvent?a.originalEvent.touches:null,!b.dragging||h&&1!==h.length?!1:(d=b.getLeft(b.currentSlide),b.touchObject.curX=void 0!==h?h[0].pageX:a.clientX,b.touchObject.curY=void 0!==h?h[0].pageY:a.clientY,b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curX-b.touchObject.startX,2))),b.options.verticalSwiping===!0&&(b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curY-b.touchObject.startY,2)))),e=b.swipeDirection(),"vertical"!==e?(void 0!==a.originalEvent&&b.touchObject.swipeLength>4&&a.preventDefault(),g=(b.options.rtl===!1?1:-1)*(b.touchObject.curX>b.touchObject.startX?1:-1),b.options.verticalSwiping===!0&&(g=b.touchObject.curY>b.touchObject.startY?1:-1),f=b.touchObject.swipeLength,b.touchObject.edgeHit=!1,b.options.infinite===!1&&(0===b.currentSlide&&"right"===e||b.currentSlide>=b.getDotCount()&&"left"===e)&&(f=b.touchObject.swipeLength*b.options.edgeFriction,b.touchObject.edgeHit=!0),b.options.vertical===!1?b.swipeLeft=d+f*g:b.swipeLeft=d+f*(b.$list.height()/b.listWidth)*g,b.options.verticalSwiping===!0&&(b.swipeLeft=d+f*g),b.options.fade===!0||b.options.touchMove===!1?!1:b.animating===!0?(b.swipeLeft=null,!1):void b.setCSS(b.swipeLeft)):void 0)},b.prototype.swipeStart=function(a){var c,b=this;return b.interrupted=!0,1!==b.touchObject.fingerCount||b.slideCount<=b.options.slidesToShow?(b.touchObject={},!1):(void 0!==a.originalEvent&&void 0!==a.originalEvent.touches&&(c=a.originalEvent.touches[0]),b.touchObject.startX=b.touchObject.curX=void 0!==c?c.pageX:a.clientX,b.touchObject.startY=b.touchObject.curY=void 0!==c?c.pageY:a.clientY,void(b.dragging=!0))},b.prototype.unfilterSlides=b.prototype.slickUnfilter=function(){var a=this;null!==a.$slidesCache&&(a.unload(),a.$slideTrack.children(this.options.slide).detach(),a.$slidesCache.appendTo(a.$slideTrack),a.reinit())},b.prototype.unload=function(){var b=this;a(".slick-cloned",b.$slider).remove(),b.$dots&&b.$dots.remove(),b.$prevArrow&&b.htmlExpr.test(b.options.prevArrow)&&b.$prevArrow.remove(),b.$nextArrow&&b.htmlExpr.test(b.options.nextArrow)&&b.$nextArrow.remove(),b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},b.prototype.unslick=function(a){var b=this;b.$slider.trigger("unslick",[b,a]),b.destroy()},b.prototype.updateArrows=function(){var b,a=this;b=Math.floor(a.options.slidesToShow/2),a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&!a.options.infinite&&(a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===a.currentSlide?(a.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):a.currentSlide>=a.slideCount-a.options.slidesToShow&&a.options.centerMode===!1?(a.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):a.currentSlide>=a.slideCount-1&&a.options.centerMode===!0&&(a.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},b.prototype.updateDots=function(){var a=this;null!==a.$dots&&(a.$dots.find("li").removeClass("slick-active").attr("aria-hidden","true"),a.$dots.find("li").eq(Math.floor(a.currentSlide/a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden","false"))},b.prototype.visibility=function(){var a=this;a.options.autoplay&&(document[a.hidden]?a.interrupted=!0:a.interrupted=!1)},a.fn.slick=function(){var f,g,a=this,c=arguments[0],d=Array.prototype.slice.call(arguments,1),e=a.length;for(f=0;e>f;f++)if("object"==typeof c||"undefined"==typeof c?a[f].slick=new b(a[f],c):g=a[f].slick[c].apply(a[f].slick,d),"undefined"!=typeof g)return g;return a}});
////////////////////////////////////////
//////   Global variables
////////////////////////////////////////

// Build and release json data uploaded by user
var buildJsonData = {};
var releaseJsonData = {};

// Template names for Mustache
var templateNames = {
    UPLOAD: "UPLOAD",
    VISUALIZE: "VISUALIZE",
    BUILD: "BUILD",
    RELEASE: "RELEASE",
    OUTPUT: "OUTPUT",
    FOOTER: "FOOTER"
}

// Export functionality variables
var pdf = {
    xAxisValue: 40,
    yAxisValue: 50,
    bodyLineHeight: 18,
    headingLineHeight: 28,
    addNewBodyLine: function () {
        this.yAxisValue = this.yAxisValue + (this.bodyLineHeight*1.1);
    },
    addNewHalfLine: function () {
        this.yAxisValue = this.yAxisValue + (this.bodyLineHeight/2);
    },
    addNewHeadingLine: function () {
        this.yAxisValue = (this.yAxisValue + this.headingLineHeight) * 1.5;
    },
    addNewSubHeadingLine: function () {
        this.yAxisValue = this.yAxisValue + (this.headingLineHeight * 1.5);
    },
    bodyFontSize: 10,
    h1FontSize: 22,
    h2FontSize: 18,
    h3FontSize: 15,
    h4FontSize: 12,
    h5FontSize: 11,
    iconSize: 60,
    printImageIconSize: 13,
    printIconSize: 15,
    lineHeightForIcon: 11,
    getIconIndentValue: function () {
        return this.printIconSize + 5;
    }
};

var lineHeightType = {
    BODY: "BODY",
    HALFLINE: "HALFLINE",
    HEADING: "HEADING",
    SUBHEADING: "SUBHEADING"
};

var lineObjectLength = {
    FULL: 560,
    QUATER: 150
};



////////////////////////////////////////
//////   Constants
////////////////////////////////////////

// App constants
const appVersionNumber = "1.0.0";
const appName = "CI/CD Docs";
const appUrl = "https://clydedz.github.io/cicd-docs/";

// Other constants
const buildJsonUrlQueryStringKey = "buildjson";
const releaseJsonUrlQueryStringKey = "releasejson";
const buildJsonText = "build";
const releaseJsonText = "release";

//////////////////////////////////////////
/////////    Template update starters
//////////////////////////////////////////

function footerView() {
    _switchTemplate(templateNames.FOOTER, { "version": appVersionNumber });
}

function uploadScreenView() {
    _switchTemplate(templateNames.UPLOAD, {});
}

function visualizeScreenView() {
    var visualizeJson = processJson();
    _switchTemplate(templateNames.VISUALIZE, visualizeJson);
}

function buildVisualizeScreenView() {
    var visualizeJson = processJson();
    console.log("buildVisualizeScreenView");
    console.log(visualizeJson.buildDef);
    _switchTemplate(templateNames.BUILD, visualizeJson.buildDef);
}

function releaseVisualizeScreenView() {
    var visualizeJson = processJson();
    _switchTemplate(templateNames.RELEASE, visualizeJson.releaseDef);
}

//////////////////////////////////////
/////////    Template changer
/////////////////////////////////////

function _switchTemplate(templateName, jsonData) {
    if (templateName === templateNames.FOOTER) {
        $("#footerViewTemplateHolder").load("html-partials/footer.html #footerPartial", function () {
            var contents = document.getElementById('footerPartial').innerHTML;
            var output = Mustache.render(contents, jsonData);
            $("#footerView").html(output);
        });
    }
    if (templateName === templateNames.UPLOAD) {
        $("#viewTemplateHolder").load("html-partials/upload.html #uploadPartial", function () {
            var contents = document.getElementById('uploadPartial').innerHTML;
            var output = Mustache.render(contents, jsonData);
            $("#view").html(output);
            document.getElementById('buildJsonUploadControl').addEventListener('change', handleBuildFileUpload, false);
            document.getElementById('fileUploadGo').addEventListener('click', goToVisualization, false);
           
        });
    }
    if (templateName === templateNames.VISUALIZE) {
        $("#viewTemplateHolder").load("html-partials/visualize.html #visualizePartial", function () {
            var contents = document.getElementById('visualizePartial').innerHTML;
            var output = Mustache.render(contents, jsonData);
            $("#view").html(output);
            visualization_ViewLoad(jsonData);
            document.getElementById('showBuildViewBtn').addEventListener('click', goToBuild, false);
            document.getElementById('showReleaseViewBtn').addEventListener('click', goToRelease, false);
            document.getElementById('downloadPdf').addEventListener('click', downloadPdf, false);
        });
    }
    if (templateName === templateNames.BUILD) {
        $("#buildViewTemplateHolder").load("html-partials/build.html #buildPartial", function () {
            var contents = document.getElementById('buildPartial').innerHTML;
            var output = Mustache.render(contents, jsonData);
            $("#buildView").html(output);
            animateCards();
        });
    }
    if (templateName === templateNames.RELEASE) {
        $("#releaseViewTemplateHolder").load("html-partials/release.html #releasePartial", function () {
            var contents = document.getElementById('releasePartial').innerHTML;
            var output = Mustache.render(contents, jsonData);
            $("#releaseView").html(output);
            $('.environment-slider').slick({
                dots: false,
                infinite: true,
                speed: 500,
                fade: true,
                cssEase: 'linear',
                prevArrow: $('.prev'),
                nextArrow: $('.next')
            });
        });
    }
    
}

///////////////////////////////////////////////
/////////    View loads (like page loads)
//////////////////////////////////////////////

function visualization_ViewLoad(combinedJson) {
    //if (combinedJson.buildDef != null) {
        buildVisualizeScreenView(); releaseVisualizeScreenView();
    //}
    //else {
       
    //}
}

//////////////////////////////////////////////
/////////    Navigation buttons actions
/////////////////////////////////////////////

function goToVisualization(e) {
    visualizeScreenView();
}

function goToBuild(e) {
    buildVisualizeScreenView();
}

function goToRelease(e) {
    releaseVisualizeScreenView();
}

function downloadPdf(e) {
    e.preventDefault();
    var visualizeJson = processJson();
    exportPdf(visualizeJson);
}


function __convertImgToDataURLviaCanvas(url) {
    var img = new Image();
    img.crossOrigin = 'Anonymous';
    var dataURL;
    img.onload = function () {
        var canvas = document.createElement('CANVAS');
        var ctx = canvas.getContext('2d');      
        canvas.height = this.height;
        canvas.width = this.width;
        ctx.drawImage(this, 0, 0);
        dataURL = canvas.toDataURL();
        console.log(dataURL);
        //callback(dataURL);
        canvas = null;
        return dataURL;        
    };
    img.src = url;
}

function handleBuildFileUpload(e) {
    try {
        _handleJsonFile(e, buildJsonText);
    }
    catch (err) {
        console.error("Error: handleBuildFileUpload " + err.message);
    }
}

function handleReleaseFileUpload(e) {
    try {
        _handleJsonFile(e, releaseJsonText);
    }
    catch (err) {
        console.error("Error: handleReleaseFileUpload " + err.message);
    }
}

function _handleJsonFile(e, type) {
    var isBuildType = (type === buildJsonText);    
    var fileName = isBuildType ? document.getElementById('buildJsonUploadControl').value
        : document.getElementById('buildJsonUploadControl').value;
    var fileExtension = fileName.substring(fileName.lastIndexOf('.') + 1).toLowerCase();
    
    if (!e.target.files[0]) {
        console.log("No file uploaded");   
        //TODO: showErrorToast(errorCodes.noFileUploaded, ["" + ext]);
    }

    if (e.target.files[0].size > 5242880) {
        console.log("File size exceeded");        
        //TODO: showErrorToast(errorCodes.fileSizeLimit, [""]);
    }
    
    if (fileExtension !== "json") {
        console.log("File extension not supported"); 
        //TODO: showErrorToast(errorCodes.extNotSupported, ["" + ext]);
    }

    var reader = new FileReader();
    reader.onload = function (event) {
        if (isBuildType) {
            buildJsonData = JSON.parse(event.target.result);
        }
        else {
            releaseJsonData = JSON.parse(event.target.result);
        }
        //TODO: remove the line below later
        releaseJsonData = buildJsonData;
    }
    reader.readAsText(e.target.files[0]);
}


function xhrUpload() {
    var flickerAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    $.getJSON(flickerAPI, {
        tags: "mount rainier",
        tagmode: "any",
        format: "json"
    })
    .done(function (data) {
        $.each(data.items, function (i, item) {
            $("<img>").attr("src", item.media.m).appendTo("#images");
            if (i === 3) {
                return false;
            }
        });
    });
}
function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}
//////////////////////////////////
/////////    Process
//////////////////////////////////


function processJson() {
    var combinedJson = {
        buildDef: getBuildJson(buildJsonData),
        releaseDef: getReleaseJson(releaseJsonData)
    }
    return combinedJson;
}
//////////////////////////////////
/////////    Build process
//////////////////////////////////

function getBuildJson(buildJsonInput) {

    var _buildDef = {
        name: getBuildDefinitionName(buildJsonInput),
        url: getBuildDefinitionUrl(buildJsonInput),
        buildStatusBadge: getBuildDefinitionBadge(buildJsonInput),
        creationDate: getBuildDefinitionCreationDate(buildJsonInput),
        repository: getBuildDefinitionRepository(buildJsonInput),
        author: getBuildDefinitionAuthor(buildJsonInput),
        project: getBuildDefinitionProject(buildJsonInput),
        triggers: getBuildDefinitionTriggers(buildJsonInput),
        retention: getBuildDefinitionRetention(buildJsonInput),
        queue: getBuildDefinitionQueue(buildJsonInput),
        variables: getBuildDefinitionVariables(buildJsonInput),
        process: getBuildDefinitionProcess(buildJsonInput),
        metaInformation: getBuildMetaInformation(buildJsonInput),
        stats: getStatsForBuildDefinition(buildJsonInput)
    };
    return _buildDef;
}

////////////////////////////////////////////////
/////////    Build process detailed methods
///////////////////////////////////////////////

function getBuildDefinitionName(buildJsonInput) {
    return buildJsonInput.name;
}

function getBuildDefinitionUrl(buildJsonInput) {
    return buildJsonInput.url;
}

function getBuildDefinitionCreationDate(buildJsonInput) {
    var createdOn = new Date(buildJsonInput.createdDate);
    return createdOn.toLocaleString();
}

function getBuildDefinitionRepository(buildJsonInput) {
    var _isTfsGit = (buildJsonInput.repository.type === "TfsGit");
    var _isGitHub = (buildJsonInput.repository.type === "GitHub");
    var _isTfvc = (buildJsonInput.repository.type === "TfsVersionControl");
    var _isBitbucket = (buildJsonInput.repository.type === "Bitbucket");
    var _isOther = (!_isTfsGit && !_isGitHub && !_isTfvc && !_isBitbucket);

    var _repository = {
        name: buildJsonInput.repository.name,
        url: buildJsonInput.repository.url,
        isTfsGit: _isTfsGit,
        isGitHub: _isGitHub,
        isTfvc: _isTfvc,
        isBitbucket: _isBitbucket,
        isOther: _isOther,
        icon: `/images/extend/repository/${buildJsonInput.repository.type}/icon.png`,
        type: buildJsonInput.repository.type
    }
    return _repository;
}

function getBuildDefinitionBadge(buildJsonInput) {
    return buildJsonInput._links.badge.href;
}

function getBuildDefinitionAuthor(buildJsonInput) {
    var _author = {
        displayName: buildJsonInput.authoredBy.displayName,
        email: buildJsonInput.authoredBy.uniqueName
    };
    return _author;
}

function getBuildDefinitionProject(buildJsonInput) {
    let doesDescriptionExists = buildJsonInput.project.description !== undefined || buildJsonInput.project.description !== "";
    var _project = {
        name: buildJsonInput.project.name,
        doesDescriptionExists: doesDescriptionExists,
        description: doesDescriptionExists ? buildJsonInput.project.description : "",
        url: buildJsonInput.project.url
    };
    return _project;
}

function getBuildDefinitionTriggers(buildJsonInput) {
    var triggersExist = buildJsonInput.triggers != null;
    var _triggers = {
        batchChanges: triggersExist ? buildJsonInput.triggers[0].batchChanges : false,
        triggerType: triggersExist ? buildJsonInput.triggers[0].triggerType : 1,
        continousIntegration: triggersExist
    };
    return _triggers;
}

function getBuildDefinitionRetention(buildJsonInput) {
    var _retention = [];
    for (i = 0; i < buildJsonInput.retentionRules.length; i++) {
        var _item = {};
        _item["daysToKeep"] = buildJsonInput.retentionRules[i].daysToKeep;
        _item["minimumToKeep"] = buildJsonInput.retentionRules[i].minimumToKeep;
        _retention.push(_item);
    }
    return _retention;
}

function getBuildDefinitionQueue(buildJsonInput) {
    var _queue = {
        displayName: buildJsonInput.queue.name,
        name: buildJsonInput.queue.pool.name,
        isHosted: buildJsonInput.queue.pool.isHosted,
        id: buildJsonInput.queue.pool.id,
        icon: `/images/extend/queue/${buildJsonInput.queue.pool.id}/icon.png`
    };
    return _queue;
}

function getBuildDefinitionVariables(buildJsonInput) {
    var _variables = buildJsonInput.variables;
    var _variablesLength = Object.keys(_variables).length;
    var _variablesJson = [];

    // for all the variables, we're modifying the structure of our final JSON
    // to be something like {"key":"key name", "value": "key value"} 
    // instead of {"key name":{"value":"key value"} }
    for (i = 0; i < _variablesLength; i++) {
        var _key = Object.keys(_variables)[i];
        var _item = {};
        _item["id"] = i;
        _item["key"] = _key;
        _item["value"] = _variables[_key].value;
        _variablesJson.push(_item);
    }

    return _variablesJson;
}

function getBuildDefinitionProcess(buildJsonInput) {
    var _phases = buildJsonInput.process.phases;
    var _processJson = [];

    // Construct each phase 
    for (i = 0; i < _phases.length; i++) {
        var _phasesArray = {};
        var currentPhase = _phases[i];

        // Construct the meta data of each phase
        _phasesArray["name"] = currentPhase.name;
        _phasesArray["executionType"] = currentPhase.target.executionOptions.type;
        _phasesArray["isExecutionTypeParallelismNone"] = currentPhase.target.executionOptions.type===0;
        _phasesArray["isExecutionTypeParallelismMultiConfig"] = currentPhase.target.executionOptions.type === 1;
        _phasesArray["isExecutionTypeParallelismMultiAgent"] = currentPhase.target.executionOptions.type === 2;
        _phasesArray["phaseType"] = currentPhase.target.type;
        _phasesArray["isPhaseAgentful"] = currentPhase.target.type===1;
        _phasesArray["isPhaseAgentless"] = currentPhase.target.type === 2;
        _phasesArray["colorHexCode"] = random_rgba();
        _phasesArray["steps"] = [];

        // Construct each step within that phase        
        for (j = 0; j < currentPhase.steps.length; j++) {
            var _stepsArray = {};
            var currentStep = currentPhase.steps[j];
            var _taskIcon = "";
            
            _stepsArray["name"] = currentStep.displayName;
            _stepsArray["enabled"] = currentStep.enabled;
            _stepsArray["continueOnError"] = currentStep.continueOnError;
            _stepsArray["id"] = currentStep.task.id;
            _stepsArray["version"] = currentStep.task.versionSpec;
            _stepsArray["icon"] = `/images/extend/tasks/${currentStep.task.id}/icon.png`;

            _phasesArray["steps"].push(_stepsArray);
        }
        
        // Finally, push each phase into the process JSON
        _processJson.push(_phasesArray);
    }
    
    return _processJson;
}

function getBuildMetaInformation(buildJsonInput) {
    var _meta = {
        version: buildJsonInput.revision,
        buildNumberFormat: buildJsonInput.buildNumberFormat
    };
    return _meta;
}

function errorLoadingImage(e) {
    e.src = "/images/logo/logo-sq.png";
    console.clear();  
}

function errorLoadingQueueIcon(e) {
    e.src = "/images/extend/queue/0/icon.png";
    console.clear();
}

function errorLoadingRepositoryIcon(e) {
    e.src = "/images/extend/repository/Other/icon.png";
    console.clear();
}


function getStatsForBuildDefinition(buildJsonInput) {
    let countOfVariables = getBuildDefinitionVariables(buildJsonData).length;
    let countOfPhases = buildJsonInput.process.phases.length;

    let getCountOfTasks = () => {
        let _countTasks = 0;
        for (let pIndex = 0; pIndex < buildJsonInput.process.phases.length; pIndex++) {
            _countTasks += buildJsonInput.process.phases[pIndex].steps.length;            
        }
        return _countTasks;
    }

    return statistics = {
        tasks: getCountOfTasks(),
        variables: countOfVariables,
        phases: countOfPhases
    };
}
//////////////////////////////////
/////////    Release process
//////////////////////////////////

function getReleaseJson(releaseJsonInput) {

    var _releaseDef = {
        name: getReleaseDefinitionName(releaseJsonInput),
        doesReleaseDefinitionDescriptionExist: doesReleaseDefinitionDescriptionExist(releaseJsonData),
        description: getReleaseDefinitionDescription(releaseJsonInput),
        url: getReleaseDefinitionUrl(releaseJsonInput),
        creationInformation: getReleaseDefinitionCreationDate(releaseJsonInput),
        modificationInformation: getReleaseDefinitionModificationDate(releaseJsonInput),
        releaseDefinitonHasMultipleEnvironments: releaseDefinitonHasMultipleEnvironments(releaseJsonInput),
        environments: getReleaseDefinitionEnvironments(releaseJsonInput),
        doeReleaseDefinitionHaveArtifacts: doeReleaseDefinitionHaveArtifacts(releaseJsonData),
        artifacts: getReleaseDefinitionArtifacts(releaseJsonInput),
        isTriggerSetupForReleaseDefinition: isTriggerSetupForReleaseDefinition(releaseJsonInput),
        triggers: getReleaseDefinitionTriggers(releaseJsonInput),
        doVariablesExists: doVariablesExists(releaseJsonInput),
        variables: getReleaseDefinitionVariables(releaseJsonInput),
        metaInformation: getReleaseMetaInformation(releaseJsonInput),
        stats: getStatsForReleaseDefinition(releaseJsonInput)
    };
    return _releaseDef;
}

function getReleaseDefinitionName(releaseJsonInput) {
    return releaseJsonInput.name;
}

function doesReleaseDefinitionDescriptionExist(releaseJsonInput) {
    return releaseJsonInput.description !== null;
}

function getReleaseDefinitionDescription(releaseJsonInput) {
    return releaseJsonInput.description;
}

function getReleaseDefinitionUrl(releaseJsonInput) {
    return releaseJsonInput.url;
}

function getReleaseDefinitionCreationDate(releaseJsonInput) {
    let createdOn = new Date(releaseJsonInput.createdOn);

    let _creation = {
        createdOn: createdOn.toLocaleString(),
        createdBy: releaseJsonData.createdBy.displayName,
        createdByEmail: releaseJsonData.createdBy.uniqueName
    };
    return _creation;
}

function getReleaseDefinitionModificationDate(releaseJsonInput) {
    let modifiedOn = new Date(releaseJsonInput.modifiedOn);

    var _modification = {
        modifiedOn: modifiedOn.toLocaleString(),
        modifiedBy: releaseJsonData.modifiedBy.displayName,
        modifiedByEmail: releaseJsonData.modifiedBy.uniqueName
    };
    return _modification;
}

function getReleaseMetaInformation(releaseJsonInput) {
    var _meta = {
        version: releaseJsonInput.revision,
        releaseNameFormat: releaseJsonInput.releaseNameFormat
    };
    return _meta;
}

function isTriggerSetupForReleaseDefinition(releaseJsonInput) {
    return releaseJsonInput.triggers.length !== 0;
}

function getReleaseDefinitionTriggers(releaseJsonInput) {
    var _triggers = [];

    // A release definiton can have multiple triggers. Loop thru each trigger and add them to the list.
    for (var triggerIndex = 0; triggerIndex < releaseJsonInput.triggers.length; triggerIndex++) {
        var item = {};
        var currentTriggerItem = releaseJsonInput.triggers[triggerIndex];
        item["artifactAlias"] = currentTriggerItem.artifactAlias;
        item["triggerType"] = currentTriggerItem.triggerType;
        item["isTriggerTypeContinuousDeployment"] = currentTriggerItem.triggerType === 1;
        item["isTriggerTypePullRequest"] = currentTriggerItem.triggerType === 6;
        item["triggerConditions"] = [];

        // Each trigger item has trigger conditions. Loop thru each condition and add them as well.
        for (var triggerConditionIndex = 0; triggerConditionIndex < currentTriggerItem.triggerConditions.length; triggerConditionIndex++) {
            var condition = {};
            var currentConditionItem = currentTriggerItem.triggerConditions[triggerConditionIndex];
            condition["sourceBranch"] = currentConditionItem.sourceBranch;
            condition["useBuildDefinitionBranch"] = currentConditionItem.useBuildDefinitionBranch;
            item["triggerConditions"].push(condition);
        }

        _triggers.push(item);
    }
   
    return _triggers;
}


function doeReleaseDefinitionHaveArtifacts(releaseJsonInput) {
    return releaseJsonInput.artifacts.length !== 0;
}

function getReleaseDefinitionArtifacts(releaseJsonInput) {
    var _artifacts = [];

    // A release definiton can have multiple triggers. Loop thru each trigger and add them to the list.
    for (var artifactsIndex = 0; artifactsIndex < releaseJsonInput.artifacts.length; artifactsIndex++) {
        var item = {};
        var currentTriggerItem = releaseJsonInput.artifacts[artifactsIndex];

        if (currentTriggerItem.type.toString().toLowerCase() !== "build") {
            continue;
        }

        item["type"] = currentTriggerItem.type;
        item["artifactAlias"] = currentTriggerItem.alias;
        item["source"] = currentTriggerItem.definitionReference.definition.name;
        item["project"] = currentTriggerItem.definitionReference.project.name;
        item["defaultVersion"] = currentTriggerItem.definitionReference.defaultVersionType.name;
        item["isPrimary"] = currentTriggerItem.isPrimary;
        item["isRetained"] = currentTriggerItem.isRetained;        

        _artifacts.push(item);
    }

    return _artifacts;
}

function doVariablesExists(releaseJsonInput) {
    let relPipelineContainsVariables = Object.keys(releaseJsonInput.variables).length > 0;
    let eachEnvironmentContainsVariables = false;

    for (var envIndex = 0; envIndex < releaseJsonInput.environments.length; envIndex++) {
        let variables = releaseJsonInput.environments[envIndex].variables;
        eachEnvironmentContainsVariables = Object.keys(variables).length > 0;
        if (eachEnvironmentContainsVariables) {
            break;
        }
    }

    return relPipelineContainsVariables || eachEnvironmentContainsVariables;
}

function getReleaseDefinitionVariables(releaseJsonInput) {
    var _variables = releaseJsonInput.variables;
    var _variablesLength = Object.keys(_variables).length;
    var _variablesJson = [];

    // For all release-wide scoped variables
    // For all the variables, we're modifying the structure of our final JSON
    // to be something like {"key":"key name", "value": "key value"} 
    // instead of {"key name":{"value":"key value"} }
    for (i = 0; i < _variablesLength; i++) {
        var _key = Object.keys(_variables)[i];
        var _item = {};
        _item["id"] = i;
        _item["key"] = _key;
        _item["scope"] = "Release";
        _item["isSecret"] = _variables[_key].isSecret;
        if (_variables[_key].isSecret) {
            _item["value"] = "******";
        }
        else {
            _item["value"] = _variables[_key].value;           
        }
 
        _variablesJson.push(_item);
    }

    // For variables scoped to their environment
    var scopedVariables = _getEnvironmentSpecificVariablesForReleaseDefinition(releaseJsonInput.environments);
    for (var scopedIndex = 0; scopedIndex < scopedVariables.length; scopedIndex++) {
        _variablesJson.push(scopedVariables[scopedIndex]);
    }

    return _variablesJson;
}

function _getEnvironmentSpecificVariablesForReleaseDefinition(environmentVariables){
    var envVariables = [];

    for (var envIndex = 0; envIndex < environmentVariables.length; envIndex++) {
        var _variables = environmentVariables[envIndex].variables;
        var _variablesLength = Object.keys(_variables).length;

        for (var i = 0; i < _variablesLength; i++) {
            var _key = Object.keys(_variables)[i];
            var _item = {};
            _item["id"] = i;
            _item["key"] = _key;
            _item["scope"] = environmentVariables[envIndex].name;
            _item["isSecret"] = _variables[_key].isSecret;
            if (_variables[_key].isSecret) {
                _item["value"] = "******";
            }
            else {
                _item["value"] = _variables[_key].value;
            }

            envVariables.push(_item);
        }

    }

    return envVariables;
}


function releaseDefinitonHasMultipleEnvironments(releaseJsonInput) {
    return releaseJsonInput.environments.length > 1;
}

function processEmailRecipients(encodedRecipientList, currentEnvironment, releaseDefinition) {
    let recipientList = "";
    let encodedRecipients = encodedRecipientList.split(';');
    for (let listIndex = 0; listIndex < encodedRecipients.length; listIndex++) {
        let currentRecipient = encodedRecipients[listIndex];
        let isLastItemInTheList = (listIndex + 1 === encodedRecipients.length);
        let suffixChar = isLastItemInTheList ? "" : ", ";
        let alredyExistsInList = (recipient) => {
            return recipientList.includes(recipient);
        };

        if (currentRecipient === "release.environment.owner") {
            recipientList += alredyExistsInList(currentEnvironment.owner.displayName) ? "" : currentEnvironment.owner.displayName + suffixChar;
        }

        else if (currentRecipient === "release.creator") {
            recipientList += alredyExistsInList(releaseDefinition.createdBy.displayName) ? "" : releaseDefinition.createdBy.displayName + suffixChar;
        }

        else {
            recipientList += currentRecipient + suffixChar;
        }
    }

    // Final cleanup
    recipientList = recipientList.trim();
    recipientList = recipientList.charAt(recipientList.length - 1) === ',' ? recipientList.substr(0, recipientList.length - 1) : recipientList;

    return recipientList;

}

function getReleaseDefinitionEnvironments(releaseJsonInput) {
    var _environment = [];

    for (var envIndex = 0; envIndex < releaseJsonInput.environments.length; envIndex++) {
        let item = {};
        let currentEnv = releaseJsonInput.environments[envIndex];
        let isOwnerHuman = currentEnv.owner.isContainer === undefined;

        item["id"] = currentEnv.id;
        item["name"] = currentEnv.name;
        item["colorHexCode"] = random_rgba();
        item["rank"] = currentEnv.rank;
        item["ownerName"] = currentEnv.owner.displayName;
        item["isOwnerHuman"] = isOwnerHuman;
        item["ownerEmail"] = currentEnv.owner.uniqueName;
        item["emailNotificationType"] = currentEnv.environmentOptions.emailNotificationType;
        item["emailRecipients"] = processEmailRecipients(currentEnv.environmentOptions.emailRecipients, currentEnv, releaseJsonData);      

        // conditions
        item["conditions"] = getConditonsForReleaseDefinition(currentEnv);

        // Pre deployment approvals, if any
        item["preDeployApprovals"] = getPreDeploymentApprovalsForReleaseDefinition(currentEnv);

        // Post deployment approvals, if any
        item["postDeployApprovals"] = getPostDeploymentApprovalsForReleaseDefinition(currentEnv);        

        // Deployment phases
        // TODO: check if each phases' queue id is the same for all accounts
        item["deploymentPhases"] = getDeploymentPhaseDetailsForReleaseDefinition(currentEnv);      

        _environment.push(item);
    }

    return _environment;
}

function getDeploymentPhaseDetailsForReleaseDefinition(currentEnvironment) {
    let phases = [];

    // Each environment can have multiple phases. Let's go thru each phase and add what's required to our list.
    for (let phaseIndex = 0; phaseIndex < currentEnvironment.deployPhases.length; phaseIndex++) {
        var phaseItem = {};
        var currentPhase = currentEnvironment.deployPhases[phaseIndex];

        phaseItem["phaseType"] = currentPhase.phaseType;
        phaseItem["isPhaseAgentful"] = currentPhase.phaseType === 1;
        phaseItem["isPhaseAgentless"] = currentPhase.phaseType === 2;
        phaseItem["isDeploymentGroup"] = currentPhase.phaseType === 4;
        phaseItem["name"] = currentPhase.name;
        phaseItem["rank"] = currentPhase.rank;
        phaseItem["steps"] = getStepsForEachPhaseInReleaseDefinition(currentPhase);

        // Add each phase to the list of phases
        phases.push(phaseItem);
    }

    return phases;
}

function getStepsForEachPhaseInReleaseDefinition(currentPhase) {
    let steps = [];

    // Each phase can have multiple steps. Let's go thru each step and add them to the phase.
    for (let stepIndex = 0; stepIndex < currentPhase.workflowTasks.length; stepIndex++) {
        var stepItem = {};
        var currentStep = currentPhase.workflowTasks[stepIndex];

        stepItem["id"] = currentStep.taskId;
        stepItem["taskId"] = currentStep.taskId;
        stepItem["name"] = currentStep.name;
        stepItem["version"] = currentStep.version;
        stepItem["enabled"] = currentStep.enabled;
        stepItem["continueOnError"] = currentStep.continueOnError;
        stepItem["icon"] = `/images/extend/tasks/${currentStep.taskId}/icon.png`;

        // Add each step to the list of steps in a particular phase
        steps.push(stepItem);
    }
    
    return steps;
}

function getPostDeploymentApprovalsForReleaseDefinition(currentEnvironment) {
    let postDeploymentApprovals = [];

    for (let postDepApprovalIndex = 0; postDepApprovalIndex < currentEnvironment.postDeployApprovals.approvals.length; postDepApprovalIndex++) {
        let postDepItem = {};
        let currentPostDepItem = currentEnvironment.postDeployApprovals.approvals[postDepApprovalIndex];

        postDepItem["rank"] = currentPostDepItem.rank;
        postDepItem["id"] = currentPostDepItem.id;
        postDepItem["isNotificationOn"] = currentPostDepItem.isNotificationOn;
        postDepItem["isAutomated"] = currentPostDepItem.isAutomated;

        if (currentPostDepItem.isAutomated) {
            postDepItem["approver"] = null;
            postDeploymentApprovals.push(postDepItem);
            continue;
        }

        postDepItem["approver"] = {
            "displayName": currentPostDepItem.approver.displayName,
            "isApproverHuman": currentPostDepItem.approver.isContainer === undefined,
            "uniqueName": currentPostDepItem.approver.uniqueName
        };

        postDeploymentApprovals.push(postDepItem);
    }

    return postDeploymentApprovals;
}

function getPreDeploymentApprovalsForReleaseDefinition(currentEnvironment) {
    let preDeploymentApprovals = [];

    for (let preDepApprovalIndex = 0; preDepApprovalIndex < currentEnvironment.preDeployApprovals.approvals.length; preDepApprovalIndex++) {
        let preDepItem = {};
        let currentPreDepItem = currentEnvironment.preDeployApprovals.approvals[preDepApprovalIndex];

        preDepItem["rank"] = currentPreDepItem.rank;
        preDepItem["id"] = currentPreDepItem.id;
        preDepItem["isNotificationOn"] = currentPreDepItem.isNotificationOn;
        preDepItem["isAutomated"] = currentPreDepItem.isAutomated;

        if (currentPreDepItem.isAutomated) {
            preDepItem["approver"] = null;
            preDeploymentApprovals.push(preDepItem);
            continue;
        }

        preDepItem["approver"] = {
            "displayName": currentPreDepItem.approver.displayName,
            "isApproverHuman": currentPreDepItem.approver.isContainer === undefined,
            "uniqueName": currentPreDepItem.approver.uniqueName
        };

        preDeploymentApprovals.push(preDepItem);
    }

    return preDeploymentApprovals;
}

function getConditonsForReleaseDefinition(currentEnvironment) {   
    let isConditionSetToManual = () => {
        return currentEnvironment.conditions.length === 0
    };   
    let isConditionsSetToAfterEnvironment = () => {
        if (currentEnvironment.conditions[0] === undefined) {
            return false;
        }
        return currentEnvironment.conditions[0].conditionType === 6;
    };
    let getConditionDisplayName = () => {
        if (currentEnvironment.conditions[0] === undefined) {
            return "Manual Only";
        }
        return currentEnvironment.conditions[0].conditionType === 6 ? "After Environment" : "After Release";
    };
    let getEnvironmentNamesFromCondition = () => {
        let envs = [];

        if (!isConditionsSetToAfterEnvironment()) {
            return envs;
        }

        for (let conditionIndex = 0; conditionIndex < currentEnvironment.conditions.length; conditionIndex++) {
            envs.push(currentEnvironment.conditions[conditionIndex].name);
        }

        return envs;
    };

    let conditions = {
        displayName: getConditionDisplayName(),
        isConditionTypeIsAfterRelease: !isConditionsSetToAfterEnvironment(), // defaults to false, which is after release
        isConditionTypeIsAfterEnvironment: isConditionsSetToAfterEnvironment(),
        isConditionTypeManual: isConditionSetToManual(),
        environments: getEnvironmentNamesFromCondition()
    };

    return conditions;

}


function getStatsForReleaseDefinition(releaseJson) {
    let listOfVariables = getReleaseDefinitionVariables(releaseJson);
    let countOfVariables = listOfVariables.length;
    let countOfEnvironments = releaseJson.environments.length;
    let listOfEnvironments = getReleaseDefinitionEnvironments(releaseJson);

    let getCountOfPhasesTasks = () => {
        let _countPhases = 0;
        let _countTasks = 0;
        for (let eIndex = 0; eIndex < listOfEnvironments.length; eIndex++) {
            _countPhases += listOfEnvironments[eIndex].deploymentPhases.length;

            for (let pIndex = 0; pIndex < listOfEnvironments[eIndex].deploymentPhases.length; pIndex++) {
                _countTasks += listOfEnvironments[eIndex].deploymentPhases[pIndex].steps.length;
            }
        }
        return count = {
            phases: _countPhases,
            tasks: _countTasks
        };
    }

    let countOfPhasesTasks = getCountOfPhasesTasks();

    return statistics = {
        environments: countOfEnvironments,
        tasks: countOfPhasesTasks.tasks,
        variables: countOfVariables,
        phases: countOfPhasesTasks.phases
    };
}

function importTestData() {
    /// <summary>Method to import sticker data.</summary>
    $.getJSON("../samples/build/sample-build.json")
        .done(function (returnedData) {
            buildJsonData = returnedData;
            importTestReleaseData(); //TODO: remove this line from here
        })
        .fail(function (jqxhr, textStatus, error) {
            var err = textStatus + ", " + error;
            console.log("Request Failed: " + err);
        });
}
function importTestReleaseData() {
    /// <summary>Method to import sticker data.</summary>
    $.getJSON("../samples/release/sample-release.json")
        .done(function (returnedData) {
            releaseJsonData = returnedData;
            visualizeScreenView(); //TODO: remove this line from here
        })
        .fail(function (jqxhr, textStatus, error) {
            var err = textStatus + ", " + error;
            console.log("Request Failed: " + err);
        });
}

/////////////////////////////////////////
//////   Export PDF starting point
/////////////////////////////////////////


function exportPdf(buildReleaseJson) {
    var doc = new jsPDF('p', 'pt', 'a4'); 
    doc.setProperties({
        title: getFileName(),
        subject: 'Documentation for your VSTS CI/CD pipeline',
        author: 'CI/CD Docs',
        keywords: 'documentation, cicd, devops, vsts',
        creator: 'CI/CD Docs'
    });

    // DOCUMENT HEADER
    doc = printDocumentHeader(doc);

    ////////////////////////
    //////   BUILD
    ////////////////////////

    if (buildReleaseJson.buildDef !== null) {
        var _buildJson = buildReleaseJson.buildDef;

        // BUILD PIPELINE SECTION
        doc = printBuildPipelineHeading(doc);

        // BUILD NAME, REPOSITORY, PROJECT 
        doc = printBuildNameHeading(doc, _buildJson);
        doc = printRepositoryAndProject(doc, _buildJson);

        // TRIGGERS
        doc = printTriggersHeading(doc);
        doc = printTriggers(doc, _buildJson);
       
        // PROCESS / BUILD TASKS
        doc = printProcessHeading(doc);
        doc = printQueueDetails(doc, _buildJson);
        doc = printPhasesAndSteps(doc, _buildJson);

        // VARIABLES
        doc = printVariablesHeading(doc);
        doc = printVariables(doc, _buildJson);

        // RETENTION, ETC
        doc = printRetentionRulesHeading(doc);
        doc = printRetentionRules(doc, _buildJson);

        // META INFORMATION AND AUTHOR
        doc = printMetaInformationHeading(doc);
        doc = printAuthorDetails(doc, _buildJson);
        doc = printBuildMetaInformation(doc, _buildJson);

    }

    ////////////////////////
    //////   RELEASE
    ////////////////////////

    if (buildReleaseJson.releaseDef !== null) {
        var _releaseJson = buildReleaseJson.releaseDef;

        // RELEASE PIPELINE SECTION
        doc = printReleasePipelineHeading(doc);

        // RELEASE NAME, REPOSITORY, PROJECT AND TRIGGERS
        doc = printReleaseNameHeading(doc, _releaseJson);
        doc = printReleaseDescription(doc, _releaseJson);
        doc = printTriggersHeading(doc);
        doc = printReleaseTriggers(doc, _releaseJson);

        // META INFORMATION
        doc = printMetaInformationHeading(doc);
        doc = printReleaseAuthorDetails(doc, _releaseJson);
        doc = printReleaseMetaInformation(doc, _releaseJson);

        // VARIABLES
        doc = printVariablesHeading(doc);
        doc = printReleaseVariables(doc, _releaseJson);
        
        // ARTIFACTS
        doc = printArtifactsHeading(doc);
        doc = printReleaseArtifacts(doc, _releaseJson);

        // ENVIRONMENTS, PHASES AND TASKS
        doc = printEnvironmentHeading(doc);
        doc = printReleaseDefinitionEnvironments(doc, _releaseJson);
    }
        
    doc = addPageFooter(doc);
    //doc = addDocumentFooter(doc);
    doc.save(`${getFileName()}.pdf`);
}



function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function random_rgba() {
    let o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ', 0.28)';
}
////////////////////////////////////////
//////   Image processing
////////////////////////////////////////

function getBase64Image(img, oImageWidth, oImageHeight) {
    var canvas = document.createElement("canvas");
    canvas.width = (oImageWidth || img.width);
    canvas.height = (oImageHeight || img.height);
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    var dataURL = canvas.toDataURL("image/png");
    return dataURL;
}

function getEnabledStatusIcon() {
    return "data:image/png;base64,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";
}

function getDisabledStatusIcon() {
    return "data:image/png;base64,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";
}

function getContinuousIntegrationEnabledIcon() {
    return "data:image/png;base64,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";
}

function getContinuousIntegrationDisabledIcon() {
    return "data:image/png;base64,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";
}

function getBatchChangesEnabledIcon() {
    return "data:image/png;base64,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";
}

function getBatchChangesDisabledIcon() {
    return "data:image/png;base64,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";
}

function getParallelismIcon() {
    return "data:image/png;base64,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";
}

function getServerIcon() {
    return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAARsSURBVHhe7Zrva1NnFMf7YvSPULFQbdcmdZPJftiUxA6HUmdLf8TpsJvSamktg70YDAYGu5kQU8deDAarDPZiMMZot84UxxzV7YUvJiJjf0Fj0hft33C+e048T+He5N7G3CfpE7gf+NCe5zz39GvlFg+1LSQkJCQk5MWIpNC+/xrd2jdPxf3zwF7KGfZdowxnkniN54D6ggfUF7dKlUniNZ6OOSp1zAEHZ6lfjvaMg/MU4ywds1SUo8bTOQuwUu45Dc8TSaK9e4ZudV2lYvcMYLOcsWtG/UxQmSV+cHqvUKb3KtBSqswSPzhHpqh0ZBqIXtn7d343olMU46x90wZ/JhydAlgprcd43mOXAVZK6zGe981LACul9RjP2/8BwErZFG48pDOph/Ss7AMakuMd/PrG88YnAVZKB7rnvuM+10rb8znN0h9UWLoPsN/epw053sGv7zWzbgYvAqyUDnTPfcd9rpW253Oa/F0qrOUBVn1e8Q3w63vNrJuT7wOslE3h3xUaerpChafLtKE+npLjHfz6xvOePg+wUlqP8bzvvgewUlqP8bwjSYCV0kEigZeGk7So3Nb3anaCtoYnKMczZJwR9HwpgzM2TpvjE0AyiQE52mFM/QG4F8hxysq4wHDG53OpJEfBOTdKmXNjQCuZHKW0xA/OhVHKXhgFWsnz6i9N4gfn4ghtTo4A6qP12+CHZynGWSeHDb4Cl4YBVkrrMZ53+izASmk9xvPOnAFYKa3HeN65IYCVsil8oba9BbXpla2yDfr1jef96DTASulA99x33OdaaXs+p7mjtr07atNjl6psg359r5l18/EpgJXSge6577jPtdL2fE5zN0+F/Jra9JTq84pvgF/fa2bdfPIOwErZFJ6obe/JL1RQVt0G/frG8356EmCltB7jeT97G2CltB7jeVODACulg5Ta5FKDtJg6Qdv6Xq1eH6St6ycoxzNknBH0fCmDsxCnzYUE8HmichtUvRz3gmluG+SMPPNGwuA/hdNxyqTjQCt5M25wG8zGKJsdAFpLg9vg7X7avB0DFo/bvw1+OUCxctZ+g6/AV8cBVkrrMZ7367cAVkrrMZ73mzcAVkrrMZ536XW1cCilbAr8uz/lM7baNujXN573u2MAK6UD3XPfcZ9rpe35nCbI7wa9ZtbN968BrJQOdM99x32ulbbnc5pVte39pja9slW2Qb++18y6+eEowErZFP5R295jte0pNx5X2Qb9+sbz/vgqwEppPcbz/vwKwEppPcbzrvQBrJQO1tUmtxylxZU+2tb3anW5j7aUOZ4h44yg50sZnNUolVajwGqkchv8NUK5ci+IEXPbIGd8Ptfgf5PL91JmrRdoKXvopsQPzk8RtN97mdL3eqj4ew9gs5yRs3JmiW+eP7sBVspdse1+YNYPU+lBF7DeXfkzwQ3fKd89XPs72ej5gfnrEGX+PgS8kJ21v5ONnh+Y/9T79aiT0srio07AX75DaX5GHt+VRs8PCQkJCQlh2tr+ByzBRLLiIi/SAAAAAElFTkSuQmCC";
}

function getServerOffIcon() {
    return "data:image/png;base64,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";
}

function getDeploymentGroupIcon() {
    return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAASVSURBVHhe7Zrva1tlFMcDyv6IaWDQmNDMiZO6zLRrWre5rJ3OzXWbWR1quzY26kAQHIhziqu2BYfagS9EQfBF7ar7ZedEhmz9G3y/mQqiw7n35+s94Tyu3ie393ke0vZeuB/4Uj4nzzn3PE0pG2kqISEhISGhOetfoXR6jGbTNfonXQPiFW/nMZpbX6OsXMeONu/yG8borw1jQLxDtzOv0YNyLXPaRmk2UwUyVbr80Cg9IOXYwDt7u8/zHdqq9K2UzcmO0N3cqPcNGHb47kUE/inmO+RG6I6UzMkfAziiqfYh6ssP02+qHtnwjiNUlrW1exizaRjgiKYeHqJbqhb90E1ZW7uHMZuHAI6o5lGlZXt3vARwRDWPKi3bu/AiwBHV/K3rtHDiBvC/XMe78vKaEba3McWjAEdU86lrwNJMXlv7yzNhexvT/QLAEdX8y5+AJXG6fKmE+7cN0pSXP9X8e6F69yCN5wewTo4bofpFNTemdxDgiGp+4QeAc/6y+zvfc4Qm1dyg9HjfBDluhOoT1dyYHRWAI6r5wgVg4bzZ5Qe8d3FHhSa2V6iu5ixN7yEqytH/2FmhTn6Ne6RkhJopqrkx5ecBjqjmv54zf+d3HaZx1d8sckwj7PVm+HtcZjToPwRwRDW3of8gLXJvn++dDpvp8kx/j8uMBs8cBDiimtsQ1Bs2M+z1Zvh7XGY02HcA4IhqbkNQb9jMsNeb4e9xmdFg4DmAI6q5DUG9y830fnF28WsH9tMfUjLCP3O5ZyzL4f0AR1RzG1SvU/bRhIwxQvWJuu995FmAI6q5DarXNpW9NOH9JNwnY4xQvaLuex/dC3BENbchqNe2boK/13nWy08DHFHNbQjqta2b4O91nnVsD8AR1dyGoF7bugn+XudZ1X6AI6q5DdV+WuTekT3oklKDZjP5DNdG++z+Cazwz2z2DCNe3Q1wRDW3obabxlW/aWpl+kDarVD9ou57Hy8DHFHNbTjp/Wfo9TKdPl6mupoTHKrzWe6RdivUHFH3vd94CuCIah5VWrb3mzsBjqjmUaVle5/YDnBENY8qLdv77ScBjqjmUaVle5/sBTiiqXd66ZaqRT/3PhhRNVFz3isBHNHU+yUqnyrRTVWPanjHUz20S9bW7mHM6W6AIxpbnO/xURfAEV1z1D7+vYLqiqB6KJNFujvVCXy4JRofj/MuSyPlwDoztY3SXJvsdPh4/OMizZ0pAt7XeR4k5djAO58p0pXGHZ6gWSmb410890mBbn+6FYhz+A6fbaWMXMuO6Q5Kny1g5myB7nhfEadMF/D39Baadb58q/n8cYAjGojpudjxRQfAEQ3E9Fzs+OoxgCMaiOm52PH1ZoAjGojpudjxzaMARzQQ03OxY+YRgCMaiOm52HFuE8ARDcT0XKyYy6Pr+43AdxvpdykFwmf4LPdIKR7M5LHuYp4mLuWpfikPrEyofrGdxvlZ8tjoMO8tNt8OrE7s/m5oVbiapcWrOeBKTv97n1bxY5Y6+RneV6cPTVaUn7MAR3TFWK3nLMsvGSCKkfVWnhttQBQj6yUkJCQkJBiRSv0Lrm5J4skO9QYAAAAASUVORK5CYII=";
}

function getHostedIcon() {
    return "data:image/png;base64,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";
}

function getUserIcon() {
    return "data:image/png;base64,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";
}

function getUserGroupIcon() {
    return "data:image/png;base64,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";
}

function getEmailIcon() {
    return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAVHSURBVHhe7ZpdTJZlGMdfKvWg1ebaPJBWKwoKVzZJmemARHpf5SMERBQiEFRIKlnatI9RLWQ5XXLQQVlbdmAbwy8iTPlIdJoHcdDHUXniSjmIE7ZaZez69/zv93rf8Qro897wbjzu+W3/Pc91X9d9Xf+LcfDgDPj4+Pj4+Pj4+Pj4TEp6C+Ymb5d9C5vkanIT4AXR68Lt0kbvuoY9DzRK24MvAV4Uvesa9qQ0yLWUBiClUZ7Ro1nPw9tkBT07z6t6ZE/aNoDS0DNM23fGVsxJ3yL7Fm0BvCzukN2Cu3Qt9yyukwOL64DbQptlv67lniW1MpJRCzjPRj3yHPRudqiRP/TIPZk1ALWsRv7OfFFeCQSQpCkPgCR6Nt51D024Z0U1ECv5enmVLND0rIUe6fVG/5p2T04VQGVVyrrsShkxcaUM57wgQS2ZwI4LcnTHRSChcmaEp02E3oxHxys903tkDy1xz+pNAMX3VdWSnLtJ+sNnIrkbZX8oJPNM4TjeOC9fvXkeSKykW8dFoRd6ojd6pFd6Zm78HnER2ghQGgZaWnBHsEL2hCrkejgnQ8FKSdO0ob1H5u0dlIOtZ0X2DgIzKfZsHZR2ztBxBnqgF+PJ8UaP9KrpCXu4pmADQGkYJb9MlhWUy2WTL5c/HdVrKkp7nxQeHJCR9gFgJsReH/ZLkbaPwtnGQ9jLZXrTVJSp9rglxesBSsMYQpVyb/F6ORypKS6TzvxNmK9pw+d9knyoD2c/7QOmo0O9MvjJt3K/tjVwFmdG5zte6EnTMURqNHRPWSlAaTgppaWysbRERlnnPK+UlEiWpgwdHbjzyDfScuS0jH15GohHeucd9tB2Bs7gLJ05Sg+amhQ3e0xKRQlAaTglZWXy0IYSuWjq18lYRYm8l50d++l5oluyTp6S37pOAW7k1P7e1SPZet3AnuwdngFwJmdrekrc7jGBqmKA0vCm0FzV8/K+ozHeqSyWC1WFseZ6j8l9vd3S1dcN3EysYa1eM7CX6UlPnOHMuvGHPBXx7BFDTRFAaeiK6iLJqimSK+G7MlpbGPvrCSDpuxPy6qUT8s+lk0CMnDPmWKPlBvZgL+15hTM05QqbPQz1BQCloWsa8zG/Ll86I/frCuTw5iK5R9OGH47Kkh+Pyy8/HQcovvNM0wbe4d1oH6cne2vaNZH7GrqnIR+gNIybhjVS37BW/mKPbWvl18YCWaopw/AXcvflTmmk+K7HBtbyjvHAHk4vTcWN9R5NawBKQyuansNjTWtkKNxLrjeFsHv8R8qNMMcaUxu+M8QemrbCeo/mIEBpaM3LzmfqjqDsbw6KhHtKf3N++DN1PDwzuXCN8A7vatoa6z125QGUhtPm9dUS3JUnw+y5M09GduZK9dYMzOGSfOdZeKYMs1avTRvrPfbkApSGM8JrebJgd670RHo77/9R4+Ie1mj5jBDpraF73l4FUBrOIEh661kpd3p/7zz/pfS9PBH/6GK9x7s5AKVhQmhxPmYoDROC9R6tWc6foI409CzWe3ywEqA09CzWexxYAVAaehbrPdqXA5SGnsV6j48yAUpDz2K9x8dLAUpDz2K9x2dPA5SGs46Iv6mkZfZ7HF4CUBrOOiL+ppKW2e9x5CmA0jDueLZg7avjSYDSMO54tmDt69gTAKVh3HGiiMy5lbTc3lfXIoDSMO44UUTm3Epabu+r53GA0tCzWO9xJlWunUkDelOxUo88B71zh9OpFv9ZauBRaRtIBW4LObvoWu75OR1zz6VI22CKXD33COBFGe/ODtxF1/Lx8fHx8fHx8fHxIYHA/+g8VmtQbjhsAAAAAElFTkSuQmCC";
}

function getTimeIcon() {
    return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAqhSURBVHhe7Vp7UJVlGsd2t22rma1ta2ZNSwVROAIigSLXuJyDyJH7VRAcWVAEzNJ0syS8gEkX3dRSy8uGipoayUXTwdXZylynGu9/m2vN5mVNM/Hye/Z53u89wrHd8QAHJIbfzG++9/k9V77zXd7j0aUXvehFL3rRi65B3yno368IH/abih+ETxZhe9+pcNfung1X/uMHFOH8gCIie+KCWwn66bCeC9dCfOg6mch1MuoHF+JJ4aDJaBSNj1t1WM/F4AJcdi8kcstv+bTlqhDNvQCXtNRz4VGAf3sUEHm1OgEmPgGiiU9LPRf8h9d45RMNy0ejKQ/9hcMmYZfSJmGTDuu58JpIg3wm4dvhk4haUzTx6bCejYB8DPTLwwd+E4kUeS2advc8+BXQgwG5GBuQhwXMBv9cHGeeD8gjEvrn4QLrJ1mr52PlyDzESo5O/6WC+oyeAHPgBGwLzMXVwFyitnDUBFwLnEBbRuUiRmrpor8EUJ/gbEoIzsGRkBwixWzcCsnB58yFoTlICpoAU3AWPcqf8m+EshaN45I5r4LjDho5Oj8HX7M/UTfovuChB4aPxyfh2UQG8Q1zVlQG+uoQhxGSjv5h42l22HicuV2Pa4fl0gAd0r0QkYmMqCxcjsoi4uP3kZmYkppK92u3S2QWDWKtKDILG9n/ZVQmzjGva54Tjf0bJC+aT6ROc5Ea0VmYasQQsf+S9NLu7gFzBhaaM4kMYmNYJv1RdB7+V/zpZ0Zn4LMWvyMEojPxKTOjrIzuk1pS05xBW277M1DeDZ4N1Cc2HctiM4hiM3AjNhOF2uESkw4za6cMH9GYDDRzbD0fpzKjLek0wOaTtWgcX8JsULEteSe4VqQu66Lzbxp+LLmnJ8GahkprGhEff7SmI060uDh6MC4NKw2diNdnrSkojo+nR1RSK9hitHkbEss1S1RuS52VfP8/IP5xKRjH9lXlS8V8ldTVSEhFdmIqUWIqbiTyQKKlpOBx1g7b9IQUzGXtdyqhHZCTyTXKVA+uyetDCQl4THzSk+2b7APPkqYSugpJSTQoKRmXklOIklKpQDT541k7pbRknElORogKdgKklqrJtZNTcFJ6ab1Uaxfj+TZSwV2B9EQ0pScRpScZX17kk0pLxEFDI+L1MduQzoDU4l5HW9U/mKtvh7QkbNXabhXc2RifiJSsRKLMRJzL0Zcjr1eJlpWI01kJOKb8CXhdJTgBXKtK1Ve1uYfRa4X45ORw/wvaH68SOg/UJ2ccjuTEE/FxsigTEmBWdjxu5CRQ8EQeiH1VrfcAHYXUyo7H4uxEPCE9VC/umW1FhPj5WKzseHzZqW+FvHhYJo4jyrPiGxmqLIx+zetTok204hUd5jBUHlObDiNvHMr0HCdkn1ASg9/y+l9ai9Zhzke+FTX5VqJJcTRb25mGjbMF/BxQQW2A5Aq16TCkV34cvjPyjTfAJCv+omfpnH9UKUqlhwvH4qeCWNzi45Oi8fHTwrFErJWooDZCcoXabBP+HItS3fuA2HxSnpLZmFend+DV+38xeQzGFMUSFcXic7H5snPlNabE4lpBFP1eBbURRr32nYBpvFni/tdlhmKr8d2B14ek3tSxsKggZ6I0BhWlMUT8hy8Um49TlG1BvQpoA0rNiCu10N8lX9GChmI+wdrtMHimRskvthhbcJ6lUs84TwU4E89ZsHO6hWh6jPG9fLoZG5VtRrEKcBDTLXiZCZVrR9bMmKvDHALPNE3nVis7GiliP2dGrQpwJmZE4+QMM9GLFpjEfsGMr8R+3uz4U3emGc9Kzgz+lGYu5lqNBme+ZmgzzMDzUY5fvjyTWdUz02GxX4jGMG23Is4wY1RCR/BiJC7MiiKaPZYeFXtWJM6L/cKzeFoFOIBZUWiSnHkLiar22VM08XFMgw6/K6S3zvle7NmReMyw7cmzn1YJHcFLEWieE0lUpjc4NttGFXQXzInAFYl97yOidXvs+f6Ollp3UqfbwS4mAtdEk9nuzLnTbjdeCUfz3GdbToDNtlEF3QVzw3FFYrdvIaprsOcO1lrXa02dbge7mPCWE3Bnzp12u1EehvPl4USVwcYtYLPnt+EWeDUcTZKz6WWiL2rtuWkOkfjKw7FTh98V0lvnqFuggm8Bw7Yn9+34LTA/FCcXhBEtDMMwbX+l7FDHH4ILQmGVnIoIop2ziY6uMyhr0eaHAW2qFw6L1FsQajwE54XCS9l2xGmJUwkdQWUIdi4KIVoUiiRlB6Na2SFtew0uCsZ8I+/nrAjCLB3mECpDMc3IxQdic+0UsXk2578Gq4JRWRVMtDgYFWLzcYq2HX5q2/BaMOK4XhPzh8VBuMzcWxVE4drtMKqC0KhmCDI2Qmy/JjbXdf5G6K0gjHlzNNGbgcZWuCoEA98YDbw5Gs2L/Nq3Fe4I3gqjR7j/dZmhKtB4DvH6kJpxNMwqyJmo8sZDS0bhp6WBuLU0wPhtf0kg/rE0kGjpqPZ9GeoIuOdzuvd+sZfxSZDZeKYfl/LXYxXkbCwLQM3ykUTLRhpfh98eiQyxl4/Etyv9uu7HTPkwlgfgO+m9IoBSRePZXjJmwwYV1BlY4Q/LuwFE7/rjzBZPur/Mhe7j9QmlBaBMh3U63gnAPOn5jj+OyAxrw+gB1s6KtvIZitJhzge5UJ9Vz+Dr1f5EfJwq2nv+iBR79TO4wVdB8IpAPLHaH4vlBKkkJ0BqrfJH1fvD8fiqAIRw75tsY7Wf8eDkdYkxAx2WGVVSZ2GtHyWs8eOt6wick4FEWzMC72jtNPOYWvuhSiU4AVz/dV3/GK+/kfUaPywT39+88QT3uqg0X1hVQmdj/Qg0rh/Be3hf2iK2XILrfHFQNEPHUdvJcQakFvc81qr+QdsVtt4X25XuizoV3BXY4EWDqn3oPxuGE230Nd4Am3nIah+cFG3DcJz5wMt5P4xILakptaWH9BKdtWm638VqX8e35E7BZh+k1fjwHt4bNzd6GT+NbffHYzU+OKj1GzXeKONL9CGV0A7wp/ww1ytXtbgm1/t0syf+ID7pKb03+QCsJ6uErsZWL5Rv9Sbi49XN+iSsfZoeYHuF0hXx7RZvlOzw+fmPo7YYbd4GX2GPcr1pnPud+DkfvH67wc14v0sv6Wn4jFfyPcN2E/66fRh/xTXh5rZhLRuibZ6IYPu48imieZsJDayVcqyZT8gAm0+tWRMfczevr7fKO7bD1LJNlh7SS/lMzvv1qUOoNaH8YxORkNdbG/Q9Ku/oj01IZ+0AE7aYu9GIxf5aT0qVGlJrGz/tP/bENpu/1kSvit5tUMfD1nngUr0HUf1QXGAW2y5ZQa07BtZ5orBuKKo55nC9B85xTLOiB74XTXx1Q6lAYnWayz6+pbhuKcddlNqqx5B7dM/fDbt58F1D0bB7KJGQ12c+GYKX9njSUzrEYUjOriGYs3sIztrq7R6Kxl0m9Nch3Rd73BHPf/iXe4YQGcQttr/g9aK9Q5DCa69d/DSXd7lQ1nvd4S0+ieH8f0pOq/yvWOv4v+x2JWRL2uQKS5MbNjYNxtV9g4naRDdcYdY0ubf8/6BfLA7/iR7c7wbzATdUMD864IoT+11xntms6IYLfDzOvlr2zeO15bN+nfD7Xi960Yte9KIX/wMuLv8Ftqoif7gLIMsAAAAASUVORK5CYII=";
}

function getArtifactBuildIcon() {
    return "data:image/png;base64,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";
}

function getArtifactIcon() {
    return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAVmSURBVHhe7ZZLTFxVHMYnJlYTraZGFwpNlcdQKNQqFSylIEJpS3kWKB2e5Q1DZWHSpIlGTFswJiYmLkxMtC5MXJgYSEshUh6FGqkmLcSVpjtoNbqwSnDh5v95/jN/Upx76Zk5XMahmV/yBb5zvvOdc27uDLiiRIkSJUoUZ0npw5YYL/UqfR/rpeXYHoAV00N/KP/ddi91p3fgYYm7XH14KKabGlV+xpeRvH8tzXIXd0o6sontpJgd3TT/vBe4n3Z46YftPfRcXAeeVPkxu8x/1E1znJdtIpOEN+iR+C76Mb4LiOukhRe6qDKphbbKtIt/V+MVKvOzL9NF19XvY5L/PaGb6vmBSNya76S5lOoIfhMS26nX3Qm4O2ghpZWekmELad3Y5u6kRV/Wn/8tUb05Mm1hdV7lTslw5JHSRtdT2oFd7VTJ/vw0He2fptv904BfdHvgKhVJtoqzrJ1t1Bh8nmbZRySpbbSc1qYO6cXj7C+M0eKFK8BqfXaFFnguoY6e4CxLfSH6Xvvg8rTEPiJ5sYX+3tN67wGMDtPi6GUgUL6wgrMssS677Miw/wFkqAfgz9OyLxyJpDfTbHoz8HIzVbC/OUhFc0O0OD8ErJYvrOAsS6wrMKfWLswP0iGe29tClf58BH8EMk7SqcyTQGYT/ZRdi20yvCa+rJLYNeGujCa65c+TV4Yjj9wmPJrVSDezGoF9DbSwrwHV/OrKtAXOscRa4O+GrCaqVJ23/Fm6cVj9qZXp8HCggcqUppSWcxqAzSA+64F6msyppxK5hhm59XT+tXpgU6uOzsl1QuOgh0oKaoH8Wvon30OnC06E/m8or2eJXbcPFj5rgQdn+Oy8Xv0slqngKfTQ1CEPUKiKZChkeD1L7Lp9qPDZfR0naFKGgqfoOC0X1ajFdfSsDK0b7mOJ1fr1UqreBO47UmPwz1PpcYAl1hECO3XeCYw7K6oAltgNIaL3qKoEWGI3hIjeo+YYwBK7aTG+R20Z/VJXDnjKkS1Dmw4+O9+hrpzuyFDwNJbRe41lwIOghlLql2sFT3U1tjQX04DSnZYSYDOKz8534LvItcxoLaH9bcVAWzH9KkNG+DvufR513gQ+I3e0F1GWDDlD11GAJdaIwA6dN8GJDlt6jgAssUYEdui8CU502NJ7GGCJNSKwQ+dNcKLDljcLAZZYIwI7dN4EJzpsOX0QYIk1IrBD501wosOWMwUAS6wRgR06b4ITHba89TrAEmtEYIfOm+BEhy19eQBLrBGBHTpvghMdtpzNBZySVFqwy5pKKp1jIAdwSlJpwS5rKql0jvezAZZYI3Qd4djDmA/2AyyxRug6wrGHMR9mASyxtqxkdJK4BbusnSRuSzAZIz56FWCJtWUlo5PELdhl7SRxW4LJGPFxJsASa4SuIxx7GPPJKwBLrBG6jnDsYcynewGnJJUW7LKmkkrn+DwdcEpSacEuayqpdI4vXgJYYo3QdYRjD2O+3AOwxBqh6wjHHsZ8tRtgiTVC1xGOPYz5Og1giTVC1xGOPYwZTKWloVTgm930mAyFDK9nibWgm9cxlERbeT2fVYac42IyzV1KAYZ3UZ4MhQyvZ4m1oJvXwWfj9XxWGXKOkZ10bjQZGE2mizIUMv71a19QN69jJJmGpeNdGXKOkQR6ZiyJ/hpLUh+DJHpbhkOC17LEWtDN348xN73jPxv+nHLjaRl2lolEOjbuJppwAxNuujSeRHnfqs+dTGvxr1v7grr5QHjvSTflqzNd5nV8tnE3ymV6Y7iqHsJ0At2dTgAiS3R3Jn6DL78Cv2Iz8XT2WhzdmImjpWvxwP8h3958BnWWDXvto0SJEiXKA4vL9S/j1/UNChe6CAAAAABJRU5ErkJggg==";
}

function getProjectIcon() {
    return "data:image/png;base64,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";
}

function getSourceIcon() {
    return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAARGSURBVHhe7ZpBTBxlGIY3MeGOiceSmm5ppVJLWkNLEVEbMNtUUxUbK9uAtBZomkh7MB6qJkZIqAcTo8aD0UJiUkrYiA0VaEXbYu+yx6Yk3S7e1ktPPXyv806/gXV2Vvaw/7//YZ7kycz7fzP7vzMBAgmJmJiYmJiYymn6BHVbzsh4w7DkG84Apt0yLP80DOPHhiHUa4XasnVIxp4eAmy7dVCyybPylNaoHdsGZS05CGwbkjZdMgr3Wve0Ay9hx2mAajROsF+j9/DBMdlfw5fQdAqgGo0T7MeHbjol2ce5hi9h90mAajRO8X57vIduHpAsM4/M/kU2aRkAqEbjhPfjQ7e8J1l/3Ttafwn7+gGq0ThR+/Gh9/ZLlus8Wn0JrX0A1Wiccvu1ew/d2ifZx3PJMuvILG0nAKrROAdOyBr3O5hGuy6tw4c+kJYs5zzuH5AndWSOjjRANRqno1fGgj0384W0XNLbzPFSL0A1GqenB3Wd78poZ6/kg73LKwW9zRyHjgNUozNY69X9DkA1OoO1XqljANXoDNZ6HXkboBqdwVqvoz0A1egM1nq99SZANTqDtV7H3gCoRmew1uv4UYBqdAZrvdKvA1SjM1jr1fcaQDU6g7VeJ48AVKMzWOv1/mGAaoxkZFkKVGPi/LIcPndbHpxbBmjxjITnPB+5LSkd+5/nrT0a+VOagxz+jEp6VYXhFEA1RvLxTYBqTFy4KblgzfeP/5YvmfvKfR2vf563drE4+0Olkl5V4eyrANUYyfjvANVYksME87FbqKfh64M8viT5qSk8EZ6TSnpVhQ+6Aaoxkm9vAFRjSQ6z2fVBpl/fkK7wnFTSqyqc7wKoxkgmFwCqMTGxILlgzXdeHlxa2PgeD19fLk8uyEPv3onwnFTSqyp8eAigGiPJXAOoxkRmTlKZa5IL1unM3Mb3eMn1ZbJ3z4Tnw/CcVNKrKnz0CkA1+iz+IgWqMbF4FaAaSwjPK83zs9IVnBfPSVQvI1x4GaAafe7MAlRjSQ5T7vpbV1FPy835A/DOrOTDcxLVywifdgJUo89KRnIrGaDYv2Y2vsRXZqTwv/PN7tc1nnvrF4tzQFQvI3z2IkA1+qxOS2r1iuRWpwHfK3L/3rR06zjhnRfWZxHzSu6nPL97WZq96x8FOSCqlxFGOwCq0Rms9Rpv934J8dToDNZ6fXEQoBqdwVqvL9sAqtEZrPX6aj9ANTqDtV7ftAJUozNY6/Xd8wDV6AzWen2/D6AancFarx/2AlSjM1jrNdni/SnqqdEZrPX6aQ9ANTqDtV6XnwOoRmew1mu6GaBTu0v/Z6dWsEvQS5fMkXkWcFmtaY7ZXQD9eZf8HZzX2uIuWtMcc88AVKMzWOs1v0PW5ncCi43u/AxgF3b6dafkdckc17fL2PVGwEUXG+VzrWmOqSbU/ZaU0aWk5Je2A07odWEndtOaMTExMTExm5JI/Aui/zBPPGA/cwAAAABJRU5ErkJggg==";
}

function getVersionIcon() {
    return "data:image/png;base64,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";
}

function getContinuousDeliveryIcon() {
    return "data:image/png;base64,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";
}

function getPullRequestIcon() {
    return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAS9SURBVHhe7ZrfT1tlGMfrtf4BbhBnlEnHLzfNooxlMmRUW2hRdJsjwgJMOurFohAqzMiWbGrmEr3QC2NM3IVkkzIH48cQug2yZFGzmIiJXriZ0mudc5pw83x9n57nrKc9LeAxmr5dP8kn9Pt9n+fNCFlaTnAVKFCgQIEC/x3rQ9RYHKJocQ/dLg4Ba5Jne2iu6CD55Bo92dBDRx7sAf6NGw5iSK7Ti5IgNZYEgYeDtKy+hktDtF6OVoVneUd28VA3eeVIH9wHKOp+BVBf35DqH1N6gAb5DvV1Vip9qOyiW5VdwJYO4ydf1UWeik5a4m5lKVbeQQ2882g3FUn3O2et2NKpvnmlRNfmToqZ3Wqq2V9kzXaPNmzdD7ASbTkbTvdyjup2gJVoy9lwupdz7HgZYCXacjac7uUcda0AK9GWs+F0L+doeAlgJdpyNpzu5RzevQAr0Zaz4XQv5wjsBliJKTmwmzz+3bRkdv4XKda8x3jvt84x6VkbWl4AWIkpuaWFYmZOarz3m5lfM+lZG/Y8D7ASU7LTM61obQZYia59zRQ3u/Sz9H5fgJbkyHaPNrT5cbM9ALR7cT/ndj/52gMUT3RiYlBh7dr8FNsfMH77a32O1hkdbiYGdaKzkaKdTUBHI/VJdQfuWYm2bNLRRP3GmYa/DXb7yBv0AUEvLSv7Q/7k84BEr5Royzwb9CKc2FU93yVHehF6ho69+iyQTRlzZTozVXcclTH9OOShgUMeIJsypuYynxvSgIzpxWsNtKu3gej1XbTc24BwX33yv4DKYCXaMs/yjrFL1OtBvRzpQ7ieZsL1QPhp+yOxRK+UaMsm6o5BuWNaKn0YrKPfDtcBb8lP/s1a8qhuiTvTxKDC2h3eSbHBncbH4oE6KjJ6+jUxqBNHagFWomuolmJml36W3g89lXwkZnYS9eHYDoCVmJKdnmnFu9sBVmJKfmc7xc18xxrj46+Z+TWTnrXhZA3ASkzJJ6rJ914Nxc3u5DaKKRMfdqxzTHrWhg+qAVaiLWfD6V7O8eETACvRlrPhdC/n+HgrwEq05Ww43cs5Pn0cYCXacjac7uUcpx4DWIm23HuFFvquAKx6PS/1qnva8PlmgJVoywMLgFWpV93ThjNVACvRdbqS4mbHDs2naj07XZV8JGZ2EvUhUk63RyvUP77MeCQWqSDfaDnFuWOPX07V7NVcbKTC+EwQcdM6o6c/OGvFeBkuKTG2yf5IjDlxCbAqdQrjZdQvd0Sl0oepMvJPbQKm3LQ86ab+mdLk8wDm/ShgVeoEPDvpRph3+Y7JUmqSI71Q38jbX5UCmfxoLtVMM+zMI3RcrtOTiyXUGN1I0WgJ3bq4ETD9ZDZV61litoRm1Z7efya3Ep/NAFalvnsYvgBYlTp/GZmm2ZFpYC1+MUUzspY/jE3QjbFJ9Za2FifouqzlDxfGqX16Alib1CZr+QOAe2bH6Zu588DK0tc8K2v5xeXztG1+jGhhHMgkn/GMjOcnV8/R8NVzQGZpWMbyl2/H8MC1s/TntS+BVOkvPpOx/Ob7UTq6eBawyp0c5z/fnaJ7f4xQ/KcIwPLrxTO4T47vDm5E6MmfR+iH6yO0yK+lLlCgQIECBf43XK6/ASpDaCwWB1idAAAAAElFTkSuQmCC";
}

function getCodeIcon() {
    return "data:image/png;base64,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";
}

function getAfterReleaseIcon() {
    return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAARTSURBVHhe7ZnLa11VGMUz8l8oGqHFJOZBsLY+gkbakjamhLTFqDFptPigaZuCoEU0liC2SPExcFDFQQeCFRxEKUlJmkdTbNJZhw51EqyDDhyIHRTKt9zfdu0bzrl3n52T3JudwfnBIqz1fXufBSFwyKkrKCgoKCgoKCgoSNL2CR6qPy1f1I/KnUdPAzH0/7PlgnZhrc1jxym5sGMU2BIyXVhr82g4KX81ngQaTsnzjDadx05Ip+1wQu4w2jxaRgAVbTSi9Wg/DqhooxGtx853ABVtNKL1eOotQEUbjWg9Ot4EVLTRiNaj8xigoo1GtB57XwdUtNFwPXJpWO4ZXd/3hvTwmvzsHwZUtNFwPdarA8P4iFflo2cIUNFaXFYr8TEJsmZK96B06fzFIbnfMyhjBwblka5B2dYzJOMme2B+SvdR2cP1tdP7GqCitbisVuJjEmTNlN4BmeVO2W/azM7Z2YBMMVo7RwYAFW00Qj0OD8hdnR82v3lGJfr7Zbs9/6r8zWjtvPwKoKKNRqjHRudeBvoBFa3FZbUSH5Og0p6K47I54xK+PMjRlwAVrcVltRIfk6DSnorjsjnjEr48yLEjgIo2GqEeG517efsQoKKNRqjHRudeRvoAFa3FZXnEo5Yzy3LrzC2gkt5flmWuJUjfd7xP/hzplYMcl80Zl/DlQUZ7ARWtxWV5xKOWs0tAlriWoNKdo72ywnHZnHEJXx7k3YOAirYqnP8VyBLXEqR7hHya0NzLez2AirYqfHkDyBLXEqR7hHya0NzLB92AitbisjziUcvF60CWuJYgfY/Pp3OHLw8yth9Q0Vpclkc8arm0AGSJawnS9/h8Onf48iDjXYCKtipcngOyxLUE6R4hnyY09/LpPkBFWxUmrgFZ4lqCdI+QTxOae/lsD6Citbgsj3jUcnUayBLXEqTv8fl07vDlQT5/AVDRWlyWRzxqWbgKZIlrCdL3+Hw6d/jyIF91AiraqrA8CWSJawnSPUI+TWju5evnABVtVbh9BcgS1xKke4R8mtDcyzcdgIrW4rI84lHLb78AWeJagkp3XuxYfRV2GW0ZobmX754FVLQWl+URj1p+n5ClP34GKklnXEtQfqesfPvM6r+7XU5bRmju5dLT5uXEiDYaoR4bnXv5fjegoo1GqIebZ2rX6p/Mmrm8y7ydGdFGI9TDzX364UlZ+XH3Or4Q/bQTUNFGI9SjZj0nnjCvp0a00Qj1qFnPK+2AijYaoR416znZKv9OtQEzLfIwoyhMtsld7THVJPWMSlxtle06M13zf/kJMd0qizOtwHTLOr+uVgnT45r2mGmVjxmVMLNznE0yqh6zzXJovhmYf1zuz7fI2Fxz+be3zWCuRfa6HqbDWe2x0C7bjB+fb5YHxsts0zq+/q6FxUY5f6MJ2KpabBIxHT9k3dpws1H6jBZvNsg/S43AVpDpc8/0mV9qlG7WLCgoKCgoKCgoKMhFXd1/3tVS7AGiyIsAAAAASUVORK5CYII=";
}

function getAfterEnvironmentIcon() {
    return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAOISURBVHhe7ZlNS1RRGMeHiL5ELaJRyjDRKEttHHNCB7PMN8LUScvMDIIIyhKahYUSLdq4KGoRQYugKFwIRSg1LvsA1s6XvkOb8+8+1+eC3jn3eF+8945wfvBbPOc8z/k/gTNkJTQajUaj0Wg0Go1mW/LYs39cvDb8d+A2EIYbb4tXlMWppcPBWyJ3cByIRCOLY0uDdB57y8bE77IxIHkzvOXobcqgLMrk4/g5YixWMQpUjIrlMBejtymDsiiTj+OFlqq8LpaPjQBVI+EvRRmURZkl8VNQPSxyNdeAmuFoFqIMyqJMyubjeKBlaofEcu0QUJuLbhnKMjON7Fh/Ck4bi9TngLqcsUg6ukUoizIpm3bg4+hoHBRtqQGx1jgIlIK0S3pAZHm98MlcEauZfqCUbO4XK7xe+LT2ASSXsRP5Pu2XAZLL2Il8n45esXqpFygpeyL8CPR0imx3t1jp6QZKQdqlq0u08nrR0dcJkFxGTtz5icEOgOQycuLOTwxfBEguI8fK965Yu3phB/7eMNoOkFxGjpXvxxvnd+BLc7wNILlUYvW6lceUeOndjN+5Iu5kAZJLJVavW3lMiZfezfidK+JeC0ByGTlWvn/F2t2WAN8FD84BJJeRY+UH8X4mwHfBZAYguVSS78W+yWbx7FGzWLfm7NKd4TT18pgSa45LzwSdT+TPAiSXSh43GX8w7t9O6uUxJVY/l54JOp94kgZILpVMpcVf6p1KiXo+KuJpk2jYeFOs85ESKz+YAT4CMymA5FKJ214/b/r2jFiZSQX4HeJ5A0ByqcRtbxhv2vE7V8SLOoDkUonb3jDetON3rojZUwDJpRK3vWG8acfvXBEvTwIkl0qceu3nTn0yvPRuxu9cEW9OADL5egtOd/Zzpz7CurPL1yYTP8XSwwKw2YmCKPC1iWzOF2+PAzL5egtOd/Zzpz7CurPL1ybTi4BMvjaRzfnifTVAcqnEqdd+7tQnQ9Y7+934fEvkaxMvGUo+VAEkl0rc9gZ9891XQCZfm3jJUPKpEvAqjzoim9lOHjX5Mg/I5GsT2Zwv5o4CXuVRR2Qz28mjJgtzgEy+NpHN+WK+AiC5VOK2N+ibvz4DMvnaxEuGkm+HAZJLJW57g7755yMgk69NvGQoWSwXq4vlwG50oXwH/lH0R1JkC4fESiEJ7CqNnZeSMfxPkkaj0Wg0Go1Go9kFJBL/AaBTakC9nLfEAAAAAElFTkSuQmCC";
}

function getManualIcon() {
    return "data:image/png;base64,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";
}

function getNotificationIcon() {
    return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAomSURBVHhe7VoJUFRHGh6PmGu1zOmWmmjCoY7cKPcpMCgCooIoh0AYBxBvNAqJO8YDI2rUxSNoTAQ0Kl4oBFcOUTGJcS01V23WZFddj0S3NGpElwDfv3+/ac/glivMQCy+qq+6+/u/7v77Hf3e8FC1ohWtaEUrWvH7xCupCGXu756KX7k8+8pYLOiShmdl+PFGzxTS9RxLdD97jMUBbz21l7bfCfTUtoeOepunIMYsCXPMkujd15PxZ65nvZaMFLNkBJqPx0vSrTJPgppjN8ySidg3vdcb6GiWAjeunxEax0ZLa0sGtbHQwctSh4+YVy2TiP43UWeRhCqLMUjj+jGhcXuNHEwBjzde+tdJqWVCrcNA9Rh8ox5DdIt9xuAMc71ai4VcTlVrScflRPZlsVbC5bX7/DXqRJjLIRWwNkGJaVvoAbDWortVIgqttUSCXL/ATLfVoq+0PBDivmZvAHMjs1bpr8XP1onQirh5NDrx+KekHq10aklw0JKjbSLO2SUS2b6Bf9slIs1RR8/IsEr/GZ5PP4DwjAN4K6MK73H5AXM+aynpB+GpJ2orrSq7eFjwGIViLGW8RORye4Mc+3BEBLWT1pYBhwQEO8Sj2jGBiMti50R0EbpYVGYlRjE/zdyHuvn7iB5Ejv/IXMne25e9fTwiHePxixjXQFzvHwtLGW4ZcBkNJ+c4VDvHEznHY8mts7OyjPyXl+PrFRVEgly/uaIc5VxmZpdjElO7ogLpzPdZ++62rwI1rC1aXkl/EOM4JUDtFIdzcvzPxOYq9BYBp2h0dxuNM26jiVxj8Z7QiKhNfiky8kpRl19KxPV/cj0hZ9ed26EhrC+FNfvWsr+eebyggDrIkMolBuY8/kUxD8+XIeXmhTjTnjGo8owl4rLk1pnZuRu5O3cTcVnPnJlzhJ5QOjwkCktgv+sv1Fs2b8M9Gi6esajxiEWdVzQ8pdx88I6mGT4xRN7ROKsJx/NCqyimGXuLifYW0ZW9RQhUjE0In2hkiDm5PNqst4Imihz9olDjHwUEREMjtMpKeurITnzKrDtciFDF2MTgq64Dz/sv/yiiAdEIl7Jp4RKOpwNG4lvNKCLNSCyVsgI+CO3/tgVusmkUaEYhRc59TEqmRdBIZAeNJOLy23A+GFI2GQYOxJODIvGTyIFL0z4SgyOhCRkBBI9ATVAE2UnZ5OD514aMIOJc0qVkfISF4YWwCJwfGkEUFkEzpNws4DxGKHmEo0JKxsfwcGwdHk7E5f7mfhXlW+8lkcuw4TgrJeMichjFM2nEUFyNHEI9pdysiByG/4icovlHkpSMg5gQvDZqKK5FDSUaFYaDcUOosww1K6KG4pzIKTaCXpVS00Nc6jGhqIodwhNJxgzB6dGh8JWWZkNsKL5Wcgo24gGID0FGfChRfCjOjg6DE5efi3ZcCOo5ljWeH0nSanLEheIfIhejHQDtYHLUBqNGG0KUGIwJQtN7U3uu/ykxBLVC5/iXOmOegQdAr6e2nEM1z183uanfRXSO9IQuGH5JQTidNJjIQPzKTL+1+3Pdifl39nwT501PKR1NiJTB9LrISzcY30mpcRBnNnkQUlMG4XhKEGrHBhEJcr2KtSVjgwDZPjiON0XRJy0Az4pElAFMDM4l3pAjNknp0cGX8DPjArF//ECiuzluIB0RMeEZF0j+7Dmj6IG4mqpBgtK5mcB7zzYll0EYI6VHx2QNVk0OJJqkwTVm/iQN7RNtqX0yNYj+KHwzBtNz7N18OxaIral+eEEZxISYEkwvcl41PP/Nid6NfCRPC0VHvpRrmPXTAuEgZXF5h08NwKWpGiKuX5yioTAZUrEek6ahK0pMg+lSNhmmapBpmJsKpPToSA+A1XR/ojf98a2UbmOaP7q+6Yc9Iq54/LBmmhs6iliaL3pM98cysXcoZhOB83iVc/1luh/qpgY0wY8xXkDn9AGoZ9aIwaV8F6hNhh8mMG9k+BGl++GHGX5wlUGTg/Mslnnc88WoUXjbhwpm+hK97YuTMx+wOP0AqGf64qj01b7tgzmmPvs8t07Mz3lcTve48x2x0eCFvKj3xqFZPkSzfFDLbHBx+gjqwLH5s7xRL7x6Hxye7YteMmxUcH7mzOsyx0gpNx30auow1wvz53ihbq430VzvhhcnfOz5q8Gj+KqZyWTEP1CKk8G5HZLzrZeycTDPC56ZHjg535NovieqMz3vXRy385WYB85zWWDwEXGf4nkDDF+Dmho8tl7mc0rsWVI2HpY5odMCD+RmeRAZiE/mOaMLa36ivcAdP2e6GD5fZQYj4V1f3FB03ihnJ2OaMkgTYaEHnLPcUcs51C9wM/Ev0IWuCF/kjkuL3YkWueEi179T6u5IFXH9AdjMOoDzs4v4IMURiZhg1igcWu5t+KzVGCzkV22e63s5Z5aUTYtsN3Rd4oI9S12JDMT1xS54uqCA2i2twFfL9hIprGDO5ThfqsK3xANnlrnDRQ7zSOB5c5SxXPGl2HukbHqIPSDbmWYtdyFa7iw+TqpUH5ahf24p0f38cD3RyjD2Gby12S6Y/SiPy2xnhIoxuLy50hVWUm4+rHCF2ypnXpwTSkV7x24EGr7/NcBionVafL3KGfWyzxer+z/83+/X8H7DfX4SfVc5YbKUmxc5jtR7dX+inP6G39/lRehWWYT6fXz/N8hdmPJ+f3jl9MMZ0Y8PQHWOI5Ie5nHJfYqUPv1QbszH6/8FvYrafuCIH9f2UxajnM1jO7D4+A6i+8n6D8f3GP6Xj/scFn3uEMXiDItYQ2CPTvour3NBNym3DKyzx/JcB7687Q2/wk6U4MmTW7GQWXdqK5HgyS04eHo7zEQ81w5DhD/XAWe5b0yuPS4p/R1wgdu/+XiaawNLjl1X+tgb4W2vscizwct5vIh8e6J8e7wlZdUP2/Dyie3wPrEZaimpNjiQY54dXRHePAfSCW2dLbpxvzJDf9btsbpAbXhciks9zw6fK7od8oXWIrHRBsM+tkPNRjuij21RuMnm3h36I1vqzPF0jt1QPHZYf/d9LOob7TBxoy1uyjG+3+QAlw02CJT+s2IMaW+Z2GKNQZttcK3AhkihNU4W2GA/8/hma9Tepf+6yRbusts92GKLvuw9JnyiD4/3laxnSkvLRqE9um63woptVri83ZroNq1wY5s1dnB5VLQ5XsvtdyobeBfgy78Dxxdst0b9nTGwTIZ/HyiIoHaFaqgL+8K3sA/s99gYdn+xuMK+9C7r9VwSl19s793wu8BONQbsUKNa+Hb0RZmUHw8U94FXkRqnitVERX1wvVjd8LsA60uEh/1VUnp8UGKOTiW9kbe7D5FgSR8UlVvd+y7A2iJDHLlSevxQ2osiSi1xiUsq7YULzKhia3quzBJDuH5V6GUW5C/tjyfKLdCtwhJlFZZEv6FFC37+NyXEHlBpjoT9Zji2zxw39pvjxD4zpDX0pGhFK1rRila0ojFQqf4LbD+ipKoTpZwAAAAASUVORK5CYII=";
}

function getRevisionVersionNumberIcon() {
    return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAArrSURBVHhe7Vl9VNRVGoas3Tpnt7bOfpxt3dUNxUBAPmOYwRlhEAYE+VYQFVFAcf1YzcTSnGMeTSUyk41Sx9Qli48U1MS+dKtjp8y/9rS5R7baLTPXsmaoKXH1efe993dHMJmRrxE7Z55z3nN/97nP+773fYCBYfx88MEHH3zwwQcffLhOGDYXq4bPJRo+Fxf5udAvn4bwc/WwCpzR+P4H1+3gmke5ZpBqe2MgYDZWB8whCpiDiwHlmCyGv2cO6jXOCzEbb6rWg4/A2VgTOJtoZDn+N6qc8k1WunnkbGoQHIedDYlT0n5jxHzcrtXF94oaXASV4tHgMiJeLwSXIk8MH1xKDZIrw9ch5YhW0gGDqC1CbQcPIaVYH1pKFFqKjrAy5EaV0y0hs9AoOF6/4jVKSQcUWs9BNiBiFqoiZhHx2hFZgmwxfMRMNEpuJs5FzkCkkg44tL6DaEB0CapjSohiStARNQOZwfn0k5gZaBIcn30ZPRMRSuoVaL0HxQDyj52OjbpiIl0xOnQzkCGG101Hk+K+0BdTuBJ7DVqv624A+RumYZNhOpFhOjriijFBDK+fhj2C4/WsYSrGKHGPkd9AQxYfhX7x25S/6K2e5Wt3uK4GkL+xCJtNU4l4PW+cglQxvGkq9gjOVISzzIUqcY+x4m8YaX0D71jfJLocb+A16xH6pZJ0C9mTQ229DfJPnIK/JBYR8fq9eSos+Tx8YhGaBZcwBf9NKMBoJe4xeMhbqw7jxGNHiH4YVUfwkpJ1C3kXDrX1Jsh/fCFqkwuJkgvxXVIhUsTw/NyiuDOWIgQrca9Q+wrKnn6NyF3UvgyDkl4FrbfXDSD/1AI8k1ZAxKvTMhnJYvi0ydinuM/5uc9/j9e9guq6V4jcB8qU9CqI/iLU1hsg//RJeCZjElHGJDgnTqIkMXx6PvYLjs9Op+fQvUrcJ7QcRGVLK5G7aG7FBCW9Ctq9vGYA+WflY2t2PlF2PpzZeUgUw2fl4YDk8vDZxDyMUuI+40grDX99P86/foDo6sCpt+txm5JeBe1uXjDAaqWb8nJgy8slysuFMzeXxonh+fklweXm4NTkLAQqebfIy0Ncbi70ausR77Zg0rvN+PZYC5ErmDt9bK/nfO1+A2wADzqkIAfbC3KIJmfj20k5MFos+ClzByWXg08LczBSybtFIf9YFGSTnfMdk3towom9NPyDF7Gaw/bBHlr2fj3uUkduIe4jQm37DzH8lEzaUZRFVJSJbzjGiuF5PSi5LHzCX/kAJXcLUYdz6kTOlCw4pmb2zITeQrvTABkgLj19InYVZxJNz0T7tCyKLzbRrfzcKrjiTPynJIfuUfJuMS0dccUTsVI8y3psgsp1zPCCCVrtATBAXLYkA3UzM4hmZsAxKwMGMXxJOloFx2f/Ls3AH5W8WxRZcDvnfjGL9Zy/QXA/rDvQJmh1+2mAuGTZBOwuTyfisJelQb8oD7eVp+OQ4Pjs49mZNFzJPaJ0ArLL09BRPoFrTcDj4jeJqM+16mStdDhEfSXvN9Sd+2fAnDSsr0gj4rDPsUAnhq9IxSHBzUnFR3PTMExJu8Wf+Nu+Ig2vLcykX4h9hQUZc1PRMVfWxGaXCfxcJ2umwcHPA2KCunffDfhzCn4734IL81NwkVeT4OZZsGu+hWheCj5ckER/kEI3EL8uF1joOActSMF7LhPmpSJ1gQXfK/4plwlcs07VdsxP7p8JC9MQJGrxvb9UVO+xyIKCRSlEi1JwUOzFwGr/5eJk/F6K3MDKrxFi5QsMZSPbVN57C02aCQtTkLIoGU7B8/kWlwmsqZPaZDi4R59M4NwRHJ/K2sl4XtG9x+IklC5JJlqSjN1iv2Q8hcv9eLTxgDdLUTdYYkbcA0k4ff94GMV+KZuwJAltD4yXuZdNWGKmJOadit8uDBDBz3WqzxUmiDqiJuvz+W7mBy34lTq6jMoUGs55n6h7/93Vq0+oTKJ4DlpqxukH9Pi5lf/aqzTjI8FVJqHRnQnLkvDkMqExw1npMsGEobxvE/wyMx3nXHmxSjONW2bGt0q/y2UC169TvR38vHIp52h9O4PPLvHZm2z2RFePpUn4UJ21MX+34PsM8TP8kBnvLzcTLU9Ek7jYQ0nQMfeN4Hjt1gSRx3rb8kTWJMC5PEEzwcoXZL5N8omdJjyYiLHMt2s8drtM4PotsnfXSMTF5WZ8pa1X8E3Mt2l7nFpmwghRu9+wJiLMmoB2awKRdRw1iIvxxeNd3MoE9yasHAeb1IyDk/WXTeCcNlkvodOEh8fBwPXtSl+/woxQzjmr6fAd51Q/nEBRoq7Qy3skIlLwWn1ZT2i/WmHs/X+dPGIVX26VCe2PmIg4Ghq4+Wo2wcWtMqLxmSi6Rckvw+pHN7HGpuXBuXpspwnMn5S8sdME7hO7ykj2R4yo4fhY5f2Dnz2+txDnfId/yruY8KKiBxZr4mFYa4RjrZFozVhqEF/1dWzCGiPaBcdnbk1YOxY2pXE+qkxYxyYwf1LW62LC6gQM45prtT74dE0ifiP4a0HWM+Kc7GOCRdEDiw1swrp4ONbHE62LVyYYKJ65dsGtN7g3gXNtG1jDq7OqiwkbDDgpeM4/vpFN2MRvrtYZ8LWsF490WaCHeDQeFdrdvPiBqDChygDHYwaiKr1mguAeM6BdcLy6NaFaD1u1pnFWxSkT7sNQ5k8q/u3HDciQtQ04IRN7gRoT/UzU5rjE9X+t6IHH4zoYNsbB8UQcEYc0QXBP6NAuOZ17E/jMJjSc7+SQJmxiE5h/nyP7iTjcr2pskkm9BNd8S+Rv0iNZUd7BkzxwjQ6OGh1RTaxmQlduswcTNsfCpjTOGmWCyBcr51fLs1gsFvtrQeTXxOKsvIe7iMW/nor2/Fa9T6iNgqE2Bo7a+4g4pAlduadi3JvAGpuWh69Zc4c68uOcVSp3haI8gvNXqv7XCOSplIHFVh54SzQcW2OItkRrJnTltnowYWs0arfdR1mKktgWjWkyLxp1ivKIWh1+x3o797nwdOSVv/+3xCBb1Tr5rHpv4hVsj4beFgnH9igiW5RmwrNsgovbHtm9Cd1hWwTu3h6FS5xzrl7n/j++XcF9KlSfd8TfKILbqsNdzH9uiwK2RSJBCr2JXeHQ74iAY2ck0Y4IajjCJnTldvbChJ0R2KPVQaWiPEJ8N+2IxFGR82wkFgiO++2UNSKxTYquB57ngXePgWN3OBGHNKEr99yYnpnw11CMYu13z4Xj/O4wxCraI14IQwj3ucA533DuPNkvHGeeC6U7leT6QAxcHwZH/Rii+rBOE1zcCz0woYFfFFl3QurDyP5CONLUkUdwj5Wyr9YH9WOQrY6uLxpHQ98UCkdTKBGHNEFyIWQXXGOIexPE8E0heFfqQnFe1RA5+5rCkNvMrxHiW17JrwD5kX/TaMzi3k9zbqqiBwd7eeC9IXA0hxDtHa2ZILjm0WSXXDcmiOGZPybOm0NwjiO6JZTymftM464MlXbj4gAPvC+Y7PuDiXiVJlzBBaHxuDLh1Xvojv1BOCZ4Xs+0hCBMFmHUD8VtB4KpnPWH9gXj9P5gXBI6dXxj49Ao6A8Gkb01iKj1Xs2E1nsR18lhL2sSeD0m90E4dSiwf58o33B4nU14dRTZOYijocGPhrzKJnThtAjExy8Hev6A5UcLYcLhQLIfDsRm8WIluREI4P3OwyNxlGPjoeBrf+D5o8aRAIxwDe+DDz744IMPPvgw+PDz+z9TnIz1PItCeAAAAABJRU5ErkJggg==";
}

function getNameFormatIcon() {
    return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAUUSURBVHhe7ZbvT5VlGMfpRaw239TW1htY8bMwTYMCkQMc+XEMsLIglwHh+CE/FBRGmiVkFIdYMpcN02zZXG1oDaOsGSxrK/GdW7j6Bzz0rtamG6txfbuv57kOxTPIm8Oe57nZ+Gyfned7Pdd97otn5z6HuFVWWWWVVVbRJ6MX8QltNJjYSpHENsBtE1rpj8RWnElswT0ygr880ELhB1sAr1X7TqXspftkDP9IbqbplGYguYVypeQqvNecuw14COm7AVai60T3y3nZfk1rUg9hl48PIaMRYCW6TnS/oYtAoNu+zmj08SGsbwBYia4T3e/st8CpL4EtXXZe10BTG/x4CBvrAVai60T3G/3G9pMLQKjTrm2s9+EhZO0CWImuE91v/Kt/vfA5UN5h1zPrPH4I2XUAK9F1ovtNjs134jzwTLt9L/slmsrz6iHk1gKsRNfZVEvTvN/oaWBqdL6TI0DlHnue3Fqayqmne2WZe+TXAKxE18mvpnB0z9sZqKGPZZl7BKsBVqLrVFUhvvBF6i+spkh078Wl32WZexTvBFiJxuDZXKEX1M+QUqIxeDZX2Q6AlWgMns217XmAlWgMns21vQpgJRqDZ3NVPqd+e5USjcGzuXY8C7ASjcGzuXZuB1iJxuDZXDVPA6xEY/BsrrqnAFaiMXg2V8M2gJVoDJ7N1VQOsBKNwbO5WssAVqIxeDbX3q0AK9EYeKY9ITrP1/sr6e6mcnq/sZxuNVXQzcYKGuaa1bhc9oUAVqIx7CulW+3FSOTr5jI60aI+DfOlYatxuXSVAqxEY+gsocP82vYkZbVtpVn1OmNd285ILctqXg4HigFWojH0FuCuuDjc0RGiyQ51HNpDGJBbcXzNNb7HPVKOjVeKAFaiUXSFqKZTfTr3l9LfXSWU31qANWxXCIVc43vcI+2xcXgLwEo0BvUJWNNdQje6S4D/l25wryxbOq8XAqxEYzhYROGDfDyL6NqBYjqtXn9VtZviL1K7xj3cK8uWTl8BwEo0gteKKfXVIM0cCtLsoYLFv+j4HvdwL6+R8tLozwdYiUbQU0hjPUGgJ0gfSGlRuMfqVWuktDQG8wBWou/0Bqn0iDqSRwroT3W275fyonAP9/IaXitlfd7ZDLASfaevgK68aR1LGjmZiTulvCjcw72y5oqU9TmWC7ASfSccoL8GAoBlHk0PBOjdt/Oooi9ACfy/AcvXXAvn0XG7x+7ntfI2+hzPAViJvhM9koOb6ee569v5n155G32GswFWou8MqU8jy9dHc+iJo7n0RrQ2lEuztnbme9zjXLckTj4OsBJ959gmdSSVEi2cNZ0ebT7MAliJvvOeOo6sRAtnTadHm48yAVai75xQx5GVaOGs6fRoc3YjwEr0nVPqOLISLZw1nR5tPt0AsBJ9Z6Ej6azp9Ggz8ijASvSdM48BrEQLZ02nR5vP1gHsufXIk5KvLHQknTWdHm1GHwFMUMZZ8Eg6azo92oytBdgv1tJv0Ws/lHEWPJLOmk6PNl8/DLASfSd6JCVaOGs6PdpcSqfpSw8B42lmfAc4jwTjrOn0aDORSuGJNMBvZZy5Ixmr8jb6nMtA/Hcp1H85hSKXUwG/lHHiLqrjuBzlbVYufBxZidrEus44xtPV95FSojaxrjMO55HQJdZ1xvF9Mk3/kKL+mCT9XyXu5TVqbURKK5cfkyn8UzIQk0n0lrzNyuW6+lWaTKL+q0kUuZoE6EkRXnM9A/H/AAwwkV3uPDniAAAAAElFTkSuQmCC";
}

function getExternalLinkIcon() {
    return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAS3SURBVHhe7ZrfalxVFMb7El4YaFVsm7TBmMSqSZPSamI6TmZMWtM/Mab5UxKSxgtB1LRQobQXYrEFwQtBUBCLFiTFioFWJxfRJ+g8wUyeoOQmXqzPs5K1tubMWZycOWdmEjg/+Dh839p77bWHZDItsy8lJSUlJSUlZbfw3BXKHligtQMLQGRdofX9C1TYP095abf3eH6Oyi/MA/FFN6Xl3uLgHMASG4nmBWry9i6+OEcbW30oJ6W9Q8sswBJbFd7+xc0+M1SQaO/QOgOwxFZF8zQ1bfWhpxLtHV6+DLDEVk1SfRztkzTUMUUrndO03jkNVC9a67hMGWlbQecUlYP3WQrup3Wx8Tg2SbdenQQS0wSVpHUFXi3D9cB9lgL6aU1s9XRNUr57AuieoI2uCfr4uPf7JaWq2OqV3I+m1S+xc3rHaaX3EtAzjkWJYsG9WGJjY/VL7JyTY7R+6n3gxBg9K1EsuBdLbGysfomd0zcGsMTGpl79EjtnYBRgiXX0j1J2YJTWtB5Fb41WvmkFrdsu76yLle/2WhfrsPLIZC8CLLGO7AUqay2aqDQ4SqeljSN4rV+VL5zWxDqsPDL58wBLrMPKkyQzQs/kzlFRz4oyh5VH5sw5gCXWYeVJMeJdfti7PJ+hzyhzWHlkRt4FWGIdVp4EfPmRs1TcPIOf7CPOYeWRuXAWYIl1WHlc+LLnz1CRe/OTPedR57DyyIwNAyyxDiuPA192bJiKW73/uzxjnffeEJW1Vin7I/eOuTQEsMQ6rLxaprzLjg9RkXvyk72UNrHOm8hTZvwdKmldxZnXp+KvTWSm8wBLrMPKlclByk7naU3XhWkqR//IsziV2X55RteJrR+zOYAl1mHlymyOyrpmp5rxXoSgyzO6Rmz9mM8CLLEOK1fC6n6irq8bH7wNsMQ6rFwJq/uJur5ufHgaYIl1WLnir19fpb8/WwW2i/6Scmi/hvHRAMAS67ByxV+/uwIEScqh/RrGp/0AS6zDyhV//fvHQJCkHNpvsZ+yn/TTmq5TcbbYZ/8fY2yu9QEssQ4rV/z1X5eBIEl5B/2orGv8uvpmAh94LK6/AbDEOqxc8ddXHwJBknLkfkrYvtjcOAWwxDqsXPHXnyzRanEJ+L84k3LkfkrYvtjcOgmwxDqsXAmr+6m2X9i+2Hx+AmCJdVi5Elb3U22/sH2xud0LsMQ6rFy53UNlXbNTfdFjv5npGrEOK0+MO8cBlliHlStfdlHmTjeVdF2ovLV3u+1/vek6sQ4rT4yvugGWWIeV14qGzfH16wBLrMPKa0XD5vjmNYAl1mHltaJhc3x7DGCJdVh5rWjYHN+9ArDEOqy8VjRsjh86AJZYh5XXiobNca8dYIl13GunstbqpR/bKz8naE1s8txvA1hiHT+3UeZ+G5W0XntR6ae2ys8JWhebPL+8BLDE7jpqPt/SUVp/0Ood0pLMFySS5EEzNfFsS601/DrcwyNU+O0o4CmRr8gkiTfbNZ6NZ5QoeX5vpvzyEWC5hTY8XX3kvepSahg8A8+yOdPWbINSqg2PDtPNx83A7hTdkDFry8pByhUOUeHPQ/S0cBhopHgGT394ysp4KSkpKSkpKSkR2bfvX+DrKgAFG3v7AAAAAElFTkSuQmCC";
}


////////////////////////////////////////
//////   Alignment and styling
////////////////////////////////////////

function setH1HeadingStyle(doc) {
    doc.setFontSize(pdf.h1FontSize);
    doc.setTextColor(39, 39, 39);
    return doc;
}

function setH2HeadingStyle(doc) {
    doc.setFontSize(pdf.h2FontSize);
    doc.setFontType('bold');
    doc.setTextColor(39, 39, 39);
    return doc;
}

function setH3HeadingStyle(doc) {
    doc.setFontSize(pdf.h3FontSize);
    doc.setFontType('normal');
    doc.setTextColor(142, 45, 226);
    return doc;
}

function setH4HeadingStyle(doc) {
    doc.setFontSize(pdf.h4FontSize);
    doc.setFontType('bold');
    doc.setTextColor(142, 45, 226);
    return doc;
}

function setH5HeadingStyle(doc) {
    doc.setFontSize(pdf.h5FontSize);
    doc.setFontType('normal');
    doc.setTextColor(39, 39, 39);
    return doc;
}

function setBodyStyle(doc) {
    doc.setFontSize(pdf.bodyFontSize);
    doc.setFontType('normal');
    doc.setTextColor(100);
    return doc;
}

function addNewBodyLine(doc, type) {
    if (isPageAlmostOver(doc, pdf.yAxisValue)) {
        doc.addPage('p', 'pt');
        pdf.yAxisValue = 50;
    } else {
        if (type === lineHeightType.BODY) {
            pdf.addNewBodyLine();
        }
        if (type === lineHeightType.HALFLINE) {
            pdf.addNewHalfLine();
        }
        if (type === lineHeightType.HEADING) {
            pdf.addNewHeadingLine();
        }
        if (type === lineHeightType.SUBHEADING) {
            pdf.addNewSubHeadingLine();
        }
    }
    return doc;
}


////////////////////////////////////////
//////   Drawing an object
////////////////////////////////////////

function drawLine(doc, length) {
    var line = {
        x: pdf.xAxisValue,
        y: pdf.yAxisValue + 7,
        length: length
    };
    doc.setDrawColor(100);
    doc.line(line.x, line.y, line.length, line.y);
    return doc;
}



////////////////////////////////////////
//////   Decision making
////////////////////////////////////////

function getEnabledDisabledIcon(status) {
    return status ? getEnabledStatusIcon() : getDisabledStatusIcon();
}

function getFileName() {
    var today = new Date();
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let _getDate = () => {
        if (today.getDate() < 10) { return `0${today.getDate()}`; }
        else { return today.getDate();}
    }
    var dateForFileName = `${today.getFullYear()}${monthNames[today.getMonth()]}${_getDate()}${today.getMilliseconds()}`;
    return `CICD-Docs-${dateForFileName}`;
}

function isPageAlmostOver(doc, currentYAxisValue) {
    var pageHeight = doc.internal.pageSize.height || doc.internal.pageSize.getHeight();
    return currentYAxisValue >= (pageHeight - 100);
}


////////////////////////////////////////
//////   Footer
////////////////////////////////////////

function addPageFooter(doc) {
    var totalPages = doc.internal.getNumberOfPages();
    for (var pageCounter = 1; pageCounter <= totalPages; pageCounter++) {
        doc.setPage(pageCounter);
        doc.setFontSize(7);
        var pageHeight = doc.internal.pageSize.height || doc.internal.pageSize.getHeight();
        var footerText = `Generated using ${appName} [${appUrl}] on ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()} | Version ${appVersionNumber}`;
        doc.text(pdf.xAxisValue, pageHeight - 15, `Page ${pageCounter} of ${totalPages} | ${footerText}`);
    }
    return doc;
}

//////////////////////////////////
/////////    Process
//////////////////////////////////


function processJson() {
    var combinedJson = {
        buildDef: getBuildJson(buildJsonData),
        releaseDef: getReleaseJson(releaseJsonData)
    }
    return combinedJson;
}
////////////////////////////////////////
//////   Build headlines
////////////////////////////////////////

function printDocumentHeader(doc) {
    doc = setH1HeadingStyle(doc);
    var siteLogo = getBase64Image(document.getElementById("printSiteLogo"), null, null);
    doc.addImage(siteLogo, 'JPEG', pdf.xAxisValue, pdf.yAxisValue - 15, 35, 35);
    doc.text(pdf.xAxisValue + 45, pdf.yAxisValue + 12, appName);
    return doc;
}

function printBuildPipelineHeading(doc) {
    doc = setH2HeadingStyle(doc);
    doc = addNewBodyLine(doc, lineHeightType.HEADING);
    doc.text(pdf.xAxisValue, pdf.yAxisValue, 'BUILD PIPELINE');
    doc = drawLine(doc, lineObjectLength.FULL);
    return doc;
}

function printBuildNameHeading(doc, _buildJson) {
    doc = setH3HeadingStyle(doc);
    doc = addNewBodyLine(doc, lineHeightType.SUBHEADING);
    doc.text(pdf.xAxisValue, pdf.yAxisValue, `Build name: ${_buildJson.name}`);
    return doc;
}

function printProcessHeading(doc) {
    doc = setH3HeadingStyle(doc);
    doc = addNewBodyLine(doc, lineHeightType.SUBHEADING);
    doc.text(pdf.xAxisValue, pdf.yAxisValue, 'Process');
    return doc;
}

function printVariablesHeading(doc) {
    doc = setH3HeadingStyle(doc);
    doc = addNewBodyLine(doc, lineHeightType.SUBHEADING);
    doc.text(pdf.xAxisValue, pdf.yAxisValue, 'Variables');
    return doc;
}

function printRetentionRulesHeading(doc) {
    doc = setH3HeadingStyle(doc);
    doc = addNewBodyLine(doc, lineHeightType.SUBHEADING);
    doc.text(pdf.xAxisValue, pdf.yAxisValue, 'Retention rules');
    return doc;
}

function printMetaInformationHeading(doc) {
    doc = setH3HeadingStyle(doc);
    doc = addNewBodyLine(doc, lineHeightType.SUBHEADING);
    doc.text(pdf.xAxisValue, pdf.yAxisValue, 'Meta information');
    return doc;
}


////////////////////////////////////////
////    Build pipeline contents
///////////////////////////////////////


function printRepositoryAndProject(doc, _buildJson) {
    doc = setBodyStyle(doc);

    var repositoryIcon = getBase64Image(document.getElementById("repositoryIcon"), pdf.iconSize, pdf.iconSize);
    var platformVstsIcon = getBase64Image(document.getElementById("platformVstsIcon"), pdf.iconSize, pdf.iconSize);

    // Repo
    doc = addNewBodyLine(doc, lineHeightType.BODY);
    doc.addImage(repositoryIcon, 'JPEG', pdf.xAxisValue, pdf.yAxisValue, pdf.printImageIconSize, pdf.printImageIconSize);
    doc.textWithLink(_buildJson.repository.name, pdf.xAxisValue + 20, pdf.yAxisValue + 10, { url: _buildJson.repository.url });
    // Project
    doc = addNewBodyLine(doc, lineHeightType.BODY);
    doc.addImage(platformVstsIcon, 'JPEG', pdf.xAxisValue, pdf.yAxisValue + 5, pdf.printImageIconSize, pdf.printImageIconSize);
    doc.textWithLink(_buildJson.project.name, pdf.xAxisValue + 20, pdf.yAxisValue + 15, { url: _buildJson.project.url });
    doc = addNewBodyLine(doc, lineHeightType.BODY);

    return doc;
}

function printAuthorDetails(doc, _buildJson) {
    doc = setBodyStyle(doc);
    var createdOn = new Date(_buildJson.creationDate);

    // Author
    doc = addNewBodyLine(doc, lineHeightType.BODY);
    doc.addImage(getUserIcon(), 'JPEG', pdf.xAxisValue, pdf.yAxisValue - 11, pdf.printIconSize, pdf.printIconSize);
    doc.text(pdf.xAxisValue + pdf.printIconSize + 5, pdf.yAxisValue, `Created by ${_buildJson.author.displayName} on ${createdOn.toLocaleString()}.`);
    doc = addNewBodyLine(doc, lineHeightType.BODY);
    doc.addImage(getEmailIcon(), 'JPEG', pdf.xAxisValue, pdf.yAxisValue - 11, pdf.printIconSize, pdf.printIconSize);
    doc.text(pdf.xAxisValue + pdf.printIconSize + 5, pdf.yAxisValue, `Email: ${_buildJson.author.email}`);

    return doc;
}


function printBuildMetaInformation(doc, _buildJson) {
    doc = setBodyStyle(doc);
    
    doc = addNewBodyLine(doc, lineHeightType.BODY);   
    doc.addImage(getNameFormatIcon(), 'JPEG', pdf.xAxisValue, pdf.yAxisValue - 11, pdf.printIconSize, pdf.printIconSize);
    doc.text(pdf.xAxisValue + pdf.printIconSize + 5, pdf.yAxisValue, `Build number format: ${_buildJson.metaInformation.buildNumberFormat}`);
    doc = addNewBodyLine(doc, lineHeightType.BODY);
    doc.addImage(getRevisionVersionNumberIcon(), 'JPEG', pdf.xAxisValue, pdf.yAxisValue - 11, pdf.printIconSize, pdf.printIconSize);
    doc.text(pdf.xAxisValue + pdf.printIconSize + 5, pdf.yAxisValue, `Version: ${_buildJson.metaInformation.version}`);

    return doc;
}


function printQueueDetails(doc, _buildJson) {
    doc = setBodyStyle(doc);
    var agentIcon = getBase64Image(document.getElementById("queueAgentIcon"), pdf.iconSize, pdf.iconSize);
    doc = addNewBodyLine(doc, lineHeightType.HALFLINE);
    doc.addImage(agentIcon, 'JPEG', pdf.xAxisValue, pdf.yAxisValue, pdf.printImageIconSize, pdf.printImageIconSize);
    doc.text(pdf.xAxisValue + 20, pdf.yAxisValue + 10, `${_buildJson.queue.displayName} agent`);
    doc = addNewBodyLine(doc, lineHeightType.BODY);
    doc = addNewBodyLine(doc, lineHeightType.HALFLINE);
    doc.addImage(getHostedIcon(), 'JPEG', pdf.xAxisValue, pdf.yAxisValue - 11, pdf.printIconSize, pdf.printIconSize);
    let hostedDisplayText = _buildJson.queue.isHosted ? "Is hosted" : "Is not hosted";
    doc.text(pdf.xAxisValue + pdf.printIconSize + 5, pdf.yAxisValue, `${hostedDisplayText}`);
    return doc;
}

function printPhasesAndSteps(doc, _buildJson) {
    var _phases = _buildJson.process;

    if (_phases.length === 0) {
        doc = addNewBodyLine(doc, lineHeightType.BODY);
        doc.text(pdf.xAxisValue, pdf.yAxisValue, `No phases found.`);
        return doc;
    }

    for (phaseIndex = 0; phaseIndex < _phases.length; phaseIndex++) {
        var currentPhase = _phases[phaseIndex];

        // Phase
        doc = addNewBodyLine(doc, lineHeightType.HALFLINE);
        doc = addNewBodyLine(doc, lineHeightType.BODY);
        // Triangle co-ords
        var triangle = {
            x1: pdf.xAxisValue,
            x2: pdf.xAxisValue,
            x3: pdf.xAxisValue + 3,
            y1: pdf.yAxisValue,
            y2: pdf.yAxisValue + 6,
            y3: pdf.yAxisValue + 3,
            fill: 'FD'
        };

        doc.setFillColor(0);
        doc.triangle(triangle.x1, triangle.y1, triangle.x2, triangle.y2, triangle.x3, triangle.y3, triangle.fill);
        doc = setH5HeadingStyle(doc);
        doc.text(triangle.x3 + 7, triangle.y3 + (triangle.y2 - triangle.y3), currentPhase.name);
        pdf.yAxisValue = triangle.y2;

        doc = printPhaseMetaInformation(doc, currentPhase);

        if (currentPhase.steps.length === 0) {
            doc = addNewBodyLine(doc, lineHeightType.BODY);
            doc.text(pdf.xAxisValue, pdf.yAxisValue, `No tasks found in this phase.`);
            return doc;
        }

        // Steps
        // Construct a table containing all steps in each phase
        var columns = [
            { title: "Task Icon", dataKey: "icon" },
            { title: "Name", dataKey: "name" },
            { title: "Version", dataKey: "version" },
            { title: "Enabled", dataKey: "enabled" }
        ];
        var rows = [];

        // Loop thru all the steps/tasks in each phase
        for (stepsIndex = 0; stepsIndex < currentPhase.steps.length; stepsIndex++) {
            var currentStep = currentPhase.steps[stepsIndex];
            var _stepsArray = {};
            _stepsArray["name"] = currentStep.name;
            _stepsArray["version"] = currentStep.version;
            rows.push(_stepsArray);
        }

        // Insert all steps into the table and display
        var images = []; var printImages = []; var enabledStatusIconImages = [];
        var taskIconIndex = 0; var enabledIconIndex = 0;
        doc = addNewBodyLine(doc, lineHeightType.BODY);
        doc.autoTable(columns, rows,
            {
                theme: 'striped',
                styles: { overflow: 'linebreak' },
                headerStyles: { fillColor: [142, 45, 226] },
                margin: { left: pdf.xAxisValue },
                startY: pdf.yAxisValue,
                showHeader: 'everyPage',
                drawCell: function (cell, opts) {
                    // Column 1 or index 0 (starts from 0) is 'task icon'
                    if (opts.column.index === 0) {
                        //TODO: add extra checks: currentPhase.steps[i] != undefined
                        var _stepIcon = getBase64Image(document.getElementById(`stepIcon-${currentPhase.steps[taskIconIndex].id}`), 32, 32);
                        images.push({
                            url: _stepIcon,
                            x: cell.textPos.x,
                            y: cell.textPos.y,
                            id: currentPhase.steps[taskIconIndex].id
                        });
                        taskIconIndex++;
                    }

                    // Column 4 or index 3 (starts from 0) is 'enabled'
                    if (opts.column.index === 3) {
                        var _enabledIcon = getEnabledDisabledIcon(currentPhase.steps[enabledIconIndex].enabled);
                        enabledStatusIconImages.push({
                            url: _enabledIcon,
                            x: cell.textPos.x,
                            y: cell.textPos.y
                        });
                        enabledIconIndex++;
                    }
                },
                addPageContent: function () {
                    for (var i = 0; i < images.length; i++) {
                        var imageNotAlreadyPrinted = true;
                        // Check if current image is already printed
                        for (var printImagesIndex = 0; printImagesIndex < printImages.length; printImagesIndex++) {
                            if (images[i].id === printImages[printImagesIndex].id) {
                                imageNotAlreadyPrinted = false;
                                break;
                            }
                        }
                        if (imageNotAlreadyPrinted) {
                            // If its not printed, push it to the printed images store
                            printImages.push({
                                id: images[i].id
                            });

                            doc.addImage(images[i].url, images[i].x, images[i].y, pdf.printIconSize, pdf.printIconSize);
                            doc.addImage(enabledStatusIconImages[i].url, enabledStatusIconImages[i].x, enabledStatusIconImages[i].y, pdf.printIconSize, pdf.printIconSize);
                        }
                    }
                }
            });
        pdf.yAxisValue = doc.autoTable.previous.finalY;
    }
    return doc;
}


function printPhaseMetaInformation(doc, phase) {
    doc = setBodyStyle(doc);
    doc = addNewBodyLine(doc, lineHeightType.BODY);
    pdf.yAxisValue = pdf.yAxisValue + 10;
    let getParallelismValue = () => {
        switch (phase.executionType) {
            case 0:
                return "None";
            case 1:
                return " Multi-config";
            case 2:
                return "Multi-agent";
            default:
                return "None";
        }
    };
    let getAgentType = () => {
        switch (phase.phaseType) {
            case 1:
                return "Runs on agent";
            case 2:
                return "Runs on server";
            default:
                return "Runs on agent";
        }
    };
    let getAgentTypeIcon = () => {
        switch (phase.phaseType) {
            case 1:
                return getServerOffIcon();
            case 2:
                return getServerIcon();
            default:
                return getServerOffIcon();
        }
    };

    // Agent execution
    doc.addImage(getParallelismIcon(), 'JPEG', pdf.xAxisValue, pdf.yAxisValue-11, pdf.printIconSize, pdf.printIconSize);
    doc.text(pdf.xAxisValue + (pdf.printIconSize + 7), pdf.yAxisValue, `Parallelism: ${getParallelismValue()}`);
    // Agent type
    doc.addImage(getAgentTypeIcon(), 'JPEG', pdf.xAxisValue+150, pdf.yAxisValue-11, pdf.printIconSize, pdf.printIconSize);
    doc.text(pdf.xAxisValue +170, pdf.yAxisValue, `${getAgentType()}`);
    return doc;
}

function printVariables(doc, _buildJson) {
    doc = setBodyStyle(doc);

    if (_buildJson.variables.length === 0) {
        doc = addNewBodyLine(doc, lineHeightType.BODY);
        doc.text(pdf.xAxisValue, pdf.yAxisValue, `No variables to display.`);
        return doc;
    }

    var columns = [
        { title: "Variable Name", dataKey: "key" },
        { title: "Variable Value", dataKey: "value" }
    ];
    var rows = [];

    // Loop thru all the variables and fill the rows of this table
    for (variableIndex = 0; variableIndex < _buildJson.variables.length; variableIndex++) {
        var _variableArray = {};
        _variableArray["key"] = _buildJson.variables[variableIndex].key;
        _variableArray["value"] = _buildJson.variables[variableIndex].value;
        rows.push(_variableArray);
    }

    // Insert all the rows and columns into the table
    doc = addNewBodyLine(doc, lineHeightType.HALFLINE);
    doc.autoTable(columns, rows,
        {
            theme: 'striped',
            headerStyles: { fillColor: [142, 45, 226] },
            margin: { left: pdf.xAxisValue },
            startY: pdf.yAxisValue,
            showHeader: 'everyPage'
        });
    pdf.yAxisValue = doc.autoTable.previous.finalY;
    return doc;
}


function printTriggers(doc, _buildJson) {
    doc = setBodyStyle(doc);

    let triggersExist = _buildJson.triggers != null;
    let getContinousIntegrationIcon = () => {
        return _buildJson.triggers.continousIntegration  ? getContinuousIntegrationEnabledIcon() : getContinuousIntegrationDisabledIcon();
    };
    let getContinousIntegrationStatus = () => {
        return _buildJson.triggers.continousIntegration ? 'enabled' : 'disabled';
    };  
    let getBatchChangesIcon = () => {
        return _buildJson.triggers.batchChanges ? getBatchChangesEnabledIcon() : getBatchChangesDisabledIcon();
    }; 
    let getBatchChangesStatus = () => {
        return _buildJson.triggers.batchChanges ? 'enabled' : 'disabled';
    };   

    // Triggers
    doc = addNewBodyLine(doc, lineHeightType.BODY);
    // CI
    doc.addImage(getContinousIntegrationIcon(), 'JPEG', pdf.xAxisValue, pdf.yAxisValue - 11, pdf.printIconSize, pdf.printIconSize);
    doc.text(pdf.xAxisValue + (pdf.printIconSize + 7), pdf.yAxisValue, `Continuous integration ${getContinousIntegrationStatus()}`);
    // Batch
    doc.addImage(getBatchChangesIcon(), 'JPEG', pdf.xAxisValue + (pdf.printIconSize + 160), pdf.yAxisValue - 11, pdf.printIconSize, pdf.printIconSize);
    doc.text(pdf.xAxisValue + (pdf.printIconSize + 180), pdf.yAxisValue, `Batch changes ${getBatchChangesStatus()}`);
    
    return doc;
}


function printRetentionRules(doc, _buildJson) {
    doc = setBodyStyle(doc);

    if (_buildJson.retention.length === 0) {
        doc = addNewBodyLine(doc, lineHeightType.BODY);
        doc.text(pdf.xAxisValue, pdf.yAxisValue, `No retention rules to display.`);
        return doc;
    }

    var columns = [
        { title: "Days to keep", dataKey: "key" },
        { title: "Minimum to keep", dataKey: "value" }
    ];
    var rows = [];

    // Loop thru all the retention and fill the rows of this table
    for (var retentionIndex = 0; retentionIndex < _buildJson.retention.length; retentionIndex++) {
        var _retentionArray = {};
        _retentionArray["key"] = _buildJson.retention[retentionIndex].daysToKeep;
        _retentionArray["value"] = _buildJson.retention[retentionIndex].minimumToKeep;
        rows.push(_retentionArray);
    }

    // Insert all the rows and columns into the table
    doc = addNewBodyLine(doc, lineHeightType.BODY);
    doc.autoTable(columns, rows,
        {
            theme: 'striped',
            headerStyles: { fillColor: [142, 45, 226] },
            margin: { left: pdf.xAxisValue },
            startY: pdf.yAxisValue,
            showHeader: 'everyPage'
        });
    pdf.yAxisValue = doc.autoTable.previous.finalY;
    return doc;
}




////////////////////////////////////////
//////   Release headlines
////////////////////////////////////////

function printReleasePipelineHeading(doc) {
    doc = setH2HeadingStyle(doc);
    doc = addNewBodyLine(doc, lineHeightType.SUBHEADING);
    doc = addNewBodyLine(doc, lineHeightType.SUBHEADING);
    doc.text(pdf.xAxisValue, pdf.yAxisValue, 'RELEASE PIPELINE');
    doc = drawLine(doc, lineObjectLength.FULL);
    return doc;
}

function printReleaseNameHeading(doc, _releaseJson) {
    doc = setH3HeadingStyle(doc);
    doc = addNewBodyLine(doc, lineHeightType.SUBHEADING);
    doc.text(pdf.xAxisValue, pdf.yAxisValue, `Release name: ${_releaseJson.name}`);
    return doc;
}

function printTriggersHeading(doc) {
    doc = setH3HeadingStyle(doc);
    doc = addNewBodyLine(doc, lineHeightType.SUBHEADING);
    doc.text(pdf.xAxisValue, pdf.yAxisValue, 'Triggers');
    return doc;
}

function printArtifactsHeading(doc) {
    doc = setH3HeadingStyle(doc);
    doc = addNewBodyLine(doc, lineHeightType.SUBHEADING);
    doc.text(pdf.xAxisValue, pdf.yAxisValue, 'Artifacts');
    return doc;
}


function printEnvironmentHeading(doc) {
    doc = setH3HeadingStyle(doc);
    doc = addNewBodyLine(doc, lineHeightType.SUBHEADING);
    doc.text(pdf.xAxisValue, pdf.yAxisValue, 'Environments');
    return doc;
}


////////////////////////////////////////
////    Release pipeline contents
///////////////////////////////////////


function printReleaseDescription(doc, _releaseJson) {
    if (!_releaseJson.doesReleaseDefinitionDescriptionExist) {
        return doc;
    }

    doc = setBodyStyle(doc);
    doc = addNewBodyLine(doc, lineHeightType.BODY);
    doc.text(pdf.xAxisValue, pdf.yAxisValue, `${_releaseJson.description}`);
    return doc;
}

function printReleaseTriggers(doc, _releaseJson) {
    doc = setBodyStyle(doc);

    if (!_releaseJson.isTriggerSetupForReleaseDefinition) {
        doc = addNewBodyLine(doc, lineHeightType.BODY);
        doc.text(pdf.xAxisValue, pdf.yAxisValue, "No continuous deployments setup for this release pipeline");
        return doc;
    }


    for (let triggerIndex = 0; triggerIndex < _releaseJson.triggers.length; triggerIndex++) {
        let currentTrigger = _releaseJson.triggers[triggerIndex];
        doc = addNewBodyLine(doc, lineHeightType.BODY);
        let triggerTypeIcon = () => {
            if (currentTrigger.isTriggerTypeContinuousDeployment) {
                return getContinuousIntegrationEnabledIcon();
            }
            if (currentTrigger.isTriggerTypePullRequest) {
                return getPullRequestIcon();
            }
        };
        let triggerTypeDisplayName = () => {
            if (currentTrigger.isTriggerTypeContinuousDeployment) {
                return "Continuous deployment";
            }
            if (currentTrigger.isTriggerTypePullRequest) {
                return "Pull request";
            }
        };
        //doc = addNewBodyLine(doc, lineHeightType.BODY);
        doc.addImage(triggerTypeIcon(), 'JPEG', pdf.xAxisValue, pdf.yAxisValue - 11, pdf.printIconSize, pdf.printIconSize);
        doc.text(pdf.xAxisValue + (pdf.printIconSize + 5), pdf.yAxisValue, `Trigger type: ${triggerTypeDisplayName()}`);
        doc = addNewBodyLine(doc, lineHeightType.BODY);
        doc.addImage(getArtifactIcon(), 'JPEG', pdf.xAxisValue, pdf.yAxisValue - 11, pdf.printIconSize, pdf.printIconSize);
        doc.text(pdf.xAxisValue + (pdf.printIconSize + 5), pdf.yAxisValue, `Artifact name: ${currentTrigger.artifactAlias}`);

        for (let conditionIndex = 0; conditionIndex < currentTrigger.triggerConditions.length; conditionIndex++) {
            let currentCondition = currentTrigger.triggerConditions[conditionIndex];
            doc = addNewBodyLine(doc, lineHeightType.BODY);
            doc.addImage(getCodeIcon(), 'JPEG', pdf.xAxisValue, pdf.yAxisValue - 11, pdf.printIconSize, pdf.printIconSize);
            doc.text(pdf.xAxisValue + pdf.printIconSize + 5, pdf.yAxisValue, `Source branch: ${currentCondition.sourceBranch}`);
            doc = addNewBodyLine(doc, lineHeightType.BODY);
            doc.addImage(getSourceIcon(), 'JPEG', pdf.xAxisValue, pdf.yAxisValue - 11, pdf.printIconSize, pdf.printIconSize);
            doc.text(pdf.xAxisValue + pdf.printIconSize + 5, pdf.yAxisValue, `Use build definition: ${currentCondition.useBuildDefinitionBranch}`);
        }
    }

    return doc;
}



function printReleaseAuthorDetails(doc, _releaseJson) {
    doc = setBodyStyle(doc);
    var createdOn = new Date(_releaseJson.creationInformation.createdOn);
    var modifiedOn = new Date(_releaseJson.modificationInformation.modifiedOn);

    // Created on
    doc = addNewBodyLine(doc, lineHeightType.BODY);
    doc.addImage(getUserIcon(), 'JPEG', pdf.xAxisValue, pdf.yAxisValue - 11, pdf.printIconSize, pdf.printIconSize);
    doc.text(pdf.xAxisValue + pdf.printIconSize + 5, pdf.yAxisValue, `Created by ${_releaseJson.creationInformation.createdBy} on ${createdOn.toLocaleString()}.`);
    doc = addNewBodyLine(doc, lineHeightType.BODY);
    doc.addImage(getEmailIcon(), 'JPEG', pdf.xAxisValue, pdf.yAxisValue - 11, pdf.printIconSize, pdf.printIconSize);
    doc.text(pdf.xAxisValue + pdf.printIconSize + 5, pdf.yAxisValue, `Email: ${_releaseJson.creationInformation.createdByEmail}`);

    // Modified on
    doc = addNewBodyLine(doc, lineHeightType.BODY);
    doc.addImage(getUserIcon(), 'JPEG', pdf.xAxisValue, pdf.yAxisValue - 11, pdf.printIconSize, pdf.printIconSize);
    doc.text(pdf.xAxisValue + pdf.printIconSize + 5, pdf.yAxisValue, `Last modified by ${_releaseJson.modificationInformation.modifiedBy} on ${modifiedOn.toLocaleString()}.`);
    doc = addNewBodyLine(doc, lineHeightType.BODY);
    doc.addImage(getEmailIcon(), 'JPEG', pdf.xAxisValue, pdf.yAxisValue - 11, pdf.printIconSize, pdf.printIconSize);
    doc.text(pdf.xAxisValue + pdf.printIconSize + 5, pdf.yAxisValue, `Email: ${_releaseJson.modificationInformation.modifiedByEmail}`);
    return doc;
}


function printReleaseMetaInformation(doc, _releaseJson) {
    doc = setBodyStyle(doc);

    doc = addNewBodyLine(doc, lineHeightType.BODY);
    doc.addImage(getNameFormatIcon(), 'JPEG', pdf.xAxisValue, pdf.yAxisValue - 11, pdf.printIconSize, pdf.printIconSize);
    doc.text(pdf.xAxisValue + pdf.printIconSize + 5, pdf.yAxisValue, `Release number format: ${_releaseJson.metaInformation.releaseNameFormat}`);

    doc = addNewBodyLine(doc, lineHeightType.BODY);
    doc.addImage(getRevisionVersionNumberIcon(), 'JPEG', pdf.xAxisValue, pdf.yAxisValue - 11, pdf.printIconSize, pdf.printIconSize);
    doc.text(pdf.xAxisValue + pdf.printIconSize + 5, pdf.yAxisValue, `Version: ${_releaseJson.metaInformation.version}`);

    return doc;
}



function printReleaseVariables(doc, _releaseJson) {
    doc = setBodyStyle(doc);

    if (!_releaseJson.doVariablesExists) {
        doc = addNewBodyLine(doc, lineHeightType.HALFLINE);
        doc.text(pdf.xAxisValue, pdf.yAxisValue, `No variables found for this release pipeline.`);
        return doc;
    }

    var columns = [
        { title: "Name", dataKey: "key" },
        { title: "Value", dataKey: "value" },
        { title: "Scope", dataKey: "scope" }
    ];
    var rows = [];

    // Loop thru all the variables and fill the rows of this table
    for (variableIndex = 0; variableIndex < _releaseJson.variables.length; variableIndex++) {
        var _variableArray = {};
        _variableArray["key"] = _releaseJson.variables[variableIndex].key;
        _variableArray["value"] = _releaseJson.variables[variableIndex].value;
        _variableArray["scope"] = _releaseJson.variables[variableIndex].scope;
        rows.push(_variableArray);
    }

    // Insert all the rows and columns into the table
    doc = addNewBodyLine(doc, lineHeightType.HALFLINE);
    doc.autoTable(columns, rows,
        {
            theme: 'striped',
            headerStyles: { fillColor: [142, 45, 226] },
            margin: { left: pdf.xAxisValue },
            startY: pdf.yAxisValue,
            showHeader: 'everyPage'
        });
    pdf.yAxisValue = doc.autoTable.previous.finalY;
    return doc;
}

function printReleaseArtifacts(doc, _releaseJson) {
    doc = setBodyStyle(doc);
    
    if (!_releaseJson.doeReleaseDefinitionHaveArtifacts) {
        doc = addNewBodyLine(doc, lineHeightType.BODY);
        doc.text(pdf.xAxisValue, pdf.yAxisValue, `No artifacts found.`);
        return doc;
    }

    for (let artifactsIndex = 0; artifactsIndex < _releaseJson.artifacts.length; artifactsIndex++) {
        let currentArtifact = _releaseJson.artifacts[artifactsIndex];
        doc = addNewBodyLine(doc, lineHeightType.BODY);
        doc.addImage(getArtifactBuildIcon(), 'JPEG', pdf.xAxisValue, pdf.yAxisValue - 11, pdf.printIconSize, pdf.printIconSize);
        doc.text(pdf.xAxisValue + pdf.printIconSize + 5, pdf.yAxisValue, `Artifact type: Build`);

        doc = addNewBodyLine(doc, lineHeightType.BODY);
        doc.addImage(getArtifactIcon(), 'JPEG', pdf.xAxisValue, pdf.yAxisValue - 11, pdf.printIconSize, pdf.printIconSize);
        doc.text(pdf.xAxisValue + pdf.printIconSize + 5, pdf.yAxisValue, `Artifact alias: ${currentArtifact.artifactAlias}`);

        doc = addNewBodyLine(doc, lineHeightType.BODY);
        doc.addImage(getProjectIcon(), 'JPEG', pdf.xAxisValue, pdf.yAxisValue - 11, pdf.printIconSize, pdf.printIconSize);
        doc.text(pdf.xAxisValue + pdf.printIconSize + 5, pdf.yAxisValue, `Project: ${currentArtifact.project}`);

        doc = addNewBodyLine(doc, lineHeightType.BODY);
        doc.addImage(getVersionIcon(), 'JPEG', pdf.xAxisValue, pdf.yAxisValue - 11, pdf.printIconSize, pdf.printIconSize);
        doc.text(pdf.xAxisValue + pdf.printIconSize + 5, pdf.yAxisValue, `Version: ${currentArtifact.defaultVersion}`);

        doc = addNewBodyLine(doc, lineHeightType.BODY);
        doc.addImage(getSourceIcon(), 'JPEG', pdf.xAxisValue, pdf.yAxisValue - 11, pdf.printIconSize, pdf.printIconSize);
        doc.text(pdf.xAxisValue + pdf.printIconSize + 5, pdf.yAxisValue, `Source: ${currentArtifact.source}`);
    }

    return doc;
}


function printReleaseDefinitionEnvironments(doc, _releaseJson) {
    doc = setBodyStyle(doc);

    if (_releaseJson.environments.length===0) {
        doc = addNewBodyLine(doc, lineHeightType.BODY);
        doc.text(pdf.xAxisValue, pdf.yAxisValue, `No release definitions found.`);
        return doc;
    }

    for (let environmentIndex = 0; environmentIndex < _releaseJson.environments.length; environmentIndex++) {
        let currentEnv = _releaseJson.environments[environmentIndex];

        doc = addNewBodyLine(doc, lineHeightType.SUBHEADING);        
        doc = setH4HeadingStyle(doc);
        doc.text(pdf.xAxisValue, pdf.yAxisValue, `#${environmentIndex+1} ${currentEnv.name.toString().toUpperCase()}`);
        doc = drawLine(doc, lineObjectLength.QUATER);


        doc = setBodyStyle(doc);
        doc = addNewBodyLine(doc, lineHeightType.BODY);
        doc = addNewBodyLine(doc, lineHeightType.HALFLINE);
        let getOwnerIcon = () => {
            if (currentEnv.isOwnerHuman) {
                return getUserIcon();
            }
            return getUserGroupIcon();
        };
        doc.addImage(getOwnerIcon(), 'JPEG', pdf.xAxisValue, pdf.yAxisValue - 11, pdf.printIconSize, pdf.printIconSize);
        doc.text(pdf.xAxisValue + pdf.printIconSize + 5, pdf.yAxisValue, `Owner: ${currentEnv.ownerName}`);

        doc = addNewBodyLine(doc, lineHeightType.BODY);
        doc.addImage(getNotificationIcon(), 'JPEG', pdf.xAxisValue, pdf.yAxisValue - 11, pdf.printIconSize, pdf.printIconSize);
        doc.text(pdf.xAxisValue + pdf.printIconSize + 5, pdf.yAxisValue, `Notification recipients: ${currentEnv.emailRecipients}`);

        doc = printReleaseDefinitionEnvironmentConditions(doc, currentEnv);
        doc = printPreDeploymentApprovalsForReleaseDefinition(doc, currentEnv);
        doc = printReleaseDefinitonTasksAndPhases(doc, currentEnv);        
        doc = printPostDeploymentApprovalsForReleaseDefinition(doc, currentEnv);
    }

    return doc;
}

function printReleaseDefinitonTasksAndPhases(doc, environment) {
    doc = setH5HeadingStyle(doc);
    doc = addNewBodyLine(doc, lineHeightType.SUBHEADING);
    doc.text(pdf.xAxisValue, pdf.yAxisValue, `Phases`);

    if (environment.deploymentPhases.length === 0) {
        doc = addNewBodyLine(doc, lineHeightType.BODY);
        doc.text(pdf.xAxisValue, pdf.yAxisValue, `No deployment phases found.`);
        return doc;
    }

    doc = setBodyStyle(doc);
    doc = addNewBodyLine(doc, lineHeightType.BODY);

    for (let deploymentPhasesIndex = 0; deploymentPhasesIndex < environment.deploymentPhases.length; deploymentPhasesIndex++) {
        let currentPhase = environment.deploymentPhases[deploymentPhasesIndex];

        // Triangle co-ords
        var triangle = {
            x1: pdf.xAxisValue,
            x2: pdf.xAxisValue,
            x3: pdf.xAxisValue + 3,
            y1: pdf.yAxisValue,
            y2: pdf.yAxisValue + 6,
            y3: pdf.yAxisValue + 3,
            fill: 'FD'
        };
        doc.setFillColor(0);
        doc.triangle(triangle.x1, triangle.y1, triangle.x2, triangle.y2, triangle.x3, triangle.y3, triangle.fill);
        doc = setH5HeadingStyle(doc);
        doc = addNewBodyLine(doc, lineHeightType.SUBHEADING);
        doc.text(triangle.x3 + 7, triangle.y3 + (triangle.y2 - triangle.y3), `Phase ${deploymentPhasesIndex+1}: ${currentPhase.name}`);
        pdf.yAxisValue = triangle.y2;

        doc = setBodyStyle(doc);
        doc = addNewBodyLine(doc, lineHeightType.BODY);
        doc = addNewBodyLine(doc, lineHeightType.HALFLINE);
        let getPhaseIcon = () => {
            if (currentPhase.isPhaseAgentful) {
                return getServerOffIcon();
            }
            if (currentPhase.isPhaseAgentless) {
                return getServerIcon();
            }
            if (currentPhase.isDeploymentGroup) {
                return getDeploymentGroupIcon();
            }
        };
        let getPhaseDisplayName = () => {
            if (currentPhase.isPhaseAgentful) {
                return "Runs on agent";
            }
            if (currentPhase.isPhaseAgentless) {
                return "Runs on server";
            }
            if (currentPhase.isDeploymentGroup) {
                return "Deployment group phase";
            }
        };
        doc.addImage(getPhaseIcon(), 'JPEG', pdf.xAxisValue, pdf.yAxisValue - 11, pdf.printIconSize, pdf.printIconSize);
        doc.text(pdf.xAxisValue + pdf.printIconSize + 5, pdf.yAxisValue, `${getPhaseDisplayName()}`);

        doc = printTasksForEachPhaseInReleaseDefinition(doc, currentPhase);
    }

    return doc;
}

function printTasksForEachPhaseInReleaseDefinition(doc, phase) {
    doc = setBodyStyle(doc);

    if (phase.steps.length === 0) {
        doc = addNewBodyLine(doc, lineHeightType.BODY);
        doc.text(pdf.xAxisValue, pdf.yAxisValue, `No steps found.`);
        return doc;
    }

    // Steps
    // Construct a table containing all steps in each phase
    var columns = [
        { title: "Task Icon", dataKey: "icon" },
        { title: "Name", dataKey: "name" },
        { title: "Version", dataKey: "version" },
        { title: "Enabled", dataKey: "enabled" }
    ];
    var rows = [];

    // Loop thru all the steps/tasks in each phase
    for (stepsIndex = 0; stepsIndex < phase.steps.length; stepsIndex++) {
        var currentStep = phase.steps[stepsIndex];
        var _stepsArray = {};
        _stepsArray["name"] = currentStep.name;
        _stepsArray["version"] = currentStep.version;
        rows.push(_stepsArray);
    }

    // Insert all steps into the table and display
    var images = []; var printImages = []; var enabledStatusIconImages = [];
    var taskIconIndex = 0; var enabledIconIndex = 0;
    doc = addNewBodyLine(doc, lineHeightType.BODY);
    doc.autoTable(columns, rows,
        {
            theme: 'striped',
            styles: { overflow: 'linebreak' },
            headerStyles: { fillColor: [142, 45, 226] },
            margin: { left: pdf.xAxisValue },
            startY: pdf.yAxisValue,
            showHeader: 'everyPage',
            drawCell: function (cell, opts) {
                // Column 1 or index 0 (starts from 0) is 'task icon'
                if (opts.column.index === 0) {
                    //TODO: add extra checks: currentPhase.steps[i] != undefined
                    var _stepIcon = getBase64Image(document.getElementById(`stepIcon-${phase.steps[taskIconIndex].id}`), 32, 32);
                    images.push({
                        url: _stepIcon,
                        x: cell.textPos.x,
                        y: cell.textPos.y,
                        id: phase.steps[taskIconIndex].id
                    });
                    taskIconIndex++;
                }

                // Column 4 or index 3 (starts from 0) is 'enabled'
                if (opts.column.index === 3) {
                    var _enabledIcon = getEnabledDisabledIcon(phase.steps[enabledIconIndex].enabled);
                    enabledStatusIconImages.push({
                        url: _enabledIcon,
                        x: cell.textPos.x,
                        y: cell.textPos.y
                    });
                    enabledIconIndex++;
                }
            },
            addPageContent: function () {
                for (var i = 0; i < images.length; i++) {
                    var imageNotAlreadyPrinted = true;
                    // Check if current image is already printed
                    for (var printImagesIndex = 0; printImagesIndex < printImages.length; printImagesIndex++) {
                        if (images[i].id === printImages[printImagesIndex].id) {
                            imageNotAlreadyPrinted = false;
                            break;
                        }
                    }
                    if (imageNotAlreadyPrinted) {
                        // If its not printed, push it to the printed images store
                        printImages.push({
                            id: images[i].id
                        });

                        doc.addImage(images[i].url, images[i].x, images[i].y, pdf.printIconSize, pdf.printIconSize);
                        doc.addImage(enabledStatusIconImages[i].url, enabledStatusIconImages[i].x, enabledStatusIconImages[i].y, pdf.printIconSize, pdf.printIconSize);
                    }
                }
            }
        });

    pdf.yAxisValue = doc.autoTable.previous.finalY;

    return doc;
}

function printReleaseDefinitionEnvironmentConditions(doc, environment) {
    doc = setH5HeadingStyle(doc);
    doc = addNewBodyLine(doc, lineHeightType.SUBHEADING);
    doc.text(pdf.xAxisValue, pdf.yAxisValue, `Environment triggers`);

    doc = setBodyStyle(doc);
    doc = addNewBodyLine(doc, lineHeightType.BODY);
    let getEnvConditionIcon = () => {
        if (environment.conditions.isConditionTypeIsAfterRelease) {
            return getAfterReleaseIcon();
        }
        if (environment.conditions.isConditionTypeIsAfterEnvironment) {
            return getAfterEnvironmentIcon();
        }
        if (environment.conditions.isConditionTypeManual) {
            return getManualIcon();
        }
    };
    doc.addImage(getEnvConditionIcon(), 'JPEG', pdf.xAxisValue, pdf.yAxisValue - 11, pdf.printIconSize, pdf.printIconSize);
    doc.text(pdf.xAxisValue + pdf.printIconSize + 5, pdf.yAxisValue, `${environment.conditions.displayName}`);

    // If after environment, then return back as this is the only information that is printed.
    // If not, then continue as there is more info required to be printed.
    if (!environment.conditions.isConditionTypeIsAfterEnvironment) {
        return doc;
    }

    let environments = "";
    for (let envIndex = 0; envIndex < environment.conditions.environments.length; envIndex++) {
        let selectedEnvironment = environment.conditions.environments[envIndex];
        let isLastOption = envIndex + 1 === environment.conditions.environments.length;
        environments += isLastOption ? selectedEnvironment : selectedEnvironment + ", ";
    }
    doc = addNewBodyLine(doc, lineHeightType.BODY);
    doc.text(pdf.xAxisValue, pdf.yAxisValue, `Environments selected: ${environments}`);
    return doc;
}

function printPreDeploymentApprovalsForReleaseDefinition(doc, environment) {
    doc = setH5HeadingStyle(doc);
    doc = addNewBodyLine(doc, lineHeightType.SUBHEADING);
    doc.text(pdf.xAxisValue, pdf.yAxisValue, `Pre deployment approvals`);

    doc = setBodyStyle(doc);

    if (environment.preDeployApprovals.length === 0) {
        doc = addNewBodyLine(doc, lineHeightType.BODY);
        doc.text(pdf.xAxisValue, pdf.yAxisValue, `No pre-deployment approvals found.`);
        return doc;
    }

    for (let depIndex = 0; depIndex < environment.preDeployApprovals.length; depIndex++) {
        let currentApproval = environment.preDeployApprovals[depIndex];
        let approvalType = currentApproval.isAutomated ? "Automatic approval" : "Manual approval";
        let getApprovalIcon = () => {
            return currentApproval.isAutomated ? getContinuousIntegrationEnabledIcon() : getManualIcon();
        };

        doc = addNewBodyLine(doc, lineHeightType.BODY);
        doc.addImage(getApprovalIcon(), 'JPEG', pdf.xAxisValue, pdf.yAxisValue - 11, pdf.printIconSize, pdf.printIconSize);
        doc.text(pdf.xAxisValue + pdf.printIconSize + 5, pdf.yAxisValue, `${approvalType}`);

        if (currentApproval.isAutomated) {
            continue;
        }

        doc = addNewBodyLine(doc, lineHeightType.BODY);
        doc.text(pdf.xAxisValue, pdf.yAxisValue, `Requires approval by: ${currentApproval.displayName}`);
    }

    return doc;
}

function printPostDeploymentApprovalsForReleaseDefinition(doc, environment) {
    doc = setH5HeadingStyle(doc);
    doc = addNewBodyLine(doc, lineHeightType.SUBHEADING);
    doc.text(pdf.xAxisValue, pdf.yAxisValue, `Post deployment approvals`);

    doc = setBodyStyle(doc);

    if (environment.postDeployApprovals.length === 0) {
        doc = addNewBodyLine(doc, lineHeightType.BODY);
        doc.text(pdf.xAxisValue, pdf.yAxisValue, `No post-deployment approvals found.`);
        return doc;
    }

    for (let depIndex = 0; depIndex < environment.postDeployApprovals.length; depIndex++) {
        let currentApproval = environment.postDeployApprovals[depIndex];
        let approvalType = currentApproval.isAutomated ? "Automatic approval" : "Manual approval";
        let getApprovalIcon = () => {
            return currentApproval.isAutomated ? getContinuousIntegrationEnabledIcon() : getManualIcon();
        };
        doc = addNewBodyLine(doc, lineHeightType.BODY);
        doc.addImage(getApprovalIcon(), 'JPEG', pdf.xAxisValue, pdf.yAxisValue - 11, pdf.printIconSize, pdf.printIconSize);
        doc.text(pdf.xAxisValue + pdf.printIconSize + 5, pdf.yAxisValue, `${approvalType}`);

        if (currentApproval.isAutomated) {
            continue;
        }

        doc = addNewBodyLine(doc, lineHeightType.BODY);
        doc.text(pdf.xAxisValue, pdf.yAxisValue, `Requires approval by: ${currentApproval.displayName}`);
    }

    return doc;
}
// As mentioned on: https://css-tricks.com/slide-in-as-you-scroll-down-boxes/

(function ($) {

    /**
     * Copyright 2012, Digital Fusion
     * Licensed under the MIT license.
     * http://teamdf.com/jquery-plugins/license/
     *
     * @author Sam Sehnert
     * @desc A small plugin that checks whether elements are within
     *     the user visible viewport of a web browser.
     *     only accounts for vertical position, not horizontal.
     */

    $.fn.visible = function (partial) {

        var $t = $(this),
            $w = $(window),
            viewTop = $w.scrollTop(),
            viewBottom = viewTop + $w.height(),
            _top = $t.offset().top,
            _bottom = _top + $t.height(),
            compareTop = partial === true ? _bottom : _top,
            compareBottom = partial === true ? _top : _bottom;

        return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

    };

})(jQuery);

$(".card").each(function (i, el) {
    // Already visible cards
    var el = $(el);
    if (el.visible(true)) {
        el.addClass("already-visible");
    }
});

function animateCards() {
    $(".card").each(function (i, el) {
        var el = $(el);
        if (el.visible(true)) {
            el.addClass("come-in");
        }
    });
}

$(window).scroll(function (event) {

    $(".card").each(function (i, el) {
        var el = $(el);
        if (el.visible(true)) {
            el.addClass("come-in");
        }
    });

});
$(document).ready(function () {
    var buildJsonUrl = getUrlVars()[buildJsonUrlQueryStringKey];
    console.log(buildJsonUrl);
    if (buildJsonUrl === "" || buildJsonUrl === undefined) {
        console.log("no qs");
        footerView();
        importTestData();
        //TODO: uncomment this
        //uploadScreenView();
       
    }
    else {
        console.log("foud qs");
    }
    
});

var jsonObj;