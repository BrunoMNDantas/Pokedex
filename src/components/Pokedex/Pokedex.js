import { useSelector, useDispatch } from 'react-redux'
import styles from './Pokedex.module.css'
import LeftCover from '../Cover/LeftCover/LeftCover'
import RightCover from '../Cover/RightCover/RightCover'
import RightPanel from '../Panel/RightPanel/RightPanel'
import LeftPanel from '../Panel/LeftPanel/LeftPanel'
import { loadPokemon as fetchPokemon } from '../../slices/pokemonSlice'
import { INITIAL_POKEMON_NUMBER } from '../../app/configs'

function Pokedex () {
    const dispatch = useDispatch()
    const loading = useSelector(state => state.pokemon.loading)
    const currentPokemon = useSelector(state => state.pokemon.currentPokemon) 

    const loadNextPokemon = () => loadPokemon(currentPokemon.number + 1)
    const loadPreviousPokemon = () => loadPokemon(currentPokemon.number - 1)
    const loadPokemon = (number) => {
        if(!loading) {
            dispatch(fetchPokemon(number))                
        } else {
            window.alert("Wait while loading!")
        }
    }

    if(!currentPokemon && !loading) 
        dispatch(fetchPokemon(INITIAL_POKEMON_NUMBER))                

    return (
        <div id={styles.pokedex}>
            <div id={styles.left}>
                <div id={styles.leftCover}>
                    <LeftCover />
                </div>
                <div id={styles.leftPanel}>
                    <LeftPanel pokemon={currentPokemon}
                        loadPokemon={number => loadPokemon(number)}
                        onTopClick={() => loadNextPokemon()}
                        onBottomClick={() => loadPreviousPokemon()}
                        onLeftClick={() => loadPreviousPokemon()}
                        onRightClick={() => loadNextPokemon()} />
                </div>
            </div>
            <div id={styles.right}>
                <div id={styles.rightCover}>
                    <RightCover />
                </div>
                <div id={styles.rightPanel}>
                    <RightPanel pokemon={currentPokemon} />
                </div>
            </div>
        </div>
    )
    
}

export default Pokedex