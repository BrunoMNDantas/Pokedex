import { useState, useEffect } from 'react'
import styles from './NumberInput.module.css'

export default function NumberInput(props) {
    const [number, setNumber] = useState(props.number)
    useEffect(() => { setNumber(props.number)}, [props.number] )

    const handleChange = event => {
        setNumber(Number(event.target.value))
    }

    const handleSubmit = event => {
        if (props.onNewValue)
            props.onNewValue(number)

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