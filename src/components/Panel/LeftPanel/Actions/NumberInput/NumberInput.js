import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styles from './NumberInput.module.css'
import { loadPokemon } from '../../../../../slices/pokemonSlice'

export default function NumberInput(props) {
    const dispatch = useDispatch()
    const currentNumber = useSelector(state => state.pokemon.currentPokemon?.number)

    const [number, setNumber] = useState(currentNumber)

    useEffect(() => { setNumber(currentNumber)}, [currentNumber] )

    const handleChange = event => {
        setNumber(Number(event.target.value))
    }

    const handleSubmit = event => {
        dispatch(loadPokemon(number))
        event.preventDefault()
    }

    return (
        <form id={styles.container} onSubmit={event => handleSubmit(event)}>
            <input type="number"
                value={number ? number : ""}
                onChange={event => handleChange(event)}></input>
        </form>
    )
}