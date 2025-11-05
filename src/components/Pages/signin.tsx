import { useRef } from "react"
import { Button } from "../ui/button"
import { InputBox } from "../ui/inputBox"
import axios from "axios"
import { BACKEND_URL } from "../../config"
import { useNavigate } from "react-router-dom"

export const Signin=()=>{
    const usernameRef=useRef<HTMLInputElement>(null)
    const passwordRef=useRef<HTMLInputElement>(null)
    const navigate=useNavigate()

    async function signin(){
        const username=usernameRef.current?.value
        const password=passwordRef.current?.value

        const res=await axios.post(`${BACKEND_URL}/signin`,{
            username:username,
            password:password
        })
        localStorage.setItem("token",res.data.token)
        navigate("/home")
    } 
    return <div className="bg-gray-400 h-screen w-screen flex items-center justify-center">
        <div className="bg-white rounded-md border min-w-48 p-8 ">
                <InputBox ref={usernameRef} placeholder="Enter Username"/>
                <InputBox ref={passwordRef} placeholder="Enter Password"/>
                <div className="flex justify-center ">
                    <Button variant="secondary" size="sm" text="Sign In" fullwidth={true} loading={false} onClick={signin}/>
                </div>
        </div>
    </div>
}