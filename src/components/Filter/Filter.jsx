import PropTypes from 'prop-types';
import { Input, Label } from 'components/PhonebookForm/PhonebookForm.styled';
// import { Button } from 'components/BaseStyles/BaseStyles.styled';

export const Filter = ({ handlerFilterInput, filterValue }) => {
  return (
    <>
      <Label htmlFor="filter">Find contacts by name</Label>
      <Input
        autoComplete="off"
        id="filter"
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handlerFilterInput}
        value={filterValue}
      />
      {/* <Button type="button" onClick={filterReset}>
        clear the entry field
      </Button> */}
    </>
  );
};

Filter.propTypes = {
  handlerFilterInput: PropTypes.func.isRequired,
  filterValue: PropTypes.string.isRequired,
};
