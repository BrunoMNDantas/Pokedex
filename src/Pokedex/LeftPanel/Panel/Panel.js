import React, { Component } from 'react'
import { Subject } from 'rxjs';
import DotRedLed from '../../Common/Led/DotLed/DotRedLed/DotRedLed'
import RoundRedButton from '../../Common/Button/RoundButton/RoundRedButton/RoundRedButton'
import Screen from './Screen/Screen'
import Speaker from './Speaker/Speaker'
import styles from './Panel.module.css'

class Panel extends Component {

    playSound = new Subject();

    constructor(props) {
        super(props)

        this.state = {
            ledsOn: false,
            pokemonImage: null
        }
    }

    componentDidMount() {
        this.updateState(this.props)
    }

    componentWillReceiveProps(newProps) {
        this.updateState(newProps)
    }

    updateState(props) {
        if (props.pokemon) {
            this.setState({
                ledsOn: true,
                pokemonImage: props.pokemon.image
            })
            this.playSound.next()
        } else {
            this.setState({
                ledsOn: false,
                pokemonImage: null
            })
        }
    }

    render() {
        return (
            <div id={styles.panel}>
                <div id={styles.top}>
                    <div className={styles.led}><DotRedLed on={this.state.ledsOn} /></div>
                    <div className={styles.led}><DotRedLed on={this.state.ledsOn} /></div>
                </div>
                <div id={styles.center}>
                    <div id={styles.screen}><Screen pokemonImage={this.state.pokemonImage} /></div>
                </div>
                <div id={styles.bottom}>
                    <div id={styles.button}><RoundRedButton /></div>
                    <div id={styles.speaker}><Speaker play={this.playSound} /></div>
                </div>
            </div>
        )
    }
}

export default Panel