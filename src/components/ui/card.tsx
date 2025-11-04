import { ShareIcon } from "../icons/shareicon"
import { XEmbed } from 'react-social-media-embed';

interface CardProps{
    title: string;
    link:string;
    type:string
}

export const Card=(props:CardProps)=>{
    return <div>
            <div className="p-5 my-2  bg-white rounded-md shadow-md outline-slate-200
                w-92 border-gray-200 border">
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
                {props.type=="youtube" && <iframe className="w-full" src={props.link.replace("watch?v=","embed/")}
            title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; 
            encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen></iframe>}

                {/* {props.type=="twitter" && <div style={{ display: 'flex', justifyContent: 'center' }}>
                <XEmbed url={props.link} width={325} />
                </div>}  */}
                <blockquote className="twitter-tweet">
                <a href={props.link.replace("x.com","twitter.com")}></a> 
                </blockquote>
            </div> 
        </div>
    </div>
}