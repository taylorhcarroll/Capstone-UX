import React, { Component } from "react";
import { Button } from "reactstrap";
// import "./Searchfield.css";

export class CreateNew extends Component {
    state = {
        titleSet: false,
        tracks: [],
        songSearch: ""
    };
    nextScreen = () => {
        this.setState(prevState => ({
            titleSet: !prevState.titleSet
        }))
    }
    render() {
        return (
            <>
                {this.state.titleSet === false ?
                    <>
                        <p>Screen One Grab playlist info</p>
                        <Button
                            size="sm"
                            color="info"
                            className="add"
                            onClick={this.nextScreen}
                        >
                            Next
            </Button>
                    </> : <>
                        <p>Screen two, Search for songs and add</p>
                    </>}
            </>
        )
    }
}
export default CreateNew;