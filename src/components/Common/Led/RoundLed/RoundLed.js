import styles from './RoundLed.module.css'
import Led from '../Led'

export default function RoundLed(props) {   
    return (
        <div id={styles.led}>
            <Led                    
                on={props.on}
                onClass={props.onClass}
                offClass={props.offClass} />
        </div>
    )
}