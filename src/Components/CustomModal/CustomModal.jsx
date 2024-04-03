import React, { useState, useEffect } from "react";
import { useTheme } from "../../ThemeProvider";
import { Radio, RadioGroup, FormControl, FormControlLabel }from '@mui/material';
import { motion } from "framer-motion"; 

const CustomModal = ({ onClose }) => {
  const { theme, toggleTheme } = useTheme();
  const [selectedValue, setSelectedValue] = useState('system default');

  const handleChange = (event) => {
      const newTheme = event.target.value;
      setSelectedValue(newTheme);
      toggleTheme(newTheme);
  };

  return (
      <div
          style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              zIndex: 9998,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
          }}
          onClick={onClose}
      >
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: "0%" }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ type: "spring", stiffness: 100 }}
            style={{
                justifyContent: "flex-start",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                padding: '20px',
                height: '20%',
                backgroundColor: theme === "light" ? "#fff" : "#202020",
                borderRadius: "10px",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={selectedValue}
                onChange={handleChange}
                checked={selectedValue === theme}
              >
                <FormControlLabel value="system default" control={<Radio />} label="System default" />
                <FormControlLabel value="light" control={<Radio />} label="Light" />
                <FormControlLabel value="dark" control={<Radio />} label="Dark" />
              </RadioGroup>
            </FormControl>
          </motion.div>
      </div>
  );
};

export default CustomModal