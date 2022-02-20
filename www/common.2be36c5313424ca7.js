"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8592],{9318:(v,l,s)=>{s.d(l,{i:()=>e});const e=a=>a&&""!==a.dir?"rtl"===a.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},3620:(v,l,s)=>{s.r(l),s.d(l,{startFocusVisible:()=>o});const e="ion-focused",p=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],o=c=>{let g=[],i=!0;const t=c?c.shadowRoot:document,r=c||document.body,n=d=>{g.forEach(m=>m.classList.remove(e)),d.forEach(m=>m.classList.add(e)),g=d},u=()=>{i=!1,n([])},h=d=>{i=p.includes(d.key),i||n([])},w=d=>{if(i&&d.composedPath){const m=d.composedPath().filter(f=>!!f.classList&&f.classList.contains("ion-focusable"));n(m)}},_=()=>{t.activeElement===r&&n([])};return t.addEventListener("keydown",h),t.addEventListener("focusin",w),t.addEventListener("focusout",_),t.addEventListener("touchstart",u),t.addEventListener("mousedown",u),{destroy:()=>{t.removeEventListener("keydown",h),t.removeEventListener("focusin",w),t.removeEventListener("focusout",_),t.removeEventListener("touchstart",u),t.removeEventListener("mousedown",u)},setFocus:n}}},8107:(v,l,s)=>{s.d(l,{a:()=>e,b:()=>t,c:()=>a,d:()=>c,e:()=>r,f:()=>i,g:()=>g,h:()=>o,i:()=>p});const e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Back</title><path d='M368 64L144 256l224 192V64z'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Down</title><path d='M64 144l192 224 192-224H64z'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Up</title><path d='M448 368L256 144 64 368h384z'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Back</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Ellipsis Horizontal</title><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>"},1172:(v,l,s)=>{s.d(l,{Q:()=>g});var e=s(865),a=s(134),p=s(430),o=s(2651);function c(i,t){if(1&i){const r=e.EpF();e.TgZ(0,"ion-content"),e.TgZ(1,"ion-list"),e.TgZ(2,"ion-item"),e.TgZ(3,"ion-label"),e._uU(4,"Profil"),e.qZA(),e.qZA(),e.TgZ(5,"ion-item"),e.TgZ(6,"ion-label"),e._uU(7,"Pr\xe9f\xe9rences"),e.qZA(),e._UZ(8,"ion-icon",12),e.qZA(),e.TgZ(9,"ion-item",13),e.NdJ("click",function(){return e.CHM(r),e.oxw().logoutClick()}),e._UZ(10,"ion-icon",14),e.TgZ(11,"ion-label"),e._uU(12,"D\xe9connexion"),e.qZA(),e.qZA(),e.qZA(),e.qZA()}}let g=(()=>{class i{constructor(r,n){this.authService=r,this.router=n,this.isPopoverOpen=!1,this.user=this.authService.authUser}ngOnInit(){}logoutClick(){this.authService.logout().then(()=>{this.router.navigate(["/login"])})}navigateHome(){this.router.navigate(["/home"])}}return i.\u0275fac=function(r){return new(r||i)(e.Y36(a.e),e.Y36(p.F0))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-shared-user-header"]],inputs:{page:"page"},decls:17,vars:4,consts:[[3,"translucent"],["color","primary"],["slot","start"],["color","light"],["src","assets/images/logoDaherFondBleu.png",1,"ion-hide-sm-down","logo",3,"click"],[1,"ion-text-uppercase","ion-text-center"],["id","button-profil","color","light","slot","end","outline","",1,"ion-margin-end",3,"click"],["name","person-circle-outline"],["trigger","button-profil","alignment","end","side","bottom",3,"isOpen"],["slot","end","color","danger",1,"ion-hide-sm-down",3,"click"],["slot","end","name","log-out-outline"],[1,"ion-hide-md-down"],["name","settings-outline","slot","start"],["color","danger",1,"ion-hide-sm-up",3,"click"],["slot","start","name","log-out-outline"]],template:function(r,n){1&r&&(e.TgZ(0,"ion-header",0),e.TgZ(1,"ion-toolbar",1),e.TgZ(2,"ion-buttons",2),e._UZ(3,"ion-menu-button",3),e.TgZ(4,"ion-img",4),e.NdJ("click",function(){return n.navigateHome()}),e.qZA(),e.qZA(),e.TgZ(5,"ion-title",5),e._uU(6),e.qZA(),e.TgZ(7,"ion-chip",6),e.NdJ("click",function(){return n.isPopoverOpen=!n.isPopoverOpen}),e._UZ(8,"ion-icon",7),e.TgZ(9,"ion-label",3),e._uU(10),e.qZA(),e.qZA(),e.TgZ(11,"ion-popover",8),e.YNc(12,c,13,0,"ng-template"),e.qZA(),e.TgZ(13,"ion-button",9),e.NdJ("click",function(){return n.logoutClick()}),e._UZ(14,"ion-icon",10),e.TgZ(15,"ion-label",11),e._uU(16,"D\xe9connexion"),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&r&&(e.Q6J("translucent",!1),e.xp6(6),e.Oqu(n.page),e.xp6(4),e.Oqu(null==n.user?null:n.user.username),e.xp6(1),e.Q6J("isOpen",n.isPopoverOpen))},directives:[o.Gu,o.sr,o.Sm,o.fG,o.Xz,o.wd,o.hM,o.gu,o.Q$,o.d8,o.YG,o.W2,o.q_,o.Ie],styles:[".logo[_ngcontent-%COMP%]{width:100px}"]}),i})()}}]);