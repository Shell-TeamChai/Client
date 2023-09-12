import * as React from 'react';
import { Box, Button, Typography, Modal, Grid } from '@mui/material';

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

export default function BasicModal() {
  const [openFeedback, setOpenFeedback] = React.useState(false);
  const handleOpenFeedback = () => setOpenFeedback(true);
  const handleCloseFeedback = () => setOpenFeedback(false);
  const [openIssue, setOpenIssue] = React.useState(false);
  const handleOpenIssue = () => setOpenIssue(true);
  const handleCloseIssue = () => setOpenIssue(false);

  return (
    <div>
      <Grid container justify='center' style={{justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>
        <Grid item lg={8} md={8}>
        <Typography variant='h5' style={{marginTop: '30vh'}}>
            Submit Feedback / Raise Issue
        </Typography>
        <Typography variant='caption'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Typography>
        <Button variant='outlined' onClick={handleOpenFeedback} style={{marginTop: '3vh'}}>Feedback</Button>
        <Button variant='outlined' onClick={handleOpenIssue} style={{marginTop: '3vh', marginLeft: '2vw'}}>Issue</Button>
            <Modal
                open={openFeedback}
                onClose={handleCloseFeedback}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Feedback
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                </Typography>
                </Box>
            </Modal>
            <Modal
                open={openIssue}
                onClose={handleCloseIssue}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Issue
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                </Typography>
                </Box>
            </Modal>
        </Grid>
      </Grid>
    </div>
  );
}