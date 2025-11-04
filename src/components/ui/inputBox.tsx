export const InputBox=({onChange,placeholder}:{onChange?:()=>void,placeholder:string})=>{
    return <div>
        <input placeholder={placeholder} type={"text"} className="py-2 px-4 m-1 border rouned" onChange={onChange}/>
    </div>
}