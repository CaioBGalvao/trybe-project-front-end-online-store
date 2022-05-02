import React from 'react';
import PropTypes from 'prop-types';

class FormInput extends React.Component {
  render() {
    const { htmlFor,
      placeHolder,
      type,
      name,
      value,
      onChange,
      dataTestid } = this.props;
    return (
      <label htmlFor={ htmlFor } className="form-label">
        <input
          type={ type }
          name={ name }
          placeholder={ placeHolder }
          value={ value }
          onChange={ onChange }
          data-testid={ dataTestid }
        />
      </label>
    );
  }
}

FormInput.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  placeHolder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  dataTestid: PropTypes.string.isRequired,
};

export default FormInput;
