import styles from './RoundButton.module.css'
import Button from '../Button'

export default function RoundButton(props) {
    return (
        <div id={styles.button}>
            <Button onClick={props.onClick} className={props.className}></Button>
        </div>
    )
}