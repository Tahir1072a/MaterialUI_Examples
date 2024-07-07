import TabContext, { TabPanel, TabsWrapper } from "./ReusableTab.jsx";
import { Stack, styled, Tab } from "@mui/material";
import theme from "../../Styles/theme.js";

const TabsStyle = {
  "& .MuiTabs-indicator": {
    height: "0",
  },
};

const TabStyle = styled(Tab)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textTransform: "none",
  // Saat yönünde olmak üzere kenarlara yuvarlaklık katar.
  borderRadius: "1.2rem 1.2rem 0 0",

  fontSize: theme.typography.h5.fontSize,
  fontWeight: theme.typography.h5.fontWeight,

  "&.Mui-selected": {
    background: theme.palette.background.bg700,
    color: theme.palette.whiteAlpha.Alpha_800,
  },
}));

const PanelStyle = {
  display: "flex",
  padding: theme.spacing(4),
  width: "30rem",

  background: theme.palette.background.bg700,
  borderRadius: "0 0 1.2rem 1.2rem",
};

// Tab düğmelerini saran wrapper
const NestedTabsStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "0px",
  padding: `${theme.spacing(1)}`,
  border: `${theme.borders.primary}`,
  borderRadius: "1.2rem",

  "& .MuiTabs-indicator": {
    height: 0,
  },
};

const NestedStyleTab = styled(Tab)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  minHeight: "3.2rem",
  height: "3.2rem",
  fontSize: theme.typography.h5.fontSize,
  fontWeight: theme.typography.h5.fontWeight,
  textTransform: "none",

  "&.Mui-selected": {
    borderRadius: "1.2rem",
    background: theme.palette.background.bg500,
    color: theme.palette.whiteAlpha.Alpha_900,
  },
}));

const NestedPanelStyle = {
  display: "flex",
  padding: theme.spacing(2),
};

export default function NestedTabs() {
  return (
    <TabContext tabBoxStyle={{ gap: 0 }}>
      <TabsWrapper tabsStyle={TabsStyle} additionalOptions={{ centered: true }}>
        <TabStyle label={"Item 1"} />
        <TabStyle label={"Item 2"} />
      </TabsWrapper>

      <TabPanel index={0} panelStyle={PanelStyle}>
        <Stack>
          <TabContext>
            <TabsWrapper tabsStyle={NestedTabsStyle}>
              <NestedStyleTab label={"Manuel Pools"} />
              <NestedStyleTab label={"Auto Pools"} />
            </TabsWrapper>
            <TabPanel index={0} panelStyle={NestedPanelStyle}>
              Nested Panel 1
            </TabPanel>
            <TabPanel index={1} panelStyle={NestedPanelStyle}>
              Nested Panel 2
            </TabPanel>
          </TabContext>
        </Stack>
      </TabPanel>
      <TabPanel index={1} panelStyle={PanelStyle}>
        Panel 2
      </TabPanel>
    </TabContext>
  );
}
