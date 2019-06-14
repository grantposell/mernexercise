import React, { Component } from 'react';

export default class CreateExercise extends Component{
    constructor(props){
        super(props);

        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            userName: '',
            description: '',
            duration: 0,
            date: new Date(),
            users: []
        }
    }
    componentDidMount(){
        this.setState({
            users: ['test user'],
            userName: 'test user'
        })
    }

    onChangeUserName(e){
        this.setState({
            userName: e.target.value
        })
    }
    onChangeDescription(e){
        this.setState({
            description: e.target.value
        })
    }
    onChangeDuration(e){
        this.setState({
            duration: e.target.value
        })
    }
    onChangeDate(e){
        this.setState({
            date: date
        })
    }
    onSubmit(e){
        e.preventDefault();

        const exercise = {
            userName: this.state.userName,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date
        }
        console.log(exercise)
        window.location = '/';
    }

    render() {
        return (
            <div>
                <p>You are on the Create exercise Component</p>
            </div>
        )
    }
}