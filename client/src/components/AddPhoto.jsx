import React, { Component } from 'react';



export default class AddPhoto extends Component {
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
      <div>
        <div>
          Blank Space
        </div>
        <div>
          Blank Space
        </div>
        <div>
          Blank Space
        </div>
        <form onSubmit={(e) => {
          e.preventDefault();

        }}>
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

