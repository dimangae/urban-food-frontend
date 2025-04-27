import React from 'react';
import { Container, Paper, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Reviewsdash() {
    const navigate = useNavigate(); // Hook for navigation

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
                <h1 style={{ color: "black", textAlign: "center" }}>REVIEWS DASHBOARD</h1>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        '& > :not(style)': { m: 1, width: '80%' },
                    }}
                >
                    <Button
                        variant="contained"
                        color="primary"
                        style={buttonStyle}
                        onClick={() => navigate('/Reviews')}
                    >
                        View Review
                    </Button>
                </Box>
            </Paper>
        </Container>
    );
}

