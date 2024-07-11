import { Backdrop, Box, Grow, Modal, styled } from "@mui/material";

const StyledBox = styled(Box)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%) !important",
});

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
