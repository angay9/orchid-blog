/*! jQuery v1.12.4 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="1.12.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(n.isPlainObject(c)||(b=n.isArray(c)))?(b?(b=!1,f=a&&n.isArray(a)?a:[]):f=a&&n.isPlainObject(a)?a:{},g[d]=n.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray||function(a){return"array"===n.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;try{if(a.constructor&&!k.call(a,"constructor")&&!k.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(!l.ownFirst)for(b in a)return k.call(a,b);for(b in a);return void 0===b||k.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(b){b&&n.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(h)return h.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++)e=b(a[g],g,c),null!=e&&h.push(e);else for(g in a)e=b(a[g],g,c),null!=e&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;return"string"==typeof b&&(f=a[b],b=a,a=f),n.isFunction(a)?(c=e.call(arguments,2),d=function(){return a.apply(b||this,c.concat(e.call(arguments)))},d.guid=a.guid=a.guid||n.guid++,d):void 0},now:function(){return+new Date},support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+qa(r[h]);s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function ga(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ja(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function la(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ia(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=function(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(b,n,null,[a]).length>0},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return function(b){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:na(function(){return[0]}),last:na(function(a,b){return[b-1]}),eq:na(function(a,b,c){return[0>c?c+b:c]}),even:na(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=R.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))}m.push(c)}return sa(m)}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ha(f):f}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(e,d)),f.selector=a}return f},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ia(function(a){return null==a.getAttribute("disabled")})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fa}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return n.inArray(a,b)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;e>b;b++)if(n.contains(d[b],this))return!0}));for(b=0;e>b;b++)n.find(a,d[b],c);return c=this.pushStack(e>1?n.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(e="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}if(f=d.getElementById(e[2]),f&&f.parentNode){if(f.id!==e[2])return A.find(a);this.length=1,this[0]=f}return this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};C.prototype=n.fn,A=n(d);var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b,c=n(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(n.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?n.inArray(this[0],n(a)):n.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function F(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return F(a,"nextSibling")},prev:function(a){return F(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return n.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||(e=n.uniqueSort(e)),D.test(a)&&(e=e.reverse())),this.pushStack(e)}});var G=/\S+/g;function H(a){var b={};return n.each(a.match(G)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=!0,c||j.disable(),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function J(){d.addEventListener?(d.removeEventListener("DOMContentLoaded",K),a.removeEventListener("load",K)):(d.detachEvent("onreadystatechange",K),a.detachEvent("onload",K))}function K(){(d.addEventListener||"load"===a.event.type||"complete"===d.readyState)&&(J(),n.ready())}n.ready.promise=function(b){if(!I)if(I=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll)a.setTimeout(n.ready);else if(d.addEventListener)d.addEventListener("DOMContentLoaded",K),a.addEventListener("load",K);else{d.attachEvent("onreadystatechange",K),a.attachEvent("onload",K);var c=!1;try{c=null==a.frameElement&&d.documentElement}catch(e){}c&&c.doScroll&&!function f(){if(!n.isReady){try{c.doScroll("left")}catch(b){return a.setTimeout(f,50)}J(),n.ready()}}()}return I.promise(b)},n.ready.promise();var L;for(L in n(l))break;l.ownFirst="0"===L,l.inlineBlockNeedsLayout=!1,n(function(){var a,b,c,e;c=d.getElementsByTagName("body")[0],c&&c.style&&(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",l.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(e))}),function(){var a=d.createElement("div");l.deleteExpando=!0;try{delete a.test}catch(b){l.deleteExpando=!1}a=null}();var M=function(a){var b=n.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b},N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(O,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}n.data(a,b,c)}else c=void 0;
}return c}function Q(a){var b;for(b in a)if(("data"!==b||!n.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function R(a,b,d,e){if(M(a)){var f,g,h=n.expando,i=a.nodeType,j=i?n.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||n.guid++:h),j[k]||(j[k]=i?{}:{toJSON:n.noop}),"object"!=typeof b&&"function"!=typeof b||(e?j[k]=n.extend(j[k],b):j[k].data=n.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[n.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[n.camelCase(b)])):f=g,f}}function S(a,b,c){if(M(a)){var d,e,f=a.nodeType,g=f?n.cache:a,h=f?a[n.expando]:n.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){n.isArray(b)?b=b.concat(n.map(b,n.camelCase)):b in d?b=[b]:(b=n.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!Q(d):!n.isEmptyObject(d))return}(c||(delete g[h].data,Q(g[h])))&&(f?n.cleanData([a],!0):l.deleteExpando||g!=g.window?delete g[h]:g[h]=void 0)}}}n.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?n.cache[a[n.expando]]:a[n.expando],!!a&&!Q(a)},data:function(a,b,c){return R(a,b,c)},removeData:function(a,b){return S(a,b)},_data:function(a,b,c){return R(a,b,c,!0)},_removeData:function(a,b){return S(a,b,!0)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=n.data(f),1===f.nodeType&&!n._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));n._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){n.data(this,a)}):arguments.length>1?this.each(function(){n.data(this,a,b)}):f?P(f,a,n.data(f,a)):void 0},removeData:function(a){return this.each(function(){n.removeData(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=n._data(a,b),c&&(!d||n.isArray(c)?d=n._data(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return n._data(a,c)||n._data(a,c,{empty:n.Callbacks("once memory").add(function(){n._removeData(a,b+"queue"),n._removeData(a,c)})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=n._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}}),function(){var a;l.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,e;return c=d.getElementsByTagName("body")[0],c&&c.style?(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(d.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(e),a):void 0}}();var T=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,U=new RegExp("^(?:([+-])=|)("+T+")([a-z%]*)$","i"),V=["Top","Right","Bottom","Left"],W=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function X(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&U.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var Y=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)Y(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},Z=/^(?:checkbox|radio)$/i,$=/<([\w:-]+)/,_=/^$|\/(?:java|ecma)script/i,aa=/^\s+/,ba="abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";function ca(a){var b=ba.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}!function(){var a=d.createElement("div"),b=d.createDocumentFragment(),c=d.createElement("input");a.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",l.leadingWhitespace=3===a.firstChild.nodeType,l.tbody=!a.getElementsByTagName("tbody").length,l.htmlSerialize=!!a.getElementsByTagName("link").length,l.html5Clone="<:nav></:nav>"!==d.createElement("nav").cloneNode(!0).outerHTML,c.type="checkbox",c.checked=!0,b.appendChild(c),l.appendChecked=c.checked,a.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!a.cloneNode(!0).lastChild.defaultValue,b.appendChild(a),c=d.createElement("input"),c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),a.appendChild(c),l.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,l.noCloneEvent=!!a.addEventListener,a[n.expando]=1,l.attributes=!a.getAttribute(n.expando)}();var da={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:l.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]};da.optgroup=da.option,da.tbody=da.tfoot=da.colgroup=da.caption=da.thead,da.th=da.td;function ea(a,b){var c,d,e=0,f="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||n.nodeName(d,b)?f.push(d):n.merge(f,ea(d,b));return void 0===b||b&&n.nodeName(a,b)?n.merge([a],f):f}function fa(a,b){for(var c,d=0;null!=(c=a[d]);d++)n._data(c,"globalEval",!b||n._data(b[d],"globalEval"))}var ga=/<|&#?\w+;/,ha=/<tbody/i;function ia(a){Z.test(a.type)&&(a.defaultChecked=a.checked)}function ja(a,b,c,d,e){for(var f,g,h,i,j,k,m,o=a.length,p=ca(b),q=[],r=0;o>r;r++)if(g=a[r],g||0===g)if("object"===n.type(g))n.merge(q,g.nodeType?[g]:g);else if(ga.test(g)){i=i||p.appendChild(b.createElement("div")),j=($.exec(g)||["",""])[1].toLowerCase(),m=da[j]||da._default,i.innerHTML=m[1]+n.htmlPrefilter(g)+m[2],f=m[0];while(f--)i=i.lastChild;if(!l.leadingWhitespace&&aa.test(g)&&q.push(b.createTextNode(aa.exec(g)[0])),!l.tbody){g="table"!==j||ha.test(g)?"<table>"!==m[1]||ha.test(g)?0:i:i.firstChild,f=g&&g.childNodes.length;while(f--)n.nodeName(k=g.childNodes[f],"tbody")&&!k.childNodes.length&&g.removeChild(k)}n.merge(q,i.childNodes),i.textContent="";while(i.firstChild)i.removeChild(i.firstChild);i=p.lastChild}else q.push(b.createTextNode(g));i&&p.removeChild(i),l.appendChecked||n.grep(ea(q,"input"),ia),r=0;while(g=q[r++])if(d&&n.inArray(g,d)>-1)e&&e.push(g);else if(h=n.contains(g.ownerDocument,g),i=ea(p.appendChild(g),"script"),h&&fa(i),c){f=0;while(g=i[f++])_.test(g.type||"")&&c.push(g)}return i=null,p}!function(){var b,c,e=d.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(l[b]=c in a)||(e.setAttribute(c,"t"),l[b]=e.attributes[c].expando===!1);e=null}();var ka=/^(?:input|select|textarea)$/i,la=/^key/,ma=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,na=/^(?:focusinfocus|focusoutblur)$/,oa=/^([^.]*)(?:\.(.+)|)/;function pa(){return!0}function qa(){return!1}function ra(){try{return d.activeElement}catch(a){}}function sa(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)sa(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=qa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=n.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return"undefined"==typeof n||a&&n.event.triggered===a.type?void 0:n.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(G)||[""],h=b.length;while(h--)f=oa.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=n.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=n.event.special[o]||{},l=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},i),(m=g[o])||(m=g[o]=[],m.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,l):m.push(l),n.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n.hasData(a)&&n._data(a);if(r&&(k=r.events)){b=(b||"").match(G)||[""],j=b.length;while(j--)if(h=oa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=m.length;while(f--)g=m[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(m.splice(f,1),g.selector&&m.delegateCount--,l.remove&&l.remove.call(a,g));i&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(k)&&(delete r.handle,n._removeData(a,"events"))}},trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(i=m=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!na.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),h=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),l=n.event.special[q]||{},f||!l.trigger||l.trigger.apply(e,c)!==!1)){if(!f&&!l.noBubble&&!n.isWindow(e)){for(j=l.delegateType||q,na.test(j+q)||(i=i.parentNode);i;i=i.parentNode)p.push(i),m=i;m===(e.ownerDocument||d)&&p.push(m.defaultView||m.parentWindow||a)}o=0;while((i=p[o++])&&!b.isPropagationStopped())b.type=o>1?j:l.bindType||q,g=(n._data(i,"events")||{})[b.type]&&n._data(i,"handle"),g&&g.apply(i,c),g=h&&i[h],g&&g.apply&&M(i)&&(b.result=g.apply(i,c),b.result===!1&&b.preventDefault());if(b.type=q,!f&&!b.isDefaultPrevented()&&(!l._default||l._default.apply(p.pop(),c)===!1)&&M(e)&&h&&e[q]&&!n.isWindow(e)){m=e[h],m&&(e[h]=null),n.event.triggered=q;try{e[q]()}catch(s){}n.event.triggered=void 0,m&&(e[h]=m)}return b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(n._data(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())a.rnamespace&&!a.rnamespace.test(g.namespace)||(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ma.test(f)?this.mouseHooks:la.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=g.srcElement||d),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,h.filter?h.filter(a,g):a},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button,h=b.fromElement;return null==a.pageX&&null!=b.clientX&&(e=a.target.ownerDocument||d,f=e.documentElement,c=e.body,a.pageX=b.clientX+(f&&f.scrollLeft||c&&c.scrollLeft||0)-(f&&f.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(f&&f.scrollTop||c&&c.scrollTop||0)-(f&&f.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&h&&(a.relatedTarget=h===a.target?b.toElement:h),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==ra()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===ra()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return n.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b),d.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=d.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)}:function(a,b,c){var d="on"+b;a.detachEvent&&("undefined"==typeof a[d]&&(a[d]=null),a.detachEvent(d,c))},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?pa:qa):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={constructor:n.Event,isDefaultPrevented:qa,isPropagationStopped:qa,isImmediatePropagationStopped:qa,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=pa,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=pa,a&&!this.isSimulated&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=pa,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||n.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),l.submit||(n.event.special.submit={setup:function(){return n.nodeName(this,"form")?!1:void n.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=n.nodeName(b,"input")||n.nodeName(b,"button")?n.prop(b,"form"):void 0;c&&!n._data(c,"submit")&&(n.event.add(c,"submit._submit",function(a){a._submitBubble=!0}),n._data(c,"submit",!0))})},postDispatch:function(a){a._submitBubble&&(delete a._submitBubble,this.parentNode&&!a.isTrigger&&n.event.simulate("submit",this.parentNode,a))},teardown:function(){return n.nodeName(this,"form")?!1:void n.event.remove(this,"._submit")}}),l.change||(n.event.special.change={setup:function(){return ka.test(this.nodeName)?("checkbox"!==this.type&&"radio"!==this.type||(n.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._justChanged=!0)}),n.event.add(this,"click._change",function(a){this._justChanged&&!a.isTrigger&&(this._justChanged=!1),n.event.simulate("change",this,a)})),!1):void n.event.add(this,"beforeactivate._change",function(a){var b=a.target;ka.test(b.nodeName)&&!n._data(b,"change")&&(n.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||n.event.simulate("change",this.parentNode,a)}),n._data(b,"change",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return n.event.remove(this,"._change"),!ka.test(this.nodeName)}}),l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=n._data(d,b);e||d.addEventListener(a,c,!0),n._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=n._data(d,b)-1;e?n._data(d,b,e):(d.removeEventListener(a,c,!0),n._removeData(d,b))}}}),n.fn.extend({on:function(a,b,c,d){return sa(this,a,b,c,d)},one:function(a,b,c,d){return sa(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=qa),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ta=/ jQuery\d+="(?:null|\d+)"/g,ua=new RegExp("<(?:"+ba+")[\\s/>]","i"),va=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,wa=/<script|<style|<link/i,xa=/checked\s*(?:[^=]|=\s*.checked.)/i,ya=/^true\/(.*)/,za=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Aa=ca(d),Ba=Aa.appendChild(d.createElement("div"));function Ca(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function Da(a){return a.type=(null!==n.find.attr(a,"type"))+"/"+a.type,a}function Ea(a){var b=ya.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Fa(a,b){if(1===b.nodeType&&n.hasData(a)){var c,d,e,f=n._data(a),g=n._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)n.event.add(b,c,h[c][d])}g.data&&(g.data=n.extend({},g.data))}}function Ga(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!l.noCloneEvent&&b[n.expando]){e=n._data(b);for(d in e.events)n.removeEvent(b,d,e.handle);b.removeAttribute(n.expando)}"script"===c&&b.text!==a.text?(Da(b).text=a.text,Ea(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),l.html5Clone&&a.innerHTML&&!n.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&Z.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}}function Ha(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&xa.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),Ha(f,b,c,d)});if(o&&(k=ja(b,a[0].ownerDocument,!1,a,d),e=k.firstChild,1===k.childNodes.length&&(k=e),e||d)){for(i=n.map(ea(k,"script"),Da),h=i.length;o>m;m++)g=k,m!==p&&(g=n.clone(g,!0,!0),h&&n.merge(i,ea(g,"script"))),c.call(a[m],g,m);if(h)for(j=i[i.length-1].ownerDocument,n.map(i,Ea),m=0;h>m;m++)g=i[m],_.test(g.type||"")&&!n._data(g,"globalEval")&&n.contains(j,g)&&(g.src?n._evalUrl&&n._evalUrl(g.src):n.globalEval((g.text||g.textContent||g.innerHTML||"").replace(za,"")));k=e=null}return a}function Ia(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(ea(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&fa(ea(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(va,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h,i=n.contains(a.ownerDocument,a);if(l.html5Clone||n.isXMLDoc(a)||!ua.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(Ba.innerHTML=a.outerHTML,Ba.removeChild(f=Ba.firstChild)),!(l.noCloneEvent&&l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(d=ea(f),h=ea(a),g=0;null!=(e=h[g]);++g)d[g]&&Ga(e,d[g]);if(b)if(c)for(h=h||ea(a),d=d||ea(f),g=0;null!=(e=h[g]);g++)Fa(e,d[g]);else Fa(a,f);return d=ea(f,"script"),d.length>0&&fa(d,!i&&ea(a,"script")),d=h=e=null,f},cleanData:function(a,b){for(var d,e,f,g,h=0,i=n.expando,j=n.cache,k=l.attributes,m=n.event.special;null!=(d=a[h]);h++)if((b||M(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)m[e]?n.event.remove(d,e):n.removeEvent(d,e,g.handle);j[f]&&(delete j[f],k||"undefined"==typeof d.removeAttribute?d[i]=void 0:d.removeAttribute(i),c.push(f))}}}),n.fn.extend({domManip:Ha,detach:function(a){return Ia(this,a,!0)},remove:function(a){return Ia(this,a)},text:function(a){return Y(this,function(a){return void 0===a?n.text(this):this.empty().append((this[0]&&this[0].ownerDocument||d).createTextNode(a))},null,a,arguments.length)},append:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.appendChild(a)}})},prepend:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&n.cleanData(ea(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&n.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return Y(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(ta,""):void 0;if("string"==typeof a&&!wa.test(a)&&(l.htmlSerialize||!ua.test(a))&&(l.leadingWhitespace||!aa.test(a))&&!da[($.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ea(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ha(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(ea(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=0,e=[],f=n(a),h=f.length-1;h>=d;d++)c=d===h?this:this.clone(!0),n(f[d])[b](c),g.apply(e,c.get());return this.pushStack(e)}});var Ja,Ka={HTML:"block",BODY:"block"};function La(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function Ma(a){var b=d,c=Ka[a];return c||(c=La(a,b),"none"!==c&&c||(Ja=(Ja||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Ja[0].contentWindow||Ja[0].contentDocument).document,b.write(),b.close(),c=La(a,b),Ja.detach()),Ka[a]=c),c}var Na=/^margin/,Oa=new RegExp("^("+T+")(?!px)[a-z%]+$","i"),Pa=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Qa=d.documentElement;!function(){var b,c,e,f,g,h,i=d.createElement("div"),j=d.createElement("div");if(j.style){j.style.cssText="float:left;opacity:.5",l.opacity="0.5"===j.style.opacity,l.cssFloat=!!j.style.cssFloat,j.style.backgroundClip="content-box",j.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===j.style.backgroundClip,i=d.createElement("div"),i.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",j.innerHTML="",i.appendChild(j),l.boxSizing=""===j.style.boxSizing||""===j.style.MozBoxSizing||""===j.style.WebkitBoxSizing,n.extend(l,{reliableHiddenOffsets:function(){return null==b&&k(),f},boxSizingReliable:function(){return null==b&&k(),e},pixelMarginRight:function(){return null==b&&k(),c},pixelPosition:function(){return null==b&&k(),b},reliableMarginRight:function(){return null==b&&k(),g},reliableMarginLeft:function(){return null==b&&k(),h}});function k(){var k,l,m=d.documentElement;m.appendChild(i),j.style.cssText="-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",b=e=h=!1,c=g=!0,a.getComputedStyle&&(l=a.getComputedStyle(j),b="1%"!==(l||{}).top,h="2px"===(l||{}).marginLeft,e="4px"===(l||{width:"4px"}).width,j.style.marginRight="50%",c="4px"===(l||{marginRight:"4px"}).marginRight,k=j.appendChild(d.createElement("div")),k.style.cssText=j.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",k.style.marginRight=k.style.width="0",j.style.width="1px",g=!parseFloat((a.getComputedStyle(k)||{}).marginRight),j.removeChild(k)),j.style.display="none",f=0===j.getClientRects().length,f&&(j.style.display="",j.innerHTML="<table><tr><td></td><td>t</td></tr></table>",j.childNodes[0].style.borderCollapse="separate",k=j.getElementsByTagName("td"),k[0].style.cssText="margin:0;border:0;padding:0;display:none",f=0===k[0].offsetHeight,f&&(k[0].style.display="",k[1].style.display="none",f=0===k[0].offsetHeight)),m.removeChild(i)}}}();var Ra,Sa,Ta=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ra=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)},Sa=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ra(a),g=c?c.getPropertyValue(b)||c[b]:void 0,""!==g&&void 0!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),c&&!l.pixelMarginRight()&&Oa.test(g)&&Na.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f),void 0===g?g:g+""}):Qa.currentStyle&&(Ra=function(a){return a.currentStyle},Sa=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ra(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Oa.test(g)&&!Ta.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Ua(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Va=/alpha\([^)]*\)/i,Wa=/opacity\s*=\s*([^)]*)/i,Xa=/^(none|table(?!-c[ea]).+)/,Ya=new RegExp("^("+T+")(.*)$","i"),Za={position:"absolute",visibility:"hidden",display:"block"},$a={letterSpacing:"0",fontWeight:"400"},_a=["Webkit","O","Moz","ms"],ab=d.createElement("div").style;function bb(a){if(a in ab)return a;var b=a.charAt(0).toUpperCase()+a.slice(1),c=_a.length;while(c--)if(a=_a[c]+b,a in ab)return a}function cb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=n._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&W(d)&&(f[g]=n._data(d,"olddisplay",Ma(d.nodeName)))):(e=W(d),(c&&"none"!==c||!e)&&n._data(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function db(a,b,c){var d=Ya.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function eb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+V[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+V[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+V[f]+"Width",!0,e))):(g+=n.css(a,"padding"+V[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+V[f]+"Width",!0,e)));return g}function fb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ra(a),g=l.boxSizing&&"border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Sa(a,b,f),(0>e||null==e)&&(e=a.style[b]),Oa.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+eb(a,b,c||(g?"border":"content"),d,f)+"px"}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Sa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":l.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;if(b=n.cssProps[h]||(n.cssProps[h]=bb(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=U.exec(c))&&e[1]&&(c=X(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=bb(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Sa(a,b,d)),"normal"===f&&b in $a&&(f=$a[b]),""===c||c?(e=parseFloat(f),c===!0||isFinite(e)?e||0:f):f}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Xa.test(n.css(a,"display"))&&0===a.offsetWidth?Pa(a,Za,function(){return fb(a,b,d)}):fb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ra(a);return db(a,c,d?eb(a,b,d,l.boxSizing&&"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),l.opacity||(n.cssHooks.opacity={get:function(a,b){return Wa.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=n.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===n.trim(f.replace(Va,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Va.test(f)?f.replace(Va,e):f+" "+e)}}),n.cssHooks.marginRight=Ua(l.reliableMarginRight,function(a,b){return b?Pa(a,{display:"inline-block"},Sa,[a,"marginRight"]):void 0}),n.cssHooks.marginLeft=Ua(l.reliableMarginLeft,function(a,b){return b?(parseFloat(Sa(a,"marginLeft"))||(n.contains(a.ownerDocument,a)?a.getBoundingClientRect().left-Pa(a,{
marginLeft:0},function(){return a.getBoundingClientRect().left}):0))+"px":void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+V[d]+b]=f[d]||f[d-2]||f[0];return e}},Na.test(a)||(n.cssHooks[a+b].set=db)}),n.fn.extend({css:function(a,b){return Y(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ra(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return cb(this,!0)},hide:function(){return cb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){W(this)?n(this).show():n(this).hide()})}});function gb(a,b,c,d,e){return new gb.prototype.init(a,b,c,d,e)}n.Tween=gb,gb.prototype={constructor:gb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=gb.propHooks[this.prop];return a&&a.get?a.get(this):gb.propHooks._default.get(this)},run:function(a){var b,c=gb.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):gb.propHooks._default.set(this),this}},gb.prototype.init.prototype=gb.prototype,gb.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},gb.propHooks.scrollTop=gb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=gb.prototype.init,n.fx.step={};var hb,ib,jb=/^(?:toggle|show|hide)$/,kb=/queueHooks$/;function lb(){return a.setTimeout(function(){hb=void 0}),hb=n.now()}function mb(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=V[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function nb(a,b,c){for(var d,e=(qb.tweeners[b]||[]).concat(qb.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ob(a,b,c){var d,e,f,g,h,i,j,k,m=this,o={},p=a.style,q=a.nodeType&&W(a),r=n._data(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,m.always(function(){m.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=n.css(a,"display"),k="none"===j?n._data(a,"olddisplay")||Ma(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(l.inlineBlockNeedsLayout&&"inline"!==Ma(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",l.shrinkWrapBlocks()||m.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],jb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(o))"inline"===("none"===j?Ma(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=n._data(a,"fxshow",{}),f&&(r.hidden=!q),q?n(a).show():m.done(function(){n(a).hide()}),m.done(function(){var b;n._removeData(a,"fxshow");for(b in o)n.style(a,b,o[b])});for(d in o)g=nb(q?r[d]:0,d,m),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function pb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function qb(a,b,c){var d,e,f=0,g=qb.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=hb||lb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:hb||lb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(pb(k,j.opts.specialEasing);g>f;f++)if(d=qb.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,nb,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(qb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return X(c.elem,a,U.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++)c=a[d],qb.tweeners[c]=qb.tweeners[c]||[],qb.tweeners[c].unshift(b)},prefilters:[ob],prefilter:function(a,b){b?qb.prefilters.unshift(a):qb.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(W).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=qb(this,n.extend({},a),f);(e||n._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=n._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&kb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=n._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(mb(b,!0),a,d,e)}}),n.each({slideDown:mb("show"),slideUp:mb("hide"),slideToggle:mb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=n.timers,c=0;for(hb=n.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||n.fx.stop(),hb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){ib||(ib=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(ib),ib=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a,b=d.createElement("input"),c=d.createElement("div"),e=d.createElement("select"),f=e.appendChild(d.createElement("option"));c=d.createElement("div"),c.setAttribute("className","t"),c.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=c.getElementsByTagName("a")[0],b.setAttribute("type","checkbox"),c.appendChild(b),a=c.getElementsByTagName("a")[0],a.style.cssText="top:1px",l.getSetAttribute="t"!==c.className,l.style=/top/.test(a.getAttribute("style")),l.hrefNormalized="/a"===a.getAttribute("href"),l.checkOn=!!b.value,l.optSelected=f.selected,l.enctype=!!d.createElement("form").enctype,e.disabled=!0,l.optDisabled=!f.disabled,b=d.createElement("input"),b.setAttribute("value",""),l.input=""===b.getAttribute("value"),b.value="t",b.setAttribute("type","radio"),l.radioValue="t"===b.value}();var rb=/\r/g,sb=/[\x20\t\r\n\f]+/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a)).replace(sb," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)if(d=e[g],n.inArray(n.valHooks.option.get(d),f)>-1)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var tb,ub,vb=n.expr.attrHandle,wb=/^(?:checked|selected)$/i,xb=l.getSetAttribute,yb=l.input;n.fn.extend({attr:function(a,b){return Y(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?ub:tb)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)?yb&&xb||!wb.test(c)?a[d]=!1:a[n.camelCase("default-"+c)]=a[d]=!1:n.attr(a,c,""),a.removeAttribute(xb?c:d)}}),ub={set:function(a,b,c){return b===!1?n.removeAttr(a,c):yb&&xb||!wb.test(c)?a.setAttribute(!xb&&n.propFix[c]||c,c):a[n.camelCase("default-"+c)]=a[c]=!0,c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=vb[b]||n.find.attr;yb&&xb||!wb.test(b)?vb[b]=function(a,b,d){var e,f;return d||(f=vb[b],vb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,vb[b]=f),e}:vb[b]=function(a,b,c){return c?void 0:a[n.camelCase("default-"+b)]?b.toLowerCase():null}}),yb&&xb||(n.attrHooks.value={set:function(a,b,c){return n.nodeName(a,"input")?void(a.defaultValue=b):tb&&tb.set(a,b,c)}}),xb||(tb={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},vb.id=vb.name=vb.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},n.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:tb.set},n.attrHooks.contenteditable={set:function(a,b,c){tb.set(a,""===b?!1:b,c)}},n.each(["width","height"],function(a,b){n.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),l.style||(n.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var zb=/^(?:input|select|textarea|button|object)$/i,Ab=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return Y(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return a=n.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):zb.test(a.nodeName)||Ab.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),l.hrefNormalized||n.each(["href","src"],function(a,b){n.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this}),l.enctype||(n.propFix.enctype="encoding");var Bb=/[\t\r\n\f]/g;function Cb(a){return n.attr(a,"class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,Cb(this)))});if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=Cb(c),d=1===c.nodeType&&(" "+e+" ").replace(Bb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&n.attr(c,"class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,Cb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=Cb(c),d=1===c.nodeType&&(" "+e+" ").replace(Bb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&n.attr(c,"class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,Cb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=Cb(this),b&&n._data(this,"__className__",b),n.attr(this,"class",b||a===!1?"":n._data(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+Cb(c)+" ").replace(Bb," ").indexOf(b)>-1)return!0;return!1}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var Db=a.location,Eb=n.now(),Fb=/\?/,Gb=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;n.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=n.trim(b+"");return e&&!n.trim(e.replace(Gb,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():n.error("Invalid JSON: "+b)},n.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new a.DOMParser,c=d.parseFromString(b,"text/xml")):(c=new a.ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var Hb=/#.*$/,Ib=/([?&])_=[^&]*/,Jb=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Kb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Lb=/^(?:GET|HEAD)$/,Mb=/^\/\//,Nb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Ob={},Pb={},Qb="*/".concat("*"),Rb=Db.href,Sb=Nb.exec(Rb.toLowerCase())||[];function Tb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(G)||[];if(n.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Ub(a,b,c,d){var e={},f=a===Pb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Vb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&n.extend(!0,a,c),a}function Wb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Xb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Rb,type:"GET",isLocal:Kb.test(Sb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Qb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Vb(Vb(a,n.ajaxSettings),b):Vb(n.ajaxSettings,a)},ajaxPrefilter:Tb(Ob),ajaxTransport:Tb(Pb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var d,e,f,g,h,i,j,k,l=n.ajaxSetup({},c),m=l.context||l,o=l.context&&(m.nodeType||m.jquery)?n(m):n.event,p=n.Deferred(),q=n.Callbacks("once memory"),r=l.statusCode||{},s={},t={},u=0,v="canceled",w={readyState:0,getResponseHeader:function(a){var b;if(2===u){if(!k){k={};while(b=Jb.exec(g))k[b[1].toLowerCase()]=b[2]}b=k[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===u?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return u||(a=t[c]=t[c]||a,s[a]=b),this},overrideMimeType:function(a){return u||(l.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>u)for(b in a)r[b]=[r[b],a[b]];else w.always(a[w.status]);return this},abort:function(a){var b=a||v;return j&&j.abort(b),y(0,b),this}};if(p.promise(w).complete=q.add,w.success=w.done,w.error=w.fail,l.url=((b||l.url||Rb)+"").replace(Hb,"").replace(Mb,Sb[1]+"//"),l.type=c.method||c.type||l.method||l.type,l.dataTypes=n.trim(l.dataType||"*").toLowerCase().match(G)||[""],null==l.crossDomain&&(d=Nb.exec(l.url.toLowerCase()),l.crossDomain=!(!d||d[1]===Sb[1]&&d[2]===Sb[2]&&(d[3]||("http:"===d[1]?"80":"443"))===(Sb[3]||("http:"===Sb[1]?"80":"443")))),l.data&&l.processData&&"string"!=typeof l.data&&(l.data=n.param(l.data,l.traditional)),Ub(Ob,l,c,w),2===u)return w;i=n.event&&l.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),l.type=l.type.toUpperCase(),l.hasContent=!Lb.test(l.type),f=l.url,l.hasContent||(l.data&&(f=l.url+=(Fb.test(f)?"&":"?")+l.data,delete l.data),l.cache===!1&&(l.url=Ib.test(f)?f.replace(Ib,"$1_="+Eb++):f+(Fb.test(f)?"&":"?")+"_="+Eb++)),l.ifModified&&(n.lastModified[f]&&w.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&w.setRequestHeader("If-None-Match",n.etag[f])),(l.data&&l.hasContent&&l.contentType!==!1||c.contentType)&&w.setRequestHeader("Content-Type",l.contentType),w.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+("*"!==l.dataTypes[0]?", "+Qb+"; q=0.01":""):l.accepts["*"]);for(e in l.headers)w.setRequestHeader(e,l.headers[e]);if(l.beforeSend&&(l.beforeSend.call(m,w,l)===!1||2===u))return w.abort();v="abort";for(e in{success:1,error:1,complete:1})w[e](l[e]);if(j=Ub(Pb,l,c,w)){if(w.readyState=1,i&&o.trigger("ajaxSend",[w,l]),2===u)return w;l.async&&l.timeout>0&&(h=a.setTimeout(function(){w.abort("timeout")},l.timeout));try{u=1,j.send(s,y)}catch(x){if(!(2>u))throw x;y(-1,x)}}else y(-1,"No Transport");function y(b,c,d,e){var k,s,t,v,x,y=c;2!==u&&(u=2,h&&a.clearTimeout(h),j=void 0,g=e||"",w.readyState=b>0?4:0,k=b>=200&&300>b||304===b,d&&(v=Wb(l,w,d)),v=Xb(l,v,w,k),k?(l.ifModified&&(x=w.getResponseHeader("Last-Modified"),x&&(n.lastModified[f]=x),x=w.getResponseHeader("etag"),x&&(n.etag[f]=x)),204===b||"HEAD"===l.type?y="nocontent":304===b?y="notmodified":(y=v.state,s=v.data,t=v.error,k=!t)):(t=y,!b&&y||(y="error",0>b&&(b=0))),w.status=b,w.statusText=(c||y)+"",k?p.resolveWith(m,[s,y,w]):p.rejectWith(m,[w,y,t]),w.statusCode(r),r=void 0,i&&o.trigger(k?"ajaxSuccess":"ajaxError",[w,l,k?s:t]),q.fireWith(m,[w,y]),i&&(o.trigger("ajaxComplete",[w,l]),--n.active||n.event.trigger("ajaxStop")))}return w},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){if(n.isFunction(a))return this.each(function(b){n(this).wrapAll(a.call(this,b))});if(this[0]){var b=n(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}});function Yb(a){return a.style&&a.style.display||n.css(a,"display")}function Zb(a){if(!n.contains(a.ownerDocument||d,a))return!0;while(a&&1===a.nodeType){if("none"===Yb(a)||"hidden"===a.type)return!0;a=a.parentNode}return!1}n.expr.filters.hidden=function(a){return l.reliableHiddenOffsets()?a.offsetWidth<=0&&a.offsetHeight<=0&&!a.getClientRects().length:Zb(a)},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var $b=/%20/g,_b=/\[\]$/,ac=/\r?\n/g,bc=/^(?:submit|button|image|reset|file)$/i,cc=/^(?:input|select|textarea|keygen)/i;function dc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||_b.test(a)?d(a,e):dc(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)dc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)dc(c,a[c],b,e);return d.join("&").replace($b,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&cc.test(this.nodeName)&&!bc.test(a)&&(this.checked||!Z.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(ac,"\r\n")}}):{name:b.name,value:c.replace(ac,"\r\n")}}).get()}}),n.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return this.isLocal?ic():d.documentMode>8?hc():/^(get|post|head|put|delete|options)$/i.test(this.type)&&hc()||ic()}:hc;var ec=0,fc={},gc=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in fc)fc[a](void 0,!0)}),l.cors=!!gc&&"withCredentials"in gc,gc=l.ajax=!!gc,gc&&n.ajaxTransport(function(b){if(!b.crossDomain||l.cors){var c;return{send:function(d,e){var f,g=b.xhr(),h=++ec;if(g.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(f in b.xhrFields)g[f]=b.xhrFields[f];b.mimeType&&g.overrideMimeType&&g.overrideMimeType(b.mimeType),b.crossDomain||d["X-Requested-With"]||(d["X-Requested-With"]="XMLHttpRequest");for(f in d)void 0!==d[f]&&g.setRequestHeader(f,d[f]+"");g.send(b.hasContent&&b.data||null),c=function(a,d){var f,i,j;if(c&&(d||4===g.readyState))if(delete fc[h],c=void 0,g.onreadystatechange=n.noop,d)4!==g.readyState&&g.abort();else{j={},f=g.status,"string"==typeof g.responseText&&(j.text=g.responseText);try{i=g.statusText}catch(k){i=""}f||!b.isLocal||b.crossDomain?1223===f&&(f=204):f=j.text?200:404}j&&e(f,i,j,g.getAllResponseHeaders())},b.async?4===g.readyState?a.setTimeout(c):g.onreadystatechange=fc[h]=c:c()},abort:function(){c&&c(void 0,!0)}}}});function hc(){try{return new a.XMLHttpRequest}catch(b){}}function ic(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=d.head||n("head")[0]||d.documentElement;return{send:function(e,f){b=d.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||f(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var jc=[],kc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=jc.pop()||n.expando+"_"+Eb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(kc.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&kc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(kc,"$1"+e):b.jsonp!==!1&&(b.url+=(Fb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,jc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||d;var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ja([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var lc=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&lc)return lc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h,a.length)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function mc(a){return n.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&n.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,n.contains(b,e)?("undefined"!=typeof e.getBoundingClientRect&&(d=e.getBoundingClientRect()),c=mc(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===n.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(c=a.offset()),c.top+=n.css(a[0],"borderTopWidth",!0),c.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-n.css(d,"marginTop",!0),left:b.left-c.left-n.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Qa})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);n.fn[a]=function(d){return Y(this,function(a,d,e){var f=mc(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?n(f).scrollLeft():e,c?e:n(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Ua(l.pixelPosition,function(a,c){return c?(c=Sa(a,b),Oa.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({
padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return Y(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var nc=a.jQuery,oc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=oc),b&&a.jQuery===n&&(a.jQuery=nc),n},b||(a.jQuery=a.$=n),n});
jQuery.noConflict();

/*!
 * imagesLoaded PACKAGED v3.1.8
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */


/*!
 * EventEmitter v4.2.6 - git.io/ee
 * Oliver Caldwell
 * MIT license
 * @preserve
 */

(function () {
	

	/**
	 * Class for managing events.
	 * Can be extended to provide event functionality in other classes.
	 *
	 * @class EventEmitter Manages event registering and emitting.
	 */
	function EventEmitter() {}

	// Shortcuts to improve speed and size
	var proto = EventEmitter.prototype;
	var exports = this;
	var originalGlobalValue = exports.EventEmitter;

	/**
	 * Finds the index of the listener for the event in it's storage array.
	 *
	 * @param {Function[]} listeners Array of listeners to search through.
	 * @param {Function} listener Method to look for.
	 * @return {Number} Index of the specified listener, -1 if not found
	 * @api private
	 */
	function indexOfListener(listeners, listener) {
		var i = listeners.length;
		while (i--) {
			if (listeners[i].listener === listener) {
				return i;
			}
		}

		return -1;
	}

	/**
	 * Alias a method while keeping the context correct, to allow for overwriting of target method.
	 *
	 * @param {String} name The name of the target method.
	 * @return {Function} The aliased method
	 * @api private
	 */
	function alias(name) {
		return function aliasClosure() {
			return this[name].apply(this, arguments);
		};
	}

	/**
	 * Returns the listener array for the specified event.
	 * Will initialise the event object and listener arrays if required.
	 * Will return an object if you use a regex search. The object contains keys for each matched event. So /ba[rz]/ might return an object containing bar and baz. But only if you have either defined them with defineEvent or added some listeners to them.
	 * Each property in the object response is an array of listener functions.
	 *
	 * @param {String|RegExp} evt Name of the event to return the listeners from.
	 * @return {Function[]|Object} All listener functions for the event.
	 */
	proto.getListeners = function getListeners(evt) {
		var events = this._getEvents();
		var response;
		var key;

		// Return a concatenated array of all matching events if
		// the selector is a regular expression.
		if (typeof evt === 'object') {
			response = {};
			for (key in events) {
				if (events.hasOwnProperty(key) && evt.test(key)) {
					response[key] = events[key];
				}
			}
		}
		else {
			response = events[evt] || (events[evt] = []);
		}

		return response;
	};

	/**
	 * Takes a list of listener objects and flattens it into a list of listener functions.
	 *
	 * @param {Object[]} listeners Raw listener objects.
	 * @return {Function[]} Just the listener functions.
	 */
	proto.flattenListeners = function flattenListeners(listeners) {
		var flatListeners = [];
		var i;

		for (i = 0; i < listeners.length; i += 1) {
			flatListeners.push(listeners[i].listener);
		}

		return flatListeners;
	};

	/**
	 * Fetches the requested listeners via getListeners but will always return the results inside an object. This is mainly for internal use but others may find it useful.
	 *
	 * @param {String|RegExp} evt Name of the event to return the listeners from.
	 * @return {Object} All listener functions for an event in an object.
	 */
	proto.getListenersAsObject = function getListenersAsObject(evt) {
		var listeners = this.getListeners(evt);
		var response;

		if (listeners instanceof Array) {
			response = {};
			response[evt] = listeners;
		}

		return response || listeners;
	};

	/**
	 * Adds a listener function to the specified event.
	 * The listener will not be added if it is a duplicate.
	 * If the listener returns true then it will be removed after it is called.
	 * If you pass a regular expression as the event name then the listener will be added to all events that match it.
	 *
	 * @param {String|RegExp} evt Name of the event to attach the listener to.
	 * @param {Function} listener Method to be called when the event is emitted. If the function returns true then it will be removed after calling.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.addListener = function addListener(evt, listener) {
		var listeners = this.getListenersAsObject(evt);
		var listenerIsWrapped = typeof listener === 'object';
		var key;

		for (key in listeners) {
			if (listeners.hasOwnProperty(key) && indexOfListener(listeners[key], listener) === -1) {
				listeners[key].push(listenerIsWrapped ? listener : {
					listener: listener,
					once: false
				});
			}
		}

		return this;
	};

	/**
	 * Alias of addListener
	 */
	proto.on = alias('addListener');

	/**
	 * Semi-alias of addListener. It will add a listener that will be
	 * automatically removed after it's first execution.
	 *
	 * @param {String|RegExp} evt Name of the event to attach the listener to.
	 * @param {Function} listener Method to be called when the event is emitted. If the function returns true then it will be removed after calling.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.addOnceListener = function addOnceListener(evt, listener) {
		return this.addListener(evt, {
			listener: listener,
			once: true
		});
	};

	/**
	 * Alias of addOnceListener.
	 */
	proto.once = alias('addOnceListener');

	/**
	 * Defines an event name. This is required if you want to use a regex to add a listener to multiple events at once. If you don't do this then how do you expect it to know what event to add to? Should it just add to every possible match for a regex? No. That is scary and bad.
	 * You need to tell it what event names should be matched by a regex.
	 *
	 * @param {String} evt Name of the event to create.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.defineEvent = function defineEvent(evt) {
		this.getListeners(evt);
		return this;
	};

	/**
	 * Uses defineEvent to define multiple events.
	 *
	 * @param {String[]} evts An array of event names to define.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.defineEvents = function defineEvents(evts) {
		for (var i = 0; i < evts.length; i += 1) {
			this.defineEvent(evts[i]);
		}
		return this;
	};

	/**
	 * Removes a listener function from the specified event.
	 * When passed a regular expression as the event name, it will remove the listener from all events that match it.
	 *
	 * @param {String|RegExp} evt Name of the event to remove the listener from.
	 * @param {Function} listener Method to remove from the event.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.removeListener = function removeListener(evt, listener) {
		var listeners = this.getListenersAsObject(evt);
		var index;
		var key;

		for (key in listeners) {
			if (listeners.hasOwnProperty(key)) {
				index = indexOfListener(listeners[key], listener);

				if (index !== -1) {
					listeners[key].splice(index, 1);
				}
			}
		}

		return this;
	};

	/**
	 * Alias of removeListener
	 */
	proto.off = alias('removeListener');

	/**
	 * Adds listeners in bulk using the manipulateListeners method.
	 * If you pass an object as the second argument you can add to multiple events at once. The object should contain key value pairs of events and listeners or listener arrays. You can also pass it an event name and an array of listeners to be added.
	 * You can also pass it a regular expression to add the array of listeners to all events that match it.
	 * Yeah, this function does quite a bit. That's probably a bad thing.
	 *
	 * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to add to multiple events at once.
	 * @param {Function[]} [listeners] An optional array of listener functions to add.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.addListeners = function addListeners(evt, listeners) {
		// Pass through to manipulateListeners
		return this.manipulateListeners(false, evt, listeners);
	};

	/**
	 * Removes listeners in bulk using the manipulateListeners method.
	 * If you pass an object as the second argument you can remove from multiple events at once. The object should contain key value pairs of events and listeners or listener arrays.
	 * You can also pass it an event name and an array of listeners to be removed.
	 * You can also pass it a regular expression to remove the listeners from all events that match it.
	 *
	 * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to remove from multiple events at once.
	 * @param {Function[]} [listeners] An optional array of listener functions to remove.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.removeListeners = function removeListeners(evt, listeners) {
		// Pass through to manipulateListeners
		return this.manipulateListeners(true, evt, listeners);
	};

	/**
	 * Edits listeners in bulk. The addListeners and removeListeners methods both use this to do their job. You should really use those instead, this is a little lower level.
	 * The first argument will determine if the listeners are removed (true) or added (false).
	 * If you pass an object as the second argument you can add/remove from multiple events at once. The object should contain key value pairs of events and listeners or listener arrays.
	 * You can also pass it an event name and an array of listeners to be added/removed.
	 * You can also pass it a regular expression to manipulate the listeners of all events that match it.
	 *
	 * @param {Boolean} remove True if you want to remove listeners, false if you want to add.
	 * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to add/remove from multiple events at once.
	 * @param {Function[]} [listeners] An optional array of listener functions to add/remove.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.manipulateListeners = function manipulateListeners(remove, evt, listeners) {
		var i;
		var value;
		var single = remove ? this.removeListener : this.addListener;
		var multiple = remove ? this.removeListeners : this.addListeners;

		// If evt is an object then pass each of it's properties to this method
		if (typeof evt === 'object' && !(evt instanceof RegExp)) {
			for (i in evt) {
				if (evt.hasOwnProperty(i) && (value = evt[i])) {
					// Pass the single listener straight through to the singular method
					if (typeof value === 'function') {
						single.call(this, i, value);
					}
					else {
						// Otherwise pass back to the multiple function
						multiple.call(this, i, value);
					}
				}
			}
		}
		else {
			// So evt must be a string
			// And listeners must be an array of listeners
			// Loop over it and pass each one to the multiple method
			i = listeners.length;
			while (i--) {
				single.call(this, evt, listeners[i]);
			}
		}

		return this;
	};

	/**
	 * Removes all listeners from a specified event.
	 * If you do not specify an event then all listeners will be removed.
	 * That means every event will be emptied.
	 * You can also pass a regex to remove all events that match it.
	 *
	 * @param {String|RegExp} [evt] Optional name of the event to remove all listeners for. Will remove from every event if not passed.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.removeEvent = function removeEvent(evt) {
		var type = typeof evt;
		var events = this._getEvents();
		var key;

		// Remove different things depending on the state of evt
		if (type === 'string') {
			// Remove all listeners for the specified event
			delete events[evt];
		}
		else if (type === 'object') {
			// Remove all events matching the regex.
			for (key in events) {
				if (events.hasOwnProperty(key) && evt.test(key)) {
					delete events[key];
				}
			}
		}
		else {
			// Remove all listeners in all events
			delete this._events;
		}

		return this;
	};

	/**
	 * Alias of removeEvent.
	 *
	 * Added to mirror the node API.
	 */
	proto.removeAllListeners = alias('removeEvent');

	/**
	 * Emits an event of your choice.
	 * When emitted, every listener attached to that event will be executed.
	 * If you pass the optional argument array then those arguments will be passed to every listener upon execution.
	 * Because it uses `apply`, your array of arguments will be passed as if you wrote them out separately.
	 * So they will not arrive within the array on the other side, they will be separate.
	 * You can also pass a regular expression to emit to all events that match it.
	 *
	 * @param {String|RegExp} evt Name of the event to emit and execute listeners for.
	 * @param {Array} [args] Optional array of arguments to be passed to each listener.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.emitEvent = function emitEvent(evt, args) {
		var listeners = this.getListenersAsObject(evt);
		var listener;
		var i;
		var key;
		var response;

		for (key in listeners) {
			if (listeners.hasOwnProperty(key)) {
				i = listeners[key].length;

				while (i--) {
					// If the listener returns true then it shall be removed from the event
					// The function is executed either with a basic call or an apply if there is an args array
					listener = listeners[key][i];

					if (listener.once === true) {
						this.removeListener(evt, listener.listener);
					}

					response = listener.listener.apply(this, args || []);

					if (response === this._getOnceReturnValue()) {
						this.removeListener(evt, listener.listener);
					}
				}
			}
		}

		return this;
	};

	/**
	 * Alias of emitEvent
	 */
	proto.trigger = alias('emitEvent');

	/**
	 * Subtly different from emitEvent in that it will pass its arguments on to the listeners, as opposed to taking a single array of arguments to pass on.
	 * As with emitEvent, you can pass a regex in place of the event name to emit to all events that match it.
	 *
	 * @param {String|RegExp} evt Name of the event to emit and execute listeners for.
	 * @param {...*} Optional additional arguments to be passed to each listener.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.emit = function emit(evt) {
		var args = Array.prototype.slice.call(arguments, 1);
		return this.emitEvent(evt, args);
	};

	/**
	 * Sets the current value to check against when executing listeners. If a
	 * listeners return value matches the one set here then it will be removed
	 * after execution. This value defaults to true.
	 *
	 * @param {*} value The new value to check for when executing listeners.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.setOnceReturnValue = function setOnceReturnValue(value) {
		this._onceReturnValue = value;
		return this;
	};

	/**
	 * Fetches the current value to check against when executing listeners. If
	 * the listeners return value matches this one then it should be removed
	 * automatically. It will return true by default.
	 *
	 * @return {*|Boolean} The current value to check for or the default, true.
	 * @api private
	 */
	proto._getOnceReturnValue = function _getOnceReturnValue() {
		if (this.hasOwnProperty('_onceReturnValue')) {
			return this._onceReturnValue;
		}
		else {
			return true;
		}
	};

	/**
	 * Fetches the events object and creates one if required.
	 *
	 * @return {Object} The events storage object.
	 * @api private
	 */
	proto._getEvents = function _getEvents() {
		return this._events || (this._events = {});
	};

	/**
	 * Reverts the global {@link EventEmitter} to its previous value and returns a reference to this version.
	 *
	 * @return {Function} Non conflicting EventEmitter class.
	 */
	EventEmitter.noConflict = function noConflict() {
		exports.EventEmitter = originalGlobalValue;
		return EventEmitter;
	};

	// Expose the class either via AMD, CommonJS or the global object
	if (typeof define === 'function' && define.amd) {
		define('eventEmitter/EventEmitter',[],function () {
			return EventEmitter;
		});
	}
	else if (typeof module === 'object' && module.exports){
		module.exports = EventEmitter;
	}
	else {
		this.EventEmitter = EventEmitter;
	}
}.call(this));

/*!
 * eventie v1.0.4
 * event binding helper
 *   eventie.bind( elem, 'click', myFn )
 *   eventie.unbind( elem, 'click', myFn )
 */

/*jshint browser: true, undef: true, unused: true */
/*global define: false */

( function( window ) {



var docElem = document.documentElement;

var bind = function() {};

function getIEEvent( obj ) {
  var event = window.event;
  // add event.target
  event.target = event.target || event.srcElement || obj;
  return event;
}

if ( docElem.addEventListener ) {
  bind = function( obj, type, fn ) {
    obj.addEventListener( type, fn, false );
  };
} else if ( docElem.attachEvent ) {
  bind = function( obj, type, fn ) {
    obj[ type + fn ] = fn.handleEvent ?
      function() {
        var event = getIEEvent( obj );
        fn.handleEvent.call( fn, event );
      } :
      function() {
        var event = getIEEvent( obj );
        fn.call( obj, event );
      };
    obj.attachEvent( "on" + type, obj[ type + fn ] );
  };
}

var unbind = function() {};

if ( docElem.removeEventListener ) {
  unbind = function( obj, type, fn ) {
    obj.removeEventListener( type, fn, false );
  };
} else if ( docElem.detachEvent ) {
  unbind = function( obj, type, fn ) {
    obj.detachEvent( "on" + type, obj[ type + fn ] );
    try {
      delete obj[ type + fn ];
    } catch ( err ) {
      // can't delete window object properties
      obj[ type + fn ] = undefined;
    }
  };
}

var eventie = {
  bind: bind,
  unbind: unbind
};

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( 'eventie/eventie',eventie );
} else {
  // browser global
  window.eventie = eventie;
}

})( this );

/*!
 * imagesLoaded v3.1.8
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

( function( window, factory ) { 
  // universal module definition

  /*global define: false, module: false, require: false */

  if ( typeof define === 'function' && define.amd ) {
    // AMD
    define( [
      'eventEmitter/EventEmitter',
      'eventie/eventie'
    ], function( EventEmitter, eventie ) {
      return factory( window, EventEmitter, eventie );
    });
  } else if ( typeof exports === 'object' ) {
    // CommonJS
    module.exports = factory(
      window,
      require('wolfy87-eventemitter'),
      require('eventie')
    );
  } else {
    // browser global
    window.imagesLoaded = factory(
      window,
      window.EventEmitter,
      window.eventie
    );
  }

})( window,

// --------------------------  factory -------------------------- //

function factory( window, EventEmitter, eventie ) {



var $ = window.jQuery;
var console = window.console;
var hasConsole = typeof console !== 'undefined';

// -------------------------- helpers -------------------------- //

// extend objects
function extend( a, b ) {
  for ( var prop in b ) {
    a[ prop ] = b[ prop ];
  }
  return a;
}

var objToString = Object.prototype.toString;
function isArray( obj ) {
  return objToString.call( obj ) === '[object Array]';
}

// turn element or nodeList into an array
function makeArray( obj ) {
  var ary = [];
  if ( isArray( obj ) ) {
    // use object if already an array
    ary = obj;
  } else if ( typeof obj.length === 'number' ) {
    // convert nodeList to array
    for ( var i=0, len = obj.length; i < len; i++ ) {
      ary.push( obj[i] );
    }
  } else {
    // array of single index
    ary.push( obj );
  }
  return ary;
}

  // -------------------------- imagesLoaded -------------------------- //

  /**
   * @param {Array, Element, NodeList, String} elem
   * @param {Object or Function} options - if function, use as callback
   * @param {Function} onAlways - callback function
   */
  function ImagesLoaded( elem, options, onAlways ) {
    // coerce ImagesLoaded() without new, to be new ImagesLoaded()
    if ( !( this instanceof ImagesLoaded ) ) {
      return new ImagesLoaded( elem, options );
    }
    // use elem as selector string
    if ( typeof elem === 'string' ) {
      elem = document.querySelectorAll( elem );
    }

    this.elements = makeArray( elem );
    this.options = extend( {}, this.options );

    if ( typeof options === 'function' ) {
      onAlways = options;
    } else {
      extend( this.options, options );
    }

    if ( onAlways ) {
      this.on( 'always', onAlways );
    }

    this.getImages();

    if ( $ ) {
      // add jQuery Deferred object
      this.jqDeferred = new $.Deferred();
    }

    // HACK check async to allow time to bind listeners
    var _this = this;
    setTimeout( function() {
      _this.check();
    });
  }

  ImagesLoaded.prototype = new EventEmitter();

  ImagesLoaded.prototype.options = {};

  ImagesLoaded.prototype.getImages = function() {
    this.images = [];

    // filter & find items if we have an item selector
    for ( var i=0, len = this.elements.length; i < len; i++ ) {
      var elem = this.elements[i];
      // filter siblings
      if ( elem.nodeName === 'IMG' ) {
        this.addImage( elem );
      }
      // find children
      // no non-element nodes, #143
      var nodeType = elem.nodeType;
      if ( !nodeType || !( nodeType === 1 || nodeType === 9 || nodeType === 11 ) ) {
        continue;
      }
      var childElems = elem.querySelectorAll('img');
      // concat childElems to filterFound array
      for ( var j=0, jLen = childElems.length; j < jLen; j++ ) {
        var img = childElems[j];
        this.addImage( img );
      }
    }
  };

  /**
   * @param {Image} img
   */
  ImagesLoaded.prototype.addImage = function( img ) {
    var loadingImage = new LoadingImage( img );
    this.images.push( loadingImage );
  };

  ImagesLoaded.prototype.check = function() {
    var _this = this;
    var checkedCount = 0;
    var length = this.images.length;
    this.hasAnyBroken = false;
    // complete if no images
    if ( !length ) {
      this.complete();
      return;
    }

    function onConfirm( image, message ) {
      if ( _this.options.debug && hasConsole ) {
        console.log( 'confirm', image, message );
      }

      _this.progress( image );
      checkedCount++;
      if ( checkedCount === length ) {
        _this.complete();
      }
      return true; // bind once
    }

    for ( var i=0; i < length; i++ ) {
      var loadingImage = this.images[i];
      loadingImage.on( 'confirm', onConfirm );
      loadingImage.check();
    }
  };

  ImagesLoaded.prototype.progress = function( image ) {
    this.hasAnyBroken = this.hasAnyBroken || !image.isLoaded;
    // HACK - Chrome triggers event before object properties have changed. #83
    var _this = this;
    setTimeout( function() {
      _this.emit( 'progress', _this, image );
      if ( _this.jqDeferred && _this.jqDeferred.notify ) {
        _this.jqDeferred.notify( _this, image );
      }
    });
  };

  ImagesLoaded.prototype.complete = function() {
    var eventName = this.hasAnyBroken ? 'fail' : 'done';
    this.isComplete = true;
    var _this = this;
    // HACK - another setTimeout so that confirm happens after progress
    setTimeout( function() {
      _this.emit( eventName, _this );
      _this.emit( 'always', _this );
      if ( _this.jqDeferred ) {
        var jqMethod = _this.hasAnyBroken ? 'reject' : 'resolve';
        _this.jqDeferred[ jqMethod ]( _this );
      }
    });
  };

  // -------------------------- jquery -------------------------- //

  if ( $ ) {
    $.fn.imagesLoaded = function( options, callback ) {
      var instance = new ImagesLoaded( this, options, callback );
      return instance.jqDeferred.promise( $(this) );
    };
  }


  // --------------------------  -------------------------- //

  function LoadingImage( img ) {
    this.img = img;
  }

  LoadingImage.prototype = new EventEmitter();

  LoadingImage.prototype.check = function() {
    // first check cached any previous images that have same src
    var resource = cache[ this.img.src ] || new Resource( this.img.src );
    if ( resource.isConfirmed ) {
      this.confirm( resource.isLoaded, 'cached was confirmed' );
      return;
    }

    // If complete is true and browser supports natural sizes,
    // try to check for image status manually.
    if ( this.img.complete && this.img.naturalWidth !== undefined ) {
      // report based on naturalWidth
      this.confirm( this.img.naturalWidth !== 0, 'naturalWidth' );
      return;
    }

    // If none of the checks above matched, simulate loading on detached element.
    var _this = this;
    resource.on( 'confirm', function( resrc, message ) {
      _this.confirm( resrc.isLoaded, message );
      return true;
    });

    resource.check();
  };

  LoadingImage.prototype.confirm = function( isLoaded, message ) {
    this.isLoaded = isLoaded;
    this.emit( 'confirm', this, message );
  };

  // -------------------------- Resource -------------------------- //

  // Resource checks each src, only once
  // separate class from LoadingImage to prevent memory leaks. See #115

  var cache = {};

  function Resource( src ) {
    this.src = src;
    // add to cache
    cache[ src ] = this;
  }

  Resource.prototype = new EventEmitter();

  Resource.prototype.check = function() {
    // only trigger checking once
    if ( this.isChecked ) {
      return;
    }
    // simulate loading on detached element
    var proxyImage = new Image();
    eventie.bind( proxyImage, 'load', this );
    eventie.bind( proxyImage, 'error', this );
    proxyImage.src = this.src;
    // set flag
    this.isChecked = true;
  };

  // ----- events ----- //

  // trigger specified handler for event type
  Resource.prototype.handleEvent = function( event ) {
    var method = 'on' + event.type;
    if ( this[ method ] ) {
      this[ method ]( event );
    }
  };

  Resource.prototype.onload = function( event ) {
    this.confirm( true, 'onload' );
    this.unbindProxyEvents( event );
  };

  Resource.prototype.onerror = function( event ) {
    this.confirm( false, 'onerror' );
    this.unbindProxyEvents( event );
  };

  // ----- confirm ----- //

  Resource.prototype.confirm = function( isLoaded, message ) {
    this.isConfirmed = true;
    this.isLoaded = isLoaded;
    this.emit( 'confirm', this, message );
  };

  Resource.prototype.unbindProxyEvents = function( event ) {
    eventie.unbind( event.target, 'load', this );
    eventie.unbind( event.target, 'error', this );
  };

  // -----  ----- //

  return ImagesLoaded;

});

/* jquery.nicescroll 3.6.0 InuYaksa*2014 MIT http://nicescroll.areaaperta.com */(function(f){"function"===typeof define&&define.amd?define(["jquery"],f):f(jQuery)})(function(f){var y=!1,D=!1,N=0,O=2E3,x=0,H=["webkit","ms","moz","o"],s=window.requestAnimationFrame||!1,t=window.cancelAnimationFrame||!1;if(!s)for(var P in H){var E=H[P];s||(s=window[E+"RequestAnimationFrame"]);t||(t=window[E+"CancelAnimationFrame"]||window[E+"CancelRequestAnimationFrame"])}var v=window.MutationObserver||window.WebKitMutationObserver||!1,I={zindex:"auto",cursoropacitymin:0,cursoropacitymax:1,cursorcolor:"#424242",
cursorwidth:"5px",cursorborder:"1px solid #fff",cursorborderradius:"5px",scrollspeed:60,mousescrollstep:24,touchbehavior:!1,hwacceleration:!0,usetransition:!0,boxzoom:!1,dblclickzoom:!0,gesturezoom:!0,grabcursorenabled:!0,autohidemode:!0,background:"",iframeautoresize:!0,cursorminheight:32,preservenativescrolling:!0,railoffset:!1,railhoffset:!1,bouncescroll:!0,spacebarenabled:!0,railpadding:{top:0,right:0,left:0,bottom:0},disableoutline:!0,horizrailenabled:!0,railalign:"right",railvalign:"bottom",
enabletranslate3d:!0,enablemousewheel:!0,enablekeyboard:!0,smoothscroll:!0,sensitiverail:!0,enablemouselockapi:!0,cursorfixedheight:!1,directionlockdeadzone:6,hidecursordelay:400,nativeparentscrolling:!0,enablescrollonselection:!0,overflowx:!0,overflowy:!0,cursordragspeed:.3,rtlmode:"auto",cursordragontouch:!1,oneaxismousemode:"auto",scriptpath:function(){var f=document.getElementsByTagName("script"),f=f[f.length-1].src.split("?")[0];return 0<f.split("/").length?f.split("/").slice(0,-1).join("/")+
"/":""}(),preventmultitouchscrolling:!0},F=!1,Q=function(){if(F)return F;var f=document.createElement("DIV"),c=f.style,h=navigator.userAgent,m=navigator.platform,d={haspointerlock:"pointerLockElement"in document||"webkitPointerLockElement"in document||"mozPointerLockElement"in document};d.isopera="opera"in window;d.isopera12=d.isopera&&"getUserMedia"in navigator;d.isoperamini="[object OperaMini]"===Object.prototype.toString.call(window.operamini);d.isie="all"in document&&"attachEvent"in f&&!d.isopera;
d.isieold=d.isie&&!("msInterpolationMode"in c);d.isie7=d.isie&&!d.isieold&&(!("documentMode"in document)||7==document.documentMode);d.isie8=d.isie&&"documentMode"in document&&8==document.documentMode;d.isie9=d.isie&&"performance"in window&&9<=document.documentMode;d.isie10=d.isie&&"performance"in window&&10==document.documentMode;d.isie11="msRequestFullscreen"in f&&11<=document.documentMode;d.isie9mobile=/iemobile.9/i.test(h);d.isie9mobile&&(d.isie9=!1);d.isie7mobile=!d.isie9mobile&&d.isie7&&/iemobile/i.test(h);
d.ismozilla="MozAppearance"in c;d.iswebkit="WebkitAppearance"in c;d.ischrome="chrome"in window;d.ischrome22=d.ischrome&&d.haspointerlock;d.ischrome26=d.ischrome&&"transition"in c;d.cantouch="ontouchstart"in document.documentElement||"ontouchstart"in window;d.hasmstouch=window.MSPointerEvent||!1;d.hasw3ctouch=window.PointerEvent||!1;d.ismac=/^mac$/i.test(m);d.isios=d.cantouch&&/iphone|ipad|ipod/i.test(m);d.isios4=d.isios&&!("seal"in Object);d.isios7=d.isios&&"webkitHidden"in document;d.isandroid=/android/i.test(h);
d.haseventlistener="addEventListener"in f;d.trstyle=!1;d.hastransform=!1;d.hastranslate3d=!1;d.transitionstyle=!1;d.hastransition=!1;d.transitionend=!1;m=["transform","msTransform","webkitTransform","MozTransform","OTransform"];for(h=0;h<m.length;h++)if("undefined"!=typeof c[m[h]]){d.trstyle=m[h];break}d.hastransform=!!d.trstyle;d.hastransform&&(c[d.trstyle]="translate3d(1px,2px,3px)",d.hastranslate3d=/translate3d/.test(c[d.trstyle]));d.transitionstyle=!1;d.prefixstyle="";d.transitionend=!1;for(var m=
"transition webkitTransition msTransition MozTransition OTransition OTransition KhtmlTransition".split(" "),n=" -webkit- -ms- -moz- -o- -o -khtml-".split(" "),p="transitionend webkitTransitionEnd msTransitionEnd transitionend otransitionend oTransitionEnd KhtmlTransitionEnd".split(" "),h=0;h<m.length;h++)if(m[h]in c){d.transitionstyle=m[h];d.prefixstyle=n[h];d.transitionend=p[h];break}d.ischrome26&&(d.prefixstyle=n[1]);d.hastransition=d.transitionstyle;a:{h=["-webkit-grab","-moz-grab","grab"];if(d.ischrome&&
!d.ischrome22||d.isie)h=[];for(m=0;m<h.length;m++)if(n=h[m],c.cursor=n,c.cursor==n){c=n;break a}c="url(//mail.google.com/mail/images/2/openhand.cur),n-resize"}d.cursorgrabvalue=c;d.hasmousecapture="setCapture"in f;d.hasMutationObserver=!1!==v;return F=d},R=function(k,c){function h(){var b=a.doc.css(e.trstyle);return b&&"matrix"==b.substr(0,6)?b.replace(/^.*\((.*)\)$/g,"$1").replace(/px/g,"").split(/, +/):!1}function m(){var b=a.win;if("zIndex"in b)return b.zIndex();for(;0<b.length&&9!=b[0].nodeType;){var g=
b.css("zIndex");if(!isNaN(g)&&0!=g)return parseInt(g);b=b.parent()}return!1}function d(b,g,q){g=b.css(g);b=parseFloat(g);return isNaN(b)?(b=w[g]||0,q=3==b?q?a.win.outerHeight()-a.win.innerHeight():a.win.outerWidth()-a.win.innerWidth():1,a.isie8&&b&&(b+=1),q?b:0):b}function n(b,g,q,c){a._bind(b,g,function(a){a=a?a:window.event;var c={original:a,target:a.target||a.srcElement,type:"wheel",deltaMode:"MozMousePixelScroll"==a.type?0:1,deltaX:0,deltaZ:0,preventDefault:function(){a.preventDefault?a.preventDefault():
a.returnValue=!1;return!1},stopImmediatePropagation:function(){a.stopImmediatePropagation?a.stopImmediatePropagation():a.cancelBubble=!0}};"mousewheel"==g?(c.deltaY=-.025*a.wheelDelta,a.wheelDeltaX&&(c.deltaX=-.025*a.wheelDeltaX)):c.deltaY=a.detail;return q.call(b,c)},c)}function p(b,g,c){var d,e;0==b.deltaMode?(d=-Math.floor(a.opt.mousescrollstep/54*b.deltaX),e=-Math.floor(a.opt.mousescrollstep/54*b.deltaY)):1==b.deltaMode&&(d=-Math.floor(b.deltaX*a.opt.mousescrollstep),e=-Math.floor(b.deltaY*a.opt.mousescrollstep));
g&&a.opt.oneaxismousemode&&0==d&&e&&(d=e,e=0,c&&(0>d?a.getScrollLeft()>=a.page.maxw:0>=a.getScrollLeft())&&(e=d,d=0));d&&(a.scrollmom&&a.scrollmom.stop(),a.lastdeltax+=d,a.debounced("mousewheelx",function(){var b=a.lastdeltax;a.lastdeltax=0;a.rail.drag||a.doScrollLeftBy(b)},15));if(e){if(a.opt.nativeparentscrolling&&c&&!a.ispage&&!a.zoomactive)if(0>e){if(a.getScrollTop()>=a.page.maxh)return!0}else if(0>=a.getScrollTop())return!0;a.scrollmom&&a.scrollmom.stop();a.lastdeltay+=e;a.debounced("mousewheely",
function(){var b=a.lastdeltay;a.lastdeltay=0;a.rail.drag||a.doScrollBy(b)},15)}b.stopImmediatePropagation();return b.preventDefault()}var a=this;this.version="3.6.0";this.name="nicescroll";this.me=c;this.opt={doc:f("body"),win:!1};f.extend(this.opt,I);this.opt.snapbackspeed=80;if(k)for(var G in a.opt)"undefined"!=typeof k[G]&&(a.opt[G]=k[G]);this.iddoc=(this.doc=a.opt.doc)&&this.doc[0]?this.doc[0].id||"":"";this.ispage=/^BODY|HTML/.test(a.opt.win?a.opt.win[0].nodeName:this.doc[0].nodeName);this.haswrapper=
!1!==a.opt.win;this.win=a.opt.win||(this.ispage?f(window):this.doc);this.docscroll=this.ispage&&!this.haswrapper?f(window):this.win;this.body=f("body");this.iframe=this.isfixed=this.viewport=!1;this.isiframe="IFRAME"==this.doc[0].nodeName&&"IFRAME"==this.win[0].nodeName;this.istextarea="TEXTAREA"==this.win[0].nodeName;this.forcescreen=!1;this.canshowonmouseevent="scroll"!=a.opt.autohidemode;this.page=this.view=this.onzoomout=this.onzoomin=this.onscrollcancel=this.onscrollend=this.onscrollstart=this.onclick=
this.ongesturezoom=this.onkeypress=this.onmousewheel=this.onmousemove=this.onmouseup=this.onmousedown=!1;this.scroll={x:0,y:0};this.scrollratio={x:0,y:0};this.cursorheight=20;this.scrollvaluemax=0;this.isrtlmode="auto"==this.opt.rtlmode?"rtl"==(this.win[0]==window?this.body:this.win).css("direction"):!0===this.opt.rtlmode;this.observerbody=this.observerremover=this.observer=this.scrollmom=this.scrollrunning=!1;do this.id="ascrail"+O++;while(document.getElementById(this.id));this.hasmousefocus=this.hasfocus=
this.zoomactive=this.zoom=this.selectiondrag=this.cursorfreezed=this.cursor=this.rail=!1;this.visibility=!0;this.hidden=this.locked=this.railslocked=!1;this.cursoractive=!0;this.wheelprevented=!1;this.overflowx=a.opt.overflowx;this.overflowy=a.opt.overflowy;this.nativescrollingarea=!1;this.checkarea=0;this.events=[];this.saved={};this.delaylist={};this.synclist={};this.lastdeltay=this.lastdeltax=0;this.detected=Q();var e=f.extend({},this.detected);this.ishwscroll=(this.canhwscroll=e.hastransform&&
a.opt.hwacceleration)&&a.haswrapper;this.hasreversehr=this.isrtlmode&&!e.iswebkit;this.istouchcapable=!1;!e.cantouch||e.isios||e.isandroid||!e.iswebkit&&!e.ismozilla||(this.istouchcapable=!0,e.cantouch=!1);a.opt.enablemouselockapi||(e.hasmousecapture=!1,e.haspointerlock=!1);this.debounced=function(b,g,c){var d=a.delaylist[b];a.delaylist[b]=g;d||setTimeout(function(){var g=a.delaylist[b];a.delaylist[b]=!1;g.call(a)},c)};var r=!1;this.synched=function(b,g){a.synclist[b]=g;(function(){r||(s(function(){r=
!1;for(var b in a.synclist){var g=a.synclist[b];g&&g.call(a);a.synclist[b]=!1}}),r=!0)})();return b};this.unsynched=function(b){a.synclist[b]&&(a.synclist[b]=!1)};this.css=function(b,g){for(var c in g)a.saved.css.push([b,c,b.css(c)]),b.css(c,g[c])};this.scrollTop=function(b){return"undefined"==typeof b?a.getScrollTop():a.setScrollTop(b)};this.scrollLeft=function(b){return"undefined"==typeof b?a.getScrollLeft():a.setScrollLeft(b)};var A=function(a,g,c,d,e,f,h){this.st=a;this.ed=g;this.spd=c;this.p1=
d||0;this.p2=e||1;this.p3=f||0;this.p4=h||1;this.ts=(new Date).getTime();this.df=this.ed-this.st};A.prototype={B2:function(a){return 3*a*a*(1-a)},B3:function(a){return 3*a*(1-a)*(1-a)},B4:function(a){return(1-a)*(1-a)*(1-a)},getNow:function(){var a=1-((new Date).getTime()-this.ts)/this.spd,g=this.B2(a)+this.B3(a)+this.B4(a);return 0>a?this.ed:this.st+Math.round(this.df*g)},update:function(a,g){this.st=this.getNow();this.ed=a;this.spd=g;this.ts=(new Date).getTime();this.df=this.ed-this.st;return this}};
if(this.ishwscroll){this.doc.translate={x:0,y:0,tx:"0px",ty:"0px"};e.hastranslate3d&&e.isios&&this.doc.css("-webkit-backface-visibility","hidden");this.getScrollTop=function(b){if(!b){if(b=h())return 16==b.length?-b[13]:-b[5];if(a.timerscroll&&a.timerscroll.bz)return a.timerscroll.bz.getNow()}return a.doc.translate.y};this.getScrollLeft=function(b){if(!b){if(b=h())return 16==b.length?-b[12]:-b[4];if(a.timerscroll&&a.timerscroll.bh)return a.timerscroll.bh.getNow()}return a.doc.translate.x};this.notifyScrollEvent=
function(a){var g=document.createEvent("UIEvents");g.initUIEvent("scroll",!1,!0,window,1);g.niceevent=!0;a.dispatchEvent(g)};var K=this.isrtlmode?1:-1;e.hastranslate3d&&a.opt.enabletranslate3d?(this.setScrollTop=function(b,g){a.doc.translate.y=b;a.doc.translate.ty=-1*b+"px";a.doc.css(e.trstyle,"translate3d("+a.doc.translate.tx+","+a.doc.translate.ty+",0px)");g||a.notifyScrollEvent(a.win[0])},this.setScrollLeft=function(b,g){a.doc.translate.x=b;a.doc.translate.tx=b*K+"px";a.doc.css(e.trstyle,"translate3d("+
a.doc.translate.tx+","+a.doc.translate.ty+",0px)");g||a.notifyScrollEvent(a.win[0])}):(this.setScrollTop=function(b,g){a.doc.translate.y=b;a.doc.translate.ty=-1*b+"px";a.doc.css(e.trstyle,"translate("+a.doc.translate.tx+","+a.doc.translate.ty+")");g||a.notifyScrollEvent(a.win[0])},this.setScrollLeft=function(b,g){a.doc.translate.x=b;a.doc.translate.tx=b*K+"px";a.doc.css(e.trstyle,"translate("+a.doc.translate.tx+","+a.doc.translate.ty+")");g||a.notifyScrollEvent(a.win[0])})}else this.getScrollTop=
function(){return a.docscroll.scrollTop()},this.setScrollTop=function(b){return a.docscroll.scrollTop(b)},this.getScrollLeft=function(){return a.detected.ismozilla&&a.isrtlmode?Math.abs(a.docscroll.scrollLeft()):a.docscroll.scrollLeft()},this.setScrollLeft=function(b){return a.docscroll.scrollLeft(a.detected.ismozilla&&a.isrtlmode?-b:b)};this.getTarget=function(a){return a?a.target?a.target:a.srcElement?a.srcElement:!1:!1};this.hasParent=function(a,g){if(!a)return!1;for(var c=a.target||a.srcElement||
a||!1;c&&c.id!=g;)c=c.parentNode||!1;return!1!==c};var w={thin:1,medium:3,thick:5};this.getDocumentScrollOffset=function(){return{top:window.pageYOffset||document.documentElement.scrollTop,left:window.pageXOffset||document.documentElement.scrollLeft}};this.getOffset=function(){if(a.isfixed){var b=a.win.offset(),g=a.getDocumentScrollOffset();b.top-=g.top;b.left-=g.left;return b}b=a.win.offset();if(!a.viewport)return b;g=a.viewport.offset();return{top:b.top-g.top,left:b.left-g.left}};this.updateScrollBar=
function(b){if(a.ishwscroll)a.rail.css({height:a.win.innerHeight()-(a.opt.railpadding.top+a.opt.railpadding.bottom)}),a.railh&&a.railh.css({width:a.win.innerWidth()-(a.opt.railpadding.left+a.opt.railpadding.right)});else{var g=a.getOffset(),c=g.top,e=g.left-(a.opt.railpadding.left+a.opt.railpadding.right),c=c+d(a.win,"border-top-width",!0),e=e+(a.rail.align?a.win.outerWidth()-d(a.win,"border-right-width")-a.rail.width:d(a.win,"border-left-width")),f=a.opt.railoffset;f&&(f.top&&(c+=f.top),a.rail.align&&
f.left&&(e+=f.left));a.railslocked||a.rail.css({top:c,left:e,height:(b?b.h:a.win.innerHeight())-(a.opt.railpadding.top+a.opt.railpadding.bottom)});a.zoom&&a.zoom.css({top:c+1,left:1==a.rail.align?e-20:e+a.rail.width+4});if(a.railh&&!a.railslocked){c=g.top;e=g.left;if(f=a.opt.railhoffset)f.top&&(c+=f.top),f.left&&(e+=f.left);b=a.railh.align?c+d(a.win,"border-top-width",!0)+a.win.innerHeight()-a.railh.height:c+d(a.win,"border-top-width",!0);e+=d(a.win,"border-left-width");a.railh.css({top:b-(a.opt.railpadding.top+
a.opt.railpadding.bottom),left:e,width:a.railh.width})}}};this.doRailClick=function(b,g,c){var e;a.railslocked||(a.cancelEvent(b),g?(g=c?a.doScrollLeft:a.doScrollTop,e=c?(b.pageX-a.railh.offset().left-a.cursorwidth/2)*a.scrollratio.x:(b.pageY-a.rail.offset().top-a.cursorheight/2)*a.scrollratio.y,g(e)):(g=c?a.doScrollLeftBy:a.doScrollBy,e=c?a.scroll.x:a.scroll.y,b=c?b.pageX-a.railh.offset().left:b.pageY-a.rail.offset().top,c=c?a.view.w:a.view.h,g(e>=b?c:-c)))};a.hasanimationframe=s;a.hascancelanimationframe=
t;a.hasanimationframe?a.hascancelanimationframe||(t=function(){a.cancelAnimationFrame=!0}):(s=function(a){return setTimeout(a,15-Math.floor(+new Date/1E3)%16)},t=clearInterval);this.init=function(){a.saved.css=[];if(e.isie7mobile||e.isoperamini)return!0;e.hasmstouch&&a.css(a.ispage?f("html"):a.win,{"-ms-touch-action":"none"});a.zindex="auto";a.zindex=a.ispage||"auto"!=a.opt.zindex?a.opt.zindex:m()||"auto";!a.ispage&&"auto"!=a.zindex&&a.zindex>x&&(x=a.zindex);a.isie&&0==a.zindex&&"auto"==a.opt.zindex&&
(a.zindex="auto");if(!a.ispage||!e.cantouch&&!e.isieold&&!e.isie9mobile){var b=a.docscroll;a.ispage&&(b=a.haswrapper?a.win:a.doc);e.isie9mobile||a.css(b,{"overflow-y":"hidden"});a.ispage&&e.isie7&&("BODY"==a.doc[0].nodeName?a.css(f("html"),{"overflow-y":"hidden"}):"HTML"==a.doc[0].nodeName&&a.css(f("body"),{"overflow-y":"hidden"}));!e.isios||a.ispage||a.haswrapper||a.css(f("body"),{"-webkit-overflow-scrolling":"touch"});var g=f(document.createElement("div"));g.css({position:"relative",top:0,"float":"right",
width:a.opt.cursorwidth,height:"0px","background-color":a.opt.cursorcolor,border:a.opt.cursorborder,"background-clip":"padding-box","-webkit-border-radius":a.opt.cursorborderradius,"-moz-border-radius":a.opt.cursorborderradius,"border-radius":a.opt.cursorborderradius});g.hborder=parseFloat(g.outerHeight()-g.innerHeight());g.addClass("nicescroll-cursors");a.cursor=g;var c=f(document.createElement("div"));c.attr("id",a.id);c.addClass("nicescroll-rails nicescroll-rails-vr");var d,h,k=["left","right",
"top","bottom"],J;for(J in k)h=k[J],(d=a.opt.railpadding[h])?c.css("padding-"+h,d+"px"):a.opt.railpadding[h]=0;c.append(g);c.width=Math.max(parseFloat(a.opt.cursorwidth),g.outerWidth());c.css({width:c.width+"px",zIndex:a.zindex,background:a.opt.background,cursor:"default"});c.visibility=!0;c.scrollable=!0;c.align="left"==a.opt.railalign?0:1;a.rail=c;g=a.rail.drag=!1;!a.opt.boxzoom||a.ispage||e.isieold||(g=document.createElement("div"),a.bind(g,"click",a.doZoom),a.bind(g,"mouseenter",function(){a.zoom.css("opacity",
a.opt.cursoropacitymax)}),a.bind(g,"mouseleave",function(){a.zoom.css("opacity",a.opt.cursoropacitymin)}),a.zoom=f(g),a.zoom.css({cursor:"pointer","z-index":a.zindex,backgroundImage:"url("+a.opt.scriptpath+"zoomico.png)",height:18,width:18,backgroundPosition:"0px 0px"}),a.opt.dblclickzoom&&a.bind(a.win,"dblclick",a.doZoom),e.cantouch&&a.opt.gesturezoom&&(a.ongesturezoom=function(b){1.5<b.scale&&a.doZoomIn(b);.8>b.scale&&a.doZoomOut(b);return a.cancelEvent(b)},a.bind(a.win,"gestureend",a.ongesturezoom)));
a.railh=!1;var l;a.opt.horizrailenabled&&(a.css(b,{"overflow-x":"hidden"}),g=f(document.createElement("div")),g.css({position:"absolute",top:0,height:a.opt.cursorwidth,width:"0px","background-color":a.opt.cursorcolor,border:a.opt.cursorborder,"background-clip":"padding-box","-webkit-border-radius":a.opt.cursorborderradius,"-moz-border-radius":a.opt.cursorborderradius,"border-radius":a.opt.cursorborderradius}),e.isieold&&g.css({overflow:"hidden"}),g.wborder=parseFloat(g.outerWidth()-g.innerWidth()),
g.addClass("nicescroll-cursors"),a.cursorh=g,l=f(document.createElement("div")),l.attr("id",a.id+"-hr"),l.addClass("nicescroll-rails nicescroll-rails-hr"),l.height=Math.max(parseFloat(a.opt.cursorwidth),g.outerHeight()),l.css({height:l.height+"px",zIndex:a.zindex,background:a.opt.background}),l.append(g),l.visibility=!0,l.scrollable=!0,l.align="top"==a.opt.railvalign?0:1,a.railh=l,a.railh.drag=!1);a.ispage?(c.css({position:"fixed",top:"0px",height:"100%"}),c.align?c.css({right:"0px"}):c.css({left:"0px"}),
a.body.append(c),a.railh&&(l.css({position:"fixed",left:"0px",width:"100%"}),l.align?l.css({bottom:"0px"}):l.css({top:"0px"}),a.body.append(l))):(a.ishwscroll?("static"==a.win.css("position")&&a.css(a.win,{position:"relative"}),b="HTML"==a.win[0].nodeName?a.body:a.win,f(b).scrollTop(0).scrollLeft(0),a.zoom&&(a.zoom.css({position:"absolute",top:1,right:0,"margin-right":c.width+4}),b.append(a.zoom)),c.css({position:"absolute",top:0}),c.align?c.css({right:0}):c.css({left:0}),b.append(c),l&&(l.css({position:"absolute",
left:0,bottom:0}),l.align?l.css({bottom:0}):l.css({top:0}),b.append(l))):(a.isfixed="fixed"==a.win.css("position"),b=a.isfixed?"fixed":"absolute",a.isfixed||(a.viewport=a.getViewport(a.win[0])),a.viewport&&(a.body=a.viewport,0==/fixed|absolute/.test(a.viewport.css("position"))&&a.css(a.viewport,{position:"relative"})),c.css({position:b}),a.zoom&&a.zoom.css({position:b}),a.updateScrollBar(),a.body.append(c),a.zoom&&a.body.append(a.zoom),a.railh&&(l.css({position:b}),a.body.append(l))),e.isios&&a.css(a.win,
{"-webkit-tap-highlight-color":"rgba(0,0,0,0)","-webkit-touch-callout":"none"}),e.isie&&a.opt.disableoutline&&a.win.attr("hideFocus","true"),e.iswebkit&&a.opt.disableoutline&&a.win.css({outline:"none"}));!1===a.opt.autohidemode?(a.autohidedom=!1,a.rail.css({opacity:a.opt.cursoropacitymax}),a.railh&&a.railh.css({opacity:a.opt.cursoropacitymax})):!0===a.opt.autohidemode||"leave"===a.opt.autohidemode?(a.autohidedom=f().add(a.rail),e.isie8&&(a.autohidedom=a.autohidedom.add(a.cursor)),a.railh&&(a.autohidedom=
a.autohidedom.add(a.railh)),a.railh&&e.isie8&&(a.autohidedom=a.autohidedom.add(a.cursorh))):"scroll"==a.opt.autohidemode?(a.autohidedom=f().add(a.rail),a.railh&&(a.autohidedom=a.autohidedom.add(a.railh))):"cursor"==a.opt.autohidemode?(a.autohidedom=f().add(a.cursor),a.railh&&(a.autohidedom=a.autohidedom.add(a.cursorh))):"hidden"==a.opt.autohidemode&&(a.autohidedom=!1,a.hide(),a.railslocked=!1);if(e.isie9mobile)a.scrollmom=new L(a),a.onmangotouch=function(){var b=a.getScrollTop(),c=a.getScrollLeft();
if(b==a.scrollmom.lastscrolly&&c==a.scrollmom.lastscrollx)return!0;var g=b-a.mangotouch.sy,e=c-a.mangotouch.sx;if(0!=Math.round(Math.sqrt(Math.pow(e,2)+Math.pow(g,2)))){var d=0>g?-1:1,f=0>e?-1:1,q=+new Date;a.mangotouch.lazy&&clearTimeout(a.mangotouch.lazy);80<q-a.mangotouch.tm||a.mangotouch.dry!=d||a.mangotouch.drx!=f?(a.scrollmom.stop(),a.scrollmom.reset(c,b),a.mangotouch.sy=b,a.mangotouch.ly=b,a.mangotouch.sx=c,a.mangotouch.lx=c,a.mangotouch.dry=d,a.mangotouch.drx=f,a.mangotouch.tm=q):(a.scrollmom.stop(),
a.scrollmom.update(a.mangotouch.sx-e,a.mangotouch.sy-g),a.mangotouch.tm=q,g=Math.max(Math.abs(a.mangotouch.ly-b),Math.abs(a.mangotouch.lx-c)),a.mangotouch.ly=b,a.mangotouch.lx=c,2<g&&(a.mangotouch.lazy=setTimeout(function(){a.mangotouch.lazy=!1;a.mangotouch.dry=0;a.mangotouch.drx=0;a.mangotouch.tm=0;a.scrollmom.doMomentum(30)},100)))}},c=a.getScrollTop(),l=a.getScrollLeft(),a.mangotouch={sy:c,ly:c,dry:0,sx:l,lx:l,drx:0,lazy:!1,tm:0},a.bind(a.docscroll,"scroll",a.onmangotouch);else{if(e.cantouch||
a.istouchcapable||a.opt.touchbehavior||e.hasmstouch){a.scrollmom=new L(a);a.ontouchstart=function(b){if(b.pointerType&&2!=b.pointerType&&"touch"!=b.pointerType)return!1;a.hasmoving=!1;if(!a.railslocked){var c;if(e.hasmstouch)for(c=b.target?b.target:!1;c;){var g=f(c).getNiceScroll();if(0<g.length&&g[0].me==a.me)break;if(0<g.length)return!1;if("DIV"==c.nodeName&&c.id==a.id)break;c=c.parentNode?c.parentNode:!1}a.cancelScroll();if((c=a.getTarget(b))&&/INPUT/i.test(c.nodeName)&&/range/i.test(c.type))return a.stopPropagation(b);
!("clientX"in b)&&"changedTouches"in b&&(b.clientX=b.changedTouches[0].clientX,b.clientY=b.changedTouches[0].clientY);a.forcescreen&&(g=b,b={original:b.original?b.original:b},b.clientX=g.screenX,b.clientY=g.screenY);a.rail.drag={x:b.clientX,y:b.clientY,sx:a.scroll.x,sy:a.scroll.y,st:a.getScrollTop(),sl:a.getScrollLeft(),pt:2,dl:!1};if(a.ispage||!a.opt.directionlockdeadzone)a.rail.drag.dl="f";else{var g=f(window).width(),d=f(window).height(),q=Math.max(document.body.scrollWidth,document.documentElement.scrollWidth),
h=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight),d=Math.max(0,h-d),g=Math.max(0,q-g);a.rail.drag.ck=!a.rail.scrollable&&a.railh.scrollable?0<d?"v":!1:a.rail.scrollable&&!a.railh.scrollable?0<g?"h":!1:!1;a.rail.drag.ck||(a.rail.drag.dl="f")}a.opt.touchbehavior&&a.isiframe&&e.isie&&(g=a.win.position(),a.rail.drag.x+=g.left,a.rail.drag.y+=g.top);a.hasmoving=!1;a.lastmouseup=!1;a.scrollmom.reset(b.clientX,b.clientY);if(!e.cantouch&&!this.istouchcapable&&!b.pointerType){if(!c||
!/INPUT|SELECT|TEXTAREA/i.test(c.nodeName))return!a.ispage&&e.hasmousecapture&&c.setCapture(),a.opt.touchbehavior?(c.onclick&&!c._onclick&&(c._onclick=c.onclick,c.onclick=function(b){if(a.hasmoving)return!1;c._onclick.call(this,b)}),a.cancelEvent(b)):a.stopPropagation(b);/SUBMIT|CANCEL|BUTTON/i.test(f(c).attr("type"))&&(pc={tg:c,click:!1},a.preventclick=pc)}}};a.ontouchend=function(b){if(!a.rail.drag)return!0;if(2==a.rail.drag.pt){if(b.pointerType&&2!=b.pointerType&&"touch"!=b.pointerType)return!1;
a.scrollmom.doMomentum();a.rail.drag=!1;if(a.hasmoving&&(a.lastmouseup=!0,a.hideCursor(),e.hasmousecapture&&document.releaseCapture(),!e.cantouch))return a.cancelEvent(b)}else if(1==a.rail.drag.pt)return a.onmouseup(b)};var n=a.opt.touchbehavior&&a.isiframe&&!e.hasmousecapture;a.ontouchmove=function(b,c){if(!a.rail.drag||b.targetTouches&&a.opt.preventmultitouchscrolling&&1<b.targetTouches.length||b.pointerType&&2!=b.pointerType&&"touch"!=b.pointerType)return!1;if(2==a.rail.drag.pt){if(e.cantouch&&
e.isios&&"undefined"==typeof b.original)return!0;a.hasmoving=!0;a.preventclick&&!a.preventclick.click&&(a.preventclick.click=a.preventclick.tg.onclick||!1,a.preventclick.tg.onclick=a.onpreventclick);b=f.extend({original:b},b);"changedTouches"in b&&(b.clientX=b.changedTouches[0].clientX,b.clientY=b.changedTouches[0].clientY);if(a.forcescreen){var g=b;b={original:b.original?b.original:b};b.clientX=g.screenX;b.clientY=g.screenY}var d,g=d=0;n&&!c&&(d=a.win.position(),g=-d.left,d=-d.top);var q=b.clientY+
d;d=q-a.rail.drag.y;var h=b.clientX+g,u=h-a.rail.drag.x,k=a.rail.drag.st-d;a.ishwscroll&&a.opt.bouncescroll?0>k?k=Math.round(k/2):k>a.page.maxh&&(k=a.page.maxh+Math.round((k-a.page.maxh)/2)):(0>k&&(q=k=0),k>a.page.maxh&&(k=a.page.maxh,q=0));var l;a.railh&&a.railh.scrollable&&(l=a.isrtlmode?u-a.rail.drag.sl:a.rail.drag.sl-u,a.ishwscroll&&a.opt.bouncescroll?0>l?l=Math.round(l/2):l>a.page.maxw&&(l=a.page.maxw+Math.round((l-a.page.maxw)/2)):(0>l&&(h=l=0),l>a.page.maxw&&(l=a.page.maxw,h=0)));g=!1;if(a.rail.drag.dl)g=
!0,"v"==a.rail.drag.dl?l=a.rail.drag.sl:"h"==a.rail.drag.dl&&(k=a.rail.drag.st);else{d=Math.abs(d);var u=Math.abs(u),z=a.opt.directionlockdeadzone;if("v"==a.rail.drag.ck){if(d>z&&u<=.3*d)return a.rail.drag=!1,!0;u>z&&(a.rail.drag.dl="f",f("body").scrollTop(f("body").scrollTop()))}else if("h"==a.rail.drag.ck){if(u>z&&d<=.3*u)return a.rail.drag=!1,!0;d>z&&(a.rail.drag.dl="f",f("body").scrollLeft(f("body").scrollLeft()))}}a.synched("touchmove",function(){a.rail.drag&&2==a.rail.drag.pt&&(a.prepareTransition&&
a.prepareTransition(0),a.rail.scrollable&&a.setScrollTop(k),a.scrollmom.update(h,q),a.railh&&a.railh.scrollable?(a.setScrollLeft(l),a.showCursor(k,l)):a.showCursor(k),e.isie10&&document.selection.clear())});e.ischrome&&a.istouchcapable&&(g=!1);if(g)return a.cancelEvent(b)}else if(1==a.rail.drag.pt)return a.onmousemove(b)}}a.onmousedown=function(b,c){if(!a.rail.drag||1==a.rail.drag.pt){if(a.railslocked)return a.cancelEvent(b);a.cancelScroll();a.rail.drag={x:b.clientX,y:b.clientY,sx:a.scroll.x,sy:a.scroll.y,
pt:1,hr:!!c};var g=a.getTarget(b);!a.ispage&&e.hasmousecapture&&g.setCapture();a.isiframe&&!e.hasmousecapture&&(a.saved.csspointerevents=a.doc.css("pointer-events"),a.css(a.doc,{"pointer-events":"none"}));a.hasmoving=!1;return a.cancelEvent(b)}};a.onmouseup=function(b){if(a.rail.drag){if(1!=a.rail.drag.pt)return!0;e.hasmousecapture&&document.releaseCapture();a.isiframe&&!e.hasmousecapture&&a.doc.css("pointer-events",a.saved.csspointerevents);a.rail.drag=!1;a.hasmoving&&a.triggerScrollEnd();return a.cancelEvent(b)}};
a.onmousemove=function(b){if(a.rail.drag&&1==a.rail.drag.pt){if(e.ischrome&&0==b.which)return a.onmouseup(b);a.cursorfreezed=!0;a.hasmoving=!0;if(a.rail.drag.hr){a.scroll.x=a.rail.drag.sx+(b.clientX-a.rail.drag.x);0>a.scroll.x&&(a.scroll.x=0);var c=a.scrollvaluemaxw;a.scroll.x>c&&(a.scroll.x=c)}else a.scroll.y=a.rail.drag.sy+(b.clientY-a.rail.drag.y),0>a.scroll.y&&(a.scroll.y=0),c=a.scrollvaluemax,a.scroll.y>c&&(a.scroll.y=c);a.synched("mousemove",function(){a.rail.drag&&1==a.rail.drag.pt&&(a.showCursor(),
a.rail.drag.hr?a.hasreversehr?a.doScrollLeft(a.scrollvaluemaxw-Math.round(a.scroll.x*a.scrollratio.x),a.opt.cursordragspeed):a.doScrollLeft(Math.round(a.scroll.x*a.scrollratio.x),a.opt.cursordragspeed):a.doScrollTop(Math.round(a.scroll.y*a.scrollratio.y),a.opt.cursordragspeed))});return a.cancelEvent(b)}};if(e.cantouch||a.opt.touchbehavior)a.onpreventclick=function(b){if(a.preventclick)return a.preventclick.tg.onclick=a.preventclick.click,a.preventclick=!1,a.cancelEvent(b)},a.bind(a.win,"mousedown",
a.ontouchstart),a.onclick=e.isios?!1:function(b){return a.lastmouseup?(a.lastmouseup=!1,a.cancelEvent(b)):!0},a.opt.grabcursorenabled&&e.cursorgrabvalue&&(a.css(a.ispage?a.doc:a.win,{cursor:e.cursorgrabvalue}),a.css(a.rail,{cursor:e.cursorgrabvalue}));else{var p=function(b){if(a.selectiondrag){if(b){var c=a.win.outerHeight();b=b.pageY-a.selectiondrag.top;0<b&&b<c&&(b=0);b>=c&&(b-=c);a.selectiondrag.df=b}0!=a.selectiondrag.df&&(a.doScrollBy(2*-Math.floor(a.selectiondrag.df/6)),a.debounced("doselectionscroll",
function(){p()},50))}};a.hasTextSelected="getSelection"in document?function(){return 0<document.getSelection().rangeCount}:"selection"in document?function(){return"None"!=document.selection.type}:function(){return!1};a.onselectionstart=function(b){a.ispage||(a.selectiondrag=a.win.offset())};a.onselectionend=function(b){a.selectiondrag=!1};a.onselectiondrag=function(b){a.selectiondrag&&a.hasTextSelected()&&a.debounced("selectionscroll",function(){p(b)},250)}}e.hasw3ctouch?(a.css(a.rail,{"touch-action":"none"}),
a.css(a.cursor,{"touch-action":"none"}),a.bind(a.win,"pointerdown",a.ontouchstart),a.bind(document,"pointerup",a.ontouchend),a.bind(document,"pointermove",a.ontouchmove)):e.hasmstouch?(a.css(a.rail,{"-ms-touch-action":"none"}),a.css(a.cursor,{"-ms-touch-action":"none"}),a.bind(a.win,"MSPointerDown",a.ontouchstart),a.bind(document,"MSPointerUp",a.ontouchend),a.bind(document,"MSPointerMove",a.ontouchmove),a.bind(a.cursor,"MSGestureHold",function(a){a.preventDefault()}),a.bind(a.cursor,"contextmenu",
function(a){a.preventDefault()})):this.istouchcapable&&(a.bind(a.win,"touchstart",a.ontouchstart),a.bind(document,"touchend",a.ontouchend),a.bind(document,"touchcancel",a.ontouchend),a.bind(document,"touchmove",a.ontouchmove));if(a.opt.cursordragontouch||!e.cantouch&&!a.opt.touchbehavior)a.rail.css({cursor:"default"}),a.railh&&a.railh.css({cursor:"default"}),a.jqbind(a.rail,"mouseenter",function(){if(!a.ispage&&!a.win.is(":visible"))return!1;a.canshowonmouseevent&&a.showCursor();a.rail.active=!0}),
a.jqbind(a.rail,"mouseleave",function(){a.rail.active=!1;a.rail.drag||a.hideCursor()}),a.opt.sensitiverail&&(a.bind(a.rail,"click",function(b){a.doRailClick(b,!1,!1)}),a.bind(a.rail,"dblclick",function(b){a.doRailClick(b,!0,!1)}),a.bind(a.cursor,"click",function(b){a.cancelEvent(b)}),a.bind(a.cursor,"dblclick",function(b){a.cancelEvent(b)})),a.railh&&(a.jqbind(a.railh,"mouseenter",function(){if(!a.ispage&&!a.win.is(":visible"))return!1;a.canshowonmouseevent&&a.showCursor();a.rail.active=!0}),a.jqbind(a.railh,
"mouseleave",function(){a.rail.active=!1;a.rail.drag||a.hideCursor()}),a.opt.sensitiverail&&(a.bind(a.railh,"click",function(b){a.doRailClick(b,!1,!0)}),a.bind(a.railh,"dblclick",function(b){a.doRailClick(b,!0,!0)}),a.bind(a.cursorh,"click",function(b){a.cancelEvent(b)}),a.bind(a.cursorh,"dblclick",function(b){a.cancelEvent(b)})));e.cantouch||a.opt.touchbehavior?(a.bind(e.hasmousecapture?a.win:document,"mouseup",a.ontouchend),a.bind(document,"mousemove",a.ontouchmove),a.onclick&&a.bind(document,"click",
a.onclick),a.opt.cursordragontouch&&(a.bind(a.cursor,"mousedown",a.onmousedown),a.bind(a.cursor,"mouseup",a.onmouseup),a.cursorh&&a.bind(a.cursorh,"mousedown",function(b){a.onmousedown(b,!0)}),a.cursorh&&a.bind(a.cursorh,"mouseup",a.onmouseup))):(a.bind(e.hasmousecapture?a.win:document,"mouseup",a.onmouseup),a.bind(document,"mousemove",a.onmousemove),a.onclick&&a.bind(document,"click",a.onclick),a.bind(a.cursor,"mousedown",a.onmousedown),a.bind(a.cursor,"mouseup",a.onmouseup),a.railh&&(a.bind(a.cursorh,
"mousedown",function(b){a.onmousedown(b,!0)}),a.bind(a.cursorh,"mouseup",a.onmouseup)),!a.ispage&&a.opt.enablescrollonselection&&(a.bind(a.win[0],"mousedown",a.onselectionstart),a.bind(document,"mouseup",a.onselectionend),a.bind(a.cursor,"mouseup",a.onselectionend),a.cursorh&&a.bind(a.cursorh,"mouseup",a.onselectionend),a.bind(document,"mousemove",a.onselectiondrag)),a.zoom&&(a.jqbind(a.zoom,"mouseenter",function(){a.canshowonmouseevent&&a.showCursor();a.rail.active=!0}),a.jqbind(a.zoom,"mouseleave",
function(){a.rail.active=!1;a.rail.drag||a.hideCursor()})));a.opt.enablemousewheel&&(a.isiframe||a.bind(e.isie&&a.ispage?document:a.win,"mousewheel",a.onmousewheel),a.bind(a.rail,"mousewheel",a.onmousewheel),a.railh&&a.bind(a.railh,"mousewheel",a.onmousewheelhr));a.ispage||e.cantouch||/HTML|^BODY/.test(a.win[0].nodeName)||(a.win.attr("tabindex")||a.win.attr({tabindex:N++}),a.jqbind(a.win,"focus",function(b){y=a.getTarget(b).id||!0;a.hasfocus=!0;a.canshowonmouseevent&&a.noticeCursor()}),a.jqbind(a.win,
"blur",function(b){y=!1;a.hasfocus=!1}),a.jqbind(a.win,"mouseenter",function(b){D=a.getTarget(b).id||!0;a.hasmousefocus=!0;a.canshowonmouseevent&&a.noticeCursor()}),a.jqbind(a.win,"mouseleave",function(){D=!1;a.hasmousefocus=!1;a.rail.drag||a.hideCursor()}))}a.onkeypress=function(b){if(a.railslocked&&0==a.page.maxh)return!0;b=b?b:window.e;var c=a.getTarget(b);if(c&&/INPUT|TEXTAREA|SELECT|OPTION/.test(c.nodeName)&&(!c.getAttribute("type")&&!c.type||!/submit|button|cancel/i.tp)||f(c).attr("contenteditable"))return!0;
if(a.hasfocus||a.hasmousefocus&&!y||a.ispage&&!y&&!D){c=b.keyCode;if(a.railslocked&&27!=c)return a.cancelEvent(b);var g=b.ctrlKey||!1,d=b.shiftKey||!1,e=!1;switch(c){case 38:case 63233:a.doScrollBy(72);e=!0;break;case 40:case 63235:a.doScrollBy(-72);e=!0;break;case 37:case 63232:a.railh&&(g?a.doScrollLeft(0):a.doScrollLeftBy(72),e=!0);break;case 39:case 63234:a.railh&&(g?a.doScrollLeft(a.page.maxw):a.doScrollLeftBy(-72),e=!0);break;case 33:case 63276:a.doScrollBy(a.view.h);e=!0;break;case 34:case 63277:a.doScrollBy(-a.view.h);
e=!0;break;case 36:case 63273:a.railh&&g?a.doScrollPos(0,0):a.doScrollTo(0);e=!0;break;case 35:case 63275:a.railh&&g?a.doScrollPos(a.page.maxw,a.page.maxh):a.doScrollTo(a.page.maxh);e=!0;break;case 32:a.opt.spacebarenabled&&(d?a.doScrollBy(a.view.h):a.doScrollBy(-a.view.h),e=!0);break;case 27:a.zoomactive&&(a.doZoom(),e=!0)}if(e)return a.cancelEvent(b)}};a.opt.enablekeyboard&&a.bind(document,e.isopera&&!e.isopera12?"keypress":"keydown",a.onkeypress);a.bind(document,"keydown",function(b){b.ctrlKey&&
(a.wheelprevented=!0)});a.bind(document,"keyup",function(b){b.ctrlKey||(a.wheelprevented=!1)});a.bind(window,"blur",function(b){a.wheelprevented=!1});a.bind(window,"resize",a.lazyResize);a.bind(window,"orientationchange",a.lazyResize);a.bind(window,"load",a.lazyResize);if(e.ischrome&&!a.ispage&&!a.haswrapper){var r=a.win.attr("style"),c=parseFloat(a.win.css("width"))+1;a.win.css("width",c);a.synched("chromefix",function(){a.win.attr("style",r)})}a.onAttributeChange=function(b){a.lazyResize(a.isieold?
250:30)};!1!==v&&(a.observerbody=new v(function(b){b.forEach(function(b){if("attributes"==b.type)return f("body").hasClass("modal-open")?a.hide():a.show()});if(document.body.scrollHeight!=a.page.maxh)return a.lazyResize(30)}),a.observerbody.observe(document.body,{childList:!0,subtree:!0,characterData:!1,attributes:!0,attributeFilter:["class"]}));a.ispage||a.haswrapper||(!1!==v?(a.observer=new v(function(b){b.forEach(a.onAttributeChange)}),a.observer.observe(a.win[0],{childList:!0,characterData:!1,
attributes:!0,subtree:!1}),a.observerremover=new v(function(b){b.forEach(function(b){if(0<b.removedNodes.length)for(var c in b.removedNodes)if(a&&b.removedNodes[c]==a.win[0])return a.remove()})}),a.observerremover.observe(a.win[0].parentNode,{childList:!0,characterData:!1,attributes:!1,subtree:!1})):(a.bind(a.win,e.isie&&!e.isie9?"propertychange":"DOMAttrModified",a.onAttributeChange),e.isie9&&a.win[0].attachEvent("onpropertychange",a.onAttributeChange),a.bind(a.win,"DOMNodeRemoved",function(b){b.target==
a.win[0]&&a.remove()})));!a.ispage&&a.opt.boxzoom&&a.bind(window,"resize",a.resizeZoom);a.istextarea&&a.bind(a.win,"mouseup",a.lazyResize);a.lazyResize(30)}if("IFRAME"==this.doc[0].nodeName){var M=function(){a.iframexd=!1;var b;try{b="contentDocument"in this?this.contentDocument:this.contentWindow.document}catch(c){a.iframexd=!0,b=!1}if(a.iframexd)return"console"in window&&console.log("NiceScroll error: policy restriced iframe"),!0;a.forcescreen=!0;a.isiframe&&(a.iframe={doc:f(b),html:a.doc.contents().find("html")[0],
body:a.doc.contents().find("body")[0]},a.getContentSize=function(){return{w:Math.max(a.iframe.html.scrollWidth,a.iframe.body.scrollWidth),h:Math.max(a.iframe.html.scrollHeight,a.iframe.body.scrollHeight)}},a.docscroll=f(a.iframe.body));if(!e.isios&&a.opt.iframeautoresize&&!a.isiframe){a.win.scrollTop(0);a.doc.height("");var g=Math.max(b.getElementsByTagName("html")[0].scrollHeight,b.body.scrollHeight);a.doc.height(g)}a.lazyResize(30);e.isie7&&a.css(f(a.iframe.html),{"overflow-y":"hidden"});a.css(f(a.iframe.body),
{"overflow-y":"hidden"});e.isios&&a.haswrapper&&a.css(f(b.body),{"-webkit-transform":"translate3d(0,0,0)"});"contentWindow"in this?a.bind(this.contentWindow,"scroll",a.onscroll):a.bind(b,"scroll",a.onscroll);a.opt.enablemousewheel&&a.bind(b,"mousewheel",a.onmousewheel);a.opt.enablekeyboard&&a.bind(b,e.isopera?"keypress":"keydown",a.onkeypress);if(e.cantouch||a.opt.touchbehavior)a.bind(b,"mousedown",a.ontouchstart),a.bind(b,"mousemove",function(b){return a.ontouchmove(b,!0)}),a.opt.grabcursorenabled&&
e.cursorgrabvalue&&a.css(f(b.body),{cursor:e.cursorgrabvalue});a.bind(b,"mouseup",a.ontouchend);a.zoom&&(a.opt.dblclickzoom&&a.bind(b,"dblclick",a.doZoom),a.ongesturezoom&&a.bind(b,"gestureend",a.ongesturezoom))};this.doc[0].readyState&&"complete"==this.doc[0].readyState&&setTimeout(function(){M.call(a.doc[0],!1)},500);a.bind(this.doc,"load",M)}};this.showCursor=function(b,c){a.cursortimeout&&(clearTimeout(a.cursortimeout),a.cursortimeout=0);if(a.rail){a.autohidedom&&(a.autohidedom.stop().css({opacity:a.opt.cursoropacitymax}),
a.cursoractive=!0);a.rail.drag&&1==a.rail.drag.pt||("undefined"!=typeof b&&!1!==b&&(a.scroll.y=Math.round(1*b/a.scrollratio.y)),"undefined"!=typeof c&&(a.scroll.x=Math.round(1*c/a.scrollratio.x)));a.cursor.css({height:a.cursorheight,top:a.scroll.y});if(a.cursorh){var d=a.hasreversehr?a.scrollvaluemaxw-a.scroll.x:a.scroll.x;!a.rail.align&&a.rail.visibility?a.cursorh.css({width:a.cursorwidth,left:d+a.rail.width}):a.cursorh.css({width:a.cursorwidth,left:d});a.cursoractive=!0}a.zoom&&a.zoom.stop().css({opacity:a.opt.cursoropacitymax})}};
this.hideCursor=function(b){a.cursortimeout||!a.rail||!a.autohidedom||a.hasmousefocus&&"leave"==a.opt.autohidemode||(a.cursortimeout=setTimeout(function(){a.rail.active&&a.showonmouseevent||(a.autohidedom.stop().animate({opacity:a.opt.cursoropacitymin}),a.zoom&&a.zoom.stop().animate({opacity:a.opt.cursoropacitymin}),a.cursoractive=!1);a.cursortimeout=0},b||a.opt.hidecursordelay))};this.noticeCursor=function(b,c,d){a.showCursor(c,d);a.rail.active||a.hideCursor(b)};this.getContentSize=a.ispage?function(){return{w:Math.max(document.body.scrollWidth,
document.documentElement.scrollWidth),h:Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)}}:a.haswrapper?function(){return{w:a.doc.outerWidth()+parseInt(a.win.css("paddingLeft"))+parseInt(a.win.css("paddingRight")),h:a.doc.outerHeight()+parseInt(a.win.css("paddingTop"))+parseInt(a.win.css("paddingBottom"))}}:function(){return{w:a.docscroll[0].scrollWidth,h:a.docscroll[0].scrollHeight}};this.onResize=function(b,c){if(!a||!a.win)return!1;if(!a.haswrapper&&!a.ispage){if("none"==
a.win.css("display"))return a.visibility&&a.hideRail().hideRailHr(),!1;a.hidden||a.visibility||a.showRail().showRailHr()}var d=a.page.maxh,e=a.page.maxw,f=a.view.h,h=a.view.w;a.view={w:a.ispage?a.win.width():parseInt(a.win[0].clientWidth),h:a.ispage?a.win.height():parseInt(a.win[0].clientHeight)};a.page=c?c:a.getContentSize();a.page.maxh=Math.max(0,a.page.h-a.view.h);a.page.maxw=Math.max(0,a.page.w-a.view.w);if(a.page.maxh==d&&a.page.maxw==e&&a.view.w==h&&a.view.h==f){if(a.ispage)return a;d=a.win.offset();
if(a.lastposition&&(e=a.lastposition,e.top==d.top&&e.left==d.left))return a;a.lastposition=d}0==a.page.maxh?(a.hideRail(),a.scrollvaluemax=0,a.scroll.y=0,a.scrollratio.y=0,a.cursorheight=0,a.setScrollTop(0),a.rail.scrollable=!1):(a.page.maxh-=a.opt.railpadding.top+a.opt.railpadding.bottom,a.rail.scrollable=!0);0==a.page.maxw?(a.hideRailHr(),a.scrollvaluemaxw=0,a.scroll.x=0,a.scrollratio.x=0,a.cursorwidth=0,a.setScrollLeft(0),a.railh.scrollable=!1):(a.page.maxw-=a.opt.railpadding.left+a.opt.railpadding.right,
a.railh.scrollable=!0);a.railslocked=a.locked||0==a.page.maxh&&0==a.page.maxw;if(a.railslocked)return a.ispage||a.updateScrollBar(a.view),!1;a.hidden||a.visibility?a.hidden||a.railh.visibility||a.showRailHr():a.showRail().showRailHr();a.istextarea&&a.win.css("resize")&&"none"!=a.win.css("resize")&&(a.view.h-=20);a.cursorheight=Math.min(a.view.h,Math.round(a.view.h/a.page.h*a.view.h));a.cursorheight=a.opt.cursorfixedheight?a.opt.cursorfixedheight:Math.max(a.opt.cursorminheight,a.cursorheight);a.cursorwidth=
Math.min(a.view.w,Math.round(a.view.w/a.page.w*a.view.w));a.cursorwidth=a.opt.cursorfixedheight?a.opt.cursorfixedheight:Math.max(a.opt.cursorminheight,a.cursorwidth);a.scrollvaluemax=a.view.h-a.cursorheight-a.cursor.hborder-(a.opt.railpadding.top+a.opt.railpadding.bottom);a.railh&&(a.railh.width=0<a.page.maxh?a.view.w-a.rail.width:a.view.w,a.scrollvaluemaxw=a.railh.width-a.cursorwidth-a.cursorh.wborder-(a.opt.railpadding.left+a.opt.railpadding.right));a.ispage||a.updateScrollBar(a.view);a.scrollratio=
{x:a.page.maxw/a.scrollvaluemaxw,y:a.page.maxh/a.scrollvaluemax};a.getScrollTop()>a.page.maxh?a.doScrollTop(a.page.maxh):(a.scroll.y=Math.round(a.getScrollTop()*(1/a.scrollratio.y)),a.scroll.x=Math.round(a.getScrollLeft()*(1/a.scrollratio.x)),a.cursoractive&&a.noticeCursor());a.scroll.y&&0==a.getScrollTop()&&a.doScrollTo(Math.floor(a.scroll.y*a.scrollratio.y));return a};this.resize=a.onResize;this.lazyResize=function(b){b=isNaN(b)?30:b;a.debounced("resize",a.resize,b);return a};this.jqbind=function(b,
c,d){a.events.push({e:b,n:c,f:d,q:!0});f(b).bind(c,d)};this.bind=function(b,c,d,f){var h="jquery"in b?b[0]:b;"mousewheel"==c?window.addEventListener||"onwheel"in document?a._bind(h,"wheel",d,f||!1):(b="undefined"!=typeof document.onmousewheel?"mousewheel":"DOMMouseScroll",n(h,b,d,f||!1),"DOMMouseScroll"==b&&n(h,"MozMousePixelScroll",d,f||!1)):h.addEventListener?(e.cantouch&&/mouseup|mousedown|mousemove/.test(c)&&a._bind(h,"mousedown"==c?"touchstart":"mouseup"==c?"touchend":"touchmove",function(a){if(a.touches){if(2>
a.touches.length){var b=a.touches.length?a.touches[0]:a;b.original=a;d.call(this,b)}}else a.changedTouches&&(b=a.changedTouches[0],b.original=a,d.call(this,b))},f||!1),a._bind(h,c,d,f||!1),e.cantouch&&"mouseup"==c&&a._bind(h,"touchcancel",d,f||!1)):a._bind(h,c,function(b){(b=b||window.event||!1)&&b.srcElement&&(b.target=b.srcElement);"pageY"in b||(b.pageX=b.clientX+document.documentElement.scrollLeft,b.pageY=b.clientY+document.documentElement.scrollTop);return!1===d.call(h,b)||!1===f?a.cancelEvent(b):
!0})};e.haseventlistener?(this._bind=function(b,c,d,e){a.events.push({e:b,n:c,f:d,b:e,q:!1});b.addEventListener(c,d,e||!1)},this.cancelEvent=function(a){if(!a)return!1;a=a.original?a.original:a;a.preventDefault();a.stopPropagation();a.preventManipulation&&a.preventManipulation();return!1},this.stopPropagation=function(a){if(!a)return!1;a=a.original?a.original:a;a.stopPropagation();return!1},this._unbind=function(a,c,d,e){a.removeEventListener(c,d,e)}):(this._bind=function(b,c,d,e){a.events.push({e:b,
n:c,f:d,b:e,q:!1});b.attachEvent?b.attachEvent("on"+c,d):b["on"+c]=d},this.cancelEvent=function(a){a=window.event||!1;if(!a)return!1;a.cancelBubble=!0;a.cancel=!0;return a.returnValue=!1},this.stopPropagation=function(a){a=window.event||!1;if(!a)return!1;a.cancelBubble=!0;return!1},this._unbind=function(a,c,d,e){a.detachEvent?a.detachEvent("on"+c,d):a["on"+c]=!1});this.unbindAll=function(){for(var b=0;b<a.events.length;b++){var c=a.events[b];c.q?c.e.unbind(c.n,c.f):a._unbind(c.e,c.n,c.f,c.b)}};this.showRail=
function(){0==a.page.maxh||!a.ispage&&"none"==a.win.css("display")||(a.visibility=!0,a.rail.visibility=!0,a.rail.css("display","block"));return a};this.showRailHr=function(){if(!a.railh)return a;0==a.page.maxw||!a.ispage&&"none"==a.win.css("display")||(a.railh.visibility=!0,a.railh.css("display","block"));return a};this.hideRail=function(){a.visibility=!1;a.rail.visibility=!1;a.rail.css("display","none");return a};this.hideRailHr=function(){if(!a.railh)return a;a.railh.visibility=!1;a.railh.css("display",
"none");return a};this.show=function(){a.hidden=!1;a.railslocked=!1;return a.showRail().showRailHr()};this.hide=function(){a.hidden=!0;a.railslocked=!0;return a.hideRail().hideRailHr()};this.toggle=function(){return a.hidden?a.show():a.hide()};this.remove=function(){a.stop();a.cursortimeout&&clearTimeout(a.cursortimeout);a.doZoomOut();a.unbindAll();e.isie9&&a.win[0].detachEvent("onpropertychange",a.onAttributeChange);!1!==a.observer&&a.observer.disconnect();!1!==a.observerremover&&a.observerremover.disconnect();
!1!==a.observerbody&&a.observerbody.disconnect();a.events=null;a.cursor&&a.cursor.remove();a.cursorh&&a.cursorh.remove();a.rail&&a.rail.remove();a.railh&&a.railh.remove();a.zoom&&a.zoom.remove();for(var b=0;b<a.saved.css.length;b++){var c=a.saved.css[b];c[0].css(c[1],"undefined"==typeof c[2]?"":c[2])}a.saved=!1;a.me.data("__nicescroll","");var d=f.nicescroll;d.each(function(b){if(this&&this.id===a.id){delete d[b];for(var c=++b;c<d.length;c++,b++)d[b]=d[c];d.length--;d.length&&delete d[d.length]}});
for(var h in a)a[h]=null,delete a[h];a=null};this.scrollstart=function(b){this.onscrollstart=b;return a};this.scrollend=function(b){this.onscrollend=b;return a};this.scrollcancel=function(b){this.onscrollcancel=b;return a};this.zoomin=function(b){this.onzoomin=b;return a};this.zoomout=function(b){this.onzoomout=b;return a};this.isScrollable=function(a){a=a.target?a.target:a;if("OPTION"==a.nodeName)return!0;for(;a&&1==a.nodeType&&!/^BODY|HTML/.test(a.nodeName);){var c=f(a),c=c.css("overflowY")||c.css("overflowX")||
c.css("overflow")||"";if(/scroll|auto/.test(c))return a.clientHeight!=a.scrollHeight;a=a.parentNode?a.parentNode:!1}return!1};this.getViewport=function(a){for(a=a&&a.parentNode?a.parentNode:!1;a&&1==a.nodeType&&!/^BODY|HTML/.test(a.nodeName);){var c=f(a);if(/fixed|absolute/.test(c.css("position")))return c;var d=c.css("overflowY")||c.css("overflowX")||c.css("overflow")||"";if(/scroll|auto/.test(d)&&a.clientHeight!=a.scrollHeight||0<c.getNiceScroll().length)return c;a=a.parentNode?a.parentNode:!1}return!1};
this.triggerScrollEnd=function(){if(a.onscrollend){var b=a.getScrollLeft(),c=a.getScrollTop();a.onscrollend.call(a,{type:"scrollend",current:{x:b,y:c},end:{x:b,y:c}})}};this.onmousewheel=function(b){if(!a.wheelprevented){if(a.railslocked)return a.debounced("checkunlock",a.resize,250),!0;if(a.rail.drag)return a.cancelEvent(b);"auto"==a.opt.oneaxismousemode&&0!=b.deltaX&&(a.opt.oneaxismousemode=!1);if(a.opt.oneaxismousemode&&0==b.deltaX&&!a.rail.scrollable)return a.railh&&a.railh.scrollable?a.onmousewheelhr(b):
!0;var c=+new Date,d=!1;a.opt.preservenativescrolling&&a.checkarea+600<c&&(a.nativescrollingarea=a.isScrollable(b),d=!0);a.checkarea=c;if(a.nativescrollingarea)return!0;if(b=p(b,!1,d))a.checkarea=0;return b}};this.onmousewheelhr=function(b){if(!a.wheelprevented){if(a.railslocked||!a.railh.scrollable)return!0;if(a.rail.drag)return a.cancelEvent(b);var c=+new Date,d=!1;a.opt.preservenativescrolling&&a.checkarea+600<c&&(a.nativescrollingarea=a.isScrollable(b),d=!0);a.checkarea=c;return a.nativescrollingarea?
!0:a.railslocked?a.cancelEvent(b):p(b,!0,d)}};this.stop=function(){a.cancelScroll();a.scrollmon&&a.scrollmon.stop();a.cursorfreezed=!1;a.scroll.y=Math.round(a.getScrollTop()*(1/a.scrollratio.y));a.noticeCursor();return a};this.getTransitionSpeed=function(b){var c=Math.round(10*a.opt.scrollspeed);b=Math.min(c,Math.round(b/20*a.opt.scrollspeed));return 20<b?b:0};a.opt.smoothscroll?a.ishwscroll&&e.hastransition&&a.opt.usetransition&&a.opt.smoothscroll?(this.prepareTransition=function(b,c){var d=c?20<
b?b:0:a.getTransitionSpeed(b),f=d?e.prefixstyle+"transform "+d+"ms ease-out":"";a.lasttransitionstyle&&a.lasttransitionstyle==f||(a.lasttransitionstyle=f,a.doc.css(e.transitionstyle,f));return d},this.doScrollLeft=function(b,c){var d=a.scrollrunning?a.newscrolly:a.getScrollTop();a.doScrollPos(b,d,c)},this.doScrollTop=function(b,c){var d=a.scrollrunning?a.newscrollx:a.getScrollLeft();a.doScrollPos(d,b,c)},this.doScrollPos=function(b,c,d){var f=a.getScrollTop(),h=a.getScrollLeft();(0>(a.newscrolly-
f)*(c-f)||0>(a.newscrollx-h)*(b-h))&&a.cancelScroll();0==a.opt.bouncescroll&&(0>c?c=0:c>a.page.maxh&&(c=a.page.maxh),0>b?b=0:b>a.page.maxw&&(b=a.page.maxw));if(a.scrollrunning&&b==a.newscrollx&&c==a.newscrolly)return!1;a.newscrolly=c;a.newscrollx=b;a.newscrollspeed=d||!1;if(a.timer)return!1;a.timer=setTimeout(function(){var d=a.getScrollTop(),f=a.getScrollLeft(),h,k;h=b-f;k=c-d;h=Math.round(Math.sqrt(Math.pow(h,2)+Math.pow(k,2)));h=a.newscrollspeed&&1<a.newscrollspeed?a.newscrollspeed:a.getTransitionSpeed(h);
a.newscrollspeed&&1>=a.newscrollspeed&&(h*=a.newscrollspeed);a.prepareTransition(h,!0);a.timerscroll&&a.timerscroll.tm&&clearInterval(a.timerscroll.tm);0<h&&(!a.scrollrunning&&a.onscrollstart&&a.onscrollstart.call(a,{type:"scrollstart",current:{x:f,y:d},request:{x:b,y:c},end:{x:a.newscrollx,y:a.newscrolly},speed:h}),e.transitionend?a.scrollendtrapped||(a.scrollendtrapped=!0,a.bind(a.doc,e.transitionend,a.onScrollTransitionEnd,!1)):(a.scrollendtrapped&&clearTimeout(a.scrollendtrapped),a.scrollendtrapped=
setTimeout(a.onScrollTransitionEnd,h)),a.timerscroll={bz:new A(d,a.newscrolly,h,0,0,.58,1),bh:new A(f,a.newscrollx,h,0,0,.58,1)},a.cursorfreezed||(a.timerscroll.tm=setInterval(function(){a.showCursor(a.getScrollTop(),a.getScrollLeft())},60)));a.synched("doScroll-set",function(){a.timer=0;a.scrollendtrapped&&(a.scrollrunning=!0);a.setScrollTop(a.newscrolly);a.setScrollLeft(a.newscrollx);if(!a.scrollendtrapped)a.onScrollTransitionEnd()})},50)},this.cancelScroll=function(){if(!a.scrollendtrapped)return!0;
var b=a.getScrollTop(),c=a.getScrollLeft();a.scrollrunning=!1;e.transitionend||clearTimeout(e.transitionend);a.scrollendtrapped=!1;a._unbind(a.doc[0],e.transitionend,a.onScrollTransitionEnd);a.prepareTransition(0);a.setScrollTop(b);a.railh&&a.setScrollLeft(c);a.timerscroll&&a.timerscroll.tm&&clearInterval(a.timerscroll.tm);a.timerscroll=!1;a.cursorfreezed=!1;a.showCursor(b,c);return a},this.onScrollTransitionEnd=function(){a.scrollendtrapped&&a._unbind(a.doc[0],e.transitionend,a.onScrollTransitionEnd);
a.scrollendtrapped=!1;a.prepareTransition(0);a.timerscroll&&a.timerscroll.tm&&clearInterval(a.timerscroll.tm);a.timerscroll=!1;var b=a.getScrollTop(),c=a.getScrollLeft();a.setScrollTop(b);a.railh&&a.setScrollLeft(c);a.noticeCursor(!1,b,c);a.cursorfreezed=!1;0>b?b=0:b>a.page.maxh&&(b=a.page.maxh);0>c?c=0:c>a.page.maxw&&(c=a.page.maxw);if(b!=a.newscrolly||c!=a.newscrollx)return a.doScrollPos(c,b,a.opt.snapbackspeed);a.onscrollend&&a.scrollrunning&&a.triggerScrollEnd();a.scrollrunning=!1}):(this.doScrollLeft=
function(b,c){var d=a.scrollrunning?a.newscrolly:a.getScrollTop();a.doScrollPos(b,d,c)},this.doScrollTop=function(b,c){var d=a.scrollrunning?a.newscrollx:a.getScrollLeft();a.doScrollPos(d,b,c)},this.doScrollPos=function(b,c,d){function e(){if(a.cancelAnimationFrame)return!0;a.scrollrunning=!0;if(n=1-n)return a.timer=s(e)||1;var b=0,c,d,g=d=a.getScrollTop();if(a.dst.ay){g=a.bzscroll?a.dst.py+a.bzscroll.getNow()*a.dst.ay:a.newscrolly;c=g-d;if(0>c&&g<a.newscrolly||0<c&&g>a.newscrolly)g=a.newscrolly;
a.setScrollTop(g);g==a.newscrolly&&(b=1)}else b=1;d=c=a.getScrollLeft();if(a.dst.ax){d=a.bzscroll?a.dst.px+a.bzscroll.getNow()*a.dst.ax:a.newscrollx;c=d-c;if(0>c&&d<a.newscrollx||0<c&&d>a.newscrollx)d=a.newscrollx;a.setScrollLeft(d);d==a.newscrollx&&(b+=1)}else b+=1;2==b?(a.timer=0,a.cursorfreezed=!1,a.bzscroll=!1,a.scrollrunning=!1,0>g?g=0:g>a.page.maxh&&(g=a.page.maxh),0>d?d=0:d>a.page.maxw&&(d=a.page.maxw),d!=a.newscrollx||g!=a.newscrolly?a.doScrollPos(d,g):a.onscrollend&&a.triggerScrollEnd()):
a.timer=s(e)||1}c="undefined"==typeof c||!1===c?a.getScrollTop(!0):c;if(a.timer&&a.newscrolly==c&&a.newscrollx==b)return!0;a.timer&&t(a.timer);a.timer=0;var f=a.getScrollTop(),h=a.getScrollLeft();(0>(a.newscrolly-f)*(c-f)||0>(a.newscrollx-h)*(b-h))&&a.cancelScroll();a.newscrolly=c;a.newscrollx=b;a.bouncescroll&&a.rail.visibility||(0>a.newscrolly?a.newscrolly=0:a.newscrolly>a.page.maxh&&(a.newscrolly=a.page.maxh));a.bouncescroll&&a.railh.visibility||(0>a.newscrollx?a.newscrollx=0:a.newscrollx>a.page.maxw&&
(a.newscrollx=a.page.maxw));a.dst={};a.dst.x=b-h;a.dst.y=c-f;a.dst.px=h;a.dst.py=f;var k=Math.round(Math.sqrt(Math.pow(a.dst.x,2)+Math.pow(a.dst.y,2)));a.dst.ax=a.dst.x/k;a.dst.ay=a.dst.y/k;var l=0,m=k;0==a.dst.x?(l=f,m=c,a.dst.ay=1,a.dst.py=0):0==a.dst.y&&(l=h,m=b,a.dst.ax=1,a.dst.px=0);k=a.getTransitionSpeed(k);d&&1>=d&&(k*=d);a.bzscroll=0<k?a.bzscroll?a.bzscroll.update(m,k):new A(l,m,k,0,1,0,1):!1;if(!a.timer){(f==a.page.maxh&&c>=a.page.maxh||h==a.page.maxw&&b>=a.page.maxw)&&a.checkContentSize();
var n=1;a.cancelAnimationFrame=!1;a.timer=1;a.onscrollstart&&!a.scrollrunning&&a.onscrollstart.call(a,{type:"scrollstart",current:{x:h,y:f},request:{x:b,y:c},end:{x:a.newscrollx,y:a.newscrolly},speed:k});e();(f==a.page.maxh&&c>=f||h==a.page.maxw&&b>=h)&&a.checkContentSize();a.noticeCursor()}},this.cancelScroll=function(){a.timer&&t(a.timer);a.timer=0;a.bzscroll=!1;a.scrollrunning=!1;return a}):(this.doScrollLeft=function(b,c){var d=a.getScrollTop();a.doScrollPos(b,d,c)},this.doScrollTop=function(b,
c){var d=a.getScrollLeft();a.doScrollPos(d,b,c)},this.doScrollPos=function(b,c,d){var e=b>a.page.maxw?a.page.maxw:b;0>e&&(e=0);var f=c>a.page.maxh?a.page.maxh:c;0>f&&(f=0);a.synched("scroll",function(){a.setScrollTop(f);a.setScrollLeft(e)})},this.cancelScroll=function(){});this.doScrollBy=function(b,c){var d=0,d=c?Math.floor((a.scroll.y-b)*a.scrollratio.y):(a.timer?a.newscrolly:a.getScrollTop(!0))-b;if(a.bouncescroll){var e=Math.round(a.view.h/2);d<-e?d=-e:d>a.page.maxh+e&&(d=a.page.maxh+e)}a.cursorfreezed=
!1;e=a.getScrollTop(!0);if(0>d&&0>=e)return a.noticeCursor();if(d>a.page.maxh&&e>=a.page.maxh)return a.checkContentSize(),a.noticeCursor();a.doScrollTop(d)};this.doScrollLeftBy=function(b,c){var d=0,d=c?Math.floor((a.scroll.x-b)*a.scrollratio.x):(a.timer?a.newscrollx:a.getScrollLeft(!0))-b;if(a.bouncescroll){var e=Math.round(a.view.w/2);d<-e?d=-e:d>a.page.maxw+e&&(d=a.page.maxw+e)}a.cursorfreezed=!1;e=a.getScrollLeft(!0);if(0>d&&0>=e||d>a.page.maxw&&e>=a.page.maxw)return a.noticeCursor();a.doScrollLeft(d)};
this.doScrollTo=function(b,c){c&&Math.round(b*a.scrollratio.y);a.cursorfreezed=!1;a.doScrollTop(b)};this.checkContentSize=function(){var b=a.getContentSize();b.h==a.page.h&&b.w==a.page.w||a.resize(!1,b)};a.onscroll=function(b){a.rail.drag||a.cursorfreezed||a.synched("scroll",function(){a.scroll.y=Math.round(a.getScrollTop()*(1/a.scrollratio.y));a.railh&&(a.scroll.x=Math.round(a.getScrollLeft()*(1/a.scrollratio.x)));a.noticeCursor()})};a.bind(a.docscroll,"scroll",a.onscroll);this.doZoomIn=function(b){if(!a.zoomactive){a.zoomactive=
!0;a.zoomrestore={style:{}};var c="position top left zIndex backgroundColor marginTop marginBottom marginLeft marginRight".split(" "),d=a.win[0].style,h;for(h in c){var k=c[h];a.zoomrestore.style[k]="undefined"!=typeof d[k]?d[k]:""}a.zoomrestore.style.width=a.win.css("width");a.zoomrestore.style.height=a.win.css("height");a.zoomrestore.padding={w:a.win.outerWidth()-a.win.width(),h:a.win.outerHeight()-a.win.height()};e.isios4&&(a.zoomrestore.scrollTop=f(window).scrollTop(),f(window).scrollTop(0));
a.win.css({position:e.isios4?"absolute":"fixed",top:0,left:0,"z-index":x+100,margin:"0px"});c=a.win.css("backgroundColor");(""==c||/transparent|rgba\(0, 0, 0, 0\)|rgba\(0,0,0,0\)/.test(c))&&a.win.css("backgroundColor","#fff");a.rail.css({"z-index":x+101});a.zoom.css({"z-index":x+102});a.zoom.css("backgroundPosition","0px -18px");a.resizeZoom();a.onzoomin&&a.onzoomin.call(a);return a.cancelEvent(b)}};this.doZoomOut=function(b){if(a.zoomactive)return a.zoomactive=!1,a.win.css("margin",""),a.win.css(a.zoomrestore.style),
e.isios4&&f(window).scrollTop(a.zoomrestore.scrollTop),a.rail.css({"z-index":a.zindex}),a.zoom.css({"z-index":a.zindex}),a.zoomrestore=!1,a.zoom.css("backgroundPosition","0px 0px"),a.onResize(),a.onzoomout&&a.onzoomout.call(a),a.cancelEvent(b)};this.doZoom=function(b){return a.zoomactive?a.doZoomOut(b):a.doZoomIn(b)};this.resizeZoom=function(){if(a.zoomactive){var b=a.getScrollTop();a.win.css({width:f(window).width()-a.zoomrestore.padding.w+"px",height:f(window).height()-a.zoomrestore.padding.h+"px"});
a.onResize();a.setScrollTop(Math.min(a.page.maxh,b))}};this.init();f.nicescroll.push(this)},L=function(f){var c=this;this.nc=f;this.steptime=this.lasttime=this.speedy=this.speedx=this.lasty=this.lastx=0;this.snapy=this.snapx=!1;this.demuly=this.demulx=0;this.lastscrolly=this.lastscrollx=-1;this.timer=this.chky=this.chkx=0;this.time=function(){return+new Date};this.reset=function(f,k){c.stop();var d=c.time();c.steptime=0;c.lasttime=d;c.speedx=0;c.speedy=0;c.lastx=f;c.lasty=k;c.lastscrollx=-1;c.lastscrolly=
-1};this.update=function(f,k){var d=c.time();c.steptime=d-c.lasttime;c.lasttime=d;var d=k-c.lasty,n=f-c.lastx,p=c.nc.getScrollTop(),a=c.nc.getScrollLeft(),p=p+d,a=a+n;c.snapx=0>a||a>c.nc.page.maxw;c.snapy=0>p||p>c.nc.page.maxh;c.speedx=n;c.speedy=d;c.lastx=f;c.lasty=k};this.stop=function(){c.nc.unsynched("domomentum2d");c.timer&&clearTimeout(c.timer);c.timer=0;c.lastscrollx=-1;c.lastscrolly=-1};this.doSnapy=function(f,k){var d=!1;0>k?(k=0,d=!0):k>c.nc.page.maxh&&(k=c.nc.page.maxh,d=!0);0>f?(f=0,d=
!0):f>c.nc.page.maxw&&(f=c.nc.page.maxw,d=!0);d?c.nc.doScrollPos(f,k,c.nc.opt.snapbackspeed):c.nc.triggerScrollEnd()};this.doMomentum=function(f){var k=c.time(),d=f?k+f:c.lasttime;f=c.nc.getScrollLeft();var n=c.nc.getScrollTop(),p=c.nc.page.maxh,a=c.nc.page.maxw;c.speedx=0<a?Math.min(60,c.speedx):0;c.speedy=0<p?Math.min(60,c.speedy):0;d=d&&60>=k-d;if(0>n||n>p||0>f||f>a)d=!1;f=c.speedx&&d?c.speedx:!1;if(c.speedy&&d&&c.speedy||f){var s=Math.max(16,c.steptime);50<s&&(f=s/50,c.speedx*=f,c.speedy*=f,s=
50);c.demulxy=0;c.lastscrollx=c.nc.getScrollLeft();c.chkx=c.lastscrollx;c.lastscrolly=c.nc.getScrollTop();c.chky=c.lastscrolly;var e=c.lastscrollx,r=c.lastscrolly,t=function(){var d=600<c.time()-k?.04:.02;c.speedx&&(e=Math.floor(c.lastscrollx-c.speedx*(1-c.demulxy)),c.lastscrollx=e,0>e||e>a)&&(d=.1);c.speedy&&(r=Math.floor(c.lastscrolly-c.speedy*(1-c.demulxy)),c.lastscrolly=r,0>r||r>p)&&(d=.1);c.demulxy=Math.min(1,c.demulxy+d);c.nc.synched("domomentum2d",function(){c.speedx&&(c.nc.getScrollLeft()!=
c.chkx&&c.stop(),c.chkx=e,c.nc.setScrollLeft(e));c.speedy&&(c.nc.getScrollTop()!=c.chky&&c.stop(),c.chky=r,c.nc.setScrollTop(r));c.timer||(c.nc.hideCursor(),c.doSnapy(e,r))});1>c.demulxy?c.timer=setTimeout(t,s):(c.stop(),c.nc.hideCursor(),c.doSnapy(e,r))};t()}else c.doSnapy(c.nc.getScrollLeft(),c.nc.getScrollTop())}},w=f.fn.scrollTop;f.cssHooks.pageYOffset={get:function(k,c,h){return(c=f.data(k,"__nicescroll")||!1)&&c.ishwscroll?c.getScrollTop():w.call(k)},set:function(k,c){var h=f.data(k,"__nicescroll")||
!1;h&&h.ishwscroll?h.setScrollTop(parseInt(c)):w.call(k,c);return this}};f.fn.scrollTop=function(k){if("undefined"==typeof k){var c=this[0]?f.data(this[0],"__nicescroll")||!1:!1;return c&&c.ishwscroll?c.getScrollTop():w.call(this)}return this.each(function(){var c=f.data(this,"__nicescroll")||!1;c&&c.ishwscroll?c.setScrollTop(parseInt(k)):w.call(f(this),k)})};var B=f.fn.scrollLeft;f.cssHooks.pageXOffset={get:function(k,c,h){return(c=f.data(k,"__nicescroll")||!1)&&c.ishwscroll?c.getScrollLeft():B.call(k)},
set:function(k,c){var h=f.data(k,"__nicescroll")||!1;h&&h.ishwscroll?h.setScrollLeft(parseInt(c)):B.call(k,c);return this}};f.fn.scrollLeft=function(k){if("undefined"==typeof k){var c=this[0]?f.data(this[0],"__nicescroll")||!1:!1;return c&&c.ishwscroll?c.getScrollLeft():B.call(this)}return this.each(function(){var c=f.data(this,"__nicescroll")||!1;c&&c.ishwscroll?c.setScrollLeft(parseInt(k)):B.call(f(this),k)})};var C=function(k){var c=this;this.length=0;this.name="nicescrollarray";this.each=function(d){for(var f=
0,h=0;f<c.length;f++)d.call(c[f],h++);return c};this.push=function(d){c[c.length]=d;c.length++};this.eq=function(d){return c[d]};if(k)for(var h=0;h<k.length;h++){var m=f.data(k[h],"__nicescroll")||!1;m&&(this[this.length]=m,this.length++)}return this};(function(f,c,h){for(var m=0;m<c.length;m++)h(f,c[m])})(C.prototype,"show hide toggle onResize resize remove stop doScrollPos".split(" "),function(f,c){f[c]=function(){var f=arguments;return this.each(function(){this[c].apply(this,f)})}});f.fn.getNiceScroll=
function(k){return"undefined"==typeof k?new C(this):this[k]&&f.data(this[k],"__nicescroll")||!1};f.extend(f.expr[":"],{nicescroll:function(k){return f.data(k,"__nicescroll")?!0:!1}});f.fn.niceScroll=function(k,c){"undefined"!=typeof c||"object"!=typeof k||"jquery"in k||(c=k,k=!1);c=f.extend({},c);var h=new C;"undefined"==typeof c&&(c={});k&&(c.doc=f(k),c.win=f(this));var m=!("doc"in c);m||"win"in c||(c.win=f(this));this.each(function(){var d=f(this).data("__nicescroll")||!1;d||(c.doc=m?f(this):c.doc,
d=new R(c,f(this)),f(this).data("__nicescroll",d));h.push(d)});return 1==h.length?h[0]:h};window.NiceScroll={getjQuery:function(){return f}};f.nicescroll||(f.nicescroll=new C,f.nicescroll.options=I)});

/*
 *	jQuery carouFredSel 6.0.0
 *	Demo's and documentation:
 *	caroufredsel.frebsite.nl
 *
 *	Copyright (c) 2012 Fred Heusschen
 *	www.frebsite.nl
 *
 *	Dual licensed under the MIT and GPL licenses.
 *	http://en.wikipedia.org/wiki/MIT_License
 *	http://en.wikipedia.org/wiki/GNU_General_Public_License
 */


eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(C($){8($.1s.1w){G}$.1s.6n=$.1s.1w=C(u,w){8(1k.S==0){18(I,\'6o 52 7P 1j "\'+1k.4k+\'".\');G 1k}8(1k.S>1){G 1k.1X(C(){$(1k).1w(u,w)})}E y=1k,$14=1k[0],53=K;8(y.1p(\'54\')){53=y.1Q(\'3o\',\'4l\');y.R(\'3o\',[\'4m\',I])}y.55=C(o,a,b){o=3R($14,o);o.D=6p($14,o.D);o.1M=6q($14,o.1M);o.M=6r($14,o.M);o.V=56($14,o.V);o.X=56($14,o.X);o.1a=6s($14,o.1a);o.1q=6t($14,o.1q);o.1h=6u($14,o.1h);8(a){2Z=$.1N(I,{},$.1s.1w.57,o)}7=$.1N(I,{},$.1s.1w.57,o);7.d=6v(7);z.2b=(7.2b==\'4n\'||7.2b==\'1m\')?\'X\':\'V\';E c=y.12(),2v=59($1r,7,\'N\');8(3p(7.25)){7.25=\'7Q\'+F.3S}7.4o=5a(7,2v);7.D=6w(7.D,7,c,b);7[7.d[\'N\']]=6x(7[7.d[\'N\']],7,c);7[7.d[\'1d\']]=6y(7[7.d[\'1d\']],7,c);8(7.2l){8(!3T(7[7.d[\'N\']])){7[7.d[\'N\']]=\'2I%\'}}8(3T(7[7.d[\'N\']])){z.6z=I;z.4p=7[7.d[\'N\']];7[7.d[\'N\']]=4q(2v,z.4p);8(!7.D.L){7.D.T.1c=I}}8(7.2l){7.1R=K;7.1i=[0,0,0,0];7.1A=K;7.D.T.1c=K}O{8(!7.D.L){7=6A(7,2v)}8(!7[7.d[\'N\']]){8(!7.D.T.1c&&Y(7.D[7.d[\'N\']])&&7.D.1t==\'*\'){7[7.d[\'N\']]=7.D.L*7.D[7.d[\'N\']];7.1A=K}O{7[7.d[\'N\']]=\'1c\'}}8(1G(7.1A)){7.1A=(Y(7[7.d[\'N\']]))?\'5b\':K}8(7.D.T.1c){7.D.L=31(c,7,0)}}8(7.D.1t!=\'*\'&&!7.D.T.1c){7.D.T.4r=7.D.L;7.D.L=3U(c,7,0)}7.D.L=32(7.D.L,7,7.D.T.2w,$14);7.D.T.20=7.D.L;8(7.2l){8(!7.D.T.34){7.D.T.34=7.D.L}8(!7.D.T.1Y){7.D.T.1Y=7.D.L}7=5c(7,c,2v)}O{7.1i=6B(7.1i);8(7.1A==\'3q\'){7.1A=\'1m\'}O 8(7.1A==\'5d\'){7.1A=\'35\'}1B(7.1A){Q\'5b\':Q\'1m\':Q\'35\':8(7[7.d[\'N\']]!=\'1c\'){7=5e(7,c);7.1R=I}16;2x:7.1A=K;7.1R=(7.1i[0]==0&&7.1i[1]==0&&7.1i[2]==0&&7.1i[3]==0)?K:I;16}}8(!Y(7.1M.1C)){7.1M.1C=6C}8(1G(7.1M.D)){7.1M.D=(7.2l||7.D.T.1c||7.D.1t!=\'*\')?\'L\':7.D.L}7.M=$.1N(I,{},7.1M,7.M);7.V=$.1N(I,{},7.1M,7.V);7.X=$.1N(I,{},7.1M,7.X);7.1a=$.1N(I,{},7.1M,7.1a);7.M=6D($14,7.M);7.V=5f($14,7.V);7.X=5f($14,7.X);7.1a=6E($14,7.1a);7.1q=6F($14,7.1q);7.1h=6G($14,7.1h);8(7.2m){7.2m=5g(7.2m)}8(7.M.5h){7.M.4s=7.M.5h;2J(\'M.5h\',\'M.4s\')}8(7.M.5i){7.M.4t=7.M.5i;2J(\'M.5i\',\'M.4t\')}8(7.M.5j){7.M.4u=7.M.5j;2J(\'M.5j\',\'M.4u\')}8(7.M.5k){7.M.2K=7.M.5k;2J(\'M.5k\',\'M.2K\')}};y.6H=C(){y.1p(\'54\',I);E a=y.12(),3V=5l(y,[\'6I\',\'6J\',\'3W\',\'3q\',\'35\',\'5d\',\'1m\',\'N\',\'1d\',\'6K\',\'1S\',\'5m\',\'6L\']),5n=\'7R\';1B(3V.3W){Q\'6M\':Q\'7S\':5n=3V.3W;16}$1r.13(3V).13({\'7T\':\'3r\',\'3W\':5n});y.1p(\'6N\',3V).13({\'6I\':\'1m\',\'6J\':\'3X\',\'3W\':\'6M\',\'3q\':0,\'35\':\'M\',\'5d\':\'M\',\'1m\':0,\'6K\':0,\'1S\':0,\'5m\':0,\'6L\':0});4v(a,7);5o(a,7);8(7.2l){5p(7,a)}};y.6O=C(){y.5q();y.11(H(\'5r\',F),C(e,a){e.1f();8(!z.2c){8(7.M.W){7.M.W.36(2y(\'4w\',F))}}z.2c=I;8(7.M.1H){7.M.1H=K;y.R(H(\'3a\',F),a)}G I});y.11(H(\'5s\',F),C(e){e.1f();8(z.21){3Y(U)}G I});y.11(H(\'3a\',F),C(e,a,b){e.1f();1u=3s(1u);8(a&&z.21){U.2c=I;E c=2n()-U.2L;U.1C-=c;8(U.3t){U.3t.1C-=c}8(U.3u){U.3u.1C-=c}3Y(U,K)}8(!z.26&&!z.21){8(b){1u.3v+=2n()-1u.2L}}8(!z.26){8(7.M.W){7.M.W.36(2y(\'6P\',F))}}z.26=I;8(7.M.4t){E d=7.M.2K-1u.3v,3b=2I-1I.2z(d*2I/7.M.2K);7.M.4t.1g($14,3b,d)}G I});y.11(H(\'1H\',F),C(e,b,c,d){e.1f();1u=3s(1u);E v=[b,c,d],t=[\'2M\',\'27\',\'3c\'],a=3d(v,t);b=a[0];c=a[1];d=a[2];8(b!=\'V\'&&b!=\'X\'){b=z.2b}8(!Y(c)){c=0}8(!1l(d)){d=K}8(d){z.2c=K;7.M.1H=I}8(!7.M.1H){e.2d();G 18(F,\'3w 4w: 2o 3e.\')}8(z.26){8(7.M.W){7.M.W.2N(2y(\'4w\',F));7.M.W.2N(2y(\'6P\',F))}}z.26=K;1u.2L=2n();E f=7.M.2K+c;3Z=f-1u.3v;3b=2I-1I.2z(3Z*2I/f);8(7.M.1e){1u.1e=7U(C(){E a=2n()-1u.2L+1u.3v,3b=1I.2z(a*2I/f);7.M.1e.4x.1g(7.M.1e.2p[0],3b)},7.M.1e.5t)}1u.M=7V(C(){8(7.M.1e){7.M.1e.4x.1g(7.M.1e.2p[0],2I)}8(7.M.4u){7.M.4u.1g($14,3b,3Z)}8(z.21){y.R(H(\'1H\',F),b)}O{y.R(H(b,F),7.M)}},3Z);8(7.M.4s){7.M.4s.1g($14,3b,3Z)}G I});y.11(H(\'3f\',F),C(e){e.1f();8(U.2c){U.2c=K;z.26=K;z.21=I;U.2L=2n();2O(U)}O{y.R(H(\'1H\',F))}G I});y.11(H(\'V\',F)+\' \'+H(\'X\',F),C(e,b,f,g,h){e.1f();8(z.2c||y.2e(\':3r\')){e.2d();G 18(F,\'3w 4w 7W 3r: 2o 3e.\')}E i=(Y(7.D.4y))?7.D.4y:7.D.L+1;8(i>J.P){e.2d();G 18(F,\'2o 6Q D (\'+J.P+\' P, \'+i+\' 6R): 2o 3e.\')}E v=[b,f,g,h],t=[\'2f\',\'27/2M\',\'C\',\'3c\'],a=3d(v,t);b=a[0];f=a[1];g=a[2];h=a[3];E k=e.5u.17(F.3x.41.S);8(!1D(b)){b={}}8(1n(g)){b.3g=g}8(1l(h)){b.3y=h}b=$.1N(I,{},7[k],b);8(b.5v&&!b.5v.1g($14,k)){e.2d();G 18(F,\'7X "5v" 7Y K.\')}8(!Y(f)){8(7.D.1t!=\'*\'){f=\'L\'}O{E m=[f,b.D,7[k].D];1j(E a=0,l=m.S;a<l;a++){8(Y(m[a])||m[a]==\'6S\'||m[a]==\'L\'){f=m[a];16}}}1B(f){Q\'6S\':e.2d();G y.1Q(H(k+\'7Z\',F),[b,g]);16;Q\'L\':8(!7.D.T.1c&&7.D.1t==\'*\'){f=7.D.L}16}}8(U.2c){y.R(H(\'3f\',F));y.R(H(\'3y\',F),[k,[b,f,g]]);e.2d();G 18(F,\'3w 80 3e.\')}8(b.1C>0){8(z.21){8(b.3y){y.R(H(\'3y\',F),[k,[b,f,g]])}e.2d();G 18(F,\'3w 81 3e.\')}}1u.3v=0;y.R(H(\'6T\'+k,F),[b,f]);8(7.2m){E s=7.2m,c=[b,f];1j(E j=0,l=s.S;j<l;j++){E d=k;8(!s[j][2]){d=(d==\'V\')?\'X\':\'V\'}8(!s[j][1]){c[0]=s[j][0].1Q(\'3o\',[\'4z\',d])}c[1]=f+s[j][3];s[j][0].R(\'3o\',[\'6T\'+d,c])}}G I});y.11(H(\'82\',F),C(e,b,c){e.1f();E d=y.12();8(!7.1T){8(J.Z==0){8(7.3z){y.R(H(\'X\',F),J.P-1)}G e.2d()}}1U(d,7);8(!Y(c)){8(7.D.T.1c){c=4A(d,7,J.P-1)}O 8(7.D.1t!=\'*\'){E f=(Y(b.D))?b.D:5w(y,7);c=6U(d,7,J.P-1,f)}O{c=7.D.L}c=4B(c,7,b.D,$14)}8(!7.1T){8(J.P-c<J.Z){c=J.P-J.Z}}7.D.T.20=7.D.L;8(7.D.T.1c){E g=31(d,7,J.P-c);8(7.D.L+c<=g&&c<J.P){c++;g=31(d,7,J.P-c)}7.D.L=32(g,7,7.D.T.2w,$14)}O 8(7.D.1t!=\'*\'){E g=3U(d,7,J.P-c);7.D.L=32(g,7,7.D.T.2w,$14)}1U(d,7,I);8(c==0){e.2d();G 18(F,\'0 D 4C 1M: 2o 3e.\')}18(F,\'6V \'+c+\' D 5x.\');J.Z+=c;2g(J.Z>=J.P){J.Z-=J.P}8(!7.1T){8(J.Z==0&&b.4D){b.4D.1g($14,\'V\')}8(!7.3z){3A(7,J.Z,F)}}y.12().17(J.P-c,J.P).6W(y);8(J.P<7.D.L+c){y.12().17(0,(7.D.L+c)-J.P).4E(I).42(y)}E d=y.12(),3h=6X(d,7,c),2h=6Y(d,7),1Z=d.1O(c-1),22=3h.3i(),2q=2h.3i();1U(d,7);E h=0,2A=0;8(7.1A){E p=4F(2h,7);h=p[0];2A=p[1]}E i=(h<0)?7.1i[7.d[3]]:0;E j=K,2P=$();8(7.D.L<c){2P=d.17(7.D.T.20,c);8(b.1V==\'6Z\'){E k=7.D[7.d[\'N\']];j=2P;1Z=2q;5y(j);7.D[7.d[\'N\']]=\'1c\'}}E l=K,3B=2Q(d.17(0,c),7,\'N\'),2i=4G(4H(2h,7,I),7,!7.1R),3C=0,28={},4I={},2r={},2R={},4J={},2S={},5z={},2T=5A(b,7,c,3B);1B(b.1V){Q\'1J\':Q\'1J-1v\':3C=2Q(d.17(0,7.D.L),7,\'N\');16}8(j){7.D[7.d[\'N\']]=k}1U(d,7,I);8(2A>=0){1U(22,7,7.1i[7.d[1]])}8(h>=0){1U(1Z,7,7.1i[7.d[3]])}8(7.1A){7.1i[7.d[1]]=2A;7.1i[7.d[3]]=h}2S[7.d[\'1m\']]=-(3B-i);5z[7.d[\'1m\']]=-(3C-i);4I[7.d[\'1m\']]=2i[7.d[\'N\']];E m=C(){},1P=C(){},1E=C(){},3D=C(){},2B=C(){},5B=C(){},1F=C(){},3E=C(){},1x=C(){},1y=C(){},1K=C(){};1B(b.1V){Q\'3j\':Q\'1J\':Q\'1J-1v\':Q\'1W\':Q\'1W-1v\':l=y.4E().42($1r);16}1B(b.1V){Q\'3j\':Q\'1W\':Q\'1W-1v\':l.12().17(0,c).2s();l.12().17(7.D.T.20).2s();16;Q\'1J\':Q\'1J-1v\':l.12().17(7.D.L).2s();l.13(5z);16}y.13(2S);U=43(2T,b.2j);28[7.d[\'1m\']]=(7.1R)?7.1i[7.d[3]]:0;8(7[7.d[\'N\']]==\'1c\'||7[7.d[\'1d\']]==\'1c\'){m=C(){$1r.13(2i)};1P=C(){U.19.1b([$1r,2i])}}8(7.1R){8(2q.5C(1Z).S){2r[7.d[\'1S\']]=1Z.1p(\'29\');8(h<0){1Z.13(2r)}O{1F=C(){1Z.13(2r)};3E=C(){U.19.1b([1Z,2r])}}}1B(b.1V){Q\'1J\':Q\'1J-1v\':l.12().1O(c-1).13(2r);16}8(2q.5C(22).S){2R[7.d[\'1S\']]=22.1p(\'29\');1E=C(){22.13(2R)};3D=C(){U.19.1b([22,2R])}}8(2A>=0){4J[7.d[\'1S\']]=2q.1p(\'29\')+7.1i[7.d[1]];2B=C(){2q.13(4J)};5B=C(){U.19.1b([2q,4J])}}}1K=C(){y.13(28)};E n=7.D.L+c-J.P;1y=C(){8(n>0){y.12().17(J.P).2s();3h=$(y.12().17(J.P-(7.D.L-n)).3F().70(y.12().17(0,n).3F()))}5D(j);8(7.1R){E a=y.12().1O(7.D.L+c-1);a.13(7.d[\'1S\'],a.1p(\'29\'))}};E o=5E(3h,2P,2h,c,\'V\',2T,2i);1x=C(){5F(y,l,b);2a.3g=44($14,b,\'3g\',o,2a);z.21=K;2C=5G(y,2C,F);8(!z.26){y.R(H(\'1H\',F))}};2a.3G=44($14,b,\'3G\',o,2a);z.21=I;1u=3s(1u);1B(b.1V){Q\'3X\':y.13(28);m();1E();2B();1F();1K();1y();1x();16;Q\'1v\':U.19.1b([y,{\'1L\':0},C(){m();1E();2B();1F();1K();1y();U=43(2T,b.2j);U.19.1b([y,{\'1L\':1},1x]);2O(U)}]);16;Q\'3j\':y.13({\'1L\':0});U.19.1b([l,{\'1L\':0}]);U.19.1b([y,{\'1L\':1},1x]);1P();1E();2B();1F();1K();1y();16;Q\'1J\':U.19.1b([l,28,C(){1E();2B();1F();1K();1y();1x()}]);1P();16;Q\'1J-1v\':U.19.1b([y,{\'1L\':0}]);U.19.1b([l,28,C(){y.13({\'1L\':1});1E();2B();1F();1K();1y();1x()}]);1P();16;Q\'1W\':U.19.1b([l,4I,1x]);1P();1E();2B();1F();1K();1y();16;Q\'1W-1v\':y.13({\'1L\':0});U.19.1b([y,{\'1L\':1}]);U.19.1b([l,4I,1x]);1P();1E();2B();1F();1K();1y();16;2x:U.19.1b([y,28,C(){1y();1x()}]);1P();3D();5B();3E();16}2O(U);5H(7.25,y,F);y.R(H(\'3H\',F),[K,2i]);G I});y.11(H(\'83\',F),C(e,c,d){e.1f();E f=y.12();8(!7.1T){8(J.Z==7.D.L){8(7.3z){y.R(H(\'V\',F),J.P-1)}G e.2d()}}1U(f,7);8(!Y(d)){8(7.D.1t!=\'*\'){E g=(Y(c.D))?c.D:5w(y,7);d=71(f,7,0,g)}O{d=7.D.L}d=4B(d,7,c.D,$14)}E h=(J.Z==0)?J.P:J.Z;8(!7.1T){8(7.D.T.1c){E i=31(f,7,d),g=4A(f,7,h-1)}O{E i=7.D.L,g=7.D.L}8(d+i>h){d=h-g}}7.D.T.20=7.D.L;8(7.D.T.1c){E i=5I(f,7,d,h);2g(7.D.L-d>=i&&d<J.P){d++;i=5I(f,7,d,h)}7.D.L=32(i,7,7.D.T.2w,$14)}O 8(7.D.1t!=\'*\'){E i=3U(f,7,d);7.D.L=32(i,7,7.D.T.2w,$14)}1U(f,7,I);8(d==0){e.2d();G 18(F,\'0 D 4C 1M: 2o 3e.\')}18(F,\'6V \'+d+\' D 72.\');J.Z-=d;2g(J.Z<0){J.Z+=J.P}8(!7.1T){8(J.Z==7.D.L&&c.4D){c.4D.1g($14,\'X\')}8(!7.3z){3A(7,J.Z,F)}}8(J.P<7.D.L+d){y.12().17(0,(7.D.L+d)-J.P).4E(I).42(y)}E f=y.12(),3h=73(f,7),2h=74(f,7,d),1Z=f.1O(d-1),22=3h.3i(),2q=2h.3i();1U(f,7);E j=0,2A=0;8(7.1A){E p=4F(2h,7);j=p[0];2A=p[1]}E k=K,2P=$();8(7.D.T.20<d){2P=f.17(7.D.T.20,d);8(c.1V==\'6Z\'){E l=7.D[7.d[\'N\']];k=2P;1Z=22;5y(k);7.D[7.d[\'N\']]=\'1c\'}}E m=K,3B=2Q(f.17(0,d),7,\'N\'),2i=4G(4H(2h,7,I),7,!7.1R),3C=0,28={},4K={},2r={},2R={},2S={},2T=5A(c,7,d,3B);1B(c.1V){Q\'1W\':Q\'1W-1v\':3C=2Q(f.17(0,7.D.T.20),7,\'N\');16}8(k){7.D[7.d[\'N\']]=l}8(7.1A){8(7.1i[7.d[1]]<0){7.1i[7.d[1]]=0}}1U(f,7,I);1U(22,7,7.1i[7.d[1]]);8(7.1A){7.1i[7.d[1]]=2A;7.1i[7.d[3]]=j}2S[7.d[\'1m\']]=(7.1R)?7.1i[7.d[3]]:0;E n=C(){},1P=C(){},1E=C(){},3D=C(){},1F=C(){},3E=C(){},1x=C(){},1y=C(){},1K=C(){};1B(c.1V){Q\'3j\':Q\'1J\':Q\'1J-1v\':Q\'1W\':Q\'1W-1v\':m=y.4E();m.12().17(7.D.T.20).2s();16}1B(c.1V){Q\'3j\':Q\'1J\':Q\'1J-1v\':m.6W($1r);16;Q\'1W\':Q\'1W-1v\':m.42($1r);16}U=43(2T,c.2j);28[7.d[\'1m\']]=-3B;4K[7.d[\'1m\']]=-3C;8(j<0){28[7.d[\'1m\']]+=j}8(7[7.d[\'N\']]==\'1c\'||7[7.d[\'1d\']]==\'1c\'){n=C(){$1r.13(2i)};1P=C(){U.19.1b([$1r,2i])}}8(7.1R){E o=2q.1p(\'29\');8(2A>=0){o+=7.1i[7.d[1]]}2q.13(7.d[\'1S\'],o);8(1Z.5C(22).S){2R[7.d[\'1S\']]=22.1p(\'29\')}1E=C(){22.13(2R)};3D=C(){U.19.1b([22,2R])};E q=1Z.1p(\'29\');8(j>0){q+=7.1i[7.d[3]]}2r[7.d[\'1S\']]=q;1F=C(){1Z.13(2r)};3E=C(){U.19.1b([1Z,2r])}}1K=C(){y.13(2S)};E r=7.D.L+d-J.P;1y=C(){8(r>0){y.12().17(J.P).2s()}E a=y.12().17(0,d).42(y).3i();8(r>0){2h=3I(f,7)}5D(k);8(7.1R){8(J.P<7.D.L+d){E b=y.12().1O(7.D.L-1);b.13(7.d[\'1S\'],b.1p(\'29\')+7.1i[7.d[3]])}a.13(7.d[\'1S\'],a.1p(\'29\'))}};E s=5E(3h,2P,2h,d,\'X\',2T,2i);1x=C(){5F(y,m,c);2a.3g=44($14,c,\'3g\',s,2a);z.21=K;2C=5G(y,2C,F);8(!z.26){y.R(H(\'1H\',F))}};2a.3G=44($14,c,\'3G\',s,2a);z.21=I;1u=3s(1u);1B(c.1V){Q\'3X\':y.13(28);n();1E();1F();1K();1y();1x();16;Q\'1v\':U.19.1b([y,{\'1L\':0},C(){n();1E();1F();1K();1y();U=43(2T,c.2j);U.19.1b([y,{\'1L\':1},1x]);2O(U)}]);16;Q\'3j\':y.13({\'1L\':0});U.19.1b([m,{\'1L\':0}]);U.19.1b([y,{\'1L\':1},1x]);1P();1E();1F();1K();1y();16;Q\'1J\':y.13(7.d[\'1m\'],$1r[7.d[\'N\']]());U.19.1b([y,2S,1x]);1P();1E();1F();1y();16;Q\'1J-1v\':y.13(7.d[\'1m\'],$1r[7.d[\'N\']]());U.19.1b([m,{\'1L\':0}]);U.19.1b([y,2S,1x]);1P();1E();1F();1y();16;Q\'1W\':U.19.1b([m,4K,1x]);1P();1E();1F();1K();1y();16;Q\'1W-1v\':y.13({\'1L\':0});U.19.1b([y,{\'1L\':1}]);U.19.1b([m,4K,1x]);1P();1E();1F();1K();1y();16;2x:U.19.1b([y,28,C(){1K();1y();1x()}]);1P();3D();3E();16}2O(U);5H(7.25,y,F);y.R(H(\'3H\',F),[K,2i]);G I});y.11(H(\'3k\',F),C(e,b,c,d,f,g,h){e.1f();E v=[b,c,d,f,g,h],t=[\'2M/27/2f\',\'27\',\'3c\',\'2f\',\'2M\',\'C\'],a=3d(v,t);f=a[3];g=a[4];h=a[5];b=3J(a[0],a[1],a[2],J,y);8(b==0){G K}8(!1D(f)){f=K}8(z.21){8(!1D(f)||f.1C>0){G K}}8(g!=\'V\'&&g!=\'X\'){8(7.1T){g=(b<=J.P/2)?\'X\':\'V\'}O{g=(J.Z==0||J.Z>b)?\'X\':\'V\'}}8(g==\'V\'){b=J.P-b}y.R(H(g,F),[f,b,h]);G I});y.11(H(\'84\',F),C(e,a,b){e.1f();E c=y.1Q(H(\'45\',F));G y.1Q(H(\'5J\',F),[c-1,a,\'V\',b])});y.11(H(\'85\',F),C(e,a,b){e.1f();E c=y.1Q(H(\'45\',F));G y.1Q(H(\'5J\',F),[c+1,a,\'X\',b])});y.11(H(\'5J\',F),C(e,a,b,c,d){e.1f();8(!Y(a)){a=y.1Q(H(\'45\',F))}E f=7.1a.D||7.D.L,1Y=1I.2z(J.P/f)-1;8(a<0){a=1Y}8(a>1Y){a=0}G y.1Q(H(\'3k\',F),[a*f,0,I,b,c,d])});y.11(H(\'75\',F),C(e,s){e.1f();8(s){s=3J(s,0,I,J,y)}O{s=0}s+=J.Z;8(s!=0){8(D.P>0){2g(s>J.P){s-=J.P}}y.86(y.12().17(s,J.P))}G I});y.11(H(\'2m\',F),C(e,s){e.1f();8(s){s=5g(s)}O 8(7.2m){s=7.2m}O{G 18(F,\'6o 87 4C 2m.\')}E n=y.1Q(H(\'4l\',F)),x=I;1j(E j=0,l=s.S;j<l;j++){8(!s[j][0].1Q(H(\'3k\',F),[n,s[j][3],I])){x=K}}G x});y.11(H(\'3y\',F),C(e,a,b){e.1f();8(1n(a)){a.1g($14,2C)}O 8(2U(a)){2C=a}O 8(!1G(a)){2C.1b([a,b])}G 2C});y.11(H(\'88\',F),C(e,b,c,d,f){e.1f();E v=[b,c,d,f],t=[\'2M/2f\',\'2M/27/2f\',\'3c\',\'27\'],a=3d(v,t);b=a[0];c=a[1];d=a[2];f=a[3];8(1D(b)&&!2t(b)){b=$(b)}O 8(1o(b)){b=$(b)}8(!2t(b)||b.S==0){G 18(F,\'2o a 5K 2f.\')}8(1G(c)){c=\'4L\'}4v(b,7);5o(b,7);E g=c,46=\'46\';8(c==\'4L\'){8(d){8(J.Z==0){c=J.P-1;46=\'76\'}O{c=J.Z;J.Z+=b.S}8(c<0){c=0}}O{c=J.P-1;46=\'76\'}}O{c=3J(c,f,d,J,y)}8(g!=\'4L\'&&!d){8(c<J.Z){J.Z+=b.S}}8(J.Z>=J.P){J.Z-=J.P}E h=y.12().1O(c);8(h.S){h[46](b)}O{y.77(b)}J.P=y.12().S;y.R(H(\'4M\',F));y.R(H(\'5L\',F));G I});y.11(H(\'78\',F),C(e,c,d,f){e.1f();E v=[c,d,f],t=[\'2M/27/2f\',\'3c\',\'27\'],a=3d(v,t);c=a[0];d=a[1];f=a[2];E g=K;8(c 2V $&&c.S>1){h=$();c.1X(C(i,a){E b=y.R(H(\'78\',F),[$(1k),d,f]);8(b)h=h.89(b)});G h}8(1G(c)||c==\'4L\'){h=y.12().3i()}O{c=3J(c,f,d,J,y);E h=y.12().1O(c);8(h.S){8(c<J.Z)J.Z-=h.S}}8(h&&h.S){h.8a();J.P=y.12().S;y.R(H(\'4M\',F))}G h});y.11(H(\'3G\',F)+\' \'+H(\'3g\',F),C(e,a){e.1f();E b=e.5u.17(F.3x.41.S);8(2U(a)){2a[b]=a}8(1n(a)){2a[b].1b(a)}G 2a[b]});y.11(H(\'4l\',F),C(e,a){e.1f();8(J.Z==0){E b=0}O{E b=J.P-J.Z}8(1n(a)){a.1g($14,b)}G b});y.11(H(\'45\',F),C(e,a){e.1f();E b=7.1a.D||7.D.L,1Y=1I.2z(J.P/b-1),2k;8(J.Z==0){2k=0}O 8(J.Z<J.P%b){2k=0}O 8(J.Z==b&&!7.1T){2k=1Y}O{2k=1I.79((J.P-J.Z)/b)}8(2k<0){2k=0}8(2k>1Y){2k=1Y}8(1n(a)){a.1g($14,2k)}G 2k});y.11(H(\'8b\',F),C(e,a){e.1f();E b=3I(y.12(),7);8(1n(a)){a.1g($14,b)}G b});y.11(H(\'17\',F),C(e,f,l,b){e.1f();8(J.P==0){G K}E v=[f,l,b],t=[\'27\',\'27\',\'C\'],a=3d(v,t);f=(Y(a[0]))?a[0]:0;l=(Y(a[1]))?a[1]:J.P;b=a[2];f+=J.Z;l+=J.Z;8(D.P>0){2g(f>J.P){f-=J.P}2g(l>J.P){l-=J.P}2g(f<0){f+=J.P}2g(l<0){l+=J.P}}E c=y.12(),$i;8(l>f){$i=c.17(f,l)}O{$i=$(c.17(f,J.P).3F().70(c.17(0,l).3F()))}8(1n(b)){b.1g($14,$i)}G $i});y.11(H(\'26\',F)+\' \'+H(\'2c\',F)+\' \'+H(\'21\',F),C(e,a){e.1f();E b=e.5u.17(F.3x.41.S),5M=z[b];8(1n(a)){a.1g($14,5M)}G 5M});y.11(H(\'4z\',F),C(e,a,b,c){e.1f();E d=K;8(1n(a)){a.1g($14,7)}O 8(1D(a)){2Z=$.1N(I,{},2Z,a);8(b!==K)d=I;O 7=$.1N(I,{},7,a)}O 8(!1G(a)){8(1n(b)){E f=4N(\'7.\'+a);8(1G(f)){f=\'\'}b.1g($14,f)}O 8(!1G(b)){8(2W c!==\'3c\')c=I;4N(\'2Z.\'+a+\' = b\');8(c!==K)d=I;O 4N(\'7.\'+a+\' = b\')}O{G 4N(\'7.\'+a)}}8(d){1U(y.12(),7);y.55(2Z);y.5N();E g=4O(y,7);y.R(H(\'3H\',F),[I,g])}G 7});y.11(H(\'5L\',F),C(e,a,b){e.1f();8(1G(a)){a=$(\'8c\')}O 8(1o(a)){a=$(a)}8(!2t(a)||a.S==0){G 18(F,\'2o a 5K 2f.\')}8(!1o(b)){b=\'a.6n\'}a.8d(b).1X(C(){E h=1k.7a||\'\';8(h.S>0&&y.12().7b($(h))!=-1){$(1k).23(\'5O\').5O(C(e){e.2D();y.R(H(\'3k\',F),h)})}});G I});y.11(H(\'3H\',F),C(e,b,c){e.1f();8(!7.1a.1z){G}E d=7.1a.D||7.D.L,4P=1I.2z(J.P/d);8(b){8(7.1a.3K){7.1a.1z.12().2s();7.1a.1z.1X(C(){1j(E a=0;a<4P;a++){E i=y.12().1O(3J(a*d,0,I,J,y));$(1k).77(7.1a.3K.1g(i[0],a+1))}})}7.1a.1z.1X(C(){$(1k).12().23(7.1a.3L).1X(C(a){$(1k).11(7.1a.3L,C(e){e.2D();y.R(H(\'3k\',F),[a*d,0,I,7.1a])})})})}E f=y.1Q(H(\'45\',F))+7.1a.5P;8(f>=4P){f=0}8(f<0){f=4P-1}7.1a.1z.1X(C(){$(1k).12().2N(2y(\'7c\',F)).1O(f).36(2y(\'7c\',F))});G I});y.11(H(\'4M\',F),C(e){E a=7.D.L,2E=y.12(),2v=59($1r,7,\'N\');J.P=2E.S;7.4o=5a(7,2v);8(z.4p){7[7.d[\'N\']]=4q(2v,z.4p)}8(7.2l){7.D.N=7.D.3M.N;7.D.1d=7.D.3M.1d;7=5c(7,2E,2v);a=7.D.L;5p(7,2E)}O 8(7.D.T.1c){a=31(2E,7,0)}O 8(7.D.1t!=\'*\'){a=3U(2E,7,0)}8(!7.1T&&J.Z!=0&&a>J.Z){8(7.D.T.1c){E b=4A(2E,7,J.Z)-J.Z}O 8(7.D.1t!=\'*\'){E b=7d(2E,7,J.Z)-J.Z}O{E b=7.D.L-J.Z}18(F,\'8e 8f-1T: 8g \'+b+\' D 5x.\');y.R(H(\'V\',F),b)}7.D.L=32(a,7,7.D.T.2w,$14);7.D.T.20=7.D.L;7=5e(7,2E);E c=4O(y,7);y.R(H(\'3H\',F),[I,c]);4Q(7,J.P,F);3A(7,J.Z,F);G c});y.11(H(\'4m\',F),C(e,a){e.1f();1u=3s(1u);y.1p(\'54\',K);y.R(H(\'5s\',F));8(a){y.R(H(\'75\',F))}1U(y.12(),7);8(7.2l){y.12().1X(C(){$(1k).13($(1k).1p(\'7e\'))})}y.13(y.1p(\'6N\'));y.5q();y.5Q();$1r.8h(y);G I});y.11(H(\'18\',F),C(e){18(F,\'3w N: \'+7.N);18(F,\'3w 1d: \'+7.1d);18(F,\'7f 8i: \'+7.D.N);18(F,\'7f 8j: \'+7.D.1d);18(F,\'47 48 D L: \'+7.D.L);8(7.M.1H){18(F,\'47 48 D 5R 8k: \'+7.M.D)}8(7.V.W){18(F,\'47 48 D 5R 5x: \'+7.V.D)}8(7.X.W){18(F,\'47 48 D 5R 72: \'+7.X.D)}G F.18});y.11(\'3o\',C(e,n,o){e.1f();G y.1Q(H(n,F),o)})};y.5q=C(){y.23(H(\'\',F));y.23(H(\'\',F,K));y.23(\'3o\')};y.5N=C(){y.5Q();4Q(7,J.P,F);3A(7,J.Z,F);8(7.M.2F){E b=3N(7.M.2F);$1r.11(H(\'4R\',F,K),C(){y.R(H(\'3a\',F),b)}).11(H(\'4S\',F,K),C(){y.R(H(\'3f\',F))})}8(7.M.W){7.M.W.11(H(7.M.3L,F,K),C(e){e.2D();E a=K,b=2G;8(z.26){a=\'1H\'}O 8(7.M.4T){a=\'3a\';b=3N(7.M.4T)}8(a){y.R(H(a,F),b)}})}8(7.V.W){7.V.W.11(H(7.V.3L,F,K),C(e){e.2D();y.R(H(\'V\',F))});8(7.V.2F){E b=3N(7.V.2F);7.V.W.11(H(\'4R\',F,K),C(){y.R(H(\'3a\',F),b)}).11(H(\'4S\',F,K),C(){y.R(H(\'3f\',F))})}}8(7.X.W){7.X.W.11(H(7.X.3L,F,K),C(e){e.2D();y.R(H(\'X\',F))});8(7.X.2F){E b=3N(7.X.2F);7.X.W.11(H(\'4R\',F,K),C(){y.R(H(\'3a\',F),b)}).11(H(\'4S\',F,K),C(){y.R(H(\'3f\',F))})}}8(7.1a.1z){8(7.1a.2F){E b=3N(7.1a.2F);7.1a.1z.11(H(\'4R\',F,K),C(){y.R(H(\'3a\',F),b)}).11(H(\'4S\',F,K),C(){y.R(H(\'3f\',F))})}}8(7.V.2X||7.X.2X){$(4a).11(H(\'7g\',F,K,I,I),C(e){E k=e.7h;8(k==7.X.2X){e.2D();y.R(H(\'X\',F))}8(k==7.V.2X){e.2D();y.R(H(\'V\',F))}})}8(7.1a.4U){$(4a).11(H(\'7g\',F,K,I,I),C(e){E k=e.7h;8(k>=49&&k<58){k=(k-49)*7.D.L;8(k<=J.P){e.2D();y.R(H(\'3k\',F),[k,0,I,7.1a])}}})}8(7.V.4V||7.X.4V){2J(\'4b 4c-7i\',\'4b 8l-7i\');8($.1s.4c){E c=(7.V.4V)?C(){y.R(H(\'V\',F))}:2G,4d=(7.X.4V)?C(){y.R(H(\'X\',F))}:2G;8(4d||4d){8(!z.4c){z.4c=I;E d={\'8m\':30,\'8n\':30,\'8o\':I};1B(7.2b){Q\'4n\':Q\'5S\':d.8p=c;d.8q=4d;16;2x:d.8r=4d;d.8s=c}$1r.4c(d)}}}}8($.1s.1q){E f=\'8t\'8u 3l;8((f&&7.1q.4e)||(!f&&7.1q.5T)){E g=$.1N(I,{},7.V,7.1q),7j=$.1N(I,{},7.X,7.1q),5U=C(){y.R(H(\'V\',F),[g])},5V=C(){y.R(H(\'X\',F),[7j])};1B(7.2b){Q\'4n\':Q\'5S\':7.1q.2H.8v=5V;7.1q.2H.8w=5U;16;2x:7.1q.2H.8x=5V;7.1q.2H.8y=5U}8(z.1q){y.1q(\'4m\')}$1r.1q(7.1q.2H);$1r.13(\'7k\',\'8z\');z.1q=I}}8($.1s.1h){8(7.V.1h){2J(\'7l V.1h 7m\',\'4b 1h 4z 2f\');7.V.1h=2G;7.1h={D:5W(7.V.1h)}}8(7.X.1h){2J(\'7l X.1h 7m\',\'4b 1h 4z 2f\');7.X.1h=2G;7.1h={D:5W(7.X.1h)}}8(7.1h){E h=$.1N(I,{},7.V,7.1h),7n=$.1N(I,{},7.X,7.1h);8(z.1h){$1r.23(H(\'1h\',F,K))}$1r.11(H(\'1h\',F,K),C(e,a){e.2D();8(a>0){y.R(H(\'V\',F),[h])}O{y.R(H(\'X\',F),[7n])}});z.1h=I}}8(7.M.1H){y.R(H(\'1H\',F),7.M.5X)}8(z.6z){E i=$(3l),5Y=0,5Z=0;i.11(H(\'8A\',F,K,I,I),C(e){E a=i.N(),61=i.1d();8(a!=5Y||61!=5Z){y.R(H(\'5s\',F));8(7.M.62&&!z.26){y.R(H(\'1H\',F))}1U(y.12(),7);y.R(H(\'4M\',F));5Y=a;5Z=61}})}};y.5Q=C(){E a=H(\'\',F),3O=H(\'\',F,K);63=H(\'\',F,K,I,I);$(4a).23(63);$(3l).23(63);$1r.23(3O);8(7.M.W){7.M.W.23(3O)}8(7.V.W){7.V.W.23(3O)}8(7.X.W){7.X.W.23(3O)}8(7.1a.1z){7.1a.1z.23(3O);8(7.1a.3K){7.1a.1z.12().2s()}}8(z.1q){y.1q(\'4m\');$1r.13(\'7k\',\'2x\');z.1q=K}8(z.1h){z.1h=K}4Q(7,\'4f\',F);3A(7,\'2N\',F)};8(1l(w)){w={\'18\':w}}E z={\'2b\':\'X\',\'26\':I,\'21\':K,\'2c\':K,\'1h\':K,\'1q\':K},J={\'P\':y.12().S,\'Z\':0},1u={\'M\':2G,\'1e\':2G,\'2L\':2n(),\'3v\':0},U={\'2c\':K,\'1C\':0,\'2L\':0,\'2j\':\'\',\'19\':[]},2a={\'3G\':[],\'3g\':[]},2C=[],F=$.1N(I,{},$.1s.1w.7o,w),7={},2Z=$.1N(I,{},u),$1r=y.8B(\'<\'+F.64.52+\' 8C="\'+F.64.7p+\'" />\').65();F.4k=y.4k;F.3S=$.1s.1w.3S++;y.55(2Z,I,53);y.6H();y.6O();y.5N();8(2U(7.D.3m)){E A=7.D.3m}O{E A=[];8(7.D.3m!=0){A.1b(7.D.3m)}}8(7.25){A.8D(4g(7q(7.25),10))}8(A.S>0){1j(E a=0,l=A.S;a<l;a++){E s=A[a];8(s==0){66}8(s===I){s=3l.8E.7a;8(s.S<1){66}}O 8(s===\'7r\'){s=1I.4h(1I.7r()*J.P)}8(y.1Q(H(\'3k\',F),[s,0,I,{1V:\'3X\'}])){16}}}E B=4O(y,7),7s=3I(y.12(),7);8(7.7t){7.7t.1g($14,{\'N\':B.N,\'1d\':B.1d,\'D\':7s})}y.R(H(\'3H\',F),[I,B]);y.R(H(\'5L\',F));8(F.18){y.R(H(\'18\',F))}G y};$.1s.1w.3S=1;$.1s.1w.57={\'2m\':K,\'3z\':I,\'1T\':I,\'2l\':K,\'2b\':\'1m\',\'D\':{\'3m\':0},\'1M\':{\'2j\':\'8F\',\'1C\':6C,\'2F\':K,\'3L\':\'5O\',\'3y\':K}};$.1s.1w.7o={\'18\':K,\'3x\':{\'41\':\'\',\'7u\':\'8G\'},\'64\':{\'52\':\'8H\',\'7p\':\'8I\'},\'68\':{}};$.1s.1w.7v=C(a){G\'<a 8J="#"><7w>\'+a+\'</7w></a>\'};$.1s.1w.7x=C(a){$(1k).13(\'N\',a+\'%\')};$.1s.1w.25={3F:C(n){n+=\'=\';E b=4a.25.3P(\';\');1j(E a=0,l=b.S;a<l;a++){E c=b[a];2g(c.8K(0)==\' \'){c=c.17(1)}8(c.3Q(n)==0){G c.17(n.S)}}G 0},69:C(n,v,d){E e="";8(d){E a=6a 7y();a.8L(a.2n()+(d*24*60*60*8M));e="; 8N="+a.8O()}4a.25=n+\'=\'+v+e+\'; 8P=/\'},2s:C(n){$.1s.1w.25.69(n,"",-1)}};C 43(d,e){G{19:[],1C:d,8Q:d,2j:e,2L:2n()}}C 2O(s){8(1D(s.3t)){2O(s.3t)}1j(E a=0,l=s.19.S;a<l;a++){E b=s.19[a];8(!b){66}8(b[3]){b[0].5r()}b[0].8R(b[1],{8S:b[2],1C:s.1C,2j:s.2j})}8(1D(s.3u)){2O(s.3u)}}C 3Y(s,c){8(!1l(c)){c=I}8(1D(s.3t)){3Y(s.3t,c)}1j(E a=0,l=s.19.S;a<l;a++){E b=s.19[a];b[0].5r(I);8(c){b[0].13(b[1]);8(1n(b[2])){b[2]()}}}8(1D(s.3u)){3Y(s.3u,c)}}C 5F(a,b,o){8(b){b.2s()}1B(o.1V){Q\'1v\':Q\'3j\':Q\'1J-1v\':Q\'1W-1v\':a.13(\'1t\',\'\');16}}C 44(d,o,b,a,c){8(o[b]){o[b].1g(d,a)}8(c[b].S){1j(E i=0,l=c[b].S;i<l;i++){c[b][i].1g(d,a)}}G[]}C 5G(a,q,c){8(q.S){a.R(H(q[0][0],c),q[0][1]);q.8T()}G q}C 5y(b){b.1X(C(){E a=$(1k);a.1p(\'7z\',a.2e(\':3r\')).4f()})}C 5D(b){8(b){b.1X(C(){E a=$(1k);8(!a.1p(\'7z\')){a.4i()}})}}C 3s(t){8(t.M){8U(t.M)}8(t.1e){8V(t.1e)}G t}C 5E(a,b,c,d,e,f,g){G{\'N\':g.N,\'1d\':g.1d,\'D\':{\'20\':a,\'8W\':b,\'6a\':c},\'1M\':{\'D\':d,\'2b\':e,\'1C\':f}}}C 5A(a,o,b,c){E d=a.1C;8(a.1V==\'3X\'){G 0}8(d==\'M\'){d=o.1M.1C/o.1M.D*b}O 8(d<10){d=c/d}8(d<1){G 0}8(a.1V==\'1v\'){d=d/2}G 1I.79(d)}C 4Q(o,t,c){E a=(Y(o.D.4y))?o.D.4y:o.D.L+1;8(t==\'4i\'||t==\'4f\'){E f=t}O 8(a>t){18(c,\'2o 6Q D (\'+t+\' P, \'+a+\' 6R): 8X 8Y.\');E f=\'4f\'}O{E f=\'4i\'}E s=(f==\'4i\')?\'2N\':\'36\',h=2y(\'3r\',c);8(o.M.W){o.M.W[f]()[s](h)}8(o.V.W){o.V.W[f]()[s](h)}8(o.X.W){o.X.W[f]()[s](h)}8(o.1a.1z){o.1a.1z[f]()[s](h)}}C 3A(o,f,c){8(o.1T||o.3z)G;E a=(f==\'2N\'||f==\'36\')?f:K,4W=2y(\'8Z\',c);8(o.M.W&&a){o.M.W[a](4W)}8(o.V.W){E b=a||(f==0)?\'36\':\'2N\';o.V.W[b](4W)}8(o.X.W){E b=a||(f==o.D.L)?\'36\':\'2N\';o.X.W[b](4W)}}C 3R(a,b){8(1n(b)){b=b.1g(a)}O 8(1G(b)){b={}}G b}C 6p(a,b){b=3R(a,b);8(Y(b)){b={\'L\':b}}O 8(b==\'1c\'){b={\'L\':b,\'N\':b,\'1d\':b}}O 8(!1D(b)){b={}}G b}C 6q(a,b){b=3R(a,b);8(Y(b)){8(b<=50){b={\'D\':b}}O{b={\'1C\':b}}}O 8(1o(b)){b={\'2j\':b}}O 8(!1D(b)){b={}}G b}C 4X(a,b){b=3R(a,b);8(1o(b)){E c=6b(b);8(c==-1){b=$(b)}O{b=c}}G b}C 6r(a,b){b=4X(a,b);8(2t(b)){b={\'W\':b}}O 8(1l(b)){b={\'1H\':b}}O 8(Y(b)){b={\'2K\':b}}8(b.1e){8(1o(b.1e)||2t(b.1e)){b.1e={\'2p\':b.1e}}}G b}C 6D(a,b){8(1n(b.W)){b.W=b.W.1g(a)}8(1o(b.W)){b.W=$(b.W)}8(!1l(b.1H)){b.1H=I}8(!Y(b.5X)){b.5X=0}8(1G(b.4T)){b.4T=I}8(!1l(b.62)){b.62=I}8(!Y(b.2K)){b.2K=(b.1C<10)?90:b.1C*5}8(b.1e){8(1n(b.1e.2p)){b.1e.2p=b.1e.2p.1g(a)}8(1o(b.1e.2p)){b.1e.2p=$(b.1e.2p)}8(b.1e.2p){8(!1n(b.1e.4x)){b.1e.4x=$.1s.1w.7x}8(!Y(b.1e.5t)){b.1e.5t=50}}O{b.1e=K}}G b}C 56(a,b){b=4X(a,b);8(2t(b)){b={\'W\':b}}O 8(Y(b)){b={\'2X\':b}}G b}C 5f(a,b){8(1n(b.W)){b.W=b.W.1g(a)}8(1o(b.W)){b.W=$(b.W)}8(1o(b.2X)){b.2X=6b(b.2X)}G b}C 6s(a,b){b=4X(a,b);8(2t(b)){b={\'1z\':b}}O 8(1l(b)){b={\'4U\':b}}G b}C 6E(a,b){8(1n(b.1z)){b.1z=b.1z.1g(a)}8(1o(b.1z)){b.1z=$(b.1z)}8(!Y(b.D)){b.D=K}8(!1l(b.4U)){b.4U=K}8(!1n(b.3K)&&!4Y(b.3K)){b.3K=$.1s.1w.7v}8(!Y(b.5P)){b.5P=0}G b}C 6t(a,b){8(1n(b)){b=b.1g(a)}8(1G(b)){b={\'4e\':K}}8(3p(b)){b={\'4e\':b}}O 8(Y(b)){b={\'D\':b}}G b}C 6F(a,b){8(!1l(b.4e)){b.4e=I}8(!1l(b.5T)){b.5T=K}8(!1D(b.2H)){b.2H={}}8(!1l(b.2H.7A)){b.2H.7A=K}G b}C 6u(a,b){8(1n(b)){b=b.1g(a)}8(3p(b)){b={}}O 8(Y(b)){b={\'D\':b}}O 8(1G(b)){b=K}G b}C 6G(a,b){G b}C 3J(a,b,c,d,e){8(1o(a)){a=$(a,e)}8(1D(a)){a=$(a,e)}8(2t(a)){a=e.12().7b(a);8(!1l(c)){c=K}}O{8(!1l(c)){c=I}}8(!Y(a)||a<0){a=0}8(!Y(b)){b=0}8(c){a+=d.Z}a+=b;8(d.P>0){2g(a>=d.P){a-=d.P}2g(a<0){a+=d.P}}G a}C 4A(i,o,s){E t=0,x=0;1j(E a=s;a>=0;a--){E j=i.1O(a);t+=(j.2e(\':L\'))?j[o.d[\'2u\']](I):0;8(t>o.4o){G x}8(a==0){a=i.S}x++}}C 7d(i,o,s){G 6c(i,o.D.1t,o.D.T.4r,s)}C 6U(i,o,s,m){G 6c(i,o.D.1t,m,s)}C 6c(i,f,m,s){E t=0,x=0;1j(E a=s,l=i.S;a>=0;a--){x++;8(x==l){G x}E j=i.1O(a);8(j.2e(f)){t++;8(t==m){G x}}8(a==0){a=l}}}C 5w(a,o){G o.D.T.4r||a.12().17(0,o.D.L).1t(o.D.1t).S}C 31(i,o,s){E t=0,x=0;1j(E a=s,l=i.S-1;a<=l;a++){E j=i.1O(a);t+=(j.2e(\':L\'))?j[o.d[\'2u\']](I):0;8(t>o.4o){G x}x++;8(x==l+1){G x}8(a==l){a=-1}}}C 5I(i,o,s,l){E v=31(i,o,s);8(!o.1T){8(s+v>l){v=l-s}}G v}C 3U(i,o,s){G 6d(i,o.D.1t,o.D.T.4r,s,o.1T)}C 71(i,o,s,m){G 6d(i,o.D.1t,m+1,s,o.1T)-1}C 6d(i,f,m,s,c){E t=0,x=0;1j(E a=s,l=i.S-1;a<=l;a++){x++;8(x>=l){G x}E j=i.1O(a);8(j.2e(f)){t++;8(t==m){G x}}8(a==l){a=-1}}}C 3I(i,o){G i.17(0,o.D.L)}C 6X(i,o,n){G i.17(n,o.D.T.20+n)}C 6Y(i,o){G i.17(0,o.D.L)}C 73(i,o){G i.17(0,o.D.T.20)}C 74(i,o,n){G i.17(n,o.D.L+n)}C 4v(i,o,d){8(o.1R){8(!1o(d)){d=\'29\'}i.1X(C(){E j=$(1k),m=4g(j.13(o.d[\'1S\']),10);8(!Y(m)){m=0}j.1p(d,m)})}}C 1U(i,o,m){8(o.1R){E x=(1l(m))?m:K;8(!Y(m)){m=0}4v(i,o,\'7B\');i.1X(C(){E j=$(1k);j.13(o.d[\'1S\'],((x)?j.1p(\'7B\'):m+j.1p(\'29\')))})}}C 5o(i,o){8(o.2l){i.1X(C(){E j=$(1k),s=5l(j,[\'N\',\'1d\']);j.1p(\'7e\',s)})}}C 5p(o,b){E c=o.D.L,7C=o.D[o.d[\'N\']],6e=o[o.d[\'1d\']],7D=3T(6e);b.1X(C(){E a=$(1k),6f=7C-7E(a,o,\'91\');a[o.d[\'N\']](6f);8(7D){a[o.d[\'1d\']](4q(6f,6e))}})}C 4O(a,o){E b=a.65(),$i=a.12(),$v=3I($i,o),4Z=4G(4H($v,o,I),o,K);b.13(4Z);8(o.1R){E p=o.1i,r=p[o.d[1]];8(o.1A&&r<0){r=0}E c=$v.3i();c.13(o.d[\'1S\'],c.1p(\'29\')+r);a.13(o.d[\'3q\'],p[o.d[0]]);a.13(o.d[\'1m\'],p[o.d[3]])}a.13(o.d[\'N\'],4Z[o.d[\'N\']]+(2Q($i,o,\'N\')*2));a.13(o.d[\'1d\'],6g($i,o,\'1d\'));G 4Z}C 4H(i,o,a){G[2Q(i,o,\'N\',a),6g(i,o,\'1d\',a)]}C 6g(i,o,a,b){8(!1l(b)){b=K}8(Y(o[o.d[a]])&&b){G o[o.d[a]]}8(Y(o.D[o.d[a]])){G o.D[o.d[a]]}a=(a.6h().3Q(\'N\')>-1)?\'2u\':\'3n\';G 4j(i,o,a)}C 4j(i,o,b){E s=0;1j(E a=0,l=i.S;a<l;a++){E j=i.1O(a);E m=(j.2e(\':L\'))?j[o.d[b]](I):0;8(s<m){s=m}}G s}C 2Q(i,o,b,c){8(!1l(c)){c=K}8(Y(o[o.d[b]])&&c){G o[o.d[b]]}8(Y(o.D[o.d[b]])){G o.D[o.d[b]]*i.S}E d=(b.6h().3Q(\'N\')>-1)?\'2u\':\'3n\',s=0;1j(E a=0,l=i.S;a<l;a++){E j=i.1O(a);s+=(j.2e(\':L\'))?j[o.d[d]](I):0}G s}C 59(a,o,d){E b=a.2e(\':L\');8(b){a.4f()}E s=a.65()[o.d[d]]();8(b){a.4i()}G s}C 5a(o,a){G(Y(o[o.d[\'N\']]))?o[o.d[\'N\']]:a}C 6i(i,o,b){E s=K,v=K;1j(E a=0,l=i.S;a<l;a++){E j=i.1O(a);E c=(j.2e(\':L\'))?j[o.d[b]](I):0;8(s===K){s=c}O 8(s!=c){v=I}8(s==0){v=I}}G v}C 7E(i,o,d){G i[o.d[\'92\'+d]](I)-i[o.d[d.6h()]]()}C 4q(s,o){8(3T(o)){o=4g(o.17(0,-1),10);8(!Y(o)){G s}s*=o/2I}G s}C H(n,c,a,b,d){8(!1l(a)){a=I}8(!1l(b)){b=I}8(!1l(d)){d=K}8(a){n=c.3x.41+n}8(b){n=n+\'.\'+c.3x.7u}8(b&&d){n+=c.3S}G n}C 2y(n,c){G(1o(c.68[n]))?c.68[n]:n}C 4G(a,o,p){8(!1l(p)){p=I}E b=(o.1R&&p)?o.1i:[0,0,0,0];E c={};c[o.d[\'N\']]=a[0]+b[1]+b[3];c[o.d[\'1d\']]=a[1]+b[0]+b[2];G c}C 3d(c,d){E e=[];1j(E a=0,7F=c.S;a<7F;a++){1j(E b=0,7G=d.S;b<7G;b++){8(d[b].3Q(2W c[a])>-1&&1G(e[b])){e[b]=c[a];16}}}G e}C 6B(p){8(1G(p)){G[0,0,0,0]}8(Y(p)){G[p,p,p,p]}8(1o(p)){p=p.3P(\'93\').7H(\'\').3P(\'94\').7H(\'\').3P(\' \')}8(!2U(p)){G[0,0,0,0]}1j(E i=0;i<4;i++){p[i]=4g(p[i],10)}1B(p.S){Q 0:G[0,0,0,0];Q 1:G[p[0],p[0],p[0],p[0]];Q 2:G[p[0],p[1],p[0],p[1]];Q 3:G[p[0],p[1],p[2],p[1]];2x:G[p[0],p[1],p[2],p[3]]}}C 4F(a,o){E x=(Y(o[o.d[\'N\']]))?1I.2z(o[o.d[\'N\']]-2Q(a,o,\'N\')):0;1B(o.1A){Q\'1m\':G[0,x];Q\'35\':G[x,0];Q\'5b\':2x:G[1I.2z(x/2),1I.4h(x/2)]}}C 6v(o){E a=[[\'N\',\'7I\',\'2u\',\'1d\',\'7J\',\'3n\',\'1m\',\'3q\',\'1S\',0,1,2,3],[\'1d\',\'7J\',\'3n\',\'N\',\'7I\',\'2u\',\'3q\',\'1m\',\'5m\',3,2,1,0]];E b=a[0].S,7K=(o.2b==\'35\'||o.2b==\'1m\')?0:1;E c={};1j(E d=0;d<b;d++){c[a[0][d]]=a[7K][d]}G c}C 4B(x,o,a,b){E v=x;8(1n(a)){v=a.1g(b,v)}O 8(1o(a)){E p=a.3P(\'+\'),m=a.3P(\'-\');8(m.S>p.S){E c=I,6j=m[0],2Y=m[1]}O{E c=K,6j=p[0],2Y=p[1]}1B(6j){Q\'95\':v=(x%2==1)?x-1:x;16;Q\'96\':v=(x%2==0)?x-1:x;16;2x:v=x;16}2Y=4g(2Y,10);8(Y(2Y)){8(c){2Y=-2Y}v+=2Y}}8(!Y(v)||v<1){v=1}G v}C 32(x,o,a,b){G 6k(4B(x,o,a,b),o.D.T)}C 6k(v,i){8(Y(i.34)&&v<i.34){v=i.34}8(Y(i.1Y)&&v>i.1Y){v=i.1Y}8(v<1){v=1}G v}C 5g(s){8(!2U(s)){s=[[s]]}8(!2U(s[0])){s=[s]}1j(E j=0,l=s.S;j<l;j++){8(1o(s[j][0])){s[j][0]=$(s[j][0])}8(!1l(s[j][1])){s[j][1]=I}8(!1l(s[j][2])){s[j][2]=I}8(!Y(s[j][3])){s[j][3]=0}}G s}C 6b(k){8(k==\'35\'){G 39}8(k==\'1m\'){G 37}8(k==\'4n\'){G 38}8(k==\'5S\'){G 40}G-1}C 5H(n,a,c){8(n){E v=a.1Q(H(\'4l\',c));$.1s.1w.25.69(n,v)}}C 7q(n){E c=$.1s.1w.25.3F(n);G(c==\'\')?0:c}C 5l(a,b){E c={},51;1j(E p=0,l=b.S;p<l;p++){51=b[p];c[51]=a.13(51)}G c}C 6w(a,b,c,d){8(!1D(a.T)){a.T={}}8(!1D(a.3M)){a.3M={}}8(a.3m==0&&Y(d)){a.3m=d}8(1D(a.L)){a.T.34=a.L.34;a.T.1Y=a.L.1Y;a.L=K}O 8(1o(a.L)){8(a.L==\'1c\'){a.T.1c=I}O{a.T.2w=a.L}a.L=K}O 8(1n(a.L)){a.T.2w=a.L;a.L=K}8(!1o(a.1t)){a.1t=(c.1t(\':3r\').S>0)?\':L\':\'*\'}8(!a[b.d[\'N\']]){8(b.2l){18(I,\'7L a \'+b.d[\'N\']+\' 1j 4b D!\');a[b.d[\'N\']]=4j(c,b,\'2u\')}O{a[b.d[\'N\']]=(6i(c,b,\'2u\'))?\'1c\':c[b.d[\'2u\']](I)}}8(!a[b.d[\'1d\']]){a[b.d[\'1d\']]=(6i(c,b,\'3n\'))?\'1c\':c[b.d[\'3n\']](I)}a.3M.N=a.N;a.3M.1d=a.1d;G a}C 6A(a,b){8(a.D[a.d[\'N\']]==\'1c\'){a.D.T.1c=I}8(!a.D.T.1c){8(Y(a[a.d[\'N\']])){a.D.L=1I.4h(a[a.d[\'N\']]/a.D[a.d[\'N\']])}O{a.D.L=1I.4h(b/a.D[a.d[\'N\']]);a[a.d[\'N\']]=a.D.L*a.D[a.d[\'N\']];8(!a.D.T.2w){a.1A=K}}8(a.D.L==\'97\'||a.D.L<1){18(I,\'2o a 5K 27 48 L D: 7L 4C "1c".\');a.D.T.1c=I}}G a}C 6x(a,b,c){8(a==\'M\'){a=4j(c,b,\'2u\')}G a}C 6y(a,b,c){8(a==\'M\'){a=4j(c,b,\'3n\')}8(!a){a=b.D[b.d[\'1d\']]}G a}C 5e(o,a){E p=4F(3I(a,o),o);o.1i[o.d[1]]=p[1];o.1i[o.d[3]]=p[0];G o}C 5c(o,a,b){E c=6k(1I.2z(o[o.d[\'N\']]/o.D[o.d[\'N\']]),o.D.T);8(c>a.S){c=a.S}E d=1I.4h(o[o.d[\'N\']]/c);o.D.L=c;o.D[o.d[\'N\']]=d;o[o.d[\'N\']]=c*d;G o}C 3N(p){8(1o(p)){E i=(p.3Q(\'98\')>-1)?I:K,r=(p.3Q(\'3f\')>-1)?I:K}O{E i=r=K}G[i,r]}C 5W(a){G(Y(a))?a:2G}C 6l(a){G(a===2G)}C 1G(a){G(6l(a)||2W a==\'7M\'||a===\'\'||a===\'7M\')}C 2U(a){G(a 2V 99)}C 2t(a){G(a 2V 7N)}C 1D(a){G((a 2V 9a||2W a==\'2f\')&&!6l(a)&&!2t(a)&&!2U(a))}C Y(a){G((a 2V 47||2W a==\'27\')&&!9b(a))}C 1o(a){G((a 2V 9c||2W a==\'2M\')&&!1G(a)&&!3p(a)&&!4Y(a))}C 1n(a){G(a 2V 9d||2W a==\'C\')}C 1l(a){G(a 2V 9e||2W a==\'3c\'||3p(a)||4Y(a))}C 3p(a){G(a===I||a===\'I\')}C 4Y(a){G(a===K||a===\'K\')}C 3T(x){G(1o(x)&&x.17(-1)==\'%\')}C 2n(){G 6a 7y().2n()}C 2J(o,n){18(I,o+\' 2e 9f, 9g 1j 9h 9i 9j 9k. 9l \'+n+\' 9m.\')}C 18(d,m){8(1D(d)){E s=\' (\'+d.4k+\')\';d=d.18}O{E s=\'\'}8(!d){G K}8(1o(m)){m=\'1w\'+s+\': \'+m}O{m=[\'1w\'+s+\':\',m]}8(3l.6m&&3l.6m.7O){3l.6m.7O(m)}G K}$.1N($.2j,{\'9n\':C(t){E a=t*t;G t*(-a*t+4*a-6*t+4)},\'9o\':C(t){G t*(4*t*t-9*t+6)},\'9p\':C(t){E a=t*t;G t*(33*a*a-9q*a*t+9r*a-67*t+15)}})})(7N);',62,586,'|||||||opts|if||||||||||||||||||||||||||||||function|items|var|conf|return|cf_e|true|itms|false|visible|auto|width|else|total|case|trigger|length|visibleConf|scrl|prev|button|next|is_number|first||bind|children|css|tt0||break|slice|debug|anims|pagination|push|variable|height|progress|stopPropagation|call|mousewheel|padding|for|this|is_boolean|left|is_function|is_string|data|swipe|wrp|fn|filter|tmrs|fade|carouFredSel|_onafter|_moveitems|container|align|switch|duration|is_object|_s_paddingold|_s_paddingcur|is_undefined|play|Math|cover|_position|opacity|scroll|extend|eq|_a_wrapper|triggerHandler|usePadding|marginRight|circular|sz_resetMargin|fx|uncover|each|max|i_cur_l|old|isScrolling|i_old_l|unbind||cookie|isPaused|number|a_cfs|_cfs_origCssMargin|clbk|direction|isStopped|stopImmediatePropagation|is|object|while|i_new|w_siz|easing|nr|responsive|synchronise|getTime|Not|bar|i_new_l|a_cur|remove|is_jquery|outerWidth|avail_primary|adjust|default|cf_c|ceil|pR|_s_paddingnew|queu|preventDefault|a_itm|pauseOnHover|null|options|100|deprecated|timeoutDuration|startTime|string|removeClass|sc_startScroll|i_skp|ms_getTotalSize|a_old|a_lef|a_dur|is_array|instanceof|typeof|key|adj|opts_orig||gn_getVisibleItemsNext|cf_getItemsAdjust||min|right|addClass||||pause|perc|boolean|cf_sortParams|scrolling|resume|onAfter|i_old|last|crossfade|slideTo|window|start|outerHeight|_cfs_triggerEvent|is_true|top|hidden|sc_clearTimers|pre|post|timePassed|Carousel|events|queue|infinite|nv_enableNavi|i_siz|i_siz_vis|_a_paddingold|_a_paddingcur|get|onBefore|updatePageStatus|gi_getCurrentItems|gn_getItemIndex|anchorBuilder|event|sizesConf|bt_pauseOnHoverConfig|ns2|split|indexOf|go_getObject|serialNumber|is_percentage|gn_getVisibleItemsNextFilter|orgCSS|position|none|sc_stopScroll|dur2||prefix|appendTo|sc_setScroll|sc_fireCallbacks|currentPage|before|Number|of||document|the|touchwipe|wN|onTouch|hide|parseInt|floor|show|ms_getTrueLargestSize|selector|currentPosition|destroy|up|maxDimension|primarySizePercentage|ms_getPercentage|org|onTimeoutStart|onTimeoutPause|onTimeoutEnd|sz_storeMargin|stopped|updater|minimum|configuration|gn_getVisibleItemsPrev|cf_getAdjust|to|onEnd|clone|cf_getAlignPadding|cf_mapWrapperSizes|ms_getSizes|a_wsz|a_new|a_cfs_vis|end|updateSizes|eval|sz_setSizes|pgs|nv_showNavi|mouseenter|mouseleave|pauseOnEvent|keys|wipe|di|go_getNaviObject|is_false|sz||prop|element|starting_position|_cfs_isCarousel|_cfs_init|go_getPrevNextObject|defaults||ms_getParentSize|ms_getMaxDimension|center|in_getResponsiveValues|bottom|in_getAlignPadding|go_complementPrevNextObject|cf_getSynchArr|onPauseStart|onPausePause|onPauseEnd|pauseDuration|in_mapCss|marginBottom|newPosition|sz_storeSizes|sz_setResponsiveSizes|_cfs_unbind_events|stop|finish|interval|type|conditions|gn_getVisibleOrg|backward|sc_hideHiddenItems|a_lef_vis|sc_getDuration|_a_paddingnew|not|sc_showHiddenItems|sc_mapCallbackArguments|sc_afterScroll|sc_fireQueue|cf_setCookie|gn_getVisibleItemsNextTestCircular|slideToPage|valid|linkAnchors|value|_cfs_bind_buttons|click|deviation|_cfs_unbind_buttons|scrolled|down|onMouse|swP|swN|bt_mousesheelNumber|delay|_windowWidth|_windowHeight||nh|pauseOnResize|ns3|wrapper|parent|continue||classnames|set|new|cf_getKeyCode|gn_getItemsPrevFilter|gn_getItemsNextFilter|seco|nw|ms_getLargestSize|toLowerCase|ms_hasVariableSizes|sta|cf_getItemAdjustMinMax|is_null|console|caroufredsel|No|go_getItemsObject|go_getScrollObject|go_getAutoObject|go_getPaginationObject|go_getSwipeObject|go_getMousewheelObject|cf_getDimensions|in_complementItems|in_complementPrimarySize|in_complementSecondarySize|upDateOnWindowResize|in_complementVisibleItems|cf_getPadding|500|go_complementAutoObject|go_complementPaginationObject|go_complementSwipeObject|go_complementMousewheelObject|_cfs_build|textAlign|float|marginTop|marginLeft|absolute|_cfs_origCss|_cfs_bind_events|paused|enough|needed|page|slide_|gn_getScrollItemsPrevFilter|Scrolling|prependTo|gi_getOldItemsPrev|gi_getNewItemsPrev|directscroll|concat|gn_getScrollItemsNextFilter|forward|gi_getOldItemsNext|gi_getNewItemsNext|jumpToStart|after|append|removeItem|round|hash|index|selected|gn_getVisibleItemsPrevFilter|_cfs_origCssSizes|Item|keyup|keyCode|plugin|scN|cursor|The|option|mcN|configs|classname|cf_getCookie|random|itm|onCreate|namespace|pageAnchorBuilder|span|progressbarUpdater|Date|_cfs_isHidden|triggerOnTouchEnd|_cfs_tempCssMargin|newS|secp|ms_getPaddingBorderMargin|l1|l2|join|innerWidth|innerHeight|dx|Set|undefined|jQuery|log|found|caroufredsel_cookie_|relative|fixed|overflow|setInterval|setTimeout|or|Callback|returned|Page|resumed|currently|slide_prev|slide_next|prevPage|nextPage|prepend|carousel|insertItem|add|detach|currentVisible|body|find|Preventing|non|sliding|replaceWith|widths|heights|automatically|touchSwipe|min_move_x|min_move_y|preventDefaultEvents|wipeUp|wipeDown|wipeLeft|wipeRight|ontouchstart|in|swipeUp|swipeDown|swipeLeft|swipeRight|move|resize|wrap|class|unshift|location|swing|cfs|div|caroufredsel_wrapper|href|charAt|setTime|1000|expires|toGMTString|path|orgDuration|animate|complete|shift|clearTimeout|clearInterval|skipped|Hiding|navigation|disabled|2500|Width|outer|px|em|even|odd|Infinity|immediate|Array|Object|isNaN|String|Function|Boolean|DEPRECATED|support|it|will|be|removed|Use|instead|quadratic|cubic|elastic|106|126'.split('|'),0,{}))
/*
 * jQuery Easing Compatibility v1 - http://gsgd.co.uk/sandbox/jquery.easing.php
 *
 * Adds compatibility for applications that use the pre 1.2 easing names
 *
 * Copyright (c) 2007 George Smith
 * Licensed under the MIT License:
 *   http://www.opensource.org/licenses/mit-license.php
 */

jQuery.extend( jQuery.easing,
{
	easeIn: function (x, t, b, c, d) {
		return jQuery.easing.easeInQuad(x, t, b, c, d);
	},
	easeOut: function (x, t, b, c, d) {
		return jQuery.easing.easeOutQuad(x, t, b, c, d);
	},
	easeInOut: function (x, t, b, c, d) {
		return jQuery.easing.easeInOutQuad(x, t, b, c, d);
	},
	expoin: function(x, t, b, c, d) {
		return jQuery.easing.easeInExpo(x, t, b, c, d);
	},
	expoout: function(x, t, b, c, d) {
		return jQuery.easing.easeOutExpo(x, t, b, c, d);
	},
	expoinout: function(x, t, b, c, d) {
		return jQuery.easing.easeInOutExpo(x, t, b, c, d);
	},
	bouncein: function(x, t, b, c, d) {
		return jQuery.easing.easeInBounce(x, t, b, c, d);
	},
	bounceout: function(x, t, b, c, d) {
		return jQuery.easing.easeOutBounce(x, t, b, c, d);
	},
	bounceinout: function(x, t, b, c, d) {
		return jQuery.easing.easeInOutBounce(x, t, b, c, d);
	},
	elasin: function(x, t, b, c, d) {
		return jQuery.easing.easeInElastic(x, t, b, c, d);
	},
	elasout: function(x, t, b, c, d) {
		return jQuery.easing.easeOutElastic(x, t, b, c, d);
	},
	elasinout: function(x, t, b, c, d) {
		return jQuery.easing.easeInOutElastic(x, t, b, c, d);
	},
	backin: function(x, t, b, c, d) {
		return jQuery.easing.easeInBack(x, t, b, c, d);
	},
	backout: function(x, t, b, c, d) {
		return jQuery.easing.easeOutBack(x, t, b, c, d);
	},
	backinout: function(x, t, b, c, d) {
		return jQuery.easing.easeInOutBack(x, t, b, c, d);
	}
});
/*! Copyright (c) 2011 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.6
 * 
 * Requires: 1.2.2+
 */
(function(a){function d(b){var c=b||window.event,d=[].slice.call(arguments,1),e=0,f=!0,g=0,h=0;return b=a.event.fix(c),b.type="mousewheel",c.wheelDelta&&(e=c.wheelDelta/120),c.detail&&(e=-c.detail/3),h=e,c.axis!==undefined&&c.axis===c.HORIZONTAL_AXIS&&(h=0,g=-1*e),c.wheelDeltaY!==undefined&&(h=c.wheelDeltaY/120),c.wheelDeltaX!==undefined&&(g=-1*c.wheelDeltaX/120),d.unshift(b,e,g,h),(a.event.dispatch||a.event.handle).apply(this,d)}var b=["DOMMouseScroll","mousewheel"];if(a.event.fixHooks)for(var c=b.length;c;)a.event.fixHooks[b[--c]]=a.event.mouseHooks;a.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var a=b.length;a;)this.addEventListener(b[--a],d,!1);else this.onmousewheel=d},teardown:function(){if(this.removeEventListener)for(var a=b.length;a;)this.removeEventListener(b[--a],d,!1);else this.onmousewheel=null}},a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})})(jQuery);

/*! SmartMenus jQuery Plugin - v1.0.0 - January 27, 2016
 * http://www.smartmenus.org/
 * Copyright Vasil Dinkov, Vadikom Web Ltd. http://vadikom.com; Licensed MIT */(function(t){"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof module&&"object"==typeof module.exports?module.exports=t(require("jquery")):t(jQuery)})(function(t){function i(i){var a=".smartmenus_mouse";if(h||i)h&&i&&(t(document).unbind(a),h=!1);else{var u=!0,l=null;t(document).bind(s([["mousemove",function(i){var e={x:i.pageX,y:i.pageY,timeStamp:(new Date).getTime()};if(l){var s=Math.abs(l.x-e.x),a=Math.abs(l.y-e.y);if((s>0||a>0)&&2>=s&&2>=a&&300>=e.timeStamp-l.timeStamp&&(r=!0,u)){var n=t(i.target).closest("a");n.is("a")&&t.each(o,function(){return t.contains(this.$root[0],n[0])?(this.itemEnter({currentTarget:n[0]}),!1):void 0}),u=!1}}l=e}],[n?"touchstart":"pointerover pointermove pointerout MSPointerOver MSPointerMove MSPointerOut",function(t){e(t.originalEvent)&&(r=!1)}]],a)),h=!0}}function e(t){return!/^(4|mouse)$/.test(t.pointerType)}function s(i,e){e||(e="");var s={};return t.each(i,function(t,i){s[i[0].split(" ").join(e+" ")+e]=i[1]}),s}var o=[],a=!!window.createPopup,r=!1,n="ontouchstart"in window,h=!1,u=window.requestAnimationFrame||function(t){return setTimeout(t,1e3/60)},l=window.cancelAnimationFrame||function(t){clearTimeout(t)};return t.SmartMenus=function(i,e){this.$root=t(i),this.opts=e,this.rootId="",this.accessIdPrefix="",this.$subArrow=null,this.activatedItems=[],this.visibleSubMenus=[],this.showTimeout=0,this.hideTimeout=0,this.scrollTimeout=0,this.clickActivated=!1,this.focusActivated=!1,this.zIndexInc=0,this.idInc=0,this.$firstLink=null,this.$firstSub=null,this.disabled=!1,this.$disableOverlay=null,this.$touchScrollingSub=null,this.cssTransforms3d="perspective"in i.style||"webkitPerspective"in i.style,this.wasCollapsible=!1,this.init()},t.extend(t.SmartMenus,{hideAll:function(){t.each(o,function(){this.menuHideAll()})},destroy:function(){for(;o.length;)o[0].destroy();i(!0)},prototype:{init:function(e){var a=this;if(!e){o.push(this),this.rootId=((new Date).getTime()+Math.random()+"").replace(/\D/g,""),this.accessIdPrefix="sm-"+this.rootId+"-",this.$root.hasClass("sm-rtl")&&(this.opts.rightToLeftSubMenus=!0);var r=".smartmenus";this.$root.data("smartmenus",this).attr("data-smartmenus-id",this.rootId).dataSM("level",1).bind(s([["mouseover focusin",t.proxy(this.rootOver,this)],["mouseout focusout",t.proxy(this.rootOut,this)],["keydown",t.proxy(this.rootKeyDown,this)]],r)).delegate("a",s([["mouseenter",t.proxy(this.itemEnter,this)],["mouseleave",t.proxy(this.itemLeave,this)],["mousedown",t.proxy(this.itemDown,this)],["focus",t.proxy(this.itemFocus,this)],["blur",t.proxy(this.itemBlur,this)],["click",t.proxy(this.itemClick,this)]],r)),r+=this.rootId,this.opts.hideOnClick&&t(document).bind(s([["touchstart",t.proxy(this.docTouchStart,this)],["touchmove",t.proxy(this.docTouchMove,this)],["touchend",t.proxy(this.docTouchEnd,this)],["click",t.proxy(this.docClick,this)]],r)),t(window).bind(s([["resize orientationchange",t.proxy(this.winResize,this)]],r)),this.opts.subIndicators&&(this.$subArrow=t("<span/>").addClass("sub-arrow"),this.opts.subIndicatorsText&&this.$subArrow.html(this.opts.subIndicatorsText)),i()}if(this.$firstSub=this.$root.find("ul").each(function(){a.menuInit(t(this))}).eq(0),this.$firstLink=this.$root.find("a").eq(0),this.opts.markCurrentItem){var n=/(index|default)\.[^#\?\/]*/i,h=/#.*/,u=window.location.href.replace(n,""),l=u.replace(h,"");this.$root.find("a").each(function(){var i=this.href.replace(n,""),e=t(this);(i==u||i==l)&&(e.addClass("current"),a.opts.markCurrentTree&&e.parentsUntil("[data-smartmenus-id]","ul").each(function(){t(this).dataSM("parent-a").addClass("current")}))})}this.wasCollapsible=this.isCollapsible()},destroy:function(i){if(!i){var e=".smartmenus";this.$root.removeData("smartmenus").removeAttr("data-smartmenus-id").removeDataSM("level").unbind(e).undelegate(e),e+=this.rootId,t(document).unbind(e),t(window).unbind(e),this.opts.subIndicators&&(this.$subArrow=null)}this.menuHideAll();var s=this;this.$root.find("ul").each(function(){var i=t(this);i.dataSM("scroll-arrows")&&i.dataSM("scroll-arrows").remove(),i.dataSM("shown-before")&&((s.opts.subMenusMinWidth||s.opts.subMenusMaxWidth)&&i.css({width:"",minWidth:"",maxWidth:""}).removeClass("sm-nowrap"),i.dataSM("scroll-arrows")&&i.dataSM("scroll-arrows").remove(),i.css({zIndex:"",top:"",left:"",marginLeft:"",marginTop:"",display:""})),0==(i.attr("id")||"").indexOf(s.accessIdPrefix)&&i.removeAttr("id")}).removeDataSM("in-mega").removeDataSM("shown-before").removeDataSM("ie-shim").removeDataSM("scroll-arrows").removeDataSM("parent-a").removeDataSM("level").removeDataSM("beforefirstshowfired").removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeAttr("aria-expanded"),this.$root.find("a.has-submenu").each(function(){var i=t(this);0==i.attr("id").indexOf(s.accessIdPrefix)&&i.removeAttr("id")}).removeClass("has-submenu").removeDataSM("sub").removeAttr("aria-haspopup").removeAttr("aria-controls").removeAttr("aria-expanded").closest("li").removeDataSM("sub"),this.opts.subIndicators&&this.$root.find("span.sub-arrow").remove(),this.opts.markCurrentItem&&this.$root.find("a.current").removeClass("current"),i||(this.$root=null,this.$firstLink=null,this.$firstSub=null,this.$disableOverlay&&(this.$disableOverlay.remove(),this.$disableOverlay=null),o.splice(t.inArray(this,o),1))},disable:function(i){if(!this.disabled){if(this.menuHideAll(),!i&&!this.opts.isPopup&&this.$root.is(":visible")){var e=this.$root.offset();this.$disableOverlay=t('<div class="sm-jquery-disable-overlay"/>').css({position:"absolute",top:e.top,left:e.left,width:this.$root.outerWidth(),height:this.$root.outerHeight(),zIndex:this.getStartZIndex(!0),opacity:0}).appendTo(document.body)}this.disabled=!0}},docClick:function(i){return this.$touchScrollingSub?(this.$touchScrollingSub=null,void 0):((this.visibleSubMenus.length&&!t.contains(this.$root[0],i.target)||t(i.target).is("a"))&&this.menuHideAll(),void 0)},docTouchEnd:function(){if(this.lastTouch){if(!(!this.visibleSubMenus.length||void 0!==this.lastTouch.x2&&this.lastTouch.x1!=this.lastTouch.x2||void 0!==this.lastTouch.y2&&this.lastTouch.y1!=this.lastTouch.y2||this.lastTouch.target&&t.contains(this.$root[0],this.lastTouch.target))){this.hideTimeout&&(clearTimeout(this.hideTimeout),this.hideTimeout=0);var i=this;this.hideTimeout=setTimeout(function(){i.menuHideAll()},350)}this.lastTouch=null}},docTouchMove:function(t){if(this.lastTouch){var i=t.originalEvent.touches[0];this.lastTouch.x2=i.pageX,this.lastTouch.y2=i.pageY}},docTouchStart:function(t){var i=t.originalEvent.touches[0];this.lastTouch={x1:i.pageX,y1:i.pageY,target:i.target}},enable:function(){this.disabled&&(this.$disableOverlay&&(this.$disableOverlay.remove(),this.$disableOverlay=null),this.disabled=!1)},getClosestMenu:function(i){for(var e=t(i).closest("ul");e.dataSM("in-mega");)e=e.parent().closest("ul");return e[0]||null},getHeight:function(t){return this.getOffset(t,!0)},getOffset:function(t,i){var e;"none"==t.css("display")&&(e={position:t[0].style.position,visibility:t[0].style.visibility},t.css({position:"absolute",visibility:"hidden"}).show());var s=t[0].getBoundingClientRect&&t[0].getBoundingClientRect(),o=s&&(i?s.height||s.bottom-s.top:s.width||s.right-s.left);return o||0===o||(o=i?t[0].offsetHeight:t[0].offsetWidth),e&&t.hide().css(e),o},getStartZIndex:function(t){var i=parseInt(this[t?"$root":"$firstSub"].css("z-index"));return!t&&isNaN(i)&&(i=parseInt(this.$root.css("z-index"))),isNaN(i)?1:i},getTouchPoint:function(t){return t.touches&&t.touches[0]||t.changedTouches&&t.changedTouches[0]||t},getViewport:function(t){var i=t?"Height":"Width",e=document.documentElement["client"+i],s=window["inner"+i];return s&&(e=Math.min(e,s)),e},getViewportHeight:function(){return this.getViewport(!0)},getViewportWidth:function(){return this.getViewport()},getWidth:function(t){return this.getOffset(t)},handleEvents:function(){return!this.disabled&&this.isCSSOn()},handleItemEvents:function(t){return this.handleEvents()&&!this.isLinkInMegaMenu(t)},isCollapsible:function(){return"static"==this.$firstSub.css("position")},isCSSOn:function(){return"block"==this.$firstLink.css("display")},isFixed:function(){var i="fixed"==this.$root.css("position");return i||this.$root.parentsUntil("body").each(function(){return"fixed"==t(this).css("position")?(i=!0,!1):void 0}),i},isLinkInMegaMenu:function(i){return t(this.getClosestMenu(i[0])).hasClass("mega-menu")},isTouchMode:function(){return!r||this.opts.noMouseOver||this.isCollapsible()},itemActivate:function(i,e){var s=i.closest("ul"),o=s.dataSM("level");if(o>1&&(!this.activatedItems[o-2]||this.activatedItems[o-2][0]!=s.dataSM("parent-a")[0])){var a=this;t(s.parentsUntil("[data-smartmenus-id]","ul").get().reverse()).add(s).each(function(){a.itemActivate(t(this).dataSM("parent-a"))})}if((!this.isCollapsible()||e)&&this.menuHideSubMenus(this.activatedItems[o-1]&&this.activatedItems[o-1][0]==i[0]?o:o-1),this.activatedItems[o-1]=i,this.$root.triggerHandler("activate.smapi",i[0])!==!1){var r=i.dataSM("sub");r&&(this.isTouchMode()||!this.opts.showOnClick||this.clickActivated)&&this.menuShow(r)}},itemBlur:function(i){var e=t(i.currentTarget);this.handleItemEvents(e)&&this.$root.triggerHandler("blur.smapi",e[0])},itemClick:function(i){var e=t(i.currentTarget);if(this.handleItemEvents(e)){if(this.$touchScrollingSub&&this.$touchScrollingSub[0]==e.closest("ul")[0])return this.$touchScrollingSub=null,i.stopPropagation(),!1;if(this.$root.triggerHandler("click.smapi",e[0])===!1)return!1;var s=t(i.target).is("span.sub-arrow"),o=e.dataSM("sub"),a=o?2==o.dataSM("level"):!1;if(o&&!o.is(":visible")){if(this.opts.showOnClick&&a&&(this.clickActivated=!0),this.itemActivate(e),o.is(":visible"))return this.focusActivated=!0,!1}else if(this.isCollapsible()&&s)return this.itemActivate(e),this.menuHide(o),!1;return this.opts.showOnClick&&a||e.hasClass("disabled")||this.$root.triggerHandler("select.smapi",e[0])===!1?!1:void 0}},itemDown:function(i){var e=t(i.currentTarget);this.handleItemEvents(e)&&e.dataSM("mousedown",!0)},itemEnter:function(i){var e=t(i.currentTarget);if(this.handleItemEvents(e)){if(!this.isTouchMode()){this.showTimeout&&(clearTimeout(this.showTimeout),this.showTimeout=0);var s=this;this.showTimeout=setTimeout(function(){s.itemActivate(e)},this.opts.showOnClick&&1==e.closest("ul").dataSM("level")?1:this.opts.showTimeout)}this.$root.triggerHandler("mouseenter.smapi",e[0])}},itemFocus:function(i){var e=t(i.currentTarget);this.handleItemEvents(e)&&(!this.focusActivated||this.isTouchMode()&&e.dataSM("mousedown")||this.activatedItems.length&&this.activatedItems[this.activatedItems.length-1][0]==e[0]||this.itemActivate(e,!0),this.$root.triggerHandler("focus.smapi",e[0]))},itemLeave:function(i){var e=t(i.currentTarget);this.handleItemEvents(e)&&(this.isTouchMode()||(e[0].blur(),this.showTimeout&&(clearTimeout(this.showTimeout),this.showTimeout=0)),e.removeDataSM("mousedown"),this.$root.triggerHandler("mouseleave.smapi",e[0]))},menuHide:function(i){if(this.$root.triggerHandler("beforehide.smapi",i[0])!==!1&&(i.stop(!0,!0),"none"!=i.css("display"))){var e=function(){i.css("z-index","")};this.isCollapsible()?this.opts.collapsibleHideFunction?this.opts.collapsibleHideFunction.call(this,i,e):i.hide(this.opts.collapsibleHideDuration,e):this.opts.hideFunction?this.opts.hideFunction.call(this,i,e):i.hide(this.opts.hideDuration,e),i.dataSM("ie-shim")&&i.dataSM("ie-shim").remove().css({"-webkit-transform":"",transform:""}),i.dataSM("scroll")&&(this.menuScrollStop(i),i.css({"touch-action":"","-ms-touch-action":"","-webkit-transform":"",transform:""}).unbind(".smartmenus_scroll").removeDataSM("scroll").dataSM("scroll-arrows").hide()),i.dataSM("parent-a").removeClass("highlighted").attr("aria-expanded","false"),i.attr({"aria-expanded":"false","aria-hidden":"true"});var s=i.dataSM("level");this.activatedItems.splice(s-1,1),this.visibleSubMenus.splice(t.inArray(i,this.visibleSubMenus),1),this.$root.triggerHandler("hide.smapi",i[0])}},menuHideAll:function(){this.showTimeout&&(clearTimeout(this.showTimeout),this.showTimeout=0);for(var t=this.opts.isPopup?1:0,i=this.visibleSubMenus.length-1;i>=t;i--)this.menuHide(this.visibleSubMenus[i]);this.opts.isPopup&&(this.$root.stop(!0,!0),this.$root.is(":visible")&&(this.opts.hideFunction?this.opts.hideFunction.call(this,this.$root):this.$root.hide(this.opts.hideDuration),this.$root.dataSM("ie-shim")&&this.$root.dataSM("ie-shim").remove())),this.activatedItems=[],this.visibleSubMenus=[],this.clickActivated=!1,this.focusActivated=!1,this.zIndexInc=0,this.$root.triggerHandler("hideAll.smapi")},menuHideSubMenus:function(t){for(var i=this.activatedItems.length-1;i>=t;i--){var e=this.activatedItems[i].dataSM("sub");e&&this.menuHide(e)}},menuIframeShim:function(i){a&&this.opts.overlapControlsInIE&&!i.dataSM("ie-shim")&&i.dataSM("ie-shim",t("<iframe/>").attr({src:"javascript:0",tabindex:-9}).css({position:"absolute",top:"auto",left:"0",opacity:0,border:"0"}))},menuInit:function(t){if(!t.dataSM("in-mega")){t.hasClass("mega-menu")&&t.find("ul").dataSM("in-mega",!0);for(var i=2,e=t[0];(e=e.parentNode.parentNode)!=this.$root[0];)i++;var s=t.prevAll("a").eq(-1);s.length||(s=t.prevAll().find("a").eq(-1)),s.addClass("has-submenu").dataSM("sub",t),t.dataSM("parent-a",s).dataSM("level",i).parent().dataSM("sub",t);var o=s.attr("id")||this.accessIdPrefix+ ++this.idInc,a=t.attr("id")||this.accessIdPrefix+ ++this.idInc;s.attr({id:o,"aria-haspopup":"true","aria-controls":a,"aria-expanded":"false"}),t.attr({id:a,role:"group","aria-hidden":"true","aria-labelledby":o,"aria-expanded":"false"}),this.opts.subIndicators&&s[this.opts.subIndicatorsPos](this.$subArrow.clone())}},menuPosition:function(i){var e,o,a=i.dataSM("parent-a"),r=a.closest("li"),h=r.parent(),u=i.dataSM("level"),l=this.getWidth(i),c=this.getHeight(i),d=a.offset(),m=d.left,p=d.top,f=this.getWidth(a),v=this.getHeight(a),b=t(window),S=b.scrollLeft(),g=b.scrollTop(),M=this.getViewportWidth(),w=this.getViewportHeight(),T=h.parent().is("[data-sm-horizontal-sub]")||2==u&&!h.hasClass("sm-vertical"),$=this.opts.rightToLeftSubMenus&&!r.is("[data-sm-reverse]")||!this.opts.rightToLeftSubMenus&&r.is("[data-sm-reverse]"),y=2==u?this.opts.mainMenuSubOffsetX:this.opts.subMenusSubOffsetX,I=2==u?this.opts.mainMenuSubOffsetY:this.opts.subMenusSubOffsetY;if(T?(e=$?f-l-y:y,o=this.opts.bottomToTopSubMenus?-c-I:v+I):(e=$?y-l:f-y,o=this.opts.bottomToTopSubMenus?v-I-c:I),this.opts.keepInViewport){var x=m+e,C=p+o;if($&&S>x?e=T?S-x+e:f-y:!$&&x+l>S+M&&(e=T?S+M-l-x+e:y-l),T||(w>c&&C+c>g+w?o+=g+w-c-C:(c>=w||g>C)&&(o+=g-C)),T&&(C+c>g+w+.49||g>C)||!T&&c>w+.49){var H=this;i.dataSM("scroll-arrows")||i.dataSM("scroll-arrows",t([t('<span class="scroll-up"><span class="scroll-up-arrow"></span></span>')[0],t('<span class="scroll-down"><span class="scroll-down-arrow"></span></span>')[0]]).bind({mouseenter:function(){i.dataSM("scroll").up=t(this).hasClass("scroll-up"),H.menuScroll(i)},mouseleave:function(t){H.menuScrollStop(i),H.menuScrollOut(i,t)},"mousewheel DOMMouseScroll":function(t){t.preventDefault()}}).insertAfter(i));var A=".smartmenus_scroll";i.dataSM("scroll",{y:this.cssTransforms3d?0:o-v,step:1,itemH:v,subH:c,arrowDownH:this.getHeight(i.dataSM("scroll-arrows").eq(1))}).bind(s([["mouseover",function(t){H.menuScrollOver(i,t)}],["mouseout",function(t){H.menuScrollOut(i,t)}],["mousewheel DOMMouseScroll",function(t){H.menuScrollMousewheel(i,t)}]],A)).dataSM("scroll-arrows").css({top:"auto",left:"0",marginLeft:e+(parseInt(i.css("border-left-width"))||0),width:l-(parseInt(i.css("border-left-width"))||0)-(parseInt(i.css("border-right-width"))||0),zIndex:i.css("z-index")}).eq(T&&this.opts.bottomToTopSubMenus?0:1).show(),this.isFixed()&&i.css({"touch-action":"none","-ms-touch-action":"none"}).bind(s([[n?"touchstart touchmove touchend":"pointerdown pointermove pointerup MSPointerDown MSPointerMove MSPointerUp",function(t){H.menuScrollTouch(i,t)}]],A))}}i.css({top:"auto",left:"0",marginLeft:e,marginTop:o-v}),this.menuIframeShim(i),i.dataSM("ie-shim")&&i.dataSM("ie-shim").css({zIndex:i.css("z-index"),width:l,height:c,marginLeft:e,marginTop:o-v})},menuScroll:function(t,i,e){var s,o=t.dataSM("scroll"),a=t.dataSM("scroll-arrows"),n=o.up?o.upEnd:o.downEnd;if(!i&&o.momentum){if(o.momentum*=.92,s=o.momentum,.5>s)return this.menuScrollStop(t),void 0}else s=e||(i||!this.opts.scrollAccelerate?this.opts.scrollStep:Math.floor(o.step));var h=t.dataSM("level");if(this.activatedItems[h-1]&&this.activatedItems[h-1].dataSM("sub")&&this.activatedItems[h-1].dataSM("sub").is(":visible")&&this.menuHideSubMenus(h-1),o.y=o.up&&o.y>=n||!o.up&&n>=o.y?o.y:Math.abs(n-o.y)>s?o.y+(o.up?s:-s):n,t.add(t.dataSM("ie-shim")).css(this.cssTransforms3d?{"-webkit-transform":"translate3d(0, "+o.y+"px, 0)",transform:"translate3d(0, "+o.y+"px, 0)"}:{marginTop:o.y}),r&&(o.up&&o.y>o.downEnd||!o.up&&o.y<o.upEnd)&&a.eq(o.up?1:0).show(),o.y==n)r&&a.eq(o.up?0:1).hide(),this.menuScrollStop(t);else if(!i){this.opts.scrollAccelerate&&o.step<this.opts.scrollStep&&(o.step+=.2);var l=this;this.scrollTimeout=u(function(){l.menuScroll(t)})}},menuScrollMousewheel:function(t,i){if(this.getClosestMenu(i.target)==t[0]){i=i.originalEvent;var e=(i.wheelDelta||-i.detail)>0;t.dataSM("scroll-arrows").eq(e?0:1).is(":visible")&&(t.dataSM("scroll").up=e,this.menuScroll(t,!0))}i.preventDefault()},menuScrollOut:function(i,e){r&&(/^scroll-(up|down)/.test((e.relatedTarget||"").className)||(i[0]==e.relatedTarget||t.contains(i[0],e.relatedTarget))&&this.getClosestMenu(e.relatedTarget)==i[0]||i.dataSM("scroll-arrows").css("visibility","hidden"))},menuScrollOver:function(i,e){if(r&&!/^scroll-(up|down)/.test(e.target.className)&&this.getClosestMenu(e.target)==i[0]){this.menuScrollRefreshData(i);var s=i.dataSM("scroll"),o=t(window).scrollTop()-i.dataSM("parent-a").offset().top-s.itemH;i.dataSM("scroll-arrows").eq(0).css("margin-top",o).end().eq(1).css("margin-top",o+this.getViewportHeight()-s.arrowDownH).end().css("visibility","visible")}},menuScrollRefreshData:function(i){var e=i.dataSM("scroll"),s=t(window).scrollTop()-i.dataSM("parent-a").offset().top-e.itemH;this.cssTransforms3d&&(s=-(parseFloat(i.css("margin-top"))-s)),t.extend(e,{upEnd:s,downEnd:s+this.getViewportHeight()-e.subH})},menuScrollStop:function(t){return this.scrollTimeout?(l(this.scrollTimeout),this.scrollTimeout=0,t.dataSM("scroll").step=1,!0):void 0},menuScrollTouch:function(i,s){if(s=s.originalEvent,e(s)){var o=this.getTouchPoint(s);if(this.getClosestMenu(o.target)==i[0]){var a=i.dataSM("scroll");if(/(start|down)$/i.test(s.type))this.menuScrollStop(i)?(s.preventDefault(),this.$touchScrollingSub=i):this.$touchScrollingSub=null,this.menuScrollRefreshData(i),t.extend(a,{touchStartY:o.pageY,touchStartTime:s.timeStamp});else if(/move$/i.test(s.type)){var r=void 0!==a.touchY?a.touchY:a.touchStartY;if(void 0!==r&&r!=o.pageY){this.$touchScrollingSub=i;var n=o.pageY>r;void 0!==a.up&&a.up!=n&&t.extend(a,{touchStartY:o.pageY,touchStartTime:s.timeStamp}),t.extend(a,{up:n,touchY:o.pageY}),this.menuScroll(i,!0,Math.abs(o.pageY-r))}s.preventDefault()}else void 0!==a.touchY&&((a.momentum=15*Math.pow(Math.abs(o.pageY-a.touchStartY)/(s.timeStamp-a.touchStartTime),2))&&(this.menuScrollStop(i),this.menuScroll(i),s.preventDefault()),delete a.touchY)}}},menuShow:function(t){if((t.dataSM("beforefirstshowfired")||(t.dataSM("beforefirstshowfired",!0),this.$root.triggerHandler("beforefirstshow.smapi",t[0])!==!1))&&this.$root.triggerHandler("beforeshow.smapi",t[0])!==!1&&(t.dataSM("shown-before",!0).stop(!0,!0),!t.is(":visible"))){var i=t.dataSM("parent-a");if((this.opts.keepHighlighted||this.isCollapsible())&&i.addClass("highlighted"),this.isCollapsible())t.removeClass("sm-nowrap").css({zIndex:"",width:"auto",minWidth:"",maxWidth:"",top:"",left:"",marginLeft:"",marginTop:""});else{if(t.css("z-index",this.zIndexInc=(this.zIndexInc||this.getStartZIndex())+1),(this.opts.subMenusMinWidth||this.opts.subMenusMaxWidth)&&(t.css({width:"auto",minWidth:"",maxWidth:""}).addClass("sm-nowrap"),this.opts.subMenusMinWidth&&t.css("min-width",this.opts.subMenusMinWidth),this.opts.subMenusMaxWidth)){var e=this.getWidth(t);t.css("max-width",this.opts.subMenusMaxWidth),e>this.getWidth(t)&&t.removeClass("sm-nowrap").css("width",this.opts.subMenusMaxWidth)}this.menuPosition(t),t.dataSM("ie-shim")&&t.dataSM("ie-shim").insertBefore(t)}var s=function(){t.css("overflow","")};this.isCollapsible()?this.opts.collapsibleShowFunction?this.opts.collapsibleShowFunction.call(this,t,s):t.show(this.opts.collapsibleShowDuration,s):this.opts.showFunction?this.opts.showFunction.call(this,t,s):t.show(this.opts.showDuration,s),i.attr("aria-expanded","true"),t.attr({"aria-expanded":"true","aria-hidden":"false"}),this.visibleSubMenus.push(t),this.$root.triggerHandler("show.smapi",t[0])}},popupHide:function(t){this.hideTimeout&&(clearTimeout(this.hideTimeout),this.hideTimeout=0);var i=this;this.hideTimeout=setTimeout(function(){i.menuHideAll()},t?1:this.opts.hideTimeout)},popupShow:function(t,i){if(!this.opts.isPopup)return alert('SmartMenus jQuery Error:\n\nIf you want to show this menu via the "popupShow" method, set the isPopup:true option.'),void 0;if(this.hideTimeout&&(clearTimeout(this.hideTimeout),this.hideTimeout=0),this.$root.dataSM("shown-before",!0).stop(!0,!0),!this.$root.is(":visible")){this.$root.css({left:t,top:i}),this.menuIframeShim(this.$root),this.$root.dataSM("ie-shim")&&this.$root.dataSM("ie-shim").css({zIndex:this.$root.css("z-index"),width:this.getWidth(this.$root),height:this.getHeight(this.$root),left:t,top:i}).insertBefore(this.$root);var e=this,s=function(){e.$root.css("overflow","")};this.opts.showFunction?this.opts.showFunction.call(this,this.$root,s):this.$root.show(this.opts.showDuration,s),this.visibleSubMenus[0]=this.$root}},refresh:function(){this.destroy(!0),this.init(!0)},rootKeyDown:function(i){if(this.handleEvents())switch(i.keyCode){case 27:var e=this.activatedItems[0];if(e){this.menuHideAll(),e[0].focus();var s=e.dataSM("sub");s&&this.menuHide(s)}break;case 32:var o=t(i.target);if(o.is("a")&&this.handleItemEvents(o)){var s=o.dataSM("sub");s&&!s.is(":visible")&&(this.itemClick({currentTarget:i.target}),i.preventDefault())}}},rootOut:function(t){if(this.handleEvents()&&!this.isTouchMode()&&t.target!=this.$root[0]&&(this.hideTimeout&&(clearTimeout(this.hideTimeout),this.hideTimeout=0),!this.opts.showOnClick||!this.opts.hideOnClick)){var i=this;this.hideTimeout=setTimeout(function(){i.menuHideAll()},this.opts.hideTimeout)}},rootOver:function(t){this.handleEvents()&&!this.isTouchMode()&&t.target!=this.$root[0]&&this.hideTimeout&&(clearTimeout(this.hideTimeout),this.hideTimeout=0)},winResize:function(t){if(this.handleEvents()){if(!("onorientationchange"in window)||"orientationchange"==t.type){var i=this.isCollapsible();this.wasCollapsible&&i||(this.activatedItems.length&&this.activatedItems[this.activatedItems.length-1][0].blur(),this.menuHideAll()),this.wasCollapsible=i}}else if(this.$disableOverlay){var e=this.$root.offset();this.$disableOverlay.css({top:e.top,left:e.left,width:this.$root.outerWidth(),height:this.$root.outerHeight()})}}}}),t.fn.dataSM=function(t,i){return i?this.data(t+"_smartmenus",i):this.data(t+"_smartmenus")},t.fn.removeDataSM=function(t){return this.removeData(t+"_smartmenus")},t.fn.smartmenus=function(i){if("string"==typeof i){var e=arguments,s=i;return Array.prototype.shift.call(e),this.each(function(){var i=t(this).data("smartmenus");i&&i[s]&&i[s].apply(i,e)})}var o=t.extend({},t.fn.smartmenus.defaults,i);return this.each(function(){new t.SmartMenus(this,o)})},t.fn.smartmenus.defaults={isPopup:!1,mainMenuSubOffsetX:0,mainMenuSubOffsetY:0,subMenusSubOffsetX:0,subMenusSubOffsetY:0,subMenusMinWidth:"10em",subMenusMaxWidth:"20em",subIndicators:!0,subIndicatorsPos:"prepend",subIndicatorsText:"+",scrollStep:30,scrollAccelerate:!0,showTimeout:250,hideTimeout:500,showDuration:0,showFunction:null,hideDuration:0,hideFunction:function(t,i){t.fadeOut(200,i)},collapsibleShowDuration:0,collapsibleShowFunction:function(t,i){t.slideDown(200,i)},collapsibleHideDuration:0,collapsibleHideFunction:function(t,i){t.slideUp(200,i)},showOnClick:!1,hideOnClick:!0,noMouseOver:!1,keepInViewport:!0,keepHighlighted:!0,markCurrentItem:!1,markCurrentTree:!0,rightToLeftSubMenus:!1,bottomToTopSubMenus:!1,overlapControlsInIE:!0},t});
/*
* touchSwipe - jQuery Plugin
* https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
* http://labs.skinkers.com/touchSwipe/
* http://plugins.jquery.com/project/touchSwipe
*
* Copyright (c) 2010 Matt Bryson (www.skinkers.com)
* Dual licensed under the MIT or GPL Version 2 licenses.
*
* $version: 1.3.3
*/

(function(g){function P(c){if(c&&void 0===c.allowPageScroll&&(void 0!==c.swipe||void 0!==c.swipeStatus))c.allowPageScroll=G;c||(c={});c=g.extend({},g.fn.swipe.defaults,c);return this.each(function(){var b=g(this),f=b.data(w);f||(f=new W(this,c),b.data(w,f))})}function W(c,b){var f,p,r,s;function H(a){var a=a.originalEvent,c,Q=n?a.touches[0]:a;d=R;n?h=a.touches.length:a.preventDefault();i=0;j=null;k=0;!n||h===b.fingers||b.fingers===x?(r=f=Q.pageX,s=p=Q.pageY,y=(new Date).getTime(),b.swipeStatus&&(c= l(a,d))):t(a);if(!1===c)return d=m,l(a,d),c;e.bind(I,J);e.bind(K,L)}function J(a){a=a.originalEvent;if(!(d===q||d===m)){var c,e=n?a.touches[0]:a;f=e.pageX;p=e.pageY;u=(new Date).getTime();j=S();n&&(h=a.touches.length);d=z;var e=a,g=j;if(b.allowPageScroll===G)e.preventDefault();else{var o=b.allowPageScroll===T;switch(g){case v:(b.swipeLeft&&o||!o&&b.allowPageScroll!=M)&&e.preventDefault();break;case A:(b.swipeRight&&o||!o&&b.allowPageScroll!=M)&&e.preventDefault();break;case B:(b.swipeUp&&o||!o&&b.allowPageScroll!= N)&&e.preventDefault();break;case C:(b.swipeDown&&o||!o&&b.allowPageScroll!=N)&&e.preventDefault()}}h===b.fingers||b.fingers===x||!n?(i=U(),k=u-y,b.swipeStatus&&(c=l(a,d,j,i,k)),b.triggerOnTouchEnd||(e=!(b.maxTimeThreshold?!(k>=b.maxTimeThreshold):1),!0===D()?(d=q,c=l(a,d)):e&&(d=m,l(a,d)))):(d=m,l(a,d));!1===c&&(d=m,l(a,d))}}function L(a){a=a.originalEvent;a.preventDefault();u=(new Date).getTime();i=U();j=S();k=u-y;if(b.triggerOnTouchEnd||!1===b.triggerOnTouchEnd&&d===z)if(d=q,(h===b.fingers||b.fingers=== x||!n)&&0!==f){var c=!(b.maxTimeThreshold?!(k>=b.maxTimeThreshold):1);if((!0===D()||null===D())&&!c)l(a,d);else if(c||!1===D())d=m,l(a,d)}else d=m,l(a,d);else d===z&&(d=m,l(a,d));e.unbind(I,J,!1);e.unbind(K,L,!1)}function t(){y=u=p=f=s=r=h=0}function l(a,c){var d=void 0;b.swipeStatus&&(d=b.swipeStatus.call(e,a,c,j||null,i||0,k||0,h));if(c===m&&b.click&&(1===h||!n)&&(isNaN(i)||0===i))d=b.click.call(e,a,a.target);if(c==q)switch(b.swipe&&(d=b.swipe.call(e,a,j,i,k,h)),j){case v:b.swipeLeft&&(d=b.swipeLeft.call(e, a,j,i,k,h));break;case A:b.swipeRight&&(d=b.swipeRight.call(e,a,j,i,k,h));break;case B:b.swipeUp&&(d=b.swipeUp.call(e,a,j,i,k,h));break;case C:b.swipeDown&&(d=b.swipeDown.call(e,a,j,i,k,h))}(c===m||c===q)&&t(a);return d}function D(){return null!==b.threshold?i>=b.threshold:null}function U(){return Math.round(Math.sqrt(Math.pow(f-r,2)+Math.pow(p-s,2)))}function S(){var a;a=Math.atan2(p-s,r-f);a=Math.round(180*a/Math.PI);0>a&&(a=360-Math.abs(a));return 45>=a&&0<=a?v:360>=a&&315<=a?v:135<=a&&225>=a? A:45<a&&135>a?C:B}function V(){e.unbind(E,H);e.unbind(F,t);e.unbind(I,J);e.unbind(K,L)}var O=n||!b.fallbackToMouseEvents,E=O?"touchstart":"mousedown",I=O?"touchmove":"mousemove",K=O?"touchend":"mouseup",F="touchcancel",i=0,j=null,k=0,e=g(c),d="start",h=0,y=p=f=s=r=0,u=0;try{e.bind(E,H),e.bind(F,t)}catch(P){g.error("events not supported "+E+","+F+" on jQuery.swipe")}this.enable=function(){e.bind(E,H);e.bind(F,t);return e};this.disable=function(){V();return e};this.destroy=function(){V();e.data(w,null); return e}}var v="left",A="right",B="up",C="down",G="none",T="auto",M="horizontal",N="vertical",x="all",R="start",z="move",q="end",m="cancel",n="ontouchstart"in window,w="TouchSwipe";g.fn.swipe=function(c){var b=g(this),f=b.data(w);if(f&&"string"===typeof c){if(f[c])return f[c].apply(this,Array.prototype.slice.call(arguments,1));g.error("Method "+c+" does not exist on jQuery.swipe")}else if(!f&&("object"===typeof c||!c))return P.apply(this,arguments);return b};g.fn.swipe.defaults={fingers:1,threshold:75, maxTimeThreshold:null,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,click:null,triggerOnTouchEnd:!0,allowPageScroll:"auto",fallbackToMouseEvents:!0};g.fn.swipe.phases={PHASE_START:R,PHASE_MOVE:z,PHASE_END:q,PHASE_CANCEL:m};g.fn.swipe.directions={LEFT:v,RIGHT:A,UP:B,DOWN:C};g.fn.swipe.pageScroll={NONE:G,HORIZONTAL:M,VERTICAL:N,AUTO:T};g.fn.swipe.fingers={ONE:1,TWO:2,THREE:3,ALL:x}})(jQuery);
jQuery(document).ready(function () {

    if (is_touch_device())
    {
        jQuery('.full-screen-scroll article').css('opacity', '1', '!important');
    }

    var ua = navigator.userAgent.toLowerCase();
    if ((ua.indexOf("safari/") !== -1 && ua.indexOf("windows") !== -1 && ua.indexOf("chrom") === -1) || is_touch_device())
    {

        jQuery("html").css('overflow', 'auto');

        jQuery(".scroll-top").click(function () {
            jQuery('html, body').animate({scrollTop: 0}, 2000);
            return false;
        });

    } else
    {
        jQuery("html, .menu-left-part, #cbp-bislideshow.scroll").niceScroll({cursorcolor: "#5B5B5B", scrollspeed: 100, mousescrollstep: 80, cursorwidth: "12px", cursorborder: "none", cursorborderradius: "0px"});

        //Scroll Top animation
        jQuery(".scroll-top").click(function () {
            jQuery("html").getNiceScroll(0).doScrollTop(0);
        });

        jQuery(".sidebar").mouseover(function () {
            jQuery(".menu-left-part").getNiceScroll().resize();
        });
    }


    //Placeholder show/hide
    jQuery('input, textarea').focus(function () {
        jQuery(this).data('placeholder', jQuery(this).attr('placeholder'));
        jQuery(this).attr('placeholder', '');
    });
    jQuery('input, textarea').blur(function () {
        jQuery(this).attr('placeholder', jQuery(this).data('placeholder'));
    });


// preload the images
    jQuery('#cbp-bislideshow.scroll').imagesLoaded(function () {
        var count = 0;
        var scrollItemWidth = jQuery('.cbp-bislideshow.scroll li').outerWidth();
        jQuery('#cbp-bislideshow.scroll').children('li').each(function () {
            var $item = jQuery(this);
            $item.css({'left': count * scrollItemWidth});
            count++;
        });
    });

    //Fix for default menu
    jQuery('.default-menu ul').addClass('main-menu sm sm-clean');

});



jQuery(window).load(function () {

    jQuery(".blog-item-holder").hover(function () {
        jQuery(".blog-item-holder").not(this).addClass('blur');
    },
            function () {
                jQuery(".blog-item-holder").removeClass('blur');
            });


//Set menu
    jQuery('.main-menu').smartmenus({
        subMenusSubOffsetX: 1,
        subMenusSubOffsetY: -8,
        markCurrentItem: true
    });


//Set each image slider
    jQuery(".image-slider").each(function () {
        var id = jQuery(this).attr('id');
        if (window[id + '_pagination'] == 'true')
        {
            var pagination_value = '.' + id + '_pagination';
        } else
        {
            var pagination_value = false;
        }

        var auto_value = window[id + '_auto'];
        if (auto_value == 'false')
        {
            auto_value = false;
        } else {
            auto_value = true;
        }

        var hover_pause = window[id + '_hover'];
        if (hover_pause == 'true')
        {
            hover_pause = 'resume';
        } else {
            hover_pause = false;
        }

        var speed_value = window[id + '_speed'];

        jQuery('#' + id).carouFredSel({
            responsive: true,
            width: 'variable',
            auto: {
                play: auto_value,
                pauseOnHover: hover_pause
            },
            pagination: pagination_value,
            scroll: {
                fx: 'crossfade',
                duration: parseFloat(speed_value)
            },
            swipe: {
                onMouse: true,
                onTouch: true
            },
            items: {
                height: 'variable'
            }
        });
    });

    jQuery('.carousel_pagination').each(function () {
        var pagination_width = jQuery(this).width();
        var windw_width = jQuery('.image-slider-wrapper').width();
        jQuery(this).css("margin-left", (windw_width - pagination_width) / 2);
    });


//Show-Hide header sidebar
    jQuery('#toggle').on("click", multiClickFunctionStop);
    
    //Fix for sidebar height
    jQuery("#sidebar").css('minHeight', jQuery("#content").outerHeight());

    jQuery('.doc-loader').fadeOut('fast');
});


jQuery(window).resize(function () {

//Fix for sidebar height
    jQuery("#sidebar").css('minHeight', jQuery("#content").outerHeight());

    jQuery('.menu-left-part.open').width(jQuery('.sidebar.open').width() - jQuery('.menu-right-part.open').width());

    var count = 0;
    var scrollItemWidth = jQuery('.cbp-bislideshow.scroll li').outerWidth();
    jQuery('#cbp-bislideshow.scroll').children('li').each(function () {
        var $item = jQuery(this);
        $item.css({'left': count * scrollItemWidth});
        count++;
    });

    jQuery('.carousel_pagination').each(function () {
        var pagination_width = jQuery(this).width();
        var windw_width = jQuery('.image-slider-wrapper').width();
        jQuery(this).css("margin-left", (windw_width - pagination_width) / 2);
    });

});

//------------------------------------------------------------------------
//Helper Methods -->
//------------------------------------------------------------------------


var multiClickFunctionStop = function (e) {
    e.preventDefault();
    jQuery('#toggle').off("click");
    jQuery('#toggle').toggleClass("on");
    jQuery('html, body, .sidebar, .menu-left-part, .menu-right-part').toggleClass("open");
    jQuery('.menu-left-part').width('320px');
    jQuery('.menu-left-part.open').width(jQuery('.sidebar.open').width() - jQuery('.menu-right-part.open').width());
    jQuery('#toggle').on("click", multiClickFunctionStop);
};

function is_touch_device() {
    return !!('ontouchstart' in window);
}

jQuery(window).bind("scroll", function () {
    if (jQuery(this).scrollTop() > 700) {
        jQuery('.scroll-top').fadeIn(500);
    } else
    {
        jQuery('.scroll-top').fadeOut(500);
    }
});

function isValidEmailAddress(emailAddress) {
    var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return pattern.test(emailAddress);
}


var SendMail = function (e) {

    var emailVal = jQuery('#contact-email').val();

    if (isValidEmailAddress(emailVal)) {
        var params = {
            'action': 'SendMessage',
            'name': jQuery('#name').val(),
            'email': jQuery('#contact-email').val(),
            'subject': jQuery('#subject').val(),
            'message': jQuery('#message').val(),
            '_token': jQuery('#token').val(),
        };

        jQuery.ajax({
            type: "POST",
            url: "/contact/email",
            data: params,
            success: function (response) {
                if (response) {
                    
                    if (response.success === true) {
                       
                        jQuery('#name').val('');
                        jQuery('#contact-email').val('');
                        jQuery('#subject').val('');
                        jQuery('#message').val('');

                        alert('Thank you for submitting your request.');
                    }
                }
            },
            error: function (xhr, ajaxOptions, thrownError) {

                //xhr.status : 404, 303, 501...
                var error = null;
                switch (xhr.status)
                {
                    case 301:
                        error = "Redirection Error!";
                        break;
                    case 307:
                        error = "Error, temporary server redirection!";
                        break;
                    case 400:
                        error = "Bad request!";
                        break;
                    case 404:
                        error = "Page not found!";
                        break;
                    case 422:
                        var errors =  xhr.responseJSON.errors;
                        error = '';
                        Object.keys(errors).forEach(function (fieldName) {
                            error += fieldName + ': ' + errors[fieldName].join(' ') + '\n';
                        });

                        break;
                    case 500:
                        error = "Server is currently unavailable!";
                        break;
                    default:
                        error = "Unespected error, please try again later.";
                }
                if (error) {
                    alert(error);
                }
            }
        });
    } else
    {
        alert('Your email is not in valid format');
    }
};