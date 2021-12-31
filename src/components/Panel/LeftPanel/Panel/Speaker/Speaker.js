import { useState, useEffect } from 'react'
import styles from './Speaker.module.css'
import { useSelector } from 'react-redux'
import { useSpeechSynthesis } from 'react-speech-kit';

export default function Speaker(props) {

    const audio = new Audio(process.env.PUBLIC_URL + '/audio/plink.mp3')
    const [subscription, setSubscription] = useState();
    const [play, setPlay] = useState(false)
    const pokemon = useSelector(state => state.pokemon.currentPokemon)
    const { speak, voices } = useSpeechSynthesis();

    useEffect(() => {
        if (subscription)
            subscription.unsubscribe()

        if (props.play) {
            setSubscription(props.play.subscribe({
                next: () => {
                    let voice = voices.find(voice => voice.name.indexOf("Google US English") !== -1)
                    let text = "Number " + pokemon.number + ".\n" + pokemon.name
                    speak({text: text, voice: voice})

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