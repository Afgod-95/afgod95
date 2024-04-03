import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useTheme } from '../../ThemeProvider';
import SoftwareDev from '../../Components/SoftwareDev/SoftwareDev';
import GraphicDes from '../../Components/Graphic_Design/GraphicDes';
import UIDesign from '../../Components/UI/UIDesign';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Projects() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { theme } = useTheme()

  return (
    <Box sx={{ width: '100%', }}>
      <div style={{position: 'fixed'}}>

        
      </div>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
        <Tab label="Software Dev" 
            sx={{
              color: theme === 'light' ? 'rgba(0, 0, 0, 0.54)' : "#acadac", 
              '&.Mui-selected': {
              color: 'rgba(39, 133, 154, 1)', 
              },
              '&:focus': {
              color: 'rgba(39, 133, 154, 1)',
              },

          }} 
          {...a11yProps(0)} 
        />

        <Tab label="Graphic Design" 
          sx={{
            color: theme === 'light' ? 'rgba(0, 0, 0, 0.54)' : "#acadac", 
            '&.Mui-selected': {
            color: 'rgba(39, 133, 154, 1)', 
            },
            '&:focus': {
            color: 'rgba(39, 133, 154, 1)',
            },
          }} 
          {...a11yProps(1)} 
        />
        
        <Tab label="UI/UX Design" 
          sx={{
            color: theme === 'light' ? 'rgba(0, 0, 0, 0.54)' : "#acadac", 
            '&.Mui-selected': {
            color: 'rgba(39, 133, 154, 1)', 
            },
            '&:focus': {
            color: 'rgba(39, 133, 154, 1)',
            },
          }} 
          {...a11yProps(2)} 
        />
      </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <SoftwareDev />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <GraphicDes />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <UIDesign />
      </CustomTabPanel>
    </Box>
  );
}