import styles from './Glass.module.css'
import { useSelector } from 'react-redux'

export default function Glass(props) {
    const pokemon = useSelector(state => state.pokemon.currentPokemon) 
    return (
        <div id={styles.glass} className={props.spin ? styles.spin : ""}>
            <div id={styles.reflect}> </div>
            <img id={styles.image} src={pokemon ? pokemon.images.default : null} alt=""></img>
        </div>
    )
}