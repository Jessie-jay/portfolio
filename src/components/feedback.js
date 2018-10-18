import React from 'react';
import axios from 'axios';
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
                                   placeholder="Name"
                            />
                    </span>
                    
                    <span >
                         <input type="text"
                                   id="blog_post_message"
                                 required="required"
                                   value={this.state.body}
                                   onChange={this.handleMessageChange}
                                   placeholder="Message"
                           />
                    </span>
                   
                    <div >
                        <input type="email"
                                   id="blog_post_email"
                                   required="required"
                                   value={this.state.email}
                                   onChange={this.handleEmailChange}
                                   placeholder="Email"
                                   />
                     </div>
                   
                     <div >
                            <button type="submit" id="contact_button">
                            Contact
                            </button>
                        </div>
                    
                </div>
                <a href="/home"><div id="top">
                <i className="up"></i>
               Home</div></a>
            </form>
        );
    }
};

export default Form;

