import styles from './RightPanel.module.css'
import TypeButton from './TypeButton/TypeButton'
import RoundCornerBlueButton from '../../Common/Button/RoundCornerButton/RoundCornerBlueButton/RoundCornerBlueButton'
import RoundOrangeLed from '../../Common/Led/RoundLed/RoundOrangeLed/RoundOrangeLed'
import RoundGreenLed from '../../Common/Led/RoundLed/RoundGreenLed/RoundGreenLed'
import BarGreenButton from '../../Common/Button/BarButton/BarGreenButton/BarGreenButton'
import BarOrangeButton from '../../Common/Button/BarButton/BarOrangeButton/BarOrangeButton'
import DetailsScreen from '../../Screen/DetailsScreen/DetailsScreen'
import BackImageMiniScreen from '../../Screen/MiniScreen/BackImageMiniScreen/BackImageMiniScreen'
import FrontImageMiniScreen from '../../Screen/MiniScreen/FrontImageMiniScreen/FrontImageMiniScreen'
import { useSelector } from 'react-redux'
import { TYPES } from './TypeButton/TypeButton'

export default function RightPanel(props) {
    const pokemon = useSelector(state => state.pokemon.currentPokemon) 

    return (
        <div id={styles.container}>
            <div id={styles.firstRow}>
                <DetailsScreen/>
            </div>
            <div id={styles.secondRow}>
                <div id={styles.secondRow_firstRow}>
                    <TypeButton type={TYPES[0].name}/>
                    <TypeButton type={TYPES[1].name}/>
                    <TypeButton type={TYPES[2].name}/>
                    <TypeButton type={TYPES[3].name}/>
                    <TypeButton type={TYPES[4].name}/>
                    <TypeButton type={TYPES[5].name}/>
                </div>
                <div id={styles.secondRow_secondRow}>
                    <TypeButton type={TYPES[6].name}/>
                    <TypeButton type={TYPES[7].name}/>
                    <TypeButton type={TYPES[8].name}/>
                    <TypeButton type={TYPES[9].name}/>
                    <TypeButton type={TYPES[10].name}/>
                    <TypeButton type={TYPES[11].name}/>
                </div>
                <div id={styles.secondRow_thirdRow}>
                    <TypeButton type={TYPES[12].name}/>
                    <TypeButton type={TYPES[13].name}/>
                    <TypeButton type={TYPES[14].name}/>
                    <TypeButton type={TYPES[15].name}/>
                    <TypeButton type={TYPES[16].name}/>
                    <TypeButton type={TYPES[17].name}/>
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