import { Backdrop, Box, Grow, Modal, styled } from "@mui/material";

const StyledBox = styled(Box)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%) !important",
});

// Kendi özel tıklanabilir açılır pencerem.
/**
 * Açılma ve kapanma olayları dışarıdan yönetilen ve içerisine istediği bir elementi alabilen modal.
 * @param renderButton - Modal'ın açılması için istenilen bir button koyulabilir.
 * @param handleClose - Modal'ın kapanmasını kontrol eden bir fonksiyon
 * @param open - Modal'ın açılma olayını yöneten state
 * @param modalOptions - MUI modal componentinin ek ayarları için bir parametre
 * @param modalTimeout - Modal'ın grow animasyonu için gerekli timeout süresi
 * @param backdropComponent - Pencere açıldığında arka plan render edilecek olan component.
 * @param backdropTimeout - Backdrop'un animasyon süresi
 * @param children
 * @returns {JSX.Element}
 * @constructor
 */
export default function CustomModal({
  renderButton,
  handleClose,
  open,
  modalOptions = {},
  modalTimeout = 700,
  backdropComponent = Backdrop,
  backdropTimeout = 700,
  children,
}) {
  return (
    <Box>
      {renderButton}
      <Modal
        {...modalOptions}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slot={{ backdrop: backdropComponent }}
        slotProps={{
          backdrop: {
            timeout: backdropTimeout,
          },
        }}
      >
        <Grow in={open} {...(open ? { timeout: modalTimeout } : {})}>
          <StyledBox>{children}</StyledBox>
        </Grow>
      </Modal>
    </Box>
  );
}
