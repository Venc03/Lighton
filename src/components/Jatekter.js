import Elem from "./Elem"

export default function Jatekter(props){
    function katt(data){
        props.katt(data)
    }
    return(
        <>
            {
                props.LIST.map((elem, index)=>{
                    return (<Elem elemAdat={elem} key={index} katt={katt}/>)
                })
            }
        </>
    )
}