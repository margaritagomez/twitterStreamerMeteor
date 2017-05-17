import React, {Component} from "react";
import {PropTypes} from "prop-types";
import { Meteor } from "meteor/meteor";
import { createContainer} from "meteor/react-meteor-data";
import ColombiaMap from './ColombiaMap.jsx';
import Overlay from './Overlay.jsx';
import TweetsResults from "./TweetsResults.jsx";
import {Tweets} from "../api/Tweets.js";
import {Button} from "react-bootstrap";

export class App extends Component {
  constructor(props) {
    super(props);
    this.projection=null;
  }

  changeQuery(evt) {
    if (evt.key !== "Enter") {
      return;
    }
    // "this" will change in the method call, so I need to save it
    let component = this;

    Meteor.call("twitter.stream", evt.target.value);

  }

  begin(){
    Meteor.call('twitter.stream', 'hola');
  }

  setProjection(p){
    this.projection=p;
  }

  render() {
    console.log("render!");
    return (
      <div>
        <div className="col-md-6">
        <div>
          <h1 className="head"> Tweets by Geolocation <small>by Margarita Gómez</small></h1>
        </div>
        <div>
          <Overlay tweets={this.props.tweets} projection ={this.projection} ></Overlay>
          <ColombiaMap
            className="mapita"
            width="600"
            height="600"
            data={{RISARALDA:0}}
            setProjection = {this.setProjection.bind(this)}>
          </ColombiaMap>

        </div>
      </div>
      <div>
        <br/>
        <Button className="center" onClick={this.begin.bind(this)}> Begin Twitter Streaming </Button>
        { this.props && this.props.err ?
          <div>Error: {this.props.err}</div> :
          <span></span>
        }
        <h2 className="head">Results:</h2>
        {this.props && this.props.tweets ?
          <TweetsResults tweets={this.props.tweets}/> :
          <p>Enter a query</p>
        }
      </div>
      </div>
    );
  }
}

App.propTypes = {
  tweets : PropTypes.array.isRequired
};

export default AppContainer = createContainer(() => {
  Meteor.subscribe("tweets");


  return {
    tweets: Tweets.find({}).fetch()
  };
}, App);
