import {Meteor} from "meteor/meteor";
import React, { Component } from 'react';
import './ColombiaMap.css';

export default class Overlay extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div style={{position:"absolute", "pointer-events":"none"}} >
        <canvas  width="600" height="600"></canvas>
      </div>
    );
  }
}
