import theme from "../../Styles/theme.js";
import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  Stack,
} from "@mui/material";

// Material ui select componenti çok basic bir yapıda olması amaçlanmıştır. Autocomplete gibi diğer bileşenleri ise asıl ekstra özelliklere sahiptir.
// Dip NOT: Multiple seçim ControlledSelect'de işlenmiştir.
export default function BasicSelect() {
  return (
    <Stack gap={theme.spacing(12)}>
      {/*  Aynı input gibi filled, standart vb. özellikleri vardır ve Form control öğesine uygulanır. Neden diyecek olursan ise bu form control Input Label
       ile Select componentinin birlikte senkronize çalışmasını yani konumlandırmaların düzgün olmasını sağlar. */}
      {/*  Size propuda aynı şekilde form control tarafından yönetilir.*/}
      <FormControl variant={"filled"} size={"small"} required>
        <InputLabel id={"select-input-label"}>With input label</InputLabel>
        {/*  Burada dikkat edilmesi gereken nokta, labelId ile InputLabel'ın id değeri eşleşmesi ve input Label alanı içinde yazacak olan şeyin
            Ayrıca label propu içinde yazılamsı gerekiyor. Yoksa label düzgün konumlanmıyor. */}
        <Select
          /*InputLabel id eşleşmesi*/
          labelId={"select-input-label"}
          id={"select-input"}
          /*Input label içerik eşleşmesi */
          label={"With input label"}
          // Bu özellik optionsların text uzunluğuna göre boyutun ayarlanmasını sağlar.
          // Alttaki bileşenin boyutunun değişmeisin tek sebebi aynı yapı içinde olmaları. Alttakine sabit width verilerek iş çözülebilir.
          autoWidth
        >
          <MenuItem value={10}>Ten Ten Ten Ten Ten Ten Ten Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        {/*  Form control içine direkt olraka enjekte edilebilir. */}
        <FormHelperText>With label + helper text</FormHelperText>
      </FormControl>

      {/*  Label olmadan... */}
      <FormControl variant={"outlined"}>
        {/*  Birden fazla seçime izin verir. */}
        <Select id={"select-input"}>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>With helper text</FormHelperText>
      </FormControl>
      {/*Read only*/}
      <FormControl variant={"outlined"}>
        <Select id={"select-input"} inputProps={{ readOnly: true }}>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Readonly</FormHelperText>
      </FormControl>
      {/* Error */}
      <FormControl variant={"outlined"} error>
        <InputLabel id={"select-age-lbl"}>Age</InputLabel>
        <Select
          id={"select-input"}
          labelId={"select-age-lbl"}
          label={"Age"}
          renderValue={(value) => `☠️ - ${value}`}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Error</FormHelperText>
      </FormControl>
      {/* Çok iyi gözükmüyor zaten "Radio, a Switch or a Checkbox" için tasarlanmıştır form control label.*/}
      <FormControl>
        <FormControlLabel
          labelPlacement={"top"}
          control={
            <Select id={"deneme"}>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
            </Select>
          }
          label={"With Form Control Label"}
        />
      </FormControl>
    </Stack>
  );
}
