import React, { Component } from 'react';
import Server from './server';

export default class ServerList extends Component {
    render() {
      let myEnv = this.props.myEnv;
      let servers;
      if(myEnv == "prod"){
        servers = this.props.servers.prod;
      }
      else if(myEnv == "test"){
        servers = this.props.servers.test;
      }
      else{
        servers = this.props.servers.staging;
      }

      return (        
        <fieldset>
            <legnd>Choose servers: </legnd>
            {
              servers.map((server, index) => {
                return (
                  <Server server={server} key={index}/>
                )
              }) 
            }
        </fieldset>
      );
    }
  }