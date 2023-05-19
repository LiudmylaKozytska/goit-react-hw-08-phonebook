import styled from '@emotion/styled';

export const Header = styled.header`
  display: flex;
  padding: 16px 16px 16px 48px;
  align-items: center;
  justify-content: space-between;

  background-color: #ffffff;
`;

export const Button = styled.button`
  padding: 4px 28px;
  font-size: 18px;
  line-height: 34px;

  color: white;
  background-color: #ee4f3c;

  border-radius: 10px;
  border: none;
  cursor: pointer;

  &:hover {
    box-shadow: 3px 5px 9px rgba(204, 204, 204, 0.7);
  }
`;

export const Backdrop = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
`;
