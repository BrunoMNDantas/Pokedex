import RoundBlueButton from '../../../Common/Button/RoundButton/RoundBlueButton/RoundBlueButton'
import BarGreenButton from '../../../Common/Button/BarButton/BarGreenButton/BarGreenButton'
import BarOrangeButton from '../../../Common/Button/BarButton/BarOrangeButton/BarOrangeButton'
import CrossButton from '../../../Common/Button/CrossButton/CrossButton'
import NumberInput from './NumberInput/NumberInput'
import styles from './Actions.module.css'

export default function Actions(props) {
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
                    <NumberInput onNewValue={props.loadPokemon} number={props.pokemon?.number}/>
                </div>
            </div>
            <div id={styles.crossButton}>
                <CrossButton onTopClick={props.onTopClick}
                    onBottomClick={props.onBottomClick}
                    onLeftClick={props.onLeftClick}
                    onRightClick={props.onRightClick} />
            </div>
        </div>
    )
}