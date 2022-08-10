import React, { Component } from 'react';
import './Counter.css';

class Counter extends Component {
    state = { 
        count: 1,
        log: 'logamundo'
    };
    
    render() { 
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                {/* the handleIncrement function is done this way just to test out passing a parameter */}
                <button onClick={() => this.handleIncrement(this.state.log)} className="bisque space btn btn-primary">Increment</button>
                <button onClick={this.handleDecrement} className={this.getHandleDecrementClasses()}>Decrement</button>
            </div>
        );
    }

    // badge
    getBadgeClasses() {
        let classes = "bisque space badge ";
        classes += (this.state.count === 0) ? "badge-warning" : "badge-secondary";
        return classes;
    }
    
    formatCount() {
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
    
    // increment
    handleIncrement = (log) => {
        console.log('y\'all been incremented');
        console.log(log)
        this.setState({ count: this.state.count + 1 });
    }
    
    // decrement
    handleDecrement = () => {
        if (this.state.count >= 1) {
            console.log('y\'all been decremented');
            this.setState({ count: this.state.count - 1 });
        }else{
            console.log('ain\'t no decrementing for you, cowboy');
        }
    }
    
    getHandleDecrementClasses() {
        let classes = "bisque space btn ";
        this.state.count >= 1 ? classes += "btn-danger" : classes += "btn-secondary";
        return classes;
    }
}

export default Counter;