import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Form, Input, Button } from 'components/LoginForm/LoginFormStyled.js';
import { ModalStyle } from 'components/ModalStyle/ModalStyle';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Input type="text" name="name" placeholder="username" />
      <Input type="email" name="email" placeholder="e-mail" />
      <Input type="password" name="password" placeholder="password" />
      <Button type="submit">Sign In</Button>
      <ModalStyle />
    </Form>
  );
};
