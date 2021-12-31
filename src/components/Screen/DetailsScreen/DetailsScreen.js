import { useSelector } from 'react-redux'
import styles from './DetailsScreen.module.css'

export default function DetailsScreen(props) {
    const pokemon = useSelector(state => state.pokemon.currentPokemon) 

    return pokemon ? (
        <div id={styles.screen}>
            <div className={pokemon ? styles.show : ""}>
                <strong>Number:</strong> {pokemon.number}<br />
                <strong>Name:</strong> {pokemon.name}<br />
                <strong>Type:</strong> {pokemon.types.reduce((a, b) => a + " | " + b)}<br />
                <strong>Weight:</strong> {pokemon.weight}<br /><br />
            </div>
        </div>
    ) : (
            <div id={styles.screen}>
            </div>
        )
}