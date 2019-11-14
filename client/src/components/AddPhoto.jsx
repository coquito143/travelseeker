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
    const response = await addPhoto(this.state);
    const photo = response.data;
  
    if (response.status === 200) {
      alert("Your upload is a success!")
    } else {
      alert("Error, please try again")
    }
    this.setState({ image_url: '', description: '' })



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
          <h1 className='add-title'>Add a Photo</h1>
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
          <button className='add-button'>Submit Photo</button>
        </form>
      </div>
    )

  }
}

