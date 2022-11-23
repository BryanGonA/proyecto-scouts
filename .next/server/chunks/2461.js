"use strict";
exports.id = 2461;
exports.ids = [2461];
exports.modules = {

/***/ 2461:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EZ": () => (/* binding */ downloadCSV),
/* harmony export */   "Sv": () => (/* binding */ redirectByRole),
/* harmony export */   "uU": () => (/* binding */ Role)
/* harmony export */ });
const redirectByRole = (router, role)=>{
    switch(role){
        case Role.SCOUT:
            router.push("/dashboard/info", "/dashboard", {
                shallow: true
            });
            break;
        case Role.RAMA:
            router.push("/dashboard/jefe-rama", "/dashboard", {
                shallow: true
            });
            break;
        case Role.GRUPO:
            router.push("/dashboard/jefe-grupo/inscripciones", "/dashboard", {
                shallow: true
            });
            break;
        case Role.TESORERO:
            router.push("/dashboard/tesorero", "/dashboard", {
                shallow: true
            });
            break;
        default:
            router.push("/dashboard/info", "/dashboard", {
                shallow: true
            });
            break;
    }
};
function downloadCSV() {
    fetch("http://localhost:4000" + `/api/payments/generateCSV/1`, {
        method: "GET",
        headers: new Headers({
            "Referrer-Policy": "origin-when-cross-origin",
            "Authorization": "Bearer " + localStorage.getItem("auth_token"),
            "Access-Control-Allow-Origin": `${"http://localhost:3000"}`
        })
    }).then((response)=>response.blob()).then((blob)=>{
        var url = window.URL.createObjectURL(blob);
        Object.assign(document.createElement("a"), {
            target: "_blank",
            href: url,
            download: `Historial de pagos-${new Date().toISOString().split("T")[0]}.csv`
        }).click();
        setTimeout(function() {
            window.URL.revokeObjectURL(url);
        }, 100);
    });
}
var Role;
(function(Role) {
    Role[Role["SCOUT"] = 0] = "SCOUT";
    Role[Role["TESORERO"] = 1] = "TESORERO";
    Role[Role["RAMA"] = 2] = "RAMA";
    Role[Role["GRUPO"] = 3] = "GRUPO";
    Role[Role["ADMIN"] = 4] = "ADMIN";
})(Role || (Role = {}));


/***/ })

};
;