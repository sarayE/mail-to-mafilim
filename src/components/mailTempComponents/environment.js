import React, { Component } from 'react';


export default class Environment extends Component {
    render() {
      console.log(this.props.myEnv);
      return (
        <fieldset>
            <legnd>Choose an environment: </legnd>
            <select onChange={this.props.onEnvChange} value={this.props.myEnv}>
              {
                this.props.enviroments.map((env, index) => {
                  return (<option key={index}>{env}</option>)
                })
              }
            </select>
        </fieldset>    
      );
    }
  }
  
  
  
  

