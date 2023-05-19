import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

import {
  Form,
  Input,
  Button,
  StyledComponent,
  Ellipse,
  EllipseGroup,
  EllipseGroupSecond,
  EllipseGroupThird,
  StyledLines,
  FirstLine,
  SecondLine,
  ThirdLine,
  FourLine,
} from 'components/LoginForm/LoginFormStyled.js';

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
      <Input type="password" name="password" pattern="password" />
      <Button type="submit">Register</Button>
      <StyledComponent>
        <Ellipse /> <Ellipse /> <Ellipse /> <Ellipse />
        <EllipseGroup>
          <Ellipse /> <Ellipse />
          <Ellipse /> <Ellipse />
        </EllipseGroup>
        <EllipseGroupSecond>
          <Ellipse /> <Ellipse />
          <Ellipse /> <Ellipse />
        </EllipseGroupSecond>
        <EllipseGroupThird>
          <Ellipse /> <Ellipse />
          <Ellipse /> <Ellipse />
        </EllipseGroupThird>
      </StyledComponent>
      <StyledLines>
        <FirstLine></FirstLine>
        <SecondLine></SecondLine>
        <ThirdLine></ThirdLine>
        <FourLine></FourLine>
      </StyledLines>
    </Form>
  );
};
