

import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Typography from '@mui/joy/Typography';
import Card from '@mui/joy/Card';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import TwoSidedLayout from '../components/TwoSidedLayout';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import Input from '@mui/joy/Input'
import { Stack } from '@mui/joy';

export default function Hero() {
  return (

    <TwoSidedLayout>
      <Typography
        color='primary'
        
        noWrap
        sx={{
          '@media (max-width: 600px)': {
            fontSize: '3rem', 
            fontWeight: 'bold',
          },
          '@media (min-width: 601px)': {
            fontSize: '5rem', 
            fontWeight: 'xl',
          },
        }}
      >
        Philancer
        
        
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
        Your platform to hire the perfect freelancers from the Philippines
      </Typography>
      <Typography fontSize="lg" textColor="text.secondary" lineHeight="lg" sx={{
        '@media (max-width: 600px)': {
          display: 'none', // Hide on screens smaller than 600px
        },
      }}>
        No more BPO or Recruitment agencies.
        Deal with freelancers DIRECTLY. 
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
            Scale faster. Scale cheaper.
          </Typography>
          <Typography level="body2">
            Launching soon<br />
          </Typography>
        </Box>
      </Card>
      
      <a href=" https://4pycls9h5at.typeform.com/to/j6ZjApwK" target="_blank" rel="noopener noreferrer">
      <Button variant='solid' color='primary'>Subscribe now</Button>
      </a>
     
    </TwoSidedLayout>
  );
}
