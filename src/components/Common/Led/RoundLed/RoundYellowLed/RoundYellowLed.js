import styles from './RoundYellowLed.module.css'
import RoundLed from '../RoundLed'

export default function RoundYellowLed(props) {
    return (
        <RoundLed
            on={props.on}
            onClass={styles.on}
            offClass={styles.off} />
    )
}