"use strict";(self["webpackChunkcsa_auth"]=self["webpackChunkcsa_auth"]||[]).push([[998],{444:function(e,t,n){n.d(t,{BH:function(){return h},G6:function(){return I},L:function(){return a},LL:function(){return C},Mn:function(){return _},Sg:function(){return d},X3:function(){return H},ZB:function(){return u},ZR:function(){return k},b$:function(){return v},d:function(){return w},eu:function(){return T},hl:function(){return E},jU:function(){return g},m9:function(){return j},ne:function(){return F},pd:function(){return M},r3:function(){return x},ru:function(){return y},tV:function(){return c},uI:function(){return p},vZ:function(){return R},w1:function(){return b},xO:function(){return P},xb:function(){return D},z$:function(){return f},zd:function(){return L}});
/**
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
 */
const r=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=63&s|128):55296===(64512&s)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(s=65536+((1023&s)<<10)+(1023&e.charCodeAt(++r)),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=63&s|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=63&s|128)}return t},s=function(e){const t=[];let n=0,r=0;while(n<e.length){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((31&s)<<6|63&i)}else if(s>239&&s<365){const i=e[n++],o=e[n++],a=e[n++],c=((7&s)<<18|(63&i)<<12|(63&o)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(1023&c))}else{const i=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&s)<<12|(63&i)<<6|63&o)}}return t.join("")},i={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const t=e[s],i=s+1<e.length,o=i?e[s+1]:0,a=s+2<e.length,c=a?e[s+2]:0,u=t>>2,l=(3&t)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,i||(h=64)),r.push(n[u],n[l],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(r(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):s(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const t=n[e.charAt(s++)],i=s<e.length,o=i?n[e.charAt(s)]:0;++s;const a=s<e.length,c=a?n[e.charAt(s)]:64;++s;const u=s<e.length,l=u?n[e.charAt(s)]:64;if(++s,null==t||null==o||null==c||null==l)throw Error();const h=t<<2|o>>4;if(r.push(h),64!==c){const e=o<<4&240|c>>2;if(r.push(e),64!==l){const e=c<<6&192|l;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},o=function(e){const t=r(e);return i.encodeByteArray(t,!0)},a=function(e){return o(e).replace(/\./g,"")},c=function(e){try{return i.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
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
 */function u(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&l(n)&&(e[n]=u(e[n],t[n]));return e}function l(e){return"__proto__"!==e}
/**
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
 */class h{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
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
 */function d(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",s=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e),c="";return[a(JSON.stringify(n)),a(JSON.stringify(o)),c].join(".")}
/**
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
 */function f(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function p(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(f())}function m(){try{return"[object process]"===Object.prototype.toString.call(n.g.process)}catch(e){return!1}}function g(){return"object"===typeof self&&self.self===self}function y(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function v(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function w(){return f().indexOf("Electron/")>=0}function b(){const e=f();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function _(){return f().indexOf("MSAppHost/")>=0}function I(){return!m()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function E(){return"object"===typeof indexedDB}function T(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var e;t((null===(e=s.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}
/**
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
 */
const S="FirebaseError";class k extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=S,Object.setPrototypeOf(this,k.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,C.prototype.create)}}class C{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,s=this.errors[e],i=s?A(s,n):"Error",o=`${this.serviceName}: ${i} (${r}).`,a=new k(r,o,n);return a}}function A(e,t){return e.replace(N,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}const N=/\{\$([^}]+)}/g;
/**
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
 */
/**
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
 */
function x(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function D(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function R(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const n=e[s],i=t[s];if(O(n)&&O(i)){if(!R(n,i))return!1}else if(n!==i)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function O(e){return null!==e&&"object"===typeof e}
/**
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
 */function P(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function L(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function M(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
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
 */function F(e,t){const n=new V(e,t);return n.subscribe.bind(n)}class V{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=U(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=B),void 0===r.error&&(r.error=B),void 0===r.complete&&(r.complete=B);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),s}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function U(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function B(){}
/**
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
 */
/**
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
 */
function j(e){return e&&e._delegate?e._delegate:e}
/**
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
 */function q(e,t){return new Promise(((n,r)=>{e.onsuccess=e=>{n(e.target.result)},e.onerror=e=>{var n;r(`${t}: ${null===(n=e.target.error)||void 0===n?void 0:n.message}`)}}))}class ${constructor(e){this._db=e,this.objectStoreNames=this._db.objectStoreNames}transaction(e,t="readonly"){return new K(this._db.transaction.call(this._db,e,t))}createObjectStore(e,t){return new G(this._db.createObjectStore(e,t))}close(){this._db.close()}}class K{constructor(e){this._transaction=e,this.complete=new Promise(((e,t)=>{this._transaction.oncomplete=function(){e()},this._transaction.onerror=()=>{t(this._transaction.error)},this._transaction.onabort=()=>{t(this._transaction.error)}}))}objectStore(e){return new G(this._transaction.objectStore(e))}}class G{constructor(e){this._store=e}index(e){return new z(this._store.index(e))}createIndex(e,t,n){return new z(this._store.createIndex(e,t,n))}get(e){const t=this._store.get(e);return q(t,"Error reading from IndexedDB")}put(e,t){const n=this._store.put(e,t);return q(n,"Error writing to IndexedDB")}delete(e){const t=this._store.delete(e);return q(t,"Error deleting from IndexedDB")}clear(){const e=this._store.clear();return q(e,"Error clearing IndexedDB object store")}}class z{constructor(e){this._index=e}get(e){const t=this._index.get(e);return q(t,"Error reading from IndexedDB")}}function H(e,t,n){return new Promise(((r,s)=>{try{const i=indexedDB.open(e,t);i.onsuccess=e=>{r(new $(e.target.result))},i.onerror=e=>{var t;s(`Error opening indexedDB: ${null===(t=e.target.error)||void 0===t?void 0:t.message}`)},i.onupgradeneeded=e=>{n(new $(i.result),e.oldVersion,e.newVersion,new K(i.transaction))}}catch(i){s(`Error opening indexedDB: ${i.message}`)}}))}},262:function(e,t,n){n.d(t,{Bj:function(){return i},Fl:function(){return qe},IU:function(){return Ce},Jd:function(){return E},PG:function(){return Ee},SU:function(){return Ve},Um:function(){return be},WL:function(){return Be},X$:function(){return C},X3:function(){return ke},XI:function(){return Le},Xl:function(){return Ae},dq:function(){return Oe},iH:function(){return Pe},j:function(){return S},lk:function(){return T},qj:function(){return we},qq:function(){return w},yT:function(){return Se}});var r=n(577);let s;class i{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&s&&(this.parent=s,this.index=(s.scopes||(s.scopes=[])).push(this)-1)}run(e){if(this.active){const t=s;try{return s=this,e()}finally{s=t}}else 0}on(){s=this}off(){s=this.parent}stop(e){if(this.active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.active=!1}}}function o(e,t=s){t&&t.active&&t.effects.push(e)}const a=e=>{const t=new Set(e);return t.w=0,t.n=0,t},c=e=>(e.w&p)>0,u=e=>(e.n&p)>0,l=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=p},h=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const s=t[r];c(s)&&!u(s)?s.delete(e):t[n++]=s,s.w&=~p,s.n&=~p}t.length=n}},d=new WeakMap;let f=0,p=1;const m=30;let g;const y=Symbol(""),v=Symbol("");class w{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,o(this,n)}run(){if(!this.active)return this.fn();let e=g,t=_;while(e){if(e===this)return;e=e.parent}try{return this.parent=g,g=this,_=!0,p=1<<++f,f<=m?l(this):b(this),this.fn()}finally{f<=m&&h(this),p=1<<--f,g=this.parent,_=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){g===this?this.deferStop=!0:this.active&&(b(this),this.onStop&&this.onStop(),this.active=!1)}}function b(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let _=!0;const I=[];function E(){I.push(_),_=!1}function T(){const e=I.pop();_=void 0===e||e}function S(e,t,n){if(_&&g){let t=d.get(e);t||d.set(e,t=new Map);let r=t.get(n);r||t.set(n,r=a());const s=void 0;k(r,s)}}function k(e,t){let n=!1;f<=m?u(e)||(e.n|=p,n=!c(e)):n=!e.has(g),n&&(e.add(g),g.deps.push(e))}function C(e,t,n,s,i,o){const c=d.get(e);if(!c)return;let u=[];if("clear"===t)u=[...c.values()];else if("length"===n&&(0,r.kJ)(e))c.forEach(((e,t)=>{("length"===t||t>=s)&&u.push(e)}));else switch(void 0!==n&&u.push(c.get(n)),t){case"add":(0,r.kJ)(e)?(0,r.S0)(n)&&u.push(c.get("length")):(u.push(c.get(y)),(0,r._N)(e)&&u.push(c.get(v)));break;case"delete":(0,r.kJ)(e)||(u.push(c.get(y)),(0,r._N)(e)&&u.push(c.get(v)));break;case"set":(0,r._N)(e)&&u.push(c.get(y));break}if(1===u.length)u[0]&&A(u[0]);else{const e=[];for(const t of u)t&&e.push(...t);A(a(e))}}function A(e,t){for(const n of(0,r.kJ)(e)?e:[...e])(n!==g||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const N=(0,r.fY)("__proto__,__v_isRef,__isVue"),x=new Set(Object.getOwnPropertyNames(Symbol).map((e=>Symbol[e])).filter(r.yk)),D=M(),R=M(!1,!0),O=M(!0),P=L();function L(){const e={};return["includes","indexOf","lastIndexOf"].forEach((t=>{e[t]=function(...e){const n=Ce(this);for(let t=0,s=this.length;t<s;t++)S(n,"get",t+"");const r=n[t](...e);return-1===r||!1===r?n[t](...e.map(Ce)):r}})),["push","pop","shift","unshift","splice"].forEach((t=>{e[t]=function(...e){E();const n=Ce(this)[t].apply(this,e);return T(),n}})),e}function M(e=!1,t=!1){return function(n,s,i){if("__v_isReactive"===s)return!e;if("__v_isReadonly"===s)return e;if("__v_isShallow"===s)return t;if("__v_raw"===s&&i===(e?t?ge:me:t?pe:fe).get(n))return n;const o=(0,r.kJ)(n);if(!e&&o&&(0,r.RI)(P,s))return Reflect.get(P,s,i);const a=Reflect.get(n,s,i);if((0,r.yk)(s)?x.has(s):N(s))return a;if(e||S(n,"get",s),t)return a;if(Oe(a)){const e=!o||!(0,r.S0)(s);return e?a.value:a}return(0,r.Kn)(a)?e?_e(a):we(a):a}}const F=U(),V=U(!0);function U(e=!1){return function(t,n,s,i){let o=t[n];if(Te(o)&&Oe(o)&&!Oe(s))return!1;if(!e&&!Te(s)&&(Se(s)||(s=Ce(s),o=Ce(o)),!(0,r.kJ)(t)&&Oe(o)&&!Oe(s)))return o.value=s,!0;const a=(0,r.kJ)(t)&&(0,r.S0)(n)?Number(n)<t.length:(0,r.RI)(t,n),c=Reflect.set(t,n,s,i);return t===Ce(i)&&(a?(0,r.aU)(s,o)&&C(t,"set",n,s,o):C(t,"add",n,s)),c}}function B(e,t){const n=(0,r.RI)(e,t),s=e[t],i=Reflect.deleteProperty(e,t);return i&&n&&C(e,"delete",t,void 0,s),i}function j(e,t){const n=Reflect.has(e,t);return(0,r.yk)(t)&&x.has(t)||S(e,"has",t),n}function q(e){return S(e,"iterate",(0,r.kJ)(e)?"length":y),Reflect.ownKeys(e)}const $={get:D,set:F,deleteProperty:B,has:j,ownKeys:q},K={get:O,set(e,t){return!0},deleteProperty(e,t){return!0}},G=(0,r.l7)({},$,{get:R,set:V}),z=e=>e,H=e=>Reflect.getPrototypeOf(e);function W(e,t,n=!1,r=!1){e=e["__v_raw"];const s=Ce(e),i=Ce(t);t!==i&&!n&&S(s,"get",t),!n&&S(s,"get",i);const{has:o}=H(s),a=r?z:n?xe:Ne;return o.call(s,t)?a(e.get(t)):o.call(s,i)?a(e.get(i)):void(e!==s&&e.get(t))}function J(e,t=!1){const n=this["__v_raw"],r=Ce(n),s=Ce(e);return e!==s&&!t&&S(r,"has",e),!t&&S(r,"has",s),e===s?n.has(e):n.has(e)||n.has(s)}function Q(e,t=!1){return e=e["__v_raw"],!t&&S(Ce(e),"iterate",y),Reflect.get(e,"size",e)}function Y(e){e=Ce(e);const t=Ce(this),n=H(t),r=n.has.call(t,e);return r||(t.add(e),C(t,"add",e,e)),this}function X(e,t){t=Ce(t);const n=Ce(this),{has:s,get:i}=H(n);let o=s.call(n,e);o||(e=Ce(e),o=s.call(n,e));const a=i.call(n,e);return n.set(e,t),o?(0,r.aU)(t,a)&&C(n,"set",e,t,a):C(n,"add",e,t),this}function Z(e){const t=Ce(this),{has:n,get:r}=H(t);let s=n.call(t,e);s||(e=Ce(e),s=n.call(t,e));const i=r?r.call(t,e):void 0,o=t.delete(e);return s&&C(t,"delete",e,void 0,i),o}function ee(){const e=Ce(this),t=0!==e.size,n=void 0,r=e.clear();return t&&C(e,"clear",void 0,void 0,n),r}function te(e,t){return function(n,r){const s=this,i=s["__v_raw"],o=Ce(i),a=t?z:e?xe:Ne;return!e&&S(o,"iterate",y),i.forEach(((e,t)=>n.call(r,a(e),a(t),s)))}}function ne(e,t,n){return function(...s){const i=this["__v_raw"],o=Ce(i),a=(0,r._N)(o),c="entries"===e||e===Symbol.iterator&&a,u="keys"===e&&a,l=i[e](...s),h=n?z:t?xe:Ne;return!t&&S(o,"iterate",u?v:y),{next(){const{value:e,done:t}=l.next();return t?{value:e,done:t}:{value:c?[h(e[0]),h(e[1])]:h(e),done:t}},[Symbol.iterator](){return this}}}}function re(e){return function(...t){return"delete"!==e&&this}}function se(){const e={get(e){return W(this,e)},get size(){return Q(this)},has:J,add:Y,set:X,delete:Z,clear:ee,forEach:te(!1,!1)},t={get(e){return W(this,e,!1,!0)},get size(){return Q(this)},has:J,add:Y,set:X,delete:Z,clear:ee,forEach:te(!1,!0)},n={get(e){return W(this,e,!0)},get size(){return Q(this,!0)},has(e){return J.call(this,e,!0)},add:re("add"),set:re("set"),delete:re("delete"),clear:re("clear"),forEach:te(!0,!1)},r={get(e){return W(this,e,!0,!0)},get size(){return Q(this,!0)},has(e){return J.call(this,e,!0)},add:re("add"),set:re("set"),delete:re("delete"),clear:re("clear"),forEach:te(!0,!0)},s=["keys","values","entries",Symbol.iterator];return s.forEach((s=>{e[s]=ne(s,!1,!1),n[s]=ne(s,!0,!1),t[s]=ne(s,!1,!0),r[s]=ne(s,!0,!0)})),[e,n,t,r]}const[ie,oe,ae,ce]=se();function ue(e,t){const n=t?e?ce:ae:e?oe:ie;return(t,s,i)=>"__v_isReactive"===s?!e:"__v_isReadonly"===s?e:"__v_raw"===s?t:Reflect.get((0,r.RI)(n,s)&&s in t?n:t,s,i)}const le={get:ue(!1,!1)},he={get:ue(!1,!0)},de={get:ue(!0,!1)};const fe=new WeakMap,pe=new WeakMap,me=new WeakMap,ge=new WeakMap;function ye(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ve(e){return e["__v_skip"]||!Object.isExtensible(e)?0:ye((0,r.W7)(e))}function we(e){return Te(e)?e:Ie(e,!1,$,le,fe)}function be(e){return Ie(e,!1,G,he,pe)}function _e(e){return Ie(e,!0,K,de,me)}function Ie(e,t,n,s,i){if(!(0,r.Kn)(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;const o=i.get(e);if(o)return o;const a=ve(e);if(0===a)return e;const c=new Proxy(e,2===a?s:n);return i.set(e,c),c}function Ee(e){return Te(e)?Ee(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function Te(e){return!(!e||!e["__v_isReadonly"])}function Se(e){return!(!e||!e["__v_isShallow"])}function ke(e){return Ee(e)||Te(e)}function Ce(e){const t=e&&e["__v_raw"];return t?Ce(t):e}function Ae(e){return(0,r.Nj)(e,"__v_skip",!0),e}const Ne=e=>(0,r.Kn)(e)?we(e):e,xe=e=>(0,r.Kn)(e)?_e(e):e;function De(e){_&&g&&(e=Ce(e),k(e.dep||(e.dep=a())))}function Re(e,t){e=Ce(e),e.dep&&A(e.dep)}function Oe(e){return!(!e||!0!==e.__v_isRef)}function Pe(e){return Me(e,!1)}function Le(e){return Me(e,!0)}function Me(e,t){return Oe(e)?e:new Fe(e,t)}class Fe{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Ce(e),this._value=t?e:Ne(e)}get value(){return De(this),this._value}set value(e){e=this.__v_isShallow?e:Ce(e),(0,r.aU)(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:Ne(e),Re(this,e))}}function Ve(e){return Oe(e)?e.value:e}const Ue={get:(e,t,n)=>Ve(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return Oe(s)&&!Oe(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function Be(e){return Ee(e)?e:new Proxy(e,Ue)}class je{constructor(e,t,n,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new w(e,(()=>{this._dirty||(this._dirty=!0,Re(this))})),this.effect.computed=this,this.effect.active=this._cacheable=!r,this["__v_isReadonly"]=n}get value(){const e=Ce(this);return De(e),!e._dirty&&e._cacheable||(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function qe(e,t,n=!1){let s,i;const o=(0,r.mf)(e);o?(s=e,i=r.dG):(s=e.get,i=e.set);const a=new je(s,i,o||!i,n);return a}},252:function(e,t,n){n.d(t,{$d:function(){return o},Ah:function(){return xe},FN:function(){return mn},Fl:function(){return Dn},HY:function(){return xt},JJ:function(){return J},Ko:function(){return an},P$:function(){return oe},Q6:function(){return de},U2:function(){return ce},Uk:function(){return Zt},Us:function(){return wt},Wm:function(){return Jt},Y3:function(){return I},Y8:function(){return re},YP:function(){return X},_:function(){return Wt},aZ:function(){return fe},bv:function(){return ke},f3:function(){return Q},h:function(){return Rn},iD:function(){return jt},ic:function(){return Ae},kq:function(){return en},nK:function(){return he},up:function(){return kt},w5:function(){return B},wF:function(){return Se},wg:function(){return Mt},wy:function(){return ht}});var r=n(262),s=n(577);function i(e,t,n,r){let s;try{s=r?e(...r):e()}catch(i){a(i,t,n)}return s}function o(e,t,n,r){if((0,s.mf)(e)){const o=i(e,t,n,r);return o&&(0,s.tI)(o)&&o.catch((e=>{a(e,t,n)})),o}const c=[];for(let s=0;s<e.length;s++)c.push(o(e[s],t,n,r));return c}function a(e,t,n,r=!0){const s=t?t.vnode:null;if(t){let r=t.parent;const s=t.proxy,o=n;while(r){const t=r.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,s,o))return;r=r.parent}const a=t.appContext.config.errorHandler;if(a)return void i(a,null,10,[e,s,o])}c(e,n,s,r)}function c(e,t,n,r=!0){console.error(e)}let u=!1,l=!1;const h=[];let d=0;const f=[];let p=null,m=0;const g=[];let y=null,v=0;const w=Promise.resolve();let b=null,_=null;function I(e){const t=b||w;return e?t.then(this?e.bind(this):e):t}function E(e){let t=d+1,n=h.length;while(t<n){const r=t+n>>>1,s=R(h[r]);s<e?t=r+1:n=r}return t}function T(e){h.length&&h.includes(e,u&&e.allowRecurse?d+1:d)||e===_||(null==e.id?h.push(e):h.splice(E(e.id),0,e),S())}function S(){u||l||(l=!0,b=w.then(O))}function k(e){const t=h.indexOf(e);t>d&&h.splice(t,1)}function C(e,t,n,r){(0,s.kJ)(e)?n.push(...e):t&&t.includes(e,e.allowRecurse?r+1:r)||n.push(e),S()}function A(e){C(e,p,f,m)}function N(e){C(e,y,g,v)}function x(e,t=null){if(f.length){for(_=t,p=[...new Set(f)],f.length=0,m=0;m<p.length;m++)p[m]();p=null,m=0,_=null,x(e,t)}}function D(e){if(g.length){const e=[...new Set(g)];if(g.length=0,y)return void y.push(...e);for(y=e,y.sort(((e,t)=>R(e)-R(t))),v=0;v<y.length;v++)y[v]();y=null,v=0}}const R=e=>null==e.id?1/0:e.id;function O(e){l=!1,u=!0,x(e),h.sort(((e,t)=>R(e)-R(t)));s.dG;try{for(d=0;d<h.length;d++){const e=h[d];e&&!1!==e.active&&i(e,null,14)}}finally{d=0,h.length=0,D(e),u=!1,b=null,(h.length||f.length||g.length)&&O(e)}}new Set;new Map;function P(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||s.kT;let i=n;const a=t.startsWith("update:"),c=a&&t.slice(7);if(c&&c in r){const e=`${"modelValue"===c?"model":c}Modifiers`,{number:t,trim:o}=r[e]||s.kT;o?i=n.map((e=>e.trim())):t&&(i=n.map(s.He))}let u;let l=r[u=(0,s.hR)(t)]||r[u=(0,s.hR)((0,s._A)(t))];!l&&a&&(l=r[u=(0,s.hR)((0,s.rs)(t))]),l&&o(l,e,6,i);const h=r[u+"Once"];if(h){if(e.emitted){if(e.emitted[u])return}else e.emitted={};e.emitted[u]=!0,o(h,e,6,i)}}function L(e,t,n=!1){const r=t.emitsCache,i=r.get(e);if(void 0!==i)return i;const o=e.emits;let a={},c=!1;if(!(0,s.mf)(e)){const r=e=>{const n=L(e,t,!0);n&&(c=!0,(0,s.l7)(a,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return o||c?((0,s.kJ)(o)?o.forEach((e=>a[e]=null)):(0,s.l7)(a,o),r.set(e,a),a):(r.set(e,null),null)}function M(e,t){return!(!e||!(0,s.F7)(t))&&(t=t.slice(2).replace(/Once$/,""),(0,s.RI)(e,t[0].toLowerCase()+t.slice(1))||(0,s.RI)(e,(0,s.rs)(t))||(0,s.RI)(e,t))}let F=null,V=null;function U(e){const t=F;return F=e,V=e&&e.type.__scopeId||null,t}function B(e,t=F,n){if(!t)return e;if(e._n)return e;const r=(...n)=>{r._d&&Ut(-1);const s=U(t),i=e(...n);return U(s),r._d&&Ut(1),i};return r._n=!0,r._c=!0,r._d=!0,r}function j(e){const{type:t,vnode:n,proxy:r,withProxy:i,props:o,propsOptions:[c],slots:u,attrs:l,emit:h,render:d,renderCache:f,data:p,setupState:m,ctx:g,inheritAttrs:y}=e;let v,w;const b=U(e);try{if(4&n.shapeFlag){const e=i||r;v=tn(d.call(e,e,f,o,m,p,g)),w=l}else{const e=t;0,v=tn(e.length>1?e(o,{attrs:l,slots:u,emit:h}):e(o,null)),w=t.props?l:q(l)}}catch(I){Pt.length=0,a(I,e,1),v=Jt(Rt)}let _=v;if(w&&!1!==y){const e=Object.keys(w),{shapeFlag:t}=_;e.length&&7&t&&(c&&e.some(s.tR)&&(w=$(w,c)),_=Xt(_,w))}return n.dirs&&(_.dirs=_.dirs?_.dirs.concat(n.dirs):n.dirs),n.transition&&(_.transition=n.transition),v=_,U(b),v}const q=e=>{let t;for(const n in e)("class"===n||"style"===n||(0,s.F7)(n))&&((t||(t={}))[n]=e[n]);return t},$=(e,t)=>{const n={};for(const r in e)(0,s.tR)(r)&&r.slice(9)in t||(n[r]=e[r]);return n};function K(e,t,n){const{props:r,children:s,component:i}=e,{props:o,children:a,patchFlag:c}=t,u=i.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&c>=0))return!(!s&&!a||a&&a.$stable)||r!==o&&(r?!o||G(r,o,u):!!o);if(1024&c)return!0;if(16&c)return r?G(r,o,u):!!o;if(8&c){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(o[n]!==r[n]&&!M(u,n))return!0}}return!1}function G(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(t[i]!==e[i]&&!M(n,i))return!0}return!1}function z({vnode:e,parent:t},n){while(t&&t.subTree===e)(e=t.vnode).el=n,t=t.parent}const H=e=>e.__isSuspense;function W(e,t){t&&t.pendingBranch?(0,s.kJ)(e)?t.effects.push(...e):t.effects.push(e):N(e)}function J(e,t){if(pn){let n=pn.provides;const r=pn.parent&&pn.parent.provides;r===n&&(n=pn.provides=Object.create(r)),n[e]=t}else 0}function Q(e,t,n=!1){const r=pn||F;if(r){const i=null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(i&&e in i)return i[e];if(arguments.length>1)return n&&(0,s.mf)(t)?t.call(r.proxy):t}else 0}const Y={};function X(e,t,n){return Z(e,t,n)}function Z(e,t,{immediate:n,deep:a,flush:c,onTrack:u,onTrigger:l}=s.kT){const h=pn;let d,f,p=!1,m=!1;if((0,r.dq)(e)?(d=()=>e.value,p=(0,r.yT)(e)):(0,r.PG)(e)?(d=()=>e,a=!0):(0,s.kJ)(e)?(m=!0,p=e.some(r.PG),d=()=>e.map((e=>(0,r.dq)(e)?e.value:(0,r.PG)(e)?ne(e):(0,s.mf)(e)?i(e,h,2):void 0))):d=(0,s.mf)(e)?t?()=>i(e,h,2):()=>{if(!h||!h.isUnmounted)return f&&f(),o(e,h,3,[g])}:s.dG,t&&a){const e=d;d=()=>ne(e())}let g=e=>{f=b.onStop=()=>{i(e,h,4)}};if(_n)return g=s.dG,t?n&&o(t,h,3,[d(),m?[]:void 0,g]):d(),s.dG;let y=m?[]:Y;const v=()=>{if(b.active)if(t){const e=b.run();(a||p||(m?e.some(((e,t)=>(0,s.aU)(e,y[t]))):(0,s.aU)(e,y)))&&(f&&f(),o(t,h,3,[e,y===Y?void 0:y,g]),y=e)}else b.run()};let w;v.allowRecurse=!!t,w="sync"===c?v:"post"===c?()=>vt(v,h&&h.suspense):()=>{!h||h.isMounted?A(v):v()};const b=new r.qq(d,w);return t?n?v():y=b.run():"post"===c?vt(b.run.bind(b),h&&h.suspense):b.run(),()=>{b.stop(),h&&h.scope&&(0,s.Od)(h.scope.effects,b)}}function ee(e,t,n){const r=this.proxy,i=(0,s.HD)(e)?e.includes(".")?te(r,e):()=>r[e]:e.bind(r,r);let o;(0,s.mf)(t)?o=t:(o=t.handler,n=t);const a=pn;gn(this);const c=Z(i,o.bind(r),n);return a?gn(a):yn(),c}function te(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function ne(e,t){if(!(0,s.Kn)(e)||e["__v_skip"])return e;if(t=t||new Set,t.has(e))return e;if(t.add(e),(0,r.dq)(e))ne(e.value,t);else if((0,s.kJ)(e))for(let n=0;n<e.length;n++)ne(e[n],t);else if((0,s.DM)(e)||(0,s._N)(e))e.forEach((e=>{ne(e,t)}));else if((0,s.PO)(e))for(const n in e)ne(e[n],t);return e}function re(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ke((()=>{e.isMounted=!0})),Ne((()=>{e.isUnmounting=!0})),e}const se=[Function,Array],ie={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:se,onEnter:se,onAfterEnter:se,onEnterCancelled:se,onBeforeLeave:se,onLeave:se,onAfterLeave:se,onLeaveCancelled:se,onBeforeAppear:se,onAppear:se,onAfterAppear:se,onAppearCancelled:se},setup(e,{slots:t}){const n=mn(),s=re();let i;return()=>{const o=t.default&&de(t.default(),!0);if(!o||!o.length)return;let a=o[0];if(o.length>1){let e=!1;for(const t of o)if(t.type!==Rt){0,a=t,e=!0;break}}const c=(0,r.IU)(e),{mode:u}=c;if(s.isLeaving)return ue(a);const l=le(a);if(!l)return ue(a);const h=ce(l,c,s,n);he(l,h);const d=n.subTree,f=d&&le(d);let p=!1;const{getTransitionKey:m}=l.type;if(m){const e=m();void 0===i?i=e:e!==i&&(i=e,p=!0)}if(f&&f.type!==Rt&&(!Kt(l,f)||p)){const e=ce(f,c,s,n);if(he(f,e),"out-in"===u)return s.isLeaving=!0,e.afterLeave=()=>{s.isLeaving=!1,n.update()},ue(a);"in-out"===u&&l.type!==Rt&&(e.delayLeave=(e,t,n)=>{const r=ae(s,f);r[String(f.key)]=f,e._leaveCb=()=>{t(),e._leaveCb=void 0,delete h.delayedLeave},h.delayedLeave=n})}return a}}},oe=ie;function ae(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function ce(e,t,n,r){const{appear:s,mode:i,persisted:a=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:l,onEnterCancelled:h,onBeforeLeave:d,onLeave:f,onAfterLeave:p,onLeaveCancelled:m,onBeforeAppear:g,onAppear:y,onAfterAppear:v,onAppearCancelled:w}=t,b=String(e.key),_=ae(n,e),I=(e,t)=>{e&&o(e,r,9,t)},E={mode:i,persisted:a,beforeEnter(t){let r=c;if(!n.isMounted){if(!s)return;r=g||c}t._leaveCb&&t._leaveCb(!0);const i=_[b];i&&Kt(e,i)&&i.el._leaveCb&&i.el._leaveCb(),I(r,[t])},enter(e){let t=u,r=l,i=h;if(!n.isMounted){if(!s)return;t=y||u,r=v||l,i=w||h}let o=!1;const a=e._enterCb=t=>{o||(o=!0,I(t?i:r,[e]),E.delayedLeave&&E.delayedLeave(),e._enterCb=void 0)};t?(t(e,a),t.length<=1&&a()):a()},leave(t,r){const s=String(e.key);if(t._enterCb&&t._enterCb(!0),n.isUnmounting)return r();I(d,[t]);let i=!1;const o=t._leaveCb=n=>{i||(i=!0,r(),I(n?m:p,[t]),t._leaveCb=void 0,_[s]===e&&delete _[s])};_[s]=e,f?(f(t,o),f.length<=1&&o()):o()},clone(e){return ce(e,t,n,r)}};return E}function ue(e){if(me(e))return e=Xt(e),e.children=null,e}function le(e){return me(e)?e.children?e.children[0]:void 0:e}function he(e,t){6&e.shapeFlag&&e.component?he(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function de(e,t=!1,n){let r=[],s=0;for(let i=0;i<e.length;i++){let o=e[i];const a=null==n?o.key:String(n)+String(null!=o.key?o.key:i);o.type===xt?(128&o.patchFlag&&s++,r=r.concat(de(o.children,t,a))):(t||o.type!==Rt)&&r.push(null!=a?Xt(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function fe(e){return(0,s.mf)(e)?{setup:e,name:e.name}:e}const pe=e=>!!e.type.__asyncLoader;const me=e=>e.type.__isKeepAlive;RegExp,RegExp;function ge(e,t){return(0,s.kJ)(e)?e.some((e=>ge(e,t))):(0,s.HD)(e)?e.split(",").includes(t):!!e.test&&e.test(t)}function ye(e,t){we(e,"a",t)}function ve(e,t){we(e,"da",t)}function we(e,t,n=pn){const r=e.__wdc||(e.__wdc=()=>{let t=n;while(t){if(t.isDeactivated)return;t=t.parent}return e()});if(Ee(t,r,n),n){let e=n.parent;while(e&&e.parent)me(e.parent.vnode)&&be(r,t,n,e),e=e.parent}}function be(e,t,n,r){const i=Ee(t,e,r,!0);xe((()=>{(0,s.Od)(r[t],i)}),n)}function _e(e){let t=e.shapeFlag;256&t&&(t-=256),512&t&&(t-=512),e.shapeFlag=t}function Ie(e){return 128&e.shapeFlag?e.ssContent:e}function Ee(e,t,n=pn,s=!1){if(n){const i=n[e]||(n[e]=[]),a=t.__weh||(t.__weh=(...s)=>{if(n.isUnmounted)return;(0,r.Jd)(),gn(n);const i=o(t,n,e,s);return yn(),(0,r.lk)(),i});return s?i.unshift(a):i.push(a),a}}const Te=e=>(t,n=pn)=>(!_n||"sp"===e)&&Ee(e,t,n),Se=Te("bm"),ke=Te("m"),Ce=Te("bu"),Ae=Te("u"),Ne=Te("bum"),xe=Te("um"),De=Te("sp"),Re=Te("rtg"),Oe=Te("rtc");function Pe(e,t=pn){Ee("ec",e,t)}let Le=!0;function Me(e){const t=Be(e),n=e.proxy,i=e.ctx;Le=!1,t.beforeCreate&&Ve(t.beforeCreate,e,"bc");const{data:o,computed:a,methods:c,watch:u,provide:l,inject:h,created:d,beforeMount:f,mounted:p,beforeUpdate:m,updated:g,activated:y,deactivated:v,beforeDestroy:w,beforeUnmount:b,destroyed:_,unmounted:I,render:E,renderTracked:T,renderTriggered:S,errorCaptured:k,serverPrefetch:C,expose:A,inheritAttrs:N,components:x,directives:D,filters:R}=t,O=null;if(h&&Fe(h,i,O,e.appContext.config.unwrapInjectedRef),c)for(const r in c){const e=c[r];(0,s.mf)(e)&&(i[r]=e.bind(n))}if(o){0;const t=o.call(n,n);0,(0,s.Kn)(t)&&(e.data=(0,r.qj)(t))}if(Le=!0,a)for(const r in a){const e=a[r],t=(0,s.mf)(e)?e.bind(n,n):(0,s.mf)(e.get)?e.get.bind(n,n):s.dG;0;const o=!(0,s.mf)(e)&&(0,s.mf)(e.set)?e.set.bind(n):s.dG,c=Dn({get:t,set:o});Object.defineProperty(i,r,{enumerable:!0,configurable:!0,get:()=>c.value,set:e=>c.value=e})}if(u)for(const r in u)Ue(u[r],i,n,r);if(l){const e=(0,s.mf)(l)?l.call(n):l;Reflect.ownKeys(e).forEach((t=>{J(t,e[t])}))}function P(e,t){(0,s.kJ)(t)?t.forEach((t=>e(t.bind(n)))):t&&e(t.bind(n))}if(d&&Ve(d,e,"c"),P(Se,f),P(ke,p),P(Ce,m),P(Ae,g),P(ye,y),P(ve,v),P(Pe,k),P(Oe,T),P(Re,S),P(Ne,b),P(xe,I),P(De,C),(0,s.kJ)(A))if(A.length){const t=e.exposed||(e.exposed={});A.forEach((e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})}))}else e.exposed||(e.exposed={});E&&e.render===s.dG&&(e.render=E),null!=N&&(e.inheritAttrs=N),x&&(e.components=x),D&&(e.directives=D)}function Fe(e,t,n=s.dG,i=!1){(0,s.kJ)(e)&&(e=Ge(e));for(const o in e){const n=e[o];let a;a=(0,s.Kn)(n)?"default"in n?Q(n.from||o,n.default,!0):Q(n.from||o):Q(n),(0,r.dq)(a)&&i?Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>a.value,set:e=>a.value=e}):t[o]=a}}function Ve(e,t,n){o((0,s.kJ)(e)?e.map((e=>e.bind(t.proxy))):e.bind(t.proxy),t,n)}function Ue(e,t,n,r){const i=r.includes(".")?te(n,r):()=>n[r];if((0,s.HD)(e)){const n=t[e];(0,s.mf)(n)&&X(i,n)}else if((0,s.mf)(e))X(i,e.bind(n));else if((0,s.Kn)(e))if((0,s.kJ)(e))e.forEach((e=>Ue(e,t,n,r)));else{const r=(0,s.mf)(e.handler)?e.handler.bind(n):t[e.handler];(0,s.mf)(r)&&X(i,r,e)}else 0}function Be(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,a=i.get(t);let c;return a?c=a:s.length||n||r?(c={},s.length&&s.forEach((e=>je(c,e,o,!0))),je(c,t,o)):c=t,i.set(t,c),c}function je(e,t,n,r=!1){const{mixins:s,extends:i}=t;i&&je(e,i,n,!0),s&&s.forEach((t=>je(e,t,n,!0)));for(const o in t)if(r&&"expose"===o);else{const r=qe[o]||n&&n[o];e[o]=r?r(e[o],t[o]):t[o]}return e}const qe={data:$e,props:He,emits:He,methods:He,computed:He,beforeCreate:ze,created:ze,beforeMount:ze,mounted:ze,beforeUpdate:ze,updated:ze,beforeDestroy:ze,beforeUnmount:ze,destroyed:ze,unmounted:ze,activated:ze,deactivated:ze,errorCaptured:ze,serverPrefetch:ze,components:He,directives:He,watch:We,provide:$e,inject:Ke};function $e(e,t){return t?e?function(){return(0,s.l7)((0,s.mf)(e)?e.call(this,this):e,(0,s.mf)(t)?t.call(this,this):t)}:t:e}function Ke(e,t){return He(Ge(e),Ge(t))}function Ge(e){if((0,s.kJ)(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ze(e,t){return e?[...new Set([].concat(e,t))]:t}function He(e,t){return e?(0,s.l7)((0,s.l7)(Object.create(null),e),t):t}function We(e,t){if(!e)return t;if(!t)return e;const n=(0,s.l7)(Object.create(null),e);for(const r in t)n[r]=ze(e[r],t[r]);return n}function Je(e,t,n,i=!1){const o={},a={};(0,s.Nj)(a,Gt,1),e.propsDefaults=Object.create(null),Ye(e,t,o,a);for(const r in e.propsOptions[0])r in o||(o[r]=void 0);n?e.props=i?o:(0,r.Um)(o):e.type.props?e.props=o:e.props=a,e.attrs=a}function Qe(e,t,n,i){const{props:o,attrs:a,vnode:{patchFlag:c}}=e,u=(0,r.IU)(o),[l]=e.propsOptions;let h=!1;if(!(i||c>0)||16&c){let r;Ye(e,t,o,a)&&(h=!0);for(const i in u)t&&((0,s.RI)(t,i)||(r=(0,s.rs)(i))!==i&&(0,s.RI)(t,r))||(l?!n||void 0===n[i]&&void 0===n[r]||(o[i]=Xe(l,u,i,void 0,e,!0)):delete o[i]);if(a!==u)for(const e in a)t&&(0,s.RI)(t,e)||(delete a[e],h=!0)}else if(8&c){const n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let i=n[r];if(M(e.emitsOptions,i))continue;const c=t[i];if(l)if((0,s.RI)(a,i))c!==a[i]&&(a[i]=c,h=!0);else{const t=(0,s._A)(i);o[t]=Xe(l,u,t,c,e,!1)}else c!==a[i]&&(a[i]=c,h=!0)}}h&&(0,r.X$)(e,"set","$attrs")}function Ye(e,t,n,i){const[o,a]=e.propsOptions;let c,u=!1;if(t)for(let r in t){if((0,s.Gg)(r))continue;const l=t[r];let h;o&&(0,s.RI)(o,h=(0,s._A)(r))?a&&a.includes(h)?(c||(c={}))[h]=l:n[h]=l:M(e.emitsOptions,r)||r in i&&l===i[r]||(i[r]=l,u=!0)}if(a){const t=(0,r.IU)(n),i=c||s.kT;for(let r=0;r<a.length;r++){const c=a[r];n[c]=Xe(o,t,c,i[c],e,!(0,s.RI)(i,c))}}return u}function Xe(e,t,n,r,i,o){const a=e[n];if(null!=a){const e=(0,s.RI)(a,"default");if(e&&void 0===r){const e=a.default;if(a.type!==Function&&(0,s.mf)(e)){const{propsDefaults:s}=i;n in s?r=s[n]:(gn(i),r=s[n]=e.call(null,t),yn())}else r=e}a[0]&&(o&&!e?r=!1:!a[1]||""!==r&&r!==(0,s.rs)(n)||(r=!0))}return r}function Ze(e,t,n=!1){const r=t.propsCache,i=r.get(e);if(i)return i;const o=e.props,a={},c=[];let u=!1;if(!(0,s.mf)(e)){const r=e=>{u=!0;const[n,r]=Ze(e,t,!0);(0,s.l7)(a,n),r&&c.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!o&&!u)return r.set(e,s.Z6),s.Z6;if((0,s.kJ)(o))for(let h=0;h<o.length;h++){0;const e=(0,s._A)(o[h]);et(e)&&(a[e]=s.kT)}else if(o){0;for(const e in o){const t=(0,s._A)(e);if(et(t)){const n=o[e],r=a[t]=(0,s.kJ)(n)||(0,s.mf)(n)?{type:n}:n;if(r){const e=rt(Boolean,r.type),n=rt(String,r.type);r[0]=e>-1,r[1]=n<0||e<n,(e>-1||(0,s.RI)(r,"default"))&&c.push(t)}}}}const l=[a,c];return r.set(e,l),l}function et(e){return"$"!==e[0]}function tt(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:null===e?"null":""}function nt(e,t){return tt(e)===tt(t)}function rt(e,t){return(0,s.kJ)(t)?t.findIndex((t=>nt(t,e))):(0,s.mf)(t)&&nt(t,e)?0:-1}const st=e=>"_"===e[0]||"$stable"===e,it=e=>(0,s.kJ)(e)?e.map(tn):[tn(e)],ot=(e,t,n)=>{const r=B(((...e)=>it(t(...e))),n);return r._c=!1,r},at=(e,t,n)=>{const r=e._ctx;for(const i in e){if(st(i))continue;const n=e[i];if((0,s.mf)(n))t[i]=ot(i,n,r);else if(null!=n){0;const e=it(n);t[i]=()=>e}}},ct=(e,t)=>{const n=it(t);e.slots.default=()=>n},ut=(e,t)=>{if(32&e.vnode.shapeFlag){const n=t._;n?(e.slots=(0,r.IU)(t),(0,s.Nj)(t,"_",n)):at(t,e.slots={})}else e.slots={},t&&ct(e,t);(0,s.Nj)(e.slots,Gt,1)},lt=(e,t,n)=>{const{vnode:r,slots:i}=e;let o=!0,a=s.kT;if(32&r.shapeFlag){const e=t._;e?n&&1===e?o=!1:((0,s.l7)(i,t),n||1!==e||delete i._):(o=!t.$stable,at(t,i)),a=t}else t&&(ct(e,t),a={default:1});if(o)for(const s in i)st(s)||s in a||delete i[s]};function ht(e,t){const n=F;if(null===n)return e;const r=An(n)||n.proxy,i=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[e,n,a,c=s.kT]=t[o];(0,s.mf)(e)&&(e={mounted:e,updated:e}),e.deep&&ne(n),i.push({dir:e,instance:r,value:n,oldValue:void 0,arg:a,modifiers:c})}return e}function dt(e,t,n,s){const i=e.dirs,a=t&&t.dirs;for(let c=0;c<i.length;c++){const u=i[c];a&&(u.oldValue=a[c].value);let l=u.dir[s];l&&((0,r.Jd)(),o(l,n,8,[e.el,u,e,t]),(0,r.lk)())}}function ft(){return{app:null,config:{isNativeTag:s.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let pt=0;function mt(e,t){return function(n,r=null){(0,s.mf)(n)||(n=Object.assign({},n)),null==r||(0,s.Kn)(r)||(r=null);const i=ft(),o=new Set;let a=!1;const c=i.app={_uid:pt++,_component:n,_props:r,_container:null,_context:i,_instance:null,version:On,get config(){return i.config},set config(e){0},use(e,...t){return o.has(e)||(e&&(0,s.mf)(e.install)?(o.add(e),e.install(c,...t)):(0,s.mf)(e)&&(o.add(e),e(c,...t))),c},mixin(e){return i.mixins.includes(e)||i.mixins.push(e),c},component(e,t){return t?(i.components[e]=t,c):i.components[e]},directive(e,t){return t?(i.directives[e]=t,c):i.directives[e]},mount(s,o,u){if(!a){const l=Jt(n,r);return l.appContext=i,o&&t?t(l,s):e(l,s,u),a=!0,c._container=s,s.__vue_app__=c,An(l.component)||l.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(e,t){return i.provides[e]=t,c}};return c}}function gt(e,t,n,o,a=!1){if((0,s.kJ)(e))return void e.forEach(((e,r)=>gt(e,t&&((0,s.kJ)(t)?t[r]:t),n,o,a)));if(pe(o)&&!a)return;const c=4&o.shapeFlag?An(o.component)||o.component.proxy:o.el,u=a?null:c,{i:l,r:h}=e;const d=t&&t.r,f=l.refs===s.kT?l.refs={}:l.refs,p=l.setupState;if(null!=d&&d!==h&&((0,s.HD)(d)?(f[d]=null,(0,s.RI)(p,d)&&(p[d]=null)):(0,r.dq)(d)&&(d.value=null)),(0,s.mf)(h))i(h,l,12,[u,f]);else{const t=(0,s.HD)(h),i=(0,r.dq)(h);if(t||i){const i=()=>{if(e.f){const n=t?f[h]:h.value;a?(0,s.kJ)(n)&&(0,s.Od)(n,c):(0,s.kJ)(n)?n.includes(c)||n.push(c):t?(f[h]=[c],(0,s.RI)(p,h)&&(p[h]=f[h])):(h.value=[c],e.k&&(f[e.k]=h.value))}else t?(f[h]=u,(0,s.RI)(p,h)&&(p[h]=u)):(0,r.dq)(h)&&(h.value=u,e.k&&(f[e.k]=u))};u?(i.id=-1,vt(i,n)):i()}else 0}}function yt(){}const vt=W;function wt(e){return bt(e)}function bt(e,t){yt();const n=(0,s.E9)();n.__VUE__=!0;const{insert:i,remove:o,patchProp:a,createElement:c,createText:u,createComment:l,setText:h,setElementText:d,parentNode:f,nextSibling:p,setScopeId:m=s.dG,cloneNode:g,insertStaticContent:y}=e,v=(e,t,n,r=null,s=null,i=null,o=!1,a=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!Kt(e,t)&&(r=Z(e),W(e,s,i,!0),e=null),-2===t.patchFlag&&(c=!1,t.dynamicChildren=null);const{type:u,ref:l,shapeFlag:h}=t;switch(u){case Dt:w(e,t,n,r);break;case Rt:b(e,t,n,r);break;case Ot:null==e&&_(t,n,r,o);break;case xt:L(e,t,n,r,s,i,o,a,c);break;default:1&h?S(e,t,n,r,s,i,o,a,c):6&h?M(e,t,n,r,s,i,o,a,c):(64&h||128&h)&&u.process(e,t,n,r,s,i,o,a,c,te)}null!=l&&s&&gt(l,e&&e.ref,i,t||e,!t)},w=(e,t,n,r)=>{if(null==e)i(t.el=u(t.children),n,r);else{const n=t.el=e.el;t.children!==e.children&&h(n,t.children)}},b=(e,t,n,r)=>{null==e?i(t.el=l(t.children||""),n,r):t.el=e.el},_=(e,t,n,r)=>{[e.el,e.anchor]=y(e.children,t,n,r,e.el,e.anchor)},I=({el:e,anchor:t},n,r)=>{let s;while(e&&e!==t)s=p(e),i(e,n,r),e=s;i(t,n,r)},E=({el:e,anchor:t})=>{let n;while(e&&e!==t)n=p(e),o(e),e=n;o(t)},S=(e,t,n,r,s,i,o,a,c)=>{o=o||"svg"===t.type,null==e?C(t,n,r,s,i,o,a,c):R(e,t,s,i,o,a,c)},C=(e,t,n,r,o,u,l,h)=>{let f,p;const{type:m,props:y,shapeFlag:v,transition:w,patchFlag:b,dirs:_}=e;if(e.el&&void 0!==g&&-1===b)f=e.el=g(e.el);else{if(f=e.el=c(e.type,u,y&&y.is,y),8&v?d(f,e.children):16&v&&N(e.children,f,null,r,o,u&&"foreignObject"!==m,l,h),_&&dt(e,null,r,"created"),y){for(const t in y)"value"===t||(0,s.Gg)(t)||a(f,t,null,y[t],u,e.children,r,o,X);"value"in y&&a(f,"value",null,y.value),(p=y.onVnodeBeforeMount)&&on(p,r,e)}A(f,e,e.scopeId,l,r)}_&&dt(e,null,r,"beforeMount");const I=(!o||o&&!o.pendingBranch)&&w&&!w.persisted;I&&w.beforeEnter(f),i(f,t,n),((p=y&&y.onVnodeMounted)||I||_)&&vt((()=>{p&&on(p,r,e),I&&w.enter(f),_&&dt(e,null,r,"mounted")}),o)},A=(e,t,n,r,s)=>{if(n&&m(e,n),r)for(let i=0;i<r.length;i++)m(e,r[i]);if(s){let n=s.subTree;if(t===n){const t=s.vnode;A(e,t,t.scopeId,t.slotScopeIds,s.parent)}}},N=(e,t,n,r,s,i,o,a,c=0)=>{for(let u=c;u<e.length;u++){const c=e[u]=a?nn(e[u]):tn(e[u]);v(null,c,t,n,r,s,i,o,a)}},R=(e,t,n,r,i,o,c)=>{const u=t.el=e.el;let{patchFlag:l,dynamicChildren:h,dirs:f}=t;l|=16&e.patchFlag;const p=e.props||s.kT,m=t.props||s.kT;let g;n&&_t(n,!1),(g=m.onVnodeBeforeUpdate)&&on(g,n,t,e),f&&dt(t,e,n,"beforeUpdate"),n&&_t(n,!0);const y=i&&"foreignObject"!==t.type;if(h?O(e.dynamicChildren,h,u,n,r,y,o):c||q(e,t,u,null,n,r,y,o,!1),l>0){if(16&l)P(u,t,p,m,n,r,i);else if(2&l&&p.class!==m.class&&a(u,"class",null,m.class,i),4&l&&a(u,"style",p.style,m.style,i),8&l){const s=t.dynamicProps;for(let t=0;t<s.length;t++){const o=s[t],c=p[o],l=m[o];l===c&&"value"!==o||a(u,o,c,l,i,e.children,n,r,X)}}1&l&&e.children!==t.children&&d(u,t.children)}else c||null!=h||P(u,t,p,m,n,r,i);((g=m.onVnodeUpdated)||f)&&vt((()=>{g&&on(g,n,t,e),f&&dt(t,e,n,"updated")}),r)},O=(e,t,n,r,s,i,o)=>{for(let a=0;a<t.length;a++){const c=e[a],u=t[a],l=c.el&&(c.type===xt||!Kt(c,u)||70&c.shapeFlag)?f(c.el):n;v(c,u,l,null,r,s,i,o,!0)}},P=(e,t,n,r,i,o,c)=>{if(n!==r){for(const u in r){if((0,s.Gg)(u))continue;const l=r[u],h=n[u];l!==h&&"value"!==u&&a(e,u,h,l,c,t.children,i,o,X)}if(n!==s.kT)for(const u in n)(0,s.Gg)(u)||u in r||a(e,u,n[u],null,c,t.children,i,o,X);"value"in r&&a(e,"value",n.value,r.value)}},L=(e,t,n,r,s,o,a,c,l)=>{const h=t.el=e?e.el:u(""),d=t.anchor=e?e.anchor:u("");let{patchFlag:f,dynamicChildren:p,slotScopeIds:m}=t;m&&(c=c?c.concat(m):m),null==e?(i(h,n,r),i(d,n,r),N(t.children,n,d,s,o,a,c,l)):f>0&&64&f&&p&&e.dynamicChildren?(O(e.dynamicChildren,p,n,s,o,a,c),(null!=t.key||s&&t===s.subTree)&&It(e,t,!0)):q(e,t,n,d,s,o,a,c,l)},M=(e,t,n,r,s,i,o,a,c)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?s.ctx.activate(t,n,r,o,c):F(t,n,r,s,i,o,c):V(e,t,c)},F=(e,t,n,r,s,i,o)=>{const a=e.component=fn(e,r,s);if(me(e)&&(a.ctx.renderer=te),In(a),a.asyncDep){if(s&&s.registerDep(a,U),!e.el){const e=a.subTree=Jt(Rt);b(null,e,t,n)}}else U(a,e,t,n,s,i,o)},V=(e,t,n)=>{const r=t.component=e.component;if(K(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return void B(r,t,n);r.next=t,k(r.update),r.update()}else t.component=e.component,t.el=e.el,r.vnode=t},U=(e,t,n,i,o,a,c)=>{const u=()=>{if(e.isMounted){let t,{next:n,bu:r,u:i,parent:u,vnode:l}=e,h=n;0,_t(e,!1),n?(n.el=l.el,B(e,n,c)):n=l,r&&(0,s.ir)(r),(t=n.props&&n.props.onVnodeBeforeUpdate)&&on(t,u,n,l),_t(e,!0);const d=j(e);0;const p=e.subTree;e.subTree=d,v(p,d,f(p.el),Z(p),e,o,a),n.el=d.el,null===h&&z(e,d.el),i&&vt(i,o),(t=n.props&&n.props.onVnodeUpdated)&&vt((()=>on(t,u,n,l)),o)}else{let r;const{el:c,props:u}=t,{bm:l,m:h,parent:d}=e,f=pe(t);if(_t(e,!1),l&&(0,s.ir)(l),!f&&(r=u&&u.onVnodeBeforeMount)&&on(r,d,t),_t(e,!0),c&&re){const n=()=>{e.subTree=j(e),re(c,e.subTree,e,o,null)};f?t.type.__asyncLoader().then((()=>!e.isUnmounted&&n())):n()}else{0;const r=e.subTree=j(e);0,v(null,r,n,i,e,o,a),t.el=r.el}if(h&&vt(h,o),!f&&(r=u&&u.onVnodeMounted)){const e=t;vt((()=>on(r,d,e)),o)}256&t.shapeFlag&&e.a&&vt(e.a,o),e.isMounted=!0,t=n=i=null}},l=e.effect=new r.qq(u,(()=>T(e.update)),e.scope),h=e.update=l.run.bind(l);h.id=e.uid,_t(e,!0),h()},B=(e,t,n)=>{t.component=e;const s=e.vnode.props;e.vnode=t,e.next=null,Qe(e,t.props,s,n),lt(e,t.children,n),(0,r.Jd)(),x(void 0,e.update),(0,r.lk)()},q=(e,t,n,r,s,i,o,a,c=!1)=>{const u=e&&e.children,l=e?e.shapeFlag:0,h=t.children,{patchFlag:f,shapeFlag:p}=t;if(f>0){if(128&f)return void G(u,h,n,r,s,i,o,a,c);if(256&f)return void $(u,h,n,r,s,i,o,a,c)}8&p?(16&l&&X(u,s,i),h!==u&&d(n,h)):16&l?16&p?G(u,h,n,r,s,i,o,a,c):X(u,s,i,!0):(8&l&&d(n,""),16&p&&N(h,n,r,s,i,o,a,c))},$=(e,t,n,r,i,o,a,c,u)=>{e=e||s.Z6,t=t||s.Z6;const l=e.length,h=t.length,d=Math.min(l,h);let f;for(f=0;f<d;f++){const r=t[f]=u?nn(t[f]):tn(t[f]);v(e[f],r,n,null,i,o,a,c,u)}l>h?X(e,i,o,!0,!1,d):N(t,n,r,i,o,a,c,u,d)},G=(e,t,n,r,i,o,a,c,u)=>{let l=0;const h=t.length;let d=e.length-1,f=h-1;while(l<=d&&l<=f){const r=e[l],s=t[l]=u?nn(t[l]):tn(t[l]);if(!Kt(r,s))break;v(r,s,n,null,i,o,a,c,u),l++}while(l<=d&&l<=f){const r=e[d],s=t[f]=u?nn(t[f]):tn(t[f]);if(!Kt(r,s))break;v(r,s,n,null,i,o,a,c,u),d--,f--}if(l>d){if(l<=f){const e=f+1,s=e<h?t[e].el:r;while(l<=f)v(null,t[l]=u?nn(t[l]):tn(t[l]),n,s,i,o,a,c,u),l++}}else if(l>f)while(l<=d)W(e[l],i,o,!0),l++;else{const p=l,m=l,g=new Map;for(l=m;l<=f;l++){const e=t[l]=u?nn(t[l]):tn(t[l]);null!=e.key&&g.set(e.key,l)}let y,w=0;const b=f-m+1;let _=!1,I=0;const E=new Array(b);for(l=0;l<b;l++)E[l]=0;for(l=p;l<=d;l++){const r=e[l];if(w>=b){W(r,i,o,!0);continue}let s;if(null!=r.key)s=g.get(r.key);else for(y=m;y<=f;y++)if(0===E[y-m]&&Kt(r,t[y])){s=y;break}void 0===s?W(r,i,o,!0):(E[s-m]=l+1,s>=I?I=s:_=!0,v(r,t[s],n,null,i,o,a,c,u),w++)}const T=_?Et(E):s.Z6;for(y=T.length-1,l=b-1;l>=0;l--){const e=m+l,s=t[e],d=e+1<h?t[e+1].el:r;0===E[l]?v(null,s,n,d,i,o,a,c,u):_&&(y<0||l!==T[y]?H(s,n,d,2):y--)}}},H=(e,t,n,r,s=null)=>{const{el:o,type:a,transition:c,children:u,shapeFlag:l}=e;if(6&l)return void H(e.component.subTree,t,n,r);if(128&l)return void e.suspense.move(t,n,r);if(64&l)return void a.move(e,t,n,te);if(a===xt){i(o,t,n);for(let e=0;e<u.length;e++)H(u[e],t,n,r);return void i(e.anchor,t,n)}if(a===Ot)return void I(e,t,n);const h=2!==r&&1&l&&c;if(h)if(0===r)c.beforeEnter(o),i(o,t,n),vt((()=>c.enter(o)),s);else{const{leave:e,delayLeave:r,afterLeave:s}=c,a=()=>i(o,t,n),u=()=>{e(o,(()=>{a(),s&&s()}))};r?r(o,a,u):u()}else i(o,t,n)},W=(e,t,n,r=!1,s=!1)=>{const{type:i,props:o,ref:a,children:c,dynamicChildren:u,shapeFlag:l,patchFlag:h,dirs:d}=e;if(null!=a&&gt(a,null,n,e,!0),256&l)return void t.ctx.deactivate(e);const f=1&l&&d,p=!pe(e);let m;if(p&&(m=o&&o.onVnodeBeforeUnmount)&&on(m,t,e),6&l)Y(e.component,n,r);else{if(128&l)return void e.suspense.unmount(n,r);f&&dt(e,null,t,"beforeUnmount"),64&l?e.type.remove(e,t,n,s,te,r):u&&(i!==xt||h>0&&64&h)?X(u,t,n,!1,!0):(i===xt&&384&h||!s&&16&l)&&X(c,t,n),r&&J(e)}(p&&(m=o&&o.onVnodeUnmounted)||f)&&vt((()=>{m&&on(m,t,e),f&&dt(e,null,t,"unmounted")}),n)},J=e=>{const{type:t,el:n,anchor:r,transition:s}=e;if(t===xt)return void Q(n,r);if(t===Ot)return void E(e);const i=()=>{o(n),s&&!s.persisted&&s.afterLeave&&s.afterLeave()};if(1&e.shapeFlag&&s&&!s.persisted){const{leave:t,delayLeave:r}=s,o=()=>t(n,i);r?r(e.el,i,o):o()}else i()},Q=(e,t)=>{let n;while(e!==t)n=p(e),o(e),e=n;o(t)},Y=(e,t,n)=>{const{bum:r,scope:i,update:o,subTree:a,um:c}=e;r&&(0,s.ir)(r),i.stop(),o&&(o.active=!1,W(a,e,t,n)),c&&vt(c,t),vt((()=>{e.isUnmounted=!0}),t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},X=(e,t,n,r=!1,s=!1,i=0)=>{for(let o=i;o<e.length;o++)W(e[o],t,n,r,s)},Z=e=>6&e.shapeFlag?Z(e.component.subTree):128&e.shapeFlag?e.suspense.next():p(e.anchor||e.el),ee=(e,t,n)=>{null==e?t._vnode&&W(t._vnode,null,null,!0):v(t._vnode||null,e,t,null,null,null,n),D(),t._vnode=e},te={p:v,um:W,m:H,r:J,mt:F,mc:N,pc:q,pbc:O,n:Z,o:e};let ne,re;return t&&([ne,re]=t(te)),{render:ee,hydrate:ne,createApp:mt(ee,ne)}}function _t({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function It(e,t,n=!1){const r=e.children,i=t.children;if((0,s.kJ)(r)&&(0,s.kJ)(i))for(let s=0;s<r.length;s++){const e=r[s];let t=i[s];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=i[s]=nn(i[s]),t.el=e.el),n||It(e,t))}}function Et(e){const t=e.slice(),n=[0];let r,s,i,o,a;const c=e.length;for(r=0;r<c;r++){const c=e[r];if(0!==c){if(s=n[n.length-1],e[s]<c){t[r]=s,n.push(r);continue}i=0,o=n.length-1;while(i<o)a=i+o>>1,e[n[a]]<c?i=a+1:o=a;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}i=n.length,o=n[i-1];while(i-- >0)n[i]=o,o=t[o];return n}const Tt=e=>e.__isTeleport;const St="components";function kt(e,t){return At(St,e,!0,t)||e}const Ct=Symbol();function At(e,t,n=!0,r=!1){const i=F||pn;if(i){const n=i.type;if(e===St){const e=Nn(n);if(e&&(e===t||e===(0,s._A)(t)||e===(0,s.kC)((0,s._A)(t))))return n}const o=Nt(i[e]||n[e],t)||Nt(i.appContext[e],t);return!o&&r?n:o}}function Nt(e,t){return e&&(e[t]||e[(0,s._A)(t)]||e[(0,s.kC)((0,s._A)(t))])}const xt=Symbol(void 0),Dt=Symbol(void 0),Rt=Symbol(void 0),Ot=Symbol(void 0),Pt=[];let Lt=null;function Mt(e=!1){Pt.push(Lt=e?null:[])}function Ft(){Pt.pop(),Lt=Pt[Pt.length-1]||null}let Vt=1;function Ut(e){Vt+=e}function Bt(e){return e.dynamicChildren=Vt>0?Lt||s.Z6:null,Ft(),Vt>0&&Lt&&Lt.push(e),e}function jt(e,t,n,r,s,i){return Bt(Wt(e,t,n,r,s,i,!0))}function qt(e,t,n,r,s){return Bt(Jt(e,t,n,r,s,!0))}function $t(e){return!!e&&!0===e.__v_isVNode}function Kt(e,t){return e.type===t.type&&e.key===t.key}const Gt="__vInternal",zt=({key:e})=>null!=e?e:null,Ht=({ref:e,ref_key:t,ref_for:n})=>null!=e?(0,s.HD)(e)||(0,r.dq)(e)||(0,s.mf)(e)?{i:F,r:e,k:t,f:!!n}:e:null;function Wt(e,t=null,n=null,r=0,i=null,o=(e===xt?0:1),a=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&zt(t),ref:t&&Ht(t),scopeId:V,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null};return c?(rn(u,n),128&o&&e.normalize(u)):n&&(u.shapeFlag|=(0,s.HD)(n)?8:16),Vt>0&&!a&&Lt&&(u.patchFlag>0||6&o)&&32!==u.patchFlag&&Lt.push(u),u}const Jt=Qt;function Qt(e,t=null,n=null,i=0,o=null,a=!1){if(e&&e!==Ct||(e=Rt),$t(e)){const r=Xt(e,t,!0);return n&&rn(r,n),r}if(xn(e)&&(e=e.__vccOpts),t){t=Yt(t);let{class:e,style:n}=t;e&&!(0,s.HD)(e)&&(t.class=(0,s.C_)(e)),(0,s.Kn)(n)&&((0,r.X3)(n)&&!(0,s.kJ)(n)&&(n=(0,s.l7)({},n)),t.style=(0,s.j5)(n))}const c=(0,s.HD)(e)?1:H(e)?128:Tt(e)?64:(0,s.Kn)(e)?4:(0,s.mf)(e)?2:0;return Wt(e,t,n,i,o,c,a,!0)}function Yt(e){return e?(0,r.X3)(e)||Gt in e?(0,s.l7)({},e):e:null}function Xt(e,t,n=!1){const{props:r,ref:i,patchFlag:o,children:a}=e,c=t?sn(r||{},t):r,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&zt(c),ref:t&&t.ref?n&&i?(0,s.kJ)(i)?i.concat(Ht(t)):[i,Ht(t)]:Ht(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==xt?-1===o?16:16|o:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Xt(e.ssContent),ssFallback:e.ssFallback&&Xt(e.ssFallback),el:e.el,anchor:e.anchor};return u}function Zt(e=" ",t=0){return Jt(Dt,null,e,t)}function en(e="",t=!1){return t?(Mt(),qt(Rt,null,e)):Jt(Rt,null,e)}function tn(e){return null==e||"boolean"===typeof e?Jt(Rt):(0,s.kJ)(e)?Jt(xt,null,e.slice()):"object"===typeof e?nn(e):Jt(Dt,null,String(e))}function nn(e){return null===e.el||e.memo?e:Xt(e)}function rn(e,t){let n=0;const{shapeFlag:r}=e;if(null==t)t=null;else if((0,s.kJ)(t))n=16;else if("object"===typeof t){if(65&r){const n=t.default;return void(n&&(n._c&&(n._d=!1),rn(e,n()),n._c&&(n._d=!0)))}{n=32;const r=t._;r||Gt in t?3===r&&F&&(1===F.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=F}}else(0,s.mf)(t)?(t={default:t,_ctx:F},n=32):(t=String(t),64&r?(n=16,t=[Zt(t)]):n=8);e.children=t,e.shapeFlag|=n}function sn(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const e in r)if("class"===e)t.class!==r.class&&(t.class=(0,s.C_)([t.class,r.class]));else if("style"===e)t.style=(0,s.j5)([t.style,r.style]);else if((0,s.F7)(e)){const n=t[e],i=r[e];!i||n===i||(0,s.kJ)(n)&&n.includes(i)||(t[e]=n?[].concat(n,i):i)}else""!==e&&(t[e]=r[e])}return t}function on(e,t,n,r=null){o(e,t,7,[n,r])}function an(e,t,n,r){let i;const o=n&&n[r];if((0,s.kJ)(e)||(0,s.HD)(e)){i=new Array(e.length);for(let n=0,r=e.length;n<r;n++)i[n]=t(e[n],n,void 0,o&&o[n])}else if("number"===typeof e){0,i=new Array(e);for(let n=0;n<e;n++)i[n]=t(n+1,n,void 0,o&&o[n])}else if((0,s.Kn)(e))if(e[Symbol.iterator])i=Array.from(e,((e,n)=>t(e,n,void 0,o&&o[n])));else{const n=Object.keys(e);i=new Array(n.length);for(let r=0,s=n.length;r<s;r++){const s=n[r];i[r]=t(e[s],s,r,o&&o[r])}}else i=[];return n&&(n[r]=i),i}const cn=e=>e?vn(e)?An(e)||e.proxy:cn(e.parent):null,un=(0,s.l7)(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>cn(e.parent),$root:e=>cn(e.root),$emit:e=>e.emit,$options:e=>Be(e),$forceUpdate:e=>()=>T(e.update),$nextTick:e=>I.bind(e.proxy),$watch:e=>ee.bind(e)}),ln={get({_:e},t){const{ctx:n,setupState:i,data:o,props:a,accessCache:c,type:u,appContext:l}=e;let h;if("$"!==t[0]){const r=c[t];if(void 0!==r)switch(r){case 1:return i[t];case 2:return o[t];case 4:return n[t];case 3:return a[t]}else{if(i!==s.kT&&(0,s.RI)(i,t))return c[t]=1,i[t];if(o!==s.kT&&(0,s.RI)(o,t))return c[t]=2,o[t];if((h=e.propsOptions[0])&&(0,s.RI)(h,t))return c[t]=3,a[t];if(n!==s.kT&&(0,s.RI)(n,t))return c[t]=4,n[t];Le&&(c[t]=0)}}const d=un[t];let f,p;return d?("$attrs"===t&&(0,r.j)(e,"get",t),d(e)):(f=u.__cssModules)&&(f=f[t])?f:n!==s.kT&&(0,s.RI)(n,t)?(c[t]=4,n[t]):(p=l.config.globalProperties,(0,s.RI)(p,t)?p[t]:void 0)},set({_:e},t,n){const{data:r,setupState:i,ctx:o}=e;return i!==s.kT&&(0,s.RI)(i,t)?(i[t]=n,!0):r!==s.kT&&(0,s.RI)(r,t)?(r[t]=n,!0):!(0,s.RI)(e.props,t)&&(("$"!==t[0]||!(t.slice(1)in e))&&(o[t]=n,!0))},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,propsOptions:o}},a){let c;return!!n[a]||e!==s.kT&&(0,s.RI)(e,a)||t!==s.kT&&(0,s.RI)(t,a)||(c=o[0])&&(0,s.RI)(c,a)||(0,s.RI)(r,a)||(0,s.RI)(un,a)||(0,s.RI)(i.config.globalProperties,a)},defineProperty(e,t,n){return null!=n.get?e._.accessCache[t]=0:(0,s.RI)(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};const hn=ft();let dn=0;function fn(e,t,n){const i=e.type,o=(t?t.appContext:e.appContext)||hn,a={uid:dn++,vnode:e,type:i,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new r.Bj(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ze(i,o),emitsOptions:L(i,o),emit:null,emitted:null,propsDefaults:s.kT,inheritAttrs:i.inheritAttrs,ctx:s.kT,data:s.kT,props:s.kT,attrs:s.kT,slots:s.kT,refs:s.kT,setupState:s.kT,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=P.bind(null,a),e.ce&&e.ce(a),a}let pn=null;const mn=()=>pn||F,gn=e=>{pn=e,e.scope.on()},yn=()=>{pn&&pn.scope.off(),pn=null};function vn(e){return 4&e.vnode.shapeFlag}let wn,bn,_n=!1;function In(e,t=!1){_n=t;const{props:n,children:r}=e.vnode,s=vn(e);Je(e,n,s,t),ut(e,r);const i=s?En(e,t):void 0;return _n=!1,i}function En(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=(0,r.Xl)(new Proxy(e.ctx,ln));const{setup:o}=n;if(o){const n=e.setupContext=o.length>1?Cn(e):null;gn(e),(0,r.Jd)();const c=i(o,e,0,[e.props,n]);if((0,r.lk)(),yn(),(0,s.tI)(c)){if(c.then(yn,yn),t)return c.then((n=>{Tn(e,n,t)})).catch((t=>{a(t,e,0)}));e.asyncDep=c}else Tn(e,c,t)}else Sn(e,t)}function Tn(e,t,n){(0,s.mf)(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:(0,s.Kn)(t)&&(e.setupState=(0,r.WL)(t)),Sn(e,n)}function Sn(e,t,n){const i=e.type;if(!e.render){if(!t&&wn&&!i.render){const t=i.template;if(t){0;const{isCustomElement:n,compilerOptions:r}=e.appContext.config,{delimiters:o,compilerOptions:a}=i,c=(0,s.l7)((0,s.l7)({isCustomElement:n,delimiters:o},r),a);i.render=wn(t,c)}}e.render=i.render||s.dG,bn&&bn(e)}gn(e),(0,r.Jd)(),Me(e),(0,r.lk)(),yn()}function kn(e){return new Proxy(e.attrs,{get(t,n){return(0,r.j)(e,"get","$attrs"),t[n]}})}function Cn(e){const t=t=>{e.exposed=t||{}};let n;return{get attrs(){return n||(n=kn(e))},slots:e.slots,emit:e.emit,expose:t}}function An(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy((0,r.WL)((0,r.Xl)(e.exposed)),{get(t,n){return n in t?t[n]:n in un?un[n](e):void 0}}))}function Nn(e){return(0,s.mf)(e)&&e.displayName||e.name}function xn(e){return(0,s.mf)(e)&&"__vccOpts"in e}const Dn=(e,t)=>(0,r.Fl)(e,t,_n);function Rn(e,t,n){const r=arguments.length;return 2===r?(0,s.Kn)(t)&&!(0,s.kJ)(t)?$t(t)?Jt(e,null,[t]):Jt(e,t):Jt(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&$t(n)&&(n=[n]),Jt(e,t,n))}Symbol("");const On="3.2.33"},963:function(e,t,n){n.d(t,{iM:function(){return oe},nr:function(){return re},ri:function(){return le}});var r=n(577),s=n(252);n(262);const i="http://www.w3.org/2000/svg",o="undefined"!==typeof document?document:null,a=o&&o.createElement("template"),c={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t?o.createElementNS(i,e):o.createElement(e,n?{is:n}:void 0);return"select"===e&&r&&null!=r.multiple&&s.setAttribute("multiple",r.multiple),s},createText:e=>o.createTextNode(e),createComment:e=>o.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>o.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r,s,i){const o=n?n.previousSibling:t.lastChild;if(s&&(s===i||s.nextSibling)){while(1)if(t.insertBefore(s.cloneNode(!0),n),s===i||!(s=s.nextSibling))break}else{a.innerHTML=r?`<svg>${e}</svg>`:e;const s=a.content;if(r){const e=s.firstChild;while(e.firstChild)s.appendChild(e.firstChild);s.removeChild(e)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function u(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function l(e,t,n){const s=e.style,i=(0,r.HD)(n);if(n&&!i){for(const e in n)d(s,e,n[e]);if(t&&!(0,r.HD)(t))for(const e in t)null==n[e]&&d(s,e,"")}else{const r=s.display;i?t!==n&&(s.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(s.display=r)}}const h=/\s*!important$/;function d(e,t,n){if((0,r.kJ)(n))n.forEach((n=>d(e,t,n)));else if(null==n&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=m(e,t);h.test(n)?e.setProperty((0,r.rs)(s),n.replace(h,""),"important"):e[s]=n}}const f=["Webkit","Moz","ms"],p={};function m(e,t){const n=p[t];if(n)return n;let s=(0,r._A)(t);if("filter"!==s&&s in e)return p[t]=s;s=(0,r.kC)(s);for(let r=0;r<f.length;r++){const n=f[r]+s;if(n in e)return p[t]=n}return t}const g="http://www.w3.org/1999/xlink";function y(e,t,n,s,i){if(s&&t.startsWith("xlink:"))null==n?e.removeAttributeNS(g,t.slice(6,t.length)):e.setAttributeNS(g,t,n);else{const s=(0,r.Pq)(t);null==n||s&&!(0,r.yA)(n)?e.removeAttribute(t):e.setAttribute(t,s?"":n)}}function v(e,t,n,s,i,o,a){if("innerHTML"===t||"textContent"===t)return s&&a(s,i,o),void(e[t]=null==n?"":n);if("value"===t&&"PROGRESS"!==e.tagName&&!e.tagName.includes("-")){e._value=n;const r=null==n?"":n;return e.value===r&&"OPTION"!==e.tagName||(e.value=r),void(null==n&&e.removeAttribute(t))}let c=!1;if(""===n||null==n){const s=typeof e[t];"boolean"===s?n=(0,r.yA)(n):null==n&&"string"===s?(n="",c=!0):"number"===s&&(n=0,c=!0)}try{e[t]=n}catch(u){0}c&&e.removeAttribute(t)}const[w,b]=(()=>{let e=Date.now,t=!1;if("undefined"!==typeof window){Date.now()>document.createEvent("Event").timeStamp&&(e=()=>performance.now());const n=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(n&&Number(n[1])<=53)}return[e,t]})();let _=0;const I=Promise.resolve(),E=()=>{_=0},T=()=>_||(I.then(E),_=w());function S(e,t,n,r){e.addEventListener(t,n,r)}function k(e,t,n,r){e.removeEventListener(t,n,r)}function C(e,t,n,r,s=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[n,a]=N(t);if(r){const o=i[t]=x(r,s);S(e,n,o,a)}else o&&(k(e,n,o,a),i[t]=void 0)}}const A=/(?:Once|Passive|Capture)$/;function N(e){let t;if(A.test(e)){let n;t={};while(n=e.match(A))e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[(0,r.rs)(e.slice(2)),t]}function x(e,t){const n=e=>{const r=e.timeStamp||w();(b||r>=n.attached-1)&&(0,s.$d)(D(e,n.value),t,5,[e])};return n.value=e,n.attached=T(),n}function D(e,t){if((0,r.kJ)(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e&&e(t)))}return t}const R=/^on[a-z]/,O=(e,t,n,s,i=!1,o,a,c,h)=>{"class"===t?u(e,s,i):"style"===t?l(e,n,s):(0,r.F7)(t)?(0,r.tR)(t)||C(e,t,n,s,a):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):P(e,t,s,i))?v(e,t,s,o,a,c,h):("true-value"===t?e._trueValue=s:"false-value"===t&&(e._falseValue=s),y(e,t,s,i))};function P(e,t,n,s){return s?"innerHTML"===t||"textContent"===t||!!(t in e&&R.test(t)&&(0,r.mf)(n)):"spellcheck"!==t&&"draggable"!==t&&"translate"!==t&&("form"!==t&&(("list"!==t||"INPUT"!==e.tagName)&&(("type"!==t||"TEXTAREA"!==e.tagName)&&((!R.test(t)||!(0,r.HD)(n))&&t in e))))}"undefined"!==typeof HTMLElement&&HTMLElement;const L="transition",M="animation",F=(e,{slots:t})=>(0,s.h)(s.P$,j(e),t);F.displayName="Transition";const V={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},U=(F.props=(0,r.l7)({},s.P$.props,V),(e,t=[])=>{(0,r.kJ)(e)?e.forEach((e=>e(...t))):e&&e(...t)}),B=e=>!!e&&((0,r.kJ)(e)?e.some((e=>e.length>1)):e.length>1);function j(e){const t={};for(const r in e)r in V||(t[r]=e[r]);if(!1===e.css)return t;const{name:n="v",type:s,duration:i,enterFromClass:o=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:u=o,appearActiveClass:l=a,appearToClass:h=c,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=e,m=q(i),g=m&&m[0],y=m&&m[1],{onBeforeEnter:v,onEnter:w,onEnterCancelled:b,onLeave:_,onLeaveCancelled:I,onBeforeAppear:E=v,onAppear:T=w,onAppearCancelled:S=b}=t,k=(e,t,n)=>{G(e,t?h:c),G(e,t?l:a),n&&n()},C=(e,t)=>{G(e,p),G(e,f),t&&t()},A=e=>(t,n)=>{const r=e?T:w,i=()=>k(t,e,n);U(r,[t,i]),z((()=>{G(t,e?u:o),K(t,e?h:c),B(r)||W(t,s,g,i)}))};return(0,r.l7)(t,{onBeforeEnter(e){U(v,[e]),K(e,o),K(e,a)},onBeforeAppear(e){U(E,[e]),K(e,u),K(e,l)},onEnter:A(!1),onAppear:A(!0),onLeave(e,t){const n=()=>C(e,t);K(e,d),X(),K(e,f),z((()=>{G(e,d),K(e,p),B(_)||W(e,s,y,n)})),U(_,[e,n])},onEnterCancelled(e){k(e,!1),U(b,[e])},onAppearCancelled(e){k(e,!0),U(S,[e])},onLeaveCancelled(e){C(e),U(I,[e])}})}function q(e){if(null==e)return null;if((0,r.Kn)(e))return[$(e.enter),$(e.leave)];{const t=$(e);return[t,t]}}function $(e){const t=(0,r.He)(e);return t}function K(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.add(t))),(e._vtc||(e._vtc=new Set)).add(t)}function G(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.remove(t)));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function z(e){requestAnimationFrame((()=>{requestAnimationFrame(e)}))}let H=0;function W(e,t,n,r){const s=e._endId=++H,i=()=>{s===e._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:c}=J(e,t);if(!o)return r();const u=o+"end";let l=0;const h=()=>{e.removeEventListener(u,d),i()},d=t=>{t.target===e&&++l>=c&&h()};setTimeout((()=>{l<c&&h()}),a+1),e.addEventListener(u,d)}function J(e,t){const n=window.getComputedStyle(e),r=e=>(n[e]||"").split(", "),s=r(L+"Delay"),i=r(L+"Duration"),o=Q(s,i),a=r(M+"Delay"),c=r(M+"Duration"),u=Q(a,c);let l=null,h=0,d=0;t===L?o>0&&(l=L,h=o,d=i.length):t===M?u>0&&(l=M,h=u,d=c.length):(h=Math.max(o,u),l=h>0?o>u?L:M:null,d=l?l===L?i.length:c.length:0);const f=l===L&&/\b(transform|all)(,|$)/.test(n[L+"Property"]);return{type:l,timeout:h,propCount:d,hasTransform:f}}function Q(e,t){while(e.length<t.length)e=e.concat(e);return Math.max(...t.map(((t,n)=>Y(t)+Y(e[n]))))}function Y(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function X(){return document.body.offsetHeight}new WeakMap,new WeakMap;const Z=e=>{const t=e.props["onUpdate:modelValue"];return(0,r.kJ)(t)?e=>(0,r.ir)(t,e):t};function ee(e){e.target.composing=!0}function te(e){const t=e.target;t.composing&&(t.composing=!1,ne(t,"input"))}function ne(e,t){const n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}const re={created(e,{modifiers:{lazy:t,trim:n,number:s}},i){e._assign=Z(i);const o=s||i.props&&"number"===i.props.type;S(e,t?"change":"input",(t=>{if(t.target.composing)return;let s=e.value;n?s=s.trim():o&&(s=(0,r.He)(s)),e._assign(s)})),n&&S(e,"change",(()=>{e.value=e.value.trim()})),t||(S(e,"compositionstart",ee),S(e,"compositionend",te),S(e,"change",te))},mounted(e,{value:t}){e.value=null==t?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:s,number:i}},o){if(e._assign=Z(o),e.composing)return;if(document.activeElement===e){if(n)return;if(s&&e.value.trim()===t)return;if((i||"number"===e.type)&&(0,r.He)(e.value)===t)return}const a=null==t?"":t;e.value!==a&&(e.value=a)}};const se=["ctrl","shift","alt","meta"],ie={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,t)=>se.some((n=>e[`${n}Key`]&&!t.includes(n)))},oe=(e,t)=>(n,...r)=>{for(let e=0;e<t.length;e++){const r=ie[t[e]];if(r&&r(n,t))return}return e(n,...r)};const ae=(0,r.l7)({patchProp:O},c);let ce;function ue(){return ce||(ce=(0,s.Us)(ae))}const le=(...e)=>{const t=ue().createApp(...e);const{mount:n}=t;return t.mount=e=>{const s=he(e);if(!s)return;const i=t._component;(0,r.mf)(i)||i.render||i.template||(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t};function he(e){if((0,r.HD)(e)){const t=document.querySelector(e);return t}return e}},577:function(e,t,n){function r(e,t){const n=Object.create(null),r=e.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}n.d(t,{C_:function(){return f},DM:function(){return R},E9:function(){return re},F7:function(){return T},Gg:function(){return K},HD:function(){return L},He:function(){return te},Kn:function(){return F},NO:function(){return I},Nj:function(){return ee},Od:function(){return C},PO:function(){return q},Pq:function(){return a},RI:function(){return N},S0:function(){return $},W7:function(){return j},WV:function(){return m},Z6:function(){return b},_A:function(){return H},_N:function(){return D},aU:function(){return X},dG:function(){return _},e1:function(){return i},fY:function(){return r},hR:function(){return Y},hq:function(){return g},ir:function(){return Z},j5:function(){return u},kC:function(){return Q},kJ:function(){return x},kT:function(){return w},l7:function(){return k},mf:function(){return P},rs:function(){return J},tI:function(){return V},tR:function(){return S},yA:function(){return c},yk:function(){return M},zw:function(){return y}});const s="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",i=r(s);const o="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",a=r(o);function c(e){return!!e||""===e}function u(e){if(x(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=L(r)?d(r):u(r);if(s)for(const e in s)t[e]=s[e]}return t}return L(e)||F(e)?e:void 0}const l=/;(?![^(]*\))/g,h=/:(.+)/;function d(e){const t={};return e.split(l).forEach((e=>{if(e){const n=e.split(h);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}function f(e){let t="";if(L(e))t=e;else if(x(e))for(let n=0;n<e.length;n++){const r=f(e[n]);r&&(t+=r+" ")}else if(F(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function p(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=m(e[r],t[r]);return n}function m(e,t){if(e===t)return!0;let n=O(e),r=O(t);if(n||r)return!(!n||!r)&&e.getTime()===t.getTime();if(n=x(e),r=x(t),n||r)return!(!n||!r)&&p(e,t);if(n=F(e),r=F(t),n||r){if(!n||!r)return!1;const s=Object.keys(e).length,i=Object.keys(t).length;if(s!==i)return!1;for(const n in e){const r=e.hasOwnProperty(n),s=t.hasOwnProperty(n);if(r&&!s||!r&&s||!m(e[n],t[n]))return!1}}return String(e)===String(t)}function g(e,t){return e.findIndex((e=>m(e,t)))}const y=e=>L(e)?e:null==e?"":x(e)||F(e)&&(e.toString===U||!P(e.toString))?JSON.stringify(e,v,2):String(e),v=(e,t)=>t&&t.__v_isRef?v(e,t.value):D(t)?{[`Map(${t.size})`]:[...t.entries()].reduce(((e,[t,n])=>(e[`${t} =>`]=n,e)),{})}:R(t)?{[`Set(${t.size})`]:[...t.values()]}:!F(t)||x(t)||q(t)?t:String(t),w={},b=[],_=()=>{},I=()=>!1,E=/^on[^a-z]/,T=e=>E.test(e),S=e=>e.startsWith("onUpdate:"),k=Object.assign,C=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},A=Object.prototype.hasOwnProperty,N=(e,t)=>A.call(e,t),x=Array.isArray,D=e=>"[object Map]"===B(e),R=e=>"[object Set]"===B(e),O=e=>e instanceof Date,P=e=>"function"===typeof e,L=e=>"string"===typeof e,M=e=>"symbol"===typeof e,F=e=>null!==e&&"object"===typeof e,V=e=>F(e)&&P(e.then)&&P(e.catch),U=Object.prototype.toString,B=e=>U.call(e),j=e=>B(e).slice(8,-1),q=e=>"[object Object]"===B(e),$=e=>L(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,K=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),G=e=>{const t=Object.create(null);return n=>{const r=t[n];return r||(t[n]=e(n))}},z=/-(\w)/g,H=G((e=>e.replace(z,((e,t)=>t?t.toUpperCase():"")))),W=/\B([A-Z])/g,J=G((e=>e.replace(W,"-$1").toLowerCase())),Q=G((e=>e.charAt(0).toUpperCase()+e.slice(1))),Y=G((e=>e?`on${Q(e)}`:"")),X=(e,t)=>!Object.is(e,t),Z=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},ee=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},te=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ne;const re=()=>ne||(ne="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{})},319:function(e,t,n){n.d(t,{GH:function(){return Ye},hJ:function(){return Qe},Xb:function(){return ct},v0:function(){return ur},e5:function(){return ut},rh:function(){return un},w7:function(){return lt}});var r=n(444),s=n(238);function i(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var s=0;for(r=Object.getOwnPropertySymbols(e);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(n[r[s]]=e[r[s]])}return n}Object.create;Object.create;var o=n(333),a=n(463);function c(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const u=c,l=new r.LL("auth","Firebase",c()),h=new o.Yd("@firebase/auth");function d(e,...t){h.logLevel<=o["in"].ERROR&&h.error(`Auth (${s.SDK_VERSION}): ${e}`,...t)}
/**
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
 */function f(e,...t){throw y(e,...t)}function p(e,...t){return y(e,...t)}function m(e,t,n){const s=Object.assign(Object.assign({},u()),{[t]:n}),i=new r.LL("auth","Firebase",s);return i.create(t,{appName:e.name})}function g(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&f(e,"argument-error"),m(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function y(e,...t){if("string"!==typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return l.create(e,...t)}function v(e,t,...n){if(!e)throw y(t,...n)}function w(e){const t="INTERNAL ASSERTION FAILED: "+e;throw d(t),new Error(t)}function b(e,t){e||w(t)}
/**
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
 */const _=new Map;function I(e){b(e instanceof Function,"Expected a class definition");let t=_.get(e);return t?(b(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,_.set(e,t),t)}
/**
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
 */function E(e,t){const n=(0,s._getProvider)(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),s=n.getOptions();if((0,r.vZ)(s,null!==t&&void 0!==t?t:{}))return e;f(e,"already-initialized")}const i=n.initialize({options:t});return i}function T(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(I);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}
/**
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
 */function S(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function k(){return"http:"===C()||"https:"===C()}function C(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
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
 */function A(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(k()||(0,r.ru)()||"connection"in navigator))||navigator.onLine}function N(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
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
 */class x{constructor(e,t){this.shortDelay=e,this.longDelay=t,b(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,r.uI)()||(0,r.b$)()}get(){return A()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
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
 */function D(e,t){b(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
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
 */class R{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void w("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void w("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void w("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
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
 */const O={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},P=new x(3e4,6e4);
/**
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
 */function L(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function M(e,t,n,s,i={}){return F(e,i,(async()=>{let i={},o={};s&&("GET"===t?o=s:i={body:JSON.stringify(s)});const a=(0,r.xO)(Object.assign({key:e.config.apiKey},o)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),R.fetch()(U(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},i))}))}async function F(e,t,n){e._canInitEmulator=!1;const s=Object.assign(Object.assign({},O),t);try{const t=new B(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const i=await r.json();if("needConfirmation"in i)throw j(e,"account-exists-with-different-credential",i);if(r.ok&&!("errorMessage"in i))return i;{const t=r.ok?i.errorMessage:i.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw j(e,"credential-already-in-use",i);if("EMAIL_EXISTS"===n)throw j(e,"email-already-in-use",i);const a=s[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw m(e,a,o);f(e,a)}}catch(i){if(i instanceof r.ZR)throw i;f(e,"network-request-failed")}}async function V(e,t,n,r,s={}){const i=await M(e,t,n,r,s);return"mfaPendingCredential"in i&&f(e,"multi-factor-auth-required",{_serverResponse:i}),i}function U(e,t,n,r){const s=`${t}${n}?${r}`;return e.config.emulator?D(e.config,s):`${e.config.apiScheme}://${s}`}class B{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(p(this.auth,"network-request-failed"))),P.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function j(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=p(e,t,r);return s.customData._tokenResponse=n,s}
/**
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
 */async function q(e,t){return M(e,"POST","/v1/accounts:delete",t)}async function $(e,t){return M(e,"POST","/v1/accounts:lookup",t)}
/**
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
 */function K(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
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
 */async function G(e,t=!1){const n=(0,r.m9)(e),s=await n.getIdToken(t),i=H(s);v(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o="object"===typeof i.firebase?i.firebase:void 0,a=null===o||void 0===o?void 0:o["sign_in_provider"];return{claims:i,token:s,authTime:K(z(i.auth_time)),issuedAtTime:K(z(i.iat)),expirationTime:K(z(i.exp)),signInProvider:a||null,signInSecondFactor:(null===o||void 0===o?void 0:o["sign_in_second_factor"])||null}}function z(e){return 1e3*Number(e)}function H(e){const[t,n,s]=e.split(".");if(void 0===t||void 0===n||void 0===s)return d("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,r.tV)(n);return e?JSON.parse(e):(d("Failed to decode base64 JWT payload"),null)}catch(i){return d("Caught error parsing JWT payload as JSON",i),null}}function W(e){const t=H(e);return v(t,"internal-error"),v("undefined"!==typeof t.exp,"internal-error"),v("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
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
 */async function J(e,t,n=!1){if(n)return t;try{return await t}catch(s){throw s instanceof r.ZR&&Q(s)&&e.auth.currentUser===e&&await e.auth.signOut(),s}}function Q({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
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
 */class Y{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e.code&&this.schedule(!0))}this.schedule()}}
/**
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
 */class X{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=K(this.lastLoginAt),this.creationTime=K(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
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
 */async function Z(e){var t;const n=e.auth,r=await e.getIdToken(),s=await J(e,$(n,{idToken:r}));v(null===s||void 0===s?void 0:s.users.length,n,"internal-error");const i=s.users[0];e._notifyReloadListener(i);const o=(null===(t=i.providerUserInfo)||void 0===t?void 0:t.length)?ne(i.providerUserInfo):[],a=te(e.providerData,o),c=e.isAnonymous,u=!(e.email&&i.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!c&&u,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new X(i.createdAt,i.lastLoginAt),isAnonymous:l};Object.assign(e,h)}async function ee(e){const t=(0,r.m9)(e);await Z(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function te(e,t){const n=e.filter((e=>!t.some((t=>t.providerId===e.providerId))));return[...n,...t]}function ne(e){return e.map((e=>{var{providerId:t}=e,n=i(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
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
 */async function re(e,t){const n=await F(e,{},(async()=>{const n=(0,r.xO)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:s,apiKey:i}=e.config,o=U(e,s,"/v1/token",`key=${i}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",R.fetch()(o,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
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
 */class se{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){v(e.idToken,"internal-error"),v("undefined"!==typeof e.idToken,"internal-error"),v("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):W(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return v(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:s}=await re(e,t);this.updateTokensAndExpiration(n,r,Number(s))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:s}=t,i=new se;return n&&(v("string"===typeof n,"internal-error",{appName:e}),i.refreshToken=n),r&&(v("string"===typeof r,"internal-error",{appName:e}),i.accessToken=r),s&&(v("number"===typeof s,"internal-error",{appName:e}),i.expirationTime=s),i}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new se,this.toJSON())}_performRefresh(){return w("not implemented")}}
/**
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
 */function ie(e,t){v("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class oe{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,s=i(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Y(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new X(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await J(this,this.stsTokenManager.getToken(this.auth,e));return v(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return G(this,e)}reload(){return ee(this)}_assign(e){this!==e&&(v(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new oe(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){v(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Z(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await J(this,q(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,s,i,o,a,c,u;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(s=t.phoneNumber)&&void 0!==s?s:void 0,f=null!==(i=t.photoURL)&&void 0!==i?i:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=t.createdAt)&&void 0!==c?c:void 0,y=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:w,emailVerified:b,isAnonymous:_,providerData:I,stsTokenManager:E}=t;v(w&&E,e,"internal-error");const T=se.fromJSON(this.name,E);v("string"===typeof w,e,"internal-error"),ie(l,e.name),ie(h,e.name),v("boolean"===typeof b,e,"internal-error"),v("boolean"===typeof _,e,"internal-error"),ie(d,e.name),ie(f,e.name),ie(p,e.name),ie(m,e.name),ie(g,e.name),ie(y,e.name);const S=new oe({uid:w,auth:e,email:h,emailVerified:b,displayName:l,isAnonymous:_,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:T,createdAt:g,lastLoginAt:y});return I&&Array.isArray(I)&&(S.providerData=I.map((e=>Object.assign({},e)))),m&&(S._redirectEventId=m),S}static async _fromIdTokenResponse(e,t,n=!1){const r=new se;r.updateFromServerResponse(t);const s=new oe({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await Z(s),s}}
/**
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
 */class ae{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}ae.type="NONE";const ce=ae;
/**
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
 */function ue(e,t,n){return`firebase:${e}:${t}:${n}`}class le{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:s}=this.auth;this.fullUserKey=ue(this.userKey,r.apiKey,s),this.fullPersistenceKey=ue("persistence",r.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?oe._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new le(I(ce),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let s=r[0]||I(ce);const i=ue(n,e.config.apiKey,e.name);let o=null;for(const u of t)try{const t=await u._get(i);if(t){const n=oe._fromJSON(e,t);u!==s&&(o=n),s=u;break}}catch(c){}const a=r.filter((e=>e._shouldAllowMigration));return s._shouldAllowMigration&&a.length?(s=a[0],o&&await s._set(i,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==s)try{await e._remove(i)}catch(c){}}))),new le(s,e,n)):new le(s,e,n)}}
/**
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
 */function he(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(me(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(de(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(ye(t))return"Blackberry";if(ve(t))return"Webos";if(fe(t))return"Safari";if((t.includes("chrome/")||pe(t))&&!t.includes("edge/"))return"Chrome";if(ge(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function de(e=(0,r.z$)()){return/firefox\//i.test(e)}function fe(e=(0,r.z$)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function pe(e=(0,r.z$)()){return/crios\//i.test(e)}function me(e=(0,r.z$)()){return/iemobile/i.test(e)}function ge(e=(0,r.z$)()){return/android/i.test(e)}function ye(e=(0,r.z$)()){return/blackberry/i.test(e)}function ve(e=(0,r.z$)()){return/webos/i.test(e)}function we(e=(0,r.z$)()){return/iphone|ipad|ipod/i.test(e)}function be(e=(0,r.z$)()){var t;return we(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function _e(){return(0,r.w1)()&&10===document.documentMode}function Ie(e=(0,r.z$)()){return we(e)||ge(e)||ve(e)||ye(e)||/windows phone/i.test(e)||me(e)}function Ee(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
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
 */function Te(e,t=[]){let n;switch(e){case"Browser":n=he((0,r.z$)());break;case"Worker":n=`${he((0,r.z$)())}-${e}`;break;default:n=e}const i=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${s.SDK_VERSION}/${i}`}
/**
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
 */class Se{constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ce(this),this.idTokenSubscription=new Ce(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=l,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=I(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await le.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(s){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e):void 0}async initializeCurrentUser(e){var t;let n=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null===n||void 0===n?void 0:n._redirectEventId,i=await this.tryRedirectSignIn(e);r&&r!==s||!(null===i||void 0===i?void 0:i.user)||(n=i.user)}return n?n._redirectEventId?(v(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Z(e)}catch(t){if("auth/network-request-failed"!==t.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=N()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?(0,r.m9)(e):null;return t&&v(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&v(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(I(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new r.LL("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&I(e)||this._popupRedirectResolver;v(t,this,"argument-error"),this.redirectPersistenceManager=await le.create(this,[I(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const s="function"===typeof t?t:t.next.bind(t),i=this._isInitialized?Promise.resolve():this._initializationPromise;return v(i,this,"internal-error"),i.then((()=>s(this.currentUser))),"function"===typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return v(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Te(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}}function ke(e){return(0,r.m9)(e)}class Ce{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,r.ne)((e=>this.observer=e))}get next(){return v(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
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
 */
class Ae{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return w("not implemented")}_getIdTokenResponse(e){return w("not implemented")}_linkToIdToken(e,t){return w("not implemented")}_getReauthenticationResolver(e){return w("not implemented")}}
/**
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
 */async function Ne(e,t){return M(e,"POST","/v1/accounts:update",t)}
/**
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
 */
async function xe(e,t){return V(e,"POST","/v1/accounts:signInWithPassword",L(e,t))}
/**
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
 */
async function De(e,t){return V(e,"POST","/v1/accounts:signInWithEmailLink",L(e,t))}async function Re(e,t){return V(e,"POST","/v1/accounts:signInWithEmailLink",L(e,t))}
/**
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
 */class Oe extends Ae{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Oe(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Oe(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return xe(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return De(e,{email:this._email,oobCode:this._password});default:f(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Ne(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Re(e,{idToken:t,email:this._email,oobCode:this._password});default:f(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
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
 */async function Pe(e,t){return V(e,"POST","/v1/accounts:signInWithIdp",L(e,t))}
/**
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
 */const Le="http://localhost";class Me extends Ae{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Me(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):f("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,s=i(t,["providerId","signInMethod"]);if(!n||!r)return null;const o=new Me(n,r);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Pe(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Pe(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Pe(e,t)}buildRequest(){const e={requestUri:Le,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=(0,r.xO)(t)}return e}}
/**
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
 */async function Fe(e,t){return M(e,"POST","/v1/accounts:sendVerificationCode",L(e,t))}async function Ve(e,t){return V(e,"POST","/v1/accounts:signInWithPhoneNumber",L(e,t))}async function Ue(e,t){const n=await V(e,"POST","/v1/accounts:signInWithPhoneNumber",L(e,t));if(n.temporaryProof)throw j(e,"account-exists-with-different-credential",n);return n}const Be={["USER_NOT_FOUND"]:"user-not-found"};async function je(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return V(e,"POST","/v1/accounts:signInWithPhoneNumber",L(e,n),Be)}
/**
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
 */class qe extends Ae{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new qe({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new qe({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return Ve(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return Ue(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return je(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:s}=e;return n||t||r||s?new qe({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:s}):null}}
/**
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
 */function $e(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Ke(e){const t=(0,r.zd)((0,r.pd)(e))["link"],n=t?(0,r.zd)((0,r.pd)(t))["deep_link_id"]:null,s=(0,r.zd)((0,r.pd)(e))["deep_link_id"],i=s?(0,r.zd)((0,r.pd)(s))["link"]:null;return i||s||n||t||e}class Ge{constructor(e){var t,n,s,i,o,a;const c=(0,r.zd)((0,r.pd)(e)),u=null!==(t=c["apiKey"])&&void 0!==t?t:null,l=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=$e(null!==(s=c["mode"])&&void 0!==s?s:null);v(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=null!==(i=c["continueUrl"])&&void 0!==i?i:null,this.languageCode=null!==(o=c["languageCode"])&&void 0!==o?o:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=Ke(e);try{return new Ge(t)}catch(n){return null}}}
/**
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
 */
class ze{constructor(){this.providerId=ze.PROVIDER_ID}static credential(e,t){return Oe._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Ge.parseLink(t);return v(n,"argument-error"),Oe._fromEmailAndCode(e,n.code,n.tenantId)}}ze.PROVIDER_ID="password",ze.EMAIL_PASSWORD_SIGN_IN_METHOD="password",ze.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
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
 */
class He{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
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
 */class We extends He{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
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
 */
class Je extends We{constructor(){super("facebook.com")}static credential(e){return Me._fromParams({providerId:Je.PROVIDER_ID,signInMethod:Je.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Je.credentialFromTaggedObject(e)}static credentialFromError(e){return Je.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Je.credential(e.oauthAccessToken)}catch(t){return null}}}Je.FACEBOOK_SIGN_IN_METHOD="facebook.com",Je.PROVIDER_ID="facebook.com";
/**
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
 */
class Qe extends We{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Me._fromParams({providerId:Qe.PROVIDER_ID,signInMethod:Qe.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Qe.credentialFromTaggedObject(e)}static credentialFromError(e){return Qe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Qe.credential(t,n)}catch(r){return null}}}Qe.GOOGLE_SIGN_IN_METHOD="google.com",Qe.PROVIDER_ID="google.com";
/**
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
 */
class Ye extends We{constructor(){super("github.com")}static credential(e){return Me._fromParams({providerId:Ye.PROVIDER_ID,signInMethod:Ye.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ye.credentialFromTaggedObject(e)}static credentialFromError(e){return Ye.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Ye.credential(e.oauthAccessToken)}catch(t){return null}}}Ye.GITHUB_SIGN_IN_METHOD="github.com",Ye.PROVIDER_ID="github.com";
/**
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
 */
class Xe extends We{constructor(){super("twitter.com")}static credential(e,t){return Me._fromParams({providerId:Xe.PROVIDER_ID,signInMethod:Xe.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Xe.credentialFromTaggedObject(e)}static credentialFromError(e){return Xe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Xe.credential(t,n)}catch(r){return null}}}
/**
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
 */
async function Ze(e,t){return V(e,"POST","/v1/accounts:signUp",L(e,t))}
/**
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
 */Xe.TWITTER_SIGN_IN_METHOD="twitter.com",Xe.PROVIDER_ID="twitter.com";class et{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const s=await oe._fromIdTokenResponse(e,n,r),i=tt(n),o=new et({user:s,providerId:i,_tokenResponse:n,operationType:t});return o}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=tt(n);return new et({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function tt(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
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
 */
/**
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
 */
class nt extends r.ZR{constructor(e,t,n,r){var s;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,nt.prototype),this.customData={appName:e.name,tenantId:null!==(s=e.tenantId)&&void 0!==s?s:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new nt(e,t,n,r)}}function rt(e,t,n,r){const s="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return s.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw nt._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
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
 */async function st(e,t,n=!1){const r=await J(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return et._forOperation(e,"link",r)}
/**
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
 */
async function it(e,t,n=!1){const{auth:r}=e,s="reauthenticate";try{const i=await J(e,rt(r,s,t,e),n);v(i.idToken,r,"internal-error");const o=H(i.idToken);v(o,r,"internal-error");const{sub:a}=o;return v(e.uid===a,r,"user-mismatch"),et._forOperation(e,s,i)}catch(i){throw"auth/user-not-found"===(null===i||void 0===i?void 0:i.code)&&f(r,"user-mismatch"),i}}
/**
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
 */async function ot(e,t,n=!1){const r="signIn",s=await rt(e,r,t),i=await et._fromIdTokenResponse(e,r,s);return n||await e._updateCurrentUser(i.user),i}async function at(e,t){return ot(ke(e),t)}async function ct(e,t,n){const r=ke(e),s=await Ze(r,{returnSecureToken:!0,email:t,password:n}),i=await et._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(i.user),i}function ut(e,t,n){return at((0,r.m9)(e),ze.credential(t,n))}
/**
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
 */function lt(e){return(0,r.m9)(e).signOut()}
/**
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
 */
function ht(e,t){return M(e,"POST","/v2/accounts/mfaEnrollment:start",L(e,t))}function dt(e,t){return M(e,"POST","/v2/accounts/mfaEnrollment:finalize",L(e,t))}new WeakMap;const ft="__sak";
/**
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
 */class pt{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ft,"1"),this.storage.removeItem(ft),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
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
 */function mt(){const e=(0,r.z$)();return fe(e)||we(e)}const gt=1e3,yt=10;class vt extends pt{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=mt()&&Ee(),this.fallbackToPolling=Ie(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},s=this.storage.getItem(n);_e()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,yt):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),gt)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}vt.type="LOCAL";const wt=vt;
/**
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
 */class bt extends pt{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}bt.type="SESSION";const _t=bt;
/**
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
 */function It(e){return Promise.all(e.map((async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}})))}
/**
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
 */class Et{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Et(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:s}=t.data,i=this.handlersMap[r];if(!(null===i||void 0===i?void 0:i.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(i).map((async e=>e(t.origin,s))),a=await It(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
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
 */
function Tt(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
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
 */Et.receivers=[];class St{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,i;return new Promise(((o,a)=>{const c=Tt("",20);r.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);i={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),s=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(s),o(t.data.response);break;default:clearTimeout(u),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(i),r.port1.addEventListener("message",i.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])})).finally((()=>{i&&this.removeMessageHandler(i)}))}}
/**
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
 */function kt(){return window}function Ct(e){kt().location.href=e}
/**
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
 */function At(){return"undefined"!==typeof kt()["WorkerGlobalScope"]&&"function"===typeof kt()["importScripts"]}async function Nt(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function xt(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function Dt(){return At()?self:null}
/**
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
 */const Rt="firebaseLocalStorageDb",Ot=1,Pt="firebaseLocalStorage",Lt="fbase_key";class Mt{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function Ft(e,t){return e.transaction([Pt],t?"readwrite":"readonly").objectStore(Pt)}function Vt(){const e=indexedDB.deleteDatabase(Rt);return new Mt(e).toPromise()}function Ut(){const e=indexedDB.open(Rt,Ot);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(Pt,{keyPath:Lt})}catch(r){n(r)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(Pt)?t(n):(n.close(),await Vt(),t(await Ut()))}))}))}async function Bt(e,t,n){const r=Ft(e,!0).put({[Lt]:t,value:n});return new Mt(r).toPromise()}async function jt(e,t){const n=Ft(e,!1).get(t),r=await new Mt(n).toPromise();return void 0===r?null:r.value}function qt(e,t){const n=Ft(e,!0).delete(t);return new Mt(n).toPromise()}const $t=800,Kt=3;class Gt{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Ut()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>Kt)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return At()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Et._getInstance(Dt()),this.receiver._subscribe("keyChanged",(async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}})),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await Nt(),!this.activeServiceWorker)return;this.sender=new St(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&xt()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ut();return await Bt(e,ft,"1"),await qt(e,ft),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Bt(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>jt(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>qt(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Ft(e,!1).getAll();return new Mt(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:s}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),$t)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Gt.type="LOCAL";const zt=Gt;
/**
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
 */function Ht(e,t){return M(e,"POST","/v2/accounts/mfaSignIn:start",L(e,t))}function Wt(e,t){return M(e,"POST","/v2/accounts/mfaSignIn:finalize",L(e,t))}
/**
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
 */
/**
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
 */
function Jt(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function Qt(e){return new Promise(((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=p("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",Jt().appendChild(r)}))}function Yt(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
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
 */
/**
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
 */
Yt("rcb"),new x(3e4,6e4);
/**
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
 */
const Xt="recaptcha";async function Zt(e,t,n){var r;const s=await n.verify();try{let i;if(v("string"===typeof s,e,"argument-error"),v(n.type===Xt,e,"argument-error"),i="string"===typeof t?{phoneNumber:t}:t,"session"in i){const t=i.session;if("phoneNumber"in i){v("enroll"===t.type,e,"internal-error");const n=await ht(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,recaptchaToken:s}});return n.phoneSessionInfo.sessionInfo}{v("signin"===t.type,e,"internal-error");const n=(null===(r=i.multiFactorHint)||void 0===r?void 0:r.uid)||i.multiFactorUid;v(n,e,"missing-multi-factor-info");const o=await Ht(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:s}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await Fe(e,{phoneNumber:i.phoneNumber,recaptchaToken:s});return t}}finally{n._reset()}}
/**
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
 */
class en{constructor(e){this.providerId=en.PROVIDER_ID,this.auth=ke(e)}verifyPhoneNumber(e,t){return Zt(this.auth,e,(0,r.m9)(t))}static credential(e,t){return qe._fromVerification(e,t)}static credentialFromResult(e){const t=e;return en.credentialFromTaggedObject(t)}static credentialFromError(e){return en.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?qe._fromTokenResponse(t,n):null}}
/**
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
 */
function tn(e,t){return t?I(t):(v(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
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
 */en.PROVIDER_ID="phone",en.PHONE_SIGN_IN_METHOD="phone";class nn extends Ae{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Pe(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Pe(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Pe(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function rn(e){return ot(e.auth,new nn(e),e.bypassAuthState)}function sn(e){const{auth:t,user:n}=e;return v(n,t,"internal-error"),it(n,new nn(e),e.bypassAuthState)}async function on(e){const{auth:t,user:n}=e;return v(n,t,"internal-error"),st(n,new nn(e),e.bypassAuthState)}
/**
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
 */class an{constructor(e,t,n,r,s=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:s,error:i,type:o}=e;if(i)return void this.reject(i);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return rn;case"linkViaPopup":case"linkViaRedirect":return on;case"reauthViaPopup":case"reauthViaRedirect":return sn;default:f(this.auth,"internal-error")}}resolve(e){b(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){b(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
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
 */const cn=new x(2e3,1e4);async function un(e,t,n){const r=ke(e);g(e,t,He);const s=tn(r,n),i=new ln(r,"signInViaPopup",t,s);return i.executeNotNull()}class ln extends an{constructor(e,t,n,r,s){super(e,t,r,s),this.provider=n,this.authWindow=null,this.pollId=null,ln.currentPopupAction&&ln.currentPopupAction.cancel(),ln.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return v(e,this.auth,"internal-error"),e}async onExecution(){b(1===this.filter.length,"Popup operations only handle one event");const e=Tt();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(p(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(p(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ln.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(p(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,cn.get())};e()}}ln.currentPopupAction=null;
/**
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
 */
const hn="pendingRedirect",dn=new Map;class fn extends an{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=dn.get(this.auth._key());if(!e){try{const t=await pn(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}dn.set(this.auth._key(),e)}return this.bypassAuthState||dn.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function pn(e,t){const n=gn(t),r=mn(e);if(!await r._isAvailable())return!1;const s="true"===await r._get(n);return await r._remove(n),s}function mn(e){return I(e._redirectPersistence)}function gn(e){return ue(hn,e.config.apiKey,e.name)}
/**
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
 */async function yn(e,t,n=!1){const r=ke(e),s=tn(r,t),i=new fn(r,s,n),o=await i.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}
/**
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
 */
const vn=6e5;class wn{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!In(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!_n(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(p(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=vn&&this.cachedEventUids.clear(),this.cachedEventUids.has(bn(e))}saveEventToCache(e){this.cachedEventUids.add(bn(e)),this.lastProcessedEventTime=Date.now()}}function bn(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function _n({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function In(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return _n(e);default:return!1}}
/**
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
 */async function En(e,t={}){return M(e,"GET","/v1/projects",t)}
/**
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
 */const Tn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Sn=/^https?/;async function kn(e){if(e.config.emulator)return;const{authorizedDomains:t}=await En(e);for(const r of t)try{if(Cn(r))return}catch(n){}f(e,"unauthorized-domain")}function Cn(e){const t=S(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const s=new URL(e);return""===s.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&s.hostname===r}if(!Sn.test(n))return!1;if(Tn.test(e))return r===e;const s=e.replace(/\./g,"\\."),i=new RegExp("^(.+\\."+s+"|"+s+")$","i");return i.test(r)}
/**
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
 */const An=new x(3e4,6e4);function Nn(){const e=kt().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function xn(e){return new Promise(((t,n)=>{var r,s,i;function o(){Nn(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Nn(),n(p(e,"network-request-failed"))},timeout:An.get()})}if(null===(s=null===(r=kt().gapi)||void 0===r?void 0:r.iframes)||void 0===s?void 0:s.Iframe)t(gapi.iframes.getContext());else{if(!(null===(i=kt().gapi)||void 0===i?void 0:i.load)){const t=Yt("iframefcb");return kt()[t]=()=>{gapi.load?o():n(p(e,"network-request-failed"))},Qt(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw Dn=null,e}))}let Dn=null;function Rn(e){return Dn=Dn||xn(e),Dn}
/**
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
 */const On=new x(5e3,15e3),Pn="__/auth/iframe",Ln="emulator/auth/iframe",Mn={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Fn=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Vn(e){const t=e.config;v(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?D(t,Ln):`https://${e.config.authDomain}/${Pn}`,i={apiKey:t.apiKey,appName:e.name,v:s.SDK_VERSION},o=Fn.get(e.config.apiHost);o&&(i.eid=o);const a=e._getFrameworks();return a.length&&(i.fw=a.join(",")),`${n}?${(0,r.xO)(i).slice(1)}`}async function Un(e){const t=await Rn(e),n=kt().gapi;return v(n,e,"internal-error"),t.open({where:document.body,url:Vn(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Mn,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const s=p(e,"network-request-failed"),i=kt().setTimeout((()=>{r(s)}),On.get());function o(){kt().clearTimeout(i),n(t)}t.ping(o).then(o,(()=>{r(s)}))}))))}
/**
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
 */const Bn={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},jn=500,qn=600,$n="_blank",Kn="http://localhost";class Gn{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function zn(e,t,n,s=jn,i=qn){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-s)/2,0).toString();let c="";const u=Object.assign(Object.assign({},Bn),{width:s.toString(),height:i.toString(),top:o,left:a}),l=(0,r.z$)().toLowerCase();n&&(c=pe(l)?$n:n),de(l)&&(t=t||Kn,u.scrollbars="yes");const h=Object.entries(u).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(be(l)&&"_self"!==c)return Hn(t||"",c),new Gn(null);const d=window.open(t||"",c,h);v(d,e,"popup-blocked");try{d.focus()}catch(f){}return new Gn(d)}function Hn(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
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
 */const Wn="__/auth/handler",Jn="emulator/auth/handler";function Qn(e,t,n,i,o,a){v(e.config.authDomain,e,"auth-domain-config-required"),v(e.config.apiKey,e,"invalid-api-key");const c={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:s.SDK_VERSION,eventId:o};if(t instanceof He){t.setDefaultLanguage(e.languageCode),c.providerId=t.providerId||"",(0,r.xb)(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))c[e]=t}if(t instanceof We){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(c.scopes=e.join(","))}e.tenantId&&(c.tid=e.tenantId);const u=c;for(const r of Object.keys(u))void 0===u[r]&&delete u[r];return`${Yn(e)}?${(0,r.xO)(u).slice(1)}`}function Yn({config:e}){return e.emulator?D(e,Jn):`https://${e.authDomain}/${Wn}`}
/**
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
 */const Xn="webStorageSupport";class Zn{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=_t,this._completeRedirectFn=yn}async _openPopup(e,t,n,r){var s;b(null===(s=this.eventManagers[e._key()])||void 0===s?void 0:s.manager,"_initialize() not called before _openPopup()");const i=Qn(e,t,n,S(),r);return zn(e,i,Tt())}async _openRedirect(e,t,n,r){return await this._originValidation(e),Ct(Qn(e,t,n,S(),r)),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(b(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await Un(e),n=new wn(e);return t.register("authEvent",(t=>{v(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(Xn,{type:Xn},(n=>{var r;const s=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[Xn];void 0!==s&&t(!!s),f(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=kn(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ie()||fe()||we()}}const er=Zn;class tr{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return w("unexpected MultiFactorSessionType")}}}class nr extends tr{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new nr(e)}_finalizeEnroll(e,t,n){return dt(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return Wt(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class rr{constructor(){}static assertion(e){return nr._fromCredential(e)}}rr.FACTOR_ID="phone";var sr="@firebase/auth",ir="0.19.12";
/**
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
 */
class or{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){v(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
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
 */function ar(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function cr(e){(0,s._registerComponent)(new a.wA("auth",((t,{options:n})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("heartbeat"),{apiKey:i,authDomain:o}=r.options;return((t,r)=>{v(i&&!i.includes(":"),"invalid-api-key",{appName:t.name}),v(!(null===o||void 0===o?void 0:o.includes(":")),"argument-error",{appName:t.name});const s={apiKey:i,authDomain:o,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Te(e)},a=new Se(t,r,s);return T(a,n),a})(r,s)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{const r=e.getProvider("auth-internal");r.initialize()}))),(0,s._registerComponent)(new a.wA("auth-internal",(e=>{const t=ke(e.getProvider("auth").getImmediate());return(e=>new or(e))(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,s.registerVersion)(sr,ir,ar(e)),(0,s.registerVersion)(sr,ir,"esm2017")}
/**
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
 */function ur(e=(0,s.getApp)()){const t=(0,s._getProvider)(e,"auth");return t.isInitialized()?t.getImmediate():E(e,{popupRedirectResolver:er,persistence:[zt,wt,_t]})}cr("Browser")},902:function(e,t,n){n.d(t,{Z:function(){return r.Z}});var r=n(180),s="firebase",i="9.6.11";
/**
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
 */
r.Z.registerVersion(s,i,"app-compat")},621:function(e,t,n){var r,s=n(180),i=n(238),o=n(463),a=n(333),c=n(444),u="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{},l={},h=h||{},d=u||self;function f(){}function p(e){var t=typeof e;return t="object"!=t?t:e?Array.isArray(e)?"array":t:"null","array"==t||"object"==t&&"number"==typeof e.length}function m(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function g(e){return Object.prototype.hasOwnProperty.call(e,y)&&e[y]||(e[y]=++v)}var y="closure_uid_"+(1e9*Math.random()>>>0),v=0;function w(e,t,n){return e.call.apply(e.bind,arguments)}function b(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function _(e,t,n){return _=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?w:b,_.apply(null,arguments)}function I(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function E(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Vb=function(e,n,r){for(var s=Array(arguments.length-2),i=2;i<arguments.length;i++)s[i-2]=arguments[i];return t.prototype[n].apply(e,s)}}function T(){this.s=this.s,this.o=this.o}var S=0,k={};T.prototype.s=!1,T.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0!=S)){var e=g(this);delete k[e]}},T.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const C=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"===typeof e)return"string"!==typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1},A=Array.prototype.forEach?function(e,t,n){Array.prototype.forEach.call(e,t,n)}:function(e,t,n){const r=e.length,s="string"===typeof e?e.split(""):e;for(let i=0;i<r;i++)i in s&&t.call(n,s[i],i,e)};function N(e){e:{var t=Hn;const n=e.length,r="string"===typeof e?e.split(""):e;for(let s=0;s<n;s++)if(s in r&&t.call(void 0,r[s],s,e)){t=s;break e}t=-1}return 0>t?null:"string"===typeof e?e.charAt(t):e[t]}function x(e){return Array.prototype.concat.apply([],arguments)}function D(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function R(e){return/^[\s\xa0]*$/.test(e)}var O,P=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function L(e,t){return-1!=e.indexOf(t)}function M(e,t){return e<t?-1:e>t?1:0}e:{var F=d.navigator;if(F){var V=F.userAgent;if(V){O=V;break e}}O=""}function U(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function B(e){const t={};for(const n in e)t[n]=e[n];return t}var j="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function q(e,t){let n,r;for(let s=1;s<arguments.length;s++){for(n in r=arguments[s],r)e[n]=r[n];for(let t=0;t<j.length;t++)n=j[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function $(e){return $[" "](e),e}function K(e){var t=re;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}$[" "]=f;var G,z=L(O,"Opera"),H=L(O,"Trident")||L(O,"MSIE"),W=L(O,"Edge"),J=W||H,Q=L(O,"Gecko")&&!(L(O.toLowerCase(),"webkit")&&!L(O,"Edge"))&&!(L(O,"Trident")||L(O,"MSIE"))&&!L(O,"Edge"),Y=L(O.toLowerCase(),"webkit")&&!L(O,"Edge");function X(){var e=d.document;return e?e.documentMode:void 0}e:{var Z="",ee=function(){var e=O;return Q?/rv:([^\);]+)(\)|;)/.exec(e):W?/Edge\/([\d\.]+)/.exec(e):H?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e):Y?/WebKit\/(\S+)/.exec(e):z?/(?:Version)[ \/]?(\S+)/.exec(e):void 0}();if(ee&&(Z=ee?ee[1]:""),H){var te=X();if(null!=te&&te>parseFloat(Z)){G=String(te);break e}}G=Z}var ne,re={};function se(){return K((function(){let e=0;const t=P(String(G)).split("."),n=P("9").split("."),r=Math.max(t.length,n.length);for(let o=0;0==e&&o<r;o++){var s=t[o]||"",i=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],0==s[0].length&&0==i[0].length)break;e=M(0==s[1].length?0:parseInt(s[1],10),0==i[1].length?0:parseInt(i[1],10))||M(0==s[2].length,0==i[2].length)||M(s[2],i[2]),s=s[3],i=i[3]}while(0==e)}return 0<=e}))}if(d.document&&H){var ie=X();ne=ie||(parseInt(G,10)||void 0)}else ne=void 0;var oe=ne,ae=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{d.addEventListener("test",f,t),d.removeEventListener("test",f,t)}catch(n){}return e}();function ce(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}function ue(e,t){if(ce.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Q){e:{try{$(t.nodeName);var s=!0;break e}catch(i){}s=!1}s||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"===typeof e.pointerType?e.pointerType:le[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&ue.Z.h.call(this)}}ce.prototype.h=function(){this.defaultPrevented=!0},E(ue,ce);var le={2:"touch",3:"pen",4:"mouse"};ue.prototype.h=function(){ue.Z.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var he="closure_listenable_"+(1e6*Math.random()|0),de=0;function fe(e,t,n,r,s){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ia=s,this.key=++de,this.ca=this.fa=!1}function pe(e){e.ca=!0,e.listener=null,e.proxy=null,e.src=null,e.ia=null}function me(e){this.src=e,this.g={},this.h=0}function ge(e,t){var n=t.type;if(n in e.g){var r,s=e.g[n],i=C(s,t);(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(pe(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function ye(e,t,n,r){for(var s=0;s<e.length;++s){var i=e[s];if(!i.ca&&i.listener==t&&i.capture==!!n&&i.ia==r)return s}return-1}me.prototype.add=function(e,t,n,r,s){var i=e.toString();e=this.g[i],e||(e=this.g[i]=[],this.h++);var o=ye(e,t,r,s);return-1<o?(t=e[o],n||(t.fa=!1)):(t=new fe(t,this.src,i,!!r,s),t.fa=n,e.push(t)),t};var ve="closure_lm_"+(1e6*Math.random()|0),we={};function be(e,t,n,r,s){if(r&&r.once)return Ee(e,t,n,r,s);if(Array.isArray(t)){for(var i=0;i<t.length;i++)be(e,t[i],n,r,s);return null}return n=xe(n),e&&e[he]?e.N(t,n,m(r)?!!r.capture:!!r,s):_e(e,t,n,!1,r,s)}function _e(e,t,n,r,s,i){if(!t)throw Error("Invalid event type");var o=m(s)?!!s.capture:!!s,a=Ae(e);if(a||(e[ve]=a=new me(e)),n=a.add(t,n,r,o,i),n.proxy)return n;if(r=Ie(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)ae||(s=o),void 0===s&&(s=!1),e.addEventListener(t.toString(),r,s);else if(e.attachEvent)e.attachEvent(ke(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function Ie(){function e(n){return t.call(e.src,e.listener,n)}var t=Ce;return e}function Ee(e,t,n,r,s){if(Array.isArray(t)){for(var i=0;i<t.length;i++)Ee(e,t[i],n,r,s);return null}return n=xe(n),e&&e[he]?e.O(t,n,m(r)?!!r.capture:!!r,s):_e(e,t,n,!0,r,s)}function Te(e,t,n,r,s){if(Array.isArray(t))for(var i=0;i<t.length;i++)Te(e,t[i],n,r,s);else r=m(r)?!!r.capture:!!r,n=xe(n),e&&e[he]?(e=e.i,t=String(t).toString(),t in e.g&&(i=e.g[t],n=ye(i,n,r,s),-1<n&&(pe(i[n]),Array.prototype.splice.call(i,n,1),0==i.length&&(delete e.g[t],e.h--)))):e&&(e=Ae(e))&&(t=e.g[t.toString()],e=-1,t&&(e=ye(t,n,r,s)),(n=-1<e?t[e]:null)&&Se(n))}function Se(e){if("number"!==typeof e&&e&&!e.ca){var t=e.src;if(t&&t[he])ge(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(ke(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Ae(t))?(ge(n,e),0==n.h&&(n.src=null,t[ve]=null)):pe(e)}}}function ke(e){return e in we?we[e]:we[e]="on"+e}function Ce(e,t){if(e.ca)e=!0;else{t=new ue(t,this);var n=e.listener,r=e.ia||e.src;e.fa&&Se(e),e=n.call(r,t)}return e}function Ae(e){return e=e[ve],e instanceof me?e:null}var Ne="__closure_events_fn_"+(1e9*Math.random()>>>0);function xe(e){return"function"===typeof e?e:(e[Ne]||(e[Ne]=function(t){return e.handleEvent(t)}),e[Ne])}function De(){T.call(this),this.i=new me(this),this.P=this,this.I=null}function Re(e,t){var n,r=e.I;if(r)for(n=[];r;r=r.I)n.push(r);if(e=e.P,r=t.type||t,"string"===typeof t)t=new ce(t,e);else if(t instanceof ce)t.target=t.target||e;else{var s=t;t=new ce(r,e),q(t,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=t.g=n[i];s=Oe(o,r,!0,t)&&s}if(o=t.g=e,s=Oe(o,r,!0,t)&&s,s=Oe(o,r,!1,t)&&s,n)for(i=0;i<n.length;i++)o=t.g=n[i],s=Oe(o,r,!1,t)&&s}function Oe(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var s=!0,i=0;i<t.length;++i){var o=t[i];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&ge(e.i,o),s=!1!==a.call(c,r)&&s}}return s&&!r.defaultPrevented}E(De,T),De.prototype[he]=!0,De.prototype.removeEventListener=function(e,t,n,r){Te(this,e,t,n,r)},De.prototype.M=function(){if(De.Z.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)pe(n[r]);delete t.g[e],t.h--}}this.I=null},De.prototype.N=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},De.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var Pe=d.JSON.stringify;function Le(){var e=Ke;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Me{constructor(){this.h=this.g=null}add(e,t){const n=Ve.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}}var Fe,Ve=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}((()=>new Ue),(e=>e.reset()));class Ue{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function Be(e){d.setTimeout((()=>{throw e}),0)}function je(e,t){Fe||qe(),$e||(Fe(),$e=!0),Ke.add(e,t)}function qe(){var e=d.Promise.resolve(void 0);Fe=function(){e.then(Ge)}}var $e=!1,Ke=new Me;function Ge(){for(var e;e=Le();){try{e.h.call(e.g)}catch(n){Be(n)}var t=Ve;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}$e=!1}function ze(e,t){De.call(this),this.h=e||1,this.g=t||d,this.j=_(this.kb,this),this.l=Date.now()}function He(e){e.da=!1,e.S&&(e.g.clearTimeout(e.S),e.S=null)}function We(e,t,n){if("function"===typeof e)n&&(e=_(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=_(e.handleEvent,e)}return 2147483647<Number(t)?-1:d.setTimeout(e,t||0)}function Je(e){e.g=We((()=>{e.g=null,e.i&&(e.i=!1,Je(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}E(ze,De),r=ze.prototype,r.da=!1,r.S=null,r.kb=function(){if(this.da){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-e):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Re(this,"tick"),this.da&&(He(this),this.start()))}},r.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.M=function(){ze.Z.M.call(this),He(this),delete this.g};class Qe extends T{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Je(this)}M(){super.M(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ye(e){T.call(this),this.h=e,this.g={}}E(Ye,T);var Xe=[];function Ze(e,t,n,r){Array.isArray(n)||(n&&(Xe[0]=n.toString()),n=Xe);for(var s=0;s<n.length;s++){var i=be(t,n[s],r||e.handleEvent,!1,e.h||e);if(!i)break;e.g[i.key]=i}}function et(e){U(e.g,(function(e,t){this.g.hasOwnProperty(t)&&Se(e)}),e),e.g={}}function tt(){this.g=!0}function nt(e,t,n,r,s,i){e.info((function(){if(e.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+t+"\n"+n+"\n"+o}))}function rt(e,t,n,r,s,i,o){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+t+"\n"+n+"\n"+i+" "+o}))}function st(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+ot(e,n)+(r?" "+r:"")}))}function it(e,t){e.info((function(){return"TIMEOUT: "+t}))}function ot(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if("noop"!=i&&"stop"!=i&&"close"!=i)for(var o=1;o<s.length;o++)s[o]=""}}}return Pe(n)}catch(a){return t}}Ye.prototype.M=function(){Ye.Z.M.call(this),et(this)},Ye.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},tt.prototype.Aa=function(){this.g=!1},tt.prototype.info=function(){};var at={},ct=null;function ut(){return ct=ct||new De}function lt(e){ce.call(this,at.Ma,e)}function ht(e){const t=ut();Re(t,new lt(t,e))}function dt(e,t){ce.call(this,at.STAT_EVENT,e),this.stat=t}function ft(e){const t=ut();Re(t,new dt(t,e))}function pt(e,t){ce.call(this,at.Na,e),this.size=t}function mt(e,t){if("function"!==typeof e)throw Error("Fn must not be null and must be a function");return d.setTimeout((function(){e()}),t)}at.Ma="serverreachability",E(lt,ce),at.STAT_EVENT="statevent",E(dt,ce),at.Na="timingevent",E(pt,ce);var gt={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},yt={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function vt(){}function wt(e){return e.h||(e.h=e.i())}function bt(){}vt.prototype.h=null;var _t,It={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Et(){ce.call(this,"d")}function Tt(){ce.call(this,"c")}function St(){}function kt(e,t,n,r){this.l=e,this.j=t,this.m=n,this.X=r||1,this.V=new Ye(this),this.P=At,e=J?125:void 0,this.W=new ze(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Ct}function Ct(){this.i=null,this.g="",this.h=!1}E(Et,ce),E(Tt,ce),E(St,vt),St.prototype.g=function(){return new XMLHttpRequest},St.prototype.i=function(){return{}},_t=new St;var At=45e3,Nt={},xt={};function Dt(e,t,n){e.K=1,e.v=nn(Qt(t)),e.s=n,e.U=!0,Rt(e,null)}function Rt(e,t){e.F=Date.now(),Mt(e),e.A=Qt(e.v);var n=e.A,r=e.X;Array.isArray(r)||(r=[String(r)]),vn(n.h,"t",r),e.C=0,n=e.l.H,e.h=new Ct,e.g=Tr(e.l,n?t:null,!e.s),0<e.O&&(e.L=new Qe(_(e.Ia,e,e.g),e.O)),Ze(e.V,e.g,"readystatechange",e.gb),t=e.H?B(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.s,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),ht(1),nt(e.j,e.u,e.A,e.m,e.X,e.s)}function Ot(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Ba)}function Pt(e,t,n){let r,s=!0;for(;!e.I&&e.C<n.length;){if(r=Lt(e,n),r==xt){4==t&&(e.o=4,ft(14),s=!1),st(e.j,e.m,null,"[Incomplete Response]");break}if(r==Nt){e.o=4,ft(15),st(e.j,e.m,n,"[Invalid Chunk]"),s=!1;break}st(e.j,e.m,r,null),jt(e,r)}Ot(e)&&r!=xt&&r!=Nt&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,ft(16),s=!1),e.i=e.i&&s,s?0<n.length&&!e.aa&&(e.aa=!0,t=e.l,t.g==e&&t.$&&!t.L&&(t.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),gr(t),t.L=!0,ft(11))):(st(e.j,e.m,n,"[Invalid Chunked Response]"),Bt(e),Ut(e))}function Lt(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?xt:(n=Number(t.substring(n,r)),isNaN(n)?Nt:(r+=1,r+n>t.length?xt:(t=t.substr(r,n),e.C=r+n,t)))}function Mt(e){e.Y=Date.now()+e.P,Ft(e,e.P)}function Ft(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=mt(_(e.eb,e),t)}function Vt(e){e.B&&(d.clearTimeout(e.B),e.B=null)}function Ut(e){0==e.l.G||e.I||wr(e.l,e)}function Bt(e){Vt(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,He(e.W),et(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function jt(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||kn(n.i,e)))if(n.I=e.N,!e.J&&kn(n.i,e)&&3==n.G){try{var r=n.Ca.g.parse(t)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var s=r;if(0==s[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;vr(n),or(n)}mr(n),ft(18)}}else n.ta=s[1],0<n.ta-n.U&&37500>s[2]&&n.N&&0==n.A&&!n.v&&(n.v=mt(_(n.ab,n),6e3));if(1>=Sn(n.i)&&n.ka){try{n.ka()}catch(u){}n.ka=void 0}}else _r(n,11)}else if((e.J||n.g==e)&&vr(n),!R(t))for(s=n.Ca.g.parse(t),t=0;t<s.length;t++){let u=s[t];if(n.U=u[0],u=u[1],2==n.G)if("c"==u[0]){n.J=u[1],n.la=u[2];const t=u[3];null!=t&&(n.ma=t,n.h.info("VER="+n.ma));const s=u[4];null!=s&&(n.za=s,n.h.info("SVER="+n.za));const l=u[5];null!=l&&"number"===typeof l&&0<l&&(r=1.5*l,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var i=r.i;!i.g&&(L(e,"spdy")||L(e,"quic")||L(e,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(Cn(i,i.h),i.h=null))}if(r.D){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.sa=e,tn(r.F,r.D,e))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-e.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=e;if(r.oa=Er(r,r.H?r.la:null,r.W),o.J){An(r.i,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(Vt(a),Mt(a)),r.g=o}else pr(r);0<n.l.length&&ur(n)}else"stop"!=u[0]&&"close"!=u[0]||_r(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?_r(n,7):ir(n):"noop"!=u[0]&&n.j&&n.j.wa(u),n.A=0)}ht(4)}catch(u){}}function qt(e){if(e.R&&"function"==typeof e.R)return e.R();if("string"===typeof e)return e.split("");if(p(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}function $t(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(p(e)||"string"===typeof e)A(e,t,void 0);else{if(e.T&&"function"==typeof e.T)var n=e.T();else if(e.R&&"function"==typeof e.R)n=void 0;else if(p(e)||"string"===typeof e){n=[];for(var r=e.length,s=0;s<r;s++)n.push(s)}else for(s in n=[],r=0,e)n[r++]=s;r=qt(e),s=r.length;for(var i=0;i<s;i++)t.call(void 0,r[i],n&&n[i],e)}}function Kt(e,t){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(e)if(e instanceof Kt)for(n=e.T(),r=0;r<n.length;r++)this.set(n[r],e.get(n[r]));else for(r in e)this.set(r,e[r])}function Gt(e){if(e.i!=e.g.length){for(var t=0,n=0;t<e.g.length;){var r=e.g[t];zt(e.h,r)&&(e.g[n++]=r),t++}e.g.length=n}if(e.i!=e.g.length){var s={};for(n=t=0;t<e.g.length;)r=e.g[t],zt(s,r)||(e.g[n++]=r,s[r]=1),t++;e.g.length=n}}function zt(e,t){return Object.prototype.hasOwnProperty.call(e,t)}r=kt.prototype,r.setTimeout=function(e){this.P=e},r.gb=function(e){e=e.target;const t=this.L;t&&3==Zn(e)?t.l():this.Ia(e)},r.Ia=function(e){try{if(e==this.g)e:{const l=Zn(this.g);var t=this.g.Da();const h=this.g.ba();if(!(3>l)&&(3!=l||J||this.g&&(this.h.h||this.g.ga()||er(this.g)))){this.I||4!=l||7==t||ht(8==t||0>=h?3:2),Vt(this);var n=this.g.ba();this.N=n;t:if(Ot(this)){var r=er(this.g);e="";var s=r.length,i=4==Zn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Bt(this),Ut(this);var o="";break t}this.h.i=new d.TextDecoder}for(t=0;t<s;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:i&&t==s-1});r.splice(0,s),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,rt(this.j,this.u,this.A,this.m,this.X,l,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!R(a)){var u=a;break t}}u=null}if(!(n=u)){this.i=!1,this.o=3,ft(12),Bt(this),Ut(this);break e}st(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,jt(this,n)}this.U?(Pt(this,l,o),J&&this.i&&3==l&&(Ze(this.V,this.W,"tick",this.fb),this.W.start())):(st(this.j,this.m,o,null),jt(this,o)),4==l&&Bt(this),this.i&&!this.I&&(4==l?wr(this.l,this):(this.i=!1,Mt(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,ft(12)):(this.o=0,ft(13)),Bt(this),Ut(this)}}}catch(l){}},r.fb=function(){if(this.g){var e=Zn(this.g),t=this.g.ga();this.C<t.length&&(Vt(this),Pt(this,e,t),this.i&&4!=e&&Mt(this))}},r.cancel=function(){this.I=!0,Bt(this)},r.eb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(it(this.j,this.A),2!=this.K&&(ht(3),ft(17)),Bt(this),this.o=2,Ut(this)):Ft(this,this.Y-e)},r=Kt.prototype,r.R=function(){Gt(this);for(var e=[],t=0;t<this.g.length;t++)e.push(this.h[this.g[t]]);return e},r.T=function(){return Gt(this),this.g.concat()},r.get=function(e,t){return zt(this.h,e)?this.h[e]:t},r.set=function(e,t){zt(this.h,e)||(this.i++,this.g.push(e)),this.h[e]=t},r.forEach=function(e,t){for(var n=this.T(),r=0;r<n.length;r++){var s=n[r],i=this.get(s);e.call(t,i,s,this)}};var Ht=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Wt(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),s=null;if(0<=r){var i=e[n].substring(0,r);s=e[n].substring(r+1)}else i=e[n];t(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Jt(e,t){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,e instanceof Jt){this.g=void 0!==t?t:e.g,Yt(this,e.j),this.s=e.s,Xt(this,e.i),Zt(this,e.m),this.l=e.l,t=e.h;var n=new pn;n.i=t.i,t.g&&(n.g=new Kt(t.g),n.h=t.h),en(this,n),this.o=e.o}else e&&(n=String(e).match(Ht))?(this.g=!!t,Yt(this,n[1]||"",!0),this.s=on(n[2]||""),Xt(this,n[3]||"",!0),Zt(this,n[4]),this.l=on(n[5]||"",!0),en(this,n[6]||"",!0),this.o=on(n[7]||"")):(this.g=!!t,this.h=new pn(null,this.g))}function Qt(e){return new Jt(e)}function Yt(e,t,n){e.j=n?on(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Xt(e,t,n){e.i=n?on(t,!0):t}function Zt(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function en(e,t,n){t instanceof pn?(e.h=t,bn(e.h,e.g)):(n||(t=an(t,dn)),e.h=new pn(t,e.g))}function tn(e,t,n){e.h.set(t,n)}function nn(e){return tn(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function rn(e){return e instanceof Jt?Qt(e):new Jt(e,void 0)}function sn(e,t,n,r){var s=new Jt(null,void 0);return e&&Yt(s,e),t&&Xt(s,t),n&&Zt(s,n),r&&(s.l=r),s}function on(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function an(e,t,n){return"string"===typeof e?(e=encodeURI(e).replace(t,cn),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function cn(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(15&e).toString(16)}Jt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(an(t,un,!0),":");var n=this.i;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(an(t,un,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&e.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&e.push("/"),e.push(an(n,"/"==n.charAt(0)?hn:ln,!0))),(n=this.h.toString())&&e.push("?",n),(n=this.o)&&e.push("#",an(n,fn)),e.join("")};var un=/[#\/\?@]/g,ln=/[#\?:]/g,hn=/[#\?]/g,dn=/[#\?@]/g,fn=/#/g;function pn(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function mn(e){e.g||(e.g=new Kt,e.h=0,e.i&&Wt(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function gn(e,t){mn(e),t=wn(e,t),zt(e.g.h,t)&&(e.i=null,e.h-=e.g.get(t).length,e=e.g,zt(e.h,t)&&(delete e.h[t],e.i--,e.g.length>2*e.i&&Gt(e)))}function yn(e,t){return mn(e),t=wn(e,t),zt(e.g.h,t)}function vn(e,t,n){gn(e,t),0<n.length&&(e.i=null,e.g.set(wn(e,t),D(n)),e.h+=n.length)}function wn(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function bn(e,t){t&&!e.j&&(mn(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(gn(this,t),vn(this,n,e))}),e)),e.j=t}r=pn.prototype,r.add=function(e,t){mn(this),this.i=null,e=wn(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},r.forEach=function(e,t){mn(this),this.g.forEach((function(n,r){A(n,(function(n){e.call(t,n,r,this)}),this)}),this)},r.T=function(){mn(this);for(var e=this.g.R(),t=this.g.T(),n=[],r=0;r<t.length;r++)for(var s=e[r],i=0;i<s.length;i++)n.push(t[r]);return n},r.R=function(e){mn(this);var t=[];if("string"===typeof e)yn(this,e)&&(t=x(t,this.g.get(wn(this,e))));else{e=this.g.R();for(var n=0;n<e.length;n++)t=x(t,e[n])}return t},r.set=function(e,t){return mn(this),this.i=null,e=wn(this,e),yn(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},r.get=function(e,t){return e?(e=this.R(e),0<e.length?String(e[0]):t):t},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],t=this.g.T(),n=0;n<t.length;n++){var r=t[n],s=encodeURIComponent(String(r));r=this.R(r);for(var i=0;i<r.length;i++){var o=s;""!==r[i]&&(o+="="+encodeURIComponent(String(r[i]))),e.push(o)}}return this.i=e.join("&")};var _n=class{constructor(e,t){this.h=e,this.g=t}};function In(e){this.l=e||En,d.PerformanceNavigationTiming?(e=d.performance.getEntriesByType("navigation"),e=0<e.length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol)):e=!!(d.g&&d.g.Ea&&d.g.Ea()&&d.g.Ea().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var En=10;function Tn(e){return!!e.h||!!e.g&&e.g.size>=e.j}function Sn(e){return e.h?1:e.g?e.g.size:0}function kn(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function Cn(e,t){e.g?e.g.add(t):e.h=t}function An(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function Nn(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return D(e.i)}function xn(){}function Dn(){this.g=new xn}function Rn(e,t,n){const r=n||"";try{$t(e,(function(e,n){let s=e;m(e)&&(s=Pe(e)),t.push(r+n+"="+encodeURIComponent(s))}))}catch(s){throw t.push(r+"type="+encodeURIComponent("_badmap")),s}}function On(e,t){const n=new tt;if(d.Image){const r=new Image;r.onload=I(Pn,n,r,"TestLoadImage: loaded",!0,t),r.onerror=I(Pn,n,r,"TestLoadImage: error",!1,t),r.onabort=I(Pn,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=I(Pn,n,r,"TestLoadImage: timeout",!1,t),d.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}function Pn(e,t,n,r,s){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,s(r)}catch(i){}}function Ln(e){this.l=e.$b||null,this.j=e.ib||!1}function Mn(e,t){De.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=Fn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}In.prototype.cancel=function(){if(this.i=Nn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}},xn.prototype.stringify=function(e){return d.JSON.stringify(e,void 0)},xn.prototype.parse=function(e){return d.JSON.parse(e,void 0)},E(Ln,vt),Ln.prototype.g=function(){return new Mn(this.l,this.j)},Ln.prototype.i=function(e){return function(){return e}}({}),E(Mn,De);var Fn=0;function Vn(e){e.j.read().then(e.Sa.bind(e)).catch(e.ha.bind(e))}function Un(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Bn(e)}function Bn(e){e.onreadystatechange&&e.onreadystatechange.call(e)}r=Mn.prototype,r.open=function(e,t){if(this.readyState!=Fn)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Bn(this)},r.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||d).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ha.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Un(this)),this.readyState=Fn},r.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Bn(this)),this.g&&(this.readyState=3,Bn(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if("undefined"!==typeof d.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Vn(this)}else e.text().then(this.Ua.bind(this),this.ha.bind(this))},r.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Un(this):Bn(this),3==this.readyState&&Vn(this)}},r.Ua=function(e){this.g&&(this.response=this.responseText=e,Un(this))},r.Ta=function(e){this.g&&(this.response=e,Un(this))},r.ha=function(){this.g&&Un(this)},r.setRequestHeader=function(e,t){this.v.append(e,t)},r.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(Mn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var jn=d.JSON.parse;function qn(e){De.call(this),this.headers=new Kt,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=$n,this.K=this.L=!1}E(qn,De);var $n="",Kn=/^https?$/i,Gn=["POST","PUT"];function zn(e){return H&&se()&&"number"===typeof e.timeout&&void 0!==e.ontimeout}function Hn(e){return"content-type"==e.toLowerCase()}function Wn(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Jn(e),Yn(e)}function Jn(e){e.D||(e.D=!0,Re(e,"complete"),Re(e,"error"))}function Qn(e){if(e.h&&"undefined"!=typeof h&&(!e.C[1]||4!=Zn(e)||2!=e.ba()))if(e.v&&4==Zn(e))We(e.Fa,0,e);else if(Re(e,"readystatechange"),4==Zn(e)){e.h=!1;try{const c=e.ba();e:switch(c){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===c){var s=String(e.H).match(Ht)[1]||null;if(!s&&d.self&&d.self.location){var i=d.self.location.protocol;s=i.substr(0,i.length-1)}r=!Kn.test(s?s.toLowerCase():"")}n=r}if(n)Re(e,"complete"),Re(e,"success");else{e.m=6;try{var o=2<Zn(e)?e.g.statusText:""}catch(a){o=""}e.j=o+" ["+e.ba()+"]",Jn(e)}}finally{Yn(e)}}}function Yn(e,t){if(e.g){Xn(e);const r=e.g,s=e.C[0]?f:null;e.g=null,e.C=null,t||Re(e,"ready");try{r.onreadystatechange=s}catch(n){}}}function Xn(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(d.clearTimeout(e.A),e.A=null)}function Zn(e){return e.g?e.g.readyState:0}function er(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case $n:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(t){return null}}function tr(e){let t="";return U(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function nr(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=tr(n),"string"===typeof e?null!=n&&encodeURIComponent(String(n)):tn(e,t,n))}function rr(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function sr(e){this.za=0,this.l=[],this.h=new tt,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=rr("failFast",!1,e),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=rr("baseRetryDelayMs",5e3,e),this.$a=rr("retryDelaySeedMs",1e4,e),this.Ya=rr("forwardChannelMaxRetries",2,e),this.ra=rr("forwardChannelRequestTimeoutMs",2e4,e),this.qa=e&&e.xmlHttpFactory||void 0,this.Ba=e&&e.Yb||!1,this.K=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.J="",this.i=new In(e&&e.concurrentRequestLimit),this.Ca=new Dn,this.ja=e&&e.fastHandshake||!1,this.Ra=e&&e.Wb||!1,e&&e.Aa&&this.h.Aa(),e&&e.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&e&&e.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!e||!1!==e.Xb}function ir(e){if(ar(e),3==e.G){var t=e.V++,n=Qt(e.F);tn(n,"SID",e.J),tn(n,"RID",t),tn(n,"TYPE","terminate"),dr(e,n),t=new kt(e,e.h,t,void 0),t.K=2,t.v=nn(Qt(n)),n=!1,d.navigator&&d.navigator.sendBeacon&&(n=d.navigator.sendBeacon(t.v.toString(),"")),!n&&d.Image&&((new Image).src=t.v,n=!0),n||(t.g=Tr(t.l,null),t.g.ea(t.v)),t.F=Date.now(),Mt(t)}Ir(e)}function or(e){e.g&&(gr(e),e.g.cancel(),e.g=null)}function ar(e){or(e),e.u&&(d.clearTimeout(e.u),e.u=null),vr(e),e.i.cancel(),e.m&&("number"===typeof e.m&&d.clearTimeout(e.m),e.m=null)}function cr(e,t){e.l.push(new _n(e.Za++,t)),3==e.G&&ur(e)}function ur(e){Tn(e.i)||e.m||(e.m=!0,je(e.Ha,e),e.C=0)}function lr(e,t){return!(Sn(e.i)>=e.i.j-(e.m?1:0))&&(e.m?(e.l=t.D.concat(e.l),!0):!(1==e.G||2==e.G||e.C>=(e.Xa?0:e.Ya))&&(e.m=mt(_(e.Ha,e,t),br(e,e.C)),e.C++,!0))}function hr(e,t){var n;n=t?t.m:e.V++;const r=Qt(e.F);tn(r,"SID",e.J),tn(r,"RID",n),tn(r,"AID",e.U),dr(e,r),e.o&&e.s&&nr(r,e.o,e.s),n=new kt(e,e.h,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.l=t.D.concat(e.l)),t=fr(e,n,1e3),n.setTimeout(Math.round(.5*e.ra)+Math.round(.5*e.ra*Math.random())),Cn(e.i,n),Dt(n,r,t)}function dr(e,t){e.j&&$t({},(function(e,n){tn(t,n,e)}))}function fr(e,t,n){n=Math.min(e.l.length,n);var r=e.j?_(e.j.Oa,e.j,e):null;e:{var s=e.l;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=s[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let i=!0;for(let o=0;o<n;o++){let n=s[o].h;const a=s[o].g;if(n-=t,0>n)t=Math.max(0,s[o].h-100),i=!1;else try{Rn(a,e,"req"+n+"_")}catch(es){r&&r(a)}}if(i){r=e.join("&");break e}}}return e=e.l.splice(0,n),t.D=e,r}function pr(e){e.g||e.u||(e.Y=1,je(e.Ga,e),e.A=0)}function mr(e){return!(e.g||e.u||3<=e.A)&&(e.Y++,e.u=mt(_(e.Ga,e),br(e,e.A)),e.A++,!0)}function gr(e){null!=e.B&&(d.clearTimeout(e.B),e.B=null)}function yr(e){e.g=new kt(e,e.h,"rpc",e.Y),null===e.o&&(e.g.H=e.s),e.g.O=0;var t=Qt(e.oa);tn(t,"RID","rpc"),tn(t,"SID",e.J),tn(t,"CI",e.N?"0":"1"),tn(t,"AID",e.U),dr(e,t),tn(t,"TYPE","xmlhttp"),e.o&&e.s&&nr(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.la,n.K=1,n.v=nn(Qt(t)),n.s=null,n.U=!0,Rt(n,e)}function vr(e){null!=e.v&&(d.clearTimeout(e.v),e.v=null)}function wr(e,t){var n=null;if(e.g==t){vr(e),gr(e),e.g=null;var r=2}else{if(!kn(e.i,t))return;n=t.D,An(e.i,t),r=1}if(e.I=t.N,0!=e.G)if(t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.F;var s=e.C;r=ut(),Re(r,new pt(r,n,t,s)),ur(e)}else pr(e);else if(s=t.o,3==s||0==s&&0<e.I||!(1==r&&lr(e,t)||2==r&&mr(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),s){case 1:_r(e,5);break;case 4:_r(e,10);break;case 3:_r(e,6);break;default:_r(e,2)}}function br(e,t){let n=e.Pa+Math.floor(Math.random()*e.$a);return e.j||(n*=2),n*t}function _r(e,t){if(e.h.info("Error code "+t),2==t){var n=null;e.j&&(n=null);var r=_(e.jb,e);n||(n=new Jt("//www.google.com/images/cleardot.gif"),d.location&&"http"==d.location.protocol||Yt(n,"https"),nn(n)),On(n.toString(),r)}else ft(2);e.G=0,e.j&&e.j.va(t),Ir(e),ar(e)}function Ir(e){e.G=0,e.I=-1,e.j&&(0==Nn(e.i).length&&0==e.l.length||(e.i.i.length=0,D(e.l),e.l.length=0),e.j.ua())}function Er(e,t,n){let r=rn(n);if(""!=r.i)t&&Xt(r,t+"."+r.i),Zt(r,r.m);else{const e=d.location;r=sn(e.protocol,t?t+"."+e.hostname:e.hostname,+e.port,n)}return e.aa&&U(e.aa,(function(e,t){tn(r,t,e)})),t=e.D,n=e.sa,t&&n&&tn(r,t,n),tn(r,"VER",e.ma),dr(e,r),r}function Tr(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ba&&!e.qa?new qn(new Ln({ib:!0})):new qn(e.qa),t.L=e.H,t}function Sr(){}function kr(){if(H&&!(10<=Number(oe)))throw Error("Environmental error: no available transport.")}function Cr(e,t){De.call(this),this.g=new sr(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.P=e,(e=t&&t.httpHeadersOverwriteParam)&&!R(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!R(t)&&(this.g.D=t,e=this.h,null!==e&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new xr(this)}function Ar(e){Et.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function Nr(){Tt.call(this),this.status=1}function xr(e){this.g=e}r=qn.prototype,r.ea=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():_t.g(),this.C=this.u?wt(this.u):wt(_t),this.g.onreadystatechange=_(this.Fa,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(i){return void Wn(this,i)}e=n||"";const s=new Kt(this.headers);r&&$t(r,(function(e,t){s.set(t,e)})),r=N(s.T()),n=d.FormData&&e instanceof d.FormData,!(0<=C(Gn,t))||r||n||s.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),s.forEach((function(e,t){this.g.setRequestHeader(t,e)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Xn(this),0<this.B&&((this.K=zn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=_(this.pa,this)):this.A=We(this.pa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(i){Wn(this,i)}},r.pa=function(){"undefined"!=typeof h&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Re(this,"timeout"),this.abort(8))},r.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Re(this,"complete"),Re(this,"abort"),Yn(this))},r.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Yn(this,!0)),qn.Z.M.call(this)},r.Fa=function(){this.s||(this.F||this.v||this.l?Qn(this):this.cb())},r.cb=function(){Qn(this)},r.ba=function(){try{return 2<Zn(this)?this.g.status:-1}catch(e){return-1}},r.ga=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},r.Qa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),jn(t)}},r.Da=function(){return this.m},r.La=function(){return"string"===typeof this.j?this.j:String(this.j)},r=sr.prototype,r.ma=8,r.G=1,r.hb=function(e){try{this.h.info("Origin Trials invoked: "+e)}catch(t){}},r.Ha=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;const s=new kt(this,this.h,e,void 0);let i=this.s;if(this.P&&(i?(i=B(i),q(i,this.P)):i=this.P),null===this.o&&(s.H=i),this.ja)e:{for(var t=0,n=0;n<this.l.length;n++){var r=this.l[n];if(r="__data__"in r.g&&(r=r.g.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(t+=r,4096<t){t=n;break e}if(4096===t||n===this.l.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=fr(this,s,t),n=Qt(this.F),tn(n,"RID",e),tn(n,"CVER",22),this.D&&tn(n,"X-HTTP-Session-Id",this.D),dr(this,n),this.o&&i&&nr(n,this.o,i),Cn(this.i,s),this.Ra&&tn(n,"TYPE","init"),this.ja?(tn(n,"$req",t),tn(n,"SID","null"),s.$=!0,Dt(s,n,null)):Dt(s,n,t),this.G=2}}else 3==this.G&&(e?hr(this,e):0==this.l.length||Tn(this.i)||hr(this))},r.Ga=function(){if(this.u=null,yr(this),this.$&&!(this.L||null==this.g||0>=this.O)){var e=2*this.O;this.h.info("BP detection timer enabled: "+e),this.B=mt(_(this.bb,this),e)}},r.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,ft(10),or(this),yr(this))},r.ab=function(){null!=this.v&&(this.v=null,or(this),mr(this),ft(19))},r.jb=function(e){e?(this.h.info("Successfully pinged google.com"),ft(2)):(this.h.info("Failed to ping google.com"),ft(1))},r=Sr.prototype,r.xa=function(){},r.wa=function(){},r.va=function(){},r.ua=function(){},r.Oa=function(){},kr.prototype.g=function(e,t){return new Cr(e,t)},E(Cr,De),Cr.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;e.Wa&&(e.h.info("Origin Trials enabled."),je(_(e.hb,e,t))),ft(0),e.W=t,e.aa=n||{},e.N=e.X,e.F=Er(e,null,e.W),ur(e)},Cr.prototype.close=function(){ir(this.g)},Cr.prototype.u=function(e){if("string"===typeof e){var t={};t.__data__=e,cr(this.g,t)}else this.v?(t={},t.__data__=Pe(e),cr(this.g,t)):cr(this.g,e)},Cr.prototype.M=function(){this.g.j=null,delete this.j,ir(this.g),delete this.g,Cr.Z.M.call(this)},E(Ar,Et),E(Nr,Tt),E(xr,Sr),xr.prototype.xa=function(){Re(this.g,"a")},xr.prototype.wa=function(e){Re(this.g,new Ar(e))},xr.prototype.va=function(e){Re(this.g,new Nr(e))},xr.prototype.ua=function(){Re(this.g,"b")},kr.prototype.createWebChannel=kr.prototype.g,Cr.prototype.send=Cr.prototype.u,Cr.prototype.open=Cr.prototype.m,Cr.prototype.close=Cr.prototype.close,gt.NO_ERROR=0,gt.TIMEOUT=8,gt.HTTP_ERROR=6,yt.COMPLETE="complete",bt.EventType=It,It.OPEN="a",It.CLOSE="b",It.ERROR="c",It.MESSAGE="d",De.prototype.listen=De.prototype.N,qn.prototype.listenOnce=qn.prototype.O,qn.prototype.getLastError=qn.prototype.La,qn.prototype.getLastErrorCode=qn.prototype.Da,qn.prototype.getStatus=qn.prototype.ba,qn.prototype.getResponseJson=qn.prototype.Qa,qn.prototype.getResponseText=qn.prototype.ga,qn.prototype.send=qn.prototype.ea;var Dr=l.createWebChannelTransport=function(){return new kr},Rr=l.getStatEventTarget=function(){return ut()},Or=l.ErrorCode=gt,Pr=l.EventType=yt,Lr=l.Event=at,Mr=l.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Fr=l.FetchXmlHttpFactory=Ln,Vr=l.WebChannel=bt,Ur=l.XhrIo=qn;const Br="@firebase/firestore";
/**
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
 */class jr{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}jr.UNAUTHENTICATED=new jr(null),jr.GOOGLE_CREDENTIALS=new jr("google-credentials-uid"),jr.FIRST_PARTY=new jr("first-party-uid"),jr.MOCK_USER=new jr("mock-user");
/**
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
 */
let qr="9.6.11";
/**
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
 */const $r=new a.Yd("@firebase/firestore");function Kr(){return $r.logLevel}function Gr(e){$r.setLogLevel(e)}function zr(e,...t){if($r.logLevel<=a["in"].DEBUG){const n=t.map(Jr);$r.debug(`Firestore (${qr}): ${e}`,...n)}}function Hr(e,...t){if($r.logLevel<=a["in"].ERROR){const n=t.map(Jr);$r.error(`Firestore (${qr}): ${e}`,...n)}}function Wr(e,...t){if($r.logLevel<=a["in"].WARN){const n=t.map(Jr);$r.warn(`Firestore (${qr}): ${e}`,...n)}}function Jr(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
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
 */var t}
/**
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
 */function Qr(e="Unexpected state"){const t=`FIRESTORE (${qr}) INTERNAL ASSERTION FAILED: `+e;throw Hr(t),new Error(t)}function Yr(e,t){e||Qr()}function Xr(e,t){e||Qr()}function Zr(e,t){return e}
/**
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
 */const es={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ts extends c.ZR{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
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
 */class ns{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
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
 */class rs{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ss{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(jr.UNAUTHENTICATED)))}shutdown(){}}class is{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class os{constructor(e){this.t=e,this.currentUser=jr.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let s=new ns;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new ns,e.enqueueRetryable((()=>r(this.currentUser)))};const i=()=>{const t=s;e.enqueueRetryable((async()=>{await t.promise,await r(this.currentUser)}))},o=e=>{zr("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),i()};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(zr("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new ns)}}),0),i()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(zr("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(Yr("string"==typeof t.accessToken),new rs(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Yr(null===e||"string"==typeof e),new jr(e)}}class as{constructor(e,t,n){this.type="FirstParty",this.user=jr.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",t);const r=e.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class cs{constructor(e,t,n){this.h=e,this.l=t,this.m=n}getToken(){return Promise.resolve(new as(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable((()=>t(jr.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class us{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ls{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,t){const n=e=>{null!=e.error&&zr("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.p;return this.p=e.token,zr("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const r=e=>{zr("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.g.onInit((e=>r(e))),setTimeout((()=>{if(!this.appCheck){const e=this.g.getImmediate({optional:!0});e?r(e):zr("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(Yr("string"==typeof e.token),this.p=e.token,new us(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
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
 */
class hs{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.I(e),this.T=e=>t.writeSequenceNumber(e))}I(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.T&&this.T(e),e}}
/**
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
 */function ds(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
/**
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
 */hs.A=-1;class fs{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=ds(40);for(let s=0;s<r.length;++s)n.length<20&&r[s]<t&&(n+=e.charAt(r[s]%e.length))}return n}}function ps(e,t){return e<t?-1:e>t?1:0}function ms(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}function gs(e){return e+"\0"}
/**
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
 */class ys{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ts(es.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ts(es.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new ts(es.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ts(es.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ys.fromMillis(Date.now())}static fromDate(e){return ys.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new ys(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ps(this.nanoseconds,e.nanoseconds):ps(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
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
 */class vs{constructor(e){this.timestamp=e}static fromTimestamp(e){return new vs(e)}static min(){return new vs(new ys(0,0))}static max(){return new vs(new ys(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
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
 */function ws(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function bs(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function _s(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
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
 */class Is{constructor(e,t,n){void 0===t?t=0:t>e.length&&Qr(),void 0===n?n=e.length-t:n>e.length-t&&Qr(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===Is.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Is?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),s=t.get(r);if(n<s)return-1;if(n>s)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Es extends Is{construct(e,t,n){return new Es(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new ts(es.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new Es(t)}static emptyPath(){return new Es([])}}const Ts=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ss extends Is{construct(e,t,n){return new Ss(e,t,n)}static isValidIdentifier(e){return Ts.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ss.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Ss(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const s=()=>{if(0===n.length)throw new ts(es.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let i=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new ts(es.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new ts(es.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(i=!i,r++):"."!==t||i?(n+=t,r++):(s(),r++)}if(s(),i)throw new ts(es.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ss(t)}static emptyPath(){return new Ss([])}}
/**
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
 */class ks{constructor(e){this.fields=e,e.sort(Ss.comparator)}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return ms(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
/**
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
 */function Cs(){return"undefined"!=typeof atob}
/**
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
 */class As{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new As(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new As(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
/**
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
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ps(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}As.EMPTY_BYTE_STRING=new As("");const Ns=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function xs(e){if(Yr(!!e),"string"==typeof e){let t=0;const n=Ns.exec(e);if(Yr(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Ds(e.seconds),nanos:Ds(e.nanos)}}function Ds(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function Rs(e){return"string"==typeof e?As.fromBase64String(e):As.fromUint8Array(e)}
/**
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
 */function Os(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Ps(e){const t=e.mapValue.fields.__previous_value__;return Os(t)?Ps(t):t}function Ls(e){const t=xs(e.mapValue.fields.__local_write_time__.timestampValue);return new ys(t.seconds,t.nanos)}
/**
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
 */class Ms{constructor(e,t,n,r,s,i,o,a){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=s,this.forceLongPolling=i,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Fs{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Fs("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof Fs&&e.projectId===this.projectId&&e.database===this.database}}
/**
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
 */function Vs(e){return null==e}function Us(e){return 0===e&&1/e==-1/0}function Bs(e){return"number"==typeof e&&Number.isInteger(e)&&!Us(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
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
 */class js{constructor(e){this.path=e}static fromPath(e){return new js(Es.fromString(e))}static fromName(e){return new js(Es.fromString(e).popFirst(5))}static empty(){return new js(Es.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===Es.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return Es.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new js(new Es(e.slice()))}}
/**
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
 */const qs={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},$s={nullValue:"NULL_VALUE"};function Ks(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Os(e)?4:si(e)?9:10:Qr()}function Gs(e,t){if(e===t)return!0;const n=Ks(e);if(n!==Ks(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Ls(e).isEqual(Ls(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=xs(e.timestampValue),r=xs(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return Rs(e.bytesValue).isEqual(Rs(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return Ds(e.geoPointValue.latitude)===Ds(t.geoPointValue.latitude)&&Ds(e.geoPointValue.longitude)===Ds(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return Ds(e.integerValue)===Ds(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=Ds(e.doubleValue),r=Ds(t.doubleValue);return n===r?Us(n)===Us(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return ms(e.arrayValue.values||[],t.arrayValue.values||[],Gs);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(ws(n)!==ws(r))return!1;for(const s in n)if(n.hasOwnProperty(s)&&(void 0===r[s]||!Gs(n[s],r[s])))return!1;return!0}(e,t);default:return Qr()}}function zs(e,t){return void 0!==(e.values||[]).find((e=>Gs(e,t)))}function Hs(e,t){if(e===t)return 0;const n=Ks(e),r=Ks(t);if(n!==r)return ps(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ps(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=Ds(e.integerValue||e.doubleValue),r=Ds(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return Ws(e.timestampValue,t.timestampValue);case 4:return Ws(Ls(e),Ls(t));case 5:return ps(e.stringValue,t.stringValue);case 6:return function(e,t){const n=Rs(e),r=Rs(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let s=0;s<n.length&&s<r.length;s++){const e=ps(n[s],r[s]);if(0!==e)return e}return ps(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=ps(Ds(e.latitude),Ds(t.latitude));return 0!==n?n:ps(Ds(e.longitude),Ds(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],r=t.values||[];for(let s=0;s<n.length&&s<r.length;++s){const e=Hs(n[s],r[s]);if(e)return e}return ps(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){const n=e.fields||{},r=Object.keys(n),s=t.fields||{},i=Object.keys(s);r.sort(),i.sort();for(let o=0;o<r.length&&o<i.length;++o){const e=ps(r[o],i[o]);if(0!==e)return e;const t=Hs(n[r[o]],s[i[o]]);if(0!==t)return t}return ps(r.length,i.length)}(e.mapValue,t.mapValue);default:throw Qr()}}function Ws(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return ps(e,t);const n=xs(e),r=xs(t),s=ps(n.seconds,r.seconds);return 0!==s?s:ps(n.nanos,r.nanos)}function Js(e){return Qs(e)}function Qs(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=xs(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Rs(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,js.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=Qs(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const s of t)r?r=!1:n+=",",n+=`${s}:${Qs(e.fields[s])}`;return n+"}"}(e.mapValue):Qr();var t,n}function Ys(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function Xs(e){return!!e&&"integerValue"in e}function Zs(e){return!!e&&"arrayValue"in e}function ei(e){return!!e&&"nullValue"in e}function ti(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function ni(e){return!!e&&"mapValue"in e}function ri(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return bs(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=ri(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=ri(e.arrayValue.values[n]);return t}return Object.assign({},e)}function si(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}function ii(e){return"nullValue"in e?$s:"booleanValue"in e?{booleanValue:!1}:"integerValue"in e||"doubleValue"in e?{doubleValue:NaN}:"timestampValue"in e?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in e?{stringValue:""}:"bytesValue"in e?{bytesValue:""}:"referenceValue"in e?Ys(Fs.empty(),js.empty()):"geoPointValue"in e?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in e?{arrayValue:{}}:"mapValue"in e?{mapValue:{}}:Qr()}function oi(e){return"nullValue"in e?{booleanValue:!1}:"booleanValue"in e?{doubleValue:NaN}:"integerValue"in e||"doubleValue"in e?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in e?{stringValue:""}:"stringValue"in e?{bytesValue:""}:"bytesValue"in e?Ys(Fs.empty(),js.empty()):"referenceValue"in e?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in e?{arrayValue:{}}:"arrayValue"in e?{mapValue:{}}:"mapValue"in e?qs:Qr()}function ai(e,t){return void 0===e?t:void 0===t||Hs(e,t)>0?e:t}function ci(e,t){return void 0===e?t:void 0===t||Hs(e,t)<0?e:t}
/**
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
 */class ui{constructor(e){this.value=e}static empty(){return new ui({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!ni(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ri(t)}setAll(e){let t=Ss.emptyPath(),n={},r=[];e.forEach(((e,s)=>{if(!t.isImmediateParentOf(s)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=s.popLast()}e?n[s.lastSegment()]=ri(e):r.push(s.lastSegment())}));const s=this.getFieldsMap(t);this.applyChanges(s,n,r)}delete(e){const t=this.field(e.popLast());ni(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Gs(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];ni(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){bs(t,((t,n)=>e[t]=n));for(const r of n)delete e[r]}clone(){return new ui(ri(this.value))}}function li(e){const t=[];return bs(e.fields,((e,n)=>{const r=new Ss([e]);if(ni(n)){const e=li(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)})),new ks(t)
/**
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
 */}class hi{constructor(e,t,n,r,s,i){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.data=s,this.documentState=i}static newInvalidDocument(e){return new hi(e,0,vs.min(),vs.min(),ui.empty(),0)}static newFoundDocument(e,t,n){return new hi(e,1,t,vs.min(),n,0)}static newNoDocument(e,t){return new hi(e,2,t,vs.min(),ui.empty(),0)}static newUnknownDocument(e,t){return new hi(e,3,t,vs.min(),ui.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ui.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ui.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof hi&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new hi(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}class di{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}function fi(e){return e.fields.find((e=>2===e.kind))}function pi(e){return e.fields.filter((e=>2!==e.kind))}di.UNKNOWN_ID=-1;class mi{constructor(e,t){this.fieldPath=e,this.kind=t}}class gi{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new gi(0,wi.min())}}function yi(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,s=vs.fromTimestamp(1e9===r?new ys(n+1,0):new ys(n,r));return new wi(s,js.empty(),t)}function vi(e){return new wi(e.readTime,e.key,-1)}class wi{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new wi(vs.min(),js.empty(),-1)}static max(){return new wi(vs.max(),js.empty(),-1)}}function bi(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=js.comparator(e.documentKey,t.documentKey),0!==n?n:ps(e.largestBatchId,t.largestBatchId))}
/**
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
 */class _i{constructor(e,t=null,n=[],r=[],s=null,i=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=s,this.startAt=i,this.endAt=o,this.P=null}}function Ii(e,t=null,n=[],r=[],s=null,i=null,o=null){return new _i(e,t,n,r,s,i,o)}function Ei(e){const t=Zr(e);if(null===t.P){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>{return(t=e).field.canonicalString()+t.op.toString()+Js(t.value);var t})).join(","),e+="|ob:",e+=t.orderBy.map((e=>function(e){return e.field.canonicalString()+e.dir}(e))).join(","),Vs(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>Js(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>Js(e))).join(",")),t.P=e}return t.P}function Ti(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>{return`${(t=e).field.canonicalString()} ${t.op} ${Js(t.value)}`;var t})).join(", ")}]`),Vs(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e))).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>Js(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>Js(e))).join(",")),`Target(${t})`}function Si(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let s=0;s<e.orderBy.length;s++)if(!ji(e.orderBy[s],t.orderBy[s]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let s=0;s<e.filters.length;s++)if(n=e.filters[s],r=t.filters[s],n.op!==r.op||!n.field.isEqual(r.field)||!Gs(n.value,r.value))return!1;var n,r;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!$i(e.startAt,t.startAt)&&$i(e.endAt,t.endAt)}function ki(e){return js.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}function Ci(e,t){return e.filters.filter((e=>e instanceof xi&&e.field.isEqual(t)))}function Ai(e,t,n){let r,s=!0;for(const i of Ci(e,t)){let e,t=!0;switch(i.op){case"<":case"<=":e=ii(i.value);break;case"==":case"in":case">=":e=i.value;break;case">":e=i.value,t=!1;break;case"!=":case"not-in":e=$s}ai(r,e)===e&&(r=e,s=t)}if(null!==n)for(let i=0;i<e.orderBy.length;++i)if(e.orderBy[i].field.isEqual(t)){const e=n.position[i];ai(r,e)===e&&(r=e,s=n.inclusive);break}return{value:r,inclusive:s}}function Ni(e,t,n){let r,s=!0;for(const i of Ci(e,t)){let e,t=!0;switch(i.op){case">=":case">":e=oi(i.value),t=!1;break;case"==":case"in":case"<=":e=i.value;break;case"<":e=i.value,t=!1;break;case"!=":case"not-in":e=qs}ci(r,e)===e&&(r=e,s=t)}if(null!==n)for(let i=0;i<e.orderBy.length;++i)if(e.orderBy[i].field.isEqual(t)){const e=n.position[i];ci(r,e)===e&&(r=e,s=n.inclusive);break}return{value:r,inclusive:s}}class xi extends class{}{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.V(e,t,n):new Di(e,t,n):"array-contains"===t?new Li(e,n):"in"===t?new Mi(e,n):"not-in"===t?new Fi(e,n):"array-contains-any"===t?new Vi(e,n):new xi(e,t,n)}static V(e,t,n){return"in"===t?new Ri(e,n):new Oi(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.v(Hs(t,this.value)):null!==t&&Ks(this.value)===Ks(t)&&this.v(Hs(t,this.value))}v(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return Qr()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Di extends xi{constructor(e,t,n){super(e,t,n),this.key=js.fromName(n.referenceValue)}matches(e){const t=js.comparator(e.key,this.key);return this.v(t)}}class Ri extends xi{constructor(e,t){super(e,"in",t),this.keys=Pi("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Oi extends xi{constructor(e,t){super(e,"not-in",t),this.keys=Pi("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Pi(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>js.fromName(e.referenceValue)))}class Li extends xi{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Zs(t)&&zs(t.arrayValue,this.value)}}class Mi extends xi{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&zs(this.value.arrayValue,t)}}class Fi extends xi{constructor(e,t){super(e,"not-in",t)}matches(e){if(zs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!zs(this.value.arrayValue,t)}}class Vi extends xi{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Zs(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>zs(this.value.arrayValue,e)))}}class Ui{constructor(e,t){this.position=e,this.inclusive=t}}class Bi{constructor(e,t="asc"){this.field=e,this.dir=t}}function ji(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function qi(e,t,n){let r=0;for(let s=0;s<e.position.length;s++){const i=t[s],o=e.position[s];if(r=i.field.isKeyField()?js.comparator(js.fromName(o.referenceValue),n.key):Hs(o,n.data.field(i.field)),"desc"===i.dir&&(r*=-1),0!==r)break}return r}function $i(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Gs(e.position[n],t.position[n]))return!1;return!0}
/**
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
 */class Ki{constructor(e,t=null,n=[],r=[],s=null,i="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=s,this.limitType=i,this.startAt=o,this.endAt=a,this.D=null,this.C=null,this.startAt,this.endAt}}function Gi(e,t,n,r,s,i,o,a){return new Ki(e,t,n,r,s,i,o,a)}function zi(e){return new Ki(e)}function Hi(e){return!Vs(e.limit)&&"F"===e.limitType}function Wi(e){return!Vs(e.limit)&&"L"===e.limitType}function Ji(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Qi(e){for(const t of e.filters)if(t.S())return t.field;return null}function Yi(e){return null!==e.collectionGroup}function Xi(e){const t=Zr(e);if(null===t.D){t.D=[];const e=Qi(t),n=Ji(t);if(null!==e&&null===n)e.isKeyField()||t.D.push(new Bi(e)),t.D.push(new Bi(Ss.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.D.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.D.push(new Bi(Ss.keyField(),e))}}}return t.D}function Zi(e){const t=Zr(e);if(!t.C)if("F"===t.limitType)t.C=Ii(t.path,t.collectionGroup,Xi(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const s of Xi(t)){const t="desc"===s.dir?"asc":"desc";e.push(new Bi(s.field,t))}const n=t.endAt?new Ui(t.endAt.position,!t.endAt.inclusive):null,r=t.startAt?new Ui(t.startAt.position,!t.startAt.inclusive):null;t.C=Ii(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}return t.C}function eo(e,t,n){return new Ki(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function to(e,t){return Si(Zi(e),Zi(t))&&e.limitType===t.limitType}function no(e){return`${Ei(Zi(e))}|lt:${e.limitType}`}function ro(e){return`Query(target=${Ti(Zi(e))}; limitType=${e.limitType})`}function so(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):js.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of e.explicitOrderBy)if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,n){const r=qi(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,Xi(e),t))&&!(e.endAt&&!function(e,t,n){const r=qi(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,Xi(e),t))}(e,t)}function io(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function oo(e){return(t,n)=>{let r=!1;for(const s of Xi(e)){const e=ao(s,t,n);if(0!==e)return e;r=r||s.field.isKeyField()}return 0}}function ao(e,t,n){const r=e.field.isKeyField()?js.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),s=n.data.field(e);return null!==r&&null!==s?Hs(r,s):Qr()}
/**
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
 */(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return Qr()}}
/**
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
 */function co(e,t){if(e.N){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Us(t)?"-0":t}}function uo(e){return{integerValue:""+e}}function lo(e,t){return Bs(t)?uo(t):co(e,t)}
/**
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
 */class ho{constructor(){this._=void 0}}function fo(e,t,n){return e instanceof go?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof yo?vo(e,t):e instanceof wo?bo(e,t):function(e,t){const n=mo(e,t),r=Io(n)+Io(e.k);return Xs(n)&&Xs(e.k)?uo(r):co(e.M,r)}(e,t)}function po(e,t,n){return e instanceof yo?vo(e,t):e instanceof wo?bo(e,t):n}function mo(e,t){return e instanceof _o?Xs(n=t)||function(e){return!!e&&"doubleValue"in e}(n)?t:{integerValue:0}:null;var n}class go extends ho{}class yo extends ho{constructor(e){super(),this.elements=e}}function vo(e,t){const n=Eo(t);for(const r of e.elements)n.some((e=>Gs(e,r)))||n.push(r);return{arrayValue:{values:n}}}class wo extends ho{constructor(e){super(),this.elements=e}}function bo(e,t){let n=Eo(t);for(const r of e.elements)n=n.filter((e=>!Gs(e,r)));return{arrayValue:{values:n}}}class _o extends ho{constructor(e,t){super(),this.M=e,this.k=t}}function Io(e){return Ds(e.integerValue||e.doubleValue)}function Eo(e){return Zs(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
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
 */class To{constructor(e,t){this.field=e,this.transform=t}}function So(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof yo&&t instanceof yo||e instanceof wo&&t instanceof wo?ms(e.elements,t.elements,Gs):e instanceof _o&&t instanceof _o?Gs(e.k,t.k):e instanceof go&&t instanceof go}(e.transform,t.transform)}class ko{constructor(e,t){this.version=e,this.transformResults=t}}class Co{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Co}static exists(e){return new Co(void 0,e)}static updateTime(e){return new Co(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ao(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class No{}function xo(e,t,n){e instanceof Lo?function(e,t,n){const r=e.value.clone(),s=Vo(e.fieldTransforms,t,n.transformResults);r.setAll(s),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof Mo?function(e,t,n){if(!Ao(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=Vo(e.fieldTransforms,t,n.transformResults),s=t.data;s.setAll(Fo(e)),s.setAll(r),t.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function Do(e,t,n){e instanceof Lo?function(e,t,n){if(!Ao(e.precondition,t))return;const r=e.value.clone(),s=Uo(e.fieldTransforms,n,t);r.setAll(s),t.convertToFoundDocument(Po(t),r).setHasLocalMutations()}(e,t,n):e instanceof Mo?function(e,t,n){if(!Ao(e.precondition,t))return;const r=Uo(e.fieldTransforms,n,t),s=t.data;s.setAll(Fo(e)),s.setAll(r),t.convertToFoundDocument(Po(t),s).setHasLocalMutations()}(e,t,n):function(e,t){Ao(e.precondition,t)&&t.convertToNoDocument(vs.min())}(e,t)}function Ro(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),s=mo(r.transform,e||null);null!=s&&(null==n&&(n=ui.empty()),n.set(r.field,s))}return n||null}function Oo(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&ms(e,t,((e,t)=>So(e,t)))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}function Po(e){return e.isFoundDocument()?e.version:vs.min()}class Lo extends No{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}}class Mo extends No{constructor(e,t,n,r,s=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=s,this.type=1}}function Fo(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}})),t}function Vo(e,t,n){const r=new Map;Yr(e.length===n.length);for(let s=0;s<n.length;s++){const i=e[s],o=i.transform,a=t.data.field(i.field);r.set(i.field,po(o,a,n[s]))}return r}function Uo(e,t,n){const r=new Map;for(const s of e){const e=s.transform,i=n.data.field(s.field);r.set(s.field,fo(e,i,t))}return r}class Bo extends No{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}}class jo extends No{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}}
/**
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
 */class qo{constructor(e){this.count=e}}
/**
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
 */var $o,Ko;function Go(e){switch(e){default:return Qr();case es.CANCELLED:case es.UNKNOWN:case es.DEADLINE_EXCEEDED:case es.RESOURCE_EXHAUSTED:case es.INTERNAL:case es.UNAVAILABLE:case es.UNAUTHENTICATED:return!1;case es.INVALID_ARGUMENT:case es.NOT_FOUND:case es.ALREADY_EXISTS:case es.PERMISSION_DENIED:case es.FAILED_PRECONDITION:case es.ABORTED:case es.OUT_OF_RANGE:case es.UNIMPLEMENTED:case es.DATA_LOSS:return!0}}function zo(e){if(void 0===e)return Hr("GRPC error has no .code"),es.UNKNOWN;switch(e){case $o.OK:return es.OK;case $o.CANCELLED:return es.CANCELLED;case $o.UNKNOWN:return es.UNKNOWN;case $o.DEADLINE_EXCEEDED:return es.DEADLINE_EXCEEDED;case $o.RESOURCE_EXHAUSTED:return es.RESOURCE_EXHAUSTED;case $o.INTERNAL:return es.INTERNAL;case $o.UNAVAILABLE:return es.UNAVAILABLE;case $o.UNAUTHENTICATED:return es.UNAUTHENTICATED;case $o.INVALID_ARGUMENT:return es.INVALID_ARGUMENT;case $o.NOT_FOUND:return es.NOT_FOUND;case $o.ALREADY_EXISTS:return es.ALREADY_EXISTS;case $o.PERMISSION_DENIED:return es.PERMISSION_DENIED;case $o.FAILED_PRECONDITION:return es.FAILED_PRECONDITION;case $o.ABORTED:return es.ABORTED;case $o.OUT_OF_RANGE:return es.OUT_OF_RANGE;case $o.UNIMPLEMENTED:return es.UNIMPLEMENTED;case $o.DATA_LOSS:return es.DATA_LOSS;default:return Qr()}}(Ko=$o||($o={}))[Ko.OK=0]="OK",Ko[Ko.CANCELLED=1]="CANCELLED",Ko[Ko.UNKNOWN=2]="UNKNOWN",Ko[Ko.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ko[Ko.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ko[Ko.NOT_FOUND=5]="NOT_FOUND",Ko[Ko.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ko[Ko.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ko[Ko.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ko[Ko.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ko[Ko.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ko[Ko.ABORTED=10]="ABORTED",Ko[Ko.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ko[Ko.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ko[Ko.INTERNAL=13]="INTERNAL",Ko[Ko.UNAVAILABLE=14]="UNAVAILABLE",Ko[Ko.DATA_LOSS=15]="DATA_LOSS";
/**
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
 */
class Ho{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[r,s]of n)if(this.equalsFn(r,e))return s}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return void(r[s]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){bs(this.inner,((t,n)=>{for(const[r,s]of n)e(r,s)}))}isEmpty(){return _s(this.inner)}size(){return this.innerSize}}
/**
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
 */class Wo{constructor(e,t){this.comparator=e,this.root=t||Qo.EMPTY}insert(e,t){return new Wo(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Qo.BLACK,null,null))}remove(e){return new Wo(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Qo.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Jo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Jo(this.root,e,this.comparator,!1)}getReverseIterator(){return new Jo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Jo(this.root,e,this.comparator,!0)}}class Jo{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,t&&r&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(0===s){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Qo{constructor(e,t,n,r,s){this.key=e,this.value=t,this.color=null!=n?n:Qo.RED,this.left=null!=r?r:Qo.EMPTY,this.right=null!=s?s:Qo.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,s){return new Qo(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=s?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const s=n(e,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===s?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Qo.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return Qo.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Qo.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Qo.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Qr();if(this.right.isRed())throw Qr();const e=this.left.check();if(e!==this.right.check())throw Qr();return e+(this.isRed()?0:1)}}Qo.EMPTY=null,Qo.RED=!0,Qo.BLACK=!1,Qo.EMPTY=new class{constructor(){this.size=0}get key(){throw Qr()}get value(){throw Qr()}get color(){throw Qr()}get left(){throw Qr()}get right(){throw Qr()}copy(e,t,n,r,s){return this}insert(e,t,n){return new Qo(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
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
 */
class Yo{constructor(e){this.comparator=e,this.data=new Wo(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Xo(this.data.getIterator())}getIteratorFrom(e){return new Xo(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof Yo))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Yo(this.comparator);return t.data=e,t}}class Xo{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Zo(e){return e.hasNext()?e.getNext():void 0}
/**
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
 */const ea=new Wo(js.comparator);function ta(){return ea}const na=new Wo(js.comparator);function ra(){return na}function sa(){return new Ho((e=>e.toString()),((e,t)=>e.isEqual(t)))}const ia=new Wo(js.comparator),oa=new Yo(js.comparator);function aa(...e){let t=oa;for(const n of e)t=t.add(n);return t}const ca=new Yo(ps);function ua(){return ca}
/**
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
 */class la{constructor(e,t,n,r,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t){const n=new Map;return n.set(e,ha.createSynthesizedTargetChangeForCurrentChange(e,t)),new la(vs.min(),n,ua(),ta(),aa())}}class ha{constructor(e,t,n,r,s){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t){return new ha(As.EMPTY_BYTE_STRING,t,aa(),aa(),aa())}}
/**
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
 */class da{constructor(e,t,n,r){this.O=e,this.removedTargetIds=t,this.key=n,this.F=r}}class fa{constructor(e,t){this.targetId=e,this.$=t}}class pa{constructor(e,t,n=As.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class ma{constructor(){this.B=0,this.L=va(),this.U=As.EMPTY_BYTE_STRING,this.q=!1,this.K=!0}get current(){return this.q}get resumeToken(){return this.U}get G(){return 0!==this.B}get j(){return this.K}W(e){e.approximateByteSize()>0&&(this.K=!0,this.U=e)}H(){let e=aa(),t=aa(),n=aa();return this.L.forEach(((r,s)=>{switch(s){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:Qr()}})),new ha(this.U,this.q,e,t,n)}J(){this.K=!1,this.L=va()}Y(e,t){this.K=!0,this.L=this.L.insert(e,t)}X(e){this.K=!0,this.L=this.L.remove(e)}Z(){this.B+=1}tt(){this.B-=1}et(){this.K=!0,this.q=!0}}class ga{constructor(e){this.nt=e,this.st=new Map,this.it=ta(),this.rt=ya(),this.ot=new Yo(ps)}ut(e){for(const t of e.O)e.F&&e.F.isFoundDocument()?this.at(t,e.F):this.ct(t,e.key,e.F);for(const t of e.removedTargetIds)this.ct(t,e.key,e.F)}ht(e){this.forEachTarget(e,(t=>{const n=this.lt(t);switch(e.state){case 0:this.ft(t)&&n.W(e.resumeToken);break;case 1:n.tt(),n.G||n.J(),n.W(e.resumeToken);break;case 2:n.tt(),n.G||this.removeTarget(t);break;case 3:this.ft(t)&&(n.et(),n.W(e.resumeToken));break;case 4:this.ft(t)&&(this.dt(t),n.W(e.resumeToken));break;default:Qr()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.st.forEach(((e,n)=>{this.ft(n)&&t(n)}))}_t(e){const t=e.targetId,n=e.$.count,r=this.wt(t);if(r){const e=r.target;if(ki(e))if(0===n){const n=new js(e.path);this.ct(t,n,hi.newNoDocument(n,vs.min()))}else Yr(1===n);else this.gt(t)!==n&&(this.dt(t),this.ot=this.ot.add(t))}}yt(e){const t=new Map;this.st.forEach(((n,r)=>{const s=this.wt(r);if(s){if(n.current&&ki(s.target)){const t=new js(s.target.path);null!==this.it.get(t)||this.It(r,t)||this.ct(r,t,hi.newNoDocument(t,e))}n.j&&(t.set(r,n.H()),n.J())}}));let n=aa();this.rt.forEach(((e,t)=>{let r=!0;t.forEachWhile((e=>{const t=this.wt(e);return!t||2===t.purpose||(r=!1,!1)})),r&&(n=n.add(e))})),this.it.forEach(((t,n)=>n.setReadTime(e)));const r=new la(e,t,this.ot,this.it,n);return this.it=ta(),this.rt=ya(),this.ot=new Yo(ps),r}at(e,t){if(!this.ft(e))return;const n=this.It(e,t.key)?2:0;this.lt(e).Y(t.key,n),this.it=this.it.insert(t.key,t),this.rt=this.rt.insert(t.key,this.Tt(t.key).add(e))}ct(e,t,n){if(!this.ft(e))return;const r=this.lt(e);this.It(e,t)?r.Y(t,1):r.X(t),this.rt=this.rt.insert(t,this.Tt(t).delete(e)),n&&(this.it=this.it.insert(t,n))}removeTarget(e){this.st.delete(e)}gt(e){const t=this.lt(e).H();return this.nt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Z(e){this.lt(e).Z()}lt(e){let t=this.st.get(e);return t||(t=new ma,this.st.set(e,t)),t}Tt(e){let t=this.rt.get(e);return t||(t=new Yo(ps),this.rt=this.rt.insert(e,t)),t}ft(e){const t=null!==this.wt(e);return t||zr("WatchChangeAggregator","Detected inactive target",e),t}wt(e){const t=this.st.get(e);return t&&t.G?null:this.nt.Et(e)}dt(e){this.st.set(e,new ma),this.nt.getRemoteKeysForTarget(e).forEach((t=>{this.ct(e,t,null)}))}It(e,t){return this.nt.getRemoteKeysForTarget(e).has(t)}}function ya(){return new Wo(js.comparator)}function va(){return new Wo(js.comparator)}
/**
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
 */const wa=(()=>{const e={asc:"ASCENDING",desc:"DESCENDING"};return e})(),ba=(()=>{const e={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return e})();class _a{constructor(e,t){this.databaseId=e,this.N=t}}function Ia(e,t){return e.N?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Ea(e,t){return e.N?t.toBase64():t.toUint8Array()}function Ta(e,t){return Ia(e,t.toTimestamp())}function Sa(e){return Yr(!!e),vs.fromTimestamp(function(e){const t=xs(e);return new ys(t.seconds,t.nanos)}(e))}function ka(e,t){return function(e){return new Es(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function Ca(e){const t=Es.fromString(e);return Yr(Za(t)),t}function Aa(e,t){return ka(e.databaseId,t.path)}function Na(e,t){const n=Ca(t);if(n.get(1)!==e.databaseId.projectId)throw new ts(es.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new ts(es.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new js(Oa(n))}function xa(e,t){return ka(e.databaseId,t)}function Da(e){const t=Ca(e);return 4===t.length?Es.emptyPath():Oa(t)}function Ra(e){return new Es(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Oa(e){return Yr(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function Pa(e,t,n){return{name:Aa(e,t),fields:n.value.mapValue.fields}}function La(e,t,n){const r=Na(e,t.name),s=Sa(t.updateTime),i=new ui({mapValue:{fields:t.fields}}),o=hi.newFoundDocument(r,s,i);return n&&o.setHasCommittedMutations(),n?o.setHasCommittedMutations():o}function Ma(e,t){return"found"in t?function(e,t){Yr(!!t.found),t.found.name,t.found.updateTime;const n=Na(e,t.found.name),r=Sa(t.found.updateTime),s=new ui({mapValue:{fields:t.found.fields}});return hi.newFoundDocument(n,r,s)}(e,t):"missing"in t?function(e,t){Yr(!!t.missing),Yr(!!t.readTime);const n=Na(e,t.missing),r=Sa(t.readTime);return hi.newNoDocument(n,r)}(e,t):Qr()}function Fa(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:Qr()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=function(e,t){return e.N?(Yr(void 0===t||"string"==typeof t),As.fromBase64String(t||"")):(Yr(void 0===t||t instanceof Uint8Array),As.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(e){const t=void 0===e.code?es.UNKNOWN:zo(e.code);return new ts(t,e.message||"")}(o);n=new pa(r,s,i,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=Na(e,r.document.name),i=Sa(r.document.updateTime),o=new ui({mapValue:{fields:r.document.fields}}),a=hi.newFoundDocument(s,i,o),c=r.targetIds||[],u=r.removedTargetIds||[];n=new da(c,u,a.key,a)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=Na(e,r.document),i=r.readTime?Sa(r.readTime):vs.min(),o=hi.newNoDocument(s,i),a=r.removedTargetIds||[];n=new da([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=Na(e,r.document),i=r.removedTargetIds||[];n=new da([],i,s,null)}else{if(!("filter"in t))return Qr();{t.filter;const e=t.filter;e.targetId;const r=e.count||0,s=new qo(r),i=e.targetId;n=new fa(i,s)}}return n}function Va(e,t){let n;if(t instanceof Lo)n={update:Pa(e,t.key,t.value)};else if(t instanceof Bo)n={delete:Aa(e,t.key)};else if(t instanceof Mo)n={update:Pa(e,t.key,t.data),updateMask:Xa(t.fieldMask)};else{if(!(t instanceof jo))return Qr();n={verify:Aa(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof go)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof yo)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof wo)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof _o)return{fieldPath:t.field.canonicalString(),increment:n.k};throw Qr()}(0,e)))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:Ta(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:Qr()}(e,t.precondition)),n}function Ua(e,t){const n=t.currentDocument?function(e){return void 0!==e.updateTime?Co.updateTime(Sa(e.updateTime)):void 0!==e.exists?Co.exists(e.exists):Co.none()}(t.currentDocument):Co.none(),r=t.updateTransforms?t.updateTransforms.map((t=>function(e,t){let n=null;if("setToServerValue"in t)Yr("REQUEST_TIME"===t.setToServerValue),n=new go;else if("appendMissingElements"in t){const e=t.appendMissingElements.values||[];n=new yo(e)}else if("removeAllFromArray"in t){const e=t.removeAllFromArray.values||[];n=new wo(e)}else"increment"in t?n=new _o(e,t.increment):Qr();const r=Ss.fromServerFormat(t.fieldPath);return new To(r,n)}(e,t))):[];if(t.update){t.update.name;const s=Na(e,t.update.name),i=new ui({mapValue:{fields:t.update.fields}});if(t.updateMask){const e=function(e){const t=e.fieldPaths||[];return new ks(t.map((e=>Ss.fromServerFormat(e))))}(t.updateMask);return new Mo(s,i,e,n,r)}return new Lo(s,i,n,r)}if(t.delete){const r=Na(e,t.delete);return new Bo(r,n)}if(t.verify){const r=Na(e,t.verify);return new jo(r,n)}return Qr()}function Ba(e,t){return e&&e.length>0?(Yr(void 0!==t),e.map((e=>function(e,t){let n=e.updateTime?Sa(e.updateTime):Sa(t);return n.isEqual(vs.min())&&(n=Sa(t)),new ko(n,e.transformResults||[])}(e,t)))):[]}function ja(e,t){return{documents:[xa(e,t.path)]}}function qa(e,t){const n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=xa(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=xa(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(e){if(0===e.length)return;const t=e.map((e=>function(e){if("=="===e.op){if(ti(e.value))return{unaryFilter:{field:Wa(e.field),op:"IS_NAN"}};if(ei(e.value))return{unaryFilter:{field:Wa(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(ti(e.value))return{unaryFilter:{field:Wa(e.field),op:"IS_NOT_NAN"}};if(ei(e.value))return{unaryFilter:{field:Wa(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Wa(e.field),op:Ha(e.op),value:e.value}}}(e)));return 1===t.length?t[0]:{compositeFilter:{op:"AND",filters:t}}}(t.filters);s&&(n.structuredQuery.where=s);const i=function(e){if(0!==e.length)return e.map((e=>function(e){return{field:Wa(e.field),direction:za(e.dir)}}(e)))}(t.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(e,t){return e.N||Vs(t)?t:{value:t}}(e,t.limit);var a;return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),n}function $a(e){let t=Da(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Yr(1===r);const e=n.from[0];e.allDescendants?s=e.collectionId:t=t.child(e.collectionId)}let i=[];n.where&&(i=Ga(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((e=>function(e){return new Bi(Ja(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e))));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,Vs(t)?null:t}(n.limit));let c=null;n.startAt&&(c=function(e){const t=!!e.before,n=e.values||[];return new Ui(n,t)}(n.startAt));let u=null;return n.endAt&&(u=function(e){const t=!e.before,n=e.values||[];return new Ui(n,t)}(n.endAt)),Gi(t,s,o,i,a,"F",c,u)}function Ka(e,t){const n=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Qr()}}(0,t.purpose);return null==n?null:{"goog-listen-tags":n}}function Ga(e){return e?void 0!==e.unaryFilter?[Ya(e)]:void 0!==e.fieldFilter?[Qa(e)]:void 0!==e.compositeFilter?e.compositeFilter.filters.map((e=>Ga(e))).reduce(((e,t)=>e.concat(t))):Qr():[]}function za(e){return wa[e]}function Ha(e){return ba[e]}function Wa(e){return{fieldPath:e.canonicalString()}}function Ja(e){return Ss.fromServerFormat(e.fieldPath)}function Qa(e){return xi.create(Ja(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Qr()}}(e.fieldFilter.op),e.fieldFilter.value)}function Ya(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Ja(e.unaryFilter.field);return xi.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Ja(e.unaryFilter.field);return xi.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Ja(e.unaryFilter.field);return xi.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Ja(e.unaryFilter.field);return xi.create(s,"!=",{nullValue:"NULL_VALUE"});default:return Qr()}}function Xa(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function Za(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
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
 */function ec(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=nc(t)),t=tc(e.get(n),t);return nc(t)}function tc(e,t){let n=t;const r=e.length;for(let s=0;s<r;s++){const t=e.charAt(s);switch(t){case"\0":n+="";break;case"":n+="";break;default:n+=t}}return n}function nc(e){return e+""}function rc(e){const t=e.length;if(Yr(t>=2),2===t)return Yr(""===e.charAt(0)&&""===e.charAt(1)),Es.emptyPath();const n=t-2,r=[];let s="";for(let i=0;i<t;){const t=e.indexOf("",i);switch((t<0||t>n)&&Qr(),e.charAt(t+1)){case"":const n=e.substring(i,t);let o;0===s.length?o=n:(s+=n,o=s,s=""),r.push(o);break;case"":s+=e.substring(i,t),s+="\0";break;case"":s+=e.substring(i,t+1);break;default:Qr()}i=t+2}return new Es(r)}
/**
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
 */const sc=["userId","batchId"];
/**
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
 */function ic(e,t){return[e,ec(t)]}function oc(e,t,n){return[e,ec(t),n]}const ac={},cc=["prefixPath","collectionGroup","readTime","documentId"],uc=["prefixPath","collectionGroup","documentId"],lc=["collectionGroup","readTime","prefixPath","documentId"],hc=["canonicalId","targetId"],dc=["targetId","path"],fc=["path","targetId"],pc=["collectionId","parent"],mc=["indexId","uid"],gc=["uid","sequenceNumber"],yc=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],vc=["indexId","uid","orderedDocumentKey"],wc=["userId","collectionPath","documentId"],bc=["userId","collectionPath","largestBatchId"],_c=["userId","collectionGroup","largestBatchId"],Ic=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Ec=[...Ic,"documentOverlays"],Tc=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Sc=[...Tc,"indexConfiguration","indexState","indexEntries"],kc="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";
/**
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
 */class Cc{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
/**
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
 */class Ac{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Qr(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Ac(((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof Ac?t:Ac.resolve(t)}catch(e){return Ac.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):Ac.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):Ac.reject(t)}static resolve(e){return new Ac(((t,n)=>{t(e)}))}static reject(e){return new Ac(((t,n)=>{n(e)}))}static waitFor(e){return new Ac(((t,n)=>{let r=0,s=0,i=!1;e.forEach((e=>{++r,e.next((()=>{++s,i&&s===r&&t()}),(e=>n(e)))})),i=!0,s===r&&t()}))}static or(e){let t=Ac.resolve(!1);for(const n of e)t=t.next((e=>e?Ac.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,r)=>{n.push(t.call(this,e,r))})),this.waitFor(n)}}
/**
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
 */class Nc{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.At=new ns,this.transaction.oncomplete=()=>{this.At.resolve()},this.transaction.onabort=()=>{t.error?this.At.reject(new Rc(e,t.error)):this.At.resolve()},this.transaction.onerror=t=>{const n=Fc(t.target.error);this.At.reject(new Rc(e,n))}}static open(e,t,n,r){try{return new Nc(t,e.transaction(r,n))}catch(e){throw new Rc(t,e)}}get Rt(){return this.At.promise}abort(e){e&&this.At.reject(e),this.aborted||(zr("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}Pt(){const e=this.transaction;this.aborted||"function"!=typeof e.commit||e.commit()}store(e){const t=this.transaction.objectStore(e);return new Pc(t)}}class xc{constructor(e,t,n){this.name=e,this.version=t,this.bt=n,12.2===xc.Vt((0,c.z$)())&&Hr("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return zr("SimpleDb","Removing database:",e),Lc(window.indexedDB.deleteDatabase(e)).toPromise()}static vt(){if(!(0,c.hl)())return!1;if(xc.St())return!0;const e=(0,c.z$)(),t=xc.Vt(e),n=0<t&&t<10,r=xc.Dt(e),s=0<r&&r<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||s)}static St(){var e;return"undefined"!=typeof process&&"YES"===(null===(e={NODE_ENV:"production",BASE_URL:"/FirebaseAuthentication/"})||void 0===e?void 0:e.Ct)}static xt(e,t){return e.store(t)}static Vt(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}static Dt(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}async Nt(e){return this.db||(zr("SimpleDb","Opening database:",this.name),this.db=await new Promise(((t,n)=>{const r=indexedDB.open(this.name,this.version);r.onsuccess=e=>{const n=e.target.result;t(n)},r.onblocked=()=>{n(new Rc(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=t=>{const r=t.target.error;"VersionError"===r.name?n(new ts(es.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===r.name?n(new ts(es.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+r)):n(new Rc(e,r))},r.onupgradeneeded=e=>{zr("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',e.oldVersion);const t=e.target.result;this.bt.kt(t,r.transaction,e.oldVersion,this.version).next((()=>{zr("SimpleDb","Database upgrade to version "+this.version+" complete")}))}}))),this.Mt&&(this.db.onversionchange=e=>this.Mt(e)),this.db}Ot(e){this.Mt=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,r){const s="readonly"===t;let i=0;for(;;){++i;try{this.db=await this.Nt(e);const t=Nc.open(this.db,e,s?"readonly":"readwrite",n),i=r(t).next((e=>(t.Pt(),e))).catch((e=>(t.abort(e),Ac.reject(e)))).toPromise();return i.catch((()=>{})),await t.Rt,i}catch(e){const t="FirebaseError"!==e.name&&i<3;if(zr("SimpleDb","Transaction failed with error:",e.message,"Retrying:",t),this.close(),!t)return Promise.reject(e)}}}close(){this.db&&this.db.close(),this.db=void 0}}class Dc{constructor(e){this.Ft=e,this.$t=!1,this.Bt=null}get isDone(){return this.$t}get Lt(){return this.Bt}set cursor(e){this.Ft=e}done(){this.$t=!0}Ut(e){this.Bt=e}delete(){return Lc(this.Ft.delete())}}class Rc extends ts{constructor(e,t){super(es.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Oc(e){return"IndexedDbTransactionError"===e.name}class Pc{constructor(e){this.store=e}put(e,t){let n;return void 0!==t?(zr("SimpleDb","PUT",this.store.name,e,t),n=this.store.put(t,e)):(zr("SimpleDb","PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),Lc(n)}add(e){return zr("SimpleDb","ADD",this.store.name,e,e),Lc(this.store.add(e))}get(e){return Lc(this.store.get(e)).next((t=>(void 0===t&&(t=null),zr("SimpleDb","GET",this.store.name,e,t),t)))}delete(e){return zr("SimpleDb","DELETE",this.store.name,e),Lc(this.store.delete(e))}count(){return zr("SimpleDb","COUNT",this.store.name),Lc(this.store.count())}qt(e,t){const n=this.options(e,t);if(n.index||"function"!=typeof this.store.getAll){const e=this.cursor(n),t=[];return this.Kt(e,((e,n)=>{t.push(n)})).next((()=>t))}{const e=this.store.getAll(n.range);return new Ac(((t,n)=>{e.onerror=e=>{n(e.target.error)},e.onsuccess=e=>{t(e.target.result)}}))}}Gt(e,t){const n=this.store.getAll(e,null===t?void 0:t);return new Ac(((e,t)=>{n.onerror=e=>{t(e.target.error)},n.onsuccess=t=>{e(t.target.result)}}))}Qt(e,t){zr("SimpleDb","DELETE ALL",this.store.name);const n=this.options(e,t);n.jt=!1;const r=this.cursor(n);return this.Kt(r,((e,t,n)=>n.delete()))}Wt(e,t){let n;t?n=e:(n={},t=e);const r=this.cursor(n);return this.Kt(r,t)}zt(e){const t=this.cursor({});return new Ac(((n,r)=>{t.onerror=e=>{const t=Fc(e.target.error);r(t)},t.onsuccess=t=>{const r=t.target.result;r?e(r.primaryKey,r.value).next((e=>{e?r.continue():n()})):n()}}))}Kt(e,t){const n=[];return new Ac(((r,s)=>{e.onerror=e=>{s(e.target.error)},e.onsuccess=e=>{const s=e.target.result;if(!s)return void r();const i=new Dc(s),o=t(s.primaryKey,s.value,i);if(o instanceof Ac){const e=o.catch((e=>(i.done(),Ac.reject(e))));n.push(e)}i.isDone?r():null===i.Lt?s.continue():s.continue(i.Lt)}})).next((()=>Ac.waitFor(n)))}options(e,t){let n;return void 0!==e&&("string"==typeof e?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.jt?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Lc(e){return new Ac(((t,n)=>{e.onsuccess=e=>{const n=e.target.result;t(n)},e.onerror=e=>{const t=Fc(e.target.error);n(t)}}))}let Mc=!1;function Fc(e){const t=xc.Vt((0,c.z$)());if(t>=12.2&&t<13){const t="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(t)>=0){const e=new ts("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Mc||(Mc=!0,setTimeout((()=>{throw e}),0)),e}}return e}
/**
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
 */class Vc extends Cc{constructor(e,t){super(),this.Ht=e,this.currentSequenceNumber=t}}function Uc(e,t){const n=Zr(e);return xc.xt(n.Ht,t)}
/**
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
 */class Bc{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const t=this.mutations[r];t.key.isEqual(e.key)&&xo(t,e,n[r])}}applyToLocalView(e){for(const t of this.baseMutations)t.key.isEqual(e.key)&&Do(t,e,this.localWriteTime);for(const t of this.mutations)t.key.isEqual(e.key)&&Do(t,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach((t=>{const n=e.get(t.key),r=n;this.applyToLocalView(r),n.isValidDocument()||r.convertToNoDocument(vs.min())}))}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),aa())}isEqual(e){return this.batchId===e.batchId&&ms(this.mutations,e.mutations,((e,t)=>Oo(e,t)))&&ms(this.baseMutations,e.baseMutations,((e,t)=>Oo(e,t)))}}class jc{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){Yr(e.mutations.length===n.length);let r=ia;const s=e.mutations;for(let i=0;i<s.length;i++)r=r.insert(s[i].key,n[i].version);return new jc(e,t,n,r)}}
/**
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
 */class qc{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
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
 */class $c{constructor(e,t,n,r,s=vs.min(),i=vs.min(),o=As.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=i,this.resumeToken=o}withSequenceNumber(e){return new $c(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new $c(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new $c(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}
/**
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
 */class Kc{constructor(e){this.Jt=e}}function Gc(e,t){let n;if(t.document)n=La(e.Jt,t.document,!!t.hasCommittedMutations);else if(t.noDocument){const e=js.fromSegments(t.noDocument.path),r=Jc(t.noDocument.readTime);n=hi.newNoDocument(e,r),t.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!t.unknownDocument)return Qr();{const e=js.fromSegments(t.unknownDocument.path),r=Jc(t.unknownDocument.version);n=hi.newUnknownDocument(e,r)}}return t.readTime&&n.setReadTime(function(e){const t=new ys(e[0],e[1]);return vs.fromTimestamp(t)}(t.readTime)),n}function zc(e,t){const n=t.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:Hc(t.readTime),hasCommittedMutations:t.hasCommittedMutations};if(t.isFoundDocument())r.document=function(e,t){return{name:Aa(e,t.key),fields:t.data.value.mapValue.fields,updateTime:Ia(e,t.version.toTimestamp())}}(e.Jt,t);else if(t.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:Wc(t.version)};else{if(!t.isUnknownDocument())return Qr();r.unknownDocument={path:n.path.toArray(),version:Wc(t.version)}}return r}function Hc(e){const t=e.toTimestamp();return[t.seconds,t.nanoseconds]}function Wc(e){const t=e.toTimestamp();return{seconds:t.seconds,nanoseconds:t.nanoseconds}}function Jc(e){const t=new ys(e.seconds,e.nanoseconds);return vs.fromTimestamp(t)}function Qc(e,t){const n=(t.baseMutations||[]).map((t=>Ua(e.Jt,t)));for(let i=0;i<t.mutations.length-1;++i){const e=t.mutations[i];if(i+1<t.mutations.length&&void 0!==t.mutations[i+1].transform){const n=t.mutations[i+1];e.updateTransforms=n.transform.fieldTransforms,t.mutations.splice(i+1,1),++i}}const r=t.mutations.map((t=>Ua(e.Jt,t))),s=ys.fromMillis(t.localWriteTimeMs);return new Bc(t.batchId,s,n,r)}function Yc(e){const t=Jc(e.readTime),n=void 0!==e.lastLimboFreeSnapshotVersion?Jc(e.lastLimboFreeSnapshotVersion):vs.min();let r;var s;return void 0!==e.query.documents?(Yr(1===(s=e.query).documents.length),r=Zi(zi(Da(s.documents[0])))):r=function(e){return Zi($a(e))}(e.query),new $c(r,e.targetId,0,e.lastListenSequenceNumber,t,n,As.fromBase64String(e.resumeToken))}function Xc(e,t){const n=Wc(t.snapshotVersion),r=Wc(t.lastLimboFreeSnapshotVersion);let s;s=ki(t.target)?ja(e.Jt,t.target):qa(e.Jt,t.target);const i=t.resumeToken.toBase64();return{targetId:t.targetId,canonicalId:Ei(t.target),readTime:n,resumeToken:i,lastListenSequenceNumber:t.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:s}}function Zc(e){const t=$a({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?eo(t,t.limit,"L"):t}function eu(e,t){return new qc(t.largestBatchId,Ua(e.Jt,t.overlayMutation))}function tu(e,t){const n=t.path.lastSegment();return[e,ec(t.path.popLast()),n]}
/**
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
 */class nu{getBundleMetadata(e,t){return ru(e).get(t).next((e=>{if(e)return{id:(t=e).bundleId,createTime:Jc(t.createTime),version:t.version};var t}))}saveBundleMetadata(e,t){return ru(e).put({bundleId:(n=t).id,createTime:Wc(Sa(n.createTime)),version:n.version});var n}getNamedQuery(e,t){return su(e).get(t).next((e=>{if(e)return{name:(t=e).name,query:Zc(t.bundledQuery),readTime:Jc(t.readTime)};var t}))}saveNamedQuery(e,t){return su(e).put(function(e){return{name:e.name,readTime:Wc(Sa(e.readTime)),bundledQuery:e.bundledQuery}}(t))}}function ru(e){return Uc(e,"bundles")}function su(e){return Uc(e,"namedQueries")}
/**
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
 */class iu{constructor(e,t){this.M=e,this.userId=t}static Yt(e,t){const n=t.uid||"";return new iu(e,n)}getOverlay(e,t){return ou(e).get(tu(this.userId,t)).next((e=>e?eu(this.M,e):null))}saveOverlays(e,t,n){const r=[];return n.forEach(((n,s)=>{const i=new qc(t,s);r.push(this.Xt(e,i))})),Ac.waitFor(r)}removeOverlaysForBatchId(e,t,n){const r=new Set;t.forEach((e=>r.add(ec(e.getCollectionPath()))));const s=[];return r.forEach((t=>{const r=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,n+1],!1,!0);s.push(ou(e).Qt("collectionPathOverlayIndex",r))})),Ac.waitFor(s)}getOverlaysForCollection(e,t,n){const r=sa(),s=ec(t),i=IDBKeyRange.bound([this.userId,s,n],[this.userId,s,Number.POSITIVE_INFINITY],!0);return ou(e).qt("collectionPathOverlayIndex",i).next((e=>{for(const t of e){const e=eu(this.M,t);r.set(e.getKey(),e)}return r}))}getOverlaysForCollectionGroup(e,t,n,r){const s=sa();let i;const o=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return ou(e).Wt({index:"collectionGroupOverlayIndex",range:o},((e,t,n)=>{const o=eu(this.M,t);s.size()<r||o.largestBatchId===i?(s.set(o.getKey(),o),i=o.largestBatchId):n.done()})).next((()=>s))}Xt(e,t){return ou(e).put(function(e,t,n){const[r,s,i]=tu(t,n.mutation.key);return{userId:t,collectionPath:s,documentId:i,collectionGroup:n.mutation.key.getCollectionGroup(),largestBatchId:n.largestBatchId,overlayMutation:Va(e.Jt,n.mutation)}}(this.M,this.userId,t))}}function ou(e){return Uc(e,"documentOverlays")}
/**
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
 */class au{constructor(){}Zt(e,t){this.te(e,t),t.ee()}te(e,t){if("nullValue"in e)this.ne(t,5);else if("booleanValue"in e)this.ne(t,10),t.se(e.booleanValue?1:0);else if("integerValue"in e)this.ne(t,15),t.se(Ds(e.integerValue));else if("doubleValue"in e){const n=Ds(e.doubleValue);isNaN(n)?this.ne(t,13):(this.ne(t,15),Us(n)?t.se(0):t.se(n))}else if("timestampValue"in e){const n=e.timestampValue;this.ne(t,20),"string"==typeof n?t.ie(n):(t.ie(`${n.seconds||""}`),t.se(n.nanos||0))}else if("stringValue"in e)this.re(e.stringValue,t),this.oe(t);else if("bytesValue"in e)this.ne(t,30),t.ue(Rs(e.bytesValue)),this.oe(t);else if("referenceValue"in e)this.ae(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.ne(t,45),t.se(n.latitude||0),t.se(n.longitude||0)}else"mapValue"in e?si(e)?this.ne(t,Number.MAX_SAFE_INTEGER):(this.ce(e.mapValue,t),this.oe(t)):"arrayValue"in e?(this.he(e.arrayValue,t),this.oe(t)):Qr()}re(e,t){this.ne(t,25),this.le(e,t)}le(e,t){t.ie(e)}ce(e,t){const n=e.fields||{};this.ne(t,55);for(const r of Object.keys(n))this.re(r,t),this.te(n[r],t)}he(e,t){const n=e.values||[];this.ne(t,50);for(const r of n)this.te(r,t)}ae(e,t){this.ne(t,37),js.fromName(e).path.forEach((e=>{this.ne(t,60),this.le(e,t)}))}ne(e,t){e.se(t)}oe(e){e.se(2)}}function cu(e){if(0===e)return 8;let t=0;return e>>4==0&&(t+=4,e<<=4),e>>6==0&&(t+=2,e<<=2),e>>7==0&&(t+=1),t}function uu(e){const t=64-function(e){let t=0;for(let n=0;n<8;++n){const r=cu(255&e[n]);if(t+=r,8!==r)break}return t}(e);return Math.ceil(t/8)}au.fe=new au;class lu{constructor(){this.buffer=new Uint8Array(1024),this.position=0}de(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this._e(n.value),n=t.next();this.we()}me(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.ge(n.value),n=t.next();this.ye()}pe(e){for(const t of e){const e=t.charCodeAt(0);if(e<128)this._e(e);else if(e<2048)this._e(960|e>>>6),this._e(128|63&e);else if(t<"\ud800"||"\udbff"<t)this._e(480|e>>>12),this._e(128|63&e>>>6),this._e(128|63&e);else{const e=t.codePointAt(0);this._e(240|e>>>18),this._e(128|63&e>>>12),this._e(128|63&e>>>6),this._e(128|63&e)}}this.we()}Ie(e){for(const t of e){const e=t.charCodeAt(0);if(e<128)this.ge(e);else if(e<2048)this.ge(960|e>>>6),this.ge(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.ge(480|e>>>12),this.ge(128|63&e>>>6),this.ge(128|63&e);else{const e=t.codePointAt(0);this.ge(240|e>>>18),this.ge(128|63&e>>>12),this.ge(128|63&e>>>6),this.ge(128|63&e)}}this.ye()}Te(e){const t=this.Ee(e),n=uu(t);this.Ae(1+n),this.buffer[this.position++]=255&n;for(let r=t.length-n;r<t.length;++r)this.buffer[this.position++]=255&t[r]}Re(e){const t=this.Ee(e),n=uu(t);this.Ae(1+n),this.buffer[this.position++]=~(255&n);for(let r=t.length-n;r<t.length;++r)this.buffer[this.position++]=~(255&t[r])}Pe(){this.be(255),this.be(255)}Ve(){this.ve(255),this.ve(255)}reset(){this.position=0}seed(e){this.Ae(e.length),this.buffer.set(e,this.position),this.position+=e.length}Se(){return this.buffer.slice(0,this.position)}Ee(e){const t=function(e){const t=new DataView(new ArrayBuffer(8));return t.setFloat64(0,e,!1),new Uint8Array(t.buffer)}(e),n=0!=(128&t[0]);t[0]^=n?255:128;for(let r=1;r<t.length;++r)t[r]^=n?255:0;return t}_e(e){const t=255&e;0===t?(this.be(0),this.be(255)):255===t?(this.be(255),this.be(0)):this.be(t)}ge(e){const t=255&e;0===t?(this.ve(0),this.ve(255)):255===t?(this.ve(255),this.ve(0)):this.ve(e)}we(){this.be(0),this.be(1)}ye(){this.ve(0),this.ve(1)}be(e){this.Ae(1),this.buffer[this.position++]=e}ve(e){this.Ae(1),this.buffer[this.position++]=~e}Ae(e){const t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);const r=new Uint8Array(n);r.set(this.buffer),this.buffer=r}}class hu{constructor(e){this.De=e}ue(e){this.De.de(e)}ie(e){this.De.pe(e)}se(e){this.De.Te(e)}ee(){this.De.Pe()}}class du{constructor(e){this.De=e}ue(e){this.De.me(e)}ie(e){this.De.Ie(e)}se(e){this.De.Re(e)}ee(){this.De.Ve()}}class fu{constructor(){this.De=new lu,this.Ce=new hu(this.De),this.xe=new du(this.De)}seed(e){this.De.seed(e)}Ne(e){return 0===e?this.Ce:this.xe}Se(){return this.De.Se()}reset(){this.De.reset()}}
/**
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
 */class pu{constructor(e,t,n,r){this.indexId=e,this.documentKey=t,this.arrayValue=n,this.directionalValue=r}ke(){const e=this.directionalValue.length,t=0===e||255===this.directionalValue[e-1]?e+1:e,n=new Uint8Array(t);return n.set(this.directionalValue,0),t!==e?n.set([0],this.directionalValue.length):++n[n.length-1],new pu(this.indexId,this.documentKey,this.arrayValue,n)}}function mu(e,t){let n=e.indexId-t.indexId;return 0!==n?n:(n=gu(e.arrayValue,t.arrayValue),0!==n?n:(n=gu(e.directionalValue,t.directionalValue),0!==n?n:js.comparator(e.documentKey,t.documentKey)))}function gu(e,t){for(let n=0;n<e.length&&n<t.length;++n){const r=e[n]-t[n];if(0!==r)return r}return e.length-t.length}
/**
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
 */class yu{constructor(e){this.collectionId=null!=e.collectionGroup?e.collectionGroup:e.path.lastSegment(),this.Me=e.orderBy,this.Oe=[];for(const t of e.filters){const e=t;e.S()?this.Fe=e:this.Oe.push(e)}}$e(e){const t=fi(e);if(void 0!==t&&!this.Be(t))return!1;const n=pi(e);let r=0,s=0;for(;r<n.length&&this.Be(n[r]);++r);if(r===n.length)return!0;if(void 0!==this.Fe){const e=n[r];if(!this.Le(this.Fe,e)||!this.Ue(this.Me[s++],e))return!1;++r}for(;r<n.length;++r){const e=n[r];if(s>=this.Me.length||!this.Ue(this.Me[s++],e))return!1}return!0}Be(e){for(const t of this.Oe)if(this.Le(t,e))return!0;return!1}Le(e,t){if(void 0===e||!e.field.isEqual(t.fieldPath))return!1;const n="array-contains"===e.op||"array-contains-any"===e.op;return 2===t.kind===n}Ue(e,t){return!!e.field.isEqual(t.fieldPath)&&(0===t.kind&&"asc"===e.dir||1===t.kind&&"desc"===e.dir)}}
/**
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
 */class vu{constructor(){this.qe=new wu}addToCollectionParentIndex(e,t){return this.qe.add(t),Ac.resolve()}getCollectionParents(e,t){return Ac.resolve(this.qe.getEntries(t))}addFieldIndex(e,t){return Ac.resolve()}deleteFieldIndex(e,t){return Ac.resolve()}getDocumentsMatchingTarget(e,t){return Ac.resolve(null)}getFieldIndex(e,t){return Ac.resolve(null)}getFieldIndexes(e,t){return Ac.resolve([])}getNextCollectionGroupToUpdate(e){return Ac.resolve(null)}updateCollectionGroup(e,t,n){return Ac.resolve()}updateIndexEntries(e,t){return Ac.resolve()}}class wu{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new Yo(Es.comparator),s=!r.has(n);return this.index[t]=r.add(n),s}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new Yo(Es.comparator)).toArray()}}
/**
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
 */const bu=new Uint8Array(0);class _u{constructor(e,t){this.user=e,this.databaseId=t,this.Ke=new wu,this.Ge=new Ho((e=>Ei(e)),((e,t)=>Si(e,t))),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.Ke.has(t)){const n=t.lastSegment(),r=t.popLast();e.addOnCommittedListener((()=>{this.Ke.add(t)}));const s={collectionId:n,parent:ec(r)};return Iu(e).put(s)}return Ac.resolve()}getCollectionParents(e,t){const n=[],r=IDBKeyRange.bound([t,""],[gs(t),""],!1,!0);return Iu(e).qt(r).next((e=>{for(const r of e){if(r.collectionId!==t)break;n.push(rc(r.parent))}return n}))}addFieldIndex(e,t){const n=Tu(e),r=function(e){return{indexId:e.indexId,collectionGroup:e.collectionGroup,fields:e.fields.map((e=>[e.fieldPath.canonicalString(),e.kind]))}}(t);return delete r.indexId,n.add(r).next()}deleteFieldIndex(e,t){const n=Tu(e),r=Su(e),s=Eu(e);return n.delete(t.indexId).next((()=>r.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))).next((()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))))}getDocumentsMatchingTarget(e,t){const n=Eu(e);let r=!0;const s=new Map;return Ac.forEach(this.Qe(t),(t=>this.getFieldIndex(e,t).next((e=>{r&&(r=!!e),s.set(t,e)})))).next((()=>{if(r){let e=aa();const r=[];return Ac.forEach(s,((s,i)=>{var o;zr("IndexedDbIndexManager",`Using index ${o=s,`id=${o.indexId}|cg=${o.collectionGroup}|f=${o.fields.map((e=>`${e.fieldPath}:${e.kind}`)).join(",")}`} to execute ${Ei(t)}`);const a=function(e,t){const n=fi(t);if(void 0===n)return null;for(const r of Ci(e,n.fieldPath))switch(r.op){case"array-contains-any":return r.value.arrayValue.values||[];case"array-contains":return[r.value]}return null}(i,s),c=function(e,t){const n=new Map;for(const r of pi(t))for(const t of Ci(e,r.fieldPath))switch(t.op){case"==":case"in":n.set(r.fieldPath.canonicalString(),t.value);break;case"not-in":case"!=":return n.set(r.fieldPath.canonicalString(),t.value),Array.from(n.values())}return null}(i,s),u=function(e,t){const n=[];let r=!0;for(const s of pi(t)){const t=0===s.kind?Ai(e,s.fieldPath,e.startAt):Ni(e,s.fieldPath,e.startAt);if(!t.value)return null;n.push(t.value),r&&(r=t.inclusive)}return new Ui(n,r)}(i,s),l=function(e,t){const n=[];let r=!0;for(const s of pi(t)){const t=0===s.kind?Ni(e,s.fieldPath,e.endAt):Ai(e,s.fieldPath,e.endAt);if(!t.value)return null;n.push(t.value),r&&(r=t.inclusive)}return new Ui(n,r)}(i,s),h=this.je(s,i,u),d=this.je(s,i,l),f=this.We(s,i,c),p=this.ze(s.indexId,a,h,!!u&&u.inclusive,d,!!l&&l.inclusive,f);return Ac.forEach(p,(s=>n.Gt(s,t.limit).next((t=>{t.forEach((t=>{const n=js.fromSegments(t.documentKey);e.has(n)||(e=e.add(n),r.push(n))}))}))))})).next((()=>r))}return Ac.resolve(null)}))}Qe(e){let t=this.Ge.get(e);return t||(t=[e],this.Ge.set(e,t),t)}ze(e,t,n,r,s,i,o){const a=(null!=t?t.length:1)*Math.max(null!=n?n.length:1,null!=s?s.length:1),c=a/(null!=t?t.length:1),u=[];for(let l=0;l<a;++l){const a=t?this.He(t[l/c]):bu,h=n?this.Je(e,a,n[l%c],r):this.Ye(e),d=s?this.Xe(e,a,s[l%c],i):this.Ye(e+1);u.push(...this.createRange(h,d,o.map((t=>this.Je(e,a,t,!0)))))}return u}Je(e,t,n,r){const s=new pu(e,js.empty(),t,n);return r?s:s.ke()}Xe(e,t,n,r){const s=new pu(e,js.empty(),t,n);return r?s.ke():s}Ye(e){return new pu(e,js.empty(),bu,bu)}getFieldIndex(e,t){const n=new yu(t),r=null!=t.collectionGroup?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,r).next((e=>{const t=e.filter((e=>n.$e(e)));return t.sort(((e,t)=>t.fields.length-e.fields.length)),t.length>0?t[0]:null}))}Ze(e,t){const n=new fu;for(const r of pi(e)){const e=t.data.field(r.fieldPath);if(null==e)return null;const s=n.Ne(r.kind);au.fe.Zt(e,s)}return n.Se()}He(e){const t=new fu;return au.fe.Zt(e,t.Ne(0)),t.Se()}tn(e,t){const n=new fu;return au.fe.Zt(Ys(this.databaseId,t),n.Ne(function(e){const t=pi(e);return 0===t.length?0:t[t.length-1].kind}(e))),n.Se()}We(e,t,n){if(null===n)return[];let r=[];r.push(new fu);let s=0;for(const i of pi(e)){const e=n[s++];for(const n of r)if(this.en(t,i.fieldPath)&&Zs(e))r=this.nn(r,i,e);else{const t=n.Ne(i.kind);au.fe.Zt(e,t)}}return this.sn(r)}je(e,t,n){return null==n?null:this.We(e,t,n.position)}sn(e){const t=[];for(let n=0;n<e.length;++n)t[n]=e[n].Se();return t}nn(e,t,n){const r=[...e],s=[];for(const i of n.arrayValue.values||[])for(const e of r){const n=new fu;n.seed(e.Se()),au.fe.Zt(i,n.Ne(t.kind)),s.push(n)}return s}en(e,t){return!!e.filters.find((e=>e instanceof xi&&e.field.isEqual(t)&&("in"===e.op||"not-in"===e.op)))}getFieldIndexes(e,t){const n=Tu(e),r=Su(e);return(t?n.qt("collectionGroupIndex",IDBKeyRange.bound(t,t)):n.qt()).next((e=>{const t=[];return Ac.forEach(e,(e=>r.get([e.indexId,this.uid]).next((n=>{t.push(function(e,t){const n=t?new gi(t.sequenceNumber,new wi(Jc(t.readTime),new js(rc(t.documentKey)),t.largestBatchId)):gi.empty(),r=e.fields.map((([e,t])=>new mi(Ss.fromServerFormat(e),t)));return new di(e.indexId,e.collectionGroup,r,n)}(e,n))})))).next((()=>t))}))}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next((e=>0===e.length?null:(e.sort(((e,t)=>{const n=e.indexState.sequenceNumber-t.indexState.sequenceNumber;return 0!==n?n:ps(e.collectionGroup,t.collectionGroup)})),e[0].collectionGroup)))}updateCollectionGroup(e,t,n){const r=Tu(e),s=Su(e);return this.rn(e).next((e=>r.qt("collectionGroupIndex",IDBKeyRange.bound(t,t)).next((t=>Ac.forEach(t,(t=>s.put(function(e,t,n,r){return{indexId:e,uid:t.uid||"",sequenceNumber:n,readTime:Wc(r.readTime),documentKey:ec(r.documentKey.path),largestBatchId:r.largestBatchId}}(t.indexId,this.user,e,n))))))))}updateIndexEntries(e,t){const n=new Map;return Ac.forEach(t,((t,r)=>{const s=n.get(t.collectionGroup);return(s?Ac.resolve(s):this.getFieldIndexes(e,t.collectionGroup)).next((s=>(n.set(t.collectionGroup,s),Ac.forEach(s,(n=>this.on(e,t,n).next((t=>{const s=this.un(r,n);return t.isEqual(s)?Ac.resolve():this.an(e,r,n,t,s)})))))))}))}cn(e,t,n,r){return Eu(e).put({indexId:r.indexId,uid:this.uid,arrayValue:r.arrayValue,directionalValue:r.directionalValue,orderedDocumentKey:this.tn(n,t.key),documentKey:t.key.path.toArray()})}hn(e,t,n,r){return Eu(e).delete([r.indexId,this.uid,r.arrayValue,r.directionalValue,this.tn(n,t.key),t.key.path.toArray()])}on(e,t,n){const r=Eu(e);let s=new Yo(mu);return r.Wt({index:"documentKeyIndex",range:IDBKeyRange.only([n.indexId,this.uid,this.tn(n,t)])},((e,r)=>{s=s.add(new pu(n.indexId,t,r.arrayValue,r.directionalValue))})).next((()=>s))}un(e,t){let n=new Yo(mu);const r=this.Ze(t,e);if(null==r)return n;const s=fi(t);if(null!=s){const i=e.data.field(s.fieldPath);if(Zs(i))for(const s of i.arrayValue.values||[])n=n.add(new pu(t.indexId,e.key,this.He(s),r))}else n=n.add(new pu(t.indexId,e.key,bu,r));return n}an(e,t,n,r,s){zr("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const i=[];return function(e,t,n,r,s){const i=e.getIterator(),o=t.getIterator();let a=Zo(i),c=Zo(o);for(;a||c;){let e=!1,t=!1;if(a&&c){const r=n(a,c);r<0?t=!0:r>0&&(e=!0)}else null!=a?t=!0:e=!0;e?(r(c),c=Zo(o)):t?(s(a),a=Zo(i)):(a=Zo(i),c=Zo(o))}}(r,s,mu,(r=>{i.push(this.cn(e,t,n,r))}),(r=>{i.push(this.hn(e,t,n,r))})),Ac.waitFor(i)}rn(e){let t=1;return Su(e).Wt({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},((e,n,r)=>{r.done(),t=n.sequenceNumber+1})).next((()=>t))}createRange(e,t,n){n=n.sort(((e,t)=>mu(e,t))).filter(((e,t,n)=>!t||0!==mu(e,n[t-1])));const r=[];r.push(e);for(const i of n){const n=mu(i,e),s=mu(i,t);if(0===n)r[0]=e.ke();else if(n>0&&s<0)r.push(i),r.push(i.ke());else if(s>0)break}r.push(t);const s=[];for(let i=0;i<r.length;i+=2)s.push(IDBKeyRange.bound([r[i].indexId,this.uid,r[i].arrayValue,r[i].directionalValue,bu,[]],[r[i+1].indexId,this.uid,r[i+1].arrayValue,r[i+1].directionalValue,bu,[]]));return s}}function Iu(e){return Uc(e,"collectionParents")}function Eu(e){return Uc(e,"indexEntries")}function Tu(e){return Uc(e,"indexConfiguration")}function Su(e){return Uc(e,"indexState")}
/**
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
 */const ku={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Cu{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new Cu(e,Cu.DEFAULT_COLLECTION_PERCENTILE,Cu.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
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
 */function Au(e,t,n){const r=e.store("mutations"),s=e.store("documentMutations"),i=[],o=IDBKeyRange.only(n.batchId);let a=0;const c=r.Wt({range:o},((e,t,n)=>(a++,n.delete())));i.push(c.next((()=>{Yr(1===a)})));const u=[];for(const l of n.mutations){const e=oc(t,l.key.path,n.batchId);i.push(s.delete(e)),u.push(l.key)}return Ac.waitFor(i).next((()=>u))}function Nu(e){if(!e)return 0;let t;if(e.document)t=e.document;else if(e.unknownDocument)t=e.unknownDocument;else{if(!e.noDocument)throw Qr();t=e.noDocument}return JSON.stringify(t).length}
/**
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
 */Cu.DEFAULT_COLLECTION_PERCENTILE=10,Cu.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Cu.DEFAULT=new Cu(41943040,Cu.DEFAULT_COLLECTION_PERCENTILE,Cu.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Cu.DISABLED=new Cu(-1,0,0);class xu{constructor(e,t,n,r){this.userId=e,this.M=t,this.indexManager=n,this.referenceDelegate=r,this.ln={}}static Yt(e,t,n,r){Yr(""!==e.uid);const s=e.isAuthenticated()?e.uid:"";return new xu(s,t,n,r)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Ru(e).Wt({index:"userMutationsIndex",range:n},((e,n,r)=>{t=!1,r.done()})).next((()=>t))}addMutationBatch(e,t,n,r){const s=Ou(e),i=Ru(e);return i.add({}).next((o=>{Yr("number"==typeof o);const a=new Bc(o,t,n,r),c=function(e,t,n){const r=n.baseMutations.map((t=>Va(e.Jt,t))),s=n.mutations.map((t=>Va(e.Jt,t)));return{userId:t,batchId:n.batchId,localWriteTimeMs:n.localWriteTime.toMillis(),baseMutations:r,mutations:s}}(this.M,this.userId,a),u=[];let l=new Yo(((e,t)=>ps(e.canonicalString(),t.canonicalString())));for(const e of r){const t=oc(this.userId,e.key.path,o);l=l.add(e.key.path.popLast()),u.push(i.put(c)),u.push(s.put(t,ac))}return l.forEach((t=>{u.push(this.indexManager.addToCollectionParentIndex(e,t))})),e.addOnCommittedListener((()=>{this.ln[o]=a.keys()})),Ac.waitFor(u).next((()=>a))}))}lookupMutationBatch(e,t){return Ru(e).get(t).next((e=>e?(Yr(e.userId===this.userId),Qc(this.M,e)):null))}fn(e,t){return this.ln[t]?Ac.resolve(this.ln[t]):this.lookupMutationBatch(e,t).next((e=>{if(e){const n=e.keys();return this.ln[t]=n,n}return null}))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=IDBKeyRange.lowerBound([this.userId,n]);let s=null;return Ru(e).Wt({index:"userMutationsIndex",range:r},((e,t,r)=>{t.userId===this.userId&&(Yr(t.batchId>=n),s=Qc(this.M,t)),r.done()})).next((()=>s))}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=-1;return Ru(e).Wt({index:"userMutationsIndex",range:t,reverse:!0},((e,t,r)=>{n=t.batchId,r.done()})).next((()=>n))}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Ru(e).qt("userMutationsIndex",t).next((e=>e.map((e=>Qc(this.M,e)))))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=ic(this.userId,t.path),r=IDBKeyRange.lowerBound(n),s=[];return Ou(e).Wt({range:r},((n,r,i)=>{const[o,a,c]=n,u=rc(a);if(o===this.userId&&t.path.isEqual(u))return Ru(e).get(c).next((e=>{if(!e)throw Qr();Yr(e.userId===this.userId),s.push(Qc(this.M,e))}));i.done()})).next((()=>s))}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Yo(ps);const r=[];return t.forEach((t=>{const s=ic(this.userId,t.path),i=IDBKeyRange.lowerBound(s),o=Ou(e).Wt({range:i},((e,r,s)=>{const[i,o,a]=e,c=rc(o);i===this.userId&&t.path.isEqual(c)?n=n.add(a):s.done()}));r.push(o)})),Ac.waitFor(r).next((()=>this.dn(e,n)))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1,s=ic(this.userId,n),i=IDBKeyRange.lowerBound(s);let o=new Yo(ps);return Ou(e).Wt({range:i},((e,t,s)=>{const[i,a,c]=e,u=rc(a);i===this.userId&&n.isPrefixOf(u)?u.length===r&&(o=o.add(c)):s.done()})).next((()=>this.dn(e,o)))}dn(e,t){const n=[],r=[];return t.forEach((t=>{r.push(Ru(e).get(t).next((e=>{if(null===e)throw Qr();Yr(e.userId===this.userId),n.push(Qc(this.M,e))})))})),Ac.waitFor(r).next((()=>n))}removeMutationBatch(e,t){return Au(e.Ht,this.userId,t).next((n=>(e.addOnCommittedListener((()=>{this._n(t.batchId)})),Ac.forEach(n,(t=>this.referenceDelegate.markPotentiallyOrphaned(e,t))))))}_n(e){delete this.ln[e]}performConsistencyCheck(e){return this.checkEmpty(e).next((t=>{if(!t)return Ac.resolve();const n=IDBKeyRange.lowerBound([this.userId]),r=[];return Ou(e).Wt({range:n},((e,t,n)=>{if(e[0]===this.userId){const t=rc(e[1]);r.push(t)}else n.done()})).next((()=>{Yr(0===r.length)}))}))}containsKey(e,t){return Du(e,this.userId,t)}wn(e){return Pu(e).get(this.userId).next((e=>e||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""}))}}function Du(e,t,n){const r=ic(t,n.path),s=r[1],i=IDBKeyRange.lowerBound(r);let o=!1;return Ou(e).Wt({range:i,jt:!0},((e,n,r)=>{const[i,a,c]=e;i===t&&a===s&&(o=!0),r.done()})).next((()=>o))}function Ru(e){return Uc(e,"mutations")}function Ou(e){return Uc(e,"documentMutations")}function Pu(e){return Uc(e,"mutationQueues")}
/**
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
 */class Lu{constructor(e){this.mn=e}next(){return this.mn+=2,this.mn}static gn(){return new Lu(0)}static yn(){return new Lu(-1)}}
/**
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
 */class Mu{constructor(e,t){this.referenceDelegate=e,this.M=t}allocateTargetId(e){return this.pn(e).next((t=>{const n=new Lu(t.highestTargetId);return t.highestTargetId=n.next(),this.In(e,t).next((()=>t.highestTargetId))}))}getLastRemoteSnapshotVersion(e){return this.pn(e).next((e=>vs.fromTimestamp(new ys(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds))))}getHighestSequenceNumber(e){return this.pn(e).next((e=>e.highestListenSequenceNumber))}setTargetsMetadata(e,t,n){return this.pn(e).next((r=>(r.highestListenSequenceNumber=t,n&&(r.lastRemoteSnapshotVersion=n.toTimestamp()),t>r.highestListenSequenceNumber&&(r.highestListenSequenceNumber=t),this.In(e,r))))}addTargetData(e,t){return this.Tn(e,t).next((()=>this.pn(e).next((n=>(n.targetCount+=1,this.En(t,n),this.In(e,n))))))}updateTargetData(e,t){return this.Tn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next((()=>Fu(e).delete(t.targetId))).next((()=>this.pn(e))).next((t=>(Yr(t.targetCount>0),t.targetCount-=1,this.In(e,t))))}removeTargets(e,t,n){let r=0;const s=[];return Fu(e).Wt(((i,o)=>{const a=Yc(o);a.sequenceNumber<=t&&null===n.get(a.targetId)&&(r++,s.push(this.removeTargetData(e,a)))})).next((()=>Ac.waitFor(s))).next((()=>r))}forEachTarget(e,t){return Fu(e).Wt(((e,n)=>{const r=Yc(n);t(r)}))}pn(e){return Vu(e).get("targetGlobalKey").next((e=>(Yr(null!==e),e)))}In(e,t){return Vu(e).put("targetGlobalKey",t)}Tn(e,t){return Fu(e).put(Xc(this.M,t))}En(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.pn(e).next((e=>e.targetCount))}getTargetData(e,t){const n=Ei(t),r=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let s=null;return Fu(e).Wt({range:r,index:"queryTargetsIndex"},((e,n,r)=>{const i=Yc(n);Si(t,i.target)&&(s=i,r.done())})).next((()=>s))}addMatchingKeys(e,t,n){const r=[],s=Uu(e);return t.forEach((t=>{const i=ec(t.path);r.push(s.put({targetId:n,path:i})),r.push(this.referenceDelegate.addReference(e,n,t))})),Ac.waitFor(r)}removeMatchingKeys(e,t,n){const r=Uu(e);return Ac.forEach(t,(t=>{const s=ec(t.path);return Ac.waitFor([r.delete([n,s]),this.referenceDelegate.removeReference(e,n,t)])}))}removeMatchingKeysForTargetId(e,t){const n=Uu(e),r=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(r)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),r=Uu(e);let s=aa();return r.Wt({range:n,jt:!0},((e,t,n)=>{const r=rc(e[1]),i=new js(r);s=s.add(i)})).next((()=>s))}containsKey(e,t){const n=ec(t.path),r=IDBKeyRange.bound([n],[gs(n)],!1,!0);let s=0;return Uu(e).Wt({index:"documentTargetsIndex",jt:!0,range:r},(([e,t],n,r)=>{0!==e&&(s++,r.done())})).next((()=>s>0))}Et(e,t){return Fu(e).get(t).next((e=>e?Yc(e):null))}}function Fu(e){return Uc(e,"targets")}function Vu(e){return Uc(e,"targetGlobal")}function Uu(e){return Uc(e,"targetDocuments")}
/**
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
 */async function Bu(e){if(e.code!==es.FAILED_PRECONDITION||e.message!==kc)throw e;zr("LocalStore","Unexpectedly lost primary lease")}
/**
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
 */function ju([e,t],[n,r]){const s=ps(e,n);return 0===s?ps(t,r):s}class qu{constructor(e){this.An=e,this.buffer=new Yo(ju),this.Rn=0}Pn(){return++this.Rn}bn(e){const t=[e,this.Pn()];if(this.buffer.size<this.An)this.buffer=this.buffer.add(t);else{const e=this.buffer.last();ju(t,e)<0&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class $u{constructor(e,t){this.garbageCollector=e,this.asyncQueue=t,this.Vn=!1,this.vn=null}start(e){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.Sn(e)}stop(){this.vn&&(this.vn.cancel(),this.vn=null)}get started(){return null!==this.vn}Sn(e){const t=this.Vn?3e5:6e4;zr("LruGarbageCollector",`Garbage collection scheduled in ${t}ms`),this.vn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.vn=null,this.Vn=!0;try{await e.collectGarbage(this.garbageCollector)}catch(e){Oc(e)?zr("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",e):await Bu(e)}await this.Sn(e)}))}}class Ku{constructor(e,t){this.Dn=e,this.params=t}calculateTargetCount(e,t){return this.Dn.Cn(e).next((e=>Math.floor(t/100*e)))}nthSequenceNumber(e,t){if(0===t)return Ac.resolve(hs.A);const n=new qu(t);return this.Dn.forEachTarget(e,(e=>n.bn(e.sequenceNumber))).next((()=>this.Dn.xn(e,(e=>n.bn(e))))).next((()=>n.maxValue))}removeTargets(e,t,n){return this.Dn.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.Dn.removeOrphanedDocuments(e,t)}collect(e,t){return-1===this.params.cacheSizeCollectionThreshold?(zr("LruGarbageCollector","Garbage collection skipped; disabled"),Ac.resolve(ku)):this.getCacheSize(e).next((n=>n<this.params.cacheSizeCollectionThreshold?(zr("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ku):this.Nn(e,t)))}getCacheSize(e){return this.Dn.getCacheSize(e)}Nn(e,t){let n,r,s,i,o,c,u;const l=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((t=>(t>this.params.maximumSequenceNumbersToCollect?(zr("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),r=this.params.maximumSequenceNumbersToCollect):r=t,i=Date.now(),this.nthSequenceNumber(e,r)))).next((r=>(n=r,o=Date.now(),this.removeTargets(e,n,t)))).next((t=>(s=t,c=Date.now(),this.removeOrphanedDocuments(e,n)))).next((e=>(u=Date.now(),Kr()<=a["in"].DEBUG&&zr("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${i-l}ms\n\tDetermined least recently used ${r} in `+(o-i)+"ms\n"+`\tRemoved ${s} targets in `+(c-o)+"ms\n"+`\tRemoved ${e} documents in `+(u-c)+"ms\n"+`Total Duration: ${u-l}ms`),Ac.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:s,documentsRemoved:e}))))}}
/**
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
 */class Gu{constructor(e,t){this.db=e,this.garbageCollector=function(e,t){return new Ku(e,t)}(this,t)}Cn(e){const t=this.kn(e);return this.db.getTargetCache().getTargetCount(e).next((e=>t.next((t=>e+t))))}kn(e){let t=0;return this.xn(e,(e=>{t++})).next((()=>t))}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}xn(e,t){return this.Mn(e,((e,n)=>t(n)))}addReference(e,t,n){return zu(e,n)}removeReference(e,t,n){return zu(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return zu(e,t)}On(e,t){return function(e,t){let n=!1;return Pu(e).zt((r=>Du(e,r,t).next((e=>(e&&(n=!0),Ac.resolve(!e)))))).next((()=>n))}(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),r=[];let s=0;return this.Mn(e,((i,o)=>{if(o<=t){const t=this.On(e,i).next((t=>{if(!t)return s++,n.getEntry(e,i).next((()=>(n.removeEntry(i,vs.min()),Uu(e).delete([0,ec(i.path)]))))}));r.push(t)}})).next((()=>Ac.waitFor(r))).next((()=>n.apply(e))).next((()=>s))}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return zu(e,t)}Mn(e,t){const n=Uu(e);let r,s=hs.A;return n.Wt({index:"documentTargetsIndex"},(([e,n],{path:i,sequenceNumber:o})=>{0===e?(s!==hs.A&&t(new js(rc(r)),s),s=o,r=i):s=hs.A})).next((()=>{s!==hs.A&&t(new js(rc(r)),s)}))}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function zu(e,t){return Uu(e).put(function(e,t){return{targetId:0,path:ec(e.path),sequenceNumber:t}}(t,e.currentSequenceNumber))}
/**
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
 */class Hu{constructor(){this.changes=new Ho((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,hi.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?Ac.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
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
 */class Wu{constructor(e){this.M=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return Yu(e).put(n)}removeEntry(e,t,n){return Yu(e).delete(function(e,t){const n=e.path.toArray();return[n.slice(0,n.length-2),n[n.length-2],Hc(t),n[n.length-1]]}(t,n))}updateMetadata(e,t){return this.getMetadata(e).next((n=>(n.byteSize+=t,this.Fn(e,n))))}getEntry(e,t){let n=hi.newInvalidDocument(t);return Yu(e).Wt({index:"documentKeyIndex",range:IDBKeyRange.only(Xu(t))},((e,r)=>{n=this.$n(t,r)})).next((()=>n))}Bn(e,t){let n={size:0,document:hi.newInvalidDocument(t)};return Yu(e).Wt({index:"documentKeyIndex",range:IDBKeyRange.only(Xu(t))},((e,r)=>{n={document:this.$n(t,r),size:Nu(r)}})).next((()=>n))}getEntries(e,t){let n=ta();return this.Ln(e,t,((e,t)=>{const r=this.$n(e,t);n=n.insert(e,r)})).next((()=>n))}Un(e,t){let n=ta(),r=new Wo(js.comparator);return this.Ln(e,t,((e,t)=>{const s=this.$n(e,t);n=n.insert(e,s),r=r.insert(e,Nu(t))})).next((()=>({documents:n,qn:r})))}Ln(e,t,n){if(t.isEmpty())return Ac.resolve();let r=new Yo(el);t.forEach((e=>r=r.add(e)));const s=IDBKeyRange.bound(Xu(r.first()),Xu(r.last())),i=r.getIterator();let o=i.getNext();return Yu(e).Wt({index:"documentKeyIndex",range:s},((e,t,r)=>{const s=js.fromSegments([...t.prefixPath,t.collectionGroup,t.documentId]);for(;o&&el(o,s)<0;)n(o,null),o=i.getNext();o&&o.isEqual(s)&&(n(o,t),o=i.hasNext()?i.getNext():null),o?r.Ut(Xu(o)):r.done()})).next((()=>{for(;o;)n(o,null),o=i.hasNext()?i.getNext():null}))}getAllFromCollection(e,t,n){const r=[t.popLast().toArray(),t.lastSegment(),Hc(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],s=[t.popLast().toArray(),t.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Yu(e).qt(IDBKeyRange.bound(r,s,!0)).next((e=>{let t=ta();for(const n of e){const e=this.$n(js.fromSegments(n.prefixPath.concat(n.collectionGroup,n.documentId)),n);t=t.insert(e.key,e)}return t}))}getAllFromCollectionGroup(e,t,n,r){let s=ta();const i=Zu(t,n),o=Zu(t,wi.max());return Yu(e).Wt({index:"collectionGroupIndex",range:IDBKeyRange.bound(i,o,!0)},((e,t,n)=>{const i=this.$n(js.fromSegments(t.prefixPath.concat(t.collectionGroup,t.documentId)),t);s=s.insert(i.key,i),s.size===r&&n.done()})).next((()=>s))}newChangeBuffer(e){return new Ju(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next((e=>e.byteSize))}getMetadata(e){return Qu(e).get("remoteDocumentGlobalKey").next((e=>(Yr(!!e),e)))}Fn(e,t){return Qu(e).put("remoteDocumentGlobalKey",t)}$n(e,t){if(t){const e=Gc(this.M,t);if(!e.isNoDocument()||!e.version.isEqual(vs.min()))return e}return hi.newInvalidDocument(e)}}class Ju extends Hu{constructor(e,t){super(),this.Kn=e,this.trackRemovals=t,this.Gn=new Ho((e=>e.toString()),((e,t)=>e.isEqual(t)))}applyChanges(e){const t=[];let n=0,r=new Yo(((e,t)=>ps(e.canonicalString(),t.canonicalString())));return this.changes.forEach(((s,i)=>{const o=this.Gn.get(s);if(t.push(this.Kn.removeEntry(e,s,o.readTime)),i.isValidDocument()){const a=zc(this.Kn.M,i);r=r.add(s.path.popLast());const c=Nu(a);n+=c-o.size,t.push(this.Kn.addEntry(e,s,a))}else if(n-=o.size,this.trackRemovals){const n=zc(this.Kn.M,i.convertToNoDocument(vs.min()));t.push(this.Kn.addEntry(e,s,n))}})),r.forEach((n=>{t.push(this.Kn.indexManager.addToCollectionParentIndex(e,n))})),t.push(this.Kn.updateMetadata(e,n)),Ac.waitFor(t)}getFromCache(e,t){return this.Kn.Bn(e,t).next((e=>(this.Gn.set(t,{size:e.size,readTime:e.document.readTime}),e.document)))}getAllFromCache(e,t){return this.Kn.Un(e,t).next((({documents:e,qn:t})=>(t.forEach(((t,n)=>{this.Gn.set(t,{size:n,readTime:e.get(t).readTime})})),e)))}}function Qu(e){return Uc(e,"remoteDocumentGlobal")}function Yu(e){return Uc(e,"remoteDocumentsV14")}function Xu(e){const t=e.path.toArray();return[t.slice(0,t.length-2),t[t.length-2],t[t.length-1]]}function Zu(e,t){const n=t.documentKey.path.toArray();return[e,Hc(t.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function el(e,t){const n=e.path.toArray(),r=t.path.toArray();let s=0;for(let i=0;i<n.length-2&&i<r.length-2;++i)if(s=ps(n[i],r[i]),s)return s;return s=ps(n.length,r.length),s||(s=ps(n[n.length-2],r[r.length-2]),s||ps(n[n.length-1],r[r.length-1]))}
/**
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
 */
/**
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
 */class tl{constructor(e){this.M=e}kt(e,t,n,r){const s=new Nc("createOrUpgrade",t);n<1&&r>=1&&(function(e){e.createObjectStore("owner")}(e),function(e){e.createObjectStore("mutationQueues",{keyPath:"userId"}),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",sc,{unique:!0}),e.createObjectStore("documentMutations")}(e),nl(e),function(e){e.createObjectStore("remoteDocuments")}(e));let i=Ac.resolve();return n<3&&r>=3&&(0!==n&&(function(e){e.deleteObjectStore("targetDocuments"),e.deleteObjectStore("targets"),e.deleteObjectStore("targetGlobal")}(e),nl(e)),i=i.next((()=>function(e){const t=e.store("targetGlobal"),n={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:vs.min().toTimestamp(),targetCount:0};return t.put("targetGlobalKey",n)}(s)))),n<4&&r>=4&&(0!==n&&(i=i.next((()=>function(e,t){return t.store("mutations").qt().next((n=>{e.deleteObjectStore("mutations"),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",sc,{unique:!0});const r=t.store("mutations"),s=n.map((e=>r.put(e)));return Ac.waitFor(s)}))}(e,s)))),i=i.next((()=>{!function(e){e.createObjectStore("clientMetadata",{keyPath:"clientId"})}(e)}))),n<5&&r>=5&&(i=i.next((()=>this.Qn(s)))),n<6&&r>=6&&(i=i.next((()=>(function(e){e.createObjectStore("remoteDocumentGlobal")}(e),this.jn(s))))),n<7&&r>=7&&(i=i.next((()=>this.Wn(s)))),n<8&&r>=8&&(i=i.next((()=>this.zn(e,s)))),n<9&&r>=9&&(i=i.next((()=>{!function(e){e.objectStoreNames.contains("remoteDocumentChanges")&&e.deleteObjectStore("remoteDocumentChanges")}(e)}))),n<10&&r>=10&&(i=i.next((()=>this.Hn(s)))),n<11&&r>=11&&(i=i.next((()=>{!function(e){e.createObjectStore("bundles",{keyPath:"bundleId"})}(e),function(e){e.createObjectStore("namedQueries",{keyPath:"name"})}(e)}))),n<12&&r>=12&&(i=i.next((()=>{!function(e){const t=e.createObjectStore("documentOverlays",{keyPath:wc});t.createIndex("collectionPathOverlayIndex",bc,{unique:!1}),t.createIndex("collectionGroupOverlayIndex",_c,{unique:!1})}(e)}))),n<13&&r>=13&&(i=i.next((()=>function(e){const t=e.createObjectStore("remoteDocumentsV14",{keyPath:cc});t.createIndex("documentKeyIndex",uc),t.createIndex("collectionGroupIndex",lc)}(e))).next((()=>this.Jn(e,s))).next((()=>e.deleteObjectStore("remoteDocuments")))),n<14&&r>=14&&(i=i.next((()=>{!function(e){e.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),e.createObjectStore("indexState",{keyPath:mc}).createIndex("sequenceNumberIndex",gc,{unique:!1}),e.createObjectStore("indexEntries",{keyPath:yc}).createIndex("documentKeyIndex",vc,{unique:!1})}(e)}))),i}jn(e){let t=0;return e.store("remoteDocuments").Wt(((e,n)=>{t+=Nu(n)})).next((()=>{const n={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",n)}))}Qn(e){const t=e.store("mutationQueues"),n=e.store("mutations");return t.qt().next((t=>Ac.forEach(t,(t=>{const r=IDBKeyRange.bound([t.userId,-1],[t.userId,t.lastAcknowledgedBatchId]);return n.qt("userMutationsIndex",r).next((n=>Ac.forEach(n,(n=>{Yr(n.userId===t.userId);const r=Qc(this.M,n);return Au(e,t.userId,r).next((()=>{}))}))))}))))}Wn(e){const t=e.store("targetDocuments"),n=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next((e=>{const r=[];return n.Wt(((n,s)=>{const i=new Es(n),o=function(e){return[0,ec(e)]}(i);r.push(t.get(o).next((n=>n?Ac.resolve():(n=>t.put({targetId:0,path:ec(n),sequenceNumber:e.highestListenSequenceNumber}))(i))))})).next((()=>Ac.waitFor(r)))}))}zn(e,t){e.createObjectStore("collectionParents",{keyPath:pc});const n=t.store("collectionParents"),r=new wu,s=e=>{if(r.add(e)){const t=e.lastSegment(),r=e.popLast();return n.put({collectionId:t,parent:ec(r)})}};return t.store("remoteDocuments").Wt({jt:!0},((e,t)=>{const n=new Es(e);return s(n.popLast())})).next((()=>t.store("documentMutations").Wt({jt:!0},(([e,t,n],r)=>{const i=rc(t);return s(i.popLast())}))))}Hn(e){const t=e.store("targets");return t.Wt(((e,n)=>{const r=Yc(n),s=Xc(this.M,r);return t.put(s)}))}Jn(e,t){const n=t.store("remoteDocuments"),r=[];return n.Wt(((e,n)=>{const s=t.store("remoteDocumentsV14"),i=(o=n,o.document?new js(Es.fromString(o.document.name).popFirst(5)):o.noDocument?js.fromSegments(o.noDocument.path):o.unknownDocument?js.fromSegments(o.unknownDocument.path):Qr()).path.toArray();var o;
/**
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
 */const a={prefixPath:i.slice(0,i.length-2),collectionGroup:i[i.length-2],documentId:i[i.length-1],readTime:n.readTime||[0,0],unknownDocument:n.unknownDocument,noDocument:n.noDocument,document:n.document,hasCommittedMutations:!!n.hasCommittedMutations};r.push(s.put(a))})).next((()=>Ac.waitFor(r)))}}function nl(e){e.createObjectStore("targetDocuments",{keyPath:dc}).createIndex("documentTargetsIndex",fc,{unique:!0}),e.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",hc,{unique:!0}),e.createObjectStore("targetGlobal")}const rl="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class sl{constructor(e,t,n,r,s,i,o,a,c,u,l=13){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.Yn=s,this.window=i,this.document=o,this.Xn=c,this.Zn=u,this.ts=l,this.es=null,this.ns=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ss=null,this.inForeground=!1,this.rs=null,this.os=null,this.us=Number.NEGATIVE_INFINITY,this.cs=e=>Promise.resolve(),!sl.vt())throw new ts(es.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new Gu(this,r),this.hs=t+"main",this.M=new Kc(a),this.ls=new xc(this.hs,this.ts,new tl(this.M)),this.fs=new Mu(this.referenceDelegate,this.M),this.ds=function(e){return new Wu(e)}(this.M),this._s=new nu,this.window&&this.window.localStorage?this.ws=this.window.localStorage:(this.ws=null,!1===u&&Hr("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.gs().then((()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new ts(es.FAILED_PRECONDITION,rl);return this.ys(),this.ps(),this.Is(),this.runTransaction("getHighestListenSequenceNumber","readonly",(e=>this.fs.getHighestSequenceNumber(e)))})).then((e=>{this.es=new hs(e,this.Xn)})).then((()=>{this.ns=!0})).catch((e=>(this.ls&&this.ls.close(),Promise.reject(e))))}Ts(e){return this.cs=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.ls.Ot((async t=>{null===t.newVersion&&await e()}))}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Yn.enqueueAndForget((async()=>{this.started&&await this.gs()})))}gs(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",(e=>ol(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next((()=>{if(this.isPrimary)return this.Es(e).next((e=>{e||(this.isPrimary=!1,this.Yn.enqueueRetryable((()=>this.cs(!1))))}))})).next((()=>this.As(e))).next((t=>this.isPrimary&&!t?this.Rs(e).next((()=>!1)):!!t&&this.Ps(e).next((()=>!0)))))).catch((e=>{if(Oc(e))return zr("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return zr("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1})).then((e=>{this.isPrimary!==e&&this.Yn.enqueueRetryable((()=>this.cs(e))),this.isPrimary=e}))}Es(e){return il(e).get("owner").next((e=>Ac.resolve(this.bs(e))))}Vs(e){return ol(e).delete(this.clientId)}async vs(){if(this.isPrimary&&!this.Ss(this.us,18e5)){this.us=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",(e=>{const t=Uc(e,"clientMetadata");return t.qt().next((e=>{const n=this.Ds(e,18e5),r=e.filter((e=>-1===n.indexOf(e)));return Ac.forEach(r,(e=>t.delete(e.clientId))).next((()=>r))}))})).catch((()=>[]));if(this.ws)for(const t of e)this.ws.removeItem(this.Cs(t.clientId))}}Is(){this.os=this.Yn.enqueueAfterDelay("client_metadata_refresh",4e3,(()=>this.gs().then((()=>this.vs())).then((()=>this.Is()))))}bs(e){return!!e&&e.ownerId===this.clientId}As(e){return this.Zn?Ac.resolve(!0):il(e).get("owner").next((t=>{if(null!==t&&this.Ss(t.leaseTimestampMs,5e3)&&!this.xs(t.ownerId)){if(this.bs(t)&&this.networkEnabled)return!0;if(!this.bs(t)){if(!t.allowTabSynchronization)throw new ts(es.FAILED_PRECONDITION,rl);return!1}}return!(!this.networkEnabled||!this.inForeground)||ol(e).qt().next((e=>void 0===this.Ds(e,5e3).find((e=>{if(this.clientId!==e.clientId){const t=!this.networkEnabled&&e.networkEnabled,n=!this.inForeground&&e.inForeground,r=this.networkEnabled===e.networkEnabled;if(t||n&&r)return!0}return!1}))))})).next((e=>(this.isPrimary!==e&&zr("IndexedDbPersistence",`Client ${e?"is":"is not"} eligible for a primary lease.`),e)))}async shutdown(){this.ns=!1,this.Ns(),this.os&&(this.os.cancel(),this.os=null),this.ks(),this.Ms(),await this.ls.runTransaction("shutdown","readwrite",["owner","clientMetadata"],(e=>{const t=new Vc(e,hs.A);return this.Rs(t).next((()=>this.Vs(t)))})),this.ls.close(),this.Os()}Ds(e,t){return e.filter((e=>this.Ss(e.updateTimeMs,t)&&!this.xs(e.clientId)))}Fs(){return this.runTransaction("getActiveClients","readonly",(e=>ol(e).qt().next((e=>this.Ds(e,18e5).map((e=>e.clientId))))))}get started(){return this.ns}getMutationQueue(e,t){return xu.Yt(e,this.M,t,this.referenceDelegate)}getTargetCache(){return this.fs}getRemoteDocumentCache(){return this.ds}getIndexManager(e){return new _u(e,this.M.Jt.databaseId)}getDocumentOverlayCache(e){return iu.Yt(this.M,e)}getBundleCache(){return this._s}runTransaction(e,t,n){zr("IndexedDbPersistence","Starting transaction:",e);const r="readonly"===t?"readonly":"readwrite",s=14===(i=this.ts)?Sc:13===i?Tc:12===i?Ec:11===i?Ic:void Qr();var i;let o;return this.ls.runTransaction(e,r,s,(r=>(o=new Vc(r,this.es?this.es.next():hs.A),"readwrite-primary"===t?this.Es(o).next((e=>!!e||this.As(o))).next((t=>{if(!t)throw Hr(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Yn.enqueueRetryable((()=>this.cs(!1))),new ts(es.FAILED_PRECONDITION,kc);return n(o)})).next((e=>this.Ps(o).next((()=>e)))):this.$s(o).next((()=>n(o)))))).then((e=>(o.raiseOnCommittedEvent(),e)))}$s(e){return il(e).get("owner").next((e=>{if(null!==e&&this.Ss(e.leaseTimestampMs,5e3)&&!this.xs(e.ownerId)&&!this.bs(e)&&!(this.Zn||this.allowTabSynchronization&&e.allowTabSynchronization))throw new ts(es.FAILED_PRECONDITION,rl)}))}Ps(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return il(e).put("owner",t)}static vt(){return xc.vt()}Rs(e){const t=il(e);return t.get("owner").next((e=>this.bs(e)?(zr("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):Ac.resolve()))}Ss(e,t){const n=Date.now();return!(e<n-t)&&(!(e>n)||(Hr(`Detected an update time that is in the future: ${e} > ${n}`),!1))}ys(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.rs=()=>{this.Yn.enqueueAndForget((()=>(this.inForeground="visible"===this.document.visibilityState,this.gs())))},this.document.addEventListener("visibilitychange",this.rs),this.inForeground="visible"===this.document.visibilityState)}ks(){this.rs&&(this.document.removeEventListener("visibilitychange",this.rs),this.rs=null)}ps(){var e;"function"==typeof(null===(e=this.window)||void 0===e?void 0:e.addEventListener)&&(this.ss=()=>{this.Ns(),(0,c.G6)()&&navigator.appVersion.match(/Version\/1[45]/)&&this.Yn.enterRestrictedMode(!0),this.Yn.enqueueAndForget((()=>this.shutdown()))},this.window.addEventListener("pagehide",this.ss))}Ms(){this.ss&&(this.window.removeEventListener("pagehide",this.ss),this.ss=null)}xs(e){var t;try{const n=null!==(null===(t=this.ws)||void 0===t?void 0:t.getItem(this.Cs(e)));return zr("IndexedDbPersistence",`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(e){return Hr("IndexedDbPersistence","Failed to get zombied client id.",e),!1}}Ns(){if(this.ws)try{this.ws.setItem(this.Cs(this.clientId),String(Date.now()))}catch(E){Hr("Failed to set zombie client id.",E)}}Os(){if(this.ws)try{this.ws.removeItem(this.Cs(this.clientId))}catch(E){}}Cs(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function il(e){return Uc(e,"owner")}function ol(e){return Uc(e,"clientMetadata")}function al(e,t){let n=e.projectId;return e.isDefaultDatabase||(n+="."+e.database),"firestore/"+t+"/"+n+"/"
/**
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
 */}class cl{constructor(e,t,n){this.ds=e,this.Bs=t,this.indexManager=n}Ls(e,t){return this.Bs.getAllMutationBatchesAffectingDocumentKey(e,t).next((n=>this.Us(e,t,n)))}Us(e,t,n){return this.ds.getEntry(e,t).next((e=>{for(const t of n)t.applyToLocalView(e);return e}))}qs(e,t){e.forEach(((e,n)=>{for(const r of t)r.applyToLocalView(n)}))}Ks(e,t){return this.ds.getEntries(e,t).next((t=>this.Gs(e,t).next((()=>t))))}Gs(e,t){return this.Bs.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>this.qs(t,e)))}Qs(e,t,n){return function(e){return js.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.js(e,t.path):Yi(t)?this.Ws(e,t,n):this.zs(e,t,n)}js(e,t){return this.Ls(e,new js(t)).next((e=>{let t=ra();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}Ws(e,t,n){const r=t.collectionGroup;let s=ra();return this.indexManager.getCollectionParents(e,r).next((i=>Ac.forEach(i,(i=>{const o=function(e,t){return new Ki(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,i.child(r));return this.zs(e,o,n).next((e=>{e.forEach(((e,t)=>{s=s.insert(e,t)}))}))})).next((()=>s))))}zs(e,t,n){let r;return this.ds.getAllFromCollection(e,t.path,n).next((n=>(r=n,this.Bs.getAllMutationBatchesAffectingQuery(e,t)))).next((e=>{for(const t of e)for(const e of t.mutations){const n=e.key;let s=r.get(n);null==s&&(s=hi.newInvalidDocument(n),r=r.insert(n,s)),Do(e,s,t.localWriteTime),s.isFoundDocument()||(r=r.remove(n))}})).next((()=>(r.forEach(((e,n)=>{so(t,n)||(r=r.remove(e))})),r)))}}
/**
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
 */class ul{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Hs=n,this.Js=r}static Ys(e,t){let n=aa(),r=aa();for(const s of t.docChanges)switch(s.type){case 0:n=n.add(s.doc.key);break;case 1:r=r.add(s.doc.key)}return new ul(e,t.fromCache,n,r)}}
/**
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
 */class ll{Xs(e){this.Zs=e}Qs(e,t,n,r){return function(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}(t)||n.isEqual(vs.min())?this.ti(e,t):this.Zs.Ks(e,r).next((s=>{const i=this.ei(t,s);return(Hi(t)||Wi(t))&&this.ni(t.limitType,i,r,n)?this.ti(e,t):(Kr()<=a["in"].DEBUG&&zr("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),ro(t)),this.Zs.Qs(e,t,yi(n,-1)).next((e=>(i.forEach((t=>{e=e.insert(t.key,t)})),e))))}))}ei(e,t){let n=new Yo(oo(e));return t.forEach(((t,r)=>{so(e,r)&&(n=n.add(r))})),n}ni(e,t,n,r){if(n.size!==t.size)return!0;const s="F"===e?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}ti(e,t){return Kr()<=a["in"].DEBUG&&zr("QueryEngine","Using full collection scan to execute query:",ro(t)),this.Zs.Qs(e,t,wi.min())}}
/**
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
 */class hl{constructor(e,t,n,r){this.persistence=e,this.si=t,this.M=r,this.ii=new Wo(ps),this.ri=new Ho((e=>Ei(e)),Si),this.oi=new Map,this.ui=e.getRemoteDocumentCache(),this.fs=e.getTargetCache(),this._s=e.getBundleCache(),this.ai(n)}ai(e){this.indexManager=this.persistence.getIndexManager(e),this.Bs=this.persistence.getMutationQueue(e,this.indexManager),this.ci=new cl(this.ui,this.Bs,this.indexManager),this.ui.setIndexManager(this.indexManager),this.si.Xs(this.ci)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.ii)))}}function dl(e,t,n,r){return new hl(e,t,n,r)}async function fl(e,t){const n=Zr(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let r;return n.Bs.getAllMutationBatches(e).next((s=>(r=s,n.ai(t),n.Bs.getAllMutationBatches(e)))).next((t=>{const s=[],i=[];let o=aa();for(const e of r){s.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){i.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.ci.Ks(e,o).next((e=>({hi:e,removedBatchIds:s,addedBatchIds:i})))}))}))}function pl(e,t){const n=Zr(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const r=t.batch.keys(),s=n.ui.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const s=n.batch,i=s.keys();let o=Ac.resolve();return i.forEach((e=>{o=o.next((()=>r.getEntry(t,e))).next((t=>{const i=n.docVersions.get(e);Yr(null!==i),t.version.compareTo(i)<0&&(s.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))}))})),o.next((()=>e.Bs.removeMutationBatch(t,s)))}(n,e,t,s).next((()=>s.apply(e))).next((()=>n.Bs.performConsistencyCheck(e))).next((()=>n.ci.Ks(e,r)))}))}function ml(e){const t=Zr(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.fs.getLastRemoteSnapshotVersion(e)))}function gl(e,t){const n=Zr(e),r=t.snapshotVersion;let s=n.ii;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const i=n.ui.newChangeBuffer({trackRemovals:!0});s=n.ii;const o=[];t.targetChanges.forEach(((i,a)=>{const c=s.get(a);if(!c)return;o.push(n.fs.removeMatchingKeys(e,i.removedDocuments,a).next((()=>n.fs.addMatchingKeys(e,i.addedDocuments,a))));let u=c.withSequenceNumber(e.currentSequenceNumber);t.targetMismatches.has(a)?u=u.withResumeToken(As.EMPTY_BYTE_STRING,vs.min()).withLastLimboFreeSnapshotVersion(vs.min()):i.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(i.resumeToken,r)),s=s.insert(a,u),function(e,t,n){return 0===e.resumeToken.approximateByteSize()||(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,i)&&o.push(n.fs.updateTargetData(e,u))}));let a=ta();if(t.documentUpdates.forEach((r=>{t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))})),o.push(yl(e,i,t.documentUpdates).next((e=>{a=e}))),!r.isEqual(vs.min())){const t=n.fs.getLastRemoteSnapshotVersion(e).next((t=>n.fs.setTargetsMetadata(e,e.currentSequenceNumber,r)));o.push(t)}return Ac.waitFor(o).next((()=>i.apply(e))).next((()=>n.ci.Gs(e,a))).next((()=>a))})).then((e=>(n.ii=s,e)))}function yl(e,t,n){let r=aa();return n.forEach((e=>r=r.add(e))),t.getEntries(e,r).next((e=>{let r=ta();return n.forEach(((n,s)=>{const i=e.get(n);s.isNoDocument()&&s.version.isEqual(vs.min())?(t.removeEntry(n,s.readTime),r=r.insert(n,s)):!i.isValidDocument()||s.version.compareTo(i.version)>0||0===s.version.compareTo(i.version)&&i.hasPendingWrites?(t.addEntry(s),r=r.insert(n,s)):zr("LocalStore","Ignoring outdated watch update for ",n,". Current version:",i.version," Watch version:",s.version)})),r}))}function vl(e,t){const n=Zr(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.Bs.getNextMutationBatchAfterBatchId(e,t))))}function wl(e,t){const n=Zr(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let r;return n.fs.getTargetData(e,t).next((s=>s?(r=s,Ac.resolve(r)):n.fs.allocateTargetId(e).next((s=>(r=new $c(t,s,0,e.currentSequenceNumber),n.fs.addTargetData(e,r).next((()=>r)))))))})).then((e=>{const r=n.ii.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.ii=n.ii.insert(e.targetId,e),n.ri.set(t,e.targetId)),e}))}async function bl(e,t,n){const r=Zr(e),s=r.ii.get(t),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,(e=>r.persistence.referenceDelegate.removeTarget(e,s)))}catch(e){if(!Oc(e))throw e;zr("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}r.ii=r.ii.remove(t),r.ri.delete(s.target)}function _l(e,t,n){const r=Zr(e);let s=vs.min(),i=aa();return r.persistence.runTransaction("Execute query","readonly",(e=>function(e,t,n){const r=Zr(e),s=r.ri.get(n);return void 0!==s?Ac.resolve(r.ii.get(s)):r.fs.getTargetData(t,n)}(r,e,Zi(t)).next((t=>{if(t)return s=t.lastLimboFreeSnapshotVersion,r.fs.getMatchingKeysForTargetId(e,t.targetId).next((e=>{i=e}))})).next((()=>r.si.Qs(e,t,n?s:vs.min(),n?i:aa()))).next((e=>(Tl(r,io(t),e),{documents:e,li:i})))))}function Il(e,t){const n=Zr(e),r=Zr(n.fs),s=n.ii.get(t);return s?Promise.resolve(s.target):n.persistence.runTransaction("Get target data","readonly",(e=>r.Et(e,t).next((e=>e?e.target:null))))}function El(e,t){const n=Zr(e),r=n.oi.get(t)||vs.min();return n.persistence.runTransaction("Get new document changes","readonly",(e=>n.ui.getAllFromCollectionGroup(e,t,yi(r,-1),Number.MAX_SAFE_INTEGER))).then((e=>(Tl(n,t,e),e)))}function Tl(e,t,n){let r=vs.min();n.forEach(((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)})),e.oi.set(t,r)}async function Sl(e,t,n,r){const s=Zr(e);let i=aa(),o=ta();for(const u of n){const e=t.fi(u.metadata.name);u.document&&(i=i.add(e));const n=t.di(u);n.setReadTime(t._i(u.metadata.readTime)),o=o.insert(e,n)}const a=s.ui.newChangeBuffer({trackRemovals:!0}),c=await wl(s,function(e){return Zi(zi(Es.fromString(`__bundle__/docs/${e}`)))}(r));return s.persistence.runTransaction("Apply bundle documents","readwrite",(e=>yl(e,a,o).next((t=>(a.apply(e),t))).next((t=>s.fs.removeMatchingKeysForTargetId(e,c.targetId).next((()=>s.fs.addMatchingKeys(e,i,c.targetId))).next((()=>s.ci.Gs(e,t))).next((()=>t))))))}async function kl(e,t,n=aa()){const r=await wl(e,Zi(Zc(t.bundledQuery))),s=Zr(e);return s.persistence.runTransaction("Save named query","readwrite",(e=>{const i=Sa(t.readTime);if(r.snapshotVersion.compareTo(i)>=0)return s._s.saveNamedQuery(e,t);const o=r.withResumeToken(As.EMPTY_BYTE_STRING,i);return s.ii=s.ii.insert(o.targetId,o),s.fs.updateTargetData(e,o).next((()=>s.fs.removeMatchingKeysForTargetId(e,r.targetId))).next((()=>s.fs.addMatchingKeys(e,n,r.targetId))).next((()=>s._s.saveNamedQuery(e,t)))}))}
/**
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
 */class Cl{constructor(e){this.M=e,this.wi=new Map,this.mi=new Map}getBundleMetadata(e,t){return Ac.resolve(this.wi.get(t))}saveBundleMetadata(e,t){var n;return this.wi.set(t.id,{id:(n=t).id,version:n.version,createTime:Sa(n.createTime)}),Ac.resolve()}getNamedQuery(e,t){return Ac.resolve(this.mi.get(t))}saveNamedQuery(e,t){return this.mi.set(t.name,function(e){return{name:e.name,query:Zc(e.bundledQuery),readTime:Sa(e.readTime)}}(t)),Ac.resolve()}}
/**
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
 */class Al{constructor(){this.overlays=new Wo(js.comparator),this.gi=new Map}getOverlay(e,t){return Ac.resolve(this.overlays.get(t))}saveOverlays(e,t,n){return n.forEach(((n,r)=>{this.Xt(e,t,r)})),Ac.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.gi.get(n);return void 0!==r&&(r.forEach((e=>this.overlays=this.overlays.remove(e))),this.gi.delete(n)),Ac.resolve()}getOverlaysForCollection(e,t,n){const r=sa(),s=t.length+1,i=new js(t.child("")),o=this.overlays.getIteratorFrom(i);for(;o.hasNext();){const e=o.getNext().value,i=e.getKey();if(!t.isPrefixOf(i.path))break;i.path.length===s&&e.largestBatchId>n&&r.set(e.getKey(),e)}return Ac.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let s=new Wo(((e,t)=>e-t));const i=this.overlays.getIterator();for(;i.hasNext();){const e=i.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=s.get(e.largestBatchId);null===t&&(t=sa(),s=s.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=sa(),a=s.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((e,t)=>o.set(e,t))),o.size()>=r)break;return Ac.resolve(o)}Xt(e,t,n){if(null===n)return;const r=this.overlays.get(n.key);if(null!==r){const e=this.gi.get(r.largestBatchId).delete(n.key);this.gi.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new qc(t,n));let s=this.gi.get(t);void 0===s&&(s=aa(),this.gi.set(t,s)),this.gi.set(t,s.add(n.key))}}
/**
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
 */class Nl{constructor(){this.yi=new Yo(xl.pi),this.Ii=new Yo(xl.Ti)}isEmpty(){return this.yi.isEmpty()}addReference(e,t){const n=new xl(e,t);this.yi=this.yi.add(n),this.Ii=this.Ii.add(n)}Ei(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.Ai(new xl(e,t))}Ri(e,t){e.forEach((e=>this.removeReference(e,t)))}Pi(e){const t=new js(new Es([])),n=new xl(t,e),r=new xl(t,e+1),s=[];return this.Ii.forEachInRange([n,r],(e=>{this.Ai(e),s.push(e.key)})),s}bi(){this.yi.forEach((e=>this.Ai(e)))}Ai(e){this.yi=this.yi.delete(e),this.Ii=this.Ii.delete(e)}Vi(e){const t=new js(new Es([])),n=new xl(t,e),r=new xl(t,e+1);let s=aa();return this.Ii.forEachInRange([n,r],(e=>{s=s.add(e.key)})),s}containsKey(e){const t=new xl(e,0),n=this.yi.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class xl{constructor(e,t){this.key=e,this.vi=t}static pi(e,t){return js.comparator(e.key,t.key)||ps(e.vi,t.vi)}static Ti(e,t){return ps(e.vi,t.vi)||js.comparator(e.key,t.key)}}
/**
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
 */class Dl{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.Bs=[],this.Si=1,this.Di=new Yo(xl.pi)}checkEmpty(e){return Ac.resolve(0===this.Bs.length)}addMutationBatch(e,t,n,r){const s=this.Si;this.Si++,this.Bs.length>0&&this.Bs[this.Bs.length-1];const i=new Bc(s,t,n,r);this.Bs.push(i);for(const o of r)this.Di=this.Di.add(new xl(o.key,s)),this.indexManager.addToCollectionParentIndex(e,o.key.path.popLast());return Ac.resolve(i)}lookupMutationBatch(e,t){return Ac.resolve(this.Ci(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.xi(n),s=r<0?0:r;return Ac.resolve(this.Bs.length>s?this.Bs[s]:null)}getHighestUnacknowledgedBatchId(){return Ac.resolve(0===this.Bs.length?-1:this.Si-1)}getAllMutationBatches(e){return Ac.resolve(this.Bs.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new xl(t,0),r=new xl(t,Number.POSITIVE_INFINITY),s=[];return this.Di.forEachInRange([n,r],(e=>{const t=this.Ci(e.vi);s.push(t)})),Ac.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Yo(ps);return t.forEach((e=>{const t=new xl(e,0),r=new xl(e,Number.POSITIVE_INFINITY);this.Di.forEachInRange([t,r],(e=>{n=n.add(e.vi)}))})),Ac.resolve(this.Ni(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let s=n;js.isDocumentKey(s)||(s=s.child(""));const i=new xl(new js(s),0);let o=new Yo(ps);return this.Di.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.vi)),!0)}),i),Ac.resolve(this.Ni(o))}Ni(e){const t=[];return e.forEach((e=>{const n=this.Ci(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){Yr(0===this.ki(t.batchId,"removed")),this.Bs.shift();let n=this.Di;return Ac.forEach(t.mutations,(r=>{const s=new xl(r.key,t.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.Di=n}))}_n(e){}containsKey(e,t){const n=new xl(t,0),r=this.Di.firstAfterOrEqual(n);return Ac.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.Bs.length,Ac.resolve()}ki(e,t){return this.xi(e)}xi(e){return 0===this.Bs.length?0:e-this.Bs[0].batchId}Ci(e){const t=this.xi(e);return t<0||t>=this.Bs.length?null:this.Bs[t]}}
/**
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
 */class Rl{constructor(e){this.Mi=e,this.docs=new Wo(js.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),s=r?r.size:0,i=this.Mi(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:i}),this.size+=i-s,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return Ac.resolve(n?n.document.mutableCopy():hi.newInvalidDocument(t))}getEntries(e,t){let n=ta();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():hi.newInvalidDocument(e))})),Ac.resolve(n)}getAllFromCollection(e,t,n){let r=ta();const s=new js(t.child("")),i=this.docs.getIteratorFrom(s);for(;i.hasNext();){const{key:e,value:{document:s}}=i.getNext();if(!t.isPrefixOf(e.path))break;e.path.length>t.length+1||bi(vi(s),n)<=0||(r=r.insert(s.key,s.mutableCopy()))}return Ac.resolve(r)}getAllFromCollectionGroup(e,t,n,r){Qr()}Oi(e,t){return Ac.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new Ol(this)}getSize(e){return Ac.resolve(this.size)}}class Ol extends Hu{constructor(e){super(),this.Kn=e}applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?t.push(this.Kn.addEntry(e,r)):this.Kn.removeEntry(n)})),Ac.waitFor(t)}getFromCache(e,t){return this.Kn.getEntry(e,t)}getAllFromCache(e,t){return this.Kn.getEntries(e,t)}}
/**
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
 */class Pl{constructor(e){this.persistence=e,this.Fi=new Ho((e=>Ei(e)),Si),this.lastRemoteSnapshotVersion=vs.min(),this.highestTargetId=0,this.$i=0,this.Bi=new Nl,this.targetCount=0,this.Li=Lu.gn()}forEachTarget(e,t){return this.Fi.forEach(((e,n)=>t(n))),Ac.resolve()}getLastRemoteSnapshotVersion(e){return Ac.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Ac.resolve(this.$i)}allocateTargetId(e){return this.highestTargetId=this.Li.next(),Ac.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.$i&&(this.$i=t),Ac.resolve()}Tn(e){this.Fi.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Li=new Lu(t),this.highestTargetId=t),e.sequenceNumber>this.$i&&(this.$i=e.sequenceNumber)}addTargetData(e,t){return this.Tn(t),this.targetCount+=1,Ac.resolve()}updateTargetData(e,t){return this.Tn(t),Ac.resolve()}removeTargetData(e,t){return this.Fi.delete(t.target),this.Bi.Pi(t.targetId),this.targetCount-=1,Ac.resolve()}removeTargets(e,t,n){let r=0;const s=[];return this.Fi.forEach(((i,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.Fi.delete(i),s.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)})),Ac.waitFor(s).next((()=>r))}getTargetCount(e){return Ac.resolve(this.targetCount)}getTargetData(e,t){const n=this.Fi.get(t)||null;return Ac.resolve(n)}addMatchingKeys(e,t,n){return this.Bi.Ei(t,n),Ac.resolve()}removeMatchingKeys(e,t,n){this.Bi.Ri(t,n);const r=this.persistence.referenceDelegate,s=[];return r&&t.forEach((t=>{s.push(r.markPotentiallyOrphaned(e,t))})),Ac.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.Bi.Pi(t),Ac.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Bi.Vi(t);return Ac.resolve(n)}containsKey(e,t){return Ac.resolve(this.Bi.containsKey(t))}}
/**
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
 */class Ll{constructor(e,t){this.Ui={},this.overlays={},this.es=new hs(0),this.ns=!1,this.ns=!0,this.referenceDelegate=e(this),this.fs=new Pl(this),this.indexManager=new vu,this.ds=function(e){return new Rl(e)}((e=>this.referenceDelegate.qi(e))),this.M=new Kc(t),this._s=new Cl(this.M)}start(){return Promise.resolve()}shutdown(){return this.ns=!1,Promise.resolve()}get started(){return this.ns}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Al,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Ui[e.toKey()];return n||(n=new Dl(t,this.referenceDelegate),this.Ui[e.toKey()]=n),n}getTargetCache(){return this.fs}getRemoteDocumentCache(){return this.ds}getBundleCache(){return this._s}runTransaction(e,t,n){zr("MemoryPersistence","Starting transaction:",e);const r=new Ml(this.es.next());return this.referenceDelegate.Ki(),n(r).next((e=>this.referenceDelegate.Gi(r).next((()=>e)))).toPromise().then((e=>(r.raiseOnCommittedEvent(),e)))}Qi(e,t){return Ac.or(Object.values(this.Ui).map((n=>()=>n.containsKey(e,t))))}}class Ml extends Cc{constructor(e){super(),this.currentSequenceNumber=e}}class Fl{constructor(e){this.persistence=e,this.ji=new Nl,this.Wi=null}static zi(e){return new Fl(e)}get Hi(){if(this.Wi)return this.Wi;throw Qr()}addReference(e,t,n){return this.ji.addReference(n,t),this.Hi.delete(n.toString()),Ac.resolve()}removeReference(e,t,n){return this.ji.removeReference(n,t),this.Hi.add(n.toString()),Ac.resolve()}markPotentiallyOrphaned(e,t){return this.Hi.add(t.toString()),Ac.resolve()}removeTarget(e,t){this.ji.Pi(t.targetId).forEach((e=>this.Hi.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.Hi.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}Ki(){this.Wi=new Set}Gi(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Ac.forEach(this.Hi,(n=>{const r=js.fromPath(n);return this.Ji(e,r).next((e=>{e||t.removeEntry(r,vs.min())}))})).next((()=>(this.Wi=null,t.apply(e))))}updateLimboDocument(e,t){return this.Ji(e,t).next((e=>{e?this.Hi.delete(t.toString()):this.Hi.add(t.toString())}))}qi(e){return 0}Ji(e,t){return Ac.or([()=>Ac.resolve(this.ji.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Qi(e,t)])}}
/**
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
 */function Vl(e,t){return`firestore_clients_${e}_${t}`}function Ul(e,t,n){let r=`firestore_mutations_${e}_${n}`;return t.isAuthenticated()&&(r+=`_${t.uid}`),r}function Bl(e,t){return`firestore_targets_${e}_${t}`}class jl{constructor(e,t,n,r){this.user=e,this.batchId=t,this.state=n,this.error=r}static Yi(e,t,n){const r=JSON.parse(n);let s,i="object"==typeof r&&-1!==["pending","acknowledged","rejected"].indexOf(r.state)&&(void 0===r.error||"object"==typeof r.error);return i&&r.error&&(i="string"==typeof r.error.message&&"string"==typeof r.error.code,i&&(s=new ts(r.error.code,r.error.message))),i?new jl(e,t,r.state,s):(Hr("SharedClientState",`Failed to parse mutation state for ID '${t}': ${n}`),null)}Xi(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class ql{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static Yi(e,t){const n=JSON.parse(t);let r,s="object"==typeof n&&-1!==["not-current","current","rejected"].indexOf(n.state)&&(void 0===n.error||"object"==typeof n.error);return s&&n.error&&(s="string"==typeof n.error.message&&"string"==typeof n.error.code,s&&(r=new ts(n.error.code,n.error.message))),s?new ql(e,n.state,r):(Hr("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}Xi(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class $l{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Yi(e,t){const n=JSON.parse(t);let r="object"==typeof n&&n.activeTargetIds instanceof Array,s=ua();for(let i=0;r&&i<n.activeTargetIds.length;++i)r=Bs(n.activeTargetIds[i]),s=s.add(n.activeTargetIds[i]);return r?new $l(e,s):(Hr("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class Kl{constructor(e,t){this.clientId=e,this.onlineState=t}static Yi(e){const t=JSON.parse(e);return"object"==typeof t&&-1!==["Unknown","Online","Offline"].indexOf(t.onlineState)&&"string"==typeof t.clientId?new Kl(t.clientId,t.onlineState):(Hr("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Gl{constructor(){this.activeTargetIds=ua()}Zi(e){this.activeTargetIds=this.activeTargetIds.add(e)}tr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Xi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class zl{constructor(e,t,n,r,s){this.window=e,this.Yn=t,this.persistenceKey=n,this.er=r,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.nr=this.sr.bind(this),this.ir=new Wo(ps),this.started=!1,this.rr=[];const i=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.ur=Vl(this.persistenceKey,this.er),this.ar=function(e){return`firestore_sequence_number_${e}`}
/**
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
 */(this.persistenceKey),this.ir=this.ir.insert(this.er,new Gl),this.cr=new RegExp(`^firestore_clients_${i}_([^_]*)$`),this.hr=new RegExp(`^firestore_mutations_${i}_(\\d+)(?:_(.*))?$`),this.lr=new RegExp(`^firestore_targets_${i}_(\\d+)$`),this.dr=function(e){return`firestore_online_state_${e}`}(this.persistenceKey),this._r=function(e){return`firestore_bundle_loaded_v2_${e}`}(this.persistenceKey),this.window.addEventListener("storage",this.nr)}static vt(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Fs();for(const n of e){if(n===this.er)continue;const e=this.getItem(Vl(this.persistenceKey,n));if(e){const t=$l.Yi(n,e);t&&(this.ir=this.ir.insert(t.clientId,t))}}this.wr();const t=this.storage.getItem(this.dr);if(t){const e=this.mr(t);e&&this.gr(e)}for(const n of this.rr)this.sr(n);this.rr=[],this.window.addEventListener("pagehide",(()=>this.shutdown())),this.started=!0}writeSequenceNumber(e){this.setItem(this.ar,JSON.stringify(e))}getAllActiveQueryTargets(){return this.yr(this.ir)}isActiveQueryTarget(e){let t=!1;return this.ir.forEach(((n,r)=>{r.activeTargetIds.has(e)&&(t=!0)})),t}addPendingMutation(e){this.pr(e,"pending")}updateMutationState(e,t,n){this.pr(e,t,n),this.Ir(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const n=this.storage.getItem(Bl(this.persistenceKey,e));if(n){const r=ql.Yi(e,n);r&&(t=r.state)}}return this.Tr.Zi(e),this.wr(),t}removeLocalQueryTarget(e){this.Tr.tr(e),this.wr()}isLocalQueryTarget(e){return this.Tr.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Bl(this.persistenceKey,e))}updateQueryState(e,t,n){this.Er(e,t,n)}handleUserChange(e,t,n){t.forEach((e=>{this.Ir(e)})),this.currentUser=e,n.forEach((e=>{this.addPendingMutation(e)}))}setOnlineState(e){this.Ar(e)}notifyBundleLoaded(e){this.Rr(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.nr),this.removeItem(this.ur),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return zr("SharedClientState","READ",e,t),t}setItem(e,t){zr("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){zr("SharedClientState","REMOVE",e),this.storage.removeItem(e)}sr(e){const t=e;if(t.storageArea===this.storage){if(zr("SharedClientState","EVENT",t.key,t.newValue),t.key===this.ur)return void Hr("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Yn.enqueueRetryable((async()=>{if(this.started){if(null!==t.key)if(this.cr.test(t.key)){if(null==t.newValue){const e=this.Pr(t.key);return this.br(e,null)}{const e=this.Vr(t.key,t.newValue);if(e)return this.br(e.clientId,e)}}else if(this.hr.test(t.key)){if(null!==t.newValue){const e=this.vr(t.key,t.newValue);if(e)return this.Sr(e)}}else if(this.lr.test(t.key)){if(null!==t.newValue){const e=this.Dr(t.key,t.newValue);if(e)return this.Cr(e)}}else if(t.key===this.dr){if(null!==t.newValue){const e=this.mr(t.newValue);if(e)return this.gr(e)}}else if(t.key===this.ar){const e=function(e){let t=hs.A;if(null!=e)try{const n=JSON.parse(e);Yr("number"==typeof n),t=n}catch(e){Hr("SharedClientState","Failed to read sequence number from WebStorage",e)}return t}(t.newValue);e!==hs.A&&this.sequenceNumberHandler(e)}else if(t.key===this._r){const e=this.Nr(t.newValue);await Promise.all(e.map((e=>this.syncEngine.kr(e))))}}else this.rr.push(t)}))}}get Tr(){return this.ir.get(this.er)}wr(){this.setItem(this.ur,this.Tr.Xi())}pr(e,t,n){const r=new jl(this.currentUser,e,t,n),s=Ul(this.persistenceKey,this.currentUser,e);this.setItem(s,r.Xi())}Ir(e){const t=Ul(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Ar(e){const t={clientId:this.er,onlineState:e};this.storage.setItem(this.dr,JSON.stringify(t))}Er(e,t,n){const r=Bl(this.persistenceKey,e),s=new ql(e,t,n);this.setItem(r,s.Xi())}Rr(e){const t=JSON.stringify(Array.from(e));this.setItem(this._r,t)}Pr(e){const t=this.cr.exec(e);return t?t[1]:null}Vr(e,t){const n=this.Pr(e);return $l.Yi(n,t)}vr(e,t){const n=this.hr.exec(e),r=Number(n[1]),s=void 0!==n[2]?n[2]:null;return jl.Yi(new jr(s),r,t)}Dr(e,t){const n=this.lr.exec(e),r=Number(n[1]);return ql.Yi(r,t)}mr(e){return Kl.Yi(e)}Nr(e){return JSON.parse(e)}async Sr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Mr(e.batchId,e.state,e.error);zr("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Cr(e){return this.syncEngine.Or(e.targetId,e.state,e.error)}br(e,t){const n=t?this.ir.insert(e,t):this.ir.remove(e),r=this.yr(this.ir),s=this.yr(n),i=[],o=[];return s.forEach((e=>{r.has(e)||i.push(e)})),r.forEach((e=>{s.has(e)||o.push(e)})),this.syncEngine.Fr(i,o).then((()=>{this.ir=n}))}gr(e){this.ir.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}yr(e){let t=ua();return e.forEach(((e,n)=>{t=t.unionWith(n.activeTargetIds)})),t}}class Hl{constructor(){this.$r=new Gl,this.Br={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.$r.Zi(e),this.Br[e]||"not-current"}updateQueryState(e,t,n){this.Br[e]=t}removeLocalQueryTarget(e){this.$r.tr(e)}isLocalQueryTarget(e){return this.$r.activeTargetIds.has(e)}clearQueryState(e){delete this.Br[e]}getAllActiveQueryTargets(){return this.$r.activeTargetIds}isActiveQueryTarget(e){return this.$r.activeTargetIds.has(e)}start(){return this.$r=new Gl,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
/**
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
 */class Wl{Lr(e){}shutdown(){}}
/**
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
 */class Jl{constructor(){this.Ur=()=>this.qr(),this.Kr=()=>this.Gr(),this.Qr=[],this.jr()}Lr(e){this.Qr.push(e)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Kr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Kr)}qr(){zr("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Qr)e(0)}Gr(){zr("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Qr)e(1)}static vt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
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
 */const Ql={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
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
 */class Yl{constructor(e){this.Wr=e.Wr,this.zr=e.zr}Hr(e){this.Jr=e}Yr(e){this.Xr=e}onMessage(e){this.Zr=e}close(){this.zr()}send(e){this.Wr(e)}eo(){this.Jr()}no(e){this.Xr(e)}so(e){this.Zr(e)}}
/**
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
 */class Xl extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.io=t+"://"+e.host,this.ro="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}oo(e,t,n,r,s){const i=this.uo(e,t);zr("RestConnection","Sending: ",i,n);const o={};return this.ao(o,r,s),this.co(e,i,o,n).then((e=>(zr("RestConnection","Received: ",e),e)),(t=>{throw Wr("RestConnection",`${e} failed with error: `,t,"url: ",i,"request:",n),t}))}ho(e,t,n,r,s){return this.oo(e,t,n,r,s)}ao(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+qr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}uo(e,t){const n=Ql[e];return`${this.io}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}co(e,t,n,r){return new Promise(((s,i)=>{const o=new Ur;o.listenOnce(Pr.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case Or.NO_ERROR:const t=o.getResponseJson();zr("Connection","XHR received:",JSON.stringify(t)),s(t);break;case Or.TIMEOUT:zr("Connection",'RPC "'+e+'" timed out'),i(new ts(es.DEADLINE_EXCEEDED,"Request time out"));break;case Or.HTTP_ERROR:const n=o.getStatus();if(zr("Connection",'RPC "'+e+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const e=o.getResponseJson().error;if(e&&e.status&&e.message){const t=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(es).indexOf(t)>=0?t:es.UNKNOWN}(e.status);i(new ts(t,e.message))}else i(new ts(es.UNKNOWN,"Server responded with status "+o.getStatus()))}else i(new ts(es.UNAVAILABLE,"Connection failed."));break;default:Qr()}}finally{zr("Connection",'RPC "'+e+'" completed.')}}));const a=JSON.stringify(r);o.send(t,"POST",a,n,15)}))}lo(e,t,n){const r=[this.io,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=Dr(),i=Rr(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new Fr({})),this.ao(o.initMessageHeaders,t,n),(0,c.uI)()||(0,c.b$)()||(0,c.d)()||(0,c.w1)()||(0,c.Mn)()||(0,c.ru)()||(o.httpHeadersOverwriteParam="$httpHeaders");const a=r.join("");zr("Connection","Creating WebChannel: "+a,o);const u=s.createWebChannel(a,o);let l=!1,h=!1;const d=new Yl({Wr:e=>{h?zr("Connection","Not sending because WebChannel is closed:",e):(l||(zr("Connection","Opening WebChannel transport."),u.open(),l=!0),zr("Connection","WebChannel sending:",e),u.send(e))},zr:()=>u.close()}),f=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return f(u,Vr.EventType.OPEN,(()=>{h||zr("Connection","WebChannel transport opened.")})),f(u,Vr.EventType.CLOSE,(()=>{h||(h=!0,zr("Connection","WebChannel transport closed"),d.no())})),f(u,Vr.EventType.ERROR,(e=>{h||(h=!0,Wr("Connection","WebChannel transport errored:",e),d.no(new ts(es.UNAVAILABLE,"The operation could not be completed")))})),f(u,Vr.EventType.MESSAGE,(e=>{var t;if(!h){const n=e.data[0];Yr(!!n);const r=n,s=r.error||(null===(t=r[0])||void 0===t?void 0:t.error);if(s){zr("Connection","WebChannel received error:",s);const e=s.status;let t=function(e){const t=$o[e];if(void 0!==t)return zo(t)}(e),n=s.message;void 0===t&&(t=es.INTERNAL,n="Unknown error status: "+e+" with message "+s.message),h=!0,d.no(new ts(t,n)),u.close()}else zr("Connection","WebChannel received:",n),d.so(n)}})),f(i,Lr.STAT_EVENT,(e=>{e.stat===Mr.PROXY?zr("Connection","Detected buffering proxy"):e.stat===Mr.NOPROXY&&zr("Connection","Detected no buffering proxy")})),setTimeout((()=>{d.eo()}),0),d}}
/**
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
 */
/**
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
 */function Zl(){return"undefined"!=typeof window?window:null}function eh(){return"undefined"!=typeof document?document:null}
/**
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
 */function th(e){return new _a(e,!0)}class nh{constructor(e,t,n=1e3,r=1.5,s=6e4){this.Yn=e,this.timerId=t,this.fo=n,this._o=r,this.wo=s,this.mo=0,this.yo=null,this.po=Date.now(),this.reset()}reset(){this.mo=0}Io(){this.mo=this.wo}To(e){this.cancel();const t=Math.floor(this.mo+this.Eo()),n=Math.max(0,Date.now()-this.po),r=Math.max(0,t-n);r>0&&zr("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.mo} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.yo=this.Yn.enqueueAfterDelay(this.timerId,r,(()=>(this.po=Date.now(),e()))),this.mo*=this._o,this.mo<this.fo&&(this.mo=this.fo),this.mo>this.wo&&(this.mo=this.wo)}Ao(){null!==this.yo&&(this.yo.skipDelay(),this.yo=null)}cancel(){null!==this.yo&&(this.yo.cancel(),this.yo=null)}Eo(){return(Math.random()-.5)*this.mo}}
/**
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
 */class rh{constructor(e,t,n,r,s,i,o,a){this.Yn=e,this.Ro=n,this.Po=r,this.bo=s,this.authCredentialsProvider=i,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Vo=0,this.vo=null,this.So=null,this.stream=null,this.Do=new nh(e,t)}Co(){return 1===this.state||5===this.state||this.xo()}xo(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.No()}async stop(){this.Co()&&await this.close(0)}ko(){this.state=0,this.Do.reset()}Mo(){this.xo()&&null===this.vo&&(this.vo=this.Yn.enqueueAfterDelay(this.Ro,6e4,(()=>this.Oo())))}Fo(e){this.$o(),this.stream.send(e)}async Oo(){if(this.xo())return this.close(0)}$o(){this.vo&&(this.vo.cancel(),this.vo=null)}Bo(){this.So&&(this.So.cancel(),this.So=null)}async close(e,t){this.$o(),this.Bo(),this.Do.cancel(),this.Vo++,4!==e?this.Do.reset():t&&t.code===es.RESOURCE_EXHAUSTED?(Hr(t.toString()),Hr("Using maximum backoff delay to prevent overloading the backend."),this.Do.Io()):t&&t.code===es.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Lo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Yr(t)}Lo(){}auth(){this.state=1;const e=this.Uo(this.Vo),t=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.Vo===t&&this.qo(e,n)}),(t=>{e((()=>{const e=new ts(es.UNKNOWN,"Fetching auth token failed: "+t.message);return this.Ko(e)}))}))}qo(e,t){const n=this.Uo(this.Vo);this.stream=this.Go(e,t),this.stream.Hr((()=>{n((()=>(this.state=2,this.So=this.Yn.enqueueAfterDelay(this.Po,1e4,(()=>(this.xo()&&(this.state=3),Promise.resolve()))),this.listener.Hr())))})),this.stream.Yr((e=>{n((()=>this.Ko(e)))})),this.stream.onMessage((e=>{n((()=>this.onMessage(e)))}))}No(){this.state=5,this.Do.To((async()=>{this.state=0,this.start()}))}Ko(e){return zr("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Uo(e){return t=>{this.Yn.enqueueAndForget((()=>this.Vo===e?t():(zr("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class sh extends rh{constructor(e,t,n,r,s,i){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,i),this.M=s}Go(e,t){return this.bo.lo("Listen",e,t)}onMessage(e){this.Do.reset();const t=Fa(this.M,e),n=function(e){if(!("targetChange"in e))return vs.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?vs.min():t.readTime?Sa(t.readTime):vs.min()}(e);return this.listener.Qo(t,n)}jo(e){const t={};t.database=Ra(this.M),t.addTarget=function(e,t){let n;const r=t.target;return n=ki(r)?{documents:ja(e,r)}:{query:qa(e,r)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0?n.resumeToken=Ea(e,t.resumeToken):t.snapshotVersion.compareTo(vs.min())>0&&(n.readTime=Ia(e,t.snapshotVersion.toTimestamp())),n}(this.M,e);const n=Ka(this.M,e);n&&(t.labels=n),this.Fo(t)}Wo(e){const t={};t.database=Ra(this.M),t.removeTarget=e,this.Fo(t)}}class ih extends rh{constructor(e,t,n,r,s,i){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,i),this.M=s,this.zo=!1}get Ho(){return this.zo}start(){this.zo=!1,this.lastStreamToken=void 0,super.start()}Lo(){this.zo&&this.Jo([])}Go(e,t){return this.bo.lo("Write",e,t)}onMessage(e){if(Yr(!!e.streamToken),this.lastStreamToken=e.streamToken,this.zo){this.Do.reset();const t=Ba(e.writeResults,e.commitTime),n=Sa(e.commitTime);return this.listener.Yo(n,t)}return Yr(!e.writeResults||0===e.writeResults.length),this.zo=!0,this.listener.Xo()}Zo(){const e={};e.database=Ra(this.M),this.Fo(e)}Jo(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>Va(this.M,e)))};this.Fo(t)}}
/**
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
 */class oh extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.bo=n,this.M=r,this.tu=!1}eu(){if(this.tu)throw new ts(es.FAILED_PRECONDITION,"The client has already been terminated.")}oo(e,t,n){return this.eu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,s])=>this.bo.oo(e,t,n,r,s))).catch((e=>{throw"FirebaseError"===e.name?(e.code===es.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new ts(es.UNKNOWN,e.toString())}))}ho(e,t,n){return this.eu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,s])=>this.bo.ho(e,t,n,r,s))).catch((e=>{throw"FirebaseError"===e.name?(e.code===es.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new ts(es.UNKNOWN,e.toString())}))}terminate(){this.tu=!0}}class ah{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.nu=0,this.su=null,this.iu=!0}ru(){0===this.nu&&(this.ou("Unknown"),this.su=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.su=null,this.uu("Backend didn't respond within 10 seconds."),this.ou("Offline"),Promise.resolve()))))}au(e){"Online"===this.state?this.ou("Unknown"):(this.nu++,this.nu>=1&&(this.cu(),this.uu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ou("Offline")))}set(e){this.cu(),this.nu=0,"Online"===e&&(this.iu=!1),this.ou(e)}ou(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}uu(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.iu?(Hr(t),this.iu=!1):zr("OnlineStateTracker",t)}cu(){null!==this.su&&(this.su.cancel(),this.su=null)}}
/**
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
 */class ch{constructor(e,t,n,r,s){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.hu=[],this.lu=new Map,this.fu=new Set,this.du=[],this._u=s,this._u.Lr((e=>{n.enqueueAndForget((async()=>{yh(this)&&(zr("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=Zr(e);t.fu.add(4),await lh(t),t.wu.set("Unknown"),t.fu.delete(4),await uh(t)}(this))}))})),this.wu=new ah(n,r)}}async function uh(e){if(yh(e))for(const t of e.du)await t(!0)}async function lh(e){for(const t of e.du)await t(!1)}function hh(e,t){const n=Zr(e);n.lu.has(t.targetId)||(n.lu.set(t.targetId,t),gh(n)?mh(n):Lh(n).xo()&&fh(n,t))}function dh(e,t){const n=Zr(e),r=Lh(n);n.lu.delete(t),r.xo()&&ph(n,t),0===n.lu.size&&(r.xo()?r.Mo():yh(n)&&n.wu.set("Unknown"))}function fh(e,t){e.mu.Z(t.targetId),Lh(e).jo(t)}function ph(e,t){e.mu.Z(t),Lh(e).Wo(t)}function mh(e){e.mu=new ga({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),Et:t=>e.lu.get(t)||null}),Lh(e).start(),e.wu.ru()}function gh(e){return yh(e)&&!Lh(e).Co()&&e.lu.size>0}function yh(e){return 0===Zr(e).fu.size}function vh(e){e.mu=void 0}async function wh(e){e.lu.forEach(((t,n)=>{fh(e,t)}))}async function bh(e,t){vh(e),gh(e)?(e.wu.au(t),mh(e)):e.wu.set("Unknown")}async function _h(e,t,n){if(e.wu.set("Online"),t instanceof pa&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.lu.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.lu.delete(r),e.mu.removeTarget(r))}(e,t)}catch(n){zr("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await Ih(e,n)}else if(t instanceof da?e.mu.ut(t):t instanceof fa?e.mu._t(t):e.mu.ht(t),!n.isEqual(vs.min()))try{const t=await ml(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.mu.yt(t);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const s=e.lu.get(r);s&&e.lu.set(r,s.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach((t=>{const n=e.lu.get(t);if(!n)return;e.lu.set(t,n.withResumeToken(As.EMPTY_BYTE_STRING,n.snapshotVersion)),ph(e,t);const r=new $c(n.target,t,1,n.sequenceNumber);fh(e,r)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){zr("RemoteStore","Failed to raise snapshot:",t),await Ih(e,t)}}async function Ih(e,t,n){if(!Oc(t))throw t;e.fu.add(1),await lh(e),e.wu.set("Offline"),n||(n=()=>ml(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{zr("RemoteStore","Retrying IndexedDB access"),await n(),e.fu.delete(1),await uh(e)}))}function Eh(e,t){return t().catch((n=>Ih(e,n,t)))}async function Th(e){const t=Zr(e),n=Mh(t);let r=t.hu.length>0?t.hu[t.hu.length-1].batchId:-1;for(;Sh(t);)try{const e=await vl(t.localStore,r);if(null===e){0===t.hu.length&&n.Mo();break}r=e.batchId,kh(t,e)}catch(e){await Ih(t,e)}Ch(t)&&Ah(t)}function Sh(e){return yh(e)&&e.hu.length<10}function kh(e,t){e.hu.push(t);const n=Mh(e);n.xo()&&n.Ho&&n.Jo(t.mutations)}function Ch(e){return yh(e)&&!Mh(e).Co()&&e.hu.length>0}function Ah(e){Mh(e).start()}async function Nh(e){Mh(e).Zo()}async function xh(e){const t=Mh(e);for(const n of e.hu)t.Jo(n.mutations)}async function Dh(e,t,n){const r=e.hu.shift(),s=jc.from(r,t,n);await Eh(e,(()=>e.remoteSyncer.applySuccessfulWrite(s))),await Th(e)}async function Rh(e,t){t&&Mh(e).Ho&&await async function(e,t){if(n=t.code,Go(n)&&n!==es.ABORTED){const n=e.hu.shift();Mh(e).ko(),await Eh(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await Th(e)}var n}(e,t),Ch(e)&&Ah(e)}async function Oh(e,t){const n=Zr(e);n.asyncQueue.verifyOperationInProgress(),zr("RemoteStore","RemoteStore received new credentials");const r=yh(n);n.fu.add(3),await lh(n),r&&n.wu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.fu.delete(3),await uh(n)}async function Ph(e,t){const n=Zr(e);t?(n.fu.delete(2),await uh(n)):t||(n.fu.add(2),await lh(n),n.wu.set("Unknown"))}function Lh(e){return e.gu||(e.gu=function(e,t,n){const r=Zr(e);return r.eu(),new sh(t,r.bo,r.authCredentials,r.appCheckCredentials,r.M,n)
/**
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
 */}(e.datastore,e.asyncQueue,{Hr:wh.bind(null,e),Yr:bh.bind(null,e),Qo:_h.bind(null,e)}),e.du.push((async t=>{t?(e.gu.ko(),gh(e)?mh(e):e.wu.set("Unknown")):(await e.gu.stop(),vh(e))}))),e.gu}function Mh(e){return e.yu||(e.yu=function(e,t,n){const r=Zr(e);return r.eu(),new ih(t,r.bo,r.authCredentials,r.appCheckCredentials,r.M,n)}(e.datastore,e.asyncQueue,{Hr:Nh.bind(null,e),Yr:Rh.bind(null,e),Xo:xh.bind(null,e),Yo:Dh.bind(null,e)}),e.du.push((async t=>{t?(e.yu.ko(),await Th(e)):(await e.yu.stop(),e.hu.length>0&&(zr("RemoteStore",`Stopping write stream with ${e.hu.length} pending writes`),e.hu=[]))}))),e.yu
/**
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
 */}class Fh{constructor(e,t,n,r,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=s,this.deferred=new ns,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}static createAndSchedule(e,t,n,r,s){const i=Date.now()+n,o=new Fh(e,t,i,r,s);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new ts(es.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Vh(e,t){if(Hr("AsyncQueue",`${t}: ${e}`),Oc(e))return new ts(es.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
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
 */class Uh{constructor(e){this.comparator=e?(t,n)=>e(t,n)||js.comparator(t.key,n.key):(e,t)=>js.comparator(e.key,t.key),this.keyedMap=ra(),this.sortedSet=new Wo(this.comparator)}static emptySet(e){return new Uh(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Uh))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new Uh;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
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
 */class Bh{constructor(){this.pu=new Wo(js.comparator)}track(e){const t=e.doc.key,n=this.pu.get(t);n?0!==e.type&&3===n.type?this.pu=this.pu.insert(t,e):3===e.type&&1!==n.type?this.pu=this.pu.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.pu=this.pu.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.pu=this.pu.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.pu=this.pu.remove(t):1===e.type&&2===n.type?this.pu=this.pu.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.pu=this.pu.insert(t,{type:2,doc:e.doc}):Qr():this.pu=this.pu.insert(t,e)}Iu(){const e=[];return this.pu.inorderTraversal(((t,n)=>{e.push(n)})),e}}class jh{constructor(e,t,n,r,s,i,o,a){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=s,this.fromCache=i,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(e,t,n,r){const s=[];return t.forEach((e=>{s.push({type:0,doc:e})})),new jh(e,t,Uh.emptySet(t),s,n,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&to(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
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
 */class qh{constructor(){this.Tu=void 0,this.listeners=[]}}class $h{constructor(){this.queries=new Ho((e=>no(e)),to),this.onlineState="Unknown",this.Eu=new Set}}async function Kh(e,t){const n=Zr(e),r=t.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new qh),s)try{i.Tu=await n.onListen(r)}catch(e){const n=Vh(e,`Initialization of query '${ro(t.query)}' failed`);return void t.onError(n)}n.queries.set(r,i),i.listeners.push(t),t.Au(n.onlineState),i.Tu&&t.Ru(i.Tu)&&Wh(n)}async function Gh(e,t){const n=Zr(e),r=t.query;let s=!1;const i=n.queries.get(r);if(i){const e=i.listeners.indexOf(t);e>=0&&(i.listeners.splice(e,1),s=0===i.listeners.length)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function zh(e,t){const n=Zr(e);let r=!1;for(const s of t){const e=s.query,t=n.queries.get(e);if(t){for(const e of t.listeners)e.Ru(s)&&(r=!0);t.Tu=s}}r&&Wh(n)}function Hh(e,t,n){const r=Zr(e),s=r.queries.get(t);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(t)}function Wh(e){e.Eu.forEach((e=>{e.next()}))}class Jh{constructor(e,t,n){this.query=e,this.Pu=t,this.bu=!1,this.Vu=null,this.onlineState="Unknown",this.options=n||{}}Ru(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new jh(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let t=!1;return this.bu?this.vu(e)&&(this.Pu.next(e),t=!0):this.Su(e,this.onlineState)&&(this.Du(e),t=!0),this.Vu=e,t}onError(e){this.Pu.error(e)}Au(e){this.onlineState=e;let t=!1;return this.Vu&&!this.bu&&this.Su(this.Vu,e)&&(this.Du(this.Vu),t=!0),t}Su(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return(!this.options.Cu||!n)&&(!e.docs.isEmpty()||"Offline"===t)}vu(e){if(e.docChanges.length>0)return!0;const t=this.Vu&&this.Vu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}Du(e){e=jh.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.bu=!0,this.Pu.next(e)}}
/**
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
 */class Qh{constructor(e,t){this.payload=e,this.byteLength=t}xu(){return"metadata"in this.payload}}
/**
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
 */class Yh{constructor(e){this.M=e}fi(e){return Na(this.M,e)}di(e){return e.metadata.exists?La(this.M,e.document,!1):hi.newNoDocument(this.fi(e.metadata.name),this._i(e.metadata.readTime))}_i(e){return Sa(e)}}class Xh{constructor(e,t,n){this.Nu=e,this.localStore=t,this.M=n,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=Zh(e)}ku(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.payload.namedQuery)this.queries.push(e.payload.namedQuery);else if(e.payload.documentMetadata){this.documents.push({metadata:e.payload.documentMetadata}),e.payload.documentMetadata.exists||++t;const n=Es.fromString(e.payload.documentMetadata.name);this.collectionGroups.add(n.get(n.length-2))}else e.payload.document&&(this.documents[this.documents.length-1].document=e.payload.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}Mu(e){const t=new Map,n=new Yh(this.M);for(const r of e)if(r.metadata.queries){const e=n.fi(r.metadata.name);for(const n of r.metadata.queries){const r=(t.get(n)||aa()).add(e);t.set(n,r)}}return t}async complete(){const e=await Sl(this.localStore,new Yh(this.M),this.documents,this.Nu.id),t=this.Mu(this.documents);for(const n of this.queries)await kl(this.localStore,n,t.get(n.name));return this.progress.taskState="Success",{progress:this.progress,Ou:this.collectionGroups,Fu:e}}}function Zh(e){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}
/**
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
 */class ed{constructor(e){this.key=e}}class td{constructor(e){this.key=e}}class nd{constructor(e,t){this.query=e,this.$u=t,this.Bu=null,this.current=!1,this.Lu=aa(),this.mutatedKeys=aa(),this.Uu=oo(e),this.qu=new Uh(this.Uu)}get Ku(){return this.$u}Gu(e,t){const n=t?t.Qu:new Bh,r=t?t.qu:this.qu;let s=t?t.mutatedKeys:this.mutatedKeys,i=r,o=!1;const a=Hi(this.query)&&r.size===this.query.limit?r.last():null,c=Wi(this.query)&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((e,t)=>{const u=r.get(e),l=so(this.query,t)?t:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;u&&l?u.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.ju(u,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.Uu(l,a)>0||c&&this.Uu(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),f=!0):u&&!l&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(l?(i=i.add(l),s=d?s.add(e):s.delete(e)):(i=i.delete(e),s=s.delete(e)))})),Hi(this.query)||Wi(this.query))for(;i.size>this.query.limit;){const e=Hi(this.query)?i.last():i.first();i=i.delete(e.key),s=s.delete(e.key),n.track({type:1,doc:e})}return{qu:i,Qu:n,ni:o,mutatedKeys:s}}ju(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const r=this.qu;this.qu=e.qu,this.mutatedKeys=e.mutatedKeys;const s=e.Qu.Iu();s.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Qr()}};return n(e)-n(t)}
/**
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
 */(e.type,t.type)||this.Uu(e.doc,t.doc))),this.Wu(n);const i=t?this.zu():[],o=0===this.Lu.size&&this.current?1:0,a=o!==this.Bu;return this.Bu=o,0!==s.length||a?{snapshot:new jh(this.query,e.qu,r,s,e.mutatedKeys,0===o,a,!1),Hu:i}:{Hu:i}}Au(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({qu:this.qu,Qu:new Bh,mutatedKeys:this.mutatedKeys,ni:!1},!1)):{Hu:[]}}Ju(e){return!this.$u.has(e)&&!!this.qu.has(e)&&!this.qu.get(e).hasLocalMutations}Wu(e){e&&(e.addedDocuments.forEach((e=>this.$u=this.$u.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.$u=this.$u.delete(e))),this.current=e.current)}zu(){if(!this.current)return[];const e=this.Lu;this.Lu=aa(),this.qu.forEach((e=>{this.Ju(e.key)&&(this.Lu=this.Lu.add(e.key))}));const t=[];return e.forEach((e=>{this.Lu.has(e)||t.push(new td(e))})),this.Lu.forEach((n=>{e.has(n)||t.push(new ed(n))})),t}Yu(e){this.$u=e.li,this.Lu=aa();const t=this.Gu(e.documents);return this.applyChanges(t,!0)}Xu(){return jh.fromInitialDocuments(this.query,this.qu,this.mutatedKeys,0===this.Bu)}}class rd{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class sd{constructor(e){this.key=e,this.Zu=!1}}class id{constructor(e,t,n,r,s,i){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=i,this.ta={},this.ea=new Ho((e=>no(e)),to),this.na=new Map,this.sa=new Set,this.ia=new Wo(js.comparator),this.ra=new Map,this.oa=new Nl,this.ua={},this.aa=new Map,this.ca=Lu.yn(),this.onlineState="Unknown",this.ha=void 0}get isPrimaryClient(){return!0===this.ha}}async function od(e,t){const n=Ld(e);let r,s;const i=n.ea.get(t);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Xu();else{const e=await wl(n.localStore,Zi(t));n.isPrimaryClient&&hh(n.remoteStore,e);const i=n.sharedClientState.addLocalQueryTarget(e.targetId);r=e.targetId,s=await ad(n,t,r,"current"===i)}return s}async function ad(e,t,n,r){e.la=(t,n,r)=>async function(e,t,n,r){let s=t.view.Gu(n);s.ni&&(s=await _l(e.localStore,t.query,!1).then((({documents:e})=>t.view.Gu(e,s))));const i=r&&r.targetChanges.get(t.targetId),o=t.view.applyChanges(s,e.isPrimaryClient,i);return bd(e,t.targetId,o.Hu),o.snapshot}(e,t,n,r);const s=await _l(e.localStore,t,!0),i=new nd(t,s.li),o=i.Gu(s.documents),a=ha.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState),c=i.applyChanges(o,e.isPrimaryClient,a);bd(e,n,c.Hu);const u=new rd(t,n,i);return e.ea.set(t,u),e.na.has(n)?e.na.get(n).push(t):e.na.set(n,[t]),c.snapshot}async function cd(e,t){const n=Zr(e),r=n.ea.get(t),s=n.na.get(r.targetId);if(s.length>1)return n.na.set(r.targetId,s.filter((e=>!to(e,t)))),void n.ea.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await bl(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),dh(n.remoteStore,r.targetId),vd(n,r.targetId)})).catch(Bu)):(vd(n,r.targetId),await bl(n.localStore,r.targetId,!0))}async function ud(e,t,n){const r=Md(e);try{const e=await function(e,t){const n=Zr(e),r=ys.now(),s=t.reduce(((e,t)=>e.add(t.key)),aa());let i;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>n.ci.Ks(e,s).next((s=>{i=s;const o=[];for(const e of t){const t=Ro(e,i.get(e.key));null!=t&&o.push(new Mo(e.key,t,li(t.value.mapValue),Co.exists(!0)))}return n.Bs.addMutationBatch(e,r,o,t)})))).then((e=>(e.applyToLocalDocumentSet(i),{batchId:e.batchId,changes:i})))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.ua[e.currentUser.toKey()];r||(r=new Wo(ps)),r=r.insert(t,n),e.ua[e.currentUser.toKey()]=r}(r,e.batchId,n),await Ed(r,e.changes),await Th(r.remoteStore)}catch(e){const t=Vh(e,"Failed to persist write");n.reject(t)}}async function ld(e,t){const n=Zr(e);try{const e=await gl(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const r=n.ra.get(t);r&&(Yr(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.Zu=!0:e.modifiedDocuments.size>0?Yr(r.Zu):e.removedDocuments.size>0&&(Yr(r.Zu),r.Zu=!1))})),await Ed(n,e,t)}catch(e){await Bu(e)}}function hd(e,t,n){const r=Zr(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.ea.forEach(((n,r)=>{const s=r.view.Au(t);s.snapshot&&e.push(s.snapshot)})),function(e,t){const n=Zr(e);n.onlineState=t;let r=!1;n.queries.forEach(((e,n)=>{for(const s of n.listeners)s.Au(t)&&(r=!0)})),r&&Wh(n)}(r.eventManager,t),e.length&&r.ta.Qo(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function dd(e,t,n){const r=Zr(e);r.sharedClientState.updateQueryState(t,"rejected",n);const s=r.ra.get(t),i=s&&s.key;if(i){let e=new Wo(js.comparator);e=e.insert(i,hi.newNoDocument(i,vs.min()));const n=aa().add(i),s=new la(vs.min(),new Map,new Yo(ps),e,n);await ld(r,s),r.ia=r.ia.remove(i),r.ra.delete(t),Id(r)}else await bl(r.localStore,t,!1).then((()=>vd(r,t,n))).catch(Bu)}async function fd(e,t){const n=Zr(e),r=t.batch.batchId;try{const e=await pl(n.localStore,t);yd(n,r,null),gd(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ed(n,e)}catch(e){await Bu(e)}}async function pd(e,t,n){const r=Zr(e);try{const e=await function(e,t){const n=Zr(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let r;return n.Bs.lookupMutationBatch(e,t).next((t=>(Yr(null!==t),r=t.keys(),n.Bs.removeMutationBatch(e,t)))).next((()=>n.Bs.performConsistencyCheck(e))).next((()=>n.ci.Ks(e,r)))}))}(r.localStore,t);yd(r,t,n),gd(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await Ed(r,e)}catch(n){await Bu(n)}}async function md(e,t){const n=Zr(e);yh(n.remoteStore)||zr("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const e=await function(e){const t=Zr(e);return t.persistence.runTransaction("Get highest unacknowledged batch id","readonly",(e=>t.Bs.getHighestUnacknowledgedBatchId(e)))}(n.localStore);if(-1===e)return void t.resolve();const r=n.aa.get(e)||[];r.push(t),n.aa.set(e,r)}catch(e){const n=Vh(e,"Initialization of waitForPendingWrites() operation failed");t.reject(n)}}function gd(e,t){(e.aa.get(t)||[]).forEach((e=>{e.resolve()})),e.aa.delete(t)}function yd(e,t,n){const r=Zr(e);let s=r.ua[r.currentUser.toKey()];if(s){const e=s.get(t);e&&(n?e.reject(n):e.resolve(),s=s.remove(t)),r.ua[r.currentUser.toKey()]=s}}function vd(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.na.get(t))e.ea.delete(r),n&&e.ta.fa(r,n);e.na.delete(t),e.isPrimaryClient&&e.oa.Pi(t).forEach((t=>{e.oa.containsKey(t)||wd(e,t)}))}function wd(e,t){e.sa.delete(t.path.canonicalString());const n=e.ia.get(t);null!==n&&(dh(e.remoteStore,n),e.ia=e.ia.remove(t),e.ra.delete(n),Id(e))}function bd(e,t,n){for(const r of n)r instanceof ed?(e.oa.addReference(r.key,t),_d(e,r)):r instanceof td?(zr("SyncEngine","Document no longer in limbo: "+r.key),e.oa.removeReference(r.key,t),e.oa.containsKey(r.key)||wd(e,r.key)):Qr()}function _d(e,t){const n=t.key,r=n.path.canonicalString();e.ia.get(n)||e.sa.has(r)||(zr("SyncEngine","New document in limbo: "+n),e.sa.add(r),Id(e))}function Id(e){for(;e.sa.size>0&&e.ia.size<e.maxConcurrentLimboResolutions;){const t=e.sa.values().next().value;e.sa.delete(t);const n=new js(Es.fromString(t)),r=e.ca.next();e.ra.set(r,new sd(n)),e.ia=e.ia.insert(n,r),hh(e.remoteStore,new $c(Zi(zi(n.path)),r,2,hs.A))}}async function Ed(e,t,n){const r=Zr(e),s=[],i=[],o=[];r.ea.isEmpty()||(r.ea.forEach(((e,a)=>{o.push(r.la(a,t,n).then((e=>{if(e){r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,e.fromCache?"not-current":"current"),s.push(e);const t=ul.Ys(a.targetId,e);i.push(t)}})))})),await Promise.all(o),r.ta.Qo(s),await async function(e,t){const n=Zr(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>Ac.forEach(t,(t=>Ac.forEach(t.Hs,(r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r))).next((()=>Ac.forEach(t.Js,(r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))))))}catch(e){if(!Oc(e))throw e;zr("LocalStore","Failed to update sequence numbers: "+e)}for(const r of t){const e=r.targetId;if(!r.fromCache){const t=n.ii.get(e),r=t.snapshotVersion,s=t.withLastLimboFreeSnapshotVersion(r);n.ii=n.ii.insert(e,s)}}}(r.localStore,i))}async function Td(e,t){const n=Zr(e);if(!n.currentUser.isEqual(t)){zr("SyncEngine","User change. New user:",t.toKey());const e=await fl(n.localStore,t);n.currentUser=t,function(e,t){e.aa.forEach((e=>{e.forEach((e=>{e.reject(new ts(es.CANCELLED,t))}))})),e.aa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await Ed(n,e.hi)}}function Sd(e,t){const n=Zr(e),r=n.ra.get(t);if(r&&r.Zu)return aa().add(r.key);{let e=aa();const r=n.na.get(t);if(!r)return e;for(const t of r){const r=n.ea.get(t);e=e.unionWith(r.view.Ku)}return e}}async function kd(e,t){const n=Zr(e),r=await _l(n.localStore,t.query,!0),s=t.view.Yu(r);return n.isPrimaryClient&&bd(n,t.targetId,s.Hu),s}async function Cd(e,t){const n=Zr(e);return El(n.localStore,t).then((e=>Ed(n,e)))}async function Ad(e,t,n,r){const s=Zr(e),i=await function(e,t){const n=Zr(e),r=Zr(n.Bs);return n.persistence.runTransaction("Lookup mutation documents","readonly",(e=>r.fn(e,t).next((t=>t?n.ci.Ks(e,t):Ac.resolve(null)))))}(s.localStore,t);null!==i?("pending"===n?await Th(s.remoteStore):"acknowledged"===n||"rejected"===n?(yd(s,t,r||null),gd(s,t),function(e,t){Zr(Zr(e).Bs)._n(t)}(s.localStore,t)):Qr(),await Ed(s,i)):zr("SyncEngine","Cannot apply mutation batch with id: "+t)}async function Nd(e,t){const n=Zr(e);if(Ld(n),Md(n),!0===t&&!0!==n.ha){const e=n.sharedClientState.getAllActiveQueryTargets(),t=await xd(n,e.toArray());n.ha=!0,await Ph(n.remoteStore,!0);for(const r of t)hh(n.remoteStore,r)}else if(!1===t&&!1!==n.ha){const e=[];let t=Promise.resolve();n.na.forEach(((r,s)=>{n.sharedClientState.isLocalQueryTarget(s)?e.push(s):t=t.then((()=>(vd(n,s),bl(n.localStore,s,!0)))),dh(n.remoteStore,s)})),await t,await xd(n,e),function(e){const t=Zr(e);t.ra.forEach(((e,n)=>{dh(t.remoteStore,n)})),t.oa.bi(),t.ra=new Map,t.ia=new Wo(js.comparator)}(n),n.ha=!1,await Ph(n.remoteStore,!1)}}async function xd(e,t,n){const r=Zr(e),s=[],i=[];for(const o of t){let e;const t=r.na.get(o);if(t&&0!==t.length){e=await wl(r.localStore,Zi(t[0]));for(const e of t){const t=r.ea.get(e),n=await kd(r,t);n.snapshot&&i.push(n.snapshot)}}else{const t=await Il(r.localStore,o);e=await wl(r.localStore,t),await ad(r,Dd(t),o,!1)}s.push(e)}return r.ta.Qo(i),s}function Dd(e){return Gi(e.path,e.collectionGroup,e.orderBy,e.filters,e.limit,"F",e.startAt,e.endAt)}function Rd(e){const t=Zr(e);return Zr(Zr(t.localStore).persistence).Fs()}async function Od(e,t,n,r){const s=Zr(e);if(s.ha)return void zr("SyncEngine","Ignoring unexpected query state notification.");const i=s.na.get(t);if(i&&i.length>0)switch(n){case"current":case"not-current":{const e=await El(s.localStore,io(i[0])),r=la.createSynthesizedRemoteEventForCurrentChange(t,"current"===n);await Ed(s,e,r);break}case"rejected":await bl(s.localStore,t,!0),vd(s,t,r);break;default:Qr()}}async function Pd(e,t,n){const r=Ld(e);if(r.ha){for(const e of t){if(r.na.has(e)){zr("SyncEngine","Adding an already active target "+e);continue}const t=await Il(r.localStore,e),n=await wl(r.localStore,t);await ad(r,Dd(t),n.targetId,!1),hh(r.remoteStore,n)}for(const e of n)r.na.has(e)&&await bl(r.localStore,e,!1).then((()=>{dh(r.remoteStore,e),vd(r,e)})).catch(Bu)}}function Ld(e){const t=Zr(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=ld.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Sd.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=dd.bind(null,t),t.ta.Qo=zh.bind(null,t.eventManager),t.ta.fa=Hh.bind(null,t.eventManager),t}function Md(e){const t=Zr(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=fd.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=pd.bind(null,t),t}function Fd(e,t,n){const r=Zr(e);(async function(e,t,n){try{const r=await t.getMetadata();if(await function(e,t){const n=Zr(e),r=Sa(t.createTime);return n.persistence.runTransaction("hasNewerBundle","readonly",(e=>n._s.getBundleMetadata(e,t.id))).then((e=>!!e&&e.createTime.compareTo(r)>=0))}(e.localStore,r))return await t.close(),n._completeWith(function(e){return{taskState:"Success",documentsLoaded:e.totalDocuments,bytesLoaded:e.totalBytes,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}(r)),Promise.resolve(new Set);n._updateProgress(Zh(r));const s=new Xh(r,e.localStore,t.M);let i=await t.da();for(;i;){const e=await s.ku(i);e&&n._updateProgress(e),i=await t.da()}const o=await s.complete();return await Ed(e,o.Fu,void 0),await function(e,t){const n=Zr(e);return n.persistence.runTransaction("Save bundle","readwrite",(e=>n._s.saveBundleMetadata(e,t)))}(e.localStore,r),n._completeWith(o.progress),Promise.resolve(o.Ou)}catch(e){return Wr("SyncEngine",`Loading bundle failed with ${e}`),n._failWith(e),Promise.resolve(new Set)}}
/**
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
 */)(r,t,n).then((e=>{r.sharedClientState.notifyBundleLoaded(e)}))}class Vd{constructor(){this.synchronizeTabs=!1}async initialize(e){this.M=th(e.databaseInfo.databaseId),this.sharedClientState=this._a(e),this.persistence=this.wa(e),await this.persistence.start(),this.gcScheduler=this.ma(e),this.localStore=this.ga(e)}ma(e){return null}ga(e){return dl(this.persistence,new ll,e.initialUser,this.M)}wa(e){return new Ll(Fl.zi,this.M)}_a(e){return new Hl}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Ud extends Vd{constructor(e,t,n){super(),this.ya=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.ya.initialize(this,e),await Md(this.ya.syncEngine),await Th(this.ya.remoteStore),await this.persistence.Ts((()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(this.localStore),Promise.resolve())))}ga(e){return dl(this.persistence,new ll,e.initialUser,this.M)}ma(e){const t=this.persistence.referenceDelegate.garbageCollector;return new $u(t,e.asyncQueue)}wa(e){const t=al(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=void 0!==this.cacheSizeBytes?Cu.withCacheSize(this.cacheSizeBytes):Cu.DEFAULT;return new sl(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,Zl(),eh(),this.M,this.sharedClientState,!!this.forceOwnership)}_a(e){return new Hl}}class Bd extends Ud{constructor(e,t){super(e,t,!1),this.ya=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.ya.syncEngine;this.sharedClientState instanceof zl&&(this.sharedClientState.syncEngine={Mr:Ad.bind(null,t),Or:Od.bind(null,t),Fr:Pd.bind(null,t),Fs:Rd.bind(null,t),kr:Cd.bind(null,t)},await this.sharedClientState.start()),await this.persistence.Ts((async e=>{await Nd(this.ya.syncEngine,e),this.gcScheduler&&(e&&!this.gcScheduler.started?this.gcScheduler.start(this.localStore):e||this.gcScheduler.stop())}))}_a(e){const t=Zl();if(!zl.vt(t))throw new ts(es.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=al(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new zl(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class jd{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>hd(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=Td.bind(null,this.syncEngine),await Ph(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new $h}createDatastore(e){const t=th(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new Xl(r));var r;return function(e,t,n,r){return new oh(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,r=e.asyncQueue,s=e=>hd(this.syncEngine,e,0),i=Jl.vt()?new Jl:new Wl,new ch(t,n,r,s,i);var t,n,r,s,i}createSyncEngine(e,t){return function(e,t,n,r,s,i,o){const a=new id(e,t,n,r,s,i);return o&&(a.ha=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=Zr(e);zr("RemoteStore","RemoteStore shutting down."),t.fu.add(5),await lh(t),t._u.shutdown(),t.wu.set("Unknown")}(this.remoteStore)}}
/**
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
 */function qd(e,t=10240){let n=0;return{async read(){if(n<e.byteLength){const r={value:e.slice(n,n+t),done:!1};return n+=t,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.reject("unimplemented")}}
/**
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
 */
/**
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
 */class $d{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.pa(this.observer.next,e)}error(e){this.observer.error?this.pa(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}Ia(){this.muted=!0}pa(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}}
/**
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
 */class Kd{constructor(e,t){this.Ta=e,this.M=t,this.metadata=new ns,this.buffer=new Uint8Array,this.Ea=new TextDecoder("utf-8"),this.Aa().then((e=>{e&&e.xu()?this.metadata.resolve(e.payload.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is\n             ${JSON.stringify(null==e?void 0:e.payload)}`))}),(e=>this.metadata.reject(e)))}close(){return this.Ta.cancel()}async getMetadata(){return this.metadata.promise}async da(){return await this.getMetadata(),this.Aa()}async Aa(){const e=await this.Ra();if(null===e)return null;const t=this.Ea.decode(e),n=Number(t);isNaN(n)&&this.Pa(`length string (${t}) is not valid number`);const r=await this.ba(n);return new Qh(JSON.parse(r),e.length+n)}Va(){return this.buffer.findIndex((e=>e==="{".charCodeAt(0)))}async Ra(){for(;this.Va()<0;)if(await this.va())break;if(0===this.buffer.length)return null;const e=this.Va();e<0&&this.Pa("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async ba(e){for(;this.buffer.length<e;)await this.va()&&this.Pa("Reached the end of bundle when more is expected.");const t=this.Ea.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}Pa(e){throw this.Ta.cancel(),new Error(`Invalid bundle format: ${e}`)}async va(){const e=await this.Ta.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}
/**
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
 */class Gd{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new ts(es.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const t=await async function(e,t){const n=Zr(e),r=Ra(n.M)+"/documents",s={documents:t.map((e=>Aa(n.M,e)))},i=await n.ho("BatchGetDocuments",r,s),o=new Map;i.forEach((e=>{const t=Ma(n.M,e);o.set(t.key.toString(),t)}));const a=[];return t.forEach((e=>{const t=o.get(e.toString());Yr(!!t),a.push(t)})),a}(this.datastore,e);return t.forEach((e=>this.recordVersion(e))),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(e){this.lastWriteError=e}this.writtenDocs.add(e.toString())}delete(e){this.write(new Bo(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach((t=>{e.delete(t.key.toString())})),e.forEach(((e,t)=>{const n=js.fromPath(t);this.mutations.push(new jo(n,this.precondition(n)))})),await async function(e,t){const n=Zr(e),r=Ra(n.M)+"/documents",s={writes:t.map((e=>Va(n.M,e)))};await n.oo("Commit",r,s)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw Qr();t=vs.min()}const n=this.readVersions.get(e.key.toString());if(n){if(!t.isEqual(n))throw new ts(es.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?Co.updateTime(t):Co.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(vs.min()))throw new ts(es.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Co.updateTime(t)}return Co.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}
/**
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
 */class zd{constructor(e,t,n,r){this.asyncQueue=e,this.datastore=t,this.updateFunction=n,this.deferred=r,this.Sa=5,this.Do=new nh(this.asyncQueue,"transaction_retry")}run(){this.Sa-=1,this.Da()}Da(){this.Do.To((async()=>{const e=new Gd(this.datastore),t=this.Ca(e);t&&t.then((t=>{this.asyncQueue.enqueueAndForget((()=>e.commit().then((()=>{this.deferred.resolve(t)})).catch((e=>{this.xa(e)}))))})).catch((e=>{this.xa(e)}))}))}Ca(e){try{const t=this.updateFunction(e);return!Vs(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}xa(e){this.Sa>0&&this.Na(e)?(this.Sa-=1,this.asyncQueue.enqueueAndForget((()=>(this.Da(),Promise.resolve())))):this.deferred.reject(e)}Na(e){if("FirebaseError"===e.name){const t=e.code;return"aborted"===t||"failed-precondition"===t||!Go(t)}return!1}}
/**
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
 */class Hd{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=jr.UNAUTHENTICATED,this.clientId=fs.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{zr("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(zr("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ts(es.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ns;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Vh(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function Wd(e,t){e.asyncQueue.verifyOperationInProgress(),zr("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener((async e=>{r.isEqual(e)||(await fl(t.localStore,e),r=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e.offlineComponents=t}async function Jd(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Qd(e);zr("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener((e=>Oh(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>Oh(t.remoteStore,n))),e.onlineComponents=t}async function Qd(e){return e.offlineComponents||(zr("FirestoreClient","Using default OfflineComponentProvider"),await Wd(e,new Vd)),e.offlineComponents}async function Yd(e){return e.onlineComponents||(zr("FirestoreClient","Using default OnlineComponentProvider"),await Jd(e,new jd)),e.onlineComponents}function Xd(e){return Qd(e).then((e=>e.persistence))}function Zd(e){return Qd(e).then((e=>e.localStore))}function ef(e){return Yd(e).then((e=>e.remoteStore))}function tf(e){return Yd(e).then((e=>e.syncEngine))}async function nf(e){const t=await Yd(e),n=t.eventManager;return n.onListen=od.bind(null,t.syncEngine),n.onUnlisten=cd.bind(null,t.syncEngine),n}function rf(e){return e.asyncQueue.enqueue((async()=>{const t=await Xd(e),n=await ef(e);return t.setNetworkEnabled(!0),function(e){const t=Zr(e);return t.fu.delete(0),uh(t)}(n)}))}function sf(e){return e.asyncQueue.enqueue((async()=>{const t=await Xd(e),n=await ef(e);return t.setNetworkEnabled(!1),async function(e){const t=Zr(e);t.fu.add(0),await lh(t),t.wu.set("Offline")}(n)}))}function of(e,t){const n=new ns;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){try{const r=await function(e,t){const n=Zr(e);return n.persistence.runTransaction("read document","readonly",(e=>n.ci.Ls(e,t)))}(e,t);r.isFoundDocument()?n.resolve(r):r.isNoDocument()?n.resolve(null):n.reject(new ts(es.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(e){const r=Vh(e,`Failed to get document '${t} from cache`);n.reject(r)}}(await Zd(e),t,n))),n.promise}function af(e,t,n={}){const r=new ns;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,s){const i=new $d({next:i=>{t.enqueueAndForget((()=>Gh(e,o)));const a=i.docs.has(n);!a&&i.fromCache?s.reject(new ts(es.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&i.fromCache&&r&&"server"===r.source?s.reject(new ts(es.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):s.resolve(i)},error:e=>s.reject(e)}),o=new Jh(zi(n.path),i,{includeMetadataChanges:!0,Cu:!0});return Kh(e,o)}(await nf(e),e.asyncQueue,t,n,r))),r.promise}function cf(e,t){const n=new ns;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){try{const r=await _l(e,t,!0),s=new nd(t,r.li),i=s.Gu(r.documents),o=s.applyChanges(i,!1);n.resolve(o.snapshot)}catch(e){const r=Vh(e,`Failed to execute query '${t} against cache`);n.reject(r)}}(await Zd(e),t,n))),n.promise}function uf(e,t,n={}){const r=new ns;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,s){const i=new $d({next:n=>{t.enqueueAndForget((()=>Gh(e,o))),n.fromCache&&"server"===r.source?s.reject(new ts(es.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):s.resolve(n)},error:e=>s.reject(e)}),o=new Jh(n,i,{includeMetadataChanges:!0,Cu:!0});return Kh(e,o)}(await nf(e),e.asyncQueue,t,n,r))),r.promise}function lf(e,t){const n=new $d(t);return e.asyncQueue.enqueueAndForget((async()=>function(e,t){Zr(e).Eu.add(t),t.next()}(await nf(e),n))),()=>{n.Ia(),e.asyncQueue.enqueueAndForget((async()=>function(e,t){Zr(e).Eu.delete(t)}(await nf(e),n)))}}function hf(e,t){const n=new ns;return e.asyncQueue.enqueueAndForget((async()=>{const r=await function(e){return Yd(e).then((e=>e.datastore))}(e);new zd(e.asyncQueue,r,t,n).run()})),n.promise}function df(e,t,n,r){const s=function(e,t){let n;return n="string"==typeof e?(new TextEncoder).encode(e):e,function(e,t){return new Kd(e,t)}(function(e,t){if(e instanceof Uint8Array)return qd(e,t);if(e instanceof ArrayBuffer)return qd(new Uint8Array(e),t);if(e instanceof ReadableStream)return e.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(n),t)}
/**
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
 */(n,th(t));e.asyncQueue.enqueueAndForget((async()=>{Fd(await tf(e),s,r)}))}function ff(e,t){return e.asyncQueue.enqueue((async()=>function(e,t){const n=Zr(e);return n.persistence.runTransaction("Get named query","readonly",(e=>n._s.getNamedQuery(e,t)))}(await Zd(e),t)))}const pf=new Map;
/**
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
 */function mf(e,t,n){if(!n)throw new ts(es.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function gf(e,t,n,r){if(!0===t&&!0===r)throw new ts(es.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function yf(e){if(!js.isDocumentKey(e))throw new ts(es.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function vf(e){if(js.isDocumentKey(e))throw new ts(es.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function wf(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":Qr()}function bf(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new ts(es.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=wf(e);throw new ts(es.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}function _f(e,t){if(t<=0)throw new ts(es.INVALID_ARGUMENT,`Function ${e}() requires a positive number, but it was: ${t}.`)}
/**
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
 */class If{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new ts(es.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new ts(es.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,gf("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}
/**
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
 */class Ef{constructor(e,t,n){this._authCredentials=t,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new If({}),this._settingsFrozen=!1,e instanceof Fs?this._databaseId=e:(this._app=e,this._databaseId=function(e){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new ts(es.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Fs(e.options.projectId)}(e))}get app(){if(!this._app)throw new ts(es.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new ts(es.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new If(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new ss;switch(e.type){case"gapi":const t=e.client;return Yr(!("object"!=typeof t||null===t||!t.auth||!t.auth.getAuthHeaderValueForFirstParty)),new cs(t,e.sessionIndex||"0",e.iamToken||null);case"provider":return e.client;default:throw new ts(es.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=pf.get(e);t&&(zr("ComponentProvider","Removing Datastore"),pf.delete(e),t.terminate())}(this),Promise.resolve()}}function Tf(e,t,n,r={}){var s;const i=(e=bf(e,Ef))._getSettings();if("firestore.googleapis.com"!==i.host&&i.host!==t&&Wr("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},i),{host:`${t}:${n}`,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=jr.MOCK_USER;else{t=(0,c.Sg)(r.mockUserToken,null===(s=e._app)||void 0===s?void 0:s.options.projectId);const i=r.mockUserToken.sub||r.mockUserToken.user_id;if(!i)throw new ts(es.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new jr(i)}e._authCredentials=new is(new rs(t,n))}}
/**
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
 */class Sf{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Cf(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Sf(this.firestore,e,this._key)}}class kf{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new kf(this.firestore,e,this._query)}}class Cf extends kf{constructor(e,t,n){super(e,t,zi(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Sf(this.firestore,null,new js(e))}withConverter(e){return new Cf(this.firestore,e,this._path)}}function Af(e,t,...n){if(e=(0,c.m9)(e),mf("collection","path",t),e instanceof Ef){const r=Es.fromString(t,...n);return vf(r),new Cf(e,null,r)}{if(!(e instanceof Sf||e instanceof Cf))throw new ts(es.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Es.fromString(t,...n));return vf(r),new Cf(e.firestore,null,r)}}function Nf(e,t){if(e=bf(e,Ef),mf("collectionGroup","collection id",t),t.indexOf("/")>=0)throw new ts(es.INVALID_ARGUMENT,`Invalid collection ID '${t}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new kf(e,null,function(e){return new Ki(Es.emptyPath(),e)}(t))}function xf(e,t,...n){if(e=(0,c.m9)(e),1===arguments.length&&(t=fs.R()),mf("doc","path",t),e instanceof Ef){const r=Es.fromString(t,...n);return yf(r),new Sf(e,null,new js(r))}{if(!(e instanceof Sf||e instanceof Cf))throw new ts(es.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Es.fromString(t,...n));return yf(r),new Sf(e.firestore,e instanceof Cf?e.converter:null,new js(r))}}function Df(e,t){return e=(0,c.m9)(e),t=(0,c.m9)(t),(e instanceof Sf||e instanceof Cf)&&(t instanceof Sf||t instanceof Cf)&&e.firestore===t.firestore&&e.path===t.path&&e.converter===t.converter}function Rf(e,t){return e=(0,c.m9)(e),t=(0,c.m9)(t),e instanceof kf&&t instanceof kf&&e.firestore===t.firestore&&to(e._query,t._query)&&e.converter===t.converter
/**
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
 */}class Of{constructor(){this.ka=Promise.resolve(),this.Ma=[],this.Oa=!1,this.Fa=[],this.$a=null,this.Ba=!1,this.La=!1,this.Ua=[],this.Do=new nh(this,"async_queue_retry"),this.qa=()=>{const e=eh();e&&zr("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Do.Ao()};const e=eh();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.qa)}get isShuttingDown(){return this.Oa}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Ka(),this.Ga(e)}enterRestrictedMode(e){if(!this.Oa){this.Oa=!0,this.La=e||!1;const t=eh();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.qa)}}enqueue(e){if(this.Ka(),this.Oa)return new Promise((()=>{}));const t=new ns;return this.Ga((()=>this.Oa&&this.La?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Ma.push(e),this.Qa())))}async Qa(){if(0!==this.Ma.length){try{await this.Ma[0](),this.Ma.shift(),this.Do.reset()}catch(E){if(!Oc(E))throw E;zr("AsyncQueue","Operation failed with retryable error: "+E)}this.Ma.length>0&&this.Do.To((()=>this.Qa()))}}Ga(e){const t=this.ka.then((()=>(this.Ba=!0,e().catch((e=>{this.$a=e,this.Ba=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
/**
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
 */(e);throw Hr("INTERNAL UNHANDLED ERROR: ",t),e})).then((e=>(this.Ba=!1,e))))));return this.ka=t,t}enqueueAfterDelay(e,t,n){this.Ka(),this.Ua.indexOf(e)>-1&&(t=0);const r=Fh.createAndSchedule(this,e,t,n,(e=>this.ja(e)));return this.Fa.push(r),r}Ka(){this.$a&&Qr()}verifyOperationInProgress(){}async Wa(){let e;do{e=this.ka,await e}while(e!==this.ka)}za(e){for(const t of this.Fa)if(t.timerId===e)return!0;return!1}Ha(e){return this.Wa().then((()=>{this.Fa.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.Fa)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Wa()}))}Ja(e){this.Ua.push(e)}ja(e){const t=this.Fa.indexOf(e);this.Fa.splice(t,1)}}function Pf(e){return function(e,t){if("object"!=typeof e||null===e)return!1;const n=e;for(const r of t)if(r in n&&"function"==typeof n[r])return!0;return!1}
/**
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
 */(e,["next","error","complete"])}class Lf{constructor(){this._progressObserver={},this._taskCompletionResolver=new ns,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,n){this._progressObserver={next:e,error:t,complete:n}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}
/**
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
 */const Mf=-1;class Ff extends Ef{constructor(e,t,n){super(e,t,n),this.type="firestore",this._queue=new Of,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Uf(this),this._firestoreClient.terminate()}}function Vf(e){return e._firestoreClient||Uf(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Uf(e){var t;const n=e._freezeSettings(),r=function(e,t,n,r){return new Ms(e,t,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new Hd(e._authCredentials,e._appCheckCredentials,e._queue,r)}function Bf(e,t){Jf(e=bf(e,Ff));const n=Vf(e),r=e._freezeSettings(),s=new jd;return qf(n,s,new Ud(s,r.cacheSizeBytes,null==t?void 0:t.forceOwnership))}function jf(e){Jf(e=bf(e,Ff));const t=Vf(e),n=e._freezeSettings(),r=new jd;return qf(t,r,new Bd(r,n.cacheSizeBytes))}function qf(e,t,n){const r=new ns;return e.asyncQueue.enqueue((async()=>{try{await Wd(e,n),await Jd(e,t),r.resolve()}catch(e){if(!function(e){return"FirebaseError"===e.name?e.code===es.FAILED_PRECONDITION||e.code===es.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||(22===e.code||20===e.code||11===e.code)}(e))throw e;console.warn("Error enabling offline persistence. Falling back to persistence disabled: "+e),r.reject(e)}})).then((()=>r.promise))}function $f(e){if(e._initialized&&!e._terminated)throw new ts(es.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const t=new ns;return e._queue.enqueueAndForgetEvenWhileRestricted((async()=>{try{await async function(e){if(!xc.vt())return Promise.resolve();const t=e+"main";await xc.delete(t)}(al(e._databaseId,e._persistenceKey)),t.resolve()}catch(e){t.reject(e)}})),t.promise}function Kf(e){return function(e){const t=new ns;return e.asyncQueue.enqueueAndForget((async()=>md(await tf(e),t))),t.promise}(Vf(e=bf(e,Ff)))}function Gf(e){return rf(Vf(e=bf(e,Ff)))}function zf(e){return sf(Vf(e=bf(e,Ff)))}function Hf(e,t){const n=Vf(e=bf(e,Ff)),r=new Lf;return df(n,e._databaseId,t,r),r}function Wf(e,t){return ff(Vf(e=bf(e,Ff)),t).then((t=>t?new kf(e,null,t.query):null))}function Jf(e){if(e._initialized||e._terminated)throw new ts(es.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}
/**
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
 */
/**
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
 */class Qf{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new ts(es.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ss(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
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
 */
class Yf{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Yf(As.fromBase64String(e))}catch(e){throw new ts(es.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new Yf(As.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
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
 */class Xf{constructor(e){this._methodName=e}}
/**
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
 */class Zf{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ts(es.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ts(es.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ps(this._lat,e._lat)||ps(this._long,e._long)}}
/**
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
 */const ep=/^__.*__$/;class tp{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new Mo(e,this.data,this.fieldMask,t,this.fieldTransforms):new Lo(e,this.data,t,this.fieldTransforms)}}class np{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new Mo(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function rp(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Qr()}}class sp{constructor(e,t,n,r,s,i){this.settings=e,this.databaseId=t,this.M=n,this.ignoreUndefinedProperties=r,void 0===s&&this.Ya(),this.fieldTransforms=s||[],this.fieldMask=i||[]}get path(){return this.settings.path}get Xa(){return this.settings.Xa}Za(e){return new sp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.M,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}tc(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Za({path:n,ec:!1});return r.nc(e),r}sc(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Za({path:n,ec:!1});return r.Ya(),r}ic(e){return this.Za({path:void 0,ec:!0})}rc(e){return Tp(e,this.settings.methodName,this.settings.oc||!1,this.path,this.settings.uc)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}Ya(){if(this.path)for(let e=0;e<this.path.length;e++)this.nc(this.path.get(e))}nc(e){if(0===e.length)throw this.rc("Document fields must not be empty");if(rp(this.Xa)&&ep.test(e))throw this.rc('Document fields cannot begin and end with "__"')}}class ip{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.M=n||th(e)}ac(e,t,n,r=!1){return new sp({Xa:e,methodName:t,uc:n,path:Ss.emptyPath(),ec:!1,oc:r},this.databaseId,this.M,this.ignoreUndefinedProperties)}}function op(e){const t=e._freezeSettings(),n=th(e._databaseId);return new ip(e._databaseId,!!t.ignoreUndefinedProperties,n)}function ap(e,t,n,r,s,i={}){const o=e.ac(i.merge||i.mergeFields?2:0,t,n,s);bp("Data must be an object, but it was:",o,r);const a=vp(r,o);let c,u;if(i.merge)c=new ks(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const e=[];for(const r of i.mergeFields){const s=_p(t,r,n);if(!o.contains(s))throw new ts(es.INVALID_ARGUMENT,`Field '${s}' is specified in your field mask but missing from your input data.`);Sp(e,s)||e.push(s)}c=new ks(e),u=o.fieldTransforms.filter((e=>c.covers(e.field)))}else c=null,u=o.fieldTransforms;return new tp(new ui(a),c,u)}class cp extends Xf{_toFieldTransform(e){if(2!==e.Xa)throw 1===e.Xa?e.rc(`${this._methodName}() can only appear at the top level of your update data`):e.rc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof cp}}function up(e,t,n){return new sp({Xa:3,uc:t.settings.uc,methodName:e._methodName,ec:n},t.databaseId,t.M,t.ignoreUndefinedProperties)}class lp extends Xf{_toFieldTransform(e){return new To(e.path,new go)}isEqual(e){return e instanceof lp}}class hp extends Xf{constructor(e,t){super(e),this.cc=t}_toFieldTransform(e){const t=up(this,e,!0),n=this.cc.map((e=>yp(e,t))),r=new yo(n);return new To(e.path,r)}isEqual(e){return this===e}}class dp extends Xf{constructor(e,t){super(e),this.cc=t}_toFieldTransform(e){const t=up(this,e,!0),n=this.cc.map((e=>yp(e,t))),r=new wo(n);return new To(e.path,r)}isEqual(e){return this===e}}class fp extends Xf{constructor(e,t){super(e),this.hc=t}_toFieldTransform(e){const t=new _o(e.M,lo(e.M,this.hc));return new To(e.path,t)}isEqual(e){return this===e}}function pp(e,t,n,r){const s=e.ac(1,t,n);bp("Data must be an object, but it was:",s,r);const i=[],o=ui.empty();bs(r,((e,r)=>{const a=Ep(t,e,n);r=(0,c.m9)(r);const u=s.sc(a);if(r instanceof cp)i.push(a);else{const e=yp(r,u);null!=e&&(i.push(a),o.set(a,e))}}));const a=new ks(i);return new np(o,a,s.fieldTransforms)}function mp(e,t,n,r,s,i){const o=e.ac(1,t,n),a=[_p(t,r,n)],u=[s];if(i.length%2!=0)throw new ts(es.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let c=0;c<i.length;c+=2)a.push(_p(t,i[c])),u.push(i[c+1]);const l=[],h=ui.empty();for(let f=a.length-1;f>=0;--f)if(!Sp(l,a[f])){const e=a[f];let t=u[f];t=(0,c.m9)(t);const n=o.sc(e);if(t instanceof cp)l.push(e);else{const r=yp(t,n);null!=r&&(l.push(e),h.set(e,r))}}const d=new ks(l);return new np(h,d,o.fieldTransforms)}function gp(e,t,n,r=!1){return yp(n,e.ac(r?4:3,t))}function yp(e,t){if(wp(e=(0,c.m9)(e)))return bp("Unsupported field value:",t,e),vp(e,t);if(e instanceof Xf)return function(e,t){if(!rp(t.Xa))throw t.rc(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.rc(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.ec&&4!==t.Xa)throw t.rc("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const s of e){let e=yp(s,t.ic(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=(0,c.m9)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return lo(t.M,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=ys.fromDate(e);return{timestampValue:Ia(t.M,n)}}if(e instanceof ys){const n=new ys(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:Ia(t.M,n)}}if(e instanceof Zf)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof Yf)return{bytesValue:Ea(t.M,e._byteString)};if(e instanceof Sf){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.rc(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:ka(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.rc(`Unsupported field value: ${wf(e)}`)}(e,t)}function vp(e,t){const n={};return _s(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):bs(e,((e,r)=>{const s=yp(r,t.tc(e));null!=s&&(n[e]=s)})),{mapValue:{fields:n}}}function wp(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof ys||e instanceof Zf||e instanceof Yf||e instanceof Sf||e instanceof Xf)}function bp(e,t,n){if(!wp(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const r=wf(n);throw"an object"===r?t.rc(e+" a custom object"):t.rc(e+" "+r)}}function _p(e,t,n){if((t=(0,c.m9)(t))instanceof Qf)return t._internalPath;if("string"==typeof t)return Ep(e,t);throw Tp("Field path arguments must be of type string or ",e,!1,void 0,n)}const Ip=new RegExp("[~\\*/\\[\\]]");function Ep(e,t,n){if(t.search(Ip)>=0)throw Tp(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Qf(...t.split("."))._internalPath}catch(r){throw Tp(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Tp(e,t,n,r,s){const i=r&&!r.isEmpty(),o=void 0!==s;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new ts(es.INVALID_ARGUMENT,a+e+c)}function Sp(e,t){return e.some((e=>e.isEqual(t)))}
/**
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
 */class kp{constructor(e,t,n,r,s){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Sf(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new Cp(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Ap("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class Cp extends kp{data(){return super.data()}}function Ap(e,t){return"string"==typeof t?Ep(e,t):t instanceof Qf?t._internalPath:t._delegate._internalPath}
/**
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
 */class Np{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class xp extends kp{constructor(e,t,n,r,s,i){super(e,t,n,r,i),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Dp(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Ap("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class Dp extends xp{data(e={}){return super.data(e)}}class Rp{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new Np(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new Dp(this._firestore,this._userDataWriter,n.key,n,new Np(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ts(es.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>({type:"added",doc:new Dp(e._firestore,e._userDataWriter,n.doc.key,n.doc,new Np(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter),oldIndex:-1,newIndex:t++})))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const r=new Dp(e._firestore,e._userDataWriter,t.doc.key,t.doc,new Np(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let s=-1,i=-1;return 0!==t.type&&(s=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),i=n.indexOf(t.doc.key)),{type:Op(t.type),doc:r,oldIndex:s,newIndex:i}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function Op(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Qr()}}function Pp(e,t){return e instanceof xp&&t instanceof xp?e._firestore===t._firestore&&e._key.isEqual(t._key)&&(null===e._document?null===t._document:e._document.isEqual(t._document))&&e._converter===t._converter:e instanceof Rp&&t instanceof Rp&&e._firestore===t._firestore&&Rf(e.query,t.query)&&e.metadata.isEqual(t.metadata)&&e._snapshot.isEqual(t._snapshot)}
/**
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
 */function Lp(e){if(Wi(e)&&0===e.explicitOrderBy.length)throw new ts(es.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Mp{}function Fp(e,...t){for(const n of t)e=n._apply(e);return e}class Vp extends Mp{constructor(e,t,n){super(),this.lc=e,this.fc=t,this.dc=n,this.type="where"}_apply(e){const t=op(e.firestore),n=function(e,t,n,r,s,i,o){let a;if(s.isKeyField()){if("array-contains"===i||"array-contains-any"===i)throw new ts(es.INVALID_ARGUMENT,`Invalid Query. You can't perform '${i}' queries on documentId().`);if("in"===i||"not-in"===i){Zp(o,i);const t=[];for(const n of o)t.push(Xp(r,e,n));a={arrayValue:{values:t}}}else a=Xp(r,e,o)}else"in"!==i&&"not-in"!==i&&"array-contains-any"!==i||Zp(o,i),a=gp(n,t,o,"in"===i||"not-in"===i);const c=xi.create(s,i,a);return function(e,t){if(t.S()){const n=Qi(e);if(null!==n&&!n.isEqual(t.field))throw new ts(es.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${t.field.toString()}'`);const r=Ji(e);null!==r&&em(e,t.field,r)}const n=function(e,t){for(const n of e.filters)if(t.indexOf(n.op)>=0)return n.op;return null}(e,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new ts(es.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new ts(es.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}(e,c),c}(e._query,"where",t,e.firestore._databaseId,this.lc,this.fc,this.dc);return new kf(e.firestore,e.converter,function(e,t){const n=e.filters.concat([t]);return new Ki(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}(e._query,n))}}function Up(e,t,n){const r=t,s=Ap("where",e);return new Vp(s,r,n)}class Bp extends Mp{constructor(e,t){super(),this.lc=e,this._c=t,this.type="orderBy"}_apply(e){const t=function(e,t,n){if(null!==e.startAt)throw new ts(es.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new ts(es.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const r=new Bi(t,n);return function(e,t){if(null===Ji(e)){const n=Qi(e);null!==n&&em(e,n,t.field)}}(e,r),r}(e._query,this.lc,this._c);return new kf(e.firestore,e.converter,function(e,t){const n=e.explicitOrderBy.concat([t]);return new Ki(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}function jp(e,t="asc"){const n=t,r=Ap("orderBy",e);return new Bp(r,n)}class qp extends Mp{constructor(e,t,n){super(),this.type=e,this.wc=t,this.mc=n}_apply(e){return new kf(e.firestore,e.converter,eo(e._query,this.wc,this.mc))}}function $p(e){return _f("limit",e),new qp("limit",e,"F")}function Kp(e){return _f("limitToLast",e),new qp("limitToLast",e,"L")}class Gp extends Mp{constructor(e,t,n){super(),this.type=e,this.gc=t,this.yc=n}_apply(e){const t=Yp(e,this.type,this.gc,this.yc);return new kf(e.firestore,e.converter,function(e,t){return new Ki(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,t,e.endAt)}(e._query,t))}}function zp(...e){return new Gp("startAt",e,!0)}function Hp(...e){return new Gp("startAfter",e,!1)}class Wp extends Mp{constructor(e,t,n){super(),this.type=e,this.gc=t,this.yc=n}_apply(e){const t=Yp(e,this.type,this.gc,this.yc);return new kf(e.firestore,e.converter,function(e,t){return new Ki(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,t)}(e._query,t))}}function Jp(...e){return new Wp("endBefore",e,!1)}function Qp(...e){return new Wp("endAt",e,!0)}function Yp(e,t,n,r){if(n[0]=(0,c.m9)(n[0]),n[0]instanceof kp)return function(e,t,n,r,s){if(!r)throw new ts(es.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${n}().`);const i=[];for(const o of Xi(e))if(o.field.isKeyField())i.push(Ys(t,r.key));else{const e=r.data.field(o.field);if(Os(e))throw new ts(es.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+o.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===e){const e=o.field.canonicalString();throw new ts(es.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${e}' (used as the orderBy) does not exist.`)}i.push(e)}return new Ui(i,s)}(e._query,e.firestore._databaseId,t,n[0]._document,r);{const s=op(e.firestore);return function(e,t,n,r,s,i){const o=e.explicitOrderBy;if(s.length>o.length)throw new ts(es.INVALID_ARGUMENT,`Too many arguments provided to ${r}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const a=[];for(let c=0;c<s.length;c++){const i=s[c];if(o[c].field.isKeyField()){if("string"!=typeof i)throw new ts(es.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${r}(), but got a ${typeof i}`);if(!Yi(e)&&-1!==i.indexOf("/"))throw new ts(es.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${r}() must be a plain document ID, but '${i}' contains a slash.`);const n=e.path.child(Es.fromString(i));if(!js.isDocumentKey(n))throw new ts(es.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${r}() must result in a valid document path, but '${n}' is not because it contains an odd number of segments.`);const s=new js(n);a.push(Ys(t,s))}else{const e=gp(n,r,i);a.push(e)}}return new Ui(a,i)}(e._query,e.firestore._databaseId,s,t,n,r)}}function Xp(e,t,n){if("string"==typeof(n=(0,c.m9)(n))){if(""===n)throw new ts(es.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Yi(t)&&-1!==n.indexOf("/"))throw new ts(es.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(Es.fromString(n));if(!js.isDocumentKey(r))throw new ts(es.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ys(e,new js(r))}if(n instanceof Sf)return Ys(e,n._key);throw new ts(es.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${wf(n)}.`)}function Zp(e,t){if(!Array.isArray(e)||0===e.length)throw new ts(es.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`);if(e.length>10)throw new ts(es.INVALID_ARGUMENT,`Invalid Query. '${t.toString()}' filters support a maximum of 10 elements in the value array.`)}function em(e,t,n){if(!n.isEqual(t))throw new ts(es.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
/**
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
 */class tm{convertValue(e,t="none"){switch(Ks(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ds(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Rs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw Qr()}}convertObject(e,t){const n={};return bs(e.fields,((e,r)=>{n[e]=this.convertValue(r,t)})),n}convertGeoPoint(e){return new Zf(Ds(e.latitude),Ds(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Ps(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Ls(e));default:return null}}convertTimestamp(e){const t=xs(e);return new ys(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=Es.fromString(e);Yr(Za(n));const r=new Fs(n.get(1),n.get(3)),s=new js(n.popFirst(5));return r.isEqual(t)||Hr(`Document ${s} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}
/**
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
 */function nm(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}class rm extends tm{constructor(e){super(),this.firestore=e}convertBytes(e){return new Yf(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Sf(this.firestore,null,t)}}
/**
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
 */class sm{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=op(e)}set(e,t,n){this._verifyNotCommitted();const r=im(e,this._firestore),s=nm(r.converter,t,n),i=ap(this._dataReader,"WriteBatch.set",r._key,s,null!==r.converter,n);return this._mutations.push(i.toMutation(r._key,Co.none())),this}update(e,t,n,...r){this._verifyNotCommitted();const s=im(e,this._firestore);let i;return i="string"==typeof(t=(0,c.m9)(t))||t instanceof Qf?mp(this._dataReader,"WriteBatch.update",s._key,t,n,r):pp(this._dataReader,"WriteBatch.update",s._key,t),this._mutations.push(i.toMutation(s._key,Co.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=im(e,this._firestore);return this._mutations=this._mutations.concat(new Bo(t._key,Co.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new ts(es.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function im(e,t){if((e=(0,c.m9)(e)).firestore!==t)throw new ts(es.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return e}
/**
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
 */
/**
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
 */function om(e){e=bf(e,Sf);const t=bf(e.firestore,Ff);return af(Vf(t),e._key).then((n=>bm(t,e,n)))}class am extends tm{constructor(e){super(),this.firestore=e}convertBytes(e){return new Yf(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Sf(this.firestore,null,t)}}function cm(e){e=bf(e,Sf);const t=bf(e.firestore,Ff),n=Vf(t),r=new am(t);return of(n,e._key).then((n=>new xp(t,r,e._key,n,new Np(null!==n&&n.hasLocalMutations,!0),e.converter)))}function um(e){e=bf(e,Sf);const t=bf(e.firestore,Ff);return af(Vf(t),e._key,{source:"server"}).then((n=>bm(t,e,n)))}function lm(e){e=bf(e,kf);const t=bf(e.firestore,Ff),n=Vf(t),r=new am(t);return Lp(e._query),uf(n,e._query).then((n=>new Rp(t,r,e,n)))}function hm(e){e=bf(e,kf);const t=bf(e.firestore,Ff),n=Vf(t),r=new am(t);return cf(n,e._query).then((n=>new Rp(t,r,e,n)))}function dm(e){e=bf(e,kf);const t=bf(e.firestore,Ff),n=Vf(t),r=new am(t);return uf(n,e._query,{source:"server"}).then((n=>new Rp(t,r,e,n)))}function fm(e,t,n){e=bf(e,Sf);const r=bf(e.firestore,Ff),s=nm(e.converter,t,n);return wm(r,[ap(op(r),"setDoc",e._key,s,null!==e.converter,n).toMutation(e._key,Co.none())])}function pm(e,t,n,...r){e=bf(e,Sf);const s=bf(e.firestore,Ff),i=op(s);let o;return o="string"==typeof(t=(0,c.m9)(t))||t instanceof Qf?mp(i,"updateDoc",e._key,t,n,r):pp(i,"updateDoc",e._key,t),wm(s,[o.toMutation(e._key,Co.exists(!0))])}function mm(e){return wm(bf(e.firestore,Ff),[new Bo(e._key,Co.none())])}function gm(e,t){const n=bf(e.firestore,Ff),r=xf(e),s=nm(e.converter,t);return wm(n,[ap(op(e.firestore),"addDoc",r._key,s,null!==e.converter,{}).toMutation(r._key,Co.exists(!1))]).then((()=>r))}function ym(e,...t){var n,r,s;e=(0,c.m9)(e);let i={includeMetadataChanges:!1},o=0;"object"!=typeof t[o]||Pf(t[o])||(i=t[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(Pf(t[o])){const e=t[o];t[o]=null===(n=e.next)||void 0===n?void 0:n.bind(e),t[o+1]=null===(r=e.error)||void 0===r?void 0:r.bind(e),t[o+2]=null===(s=e.complete)||void 0===s?void 0:s.bind(e)}let u,l,h;if(e instanceof Sf)l=bf(e.firestore,Ff),h=zi(e._key.path),u={next:n=>{t[o]&&t[o](bm(l,e,n))},error:t[o+1],complete:t[o+2]};else{const n=bf(e,kf);l=bf(n.firestore,Ff),h=n._query;const r=new am(l);u={next:e=>{t[o]&&t[o](new Rp(l,r,n,e))},error:t[o+1],complete:t[o+2]},Lp(e._query)}return function(e,t,n,r){const s=new $d(r),i=new Jh(t,s,n);return e.asyncQueue.enqueueAndForget((async()=>Kh(await nf(e),i))),()=>{s.Ia(),e.asyncQueue.enqueueAndForget((async()=>Gh(await nf(e),i)))}}(Vf(l),h,a,u)}function vm(e,t){return lf(Vf(e=bf(e,Ff)),Pf(t)?t:{next:t})}function wm(e,t){return function(e,t){const n=new ns;return e.asyncQueue.enqueueAndForget((async()=>ud(await tf(e),t,n))),n.promise}(Vf(e),t)}function bm(e,t,n){const r=n.docs.get(t._key),s=new am(e);return new xp(e,s,t._key,r,new Np(n.hasPendingWrites,n.fromCache),t.converter)}
/**
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
 */class _m extends class{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=op(e)}get(e){const t=im(e,this._firestore),n=new rm(this._firestore);return this._transaction.lookup([t._key]).then((e=>{if(!e||1!==e.length)return Qr();const r=e[0];if(r.isFoundDocument())return new kp(this._firestore,n,r.key,r,t.converter);if(r.isNoDocument())return new kp(this._firestore,n,t._key,null,t.converter);throw Qr()}))}set(e,t,n){const r=im(e,this._firestore),s=nm(r.converter,t,n),i=ap(this._dataReader,"Transaction.set",r._key,s,null!==r.converter,n);return this._transaction.set(r._key,i),this}update(e,t,n,...r){const s=im(e,this._firestore);let i;return i="string"==typeof(t=(0,c.m9)(t))||t instanceof Qf?mp(this._dataReader,"Transaction.update",s._key,t,n,r):pp(this._dataReader,"Transaction.update",s._key,t),this._transaction.update(s._key,i),this}delete(e){const t=im(e,this._firestore);return this._transaction.delete(t._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=im(e,this._firestore),n=new am(this._firestore);return super.get(e).then((e=>new xp(this._firestore,n,t._key,e._document,new Np(!1,!1),t.converter)))}}function Im(e,t){return hf(Vf(e=bf(e,Ff)),(n=>t(new _m(e,n))))}
/**
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
 */function Em(){return new cp("deleteField")}function Tm(){return new lp("serverTimestamp")}function Sm(...e){return new hp("arrayUnion",e)}function km(...e){return new dp("arrayRemove",e)}function Cm(e){return new fp("increment",e)}
/**
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
 */!function(e,t=!0){!function(e){qr=e}(i.SDK_VERSION),(0,i._registerComponent)(new o.wA("firestore",((e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=new Ff(r,new os(e.getProvider("auth-internal")),new ls(e.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:t},n),s._setSettings(n),s}),"PUBLIC")),(0,i.registerVersion)(Br,"3.4.8",e),(0,i.registerVersion)(Br,"3.4.8","esm2017")}();const Am="@firebase/firestore-compat",Nm="0.1.17";
/**
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
 */
function xm(e,t){if(void 0===t)return{merge:!1};if(void 0!==t.mergeFields&&void 0!==t.merge)throw new ts("invalid-argument",`Invalid options passed to function ${e}(): You cannot specify both "merge" and "mergeFields".`);return t}
/**
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
 */function Dm(){if("undefined"===typeof Uint8Array)throw new ts("unimplemented","Uint8Arrays are not available in this environment.")}function Rm(){if(!Cs())throw new ts("unimplemented","Blobs are unavailable in Firestore in this environment.")}class Om{constructor(e){this._delegate=e}static fromBase64String(e){return Rm(),new Om(Yf.fromBase64String(e))}static fromUint8Array(e){return Dm(),new Om(Yf.fromUint8Array(e))}toBase64(){return Rm(),this._delegate.toBase64()}toUint8Array(){return Dm(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}
/**
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
 */function Pm(e){return Lm(e,["next","error","complete"])}function Lm(e,t){if("object"!==typeof e||null===e)return!1;const n=e;for(const r of t)if(r in n&&"function"===typeof n[r])return!0;return!1}
/**
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
 */class Mm{enableIndexedDbPersistence(e,t){return Bf(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return jf(e._delegate)}clearIndexedDbPersistence(e){return $f(e._delegate)}}class Fm{constructor(e,t,n){this._delegate=t,this._persistenceProvider=n,this.INTERNAL={delete:()=>this.terminate()},e instanceof Fs||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();e.merge||t.host===e.host||Wr("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,n={}){Tf(this._delegate,e,t,n)}enableNetwork(){return Gf(this._delegate)}disableNetwork(){return zf(this._delegate)}enablePersistence(e){let t=!1,n=!1;return e&&(t=!!e.synchronizeTabs,n=!!e.experimentalForceOwningTab,gf("synchronizeTabs",t,"experimentalForceOwningTab",n)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,n)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return Kf(this._delegate)}onSnapshotsInSync(e){return vm(this._delegate,e)}get app(){if(!this._appCompat)throw new ts("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new Xm(this,Af(this._delegate,e))}catch(t){throw Km(t,"collection()","Firestore.collection()")}}doc(e){try{return new $m(this,xf(this._delegate,e))}catch(t){throw Km(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Jm(this,Nf(this._delegate,e))}catch(t){throw Km(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return Im(this._delegate,(t=>e(new Bm(this,t))))}batch(){return Vf(this._delegate),new jm(new sm(this._delegate,(e=>wm(this._delegate,e))))}loadBundle(e){return Hf(this._delegate,e)}namedQuery(e){return Wf(this._delegate,e).then((e=>e?new Jm(this,e):null))}}class Vm extends tm{constructor(e){super(),this.firestore=e}convertBytes(e){return new Om(new Yf(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return $m.forKey(t,this.firestore,null)}}function Um(e){Gr(e)}class Bm{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new Vm(e)}get(e){const t=Zm(e);return this._delegate.get(t).then((e=>new Hm(this._firestore,new xp(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,t.converter))))}set(e,t,n){const r=Zm(e);return n?(xm("Transaction.set",n),this._delegate.set(r,t,n)):this._delegate.set(r,t),this}update(e,t,n,...r){const s=Zm(e);return 2===arguments.length?this._delegate.update(s,t):this._delegate.update(s,t,n,...r),this}delete(e){const t=Zm(e);return this._delegate.delete(t),this}}class jm{constructor(e){this._delegate=e}set(e,t,n){const r=Zm(e);return n?(xm("WriteBatch.set",n),this._delegate.set(r,t,n)):this._delegate.set(r,t),this}update(e,t,n,...r){const s=Zm(e);return 2===arguments.length?this._delegate.update(s,t):this._delegate.update(s,t,n,...r),this}delete(e){const t=Zm(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class qm{constructor(e,t,n){this._firestore=e,this._userDataWriter=t,this._delegate=n}fromFirestore(e,t){const n=new Dp(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new Wm(this._firestore,n),null!==t&&void 0!==t?t:{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const n=qm.INSTANCES;let r=n.get(e);r||(r=new WeakMap,n.set(e,r));let s=r.get(t);return s||(s=new qm(e,new Vm(e),t),r.set(t,s)),s}}qm.INSTANCES=new WeakMap;class $m{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new Vm(e)}static forPath(e,t,n){if(e.length%2!==0)throw new ts("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new $m(t,new Sf(t._delegate,n,new js(e)))}static forKey(e,t,n){return new $m(t,new Sf(t._delegate,n,e))}get id(){return this._delegate.id}get parent(){return new Xm(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new Xm(this.firestore,Af(this._delegate,e))}catch(t){throw Km(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=(0,c.m9)(e),e instanceof Sf&&Df(this._delegate,e)}set(e,t){t=xm("DocumentReference.set",t);try{return t?fm(this._delegate,e,t):fm(this._delegate,e)}catch(n){throw Km(n,"setDoc()","DocumentReference.set()")}}update(e,t,...n){try{return 1===arguments.length?pm(this._delegate,e):pm(this._delegate,e,t,...n)}catch(r){throw Km(r,"updateDoc()","DocumentReference.update()")}}delete(){return mm(this._delegate)}onSnapshot(...e){const t=Gm(e),n=zm(e,(e=>new Hm(this.firestore,new xp(this.firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,this._delegate.converter))));return ym(this._delegate,t,n)}get(e){let t;return t="cache"===(null===e||void 0===e?void 0:e.source)?cm(this._delegate):"server"===(null===e||void 0===e?void 0:e.source)?um(this._delegate):om(this._delegate),t.then((e=>new Hm(this.firestore,new xp(this.firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,this._delegate.converter))))}withConverter(e){return new $m(this.firestore,e?this._delegate.withConverter(qm.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Km(e,t,n){return e.message=e.message.replace(t,n),e}function Gm(e){for(const t of e)if("object"===typeof t&&!Pm(t))return t;return{}}function zm(e,t){var n,r;let s;return s=Pm(e[0])?e[0]:Pm(e[1])?e[1]:"function"===typeof e[0]?{next:e[0],error:e[1],complete:e[2]}:{next:e[1],error:e[2],complete:e[3]},{next:e=>{s.next&&s.next(t(e))},error:null===(n=s.error)||void 0===n?void 0:n.bind(s),complete:null===(r=s.complete)||void 0===r?void 0:r.bind(s)}}class Hm{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new $m(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return Pp(this._delegate,e._delegate)}}class Wm extends Hm{data(e){const t=this._delegate.data(e);return Xr(void 0!==t,"Document in a QueryDocumentSnapshot should exist"),t}}class Jm{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new Vm(e)}where(e,t,n){try{return new Jm(this.firestore,Fp(this._delegate,Up(e,t,n)))}catch(r){throw Km(r,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new Jm(this.firestore,Fp(this._delegate,jp(e,t)))}catch(n){throw Km(n,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Jm(this.firestore,Fp(this._delegate,$p(e)))}catch(t){throw Km(t,"limit()","Query.limit()")}}limitToLast(e){try{return new Jm(this.firestore,Fp(this._delegate,Kp(e)))}catch(t){throw Km(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Jm(this.firestore,Fp(this._delegate,zp(...e)))}catch(t){throw Km(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Jm(this.firestore,Fp(this._delegate,Hp(...e)))}catch(t){throw Km(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Jm(this.firestore,Fp(this._delegate,Jp(...e)))}catch(t){throw Km(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Jm(this.firestore,Fp(this._delegate,Qp(...e)))}catch(t){throw Km(t,"endAt()","Query.endAt()")}}isEqual(e){return Rf(this._delegate,e._delegate)}get(e){let t;return t="cache"===(null===e||void 0===e?void 0:e.source)?hm(this._delegate):"server"===(null===e||void 0===e?void 0:e.source)?dm(this._delegate):lm(this._delegate),t.then((e=>new Ym(this.firestore,new Rp(this.firestore._delegate,this._userDataWriter,this._delegate,e._snapshot))))}onSnapshot(...e){const t=Gm(e),n=zm(e,(e=>new Ym(this.firestore,new Rp(this.firestore._delegate,this._userDataWriter,this._delegate,e._snapshot))));return ym(this._delegate,t,n)}withConverter(e){return new Jm(this.firestore,e?this._delegate.withConverter(qm.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class Qm{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new Wm(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class Ym{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new Jm(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map((e=>new Wm(this._firestore,e)))}docChanges(e){return this._delegate.docChanges(e).map((e=>new Qm(this._firestore,e)))}forEach(e,t){this._delegate.forEach((n=>{e.call(t,new Wm(this._firestore,n))}))}isEqual(e){return Pp(this._delegate,e._delegate)}}class Xm extends Jm{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new $m(this.firestore,e):null}doc(e){try{return new $m(this.firestore,void 0===e?xf(this._delegate):xf(this._delegate,e))}catch(t){throw Km(t,"doc()","CollectionReference.doc()")}}add(e){return gm(this._delegate,e).then((e=>new $m(this.firestore,e)))}isEqual(e){return Df(this._delegate,e._delegate)}withConverter(e){return new Xm(this.firestore,e?this._delegate.withConverter(qm.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Zm(e){return bf(e,Sf)}
/**
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
 */class eg{constructor(...e){this._delegate=new Qf(...e)}static documentId(){return new eg(Ss.keyField().canonicalString())}isEqual(e){return e=(0,c.m9)(e),e instanceof Qf&&this._delegate._internalPath.isEqual(e._internalPath)}}
/**
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
 */class tg{constructor(e){this._delegate=e}static serverTimestamp(){const e=Tm();return e._methodName="FieldValue.serverTimestamp",new tg(e)}static delete(){const e=Em();return e._methodName="FieldValue.delete",new tg(e)}static arrayUnion(...e){const t=Sm(...e);return t._methodName="FieldValue.arrayUnion",new tg(t)}static arrayRemove(...e){const t=km(...e);return t._methodName="FieldValue.arrayRemove",new tg(t)}static increment(e){const t=Cm(e);return t._methodName="FieldValue.increment",new tg(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}
/**
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
 */const ng={Firestore:Fm,GeoPoint:Zf,Timestamp:ys,Blob:Om,Transaction:Bm,WriteBatch:jm,DocumentReference:$m,DocumentSnapshot:Hm,Query:Jm,QueryDocumentSnapshot:Wm,QuerySnapshot:Ym,CollectionReference:Xm,FieldPath:eg,FieldValue:tg,setLogLevel:Um,CACHE_SIZE_UNLIMITED:Mf};function rg(e,t){e.INTERNAL.registerComponent(new o.wA("firestore-compat",(e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("firestore").getImmediate();return t(n,r)}),"PUBLIC").setServiceProps(Object.assign({},ng)))}
/**
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
 */function sg(e){rg(e,((e,t)=>new Fm(e,t,new Mm))),e.registerVersion(Am,Nm)}sg(s.Z)},205:function(e,t,n){n.d(t,{z:function(){return i}});var r,s=function(){return Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/))};function i(e,t){void 0===t&&(t={});var n=t.registrationOptions;void 0===n&&(n={}),delete t.registrationOptions;var i=function(e){var n=[],r=arguments.length-1;while(r-- >0)n[r]=arguments[r+1];t&&t[e]&&t[e].apply(t,n)};"serviceWorker"in navigator&&r.then((function(){s()?(c(e,i,n),navigator.serviceWorker.ready.then((function(e){i("ready",e)})).catch((function(e){return o(i,e)}))):(a(e,i,n),navigator.serviceWorker.ready.then((function(e){i("ready",e)})).catch((function(e){return o(i,e)})))}))}function o(e,t){navigator.onLine||e("offline"),e("error",t)}function a(e,t,n){navigator.serviceWorker.register(e,n).then((function(e){t("registered",e),e.waiting?t("updated",e):e.onupdatefound=function(){t("updatefound",e);var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?t("updated",e):t("cached",e))}}})).catch((function(e){return o(t,e)}))}function c(e,t,n){fetch(e).then((function(r){404===r.status?(t("error",new Error("Service worker not found at "+e)),u()):-1===r.headers.get("content-type").indexOf("javascript")?(t("error",new Error("Expected "+e+" to have javascript content-type, but received "+r.headers.get("content-type"))),u()):a(e,t,n)})).catch((function(e){return o(t,e)}))}function u(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){return o(emit,e)}))}"undefined"!==typeof window&&(r="undefined"!==typeof Promise?new Promise((function(e){return window.addEventListener("load",e)})):{then:function(e){return window.addEventListener("load",e)}})},744:function(e,t){t.Z=(e,t)=>{const n=e.__vccOpts||e;for(const[r,s]of t)n[r]=s;return n}},119:function(e,t,n){n.d(t,{PO:function(){return G},p7:function(){return tt}});var r=n(252),s=n(262);
/*!
  * vue-router v4.0.14
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
const i="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag,o=e=>i?Symbol(e):"_vr_"+e,a=o("rvlm"),c=o("rvd"),u=o("r"),l=o("rl"),h=o("rvl"),d="undefined"!==typeof window;function f(e){return e.__esModule||i&&"Module"===e[Symbol.toStringTag]}const p=Object.assign;function m(e,t){const n={};for(const r in t){const s=t[r];n[r]=Array.isArray(s)?s.map(e):e(s)}return n}const g=()=>{};const y=/\/$/,v=e=>e.replace(y,"");function w(e,t,n="/"){let r,s={},i="",o="";const a=t.indexOf("?"),c=t.indexOf("#",a>-1?a:0);return a>-1&&(r=t.slice(0,a),i=t.slice(a+1,c>-1?c:t.length),s=e(i)),c>-1&&(r=r||t.slice(0,c),o=t.slice(c,t.length)),r=C(null!=r?r:t,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function b(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function _(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function I(e,t,n){const r=t.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&E(t.matched[r],n.matched[s])&&T(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function E(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function T(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!S(e[n],t[n]))return!1;return!0}function S(e,t){return Array.isArray(e)?k(e,t):Array.isArray(t)?k(t,e):e===t}function k(e,t){return Array.isArray(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}function C(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let s,i,o=n.length-1;for(s=0;s<r.length;s++)if(i=r[s],1!==o&&"."!==i){if(".."!==i)break;o--}return n.slice(0,o).join("/")+"/"+r.slice(s-(s===r.length?1:0)).join("/")}var A,N;(function(e){e["pop"]="pop",e["push"]="push"})(A||(A={})),function(e){e["back"]="back",e["forward"]="forward",e["unknown"]=""}(N||(N={}));function x(e){if(!e)if(d){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),v(e)}const D=/^[^#]+#/;function R(e,t){return e.replace(D,"#")+t}function O(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const P=()=>({left:window.pageXOffset,top:window.pageYOffset});function L(e){let t;if("el"in e){const n=e.el,r="string"===typeof n&&n.startsWith("#");0;const s="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=O(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function M(e,t){const n=history.state?history.state.position-t:-1;return n+e}const F=new Map;function V(e,t){F.set(e,t)}function U(e){const t=F.get(e);return F.delete(e),t}let B=()=>location.protocol+"//"+location.host;function j(e,t){const{pathname:n,search:r,hash:s}=t,i=e.indexOf("#");if(i>-1){let t=s.includes(e.slice(i))?e.slice(i).length:1,n=s.slice(t);return"/"!==n[0]&&(n="/"+n),_(n,"")}const o=_(n,e);return o+r+s}function q(e,t,n,r){let s=[],i=[],o=null;const a=({state:i})=>{const a=j(e,location),c=n.value,u=t.value;let l=0;if(i){if(n.value=a,t.value=i,o&&o===c)return void(o=null);l=u?i.position-u.position:0}else r(a);s.forEach((e=>{e(n.value,c,{delta:l,type:A.pop,direction:l?l>0?N.forward:N.back:N.unknown})}))};function c(){o=n.value}function u(e){s.push(e);const t=()=>{const t=s.indexOf(e);t>-1&&s.splice(t,1)};return i.push(t),t}function l(){const{history:e}=window;e.state&&e.replaceState(p({},e.state,{scroll:P()}),"")}function h(){for(const e of i)e();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l),{pauseListeners:c,listen:u,destroy:h}}function $(e,t,n,r=!1,s=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:s?P():null}}function K(e){const{history:t,location:n}=window,r={value:j(e,n)},s={value:t.state};function i(r,i,o){const a=e.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+r:B()+e+r;try{t[o?"replaceState":"pushState"](i,"",c),s.value=i}catch(u){console.error(u),n[o?"replace":"assign"](c)}}function o(e,n){const o=p({},t.state,$(s.value.back,e,s.value.forward,!0),n,{position:s.value.position});i(e,o,!0),r.value=e}function a(e,n){const o=p({},s.value,t.state,{forward:e,scroll:P()});i(o.current,o,!0);const a=p({},$(r.value,e,null),{position:o.position+1},n);i(e,a,!1),r.value=e}return s.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:s,push:a,replace:o}}function G(e){e=x(e);const t=K(e),n=q(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}const s=p({location:"",base:e,go:r,createHref:R.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function z(e){return"string"===typeof e||e&&"object"===typeof e}function H(e){return"string"===typeof e||"symbol"===typeof e}const W={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},J=o("nf");var Q;(function(e){e[e["aborted"]=4]="aborted",e[e["cancelled"]=8]="cancelled",e[e["duplicated"]=16]="duplicated"})(Q||(Q={}));function Y(e,t){return p(new Error,{type:e,[J]:!0},t)}function X(e,t){return e instanceof Error&&J in e&&(null==t||!!(e.type&t))}const Z="[^/]+?",ee={sensitive:!1,strict:!1,start:!0,end:!0},te=/[.+*?^${}()[\]/\\]/g;function ne(e,t){const n=p({},ee,t),r=[];let s=n.start?"^":"";const i=[];for(const l of e){const e=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let t=0;t<l.length;t++){const r=l[t];let o=40+(n.sensitive?.25:0);if(0===r.type)t||(s+="/"),s+=r.value.replace(te,"\\$&"),o+=40;else if(1===r.type){const{value:e,repeatable:n,optional:a,regexp:c}=r;i.push({name:e,repeatable:n,optional:a});const h=c||Z;if(h!==Z){o+=10;try{new RegExp(`(${h})`)}catch(u){throw new Error(`Invalid custom RegExp for param "${e}" (${h}): `+u.message)}}let d=n?`((?:${h})(?:/(?:${h}))*)`:`(${h})`;t||(d=a&&l.length<2?`(?:/${d})`:"/"+d),a&&(d+="?"),s+=d,o+=20,a&&(o+=-8),n&&(o+=-20),".*"===h&&(o+=-50)}e.push(o)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(e){const t=e.match(o),n={};if(!t)return null;for(let r=1;r<t.length;r++){const e=t[r]||"",s=i[r-1];n[s.name]=e&&s.repeatable?e.split("/"):e}return n}function c(t){let n="",r=!1;for(const s of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of s)if(0===e.type)n+=e.value;else if(1===e.type){const{value:i,repeatable:o,optional:a}=e,c=i in t?t[i]:"";if(Array.isArray(c)&&!o)throw new Error(`Provided param "${i}" is an array but it is not repeatable (* or + modifiers)`);const u=Array.isArray(c)?c.join("/"):c;if(!u){if(!a)throw new Error(`Missing required param "${i}"`);s.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=u}}return n}return{re:o,score:r,keys:i,parse:a,stringify:c}}function re(e,t){let n=0;while(n<e.length&&n<t.length){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function se(e,t){let n=0;const r=e.score,s=t.score;while(n<r.length&&n<s.length){const e=re(r[n],s[n]);if(e)return e;n++}return s.length-r.length}const ie={type:0,value:""},oe=/[a-zA-Z0-9_]/;function ae(e){if(!e)return[[]];if("/"===e)return[[ie]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${u}": ${e}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a,c=0,u="",l="";function h(){u&&(0===n?i.push({type:0,value:u}):1===n||2===n||3===n?(i.length>1&&("*"===a||"+"===a)&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:l,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):t("Invalid state to consume buffer"),u="")}function d(){u+=a}while(c<e.length)if(a=e[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(u&&h(),o()):":"===a?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:"("===a?n=2:oe.test(a)?d():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==l[l.length-1]?l=l.slice(0,-1)+a:n=3:l+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,l="";break;default:t("Unknown state");break}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${u}"`),h(),o(),s}function ce(e,t,n){const r=ne(ae(e.path),n);const s=p(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf===!t.record.aliasOf&&t.children.push(s),s}function ue(e,t){const n=[],r=new Map;function s(e){return r.get(e)}function i(e,n,r){const s=!r,a=he(e);a.aliasOf=r&&r.record;const u=me(t,e),l=[a];if("alias"in e){const t="string"===typeof e.alias?[e.alias]:e.alias;for(const e of t)l.push(p({},a,{components:r?r.record.components:a.components,path:e,aliasOf:r?r.record:a}))}let h,d;for(const t of l){const{path:l}=t;if(n&&"/"!==l[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(l&&r+l)}if(h=ce(t,n,u),r?r.alias.push(h):(d=d||h,d!==h&&d.alias.push(h),s&&e.name&&!fe(h)&&o(e.name)),"children"in a){const e=a.children;for(let t=0;t<e.length;t++)i(e[t],h,r&&r.children[t])}r=r||h,c(h)}return d?()=>{o(d)}:g}function o(e){if(H(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(o),t.alias.forEach(o))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(o),e.alias.forEach(o))}}function a(){return n}function c(e){let t=0;while(t<n.length&&se(e,n[t])>=0&&(e.record.path!==n[t].record.path||!ge(e,n[t])))t++;n.splice(t,0,e),e.record.name&&!fe(e)&&r.set(e.record.name,e)}function u(e,t){let s,i,o,a={};if("name"in e&&e.name){if(s=r.get(e.name),!s)throw Y(1,{location:e});o=s.record.name,a=p(le(t.params,s.keys.filter((e=>!e.optional)).map((e=>e.name))),e.params),i=s.stringify(a)}else if("path"in e)i=e.path,s=n.find((e=>e.re.test(i))),s&&(a=s.parse(i),o=s.record.name);else{if(s=t.name?r.get(t.name):n.find((e=>e.re.test(t.path))),!s)throw Y(1,{location:e,currentLocation:t});o=s.record.name,a=p({},t.params,e.params),i=s.stringify(a)}const c=[];let u=s;while(u)c.unshift(u.record),u=u.parent;return{name:o,path:i,params:a,matched:c,meta:pe(c)}}return t=me({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>i(e))),{addRoute:i,resolve:u,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function le(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function he(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:de(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function de(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="boolean"===typeof n?n:n[r];return t}function fe(e){while(e){if(e.record.aliasOf)return!0;e=e.parent}return!1}function pe(e){return e.reduce(((e,t)=>p(e,t.meta)),{})}function me(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function ge(e,t){return t.children.some((t=>t===e||ge(e,t)))}const ye=/#/g,ve=/&/g,we=/\//g,be=/=/g,_e=/\?/g,Ie=/\+/g,Ee=/%5B/g,Te=/%5D/g,Se=/%5E/g,ke=/%60/g,Ce=/%7B/g,Ae=/%7C/g,Ne=/%7D/g,xe=/%20/g;function De(e){return encodeURI(""+e).replace(Ae,"|").replace(Ee,"[").replace(Te,"]")}function Re(e){return De(e).replace(Ce,"{").replace(Ne,"}").replace(Se,"^")}function Oe(e){return De(e).replace(Ie,"%2B").replace(xe,"+").replace(ye,"%23").replace(ve,"%26").replace(ke,"`").replace(Ce,"{").replace(Ne,"}").replace(Se,"^")}function Pe(e){return Oe(e).replace(be,"%3D")}function Le(e){return De(e).replace(ye,"%23").replace(_e,"%3F")}function Me(e){return null==e?"":Le(e).replace(we,"%2F")}function Fe(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}function Ve(e){const t={};if(""===e||"?"===e)return t;const n="?"===e[0],r=(n?e.slice(1):e).split("&");for(let s=0;s<r.length;++s){const e=r[s].replace(Ie," "),n=e.indexOf("="),i=Fe(n<0?e:e.slice(0,n)),o=n<0?null:Fe(e.slice(n+1));if(i in t){let e=t[i];Array.isArray(e)||(e=t[i]=[e]),e.push(o)}else t[i]=o}return t}function Ue(e){let t="";for(let n in e){const r=e[n];if(n=Pe(n),null==r){void 0!==r&&(t+=(t.length?"&":"")+n);continue}const s=Array.isArray(r)?r.map((e=>e&&Oe(e))):[r&&Oe(r)];s.forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))}))}return t}function Be(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=Array.isArray(r)?r.map((e=>null==e?null:""+e)):null==r?r:""+r)}return t}function je(){let e=[];function t(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function qe(e,t,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise(((o,a)=>{const c=e=>{!1===e?a(Y(4,{from:n,to:t})):e instanceof Error?a(e):z(e)?a(Y(2,{from:t,to:e})):(i&&r.enterCallbacks[s]===i&&"function"===typeof e&&i.push(e),o())},u=e.call(r&&r.instances[s],t,n,c);let l=Promise.resolve(u);e.length<3&&(l=l.then(c)),l.catch((e=>a(e)))}))}function $e(e,t,n,r){const s=[];for(const i of e)for(const e in i.components){let o=i.components[e];if("beforeRouteEnter"===t||i.instances[e])if(Ke(o)){const a=o.__vccOpts||o,c=a[t];c&&s.push(qe(c,n,r,i,e))}else{let a=o();0,s.push((()=>a.then((s=>{if(!s)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${i.path}"`));const o=f(s)?s.default:s;i.components[e]=o;const a=o.__vccOpts||o,c=a[t];return c&&qe(c,n,r,i,e)()}))))}}return s}function Ke(e){return"object"===typeof e||"displayName"in e||"props"in e||"__vccOpts"in e}function Ge(e){const t=(0,r.f3)(u),n=(0,r.f3)(l),i=(0,r.Fl)((()=>t.resolve((0,s.SU)(e.to)))),o=(0,r.Fl)((()=>{const{matched:e}=i.value,{length:t}=e,r=e[t-1],s=n.matched;if(!r||!s.length)return-1;const o=s.findIndex(E.bind(null,r));if(o>-1)return o;const a=Qe(e[t-2]);return t>1&&Qe(r)===a&&s[s.length-1].path!==a?s.findIndex(E.bind(null,e[t-2])):o})),a=(0,r.Fl)((()=>o.value>-1&&Je(n.params,i.value.params))),c=(0,r.Fl)((()=>o.value>-1&&o.value===n.matched.length-1&&T(n.params,i.value.params)));function h(n={}){return We(n)?t[(0,s.SU)(e.replace)?"replace":"push"]((0,s.SU)(e.to)).catch(g):Promise.resolve()}return{route:i,href:(0,r.Fl)((()=>i.value.href)),isActive:a,isExactActive:c,navigate:h}}const ze=(0,r.aZ)({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ge,setup(e,{slots:t}){const n=(0,s.qj)(Ge(e)),{options:i}=(0,r.f3)(u),o=(0,r.Fl)((()=>({[Ye(e.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Ye(e.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const s=t.default&&t.default(n);return e.custom?s:(0,r.h)("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},s)}}}),He=ze;function We(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Je(e,t){for(const n in t){const r=t[n],s=e[n];if("string"===typeof r){if(r!==s)return!1}else if(!Array.isArray(s)||s.length!==r.length||r.some(((e,t)=>e!==s[t])))return!1}return!0}function Qe(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ye=(e,t,n)=>null!=e?e:null!=t?t:n,Xe=(0,r.aZ)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(e,{attrs:t,slots:n}){const i=(0,r.f3)(h),o=(0,r.Fl)((()=>e.route||i.value)),u=(0,r.f3)(c,0),l=(0,r.Fl)((()=>o.value.matched[u]));(0,r.JJ)(c,u+1),(0,r.JJ)(a,l),(0,r.JJ)(h,o);const d=(0,s.iH)();return(0,r.YP)((()=>[d.value,l.value,e.name]),(([e,t,n],[r,s,i])=>{t&&(t.instances[n]=e,s&&s!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=s.leaveGuards),t.updateGuards.size||(t.updateGuards=s.updateGuards))),!e||!t||s&&E(t,s)&&r||(t.enterCallbacks[n]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const s=o.value,i=l.value,a=i&&i.components[e.name],c=e.name;if(!a)return Ze(n.default,{Component:a,route:s});const u=i.props[e.name],h=u?!0===u?s.params:"function"===typeof u?u(s):u:null,f=e=>{e.component.isUnmounted&&(i.instances[c]=null)},m=(0,r.h)(a,p({},h,t,{onVnodeUnmounted:f,ref:d}));return Ze(n.default,{Component:m,route:s})||m}}});function Ze(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const et=Xe;function tt(e){const t=ue(e.routes,e),n=e.parseQuery||Ve,i=e.stringifyQuery||Ue,o=e.history;const a=je(),c=je(),f=je(),y=(0,s.XI)(W);let v=W;d&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const _=m.bind(null,(e=>""+e)),E=m.bind(null,Me),T=m.bind(null,Fe);function S(e,n){let r,s;return H(e)?(r=t.getRecordMatcher(e),s=n):s=e,t.addRoute(s,r)}function k(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function C(){return t.getRoutes().map((e=>e.record))}function N(e){return!!t.getRecordMatcher(e)}function x(e,r){if(r=p({},r||y.value),"string"===typeof e){const s=w(n,e,r.path),i=t.resolve({path:s.path},r),a=o.createHref(s.fullPath);return p(s,i,{params:T(i.params),hash:Fe(s.hash),redirectedFrom:void 0,href:a})}let s;if("path"in e)s=p({},e,{path:w(n,e.path,r.path).path});else{const t=p({},e.params);for(const e in t)null==t[e]&&delete t[e];s=p({},e,{params:E(e.params)}),r.params=E(r.params)}const a=t.resolve(s,r),c=e.hash||"";a.params=_(T(a.params));const u=b(i,p({},e,{hash:Re(c),path:a.path})),l=o.createHref(u);return p({fullPath:u,hash:c,query:i===Ue?Be(e.query):e.query||{}},a,{redirectedFrom:void 0,href:l})}function D(e){return"string"===typeof e?w(n,e,y.value.path):p({},e)}function R(e,t){if(v!==e)return Y(8,{from:t,to:e})}function O(e){return j(e)}function F(e){return O(p(D(e),{replace:!0}))}function B(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"===typeof n?n(e):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=D(r):{path:r},r.params={}),p({query:e.query,hash:e.hash,params:e.params},r)}}function j(e,t){const n=v=x(e),r=y.value,s=e.state,o=e.force,a=!0===e.replace,c=B(n);if(c)return j(p(D(c),{state:s,force:o,replace:a}),t||n);const u=n;let l;return u.redirectedFrom=t,!o&&I(i,r,n)&&(l=Y(16,{to:u,from:r}),se(r,r,!0,!1)),(l?Promise.resolve(l):$(u,r)).catch((e=>X(e)?X(e,2)?e:re(e):te(e,u,r))).then((e=>{if(e){if(X(e,2))return j(p(D(e.to),{state:s,force:o,replace:a}),t||u)}else e=G(u,r,!0,a,s);return K(u,r,e),e}))}function q(e,t){const n=R(e,t);return n?Promise.reject(n):Promise.resolve()}function $(e,t){let n;const[r,s,i]=rt(e,t);n=$e(r.reverse(),"beforeRouteLeave",e,t);for(const a of r)a.leaveGuards.forEach((r=>{n.push(qe(r,e,t))}));const o=q.bind(null,e,t);return n.push(o),nt(n).then((()=>{n=[];for(const r of a.list())n.push(qe(r,e,t));return n.push(o),nt(n)})).then((()=>{n=$e(s,"beforeRouteUpdate",e,t);for(const r of s)r.updateGuards.forEach((r=>{n.push(qe(r,e,t))}));return n.push(o),nt(n)})).then((()=>{n=[];for(const r of e.matched)if(r.beforeEnter&&!t.matched.includes(r))if(Array.isArray(r.beforeEnter))for(const s of r.beforeEnter)n.push(qe(s,e,t));else n.push(qe(r.beforeEnter,e,t));return n.push(o),nt(n)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),n=$e(i,"beforeRouteEnter",e,t),n.push(o),nt(n)))).then((()=>{n=[];for(const r of c.list())n.push(qe(r,e,t));return n.push(o),nt(n)})).catch((e=>X(e,8)?e:Promise.reject(e)))}function K(e,t,n){for(const r of f.list())r(e,t,n)}function G(e,t,n,r,s){const i=R(e,t);if(i)return i;const a=t===W,c=d?history.state:{};n&&(r||a?o.replace(e.fullPath,p({scroll:a&&c&&c.scroll},s)):o.push(e.fullPath,s)),y.value=e,se(e,t,n,a),re()}let z;function J(){z=o.listen(((e,t,n)=>{const r=x(e),s=B(r);if(s)return void j(p(s,{replace:!0}),r).catch(g);v=r;const i=y.value;d&&V(M(i.fullPath,n.delta),P()),$(r,i).catch((e=>X(e,12)?e:X(e,2)?(j(e.to,r).then((e=>{X(e,20)&&!n.delta&&n.type===A.pop&&o.go(-1,!1)})).catch(g),Promise.reject()):(n.delta&&o.go(-n.delta,!1),te(e,r,i)))).then((e=>{e=e||G(r,i,!1),e&&(n.delta?o.go(-n.delta,!1):n.type===A.pop&&X(e,20)&&o.go(-1,!1)),K(r,i,e)})).catch(g)}))}let Q,Z=je(),ee=je();function te(e,t,n){re(e);const r=ee.list();return r.length?r.forEach((r=>r(e,t,n))):console.error(e),Promise.reject(e)}function ne(){return Q&&y.value!==W?Promise.resolve():new Promise(((e,t)=>{Z.add([e,t])}))}function re(e){return Q||(Q=!e,J(),Z.list().forEach((([t,n])=>e?n(e):t())),Z.reset()),e}function se(t,n,s,i){const{scrollBehavior:o}=e;if(!d||!o)return Promise.resolve();const a=!s&&U(M(t.fullPath,0))||(i||!s)&&history.state&&history.state.scroll||null;return(0,r.Y3)().then((()=>o(t,n,a))).then((e=>e&&L(e))).catch((e=>te(e,t,n)))}const ie=e=>o.go(e);let oe;const ae=new Set,ce={currentRoute:y,addRoute:S,removeRoute:k,hasRoute:N,getRoutes:C,resolve:x,options:e,push:O,replace:F,go:ie,back:()=>ie(-1),forward:()=>ie(1),beforeEach:a.add,beforeResolve:c.add,afterEach:f.add,onError:ee.add,isReady:ne,install(e){const t=this;e.component("RouterLink",He),e.component("RouterView",et),e.config.globalProperties.$router=t,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,s.SU)(y)}),d&&!oe&&y.value===W&&(oe=!0,O(o.location).catch((e=>{0})));const n={};for(const s in W)n[s]=(0,r.Fl)((()=>y.value[s]));e.provide(u,t),e.provide(l,(0,s.qj)(n)),e.provide(h,y);const i=e.unmount;ae.add(e),e.unmount=function(){ae.delete(e),ae.size<1&&(v=W,z&&z(),y.value=W,oe=!1,Q=!1),i()}}};return ce}function nt(e){return e.reduce(((e,t)=>e.then((()=>t()))),Promise.resolve())}function rt(e,t){const n=[],r=[],s=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const i=t.matched[o];i&&(e.matched.find((e=>E(e,i)))?r.push(i):n.push(i));const a=e.matched[o];a&&(t.matched.find((e=>E(e,a)))||s.push(a))}return[n,r,s]}},907:function(e,t,n){n.d(t,{MT:function(){return te},oR:function(){return y}});var r=n(252),s=n(262);function i(){return o().__VUE_DEVTOOLS_GLOBAL_HOOK__}function o(){return"undefined"!==typeof navigator&&"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{}}const a="function"===typeof Proxy,c="devtools-plugin:setup",u="plugin:settings:set";let l,h;function d(){var e;return void 0!==l||("undefined"!==typeof window&&window.performance?(l=!0,h=window.performance):"undefined"!==typeof n.g&&(null===(e=n.g.perf_hooks)||void 0===e?void 0:e.performance)?(l=!0,h=n.g.perf_hooks.performance):l=!1),l}function f(){return d()?h.now():Date.now()}class p{constructor(e,t){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=t;const n={};if(e.settings)for(const o in e.settings){const t=e.settings[o];n[o]=t.defaultValue}const r=`__vue-devtools-plugin-settings__${e.id}`;let s=Object.assign({},n);try{const e=localStorage.getItem(r),t=JSON.parse(e);Object.assign(s,t)}catch(i){}this.fallbacks={getSettings(){return s},setSettings(e){try{localStorage.setItem(r,JSON.stringify(e))}catch(i){}s=e},now(){return f()}},t&&t.on(u,((e,t)=>{e===this.plugin.id&&this.fallbacks.setSettings(t)})),this.proxiedOn=new Proxy({},{get:(e,t)=>this.target?this.target.on[t]:(...e)=>{this.onQueue.push({method:t,args:e})}}),this.proxiedTarget=new Proxy({},{get:(e,t)=>this.target?this.target[t]:"on"===t?this.proxiedOn:Object.keys(this.fallbacks).includes(t)?(...e)=>(this.targetQueue.push({method:t,args:e,resolve:()=>{}}),this.fallbacks[t](...e)):(...e)=>new Promise((n=>{this.targetQueue.push({method:t,args:e,resolve:n})}))})}async setRealTarget(e){this.target=e;for(const t of this.onQueue)this.target.on[t.method](...t.args);for(const t of this.targetQueue)t.resolve(await this.target[t.method](...t.args))}}function m(e,t){const n=e,r=o(),s=i(),u=a&&n.enableEarlyProxy;if(!s||!r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__&&u){const e=u?new p(n,s):null,i=r.__VUE_DEVTOOLS_PLUGINS__=r.__VUE_DEVTOOLS_PLUGINS__||[];i.push({pluginDescriptor:n,setupFn:t,proxy:e}),e&&t(e.proxiedTarget)}else s.emit(c,e,t)}
/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */
var g="store";function y(e){return void 0===e&&(e=null),(0,r.f3)(null!==e?e:g)}function v(e,t){Object.keys(e).forEach((function(n){return t(e[n],n)}))}function w(e){return null!==e&&"object"===typeof e}function b(e){return e&&"function"===typeof e.then}function _(e,t){return function(){return e(t)}}function I(e,t,n){return t.indexOf(e)<0&&(n&&n.prepend?t.unshift(e):t.push(e)),function(){var n=t.indexOf(e);n>-1&&t.splice(n,1)}}function E(e,t){e._actions=Object.create(null),e._mutations=Object.create(null),e._wrappedGetters=Object.create(null),e._modulesNamespaceMap=Object.create(null);var n=e.state;S(e,n,[],e._modules.root,!0),T(e,n,t)}function T(e,t,n){var r=e._state;e.getters={},e._makeLocalGettersCache=Object.create(null);var i=e._wrappedGetters,o={};v(i,(function(t,n){o[n]=_(t,e),Object.defineProperty(e.getters,n,{get:function(){return o[n]()},enumerable:!0})})),e._state=(0,s.qj)({data:t}),e.strict&&D(e),r&&n&&e._withCommit((function(){r.data=null}))}function S(e,t,n,r,s){var i=!n.length,o=e._modules.getNamespace(n);if(r.namespaced&&(e._modulesNamespaceMap[o],e._modulesNamespaceMap[o]=r),!i&&!s){var a=R(t,n.slice(0,-1)),c=n[n.length-1];e._withCommit((function(){a[c]=r.state}))}var u=r.context=k(e,o,n);r.forEachMutation((function(t,n){var r=o+n;A(e,r,t,u)})),r.forEachAction((function(t,n){var r=t.root?n:o+n,s=t.handler||t;N(e,r,s,u)})),r.forEachGetter((function(t,n){var r=o+n;x(e,r,t,u)})),r.forEachChild((function(r,i){S(e,t,n.concat(i),r,s)}))}function k(e,t,n){var r=""===t,s={dispatch:r?e.dispatch:function(n,r,s){var i=O(n,r,s),o=i.payload,a=i.options,c=i.type;return a&&a.root||(c=t+c),e.dispatch(c,o)},commit:r?e.commit:function(n,r,s){var i=O(n,r,s),o=i.payload,a=i.options,c=i.type;a&&a.root||(c=t+c),e.commit(c,o,a)}};return Object.defineProperties(s,{getters:{get:r?function(){return e.getters}:function(){return C(e,t)}},state:{get:function(){return R(e.state,n)}}}),s}function C(e,t){if(!e._makeLocalGettersCache[t]){var n={},r=t.length;Object.keys(e.getters).forEach((function(s){if(s.slice(0,r)===t){var i=s.slice(r);Object.defineProperty(n,i,{get:function(){return e.getters[s]},enumerable:!0})}})),e._makeLocalGettersCache[t]=n}return e._makeLocalGettersCache[t]}function A(e,t,n,r){var s=e._mutations[t]||(e._mutations[t]=[]);s.push((function(t){n.call(e,r.state,t)}))}function N(e,t,n,r){var s=e._actions[t]||(e._actions[t]=[]);s.push((function(t){var s=n.call(e,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:e.getters,rootState:e.state},t);return b(s)||(s=Promise.resolve(s)),e._devtoolHook?s.catch((function(t){throw e._devtoolHook.emit("vuex:error",t),t})):s}))}function x(e,t,n,r){e._wrappedGetters[t]||(e._wrappedGetters[t]=function(e){return n(r.state,r.getters,e.state,e.getters)})}function D(e){(0,r.YP)((function(){return e._state.data}),(function(){0}),{deep:!0,flush:"sync"})}function R(e,t){return t.reduce((function(e,t){return e[t]}),e)}function O(e,t,n){return w(e)&&e.type&&(n=t,t=e,e=e.type),{type:e,payload:t,options:n}}var P="vuex bindings",L="vuex:mutations",M="vuex:actions",F="vuex",V=0;function U(e,t){m({id:"org.vuejs.vuex",app:e,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[P]},(function(n){n.addTimelineLayer({id:L,label:"Vuex Mutations",color:B}),n.addTimelineLayer({id:M,label:"Vuex Actions",color:B}),n.addInspector({id:F,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree((function(n){if(n.app===e&&n.inspectorId===F)if(n.filter){var r=[];z(r,t._modules.root,n.filter,""),n.rootNodes=r}else n.rootNodes=[G(t._modules.root,"")]})),n.on.getInspectorState((function(n){if(n.app===e&&n.inspectorId===F){var r=n.nodeId;C(t,r),n.state=H(J(t._modules,r),"root"===r?t.getters:t._makeLocalGettersCache,r)}})),n.on.editInspectorState((function(n){if(n.app===e&&n.inspectorId===F){var r=n.nodeId,s=n.path;"root"!==r&&(s=r.split("/").filter(Boolean).concat(s)),t._withCommit((function(){n.set(t._state.data,s,n.state.value)}))}})),t.subscribe((function(e,t){var r={};e.payload&&(r.payload=e.payload),r.state=t,n.notifyComponentUpdate(),n.sendInspectorTree(F),n.sendInspectorState(F),n.addTimelineEvent({layerId:L,event:{time:Date.now(),title:e.type,data:r}})})),t.subscribeAction({before:function(e,t){var r={};e.payload&&(r.payload=e.payload),e._id=V++,e._time=Date.now(),r.state=t,n.addTimelineEvent({layerId:M,event:{time:e._time,title:e.type,groupId:e._id,subtitle:"start",data:r}})},after:function(e,t){var r={},s=Date.now()-e._time;r.duration={_custom:{type:"duration",display:s+"ms",tooltip:"Action duration",value:s}},e.payload&&(r.payload=e.payload),r.state=t,n.addTimelineEvent({layerId:M,event:{time:Date.now(),title:e.type,groupId:e._id,subtitle:"end",data:r}})}})}))}var B=8702998,j=6710886,q=16777215,$={label:"namespaced",textColor:q,backgroundColor:j};function K(e){return e&&"root"!==e?e.split("/").slice(-2,-1)[0]:"Root"}function G(e,t){return{id:t||"root",label:K(t),tags:e.namespaced?[$]:[],children:Object.keys(e._children).map((function(n){return G(e._children[n],t+n+"/")}))}}function z(e,t,n,r){r.includes(n)&&e.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:t.namespaced?[$]:[]}),Object.keys(t._children).forEach((function(s){z(e,t._children[s],n,r+s+"/")}))}function H(e,t,n){t="root"===n?t:t[n];var r=Object.keys(t),s={state:Object.keys(e.state).map((function(t){return{key:t,editable:!0,value:e.state[t]}}))};if(r.length){var i=W(t);s.getters=Object.keys(i).map((function(e){return{key:e.endsWith("/")?K(e):e,editable:!1,value:Q((function(){return i[e]}))}}))}return s}function W(e){var t={};return Object.keys(e).forEach((function(n){var r=n.split("/");if(r.length>1){var s=t,i=r.pop();r.forEach((function(e){s[e]||(s[e]={_custom:{value:{},display:e,tooltip:"Module",abstract:!0}}),s=s[e]._custom.value})),s[i]=Q((function(){return e[n]}))}else t[n]=Q((function(){return e[n]}))})),t}function J(e,t){var n=t.split("/").filter((function(e){return e}));return n.reduce((function(e,r,s){var i=e[r];if(!i)throw new Error('Missing module "'+r+'" for path "'+t+'".');return s===n.length-1?i:i._children}),"root"===t?e:e.root._children)}function Q(e){try{return e()}catch(t){return t}}var Y=function(e,t){this.runtime=t,this._children=Object.create(null),this._rawModule=e;var n=e.state;this.state=("function"===typeof n?n():n)||{}},X={namespaced:{configurable:!0}};X.namespaced.get=function(){return!!this._rawModule.namespaced},Y.prototype.addChild=function(e,t){this._children[e]=t},Y.prototype.removeChild=function(e){delete this._children[e]},Y.prototype.getChild=function(e){return this._children[e]},Y.prototype.hasChild=function(e){return e in this._children},Y.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)},Y.prototype.forEachChild=function(e){v(this._children,e)},Y.prototype.forEachGetter=function(e){this._rawModule.getters&&v(this._rawModule.getters,e)},Y.prototype.forEachAction=function(e){this._rawModule.actions&&v(this._rawModule.actions,e)},Y.prototype.forEachMutation=function(e){this._rawModule.mutations&&v(this._rawModule.mutations,e)},Object.defineProperties(Y.prototype,X);var Z=function(e){this.register([],e,!1)};function ee(e,t,n){if(t.update(n),n.modules)for(var r in n.modules){if(!t.getChild(r))return void 0;ee(e.concat(r),t.getChild(r),n.modules[r])}}Z.prototype.get=function(e){return e.reduce((function(e,t){return e.getChild(t)}),this.root)},Z.prototype.getNamespace=function(e){var t=this.root;return e.reduce((function(e,n){return t=t.getChild(n),e+(t.namespaced?n+"/":"")}),"")},Z.prototype.update=function(e){ee([],this.root,e)},Z.prototype.register=function(e,t,n){var r=this;void 0===n&&(n=!0);var s=new Y(t,n);if(0===e.length)this.root=s;else{var i=this.get(e.slice(0,-1));i.addChild(e[e.length-1],s)}t.modules&&v(t.modules,(function(t,s){r.register(e.concat(s),t,n)}))},Z.prototype.unregister=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1],r=t.getChild(n);r&&r.runtime&&t.removeChild(n)},Z.prototype.isRegistered=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1];return!!t&&t.hasChild(n)};function te(e){return new ne(e)}var ne=function(e){var t=this;void 0===e&&(e={});var n=e.plugins;void 0===n&&(n=[]);var r=e.strict;void 0===r&&(r=!1);var s=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new Z(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=s;var i=this,o=this,a=o.dispatch,c=o.commit;this.dispatch=function(e,t){return a.call(i,e,t)},this.commit=function(e,t,n){return c.call(i,e,t,n)},this.strict=r;var u=this._modules.root.state;S(this,u,[],this._modules.root),T(this,u),n.forEach((function(e){return e(t)}))},re={state:{configurable:!0}};ne.prototype.install=function(e,t){e.provide(t||g,this),e.config.globalProperties.$store=this;var n=void 0!==this._devtools&&this._devtools;n&&U(e,this)},re.state.get=function(){return this._state.data},re.state.set=function(e){0},ne.prototype.commit=function(e,t,n){var r=this,s=O(e,t,n),i=s.type,o=s.payload,a=(s.options,{type:i,payload:o}),c=this._mutations[i];c&&(this._withCommit((function(){c.forEach((function(e){e(o)}))})),this._subscribers.slice().forEach((function(e){return e(a,r.state)})))},ne.prototype.dispatch=function(e,t){var n=this,r=O(e,t),s=r.type,i=r.payload,o={type:s,payload:i},a=this._actions[s];if(a){try{this._actionSubscribers.slice().filter((function(e){return e.before})).forEach((function(e){return e.before(o,n.state)}))}catch(u){0}var c=a.length>1?Promise.all(a.map((function(e){return e(i)}))):a[0](i);return new Promise((function(e,t){c.then((function(t){try{n._actionSubscribers.filter((function(e){return e.after})).forEach((function(e){return e.after(o,n.state)}))}catch(u){0}e(t)}),(function(e){try{n._actionSubscribers.filter((function(e){return e.error})).forEach((function(t){return t.error(o,n.state,e)}))}catch(u){0}t(e)}))}))}},ne.prototype.subscribe=function(e,t){return I(e,this._subscribers,t)},ne.prototype.subscribeAction=function(e,t){var n="function"===typeof e?{before:e}:e;return I(n,this._actionSubscribers,t)},ne.prototype.watch=function(e,t,n){var s=this;return(0,r.YP)((function(){return e(s.state,s.getters)}),t,Object.assign({},n))},ne.prototype.replaceState=function(e){var t=this;this._withCommit((function(){t._state.data=e}))},ne.prototype.registerModule=function(e,t,n){void 0===n&&(n={}),"string"===typeof e&&(e=[e]),this._modules.register(e,t),S(this,this.state,e,this._modules.get(e),n.preserveState),T(this,this.state)},ne.prototype.unregisterModule=function(e){var t=this;"string"===typeof e&&(e=[e]),this._modules.unregister(e),this._withCommit((function(){var n=R(t.state,e.slice(0,-1));delete n[e[e.length-1]]})),E(this)},ne.prototype.hasModule=function(e){return"string"===typeof e&&(e=[e]),this._modules.isRegistered(e)},ne.prototype.hotUpdate=function(e){this._modules.update(e),E(this,!0)},ne.prototype._withCommit=function(e){var t=this._committing;this._committing=!0,e(),this._committing=t},Object.defineProperties(ne.prototype,re);oe((function(e,t){var n={};return se(t).forEach((function(t){var r=t.key,s=t.val;n[r]=function(){var t=this.$store.state,n=this.$store.getters;if(e){var r=ae(this.$store,"mapState",e);if(!r)return;t=r.context.state,n=r.context.getters}return"function"===typeof s?s.call(this,t,n):t[s]},n[r].vuex=!0})),n})),oe((function(e,t){var n={};return se(t).forEach((function(t){var r=t.key,s=t.val;n[r]=function(){var t=[],n=arguments.length;while(n--)t[n]=arguments[n];var r=this.$store.commit;if(e){var i=ae(this.$store,"mapMutations",e);if(!i)return;r=i.context.commit}return"function"===typeof s?s.apply(this,[r].concat(t)):r.apply(this.$store,[s].concat(t))}})),n})),oe((function(e,t){var n={};return se(t).forEach((function(t){var r=t.key,s=t.val;s=e+s,n[r]=function(){if(!e||ae(this.$store,"mapGetters",e))return this.$store.getters[s]},n[r].vuex=!0})),n})),oe((function(e,t){var n={};return se(t).forEach((function(t){var r=t.key,s=t.val;n[r]=function(){var t=[],n=arguments.length;while(n--)t[n]=arguments[n];var r=this.$store.dispatch;if(e){var i=ae(this.$store,"mapActions",e);if(!i)return;r=i.context.dispatch}return"function"===typeof s?s.apply(this,[r].concat(t)):r.apply(this.$store,[s].concat(t))}})),n}));function se(e){return ie(e)?Array.isArray(e)?e.map((function(e){return{key:e,val:e}})):Object.keys(e).map((function(t){return{key:t,val:e[t]}})):[]}function ie(e){return Array.isArray(e)||w(e)}function oe(e){return function(t,n){return"string"!==typeof t?(n=t,t=""):"/"!==t.charAt(t.length-1)&&(t+="/"),e(t,n)}}function ae(e,t,n){var r=e._modulesNamespaceMap[n];return r}},180:function(e,t,n){n.d(t,{Z:function(){return y}});var r=n(444),s=n(463),i=n(238),o=n(333);
/**
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
 */
class a{constructor(e,t){this._delegate=e,this.firebase=t,(0,i._addComponent)(e,new s.wA("app-compat",(()=>this),"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise((e=>{this._delegate.checkDestroyed(),e()})).then((()=>(this.firebase.INTERNAL.removeApp(this.name),(0,i.deleteApp)(this._delegate))))}_getService(e,t=i._DEFAULT_ENTRY_NAME){var n;this._delegate.checkDestroyed();const r=this._delegate.container.getProvider(e);return r.isInitialized()||"EXPLICIT"!==(null===(n=r.getComponent())||void 0===n?void 0:n.instantiationMode)||r.initialize(),r.getImmediate({identifier:t})}_removeServiceInstance(e,t=i._DEFAULT_ENTRY_NAME){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){(0,i._addComponent)(this._delegate,e)}_addOrOverwriteComponent(e){(0,i._addOrOverwriteComponent)(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}
/**
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
 */const c={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},u=new r.LL("app-compat","Firebase",c);
/**
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
 */
function l(e){const t={},n={__esModule:!0,initializeApp:a,app:o,registerVersion:i.registerVersion,setLogLevel:i.setLogLevel,onLog:i.onLog,apps:null,SDK_VERSION:i.SDK_VERSION,INTERNAL:{registerComponent:l,removeApp:s,useAsService:h,modularAPIs:i}};function s(e){delete t[e]}function o(e){if(e=e||i._DEFAULT_ENTRY_NAME,!(0,r.r3)(t,e))throw u.create("no-app",{appName:e});return t[e]}function a(s,o={}){const a=i.initializeApp(s,o);if((0,r.r3)(t,a.name))return t[a.name];const c=new e(a,n);return t[a.name]=c,c}function c(){return Object.keys(t).map((e=>t[e]))}function l(t){const s=t.name,a=s.replace("-compat","");if(i._registerComponent(t)&&"PUBLIC"===t.type){const i=(e=o())=>{if("function"!==typeof e[a])throw u.create("invalid-app-argument",{appName:s});return e[a]()};void 0!==t.serviceProps&&(0,r.ZB)(i,t.serviceProps),n[a]=i,e.prototype[a]=function(...e){const n=this._getService.bind(this,s);return n.apply(this,t.multipleInstances?e:[])}}return"PUBLIC"===t.type?n[a]:null}function h(e,t){if("serverAuth"===t)return null;const n=t;return n}return n["default"]=n,Object.defineProperty(n,"apps",{get:c}),o["App"]=e,n}
/**
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
 */function h(){const e=l(a);function t(t){(0,r.ZB)(e,t)}return e.INTERNAL=Object.assign(Object.assign({},e.INTERNAL),{createFirebaseNamespace:h,extendNamespace:t,createSubscribe:r.ne,ErrorFactory:r.LL,deepExtend:r.ZB}),e}const d=h(),f=new o.Yd("@firebase/app-compat"),p="@firebase/app-compat",m="0.1.22";
/**
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
 */
/**
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
 */
function g(e){(0,i.registerVersion)(p,m,e)}
/**
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
 */if((0,r.jU)()&&void 0!==self.firebase){f.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");const e=self.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&f.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}const y=d;g()},238:function(e,t,n){n.r(t),n.d(t,{FirebaseError:function(){return i.ZR},SDK_VERSION:function(){return J},_DEFAULT_ENTRY_NAME:function(){return M},_addComponent:function(){return B},_addOrOverwriteComponent:function(){return j},_apps:function(){return V},_clearComponents:function(){return G},_components:function(){return U},_getProvider:function(){return $},_registerComponent:function(){return q},_removeServiceInstance:function(){return K},deleteApp:function(){return Z},getApp:function(){return Y},getApps:function(){return X},initializeApp:function(){return Q},onLog:function(){return te},registerVersion:function(){return ee},setLogLevel:function(){return ne}});var r=n(463),s=n(333),i=n(444);
/**
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
 */
class o{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(a(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function a(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const c="@firebase/app",u="0.7.21",l=new s.Yd("@firebase/app"),h="@firebase/app-compat",d="@firebase/analytics-compat",f="@firebase/analytics",p="@firebase/app-check-compat",m="@firebase/app-check",g="@firebase/auth",y="@firebase/auth-compat",v="@firebase/database",w="@firebase/database-compat",b="@firebase/functions",_="@firebase/functions-compat",I="@firebase/installations",E="@firebase/installations-compat",T="@firebase/messaging",S="@firebase/messaging-compat",k="@firebase/performance",C="@firebase/performance-compat",A="@firebase/remote-config",N="@firebase/remote-config-compat",x="@firebase/storage",D="@firebase/storage-compat",R="@firebase/firestore",O="@firebase/firestore-compat",P="firebase",L="9.6.11",M="[DEFAULT]",F={[c]:"fire-core",[h]:"fire-core-compat",[f]:"fire-analytics",[d]:"fire-analytics-compat",[m]:"fire-app-check",[p]:"fire-app-check-compat",[g]:"fire-auth",[y]:"fire-auth-compat",[v]:"fire-rtdb",[w]:"fire-rtdb-compat",[b]:"fire-fn",[_]:"fire-fn-compat",[I]:"fire-iid",[E]:"fire-iid-compat",[T]:"fire-fcm",[S]:"fire-fcm-compat",[k]:"fire-perf",[C]:"fire-perf-compat",[A]:"fire-rc",[N]:"fire-rc-compat",[x]:"fire-gcs",[D]:"fire-gcs-compat",[R]:"fire-fst",[O]:"fire-fst-compat","fire-js":"fire-js",[P]:"fire-js-all"},V=new Map,U=new Map;function B(e,t){try{e.container.addComponent(t)}catch(n){l.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function j(e,t){e.container.addOrOverwriteComponent(t)}function q(e){const t=e.name;if(U.has(t))return l.debug(`There were multiple attempts to register component ${t}.`),!1;U.set(t,e);for(const n of V.values())B(n,e);return!0}function $(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function K(e,t,n=M){$(e,t).clearInstance(n)}function G(){U.clear()}
/**
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
 */const z={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},H=new i.LL("app","Firebase",z);
/**
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
 */
class W{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw H.create("app-deleted",{appName:this._name})}}
/**
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
 */const J=L;function Q(e,t={}){if("object"!==typeof t){const e=t;t={name:e}}const n=Object.assign({name:M,automaticDataCollectionEnabled:!1},t),s=n.name;if("string"!==typeof s||!s)throw H.create("bad-app-name",{appName:String(s)});const o=V.get(s);if(o){if((0,i.vZ)(e,o.options)&&(0,i.vZ)(n,o.config))return o;throw H.create("duplicate-app",{appName:s})}const a=new r.H0(s);for(const r of U.values())a.addComponent(r);const c=new W(e,n,a);return V.set(s,c),c}function Y(e=M){const t=V.get(e);if(!t)throw H.create("no-app",{appName:e});return t}function X(){return Array.from(V.values())}async function Z(e){const t=e.name;V.has(t)&&(V.delete(t),await Promise.all(e.container.getProviders().map((e=>e.delete()))),e.isDeleted=!0)}function ee(e,t,n){var s;let i=null!==(s=F[e])&&void 0!==s?s:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const e=[`Unable to register library "${i}" with version "${t}":`];return o&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void l.warn(e.join(" "))}q(new r.wA(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}function te(e,t){if(null!==e&&"function"!==typeof e)throw H.create("invalid-log-argument");(0,s.Am)(e,t)}function ne(e){(0,s.Ub)(e)}
/**
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
 */const re="firebase-heartbeat-database",se=1,ie="firebase-heartbeat-store";let oe=null;function ae(){return oe||(oe=(0,i.X3)(re,se,((e,t)=>{switch(t){case 0:e.createObjectStore(ie)}})).catch((e=>{throw H.create("storage-open",{originalErrorMessage:e.message})}))),oe}async function ce(e){try{const t=await ae();return t.transaction(ie).objectStore(ie).get(le(e))}catch(t){throw H.create("storage-get",{originalErrorMessage:t.message})}}async function ue(e,t){try{const n=await ae(),r=n.transaction(ie,"readwrite"),s=r.objectStore(ie);return await s.put(t,le(e)),r.complete}catch(n){throw H.create("storage-set",{originalErrorMessage:n.message})}}function le(e){return`${e.name}!${e.options.appId}`}
/**
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
 */const he=1024,de=2592e6;class fe{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new ge(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=pe();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((e=>e.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=de})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=pe(),{heartbeatsToSend:t,unsentEntries:n}=me(this._heartbeatsCache.heartbeats),r=(0,i.L)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function pe(){const e=new Date;return e.toISOString().substring(0,10)}function me(e,t=he){const n=[];let r=e.slice();for(const s of e){const e=n.find((e=>e.agent===s.agent));if(e){if(e.dates.push(s.date),ye(n)>t){e.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),ye(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class ge{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,i.hl)()&&(0,i.eu)().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await ce(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return ue(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return ue(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function ye(e){return(0,i.L)(JSON.stringify({version:2,heartbeats:e})).length}
/**
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
 */function ve(e){q(new r.wA("platform-logger",(e=>new o(e)),"PRIVATE")),q(new r.wA("heartbeat",(e=>new fe(e)),"PRIVATE")),ee(c,u,e),ee(c,u,"esm2017"),ee("fire-js","")}ve("")},463:function(e,t,n){n.d(t,{H0:function(){return u},wA:function(){return s}});var r=n(444);class s{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
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
 */const i="[DEFAULT]";
/**
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
 */class o{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r.BH;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(c(e))try{this.getOrInitializeService({instanceIdentifier:i})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=i){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=i){return this.instances.has(e)}getOptions(e=i){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[s,i]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(s);n===e&&i.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),s=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const s of n)try{s(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(r){}return n||null}normalizeInstanceIdentifier(e=i){return this.component?this.component.multipleInstances?e:i:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===i?void 0:e}function c(e){return"EAGER"===e.instantiationMode}
/**
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
 */class u{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},333:function(e,t,n){n.d(t,{Am:function(){return h},Ub:function(){return l},Yd:function(){return u},in:function(){return s}});
/**
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
 */
const r=[];var s;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(s||(s={}));const i={debug:s.DEBUG,verbose:s.VERBOSE,info:s.INFO,warn:s.WARN,error:s.ERROR,silent:s.SILENT},o=s.INFO,a={[s.DEBUG]:"log",[s.VERBOSE]:"log",[s.INFO]:"info",[s.WARN]:"warn",[s.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),s=a[t];if(!s)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[s](`[${r}]  ${e.name}:`,...n)};class u{constructor(e){this.name=e,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in s))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?i[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,s.DEBUG,...e),this._logHandler(this,s.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,s.VERBOSE,...e),this._logHandler(this,s.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,s.INFO,...e),this._logHandler(this,s.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,s.WARN,...e),this._logHandler(this,s.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,s.ERROR,...e),this._logHandler(this,s.ERROR,...e)}}function l(e){r.forEach((t=>{t.setLogLevel(e)}))}function h(e,t){for(const n of r){let r=null;t&&t.level&&(r=i[t.level]),n.userLogHandler=null===e?null:(t,n,...i)=>{const o=i.map((e=>{if(null==e)return null;if("string"===typeof e)return e;if("number"===typeof e||"boolean"===typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(t){return null}})).filter((e=>e)).join(" ");n>=(null!==r&&void 0!==r?r:t.logLevel)&&e({level:s[n].toLowerCase(),message:o,args:i,type:t.name})}}}}}]);
//# sourceMappingURL=chunk-vendors.c5241e54.js.map