import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './feedback.css';

class Form extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        name: '',
       message: '',
        email: ''
      };
    }

    componentWillReceiveProps(props) {
        this.setState(props);
    }
    handleEmailChange = (e) => {
      this.setState({
          email: e.target.value
          
      });
      console.log(e.target.value)
  }

    handleMessageChange = (e) => {
        this.setState({
            message: e.target.value
            
        });
        console.log(e.target.value)
    }

    handleNameChange = (e) => {
        this.setState({
            name: e.target.value
        });
        e.preventDefault();
        console.log(this.setState); 
    }

    handleSubmit = (e) => {
console.log(this.state);
        e.preventDefault();
        // this.props.onSubmit(this.state);
        const viewer = {
          name: this.state.name
        };
        axios.post(`https://jsonplaceholder.typicode.com/users`, { viewer })
      .then(res => {
        console.log(res);
        console.log(res.data);
        this.props.history.push("/home");
      })
    }

    render() {
        return (
            <form name="name" onSubmit={this.handleSubmit}>
                <div className="contact-box">
                    <span id="full-stop"></span><h1 id="contact">Contact</h1>
                    <span>
                        <input type="text"
                                   id="blog_post_name"
                                   required="required"
                                   value={this.state.name}
                                   onChange={this.handleNameChange}
                                   placeholder="name"
                            />
                    </span>
                    
                    <span >
                         <textarea type="text"
                                   id="blog_post_message"
                                 required="required"
                                   value={this.state.body}
                                   onChange={this.handleMessageChange}
                                   placeholder="message"
                           />
                    </span>
                   
                    <div >
                        <input type="email"
                                   id="blog_post_email"
                                   required="required"
                                   value={this.state.email}
                                   onChange={this.handleEmailChange}
                                   placeholder="email"
                                   />
                     </div>
                   
                     <div >
                            <button type="submit" id="contact_button">
                            Contact
                            </button>
                        </div>
                    
                </div>
                <Link to="/home"><div id="top">
               Home</div></Link>
              
            </form>
        );
    }
};

export default Form;

