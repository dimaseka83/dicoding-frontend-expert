(()=>{var e={666:e=>{var t=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,s="function"==typeof Symbol?Symbol:{},a=s.iterator||"@@iterator",i=s.asyncIterator||"@@asyncIterator",o=s.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,r){return e[t]=r}}function h(e,t,r,n){var s=t&&t.prototype instanceof y?t:y,a=Object.create(s.prototype),i=new T(n||[]);return a._invoke=function(e,t,r){var n=u;return function(s,a){if(n===f)throw new Error("Generator is already running");if(n===p){if("throw"===s)throw a;return N()}for(r.method=s,r.arg=a;;){var i=r.delegate;if(i){var o=E(i,r);if(o){if(o===g)continue;return o}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===u)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=f;var c=l(e,t,r);if("normal"===c.type){if(n=r.done?p:d,c.arg===g)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=p,r.method="throw",r.arg=c.arg)}}}(e,r,i),a}function l(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=h;var u="suspendedStart",d="suspendedYield",f="executing",p="completed",g={};function y(){}function m(){}function w(){}var v={};c(v,a,(function(){return this}));var _=Object.getPrototypeOf,b=_&&_(_(q([])));b&&b!==r&&n.call(b,a)&&(v=b);var x=w.prototype=y.prototype=Object.create(v);function R(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function L(e,t){function r(s,a,i,o){var c=l(e[s],e,a);if("throw"!==c.type){var h=c.arg,u=h.value;return u&&"object"==typeof u&&n.call(u,"__await")?t.resolve(u.__await).then((function(e){r("next",e,i,o)}),(function(e){r("throw",e,i,o)})):t.resolve(u).then((function(e){h.value=e,i(h)}),(function(e){return r("throw",e,i,o)}))}o(c.arg)}var s;this._invoke=function(e,n){function a(){return new t((function(t,s){r(e,n,t,s)}))}return s=s?s.then(a,a):a()}}function E(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,E(e,r),"throw"===r.method))return g;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var s=l(n,e.iterator,r.arg);if("throw"===s.type)return r.method="throw",r.arg=s.arg,r.delegate=null,g;var a=s.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function C(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function k(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function T(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(C,this),this.reset(!0)}function q(e){if(e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var s=-1,i=function r(){for(;++s<e.length;)if(n.call(e,s))return r.value=e[s],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}return{next:N}}function N(){return{value:t,done:!0}}return m.prototype=w,c(x,"constructor",w),c(w,"constructor",m),m.displayName=c(w,o,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,w):(e.__proto__=w,c(e,o,"GeneratorFunction")),e.prototype=Object.create(x),e},e.awrap=function(e){return{__await:e}},R(L.prototype),c(L.prototype,i,(function(){return this})),e.AsyncIterator=L,e.async=function(t,r,n,s,a){void 0===a&&(a=Promise);var i=new L(h(t,r,n,s),a);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},R(x),c(x,o,"Generator"),c(x,a,(function(){return this})),c(x,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=q,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(k),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function s(n,s){return o.type="throw",o.arg=e,r.next=n,s&&(r.method="next",r.arg=t),!!s}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],o=i.completion;if("root"===i.tryLoc)return s("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),h=n.call(i,"finallyLoc");if(c&&h){if(this.prev<i.catchLoc)return s(i.catchLoc,!0);if(this.prev<i.finallyLoc)return s(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return s(i.catchLoc,!0)}else{if(!h)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return s(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var s=this.tryEntries[r];if(s.tryLoc<=this.prev&&n.call(s,"finallyLoc")&&this.prev<s.finallyLoc){var a=s;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,g):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),k(r),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var s=n.arg;k(r)}return s}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:q(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}(e.exports);try{regeneratorRuntime=t}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=t:Function("r","regeneratorRuntime = r")(t)}},913:()=>{"use strict";try{self["workbox:core:6.5.3"]&&_()}catch(e){}},550:()=>{"use strict";try{self["workbox:expiration:6.5.3"]&&_()}catch(e){}},977:()=>{"use strict";try{self["workbox:precaching:6.5.3"]&&_()}catch(e){}},80:()=>{"use strict";try{self["workbox:routing:6.5.3"]&&_()}catch(e){}},873:()=>{"use strict";try{self["workbox:strategies:6.5.3"]&&_()}catch(e){}}},t={};function r(n){var s=t[n];if(void 0!==s)return s.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}(()=>{"use strict";r(666),r(913);class e extends Error{constructor(e,t){super(((e,...t)=>{let r=e;return t.length>0&&(r+=` :: ${JSON.stringify(t)}`),r})(e,t)),this.name=e,this.details=t}}const t=new Set,n={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},s=e=>[n.prefix,e,n.suffix].filter((e=>e&&e.length>0)).join("-"),a=e=>e||s(n.precache),i=e=>e||s(n.runtime);function o(e,t){const r=new URL(e);for(const e of t)r.searchParams.delete(e);return r.href}let c;function h(e){e.then((()=>{}))}class l{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}function u(e,t){const r=t();return e.waitUntil(r),r}function d(t){if(!t)throw new e("add-to-cache-list-unexpected-type",{entry:t});if("string"==typeof t){const e=new URL(t,location.href);return{cacheKey:e.href,url:e.href}}const{revision:r,url:n}=t;if(!n)throw new e("add-to-cache-list-unexpected-type",{entry:t});if(!r){const e=new URL(n,location.href);return{cacheKey:e.href,url:e.href}}const s=new URL(n,location.href),a=new URL(n,location.href);return s.searchParams.set("__WB_REVISION__",r),{cacheKey:s.href,url:a.href}}r(977);class f{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:r})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;r?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return r}}}class p{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const r=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return r?new Request(r,{headers:e.headers}):e},this._precacheController=e}}function g(e){return"string"==typeof e?new Request(e):e}r(873);class y{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new l,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(t){const{event:r}=this;let n=g(t);if("navigate"===n.mode&&r instanceof FetchEvent&&r.preloadResponse){const e=await r.preloadResponse;if(e)return e}const s=this.hasCallback("fetchDidFail")?n.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))n=await e({request:n.clone(),event:r})}catch(t){if(t instanceof Error)throw new e("plugin-error-request-will-fetch",{thrownErrorMessage:t.message})}const a=n.clone();try{let e;e=await fetch(n,"navigate"===n.mode?void 0:this._strategy.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:r,request:a,response:e});return e}catch(e){throw s&&await this.runCallbacks("fetchDidFail",{error:e,event:r,originalRequest:s.clone(),request:a.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),r=t.clone();return this.waitUntil(this.cachePut(e,r)),t}async cacheMatch(e){const t=g(e);let r;const{cacheName:n,matchOptions:s}=this._strategy,a=await this.getCacheKey(t,"read"),i=Object.assign(Object.assign({},s),{cacheName:n});r=await caches.match(a,i);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))r=await e({cacheName:n,matchOptions:s,cachedResponse:r,request:a,event:this.event})||void 0;return r}async cachePut(r,n){const s=g(r);await(0,new Promise((e=>setTimeout(e,0))));const a=await this.getCacheKey(s,"write");if(!n)throw new e("cache-put-with-no-response",{url:(i=a.url,new URL(String(i),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var i;const c=await this._ensureResponseSafeToCache(n);if(!c)return!1;const{cacheName:h,matchOptions:l}=this._strategy,u=await self.caches.open(h),d=this.hasCallback("cacheDidUpdate"),f=d?await async function(e,t,r,n){const s=o(t.url,r);if(t.url===s)return e.match(t,n);const a=Object.assign(Object.assign({},n),{ignoreSearch:!0}),i=await e.keys(t,a);for(const t of i)if(s===o(t.url,r))return e.match(t,n)}(u,a.clone(),["__WB_REVISION__"],l):null;try{await u.put(a,d?c.clone():c)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of t)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:h,oldResponse:f,newResponse:c.clone(),request:a,event:this.event});return!0}async getCacheKey(e,t){const r=`${e.url} | ${t}`;if(!this._cacheKeys[r]){let n=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))n=g(await e({mode:t,request:n,event:this.event,params:this.params}));this._cacheKeys[r]=n}return this._cacheKeys[r]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const r of this.iterateCallbacks(e))await r(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const r=this._pluginStateMap.get(t),n=n=>{const s=Object.assign(Object.assign({},n),{state:r});return t[e](s)};yield n}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,r=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,r=!0,!t)break;return r||t&&200!==t.status&&(t=void 0),t}}class m{constructor(e={}){this.cacheName=i(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,r="string"==typeof e.request?new Request(e.request):e.request,n="params"in e?e.params:void 0,s=new y(this,{event:t,request:r,params:n}),a=this._getResponse(s,r,t);return[a,this._awaitComplete(a,s,r,t)]}async _getResponse(t,r,n){let s;await t.runCallbacks("handlerWillStart",{event:n,request:r});try{if(s=await this._handle(r,t),!s||"error"===s.type)throw new e("no-response",{url:r.url})}catch(e){if(e instanceof Error)for(const a of t.iterateCallbacks("handlerDidError"))if(s=await a({error:e,event:n,request:r}),s)break;if(!s)throw e}for(const e of t.iterateCallbacks("handlerWillRespond"))s=await e({event:n,request:r,response:s});return s}async _awaitComplete(e,t,r,n){let s,a;try{s=await e}catch(a){}try{await t.runCallbacks("handlerDidRespond",{event:n,request:r,response:s}),await t.doneWaiting()}catch(e){e instanceof Error&&(a=e)}if(await t.runCallbacks("handlerDidComplete",{event:n,request:r,response:s,error:a}),t.destroy(),a)throw a}}class w extends m{constructor(e={}){e.cacheName=a(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(w.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){return await t.cacheMatch(e)||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(t,r){let n;const s=r.params||{};if(!this._fallbackToNetwork)throw new e("missing-precache-entry",{cacheName:this.cacheName,url:t.url});{const e=s.integrity,a=t.integrity,i=!a||a===e;n=await r.fetch(new Request(t,{integrity:"no-cors"!==t.mode?a||e:void 0})),e&&i&&"no-cors"!==t.mode&&(this._useDefaultCacheabilityPluginIfNeeded(),await r.cachePut(t,n.clone()))}return n}async _handleInstall(t,r){this._useDefaultCacheabilityPluginIfNeeded();const n=await r.fetch(t);if(!await r.cachePut(t,n.clone()))throw new e("bad-precaching-response",{url:t.url,status:n.status});return n}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[r,n]of this.plugins.entries())n!==w.copyRedirectedCacheableResponsesPlugin&&(n===w.defaultPrecacheCacheabilityPlugin&&(e=r),n.cacheWillUpdate&&t++);0===t?this.plugins.push(w.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}w.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},w.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:t})=>t.redirected?await async function(t,r){let n=null;if(t.url&&(n=new URL(t.url).origin),n!==self.location.origin)throw new e("cross-origin-copy-response",{origin:n});const s=t.clone(),a={headers:new Headers(s.headers),status:s.status,statusText:s.statusText},i=r?r(a):a,o=function(){if(void 0===c){const e=new Response("");if("body"in e)try{new Response(e.body),c=!0}catch(e){c=!1}c=!1}return c}()?s.body:await s.blob();return new Response(o,i)}(t):t};class v{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:r=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new w({cacheName:a(e),plugins:[...t,new p({precacheController:this})],fallbackToNetwork:r}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(t){const r=[];for(const n of t){"string"==typeof n?r.push(n):n&&void 0===n.revision&&r.push(n.url);const{cacheKey:t,url:s}=d(n),a="string"!=typeof n&&n.revision?"reload":"default";if(this._urlsToCacheKeys.has(s)&&this._urlsToCacheKeys.get(s)!==t)throw new e("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(s),secondEntry:t});if("string"!=typeof n&&n.integrity){if(this._cacheKeysToIntegrities.has(t)&&this._cacheKeysToIntegrities.get(t)!==n.integrity)throw new e("add-to-cache-list-conflicting-integrities",{url:s});this._cacheKeysToIntegrities.set(t,n.integrity)}if(this._urlsToCacheKeys.set(s,t),this._urlsToCacheModes.set(s,a),r.length>0){const e=`Workbox is precaching URLs without revision info: ${r.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return u(e,(async()=>{const t=new f;this.strategy.plugins.push(t);for(const[t,r]of this._urlsToCacheKeys){const n=this._cacheKeysToIntegrities.get(r),s=this._urlsToCacheModes.get(t),a=new Request(t,{integrity:n,cache:s,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:r},request:a,event:e}))}const{updatedURLs:r,notUpdatedURLs:n}=t;return{updatedURLs:r,notUpdatedURLs:n}}))}activate(e){return u(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),r=new Set(this._urlsToCacheKeys.values()),n=[];for(const s of t)r.has(s.url)||(await e.delete(s),n.push(s.url));return{deletedURLs:n}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,r=this.getCacheKeyForURL(t);if(r)return(await self.caches.open(this.strategy.cacheName)).match(r)}createHandlerBoundToURL(t){const r=this.getCacheKeyForURL(t);if(!r)throw new e("non-precached-url",{url:t});return e=>(e.request=new Request(t),e.params=Object.assign({cacheKey:r},e.params),this.strategy.handle(e))}}let _;const b=()=>(_||(_=new v),_);r(80);const x=e=>e&&"object"==typeof e?e:{handle:e};class R{constructor(e,t,r="GET"){this.handler=x(t),this.match=e,this.method=r}setCatchHandler(e){this.catchHandler=x(e)}}class L extends R{constructor(e,t,r){super((({url:t})=>{const r=e.exec(t.href);if(r&&(t.origin===location.origin||0===r.index))return r.slice(1)}),t,r)}}class E{constructor(){this._routes=new Map,this._defaultHandlerMap=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",(e=>{const{request:t}=e,r=this.handleRequest({request:t,event:e});r&&e.respondWith(r)}))}addCacheListener(){self.addEventListener("message",(e=>{if(e.data&&"CACHE_URLS"===e.data.type){const{payload:t}=e.data,r=Promise.all(t.urlsToCache.map((t=>{"string"==typeof t&&(t=[t]);const r=new Request(...t);return this.handleRequest({request:r,event:e})})));e.waitUntil(r),e.ports&&e.ports[0]&&r.then((()=>e.ports[0].postMessage(!0)))}}))}handleRequest({request:e,event:t}){const r=new URL(e.url,location.href);if(!r.protocol.startsWith("http"))return;const n=r.origin===location.origin,{params:s,route:a}=this.findMatchingRoute({event:t,request:e,sameOrigin:n,url:r});let i=a&&a.handler;const o=e.method;if(!i&&this._defaultHandlerMap.has(o)&&(i=this._defaultHandlerMap.get(o)),!i)return;let c;try{c=i.handle({url:r,request:e,event:t,params:s})}catch(e){c=Promise.reject(e)}const h=a&&a.catchHandler;return c instanceof Promise&&(this._catchHandler||h)&&(c=c.catch((async n=>{if(h)try{return await h.handle({url:r,request:e,event:t,params:s})}catch(e){e instanceof Error&&(n=e)}if(this._catchHandler)return this._catchHandler.handle({url:r,request:e,event:t});throw n}))),c}findMatchingRoute({url:e,sameOrigin:t,request:r,event:n}){const s=this._routes.get(r.method)||[];for(const a of s){let s;const i=a.match({url:e,sameOrigin:t,request:r,event:n});if(i)return s=i,(Array.isArray(s)&&0===s.length||i.constructor===Object&&0===Object.keys(i).length||"boolean"==typeof i)&&(s=void 0),{route:a,params:s}}return{}}setDefaultHandler(e,t="GET"){this._defaultHandlerMap.set(t,x(e))}setCatchHandler(e){this._catchHandler=x(e)}registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(t){if(!this._routes.has(t.method))throw new e("unregister-route-but-not-found-with-method",{method:t.method});const r=this._routes.get(t.method).indexOf(t);if(!(r>-1))throw new e("unregister-route-route-not-registered");this._routes.get(t.method).splice(r,1)}}let C;function k(t,r,n){let s;if("string"==typeof t){const e=new URL(t,location.href);s=new R((({url:t})=>t.href===e.href),r,n)}else if(t instanceof RegExp)s=new L(t,r,n);else if("function"==typeof t)s=new R(t,r,n);else{if(!(t instanceof R))throw new e("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});s=t}return(C||(C=new E,C.addFetchListener(),C.addCacheListener()),C).registerRoute(s),s}class T extends R{constructor(e,t){super((({request:r})=>{const n=e.getURLsToCacheKeys();for(const s of function*(e,{ignoreURLParametersMatching:t=[/^utm_/,/^fbclid$/],directoryIndex:r="index.html",cleanURLs:n=!0,urlManipulation:s}={}){const a=new URL(e,location.href);a.hash="",yield a.href;const i=function(e,t=[]){for(const r of[...e.searchParams.keys()])t.some((e=>e.test(r)))&&e.searchParams.delete(r);return e}(a,t);if(yield i.href,r&&i.pathname.endsWith("/")){const e=new URL(i.href);e.pathname+=r,yield e.href}if(n){const e=new URL(i.href);e.pathname+=".html",yield e.href}if(s){const e=s({url:a});for(const t of e)yield t.href}}(r.url,t)){const t=n.get(s);if(t)return{cacheKey:t,integrity:e.getIntegrityForCacheKey(t)}}}),e.strategy)}}class q extends m{async _handle(t,r){let n,s=await r.cacheMatch(t);if(s);else try{s=await r.fetchAndCachePut(t)}catch(e){e instanceof Error&&(n=e)}if(!s)throw new e("no-response",{url:t.url,error:n});return s}}const N={cacheWillUpdate:async({response:e})=>200===e.status||0===e.status?e:null};class U extends m{constructor(e={}){super(e),this.plugins.some((e=>"cacheWillUpdate"in e))||this.plugins.unshift(N),this._networkTimeoutSeconds=e.networkTimeoutSeconds||0}async _handle(t,r){const n=[],s=[];let a;if(this._networkTimeoutSeconds){const{id:e,promise:i}=this._getTimeoutPromise({request:t,logs:n,handler:r});a=e,s.push(i)}const i=this._getNetworkPromise({timeoutId:a,request:t,logs:n,handler:r});s.push(i);const o=await r.waitUntil((async()=>await r.waitUntil(Promise.race(s))||await i)());if(!o)throw new e("no-response",{url:t.url});return o}_getTimeoutPromise({request:e,logs:t,handler:r}){let n;return{promise:new Promise((t=>{n=setTimeout((async()=>{t(await r.cacheMatch(e))}),1e3*this._networkTimeoutSeconds)})),id:n}}async _getNetworkPromise({timeoutId:e,request:t,logs:r,handler:n}){let s,a;try{a=await n.fetchAndCachePut(t)}catch(e){e instanceof Error&&(s=e)}return e&&clearTimeout(e),!s&&a||(a=await n.cacheMatch(t)),a}}class D extends m{constructor(e={}){super(e),this.plugins.some((e=>"cacheWillUpdate"in e))||this.plugins.unshift(N)}async _handle(t,r){const n=r.fetchAndCachePut(t).catch((()=>{}));r.waitUntil(n);let s,a=await r.cacheMatch(t);if(a);else try{a=await n}catch(e){e instanceof Error&&(s=e)}if(!a)throw new e("no-response",{url:t.url,error:s});return a}}let P,I;const O=new WeakMap,S=new WeakMap,K=new WeakMap,M=new WeakMap,A=new WeakMap;let j={get(e,t,r){if(e instanceof IDBTransaction){if("done"===t)return S.get(e);if("objectStoreNames"===t)return e.objectStoreNames||K.get(e);if("store"===t)return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return B(e[t])},set:(e,t,r)=>(e[t]=r,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function W(e){return"function"==typeof e?(t=e)!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(I||(I=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(F(this),e),B(O.get(this))}:function(...e){return B(t.apply(F(this),e))}:function(e,...r){const n=t.call(F(this),e,...r);return K.set(n,e.sort?e.sort():[e]),B(n)}:(e instanceof IDBTransaction&&function(e){if(S.has(e))return;const t=new Promise(((t,r)=>{const n=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",a),e.removeEventListener("abort",a)},s=()=>{t(),n()},a=()=>{r(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",s),e.addEventListener("error",a),e.addEventListener("abort",a)}));S.set(e,t)}(e),r=e,(P||(P=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>r instanceof e))?new Proxy(e,j):e);var t,r}function B(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,r)=>{const n=()=>{e.removeEventListener("success",s),e.removeEventListener("error",a)},s=()=>{t(B(e.result)),n()},a=()=>{r(e.error),n()};e.addEventListener("success",s),e.addEventListener("error",a)}));return t.then((t=>{t instanceof IDBCursor&&O.set(t,e)})).catch((()=>{})),A.set(t,e),t}(e);if(M.has(e))return M.get(e);const t=W(e);return t!==e&&(M.set(e,t),A.set(t,e)),t}const F=e=>A.get(e),H=["get","getKey","getAll","getAllKeys","count"],G=["put","add","delete","clear"],$=new Map;function V(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if($.get(t))return $.get(t);const r=t.replace(/FromIndex$/,""),n=t!==r,s=G.includes(r);if(!(r in(n?IDBIndex:IDBObjectStore).prototype)||!s&&!H.includes(r))return;const a=async function(e,...t){const a=this.transaction(e,s?"readwrite":"readonly");let i=a.store;return n&&(i=i.index(t.shift())),(await Promise.all([i[r](...t),s&&a.done]))[0]};return $.set(t,a),a}var Q;Q=j,j={...Q,get:(e,t,r)=>V(e,t)||Q.get(e,t,r),has:(e,t)=>!!V(e,t)||Q.has(e,t)},r(550);const Y="cache-entries",J=e=>{const t=new URL(e,location.href);return t.hash="",t.href};class z{constructor(e){this._db=null,this._cacheName=e}_upgradeDb(e){const t=e.createObjectStore(Y,{keyPath:"id"});t.createIndex("cacheName","cacheName",{unique:!1}),t.createIndex("timestamp","timestamp",{unique:!1})}_upgradeDbAndDeleteOldDbs(e){this._upgradeDb(e),this._cacheName&&function(e,{blocked:t}={}){const r=indexedDB.deleteDatabase(e);t&&r.addEventListener("blocked",(()=>t())),B(r).then((()=>{}))}(this._cacheName)}async setTimestamp(e,t){const r={url:e=J(e),timestamp:t,cacheName:this._cacheName,id:this._getId(e)},n=(await this.getDb()).transaction(Y,"readwrite",{durability:"relaxed"});await n.store.put(r),await n.done}async getTimestamp(e){const t=await this.getDb(),r=await t.get(Y,this._getId(e));return null==r?void 0:r.timestamp}async expireEntries(e,t){const r=await this.getDb();let n=await r.transaction(Y).store.index("timestamp").openCursor(null,"prev");const s=[];let a=0;for(;n;){const r=n.value;r.cacheName===this._cacheName&&(e&&r.timestamp<e||t&&a>=t?s.push(n.value):a++),n=await n.continue()}const i=[];for(const e of s)await r.delete(Y,e.id),i.push(e.url);return i}_getId(e){return this._cacheName+"|"+J(e)}async getDb(){return this._db||(this._db=await function(e,t,{blocked:r,upgrade:n,blocking:s,terminated:a}={}){const i=indexedDB.open(e,t),o=B(i);return n&&i.addEventListener("upgradeneeded",(e=>{n(B(i.result),e.oldVersion,e.newVersion,B(i.transaction))})),r&&i.addEventListener("blocked",(()=>r())),o.then((e=>{a&&e.addEventListener("close",(()=>a())),s&&e.addEventListener("versionchange",(()=>s()))})).catch((()=>{})),o}("workbox-expiration",1,{upgrade:this._upgradeDbAndDeleteOldDbs.bind(this)})),this._db}}class X{constructor(e,t={}){this._isRunning=!1,this._rerunRequested=!1,this._maxEntries=t.maxEntries,this._maxAgeSeconds=t.maxAgeSeconds,this._matchOptions=t.matchOptions,this._cacheName=e,this._timestampModel=new z(e)}async expireEntries(){if(this._isRunning)return void(this._rerunRequested=!0);this._isRunning=!0;const e=this._maxAgeSeconds?Date.now()-1e3*this._maxAgeSeconds:0,t=await this._timestampModel.expireEntries(e,this._maxEntries),r=await self.caches.open(this._cacheName);for(const e of t)await r.delete(e,this._matchOptions);this._isRunning=!1,this._rerunRequested&&(this._rerunRequested=!1,h(this.expireEntries()))}async updateTimestamp(e){await this._timestampModel.setTimestamp(e,Date.now())}async isURLExpired(e){if(this._maxAgeSeconds){const t=await this._timestampModel.getTimestamp(e),r=Date.now()-1e3*this._maxAgeSeconds;return void 0===t||t<r}return!1}async delete(){this._rerunRequested=!1,await this._timestampModel.expireEntries(1/0)}}class Z{constructor(e={}){var r;this.cachedResponseWillBeUsed=async({event:e,request:t,cacheName:r,cachedResponse:n})=>{if(!n)return null;const s=this._isResponseDateFresh(n),a=this._getCacheExpiration(r);h(a.expireEntries());const i=a.updateTimestamp(t.url);if(e)try{e.waitUntil(i)}catch(e){}return s?n:null},this.cacheDidUpdate=async({cacheName:e,request:t})=>{const r=this._getCacheExpiration(e);await r.updateTimestamp(t.url),await r.expireEntries()},this._config=e,this._maxAgeSeconds=e.maxAgeSeconds,this._cacheExpirations=new Map,e.purgeOnQuotaError&&(r=()=>this.deleteCacheAndMetadata(),t.add(r))}_getCacheExpiration(t){if(t===i())throw new e("expire-custom-caches-only");let r=this._cacheExpirations.get(t);return r||(r=new X(t,this._config),this._cacheExpirations.set(t,r)),r}_isResponseDateFresh(e){if(!this._maxAgeSeconds)return!0;const t=this._getDateHeaderTimestamp(e);return null===t||t>=Date.now()-1e3*this._maxAgeSeconds}_getDateHeaderTimestamp(e){if(!e.headers.has("date"))return null;const t=e.headers.get("date"),r=new Date(t).getTime();return isNaN(r)?null:r}async deleteCacheAndMetadata(){for(const[e,t]of this._cacheExpirations)await self.caches.delete(e),await t.delete();this._cacheExpirations=new Map}}var ee,te;te={prefix:"resto-app",suffix:"v1",precache:"precache",runtime:"runtime"},(e=>{for(const t of Object.keys(n))e(t)})((e=>{"string"==typeof te[e]&&(n[e]=te[e])})),ee=[{'revision':'6831ef15ff4c953ba904302f97192d14','url':'bundle.js'},{'revision':'4e0e34f265fae8f33b01b27ae29d9d6f','url':'bundle.js.LICENSE.txt'},{'revision':'11350f7567a98906ae7416e2b28777a7','url':'favicon.ico'},{'revision':'03b421b71c2ca34d203878126a078611','url':'icon/android-icon-144x144.png'},{'revision':'c9e2ade5d7131b709f3e9d8063908681','url':'icon/android-icon-192x192.png'},{'revision':'b6c1042c578e04da6e63559597eafa92','url':'icon/android-icon-36x36.png'},{'revision':'6b7057b28873ab23967832a05aa4c010','url':'icon/android-icon-48x48.png'},{'revision':'3c8d78c18689a2dba19f333c512ef400','url':'icon/android-icon-72x72.png'},{'revision':'32414cd3ab63ec944d7280c1dd1121c1','url':'icon/android-icon-96x96.png'},{'revision':'f2311d133986809b6d9a2157118711b6','url':'icon/apple-icon-114x114.png'},{'revision':'7dfd6f3d47f90bd5873507c186465153','url':'icon/apple-icon-120x120.png'},{'revision':'03b421b71c2ca34d203878126a078611','url':'icon/apple-icon-144x144.png'},{'revision':'6d121ddb5528b93df2402237cca0fd38','url':'icon/apple-icon-152x152.png'},{'revision':'29288bdbd558fe041bca7124bceda06e','url':'icon/apple-icon-180x180.png'},{'revision':'d8005a720ed29873734a926c6911c9fb','url':'icon/apple-icon-57x57.png'},{'revision':'54475329603997c65e65487686be5724','url':'icon/apple-icon-60x60.png'},{'revision':'3c8d78c18689a2dba19f333c512ef400','url':'icon/apple-icon-72x72.png'},{'revision':'171877591dd35ce72e9345fe7a2db30d','url':'icon/apple-icon-76x76.png'},{'revision':'96e7d23fbebb4afcea6d95904ca3a04f','url':'icon/apple-icon-precomposed.png'},{'revision':'96e7d23fbebb4afcea6d95904ca3a04f','url':'icon/apple-icon.png'},{'revision':'653d077300a12f09a69caeea7a8947f8','url':'icon/browserconfig.xml'},{'revision':'658995dfb662c9efe6f6d1b676de4c85','url':'icon/favicon-16x16.png'},{'revision':'b92fac3dabb23b205b26289b6af47b91','url':'icon/favicon-32x32.png'},{'revision':'32414cd3ab63ec944d7280c1dd1121c1','url':'icon/favicon-96x96.png'},{'revision':'11350f7567a98906ae7416e2b28777a7','url':'icon/favicon.ico'},{'revision':'b58fcfa7628c9205cb11a1b2c3e8f99a','url':'icon/manifest.json'},{'revision':'03b421b71c2ca34d203878126a078611','url':'icon/ms-icon-144x144.png'},{'revision':'43c03d148abf7dea0196a3050f7a8575','url':'icon/ms-icon-150x150.png'},{'revision':'81b41396d8cd5efc1db1465ba5c02c2d','url':'icon/ms-icon-310x310.png'},{'revision':'c0d1654c9c10456dbb2bd6410c25c08c','url':'icon/ms-icon-70x70.png'},{'revision':'49f78cae81de4f48caf1c2fe0271c828','url':'images/hero.jpg'},{'revision':'5ed76c47e860823f4dd83c3a2f0223ae','url':'index.html'}],b().precache(ee),function(e){const t=b();k(new T(t,undefined))}(),k((function(e){return"navigate"===e.request.mode}),new U({cacheName:"my-pages-cache"})),k(/^https:\/\/restaurant-api\.dicoding\.dev\/(?:(list|detail))/,new U({cacheName:"dicoding-restaurant-api-cache",plugins:[new Z({maxAgeSeconds:2592e3,maxEntries:100})]})),k((function(e){return"image"===e.request.destination}),new q({cacheName:"my-image-cache",plugins:[new Z({maxAgeSeconds:2592e3,maxEntries:50})]})),k(new RegExp("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.css"),new q({cacheName:"my-font-awesome-css-cache"})),k((function(e){var t=e.url;return"https://fonts.googleapis.com"===t.origin||"https://fonts.gstatic.com"===t.origin}),new D({cacheName:"my-google-fonts-cache",plugins:[new Z({maxEntries:50})]})),k((function(e){var t=e.request;return"style"===t.destination||"script"===t.destination||"worker"===t.destination}),new D({cacheName:"my-assets-cache"})),self.addEventListener("activate",(e=>{const t=a();e.waitUntil((async(e,t="-precache-")=>{const r=(await self.caches.keys()).filter((r=>r.includes(t)&&r.includes(self.registration.scope)&&r!==e));return await Promise.all(r.map((e=>self.caches.delete(e)))),r})(t).then((e=>{})))})),self.addEventListener("message",(function(e){e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}))})()})();
//# sourceMappingURL=sw.js.map