import React, { Component } from 'react';
import './counter.css';

class Counter extends Component {
    state = { 
        count: 1,
        breakfast: ['Pancakes', 'Waffles', 'Churros']
    };

    render() { 
        return (
            <div>
                <img src="./favicon.ico" alt="logo" />
                <br />
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={this.handleIncrement} className="bisque space btn btn-primary">Increment</button>
                <button onClick={this.handleDecrement} className={this.getHandleDecrementClasses()}>Decrement</button>
                <ul>
                    {this.renderList()}
                </ul>
            </div>
        );
    }

    handleIncrement = () => {
        console.log('y\'all been incremented');
        this.setState({ count: this.state.count + 1 });
    }

    handleDecrement = () => {
        if (this.state.count >= 1) {
            console.log('y\'all been decremented')
            this.setState({ count: this.state.count - 1 });
        }else{
            console.log('ain\'t no decrementing for you, cowboy');
        }
    }

    getHandleDecrementClasses() {
        let classes = "bisque space btn ";
        this.state.count >= 1 ? classes += "btn-secondary" : classes += "btn-disabled";
        return classes;
    }

    renderList() {
        let { breakfast } = this.state;
        if (breakfast.length === 0) {
            return <p>No items in list</p>;
        }else{
            return breakfast.map(item => <li key={item}>{item}</li>)
        }
    }

    getBadgeClasses() {
        let classes = "bisque space badge ";
        classes += (this.state.count === 0) ? "badge-warning" : "badge-secondary";
        return classes;
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
}
 
export default Counter;