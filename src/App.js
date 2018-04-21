import React, { Component, PureComponent } from 'react';
import './App.css';

import Header from 'components/tmpl/header';
import Content from 'components/tmpl/content';
import Footer from 'components/tmpl/footer';


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