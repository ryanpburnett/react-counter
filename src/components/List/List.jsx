import React, { Component } from 'react';
import './List.css';

class List extends Component {
    state = { 
        breakfast: ['Pancakes', 'Waffles', 'Churros'],
    }
    
    render() { 
        return (
            <div>
                <button onClick={this.addListItem} className="bisque space btn btn-primary">Add List Item</button>
                <input id="addItemInput" type="text" />
                <ul>
                    {this.renderList()}
                </ul>
            </div>
        );
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

        let addItemInput = document.getElementById("addItemInput");
        let { breakfast } = this.state;

        addItemInput.value !== "" ? breakfast.push(addItemInput.value) : alert("List item can't be blank");
        addItemInput.value = "";
        this.setState({ breakfast });
    }

}

export default List;