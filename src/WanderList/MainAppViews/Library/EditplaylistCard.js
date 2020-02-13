import React, { Component } from 'react';
import SongCard from './SongCard';
import Button from '@material-ui/core/Button';
import DataManager from '../../Handlers/DataManager';
import moment from 'moment';

class EditplaylistCard extends Component {
    state = {
        title: '',
        description: '',
        picURL: '',
        showMap: 'false',
        pin: {
            latitude: '',
            longitude: '',
            address: '',
        },
        published: '',
        timeStamp: '',
        id: '',
    };

    handleInput = evt => {
        // console.log(evt.target.value);
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
        // console.log(stateToChange);
    };

    componentDidMount() {
        this.setState({
            id: this.props.yourPlayList.id,
            title: this.props.yourPlayList.title,
            description: this.props.yourPlayList.description,
            picURL: this.props.yourPlayList.picURL,
            showMap: 'false',
            pin: {
                latitude: this.props.yourPlayList.pins[0].latitude,
                longitude: this.props.yourPlayList.pins[0].longitude,
                address: this.props.yourPlayList.pins[0].address,
            },
            published: this.props.yourPlayList.published,
            timeStamp: this.props.yourPlayList.timeStamp
        });
    }
    editPlaylist = () => {
        // this.setState({ loadingStatus: true });
        const editedPlaylist = {
            id: this.state.id,
            picURL: this.state.picURL,
            timeStamp: moment(new Date()).format("MMM Do YY"),
            published: this.state.published,
            title: this.state.title,
            description: this.state.description,
        };

        DataManager.editPlaylist(editedPlaylist).then(this.props.getData).then(this.props.toggleEdit());
    };

    render() {
        // console.log("users here", this.state.uniqueUsers)
        return (
            <>
             <Button
                        size="sm"
                        color="info"
                        className="editPlaylist"
                        onClick={this.editPlaylist}
                    >
                        Submit
                              </Button>
                Title:<input
                    id="title"
                    type="text"
                    onChange={this.handleInput}
                    value={this.state.title} />
                Description:
                <input
                    id="description"
                    type="text"
                    onChange={this.handleInput}
                    value={this.state.description} />
                PIC:
                <input
                    id="picURL"
                    type="text"
                    onChange={this.handleInput}
                    value={this.state.picURL} />
                Public:
                <input
                    id="published"
                    type="text"
                    onChange={this.handleInput}
                    value={this.state.published} />
                Location:
                <input
                    id="address"
                    type="text"
                    onChange={this.handleInput}
                    value={this.state.pin.address} />
                Lat:
                <input
                    id="latitude"
                    type="text"
                    onChange={this.handleInput}
                    value={this.state.pin.latitude} />
                Long:
                <input
                    id="longitude"
                    type="text"
                    onChange={this.handleInput}
                    value={this.state.pin.longitude} />
                LastPublished: {this.props.yourPlayList.timeStamp}
                Owner: {this.props.yourPlayList.userId}


                {this.props.yourPlayList.songs.length > 0 ?
                    this.props.yourPlayList.songs.map(song => {
                        return <SongCard
                            key={song.id}
                            song={song}
                            {...this.props}
                            deleteSong={this.props.deleteSong}
                        />
                    }
                    ) : <p>No Songs attached to this playlist.</p>}
                <Button
                    className='addItemBtn'
                    // startIcon={<DeleteIcon />}
                    variant="contained" size="small"
                    className='delete-Button'
                    type='primary'
                    shape='round'
                    icon='delete'
                    size='small'
                    onClick={() => this.props.deletePlaylist(this.props.yourPlayList.id)}
                >
                    Delete Playlist
							</Button>
            </>
        )
    }
}
export default EditplaylistCard;