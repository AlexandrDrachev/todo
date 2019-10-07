import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Header from './components/header/header';
import TodoList from './components/todolist/todolist';
import AddTask from './components/add-task/add-task';

class App extends Component {

    maxId = 100;

    state = {
        todoData: [
            this.createTodoItem('task 1'),
            this.createTodoItem('task 2'),
            this.createTodoItem('task 3')
        ],
        term: '',
        filter: 'all' //'all' 'active' 'done'
    };

    deleteItem = (id) => {
        this.setState( ({ todoData }) => {
            const idx = todoData.findIndex( (el) => el.id === id );
            const newArray = [
                ...todoData.slice(0, idx),
                ...todoData.slice(idx + 1)
            ];

            return {
                todoData: newArray
            }
        } )
    };

    createTodoItem(label) {
        return {
            label: label,
            important: false,
            done: false,
            id: this.maxId++
        }
    };

    addItem = (text) => {
        //generate id?
        //added element in array?
        const newItem = this.createTodoItem(text);
        this.setState( ({ todoData }) => {
            const newArr = [
                ...todoData,
                newItem
            ];
            return {
                todoData: newArr
            }
        } )
    };

    toggleProperty(arr, id, propName) {
        const idx = arr.findIndex((el) => el.id === id);
        const oldItem = arr[idx];
        const newItem = {...oldItem, [propName]: !oldItem[propName]};
        return [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1)
        ];
    }

    onToggleDone = (id) => {
       this.setState( ({ todoData }) => {
           return {
               todoData: this.toggleProperty(todoData, id, 'done')
           }
       } )
    };

    onToggleImportant = (id) => {
        this.setState( ({ todoData }) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'important')
            }
        } )
    };

    onSearchChange = (term) => {
        this.setState({ term })
    };

    onFilterChange = (filter) => {
        this.setState({ filter })
    };

    search(items, term) {
        if (term.length === 0) {
            return items;
        }
        return items.filter( (item) => {
            return item.label
                .toLowerCase()
                .indexOf(term.toLowerCase()) > -1
        } )
    };

    filter(items, filter) {
        switch(filter) {
            case 'all':
                return items;
            case 'active':
                return items.filter( (item) => !item.done);
            case 'done':
                return items.filter( (item) => item.done);
            default: return items
        }

    };

    render() {

        const { todoData, term, filter } = this.state;

        const visibleItems = this.filter(this.search(todoData, term), filter);
        const doneCount = todoData.filter( (el) => el.done ).length;
        const toDoCount = todoData.length - doneCount;

        return (
            <div className="todo">
                <Header toDo={toDoCount} done={doneCount} />
                <TodoList
                    todos={ visibleItems }
                    onDeleted={ this.deleteItem }
                    onToggleImportant={ this.onToggleImportant }
                    onToggleDone={ this.onToggleDone }
                    onSearchChange={this.onSearchChange}
                    filter={ filter }
                    onFilterChange={this.onFilterChange}
                />
                <AddTask addItem={ this.addItem } />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));


