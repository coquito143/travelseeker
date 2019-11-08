import React, { Component } from 'react'
import { Link } from 'react-router-dom';

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
    const { currentCountry } = this.state;
    const { currentUser } = this.props;
    return (
      <div>
        {currentCountry && (
          <>
            <h1>{currentCountry.country_name}</h1>
            {/* <img src={currentCountry.image_url} /> */}
            {/* <p>{currentCountry.description}</p> */}
            <h3>Fun Fact!</h3>
            <p>{currentCountry.currency}</p>
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