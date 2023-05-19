import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';
import {
  Title,
  FilterSection,
  Label,
  Input,
} from 'components/Filter/FilterStyle';

export const FilterContacts = () => {
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <FilterSection>
      <Title>Your contacts</Title>
      <Input
        type="text"
        placeholder="Find by name..."
        onChange={handleFilterChange}
      ></Input>
    </FilterSection>
  );
};
