import React, { Component } from 'react';
import axios from 'axios';
<<<<<<< HEAD
import { getPhotos } from '../services/api-helper';
import {Link} from 'react-router-dom';
=======
import { getPhotos, deletePhoto } from '../services/api-helper';
import { Link } from 'react-router-dom'
>>>>>>> 2779f94e8732e100e3c64d56a9edaa5960baa463

export default class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      photos: []
    }
  }

  componentDidMount = async () => {
    // console.log(this.props.currentUser.id)
    // debugger;
    const response = await getPhotos(this.props.currentUser.id);
    // debugger;
    const photos = response;
    this.setState({
      photos
    })
  }

  handleDelete = async (e) => {
    const id = e.target.id;
    // debugger
    const response = await deletePhoto(id);
    console.log(response)
    // debugger
    this.setState(prevState => ({
      photos: [...prevState.photos.filter(photo => photo.id !== parseInt(id))]
    }))
    // this.props.history.push('/profile')
  }



  render() {
    return (

      <div class="profile-div">
        <h1>Profile Page</h1>

        {this.state.photos.map(photoObj => (
          <div className="user-photo-img-div">
            <img id="user-photo-img" src={photoObj.image_url} />
            <h3>{photoObj.description}</h3>
<<<<<<< HEAD
            <Link to={`/photo/${photoObj.id}`}>
            <button>Update</button>
=======
            <Link to="/profile" >
              <button id={photoObj.id} onClick={this.handleDelete}>Delete</button>
>>>>>>> 2779f94e8732e100e3c64d56a9edaa5960baa463
            </Link>
          </div>
        ))}

      </div>
    )

  }
}

