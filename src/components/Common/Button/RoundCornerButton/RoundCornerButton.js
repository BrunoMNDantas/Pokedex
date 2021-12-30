import { Component } from 'react'
import styles from './RoundCornerButton.module.css'
import Button from '../Button'

class RoundCornerButton extends Component {
    render() {
        return (
            <div id={styles.button}>
                <Button onClick={this.props.onClick} className={this.props.className}></Button>
            </div>
        )
    }
}

export default RoundCornerButton