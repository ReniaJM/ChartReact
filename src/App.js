import React, { Component } from 'react';
import './App.css';
import BarComponent from './BarComponent';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>BarChart</h1>
                <BarComponent legendPosition='bottom'/>

            </div>
        );
    }
}

export default App;
