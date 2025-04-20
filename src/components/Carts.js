import React, { useState, useEffect } from 'react';
import { Container, Paper, Box, TextField, Button, List, ListItem } from '@mui/material';

export default function ViewCarts() {
    const [cartId, setCartId] = useState('');
    const [customerId, setCustomerId] = useState('');
    const [totalItem, setTotalItem] = useState('');
    const [totalPrice, setTotalPrice] = useState('');
    const [carts, setCarts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [editingIndex, setEditingIndex] = useState(null);
    const [filteredCarts, setFilteredCarts] = useState([]);
    
    const handleSearch = async () => {
        try {
            const response = await fetch("http://localhost:8080/api/carts/" + searchTerm);
            if (!response.ok) {
                throw new Error('Order not found');
            }
            const data = await response.json();
            setFilteredCarts([data]);
console.log([data]);
            setCartId(data.id);
            setTotalItem(data.customerId);
            setCustomerId(data.totalItem);
            setTotalPrice(data.totalPrice);
            setEditingIndex(data.id); // Set index for editing
        } catch (error) {
            alert(error.message);
            setEditingIndex(null);
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
                <h1
                    style={{
                        color: "black",
                        textAlign: "center",
                        //fontFamily: "'Roboto', sans-serif", // Matching font style from Orders component
                    }}
                >
                    CARTS
                </h1>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', '& > :not(style)': { m: 1, width: '80%' } }}>
                    <TextField
                        id="search-term"
                        label="Search by Customer ID or Name"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        variant="outlined"
                        style={{ marginBottom: '20px' }}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        style={{ marginBottom: '20px', width: '20%' }}
                        onClick={handleSearch}
                    >
                        Search
                    </Button>
                </Box>
                <Box sx={{ marginTop: '20px', width: '100%' }}>
                    <List>
                        {filteredCarts.length > 0 ? (
                            filteredCarts.map((cart, index) => (
                                <ListItem key={index}>
                                    <Box
                                        sx={{
                                            backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                            padding: '10px',
                                            borderRadius: '5px',
                                            width: '100%',
                                        }}
                                    >
                                        <strong>ID: {cart.id}</strong><br />
                                        <strong>Total Items: {cart.totalItem}</strong><br />
                                        Total Price: {cart.totalPrice}<br />
                                        <strong>Customer ID: {cart.customerId}</strong><br />
                                    </Box>
                                </ListItem>
                            ))
                        ) : (
                            <h2 style={{ textAlign: 'center', marginTop: '20px', color: 'white' }}>
                                No carts found
                            </h2>
                        )}
                    </List>
                </Box>
            </Paper>
        </Container>
    );
}



