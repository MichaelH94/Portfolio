import React, { Component } from 'react';
import axios from 'axios';
import { Form } from 'react-bootstrap';
import './contact.css';

class Contact extends Component {
    handleSubmit(e){
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        axios({
            method: "POST", 
            url:"http://mjh-portfolio.herokuapp.com/send", 
            data: {
                name: name,   
                email: email,  
                messsage: message
            }
        }).then((response)=>{
            if (response.data.msg === 'success'){
                alert("Message Sent."); 
                this.resetForm()
            }else if(response.data.msg === 'fail'){
                alert("Message failed to send.")
            }
        })
    }

    resetForm(){
        document.getElementById('contact-form').reset();
    }

    render(){
        return (
            <div className="Contact">
            <Form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
            <div className="form-group">
                <Form.Label for="name">Name</Form.Label>
                <input type="text" className="form-control" id="name" />
            </div>
            <div className="form-group">
                <Form.Label for="exampleInputEmail1">Email</Form.Label>
                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
            </div>
            <div className="form-group">
                <Form.Label for="message">Message</Form.Label>
                <textarea className="form-control" rows="5" id="message"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            </Form>
            </div>
          );
    }
}

export default Contact;