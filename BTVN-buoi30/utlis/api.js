const BaseUrl ="https://api-todolist-multiuser.onrender.com/Kong/todos";
const getMethod = async (endPoint) =>{
    try{
        const data = await fetch(`${BaseUrl}/${endPoint}`)
        return await data.json()
    }catch(err){
        console.log(err);
    }
}
//post
const postMethod = async (endPoint,body) =>{
    try{
        const data = await fetch(
            `${BaseUrl}/${endPoint}`,
            {
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(body)
            })
        return await data.json()
    }catch (error){
        console.log(error);
    }
}
//update all
const updateAllMethod = async (endPoint,body) =>{
    try{
        const data = await fetch(`${BaseUrl}/${endPoint}`,
            {
                method:'PUT',
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(body)
            })
        return await data.json()
    }catch(err){
        console.log(err);
    }
}
//update
const updateMethod= async (endPoint,body) =>{
    try{
        const data = await fetch(`${BaseUrl}/${endPoint}`,
            {
                method:'PATCH',
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(body)
            })
        return await data.json()
    }catch (error){
        console.log(error);
    }
}
//delete
const deleteMethod= async (endPoint,body) =>{
    try{
        const data = await fetch(`${BaseUrl}/${endPoint}`,
            {
                method:'DELETE',
                headers:{
                    'Content-Type':'application/json'
                }
            })
        return await data.json()
    }catch(err){
        console.log(err);
    }
}
export{
    getMethod,postMethod,updateAllMethod,updateMethod,deleteMethod
}