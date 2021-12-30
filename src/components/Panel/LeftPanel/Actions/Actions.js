import React, { Component } from 'react'
import RoundBlueButton from '../../../Common/Button/RoundButton/RoundBlueButton/RoundBlueButton'
import BarGreenButton from '../../../Common/Button/BarButton/BarGreenButton/BarGreenButton'
import BarOrangeButton from '../../../Common/Button/BarButton/BarOrangeButton/BarOrangeButton'
import CrossButton from '../../../Common/Button/CrossButton/CrossButton'
import NumberInput from './NumberInput/NumberInput'
import styles from './Actions.module.css'

class Actions extends Component {
    render() {
        return (
            <div id={styles.actions}>
                <div id={styles.roundButton}>
                    <RoundBlueButton />
                </div>
                <div id={styles.middleCol}>
                    <div id={styles.barButtons}>
                        <BarOrangeButton />
                        <BarGreenButton />
                    </div>
                    <div id={styles.numberInput}>
                        <NumberInput onNewValue={this.props.loadPokemon} number={this.props.pokemon?.number}/>
                    </div>
                </div>
                <div id={styles.crossButton}>
                    <CrossButton onTopClick={this.props.onTopClick}
                        onBottomClick={this.props.onBottomClick}
                        onLeftClick={this.props.onLeftClick}
                        onRightClick={this.props.onRightClick} />
                </div>
            </div>
        )
    }
}

export default Actions