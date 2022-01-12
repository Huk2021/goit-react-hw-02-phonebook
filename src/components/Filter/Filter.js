import propTypes from "prop-types";

const Filter = ({ value, onChange }) => {
  return (
    <div>
      <h2>Find contacts by name</h2>
      <input type="text" value={value} onChange={onChange} />
    </div>
  );
};

export default Filter;

Filter.propTypes = {
  value: propTypes.string,
  onChange: propTypes.func,
};
