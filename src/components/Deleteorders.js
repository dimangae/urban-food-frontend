import React, { useState } from 'react';
import { Container, Paper, Box, TextField, Button, List, ListItem } from '@mui/material';

export default function DeleteOrders() {
    const [orders, setOrders] = useState([]); // No initial sample data
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResult, setSearchResult] = useState(null);

    // Handle searching for an order by ID
    const handleSearch = async () => {
        try {
            const response = await fetch(`http://localhost:8080/api/orders/`+searchTerm);
            if (!response.ok) {
                throw new Error('Order not found');
            }
            const data = await response.json();
            console.log(data);
            setSearchResult(data);
        } catch (error) {
            alert(error.message);
            setSearchResult(null);
        }
    };

    // Handle deleting the searched order
    const handleDelete = async () => {
        try {
            const response = await fetch(`http://localhost:8080/api/orders/`+searchResult.id, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('Delete failed');
            }

            alert('Order deleted successfully');
            setSearchResult(null);
            setSearchTerm('');
        } catch (error) {
            alert(error.message);
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
                <h1 style={{ color: "black", textAlign: "center" }}>DELETE ORDER</h1>
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
                        id="search-order"
                        label="Search Order by ID"
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
                            <strong>ID: {searchResult.id}</strong><br />
                            <strong>Customer Id: {searchResult.customerId}</strong><br />
                            Order Date: {searchResult.orderDate}<br />
                            shippingAddress: {searchResult.shippingAddress}<br />
                            Total Amount: {searchResult.totalAmount}
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
        </Container>
    );
}
