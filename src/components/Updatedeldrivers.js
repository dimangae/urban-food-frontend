/*import React, { useState } from 'react';
import { Container, Paper, Box, TextField, Button, List, ListItem } from '@mui/material';

export default function Updatedeliveries() {
    const [deliveryId, setDeliveryId] = useState('');
    const [deliveryStatus, setDeliveryStatus] = useState('');
    const [courierName, setCourierName] = useState('');
    const [deliveryAddress, setDeliveryAddress] = useState('');
    const [deliveryDate, setDeliveryDate] = useState('');
    const [deliveries, setDeliveries] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [editingIndex, setEditingIndex] = useState(null); // Track which delivery is being edited

    // Handle adding/updating a delivery
    const handleAddOrUpdateDelivery = () => {
        const newDelivery = {
            deliveryId, // Use manually entered or backend-provided ID
            deliveryStatus,
            courierName,
            deliveryAddress,
            deliveryDate,
        };

        if (editingIndex === null) {
            setDeliveries([...deliveries, newDelivery]); // Add new delivery
        } else {
            const updatedDeliveries = [...deliveries];
            updatedDeliveries[editingIndex] = newDelivery; // Update existing delivery
            setDeliveries(updatedDeliveries);
            setEditingIndex(null); // Reset editing index
        }

        // Clear input fields
        setDeliveryId('');
        setDeliveryStatus('');
        setCourierName('');
        setDeliveryAddress('');
        setDeliveryDate('');
    };

    // Handle searching for a delivery by ID
    const handleSearch = () => {
        const index = deliveries.findIndex((delivery) => delivery.deliveryId === searchTerm);
        if (index !== -1) {
            setDeliveryId(deliveries[index].deliveryId);
            setDeliveryStatus(deliveries[index].deliveryStatus);
            setCourierName(deliveries[index].courierName);
            setDeliveryAddress(deliveries[index].deliveryAddress);
            setDeliveryDate(deliveries[index].deliveryDate);
            setEditingIndex(index); // Set index for editing
        } else {
            alert('Delivery not found');
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
                <h1 style={{ color: "black", textAlign: "center" }}>UPDATE DELIVERY</h1>
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
                        id="search-delivery"
                        label="Search Delivery by ID"
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
                        id="courier-name"
                        label="Courier Name"
                        value={courierName}
                        onChange={(e) => setCourierName(e.target.value)}
                        variant="outlined"
                    />
                    <TextField
                        id="delivery-address"
                        label="Delivery Address"
                        value={deliveryAddress}
                        onChange={(e) => setDeliveryAddress(e.target.value)}
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
                        onClick={handleAddOrUpdateDelivery}
                    >
                        {editingIndex === null ? 'Add' : 'Update'}
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
                                    width: '100%',
                                }}
                            >
                                <strong>ID: {delivery.deliveryId}</strong><br />
                                <strong>Status: {delivery.deliveryStatus}</strong><br />
                                Courier: {delivery.courierName}<br />
                                Address: {delivery.deliveryAddress}<br />
                                Date: {delivery.deliveryDate}
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

export default function Updatedeliveries() {
    const [deliveryId, setDeliveryId] = useState(''); // Allow manual entry or backend to provide ID
    const [deliveryStatus, setDeliveryStatus] = useState('');
    const [orderId, setOrderId] = useState('');
    const [deliveryDate, setDeliveryDate] = useState('');
    const [deliveries, setDeliveries] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [editingIndex, setEditingIndex] = useState(null); // Track which delivery is being edited

    // Handle adding/updating a delivery
    const handleAddOrUpdateDelivery = async () => {
        const newDelivery = {
            id: deliveryId,
            deliveryStatus: deliveryStatus,
            orderId: orderId,
            deliveryDate: deliveryDate,
        };

        if (editingIndex === null) {
            setDeliveries([...deliveries, newDelivery]);
        } else {
            const updatedDeleveries = [...deliveries];
            updatedDeleveries[editingIndex] = newDelivery; // Update existing order
            setDeliveries(updatedDeleveries);
            setEditingIndex(null);
        }

        try {
            const params = new URLSearchParams({
                deliveryStatus: deliveryStatus,
                orderId: orderId,
                deliveryDate: deliveryDate,
          }).toString();

            // Replace this URL with your backend API endpoint
            const response = await fetch('http://localhost:8080/api/deliveries/' + deliveryId + '?' + params, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newDelivery),
            });

            if (response.ok) {
                alert('Delivery updated successfully!');
                // Clear input fields
                setDeliveryId('');
                setDeliveryStatus('');
                setOrderId('');
                setDeliveryDate('');
            } else {
                alert('Failed to add delivery. Please try again.');
            }
        } catch (error) {
            console.error('Error updating delivery:', error);
            alert('An error occurred while updating the delivery.');
        }

        // Clear input fields
        setDeliveryId('');
        setDeliveryStatus('');
        setOrderId('');
        setDeliveryDate('');
        setEditingIndex(null);
    };

    // Handle searching for a delivery by ID
    const handleSearch = async () => {
        try {
            const response = await fetch("http://localhost:8080/api/deliveries/" + searchTerm);
            if (!response.ok) {
                throw new Error('Order not found');
            }
            const data = await response.json();

            setDeliveryId(data.id);
            setDeliveryStatus(data.deliveryStatus);
            setOrderId(data.orderId);
            setDeliveryDate(data.deliveryDate);
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
                <h1 style={{ color: "black", textAlign: "center" }}>UPDATE DELIVERY</h1>
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
                        id="search-delivery"
                        label="Search Delivery by ID"
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
                        onClick={handleAddOrUpdateDelivery}
                    >
                        {editingIndex === null ? 'Add' : 'Update'}
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
                                    width: '100%',
                                }}
                            >
                                <strong>ID: {delivery.deliveryId}</strong><br />
                                <strong>Status: {delivery.deliveryStatus}</strong><br />
                                Courier: {delivery.courierName}<br />
                                Address: {delivery.deliveryAddress}<br />
                                Date: {delivery.deliveryDate}
                            </Box>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Container>
    );
}

