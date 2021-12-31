import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Glass from './Glass/Glass'
import RoundRedLed from '../../../Common/Led/RoundLed/RoundRedLed/RoundRedLed'
import RoundYellowLed from '../../../Common/Led/RoundLed/RoundYellowLed/RoundYellowLed'
import RoundGreenLed from '../../../Common/Led/RoundLed/RoundGreenLed/RoundGreenLed'
import styles from './Header.module.css'

export default function Header(props) {
    const spinGlass = useSelector(state => state.pokemon.loading) 
    const pokemon = useSelector(state => state.pokemon.currentPokemon) 
    const [redOn, setRedOn] = useState(false) 
    const [yellowOn, setYellowOn] = useState(false) 
    const [greenOn, setGreenOn] = useState(false) 
    const [timer, setTimer] = useState()

    const initTimer = () => {
        if(!pokemon) { 
            if(!timer) {
                setTimer(setInterval(() => {
                    if(redOn) {
                        setRedOn(false);
                        setYellowOn(true);
                        setGreenOn(false);            
                    } else if(yellowOn) {
                        setRedOn(false);
                        setYellowOn(false);
                        setGreenOn(true);            
                    } else {
                        setRedOn(true);
                        setYellowOn(false);
                        setGreenOn(false);            
                    }
                }, 300))
            }
        } else {
            setRedOn(false);
            setYellowOn(false);
            setGreenOn(false);     

            clearTimer();       
        }  
    }

    const clearTimer = () => {
        if(timer) {
            clearInterval(timer)
            setTimer(null)
        }
    }
    
    useEffect(() => {
        initTimer()
        return () => clearTimer()
    },[spinGlass, redOn, yellowOn, greenOn, timer]);

    return (
        <div id={styles.header}>
            <div id={styles.glass}><Glass spin={spinGlass}/></div>
            <div id={styles.redLed}><RoundRedLed on={redOn}/></div>
            <div id={styles.yellowLed}><RoundYellowLed on={yellowOn}/></div>
            <div id={styles.greenLed}><RoundGreenLed on={greenOn}/></div>
        </div>
    )
}