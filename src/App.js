import React, { Component } from "react";
import * as $ from "jquery";
import { authEndpoint, clientId, redirectUri, scopes } from "./config";
import hash from "./hash";
// import Player from "./Player";
// import logo from "./logo.svg";
import "./App.css";
import MainContainer from "./WanderList/MainContainer";
import Spotify from "spotify-web-api-js";

const spotifyApi = new Spotify();

class App extends Component {
  constructor() {
    super();
    const params = this.getHashParams();
    this.state = {
      token: null,
      user: sessionStorage.getItem('activeUser') !== null,
      spotifyId: ''
    };
    if (params.access_token) {
      spotifyApi.setAccessToken(params.access_token);
      this.getloggedInUser();
    }
  }

  //from spotify grabs tokens that makes app functional
  getHashParams() {
    var hashParams = {};
    var e,
      r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    while ((e = r.exec(q))) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  }

  isAuthenticated = () => sessionStorage.getItem('activeUser') !== null;

  setToken = token => {
    sessionStorage.setItem('userToken', token);
    this.setState({ test: token, user: true });
  };



  getUser() {
    if (sessionStorage.getItem('activeUser')) {
      return parseInt(sessionStorage.getItem('activeUser'));
    } else {
      return '';
    }
  }

  //for logout purposes
  clearUser = () => {
    sessionStorage.removeItem('activeUser');
    this.setState({
      user: this.isAuthenticated(),
      token: null
    });
  };

  //grabs needed info from spotify for the current user and post to database
  getloggedInUser() {
    spotifyApi
      .getMe()
      .then(response => {
        const newUser = {
          email: response.email,
          userName: response.display_name,
          spotifyId: response.id,
          userImage: response.images[0].url
        };
        // console.log("spotify response", response);
        // console.log(newUser);
        this.setState({ spotifyId: response.id });
        sessionStorage.setItem("spotifyId", response.id);
        sessionStorage.setItem("SpotifyEmail", response.email);
        sessionStorage.setItem("SpotifyName", response.display_name);
        this.setState({ newUser: newUser });
        return response;
      })
  }

  componentDidMount() {
    // Set token
    let _token = hash.access_token;

    if (_token) {
      // Set token
      this.setState({
        token: _token
      })
      spotifyApi.setAccessToken(_token);
      this.setToken(_token)
    }
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">

          {/* This is where the logo can go */}
          {/* <img src={logo} className="App-logo" alt="logo" /> */}

          <>
            {!this.state.token && (
              <>
                <img
                  src='/images/logo.svg'
                  alt='world with headphones around it'
                  height='auto'
                  width='350px'
                // z-index= '-2'
                />
                <p>This is the Authentication</p>
                <a
                  className="btn btn--loginApp-link"
                  href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`}
                >
                  Login to Spotify
            </a>
              </>
            )}
            {this.state.token && (
              <>
                <MainContainer
                  token={this.state.token}
                  clearUser={this.clearUser}
                  activeUser={this.state.activeUser}
                  {...this.props} />
              </>
            )}
          </>
        </header>
      </div>
    );
  }
}

export default App;
