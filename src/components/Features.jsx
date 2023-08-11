import React from 'react';

import Container from '@mui/joy/Container';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Card from '@mui/joy/Card';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import Grid from '@mui/joy/Grid';
import EmojiFlagsRoundedIcon from '@mui/icons-material/EmojiFlagsRounded';
import CircleNotificationsRoundedIcon from '@mui/icons-material/CircleNotificationsRounded';
import PriorityHighRoundedIcon from '@mui/icons-material/PriorityHighRounded';

export default function Features() {
  return (
    <Container
      sx={(theme) => ({
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        py: 10,
        gap: 4,
        [theme.breakpoints.up(834)]: {
          flexDirection: 'row',
          gap: 6,
        },
        [theme.breakpoints.up(1199)]: {
          gap: 12,
        },
        
        
      })}
    >
      <Grid container spacing={2} >
        <Grid item xs={12}>
          <Card
            variant="outlined"
            color="neutral"
            orientation="vertical"
            sx={{ gap: 4, my: 1, alignItems:'center' }}
          >
            <EmojiFlagsRoundedIcon color="info" fontSize="xl5" sx={{mt:2}}/>
            <Box>
              <Typography fontSize="xl" fontWeight="lg" sx={{ mb: 1 }}>
                Hire the best Filipino freelancers
              </Typography>
              <Typography level="body2">
               Salesforce devs, paralegals, virtual assistants, video editors, graphic designers.
               <br />
                You name it. the platform will connect you with the best, and brightest talent <br />
              </Typography>
            </Box>
          </Card>

        </Grid>
        <Grid item xs={6}>
          <Card
            variant="outlined"
            color="neutral"
            orientation="vertical"
            sx={{ gap: 4, my: 1, alignItems:'center' }}
          >
            <CircleNotificationsRoundedIcon color="info" fontSize="xl5" sx={{mt:2}}/>
            <Box>
              <Typography fontSize="xl" fontWeight="lg" sx={{ mb: 1 }}>
                No more agency fees
              </Typography>
              <Typography level="body2">
                Recruiters fees are usually 30% of 12 * per month of each placement.
                Bpo's have very high turnover rates. 
                Skip the middle-men and deal with <Typography variant='soft' level='title-lg'> your</Typography>employees directly.

              </Typography>
            </Box>
          </Card>

        </Grid>
        <Grid item xs={6}>
          <Card
            variant="outlined"
            color="neutral"
            orientation="vertical"
            sx={{ gap: 4, my: 1, alignItems:'center' }}
          >
            <PriorityHighRoundedIcon color="info" fontSize="xl5" sx={{mt:2}}/>
            <Box>
              <Typography fontSize="xl" fontWeight="lg" sx={{ mb: 1 }}>
                Escrow payments available!
              </Typography>
              <Typography level="body2">
                Escrow payments features to protect both parties. 
                <br />
                Only release payment when work has been rendered. 
                Pay hourly, or per project, it's your choice!
              </Typography>
            </Box>
          </Card>

        </Grid>
        
      </Grid>
      

      
    </Container>
  );
}
