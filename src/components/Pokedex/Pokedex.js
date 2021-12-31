import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import styles from './Pokedex.module.css'
import LeftCover from '../Cover/LeftCover/LeftCover'
import RightCover from '../Cover/RightCover/RightCover'
import RightPanel from '../Panel/RightPanel/RightPanel'
import LeftPanel from '../Panel/LeftPanel/LeftPanel'
import { loadPokemon as fetchPokemon } from '../../slices/pokemonSlice'
import { INITIAL_POKEMON_NUMBER } from '../../app/configs'

function Pokedex () {
    const dispatch = useDispatch()
    useEffect(() => dispatch(fetchPokemon(INITIAL_POKEMON_NUMBER)), [])
    
    return (
        <div id={styles.pokedex}>
            <div id={styles.left}>
                <div id={styles.leftCover}>
                    <LeftCover />
                </div>
                <div id={styles.leftPanel}>
                    <LeftPanel />
                </div>
            </div>
            <div id={styles.right}>
                <div id={styles.rightCover}>
                    <RightCover />
                </div>
                <div id={styles.rightPanel}>
                    <RightPanel />
                </div>
            </div>
        </div>
    )
    
}

export default Pokedex