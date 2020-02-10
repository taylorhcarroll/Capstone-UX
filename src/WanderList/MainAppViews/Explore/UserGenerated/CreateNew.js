import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'
import { CardContent } from '@material-ui/core';
// import "./Searchfield.css";

export class CreateNew extends Component {
    state = {
        //determines if on screen 1 or two
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
                        <CardContent>
                            <form className='login-form'>
                                <div className='formField'>
                                </div>
                                <div className='formField'>
                                    <TextField
                                        type='text'
                                        label='Nick Name'
                                        margin="dense"
                                        variant="outlined"
                                        required
                                        onChange={this.handleFieldChange}
                                        id='nickName'
                                        value={this.state.nickName}
                                        prefix={
                                            <icon type='pic-left' style={{ color: 'rgba(0,0,0,.25)' }} />
                                        }
                                    />
                                    <TextField
                                        type='text'
                                        label='Make'
                                        margin="dense"
                                        variant="outlined"
                                        type='text'
                                        required
                                        onChange={this.handleFieldChange}
                                        id='make'
                                        value={this.state.make}
                                        prefix={
                                            <icon type='pic-left' style={{ color: 'rgba(0,0,0,.25)' }} />
                                        }
                                    />
                                    <TextField
                                        type='text'
                                        label='Model'
                                        margin="dense"
                                        variant="outlined"
                                        type='text'
                                        required
                                        onChange={this.handleFieldChange}
                                        id='model'
                                        value={this.state.model}
                                        prefix={
                                            <icon type='pic-left' style={{ color: 'rgba(0,0,0,.25)' }} />
                                        }
                                    />
                                    <TextField
                                        type='text'
                                        label='Year'
                                        margin="dense"
                                        variant="outlined"
                                        type='text'
                                        required
                                        onChange={this.handleFieldChange}
                                        id='year'
                                        value={this.state.year}
                                        prefix={
                                            <icon type='pic-left' style={{ color: 'rgba(0,0,0,.25)' }} />
                                        }
                                    />
                                    <TextField
                                        type='text'
                                        label='Color'
                                        margin="dense"
                                        variant="outlined"
                                        type='text'
                                        required
                                        onChange={this.handleFieldChange}
                                        id='color'
                                        value={this.state.color}
                                        prefix={
                                            <icon type='pic-left' style={{ color: 'rgba(0,0,0,.25)' }} />
                                        }
                                    />
                                </div>

                                <div className='formField'>
                                    <Button
                                        className='login-form-button'
                                        startIcon={<SaveIcon />}
                                        variant="contained" size="small" color="primary"
                                        type='primary'
                                        disabled={this.state.loadingStatus}
                                        onClick={this.nextScreen}
                                        onClick={this.handleClick}
                                        icon='edit'
                                    >
                                        Confirm Changes
							</Button>
                                </div>
                            </form>
                        </CardContent>

                    </> : <>
                        <p>Screen two, Search for songs and add</p>
                    </>}
            </>
        )
    }
}
export default CreateNew;