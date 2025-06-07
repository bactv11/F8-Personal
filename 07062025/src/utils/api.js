const BaseURL = 'https://localhost:3000';
const getMethod = async (endpoin) =>{
    try {
        const data = await fetch(`${BaseURL}/${endpoin}`)
        return await data.json();
    }catch(error) {
        console.log(error);
    }
}
//post
const postMethod = async (endpoin,body) =>{
    try {
        const data = await fetch(
            `${BaseURL}/${endpoin}`,
            {
                method: 'POST', //method
                headers: {
                    'Content-Type': 'application/json',
                },//hieu duoc doi tuong truyen vao la Json
                body: JSON.stringify(body)
            })
        return await data.json();
    }catch(error) {
        console.log(error);
    }
}
//update
const putMethod = async (endpoin,body) =>{
    try {
        const data = await fetch(
            `${BaseURL}/${endpoin}`,
            {
                method: 'PUT', //method
                headers: {
                    'Content-Type': 'application/json',
                },//hieu duoc doi tuong truyen vao la Json
                body: JSON.stringify(body)
            })
        return await data.json();
    }catch(error) {
        console.log(error);
    }
}
//patch
const patchMethod = async (endpoin,body) =>{
    try {
        const data = await fetch(
            `${BaseURL}/${endpoin}`,
            {
                method: 'PATCH', //method
                headers: {
                    'Content-Type': 'application/json',
                },//hieu duoc doi tuong truyen vao la Json
                body: JSON.stringify(body)
            })
        return await data.json();
    }catch(error) {
        console.log(error);
    }
}
//delete
const deleteMethod = async (endpoin,body) =>{
    try {
        const data = await fetch(
            `${BaseURL}/${endpoin}`,
            {
                method: 'DELETE', //method
                headers: {
                    'Content-Type': 'application/json',
                },//hieu duoc doi tuong truyen vao la Json
            })
        return await data.json();
    }catch(error) {
        console.log(error);
    }
}

export  {
    getMethod,postMethod,putMethod,patchMethod,deleteMethod
}