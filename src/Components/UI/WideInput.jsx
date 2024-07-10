import {
  FormControl,
  FormHelperText,
  InputBase,
  styled,
  Typography,
} from "@mui/material";
import theme from "../../Styles/theme.js";
import { Controller } from "react-hook-form";

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  // Placeholderı şekillendirmek için seçilmesi gereken pseudo-clsses
  "input::placeholder": { color: theme.palette.primary.light },

  "&.Mui-error .MuiInputBase-input": {
    color: theme.palette.error.main,
  },

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

export default function WideInput({
  control,
  name,
  rules,
  errors,
  label,
  inputStyle,
  labelColor = "primary",
  labelVariant = "h6",
  labelStyle = {},
  errorTextStyle = {},
}) {
  return (
    <FormControl
      fullWidth
      sx={{
        "& .MuiInputBase-root": {
          height: "4rem",
          ...theme.typography.h4,
        },
      }}
    >
      <Typography
        variant={labelVariant}
        color={labelColor}
        sx={
          errors[name]
            ? { color: theme.palette.error.light, ...labelStyle }
            : { ...labelStyle }
        }
      >
        {label}
      </Typography>
      <Controller
        control={control}
        render={({ field }) => (
          <StyledInputBase
            id={"from-exchange"}
            {...field}
            type={"number"}
            placeholder={"0.0"}
            error={Boolean(errors[name])}
            sx={{ ...inputStyle }}
          />
        )}
        name={name}
        rules={rules}
      />
      {errors[name] ? (
        <FormHelperText
          color={"primary"}
          sx={{
            marginLeft: theme.spacing(2),
            color: theme.palette.error.light,
            ...errorTextStyle,
          }}
        >
          {errors[name].message}
        </FormHelperText>
      ) : null}
    </FormControl>
  );
}
