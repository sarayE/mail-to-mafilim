import React, { Component } from 'react';
import Farm from './farm';

export default class FarmList extends Component {
    render() {
      let myEnv = this.props.myEnv;
      let farms;
      if(myEnv == "prod"){
        farms = this.props.farms.prod;
      }
      else if(myEnv == "test"){
        farms = this.props.farms.test;
      }
      else{
        farms = this.props.farms.staging;
      }

      return (
        <fieldset>
            <legnd>Choose a farm: </legnd>
            {
              farms.map((farm, index) => {
                return (
                  <Farm farm={farm} key={index}/>
                )
              }) 
            }
        </fieldset>
      );
    }
  }