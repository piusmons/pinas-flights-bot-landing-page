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
                Choose your base country (example: Japan)
              </Typography>
              <Typography level="body2">
                Bots will track the best Japan-Philippines flights  <br />
              </Typography>
            </Box>
          </Card>

        </Grid>
        <Grid item xs={6}>
          <Card
            variant="soft"
            color="neutral"
            orientation="vertical"
            sx={{ gap: 4, my: 1, alignItems:'center' }}
          >
            <CircleNotificationsRoundedIcon color="info" fontSize="xl5" sx={{mt:2}}/>
            <Box>
              <Typography fontSize="xl" fontWeight="lg" sx={{ mb: 1 }}>
                Instant notifications
              </Typography>
              <Typography level="body2">
                Get alerts straight to your phone real-time from our bot.
                
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
                Free trial now available
              </Typography>
              <Typography level="body2">
                Limited offer only for Japan based Filipinos <br />
              </Typography>
            </Box>
          </Card>

        </Grid>
        
      </Grid>
      

      
    </Container>
  );
}
