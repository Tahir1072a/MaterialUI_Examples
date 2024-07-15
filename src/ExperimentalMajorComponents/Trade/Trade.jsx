import { useForm } from "react-hook-form";
import TabContext, {
  TabPanel,
  TabsWrapper,
} from "../../Components/Tabs/ReusableTab.jsx";
import { Box, IconButton, Stack, styled, Tab } from "@mui/material";
import theme from "../../Styles/theme.js";
import { createContext } from "react";
import CustomMenu from "../../Components/UI/CustomMenu.jsx";
import TradeOptions from "./TradeOptions.jsx";
import { CgOptions } from "react-icons/cg";
import ExchangeForm from "../ResuableComponents/ExchangeForm.jsx";
import PrimaryBtn from "../../Components/UI/Button/PrimaryBtn.jsx";
import SwitchBtn from "../../Components/UI/Button/SwitchBtn.jsx";

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

const SwapPanelBackground = styled(Stack)(({ theme }) => ({
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(8),

  padding: `${theme.spacing(8)} ${theme.spacing(4)}`,
  background: theme.palette.background.bg500,
  borderRadius: "12.5px",
}));

// Birden fazla form olduğu için ve bunları tek bir yerden yönetebilmek için alt bileşenlere bir provider sağlamak amacı ile context oluşturuyoruz.
export const TradeContext = createContext();

export default function Trade() {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
    setValue,
    getValues,
  } = useForm({
    defaultValues: {
      slippageToleranceV1: 0.5,
      slippageToleranceV2: 0.05,
      deadline: 30,
      safeMode: true,
      dedicatedRPCs: false,
      exchangeFromAmount: "",
      exchangeFromSelected: "",
      exchangeFromSearchBar: "",
      exchangeFromCrypto: "",
      exchangeToAmount: "",
      exchangeToSeleted: "",
      exchangeToSearchBar: "",
      exchangeToCrypto: "",
    },
  });

  const handleSwitchForms = () => {
    const fromAmount = getValues("exchangeFromAmount");
    const fromCrypto = getValues("exchangeFromCrypto");
    setValue("exchangeFromAmount", getValues("exchangeToAmount"));
    setValue("exchangeFromCrypto", getValues("exchangeToCrypto"));
    setValue("exchangeToAmount", fromAmount);
    setValue("exchangeToCrypto", fromCrypto);
  };

  const onSubmit = (data) => console.log(data);

  return (
    <TradeContext.Provider
      value={{ control, register, errors, setValue, watch, getValues }}
    >
      <form id={"trade-form"} onSubmit={handleSubmit(onSubmit)}>
        <TabContext>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <TabsWrapper tabsStyle={TabsStyle}>
              <StyledTab label={"Swap"} />
              <StyledTab label={"Place Order"} />
            </TabsWrapper>
            {/*Trade ile ilgili ayarları içeren kısmı açan button */}
            <CustomMenu
              transformOrigin={"center"}
              renderButton={({ ref, onClick }) => (
                <IconButton
                  ref={ref}
                  onClick={onClick}
                  sx={{
                    border: theme.borders.primary,
                    " svg": {
                      width: "1.8rem",
                      height: "1.8rem",
                    },
                  }}
                >
                  <CgOptions />
                </IconButton>
              )}
            >
              <TradeOptions context={TradeContext} />
            </CustomMenu>
          </Box>
          {/*Panel 1, Swap paneli */}
          <TabPanel
            index={0}
            panelStyle={{
              width: 570,
            }}
          >
            <SwapPanelBackground>
              <Stack gap={theme.spacing(4)} sx={{ position: "relative" }}>
                <ExchangeForm
                  context={TradeContext}
                  inputLbl={"From"}
                  inputRules={{ required: "This must be requried" }}
                  inputName={"exchangeFromAmount"}
                  cryptoSearchBarName={"exchangeFromSearchBar"}
                  cryptoSelectionName={"exchangeFromCrypto"}
                />
                <SwitchBtn onClick={handleSwitchForms} />
                <ExchangeForm
                  context={TradeContext}
                  inputLbl={"To"}
                  inputName={"exchangeToAmount"}
                  cryptoSearchBarName={"exchangeToSearchBar"}
                  cryptoSelectionName={"exchangeToCrypto"}
                />
              </Stack>

              <PrimaryBtn
                sx={{ width: "90%", marginTop: "1rem", height: "3.5rem" }}
                btnOptions={{ color: "primary", type: "submit" }}
                btnText={"Swap"}
              />
            </SwapPanelBackground>
          </TabPanel>
          <TabPanel index={1} panelStyle={{ width: 570 }}>
            Will be come soon...
          </TabPanel>
        </TabContext>
      </form>
    </TradeContext.Provider>
  );
}
