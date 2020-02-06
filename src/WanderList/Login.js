import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';



class Login extends Component {
    // Set initial state
    state = {
        userID: '',
        hideInfo: true
    };
    render() {
        return (
            <>
            <h1>WanderList and Logo</h1>
            <h2>Get Lost...In the Music</h2>
            <a>What is WanderList? ></a>
            <a>GET STARTED</a>
            </>
        )
    }
}

export default withRouter(Login);