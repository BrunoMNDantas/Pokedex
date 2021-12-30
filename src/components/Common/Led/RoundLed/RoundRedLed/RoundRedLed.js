import styles from './RoundRedLed.module.css'
import RoundLed from '../RoundLed'

export default function RoundRedLed(props) {
    return (
        <RoundLed
            on={props.on}
            onClass={styles.on}
            offClass={styles.off} />
    )
}