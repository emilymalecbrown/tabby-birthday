import React, { Component } from 'react';

export default class Welcome extends Component {

  render () {
    return (
      <div id="welcome">
        <h1>Welcome!</h1>
        <img src="http://lorempixel.com/400/200/cats" />
      </div>
    )
  }
}