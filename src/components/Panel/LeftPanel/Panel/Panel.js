import { useState, useEffect } from 'react'
import { Subject } from 'rxjs';
import DotRedLed from '../../../Common/Led/DotLed/DotRedLed/DotRedLed'
import RoundRedButton from '../../../Common/Button/RoundButton/RoundRedButton/RoundRedButton'
import Screen from './Screen/Screen'
import Speaker from './Speaker/Speaker'
import styles from './Panel.module.css'

export default function Panel(props) {

    const playSound = new Subject();
    const [ledsOn, setLedsOn] = useState(false);
    const [pokemonImage, setPokemonImage] = useState();

    useEffect(() => {
        if (props.pokemon) {
            setLedsOn(true)
            setPokemonImage(props.pokemon.images.default)
            playSound.next()
        } else {
            setLedsOn(false)
            setPokemonImage(null)
        }
    },[ledsOn, pokemonImage, props]);

    return (
        <div id={styles.panel}>
            <div id={styles.top}>
                <div className={styles.led}><DotRedLed on={ledsOn} /></div>
                <div className={styles.led}><DotRedLed on={ledsOn} /></div>
            </div>
            <div id={styles.center}>
                <div id={styles.screen}><Screen pokemonImage={pokemonImage} /></div>
            </div>
            <div id={styles.bottom}>
                <div id={styles.button}><RoundRedButton /></div>
                <div id={styles.speaker}><Speaker play={playSound} /></div>
            </div>
        </div>
    )
}