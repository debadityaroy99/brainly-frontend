export interface buttonProps{
    variant:"primary"|"secondary",
    size:"lg" | "md" | "sm",
    text?:string,
    startIcon?:any,
    onClick?: ()=>void,
    fullwidth:boolean,
    loading?:boolean
}

const variants={
    "primary": "bg-[#e0e6ff] text-[#544db9] font-medium",
    "secondary": "bg-[#4f45e1] font-medium text-white",
}

const sizeStyles={
    "sm":"p-2",
    "md":"p-4",
    "lg":"p-6"
}
const defaultStyle="rounded-md flex items-center justify-center "

export const Button=(props:buttonProps)=>{
    return <>
        <button onClick={props.onClick} className={`${variants[props.variant]} ${sizeStyles[props.size]} ${defaultStyle} 
         ${props.fullwidth?"w-full":null} ${props.loading?"opacity-45 cursor-not-allowed":"cursor-pointer"}` }>
            {props.startIcon ? <div className="pr-2">{props.startIcon}</div>:null}
           {props.text}</button> 
    </>
}

