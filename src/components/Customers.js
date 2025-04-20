/*
import React, { useState } from 'react';
import { Container, Paper, Box, TextField, Button, List, ListItem } from '@mui/material';

export default function Customers1() {
    const [customerId, setCustomerId] = useState(''); // Allow manual entry or backend to provide ID
    const [customerName, setCustomerName] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [customers, setCustomers] = useState([]);

    const handleAddCustomer = () => {
        const newCustomer = {
            customerId, // Use the manually entered or backend-provided ID
            customerName,
            address,
            email,
            contact,
        };
        setCustomers([...customers, newCustomer]);
        // Clear inputs
        setCustomerId('');
        setCustomerName('');
        setAddress('');
        setEmail('');
        setContact('');
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
                <h1 style={{ color: "black", textAlign: "center" }}>CUSTOMERS</h1>
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
                        id="customer-id" 
                        label="Customer ID" 
                        value={customerId}
                        onChange={(e) => setCustomerId(e.target.value)} 
                        variant="outlined" 
                    />
                    <TextField 
                        id="customer-name" 
                        label="Customer Name" 
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)} 
                        variant="outlined" 
                    />
                    <TextField 
                        id="address" 
                        label="Address" 
                        value={address}
                        onChange={(e) => setAddress(e.target.value)} 
                        variant="outlined" 
                    />
                    <TextField 
                        id="email" 
                        label="E-mail" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} 
                        variant="outlined" 
                    />
                    <TextField 
                        id="contact" 
                        label="Contact" 
                        value={contact}
                        onChange={(e) => setContact(e.target.value)} 
                        variant="outlined" 
                    />

                    <Button 
                        variant="contained" 
                        color="primary" 
                        style={{ marginTop: '20px', width: '20%' }}
                        onClick={handleAddCustomer}
                    >
                        Add
                    </Button>
                </Box>
            </Paper>

            <Box sx={{ marginTop: '20px', width: '80%' }}>
                <h2 style={{ textAlign: 'center', color: 'white' }}>Customer List</h2>
                <List>
                    {customers.map((customer, index) => (
                        <ListItem key={index}>
                            <Box 
                                sx={{ 
                                    backgroundColor: 'rgba(255, 255, 255, 0.8)', 
                                    padding: '10px', 
                                    borderRadius: '5px',
                                    width: '100%' 
                                }}
                            >
                                <strong>ID: {customer.customerId}</strong><br />
                                <strong>Name: {customer.customerName}</strong><br />
                                Address: {customer.address}<br />
                                E-mail: {customer.email}<br />
                                Contact: {customer.contact}
                            </Box>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Container>
    );
}*/

import React, { useState } from 'react';
import { Container, Paper, Box, TextField, Button, List, ListItem } from '@mui/material';

export default function Customers1() {
    const [customerId, setCustomerId] = useState(''); // Allow manual entry or backend to provide ID
    const [customerName, setCustomerName] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [customers, setCustomers] = useState([]);

    // Handle adding a customer to the database
    const handleAddCustomer = async () => {
        const newCustomer = {
            customerId, // Use the manually entered or backend-provided ID
            customerName,
            address,
            email,
            contact,
        };

        try {            
            const params = new URLSearchParams({
                    name: customerName,
                    address: address, 
                    email: email,
                    contact: contact,
              }).toString();

            // Replace this URL with your backend API endpoint
            const response = await fetch('http://localhost:8080/api/customers?' + params, 
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(newCustomer),
            });

            if (response.ok) {
                const addedCustomer = await response.json();
                setCustomers([...customers, addedCustomer]); // Add the new customer to the list
                alert('Customer added successfully!');
                // Clear inputs
                setCustomerId('');
                setCustomerName('');
                setAddress('');
                setEmail('');
                setContact('');
            } else {
                alert('Failed to add customer. Please try again.');
            }
        } catch (error) {
            console.error('Error adding customer:', error);
            alert('An error occurred while adding the customer.');
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
                <h1 style={{ color: "black", textAlign: "center" }}>CUSTOMERS</h1>
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
                        id="customer-id" 
                        label="Customer ID" 
                        value={customerId}
                        onChange={(e) => setCustomerId(e.target.value)} 
                        variant="outlined" 
                    />
                    <TextField 
                        id="customer-name" 
                        label="Customer Name" 
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)} 
                        variant="outlined" 
                    />
                    <TextField 
                        id="address" 
                        label="Address" 
                        value={address}
                        onChange={(e) => setAddress(e.target.value)} 
                        variant="outlined" 
                    />
                    <TextField 
                        id="email" 
                        label="E-mail" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} 
                        variant="outlined" 
                    />
                    <TextField 
                        id="contact" 
                        label="Contact" 
                        value={contact}
                        onChange={(e) => setContact(e.target.value)} 
                        variant="outlined" 
                    />

                    <Button 
                        variant="contained" 
                        color="primary" 
                        style={{ marginTop: '20px', width: '20%' }}
                        onClick={handleAddCustomer}
                    >
                        Add
                    </Button>
                </Box>
            </Paper>

            <Box sx={{ marginTop: '20px', width: '80%' }}>
                <h2 style={{ textAlign: 'center', color: 'white' }}>Customer List</h2>
                <List>
                    {customers.map((customer, index) => (
                        <ListItem key={index}>
                            <Box 
                                sx={{ 
                                    backgroundColor: 'rgba(255, 255, 255, 0.8)', 
                                    padding: '10px', 
                                    borderRadius: '5px',
                                    width: '100%' 
                                }}
                            >
                                <strong>ID: {customer.customerId}</strong><br />
                                <strong>Name: {customer.customerName}</strong><br />
                                Address: {customer.address}<br />
                                E-mail: {customer.email}<br />
                                Contact: {customer.contact}
                            </Box>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Container>
    );
}





