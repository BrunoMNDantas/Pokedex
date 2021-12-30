import styles from './Glass.module.css'

export default function Glass(props) {
    return (
        <div id={styles.glass} className={props.spin ? styles.spin : ""}>
            <div id={styles.reflect}> </div>
            <img id={styles.image} src={props.pokemon ? props.pokemon.images.default : null} alt=""></img>
        </div>
    )
}