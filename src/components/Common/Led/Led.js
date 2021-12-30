export default function Led(props) {   
    return <div className={props.on ? props.onClass : props.offClass}/>
}