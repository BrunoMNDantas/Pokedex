import { Component } from 'react'
import styles from './Button.module.css'

class Button extends Component {

    audio = new Audio(process.env.PUBLIC_URL + '/audio/click.mp3')

    handleClick() {
        this.audio.play()

        if (this.props.onClick)
            this.props.onClick()
    }

    render() {
        return (
            <div id={styles.button} onClick={() => this.handleClick()} className={this.props.className}>
                {this.props.children}
            </div>
        )
    }
}

export default Button