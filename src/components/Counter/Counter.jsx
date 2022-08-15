import React, { Component } from 'react';
import './Counter.css';

class Counter extends Component {
    state = { 
        // passing "value" from parent Counters component
        value: this.props.value,
        log: 'logamundo'
    };
    
    render() { 
        return (
            <div>
                {/* this is being used to bring in props from the Counters component */}
                {this.props.children[0]}  
                <span 
                    className={this.getBadgeClasses()}>{this.formatCount()}</span>
                {/* the handleIncrement function is done this way just to test out passing a parameter */}
                <button 
                    onClick={() => this.handleIncrement(this.state.log)} 
                    className="bisque space btn btn-primary">Increment</button>
                <button 
                    onClick={this.handleDecrement} 
                    className={this.getHandleDecrementClasses()}>Decrement</button>
                <button 
                    onClick={() => this.props.onDelete(this.props.id)} 
                    className="space btn btn-sm btn-danger">BOOM</button>
                {this.props.children[1]} 
            </div>
        );
    }

    // badge
    getBadgeClasses() {
        let classes = "bisque space badge ";
        classes += (this.state.value === 0) ? "badge-warning" : "badge-secondary";
        return classes;
    }
    
    formatCount() {
        const { value } = this.state;
        return value === 0 ? 'Zero' : value;
    }
    
    // increment
    handleIncrement = (log) => {
        console.log('y\'all been incremented');
        console.log(log)
        this.setState({ value: this.state.value + 1 });
    }
    
    // decrement
    handleDecrement = () => {
        if (this.state.value >= 1) {
            console.log('y\'all been decremented');
            this.setState({ value: this.state.value - 1 });
        }else{
            console.log('ain\'t no decrementing for you, cowboy');
        }
    }
    
    getHandleDecrementClasses() {
        let classes = "bisque space btn ";
        this.state.value >= 1 ? classes += "btn-info" : classes += "btn-secondary";
        return classes;
    }
}

export default Counter;