import React, { Component } from 'react';
import Counter from '../Counter/Counter';

class Counters extends Component {
    state = { 
        counters: [
            { id: 1, value: 0 },
            { id: 2, value: 4 },
            { id: 3, value: 1 },
            { id: 4, value: 2 },
        ]
    } 

    render() { 
        return (
            <div>
                { this.state.counters.map(counter => (
                    // "key" is reserved for React, and "value" and "selected" are props passed to the child Counter component
                    <Counter key={counter.id} value={counter.value} selected={true} />
                ))}
            </div>
        );
    }
}
 
export default Counters;