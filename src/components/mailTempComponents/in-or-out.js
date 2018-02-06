import React, { Component } from 'react';


export default class InOrOut extends Component {
    render() {
      return (
        <fieldset>
          <legnd>this is my title: </legnd>
            <input type="radio" name="inOrOut"/>In
            <input type="radio" name="inOrOut"/>Out
        </fieldset>
      );
    }
  }