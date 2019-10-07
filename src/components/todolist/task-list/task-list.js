import React, { Component } from 'react';
import OneTask from './one-task/one-task';

export default class TaskList extends Component {


    render() {

        const { todos, onDeleted, onToggleImportant, onToggleDone } = this.props;
        const elements = todos.map( (item) => {
            return (
                <OneTask
                    { ...item }
                    key={item.id}
                    onDeleted={ () => onDeleted(item.id) }
                    onToggleImportant={ () => onToggleImportant(item.id)  }
                    onToggleDone={ () => onToggleDone(item.id)  }
                />)
        });

        return (
            <div className="task-list">
                { elements }
            </div>
        )
    }
}