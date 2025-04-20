import React, { useState } from 'react';
import { Container, Paper, Box, TextField, Button, List, ListItem } from '@mui/material';

export default function Deliveries() {
    const [deliveryId, setDeliveryId] = useState(''); // Allow manual entry or backend to provide ID
    const [deliveryStatus, setDeliveryStatus] = useState('');
    const [orderId, setOrderId] = useState('');
    const [deliveryDate, setDeliveryDate] = useState('');
    const [deliveries, setDeliveries] = useState([]);

    const handleAddDelivery = async () => {
        const newDelivery = { 
            id: deliveryId,
            deliveryStatus: deliveryStatus,
            orderId: orderId,
            deliveryDate: deliveryDate,
        };
        setDeliveries([...deliveries, newDelivery]);

        try {
            const params = new URLSearchParams({
                id: deliveryId,
                deliveryStatus: deliveryStatus,
                orderId: orderId,
                deliveryDate: deliveryDate,
              }).toString();

            // Replace this URL with your backend API endpoint
            const response = await fetch('http://localhost:8080/api/deliveries?' + params, 
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(newDelivery),
            });

            if (response.ok) {
                alert('Delivery added successfully!');
                // Clear inputs
                setDeliveryId('');
                setDeliveryStatus('');
                setOrderId('');
                setDeliveryDate('');
            } else {
                alert('Failed to add delivery. Please try again.');
            }
        } catch (error) {
            console.error('Error adding delivery:', error);
            alert('An error occurred while adding the delivery.');
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
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
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
        overflow: 'hidden'
    };

    return (
        <Container style={containerStyle}>
            <Paper elevation={3} style={paperStyle}>
                <h1 style={{ color: "black", textAlign: "center" }}>DELIVERIES</h1>
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
                        id="delivery-id" 
                        label="Delivery ID" 
                        value={deliveryId}
                        onChange={(e) => setDeliveryId(e.target.value)} 
                        variant="outlined" 
                    />
                    <TextField 
                        id="delivery-status" 
                        label="Delivery Status" 
                        value={deliveryStatus}
                        onChange={(e) => setDeliveryStatus(e.target.value)} 
                        variant="outlined" 
                    />
                    <TextField 
                        id="order-id" 
                        label="Order Id" 
                        value={orderId}
                        onChange={(e) => setOrderId(e.target.value)} 
                        variant="outlined" 
                    />
                    <TextField 
                        id="delivery-date" 
                        label="Delivery Date" 
                        type="date"
                        value={deliveryDate}
                        onChange={(e) => setDeliveryDate(e.target.value)} 
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined" 
                    />
                    <Button 
                        variant="contained" 
                        color="primary" 
                        style={{ marginTop: '20px', width: '20%' }}
                        onClick={handleAddDelivery}
                    >
                        Add
                    </Button>
                </Box>
            </Paper>

            <Box sx={{ marginTop: '20px', width: '80%' }}>
                <h2 style={{ textAlign: 'center', color: 'white' }}>Delivery List</h2>
                <List>
                    {deliveries.map((delivery, index) => (
                        <ListItem key={index}>
                            <Box 
                                sx={{ 
                                    backgroundColor: 'rgba(255, 255, 255, 0.8)', 
                                    padding: '10px', 
                                    borderRadius: '5px',
                                    width: '100%' 
                                }}
                            >
                                <strong>ID: {delivery.deliveryId}</strong><br />
                                <strong>Status: {delivery.deliveryStatus}</strong><br />
                                Order Id: {delivery.orderId}<br />
                                Date: {delivery.deliveryDate}
                            </Box>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Container>
    );
}
