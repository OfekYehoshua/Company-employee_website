import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import "./style.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  minHeight: 300,
  color: "black",
  bgcolor: "#ffe6a7",
  border: "2px solid #ffe6a7",
  boxShadow: 24,
  p: 4,
  borderRadius: 10,
};

export default function TransitionsModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Card className="card-container">
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={props.src}
            alt="green iguana"
            onClick={handleOpen}
          />
          <CardContent onClick={handleOpen} className="card-content">
            <Typography
              className="card-title"
              gutterBottom
              variant="h5"
              component="div"
            >
              {props.title}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              className="description"
            >
              {props.description}
            </Typography>
          </CardContent>
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
              <Box className="modal-container" sx={style}>
                <Typography
                  id="transition-modal-title"
                  variant="h6"
                  component="h2"
                >
                  {props.title}
                </Typography>
                <Typography
                  id="transition-modal-description"
                  className="modal-description"
                >
                  {props.modalDescription}
                </Typography>
              </Box>
            </Fade>
          </Modal>
        </CardActionArea>
        <CardActions className="button-container">
          <Button
            size="small"
            color="primary"
            className="effect"
            id="tap"
            onClick={handleOpen}
          >
            Tap to read
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
