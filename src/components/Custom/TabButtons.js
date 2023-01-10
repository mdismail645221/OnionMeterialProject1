import * as React from 'react';
import { styled, Box, Tabs, Tab } from '@mui/material';



const CustomTabs = styled(Tabs)(({ theme }) => ({
    padding: '10px 0px',
    fontWeight: '700',
   '& .css-1wf8b0h-MuiTabs-flexContainer, button': {
     justifyContent: 'space-between',
     maxWidth: '600px',
     margin: '0 auto',
     fontWeight: '900',
     background: '#eeeeeeee',
     // boxShadow: '5px 5px 10px',
     borderRadius: '50px',

   }
}))



export default function TabButton({value, setValue}) {

  const handleChange = (event, newValue) => {
      setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <CustomTabs value={value} onChange={handleChange} centered>
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
      </CustomTabs>
    </Box>
  );
}