import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class SongCard extends Component {
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
                <p>songId: {this.props.song.id}</p>
                <p>spotify: {this.props.song.song_id}</p>
                <p>song_uri: {this.props.song.song_uri}</p>
                <p>id: {this.props.song.id}</p>
                <Button
                        className='addItemBtn'
                        // startIcon={<DeleteIcon />}
                        variant="contained" size="small"
                        className='delete-Button'
                        type='primary'
                        shape='round'
                        icon='delete'
                        size='small'
                        onClick={() => this.props.deleteSong(this.props.song.id)}
                    >
                        Remove Song
							</Button>
            </>
        )
    }
}
export default SongCard;