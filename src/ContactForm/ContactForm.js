import React from 'react';
import * as emailjs from 'emailjs-com';

import { Button, FormFeedback, Form, FormGroup, Label, Input } from 'reactstrap';

import SimpleReactValidator from 'simple-react-validator';

class ContactForm extends React.Component {
  state = {
    name: '',
    email: '',
    subject: '',
    message: '',
  }
handleSubmit(e) {
    e.preventDefault()
    const { name, email, subject, message } = this.state
    let templateParams = {
      from_name: email,
      to_name: 'fran001.test001@gmail.com',
      subject: subject,
      message_html: message,
     }
     emailjs.send(
      'gmail',
      'template_hEmmNklR',
       templateParams,
      'user_Blhjol4eDObs7zbNluxq3'
     )
    
  alert('THANK YOU FOR YOUR MESSAGE')
  // form is valid! We can parse and submit data
     this.resetForm()
 }
resetForm() {
    this.setState({
      name: '',
      email: '',
      subject: '',
      message: '',
    })
  }
handleChange = (param, e) => {
    this.setState({ [param]: e.target.value })
  }


render() {
    return (
      
        <div className="ContactForm">
          <h1 className="p-heading1">Get in Touch</h1>
          <Form onSubmit={this.handleSubmit.bind(this)}>
            <FormGroup controlId="formBasicEmail">
              <Label className="text-muted">Email address</Label>
              <Input
                type="email"
                name="email"
                value={this.state.email}
                className="text-primary"
                onChange={this.handleChange.bind(this, 'email')}
                placeholder="Enter email"
                required
              />
            </FormGroup>
<FormGroup controlId="formBasicName">
              <Label className="text-muted">Name</Label>
              <Input
                type="text"
                name="name"
                value={this.state.name}
                className="text-primary"
                onChange={this.handleChange.bind(this, 'name')}
                placeholder="Name"
                required
              />
            </FormGroup>

<FormGroup controlId="formBasicMessage">
              <Label className="text-muted">Message</Label>
              <Input
                type="textarea"
                name="message"
                className="text-primary"
                value={this.state.message}
                onChange={this.handleChange.bind(this, 'message')}
                required
              />
            </FormGroup>
<Button variant="primary" type="submit" >
              Submit
            </Button>
          </Form>
        </div>
      
    )
  }
}
export default ContactForm