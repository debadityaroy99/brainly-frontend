import { Button } from "../ui/button"
import { InputBox } from "../ui/inputBox"

export const Signup=()=>{
    return <div className="bg-gray-400 h-screen w-screen flex items-center justify-center">
        <div className="bg-white rounded-md border min-w-48 p-8 ">
                <InputBox placeholder="Enter Username"/>
                <InputBox placeholder="Enter Password"/>
                <div className="flex justify-center ">
                    <Button variant="secondary" size="sm" text="Sign Up" fullwidth={true} loading={true}/>
                </div>
        </div>
    </div>
}