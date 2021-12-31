import { useSelector } from 'react-redux'
import DisplayScreen from '../DisplayScreen'

export default function DefaultImageDisplayScreen(props) {
    const pokemon = useSelector(state => state.pokemon.currentPokemon)

    return (
        <DisplayScreen image={pokemon?.images.default}/>
    )
}