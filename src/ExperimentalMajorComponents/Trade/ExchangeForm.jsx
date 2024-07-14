import { Box, Divider, Paper, styled, Typography } from "@mui/material";
import WideInput from "../../Components/UI/WideInput.jsx";
import CustomModal from "../../Components/UI/CustomModal.jsx";
import { useState } from "react";
import PrimaryBtn from "../../Components/UI/Button/PrimaryBtn.jsx";
import theme from "../../Styles/theme.js";
import SearchBar from "../../Components/UI/SearchBar.jsx";
import SecondaryBtn from "../../Components/UI/Button/SecondaryBtn.jsx";
import { FiInstagram } from "react-icons/fi";

const FormBackground = styled(Paper)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  width: 550,

  padding: `${theme.spacing(6)} ${theme.spacing(8)}`,
  border: theme.borders.primary,
  background: theme.palette.background.bg600,
}));

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

  margin: `${theme.spacing(8)} ${theme.spacing(4)}`,
}));

export default function ExchangeForm({
  control,
  errors,
  inputRules,
  inputName,
  inputLbl,
  cryptoSearchBarName,
  cryptoSearchBarRules,
}) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <FormBackground>
        <WideInput
          errors={errors}
          control={control}
          rules={inputRules}
          name={inputName}
          label={inputLbl}
        />
        {/* TODO: Crypto selection kısmının iç tarafı yapılacaktır. */}
        <CustomModal
          open={open}
          handleClose={handleClose}
          renderButton={
            // Seçili ise bu görüntülenecek.
            <SecondaryBtn
              btnOptions={{ startIcon: <FiInstagram />, onClick: handleOpen }}
              btnText={"Avax"}
            />
            //  Seçili bir öğe yoksa bu görüntülenecek.
            // <PrimaryBtn
            //   btnText={"Select Token"}
            //   btnOptions={{ onClick: handleOpen }}
            //   sx={{
            //     width: "12rem",
            //   }}
            // />
          }
        >
          <Paper sx={{ width: "60rem", height: "70rem", p: theme.spacing(4) }}>
            <Title>
              <Typography variant={"h5"}>Select a Token</Typography>
            </Title>
            <Divider />
            <BottomContent>
              <SearchBar
                control={control}
                name={cryptoSearchBarName}
                rules={cryptoSearchBarRules}
              />
            </BottomContent>
          </Paper>
        </CustomModal>
      </FormBackground>
    </Box>
  );
}
