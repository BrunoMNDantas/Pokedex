import React, { Component } from 'react'
import Pokedex from './Pokedex/Pokedex'


const containerStyle = {
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
}
const wrapperStyle = {
    width: "750px",
    height: "500px"
}

class App extends Component {
    render() {
        return (
            <div className="container" style={containerStyle}>
                <div className="wrapper" style={wrapperStyle}>
                    <Pokedex />
                </div>
            </div>
        )
    }
}

export default App