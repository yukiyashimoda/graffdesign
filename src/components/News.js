// MediaControlCard.js

import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function MediaControlCard() {
  const theme = useTheme();

  return (
    <Box sx={{ margin: '10px', textAlign: 'left', marginBottom: '100px' }}> 
      
      <Card sx={{ display: 'flex', height: '150px', maxWidth: '96%', margin: '0 auto', backgroundColor: '#333', color: 'white' }}>
        <CardMedia
          component="img"
          sx={{ width: '35%' }}
          image="../yakei.jpg"
          alt="Live from space album cover"
        />
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: 'auto', textAlign: 'center' }}>
          <Typography variant="subtitle1" color="white" component="div" sx={{ textAlign: 'left'}}>
              News!
            </Typography>
            <Typography variant="subtitle1" color="white" component="div" sx={{ textAlign: 'left'}}>
              2024/02/28
            </Typography>
            <Typography component="div" variant="h5" sx={{ textAlign: 'left', color: '#b8d200'}}>
              This is test.
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </Box>
  );
}
