import React, { Component } from 'react'
import Glass from './Glass/Glass'
import RoundRedLed from '../../Common/Led/RoundLed/RoundRedLed/RoundRedLed'
import RoundYellowLed from '../../Common/Led/RoundLed/RoundYellowLed/RoundYellowLed'
import RoundGreenLed from '../../Common/Led/RoundLed/RoundGreenLed/RoundGreenLed'
import styles from './Header.module.css'

class Header extends Component {

    timer;
    
    constructor(props) {
        super(props)

        this.state = {
            spinGlass: false,
            redOn: false,
            yellowOn: false,
            greenOn: false
        }
    }

    componentDidMount() {
       this.setTimer(this.props)
    }

    componentWillReceiveProps(nextProps) {
        this.setTimer(nextProps)
    }

    componentWillUnmount() {
        this.clearTimer()
    }

    setTimer(props) {
        this.clearTimer()

        if(!props.pokemon)
            this.timer = setInterval(() => {
                if(this.state.redOn)
                    this.setState({spinGlass:true, redOn: false, yellowOn: true, greenOn: false})
                else if(this.state.yellowOn)
                    this.setState({spinGlass:true, redOn: false, yellowOn: false, greenOn: true})
                else
                    this.setState({spinGlass:true, redOn: true, yellowOn: false, greenOn: false})
            }, 300)
        else
            this.setState({spinGlass:false, redOn: false, yellowOn: false, greenOn: false})
    }

    clearTimer() {
        if(this.timer)
            clearInterval(this.timer)
    }

    render() {
        return (
            <div id={styles.header}>
                <div id={styles.glass}><Glass pokemon={this.props.pokemon} spin={this.state.spinGlass}/></div>
                <div id={styles.redLed}><RoundRedLed on={this.state.redOn}/></div>
                <div id={styles.yellowLed}><RoundYellowLed on={this.state.yellowOn}/></div>
                <div id={styles.greenLed}><RoundGreenLed on={this.state.greenOn}/></div>
            </div>
        )
    }
}

export default Header