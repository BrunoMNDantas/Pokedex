import styles from './Screen.module.css'

export default function Screen(props) {
    return (
        <div id={styles.screen}>
            <img className={props.pokemonImage ?  styles.show : ""} src={props.pokemonImage} alt=""/>
        </div>
    )
}