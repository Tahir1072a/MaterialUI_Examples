import { createContext, useContext, useState, useTransition } from "react";
import { Box, styled, Tabs } from "@mui/material";

const TabBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",

  padding: theme.spacing(2),
  gap: theme.spacing(2),
}));

const CustomPanel = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
}));

// Componentler arası bilgi paylaşımı için bir contex-bağlam oluşturuyoruz.
const WrapperContex = createContext();

// Daha genel amaçlı bir kullanım sağlayabilecek olan Tab Componenti.

/**
 * Gerekli fonksiyonları ve değişkenleri provide eden component.
 * @param children
 * @param tabBoxStyle
 * @returns {JSX.Element}
 * @constructor
 */
export default function TabContext({ children, tabBoxStyle = null }) {
  const [currentTab, setCurrentTab] = useState(0);

  const [isPending, startTransaction] = useTransition();

  function handleTabChange(e, newIndex) {
    startTransaction(() => {
      setCurrentTab(newIndex);
    });
  }

  return (
    <WrapperContex.Provider value={{ handleTabChange, currentTab }}>
      <TabBox sx={{ ...tabBoxStyle }}>{children}</TabBox>
    </WrapperContex.Provider>
  );
}

/**
 * Tabları saran ve onlarla ilgili olayları kontrol eden bir component.
 * @param children - Tab compnenti alır. (Sekmeler)
 * @param tabsStyle - Wrapper'ı özelleştirmek için kullanılabilir. Bir css nesnesi alır.
 * @param additionalOptions - Tabs ile ilgili ek özellikleri içeren (scrollable, indicatorColor vb.) bir nesne alır.
 * @returns {JSX.Element}
 * @constructor
 */
export function TabsWrapper({ children, tabsStyle, additionalOptions }) {
  const { handleTabChange, currentTab } = useContext(WrapperContex);

  return (
    <Tabs
      sx={{ ...tabsStyle }}
      value={currentTab}
      onChange={handleTabChange}
      {...additionalOptions}
    >
      {children}
    </Tabs>
  );
}

/**
 *
 * @param children - Panelin içine kullanıcı ne yerleştirmek istiyorsa
 * @param index - panelin bir özel bir index numarası olmalıdır. Panel ayarları bununla kontrol edilecektir.
 * @param panelStyle - Sarmalayan bileşeni özelleştirmek için bir css nesnesi alır.
 * @constructor
 */
export function TabPanel({ children, index, panelStyle }) {
  const { currentTab } = useContext(WrapperContex);

  if (currentTab !== index) return;

  return <CustomPanel sx={{ ...panelStyle }}>{children}</CustomPanel>;
}
