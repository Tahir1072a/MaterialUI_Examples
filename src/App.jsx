import SimpleTab from "./Components/Tabs/SimpleTab.jsx";
import { Button, styled } from "@mui/material";

import Trade from "./ExperimentalMajorComponents/Trade/Trade.jsx";
import BasicMenu from "./Components/OpenedMenus/BasicMenu.jsx";
import CustomMenu from "./Components/OpenedMenus/CustomMenu.jsx";

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
      <CustomMenu
        renderButton={({ ref, onMouseEnter, onMouseLeave }) => (
          <Button
            ref={ref}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            Open Menu
          </Button>
        )}
      >
        <p>Deneme</p>
      </CustomMenu>
    </Main>
  );
}

export default App;
