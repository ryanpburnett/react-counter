import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        count: 0, 
        pancakes: 'https://static.onecms.io/wp-content/uploads/sites/43/2022/02/16/21014-Good-old-Fashioned-Pancakes-mfs_001.jpg'
    };

    render() { 
        return (
            <div>
                <img className="small" src={this.state.pancakes} alt="" />
                <span>{this.formatCount()}</span>
                <button>Increment</button>
            </div>
        );
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
}
 
export default Counter;