import { Button, Menu, MenuItem, Stack } from "@mui/material";
import { useState } from "react";

// Kullanılabilecek en basit menulerden biri. İşimize yarayacak ise birkaç özelleştirme vb. şeyler yapılarak bu hali ile menu kullanılabilir.
// Ancak farklı birşey isityorsak veya menu açıldığında scroll özelliğinin engellenmesini istemiyorsak o zaman popper bileşeni ile yola devam edeceğiz.
export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleOpenClick = (e) => setAnchorEl(e.currentTarget);
  const handleCloseClick = () => setAnchorEl(null);

  return (
    <Stack>
      {/*  Menunun açılığ kapanmasını sağlayan button.*/}
      <Button id={"open-menu"} onClick={handleOpenClick}>
        Open Menu
      </Button>

      {/*  Bir menu bileşeni. */}
      <Menu
        id={"basic-menu"}
        open={open}
        anchorEl={anchorEl}
        onClose={handleCloseClick}
      >
        {/*  Menu açıldığında içinde gösterilecek seçenekler. */}
        <MenuItem onClick={handleCloseClick}>Item 1</MenuItem>
        <MenuItem onClick={handleCloseClick}>Item 2</MenuItem>
        <MenuItem onClick={handleCloseClick}>Item 3</MenuItem>
      </Menu>
    </Stack>
  );
}
