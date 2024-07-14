import { Button, styled, Typography } from "@mui/material";

const StyledBtn = styled(Button)(({ theme }) => ({
  borderColor: "white",
  color: "white",
  width: "10rem",
  height: "4rem",
}));

export default function SecondaryBtn({
  btnText,
  btnOptions,
  textOptions,
  textVariant = "h6",
  sx,
}) {
  return (
    <StyledBtn variant={"outlined"} {...btnOptions} sx={sx}>
      <Typography variant={textVariant} {...textOptions}>
        {btnText}
      </Typography>
    </StyledBtn>
  );
}
