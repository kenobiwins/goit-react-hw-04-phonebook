import PropTypes from 'prop-types';
import { Component } from 'react';
import { Form, Label, Input } from './PhonebookForm.styled';
import { Button } from 'BaseStyles/BaseStyles.styled';

export class PhonebookForm extends Component {
  state = {
    name: '',
    number: '',
  };

  static propTypes = {
    onSubmit: PropTypes.func,
  };

  handleInput = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  submitForm = e => {
    e.preventDefault();
    const { onSubmit } = this.props;
    // const checkState = onSubmit(this.state);
    if (onSubmit(this.state) === null) {
      return;
    } else {
      this.reset();
    }
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <Form onSubmit={this.submitForm} autoComplete="off">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={this.handleInput}
          value={name}
        />
        <Label htmlFor="number">Number</Label>
        <Input
          id="number"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={this.handleInput}
          value={number}
        />
        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}
