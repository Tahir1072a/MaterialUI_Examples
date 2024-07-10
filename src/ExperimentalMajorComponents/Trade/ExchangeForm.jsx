import {
  Box,
  FormControl,
  FormHelperText,
  InputBase,
  Paper,
  Select,
  styled,
  Typography,
} from "@mui/material";
import theme from "../../Styles/theme.js";
import { Controller } from "react-hook-form";
import WideInput from "../../Components/UI/WideInput.jsx";

const FormBackground = styled(Paper)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  width: 550,

  padding: `${theme.spacing(6)} ${theme.spacing(8)}`,
  border: theme.borders.primary,
  background: theme.palette.background.bg600,
}));

export default function ExchangeForm({
  control,
  errors,
  inputRules,
  inputName,
  selectName,
  selectRules,
}) {
  return (
    <Box>
      <FormBackground>
        <WideInput
          errors={errors}
          control={control}
          rules={inputRules}
          name={inputName}
          label={"From"}
        />
        {/* TODO: Select componenti incelenecek ve Buraya uygun şekilde yerleştirilecek. */}
        {/* Not: Eğer istediğim türde bir customize işlemi yoksa tamamen özel bir select bileşeni oluşturulacaktır. */}
        <Select />
      </FormBackground>
    </Box>
  );
}
