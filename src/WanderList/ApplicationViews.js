import React, { Component } from "react";
import Login from './Login'
import MainContainer from './MainContainer'
import { Route, Link, withRouter } from 'react-router-dom';
// import CallbackRedirect from "./CallbackRedirect";
import UserDash from './UserDash'
import YourProfile from "./YourProfile";
import YourLibrary from "./YourLibrary";


export default class ApplicationViews extends Component {

    render() {
        return (
            <React.Fragment>
                <p>This is application views</p>
                <Route
                    exact path="/" render={props => {
                        return <UserDash
                            {...props}
                            {...this.props} />
                    }}
                />
                <Route
                    path="/Explore" render={props => {
                        return <UserDash
                            {...props}
                            {...this.props} />
                    }}
                />
                <Route
                    path="/YourProfile" render={props => {
                        return <YourProfile
                            {...props}
                            {...this.props} />
                    }}
                />
                <Route
                    path="/YourLibrary" render={props => {
                        return <YourLibrary
                            {...props}
                            {...this.props} />
                    }}
                />
                <Route
                    path="/Login" render={props => {
                        return <Login
                            {...props}
                            {...this.props} />
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