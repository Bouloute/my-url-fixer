import React, { Component } from 'react';

export default class UrlParser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            result: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        let newUrl = this.state.value.replace('Bouloute', 'learn-co-students').replace('online-web-pt-120919', 'onl01-seng-pt-030220')
        this.setState({result: newUrl});

        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <label>
                Bad Url:
                <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" /><br></br>
            <a href={this.state.result}>{this.state.result}</a>
            </form>
        );
    }
}

/* Example link 
https://github.com/Bouloute/redux-thunk-lab-online-web-pt-120919
*/