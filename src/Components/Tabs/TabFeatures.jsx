import TabContext, { TabPanel, TabsWrapper } from "./ReusableTab.jsx";
import { Tab } from "@mui/material";

// Bu Tabs componentinin alabileceği bazı ek ayarlardır. Daha fazlası için bkz: https://mui.com/material-ui/api/tabs/#tabs-prop-scrollButtons
const Options = {
  textColor: "primary",
  indicatorColor: "primary",
  variant: "scrollable",
  scrollButtons: "auto",
};

const TabBoxStyle = {
  width: "30rem",
};

export function ScrollableTab() {
  return (
    <TabContext tabBoxStyle={TabBoxStyle}>
      <TabsWrapper additionalOptions={Options}>
        <Tab label={"Tab 1"} />
        <Tab label={"Tab 2"} />
        <Tab label={"Tab 3"} disabled />
      </TabsWrapper>

      <TabPanel index={0}>Hello World</TabPanel>
      <TabPanel index={1}>Learn English</TabPanel>
      <TabPanel index={2}>Do not just memorize</TabPanel>
    </TabContext>
  );
}
