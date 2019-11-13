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
        <form className='photo-update-form' onSubmit={(e) => {
          e.preventDefault();
          console.log(this.state)
          this.props.updatePhoto(this.props.photoId, this.state);
        }}>
          <label htmlFor="image_url">image url</label>
          <input
            type="text"
            name="image_url"
            id="image_url"
            value={image_url}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="description">description</label>
          <input
            type="text"
            name="description"
            id="description"
            value={description}
            onChange={this.handleChange}
          />
          <button>Update</button>
        </form>
      </div>
    )
  }
}