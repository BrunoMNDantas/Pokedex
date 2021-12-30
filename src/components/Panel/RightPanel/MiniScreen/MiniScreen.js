import styles from './MiniScreen.module.css'

export default function MiniScreen(props) {
    return (
        <div id={styles.screen}>
            <img className={props.image ? styles.show : ""} src={props.image} alt=""></img>                
        </div>
    )
}