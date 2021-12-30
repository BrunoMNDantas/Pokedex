import styles from './CrossButton.module.css'
import Button from '../Button'

export default function CrossButton(props) {
    return (
        <div id={styles.cross}>
            <div id={styles.topRow}>
                <Button onClick={props.onTopClick} className={styles.topButton}>
                    <img id={styles.upT} src={process.env.PUBLIC_URL + "/images/triangle.png"} alt=""></img>
                </Button>
            </div>
            <div id={styles.middleRow}>
                <Button onClick={props.onLeftClick} className={styles.leftButton}>
                    <img id={styles.leftT} src={process.env.PUBLIC_URL + "/images/triangle.png"} alt=""></img>
                </Button>
                <div id={styles.midButton} className={styles.button}>
                    <div id={styles.midCircle}></div>
                </div>
                <Button onClick={props.onRightClick} className={styles.rightButton}>
                    <img id={styles.rightT} src={process.env.PUBLIC_URL + "/images/triangle.png"} alt=""></img>
                </Button>
            </div>
            <div id={styles.bottomRow}>
                <Button onClick={props.onBottomClick} className={styles.bottomButton}>
                    <img id={styles.downT} src={process.env.PUBLIC_URL + "/images/triangle.png"} alt=""></img>
                </Button>
            </div>
        </div>
    )
}