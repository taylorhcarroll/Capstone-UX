import React, { Component } from "react"
import { Link, withRouter } from "react-router-dom"
// import "bootstrap/dist/css/bootstrap.min.css"
// import AuthManager from '../../modules/AuthManager';
// import AppBar from '@material-ui/core/AppBar';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';


class NavBar extends Component {
    state = {
		userName: ''
	};

	handleLogout = () => {
		this.props.clearUser();
		this.props.history.push('/Login');
	};

	// componentDidMount() {
	// 	AuthManager.getUserById(this.props.activeUser).then(data => {
	// 		this.setState({
	// 			userName: data.name
	// 		});
	// 	});
	// }

    render() {
        return (
            <nav id="navBar">
                <ul id="nav" className="nav nav-pills nav-fill">
                    <li className="nav-item">
                        <Link className="nav-link" to="/YourProfile">
                            <img
							src='/images/profile-icon.svg'
							alt='world with headphones around it'
							height='auto'
							width='26px'
						// z-index= '-2'
						/>Profile</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Explore">
                        <img
							src='/images/explore-icon2.svg'
							alt='world with headphones around it'
							height='auto'
							width='26px'
						// z-index= '-2'
						/>Explore</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/YourLibrary">
                        <img
							src='/images/library-icon2.svg'
							alt='world with headphones around it'
							height='auto'
							width='26px'
						// z-index= '-2'
						/>Your Library</Link>
                    </li>
                    <li className='nav-item'>
                    <Link className="nav-link" onClick={this.handleLogout}>
                    <img
							src='/images/logout-icon.svg'
							alt='world with headphones around it'
							height='auto'
							width='26px'
						// z-index= '-2'
						/>Logout</Link>
						</li>
                </ul>
            </nav>
        )
    }
}

export default withRouter(NavBar)