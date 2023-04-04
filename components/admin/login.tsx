import { adminLoginFunc } from '@/utils/functions';
import axios from 'axios'
import { useState } from 'react'
const Login = () => {

    const initialUser={
        email: '',
        password: '',
      
    }

    const [adminLogin, setAdminlogin] = useState(initialUser);
    const inputHandler = (e: any) => {
        setAdminlogin({ ...adminLogin, [e.target.name]: e.target.value });
    }


    async function handleSubmit(e: any) {

        e.preventDefault();
        const response = await adminLoginFunc('auth/login', adminLogin)
            .then((res) => {
                e.preventDefault();
                localStorage.setItem("email", adminLogin.email)
                localStorage.setItem("access-token", res.data.access_token)
                console.log("Response", res.data.access_token);
            }).catch((error) => {
                console.log("error", error)
                // toast.error(error.response?.data?.message)
            })

    }


    return (
        <>
            <form>
                <input name="email" placeholder="email" type="email" onChange={inputHandler}/>
                <input name="password" placeholder="password" type="password" onChange={inputHandler}/>
                <button onClick={handleSubmit}>Login</button>
            </form>
        </>
    );
}

export default Login;