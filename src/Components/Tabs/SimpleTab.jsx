import { useState, useTransition } from "react";
import { Box, styled, Tab, Tabs } from "@mui/material";

const TabBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",

  padding: theme.spacing(2),
  gap: theme.spacing(2),

  background: "#dad5a5",
}));

const StyledCustomPanel = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
}));

// Burası asıl içeriğin gösterileceği alan.
function CustomPanel({ index, current, children }) {
  // Basit bir render control işlemi yapar.
  if (current !== index) return;

  return <StyledCustomPanel>{children}</StyledCustomPanel>;
}

// Sekmelerin en basit hali ile kullanımını gösteren bir component.
export default function SimpleTab() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Bkz. https://react.dev/reference/react/useTransition
  const [isPending, startTransaction] = useTransition();

  /**
   * Tablar arasıda geçiş yapıldığında tetiklenecek olan fonksiyon. onChange -> bu fonksiyonu tetikler.
   * @param {Event} e - Standart olay nesnesi.
   * @param newIndex - Geçiş yapılan tab2ın index değeri. Index değerleri Tabs içinde sıfırdan başlamak üzere sırayla verilir.
   */
  function handleTabChange(e, newIndex) {
    startTransaction(() => {
      setCurrentIndex(newIndex);
    });
  }

  return (
    // Sıradan bir box elementi ile sardık.
    <TabBox>
      {/* Tabs düğmeleri yöneten temel bileşendir. */}
      <Tabs onChange={handleTabChange} value={currentIndex}>
        <Tab label={"Tab1"} />
        <Tab label={"Tab2"} />
        <Tab label={"Tab3"} />
      </Tabs>

      {/* Custom Panel kendi tasarladığım bir componenttir. Görevi içinde bulunan childrenların render edilip edilmeyeceğini belirlemektir.*/}
      <CustomPanel index={0} current={currentIndex}>
        <p>Panel 1</p>
      </CustomPanel>
      <CustomPanel index={1} current={currentIndex}>
        <p>Panel 2</p>
      </CustomPanel>
      <CustomPanel index={2} current={currentIndex}>
        <p>Panel 3</p>
      </CustomPanel>
    </TabBox>
  );
}
