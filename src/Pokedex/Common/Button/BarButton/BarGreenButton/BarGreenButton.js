import { Component } from 'react'
import styles from './BarGreenButton.module.css'
import BarButton from '../BarButton'

class BarGreenButton extends Component {
    render() {
        return (
            <BarButton onClick={this.props.onClick} className={styles.button}/>
        )
    }
}

export default BarGreenButton