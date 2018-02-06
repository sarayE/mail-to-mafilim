import React, { Component } from 'react';
import MailTemp from './mail-temp';
import myData from '../data/myData.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

/*
--App
----mail-temp
------environment
------in-or-out
------farm-list
--------farm
------server-list
--------server
*/


export default class App extends Component {
  constructor(){
    super();

    this.state = {
      mailTempNum: 1
    };
    this.addMailTemp = this.addMailTemp.bind(this);
  }

  addMailTemp(){
    this.setState({
      mailTempNum: ++this.state.mailTempNum
    });
  }
  
  render() {
    var mailTemps = [];
    for(var i =0; i <  this.state.mailTempNum; i++){              
      mailTemps.push(<MailTemp myData={myData} key={i}/>);
    }
    
    return (
      <MuiThemeProvider>
        <div>
          <section>
            <RaisedButton label="+ Add form" onClick={this.addMailTemp} />
          </section>
          <section>
            {mailTemps}     
          </section>
          <section>
            <RaisedButton label="Send Mail" primary={true} />
          </section>
        </div>
      </MuiThemeProvider>
    );
  }
}
