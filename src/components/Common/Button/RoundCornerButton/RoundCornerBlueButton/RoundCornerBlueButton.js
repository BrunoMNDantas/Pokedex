import styles from './RoundCornerBlueButton.module.css'
import RoundCornerButton from '../RoundCornerButton'

export default function RoundCornerBlueButton(props) {
    return (
        <RoundCornerButton onClick={props.onClick} className={styles.button} />
    )
}