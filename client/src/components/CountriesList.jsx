import React from 'react'
import { Link } from 'react-router-dom';

export default function CountriesList(props) {

  return (
    <div id="countries-div">
      <div id="view-countries-text1"><h2>Countries</h2></div>
                  <div id="view-countries-text2">
                    <span><h2>where the dollar goes farthest</h2></span>
                  </div>
        {props.countries.map(country => (
        <React.Fragment key={country.id}>
          <Link to={`/countries/${country.id}`}><h3>{country.country_name}</h3></Link>
        </React.Fragment>
      ))}
      {/* <Link to="/country/new"><button>Add an post</button></Link> */}
    </div>
  )
}