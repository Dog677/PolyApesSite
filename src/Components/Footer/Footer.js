import React, { Component } from 'react';
import './Footer.css';
import {SocialItems} from './SocialItems';

class Footer extends Component {
    render() { 
        return (<div className='footer'>
            
                      {SocialItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.link}>
                  
                </a>
                </li>
            );
        
    })}
    </div>
          );
}
}
 
export default Footer;