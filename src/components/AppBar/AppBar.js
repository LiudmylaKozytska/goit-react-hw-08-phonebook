import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { TfiPlus } from 'react-icons/tfi';
import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks';
import { Header, Button, Backdrop, AddContactIcon } from './AppBarStyles';
import { ContactForm } from 'components/ContactForm/ContactForm';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  const [modalOpen, setModalOpen] = useState(false);
  const location = useLocation();

  const handleClickOpen = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Header>
        <Navigation />
        {isLoggedIn ? (
          <>
            {location.pathname === '/contacts' && (
              <Button onClick={handleClickOpen}>Add new contact</Button>
            )}
            <UserMenu />
            {modalOpen && (
              <Backdrop onClick={handleClose}>
                <ContactForm onClose={handleClose} />
              </Backdrop>
            )}
          </>
        ) : (
          <AuthNav />
        )}
      </Header>
      {location.pathname === '/contacts' && (
        <AddContactIcon onClick={handleClickOpen}>
          <TfiPlus size={30} />
        </AddContactIcon>
      )}
    </>
  );
};
