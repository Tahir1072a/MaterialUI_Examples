import { FormControlLabel, Switch } from "@mui/material";
import { Controller } from "react-hook-form";

/**
 * React-hook-form ile control edilen bir bir switch componenti.
 *
 * @param name
 * @param control
 * @param label
 * @param switchOptions
 * @returns {JSX.Element}
 * @constructor
 */
export default function ControlledSwitch({
  name,
  control,
  label,
  switchOptions,
}) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FormControlLabel
          {...field}
          checked={field.value}
          label={label}
          control={<Switch {...switchOptions} />}
        />
      )}
    />
  );
}
