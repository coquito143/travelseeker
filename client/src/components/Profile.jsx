import React, { Component } from 'react';
import axios from 'axios';
import { getPhotos } from '../services/api-helper';


export default class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      photos: []
    }
  }

  componentDidMount = async () => {
    console.log(this.props.currentUser.id)
    // debugger;
    const response = await getPhotos(this.props.currentUser.id);
    // debugger;
    const photos = response;
    this.setState({
      photos
    })
  }

  render() {
    return (

      <div class="profile-div">
        <h1>Profile Page</h1>

        {this.state.photos.map(photoObj => (
          <div className="user-photo-img-div">
            <img id="user-photo-img" src={photoObj.image_url} />
            <h3>{photoObj.description}</h3>
          </div>
        ))}

      </div>
    )

  }
}

