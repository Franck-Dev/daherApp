"use strict";var Ze=Object.defineProperty,Ge=Object.getOwnPropertySymbols,ze=Object.prototype.hasOwnProperty,Xe=Object.prototype.propertyIsEnumerable,He=(R,D,u)=>D in R?Ze(R,D,{enumerable:!0,configurable:!0,writable:!0,value:u}):R[D]=u,Y=(R,D)=>{for(var u in D||(D={}))ze.call(D,u)&&He(R,u,D[u]);if(Ge)for(var u of Ge(D))Xe.call(D,u)&&He(R,u,D[u]);return R};(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1763],{8805:(R,D,u)=>{u.d(D,{R:()=>_});var f=u(8345);function _(v){return p=>p.lift(new E(v))}class E{constructor(p){this.notifier=p}call(p,b){const y=new A(p),d=(0,f.ft)(this.notifier,new f.IY(y));return d&&!y.seenValue?(y.add(d),b.subscribe(y)):y}}class A extends f.Ds{constructor(p){super(p),this.seenValue=!1}notifyNext(){this.seenValue=!0,this.complete()}notifyComplete(){}}},6339:(R,D,u)=>{u.d(D,{o:()=>E});var f=u(1346);class _ extends f.w{constructor(v,p){super()}schedule(v,p=0){return this}}class E extends _{constructor(v,p){super(v,p),this.scheduler=v,this.work=p,this.pending=!1}schedule(v,p=0){if(this.closed)return this;this.state=v;const b=this.id,y=this.scheduler;return null!=b&&(this.id=this.recycleAsyncId(y,b,p)),this.pending=!0,this.delay=p,this.id=this.id||this.requestAsyncId(y,this.id,p),this}requestAsyncId(v,p,b=0){return setInterval(v.flush.bind(v,this),b)}recycleAsyncId(v,p,b=0){if(null!==b&&this.delay===b&&!1===this.pending)return p;clearInterval(p)}execute(v,p){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const b=this._execute(v,p);if(b)return b;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(v,p){let y,b=!1;try{this.work(v)}catch(d){b=!0,y=!!d&&d||new Error(d)}if(b)return this.unsubscribe(),y}_unsubscribe(){const v=this.id,p=this.scheduler,b=p.actions,y=b.indexOf(this);this.work=null,this.state=null,this.pending=!1,this.scheduler=null,-1!==y&&b.splice(y,1),null!=v&&(this.id=this.recycleAsyncId(p,v,null)),this.delay=null}}},5192:(R,D,u)=>{u.d(D,{v:()=>_});let f=(()=>{class E{constructor(v,p=E.now){this.SchedulerAction=v,this.now=p}schedule(v,p=0,b){return new this.SchedulerAction(this,v).schedule(b,p)}}return E.now=()=>Date.now(),E})();class _ extends f{constructor(A,v=f.now){super(A,()=>_.delegate&&_.delegate!==this?_.delegate.now():v()),this.actions=[],this.active=!1,this.scheduled=void 0}schedule(A,v=0,p){return _.delegate&&_.delegate!==this?_.delegate.schedule(A,v,p):super.schedule(A,v,p)}flush(A){const{actions:v}=this;if(this.active)return void v.push(A);let p;this.active=!0;do{if(p=A.execute(A.state,A.delay))break}while(A=v.shift());if(this.active=!1,p){for(;A=v.shift();)A.unsubscribe();throw p}}}},8178:(R,D,u)=>{u.d(D,{P:()=>A});var f=u(6339);const A=new(u(5192).v)(f.o)},2048:(R,D,u)=>{u.d(D,{f:()=>p});var f=u(8260),_=u(3668),E=u(4522),A=u(3521);let p=(()=>{class b{constructor(d,C){this.http=d,this.requestService=C}getUserById(d){return this.requestService.createGetRequest(f.N.usineApi+`users/${d}`)}getUsers(d){return this.requestService.createGetRequest(f.N.usineApi+"users")}registerUser(d){return this.requestService.createPostRequest(f.N.usineApi+"users",d)}getIri(d){return"string"==typeof d?d:`/api/users/${d.id}`}getGroups(){return this.requestService.createGetRequest(f.N.usineApi+"groupe_affectations")}createGroup(d){return this.requestService.createPostRequest(f.N.usineApi+"groupe_affectations",d)}}return b.\u0275fac=function(d){return new(d||b)(_.LFG(E.eN),_.LFG(A.s))},b.\u0275prov=_.Yz7({token:b,factory:b.\u0275fac,providedIn:"root"}),b})()},6329:(R,D,u)=>{u.d(D,{Em:()=>he,tE:()=>a,qm:()=>re});var f=u(6019),_=u(3668),E=u(928),A=u(8095),v=u(1346),p=u(4099),b=u(2411),y=u(1628),d=u(4168),C=u(8178);class l{constructor(e,t){this.dueTime=e,this.scheduler=t}call(e,t){return t.subscribe(new m(e,this.dueTime,this.scheduler))}}class m extends d.L{constructor(e,t,s){super(e),this.dueTime=t,this.scheduler=s,this.debouncedSubscription=null,this.lastValue=null,this.hasValue=!1}_next(e){this.clearDebounce(),this.lastValue=e,this.hasValue=!0,this.add(this.debouncedSubscription=this.scheduler.schedule(T,this.dueTime,this))}_complete(){this.debouncedNext(),this.destination.complete()}debouncedNext(){if(this.clearDebounce(),this.hasValue){const{lastValue:e}=this;this.lastValue=null,this.hasValue=!1,this.destination.next(e)}}clearDebounce(){const e=this.debouncedSubscription;null!==e&&(this.remove(e),e.unsubscribe(),this.debouncedSubscription=null)}}function T(o){o.debouncedNext()}class F{constructor(e){this.total=e}call(e,t){return t.subscribe(new k(e,this.total))}}class k extends d.L{constructor(e,t){super(e),this.total=t,this.count=0}_next(e){++this.count>this.total&&this.destination.next(e)}}var L=u(5722),U=u(8735),x=u(8053),B=u(5389),h=u(8805),w=u(348);class he extends class{constructor(e){this._items=e,this._activeItemIndex=-1,this._activeItem=null,this._wrap=!1,this._letterKeyStream=new A.xQ,this._typeaheadSubscription=v.w.EMPTY,this._vertical=!0,this._allowedModifierKeys=[],this._homeAndEnd=!1,this._skipPredicateFn=t=>t.disabled,this._pressedLetters=[],this.tabOut=new A.xQ,this.change=new A.xQ,e instanceof _.n_E&&e.changes.subscribe(t=>{if(this._activeItem){const r=t.toArray().indexOf(this._activeItem);r>-1&&r!==this._activeItemIndex&&(this._activeItemIndex=r)}})}skipPredicate(e){return this._skipPredicateFn=e,this}withWrap(e=!0){return this._wrap=e,this}withVerticalOrientation(e=!0){return this._vertical=e,this}withHorizontalOrientation(e){return this._horizontal=e,this}withAllowedModifierKeys(e){return this._allowedModifierKeys=e,this}withTypeAhead(e=200){return this._typeaheadSubscription.unsubscribe(),this._typeaheadSubscription=this._letterKeyStream.pipe((0,L.b)(t=>this._pressedLetters.push(t)),function(o,e=C.P){return t=>t.lift(new l(o,e))}(e),(0,U.h)(()=>this._pressedLetters.length>0),(0,x.U)(()=>this._pressedLetters.join(""))).subscribe(t=>{const s=this._getItemsArray();for(let r=1;r<s.length+1;r++){const g=(this._activeItemIndex+r)%s.length,O=s[g];if(!this._skipPredicateFn(O)&&0===O.getLabel().toUpperCase().trim().indexOf(t)){this.setActiveItem(g);break}}this._pressedLetters=[]}),this}withHomeAndEnd(e=!0){return this._homeAndEnd=e,this}setActiveItem(e){const t=this._activeItem;this.updateActiveItem(e),this._activeItem!==t&&this.change.next(this._activeItemIndex)}onKeydown(e){const t=e.keyCode,r=["altKey","ctrlKey","metaKey","shiftKey"].every(g=>!e[g]||this._allowedModifierKeys.indexOf(g)>-1);switch(t){case y.Mf:return void this.tabOut.next();case y.JH:if(this._vertical&&r){this.setNextItemActive();break}return;case y.LH:if(this._vertical&&r){this.setPreviousItemActive();break}return;case y.SV:if(this._horizontal&&r){"rtl"===this._horizontal?this.setPreviousItemActive():this.setNextItemActive();break}return;case y.oh:if(this._horizontal&&r){"rtl"===this._horizontal?this.setNextItemActive():this.setPreviousItemActive();break}return;case y.Sd:if(this._homeAndEnd&&r){this.setFirstItemActive();break}return;case y.uR:if(this._homeAndEnd&&r){this.setLastItemActive();break}return;default:return void((r||(0,y.Vb)(e,"shiftKey"))&&(e.key&&1===e.key.length?this._letterKeyStream.next(e.key.toLocaleUpperCase()):(t>=y.A&&t<=y.Z||t>=y.xE&&t<=y.aO)&&this._letterKeyStream.next(String.fromCharCode(t))))}this._pressedLetters=[],e.preventDefault()}get activeItemIndex(){return this._activeItemIndex}get activeItem(){return this._activeItem}isTyping(){return this._pressedLetters.length>0}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._items.length-1,-1)}setNextItemActive(){this._activeItemIndex<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(e){const t=this._getItemsArray(),s="number"==typeof e?e:t.indexOf(e),r=t[s];this._activeItem=null==r?null:r,this._activeItemIndex=s}_setActiveItemByDelta(e){this._wrap?this._setActiveInWrapMode(e):this._setActiveInDefaultMode(e)}_setActiveInWrapMode(e){const t=this._getItemsArray();for(let s=1;s<=t.length;s++){const r=(this._activeItemIndex+e*s+t.length)%t.length;if(!this._skipPredicateFn(t[r]))return void this.setActiveItem(r)}}_setActiveInDefaultMode(e){this._setActiveItemByIndex(this._activeItemIndex+e,e)}_setActiveItemByIndex(e,t){const s=this._getItemsArray();if(s[e]){for(;this._skipPredicateFn(s[e]);)if(!s[e+=t])return;this.setActiveItem(e)}}_getItemsArray(){return this._items instanceof _.n_E?this._items.toArray():this._items}}{constructor(){super(...arguments),this._origin="program"}setFocusOrigin(e){return this._origin=e,this}setActiveItem(e){super.setActiveItem(e),this.activeItem&&this.activeItem.focus(this._origin)}}const be=new _.OlP("cdk-input-modality-detector-options"),ye={ignoreKeys:[y.zL,y.jx,y.b2,y.MW,y.JU]},K=(0,E.i$)({passive:!0,capture:!0});let Me=(()=>{class o{constructor(t,s,r,g){this._platform=t,this._mostRecentTarget=null,this._modality=new p.X(null),this._lastTouchMs=0,this._onKeydown=O=>{var P,$;(null==($=null==(P=this._options)?void 0:P.ignoreKeys)?void 0:$.some(ce=>ce===O.keyCode))||(this._modality.next("keyboard"),this._mostRecentTarget=(0,E.sA)(O))},this._onMousedown=O=>{Date.now()-this._lastTouchMs<650||(this._modality.next(function(o){return 0===o.buttons||0===o.offsetX&&0===o.offsetY}(O)?"keyboard":"mouse"),this._mostRecentTarget=(0,E.sA)(O))},this._onTouchstart=O=>{!function(o){const e=o.touches&&o.touches[0]||o.changedTouches&&o.changedTouches[0];return!(!e||-1!==e.identifier||null!=e.radiusX&&1!==e.radiusX||null!=e.radiusY&&1!==e.radiusY)}(O)?(this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=(0,E.sA)(O)):this._modality.next("keyboard")},this._options=Y(Y({},ye),g),this.modalityDetected=this._modality.pipe(e=>e.lift(new F(1))),this.modalityChanged=this.modalityDetected.pipe((0,B.x)()),t.isBrowser&&s.runOutsideAngular(()=>{r.addEventListener("keydown",this._onKeydown,K),r.addEventListener("mousedown",this._onMousedown,K),r.addEventListener("touchstart",this._onTouchstart,K)})}get mostRecentModality(){return this._modality.value}ngOnDestroy(){this._modality.complete(),this._platform.isBrowser&&(document.removeEventListener("keydown",this._onKeydown,K),document.removeEventListener("mousedown",this._onMousedown,K),document.removeEventListener("touchstart",this._onTouchstart,K))}}return o.\u0275fac=function(t){return new(t||o)(_.LFG(E.t4),_.LFG(_.R0b),_.LFG(f.K0),_.LFG(be,8))},o.\u0275prov=_.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();const i=new _.OlP("cdk-focus-monitor-default-options"),n=(0,E.i$)({passive:!0,capture:!0});let a=(()=>{class o{constructor(t,s,r,g,O){this._ngZone=t,this._platform=s,this._inputModalityDetector=r,this._origin=null,this._windowFocused=!1,this._originFromTouchInteraction=!1,this._elementInfo=new Map,this._monitoredElementCount=0,this._rootNodeFocusListenerCount=new Map,this._windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=window.setTimeout(()=>this._windowFocused=!1)},this._stopInputModalityDetector=new A.xQ,this._rootNodeFocusAndBlurListener=P=>{const $=(0,E.sA)(P),ce="focus"===P.type?this._onFocus:this._onBlur;for(let Q=$;Q;Q=Q.parentElement)ce.call(this,P,Q)},this._document=g,this._detectionMode=(null==O?void 0:O.detectionMode)||0}monitor(t,s=!1){const r=(0,w.fI)(t);if(!this._platform.isBrowser||1!==r.nodeType)return(0,b.of)(null);const g=(0,E.kV)(r)||this._getDocument(),O=this._elementInfo.get(r);if(O)return s&&(O.checkChildren=!0),O.subject;const P={checkChildren:s,subject:new A.xQ,rootNode:g};return this._elementInfo.set(r,P),this._registerGlobalListeners(P),P.subject}stopMonitoring(t){const s=(0,w.fI)(t),r=this._elementInfo.get(s);r&&(r.subject.complete(),this._setClasses(s),this._elementInfo.delete(s),this._removeGlobalListeners(r))}focusVia(t,s,r){const g=(0,w.fI)(t);g===this._getDocument().activeElement?this._getClosestElementsInfo(g).forEach(([P,$])=>this._originChanged(P,s,$)):(this._setOrigin(s),"function"==typeof g.focus&&g.focus(r))}ngOnDestroy(){this._elementInfo.forEach((t,s)=>this.stopMonitoring(s))}_getDocument(){return this._document||document}_getWindow(){return this._getDocument().defaultView||window}_getFocusOrigin(t){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(t)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:"program"}_shouldBeAttributedToTouch(t){return 1===this._detectionMode||!!(null==t?void 0:t.contains(this._inputModalityDetector._mostRecentTarget))}_setClasses(t,s){t.classList.toggle("cdk-focused",!!s),t.classList.toggle("cdk-touch-focused","touch"===s),t.classList.toggle("cdk-keyboard-focused","keyboard"===s),t.classList.toggle("cdk-mouse-focused","mouse"===s),t.classList.toggle("cdk-program-focused","program"===s)}_setOrigin(t,s=!1){this._ngZone.runOutsideAngular(()=>{this._origin=t,this._originFromTouchInteraction="touch"===t&&s,0===this._detectionMode&&(clearTimeout(this._originTimeoutId),this._originTimeoutId=setTimeout(()=>this._origin=null,this._originFromTouchInteraction?650:1))})}_onFocus(t,s){const r=this._elementInfo.get(s),g=(0,E.sA)(t);!r||!r.checkChildren&&s!==g||this._originChanged(s,this._getFocusOrigin(g),r)}_onBlur(t,s){const r=this._elementInfo.get(s);!r||r.checkChildren&&t.relatedTarget instanceof Node&&s.contains(t.relatedTarget)||(this._setClasses(s),this._emitOrigin(r.subject,null))}_emitOrigin(t,s){this._ngZone.run(()=>t.next(s))}_registerGlobalListeners(t){if(!this._platform.isBrowser)return;const s=t.rootNode,r=this._rootNodeFocusListenerCount.get(s)||0;r||this._ngZone.runOutsideAngular(()=>{s.addEventListener("focus",this._rootNodeFocusAndBlurListener,n),s.addEventListener("blur",this._rootNodeFocusAndBlurListener,n)}),this._rootNodeFocusListenerCount.set(s,r+1),1==++this._monitoredElementCount&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe((0,h.R)(this._stopInputModalityDetector)).subscribe(g=>{this._setOrigin(g,!0)}))}_removeGlobalListeners(t){const s=t.rootNode;if(this._rootNodeFocusListenerCount.has(s)){const r=this._rootNodeFocusListenerCount.get(s);r>1?this._rootNodeFocusListenerCount.set(s,r-1):(s.removeEventListener("focus",this._rootNodeFocusAndBlurListener,n),s.removeEventListener("blur",this._rootNodeFocusAndBlurListener,n),this._rootNodeFocusListenerCount.delete(s))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(t,s,r){this._setClasses(t,s),this._emitOrigin(r.subject,s),this._lastFocusOrigin=s}_getClosestElementsInfo(t){const s=[];return this._elementInfo.forEach((r,g)=>{(g===t||r.checkChildren&&g.contains(t))&&s.push([g,r])}),s}}return o.\u0275fac=function(t){return new(t||o)(_.LFG(_.R0b),_.LFG(E.t4),_.LFG(Me),_.LFG(f.K0,8),_.LFG(i,8))},o.\u0275prov=_.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();const S="cdk-high-contrast-black-on-white",V="cdk-high-contrast-white-on-black",Z="cdk-high-contrast-active";let re=(()=>{class o{constructor(t,s){this._platform=t,this._document=s}getHighContrastMode(){if(!this._platform.isBrowser)return 0;const t=this._document.createElement("div");t.style.backgroundColor="rgb(1,2,3)",t.style.position="absolute",this._document.body.appendChild(t);const s=this._document.defaultView||window,r=s&&s.getComputedStyle?s.getComputedStyle(t):null,g=(r&&r.backgroundColor||"").replace(/ /g,"");switch(t.remove(),g){case"rgb(0,0,0)":return 2;case"rgb(255,255,255)":return 1}return 0}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){const t=this._document.body.classList;t.remove(Z),t.remove(S),t.remove(V),this._hasCheckedHighContrastMode=!0;const s=this.getHighContrastMode();1===s?(t.add(Z),t.add(S)):2===s&&(t.add(Z),t.add(V))}}}return o.\u0275fac=function(t){return new(t||o)(_.LFG(E.t4),_.LFG(f.K0))},o.\u0275prov=_.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})()},8290:(R,D,u)=>{u.d(D,{vT:()=>d,Is:()=>b});var f=u(3668),_=u(6019);const E=new f.OlP("cdk-dir-doc",{providedIn:"root",factory:function(){return(0,f.f3M)(_.K0)}}),v=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;let b=(()=>{class C{constructor(l){if(this.value="ltr",this.change=new f.vpe,l){const T=l.documentElement?l.documentElement.dir:null;this.value=function(C){const I=(null==C?void 0:C.toLowerCase())||"";return"auto"===I&&"undefined"!=typeof navigator&&(null==navigator?void 0:navigator.language)?v.test(navigator.language)?"rtl":"ltr":"rtl"===I?"rtl":"ltr"}((l.body?l.body.dir:null)||T||"ltr")}}ngOnDestroy(){this.change.complete()}}return C.\u0275fac=function(l){return new(l||C)(f.LFG(E,8))},C.\u0275prov=f.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})(),d=(()=>{class C{}return C.\u0275fac=function(l){return new(l||C)},C.\u0275mod=f.oAB({type:C}),C.\u0275inj=f.cJS({}),C})()},348:(R,D,u)=>{u.d(D,{t6:()=>A,Ig:()=>_,fI:()=>b,su:()=>E});var f=u(3668);function _(d){return null!=d&&"false"!=`${d}`}function E(d,C=0){return A(d)?Number(d):C}function A(d){return!isNaN(parseFloat(d))&&!isNaN(Number(d))}function b(d){return d instanceof f.SBq?d.nativeElement:d}},5351:(R,D,u)=>{u.d(D,{o2:()=>_,A8:()=>d,yy:()=>v,eX:()=>p,k:()=>C,Z9:()=>E});var f=u(3668);class _{}function E(I){return I&&"function"==typeof I.connect}class v{applyChanges(l,m,T,N,F){l.forEachOperation((k,L,U)=>{let x,B;if(null==k.previousIndex){const h=T(k,L,U);x=m.createEmbeddedView(h.templateRef,h.context,h.index),B=1}else null==U?(m.remove(L),B=3):(x=m.get(L),m.move(x,U),B=2);F&&F({context:null==x?void 0:x.context,operation:B,record:k})})}detach(){}}class p{constructor(){this.viewCacheSize=20,this._viewCache=[]}applyChanges(l,m,T,N,F){l.forEachOperation((k,L,U)=>{let x,B;null==k.previousIndex?(x=this._insertView(()=>T(k,L,U),U,m,N(k)),B=x?1:0):null==U?(this._detachAndCacheView(L,m),B=3):(x=this._moveView(L,U,m,N(k)),B=2),F&&F({context:null==x?void 0:x.context,operation:B,record:k})})}detach(){for(const l of this._viewCache)l.destroy();this._viewCache=[]}_insertView(l,m,T,N){const F=this._insertViewFromCache(m,T);if(F)return void(F.context.$implicit=N);const k=l();return T.createEmbeddedView(k.templateRef,k.context,k.index)}_detachAndCacheView(l,m){const T=m.detach(l);this._maybeCacheView(T,m)}_moveView(l,m,T,N){const F=T.get(l);return T.move(F,m),F.context.$implicit=N,F}_maybeCacheView(l,m){if(this._viewCache.length<this.viewCacheSize)this._viewCache.push(l);else{const T=m.indexOf(l);-1===T?l.destroy():m.remove(T)}}_insertViewFromCache(l,m){const T=this._viewCache.pop();return T&&m.insert(T,l),T||null}}let d=(()=>{class I{constructor(){this._listeners=[]}notify(m,T){for(let N of this._listeners)N(m,T)}listen(m){return this._listeners.push(m),()=>{this._listeners=this._listeners.filter(T=>m!==T)}}ngOnDestroy(){this._listeners=[]}}return I.\u0275fac=function(m){return new(m||I)},I.\u0275prov=f.Yz7({token:I,factory:I.\u0275fac,providedIn:"root"}),I})();const C=new f.OlP("_ViewRepeater")},1628:(R,D,u)=>{u.d(D,{A:()=>te,zL:()=>y,jx:()=>b,JH:()=>x,uR:()=>N,K5:()=>v,Sd:()=>F,oh:()=>k,b2:()=>We,MW:()=>K,aO:()=>ue,SV:()=>U,JU:()=>p,L_:()=>l,Mf:()=>E,LH:()=>L,Z:()=>X,xE:()=>H,Vb:()=>$e});const E=9,v=13,p=16,b=17,y=18,l=32,N=35,F=36,k=37,L=38,U=39,x=40,H=48,ue=57,te=65,X=90,K=91,We=224;function $e(J,...Ke){return Ke.length?Ke.some(Ye=>J[Ye]):J.altKey||J.shiftKey||J.ctrlKey||J.metaKey}},928:(R,D,u)=>{u.d(D,{t4:()=>A,ud:()=>v,sA:()=>x,kV:()=>L,Oy:()=>B,i$:()=>I});var f=u(3668),_=u(6019);let E;try{E="undefined"!=typeof Intl&&Intl.v8BreakIterator}catch(h){E=!1}let d,F,A=(()=>{class h{constructor(j){this._platformId=j,this.isBrowser=this._platformId?(0,_.NF)(this._platformId):"object"==typeof document&&!!document,this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent),this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent),this.BLINK=this.isBrowser&&!(!window.chrome&&!E)&&"undefined"!=typeof CSS&&!this.EDGE&&!this.TRIDENT,this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT,this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent),this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT,this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT}}return h.\u0275fac=function(j){return new(j||h)(f.LFG(f.Lbi))},h.\u0275prov=f.Yz7({token:h,factory:h.\u0275fac,providedIn:"root"}),h})(),v=(()=>{class h{}return h.\u0275fac=function(j){return new(j||h)},h.\u0275mod=f.oAB({type:h}),h.\u0275inj=f.cJS({}),h})();function I(h){return function(){if(null==d&&"undefined"!=typeof window)try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>d=!0}))}finally{d=d||!1}return d}()?h:!!h.capture}function L(h){if(function(){if(null==F){const h="undefined"!=typeof document?document.head:null;F=!(!h||!h.createShadowRoot&&!h.attachShadow)}return F}()){const w=h.getRootNode?h.getRootNode():null;if("undefined"!=typeof ShadowRoot&&ShadowRoot&&w instanceof ShadowRoot)return w}return null}function x(h){return h.composedPath?h.composedPath()[0]:h.target}function B(){return"undefined"!=typeof __karma__&&!!__karma__||"undefined"!=typeof jasmine&&!!jasmine||"undefined"!=typeof jest&&!!jest||"undefined"!=typeof Mocha&&!!Mocha}},6731:(R,D,u)=>{u.d(D,{rD:()=>te,BQ:()=>L,si:()=>_e,sb:()=>H});var f=u(3668),_=u(6329),E=u(8290),v=u(6019),p=u(928),b=u(348);const k=new f.OlP("mat-sanity-checks",{providedIn:"root",factory:function(){return!0}});let L=(()=>{class c{constructor(n,a,M){this._sanityChecks=a,this._document=M,this._hasDoneGlobalChecks=!1,n._applyBodyHighContrastModeCssClasses(),this._hasDoneGlobalChecks||(this._hasDoneGlobalChecks=!0)}_checkIsEnabled(n){return!(0,p.Oy)()&&("boolean"==typeof this._sanityChecks?this._sanityChecks:!!this._sanityChecks[n])}}return c.\u0275fac=function(n){return new(n||c)(f.LFG(_.qm),f.LFG(k,8),f.LFG(v.K0))},c.\u0275mod=f.oAB({type:c}),c.\u0275inj=f.cJS({imports:[[E.vT],E.vT]}),c})();function H(c,i=0){return class extends c{constructor(...n){super(...n),this._tabIndex=i,this.defaultTabIndex=i}get tabIndex(){return this.disabled?-1:this._tabIndex}set tabIndex(n){this._tabIndex=null!=n?(0,b.su)(n):this.defaultTabIndex}}}let te=(()=>{class c{isErrorState(n,a){return!!(n&&n.invalid&&(n.touched||a&&a.submitted))}}return c.\u0275fac=function(n){return new(n||c)},c.\u0275prov=f.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),c})(),_e=(()=>{class c{}return c.\u0275fac=function(n){return new(n||c)},c.\u0275mod=f.oAB({type:c}),c.\u0275inj=f.cJS({imports:[[L,p.ud],L]}),c})()}}]);