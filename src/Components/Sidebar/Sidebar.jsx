import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import FixedBottomNavigation from '../FixedBottomNavigation';
import './Sidebar.css';
import { 
    HomeOutlined, 
    BuildOutlined, 
    AccountTreeOutlined 
} from '@mui/icons-material';
import { WiMoonAltWaningCrescent4 } from 'react-icons/wi';
import { NavLink } from 'react-router-dom';
import { Avatar } from '@mui/material';
import { useTheme } from '../../ThemeProvider';
import CustomModal from '../CustomModal/CustomModal';

const Sidebar = ({ children }) => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)',
    });
    
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
    const { theme } = useTheme();

    const [isOpen, setIsOpen] = useState(false);
    const [themeText, setThemeText] = useState('System default');

    useEffect(() => {
        if (theme === 'light' || theme === 'dark') {
            setThemeText(theme.charAt(0).toUpperCase() + theme.slice(1));
        } else {
            setThemeText('System default');
        }
    }, [theme]);

    const handleOpenModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const dashboardLinks = [
        {
            id: 0,
            name: 'Home',
            path: '/',
            icon: <HomeOutlined />,
        }, 
        {
            id: 1,
            name: 'Skills',
            path: '/skills',
            icon: <BuildOutlined />,
        },
        {
            id: 2,
            name: 'Projects',
            path: '/projects',
            icon: <AccountTreeOutlined />,
        },
    ];

    return (
        <>
            {/* Bigger screens  */}
            {isDesktopOrLaptop && (
                <>
                    <div className="container">
                        <div>
                            <div className="side-bar">
                                <div className="header">
                                    <div className="title">
                                        <h3 className="person">Personal Portfolio</h3>
                                    </div>
                                    <div className="avatar-details">
                                        <Avatar
                                            alt="Remy Sharp"
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC8kiSH5ZSAcVoj3tAQQDoP_ux0sSricMyUg&usqp=CAU"
                                            sx={{ width: 40, height: 40, border: '5px solid rgba(217, 217, 217, 1)' }}
                                        />
                                        <div className="name">
                                            <h5 className="person">Afari Boadu Godwin</h5>
                                            <p style={{ color: '#acadac' }}>Afgod95.dev</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="link">
                                    {dashboardLinks.map((item, index) => (
                                        <NavLink to={item.path} key={item.name} className="links" activeClassName="active">
                                            <div className="icons">{item.icon}</div>
                                            <p className="text">{item.name}</p>
                                        </NavLink>
                                    ))}
                                    <div className="header" style={{ display: 'flex', alignItems: 'center', gap: '2px', cursor: 'pointer' }} onClick={handleOpenModal}>
                                        <div className="icons">
                                            <WiMoonAltWaningCrescent4 style={{ fontSize: '25px' }} />
                                        </div>
                                        <div className="">
                                            <p className="">Theme</p>
                                            <p style={{ color: theme === 'light' ? '#363636' : '#acadac' }}>{themeText}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {isOpen && <CustomModal onClose={closeModal} />}
                        </div>
                        <div className="Divider">
                            {children}
                        </div>
                    </div>
                </>
            )}

            {/* Mobile screens  */}
            {isTabletOrMobile && (
                <div>
                    <div className="">
                        <FixedBottomNavigation />
                    </div>
                    {children}
                </div>
            )}
        </>
    );
};

export default Sidebar;
