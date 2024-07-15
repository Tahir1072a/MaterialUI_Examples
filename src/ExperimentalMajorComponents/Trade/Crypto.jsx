import { Button } from "@mui/material";
import { useContext } from "react";

export default function Crypto({
  crypto = {},
  cryptoSelectionName = "",
  context,
}) {
  const { setValue } = useContext(context);
  const { name, symbol, balance, logoUrl, tags } = crypto;
  const handleClick = () => {
    setValue(cryptoSelectionName);
  };

  return <Button onClick={handleClick}>Crypto</Button>;
}
