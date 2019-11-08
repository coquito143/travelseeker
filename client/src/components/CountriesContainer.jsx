import React, { Component } from 'react'
import { Route, withRouter } from 'react-router-dom';
import { indexCountries} from '../services/api-helper';
import CountriesList from './CountriesList';
import SingleCountry from './SingleCountry';
// import CreatePostForm from './CreatePostForm';
// import UpdatePostForm from './UpdatePostForm';

class CountriesContainer extends Component {
  state = {
    countries: []
  }

  componentDidMount() {
    this.readAllCountries();
  }


  // ===============READ ALL ===================

  readAllCountries = async () => {
    const countries = await indexCountries();
    this.setState({ countries })
  }

  // // ============== Create =====================

  // createPost = async (postData) => {
  //   const newPost = await postPost(postData);
  //   this.setState(prevState => ({
  //     posts: [...prevState.posts, newPost]
  //   }))
  //   this.props.history.push("/posts")
  // }

  // // ================ Delete ======================

  // destroyPost = async (id) => {
  //   await destroyPost(id)
  //   this.setState(prevState => ({
  //     posts: prevState.posts.filter(post => {
  //       return post.id !== id
  //     })
  //   }))
  //   this.props.history.push("/posts")
  // }

  // // ================= Update =================

  // updatePost = async (id, postsData) => {
  //   const updatedPost = await putPost(id, postsData);
  //   this.setState(prevState => ({
  //     posts: prevState.posts.map(post => post.id === parseInt(id) ? updatedPost : post)
  //   }))
  //   this.props.history.push("/posts")
  // }

  render() {
    return (
      <div>
        
        <Route exact path='/countries' render={() => (
          <CountriesList
            countries={this.state.countries}
          />
        )} />
        <Route exact path='/countries/:id' render={(props) => (
          <SingleCountry
            // destroyCountry={this.destroyPost}
            countryId={props.match.params.id}
            countries={this.state.countries}
            currentUser={this.props.currentUser}
          />
        )} />
        {/* <Route path='/posts/new' render={() => (
          <CreatePostForm
            createPost={this.createPost}
          />
        )} />
        <Route path='/posts/:id/edit' render={(props) => (
          <UpdatePostForm
            posts={this.state.posts}
            updatePost={this.updatePost}
            postId={props.match.params.id}
          />
        )} /> */}
      </div>
    )
  }
}

export default withRouter(CountriesContainer);