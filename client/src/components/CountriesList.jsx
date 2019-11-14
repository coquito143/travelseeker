import React from 'react'
import { Link } from 'react-router-dom';

export default function CountriesList(props) {

  return (
    <div id="countries-div">
      <div id="countries-div-heading">
      <div id="view-countries-text1"><h2>Countries</h2></div>
                  <div id="view-countries-text2">
        <span><h2>where the dollar goes farthest</h2></span>
   
        </div>
        </div>
      <div className="countries-list-div">
        {props.countries.map(country => (
        <React.Fragment key={country.id}>
            <Link to={`/countries/${country.id}`}>
              <img className="country-img" src={country.image_url}/>
              <h3>{country.country_name}</h3>
            </Link>
        </React.Fragment>
        ))}
        </div>
    </div>
  )
}


