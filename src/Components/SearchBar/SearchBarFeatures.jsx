// Standart bir search bar.
import { Controller, useForm } from "react-hook-form";
import { Box, InputAdornment, styled, TextField } from "@mui/material";
import { IoSearchOutline } from "react-icons/io5";
import { useEffect, useRef } from "react";

const Kbd = styled("kbd")(({ theme }) => ({
  backgroundColor: "#eee",
  borderRadius: "3px",
  border: "1px solid #b4b4b4",
  boxShadow:
    "0 1px 1px rgba(0, 0, 0, 0.2), 0 2px 0 0 rgba(255, 255, 255, 0.7) inset",
  color: "#333",
  display: "inline-block",
  fontSize: "0.85em",
  fontWeight: 700,
  lineHeight: 1,
  padding: "2px 4px",
  whiteSpace: "nowrap",
}));

const searchInputProps = {
  sx: { fontSize: "1.4rem" },
  startAdornment: (
    <InputAdornment
      position={"start"}
      sx={{ "& svg": { width: "2rem", height: "2rem" } }}
    >
      <IoSearchOutline />
    </InputAdornment>
  ),
  endAdornment: (
    <InputAdornment position={"end"}>
      {/*  Kısayol tuşumuz.*/}
      <Kbd>/</Kbd>
    </InputAdornment>
  ),
};

export default function SearchBarFeatures() {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      searchBar: "",
    },
  });
  const inputRef = useRef();

  // Kısayol atamsı yapabilmek için bir event olayını dinlememiz gerekiyor. UseEffect ile bu DOM'a bu component initilaze edilirken bir event yerleştireceğiz.
  // DipNot: useHotKeys hooku kullanrak ikinci bir yol ile yapılabilir.
  useEffect(() => {
    // İlgili evente gerçekleştiğinde çalıştırılacak olan fonksiyonu yazıyoruz.
    const handleKeyDown = (e) => {
      // Eğer basılan tuş ... ise
      if (e.key === "/") {
        // Bu tuşa basıldığında olabilecek default avranışı engelle.
        e.preventDefault();
        // useFormdan gelen setFocus property'si işe yaramadı. Ancak doğrudan textField'ın inputuna ref geçerek yaptığımız bu yöntem çalışıyor.
        inputRef.current.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box sx={{ width: "45rem" }}>
        <Controller
          render={({ field }) => (
            <TextField
              {...field}
              inputRef={inputRef}
              id={"search-bar"}
              placeholder={"Ara"}
              variant={"outlined"}
              InputProps={searchInputProps}
              fullWidth
            />
          )}
          name={"searchBar"}
          control={control}
        ></Controller>
      </Box>
    </form>
  );
}
