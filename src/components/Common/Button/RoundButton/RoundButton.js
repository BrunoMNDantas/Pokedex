import { Component } from 'react'
import styles from './RoundButton.module.css'
import Button from '../Button'

class RoundButton extends Component {
    render() {
        return (
            <div id={styles.button}>
                <Button onClick={this.props.onClick} className={this.props.className}></Button>
            </div>
        )
    }
}

export default RoundButton