import React, { Component } from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import axios from 'axios';
import Axi from './Axios';

class App extends Component {
    render() {
        return (
          <div className="App">
            <Layout/>
          </div>
        );
      }
}

export default App;


