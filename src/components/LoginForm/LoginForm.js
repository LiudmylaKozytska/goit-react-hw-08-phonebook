import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

import { Form, Input, Button } from './LoginFormStyled';
import { ModalStyle } from 'components/ModalStyle/ModalStyle';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Input type="email" name="email" placeholder="e-mail" />
      <Input type="password" name="password" placeholder="password" />
      <Button type="submit">Log In</Button>
      <ModalStyle />
    </Form>
  );
};
