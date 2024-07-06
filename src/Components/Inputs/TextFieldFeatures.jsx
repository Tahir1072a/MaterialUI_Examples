import { Controller, useForm } from "react-hook-form";
import { Button, Stack, TextField } from "@mui/material";
import theme from "../../Styles/theme.js";

// Material Ui kütüphanesine ait text field incelenecektir. Bunu react-hook-form ile birleştireceğiz.
export default function CompleteTextField() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ defaultValues: { firstName: "", lastName: "" } });

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack gap={theme.spacing(4)}>
        <Controller
          render={({ field }) => (
            // TextField'a ait bazı proplar.
            <TextField
              {...field}
              id={"outlined-required"}
              variant={"outlined"}
              label={"First Name"}
              required
            />
          )}
          name={"firstName"}
          control={control}
          rules={{ required: "Please enter your name" }}
        ></Controller>
        <Controller
          render={({ field }) => (
            <TextField
              {...field}
              variant={"filled"}
              label={"Last Name"}
              id={"filled-disabled"}
              /* disabled: Ui tırtıklı hale geliyor */
              disabled
            />
          )}
          name={"lastName"}
          control={control}
        ></Controller>
        <Controller
          render={({ field }) => (
            <TextField
              {...field}
              variant={"standard"}
              label={"Nickname"}
              id={"standart"}
            />
          )}
          name={"nickName"}
          control={control}
        ></Controller>
        <Button type={"submit"}>Gönder</Button>
      </Stack>
    </form>
  );
}
