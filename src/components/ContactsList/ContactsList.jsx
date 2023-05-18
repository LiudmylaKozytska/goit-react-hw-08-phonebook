import { useSelector } from 'react-redux';
import { ContactItem } from 'components/ContactItem/ContactItem';
import {
  getContacts,
  getError,
  getIsLoading,
  getFilter,
} from 'redux/contacts/selectors';
import { List } from './ContactListStyle';
import { selectVisibleContacts } from 'redux/contacts/selectors';

export const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const visibleContacts = useSelector(state =>
    selectVisibleContacts(state, contacts, filter)
  );

  return (
    <List>
      {isLoading && !error && <b>Loading...</b>}
      {error && <p>Oops, something went wrong</p>}
      {visibleContacts.map(({ id, name, number, onClick }) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          number={number}
          onClick={() => onClick(id)}
        />
      ))}
    </List>
  );
};
