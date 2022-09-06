import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2'; 
import TransitionsModal from "./Modal";
import Container from '@mui/material/Container';


export default function MultiActionAreaCard() {
  return (
    <Container maxWidth="lg">
        <Grid container spacing={2}>
            <Grid item xs={3}>
                <TransitionsModal/>
            </Grid>
            <Grid item xs={3}>
                <TransitionsModal/>
            </Grid>
            <Grid item xs={3}>
                <TransitionsModal/>
            </Grid>
            <Grid item xs={3}>
                <TransitionsModal/>
            </Grid>
        </Grid>
    </Container>
  );
}