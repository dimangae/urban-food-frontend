import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Paper, Box, Button } from '@mui/material';

export default function Dashboard() {
    
    const navigate = useNavigate();

    // Navigation handler
    const handleNavigation = (path) => {
        navigate(path);
    };

    const paperStyle = {
        padding: '40px 60px',
        width: '80%',
        maxWidth: 500,
        margin: 'auto',
        textAlign: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    };

    const containerStyle = {
        minHeight: '100vh',
        minWidth: '99vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: "url('/images/polyphenol-foods-feature.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        margin: 0,
        padding: 0,
        overflow: 'hidden',
    };

    const buttonStyle = {
        marginTop: '10px',
        width: '60%',
    };

    return (
        <Container style={containerStyle}>
            <Paper elevation={3} style={paperStyle}>
                <h1 style={{ color: "black", textAlign: "center" }}>DASHBOARD</h1>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        '& > :not(style)': { m: 1, width: '80%' },
                    }}
                >
                    <Button variant="contained" color="primary" style={buttonStyle} onClick={() => handleNavigation('/cus')}>
                        Customers 
                    </Button>
                    <Button variant="contained" color="primary" style={buttonStyle} onClick={() => handleNavigation('/sup')}>
                        Suppliers
                    </Button>
                    <Button variant="contained" color="primary" style={buttonStyle} onClick={() => handleNavigation('/pro')}>
                        Products
                    </Button>
                    <Button variant="contained" color="primary" style={buttonStyle} onClick={() => handleNavigation('/ord')}>
                        Orders 
                    </Button>
                    <Button variant="contained" color="primary" style={buttonStyle} onClick={() => handleNavigation('/deld')}>
                        Delivery Drivers 
                    </Button>
                    <Button variant="contained" color="primary" style={buttonStyle} onClick={() => handleNavigation('/pay')}>
                        Payments 
                    </Button>
                    <Button variant="contained" color="primary" style={buttonStyle} onClick={() => handleNavigation('/rev')}>
                        Reviews 
                    </Button>
                    <Button variant="contained" color="primary" style={buttonStyle} onClick={() => handleNavigation('/car')}>
                        Carts 
                    </Button>
                </Box>
            </Paper>
        </Container>
    );
}
