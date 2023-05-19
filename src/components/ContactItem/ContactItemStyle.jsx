import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid #eeeeee;

  margin: 6px;
  padding: 6px;
`;

export const Button = styled.button`
  cursor: pointer;
  border: none;
  padding: 5px 6px;
  border-radius: 50%;
  background-color: #fff8f8;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: #eeeeee;
  }
`;
