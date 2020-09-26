import { useState, forwardRef, useImperativeHandle } from "react";
import { CgClose } from "react-icons/cg";
import "../styles/dialog.scss";

const DialogLayout = (Page) => {
  return forwardRef((props, ref) => {
    const [open, setOpen] = useState(false);

    useImperativeHandle(ref, () => ({
      openDialog() {
        setOpen(true);
      },
      closeDialog() {
        setOpen(false);
      },
    }));

    function closeDialog() {
      setOpen(false);
    }

    return (
      <div className={`dialog ${open ? "open" : "hide"}`}>
        <div className="header">
          <CgClose className="close" onClick={closeDialog} />
        </div>
        <Page />
      </div>
    );
  });
};

export default DialogLayout;
