import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom';
import AddPhoto from './AddPhoto';
import { showPhotos, allRates, } from '../services/api-helper';


export default class SingleCountry extends Component {
  state = {
    currentCountry: null,
    photos: [],
    exchangeRate: "",
    rates: [],
    nepal: null

  }

  setCurrentCountry = async () => {
    const currentCountry = await this.props.countries.find(country => country.id === parseInt(this.props.countryId))
    this.setState({ currentCountry })
    console.log(this.state.currentCountry)
  }

  setCountryPhotos = async () => {
    // const photos = await showPhotos(this.state.currentCountry.id)
    const currentCountryPhotos = this.props.photos.find(photo => photo.countryId === parseInt(this.props.photo.countryId))
    this.setState({ currentCountryPhotos })
    console.log(this.state.currentCountryPhotos)

  }


  async componentDidMount() {
    await this.setCurrentCountry();
    const rates = await allRates();
    // const oneCountryRate = await oneCountryRate();
    this.setState({ rates })


    if (this.props.countryId === "1") {
      const exchangeRate = (this.props.sriLanka) / (this.props.dollar)
      this.setState({ exchangeRate })
    }

    if (this.props.countryId === "2") {
      const exchangeRate = (this.props.mexico) / (this.props.dollar)
      this.setState({ exchangeRate })
    }

    if (this.props.countryId === "3") {
      const exchangeRate = (this.props.sriLanka) / (this.props.dollar)
      this.setState({ exchangeRate })
    }

    if (this.props.countryId === "4") {
      const exchangeRate = (this.props.indonesia) / (this.props.dollar)
      this.setState({ exchangeRate })
    }

    if (this.props.countryId === "5") {
      const exchangeRate = (this.props.croatia) / (this.props.dollar)
      this.setState({ exchangeRate })
    }
    if (this.props.countryId === "6") {
      const exchangeRate = (this.props.peru) / (this.props.dollar)
      this.setState({ exchangeRate })
    }
    if (this.props.countryId === "7") {
      const exchangeRate = (this.props.turkey) / (this.props.dollar)
      this.setState({ exchangeRate })
    }
    if (this.props.countryId === "8") {
      const exchangeRate = (this.props.costaRica) / (this.props.dollar)
      this.setState({ exchangeRate })
    }
    if (this.props.countryId === "9") {
      const exchangeRate = (this.props.morocco) / (this.props.dollar)
      this.setState({ exchangeRate })
    }
    if (this.props.countryId === "10") {
      const exchangeRate = (this.props.thailand) / (this.props.dollar)
      this.setState({ exchangeRate })
    }

  }

  // componentDidUpdate(prevProps) {
  //   if (prevProps.countryId !== this.props.countryId) {
  //     this.setCurrentCountry();
  //   }
  // }

  render() {
    console.log(this.state)
    const { currentCountry } = this.state;
    const { currentUser } = this.props;
    return (
      <div id="show-country-div">
        {currentCountry && (
          <>
            <div id="sc-h1">
              <h1>{currentCountry.country_name}</h1>
            </div>
            <div id="sc-main-image">
              <img src={currentCountry.image_url} />
            </div>
            <div id="sc-desc">
              <p>{currentCountry.description}</p>
            </div>
            <div id="sc-facts">
              <p>Capital: {currentCountry.capital}</p>
              <p>Best Time to Visit: {currentCountry.best_time_to_visit}</p>
              <p>Currency: {currentCountry.currency}</p>
              <p>Meal Cost: {currentCountry.meal_cost}</p>
              <p>Hostel Cost: {currentCountry.hostel_cost}</p>
              <p>Exchange Rate: {this.state.exchangeRate}</p>
            </div>

            {
              this.state.photos.map(photo => (
                <div className="sc-user-Photos">
                  <img src={photo.image_url} />
                </div>
              ))
            }
            {currentUser &&
              <div>
                <Link to={`/users/${currentUser.id}/countries/${currentCountry.id}/addphoto`}>
                  <button
                    id={currentUser.id}
                    onClick={currentUser.handleClick}>
                    Add Pics
                </button>
                </Link>


                {/* <Route path='/users/:currentUser/countries/:countryId/addphoto' component={(props) => (
                
                <AddPhoto
                  {...props}
                  countryId={props.match.params.countryId}
                  userId={props.match.params.currentUser}
                  />
                )}
                /> */}
                {/* <Route exact path='/users/:currentUser/addphoto' Component={AddPhoto} /> */}

              </div>
            }


            {/* // move this to user photo section */}
            {/* {
              currentUser && currentUser.id === currentCountry.userId && (
                <>
                  <button onClick={() => {
                    this.props.destroyCountry(currentCountry.id)
                  }}>Delete</button>
                  <Link to={`/countries/${currentCountry.id}/edit`}><button>Edit</button></Link>
                </>
              )
            } */}
          </>
        )}
      </div>
    )
  }
}