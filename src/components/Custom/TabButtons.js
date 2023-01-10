import * as React from 'react';
import { styled, Box, Tabs, Tab } from '@mui/material';



export const CustomTabs = styled(Box)(({ theme }) => ({
   
}))



export default function TabButton({value, setValue}) {

  const handleChange = (event, newValue) => {
      setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
      </Tabs>
    </Box>
  );
}