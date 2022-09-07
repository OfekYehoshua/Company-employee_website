import EditIcon from "@mui/icons-material/Edit";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { TextField, Grid } from "@mui/material";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { updateSocials } from "../../ProfileSlice";
import { useDispatch } from "react-redux";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const NameAndEdit = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const values = {
      Address: data.get("Address"),
      LinkedIn: data.get("LinkedIn"),
      Facebook: data.get("Facebook"),
      Twitter: data.get("Twitter"),
      Instegram: data.get("Instegram"),
    };
    dispatch(updateSocials(values));
    handleClose();
  };

  return (
    <div className="edit-container">
      <h1 className="profile-details profile-title">{props.profileName}</h1>
      <Button onClick={handleOpen}>
        <EditIcon className="edit-icon" />
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Change your details
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <LocationOnIcon className="input-social-icon" />
                  <TextField id="Address" label="Address" variant="outlined" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <LinkedInIcon className="input-social-icon" />
                  <TextField
                    id="LinkedIn"
                    label="LinkedIn"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FacebookIcon className="input-social-icon" />
                  <TextField
                    id="Facebook"
                    label="Facebook"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TwitterIcon className="input-social-icon" />
                  <TextField id="Twitter" label="Twitter" variant="outlined" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <InstagramIcon className="input-social-icon" />
                  <TextField
                    id="Instegram"
                    label="Instegram"
                    variant="outlined"
                  />
                </Grid>
              </Grid>
              <div className="update-btn-container">
                <Button className="update-btn" onClick={() => handleSubmit()}>
                  Aplly
                </Button>
                <Button className="update-btn" onClick={() => handleSubmit()}>
                  ok
                </Button>
              </div>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default NameAndEdit;
