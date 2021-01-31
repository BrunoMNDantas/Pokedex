import { Component } from 'react'
import Header from './Header/Header'
import Panel from './Panel/Panel'
import Actions from './Actions/Actions'
import styles from './LeftPanel.module.css'

class LeftPanel extends Component {
    render() {
        return (
            <div id={styles.container}>
                <div id={styles.header}>
                    <Header pokemon={this.props.pokemon} />
                </div>
                <div id={styles.panel}>
                    <Panel pokemon={this.props.pokemon} />
                </div>
                <div id={styles.actions}>
                    <Actions pokemon={this.props.pokemon}
                        loadPokemon={this.props.loadPokemon}
                        onTopClick={this.props.onTopClick}
                        onBottomClick={this.props.onBottomClick}
                        onLeftClick={this.props.onLeftClick}
                        onRightClick={this.props.onRightClick} />
                </div>
            </div>
        )
    }
}

export default LeftPanel