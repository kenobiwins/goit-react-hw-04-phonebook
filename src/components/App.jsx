import { nanoid } from 'nanoid';
import { Component } from 'react';
// import { ToastContainer, toast } from 'react-toastify';

import { PhonebookForm } from './PhonebookForm/PhonebookForm';
import { Section } from './Section/Section';
import { Filter } from './Filter/Filter';
import { ContactsList } from './ContactsList/ContactsList';

// import 'react-toastify/dist/ReactToastify.css';

const LOCAL_STORAGE_KEY = 'contacts';

export class App extends Component {
  state = {
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Larry Copeland', number: '287-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const localData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // if (localData === null || localData.length === 0) {
    //   // return this.notify();
    //   return;
    // }
    // if (localData.length > 0 || localData !== null) {
    //   this.setState({ contacts: [...localData] });
    //   return;
    // }
    if (localData) {
      return this.setState({ contacts: [...localData] });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (prevState.contacts !== contacts) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    }
  }

  // notify = () => {
  //   return toast('Your phonebook is empty, add some contact.');
  // };

  handleDelete = id => {
    const newArr = this.state.contacts.filter(el => {
      return el.id !== id;
    });

    this.setState(prevState => {
      return { contacts: [...newArr] };
    });
  };

  handleFilterInput = e => {
    const { value } = e.currentTarget;
    this.setState({
      filter: value,
    });
  };

  handleSubmit = state => {
    const { name, number } = state;

    const user = {
      id: nanoid(),
      name,
      number,
    };
    const usersInclude = this.state.contacts.some(el => el.name === name);

    if (usersInclude) {
      alert(`${name} is already in contacts`);
      return null;
    }
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, user],
      };
    });
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(el => {
      return el.name.toLowerCase().includes(filter.toLowerCase().trim());
    });
  };

  // resetFilter = () => {
  //   this.setState({ filter: '' });
  // };

  render() {
    const { filter } = this.state;

    return (
      <>
        {/* <ToastContainer /> */}
        <Section majorTitle={'Phonebook'}>
          <PhonebookForm onSubmit={this.handleSubmit} />
        </Section>

        <Section title={'Contacts'}>
          <Filter
            handlerFilterInput={this.handleFilterInput}
            filterValue={filter}
          />
          <ContactsList
            contacts={this.filterContacts()}
            deleteData={this.handleDelete}
          />
        </Section>
      </>
    );
  }
}
