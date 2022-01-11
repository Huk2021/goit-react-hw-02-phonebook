import React from "react";
import PropTypes from "prop-types";

export default function ContactsList({ contacts }) {
  return (
    <>
      <h1> Contacts </h1>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <li key={id}>
            <p>
              {" "}
              {name}: {number}
            </p>
            <button type="button"> Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}

ContactsList.defaultProps = {
  contacts: [],
};

ContactsList.propTypes = {
  contacts: PropTypes.array,
};
