import EditIcon from "@mui/icons-material/Edit";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TextField, Grid } from "@mui/material";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import { useDispatch } from "react-redux";
import { useState } from "react";

import { updateSocials } from "../../../ProfileSlice";

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
    handleClose();
    const socialData = new FormData(event.currentTarget);
    const socials = {
      address: socialData.get("address"),
      linkedIn: socialData.get("linkedIn"),
      facebook: socialData.get("facebook"),
      twitter: socialData.get("twitter"),
      instegram: socialData.get("instegram"),
    };
    console.log(socials);
    dispatch(updateSocials(socials));
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
              <Box component="form" noValidate onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <LocationOnIcon className="input-social-icon" />
                    <TextField
                      name="address"
                      id="outlined-basic"
                      label="Address"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <LinkedInIcon className="input-social-icon" />
                    <TextField
                      name="linkedIn"
                      id="outlined-basic"
                      label="LinkedIn"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FacebookIcon className="input-social-icon" />
                    <TextField
                      name="facebook"
                      id="outlined-basic"
                      label="Facebook"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TwitterIcon className="input-social-icon" />
                    <TextField
                      name="twitter"
                      id="outlined-basic"
                      label="Twitter"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <InstagramIcon className="input-social-icon" />
                    <TextField
                      name="instegram"
                      id="outlined-basic"
                      label="Instegram"
                      variant="outlined"
                    />
                  </Grid>
                </Grid>
                <div className="update-btn-container">
                  <Button className="update-btn" type="submit">
                    Aplly
                  </Button>
                  <Button className="update-btn" type="submit">
                    ok
                  </Button>
                </div>
              </Box>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default NameAndEdit;
