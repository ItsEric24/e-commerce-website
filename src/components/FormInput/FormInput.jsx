/* eslint-disable react/prop-types */
import "./form-input.scss";

function FormInput({ label, htmlFor, ...otherProps }) {
  return (
    <div className="form-group">
      <label
        className={`${
          otherProps.value.length ? "shrink" : ""
        } form-input-label`}
        htmlFor={htmlFor}
      >
        {label}
      </label>
      <input className="form-input" {...otherProps} />
    </div>
  );
}
export default FormInput;
