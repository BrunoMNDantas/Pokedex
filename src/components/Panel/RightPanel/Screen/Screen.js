import styles from './Screen.module.css'

export default function Screen(props) {
    return props.pokemon ? (
        <div id={styles.screen}>
            <div className={props.pokemon ? styles.show : ""}>
                <strong>Number:</strong> {props.pokemon.number}<br />
                <strong>Name:</strong> {props.pokemon.name}<br />
                <strong>Type:</strong> {props.pokemon.types.reduce((a, b) => a + " | " + b)}<br />
                <strong>Weight:</strong> {props.pokemon.weight}<br /><br />
            </div>
        </div>
    ) : (
            <div id={styles.screen}>
            </div>
        )
}