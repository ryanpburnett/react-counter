import React, { Component } from 'react';
import './Header.css';

class Header extends Component {

    render() { 
        return (
            <div>
                <img src="./favicon.ico" alt="logo" id="atom" className="headerSpace" onMouseOver={this.animate}/>
                <p id="oops">You knocked it over!</p>
            </div>
        );
    }

    animate() {
        let atom = document.getElementById("atom");
        let oops = document.getElementById("oops");

        atom.style.rotate = "20deg";
        oops.style.display = "inline";
    }

}

export default Header;