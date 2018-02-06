import React, { Component } from 'react';
import Environment from './mailTempComponents/environment';
import InOrOut from './mailTempComponents/in-or-out';
import ServerList from './mailTempComponents/server-list';
import FarmList from './mailTempComponents/farm-list';

export default class MailTemp extends Component {
    constructor(){
      super();

      this.state = {
        myEnv: 'test'
      };
      this.onEnvChange = this.onEnvChange.bind(this);
    }

    onEnvChange(e){
      this.setState({
        myEnv: e.target.value
      });
    }


    render() {
      console.log(this.props.myData);
      return (
        <form>
          <Environment 
              enviroments={this.props.myData.Environment} 
              myEnv={this.state.myEnv}
              onEnvChange={this.onEnvChange}
          />
          <InOrOut/>
          <ServerList 
              servers={this.props.myData.Servers}
              myEnv={this.state.myEnv}
          />
          <FarmList 
            farms={this.props.myData.Farms}
            myEnv={this.state.myEnv}
          />
        </form>
      );
    }
  }
