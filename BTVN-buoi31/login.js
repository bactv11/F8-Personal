import {methodPostLogin} from "./api.js";

const onMounted = () =>{
    const accessToken = localStorage.getItem('access');
    if(accessToken){
        window.location.href= 'home.html'
    }
}
const loginBtn = document.getElementById('login-form');

loginBtn.addEventListener('click', async () => {
    const  email = document.querySelector('input[name=email]').value
    const password = document.querySelector('input[name=password]').value
    const data = await methodPostLogin('login',{
        email:email, password:password})
    localStorage.setItem('access', data.access)
    localStorage.setItem('refresh',data.refresh)
    window.location.href="/home.html"
})
onMounted()
