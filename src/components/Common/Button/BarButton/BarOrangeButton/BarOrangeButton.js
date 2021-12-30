import styles from './BarOrangeButton.module.css'
import BarButton from '../BarButton'

export default function BarOrangeButton(props) {
    return (
        <BarButton onClick={props.onClick} className={styles.button}/>
    )
}