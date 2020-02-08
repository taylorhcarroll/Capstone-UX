import React, { Component } from "react";
import "./Searchfield.css";
import { Card, CardBody, CardTitle } from "reactstrap";
import { InputGroup, Button, Input } from "reactstrap";
import Spotify from "spotify-web-api-js";
import SongCard from "./SongCard";
import DataManager from "../DataManager";

const spotifyApi = new Spotify();

class ExploreSearch extends Component {
  state = {
    tracks: [],
    songSearch: ""
  };
  //grabs the info from the search input field
  handleSubmit = evt => {
    evt.preventDefault();
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
    console.log(stateToChange);
  };
  //submits info and returns results
  songSearch = evt => {
    evt.preventDefault();
    this.searchTracks(this.state.songSearch);
    console.log(this.state.songSearch);
  };
  //retrieves song info from spotify
  searchTracks = songSearch => {
    spotifyApi.searchTracks(songSearch).then(data => {
      this.setState({
        tracks: data.tracks.items,
        songSearch: ""
      });
      console.log(this.state.tracks);
    });
  };
  //setInterval
  //to add songs you need playlistId, songuri and song id
  addSongToSpotify = track => {
    console.log("track going into spotify post", track.song_uri);
    // const playlistName = sessionStorage.getItem("currentPlaylistName");
    console.log("playlist id", this.props.playlistId);
    console.log(track);
    spotifyApi
      .addTracksToPlaylist(this.props.currentPlaylistId, track.song_uri)
      .then(data => {
        console.log("Data returned from songs from spotify", data);
      })
      .then(DataManager.postSong(track))
      .then(() => this.props.grabSongs());
    alert(`${track.songName} has been added to ${this.props.playlistName}`);
  };

  //2. collect song id and song uri add to queued array for playlist and database with a post fetch
  //3. display songs that were added to playlist to the table and display track, artist, album

  render() {
    console.log("search", this.props.currentPlaylistId);
    return (
      <div className="searchCard">
        <Card className="songCard">
          <CardTitle className="searchHeader">Search Music</CardTitle>
          <InputGroup>
            <Input
              className="searchInput"
              id="songSearch"
              onChange={this.handleSubmit}
              placeholder="Search for Music"
              value={this.state.songSearch}
            />
            <Button size="sm" onClick={this.songSearch}>
              Search
            </Button>
          </InputGroup>
          <CardBody>
            {/* <CardSubtitle className="searchHeader">Search Results</CardSubtitle> */}
            <div className="cardText">
              {this.state.tracks.map((track, index) => (
                <SongCard
                  {...this.props}
                  track={track}
                  key={index}
                  addSongToSpotify={this.addSongToSpotify}
                />
              ))}
            </div>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default ExploreSearch;
