import React from 'react';
import './works.css';
import {Link} from 'react-router-dom';
import futo from '../pictures/FUTO-LOGO.jpg'; 
import niit from '../pictures/NIIT-Logo.jpg'; 
import genesys from '../pictures/genesys-logo.png'; 

class Works extends React.Component { 
   
    render() {
      return (
        <div className="all"> 
            <div className="brief">
                I have worked closely with Product designers and
                developers, devloping projects in providing tech
                solutions. 
            </div>
            <div className="ash"></div>

            <div className="black1">
                 <img src={futo} alt=""/>
                 <h6>B.Tech Imformation Managment Technology</h6> 
                 <p>May 2018 - Oct 2018</p>
            </div>

            <div className="ash1"></div>
            
            <div className="meet"><Link to="/feedback">
            <div className="meet">Contact</div> 
            </Link></div> 

            <div className="black2">
                <img src={niit} alt=""/>
                <h6>Front-Desk Consultant<br/>(Intern):</h6> 
                 <p>May 2018 - Oct 2018</p>
            </div>
            
            <div className="ash2"></div>
            
            <div className="black3">
                <img src={genesys} alt=""/>
                 <h6>Front-End Software Developer<br/>(Intern):</h6> 
                 <p>May 2018 - Oct 2018</p>
            </div> 
         </div>
      )
    }
  }


export default Works;   