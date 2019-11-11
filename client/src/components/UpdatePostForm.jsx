import React, { Component } from 'react'
import { Link } from 'react-router-dom';


export default class UpdatePostForm extends Component {
  state = {
    country: "",
    image_url: "",
    description: "",
    
  }

  setFormData = () => {
    if (this.props.posts.length) {
      const {
        country,
        image_url,
        description,
       
        ...otherData
      } = this.props.posts.find(post => {
        return post.id === parseInt(this.props.postId)
      })
      this.setState({
        country,
        image_url,
        description,
        
      })
    }
  }

  componentDidMount() {
    this.setFormData();
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }

  componentDidUpdate(prevProps) {
    if (prevProps.posts !== this.props.posts) {
      this.setFormData();
    }
  }

  render() {
    const { country, image_url, description } = this.state;

    return (
      <div >
        <form onSubmit={(e) => {
          e.preventDefault();
          this.props.updatePost(this.props.postId, this.state);
        }}>
          <label htmlFor="country">Country</label>
          <input
            type="text"
            name="country"
            id="country"
            value={country}
            onChange={this.handleChange}
          />
          <br />
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
          <br />
          <button className ='update-button'>Update</button>
        </form>
      </div>
    )
  }
}