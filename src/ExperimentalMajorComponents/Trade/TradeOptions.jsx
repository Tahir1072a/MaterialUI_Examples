import {
  Box,
  Button,
  Divider,
  IconButton,
  InputAdornment,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import UserInput from "../../Components/UI/UserInput.jsx";
import theme from "../../Styles/theme.js";
import { LuBadgeInfo, LuBadgePercent } from "react-icons/lu";
import CustomMenu from "../../Components/UI/CustomMenu.jsx";

const StyledStack = styled(Stack)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",

  gap: theme.spacing(4),
}));

const FlexBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  width: "100%",

  gap: theme.spacing(4),
}));

const toleranceOptions = {
  type: "number",
  color: "primary",
  size: "small",
  fullWidth: true,
  InputProps: {
    sx: { ...theme.typography.h6 },
    endAdornment: (
      <InputAdornment
        position={"end"}
        sx={{
          "& svg": {
            width: "1.4rem",
            height: "1.4rem",
            color: theme.palette.primary.main,
          },
        }}
      >
        <LuBadgePercent />
      </InputAdornment>
    ),
  },
};

const deadlineOptions = {
  type: "number",
  color: "primary",
  size: "small",
  InputProps: {
    sx: { ...theme.typography.h6 },
    endAdornment: (
      <InputAdornment position={"end"}>
        <Typography color={"primary"}>minute</Typography>
      </InputAdornment>
    ),
  },
};

// Trade ile iligli ekstra ayarların yer aldığı bir sekme.
export default function TradeOptions({ context }) {
  const { control, errors } = useContext(context);

  return (
    <StyledStack padding={theme.spacing(4)}>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "flex-start",
          alignItems: "center",
          paddingTop: theme.spacing(1),
        }}
      >
        <Typography justifyContent={"flex-start"} variant={"h5"}>
          Settings
        </Typography>
      </Box>
      <Divider flexItem />
      <StyledStack>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Typography variant={"h6"}>
            Normal slippage tolerance (Basic V1)
          </Typography>
          <CustomMenu
            placement={"bottom-end"}
            transformOrigin={"right top"}
            renderButton={({ ref, onMouseEnter, onMouseLeave }) => (
              <IconButton
                ref={ref}
                onMouseLeave={onMouseLeave}
                onMouseEnter={onMouseEnter}
              >
                <LuBadgeInfo />
              </IconButton>
            )}
          >
            <Box
              sx={{
                padding: theme.spacing(4),
                background: theme.palette.background.bg600,
                borderRadius: theme.shape.borderRadius,
              }}
            >
              <Typography variant={"subText"}>
                Slippage tolerance hakında bilgiler...
              </Typography>
            </Box>
          </CustomMenu>
        </Box>
        <FlexBox>
          <Button variant={"outlined"} color={"secondary"}>
            <Typography variant={"h6"} color={theme.palette.text.secondary}>
              0.1%
            </Typography>
          </Button>
          <Button variant={"outlined"} color={"secondary"}>
            <Typography variant={"h6"} color={theme.palette.text.secondary}>
              0.5%
            </Typography>
          </Button>
          <Button variant={"outlined"} color={"secondary"}>
            <Typography variant={"h6"} color={theme.palette.text.secondary}>
              1%
            </Typography>
          </Button>
          <UserInput
            name={"slippageToleranceV1"}
            control={control}
            errors={errors}
            rules={{ required: "This field required" }}
            spinButtonActive={false}
            textFieldOptions={toleranceOptions}
          />
        </FlexBox>
      </StyledStack>
      <StyledStack>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Typography variant={"h6"}>
            Low slippage tolerance (Basic V2)
          </Typography>
          <CustomMenu
            placement={"bottom-end"}
            transformOrigin={"right top"}
            renderButton={({ ref, onMouseEnter, onMouseLeave }) => (
              <IconButton
                ref={ref}
                onMouseLeave={onMouseLeave}
                onMouseEnter={onMouseEnter}
              >
                <LuBadgeInfo />
              </IconButton>
            )}
          >
            <Box
              sx={{
                padding: theme.spacing(4),
                background: theme.palette.background.bg600,
                borderRadius: theme.shape.borderRadius,
              }}
            >
              <Typography variant={"subText"}>
                Slippage tolerance hakında bilgiler...
              </Typography>
            </Box>
          </CustomMenu>
        </Box>
        <FlexBox>
          <Button variant={"outlined"} color={"secondary"}>
            <Typography variant={"h6"} color={theme.palette.text.secondary}>
              0.02%
            </Typography>
          </Button>
          <Button variant={"outlined"} color={"secondary"}>
            <Typography variant={"h6"} color={theme.palette.text.secondary}>
              0.05%
            </Typography>
          </Button>
          <Button variant={"outlined"} color={"secondary"}>
            <Typography variant={"h6"} color={theme.palette.text.secondary}>
              0.1%
            </Typography>
          </Button>
          <UserInput
            name={"slippageToleranceV2"}
            control={control}
            errors={errors}
            rules={{ required: "This field required" }}
            spinButtonActive={false}
            textFieldOptions={toleranceOptions}
          />
        </FlexBox>
      </StyledStack>
      <StyledStack>
        <FlexBox>
          <Typography variant={"h6"}>Transaction Deadline</Typography>
        </FlexBox>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            width: "100%",
          }}
        >
          <UserInput
            name={"deadline"}
            control={control}
            spinButtonActive={false}
            errors={errors}
            textFieldOptions={deadlineOptions}
          />
        </Box>
      </StyledStack>
      <Box></Box>
      <Box></Box>
    </StyledStack>
  );
}
