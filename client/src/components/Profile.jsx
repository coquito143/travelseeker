import React, { Component } from 'react';
import axios from 'axios';
import { getPhotos, deletePhoto } from '../services/api-helper';
import { Link } from 'react-router-dom'



export default class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      photos: []
    }
  }

  componentDidMount = async () => {
    const response = await getPhotos(this.props.currentUser.id);
    const photos = response;
    this.setState({
      photos
    })
  }

  handleDelete = async (e) => {
    const id = e.target.id;
    const response = await deletePhoto(id);
    this.setState(prevState => ({
      photos: [...prevState.photos.filter(photo => photo.id !== parseInt(id))]
    }))
  }



  render() {
    return (

      <div class="profile-div">
        <h1>{this.props.currentUser.username}'s Pictures</h1>


        {this.state.photos.map(photoObj => (
          <div className="user-photo-img-div">
            <img id="user-photo-img" src={photoObj.image_url} />
            <h3>{photoObj.description}</h3>

            <Link to={`/photo/${photoObj.id}`}>
            <button className='update-profile-button'>Update</button>
               </Link>

            <Link to="/profile" >
              <button className='update-profile-button' id={photoObj.id} onClick={this.handleDelete}>Delete</button>
            </Link>
           
          </div>
        ))}

      </div>
    )

  }
}

