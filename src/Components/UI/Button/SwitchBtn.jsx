import { Button } from "@mui/material";
import { HiSwitchVertical } from "react-icons/hi";

export default function SwitchBtn({ variant = "contained", sx = {} }) {
  return (
    <Button
      variant={variant}
      sx={{
        position: "absolute",
        p: "0",
        width: "5rem",
        minWidth: "0",
        height: "3.4rem",
        fontSize: "1.8rem",
        bottom: "50%",
        left: "50%",
        transform: "translate(-50%, 50%)",
        ...sx,
      }}
    >
      <HiSwitchVertical />
    </Button>
  );
}
