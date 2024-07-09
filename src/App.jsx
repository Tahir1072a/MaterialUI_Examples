import SimpleTab from "./Components/Tabs/SimpleTab.jsx";
import { Button, styled } from "@mui/material";

import Trade from "./ExperimentalMajorComponents/Trade/Trade.jsx";
import BasicMenu from "./Components/OpenedMenus/BasicMenu.jsx";
import CustomMenu from "./Components/UI/CustomMenu.jsx";
import {
  CustomSwitch,
  SwitchFeatures,
} from "./Components/Buttons/SwitchFeatures.jsx";

const Main = styled("main")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  width: "100%",
  height: "100vh",

  background: theme.palette.background.bg700,
}));

function App() {
  return (
    <Main>
      <Trade />
    </Main>
  );
}

export default App;
