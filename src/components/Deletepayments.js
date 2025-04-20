import React, { useState } from 'react';
import { Container, Paper, Box, TextField, Button, List, ListItem } from '@mui/material';

export default function DeletePayments() {
    const [payments, setPayments] = useState([]); // No initial sample data
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResult, setSearchResult] = useState(null);

    // Handle searching for a payment by ID
    const handleSearch = () => {
        const payment = payments.find((payment) => payment.paymentId === searchTerm);
        if (payment) {
            setSearchResult(payment);
        } else {
            alert('Payment not found');
            setSearchResult(null);
        }
    };

    // Handle deleting the searched payment
    const handleDelete = () => {
        if (searchResult) {
            const updatedPayments = payments.filter((payment) => payment.paymentId !== searchResult.paymentId);
            setPayments(updatedPayments);
            alert('Payment deleted successfully');
            setSearchResult(null);
            setSearchTerm('');
        }
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

    return (
        <Container style={containerStyle}>
            <Paper elevation={3} style={paperStyle}>
                <h1 style={{ color: "black", textAlign: "center" }}>DELETE PAYMENT</h1>
                <Box
                    component="form"
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        '& > :not(style)': { m: 1, width: '80%' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        id="search-payment"
                        label="Search Payment by ID"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        variant="outlined"
                        sx={{ marginBottom: '20px' }}
                    />
                    <Button
                        variant="contained"
                        color="secondary"
                        style={{ marginBottom: '20px', width: '30%' }}
                        onClick={handleSearch}
                    >
                        Search
                    </Button>
                    {searchResult && (
                        <Box
                            sx={{
                                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                padding: '10px',
                                borderRadius: '5px',
                                width: '100%',
                                marginBottom: '20px',
                            }}
                        >
                            <strong>ID: {searchResult.paymentId}</strong><br />
                            <strong>Method: {searchResult.paymentMethod}</strong><br />
                            Amount: {searchResult.amount}<br />
                            Date: {searchResult.paymentDate}
                        </Box>
                    )}
                    {searchResult && (
                        <Button
                            variant="contained"
                            color="error"
                            style={{ marginTop: '20px', width: '30%' }}
                            onClick={handleDelete}
                        >
                            Delete
                        </Button>
                    )}
                </Box>
            </Paper>
            <Box sx={{ marginTop: '20px', width: '80%' }}>
                <h2 style={{ textAlign: 'center', color: 'white' }}>Payment List</h2>
                <List>
                    {payments.map((payment, index) => (
                        <ListItem key={index}>
                            <Box
                                sx={{
                                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                    padding: '10px',
                                    borderRadius: '5px',
                                    width: '100%',
                                }}
                            >
                                <strong>ID: {payment.paymentId}</strong><br />
                                <strong>Method: {payment.paymentMethod}</strong><br />
                                Amount: {payment.amount}<br />
                                Date: {payment.paymentDate}
                            </Box>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Container>
    );
}
