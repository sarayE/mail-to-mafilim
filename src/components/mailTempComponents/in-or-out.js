import React, { Component } from 'react';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';

export default class InOrOut extends Component {
  render() {
    return (
      <fieldset>
        <legnd>this is my title: </legnd>
        <RadioButtonGroup name="shipSpeed">
          <RadioButton
            value="in"
            label="In"

          />
          <RadioButton
            value="out"
            label="Out"

          />

        </RadioButtonGroup>
      </fieldset>
    );
  }
}