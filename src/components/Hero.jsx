

import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Typography from '@mui/joy/Typography';
import Card from '@mui/joy/Card';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import TwoSidedLayout from '../components/TwoSidedLayout';
import SmartToyIcon from '@mui/icons-material/SmartToy';


export default function Hero() {
  return (

    <TwoSidedLayout>
      <Typography
        color='primary'
        noWrap
        sx={{
          '@media (max-width: 600px)': {
            fontSize: '2.5rem', 
            fontWeight: 'bold',
          },
          '@media (min-width: 601px)': {
            fontSize: '4rem', 
            fontWeight: 'xl',
          },
        }}
      >
        Fly Pinas Bot
        <SmartToyIcon color='info' sx={{
          '@media (max-width: 600px)': {
            pt:2
          },
          '@media (min-width: 601px)': {
            pt:5
          },
        }}/>
      </Typography>
      <Typography
        level="h2"
        fontWeight="xl"
        sx={{
          '@media (max-width: 600px)': {
            fontSize: '1rem', // Apply h5 styles on screens smaller than 600px
            fontWeight: 'bold',
          },
          '@media (min-width: 601px)': {
            fontSize: '2.5rem', // Apply h2 styles on screens larger than 600px
            fontWeight: 'xl',
          },
        }}
      >
        Your Smart Travel Buddy for Catching Low-Cost Flights to the Philippines!
      </Typography>
      <Typography fontSize="lg" textColor="text.secondary" lineHeight="lg" sx={{
        '@media (max-width: 600px)': {
          display: 'none', // Hide on screens smaller than 600px
        },
      }}>
        get instant alerts on your phone when our bot finds a cheap flight to the Philippines!
      </Typography>
      <Card
        variant="outlined"
        color="neutral"
        orientation="horizontal"
        sx={{ gap: 2, my: 1, textAlign: 'left' }}
      >
        <AutoAwesomeIcon color="info" fontSize="xl3" />
        <Box>
          <Typography fontSize="xl" fontWeight="lg" sx={{ mb: 1 }}>
            Exclusive free trial is out.
          </Typography>
          <Typography level="body2">
            Currently available for Filipinos based in Japan <br />
          </Typography>
        </Box>
      </Card>
      <Button size="lg" color='info' variant='soft'>Get the bot now</Button>
      
      
    </TwoSidedLayout>
  );
}
