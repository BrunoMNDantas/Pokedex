import React, { Component } from 'react'
import styles from './Speaker.module.css'

class Speaker extends Component {

    audio = new Audio(process.env.PUBLIC_URL + '/audio/plink.mp3')
    subscription;

    constructor(props) {
        super(props)
        this.state = {
            play: false
        }
    }

    componentDidMount() {
        this.updateState(this.props)
    }

    componentWillReceiveProps(newProps) {
        this.updateState(newProps)
    }

    componentWillUnmount() {
        if (this.subscription)
            this.subscription.unsubscribe()
    }

    updateState(props) {
        if (this.subscription)
            this.subscription.unsubscribe()

        if (props.play) {
            this.subscription = props.play.subscribe({
                next: () => {
                    this.audio.play()
                    this.setState({ play: true })
                    setTimeout(() => this.setState({ play: false }), 1500)
                }
            })
        }

    }

    render() {
        return (
            <div id={styles.speaker} className={this.state.play ? styles.play : ""}>
                <div className={styles.hole}></div>
                <div className={styles.hole}></div>
                <div className={styles.hole}></div>
                <div className={styles.hole}></div>
            </div>
        )
    }
}

export default Speaker