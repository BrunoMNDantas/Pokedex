import styles from './RoundGreenLed.module.css'
import RoundLed from '../RoundLed'

export default function RoundGreenLed(props) {
    return (
        <RoundLed
            on={props.on}
            onClass={styles.on}
            offClass={styles.off} />
    )
}