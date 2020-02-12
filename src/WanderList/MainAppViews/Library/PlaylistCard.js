import React, { Component } from 'react';
import SongCard from './SongCard';
import Button from '@material-ui/core/Button';

class PlaylistCard extends Component {
    state = {
    };
    // getCarCardData = () => {
    //     CarManager.getUserbyCarId(this.props.activeUser).then(data => {
    //         console.log("here are your CarCard results", data)
    //         this.setState({
    //             cars_users: data
    //         });
    //         // console.log("This is your Car Users by Cars you own", data)
    //         // console.log("this is the name", data[0].user.name)
    //     })
    //     // .then(() => this.removeDups(this.state.cars_users))
    // };
    // componentDidMount() {
    //     this.getCarCardData()
    // }
    render() {
        // console.log("users here", this.state.uniqueUsers)
        return (
            <>
                <p>Title: {this.props.yourPlayList.title}</p>
                <p>Description: {this.props.yourPlayList.description}</p>
                <p>Id: {this.props.yourPlayList.id}</p>
                <p>PIC: {this.props.yourPlayList.picURL}</p>
                <p>LastPublished: {this.props.yourPlayList.timeStamp}</p>
                <p>Public: {this.props.yourPlayList.published}</p>
                <p>Owner: {this.props.yourPlayList.userId}</p>
                <p>Location: {this.props.yourPlayList.pins[0].address}
                    {this.props.yourPlayList.pins[0].latitude}
                    {this.props.yourPlayList.pins[0].longitude}</p>
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
export default PlaylistCard;