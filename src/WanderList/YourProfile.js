import React, { Component } from 'react';
import Spotify from "spotify-web-api-js";

//allows you to use the spotify-web-api-js functions
const spotifyApi = new Spotify();
const userToken = sessionStorage.getItem("access_token")
spotifyApi.setAccessToken(userToken);

class YourProfile extends Component {

state = {
        user: '',
        spotifyId: ''
}

getCurrentUser = () => {
        spotifyApi
      .getMe()
      .then(response => {
              console.log(response, "user")
        this.setState({
                spotifyId: response.id,
                user: response });
        })
}

componentDidMount() {
        this.getCurrentUser()
}

    render() {
		return (
<>
<h3>This is Your User Profile, don't mind the mess.</h3>
<p></p>
</>
        )

}}

export default YourProfile;