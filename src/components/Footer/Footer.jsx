import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    state = {
        signature: '-RPB'
    } 

    render() { 
        return (
            <div>
                <p id="sig" className='space'>{this.state.signature}</p>
            </div>
        );
    }
}
 
export default Footer;