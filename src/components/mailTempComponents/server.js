import React, { Component } from 'react';
import Checkbox from 'material-ui/Checkbox';

export default class Server extends Component {
    render() {
        return (
            <span>
                <Checkbox label={this.props.server}/>
            </span>
        );
    }
}