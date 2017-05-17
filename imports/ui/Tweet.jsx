import React, {Component} from "react";
import { Meteor } from "meteor/meteor";



export default class Tweet extends Component {
  render() {

    console.log(this.props.tweet.coordinates.coordinates);
    return (<div className="tweet bod">
    	<span>{this.props.tweet.created_at} </span>
    	<span>{this.props.tweet.user.screen_name} </span>
    	<img src={this.props.tweet.user.profile_image_url} alt={this.props.tweet.user.screen_name + "profile image"}/>
      <span>{this.props.tweet.text} </span>
      {/*<span>{JSON.stringify(this.props.tweet)}</span>*/}
    </div>);
  }
}
