import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2'; 
import TransitionsModal from "./Modal";
import Container from '@mui/material/Container';
import './style.css'

export default function MultiActionAreaCard() {
  return (
    <Container maxWidth="lg" className='publicationContainer'>
        <Grid container spacing={2}>
            <Grid item xs={3}>
                <TransitionsModal className="font"
                    src="https://cxuniversity.com/wp-content/uploads/2018/09/3736-min.jpg"
                    title={"The worker of the month"}
                    description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit..."}
                />
            </Grid>
            <Grid item xs={3} className="gridSize">
                <TransitionsModal className="font"
                 src="https://img.huffingtonpost.com/asset/5cd6fd50240000310076eccd.jpeg?ops=1778_1000"
                 title={"Work Together"}
                 description={"sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..."}
                 />
            </Grid>
            <Grid item xs={3}>
                <TransitionsModal className="font"
                 src="https://www.jme-hr.com/wp-content/uploads/2017/10/shutterstock_653243296-1800x1200.jpg"
                 title={"Great Deal"}
                 description={"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat..."}
                 />
            </Grid>
            <Grid item xs={3}  >
                <TransitionsModal className="font"
                 src="https://thumbs.dreamstime.com/b/successful-company-happy-workers-modern-office-160437985.jpg"
                 title={"Success is the key!"}
                 description={ "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum..."}
                 />
                
            </Grid>
        </Grid>
    </Container>
  );
}