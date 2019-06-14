import React, { Component } from 'react';

export default class CreateUser extends Component {
    constructor(props) {
        super(props);

        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            userName: ''
        }
    }
    onChangeUserName(e) {
        this.setState({
            userName: e.target.value
        })
    }
    onSubmit(e) {
        e.preventDefault();

        const user = {
            userName: this.state.userName,
        }
        console.log(user)

        this.setState({
            userName: ''
        })
    }
    render() {
        return (
            <div>
                <h3>Create New Exercise Log</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username: </label>
                        <input type="text" required className="form-control" value={this.state.userName} onChange={this.onChangeUserName} />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create User" className="btn btn-primary">
                        </input>
                    </div>
                </form>
            </div >
        )
    }
}