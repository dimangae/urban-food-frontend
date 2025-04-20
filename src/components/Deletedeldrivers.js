/*import React, { useState } from 'react';
import { Container, Paper, Box, TextField, Button, List, ListItem } from '@mui/material';

export default function Deletedeliveries() {
    const [deliveries, setDeliveries] = useState([]); // Initialize with an empty array
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResult, setSearchResult] = useState(null);

    // Handle searching for a delivery by ID
    const handleSearch = () => {
        const delivery = deliveries.find((delivery) => delivery.deliveryId === searchTerm);
        if (delivery) {
            setSearchResult(delivery);
        } else {
            alert('Delivery not found');
            setSearchResult(null);
        }
    };

    // Handle deleting the searched delivery
    const handleDelete = () => {
        if (searchResult) {
            const updatedDeliveries = deliveries.filter((delivery) => delivery.deliveryId !== searchResult.deliveryId);
            setDeliveries(updatedDeliveries);
            alert('Delivery deleted successfully');
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
                <h1 style={{ color: "black", textAlign: "center" }}>DELETE DELIVERY</h1>
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
                            <strong>ID: {searchResult.deliveryId}</strong><br />
                            <strong>Status: {searchResult.deliveryStatus}</strong><br />
                            Courier: {searchResult.courierName}<br />
                            Address: {searchResult.deliveryAddress}<br />
                            Date: {searchResult.deliveryDate}
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
*/
import React, { useState, useEffect } from 'react';
import { Container, Paper, Box, TextField, Button, List, ListItem } from '@mui/material';

export default function Deletedeliveries() {
    const [deliveries, setDeliveries] = useState([]); // Initialize with an empty array
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResult, setSearchResult] = useState(null);

    // Handle searching for a delivery by ID
    const handleSearch = async () => {
        try {
            const response = await fetch(`http://localhost:8080/api/deliveries/`+searchTerm);
            if (!response.ok) {
                throw new Error('Delivery not found');
            }
            const data = await response.json();
            console.log(data);
            setSearchResult(data);
        } catch (error) {
            alert(error.message);
            setSearchResult(null);
        }
    };

    // Handle deleting the searched delivery
    const handleDelete = async () => {
        try {
            const response = await fetch(`http://localhost:8080/api/deliveries/`+searchResult.id, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('Delete failed');
            }

            alert('Delivery deleted successfully');
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
                <h1 style={{ color: "black", textAlign: "center" }}>DELETE DELIVERY</h1>
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
                            <strong>Status: {searchResult.deliveryStatus}</strong><br />
                            Order Id: {searchResult.orderId}<br />
                            Date: {searchResult.deliveryDate}
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
