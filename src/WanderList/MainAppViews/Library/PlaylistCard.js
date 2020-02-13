import React, { Component } from 'react';
import SongCard from './SongCard';
import Button from '@material-ui/core/Button';
import EditplaylistCard from './EditplaylistCard';

class PlaylistCard extends Component {
    state = {
        showEditForm: false
    };

    toggleEdit = () => {
        this.setState(prevState => ({
            showEditForm: !prevState.showEditForm
        }))
    }

    render() {
        // console.log("users here", this.state.uniqueUsers)
        return (
            <>
                {this.state.showEditForm === false ?
                    <Button
                        size="sm"
                        color="info"
                        className="editPlaylist"
                        onClick={this.toggleEdit}
                    >
                        Edit
                              </Button>
                    :
                    <Button
                        size="sm"
                        color="info"
                        className="editPlaylist"
                        onClick={this.toggleEdit}
                    >
                        Cancel
                              </Button>}

                {this.state.showEditForm === false ?
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
                    </> : <EditplaylistCard
                        yourPlayList={this.props.yourPlayList}
                        deletePlaylist={this.props.deletePlaylist}
                        editPlaylist={this.props.editPlaylist}
                        getData={this.props.getData}
                        toggleEdit={this.toggleEdit}
                    />
                }
            </>
        )
    }
}
export default PlaylistCard;