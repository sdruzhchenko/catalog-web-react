import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route, Redirect, withRouter, Link } from 'react-router-dom';


class App extends Component {
  render() {
    return (
        <BrowserRouter>

            <div>

                <div>
                    <h1 className="App-title">Welcome to React</h1>
                </div>

                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/protected">Protected</Link>
                    </li>
                </ul>

                <hr />

                <Route exact path="/" component={Home} />

                <Route path="/about" component={About} />

                <Route path="/login" component={Login} />

                <AuthRoute path="/protected" component={Protected} />

            </div>

        </BrowserRouter>
    );
  }
}

const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
);

const About = () => (
    <div>
        <h2>About</h2>
    </div>
);

const Login = () => (
    <div>
        <h2>Login</h2>
    </div>
);

const Protected = () => (
    <div>
        <h2>Protected</h2>
    </div>
);

//https://reacttraining.com/react-router/web/example/auth-workflow

const AuthBrn = () => (
    <button  />
);



const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
        this.isAuthenticated = true;
        setTimeout(cb, 100); // fake async
    },
    signout(cb) {
        this.isAuthenticated = false;
        setTimeout(cb, 100);
    }
};


const AuthRoute = ({ component: Component, ...rest }) => (

    <Route
        {...rest}
        render={ props =>
            fakeAuth.isAuthenticated ? (
                <Component {...props} />
            ) : (
                <Redirect to={{ pathname: "/login",  state: { from: props.location }}}/>
            )
        }
    />


);






export default App;
