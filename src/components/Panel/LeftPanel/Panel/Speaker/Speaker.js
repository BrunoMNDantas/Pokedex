import { useState, useEffect } from 'react'
import styles from './Speaker.module.css'

export default function Speaker(props) {

    const audio = new Audio(process.env.PUBLIC_URL + '/audio/plink.mp3')
    const [subscription, setSubscription] = useState();
    const [play, setPlay] = useState(false)

    useEffect(() => {
        if (subscription)
            subscription.unsubscribe()

        if (props.play) {
            setSubscription(props.play.subscribe({
                next: () => {
                    audio.play()
                    setPlay(true)
                    setTimeout(() => setPlay(false), 1500)
                }
            }))
        }
        
        return () => {
            if (subscription)
                subscription.unsubscribe()
        }
    },[play, props]);

    return (
        <div id={styles.speaker} className={play ? styles.play : ""}>
            <div className={styles.hole}></div>
            <div className={styles.hole}></div>
            <div className={styles.hole}></div>
            <div className={styles.hole}></div>
        </div>
    )
}