import { useSelector } from 'react-redux'
import MiniScreen from '../MiniScreen'

export default function BackImageMiniScreen(props) {
    const pokemon = useSelector(state => state.pokemon.currentPokemon)

    return (
        <MiniScreen image={pokemon?.images.back} />
    )
}