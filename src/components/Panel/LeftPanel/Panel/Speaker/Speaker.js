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

    const buildText = () => {
        let name = pokemon.name

        let number = pokemon.number

        let types;
        if(pokemon.types.length > 1) {
            types = " types are " + pokemon.types.reduce((a, b) => a + " , " + b)
            let idx = types.lastIndexOf(",");
            if (idx >= 0) {
                types = types.substring(0, idx) + "and" + types.substring(idx);
            }
        } else {
            types = " type is " + pokemon.types[0]
        }

        return name + " is the number " + number + ". and its " + types
    }

    useEffect(() => {
        if (subscription)
            subscription.unsubscribe()

        if (props.play) {
            setSubscription(props.play.subscribe({
                next: () => {
                    if(pokemon) {
                        let voice = voices.find(voice => voice.name.indexOf("Google US English") !== -1)
                        let text = buildText()
                        speak({text: text, voice: voice, rate: 0.8})
                    }

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