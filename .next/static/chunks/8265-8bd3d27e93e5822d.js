(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8265],{7884:function(e,n,a){"use strict";a.d(n,{Z:function(){return l}});var r=a(5893),s=a(1667),t=a(5853);function l(e){var n=e.content;return(0,r.jsxs)(s.Z,{content:n,children:[(0,r.jsx)(t.Z,{href:"/dashboard/info",name:"Informaci\xf3n personal",svg:"/img/dashboard/info.svg"}),(0,r.jsx)(t.Z,{href:"/dashboard/progress",name:"Mi progreso",svg:"/img/dashboard/progress.svg"}),(0,r.jsx)(t.Z,{href:"/dashboard/payments",name:"Mis pagos",svg:"/img/dashboard/payments.svg"}),(0,r.jsx)(t.Z,{href:"/dashboard/cambio",name:"Cambiar contrase\xf1a",svg:"/img/dashboard/change.svg"}),(0,r.jsx)(t.Z,{href:"/logout",name:"Salir",svg:"/img/dashboard/logout.svg"})]})}},9294:function(e,n,a){"use strict";a.d(n,{Z:function(){return h}});var r=a(5893),s=a(9898),t=a(1667),l=a(5853);function c(e){var n=e.content;return(0,r.jsxs)(t.Z,{content:n,branch:"Jefe de Rama",children:[(0,r.jsx)(l.Z,{href:"/dashboard/jefe-rama",name:"Mi rama",svg:"/img/dashboard/info.svg"}),(0,r.jsx)(l.Z,{href:"/dashboard/cambio",name:"Cambiar contrase\xf1a",svg:"/img/dashboard/change.svg"}),(0,r.jsx)(l.Z,{href:"/logout",name:"Salir",svg:"/img/dashboard/logout.svg"})]})}var o=a(7884);function i(e){var n=e.content;return(0,r.jsxs)(t.Z,{content:n,branch:"Jefe de Grupo",children:[(0,r.jsx)(l.Z,{href:"/dashboard/jefe-grupo/inscripciones",name:"Inscripciones",svg:"/img/dashboard/info.svg"}),(0,r.jsx)(l.Z,{href:"/dashboard/jefe-grupo/personal",name:"Gesti\xf3n personal",svg:"/img/dashboard/person.svg"}),(0,r.jsx)(l.Z,{href:"/dashboard/jefe-grupo/cartera",name:"Cartera Centinelas 113",svg:"/img/dashboard/wallet.svg"}),(0,r.jsx)(l.Z,{href:"/dashboard/cambio",name:"Cambiar contrase\xf1a",svg:"/img/dashboard/change.svg"}),(0,r.jsx)(l.Z,{href:"/logout",name:"Salir",svg:"/img/dashboard/logout.svg"})]})}var d=a(2461);function u(e){var n=e.content;return(0,r.jsxs)(t.Z,{content:n,branch:"Tesorero",children:[(0,r.jsx)(l.Z,{href:"/dashboard/tesorero",name:"Cartera Scouts",svg:"/img/dashboard/info.svg"}),(0,r.jsx)(l.Z,{href:"/dashboard/cambio",name:"Cambiar contrase\xf1a",svg:"/img/dashboard/change.svg"}),(0,r.jsx)(l.Z,{href:"/logout",name:"Salir",svg:"/img/dashboard/logout.svg"})]})}function h(e){var n=e.content,a=(0,s.xJ)(),t=a.user,l=a.isLoading;a.error;if(!l){d.uU[d.uU[t.roles.id-1]];switch(d.uU[d.uU[t.roles.id-1]]){case d.uU.SCOUT:return(0,r.jsx)(o.Z,{content:n});case d.uU.GRUPO:return(0,r.jsx)(i,{content:n});case d.uU.RAMA:return(0,r.jsx)(c,{content:n});case d.uU.TESORERO:return(0,r.jsx)(u,{content:n})}}return(0,r.jsx)(o.Z,{content:n})}},6907:function(e,n,a){"use strict";a.d(n,{Z:function(){return u}});var r=a(1799),s=a(9396),t=a(5893),l=a(7294),c=a(7630),o=a.n(c),i=a(4835),d=a.n(i);function u(e){var n=e.idPersonal,c=e.edit,i=function(){var e={name:j.current.value,lastName:g.current.value,email:b.current.value,documentType:"CC",document:N.current.value,birthDate:new Date,homeAddress:_.current.value,attentionSite:A.current.value,personalDetails:{phone:O.current.value,level:R.current.value,charge:S.current.value,bloodType:y.current.value,rh:w.current.value,eps:E.current.value},branches:{nameBranch:C.current.value}};F(e,n)},u=(0,l.useState)(null),h=u[0],m=u[1],f=(0,l.useRef)(null),v=(0,l.useRef)(null),x=a(6455),p=o()(x),j=(0,l.useRef)(null),g=(0,l.useRef)(null),b=(0,l.useRef)(null),N=(0,l.useRef)(null),O=(0,l.useRef)(null),_=(0,l.useRef)(null),R=(0,l.useRef)(null),S=(0,l.useRef)(null),C=(0,l.useRef)(null),y=(0,l.useRef)(null),w=(0,l.useRef)(null),E=(0,l.useRef)(null),A=(0,l.useRef)(null),U=(0,l.useRef)(null),P=(0,l.useRef)(null),T=(0,l.useState)({name:"",lastName:"",email:"",document:"",homeAddress:"",attentionSite:""}),Z=T[0],L=T[1],V=(0,l.useState)({phone:"",level:"",charge:"",bloodType:"",eps:"",rh:""}),B=V[0],I=V[1],k=(0,l.useState)({nameBranch:""}),D=k[0],G=k[1],M=(0,l.useState)(!0),J=(M[0],M[1]);(0,l.useEffect)((function(){n&&(z(n),j.current.readOnly=!0,g.current.readOnly=!0,b.current.readOnly=!0,N.current.readOnly=!0,O.current.readOnly=!0,_.current.readOnly=!0,R.current.readOnly=!0,S.current.readOnly=!0,C.current.readOnly=!0,y.current.readOnly=!0,w.current.readOnly=!0,E.current.readOnly=!0,A.current.readOnly=!0,U.current.style.visibility="hidden",P.current.style.visibility="hidden",c&&(i(),j.current.readOnly=!1,g.current.readOnly=!1,b.current.readOnly=!1,N.current.readOnly=!1,O.current.readOnly=!1,_.current.readOnly=!1,E.current.readOnly=!1,A.current.readOnly=!1,U.current.style.visibility="visible",P.current.style.visibility="visible",R.current.disabled=!1,S.current.disabled=!1,C.current.disabled=!1,y.current.disabled=!1,w.current.disabled=!1,f.current.disabled=!1))}),[]);var z=function(e){fetch("".concat("http://localhost:4000","/api/users/").concat(e),{method:"GET",headers:{"Referrer-Policy":"origin-when-cross-origin",Authorization:"Bearer "+localStorage.getItem("auth_token"),"Access-Control-Allow-Origin":"".concat("http://localhost:3000")}}).then((function(e){return e.json().then((function(n){return e.ok?Promise.resolve(n):Promise.reject(n)}))})).then((function(e){L(e.data),I(e.data.personalDetails),G(e.data.branches),J(!1)})).catch((function(e){}))},F=function(e,n){fetch("".concat("http://localhost:4000","/api/users/").concat(n),{mode:"cors",method:"PUT",headers:{"Referrer-Policy":"origin-when-cross-origin","Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("auth_token"),"Access-Control-Allow-Origin":"".concat("http://localhost:3000")},body:JSON.stringify(e)}).then((function(n){return n.json().then((function(a){return n.ok?Promise.resolve(e):Promise.reject(a)}))})).then((function(e){p.fire({icon:"success",title:"Datos actualizados!",text:"Los datos fueron actualizados correctamente",confirmButtonColor:"#31B411",confirmButtonText:"Continuar"}).then((function(e){e&&(window.location.href="/dashboard/jefe-grupo/personal/")}))})).catch((function(e){}))};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:"".concat(d().titulo," p-5"),children:(0,t.jsx)("strong",{children:(0,t.jsx)("h1",{children:"Agregar personal administrativo Grupo Scout Centinelas 113"})})}),(0,t.jsx)("section",{children:(0,t.jsx)("div",{className:"container",children:(0,t.jsx)("div",{className:d().tarjeta_fondo,children:(0,t.jsxs)("div",{className:"container-fluid ".concat(d().desc),children:[(0,t.jsx)("button",{type:"button",className:"btn btn-secondary",children:(0,t.jsx)("a",{className:"".concat(d().letra),href:"/dashboard/jefe-grupo/personal/",children:"Regresar"})}),(0,t.jsxs)("div",{className:"text-center",children:[(0,t.jsx)("div",{className:d().photo,children:(0,t.jsx)("img",{className:d().image,src:"/img/profile-picture.png",ref:v})}),(0,t.jsx)("div",{className:"row",children:(0,t.jsxs)("div",{className:d().div_file,children:[(0,t.jsx)("p",{className:d().text,children:"*Seleccionar foto"}),(0,t.jsx)("input",{type:"file",disabled:!0,id:"btn_upload",accept:"image/jpeg,image/png",className:d().btn_upload,ref:f,onChange:function(){if(f.current.files[0]){if(f.current.files[0].size>1e7)return alert("El archivo no debe superar los 10MB"),f.current.value="",void(f.current.files[0].name="");var e=f.current.files[0],n=new FileReader;n.onload=function(e){v.current.src=e.target.result},n.readAsDataURL(e),m((0,s.Z)((0,r.Z)({},h),{photo:e}))}}})]})})]}),(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-xs-6 col-md-4",children:(0,t.jsx)("label",{children:"Nombre:"})}),(0,t.jsx)("div",{className:"col-xs-6 col-md-4",children:(0,t.jsx)("label",{children:"Apellido:"})}),(0,t.jsx)("div",{className:"col-xs-6 col-md-4",children:(0,t.jsx)("label",{children:"Correo electr\xf3nico:"})})]}),(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-xs-6 col-md-4",children:(0,t.jsx)("input",{className:d().input,ref:j,defaultValue:Z.name,onChange:function(e){e.target.value=e.target.value.toUpperCase()}})}),(0,t.jsx)("div",{className:"col-xs-6 col-md-4",children:(0,t.jsx)("input",{className:d().input,ref:g,defaultValue:Z.lastName,onChange:function(e){e.target.value=e.target.value.toUpperCase()}})}),(0,t.jsx)("div",{className:"col-xs-6 col-md-4",children:(0,t.jsx)("input",{className:d().input,ref:b,defaultValue:Z.email,onChange:function(e){e.target.value=e.target.value.toUpperCase()}})})]}),(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-xs-6 col-md-4",children:(0,t.jsx)("label",{children:"Confirmar correo:"})}),(0,t.jsx)("div",{className:"col-xs-6 col-md-4",children:(0,t.jsx)("label",{children:"C\xe9dula:"})}),(0,t.jsx)("div",{className:"col-xs-6 col-md-4",children:(0,t.jsx)("label",{children:"Tel\xe9fono:"})})]}),(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-xs-6 col-md-4",children:(0,t.jsx)("input",{className:d().input,defaultValue:Z.email,onChange:function(e){e.target.value=e.target.value.toUpperCase()}})}),(0,t.jsx)("div",{className:"col-xs-6 col-md-4",children:(0,t.jsx)("input",{className:d().input,ref:N,defaultValue:Z.document,onChange:function(e){e.target.value=e.target.value.toUpperCase()}})}),(0,t.jsx)("div",{className:"col-xs-6 col-md-4",children:(0,t.jsx)("input",{className:d().input,ref:O,defaultValue:B.phone,onChange:function(e){e.target.value=e.target.value.toUpperCase()}})})]}),(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-xs-6 col-md-4",children:(0,t.jsx)("label",{children:"Direcci\xf3n:"})}),(0,t.jsx)("div",{className:"col-xs-6 col-md-4",children:(0,t.jsx)("label",{children:"Nivel adistramiento:"})}),(0,t.jsx)("div",{className:"col-xs-6 col-md-4",children:(0,t.jsx)("label",{children:"Cargo:"})})]}),(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-xs-6 col-md-4",children:(0,t.jsx)("input",{className:d().input,ref:_,defaultValue:Z.homeAddress,onChange:function(e){e.target.value=e.target.value.toUpperCase()}})}),(0,t.jsx)("div",{className:"col-xs-6 col-md-4",children:(0,t.jsxs)("select",{className:d().input2,disabled:!0,ref:R,defaultValue:B.level,children:[(0,t.jsx)("option",{value:"0",children:"NIVEL 0"}),(0,t.jsx)("option",{value:"1",children:"NIVEL 1"}),(0,t.jsx)("option",{value:"2",children:"NIVEL 2"}),(0,t.jsx)("option",{value:"3",children:"NIVEL 3"}),(0,t.jsx)("option",{value:"4",children:"NIVEL 4"}),(0,t.jsx)("option",{value:"5",children:"NIVEL 5"})]})}),(0,t.jsx)("div",{className:"col-xs-6 col-md-4",children:(0,t.jsxs)("select",{className:d().input2,disabled:!0,ref:S,defaultValue:B.charge,children:[(0,t.jsx)("option",{value:"SCOUT",children:"SCOUT"}),(0,t.jsx)("option",{value:"TESORERA",children:"TESORERA"}),(0,t.jsx)("option",{value:"JEFE DE RAMA",children:"JEFE DE RAMA"}),(0,t.jsx)("option",{value:"JEFE DE GRUPO",children:"JEFE DE GRUPO"})]})})]}),(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-xs-6 col-md-4",children:(0,t.jsx)("label",{children:"Rama:"})}),(0,t.jsx)("div",{className:"col-xs-6 col-md-4",children:(0,t.jsx)("label",{children:"Tipo de sangre"})}),(0,t.jsx)("div",{className:"col-xs-6 col-md-4",children:(0,t.jsx)("label",{children:"RH:"})})]}),(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-xs-6 col-md-4",children:(0,t.jsxs)("select",{className:d().input2,disabled:!0,ref:C,defaultValue:D.nameBranch,children:[(0,t.jsx)("option",{value:"TEMPORAL",children:"TEMPORAL"}),(0,t.jsx)("option",{value:"CACHORROS",children:"CACHORROS"}),(0,t.jsx)("option",{value:"LOBATOS",children:"LOBATOS"}),(0,t.jsx)("option",{value:"WEBELOS",children:"WEBELOS"}),(0,t.jsx)("option",{value:"SCOUTS",children:"SCOUTS"}),(0,t.jsx)("option",{value:"ROVERS",children:"ROVERS"})]})}),(0,t.jsx)("div",{className:"col-xs-6 col-md-4",children:(0,t.jsxs)("select",{className:d().input2,disabled:!0,ref:y,defaultValue:B.bloodType,children:[(0,t.jsx)("option",{value:"A",children:"A"}),(0,t.jsx)("option",{value:"O",children:"O"}),(0,t.jsx)("option",{value:"B",children:"B"}),(0,t.jsx)("option",{value:"AB",children:"AB"})]})}),(0,t.jsx)("div",{className:"col-xs-6 col-md-4",children:(0,t.jsxs)("select",{className:d().input2,disabled:!0,ref:w,defaultValue:B.rh,children:[(0,t.jsx)("option",{value:"POSITIVO",children:"POSITIVO"}),(0,t.jsx)("option",{value:"NEGATIVO",children:"NEGATIVO"})]})})]}),(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-xs-6 col-md-4",children:(0,t.jsx)("label",{children:"EPS:"})}),(0,t.jsx)("div",{className:"col-xs-6 col-md-4",children:(0,t.jsx)("label",{children:"Sitio de atenci\xf3n:"})})]}),(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-xs-6 col-md-4",children:(0,t.jsx)("input",{className:d().input,ref:E,defaultValue:B.eps,onChange:function(e){e.target.value=e.target.value.toUpperCase()}})}),(0,t.jsx)("div",{className:"col-xs-6 col-md-4",children:(0,t.jsx)("input",{className:d().input,ref:A,defaultValue:Z.attentionSite,onChange:function(e){e.target.value=e.target.value.toUpperCase()}})})]}),(0,t.jsxs)("div",{className:d().boton,children:[(0,t.jsx)("button",{type:"button",className:"btn btn-success",onClick:i,ref:U,children:"Actualizar datos"}),(0,t.jsx)("button",{type:"button",className:"btn btn-danger",ref:P,children:(0,t.jsx)("a",{className:"".concat(d().letra),href:"/dashboard/jefe-grupo/personal/",children:"Cancelar registro"})})]})]})})})})]})}},5853:function(e,n,a){"use strict";a.d(n,{Z:function(){return u}});var r=a(5893),s=a(1664),t=a.n(s),l=a(1163),c=a(7294),o=a(7940),i=a.n(o),d=a(1667);function u(e){var n=e.href,a=e.name,s=e.svg,o=(0,l.useRouter)(),u=(0,c.useContext)(d.l),h=o.pathname.startsWith(n)||o.asPath.startsWith(n);return(0,r.jsx)(t(),{href:n,children:(0,r.jsxs)("div",{className:"d-flex align-items-center justify-content-start ".concat(i().sidelink," ").concat(h?i().active:""),children:[s?(0,r.jsx)("img",{className:i().sideicon,src:s}):null,u?null:(0,r.jsx)("a",{children:a})]})})}},1667:function(e,n,a){"use strict";a.d(n,{l:function(){return u},Z:function(){return h}});var r=a(5893),s=a(1163),t=a(7294);var l=a(7940),c=a.n(l),o=a(9898);function i(e){var n,a=e.branchName,l=((0,s.useRouter)(),(0,o.xJ)()),i=l.user,d=l.isLoading,h=(l.error,(0,o.Sf)()),m=h.image,f=h.isLoading;if(a)n=(0,r.jsx)("p",{className:c().branch,children:a});else{var v=(0,o.ph)(),x=v.branch,p=v.isLoading;n=(0,r.jsx)("p",{className:c().branch,children:p?"Cargando...":x.nameBranch})}(0,t.useContext)(u);return(0,r.jsxs)("div",{className:c().header,children:[(0,r.jsx)("img",{className:c().image,src:f?"/img/profile-picture.png":URL.createObjectURL(m)}),(0,r.jsx)("p",{className:c().name,children:d?"Cargando...":(i.name+" "+i.lastName).toLowerCase()}),n]})}function d(e){var n=e.children;return(0,r.jsx)("div",{children:n})}var u=(0,t.createContext)({});function h(e){var n=e.content,a=e.branch,l=e.children,o=((0,s.useRouter)(),(0,t.useRef)(null)),h=(0,t.useRef)(null),m=function(){var e=function(){return{width:n?window.innerWidth:null,height:n?window.innerHeight:null}},n=!0,a=(0,t.useState)(e()),r=a[0],s=a[1];return(0,t.useEffect)((function(){var a=function(){s(e())};if(n)return window.addEventListener("resize",a),function(){return window.removeEventListener("resize",a)}}),[n]),r}(),f=(m.height,m.width),v=(0,t.useState)(!1),x=v[0],p=v[1];return(0,t.useEffect)((function(){p(f<=720)}),[f]),(0,t.useEffect)((function(){o.current.style.width="100%"}),[]),(0,r.jsx)(u.Provider,{value:x,children:(0,r.jsxs)("div",{className:"d-flex",children:[(0,r.jsxs)("div",{className:"".concat(c().sidebar," "),ref:o,children:[(0,r.jsx)(i,{branchName:a}),(0,r.jsx)(d,{children:l})]}),(0,r.jsx)("div",{className:"".concat(c().content," flex-fill"),ref:h,children:n})]})})}},2461:function(e,n,a){"use strict";a.d(n,{EZ:function(){return t},Sv:function(){return s},uU:function(){return r}});var r,s=function(e,n){switch(n){case r.SCOUT:e.push("/dashboard/info","/dashboard",{shallow:!0});break;case r.RAMA:e.push("/dashboard/jefe-rama","/dashboard",{shallow:!0});break;case r.GRUPO:e.push("/dashboard/jefe-grupo/inscripciones","/dashboard",{shallow:!0});break;case r.TESORERO:e.push("/dashboard/tesorero","/dashboard",{shallow:!0});break;default:e.push("/dashboard/info","/dashboard",{shallow:!0})}};function t(){fetch("http://localhost:4000/api/payments/generateCSV/1",{method:"GET",headers:new Headers({"Referrer-Policy":"origin-when-cross-origin",Authorization:"Bearer "+localStorage.getItem("auth_token"),"Access-Control-Allow-Origin":"".concat("http://localhost:3000")})}).then((function(e){return e.blob()})).then((function(e){var n=window.URL.createObjectURL(e);Object.assign(document.createElement("a"),{target:"_blank",href:n,download:"Historial de pagos-".concat((new Date).toISOString().split("T")[0],".csv")}).click(),setTimeout((function(){window.URL.revokeObjectURL(n)}),100)}))}!function(e){e[e.SCOUT=0]="SCOUT",e[e.TESORERO=1]="TESORERO",e[e.RAMA=2]="RAMA",e[e.GRUPO=3]="GRUPO",e[e.ADMIN=4]="ADMIN"}(r||(r={}))},4181:function(e,n,a){"use strict";var r=a(7294),s=a(1163),t=a.n(s),l=a(9898);n.Z=function(e,n,a){return function(s){var c=(0,l.xJ)(),o=c.user,i=c.isLoading,d=c.error;return(0,r.useEffect)((function(){var e=window.location?window.location:null;i&&d?t().replace("/login?r=".concat(e.pathname+encodeURIComponent(e.search)),"/login",{shallow:!0}):i||o.status?n&&!i&&(a&&n!=o.roles.id-1||n>o.roles.id-1)&&t().push("/dashboard"):t().push("/logout")}),[i,d]),(0,r.createElement)(e,s,null)}}},7940:function(e){e.exports={sidebar:"Slidebar_sidebar__pw5I_",sidelink:"Slidebar_sidelink__I0n_O",active:"Slidebar_active__BkFah",closebtn:"Slidebar_closebtn__Q2ruM",openbtn:"Slidebar_openbtn__WaRF4",content:"Slidebar_content__s2yv4",sideicon:"Slidebar_sideicon__ypeH_",header:"Slidebar_header__JuoDb",image:"Slidebar_image__V0t9C",name:"Slidebar_name__qFgGz",branch:"Slidebar_branch__qdB8B"}},4835:function(e){e.exports={tarjeta_fondo:"AddPerson_tarjeta_fondo__ptfkl",desc:"AddPerson_desc__sfJ5N",input:"AddPerson_input__0oSEG",input2:"AddPerson_input2__HBdIF",boton:"AddPerson_boton__ZxDoU",letra:"AddPerson_letra__ZtJYB",titulo:"AddPerson_titulo__RXuGe",image:"AddPerson_image__kZj_B",text:"AddPerson_text__IKzp4",div_file:"AddPerson_div_file___14u0",btn_upload:"AddPerson_btn_upload__XyQ6N"}},9396:function(e,n,a){"use strict";function r(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,r)}return a}(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})),e}a.d(n,{Z:function(){return r}})}}]);