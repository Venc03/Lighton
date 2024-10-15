export default function Elem(props){
    function katt(){
        props.katt(props.index)
    }
    return(
        <div className="elem" onClick={() => katt(katt)}>
            {props.elem}
        </div>
    );
}