(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1905],{1865:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/jefe-rama/adelantos/agregar/[userId]",function(){return a(9253)}])},7884:function(e,n,a){"use strict";a.d(n,{Z:function(){return o}});var t=a(5893),r=a(1667),s=a(5853);function o(e){var n=e.content;return(0,t.jsxs)(r.Z,{content:n,children:[(0,t.jsx)(s.Z,{href:"/dashboard/info",name:"Informaci\xf3n personal",svg:"/img/dashboard/info.svg"}),(0,t.jsx)(s.Z,{href:"/dashboard/progress",name:"Mi progreso",svg:"/img/dashboard/progress.svg"}),(0,t.jsx)(s.Z,{href:"/dashboard/payments",name:"Mis pagos",svg:"/img/dashboard/payments.svg"}),(0,t.jsx)(s.Z,{href:"/dashboard/cambio",name:"Cambiar contrase\xf1a",svg:"/img/dashboard/change.svg"}),(0,t.jsx)(s.Z,{href:"/logout",name:"Salir",svg:"/img/dashboard/logout.svg"})]})}},9294:function(e,n,a){"use strict";a.d(n,{Z:function(){return h}});var t=a(5893),r=a(9898),s=a(1667),o=a(5853);function i(e){var n=e.content;return(0,t.jsxs)(s.Z,{content:n,branch:"Jefe de Rama",children:[(0,t.jsx)(o.Z,{href:"/dashboard/jefe-rama",name:"Mi rama",svg:"/img/dashboard/info.svg"}),(0,t.jsx)(o.Z,{href:"/dashboard/cambio",name:"Cambiar contrase\xf1a",svg:"/img/dashboard/change.svg"}),(0,t.jsx)(o.Z,{href:"/logout",name:"Salir",svg:"/img/dashboard/logout.svg"})]})}var c=a(7884);function l(e){var n=e.content;return(0,t.jsxs)(s.Z,{content:n,branch:"Jefe de Grupo",children:[(0,t.jsx)(o.Z,{href:"/dashboard/jefe-grupo/inscripciones",name:"Inscripciones",svg:"/img/dashboard/info.svg"}),(0,t.jsx)(o.Z,{href:"/dashboard/jefe-grupo/personal",name:"Gesti\xf3n personal",svg:"/img/dashboard/person.svg"}),(0,t.jsx)(o.Z,{href:"/dashboard/jefe-grupo/cartera",name:"Cartera Centinelas 113",svg:"/img/dashboard/wallet.svg"}),(0,t.jsx)(o.Z,{href:"/dashboard/cambio",name:"Cambiar contrase\xf1a",svg:"/img/dashboard/change.svg"}),(0,t.jsx)(o.Z,{href:"/logout",name:"Salir",svg:"/img/dashboard/logout.svg"})]})}var d=a(2461);function u(e){var n=e.content;return(0,t.jsxs)(s.Z,{content:n,branch:"Tesorero",children:[(0,t.jsx)(o.Z,{href:"/dashboard/tesorero",name:"Cartera Scouts",svg:"/img/dashboard/info.svg"}),(0,t.jsx)(o.Z,{href:"/dashboard/cambio",name:"Cambiar contrase\xf1a",svg:"/img/dashboard/change.svg"}),(0,t.jsx)(o.Z,{href:"/logout",name:"Salir",svg:"/img/dashboard/logout.svg"})]})}function h(e){var n=e.content,a=(0,r.xJ)(),s=a.user,o=a.isLoading;a.error;if(!o){d.uU[d.uU[s.roles.id-1]];switch(d.uU[d.uU[s.roles.id-1]]){case d.uU.SCOUT:return(0,t.jsx)(c.Z,{content:n});case d.uU.GRUPO:return(0,t.jsx)(l,{content:n});case d.uU.RAMA:return(0,t.jsx)(i,{content:n});case d.uU.TESORERO:return(0,t.jsx)(u,{content:n})}}return(0,t.jsx)(c.Z,{content:n})}},5853:function(e,n,a){"use strict";a.d(n,{Z:function(){return u}});var t=a(5893),r=a(1664),s=a.n(r),o=a(1163),i=a(7294),c=a(7940),l=a.n(c),d=a(1667);function u(e){var n=e.href,a=e.name,r=e.svg,c=(0,o.useRouter)(),u=(0,i.useContext)(d.l),h=c.pathname.startsWith(n)||c.asPath.startsWith(n);return(0,t.jsx)(s(),{href:n,children:(0,t.jsxs)("div",{className:"d-flex align-items-center justify-content-start ".concat(l().sidelink," ").concat(h?l().active:""),children:[r?(0,t.jsx)("img",{className:l().sideicon,src:r}):null,u?null:(0,t.jsx)("a",{children:a})]})})}},1667:function(e,n,a){"use strict";a.d(n,{l:function(){return u},Z:function(){return h}});var t=a(5893),r=a(1163),s=a(7294);var o=a(7940),i=a.n(o),c=a(9898);function l(e){var n,a=e.branchName,o=((0,r.useRouter)(),(0,c.xJ)()),l=o.user,d=o.isLoading,h=(o.error,(0,c.Sf)()),g=h.image,f=h.isLoading;if(a)n=(0,t.jsx)("p",{className:i().branch,children:a});else{var m=(0,c.ph)(),_=m.branch,b=m.isLoading;n=(0,t.jsx)("p",{className:i().branch,children:b?"Cargando...":_.nameBranch})}(0,s.useContext)(u);return(0,t.jsxs)("div",{className:i().header,children:[(0,t.jsx)("img",{className:i().image,src:f?"/img/profile-picture.png":URL.createObjectURL(g)}),(0,t.jsx)("p",{className:i().name,children:d?"Cargando...":(l.name+" "+l.lastName).toLowerCase()}),n]})}function d(e){var n=e.children;return(0,t.jsx)("div",{children:n})}var u=(0,s.createContext)({});function h(e){var n=e.content,a=e.branch,o=e.children,c=((0,r.useRouter)(),(0,s.useRef)(null)),h=(0,s.useRef)(null),g=function(){var e=function(){return{width:n?window.innerWidth:null,height:n?window.innerHeight:null}},n=!0,a=(0,s.useState)(e()),t=a[0],r=a[1];return(0,s.useEffect)((function(){var a=function(){r(e())};if(n)return window.addEventListener("resize",a),function(){return window.removeEventListener("resize",a)}}),[n]),t}(),f=(g.height,g.width),m=(0,s.useState)(!1),_=m[0],b=m[1];return(0,s.useEffect)((function(){b(f<=720)}),[f]),(0,s.useEffect)((function(){c.current.style.width="100%"}),[]),(0,t.jsx)(u.Provider,{value:_,children:(0,t.jsxs)("div",{className:"d-flex",children:[(0,t.jsxs)("div",{className:"".concat(i().sidebar," "),ref:c,children:[(0,t.jsx)(l,{branchName:a}),(0,t.jsx)(d,{children:o})]}),(0,t.jsx)("div",{className:"".concat(i().content," flex-fill"),ref:h,children:n})]})})}},2461:function(e,n,a){"use strict";a.d(n,{EZ:function(){return s},Sv:function(){return r},uU:function(){return t}});var t,r=function(e,n){switch(n){case t.SCOUT:e.push("/dashboard/info","/dashboard",{shallow:!0});break;case t.RAMA:e.push("/dashboard/jefe-rama","/dashboard",{shallow:!0});break;case t.GRUPO:e.push("/dashboard/jefe-grupo/inscripciones","/dashboard",{shallow:!0});break;case t.TESORERO:e.push("/dashboard/tesorero","/dashboard",{shallow:!0});break;default:e.push("/dashboard/info","/dashboard",{shallow:!0})}};function s(){fetch("http://localhost:4000/api/payments/generateCSV/1",{method:"GET",headers:new Headers({"Referrer-Policy":"origin-when-cross-origin",Authorization:"Bearer "+localStorage.getItem("auth_token"),"Access-Control-Allow-Origin":"".concat("http://localhost:3000")})}).then((function(e){return e.blob()})).then((function(e){var n=window.URL.createObjectURL(e);Object.assign(document.createElement("a"),{target:"_blank",href:n,download:"Historial de pagos-".concat((new Date).toISOString().split("T")[0],".csv")}).click(),setTimeout((function(){window.URL.revokeObjectURL(n)}),100)}))}!function(e){e[e.SCOUT=0]="SCOUT",e[e.TESORERO=1]="TESORERO",e[e.RAMA=2]="RAMA",e[e.GRUPO=3]="GRUPO",e[e.ADMIN=4]="ADMIN"}(t||(t={}))},4181:function(e,n,a){"use strict";var t=a(7294),r=a(1163),s=a.n(r),o=a(9898);n.Z=function(e,n,a){return function(r){var i=(0,o.xJ)(),c=i.user,l=i.isLoading,d=i.error;return(0,t.useEffect)((function(){var e=window.location?window.location:null;l&&d?s().replace("/login?r=".concat(e.pathname+encodeURIComponent(e.search)),"/login",{shallow:!0}):l||c.status?n&&!l&&(a&&n!=c.roles.id-1||n>c.roles.id-1)&&s().push("/dashboard"):s().push("/logout")}),[l,d]),(0,t.createElement)(e,r,null)}}},9253:function(e,n,a){"use strict";a.r(n),a.d(n,{default:function(){return _}});var t=a(5893),r=a(7568),s=a(655),o=a(7294),i=a(6151),c=a.n(i),l=a(7630),d=a.n(l),u=a(1163);function h(e){var n=e.Id,i=a(6455),l=d()(i),h=(0,o.useRef)(null),g=(0,o.useRef)(null),f=(0,o.useRef)(null),m=(0,o.useRef)(null),_=(0,o.useRef)(null),b=(0,o.useState)(n),v=(b[0],b[1],(0,o.useState)("")),p=v[0],x=v[1],j=new Date;(0,u.useRouter)();(0,o.useEffect)((function(){A(n)}),[]);var A=function(e){fetch("".concat("http://localhost:4000","/api/users/").concat(e),{method:"GET",headers:{"Referrer-Policy":"origin-when-cross-origin",Authorization:"Bearer "+localStorage.getItem("auth_token"),"Content-Type":"application/json","Access-Control-Allow-Origin":"".concat("http://localhost:3000")}}).then((function(e){return e.json().then((function(n){return e.ok?(x(n.data.name+" "+n.data.lastName),Promise.resolve(n)):Promise.reject(n)})).then((function(e){O(!1)}))}))},w=function(){var e=(0,r.Z)((function(e){var a;return(0,s.__generator)(this,(function(t){return a={updateDate:j,advances:[e]},fetch("".concat("http://localhost:4000","/api/users/advancePlan/").concat(n),{method:"POST",headers:{"Referrer-Policy":"origin-when-cross-origin",Authorization:"Bearer "+localStorage.getItem("auth_token"),"Content-Type":"application/json","Access-Control-Allow-Origin":"".concat("http://localhost:3000")},body:JSON.stringify(a)}).then((function(n){return n.json().then((function(a){return n.ok?Promise.resolve(a):(S(e),Promise.reject(a))})).then((function(e){l.fire({icon:"success",title:"Adelanto Agregado",text:"Adelanto Agregado exitosamente",confirmButtonColor:"#31B411",confirmButtonText:"Continuar"})}))})),[2]}))}));return function(n){return e.apply(this,arguments)}}(),S=function(){var e=(0,r.Z)((function(e){return(0,s.__generator)(this,(function(a){return fetch("".concat("http://localhost:4000","/api/users/advance/").concat(n),{method:"POST",headers:{"Referrer-Policy":"origin-when-cross-origin",Authorization:"Bearer "+localStorage.getItem("auth_token"),"Content-Type":"application/json","Access-Control-Allow-Origin":"".concat("http://localhost:3000")},body:JSON.stringify(e)}).then((function(e){return e.json().then((function(n){return e.ok?Promise.resolve(n):Promise.reject(n)})).then((function(e){l.fire({icon:"success",title:"Adelanto Agregado",text:"Adelanto Agregado exitosamente",confirmButtonColor:"#31B411",confirmButtonText:"Continuar"}).then((function(e){e.isConfirmed&&location.replace("/dashboard/jefe-rama/adelantos/".concat(n))}))}))})).catch((function(e){l.fire({icon:"error",title:(0,t.jsx)("p",{children:"Hay errores"}),text:"Verifique los campos que haya llenado todos los",showConfirmButton:!1,showDenyButton:!0,denyButtonText:"Cerrar"})})),[2]}))}));return function(n){return e.apply(this,arguments)}}(),N=(0,o.useState)(!0),C=N[0],O=N[1];return(0,t.jsxs)("section",{children:[" ",C?(0,t.jsx)("p",{children:"Cargando informaci\xf3n....."}):(0,t.jsxs)("div",{className:c().margen,children:[(0,t.jsx)("div",{children:(0,t.jsxs)("p",{className:c().title,children:["Plan de adelanto ",p]})}),(0,t.jsx)("div",{className:c().centrar,children:(0,t.jsxs)("div",{className:c().container,children:[(0,t.jsx)("div",{className:"".concat(c().subtitle_area," row"),children:(0,t.jsx)("p",{className:"".concat(c().subtitle," col-12"),children:"Grupo Scout centinelas 113"})}),(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-lg-3 col-sm-6",children:(0,t.jsx)("p",{children:(0,t.jsx)("strong",{className:c().label,children:"T\xedtulo "})})}),(0,t.jsx)("div",{className:"col-lg-3 col-sm-6",children:(0,t.jsx)("p",{children:(0,t.jsx)("input",{maxLength:30,ref:h,className:c().input_generico,type:"text",onChange:function(e){e.target.value=e.target.value.toUpperCase()}})})}),(0,t.jsx)("div",{className:"col-lg-3 col-sm-6",children:(0,t.jsx)("p",{children:(0,t.jsx)("strong",{className:c().label,children:"Fecha "})})}),(0,t.jsx)("div",{className:"col-lg-3 col-sm-6",children:(0,t.jsx)("p",{children:(0,t.jsx)("input",{ref:g,className:c().input_generico,type:"Date",onChange:function(e){e.target.value=e.target.value.toUpperCase()}})})})]}),(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-lg-3 col-sm-6",children:(0,t.jsx)("p",{children:(0,t.jsx)("strong",{className:c().label,children:"Rama "})})}),(0,t.jsx)("div",{className:"col-lg-3 col-sm-6",children:(0,t.jsx)("p",{children:(0,t.jsxs)("select",{ref:f,className:c().input_generico,children:[(0,t.jsx)("option",{value:"CACHORROS",children:"CACHORROS"}),(0,t.jsx)("option",{value:"LOBATOS",children:"LOBATOS"}),(0,t.jsx)("option",{value:"WEBELOS",children:"WEBELOS"}),(0,t.jsx)("option",{value:"SCOUTS",children:"SCOUTS"}),(0,t.jsx)("option",{value:"ROVERS",children:"ROVERS"})]})})}),(0,t.jsx)("div",{className:"col-lg-3 col-sm-6",children:(0,t.jsx)("p",{children:(0,t.jsx)("strong",{className:c().label,children:"Jefe "})})}),(0,t.jsx)("div",{className:"col-lg-3 col-sm-6",children:(0,t.jsx)("p",{children:(0,t.jsx)("input",{maxLength:30,ref:m,className:c().input_generico,type:"text",onChange:function(e){e.target.value=e.target.value.toUpperCase()}})})})]}),(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-lg-3",children:(0,t.jsx)("p",{children:(0,t.jsx)("strong",{className:c().label,children:"Descripci\xf3n  "})})}),(0,t.jsx)("div",{className:"col-lg-9",children:(0,t.jsx)("p",{children:(0,t.jsx)("textarea",{maxLength:250,ref:_,className:c().input_descripcion,onChange:function(e){e.target.value=e.target.value.toUpperCase()}})})})]}),(0,t.jsxs)("div",{className:c().contenedor_btns,children:[(0,t.jsx)("button",{className:"".concat(c().b," btn btn-outline-success"),type:"submit",value:"Submit",onClick:function(){var e={name:h.current.value,createDate:g.current.value,leader:m.current.value,description:_.current.value};w(e)},children:"Agregar adelanto"}),(0,t.jsxs)("a",{href:"/dashboard/jefe-rama/adelantos/".concat(n),children:[" ",(0,t.jsx)("button",{className:"".concat(c().b," btn btn-outline-danger"),children:"Cancelar adelanto"})]})]})]})})]})]})}var g=a(9294),f=a(4181),m=a(2461),_=(0,f.Z)((function(){var e=(0,u.useRouter)().query.userId;if(!e)return null;var n=(0,t.jsx)(h,{Id:e});return(0,t.jsx)(g.Z,{content:n})}),m.uU.RAMA,!0)},7940:function(e){e.exports={sidebar:"Slidebar_sidebar__pw5I_",sidelink:"Slidebar_sidelink__I0n_O",active:"Slidebar_active__BkFah",closebtn:"Slidebar_closebtn__Q2ruM",openbtn:"Slidebar_openbtn__WaRF4",content:"Slidebar_content__s2yv4",sideicon:"Slidebar_sideicon__ypeH_",header:"Slidebar_header__JuoDb",image:"Slidebar_image__V0t9C",name:"Slidebar_name__qFgGz",branch:"Slidebar_branch__qdB8B"}},6151:function(e){e.exports={margen:"Adelanto_margen__uObdF",title:"Adelanto_title__H61wn",subtitle_area:"Adelanto_subtitle_area__PHY2R",subtitle:"Adelanto_subtitle__EwLTF",container:"Adelanto_container__6_HdY",centrar:"Adelanto_centrar__nZb_5",b:"Adelanto_b__GEM97",label:"Adelanto_label__awP0B",lab:"Adelanto_lab__MfbvI",descrip:"Adelanto_descrip__AlHO3",mostrar:"Adelanto_mostrar__I3izU",editarI:"Adelanto_editarI__EwrHg",input_descripcion:"Adelanto_input_descripcion__Vs2z6",input_generico:"Adelanto_input_generico__IY5A8",agregar_button:"Adelanto_agregar_button__aZ_9p",text_data:"Adelanto_text_data__vaplQ",text_title:"Adelanto_text_title__JQlf2",editarB:"Adelanto_editarB__BWfU5",contenedor:"Adelanto_contenedor__6DHub",ocultarB:"Adelanto_ocultarB__uBUTJ",mostrarB:"Adelanto_mostrarB__kuYz2",contenedor_btns:"Adelanto_contenedor_btns__yHnHg",label2:"Adelanto_label2__OOtdT",inputObser:"Adelanto_inputObser__2yUbY"}}},function(e){e.O(0,[4711,9774,2888,179],(function(){return n=1865,e(e.s=n);var n}));var n=e.O();_N_E=n}]);