import React, { Component } from 'react'
import styles from './Glass.module.css'

class Glass extends Component {
    render() {
        return (
            <div id={styles.glass} className={this.props.spin ? styles.spin : ""}>
                <div id={styles.reflect}> </div>
                <img id={styles.image} src={this.props.pokemon ? this.props.pokemon.images.default : null}></img>
            </div>
        )
    }
}

export default Glass