import React, { Component, PureComponent } from 'react';
import './App.css';

import { Header, Content, Footer } from 'components/tmpl'

const dd = console.log;

//import { BrowserRouter, Route, Redirect, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <div>
            <Header/>
            <Content/>
            <Footer/>
        </div>
    );
  }
}


export default App;