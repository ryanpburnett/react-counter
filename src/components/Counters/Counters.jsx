import React, { Component } from 'react';
import Counter from '../Counter/Counter';
import './Counters.css'

class Counters extends Component {
    state = { 
        counters: [
            { id: 1, value: 0 },
            { id: 2, value: 4 },
            { id: 3, value: 1 },
            { id: 4, value: 2 },
        ]
    }

    handleDelete = (counterId) => {
        console.log('delete handled', counterId);

    }

    render() { 
        return (
            <div>
                { this.state.counters.map(counter => (
                    // "key" is reserved for React, and "value" and "onDelete" are props passed to the child Counter component
                    <Counter 
                        key={counter.id} 
                        id={counter.id} 
                        value={counter.value} 
                        onDelete={this.handleDelete}>
                        {/* when content is rendered in the component, it is passed to the child through props */}
                        <p>#{counter.id}</p>
                        <p>-----------------------------------------------------------------------------------</p>
                    </Counter>
                ))}
            </div>
        );
    }
}
 
export default Counters;