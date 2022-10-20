import Dialog from "@material-ui/core/Dialog";
import { DialogTitle } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";

const MyDialog = ({ onClose, title, open, children }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>
        <Typography component="h1" variant="h5" color="inherit" noWrap>
          {title}
        </Typography>
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button
          variant="outlined"
          startIcon={<CloseIcon />}
          onClick={onClose}
        ></Button>
      </DialogActions>
    </Dialog>
  );
};

export default MyDialog;
