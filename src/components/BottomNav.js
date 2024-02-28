// BottomNav.js

import React, { useState } from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Typography from '@mui/material/Typography';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import CollectionsIcon from '@mui/icons-material/Collections';
import ContactMailIcon from '@mui/icons-material/ContactMail';

function BottomNav() {
  const [value, setValue] = useState(0);

  return (
    <BottomNavigation
      sx={{
        backgroundColor: 'rgba(0, 0, 0, 0.2)', // 黒の半透明背景
        backdropFilter: 'blur(4px)', // 背景のぼかし効果を追加（必要に応じて調整）
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        zIndex: 999, 
      }}
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <BottomNavigationAction 
        label={
          <Typography 
            sx={{ 
              color: 'rgba(128, 128, 128, 0.9)', 
              fontSize: '10px',
            }}
          >
            News
          </Typography>
        } 
        icon={<NewspaperIcon sx={{ color: 'rgba(128, 128, 128, 0.9)' }} />} 
      />
      <BottomNavigationAction 
        label={
          <Typography 
            sx={{ 
              color: 'rgba(128, 128, 128, 0.9)', 
              fontSize: '10px',
            }}
          >
            Works
          </Typography>
        } 
        icon={<CollectionsIcon sx={{ color: 'rgba(128, 128, 128, 0.9)' }} />} 
      />
      <BottomNavigationAction 
        label={
          <Typography 
            sx={{ 
              color: 'rgba(128, 128, 128, 0.9)', 
              fontSize: '10px',
            }}
          >
            Contact
          </Typography>
        } 
        icon={<ContactMailIcon sx={{ color: 'rgba(128, 128, 128, 0.9)' }} />} 
      />
    </BottomNavigation>
  );
}

export default BottomNav;
