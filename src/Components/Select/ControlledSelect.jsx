import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
} from "@mui/material";
import theme from "../../Styles/theme.js";
import { Controller, useForm } from "react-hook-form";

// Burada multiple seçim ve react-hook-form ile birlikte kullanımı işlenmiştir.

export default function ControlledSelect() {
  const { control, watch } = useForm({
    defaultValues: {
      names: "",
      names2: [],
    },
  });

  console.log(watch("names2"));

  return (
    <Stack gap={theme.spacing(8)}>
      <FormControl>
        <InputLabel id={"select-name-lbl"}>Name</InputLabel>
        <Controller
          control={control}
          name={"names"}
          render={({ field }) => (
            <Select
              {...field}
              labelId={"select-name-lbl"}
              id={"select-name"}
              sx={{ width: "10rem" }}
              label={"Name"}
            >
              <MenuItem value={""}>
                <em>None</em>
              </MenuItem>
              <MenuItem value={"Çok çalış"}>Tahir</MenuItem>
              <MenuItem value={"Sıkıntılı dönem"}>Ayşe</MenuItem>
              <MenuItem value={"Spor, düzen"}>Gökay</MenuItem>
            </Select>
          )}
        ></Controller>
      </FormControl>
      <FormControl>
        <InputLabel id={"select-lbl"}>Names</InputLabel>
        <Controller
          control={control}
          render={({ field }) => (
            <Select {...field} labelId={"select-lbl"} label={"Names"} multiple>
              <MenuItem value={1}>Tahiri</MenuItem>
              <MenuItem value={2}>Eat</MenuItem>
              <MenuItem value={3}>Ayşe</MenuItem>
              <MenuItem value={4}>Study</MenuItem>
              <MenuItem value={5}>Gökay</MenuItem>
              <MenuItem value={"Deneme"}>Run</MenuItem>
            </Select>
          )}
          name={"names2"}
        />
      </FormControl>
    </Stack>
  );
}
