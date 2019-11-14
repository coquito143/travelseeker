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
                <div id="sc-h1-div">
                  <h1>{currentCountry.country_name}</h1>
                </div>
                <p>Capital: {currentCountry.capital}</p>
                <p>Best Time to Visit: {currentCountry.best_time_to_visit}</p>
                <p>Currency: {currentCountry.currency}</p>
                <p>Meal Cost: {currentCountry.meal_cost} US Dollars</p>
                <p>Hostel Cost: {currentCountry.hostel_cost} US Dollars</p>
              <p>Exchange Rate: {fixedExchangeRate} per US Dollar</p>
                <p>{this.state.photos.length}</p>
                <div id="sc-desc">
                  <p>{currentCountry.description}</p>
                </div>
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

              </div>
            }

          </>
        )}
      </div>
    )
  }
}