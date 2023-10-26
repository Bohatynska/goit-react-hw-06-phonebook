import { useSelector, useDispatch } from 'react-redux';
import { getFilteredContacts } from 'redux/fiterSlice';
import { getFilter } from 'redux/selectors';
import { FilterWrap, FilterLabel, FilterInput } from './Filter.styled';
const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onFilter = event => {
    const value = event.target.value.trim();

    dispatch(getFilteredContacts(value));
  };

  return (
    <FilterWrap>
      <FilterLabel>
        Find contacts by name
        <FilterInput
          type="text"
          name="filter"
          onChange={onFilter}
          value={filter}
        />
      </FilterLabel>
    </FilterWrap>
  );
};

export default Filter;
