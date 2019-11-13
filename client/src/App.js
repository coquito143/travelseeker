import React, { Component } from 'react';
import './App.css';
import { Route, Link, withRouter } from 'react-router-dom';
import { registerUser, loginUser, verifyUser, indexCountries, allPhotos, updatePhoto } from './services/api-helper'
// import CountriesContainer from './components/CountriesContainer';
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
    console.log(this.state)
    // e.preventDefault();
    // const id = parseInt(e.target.id);
    const newPhoto = await updatePhoto(id, PhotoData);
    // debugger;
    // const currentPhoto = this.state.photos.find(photo => )
    this.setState(prevState => ({
      photos: prevState.photos.map(photo => 
       photo.id === parseInt(id) ? newPhoto : photo)
    }))

    this.props.history.push('/profile')
  }

  componentDidMount=  async () => {
    this.handleVerify();
    const countries = await indexCountries();
    const photos = await allPhotos()
    this.setState({ countries, photos })
    console.log(this.state.photos)
    console.log(photos)
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
              <div>
                <p>Hello, {currentUser.username}</p>
                <br />
                <Link to='/profile'>My Photos</Link>
                <br />
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
              // destroyCountry={this.destroyPost}
              countryId={props.match.params.id}
              countries={this.state.countries}
              currentUser={this.state.currentUser}
              photos={this.state.photos}
            />
          )} />
           <Route path='/profile' render={() => (
            <Profile
              currentUser={this.state.currentUser}
            />
          )} />
          <Route path='/photo/:id' render={(props) => (
            <UpdatePostForm 
            updatePhoto= {this.updatePhoto}
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
          {/* <Route exact path='/users/:currentUser/addphoto' render={(props) => (
            <AddPhoto
              countries={this.state.countries}
            />
          )}
          /> */}
        </main>
        <footer>
          <h3>&#169; 2019 Team ASMI</h3>
        </footer>
      </div>
    );
  }
}

export default withRouter(App);
