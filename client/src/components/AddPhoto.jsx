import React, { Component } from 'react';



export default class AddPhoto extends Component {
  debugger;
  state = {

    image_url: "",
    description: ""
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    return (

      <div class="addPhoto">
        <form class="addPhotoForm" onSubmit={(e) => {
          e.preventDefault();

        }}>
          {/* <select>
            {
              this.props.countries.map((country) => (
                <option key={country.id}
                  value={country.id}>
                  {country.country_name}
                </option>
              ))
            }
          </select> */}
          <label htmlFor="image_url">Image URL</label>
          <input
            type="text"
            name="image_url"
            id="image_url"
            value={this.state.image_url}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="description">picture description</label>
          <input
            type="text"
            name="description"
            id="description"
            value={this.state.description}
            onChange={this.handleChange}
          />
          <br />
          <button>Submit Photo</button>
        </form>
      </div>
    )

  }
}

