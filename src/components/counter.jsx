// break this into multiple components

import React, { Component } from 'react';
import './counter.css';

class Counter extends Component {
    state = { 
        count: 1,
        breakfast: ['Pancakes', 'Waffles', 'Churros'],
    };
    
    render() { 
        return (
            <div>
                <img src="./favicon.ico" alt="logo" className="space"/>
                <br />
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={this.handleIncrement} className="bisque space btn btn-primary">Increment</button>
                <button onClick={this.handleDecrement} className={this.getHandleDecrementClasses()}>Decrement</button>
                <button onClick={this.addListItem} className="bisque space btn btn-primary">Add List Item</button>
                <input id="addItemInput" type="text" />
                <ul>
                    {this.renderList()}
                </ul>
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
    handleIncrement = () => {
        console.log('y\'all been incremented');
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
    
    // list
    renderList() {
        let { breakfast } = this.state;
        if (breakfast.length === 0) {
            return <p>No items in list</p>;
        }else{
            let key = 0;
            return breakfast.map(item => <li key={key++}>{item}</li>);
        }
    }
    
    addListItem = () => {
        console.log("item added lol");
        // the remainder of the code in this method needs refactoring- perhaps use this.setState()?
        let addItemInput = document.getElementById("addItemInput");
        let { breakfast } = this.state;
        console.log(addItemInput.value);
        addItemInput.value !== "" ? breakfast.push(addItemInput.value) : alert("List item can't be blank");
        addItemInput.value = "";
        this.renderList();
    }

}

export default Counter;