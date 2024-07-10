import { Controller } from "react-hook-form";
import { styled, TextField } from "@mui/material";

const CustomTextField = styled(TextField)(({ theme }) => ({
  "& input[type=number]": {
    "::-webkit-outer-spin-button": {
      WebkitAppearance: "none",
      margin: 0,
    },
    "::-webkit-inner-spin-button": {
      WebkitAppearance: "none",
      margin: 0,
    },
  },
}));

/**
 * Material UI kütüphaensine ait, TextField componentini kullanan ve kullanıcıdan basit girişler almayı sağlayan bir bileşen.
 * @param name
 * @param control
 * @param rules
 * @param errors
 * @param spinButtonActive - type="number" ,ken spin buttonlarının (arttırma-azalatma) aktif olup olmadığını belirler.
 * @param textFieldOptions
 * @returns {JSX.Element}
 * @constructor
 */
export default function UserInput({
  name = "",
  control,
  rules,
  errors,
  spinButtonActive = true,
  textFieldOptions,
}) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) =>
        spinButtonActive ? (
          <TextField
            {...field}
            error={Boolean(errors[name])}
            helperText={errors[name] ? errors[name].message : null}
            {...textFieldOptions}
          />
        ) : (
          <CustomTextField
            {...field}
            {...textFieldOptions}
            error={Boolean(errors[name])}
            helperText={errors[name] ? errors[name].message : null}
          />
        )
      }
    ></Controller>
  );
}
