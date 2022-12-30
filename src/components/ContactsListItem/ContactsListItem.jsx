import PropTypes from 'prop-types';
import { ListItem } from './ContactsListItem.styled';
import { Button } from 'BaseStyles/BaseStyles.styled';

export const ContactsListItem = ({ name, number, deleteData, id }) => {
  return (
    <ListItem>
      {name}: {number}
      <Button
        onClick={() => {
          deleteData(id);
        }}
      >
        Delete
      </Button>
    </ListItem>
  );
};

ContactsListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteData: PropTypes.func.isRequired,
};
