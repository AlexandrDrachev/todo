import React, { Component } from 'react'

export default class StatusFilter extends Component {

    state = {

    };

    buttons = [
        {name: 'btn-status-all', label: 'all'},
        {name: 'btn-status-active', label: 'active'},
        {name: 'btn-status-done', label: 'done'}
    ];

    render() {

        const { filter, onFilterChange } = this.props;

        const buttons = this.buttons.map( ({name, label}) => {
            const isActive = filter === label;
            const clazz = isActive ? `${name}-active` : name;
            return (
                <button
                    className={clazz}
                    key={name}
                    onClick={() => onFilterChange(label)}
                >{label}</button>
            )
        });

        return (
            <div className="status-filter">
                { buttons }
            </div>
        )
    }
}