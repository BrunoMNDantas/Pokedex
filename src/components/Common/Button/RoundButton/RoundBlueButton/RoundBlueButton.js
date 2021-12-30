import styles from './RoundBlueButton.module.css'
import RoundButton from '../RoundButton'

export default function RoundBlueButton(props) {
    return (
        <RoundButton onClick={props.onClick} className={styles.button} />
    )
}