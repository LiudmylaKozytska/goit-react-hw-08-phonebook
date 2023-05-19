import styled from '@emotion/styled';

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const UserText = styled.p`
  font-size: 20px;
`;

export const UserButton = styled.button`
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
