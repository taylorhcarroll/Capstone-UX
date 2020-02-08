import React, { Component } from 'react';
import Mapper from './MapCard'

class UserDash extends Component {

    state = {
        userLocation: {
            latitude: 0,
            longitude: 0
        },
        viewport: {
            latitude: 36.16,
            longitude: -86.78,
            zoom: 10.5
        },
        showPopup: null
    }
    getLocation = () => {
        // Check whether browser supports Geolocation API or not
        if (navigator.geolocation) { // Supported
          // To add PositionOptions
        navigator.geolocation.getCurrentPosition(this.getPosition);
        } else { // Not supported
        alert("This browser does not support HTML Geolocation.");
        }
      }
      getPosition = (position) => {
        this.setState({
            userLocation: {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            }
        })
      }

      componentDidMount () {

        this.getLocation()
    }

    render() {
        const {viewport, showPopup, userLocation} = this.state
        return (
            <>
                <h3>This is the UserDash, otherwise known as "Explore" in nav. This is the first view you should see on login.</h3>
                <div className="mapWrapper">
                    <p>Lat</p>{userLocation.latitude}
                    <p>Long</p>{userLocation.longitude}
                    {/* <Mapper
                    //   props={this.state.buildings}
                    /> */}
                </div>
            </>
        )

    }
}

export default UserDash;