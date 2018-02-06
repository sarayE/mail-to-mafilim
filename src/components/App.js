import React, { Component } from 'react';
import MailTemp from './mail-temp';
import myData from '../data/myData.js';

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
      <div>
        <section>
          <button onClick={this.addMailTemp}>+ Add form</button>
        </section>
        <section>
          {mailTemps}     
        </section>
      </div>
    );
  }
}
