import React, { Component } from 'react';


export default class Farm extends Component {
    render() {
      return (
        <span>
            <input type="checkbox" name="servers" />{this.props.farm}
        </span>
      );
    }
  }