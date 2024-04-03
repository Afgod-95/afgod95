import React, { useState, useRef} from "react";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import { useNavigate } from "react-router-dom";
import { WiMoonAltWaningCrescent4 } from "react-icons/wi";

import { 
  HomeOutlined, 
  InfoOutlined, 
  BuildOutlined, 
  AccountTreeOutlined, 
} from '@mui/icons-material';
import { useTheme } from "../ThemeProvider";
import CustomModal from "./CustomModal/CustomModal";



const FixedBottomNavigation = () => {
    const [value, setValue] = useState(0);


    const { theme } = useTheme()

    const [isOpen, setIsOpen] = useState(false)

    const handleOpenModal = () => {
        setIsOpen(true)
    }

    const closeModal = () => {
      setIsOpen(false)
  }
    const navigate = useNavigate()
    
    return (
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 20}} elevation={3}>
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            sx={{background: theme === 'light' ? '#fff' : "#000"}}
          >
            <BottomNavigationAction 
              sx={{
                  color: theme === 'light' ? 'rgba(0, 0, 0, 0.54)' : "#acadac", 
                  '&.Mui-selected': {
                    color: 'rgba(39, 133, 154, 1)', 
                  },
                  '&:focus': {
                    color: 'rgba(39, 133, 154, 1)',
                  },
              }}
              label="Home" 
              icon={<HomeOutlined />} 
              onClick={() => navigate('/')} 
            />
            {/*<BottomNavigationAction 
              sx={{
                  color: theme === 'light' ? 'rgba(0, 0, 0, 0.54)' : "#acadac", 
                  '&.Mui-selected': {
                  color: 'rgba(39, 133, 154, 1)', 
                  },
                  '&:focus': {
                  color: 'rgba(39, 133, 154, 1)',
                  },
              }}
              label="About" 
              icon={<InfoOutlined />} 
              onClick={() => navigate('/about')}
            />*/}

            <BottomNavigationAction
              label="Skills" 
              icon={<BuildOutlined />} 
              onClick={() => navigate('/skills')} 
              sx={{
                  color: theme === 'light' ? 'rgba(0, 0, 0, 0.54)' : "#acadac", 
                  '&.Mui-selected': {
                    color: 'rgba(39, 133, 154, 1)', 
                  },
                  '&:focus': {
                    color: 'rgba(39, 133, 154, 1)', 
                  },
              }}
            />
            <BottomNavigationAction
              sx={{
                  color: theme === 'light' ? 'rgba(0, 0, 0, 0.54)' : "#acadac", 
                  '&.Mui-selected': {
                    color: 'rgba(39, 133, 154, 1)', 
                  },
                  '&:focus': {
                    color: 'rgba(39, 133, 154, 1)',
                  },
              }}
              label="Projects" 
              icon={<AccountTreeOutlined />} 
              onClick={() => navigate('/projects')}
           />

            <BottomNavigationAction
              sx={{
                  color: theme === 'light' ? 'rgba(0, 0, 0, 0.54)' : "#acadac", 
                  '&.Mui-selected': {
                    color: 'rgba(39, 133, 154, 1)', 
                  },
                  '&:focus': {
                    color: 'rgba(39, 133, 154, 1)',
                  },
              }}
              label="Theme" 
              icon={ <WiMoonAltWaningCrescent4 style={{fontSize: '25px'}}/>} 
              onClick={handleOpenModal}
           />
           {isOpen && (
              <CustomModal onClose = {closeModal}/>
            )}
          </BottomNavigation>
        </Paper>
    );
  }
  
  export default FixedBottomNavigation