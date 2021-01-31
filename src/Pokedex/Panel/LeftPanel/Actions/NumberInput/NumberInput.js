import { Component } from 'react'
import styles from './NumberInput.module.css'

class NumberInput extends Component {

    constructor(props) {
        super(props)
        this.state = { number: props.number }
    }

    componentWillReceiveProps(newProps) {
        this.setState({ number: newProps.number })
    }

    handleChange(event) {
        this.setState({ number: Number(event.target.value) });
    }

    handleSubmit(event) {
        if (this.props.onNewValue)
            this.props.onNewValue(this.state.number)

        event.preventDefault()
    }

    render() {
        return (
            <form id={styles.container} onSubmit={event => this.handleSubmit(event)}>
                <input type="number"
                    value={this.state.number ? this.state.number : ""}
                    onChange={event => this.handleChange(event)}></input>
            </form>
        )
    }
}

export default NumberInput