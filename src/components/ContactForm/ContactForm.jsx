import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TfiClose } from 'react-icons/tfi';
import { addContact } from 'redux/contacts/operations';
import { getContacts } from 'redux/contacts/selectors';
import {
  alertContactInclude,
  alertAddContactSuccess,
} from 'components/Alert/Alert';
import { Label, FormIcon, CloseButton } from './ContactFormStyle';
import { Form, Input, Button } from 'components/LoginForm/LoginFormStyled';
import { ReactComponent as CallIcon } from '../icons/callIcon.svg';
import { ReactComponent as PersonIcon } from '../icons/personIcon.svg';
import { ModalStyle } from 'components/ModalStyle/ModalStyle';

export const ContactForm = ({ onClose }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

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

    onClose();
  };

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <Form onSubmit={handleSubmit} onClick={e => e.stopPropagation()}>
      <Label>
        <FormIcon>
          <PersonIcon
            width="20"
            height="20"
            fill="
#353540"
          ></PersonIcon>
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
          <CallIcon
            width="20"
            height="20"
            fill="
#353540"
          ></CallIcon>
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
      <CloseButton type="button" onClick={onClose}>
        <TfiClose size={30} />
      </CloseButton>
      <ModalStyle />
    </Form>
  );
};
