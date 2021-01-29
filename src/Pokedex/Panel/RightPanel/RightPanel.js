import React, { Component } from 'react'
import styles from './RightPanel.module.css'
import Screen from './Screen/Screen'
import RoundCornerBlueButton from '../../Common/Button/RoundCornerButton/RoundCornerBlueButton/RoundCornerBlueButton'
import RoundOrangeLed from '../../Common/Led/RoundLed/RoundOrangeLed/RoundOrangeLed'
import RoundGreenLed from '../../Common/Led/RoundLed/RoundGreenLed/RoundGreenLed'
import BarGreenButton from '../../Common/Button/BarButton/BarGreenButton/BarGreenButton'
import BarOrangeButton from '../../Common/Button/BarButton/BarOrangeButton/BarOrangeButton'
import MiniScreen from './MiniScreen/MiniScreen'


class RightPanel extends Component {
    render() {
        return (
            <div id={styles.container}>
                <div id={styles.firstRow}>
                    <Screen pokemon={this.props.pokemon} />
                </div>
                <div id={styles.secondRow}>
                    <div id={styles.secondRow_firstRow}>
                        <RoundCornerBlueButton />
                        <RoundCornerBlueButton />
                        <RoundCornerBlueButton />
                        <RoundCornerBlueButton />
                        <RoundCornerBlueButton />
                    </div>
                    <div id={styles.secondRow_secondRow}>
                        <RoundCornerBlueButton />
                        <RoundCornerBlueButton />
                        <RoundCornerBlueButton />
                        <RoundCornerBlueButton />
                        <RoundCornerBlueButton />
                    </div>
                </div>
                <div id={styles.thirdRow}>
                    <div id={styles.thirdRow_firstCol}>
                        <RoundOrangeLed on={this.props.pokemon}/>
                        <RoundGreenLed on={this.props.pokemon}/>
                    </div>
                    <div id={styles.thirdRow_secondCol}>
                        <BarGreenButton />
                        <BarOrangeButton />
                    </div>
                </div>
                <div id={styles.fourthRow}>
                    <MiniScreen image={this.props.pokemon?.front} />
                    <MiniScreen image={this.props.pokemon?.back} />
                </div>
            </div>
        )
    }
}

export default RightPanel