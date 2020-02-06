import React, { Component } from 'react';
import Spotify from "spotify-web-api-js";

//allows you to use the spotify-web-api-js functions
const spotifyApi = new Spotify();
const userToken = sessionStorage.getItem("access_token")
spotifyApi.setAccessToken(userToken);

class YourProfile extends Component {

state = {
        user: '',
        spotifyId: '',
        image: {}
}

getCurrentUser = () => {
        spotifyApi
      .getMe()
      .then(response => {
              console.log(response, "user")
        this.setState({
                spotifyId: response.id,
                user: response,
                image: response.images[0] });
        })
}

componentDidMount() {
        this.getCurrentUser()
}

    render() {
		return (
                        <>
                        <h3>This is Your User Profile, don't mind the mess.</h3>
                        {/* <img src={this.state.user.images}></img> */}
                        {this.state.image.url ? <img src={this.state.image.url}></img> : null
                                        }
                                        }
                                {/* return {this.state.rideCreated === false ? */}
                                        <h2>{this.state.user.display_name}</h2>}}}
                                        {/* note: these do not have to be your spotify followers */}
                                        {/* <h2>{this.state.user.followers}</h2> */}
                                        {/* <h2>{this.state.user.following}</h2> */}
                        <p></p>
                        </>
        )

}}

export default YourProfile;