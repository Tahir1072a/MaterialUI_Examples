import {
  Box,
  Divider,
  Paper,
  Stack,
  styled,
  Tab,
  Typography,
} from "@mui/material";
import theme from "../../Styles/theme.js";
import SearchBar from "../../Components/UI/SearchBar.jsx";
import { useContext } from "react";
import TabContext, {
  TabPanel,
  TabsWrapper,
} from "../../Components/Tabs/ReusableTab.jsx";

const Title = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",

  padding: theme.spacing(8),
}));

const BottomContent = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",

  // margin: `${theme.spacing(8)} ${theme.spacing(4)}`,
}));

const PanelStyle = {
  width: "100%",
  height: "50rem",
  flexDirection: "column",
  gap: theme.spacing(8),
  padding: theme.spacing(10),
  borderRadius: "0 0 1.2rem 1.2rem",

  background: theme.palette.background.bg600,
  overflowY: "auto",
};

const TabsWrapperStyle = {
  alignItems: "center",
  width: "55rem",

  "& .MuiTabs-scrollButtons": {
    width: "2rem",
    height: "2rem",
    padding: theme.spacing(6),
    borderRadius: theme.shape.borderRadius,

    "& svg": {
      fontSize: "2rem",
    },
  },
};

const CustomTab = styled(Tab)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(6),

  background: "none",
  border: "none",
  borderRadius: "1.2rem 1.2rem 0 0",

  ...theme.typography.h5,
  textAlign: "center",
  color: theme.palette.primary.light,

  "&:disabled": {
    cursor: "not-allowed",
    opacity: "0.4",
  },

  "&.Mui-selected": {
    background: theme.palette.background.bg600,
  },
}));

export default function CryptoSelection({
  context,
  searchBarName,
  searchBarRules,
  cryptoSelectionName,
}) {
  const { control, errors, watch } = useContext(context);

  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Title>
        <Typography variant={"h5"}>Select a Token</Typography>
      </Title>
      <Divider />
      <BottomContent>
        <Box sx={{ p: "1.4rem", width: "100%", marginTop: "0.5rem" }}>
          <SearchBar
            errors={errors}
            control={control}
            name={searchBarName}
            rules={searchBarRules}
            sx={{
              background: theme.palette.background.bg600,
              borderRadius: "1rem",
            }}
          />
        </Box>
        <TabContext
          tabBoxStyle={{ padding: 0, margin: 0, gap: 0 }}
          forcedIndex={watch(searchBarName) === "" ? null : 7}
        >
          <TabsWrapper
            tabsStyle={TabsWrapperStyle}
            additionalOptions={{ variant: "scrollable", scrollButtons: "auto" }}
          >
            <CustomTab label={"All"} disabled={watch(searchBarName) !== ""} />
            <CustomTab label={"Top"} disabled={watch(searchBarName) !== ""} />
            <CustomTab label={"DeFi"} disabled={watch(searchBarName) !== ""} />
            <CustomTab
              label={"Stablecoins"}
              disabled={watch(searchBarName) !== ""}
            />
            <CustomTab label={"Meme"} disabled={watch(searchBarName) !== ""} />
            <CustomTab
              label={"GameFi"}
              disabled={watch(searchBarName) !== ""}
            />
            <CustomTab label={"NFT"} disabled={watch(searchBarName) !== ""} />
            <CustomTab
              label={"Search"}
              disabled={watch(searchBarName) === ""}
            />
          </TabsWrapper>

          <TabPanel index={0} panelStyle={PanelStyle}>
            A
          </TabPanel>
          <TabPanel index={1} panelStyle={PanelStyle}>
            B
          </TabPanel>
          <TabPanel index={2} panelStyle={PanelStyle}>
            C
          </TabPanel>
          <TabPanel index={3} panelStyle={PanelStyle}>
            D
          </TabPanel>
          <TabPanel index={4} panelStyle={PanelStyle}>
            E
          </TabPanel>
          <TabPanel index={5} panelStyle={PanelStyle}>
            F
          </TabPanel>
          <TabPanel index={6} panelStyle={PanelStyle}>
            G
          </TabPanel>
          <TabPanel index={7} panelStyle={PanelStyle}>
            Search
          </TabPanel>
        </TabContext>
      </BottomContent>
    </Paper>
  );
}
