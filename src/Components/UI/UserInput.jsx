import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";

/**
 * Material UI kütüphaensine ait, TextField componentini kullanan ve kullanıcıdan basit girişler almayı sağlayan bir bileşen.
 * @param name
 * @param control
 * @param rules
 * @param errors
 * @param type
 * @returns {JSX.Element}
 * @constructor
 */
export default function UserInput({
  name,
  control,
  rules,
  errors,
  Component = <TextField />,
  textFieldOptions,
}) {
  return (
    <Controller
      render={({ field }) => (
        <Component
          {...field}
          error={!errors.name}
          helperText={errors.name ? errors.name.message : null}
          {...textFieldOptions}
        />
      )}
      name={name}
      control={control}
      rules={{ ...rules }}
    ></Controller>
  );
}
