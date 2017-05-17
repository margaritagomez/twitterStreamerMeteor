# Colombia Twitter Streamer Meteor

![App homepage](https://68.media.tumblr.com/099ed84572ae44c90d570de4cc2b937b/tumblr_oq2vam4WJF1w7ypfio1_1280.png)

## About
A simple web app that uses a boilerplate for a Meteor 1.4 Twitter streamer application with React and a React element of Colombia's map from [here](https://github.com/john-guerra/ColombiaVisualizationReact). Uses the Twitter [npm](https://www.npmjs.com/package/twitter) module.

## Technologies
* Twitter Streaming API
* React
* Meteor
* Canvas

## Secret Salsa
The app draws a circle and its center in the coordinates where the tweet was published. Its size varies according to the user's number of followers using the info of the user that's included in each tweet. 
Each circle is filled with the color of the user's background image and some design changes were made in order to make it more appealing.

## How to run it

It requires you to setup your credentials on the server using environment variables:

### Windows
```
set TWITTER_CONSUMER_KEY=yourCredentialsHere
set TWITTER_CONSUMER_SECRET=yourCredentialsHere
set TWITTER_ACCESS_TOKEN_KEY=yourCredentialsHere
set TWITTER_ACCESS_TOKEN_SECRET=yourCredentialsHere

meteor npm install
meteor
```

### Mac 
```
export TWITTER_CONSUMER_KEY="yourCredentialsHere"
export TWITTER_CONSUMER_SECRET="yourCredentialsHere"
export TWITTER_ACCESS_TOKEN_KEY="yourCredentialsHere"
export TWITTER_ACCESS_TOKEN_SECRET="yourCredentialsHere"

meteor npm install
meteor
```
Click on the top right button to start viewing tweets according to their location.
