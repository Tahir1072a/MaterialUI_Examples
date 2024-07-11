import {
  Backdrop,
  Box,
  Button,
  Grow,
  Modal,
  Paper,
  styled,
} from "@mui/material";
import { useState } from "react";

const StyledPaper = styled(Paper)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  // Eğer transation geçişi olarak grow, zoom vb. kullanılıyorsa burası important olamsı gerekiyor.
  // Çünkü transfom özelliği onlar tarafından kontrol ediliyor.
  transform: "translate(-50%, -50%) !important",
  border: "2px solid #000",
  padding: "2rem",
}));

// Modal aslında çok basci bir yapı içerir. Bir düğmeye basıldığında açılır bir pencere oluşmasını sağlar.
// Aynı yaptığım customMenu gibi çalışır. Burada içerisine children olarak aldığı bileşeni ekranda açılır pencere olarak görüntüleyecektir.
// Burada can alıcı noktaları paylaşacağım.
export default function ModalFeatures() {
  //   Açılma ve kapanma yönetimi dışarıdan yapılamsı gerekiyor. Aslında bu bazı durumlarda esneklik sağlıyor ;).
  //   Stateler ile iligli küçük bir not: Component DOM'dan kaldırıldığında ilgili state bilgileri de sıfırlanır.
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <Button onClick={handleOpen}>Open Modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        /*Modal kapandıktan sonra onu DOM'dan kaldırır. Performansa yardımcı olur ve kod karmaşıklığını önler.*/
        closeAfterTransition
        /* Model açık olduğunda arka planda gösterilecek olan componenti içerir. */
        slots={{ backdrop: Backdrop }}
        /* Backdrop ile iligli attributeları, özelleştirmeleri alır. */
        slotProps={{
          backdrop: {
            // Arka planın gölgelenmesi olurken bir tık geçiş sağlar.
            timeout: 700,
          },
        }}
      >
        <Grow in={open} {...(open ? { timeout: 700 } : {})}>
          <StyledPaper>Deneme</StyledPaper>
        </Grow>
      </Modal>
    </Box>
  );
}
