"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1205],{1205:(F,m,s)=>{s.r(m),s.d(m,{LoginPageModule:()=>T});var v=s(6019),a=s(9133),i=s(1704),c=s(3935),p=s(4762),h=s(8260),e=s(3668),f=s(6607),L=s(5243),y=s(3521);let U=(()=>{class o{constructor(t,r,n){this.authService=t,this.alertService=r,this.requestService=n,this.tableUpdates=[{id:1,dateUpdate:new Date(2022,4,14),description:"Pour associer un outillage \xe0 un moulage il suffit de scanner le num\xe9ro d'OT dans l'OF.Vous devez le scanner comme un kit",title:"Module Moulage"},{id:2,dateUpdate:new Date(2022,4,14),description:"Le module outillage est ouvert pour test",title:"Module Outillage"}]}showUpdates(){return new Promise((t,r)=>{this.getUpdatesToShow().then(n=>{n?(console.log("bonjour",n),n.forEach(u=>{this.alertService.simpleAlert("Info sur la mise \xe0 jours",u.title,u.description).then(()=>{console.log("hello"),t(!0)})})):(console.log("toto"),t(!0))})})}getUpdates(t,r){return new Promise((n,u)=>{const g=this.tableUpdates.filter(d=>d.dateUpdate>new Date(this.authService.authUser.lastCon));n(g.length>0?g:null)})}getUpdatesToShow(){const t=new Date;return this.getUpdates(this.authService.authUser.lastCon,t)}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(f.e),e.LFG(L.c),e.LFG(y.s))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();const S=["userName"],Z=["password"],P=function(){return["/register"]},A=[{path:"",component:(()=>{class o{constructor(t,r,n,u,g,d,w){this.authService=t,this.formBuilder=r,this.router=n,this.alertController=u,this.loadingController=g,this.updateService=d,this.navControler=w,this.reRouteOpts=[{roles:["ROLE_MOULEUR"],route:"molding"},{roles:["ROLE_ADMIN"],route:"home"},{roles:["ROLE_RESP_OUTIL"],route:"tooling"},{roles:["ROLE_MOULEUR"],route:"molding"}],this.loginForm=this.formBuilder.group({userName:["",a.kI.required],password:[""]})}ngAfterViewInit(){(0,e.X6Q)()&&(this.loginForm.setValue({userName:h.N.username,password:h.N.password}),this.onSubmit())}ngOnInit(){}onSubmit(){return(0,p.mG)(this,void 0,void 0,function*(){const t=yield this.loadingController.create({cssClass:"my-custom-class",message:"Patienter pendant la connexion",spinner:"lines-sharp"});yield t.present(),this.authService.authenticate(this.loginForm.get("userName").value,this.loginForm.get("password").value||this.loginForm.get("userName").value).then(()=>{console.log("l\xe0"),this.updateService.showUpdates().then(()=>{console.log("ici")},()=>{console.log("tata")}).finally(()=>{console.log("coucou"),this.reRouteOpts.forEach(r=>{this.authService.authUser.roles.find(n=>r.roles.find(u=>u===n))&&this.navControler.navigateForward(r.route)}),this.loginForm.reset()})},()=>{this.presentAlertLoginError()}).finally(()=>{t.dismiss()})})}presentAlertLoginError(){return(0,p.mG)(this,void 0,void 0,function*(){yield(yield this.alertController.create({cssClass:"my-custom-class",header:"Erreur d'authentification",message:"Le nom d'utilisateur ou votre mot de passe n'est pas correct",buttons:[{text:"Fermer",role:"cancel",id:"cancel-button"}]})).present()})}getSpecialRole(t){return t[0]}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(f.e),e.Y36(a.qu),e.Y36(c.F0),e.Y36(i.Br),e.Y36(i.HT),e.Y36(U),e.Y36(i.SH))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-login"]],viewQuery:function(t,r){if(1&t&&(e.Gf(S,5),e.Gf(Z,5)),2&t){let n;e.iGM(n=e.CRH())&&(r.userName=n.first),e.iGM(n=e.CRH())&&(r.password=n.first)}},decls:22,vars:5,consts:[[3,"fullscreen"],["fixed","",1,"full-height","ion-align-items-center","ion-justify-content-center"],[1,"ion-align-items-center"],[3,"formGroup","ngSubmit","keyup.enter"],["position","floating"],["color","danger"],["autocapitalize","on","required","","formControlName","userName","type","text","autocomplete","off","autofocus","true","inputmode","numeric","value","204292"],["userName",""],["formControlName","password","type","password","value",""],["password",""],["block","","color","primary","type","submit",3,"disabled"],["fill","clear",3,"routerLink"]],template:function(t,r){1&t&&(e.TgZ(0,"ion-content",0),e.TgZ(1,"ion-grid",1),e.TgZ(2,"ion-row",2),e.TgZ(3,"form",3),e.NdJ("ngSubmit",function(){return r.onSubmit()})("keyup.enter",function(){return r.onSubmit()}),e.TgZ(4,"ion-item"),e.TgZ(5,"ion-label",4),e._uU(6,"Nom d'utilisateur "),e.TgZ(7,"ion-text",5),e._uU(8,"*"),e.qZA(),e.qZA(),e._UZ(9,"ion-input",6,7),e.TgZ(11,"ion-note"),e._uU(12," Le nom d'utilisateur est le num\xe9ro de matricule pr\xe9sent sur le badge "),e.qZA(),e.qZA(),e.TgZ(13,"ion-item"),e.TgZ(14,"ion-label",4),e._uU(15,"Password "),e.qZA(),e._UZ(16,"ion-input",8,9),e.qZA(),e.TgZ(18,"ion-button",10),e._uU(19," Se connecter "),e.qZA(),e.TgZ(20,"ion-button",11),e._uU(21," Cr\xe9er un compte "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.Q6J("fullscreen",!0),e.xp6(3),e.Q6J("formGroup",r.loginForm),e.xp6(15),e.Q6J("disabled",r.loginForm.invalid),e.xp6(2),e.Q6J("routerLink",e.DdM(4,P)))},directives:[i.W2,i.jY,i.Nd,a._Y,a.JL,a.sg,i.Ie,i.Q$,i.yW,i.pK,i.j9,a.Q7,a.JJ,a.u,i.uN,i.YG,i.YI,c.rH],styles:[".full-height[_ngcontent-%COMP%]{height:100%;display:flex!important;flex-direction:column}ion-title[_ngcontent-%COMP%]{font-size:60px!important;text-transform:uppercase}"]}),o})()}];let C=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[c.Bz.forChild(A)],c.Bz]}),o})(),T=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[v.ez,a.u5,i.Pc,C,a.UX]]}),o})()}}]);