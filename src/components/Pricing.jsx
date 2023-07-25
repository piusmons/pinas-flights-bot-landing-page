import React from 'react';
import Typography from '@mui/joy/Typography';
import Container from '@mui/joy/Container';

import Grid from '@mui/joy/Grid';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import Chip from '@mui/joy/Chip';
import Divider from '@mui/joy/Divider';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Check from '@mui/icons-material/Check';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';


export default function Pricing() {
  return (
    <Container
      sx={(theme) => ({
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        py: 10,
        gap: 4,
        [theme.breakpoints.up(834)]: {
          flexDirection: 'row',
          gap: 6,
        },
        [theme.breakpoints.up(1199)]: {
          gap: 2,
        },
      })}
    >
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography
          level='h1'
          variant="h2"
          align="center"
          color="primary"
          gutterBottom
        >
          Pricing
        </Typography>
        <Typography variant="h5" align="center" textColor="text.secondary" component="p">
          Free for a limited time only!
        </Typography>
      </Container>


      <Grid item xs={6}>

      
        <Card size="lg" variant="outlined">
          <Chip size="sm" variant="outlined" color="neutral">
            FREE
          </Chip>
          <Typography level="h2" fontSize="xl3">
            Promo
          </Typography>
          <Divider inset="none" />
          <List size="sm" sx={{ mx: 'calc(-1 * var(--ListItem-paddingX))' }}>
            <ListItem>
              <ListItemDecorator>
                <Check />
              </ListItemDecorator>
              24/7 tracking
            </ListItem>
            <ListItem>
              <ListItemDecorator>
                <Check />
              </ListItemDecorator>
              instant alerts
            </ListItem>
            <ListItem>
              <ListItemDecorator>
                <Check />
              </ListItemDecorator>
              1 messaging platform
            </ListItem>
            
          </List>
          <Divider inset="none" />
          <CardActions>
            <Typography level="h5" sx={{ mr: 'auto' }}>
              0₱{' '}
              <Typography fontSize="sm" textColor="text.tertiary">
                / month
              </Typography>
            </Typography>
            <Button
              variant="soft"
              color="info"
              endDecorator={<KeyboardArrowRight />}
            >
              Start now
            </Button>
          </CardActions>
        </Card>

        </Grid>


      



    </Container>
      
      
    
      
        
      
  );
}
