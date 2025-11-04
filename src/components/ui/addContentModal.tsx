
import { CrossIcon } from "../icons/crossIcon";
import { Button } from "./button";
import { InputBox } from "./inputBox";

export const AddContentModal = ({open,setModal}:{open:boolean,setModal:(arg:boolean)=>void}) => {
  return (
    <div>
        {open && <div className="w-screen h-screen bg-[rgba(100,116,139,0.6)] fixed flex justify-center items-center">
            <div className="bg-white rounded p-4">
                <div className="flex justify-end">
                    <button onClick={()=>{setModal(false)}}><CrossIcon/></button>
                </div>
                <InputBox placeholder="Enter text" onChange={()=>{}}/>
                <div className="flex justify-center">
                    <Button variant="primary" size="sm" text="Click" fullwidth/>
                </div>
                
            </div>
        </div>}
    </div>
  );
};
