(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1066],{7884:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var r=t(5893),a=t(1667),o=t(5853);function s(e){var n=e.content;return(0,r.jsxs)(a.Z,{content:n,children:[(0,r.jsx)(o.Z,{href:"/dashboard/info",name:"Informaci\xf3n personal",svg:"/img/dashboard/info.svg"}),(0,r.jsx)(o.Z,{href:"/dashboard/progress",name:"Mi progreso",svg:"/img/dashboard/progress.svg"}),(0,r.jsx)(o.Z,{href:"/dashboard/payments",name:"Mis pagos",svg:"/img/dashboard/payments.svg"}),(0,r.jsx)(o.Z,{href:"/dashboard/cambio",name:"Cambiar contrase\xf1a",svg:"/img/dashboard/change.svg"}),(0,r.jsx)(o.Z,{href:"/logout",name:"Salir",svg:"/img/dashboard/logout.svg"})]})}},9294:function(e,n,t){"use strict";t.d(n,{Z:function(){return u}});var r=t(5893),a=t(9898),o=t(1667),s=t(5853);function i(e){var n=e.content;return(0,r.jsxs)(o.Z,{content:n,branch:"Jefe de Rama",children:[(0,r.jsx)(s.Z,{href:"/dashboard/jefe-rama",name:"Mi rama",svg:"/img/dashboard/info.svg"}),(0,r.jsx)(s.Z,{href:"/dashboard/cambio",name:"Cambiar contrase\xf1a",svg:"/img/dashboard/change.svg"}),(0,r.jsx)(s.Z,{href:"/logout",name:"Salir",svg:"/img/dashboard/logout.svg"})]})}var c=t(7884);function l(e){var n=e.content;return(0,r.jsxs)(o.Z,{content:n,branch:"Jefe de Grupo",children:[(0,r.jsx)(s.Z,{href:"/dashboard/jefe-grupo/inscripciones",name:"Inscripciones",svg:"/img/dashboard/info.svg"}),(0,r.jsx)(s.Z,{href:"/dashboard/jefe-grupo/personal",name:"Gesti\xf3n personal",svg:"/img/dashboard/person.svg"}),(0,r.jsx)(s.Z,{href:"/dashboard/jefe-grupo/cartera",name:"Cartera Centinelas 113",svg:"/img/dashboard/wallet.svg"}),(0,r.jsx)(s.Z,{href:"/dashboard/cambio",name:"Cambiar contrase\xf1a",svg:"/img/dashboard/change.svg"}),(0,r.jsx)(s.Z,{href:"/logout",name:"Salir",svg:"/img/dashboard/logout.svg"})]})}var d=t(2461);function h(e){var n=e.content;return(0,r.jsxs)(o.Z,{content:n,branch:"Tesorero",children:[(0,r.jsx)(s.Z,{href:"/dashboard/tesorero",name:"Cartera Scouts",svg:"/img/dashboard/info.svg"}),(0,r.jsx)(s.Z,{href:"/dashboard/cambio",name:"Cambiar contrase\xf1a",svg:"/img/dashboard/change.svg"}),(0,r.jsx)(s.Z,{href:"/logout",name:"Salir",svg:"/img/dashboard/logout.svg"})]})}function u(e){var n=e.content,t=(0,a.xJ)(),o=t.user,s=t.isLoading;t.error;if(!s){d.uU[d.uU[o.roles.id-1]];switch(d.uU[d.uU[o.roles.id-1]]){case d.uU.SCOUT:return(0,r.jsx)(c.Z,{content:n});case d.uU.GRUPO:return(0,r.jsx)(l,{content:n});case d.uU.RAMA:return(0,r.jsx)(i,{content:n});case d.uU.TESORERO:return(0,r.jsx)(h,{content:n})}}return(0,r.jsx)(c.Z,{content:n})}},1002:function(e,n,t){"use strict";t.d(n,{Z:function(){return w}});var r=t(5893),a=t(38),o=t.n(a),s=t(1587),i=t(7294),c=t(7568),l=t(655),d=t(960),h=t.n(d),u=t(1664),f=t.n(u);function g(e){var n=e.id,t=(0,i.useState)(null),a=t[0],o=t[1];function s(e){return d.apply(this,arguments)}function d(){return(d=(0,c.Z)((function(e){return(0,l.__generator)(this,(function(t){return a.status=e,a.branches={},o(a),fetch("".concat("http://localhost:4000","/api/users/").concat(n),{method:"PUT",headers:{"Referrer-Policy":"origin-when-cross-origin",Authorization:"Bearer "+localStorage.getItem("auth_token"),"Content-Type":"application/json","Access-Control-Allow-Origin":"".concat("http://localhost:3000")},body:JSON.stringify(a)}).then((function(e){return e.json().then((function(n){return e.ok?Promise.resolve(n):Promise.reject(n)}))})),fetch("".concat("http://localhost:4000","/api/users/").concat(n),{method:"PUT",headers:{"Referrer-Policy":"origin-when-cross-origin",Authorization:"Bearer "+localStorage.getItem("auth_token"),"Content-Type":"application/json","Access-Control-Allow-Origin":"".concat("http://localhost:3000")},body:JSON.stringify(a)}),[2]}))}))).apply(this,arguments)}return(0,i.useEffect)((function(){fetch("".concat("http://localhost:4000","/api/users/").concat(n),{mode:"cors",method:"GET",headers:{"Referrer-Policy":"origin-when-cross-origin",Authorization:"Bearer "+localStorage.getItem("auth_token"),"Content-Type":"application/json","Access-Control-Allow-Origin":"".concat("http://localhost:3000")}}).then((function(e){return e.json().then((function(n){return e.ok?Promise.resolve(n):Promise.reject(n)}))})).then((function(e){o(e.data)}))}),[]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(f(),{href:"/dashboard/info/".concat(n),children:(0,r.jsx)("a",{children:(0,r.jsx)("img",{className:h().icon,src:"/img/dashboard/eye.svg"})})}),(0,r.jsx)(f(),{href:"/dashboard",children:(0,r.jsx)("a",{children:(0,r.jsx)("img",{className:h().icon,src:"/img/dashboard/check.svg",onClick:function(){return s(!0)}})})}),(0,r.jsx)(f(),{href:"/dashboard",children:(0,r.jsx)("a",{children:(0,r.jsx)("img",{className:h().icon,src:"/img/dashboard/cancel.svg",onClick:function(){return s(!1)}})})})]})}var m=t(1799),b=t(9396),_=t(3285),p=t(3680),v=t(355);function j(e){var n=e.id,t=e.value,a=(0,i.useState)(!1),o=a[0],s=a[1],d=function(){return s(!1)},h=(0,i.useState)(!0),u=h[0],f=h[1],g=(0,i.useState)({value:0,label:""}),j=g[0],x=g[1],w=(0,i.useState)([]),y=w[0],S=w[1],C=(0,i.useState)(null),R=C[0],Z=C[1],A=[];function k(){return(k=(0,c.Z)((function(e){var t,r;return(0,l.__generator)(this,(function(a){return t={id:e.value,nameBranch:e.label},r=(0,b.Z)((0,m.Z)({},R),{branches:t}),Z(r),fetch("".concat("http://localhost:4000","/api/users/").concat(n),{method:"PUT",headers:{"Referrer-Policy":"origin-when-cross-origin",Authorization:"Bearer "+localStorage.getItem("auth_token"),"Content-Type":"application/json","Access-Control-Allow-Origin":"".concat("http://localhost:3000")},body:JSON.stringify(r)}).then((function(e){return e.json().then((function(n){return e.ok?Promise.resolve(n):Promise.reject(n)}))})),[2]}))}))).apply(this,arguments)}return(0,i.useEffect)((function(){fetch("".concat("http://localhost:4000","/api/branches"),{mode:"cors",method:"GET",headers:{"Referrer-Policy":"origin-when-cross-origin",Authorization:"Bearer "+localStorage.getItem("auth_token"),"Content-Type":"application/json","Access-Control-Allow-Origin":"".concat("http://localhost:3000")}}).then((function(e){return e.json().then((function(n){return e.ok?Promise.resolve(n):Promise.reject(n)}))})).then((function(e){e.data.map((function(e){var n={value:e.id,label:e.nameBranch};A.push(n)}))})).then((function(){S(A)})),fetch("".concat("http://localhost:4000","/api/users/").concat(n),{mode:"cors",method:"GET",headers:{"Referrer-Policy":"origin-when-cross-origin",Authorization:"Bearer "+localStorage.getItem("auth_token"),"Content-Type":"application/json","Access-Control-Allow-Origin":"".concat("http://localhost:3000")}}).then((function(e){return e.json().then((function(n){return e.ok?Promise.resolve(n):Promise.reject(n)}))})).then((function(e){var n={value:e.data.branches.id,label:e.data.branches.nameBranch};x(n)})).then((function(){f(!1)})),fetch("".concat("http://localhost:4000","/api/users/").concat(n),{mode:"cors",method:"GET",headers:{"Referrer-Policy":"origin-when-cross-origin",Authorization:"Bearer "+localStorage.getItem("auth_token"),"Content-Type":"application/json","Access-Control-Allow-Origin":"".concat("http://localhost:3000")}}).then((function(e){return e.json().then((function(n){return e.ok?Promise.resolve(n):Promise.reject(n)}))})).then((function(e){Z(e.data)}))}),[]),(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{onClick:function(){return s(!0)},children:t.nameBranch})," ",(0,r.jsxs)(_.Z,{show:o,onHide:d,children:[(0,r.jsx)(_.Z.Header,{closeButton:!0,children:(0,r.jsx)(_.Z.Title,{className:"text-center",children:"Seleccione la Rama a ingresar"})}),u?(0,r.jsx)("div",{className:"row col-12 mt-5 justify-content-center",children:"Cargando Informaci\xf3n..."}):(0,r.jsx)(_.Z.Body,{children:(0,r.jsx)(v.ZP,{value:j,onChange:function(e){x(e)},options:y})}),(0,r.jsxs)(_.Z.Footer,{children:[(0,r.jsx)(p.Z,{variant:"primary",onClick:function(){s(!1),function(e){k.apply(this,arguments)}(j)},children:"Continuar"}),(0,r.jsx)(p.Z,{variant:"danger",onClick:d,children:"Cancelar"})]})]})]})})}var x=t(9898);function w(){var e=(0,x.xJ)(),n=e.user,t=e.isLoading,a=(e.error,{columns:[{label:"N\xb0 Inscripci\xf3n",field:"id",sort:"asc",width:150},{label:"Nombre",field:"name",sort:"asc",width:270},{label:"Edad",field:"birthDate",sort:"asc",width:200},{label:"Rama",field:"branch",sort:"asc",width:150},{label:"Estado",field:"status",sort:"asc",width:100},{label:"Acciones",field:"acciones",sort:"asc",width:100}],rows:[]}),c=(0,i.useState)(!0),l=c[0],d=c[1],h=(0,i.useState)(a),u=h[0],f=h[1];return(0,i.useEffect)((function(){t||fetch("".concat("http://localhost:4000","/api/users"),{mode:"cors",method:"GET",headers:{"Referrer-Policy":"origin-when-cross-origin",Authorization:"Bearer "+localStorage.getItem("auth_token"),"Content-Type":"application/json","Access-Control-Allow-Origin":"".concat("http://localhost:3000")}}).then((function(e){return e.json().then((function(n){return e.ok?Promise.resolve(n):Promise.reject(n)}))})).then((function(e){var t=e.data.map((function(e){var n=(new Date).getTime()-new Date(e.birthDate).getTime(),t=Math.round(n/31536e6);return{id:e.id,name:e.name,birthDate:t,branch:(0,r.jsx)(j,{id:e.id,value:e.branches}),status:e.status?"Activo":"Inactivo",acciones:(0,r.jsx)(g,{id:e.id})}}));t=t.filter((function(e){return e.id!=n.id})),a.rows=t,f(a),d(!1)}))}),[n]),(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{children:(0,r.jsx)("h1",{className:"".concat(o().text_title," p-5"),children:"Inscripciones Grupo Centinelas 113"})}),l?(0,r.jsx)("div",{className:"row col-12 mt-5 justify-content-center",children:"Cargando Informaci\xf3n..."}):(0,r.jsx)("div",{className:"".concat(o().text_data," row justify-content-center py-3"),children:(0,r.jsx)("div",{className:"".concat(o().container," py-5 w-100"),id:"example",children:(0,r.jsx)(s.g0K,{striped:!0,bordered:!0,hover:!0,small:!0,responsiveSm:!0,responsiveMd:!0,responsiveLg:!0,responsiveXl:!0,fixed:!0,noBottomColumns:!0,data:u,entriesLabel:"Mostrar entradas",infoLabel:["Mostrando","hasta","de","registros"],paginationLabel:["Anterior","Siguiente"],searchLabel:"Buscar",noRecordsFoundLabel:"No se han encontrado registros"})})})]})}},5853:function(e,n,t){"use strict";t.d(n,{Z:function(){return h}});var r=t(5893),a=t(1664),o=t.n(a),s=t(1163),i=t(7294),c=t(7940),l=t.n(c),d=t(1667);function h(e){var n=e.href,t=e.name,a=e.svg,c=(0,s.useRouter)(),h=(0,i.useContext)(d.l),u=c.pathname.startsWith(n)||c.asPath.startsWith(n);return(0,r.jsx)(o(),{href:n,children:(0,r.jsxs)("div",{className:"d-flex align-items-center justify-content-start ".concat(l().sidelink," ").concat(u?l().active:""),children:[a?(0,r.jsx)("img",{className:l().sideicon,src:a}):null,h?null:(0,r.jsx)("a",{children:t})]})})}},1667:function(e,n,t){"use strict";t.d(n,{l:function(){return h},Z:function(){return u}});var r=t(5893),a=t(1163),o=t(7294);var s=t(7940),i=t.n(s),c=t(9898);function l(e){var n,t=e.branchName,s=((0,a.useRouter)(),(0,c.xJ)()),l=s.user,d=s.isLoading,u=(s.error,(0,c.Sf)()),f=u.image,g=u.isLoading;if(t)n=(0,r.jsx)("p",{className:i().branch,children:t});else{var m=(0,c.ph)(),b=m.branch,_=m.isLoading;n=(0,r.jsx)("p",{className:i().branch,children:_?"Cargando...":b.nameBranch})}(0,o.useContext)(h);return(0,r.jsxs)("div",{className:i().header,children:[(0,r.jsx)("img",{className:i().image,src:g?"/img/profile-picture.png":URL.createObjectURL(f)}),(0,r.jsx)("p",{className:i().name,children:d?"Cargando...":(l.name+" "+l.lastName).toLowerCase()}),n]})}function d(e){var n=e.children;return(0,r.jsx)("div",{children:n})}var h=(0,o.createContext)({});function u(e){var n=e.content,t=e.branch,s=e.children,c=((0,a.useRouter)(),(0,o.useRef)(null)),u=(0,o.useRef)(null),f=function(){var e=function(){return{width:n?window.innerWidth:null,height:n?window.innerHeight:null}},n=!0,t=(0,o.useState)(e()),r=t[0],a=t[1];return(0,o.useEffect)((function(){var t=function(){a(e())};if(n)return window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}}),[n]),r}(),g=(f.height,f.width),m=(0,o.useState)(!1),b=m[0],_=m[1];return(0,o.useEffect)((function(){_(g<=720)}),[g]),(0,o.useEffect)((function(){c.current.style.width="100%"}),[]),(0,r.jsx)(h.Provider,{value:b,children:(0,r.jsxs)("div",{className:"d-flex",children:[(0,r.jsxs)("div",{className:"".concat(i().sidebar," "),ref:c,children:[(0,r.jsx)(l,{branchName:t}),(0,r.jsx)(d,{children:s})]}),(0,r.jsx)("div",{className:"".concat(i().content," flex-fill"),ref:u,children:n})]})})}},2461:function(e,n,t){"use strict";t.d(n,{EZ:function(){return o},Sv:function(){return a},uU:function(){return r}});var r,a=function(e,n){switch(n){case r.SCOUT:e.push("/dashboard/info","/dashboard",{shallow:!0});break;case r.RAMA:e.push("/dashboard/jefe-rama","/dashboard",{shallow:!0});break;case r.GRUPO:e.push("/dashboard/jefe-grupo/inscripciones","/dashboard",{shallow:!0});break;case r.TESORERO:e.push("/dashboard/tesorero","/dashboard",{shallow:!0});break;default:e.push("/dashboard/info","/dashboard",{shallow:!0})}};function o(){fetch("http://localhost:4000/api/payments/generateCSV/1",{method:"GET",headers:new Headers({"Referrer-Policy":"origin-when-cross-origin",Authorization:"Bearer "+localStorage.getItem("auth_token"),"Access-Control-Allow-Origin":"".concat("http://localhost:3000")})}).then((function(e){return e.blob()})).then((function(e){var n=window.URL.createObjectURL(e);Object.assign(document.createElement("a"),{target:"_blank",href:n,download:"Historial de pagos-".concat((new Date).toISOString().split("T")[0],".csv")}).click(),setTimeout((function(){window.URL.revokeObjectURL(n)}),100)}))}!function(e){e[e.SCOUT=0]="SCOUT",e[e.TESORERO=1]="TESORERO",e[e.RAMA=2]="RAMA",e[e.GRUPO=3]="GRUPO",e[e.ADMIN=4]="ADMIN"}(r||(r={}))},4181:function(e,n,t){"use strict";var r=t(7294),a=t(1163),o=t.n(a),s=t(9898);n.Z=function(e,n,t){return function(a){var i=(0,s.xJ)(),c=i.user,l=i.isLoading,d=i.error;return(0,r.useEffect)((function(){var e=window.location?window.location:null;l&&d?o().replace("/login?r=".concat(e.pathname+encodeURIComponent(e.search)),"/login",{shallow:!0}):l||c.status?n&&!l&&(t&&n!=c.roles.id-1||n>c.roles.id-1)&&o().push("/dashboard"):o().push("/logout")}),[l,d]),(0,r.createElement)(e,a,null)}}},960:function(e){e.exports={icon:"JefeRama_icon__6KOfV",icon_:"JefeRama_icon___fQrZt"}},7940:function(e){e.exports={sidebar:"Slidebar_sidebar__pw5I_",sidelink:"Slidebar_sidelink__I0n_O",active:"Slidebar_active__BkFah",closebtn:"Slidebar_closebtn__Q2ruM",openbtn:"Slidebar_openbtn__WaRF4",content:"Slidebar_content__s2yv4",sideicon:"Slidebar_sideicon__ypeH_",header:"Slidebar_header__JuoDb",image:"Slidebar_image__V0t9C",name:"Slidebar_name__qFgGz",branch:"Slidebar_branch__qdB8B"}},38:function(e){e.exports={container:"DataQuery_container__d8ETl",text_data:"DataQuery_text_data__iRBPB",text_title:"DataQuery_text_title___AFQM",editarB:"DataQuery_editarB__tWsOl",contenedor:"DataQuery_contenedor__u_wsl",editarI:"DataQuery_editarI__U3oK2",mostrar:"DataQuery_mostrar__Z9AjZ",mostrar_correo:"DataQuery_mostrar_correo__kh71O",ocultarB:"DataQuery_ocultarB__yG1l5",mostrarB:"DataQuery_mostrarB__ct1__",contenedor_btns:"DataQuery_contenedor_btns__CUqWE",label2:"DataQuery_label2__971iP",inputObser:"DataQuery_inputObser__KddmU",addbutton:"DataQuery_addbutton__7_U1c",btn_add:"DataQuery_btn_add__2GWLP",link_plan:"DataQuery_link_plan__VqqD2",icon:"DataQuery_icon__t3ne2",icon_trash:"DataQuery_icon_trash__hdAoS"}}}]);