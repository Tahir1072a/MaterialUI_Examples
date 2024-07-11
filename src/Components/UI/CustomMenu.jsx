import { ClickAwayListener, Grow, Paper, Popper, Stack } from "@mui/material";
import { useRef, useState } from "react";

/**
 * Children olrak aldığı içeriği ekranda menu olarak gösterir.
 *
 * @param children
 * @param renderButton
 * @param placement
 * @param transformOrigin
 * @param transitionTimeout
 * @returns {JSX.Element}
 * @constructor
 */
export default function CustomMenu({
  children,
  renderButton,
  placement = "bottom",
  transformOrigin = "left top",
  transitionTimeout = 300,
}) {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef();

  const handleClose = () => {
    setOpen(false);
  };
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
        placement={placement}
        /*Bu prop animasyon işlevlerinin çalışmasını sağlamaya yarar*/
        transition
      >
        {({ TransitionProps, placement }) => (
          // Bu bileşen yumuşak bir şekilde açılarak gelmesini sağlar menunün.
          <Grow
            {...TransitionProps}
            timeout={transitionTimeout}
            style={{
              transformOrigin: transformOrigin,
            }}
          >
            <Paper sx={{ display: "flex" }}>
              {/*  Bu component içine aldığı bileşenlerin dışına tıklanıp tıklanmadığını tespit eder. */}
              <ClickAwayListener onClickAway={handleClose}>
                {/*  Açılır menu içinde yer alacak bileşenimiz buraya gelecektir. */}
                {/*  Div içine sarıyoruz çünkü, ClickAwayListener dışa tıklamayı ref üzerinden yapıyor. Ve childrena bir ref geçiremez ise çalışmıyor. */}
                {/*  Div gibi html elementlerinden bu sorun ortadan kalkıyor çünkü onlara rahatlıkla ref geçirebilyor.*/}
                <div>{children}</div>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Stack>
  );
}
