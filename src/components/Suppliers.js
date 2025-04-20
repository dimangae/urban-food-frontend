import React, { useState } from 'react';
import { Container, Paper, Box, TextField, Button, List, ListItem } from '@mui/material';

export default function Suppliers() {
    const [supplierId, setSupplierId] = useState(''); // Manually handle Supplier ID
    const [supplierName, setSupplierName] = useState('');
    const [supplierAddress, setSupplierAddress] = useState('');
    const [contact, setContact] = useState('');
    const [suppliers, setSuppliers] = useState([]);

    const handleAddSupplier = async () => {
        const newSupplier = { 
            id: supplierId,
            name: supplierName,
            address: supplierAddress,
            contact: contact
        };
        setSuppliers([...suppliers, newSupplier]);

        try {            
            console.log(JSON.stringify(newSupplier))

            // Replace this URL with your backend API endpoint
            const response = await fetch('http://localhost:8080/api/suppliers', 
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(newSupplier),
            });

            if (response.ok) {
                alert('Supplier added successfully!');
                // Clear inputs
                setSupplierId('');
                setSupplierName('');
                setSupplierAddress('');
                setContact('');
            } else {
                alert('Failed to add Supplier. Please try again.');
            }
        } catch (error) {
            console.error('Error adding Supplier:', error);
            alert('An error occurred while adding the Supplier.');
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
                <h1 style={{ color: "black", textAlign: "center" }}>SUPPLIERS</h1>
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
                        id="supplier-id" 
                        label="Supplier ID" 
                        value={supplierId}
                        onChange={(e) => setSupplierId(e.target.value)} 
                        variant="outlined" 
                    />
                    <TextField 
                        id="supplier-name" 
                        label="Supplier Name" 
                        value={supplierName}
                        onChange={(e) => setSupplierName(e.target.value)} 
                        variant="outlined" 
                    />
                    <TextField 
                        id="supplier-address" 
                        label="Supplier Address" 
                        value={supplierAddress}
                        onChange={(e) => setSupplierAddress(e.target.value)} 
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
                        onClick={handleAddSupplier}
                    >
                        Add
                    </Button>
                </Box>
            </Paper>
        </Container>
    );
}
