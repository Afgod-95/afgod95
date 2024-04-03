import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useMediaQuery } from 'react-responsive';
import { motion } from 'framer-motion';
import { useTheme } from '../../ThemeProvider';
import { itemData } from './Designs';
import ScrollUp from '../ScrollUp';

export default function UIDesign() {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  const [selectedImage, setSelectedImage] = React.useState(null);

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  

  return (
    <>
      <Box
        sx={{
          width: isTabletOrMobile ? '100%' : '80%',
          height: isTabletOrMobile ? null : 550,
          overflowY: 'scroll',
          margin: 'auto',
        }}
      >
        <ImageList variant="masonry" cols={3} gap={8}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=248&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
                style={{ borderRadius: '10px' }}
                onClick={() => handleImageClick(item.img)} // Change this line
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>

      {isTabletOrMobile && (
        <ScrollUp />
      )}

      {selectedImage && isTabletOrMobile && (
        <CustomModal
          imageUrl={selectedImage}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
}

const CustomModal = ({ imageUrl, onClose }) => {
    const { theme } = useTheme()

    const isTabletMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    return (
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 9998, 
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onClick={onClose} 
      >
        <motion.div
          initial={{ opacity: 0, y: '-100%' }}
          animate={{ opacity: 1, y: '0%' }}
          exit={{ opacity: 0, y: '-100%' }}
          transition={{ type: 'spring', stiffness: 100 }}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            paddingBottom: "10px",
            backgroundColor: theme === 'light' ? '#fff' : '#000',
            width: isTabletMobile ?  '80%' : '50%',
            height: isTabletMobile ?  null : "50%",
            borderRadius: '10px',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
          }}
          onClick={(e) => e.stopPropagation()} 
        >
          <img
            src={imageUrl}
            alt="Selected"
            style={{ width: '100%', height: '90%',  borderRadius: '10px', objectPosition: 'center', objectFit: 'cover'}}
          />
          <button onClick={onClose} className='button' style={{ width: '50%', alignItems: 'center', justifyContent: 'center', color: '#fff'}}>Close</button>
        </motion.div>
      </div>
    );
  };
  


