import styles from './CrossButton.module.css'
import Button from '../../../../Common/Button/Button'
import { useDispatch } from 'react-redux'
import { loadNextPokemon, loadPreviousPokemon } from '../../../../../slices/pokemonSlice'

export default function CrossButton(props) {
    const dispatch = useDispatch()

    return (
        <div id={styles.cross}>
            <div id={styles.topRow}>
                <Button onClick={() => dispatch(loadNextPokemon())} className={styles.topButton}>
                    <img id={styles.upT} src={process.env.PUBLIC_URL + "/images/triangle.png"} alt=""></img>
                </Button>
            </div>
            <div id={styles.middleRow}>
                <Button onClick={() => dispatch(loadPreviousPokemon())} className={styles.leftButton}>
                    <img id={styles.leftT} src={process.env.PUBLIC_URL + "/images/triangle.png"} alt=""></img>
                </Button>
                <div id={styles.midButton} className={styles.button}>
                    <div id={styles.midCircle}></div>
                </div>
                <Button onClick={() => dispatch(loadNextPokemon())} className={styles.rightButton}>
                    <img id={styles.rightT} src={process.env.PUBLIC_URL + "/images/triangle.png"} alt=""></img>
                </Button>
            </div>
            <div id={styles.bottomRow}>
                <Button onClick={() => dispatch(loadPreviousPokemon())} className={styles.bottomButton}>
                    <img id={styles.downT} src={process.env.PUBLIC_URL + "/images/triangle.png"} alt=""></img>
                </Button>
            </div>
        </div>
    )
}