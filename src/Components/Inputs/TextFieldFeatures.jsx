import { Controller, useForm } from "react-hook-form";
import {
  Box,
  Button,
  InputAdornment,
  Stack,
  styled,
  TextField,
} from "@mui/material";
import theme from "../../Styles/theme.js";
import { GiBarbarian } from "react-icons/gi";

// Buradaki css, typ=number olduğunda çıkan arttırma azaltma iconlarını yok etmek üzere yazılmıştır.
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

// Material Ui kütüphanesine ait text field incelenecektir. Bunu react-hook-form ile birleştireceğiz.
// TextField'ın göstermediğim bir de password özelliği vardır. Onu başka örneklerde kullanacağım.
export default function CompleteTextField() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ defaultValues: { firstName: "", lastName: "", weight: "" } });

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack gap={theme.spacing(4)}>
        <Stack gap={theme.spacing(12)}>
          <Box sx={{ display: "flex", gap: theme.spacing(4) }}>
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
                  /*Bileşen kontrol edilmediğinde işe yarar.*/
                  defaultValue={"Fidan"}
                  /* disabled: Ui tırtıklı hale geliyor */
                  disabled
                />
              )}
              name={"lastName"}
              control={control}
            ></Controller>
          </Box>
          <Box sx={{ display: "flex", gap: theme.spacing(4) }}>
            <Controller
              render={({ field }) => (
                <CustomTextField
                  {...field}
                  variant={"outlined"}
                  id={"filled-number"}
                  type={"number"}
                  label={"Age"}
                  /*Shrink özelliği label'ın küçülerek yukarı doğru hareket etemsini sağlar. Ayrıca InputLabel öğresine yapılan onClick gibi pointer eventlerin çalışmasını sağlar.*/
                  /*Shrink true ise label her zaman üstte küçük olarak durur. Üstüne tıklanılmadan bile orada durur.*/
                  InputLabelProps={{ shrink: true }}
                />
              )}
              name={"Age"}
              control={control}
            />

            <Controller
              render={({ field }) => (
                <TextField
                  {...field}
                  id={"weight"}
                  variant={"filled"}
                  helperText={errors.weight ? errors.weight.message : "Weight"}
                  /* Bunlar daha dinamik hale getirilip hata olduğunda kullanıcı dostu bir arayüz sağlayabilir. */
                  error={!!errors.weight}
                  label={errors.weight ? "Error" : ""}
                  placeholder={"5 - 200"}
                  type={"number"}
                />
              )}
              name={"weight"}
              control={control}
              rules={{
                required: "Please enter this field",
                max: {
                  value: 200,
                  message: "Lütfen düzgün bir kilo aralığı girin.",
                },
                min: {
                  value: 5,
                  message: "Lütfen düzgün bir kilo aralığı girin.",
                },
              }}
            ></Controller>
          </Box>
        </Stack>

        <Controller
          render={({ field }) => (
            <TextField
              {...field}
              variant={"standard"}
              label={"Nickname"}
              id={"standart"}
              /*TextField kullanırken icon geçmenin yolu içerdeki input bileşenine bunu saplamaktır*/
              InputProps={{
                startAdornment: (
                  <InputAdornment
                    position={"start"}
                    sx={{ "& svg": { width: "2rem", height: "2rem" } }}
                  >
                    <GiBarbarian />
                  </InputAdornment>
                ),
              }}
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
