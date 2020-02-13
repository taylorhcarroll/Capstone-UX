import React, { Component } from "react";
import ApplicationViews from './ApplicationViews'
import NowPlaying from './NowPlaying'
import Navbar from './Navbar'
import Spotify from "spotify-web-api-js";
import DataManager from './Handlers/DataManager'

//allows you to use the spotify-web-api-js functions
const spotifyApi = new Spotify();
const userToken = sessionStorage.getItem("access_token")
spotifyApi.setAccessToken(userToken);

class MainContainer extends Component {

    state = {
        user: '',
        newUser: '',
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

      //grabs needed info from spotify for the current user and post to database
  handleLogin = () => {
    spotifyApi
      .getMe()
      .then(response => {
          console.log("spotify info", response)
        const newUser = {
          userName: response.display_name,
          spotifyId: response.id,
          userImage: response.images[0].url
        };
        this.setState({ spotifyId: response.id });
        sessionStorage.setItem("spotifyId", response.id);
        sessionStorage.setItem("SpotifyName", response.display_name);
        this.setState({ newUser: newUser });
        return response;
      })
      .then(response => {
        console.log("what is being passed to checkUser", response.id);
        DataManager.checkUser(response.id).then(
          checkedUsers => {
            if (checkedUsers.length > 0) {
                console.log(checkedUsers, "and", response.id, "this user already exists, no post to DB")
            } else {
              DataManager.postUser(this.state.newUser);
              console.log(checkedUsers, "and", response.id, "this user is new, posted to DB")
            }
          }
        );
      });
  }
    componentDidMount() {
        this.handleLogin()
        // this.getCurrentUser()
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
