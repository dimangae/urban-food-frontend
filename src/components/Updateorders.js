import React, { useState } from 'react';
import { Container, Paper, Box, TextField, Button, List, ListItem } from '@mui/material';

export default function UpdateOrders() {
    const [orderId, setOrderId] = useState('');
    const [shippingAddress, setShippingAddress] = useState('');
    const [customerId, setCustomerId] = useState('');
    const [totalAmount, setTotalAmount] = useState('');
    const [orderDate, setOrderDate] = useState('');
    const [orders, setOrders] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResult, setSearchResult] = useState(null);
    const [editingIndex, setEditingIndex] = useState(null); // Track which order is being edited

    React.useEffect(() => {
        fetch('http://localhost:8080/api/orders')
          .then(response => {
            if (!response.ok) {
              throw new Error('Failed to fetch products');
            }
            return response.json();
          })
          .then(data => {
            console.log(data)
            setOrders(data);
          })
          .catch(error => {
            console.error('Error fetching fruits:', error);
          });
        }, []);

    // Handle adding/updating an order
    const handleAddOrUpdateOrder = async () => {
        const newOrder = { 
            id: orderId,
            shippingAddress: shippingAddress,
            customerId: customerId,
            totalAmount: totalAmount,
            orderDate: orderDate,
        };

        if (editingIndex === null) {
            setOrders([...orders, newOrder]);
        } else {
            const updatedOrders = [...orders];
            updatedOrders[editingIndex] = newOrder; // Update existing order
            setOrders(updatedOrders);
            setEditingIndex(null);
        }

        try {
            const params = new URLSearchParams({
                id: orderId,
                shippingAddress: shippingAddress,
                customerId: customerId,
                totalAmount: totalAmount,
                orderDate: orderDate,
          }).toString();

            // Replace this URL with your backend API endpoint
            const response = await fetch('http://localhost:8080/api/orders/' + orderId + '?' + params, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newOrder),
            });

            if (response.ok) {
                alert('Order updated successfully!');
                // Clear input fields
                setOrderId('');
                setShippingAddress('');
                setCustomerId('');
                setTotalAmount('');
                setOrderDate('');
            } else {
                alert('Failed to order product. Please try again.');
            }
        } catch (error) {
            console.error('Error updating order:', error);
            alert('An error occurred while updating the order.');
        }

        // Clear input fields
        setOrderId('');
        setShippingAddress('');
        setCustomerId('');
        setTotalAmount('');
        setOrderDate('');
    };

    const handleSearch = async () => {
        try {
            const response = await fetch("http://localhost:8080/api/orders/" + searchTerm);
            if (!response.ok) {
                throw new Error('Order not found');
            }
            const data = await response.json();
            setSearchResult(data);

            setOrderId(data.id);
            setShippingAddress(data.shippingAddress);
            setCustomerId(data.customerId);
            setTotalAmount(data.totalAmount);
            setOrderDate(data.orderDate);
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
                <h1 style={{ color: "black", textAlign: "center" }}>VIEW ORDERS</h1>
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
                        style={{ marginBottom: '20px', width: '20%' }}
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
                </Box>
            </Paper>

            <Box sx={{ marginTop: '20px', width: '80%' }}>
                <h2 style={{ textAlign: 'center', color: 'white' }}>Order List</h2>
                <List>
                    {orders.map((order, index) => (
                        <ListItem key={index}>
                            <Box
                                sx={{
                                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                    padding: '10px',
                                    borderRadius: '5px',
                                    width: '100%',
                                }}
                            >
                                <strong>ID: {order.id}</strong><br />
                                <strong>customerId: {order.customerId}</strong><br />
                                Shipping Address: {order.shippingAddress}<br />
                                Total Amount: {order.totalAmount}<br />
                                Order Date: {order.orderDate}
                            </Box>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Container>
    );
}
