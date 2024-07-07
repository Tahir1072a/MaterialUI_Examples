import {
  Button,
  ClickAwayListener,
  Grow,
  Paper,
  Popper,
  Stack,
} from "@mui/material";
import { useRef, useState } from "react";

export default function CustomMenu({
  children,
  renderButton,
  transitionTimeout = 300,
}) {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef();

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  return (
    <Stack>
      {/*  Bu şekilde bir tasarım yapılarak hem 2 modlu hem de istediğimiz gibi style edilebilen bir button elde ederiz.*/}
      {/*  Parametere olaraka gönderilen nesne, dışarıda ilgili componente rahat bir şekilde geçirilebilir. Aynı Controller render propu gibi çalışır. */}
      {renderButton({
        ref: anchorRef,
        onClick: handleOpen,
        onMouseEnter: handleOpen,
        onMouseLeave: handleClose,
      })}

      <Popper
        open={open}
        /* Anchor el hangi elemente göre render edileceğini belirler. */
        anchorEl={anchorRef.current}
        /*Anchoer el ile belirlenen bileşeni neresinde render edileceğini belirler*/
        placement={"bottom"}
        /*Bu prop animasyon işlevlerinin çalışmasını sağlamaya yarar*/
        transition
      >
        {({ TransitionProps, placement }) => (
          // Bu bileşen yumuşak bir şekilde açılarak gelmesini sağlar menunün.
          <Grow
            {...TransitionProps}
            timeout={transitionTimeout}
            style={{
              transformOrigin: "left top",
            }}
          >
            <Paper>
              {/*  Bu component içine aldığı bileşenlerin dışına tıklanıp tıklanmadığını tespit eder. */}
              <ClickAwayListener onClickAway={handleClose}>
                {/*  Açılır menu içinde yer alacak bileşenimiz buraya gelecektir. */}
                {children}
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Stack>
  );
}
