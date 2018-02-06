import React, { Component } from 'react';


export default class Server extends Component {
    render() {
        return (
            <span>
                <input type="checkbox" name="servers" />{this.props.server}
            </span>
        );
    }
  }