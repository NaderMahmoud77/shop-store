import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import { removeItemFromCart } from "../../redux/apiCall/cartApiCall";
import { openClose } from "../../redux/slices/openSnakeSlice.js";
import { useDispatch } from "react-redux";

export default function DialogDelete({ openDialog, setOpenDialog, id }) {
  let dispatch = useDispatch();

  const handleClose = () => {
    setOpenDialog(false);
  };

  return (
    <>
      <Dialog
        BackdropProps={{
          sx: {
            backgroundColor: "rgba(0,128,128,0.2)", 
          },
        }}
        open={openDialog}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          هل انت متأكد من حذف المنتج ؟
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            style={{ fontSize: "20px" }}
          >
            عند الضغط علي تأكيد سيتم حذف المنتج من سله التسوق <b /> اذا كنت لا
            تريد الحذف اضغط لا
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            <h3 className="dialog-no">لا</h3>
          </Button>
          <Button
            onClick={() => {
              dispatch(removeItemFromCart(id));
              dispatch(
                openClose.openSnack({
                  message: "تم الحذف بنجاح",
                  severity: "erro",
                })
              );
              setTimeout(() => {
                dispatch(openClose.closeSnack());
              }, 5000);

              handleClose();
            }}
          >
            <h3 className="dialog-yes">تأكيد</h3>
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
