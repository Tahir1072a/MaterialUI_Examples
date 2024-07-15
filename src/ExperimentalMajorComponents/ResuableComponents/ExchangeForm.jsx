import { Box, Divider, Paper, styled, Typography } from "@mui/material";
import WideInput from "../../Components/UI/WideInput.jsx";
import CustomModal from "../../Components/UI/CustomModal.jsx";
import { useContext, useState } from "react";
import PrimaryBtn from "../../Components/UI/Button/PrimaryBtn.jsx";
import theme from "../../Styles/theme.js";
import SearchBar from "../../Components/UI/SearchBar.jsx";
import SecondaryBtn from "../../Components/UI/Button/SecondaryBtn.jsx";
import { FiInstagram } from "react-icons/fi";
import CryptoSelection from "./CryptoSelection.jsx";
import { TradeContext } from "../Trade/Trade.jsx";

const FormBackground = styled(Paper)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  width: 550,

  padding: `${theme.spacing(6)} ${theme.spacing(8)}`,
  border: theme.borders.primary,
  background: theme.palette.background.bg600,
}));

export default function ExchangeForm({
  context,
  inputRules,
  inputName,
  inputLbl,
  cryptoSearchBarName,
  cryptoSearchBarRules,
  cryptoSelectionName,
}) {
  const { control, errors, getValues } = useContext(context);

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

        <CustomModal
          open={open}
          handleClose={handleClose}
          renderButton={
            // Seçili ise bu görüntülenecek.
            getValues(cryptoSelectionName) ? (
              <SecondaryBtn
                btnOptions={{ startIcon: <FiInstagram />, onClick: handleOpen }}
                btnText={"Avax"}
              />
            ) : (
              //  Seçili bir crypto yoksa bu görüntülenecek.
              <PrimaryBtn
                btnText={"Select Token"}
                btnOptions={{ onClick: handleOpen }}
                sx={{
                  width: "12rem",
                }}
              />
            )
          }
        >
          <CryptoSelection
            context={context}
            searchBarName={cryptoSearchBarName}
            searchBarRules={cryptoSearchBarRules}
            cryptoSelectionName={cryptoSelectionName}
          />
        </CustomModal>
      </FormBackground>
    </Box>
  );
}
