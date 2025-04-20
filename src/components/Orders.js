/*import React, { useState } from 'react';
import { Container, Paper, Box, TextField, Button, List, ListItem } from '@mui/material';

export default function Orders() {
    const [orderId, setOrderId] = useState('');
    const [productName, setProductName] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [orderDate, setOrderDate] = useState('');
    const [orders, setOrders] = useState([]);

    const handleAddOrder = () => {
        const newOrder = {
            orderId,
            productName,
            price,
            quantity,
            orderDate,
        };
        setOrders([...orders, newOrder]);
        // Clear inputs
        setOrderId('');
        setProductName('');
        setPrice('');
        setQuantity('');
        setOrderDate('');
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
        position: 'relative',
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

    const orderDateStyle = {
        position: 'absolute',
        top: 10, // Aligns at the top within the white box
        right: 10, // Aligns to the right within the white box
        width: '30%', // Reduced width for a smaller field
    };

    return (
        <Container style={containerStyle}>
            <Paper elevation={3} style={paperStyle}>
                
                <TextField
                    id="order-date"
                    label="Order Date"
                    type="date"
                    value={orderDate}
                    onChange={(e) => setOrderDate(e.target.value)}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    style={orderDateStyle}
                    variant="outlined"
                    size="small" // Makes the input field smaller
                />
                <h1 style={{ color: "black", textAlign: "center" }}>ORDERS</h1>
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
                        id="order-id"
                        label="Order ID"
                        value={orderId}
                        onChange={(e) => setOrderId(e.target.value)}
                        variant="outlined"
                    />
                    <TextField
                        id="product-name"
                        label="Product Name"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                        variant="outlined"
                    />
                    <TextField
                        id="price"
                        label="Price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        variant="outlined"
                    />
                    <TextField
                        id="quantity"
                        label="Quantity"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        variant="outlined"
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        style={{ marginTop: '20px', width: '20%' }}
                        onClick={handleAddOrder}
                    >
                        Add
                    </Button>
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
                                <strong>ID: {order.orderId}</strong><br />
                                <strong>Product Name: {order.productName}</strong><br />
                                Price: {order.price}<br />
                                Quantity: {order.quantity}<br />
                                Order Date: {order.orderDate}
                            </Box>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Container>
    );
}*/

import React, { useState, useEffect } from 'react';
import { Container, Paper, Box, TextField, Button, List, ListItem } from '@mui/material';

export default function Orders() {
    const [orderId, setOrderId] = useState('');
    const [shippingAddress, setShippingAddress] = useState('');
    const [customerId, setCustomerId] = useState('');
    const [totalAmount, setTotalAmount] = useState('');
    const [orderDate, setOrderDate] = useState('');
    const [orders, setOrders] = useState([]);

    // Automatically set the current date as the default order date
    useEffect(() => {
        const now = new Date();
        setOrderDate(now.toISOString().split('T')[0]); // Set default order date
    }, []);

    const handleAddOrder = async () => {
        const newOrder = { 
            id: orderId,
            name: shippingAddress,
            totalAmount: totalAmount,
            orderDate: orderDate,
            customerId: customerId,
        };
        setOrders([...orders, newOrder]);

        try {
            const params = new URLSearchParams({
                id: orderId,
                shippingAddress: shippingAddress,
                totalAmount: totalAmount,
                orderDate: orderDate,
                customerId: customerId,
              }).toString();

            // Replace this URL with your backend API endpoint
            const response = await fetch('http://localhost:8080/api/orders?' + params, 
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(newOrder),
            });

            if (response.ok) {
                alert('Order added successfully!');
                // Clear inputs
                setOrderId('');
                setShippingAddress('');
                setCustomerId('');
                setTotalAmount('');
                setOrderDate('');
            } else {
                alert('Failed to add order. Please try again.');
            }
        } catch (error) {
            console.error('Error adding order:', error);
            alert('An error occurred while adding the order.');
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
        position: 'relative',
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

    const orderDateStyle = {
        position: 'absolute',
        top: 10, // Aligns at the top within the white box
        right: 10, // Aligns to the right within the white box
        width: '30%', // Reduced width for a smaller field
    };

    return (
        <Container style={containerStyle}>
            <Paper elevation={3} style={paperStyle}>
                {/* Order Date text field in the top-right corner */}
                <TextField
                    id="order-date"
                    label="Order Date"
                    type="date"
                    value={orderDate} // Default value is set
                    onChange={(e) => setOrderDate(e.target.value)} // Allows manual changes
                    InputLabelProps={{
                        shrink: true,
                    }}
                    style={orderDateStyle}
                    variant="outlined"
                    size="small"
                />
                <h1 style={{ color: "black", textAlign: "center" }}>ORDERS</h1>
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
                        id="order-id"
                        label="Order ID"
                        value={orderId}
                        onChange={(e) => setOrderId(e.target.value)}
                        variant="outlined"
                    />
                    <TextField
                        id="shipping-address"
                        label="Shipping Address"
                        value={shippingAddress}
                        onChange={(e) => setShippingAddress(e.target.value)}
                        variant="outlined"
                    />
                    <TextField
                        id="customerId"
                        label="Customer Id"
                        value={customerId}
                        onChange={(e) => setCustomerId(e.target.value)}
                        variant="outlined"
                    />
                    <TextField
                        id="totalAmount"
                        label="Total Amount"
                        value={totalAmount}
                        onChange={(e) => setTotalAmount(e.target.value)}
                        variant="outlined"
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        style={{ marginTop: '20px', width: '20%' }}
                        onClick={handleAddOrder}
                    >
                        Add
                    </Button>
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
                                <strong>ID: {order.orderId}</strong><br />
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
