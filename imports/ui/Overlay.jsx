import {Meteor} from "meteor/meteor";
import React, { Component } from 'react';
import './ColombiaMap.css';

export default class Overlay extends Component {
  constructor(props){
    super(props);

    this.state = {
      tuits: [],
    };
  }

  componentWillUpdate(){
    this.updateCanvas();
  }

  updateCanvas(){
    let esta = false;
    let emp = 0;
    if(this.state.tuits.length>=11){
      emp = this.state.tuits.length-11;
    }
    for(let i =0;i<this.props.tweets.length;i++){

        for (let j=emp;j<this.state.tuits.length && !esta && this.state.tuits.length === 0;j++){
          if (this.props.tweets[i].id === this.state.tuits[j].id){
            esta = true;
          }
        }
        if (!esta){
          this.state.tuits = this.state.tuits.concat(this.props.tweets[i]);
          const ctx = this.refs.canvas.getContext('2d');
          //x, y, r
          let followers = this.props.tweets[i].user.followers_count;
          let coordinates = this.props.tweets[i].coordinates.coordinates;
          let xycoord = this.props.projection(coordinates);
          ctx.beginPath();
          ctx.arc(xycoord[0],xycoord[1],0.001*followers,0,2*Math.PI);
          ctx.stroke();
          ctx.arc(xycoord[0],xycoord[1],1,0,2*Math.PI);
          // ctx.fill();
          ctx.stroke();
        }
    }


  }

  render(){
    return(
      <div style={{position:"absolute", "pointer-events":"none"}} >
        <canvas className="canvas" ref='canvas' width="600" height="600"></canvas>
      </div>
    );
  }
}
