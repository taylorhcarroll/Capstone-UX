//calls for all spotify related searches

export default  {

searchTracks = (searchTerm) => {
    spotifyAPI.searchTracks(searchTerm)
      .then((response) => {
        this.setState({
          tracks: response.tracks.items
        })
    })
},
searchArtists = (searchTerm) => {
    spotifyAPI.searchArtists(searchTerm)
      .then((response) => {
        this.setState({
          artists: response.artists.items
        })
    })
},
searchAlbums = (searchTerm) => {
    spotifyAPI.searchAlbums(searchTerm)
      .then((response) => {
        this.setState({
          albums: response.albums.items
        })
    })
}

}