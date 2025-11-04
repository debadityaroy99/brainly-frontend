import type { ReactElement } from "react"


export const SidebarItem=({text,icon}:{text:string,icon:ReactElement})=>{

    return <div className="flex py-1 px-1 hover:bg-gray-100 cursor-pointer rounded-md duration-200">
        <div className="mr-2 text-blue-300">
            {icon}
        </div>
        {text}
    </div>
}