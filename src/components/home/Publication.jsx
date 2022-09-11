import Grid from "@mui/material/Unstable_Grid2";
import TransitionsModal from "./Modal";
import Container from "@mui/material/Container";
import "./style.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";



// import { width } from "@mui/system";

export default function MultiActionAreaCard() {
  useEffect(()=>{
      Aos.init({duration: 2000});
  },[]);
  // const { innerWidth:width} = window;
  
  return (
    <Container maxWidth="lg" className="publicationContainer">
      <Grid container spacing={2}  data-aos="flip-up">
        <Grid item xs={3}>
          <TransitionsModal 
            className="font"
            src="https://cxuniversity.com/wp-content/uploads/2018/09/3736-min.jpg"
            title={"The worker of the month"}
    
            description={
              "A tilte that given to the exceptional worker in the volunteering aspect, doing.."
            }
            modalDescription={
              "A tilte that given to the exceptional worker in the volunteering aspect, doing.  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias omnis deleniti deserunt, aliquam voluptatum reiciendis dolor. Eaque quas atque a cumque vel, doloremque ea voluptas eum quasi officia eveniet esse! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias omnis deleniti deserunt, aliquam voluptatum reiciendis dolor. Eaque quas atque a cumque vel, doloremque ea voluptas eum quasi officia eveniet esse! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias omnis deleniti deserunt, aliquam voluptatum reiciendis dolor. Eaque quas atque a cumque vel."
            }
          />
        </Grid>
        <Grid item xs={3} className="gridSize" >
          <TransitionsModal
            className="font"
            src="https://img.huffingtonpost.com/asset/5cd6fd50240000310076eccd.jpeg?ops=1778_1000"
            title={"Work Together"}
            description={
              "Four workers, Three days, Two goals, and One school who got a whole new dynamic learning room. The story from a 8 y.o student..."
            }
            modalDescription={
              "Four workers, Three days, Two goals, and One school who got a whole new dynamic learning room. The story from a 8 y.o student. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias omnis deleniti deserunt, aliquam voluptatum reiciendis dolor. Eaque quas atque a cumque vel, doloremque ea voluptas eum quasi officia eveniet esse! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias omnis deleniti deserunt, aliquam voluptatum reiciendis dolor. Eaque quas atque a cumque vel, doloremque ea voluptas eum quasi officia eveniet esse! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias omnis deleniti deserunt, aliquam voluptatum reiciendis dolor. Eaque quas atque a cumque vel."
            }
          />
        </Grid>
        <Grid item xs={3}>
          <TransitionsModal
            className="font"
            src="https://www.jme-hr.com/wp-content/uploads/2017/10/shutterstock_653243296-1800x1200.jpg"
            title={"Great Deal"}
            description={
              "We did it! Two and half years of talking and planning finally comming around to one last hand shake between our CEO and Microsoft's CEO..."
            }
            modalDescription={
              "We did it! Two and half years of talking and planning finally comming around to one last hand shake between our CEO and Microsoft's CEO.  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias omnis deleniti deserunt, aliquam voluptatum reiciendis dolor. Eaque quas atque a cumque vel, doloremque ea voluptas eum quasi officia eveniet esse! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias omnis deleniti deserunt, aliquam voluptatum reiciendis dolor. Eaque quas atque a cumque vel, doloremque ea voluptas eum quasi officia eveniet esse! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias omnis deleniti deserunt, aliquam voluptatum reiciendis dolor. Eaque quas atque a cumque vel."
            }
          />
        </Grid>
        <Grid item xs={3}>
          <TransitionsModal
            className="font"
            src="https://thumbs.dreamstime.com/b/successful-company-happy-workers-modern-office-160437985.jpg"
            title={"Success is the key!"}
            description={
              "A long time ago our company was intervene, we proud to see the seeds that we sowed bear fruit..."
            }
            modalDescription={
              "A long time ago our company was intervene in a scholarship for low economic status, we proud to see the seeds that we sowed bear fruit Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias omnis deleniti deserunt, aliquam voluptatum reiciendis dolor. Eaque quas atque a cumque vel, doloremque ea voluptas eum quasi officia eveniet esse! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias omnis deleniti deserunt, aliquam voluptatum reiciendis dolor. Eaque quas atque a cumque vel, doloremque ea voluptas eum quasi officia eveniet esse! Lorem ipsum dolor sit amet consectetur, adipisicing elit.."
            }
          />
        </Grid>
      </Grid>
    </Container>
  );
}
