import PropTypes from 'prop-types';
import { ContactList } from './ContactsList.styled';
import { ContactsListItem } from 'components/ContactsListItem/ContactsListItem';
// const ColtactListItem = ({ element:{name,number,id},deleteData }) => {

//     return (
//     <li data-id={id}>
//       {name}: {number}<button onClick={deleteData}>Delete</button>
//     </li>
//   );
// };

export const ContactsList = ({ contacts, deleteData }) => {
  return (
    <ContactList>
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactsListItem
            key={id}
            name={name}
            id={id}
            number={number}
            deleteData={deleteData}
          />
        );
      })}
    </ContactList>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteData: PropTypes.func,
};
