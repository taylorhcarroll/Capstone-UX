import React, { Component } from 'react';
import Mapper from './MapCard'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import CreateNew from './MainAppViews/Explore/UserGenerated/CreateNew'

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
        showPopup: null,
        showAddForm: false
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
    showAddForm = () => {
        this.setState(prevState => ({
            showAddForm: !prevState.showAddForm
        }))
    }
    componentDidMount() {

        this.getLocation()
    }

    render() {
        const { viewport, showPopup, userLocation } = this.state
        return (
            <>
                <h3>This is the UserDash</h3>
                {this.state.showAddForm === false ?
                    <div className="exploreWrapper">
                        <p>This is the map View</p>
                        <div className="mapWrapper">
                            <p>Lat</p>{userLocation.latitude}
                            <p>Long</p>{userLocation.longitude}
                            {/* <Mapper
                    //   props={this.state.buildings}
                    /> */}
                            <div class="add-Button">
                                <Fab color="primary" aria-label="add" onClick={this.showAddForm}>
                                    <AddIcon />
                                </Fab>
                            </div>
                        </div>
                    </div>
                    :
                    <CreateNew
                        />}
                 </>
        )
            }
        }
export default UserDash;