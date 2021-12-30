import React, { Component } from 'react'
import styles from './MiniScreen.module.css'

class MiniScreen extends Component {
    render() {
        return (
            <div id={styles.screen}>
                <img className={this.props.image ? styles.show : ""} src={this.props.image} alt=""></img>                
            </div>
        )
    }
}

export default MiniScreen