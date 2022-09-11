import {useState} from 'react';
import "./calendar.css";
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MewPaymentForm from './NewPayForm';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#ffe6a7',
  border: '2px solid #ffe6a7',
  boxShadow: 24,
  p: 4,
  borderRadius: 8,
};

export default function ModalCalendar({day, mounth, year}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="popup">
      <Button onClick={handleOpen} className="open-payment-btn">payment</Button>
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
            <Typography className='modal-title' id="transition-modal-title" variant="h6" component="h2">
              The date you've selected:
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                <h3 className="selected-date">
                {day}.{mounth}.{year}
                </h3>,
              <MewPaymentForm/>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
