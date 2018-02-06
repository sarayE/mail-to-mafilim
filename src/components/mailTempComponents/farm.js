import React, { Component } from 'react';


export default class Farm extends Component {
    render() {
      return (
        <span>
            <br/><input type="checkbox" name="servers" />{this.props.farm}
        </span>
      );
    }
  }