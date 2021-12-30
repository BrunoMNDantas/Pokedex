import styles from './DotRedLed.module.css'
import DotLed from '../DotLed'

export default function DotRedLed(props) {
   
    return (
        <DotLed
            on={props.on}
            onClass={styles.on}
            offClass={styles.off} />
    )
}