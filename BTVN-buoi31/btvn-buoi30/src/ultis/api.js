    const BaseUrl = "https://api-todolist-multiuser.onrender.com/Bac/todos"
// get
const methodGet = async (endPoint) => {
    try{
        const response = await fetch(`${BaseUrl}/${endPoint}`)
        return await response.json()
    }catch(error){
        console.log(error)
    }
}
//post
const methodPost = async (endpoint,body) => {
    try{
        const response = await fetch(`${BaseUrl}/${endpoint}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body),
            })
        return await response.json()
    }catch(error){
        console.log(error)
    }
}
//update all
const methodPut = async (endpoint,body) => {
    try {
        const response = await fetch(`${BaseUrl}/${endpoint}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body),
            })
        return await response.json()
    }catch(error){
        console.log(error)
    }
}

//delete
const methodDelete = async (endpoint) => {
    try {
        const response = await fetch(`${BaseUrl}/${endpoint}`,
            {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                }
            })
        return await response.json()
    }catch(error){
        console.log(error)
    }
}

//export
export {
    methodGet,methodPost,methodPut,methodDelete
}