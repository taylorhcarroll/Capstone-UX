//fetch calls for all client side calls to json database
const remoteURL = 'http://localhost:8088';

export default {
// check User, this is essentially a "get" to identify if this user exists already, can also be used as a get if needed
checkUser(spotifyId) {
    return fetch(
      `${remoteURL}/users?spotifyId=${spotifyId}`
    ).then(response => response.json());
  },

// create User
postUser(userObject) {
    return fetch(`${remoteURL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userObject)
    }).then(response => response.json());
  },

// delete User, this does not delete user's spotify account, just "un-link's" it by deleting the user's account client-side (wanderlist's side)
removeUser(id) {
        return fetch(`${remoteURL}/users/${id}`, { method: "DELETE" }).then(
          response => response.json()
        );
      },

// 4 following are stretch goals
// add follower
addFollower(userId, initiateId) {
    let follower = {
        userId: userId,
        initiateId: initiateId
    }
    return fetch(`${remoteURL}/followers/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(follower)
    }).then(Response => Response.json())
},
// remove follower
removeFollower(id) {
    return fetch(`${remoteURL}/followers/${id}`, {
        method: 'DELETE'
    }).then(result => result.json());
},
// reccomend playlist
reccomendPlaylist(userId, playlistId) {
    let reccomendation = {
        userId: userId,
        playlistId: playlistId
    }
    return fetch(`${remoteURL}/reccomends/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(reccomendation)
    }).then(Response => Response.json())
},
// undo reccomended
removeReccomendation(id) {
    return fetch(`${remoteURL}/reccomends/${id}`, {
        method: 'DELETE'
    }).then(result => result.json());
},

// create playlist
createPlaylist(playlistObject) {
    return fetch(`${remoteURL}/playlists`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(playlistObject)
    }).then(response => response.json());
  },

// get songs by playlist
// getPlaylistsbyUser(currentUserId) {
//     console.log(`${remoteURL}/playlists?userId=${currentUserId}`)
//     return fetch(
//         `${remoteURL}/playlists/?userId=${currentUserId}&expand=song`
//     ).then(response => response.json());
// },

// get songs by playlist and include the user info, songs, and pins
getPlaylistsbyUser(currentUserId) {
    console.log(`${remoteURL}/playlists?userId=${currentUserId}&embed=songs&embed=pins`)
    return fetch(
        `${remoteURL}/playlists/?userId=${currentUserId}&embed=songs&embed=pins`
    ).then(response => response.json());
},

getAllPlaylists() {
    return fetch(`${remoteURL}/playlists`).then(response => response.json());
  },

// delete playlist
  deletePlaylist(id) {
    return fetch(`${remoteURL}/playlists/${id}`, {
        method: 'DELETE'
    }).then(result => result.json());
},

// edit playlist
editPlaylist(playlistObj, id) {
    return fetch(`${remoteURL}/playlists/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(playlistObj)
    }).then(response => response.json());
  },

// create pin
addPin(pinObject) {
    return fetch(`${remoteURL}/pins`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(pinObject)
    }).then(response => response.json());
  },

// edit pin
editPin(pinObject, id) {
    return fetch(`${remoteURL}/playlists/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(pinObject)
    }).then(response => response.json());
  },

// get song
getSong(id) {
    return fetch(`${remoteURL}/songs/${id}`).then(response =>
      response.json()
    );
  },

// add song
addSong(songObject) {
    return fetch(`${remoteURL}/songs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(songObject)
    }).then(response => response.json());
  },

// remove song
removeSong(id) {
    return fetch(`${remoteURL}/songs/${id}`, { method: "DELETE" }).then(
      response => response.json()
    );
  }
}