import React, { Component } from 'react';
import './Header.css';

class Header extends Component {

    render() { 
        return (
            <div>
                <img src="./favicon.ico" alt="logo" id="atom" className="headerSpace" onMouseOver={this.break}/>
                <p id="oops"></p>
                <button id="button" className="btn-warning headerSpace" onClick={this.fix}>fix</button>
            </div>
        );
    }

    break() {
        let atom = document.getElementById("atom");
        let oops = document.getElementById("oops");
        let button = document.getElementById("button");

        atom.style.rotate = "20deg";
        oops.style.display = "inline";
        oops.innerText = "You knocked it over!"
        button.style.display = "inline";
    }

    fix() {
        let atom = document.getElementById("atom");
        let oops = document.getElementById("oops");
        let button = document.getElementById("button");

        atom.style.rotate = "0deg";
        oops.innerText = "whew...";
        button.style.display = "none";
    }



}

export default Header;