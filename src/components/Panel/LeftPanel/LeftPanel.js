import Header from './Header/Header'
import Panel from './Panel/Panel'
import Actions from './Actions/Actions'
import styles from './LeftPanel.module.css'

export default function LeftPanel(props) {
    return (
        <div id={styles.container}>
            <div id={styles.header}>
                <Header pokemon={props.pokemon} />
            </div>
            <div id={styles.panel}>
                <Panel pokemon={props.pokemon} />
            </div>
            <div id={styles.actions}>
                <Actions pokemon={props.pokemon}
                    loadPokemon={props.loadPokemon}
                    onTopClick={props.onTopClick}
                    onBottomClick={props.onBottomClick}
                    onLeftClick={props.onLeftClick}
                    onRightClick={props.onRightClick} />
            </div>
        </div>
    )
}