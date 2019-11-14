import React, { Component } from 'react';
import './App.css';
import { Route, Link, withRouter } from 'react-router-dom';
import { registerUser, loginUser, verifyUser, indexCountries, allPhotos, updatePhoto, allRates, nepalRate, mexicoRate, sriLankaRate, indonesiaRate, croatiaRate, peruRate, turkeyRate, costaRicaRate, moroccoRate, thailandRate, southAfricaRate, czechRepublicRate, dollarRate } from './services/api-helper'
import CountriesList from './components/CountriesList';
import SingleCountry from './components/SingleCountry';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import AddPhoto from './components/AddPhoto';
import Profile from './components/Profile';
import UpdatePostForm from './components/UpdatePostForm'

class App extends Component {
  state = {
    countries: [],
    rates: [],
    dollar: null,
    nepalExchRate: null,
    mexicoExchRate: null,
    sriLankaExchRate: null,
    indonesiaExchRate: null,
    croatiaExchRate: null,
    peruExchRate: null,
    turkeyExchRate: null,
    costaRicaExchRate: null,
    moroccoExchRate: null,
    thailandExchRate: null,
    southAfricaExchRate: null,
    czechRepublicExchRate: null,
    currentUser: null,
    authErrorMessage: "",
    photos: []
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

  updatePhoto = async (id, PhotoData) => {
    const newPhoto = await updatePhoto(id, PhotoData);
    this.setState(prevState => ({
      photos: prevState.photos.map(photo =>
        photo.id === parseInt(id) ? newPhoto : photo)
    }))

    this.props.history.push('/profile')
  }

  componentDidMount = async () => {
    this.handleVerify();
    const countries = await indexCountries();
    const photos = await allPhotos()
    const rates = await allRates();
    const dollar = await dollarRate();
    const nepalExchRate = await nepalRate();
    const mexicoExchRate = await mexicoRate();
    const sriLankaExchRate = await sriLankaRate();
    const indonesiaExchRate = await indonesiaRate();
    const croatiaExchRate = await croatiaRate();
    const peruExchRate = await peruRate();
    const turkeyExchRate = await turkeyRate();
    const costaRicaExchRate = await costaRicaRate();
    const moroccoExchRate = await moroccoRate();
    const thailandExchRate = await thailandRate();
    const southAfricaExchRate = await southAfricaRate();
    const czechRepublicExchRate = await czechRepublicRate()
    this.setState({ countries, photos, rates, nepalExchRate, mexicoExchRate, sriLankaExchRate, indonesiaExchRate, croatiaExchRate, peruExchRate, turkeyExchRate, costaRicaExchRate, moroccoExchRate, thailandExchRate, southAfricaExchRate, czechRepublicExchRate, dollar })
    
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
          <h1>travel$eeker</h1>
          {
            currentUser ?
              <div className="nav-right-div">
                <div className="greeting-div">
                  <p>Hello, {currentUser.username}</p>
                  <Link to='/profile'>My Photos</Link>
                </div>
                <button className="logon-button"
                  onClick={this.handleLogout}>Logout</button>
              </div>
              :
              <Link to='/login'>
                <button className="logon-register-button">Login<br></br>or<br></br>Register
                </button>
              </Link>
          }
        </nav>

        <main>

          <Route exact path='/' render={() => (
            <React.Fragment>
              <div class="cover-img-div">
                <img id="cover-img" src="https://images.unsplash.com/photo-1503221043305-f7498f8b7888" />
                <a href="#countries-div">
                  <h2 id="cover-img-h2">View Countries</h2>
                  <i id="arrow-down" class="material-icons animated bounce">play_for_work</i>
                </a>
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
              countryId={props.match.params.id}
              countries={this.state.countries}
              currentUser={this.state.currentUser}
              photos={this.state.photos}
              rates={this.state.rates}
              dollar={this.state.dollar}
              nepal={this.state.nepalExchRate}
              mexico={this.state.mexicoExchRate}
              sriLanka={this.state.sriLankaExchRate}
              indonesia={this.state.indonesiaExchRate}
              croatia={this.state.croatiaExchRate}
              peru={this.state.peruExchRate}
              turkey={this.state.turkeyExchRate}
              costaRica={this.state.costaRicaExchRate}
              morocco={this.state.moroccoExchRate}
              thailand={this.state.thailandExchRate}
              southAfrica={this.state.southAfricaExchRate}
              czechRepublic={this.state.czechRepublicExchRate}

            />
          )} />
          <Route path='/profile' render={() => (
            <Profile
              currentUser={this.state.currentUser}
            />
          )} />
          <Route path='/photo/:id' render={(props) => (
            <UpdatePostForm
              updatePhoto={this.updatePhoto}
              photoId={props.match.params.id}
            />
          )} />
          <Route path='/users/:currentUser/countries/:countryId/addphoto' component={(props) => (

            <AddPhoto
              {...props}
              countryId={props.match.params.countryId}
              userId={props.match.params.currentUser}
            />
          )}
          />
        </main>
        <footer>
          <h3>&#169; 2019 Team ASMI</h3>
        </footer>
      </div>
    );
  }
}

export default withRouter(App);
