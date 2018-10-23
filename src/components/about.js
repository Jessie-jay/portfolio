import React from 'react';
import './about.css';
import {Link} from 'react-router-dom';
// import './home.css';
import pic3 from '../pictures/pic3.jpeg'; 
import pic1 from '../pictures/pic1.jpg'; 
import pic2 from '../pictures/github.jpg'; 
import at from '../pictures/at.png'; 
import github2 from '../pictures/github2.png';
import linked from '../pictures/linkedin.png';
import twitter from '../pictures/twitter.png'; 
import facebook from '../pictures/facebook.jpg'; 

class About extends React.Component { 
   
    render() {
      return (
        <div className="contain">

            <div className="pic1">
              <img src={pic1} alt=""/>
            </div> 

            <div className="facebook">
              <a href="https://www.facebook.com/jessie.chianumba"><img src={facebook} alt="facebook"/> </a>
            </div> 

            <div className="at">
            <a href="mailto:jacintachianumba@gmail.com?subject=Mail from My Portforlio">
                <img src={at} alt=""/> 
            </a>
              
            </div> 

            <div className="internet">
            
                <a href="https://github.com/Jessie-jay">
                <img src={github2} alt=""/> </a>
            </div> 
            <div className="twitter">
            <a href="https://twitter.com/messages/compose?recipient_id=960034212580593664&ref_src=twsrc%5Etfw"
            class="twitter-dm-button" data-screen-name="JacintaChianum1"
            data-show-count="false"><img src={twitter} alt="message"/> 
            {/* Message @JacintaChianum1 */}
            </a><script async
            src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                
            </div> 
            <div className="pic2">
               <img src={pic2} alt=""/> 
            </div> 
            <div className="pic3">
              <img src={pic3} alt=""/>
            </div> 
            <div className="blank2"></div> 
            <div className="linkedin">
            <div class="LI-profile-badge"  data-version="v1"
            data-size="medium" data-locale="en_US" data-type="horizontal"
            data-theme="light" data-vanity="jacinta-chianumba-659240155"><a class="LI-simple-link"
            href='https://ng.linkedin.com/in/jacinta-chianumba-659240155?trk=profile-badge'>
            <img src={linked} alt=""/>
            </a></div>
            </div> 
            <div className="work"><Link to="/works">
            <div className="work"> Work</div> 
            </Link></div> 
            <div className="blank3"></div> 
            
         </div>
      )
    }
  }


export default About;