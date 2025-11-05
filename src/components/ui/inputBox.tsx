export const InputBox=({ref,placeholder}:{ref?:any,placeholder:string})=>{
    return <div>
        <input ref={ref} placeholder={placeholder} type={"text"} className="py-2 px-4 m-1 border rouned"/>
    </div>
}