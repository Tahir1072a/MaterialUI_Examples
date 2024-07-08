// Trade ile iligli ekstra ayarların yer aldığı bir sekme.
import { Box, Stack } from "@mui/material";
import { useContext } from "react";

export default function TradeOptions({ context }) {
  const { control } = useContext(context);
  return (
    <Stack>
      <Box></Box>
      <Box></Box>
      <Box></Box>
      <Box></Box>
      <Box></Box>
    </Stack>
  );
}
