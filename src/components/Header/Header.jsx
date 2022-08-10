import React, { Component } from 'react';
import './Header.css';

class Header extends Component {

    render() { 
        return (
            <div>
                <img src="./favicon.ico" alt="logo" id="atom" className="headerSpace" onMouseOver={this.break}/>
                <p id="oops"></p>
                <button id="headerButton" className="btn-warning headerSpace" onClick={this.fix}>fix</button>
            </div>
        );
    }

    break() {
        let atom = document.getElementById("atom");
        let oops = document.getElementById("oops");
        let button = document.getElementById("headerButton");

        atom.style.rotate = "20deg";
        oops.style.display = "inline";
        oops.innerText = "You knocked it over!"
        button.style.display = "inline";
    }

    fix() {
        let atom = document.getElementById("atom");
        let oops = document.getElementById("oops");
        let button = document.getElementById("headerButton");

        atom.style.rotate = "0deg";
        oops.innerText = "whew...";
        button.style.display = "none";
        setTimeout(
            function() {
                oops.style.display = "none"
            }, 3000
        )
    }
}

export default Header;