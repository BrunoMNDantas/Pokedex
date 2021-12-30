import styles from './RoundRedButton.module.css'
import RoundButton from '../RoundButton'

export default function RoundRedButton(props) {
    return (
        <RoundButton onClick={props.onClick} className={styles.button} />
    )
}