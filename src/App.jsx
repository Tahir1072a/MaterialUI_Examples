import SimpleTab from "./Components/Tabs/SimpleTab.jsx";
import { Button, Paper, styled } from "@mui/material";

import Trade from "./ExperimentalMajorComponents/Trade/Trade.jsx";
import BasicMenu from "./Components/OpenedMenus/BasicMenu.jsx";
import CustomMenu from "./Components/UI/CustomMenu.jsx";
import {
  CustomSwitch,
  SwitchFeatures,
} from "./Components/Buttons/SwitchFeatures.jsx";
import BasicSelect from "./Components/Select/BasicSelect.jsx";
import ControlledSelect from "./Components/Select/ControlledSelect.jsx";
import CryptoSelection from "./ExperimentalMajorComponents/Trade/CryptoSelection.jsx";
import ModalFeatures from "./Components/Modal/ModalFeatures.jsx";
import CustomModal from "./Components/UI/CustomModal.jsx";
import { useState } from "react";

const Main = styled("main")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  width: "100%",
  height: "100vh",

  background: theme.palette.background.bg700,
}));

function App() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Main>
      <CustomModal
        open={open}
        handleClose={handleClose}
        renderButton={<Button onClick={handleOpen}>Click me!</Button>}
      >
        <Paper sx={{ padding: "2rem" }}>You clicked me! Ah... 💋</Paper>
      </CustomModal>
    </Main>
  );
}

export default App;
