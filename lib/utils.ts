import { NextRouter, SingletonRouter } from "next/router";

export const redirectByRole = (router : SingletonRouter | NextRouter, role : Role) => {
    switch(role) {
        case Role.SCOUT:
            router.push("/dashboard/info", '/dashboard', {shallow: true})
            break
        case Role.RAMA:
            router.push("/dashboard/jefe-rama", '/dashboard', {shallow: true})
            break
        case Role.GRUPO:
            router.push("/dashboard/jefe-grupo/inscripciones", '/dashboard', {shallow: true})
            break
        case Role.TESORERO:
            router.push("/dashboard/tesorero", '/dashboard', {shallow: true})
            break
        default:
            router.push("/dashboard/info", '/dashboard', {shallow: true})
            break
    }
}

export function downloadCSV() {
    fetch(process.env.NEXT_PUBLIC_API_URL + `/api/payments/generateCSV/1`, {
        method: 'GET',
        headers: new Headers({
            'Referrer-Policy': 'origin-when-cross-origin',
            'Authorization': "Bearer " + localStorage.getItem("auth_token"),
            'Access-Control-Allow-Origin': `${process.env.NEXT_PUBLIC_URL}`
        })
    })
    .then(response => response.blob())
    .then(blob => {
        var url = window.URL.createObjectURL(blob);
        Object.assign(document.createElement('a'), { target: '_blank', href: url, download: `Historial de pagos-${new Date().toISOString().split('T')[0]}.csv`}).click();
        setTimeout(function(){
            window.URL.revokeObjectURL(url);
        }, 100);
    });
}

export enum Role {
    SCOUT,
    TESORERO,
    RAMA,
    GRUPO,
    ADMIN
}