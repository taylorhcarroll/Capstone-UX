import React, { Component } from "react";
import Login from './Login'
import MainContainer from './MainContainer'
import { Route, Link, withRouter } from 'react-router-dom';
// import CallbackRedirect from "./CallbackRedirect";
import UserDash from './UserDash'
import YourProfile from "./YourProfile";
import YourLibrary from "./YourLibrary";
import * as $ from "jquery";

export default class ApplicationViews extends Component {

//decide later if putting here due to possible web socket integration//
    getCurrentlyPlaying(token) {
        // Make a call using the token
        $.ajax({
          url: "https://api.spotify.com/v1/me/player",
          type: "GET",
          beforeSend: (xhr) => {
            xhr.setRequestHeader("Authorization", "Bearer " + token);
          },
          if (data) {
           {
            console.log("data", data);
            this.setState({
              username: data.id,
              item: data.item,
              is_playing: data.is_playing,
              progress_ms: data.progress_ms,
            });
          }
        }
        });
      }

    render() {
        return (
            <React.Fragment>
                <p>This is application views</p>
                <Route
                    exact path="/" render={props => {
                        return <UserDash
                            {...props}
                            {...this.props}
                            getCurrentlyPlaying={this.getCurrentlyPlaying}/>
                    }}
                />
                <Route
                    path="/Explore" render={props => {
                        return <UserDash
                            {...props}
                            {...this.props}
                            getCurrentlyPlaying={this.getCurrentlyPlaying} />
                    }}
                />
                <Route
                    path="/YourProfile" render={props => {
                        return <YourProfile
                            {...props}
                            {...this.props}
                            getCurrentlyPlaying={this.getCurrentlyPlaying} />
                    }}
                />
                <Route
                    path="/YourLibrary" render={props => {
                        return <YourLibrary
                            {...props}
                            {...this.props}
                            getCurrentlyPlaying={this.getCurrentlyPlaying} />
                    }}
                />
                <Route
                    path="/Login" render={props => {
                        return <Login
                            {...props}
                            {...this.props}
                            getCurrentlyPlaying={this.getCurrentlyPlaying} />
                    }}
                />
                {/* <Route
                    exact path="/CallbackRedirect" render={props => {
                        return <CallbackRedirect
                            {...props}
                            {...this.props} />
                    }}
                /> */}

            </React.Fragment>
        )
    }
}