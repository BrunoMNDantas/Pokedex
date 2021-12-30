import styles from './RoundOrangeLed.module.css'
import RoundLed from '../RoundLed'

export default function RoundOrangeLed(props) {
    return (
        <RoundLed
            on={props.on}
            onClass={styles.on}
            offClass={styles.off} />
    )
}