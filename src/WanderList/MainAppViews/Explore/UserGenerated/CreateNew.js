import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'
import { CardContent } from '@material-ui/core';
import "./CreateNew.css";
import moment from 'moment'
import CustomizedInputs from './CustomizedInputs2'
import DataManager from '../../../Handlers/DataManager'

export class CreateNew extends Component {
    state = {
        //determines if on screen 1 or two
        titleSet: false,
        //the ID user gets back after clicking Next the 1st time
        playlistId: "",
        //tracks to be added to playlist
        tracks: [],
        //search criteria
        songSearch: "",
        //for now all set to published
        published: "true",
        //auto created or user on first Next Click
        timeStamp: "",
        //title of playlist
        title: "",
        //desc of playlist
        description: "",
    };
    nextScreen = () => {
        this.setState(prevState => ({
            titleSet: !prevState.titleSet
        }))
    }
    handleFieldChange = evt => {
        console.log("HandleField change is called", evt.target.id)
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };
    //creates the playlist for step 1, then sets the response's Id to state to begin adding songs to the playlist
    handleClick = () => {
        const newPlaylist = {
            spotifyId: (sessionStorage.getItem('spotifyId')),
            timeStamp: moment(new Date()).format("MMM Do YY"),
            published: true,
            title: this.state.title,
            description: this.state.description,
            picURL: "placeholder.jpg"

        }
        DataManager.createPlaylist(newPlaylist)
            .then((response) =>
                this.setState({
                    playlistId: response.id,
                }))
            .then(() => {
                const pinObj = {
                    address: "default search term",
                    latitude: this.props.userLocation.latitude,
                    longitude: this.props.userLocation.latitude,
                    playlistId: this.state.playlistId,
                }
                DataManager.addPin(pinObj)
            })
        this.nextScreen()
    }

    handleSubmit = () => {
            this.state.tracks.forEach(track => {
                console.log("passenger Object", track)
                DataManager.addSong(track)
            })
    this.props.showAddForm()
}


    addTrack = (id) => {
        let songObj = {
            playlistId: this.state.playlistId,
            songId: id,
            song_id: id,
            song_uri: id,
        }
        console.log("addSong is Called", songObj)
        this.state.tracks.push(songObj)
        //push into the tracks array
    }

    render() {
        return (
            <>
                {this.state.titleSet === false ?
                    <>
                        <p>Screen One Grab playlist info</p>
                        <CardContent>
                            <form className='login-form'>
                                <div className='formField'>
                                    <div className='formField'>
                                        <Button
                                            className='login-form-button'
                                            // startIcon={<SaveIcon />}
                                            variant="contained" size="small" color="primary"
                                            type='primary'
                                            // disabled={this.state.loadingStatus}
                                            onClick={this.handleClick}
                                            icon='edit'
                                        >
                                            Next
							</Button>
                                    </div>
                                </div>
                                <div color="white" className='formField'>
                                    {/* <CustomizedInputs
                                        // type='text'
                                        // label='Nick Name'
                                        // margin="dense"
                                        // variant="outlined"
                                        // required
                                        // onChange={this.handleFieldChange}
                                        // id='nickName'
                                        // value={this.state.nickName}
                                        // prefix={
                                        //     <icon type='pic-left' style={{ color: 'rgba(0,0,0,.25)' }} />
                                        // }
                                    /> */}
                                    <p>PlayList Title:</p>
                                    <input
                                        type='text'
                                        style={{ color: 'white)' }}
                                        label='Make'
                                        margin="dense"
                                        variant="outlined"
                                        type='text'
                                        required
                                        onChange={this.handleFieldChange}
                                        id='title'
                                        value={this.state.title}
                                        prefix={
                                            <icon type='pic-left' style={{ color: 'rgba(0,0,0,.25)' }} />
                                        }
                                    />
                                    <p>Playlist Description:</p>
                                    <textarea
                                        type='text'
                                        label='Model'
                                        margin="dense"
                                        variant="outlined"
                                        type='text'
                                        required
                                        onChange={this.handleFieldChange}
                                        id='description'
                                        value={this.state.description}
                                        prefix={
                                            <icon type='pic-left' style={{ color: 'rgba(0,0,0,.25)' }} />
                                        }
                                    />
                                    <p>Area to collect picture will go here</p>
                                </div>

                            </form>
                        </CardContent>

                    </> : <>
                        <p>Screen two, Search for songs and add</p>
                        <Button
                            className='login-form-button'
                            // startIcon={<SaveIcon />}
                            variant="contained" size="small" color="primary"
                            type='primary'
                            //add to onClick a function that posts songs to db
                            onClick={this.handleSubmit}
                            icon='edit'
                        >
                            Next
							</Button>
                        Add Song: <input
                            id='songSearch'
                            onChange={this.handleFieldChange}
                        />
                        <Button
                            variant="contained" color="primary"
                            className='addItemBtn'
                            type='primary'
                            shape='round'
                            icon='delete'
                            size='small'
                            onClick={() => {
                                //refactor to search for songs later, use the add song elsewhere
                                this.addTrack(this.state.songSearch)
                                // this.toggle()
                            }}

                        >
                            Add
                        </Button>
                    </>}
            </>
        )
    }
}
export default CreateNew;