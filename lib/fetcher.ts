export const fetcher = (url: string) => fetch(process.env.NEXT_PUBLIC_API_URL + url, {
    mode:'cors',
    method: 'GET',
    headers: {
        'Referrer-Policy': 'origin-when-cross-origin',
        'Access-Control-Allow-Origin': `${process.env.NEXT_PUBLIC_URL}`
    }
}).then(res => {
    return res.json().then(data => {
        if (res.ok) {
            return Promise.resolve(data)
        } else {
            return Promise.reject(data)
        }
    })
})

export const fetcherWithToken = (url: string) => fetch(process.env.NEXT_PUBLIC_API_URL + url, {
    mode:'cors',
    method: 'GET',
    headers: {
        'Referrer-Policy': 'origin-when-cross-origin',
        'Authorization': "Bearer " + localStorage.getItem("auth_token"),
        'Access-Control-Allow-Origin': `${process.env.NEXT_PUBLIC_URL}`
    }
}).then(res => {
    return res.json().then(data => {
        if (res.ok) {
            return Promise.resolve(data)
        } else {
            return Promise.reject(data)
        }
    })
})

export const fetcherBlobWithToken = (url: string) => fetch(process.env.NEXT_PUBLIC_API_URL + url, {
    mode:'cors',
    method: 'GET',
    headers: {
        'Referrer-Policy': 'origin-when-cross-origin',
        'Authorization': "Bearer " + localStorage.getItem("auth_token"),
        'Access-Control-Allow-Origin': `${process.env.NEXT_PUBLIC_URL}`
    }
}).then(res => {
    return res.blob().then(data => {
        if (res.ok) {
            return Promise.resolve(data)
        } else {
            return Promise.reject(data)
        }
    })
})