import React, { Component } from 'react'

export default class UpdatePostForm extends Component {
  state = {
    image_url: "",
    description: ""
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }


  render() {
    const { image_url, description} = this.state;
    return (
      <div className ='update-form-div'>
      <h1 className='update-title'>Update Your Pictures</h1>
        <form className='photo-update-form' onSubmit={(e) => {
          e.preventDefault();
          this.props.updatePhoto(this.props.photoId, this.state);
        }}>
          <label htmlFor="image_url">New Image url:</label>
          <input
            type="text"
            name="image_url"
            id="image_url"
            value={image_url}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="description">New Description:  </label>
          <input
            type="text"
            name="description"
            id="description"
            value={description}
            onChange={this.handleChange}
          />
          <br/>
          <button className='update-button'>Update</button>
        </form>
      </div>
    )
  }
}