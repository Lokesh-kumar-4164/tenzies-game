export default function Die(props){
    
    
    return (
        <button  className={(props.isheld?"clicked ":" ") + "die-button"}onClick={() => props.hold(props.id)} >{props.value}</button>
    )
}