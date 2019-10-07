import  React, { Component } from 'react';
import TaskList from './task-list/task-list';
import StatusFilter from './status-filter/status-filter';

export default class TodoList extends Component {

    state = {
        term: ''
    };

    onSearchChange = (event) => {
        const term = event.target.value;
        this.setState({ term });
        this.props.onSearchChange(term);
    };

    render() {

        const { todos, onDeleted, onToggleImportant, onToggleDone, filter, onFilterChange } = this.props;

        return (
            <div className="todo-list">
                <input
                    className="input"
                    placeholder="search task"
                    value={this.state.term}
                    onChange={this.onSearchChange}
                />
                <TaskList
                    todos={ todos }
                    onDeleted={onDeleted}
                    onToggleImportant={onToggleImportant}
                    onToggleDone={onToggleDone}
                />
                <StatusFilter
                    filter={filter}
                    onFilterChange={onFilterChange}
                />
            </div>
        )
    }
}