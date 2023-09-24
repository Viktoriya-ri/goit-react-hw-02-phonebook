import React, {Component} from "react";
import Input from "./Input/Input";
import Contacts from "./ContactList/Contacts";
import Filter from './Filter/Filter';
import { MainContainer,MainTitle,SecondaryTitle } from './App.styled';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: ''
  }

  addContact = (contact) => {
    const isExist = this.state.contacts.some(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    );
    if (isExist) {
      alert(`${contact.name} is already in contacts.`);
      return;
  }
    this.setState((prevState) => ({
      contacts: [contact, ...prevState.contacts]
    }));
  };

  deleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id)
    }));
  };

  setFilter = (filterValue) => {
    this.setState({
      filter: filterValue
    });
  };

  filteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }

  render() {
    const { contacts, filter } = this.state;

    return (
      <MainContainer>
        <MainTitle>Phonebook</MainTitle>
        <Input addContact={this.addContact} contacts={contacts} />

        <SecondaryTitle>Contacts</SecondaryTitle>
        <Filter filter={filter} setFilter={this.setFilter} />
        <Contacts contacts={this.filteredContacts()} deleteContact={this.deleteContact} />
      </MainContainer>
    );
  }
}

export default App;
