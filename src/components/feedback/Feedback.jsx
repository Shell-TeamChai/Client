import Lottie from "react-lottie";
import { Grid } from '@mui/material';
import animation from './animation.json';
import FeedbackModal from './FeedbackModal';

const Feedback = () => {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <Grid container>
        <Grid item lg={5} md={5}>
        <Lottie
          style={{ height: "90%", padding: "50px 20px" }}
          options={defaultOptions}
        />
        </Grid>
        <Grid item lg={7} md={7}>
          <FeedbackModal/>
        </Grid>
      </Grid>
    </>
  );
}

export default Feedback;