import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    constructor() {
        super();
        this.state = {
            string: 'Hola Daniel'
        }
    }

    render() {
        return (
            <div>
                <h3>{this.state.string}</h3>
                <button onClick={() => this.setState({ string: 'Laura' })}>Change text</button>
            </div>
        );
    }

}

export default App;
