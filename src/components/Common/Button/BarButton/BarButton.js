import styles from './BarButton.module.css'
import Button from '../Button'

export default function BarButton(props) {
    return (
        <div id={styles.button}>
            <Button onClick={props.onClick} className={props.className}></Button>
        </div>
    )
}