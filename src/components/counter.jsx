import React, { Component } from 'react';
import './counter.css';

class Counter extends Component {
    state = { 
        count: 1,
        list: ['Pancakes', 'Waffles', 'Churros']
    };

    render() { 
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button className="space btn btn-primary">Increment</button>
                <ul>
                    {this.state.list.map(item => <li key={item}>{item}</li>)}
                </ul>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "space badge ";
        classes += (this.state.count === 0) ? "badge-warning" : "badge-secondary";
        return classes;
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
}
 
export default Counter;