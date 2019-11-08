import React, { Component } from 'react';
import './App.css';
import { Route, Link, withRouter } from 'react-router-dom';
import { registerUser, loginUser, verifyUser } from './services/api-helper'
import CountriesContainer from './components/CountriesContainer';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = {
    currentUser: null,
    authErrorMessage: ""
  }

  handleLogin = async (loginData) => {
    const currentUser = await loginUser(loginData);
    if (currentUser.error) {
      this.setState({
        authErrorMessage: currentUser.error
      })
    } else {
      this.setState({ currentUser })
      this.props.history.push('/')
    }
  }

  handleRegister = async (registerData) => {
    const currentUser = await registerUser(registerData)
    if (currentUser.error) {
      this.setState({
        authErrorMessage: currentUser.error
      })
    } else {
      this.setState({ currentUser })
      this.props.history.push('/')
    }
  }

  handleLogout = () => {
    this.setState({
      currentUser: null
    })
    localStorage.removeItem('authToken')
  }

  handleVerify = async () => {
    const currentUser = await verifyUser();
    if (currentUser) {
      this.setState({ currentUser })
    }
  }

  componentDidMount() {
    this.handleVerify();
  }

  render() {
    const { currentUser } = this.state;
    return (
      <div className="App">
        <nav>
          <Link to="/countries">List of countries</Link>
          {
            currentUser ?
              <div>
                <p>Hello, {currentUser.username}</p>
                <button onClick={this.handleLogout}>Logout</button>
              </div>
              :
              <Link to='/login'><button>Login/Register</button></Link>
          }
        </nav>
        <Route path='/countries' render={() => (
          <CountriesContainer
            currentUser={this.state.currentUser}
          />
        )} />
        <Route path='/login' render={() => (
          <LoginForm
            handleLogin={this.handleLogin}
            authErrorMessage={this.state.authErrorMessage}
          />
        )} />
        <Route path='/register' render={() => (
          <RegisterForm
            handleRegister={this.handleRegister}
            authErrorMessage={this.state.authErrorMessage}
          />
        )} />
      </div>
    );
  }
}

export default withRouter(App);
