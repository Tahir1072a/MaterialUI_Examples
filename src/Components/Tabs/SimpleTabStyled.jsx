import { useState, useTransition } from "react";
import { Box, styled, Tab, Tabs } from "@mui/material";
import { LiaSwimmingPoolSolid } from "react-icons/lia";
import { TiStarOutline } from "react-icons/ti";
import { FaBookSkull } from "react-icons/fa6";
import theme from "../../Styles/theme.js";

const TabBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
}));

const StyledCustomPanel = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  width: "40rem",

  padding: theme.spacing(6),
  background: theme.palette.background.bg700,
  borderRadius: "0 0 1.2rem 1.2rem",
}));

const StyledTabs = styled(Tabs)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledTab = styled(Tab)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  // Tabların yüksekliğini değiştirmek için hem minHeight hem de Height aynı anda değişmelidir, yoksa css işe yaramayacaktır.
  minHeight: "48px",
  height: "48px",
  background: "none",
  border: "none",
  gap: theme.spacing(2),
  fontSize: theme.typography.h5.fontSize,
  fontWeight: theme.typography.h5.fontWeight,
  textTransform: "none",
  // Saat yönünde olmak üzere kenarlara yuvarlaklık katar.
  borderRadius: "1.2rem 1.2rem 0 0",

  // Seçili olan öğeyi etkileyen bir sınıftır.
  "&.Mui-selected": {
    background: theme.palette.background.bg700,
    color: theme.palette.whiteAlpha.Alpha_800,
  },
}));

// Burası asıl içeriğin gösterileceği alan.
function CustomPanel({ index, current, children }) {
  // Basit bir render control işlemi yapar.
  if (current !== index) return;

  return <StyledCustomPanel>{children}</StyledCustomPanel>;
}

// Sekmelerin en basit hali ile kullanımını gösteren bir component.
export default function SimpleTabStyled() {
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
      <StyledTabs
        onChange={handleTabChange}
        value={currentIndex}
        /* Tab indicator props, indicator bileşenine girilen propları aktarır. Rengi background color ile değiştirilebilir. */
        TabIndicatorProps={{
          sx: {
            backgroundColor: theme.palette.background.bg700,
          },
        }}
        /*Sekmeleri bulunduğu alanda ortalar.*/
        centered
      >
        <StyledTab
          label={"Tab1"}
          icon={<LiaSwimmingPoolSolid />}
          iconPosition={"start"}
        />
        <StyledTab
          label={"Tab2"}
          icon={<TiStarOutline />}
          iconPosition={"start"}
        />
        <StyledTab
          label={"Tab3"}
          icon={<FaBookSkull />}
          iconPosition={"start"}
        />
      </StyledTabs>

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
