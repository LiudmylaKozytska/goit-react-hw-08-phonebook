import { useState } from 'react';
import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks';
import { Header, Button, Backdrop } from './AppBarStyles';
import { ContactForm } from 'components/ContactForm/ContactForm';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  const [modalOpen, setModalOpen] = useState(false);

  const handleClickOpen = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  return (
    <Header>
      <Navigation />
      {isLoggedIn ? (
        <>
          <Button onClick={handleClickOpen}>Add new contact</Button>
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
  );
};
