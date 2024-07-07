import { useForm } from "react-hook-form";
import TabContext, {
  TabPanel,
  TabsWrapper,
} from "../../Components/Tabs/ReusableTab.jsx";
import { Box, Stack, styled, Tab } from "@mui/material";
import theme from "../../Styles/theme.js";
import { createContext } from "react";

const TabsStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  "& .MuiTabs-flexContainer": {
    gap: theme.spacing(4),
  },

  "& .MuiTabs-indicator": {
    height: 0,
  },
};

const StyledTab = styled(Tab)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: theme.spacing(4),

  border: theme.borders.primary,
  borderRadius: theme.shape.borderRadius,

  color: theme.palette.text.primary,
  textTransform: "none",
  ...theme.typography.h5,

  "&.Mui-selected": {
    background: theme.palette.primary.dark,
    color: theme.palette.text.primary,
  },
}));

// Birden fazla form olduğu için ve bunları tek bir yerden yönetebilmek için alt bileşenlere bir provider sağlamak amacı ile context oluşturuyoruz.
const TradeContext = createContext();

export default function Trade() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <TradeContext.Provider value={{ control, register, errors }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack>
          <Box>
            <TabContext>
              <Box>
                <TabsWrapper tabsStyle={TabsStyle}>
                  <StyledTab label={"Swap"} />
                  <StyledTab label={"Place Order"} />
                </TabsWrapper>
              </Box>

              <TabPanel index={0}>Swap Content</TabPanel>
              <TabPanel index={1}>Place Order Content</TabPanel>
            </TabContext>
          </Box>
        </Stack>
      </form>
    </TradeContext.Provider>
  );
}
