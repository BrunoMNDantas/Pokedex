import styles from './Button.module.css'

export default function Button(props) {
    const audio = new Audio(process.env.PUBLIC_URL + '/audio/click.mp3')

    const handleClick = () => {
        audio.play()
        .catch(e => {
            console.error('Couldn\'t play audio! User has not interacted with document yet.', e);
        });

        if (props.onClick)
            props.onClick()
    }

    return (
        <div id={styles.button} onClick={() => handleClick()} className={props.className}>
            {props.children}
        </div>
    )
}