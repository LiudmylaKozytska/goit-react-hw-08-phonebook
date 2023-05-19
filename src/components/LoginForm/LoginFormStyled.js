import styled from '@emotion/styled';

export const Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 24px;
  background-color: #ee4f3c;
  box-shadow: 0px 30px 70px rgba(204, 204, 204, 0.5);
  border-radius: 20px;
  width: 600px;

  padding: 85px 170px 85px 170px;
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;
`;

export const Input = styled.input`
  padding: 16px 5px 16px 40px;
  margin-right: auto;

  width: 300px;

  background-color: #ffffff;

  border: none;
  border-radius: 10px;

  color: #5d5d61;
  font-weight: 300;
  font-size: 16px;
  line-height: 25px;
  letter-spacing: 0.05em;
`;
export const Button = styled.button`
  font-weight: 600;
  font-size: 18px;
  line-height: 29px;
  text-align: center;
  letter-spacing: 0.05em;

  color: #ee4f3c;
  background-color: #ffffff;
  width: 335px;

  border: none;
  border-radius: 10px;
  cursor: pointer;

  padding: 16px 40px;

  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    box-shadow: 3px 5px 9px rgba(204, 204, 204, 0.7);
  }

  &:focus-visible {
    outline: none;
  }
`;
