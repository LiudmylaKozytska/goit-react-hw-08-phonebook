import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { alertDeleteContactSuccess } from 'components/Alert/Alert';
import { Item, Button } from './ContactItemStyle';
import { ReactComponent as DeleteIcon } from '../icons/deleteIcon.svg';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));

    alertDeleteContactSuccess(name);
  };

  const generateColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <Item key={id}>
      <Avatar sx={{ bgcolor: generateColor() }}>{name.substring(0, 2)}</Avatar>
      {name}: {number}
      <Button type="button" onClick={handleDelete}>
        <DeleteIcon width="20" height="20"></DeleteIcon>
      </Button>
    </Item>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
