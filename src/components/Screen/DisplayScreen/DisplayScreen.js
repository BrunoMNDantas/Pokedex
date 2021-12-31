import styles from './DisplayScreen.module.css'

export default function DisplayScreen(props) {
    return (
        <div id={styles.screen}>
            <img className={props.image ?  styles.show : ""} src={props.image} alt=""/>
        </div>
    )
}