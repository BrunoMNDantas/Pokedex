import Header from './Header/Header'
import Panel from './Panel/Panel'
import Actions from './Actions/Actions'
import styles from './LeftPanel.module.css'

export default function LeftPanel(props) {
    return (
        <div id={styles.container}>
            <div id={styles.header}>
                <Header />
            </div>
            <div id={styles.panel}>
                <Panel />
            </div>
            <div id={styles.actions}>
                <Actions />
            </div>
        </div>
    )
}