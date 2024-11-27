
import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();
    this.state = {
      likes: 0,
      dislikes: 0,
      totalRatings: 0,

      handleLike:() => {
        this.setState((prevState) => ({
          likes: prevState.likes + 1,
          totalRatings: prevState.totalRatings + 1
        }));
      },

      handleDislike:() => {
        this.setState((prevState) => ({
          dislikes: prevState.dislikes + 1,
          totalRatings: prevState.totalRatings + 1
        }));
      }
    };
  }
  render() {
    return (
     <>
      <div className='content-rating'>
        <h1>Dogs are the best!!!</h1>
        <div className='rating-buttons'>
          <button className='like-button' onClick={this.state.handleLike}>
            Like ({this.state.likes})
            </button>
          <button className='dislike-button' onClick={this.state.handleDislike}>
            Dislike ({this.state.dislikes})
            </button>
        </div>
        <h2>Total Ratings: {this.state.totalRatings}</h2>
      </div>
     </>
    );
  }
}

export default ContentRating;
