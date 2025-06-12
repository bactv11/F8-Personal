const baseUrl = 'https://8fty49z8qb.execute-api.ap-southeast-1.amazonaws.com/'

const methodGetLogin = async (endPoint) => {
    const response = await fetch(`${baseUrl}/${endPoint}`,{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.access}`
        }
    })
    const data = await response.json()

    if (data.detail === 'token expired'){
        await getNewToken( () => methodGetLogin(endPoint))
    }
    return data
}
const methodPostLogin = async (endPoint,body) => {
    const response = await fetch(
        `${baseUrl}/${endPoint}`, {
            method:'POST',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.access}`
            },
            body:JSON.stringify(body)
        })
    const data = await response.json()
    if (data.detail === 'token expired'){
        await getNewToken( () => methodPostLogin(endPoint,body))
    }
    return data
}
const getNewToken = async (callback) => {
    const response = await fetch(
        `${baseUrl}/`, {
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({refresh: localStorage.getItem('refresh')})
        })

    const data = await response.json()

    if (data.access) {
        localStorage.setItem('access', data.access)
        await callback()
    }
}
export {
    methodPostLogin,methodGetLogin
}