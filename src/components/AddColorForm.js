import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/AddColorForm.scss';

const AddColorForm = ({ onNewColor = f => f }) => {
  let title, color;

  const submit = e => {
    e.preventDefault();
    onNewColor(title.value, color.value);
    title.value = '';
    color.value = '#000000';
    title.focus();
  };

  return (
    <form className="add-color" onSubmit={submit}>
      <input
        ref={input => (title = input)}
        type="text"
        placeholder="color title..."
        required
      />
      <input ref={input => (color = input)} type="color" required />
      <button>ADD</button>
    </form>
  );
};

AddColorForm.propTypes = {
  onNewColor: PropTypes.func
};

export default AddColorForm;
