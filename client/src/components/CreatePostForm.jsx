import React, { Component } from 'react'

export default class CreatePostForm extends Component {
  state = {
    title: "",
    image_url: "",
    description: "",
    fun_fact: ""
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }


  render() {
    const { title, image_url, description, fun_fact } = this.state;
    return (
      <div>
        <form onSubmit={(e) => {
          e.preventDefault();
          this.props.createPost(this.state);
        }}>
          <label htmlFor="title">title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
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
          <label htmlFor="fun_fact">fun fact</label>
          <input
            type="text"
            name="fun_fact"
            id="fun_fact"
            value={fun_fact}
            onChange={this.handleChange}
          />
          <br />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}