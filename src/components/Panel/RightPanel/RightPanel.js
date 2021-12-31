import styles from './RightPanel.module.css'
import RoundCornerBlueButton from '../../Common/Button/RoundCornerButton/RoundCornerBlueButton/RoundCornerBlueButton'
import RoundOrangeLed from '../../Common/Led/RoundLed/RoundOrangeLed/RoundOrangeLed'
import RoundGreenLed from '../../Common/Led/RoundLed/RoundGreenLed/RoundGreenLed'
import BarGreenButton from '../../Common/Button/BarButton/BarGreenButton/BarGreenButton'
import BarOrangeButton from '../../Common/Button/BarButton/BarOrangeButton/BarOrangeButton'
import DetailsScreen from '../../Screen/DetailsScreen/DetailsScreen'
import BackImageMiniScreen from '../../Screen/MiniScreen/BackImageMiniScreen/BackImageMiniScreen'
import FrontImageMiniScreen from '../../Screen/MiniScreen/FrontImageMiniScreen/FrontImageMiniScreen'
import { useSelector } from 'react-redux'

export default function RightPanel(props) {
    const pokemon = useSelector(state => state.pokemon.currentPokemon) 

    return (
        <div id={styles.container}>
            <div id={styles.firstRow}>
                <DetailsScreen/>
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
                    <RoundOrangeLed on={pokemon}/>
                    <RoundGreenLed on={pokemon}/>
                </div>
                <div id={styles.thirdRow_secondCol}>
                    <BarGreenButton />
                    <BarOrangeButton />
                </div>
            </div>
            <div id={styles.fourthRow}>
                <FrontImageMiniScreen />
                <BackImageMiniScreen />
            </div>
        </div>
    )
}