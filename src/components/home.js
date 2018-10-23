import React from 'react';
import {Link} from 'react-router-dom';
import './home.css';
import Group3 from '../pictures/Group3.png'; 
import Group3a from '../pictures/Group3a.png';
import Group3b from '../pictures/Group3b.png';

class Home extends React.Component {  
   
    render() {
      return (
        <div className="flip">
            <div className="shapes">
                <ul>
                    <li className="shape0"/> 
                    <li className="shape1"/> 
                    <li className="shape2"/> 
                    <li className="shape3"/> 
                </ul> 
            </div> 
            <div className="contact"><Link to="/feedback">CONTACT</Link></div> 
            <div className="name">Jacinta Chianumba</div>  
            <div className="about"> 
                I am a Front-end software Developer, currently a student at
                Federal University of Technology, Owerri. I am passionate about
                creating solutions to problems in my community using Technology.
            </div> 
            <div className="skills">
               
                    <div className="shape"></div> 
                    <div>Other skills</div>
                
            </div> 
            <div className="skills1">
                <img src={Group3} alt="Group3"/>
                <p>Brand Identity</p>
            </div> 
            <div className="skills2">
                <img src={Group3a} alt=""/>
                <p>Digital Marketting</p>
            </div> 
            <div className="skills3">
                 <img src={Group3b} alt=""/>
                <p>Drawing</p>
            </div> 
            <div className="learn">
            <Link to="/about"><span className="learn">
               Learn <br/>More
           </span></Link>
            </div>
         </div>
      )
    }
  }


export default Home;