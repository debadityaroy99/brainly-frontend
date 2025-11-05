import { ShareIcon } from "../icons/shareicon"
import { XEmbed } from 'react-social-media-embed';

interface CardProps{
    title: string;
    link:string;
    type:string
}

export const Card=(props:CardProps)=>{
    return <div>
            <div className="p-2 my-2  bg-white rounded-md shadow-md outline-slate-200
                w-full border-gray-200 border">
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
                {props.type=="youtube" && <iframe className="w-full h-[300px]" src={props.link.replace("watch?v=","embed/")}
            title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; 
            encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen></iframe>}

            {props.type === "twitter" && (
                <div className="flex justify-center max-h-[300px] overflow-auto">
                    <blockquote className="twitter-tweet">
                    <a href={props.link.replace("x.com","twitter.com")}></a> 
                    </blockquote>
                </div>
            )}
            </div> 
        </div>
    </div>
}