import React, { Component } from 'react';

export default class OneTask extends Component {

    render() {
        const { label, onDeleted, onToggleImportant, onToggleDone, important, done } = this.props;
        let classNames = 'span';
        if (done) {
            classNames += '-done'
        }

        if (important) {
            classNames += '-important'
        }

        return (
            <div className="one-task">
                <span
                    className={ classNames }
                    onClick={ onToggleDone }
                >{label}</span>
                <div className="options">
                    <img
                        className="img-task"
                        alt="important"
                        src="images/important_32_32.png"
                        onClick={ onToggleImportant }
                    />
                    <img
                        className="img-task"
                        alt="delete"
                        src="images/edit-delete_32_32.png"
                        onClick={onDeleted}
                    />
                </div>
            </div>
        )
    }
};