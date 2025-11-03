import { ShareIcon } from "../icons/shareicon"

export const Card=()=>{
    return <div className="p-5 my-2  bg-white rounded-md shadow-md outline-slate-200 w-92 border-gray-200 border">
        <div className="flex justify-between">
            <div className="items-center flex">
                <ShareIcon size="md"/>
                <span className="ml-2">Project Ideas</span>
            </div>
            <div className="flex items-center">
                <div className="text-gray-500">
                    <ShareIcon size="md"/>                                    
                </div>
                <div className="items-center text-gray-500">
                    <ShareIcon size="md"/>                                    
                </div>
            </div>
        </div>
        <div className="p-2">
        <iframe width="300" height="200" src="https://www.youtube.com/embed/4DKqqfE3-yc?si=2RdjbfNC_BjPB55N" 
        title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; 
        encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen></iframe>
        </div> 
    </div>
}