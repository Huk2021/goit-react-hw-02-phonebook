import React from "react";
import PropTypes from "prop-types";
import { ListContact, ItemContact, ButtonContact } from "./ContactsList.styled";

export default function ContactsList({ contacts, onDeleteContact }) {
  return (
    <ListContact>
      {contacts.map(({ id, name, number }) => (
        <ItemContact key={id}>
          <p>
            {name}: {number}
          </p>
          <ButtonContact onClick={() => onDeleteContact(id)}>
            {" "}
            Delete
          </ButtonContact>
        </ItemContact>
      ))}
    </ListContact>
  );
}

ContactsList.defaultProps = {
  contacts: [],
};

ContactsList.propTypes = {
  contacts: PropTypes.array,
  onDeleteContact: PropTypes.func,
};
