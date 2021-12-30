import styles from './BarGreenButton.module.css'
import BarButton from '../BarButton'

export default function BarGreenButton(props) {
    return (
        <BarButton onClick={props.onClick} className={styles.button}/>
    )
}