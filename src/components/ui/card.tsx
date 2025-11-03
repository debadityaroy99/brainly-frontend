import { ShareIcon } from "../icons/shareicon"

export const Card=()=>{
    return <div className="p-5  bg-white rounded-md shadow-md outline-slate-200 max-w-96 border-gray-200 border">
        <div className="flex justify-center">
            <ShareIcon size="md"/>
            <span className="ml-2">Project Ideas</span>
            <span className="ml-2"><ShareIcon size="md"/></span>
        </div> 
    </div>
}