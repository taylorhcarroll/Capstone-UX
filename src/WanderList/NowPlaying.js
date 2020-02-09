import React, { Component } from 'react';
import * as $ from "jquery";
import hash from "../hash";
import Player from "../Player"
class NowPlaying extends Component {

    constructor() {
        super();
        this.state = {
            token: null,
            item: {
                album: {
                    images: [{ url: "" }]
                },
                name: "",
                artists: [{ name: "" }],
                duration_ms: 0,
            },
            is_playing: "Paused",
            progress_ms: 0
        };
        this.getCurrentlyPlaying = this.getCurrentlyPlaying.bind(this);
    }
    getCurrentlyPlaying(token) {
        // Make a call using the token
        $.ajax({
            url: "https://api.spotify.com/v1/me/player",
            type: "GET",
            beforeSend: (xhr) => {
                xhr.setRequestHeader("Authorization", "Bearer " + token);
            },
            success: (data) => {
                {
                    console.log("data", data);
                    if (data) {
                        this.setState({
                            username: data.id,
                            item: data.item,
                            is_playing: data.is_playing,
                            progress_ms: data.progress_ms,
                        });
                    } else {
                        this.setState({
                            item: "Nothing",
                            is_playing: "Nothing is playing",
                            progress_ms: "1",
                            item: {
                                album: {
                                    images: [{ url: "/images/noSongPlaying.svg" }]
                                },
                            }});
                    }
                }
            },
            error: () => {
                this.setState({
                    item: "Nothing",
                    is_playing: "Nothing is playing",
                });
            }
        });
    }
    componentDidMount() {
        // Set token
        let _token = hash.access_token;

        if (_token) {
            // Set token
            this.setState({
                token: _token
            });
            this.getCurrentlyPlaying(_token);
        }
    }

    render() {
        return (
            <>
                <h3>This is the now playing section</h3>
                {this.state.token && (
                    <Player
                        item={this.state.item}
                        is_playing={this.state.is_playing}
                        progress_ms={this.progress_ms}
                    />
                )}
            </>
        )

    }
}

export default NowPlaying;