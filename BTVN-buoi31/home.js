import {methodGetLogin} from "./api.js";
const onMounted = async () =>{
    const accessToken = localStorage.getItem('access');
    if(!accessToken){
        window.location.href= './login.html'
    }
    //get post
    const posts = await methodGetLogin('post/');

}
onMounted()