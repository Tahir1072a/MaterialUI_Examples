import { Controller } from "react-hook-form";
import { InputAdornment, styled, TextField } from "@mui/material";
import { IoSearchOutline } from "react-icons/io5";
import { useEffect, useRef } from "react";

const Kbd = styled("kbd")(({ theme }) => ({
  display: "inline-block",
  fontSize: "0.85rem",
  fontWeight: 700,
  padding: "0.2rem 0.4rem",
  background: "#eee",
  border: "1px solid #b4b4b4",
  boxShadow: theme.shadows[16],
  borderRadius: "0.3rem",
  color: "#333",
  lineHeight: 1,
}));

export default function SearchBar({
  name,
  rules,
  control,
  hotKey = "/",
  InputProps = null,
  fullWidth = true,
  sx = {},
  options = {},
}) {
  const inputRef = useRef();

  useEffect(() => {
    //  When event triggerred, funciton will be run.
    const handleKeyDown = (e) => {
      if (e.key === hotKey) {
        e.preventDefault();
        inputRef.current.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [hotKey]);

  return (
    <Controller
      rules={rules}
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          {...options}
          InputProps={
            InputProps
              ? InputProps
              : {
                  sx: { fontSize: "1.4rem" },
                  startAdornment: (
                    <InputAdornment position={"start"}>
                      <IoSearchOutline />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position={"end"}>
                      <Kbd>{hotKey}</Kbd>
                    </InputAdornment>
                  ),
                }
          }
          fullWidth={fullWidth}
          placeholder={"Search by name, symbol or address"}
          inputRef={inputRef}
          sx={sx}
        ></TextField>
      )}
      name={name}
    />
  );
}
