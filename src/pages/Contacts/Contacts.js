import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { FilterContacts } from 'components/Filter/Filter';
import { fetchContacts } from 'redux/contacts/operations';
import { getIsLoading } from 'redux/contacts/selectors';
import { Tittle, ContactsSection, Image } from 'pages/Contacts/ContactsStyled';
import woman from 'images/woman.webp';
import { LinearProgress } from '@mui/material';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ContactsSection>
      <div>
        <Helmet>
          <Tittle>Your contacts</Tittle>
        </Helmet>
        <FilterContacts />
        {isLoading ? <LinearProgress /> : <ContactsList />}
      </div>
      <Image src={woman} alt="woman with phone" />
    </ContactsSection>
  );
};

export default Contacts;
