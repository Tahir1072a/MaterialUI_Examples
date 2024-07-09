import {
  alpha,
  Box,
  FormControlLabel,
  FormGroup,
  Stack,
  styled,
  Switch,
} from "@mui/material";
import { pink } from "@mui/material/colors";
import { useState } from "react";

const CustomColoredSwitch = styled(Switch)(({ theme }) => ({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: pink[600],
    "&:hover": {
      backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
    },
  },
  // Buradaki track çubuğun kafası değil gövde kısmını temsil ediyor.
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: pink[600],
  },
}));

const CustomMUISwitch = styled(Switch)(({ theme }) => ({
  width: 62, // Switch'in genişliği
  height: 34, // Switch'in yüksekliği
  padding: 7, // Switch bileşenine dıştan verilen boşluk
  "& .MuiSwitch-switchBase": {
    margin: 1, // Switch'in iç kenar boşluğu
    padding: 0, // Switch'in iç boşluğu
    transform: "translate(6px)", // Switch'in konumunu kaydırma
    "&.Mui-checked": {
      color: "#fff", // Switch aktifken (checked) rengi
      transform: "translate(22px)", // Aktifken Switch'in kaydırılma pozisyonu
      "& .MuiSwitch-thumb:before": {
        // Aktifken Switch'in baş kısmının öncesine eklenen stil
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff",
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`, // SVG ikonunu beyaz renkle ekleme
      },
      "& + .MuiSwitch-track": {
        opacity: 1, // Aktifken Switch track'in opaklığı
        backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be", // Tema moduna göre track arka plan rengi
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c", // Tema moduna göre Switch'in baş kısmının rengi
    width: 32, // Baş kısmının genişliği
    height: 32, // Baş kısmının yüksekliği
    "&::before": {
      content: "''", // Baş kısmının içeriği
      position: "absolute", // Konumlama türü
      width: "100%", // Baş kısmının genişliği
      height: "100%", // Baş kısmının yüksekliği
      left: 0, // Sol kenara sıfırlama
      top: 0, // Üst kenara sıfırlama
      backgroundRepeat: "no-repeat", // Arka planın tekrar etmemesi
      backgroundPosition: "center", // Arka planın ortalanması
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#fff",
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`, // SVG ikonunu beyaz renkle ekleme
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1, // Track'in opaklığı
    backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be", // Tema moduna göre track arka plan rengi
    borderRadius: 20 / 2, // Track'in köşe yuvarlama
  },
}));

// Material ui'a switch componentine ait özellikler.
export function SwitchFeatures() {
  const [checked, setChecked] = useState(true);

  function handleChange(e) {
    const value = e.target.checked;
    setChecked(value);
    alert(value);
  }

  return (
    <Stack>
      <Box>
        {/* Seçili olarak gelen */}
        <Switch defaultChecked />
        {/* Seçili ama disabled */}
        <Switch defaultChecked disabled />
      </Box>
      <Box>
        {/*  Checkbox ve Switch gibi kontrolleri sarar. Satır düzeni sağlar.*/}
        <FormGroup>
          {/*Kontrol elemanlarını label sağlar. Kontrol elemanları : Checkbox, Switch, Radio*/}
          <FormControlLabel
            control={<Switch defaultChecked />}
            label={"Prevent high price impact"}
          />
          <FormControlLabel
            control={<Switch />}
            label={
              "Use dedicated RPC endpoints, or disabled to use public RPCs"
            }
          />
          <FormControlLabel
            control={<Switch color={"primary"} />}
            label={"Colored"}
          />
          <FormControlLabel
            control={<CustomColoredSwitch defaultChecked />}
            label={"Custom colored switch"}
          />
          <FormControlLabel
            control={<Switch defaultChecked size={"small"} />}
            label={"Small Size"}
          />
          <FormControlLabel
            control={<Switch checked={checked} onChange={handleChange} />}
            label={"Controlled Switch"}
          />
          <FormControlLabel control={<Switch />} label={""} />
        </FormGroup>
      </Box>
    </Stack>
  );
}

export function CustomSwitch() {
  return <CustomMUISwitch />;
}
