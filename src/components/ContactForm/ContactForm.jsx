import React, { Component } from 'react';
import s from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    phone: '',
  };
  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      phone: '',
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={s.form}>
        <input
          className={s.input}
          type="text"
          name="name"
          required
          placeholder="Enter Name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input
          className={s.input}
          type="text"
          name="phone"
          required
          placeholder="Enter Phone"
          value={this.state.phone}
          onChange={this.handleChange}
        />
        <button className={s.btn}>Add contact</button>
      </form>
    );
  }
}

export default ContactForm;
