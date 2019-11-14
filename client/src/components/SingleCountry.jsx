import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom';
import AddPhoto from './AddPhoto';
import { showPhotos, allRates, } from '../services/api-helper';


export default class SingleCountry extends Component {
  state = {
    currentCountry: null,
    photos: [],
    exchangeRate: null,
  }

  setCurrentCountry = async () => {
    const currentCountry = await this.props.countries.find(country => country.id === parseInt(this.props.countryId))
    this.setState({ currentCountry })
  }


  async componentDidMount() {
    await this.setCurrentCountry();

    if (this.state.currentCountry) {
      const photos = await showPhotos(this.state.currentCountry.id)
      this.setState({ photos })
    }

    if (this.props.countryId === "1") {
      const exchangeRate = (this.props.nepal) / (this.props.dollar)
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

    if (this.props.countryId === "11") {
      const exchangeRate = (this.props.southAfrica) / (this.props.dollar)
      this.setState({ exchangeRate })
    }

    if (this.props.countryId === "12") {
      const exchangeRate = (this.props.czechRepublic) / (this.props.dollar)
      this.setState({ exchangeRate })
    }

  }


  render() {
    const { currentCountry } = this.state;
    const { currentUser } = this.props;
    const { exchangeRate } = this.state;
    const fixedExchangeRate = parseInt(exchangeRate).toFixed(2)

    return (
      <div id="show-country-div">
        {currentCountry && (
          <>
            <div id="sc-main-container">

              <div id="sc-main-image">

                <img src={currentCountry.image_url} />
              </div>

              <div id="sc-facts">
                <h1 id="sc-h1">{currentCountry.country_name}</h1>
                <p>Capital: {currentCountry.capital}</p>
                <p>Meal Cost: {parseInt(currentCountry.meal_cost / fixedExchangeRate).toFixed(2)} US Dollars </p>
                <p>Hostel Cost: {parseInt(currentCountry.hostel_cost / fixedExchangeRate).toFixed(2)} US Dollars</p>
                <p>Exchange Rate: {fixedExchangeRate} {currentCountry.currency} per US Dollar</p> 
                <p id="visit"> Best Time to Visit: {currentCountry.best_time_to_visit}</p>
                <div id="sc-desc">
                  <p>{currentCountry.description}</p>
                </div>

              </div>
            </div>
            <div id="travelers-photos-div">
              <h2 id="photos-div-h2">Traveller's Photos</h2>
              <div id="travelers-photos-subheader">
              <i class="material-icons animated bounce">play_for_work</i>
            {currentUser &&
              <div>
                <Link to={`/users/${currentUser.id}/countries/${currentCountry.id}/addphoto`}>
                  <button
                    id={currentUser.id}
                    onClick={currentUser.handleClick}>
                    Add Pics
                </button>
                </Link>

              </div>
            }
</div>
            <div id="photos-div">
              {
                this.state.photos.map(photo => (
                  <div className="sc-user-Photos">
                    <img src={photo.image_url} />
                  </div>
                ))
              }
            </div>
            </div>

          </>
        )}
      </div>
    )
  }
}