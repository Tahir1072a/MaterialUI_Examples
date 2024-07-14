import { Button, styled, Typography } from "@mui/material";

const StyledBtn = styled(Button)(({ theme }) => ({
  color: "white",
  background: theme.palette.primary.dark,
  textTransform: "none",
}));

export default function PrimaryBtn({
  btnOptions,
  btnText = "Primary",
  textVariant = "h6",
  sx,
}) {
  return (
    <StyledBtn variant={"contained"} {...btnOptions} sx={sx}>
      <Typography variant={textVariant}>{btnText}</Typography>
    </StyledBtn>
  );
}
