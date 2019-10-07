import React, { Component } from 'react';

export default class AddTask extends Component {

    state = {
        label: ''
    };

    onLabelChange = (event) => {
        this.setState({
            label: event.target.value
        })
    };

    onSubmit = (event) => {
        event.preventDefault();
        this.props.addItem(this.state.label);
        this.setState({
            label: ''
        })
    };

    render() {

        return (
            <form
                className="btn-block"
                onSubmit={this.onSubmit}
            >
                <input
                    className="input"
                    placeholder="new task"
                    onChange={this.onLabelChange}
                    value={this.state.label}
                />
                <div
                    className="btn-add-task"
                    onClick={this.onSubmit}
                >add task</div>
            </form>
        )
    }
}