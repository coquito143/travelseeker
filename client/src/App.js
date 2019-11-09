import React, { Component } from 'react';
import './App.css';
import { Route, Link, withRouter } from 'react-router-dom';
import { registerUser, loginUser, verifyUser, indexCountries } from './services/api-helper'
import CountriesContainer from './components/CountriesContainer';
import CountriesList from './components/CountriesList';
import SingleCountry from './components/SingleCountry';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = {
    countries: [],
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

  async componentDidMount() {
    this.handleVerify();
    const countries = await indexCountries();
    this.setState({ countries })
  }

  render() {
    const { currentUser } = this.state;
    return (
      <div className="App">
        <nav>
          <div id="home-div">
            <Link to="/"><i class="material-icons">
              home
            </i> <p>Home</p></Link>
          </div>
          <h1>travelSeeker</h1>
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
        {/* <Route exact path='/' render={() => (
          <CountriesContainer
            currentUser={this.state.currentUser}
          />
        )} /> */}
        <main>

          <Route exact path='/' render={() => (
            <React.Fragment>
              <div class="cover-img-div">
                <img id="cover-img" src="https://images.unsplash.com/photo-1503221043305-f7498f8b7888" />
                <a href="#countries-div"><h2 id="cover-img-h2">View Countries</h2><i id="arrow-down" class="material-icons">
                  play_for_work
                    </i></a>
              </div>
              <CountriesList
                countries={this.state.countries}
              />
            </React.Fragment>
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

          <Route exact path='/countries/:id' render={(props) => (
            <SingleCountry
              // destroyCountry={this.destroyPost}
              countryId={props.match.params.id}
              countries={this.state.countries}
              currentUser={this.props.currentUser}
            />
          )} />
        </main>
        <footer>
          <h3>&#169; 2019 Team ASMI</h3>
        </footer>
      </div>
    );
  }
}

export default withRouter(App);