import styles from './RightPanel.module.css'
import Screen from './Screen/Screen'
import RoundCornerBlueButton from '../../Common/Button/RoundCornerButton/RoundCornerBlueButton/RoundCornerBlueButton'
import RoundOrangeLed from '../../Common/Led/RoundLed/RoundOrangeLed/RoundOrangeLed'
import RoundGreenLed from '../../Common/Led/RoundLed/RoundGreenLed/RoundGreenLed'
import BarGreenButton from '../../Common/Button/BarButton/BarGreenButton/BarGreenButton'
import BarOrangeButton from '../../Common/Button/BarButton/BarOrangeButton/BarOrangeButton'
import MiniScreen from './MiniScreen/MiniScreen'

export default function RightPanel(props) {
    return (
        <div id={styles.container}>
            <div id={styles.firstRow}>
                <Screen pokemon={props.pokemon} />
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
                    <RoundOrangeLed on={props.pokemon}/>
                    <RoundGreenLed on={props.pokemon}/>
                </div>
                <div id={styles.thirdRow_secondCol}>
                    <BarGreenButton />
                    <BarOrangeButton />
                </div>
            </div>
            <div id={styles.fourthRow}>
                <MiniScreen image={props.pokemon?.images.front} />
                <MiniScreen image={props.pokemon?.images.back} />
            </div>
        </div>
    )
}