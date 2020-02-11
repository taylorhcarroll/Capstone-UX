import React, { Component } from 'react';
import DataManager from './Handlers/DataManager';
import PlaylistCard from './MainAppViews/Library/PlaylistCard'
import moment from 'moment'

class YourLibrary extends Component {
    state = {
        yourPlayLists: [],
    };

    getData = () => {
        // debugger
        DataManager.getPlaylistsbyUser(sessionStorage.getItem('spotifyId'))
            .then((response) => {
                console.log(response)
                this.setState({
                    yourPlayLists: response,
                })
                })
    }

    deleteSong = (id) => {
        DataManager.removeSong(id).then(() => {
            this.getData();
        })
    }

    deletePlaylist = (id) => {
        DataManager.deletePlaylist(id).then(() => {
            this.getData();
        });
    };

    editPlaylist = () => {
        // this.setState({ loadingStatus: true });
        const editedPlaylist = {
            id: this.props.playlistId,
            picURL: this.state.picURL,
            timeStamp: moment(new Date()).format("MMM Do YY"),
            published: this.state.published,
            title: this.state.title,
            description: this.state.description,
        };

        DataManager.editPlaylist(editedPlaylist).then(this.getData);
    };

    componentDidMount() {
        this.getData()
    }
    render() {
        return (
            <>
                <h3>This is Your Library, don't mind the mess.</h3>
                {this.state.yourPlayLists.map(yourPlayList => (
                    <PlaylistCard
                        key={yourPlayList.id}
                        yourPlayList={yourPlayList}
                        {...this.props}
                        deletePlaylist={this.deletePlaylist}
                        editPlaylist={this.editPlaylist}
                        deleteSong={this.deleteSong}
                    />
                ))}

            </>
        )

    }
}

export default YourLibrary;