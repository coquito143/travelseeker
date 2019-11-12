import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom';
import AddPhoto from './AddPhoto';

export default class SingleCountry extends Component {
  state = {
    currentCountry: null
  }

  setCurrentCountry = () => {
    const currentCountry = this.props.countries.find(country => country.id === parseInt(this.props.countryId))
    this.setState({ currentCountry })
  }

  componentDidMount() {
    this.setCurrentCountry();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.countryId !== this.props.countryId) {
      this.setCurrentCountry();
    }
  }

  render() {
    console.log(this.props)
    const { currentCountry } = this.state;
    const { currentUser } = this.props;
    return (
      <div id="show-country-div">
        {currentCountry && (
          <>
            <h1>{currentCountry.country_name}</h1>
            <h2>Capital: {currentCountry.capital}</h2>
            <img src={currentCountry.image_url} />
            <p>{currentCountry.description}</p>
            <p>Best Time to Visit: {currentCountry.best_time_to_visit}</p>
            <p>Currency: {currentCountry.currency}</p>
            <p>Meal Cost: {currentCountry.meal_cost}</p>
            <p>Hostel Cost: {currentCountry.hostel_cost}</p>
            <p>Exchange Rate: </p>
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