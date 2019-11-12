import React, { Component } from 'react';
import axios from 'axios';
import { addPhoto } from '../services/api-helper';



export default class AddPhoto extends Component {
  state = {
    userId: null,
    countryId: null,
    image_url: "",
    description: ""
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    debugger;
    const response = await addPhoto(this.state);
    const photo = response.data;
    // this.setState(prevState => ({
    //   items: [...prevState.characters, character]
    // }))
    // this.props.history.push('/')
  }

  componentDidMount = (props) => {
    const userId = this.props.userId;
    const countryId = this.props.countryId;
    this.setState({
      userId, countryId
    })
  }

  render() {
    return (
      <div class="addPhoto">
        <form class="addPhotoForm" onSubmit={this.handleSubmit} >
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

