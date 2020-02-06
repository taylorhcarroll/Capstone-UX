import React, { Component } from "react";
import ApplicationViews from './ApplicationViews'
import NowPlaying from './NowPlaying'
import Navbar from './Navbar'
import Spotify from "spotify-web-api-js";

//allows you to use the spotify-web-api-js functions
const spotifyApi = new Spotify();
const userToken = sessionStorage.getItem("access_token")
spotifyApi.setAccessToken(userToken);

class MainContainer extends Component {

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
                    user: response
                });
                this.setUser(response.id)
            })
    }
    setUser = spotifyId => {
        sessionStorage.setItem('activeUser', spotifyId);
      };
    componentDidMount() {
        this.getCurrentUser()
    }

    render() {
        return (
            <>
                <p>This is the main container. Congrats you're doing great.</p>
                {this.props.token ?
                    <ApplicationViews
                        token={this.state.token}
                        clearUser={this.clearUser}
                        activeUser={this.state.activeUser}
                        {...this.props} />
                    : <h3>No token for you!</h3>}
                <NowPlaying
                    token={this.state.token}
                    {...this.props}
                    activeUser={this.state.activeUser} />
                <Navbar
                    token={this.state.token}
                    clearUser={this.clearUser}
                    activeUser={this.state.activeUser}
                    {...this.props} />
            </>
        )
    }


}
export default MainContainer;
