
import { useRef } from "react";
import { CrossIcon } from "../icons/crossIcon";
import { Button } from "./button";
import { InputBox } from "./inputBox";
import { BACKEND_URL } from "../../config";
import axios from "axios";

export const AddContentModal = ({open,setModal}:{open:boolean,setModal:(arg:boolean)=>void}) => {
    const titleRef=useRef<HTMLInputElement>(null)
    const linkRef=useRef<HTMLInputElement>(null)
    const typeRef=useRef<HTMLInputElement>(null)
 
    async function addContent(){
        const title=titleRef.current?.value
        const link=linkRef.current?.value
        const type=typeRef.current?.value

    await axios.post(
    `${BACKEND_URL}/addcontent`,
    {
        link: link,
        type: type,
        title: title,
    },
    {
        headers: {
        Authorization: `${localStorage.token}`
        },
    }
    );
    alert("content added!")

    }
  return (
    <div>
        {open && <div className="w-full h-screen bg-[rgba(100,116,139,0.6)] fixed inset-0 flex justify-center items-center">
            <div className="bg-white rounded p-4">
                <div className="flex justify-end">
                    <button onClick={()=>{setModal(false)}}><CrossIcon/></button>
                </div>
                <InputBox placeholder="Title" ref={titleRef}/>
                <InputBox placeholder="Link" ref={linkRef}/>
                <InputBox placeholder="Type" ref={typeRef}/>
                <div className="flex justify-center">
                    <Button variant="primary" size="sm" text="Submit" fullwidth onClick={addContent}/>
                </div>
                
            </div>
        </div>}
    </div>
  );
};
