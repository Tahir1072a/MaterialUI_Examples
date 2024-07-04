import SimpleTab from "./Components/Tabs/SimpleTab.jsx";
import { styled } from "@mui/material";
import { ScrollableTab } from "./Components/Tabs/TabFeatures.jsx";
import SimpleTabStyled from "./Components/Tabs/SimpleTabStyled.jsx";

const Main = styled("main")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  width: "100%",
  height: "100vh",
}));

function App() {
  return (
    <Main>
      <SimpleTabStyled />
    </Main>
  );
}

export default App;
