import React, { Component } from 'react';

export default class Header extends Component {

    render() {

        const { toDo, done } = this.props;

        return (
            <div className="header">
                <h1 className="app-header">My Todo List</h1>
                <span className="counter">{toDo} more to do, {done} done</span>
            </div>
        )
    }
}