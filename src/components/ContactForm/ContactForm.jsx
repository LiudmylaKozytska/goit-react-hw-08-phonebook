import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { getContacts } from 'redux/contacts/selectors';
import {
  alertContactInclude,
  alertAddContactSuccess,
} from 'components/Alert/Alert';
import {
  TabletContainer,
  Title,
  Input,
  Button,
  Label,
  FormIcon,
} from './ContactFormStyle';
import { ReactComponent as CallIcon } from '../icons/callIcon.svg';
import { ReactComponent as PersonIcon } from '../icons/personIcon.svg';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  // const handleNameChange = event => {
  //   setName(event.currentTarget.value);
  // };

  // const handleNumberChange = event => {
  //   setNumber(event.currentTarget.value);
  // };

  const handleChange = e => {
    const { name, value } = e.target;
    name === 'name' ? setName(value) : setNumber(value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const contactObj = {
      name,
      number,
    };

    const contactIncludes = contacts.some(
      contact => contact.name === contactObj.name
    );

    if (contactIncludes) {
      alertContactInclude(contactObj.name);
      return;
    } else {
      alertAddContactSuccess(contactObj.name);
    }

    dispatch(addContact(contactObj));
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Title>Phonebook</Title>
      <TabletContainer>
        <Label>
          <FormIcon>
            <PersonIcon width="20" height="20" fill="#0D161B"></PersonIcon>
          </FormIcon>
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            placeholder="Type name"
            value={name}
            onChange={handleChange}
            required
          />
        </Label>
        <Label>
          <FormIcon>
            <CallIcon width="20" height="20" fill="#0D161B"></CallIcon>
          </FormIcon>
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            placeholder="Type number"
            required
            value={number}
            onChange={handleChange}
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </TabletContainer>
    </form>
  );
};
