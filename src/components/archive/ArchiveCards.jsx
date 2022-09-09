import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import SearchBoxArchive from './SearchBoxArchive';



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
   
};

export default function ArchiveCards(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
        <Card sx={{ maxWidth: 345, minWidth:200 ,flexDirection:'column'}}>
      <CardActionArea>
        <CardMedia
          component={props.component}
          height={props.height}
          image={props.image}
          alt={props.alt}
          onClick={handleOpen}
        />
        <CardContent
            onClick={handleOpen}>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
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
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              search available files:
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }} >
               <SearchBoxArchive files={props.files} label={props.label}/>
            </Typography>
          </Box>
        </Fade>
      </Modal>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          open
        </Button>
      </CardActions>
    </Card>
    </div>
  );
}
