import React, {useState, useEffect} from 'react';
import { Grid, Typography, Accordion, AccordionSummary, AccordionDetails, Rating } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ClientFeedback = () => {
    const [feedbacks, setFeedbacks] = useState([]);
    const [issues, setIssues] = useState([]);

    useEffect(() => {
      fetch('http://localhost:5128/api/Feedbacks/')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setFeedbacks(data);
      })
      .catch((error) => {
        console.log(error);
      });
    }, []);

    useEffect(() => {
      fetch('http://localhost:5128/api/Grievances/')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setIssues(data);
      })
      .catch((error) => {
        console.log(error);
      });
    }, []);
  return (
    <>
        <Grid container>
            <Grid item lg={6} md={6}>
            <Typography variant='h6'>Feedback</Typography>
                <Grid container>
                    <Grid item lg={10} md={10}>
                    {feedbacks?.map((feedback) => (
                        <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography>{feedback.user.fname} {feedback.user.lname}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Rating name="read-only" value={feedback.rating} readOnly />
                        <Typography>
                            {feedback.description}
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                    ))}
                    </Grid>
                </Grid>
            </Grid>
            <Grid item lg={6} md={6}>
            <Typography variant='h6'>Issues</Typography>
                <Grid container>
                    <Grid item lg={10} md={10}>
                   {issues?.map((issue) => (
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography>{issue.user.fname} {issue.user.lname}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                            {issue.description}
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                   ))}
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </>
  );
}

export default ClientFeedback;