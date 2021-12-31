import { useSelector } from 'react-redux'
import MiniScreen from '../MiniScreen'

export default function FrontImageMiniScreen(props) {
    const pokemon = useSelector(state => state.pokemon.currentPokemon)
    
    return (
        <MiniScreen image={pokemon?.images.front} />
    )
}