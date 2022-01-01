import styles from './RoundCornerButton.module.css'
import Button from '../Button'

export default function RoundCornerButton(props) {
    return (
        <div id={styles.button}>
            <Button onClick={props.onClick} className={props.className}>{props.children}</Button>
        </div>
    )
}