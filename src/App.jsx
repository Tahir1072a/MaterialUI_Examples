import SimpleTab from "./Components/Tabs/SimpleTab.jsx";
import { Box, Button, Paper, styled } from "@mui/material";

import Trade from "./ExperimentalMajorComponents/Trade/Trade.jsx";
import BasicMenu from "./Components/OpenedMenus/BasicMenu.jsx";
import CustomMenu from "./Components/UI/CustomMenu.jsx";
import {
  CustomSwitch,
  SwitchFeatures,
} from "./Components/Buttons/SwitchFeatures.jsx";
import BasicSelect from "./Components/Select/BasicSelect.jsx";
import ControlledSelect from "./Components/Select/ControlledSelect.jsx";
import CryptoSelection from "./ExperimentalMajorComponents/ResuableComponents/CryptoSelection.jsx";
import ModalFeatures from "./Components/Modal/ModalFeatures.jsx";
import CustomModal from "./Components/UI/CustomModal.jsx";
import { useState } from "react";
import ExchangeForm from "./ExperimentalMajorComponents/ResuableComponents/ExchangeForm.jsx";
import SearchBar from "./Components/UI/SearchBar.jsx";

const Main = styled("main")(({ theme }) => ({
  display: "flex",
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
