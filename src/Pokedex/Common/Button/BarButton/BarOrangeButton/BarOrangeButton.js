import { Component } from 'react'
import styles from './BarOrangeButton.module.css'
import BarButton from '../BarButton'

class BarOrangeButton extends Component {
    render() {
        return (
            <BarButton onClick={this.props.onClick} className={styles.button}/>
        )
    }
}

export default BarOrangeButton