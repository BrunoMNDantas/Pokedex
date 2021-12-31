import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Subject } from 'rxjs';
import DotRedLed from '../../../Common/Led/DotLed/DotRedLed/DotRedLed'
import RoundRedButton from '../../../Common/Button/RoundButton/RoundRedButton/RoundRedButton'
import Speaker from './Speaker/Speaker'
import styles from './Panel.module.css'
import DefaultImageDisplayScreen from '../../../Screen/DisplayScreen/DefaultImageDisplayScreen/DefaultImageDisplayScreen';

export default function Panel(props) {

    const pokemon = useSelector(state => state.pokemon.currentPokemon)
    const playSound = new Subject();
    const [ledsOn, setLedsOn] = useState(false);
    const [pokemonImage, setPokemonImage] = useState();

    useEffect(() => {
        if (pokemon) {
            setLedsOn(true)
            setPokemonImage(pokemon.images.default)
            playSound.next()
        } else {
            setLedsOn(false)
            setPokemonImage(null)
        }
    },[ledsOn, pokemonImage, pokemon]);

    return (
        <div id={styles.panel}>
            <div id={styles.top}>
                <div className={styles.led}><DotRedLed on={ledsOn} /></div>
                <div className={styles.led}><DotRedLed on={ledsOn} /></div>
            </div>
            <div id={styles.center}>
                <div id={styles.screen}><DefaultImageDisplayScreen /></div>
            </div>
            <div id={styles.bottom}>
                <div id={styles.button}><RoundRedButton /></div>
                <div id={styles.speaker}><Speaker play={playSound} /></div>
            </div>
        </div>
    )
}