import React, { Component } from "react";
// import { Button } from "reactstrap";
// this is the search results for playlists based on the map coords or search string
// import "./SongCard.css";

export class SongCard extends Component {
  // handleInput = evt => {
  //   console.log(evt.target.value);
  //   const stateToChange = {};
  //   stateToChange[evt.target.id] = evt.target.value;
  //   this.setState(stateToChange);
  //   console.log(stateToChange);
  // };

  addSongToPlaylist = event => {
    console.log("props", this.props);
    // const playlistId = sessionStorage.getItem("currentPlaylistId")
    // const currentPlaylistId = sessionStorage.getItem("PlaylistId");
    const songInfo = {
      songName: this.props.track.name,
      albumName: this.props.track.album.name,
      artistName: this.props.track.artists[0].name,
      song_uri: [this.props.track.uri],
      song_id: this.props.track.id,
      spotifyPlaylistId: this.props.currentPlaylistId,
      playlistId: this.props.playlistId,
    };
    this.props.addSongToSpotify(songInfo);
    console.log(songInfo);
  };

  render() {
    return (
      <div className="songSearch">
        <div className="singleTrack">
          <div>
            {this.props.track.name} by {this.props.track.artists[0].name}
            {"  "}
            <button
              size="sm"
              color="info"
              className="add"
              onClick={this.addSongToPlaylist}
            >
              +
            </button>
          </div>
        </div>
        <hr className="hrLineSong" />
      </div>
    );
  }
}

export default SongCard;
