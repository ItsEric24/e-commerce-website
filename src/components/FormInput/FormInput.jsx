/* eslint-disable react/prop-types */
import { FormInputLabel, Input, Group } from "./form-input.styles";

function FormInput({ label, htmlFor, ...otherProps }) {
  return (
    <Group>
      <FormInputLabel shrink={otherProps.value.length} htmlFor={htmlFor}>
        {label}
      </FormInputLabel>
      <Input {...otherProps} />
    </Group>
  );
}
export default FormInput;
