import styles from './DotLed.module.css'
import Led from '../Led'

export default function DotLed(props) {   
    return (
        <div id={styles.led}>
            <Led                    
                on={props.on}
                onClass={props.onClass}
                offClass={props.offClass} />
        </div>
    )
}