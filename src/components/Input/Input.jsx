import { Formik } from 'formik';
import { Component } from 'react';
import { Form, Input, Button, Text } from './Input.styled';
export default class ImputForm extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };
  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  };
  
  render() {
    <form>
      <h2>Phonebook</h2>
    </form>
  }

}

