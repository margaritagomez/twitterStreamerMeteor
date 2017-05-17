import React, {Component} from "react";
import { Meteor } from "meteor/meteor";
import { Thumbnail } from 'react-bootstrap';


export default class Tweet extends Component {
  render() {

    console.log(this.props.tweet.coordinates.coordinates);
    return (<div className="tweet bod">
      <Thumbnail>
        <div className="row">
          <div className='col-md-2'>
            <img src={this.props.tweet.user.profile_image_url} alt={this.props.tweet.user.screen_name + "profile image"}/>
          </div>
          <div className='col-md-4'>
            <div className='row'>
              {this.props.tweet.user.screen_name}
            </div>
            <div className='row'>
              {this.props.tweet.created_at}
            </div>
          </div>
          <div className='col-md-6'>
            {this.props.tweet.text}
          </div>
        </div>
      </Thumbnail>
    </div>);
  }
}
