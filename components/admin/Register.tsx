
import { adminRegisterFunc } from "@/utils/functions";
import { useState } from "react";
const Register = () => {

    const initialUser={
        userName: '',
        email: '',
        password: '',
        passwordConfirm: ''
    }

    const [adminRegister, setAdminRegister] = useState(initialUser);
    const inputHandler = (e: any) => {
        setAdminRegister({ ...adminRegister, [e.target.name]: e.target.value });
    }


    async function handleSubmit(e: any) {

        e.preventDefault();
        const response = await adminRegisterFunc('auth/register', adminRegister)
            .then((res) => {
                e.preventDefault();
                console.log("Response", res);
            }).catch((error) => {
                console.log("error", error)
                // toast.error(error.response?.data?.message)
            })

    }

    return ( 
        <section className="flex flex-col gap-4">
            <input placeholder="username" name="username" type="text" onChange={inputHandler}/>
            <input placeholder="email" name="email" type="email" onChange={inputHandler}/>
            <input placeholder="password" name="password" type="password" onChange={inputHandler}/>
            <input placeholder="passwordConfirm" name="passwordConfirm" type="password" onChange={inputHandler}/>
            <button onClick={handleSubmit}>register</button>
        </section>
     );
}
 
export default Register;