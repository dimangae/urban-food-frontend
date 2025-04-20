/*import React, { useState } from 'react';
import { Container, Paper, Box, TextField, Button, List, ListItem } from '@mui/material';

export default function Updatesuppliers() {
    const [supplierName, setSupplierName] = useState('');
    const [supplierAddress, setSupplierAddress] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [suppliers, setSuppliers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [editingIndex, setEditingIndex] = useState(null); // Track which supplier is being edited

    // Generate unique Supplier ID
    const generateSupplierId = () => Math.floor(100000 + Math.random() * 900000).toString();

    // Handle adding/updating a supplier
    const handleAddOrUpdateSupplier = () => {
        const newSupplier = {
            supplierId: editingIndex === null ? generateSupplierId() : suppliers[editingIndex].supplierId, // Keep the same ID when editing
            supplierName,
            supplierAddress,
            email,
            contact,
        };

        if (editingIndex === null) {
            setSuppliers([...suppliers, newSupplier]); // Add new supplier
        } else {
            const updatedSuppliers = [...suppliers];
            updatedSuppliers[editingIndex] = newSupplier; // Update existing supplier
            setSuppliers(updatedSuppliers);
            setEditingIndex(null); // Reset editing index
        }

        // Clear input fields
        setSupplierName('');
        setSupplierAddress('');
        setEmail('');
        setContact('');
    };

    // Handle searching for a supplier by ID
    const handleSearch = () => {
        const index = suppliers.findIndex((supplier) => supplier.supplierId === searchTerm);
        if (index !== -1) {
            setSupplierName(suppliers[index].supplierName);
            setSupplierAddress(suppliers[index].supplierAddress);
            setEmail(suppliers[index].email);
            setContact(suppliers[index].contact);
            setEditingIndex(index); // Set index for editing
        } else {
            alert('Supplier not found');
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
                <h1 style={{ color: "black", textAlign: "center" }}>UPDATE SUPPLIERS</h1>
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
                        id="search-supplier"
                        label="Search Supplier by ID"
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
                        onClick={handleAddOrUpdateSupplier}
                    >
                        {editingIndex === null ? 'Add' : 'Update'}
                    </Button>
                </Box>
            </Paper>
            <Box sx={{ marginTop: '20px', width: '80%' }}>
                <h2 style={{ textAlign: 'center', color: 'white' }}>Supplier List</h2>
                <List>
                    {suppliers.map((supplier, index) => (
                        <ListItem key={index}>
                            <Box
                                sx={{
                                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                    padding: '10px',
                                    borderRadius: '5px',
                                    width: '100%',
                                }}
                            >
                                <strong>ID: {supplier.supplierId}</strong><br />
                                <strong>Name: {supplier.supplierName}</strong><br />
                                Address: {supplier.supplierAddress}<br />
                                Contact: {supplier.contact}
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

export default function Updatesuppliers() {
    const [supplierId, setSupplierId] = useState(''); // Manually handle supplier ID
    const [supplierName, setSupplierName] = useState('');
    const [supplierAddress, setSupplierAddress] = useState('');
    const [contact, setContact] = useState('');
    const [suppliers, setSuppliers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [editingIndex, setEditingIndex] = useState(null); // Track which supplier is being edited


    const handleAddOrUpdateSupplier = async () => {
        const newSupplier = {
            supplierId, // Use manually entered or backend-provided ID
            supplierName,
            supplierAddress,
            contact,
        };

        if (editingIndex === null) {
            setSuppliers([...suppliers, newSupplier]); // Add new supplier
        } else {
            const updatedSuppliers = [...suppliers];
            updatedSuppliers[editingIndex] = newSupplier; // Update existing supplier
            setSuppliers(updatedSuppliers);
            setEditingIndex(null); // Reset editing index
        }

        try {
            const params = new URLSearchParams({
                id:supplierId,
                name:supplierName,
                address: supplierAddress, 
                contact: contact,
          }).toString();

            // Replace this URL with your backend API endpoint
            const response = await fetch('http://localhost:8080/api/suppliers/update?' + params, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newSupplier),
            });

            if (response.ok) {
                //const updatedSupplier = await response.();
                //setSuppliers([...suppliers, updatedSupplier]); // Add the new customer to the list
                alert('Supplier updated successfully!');
                // Clear input fields
                setSupplierId('');
                setSupplierName('');
                setSupplierAddress('');
                setContact('');
            } else {
                alert('Failed to update Supplier. Please try again.');
            }
        } catch (error) {
            console.error('Error updating Supplier:', error);
            alert('An error occurred while updating the Supplier.');
        }

        // Clear input fields
        setSupplierId('');
        setSupplierName('');
        setSupplierAddress('');
        setContact('');
    };


    // Handle searching for a supplier by ID
    const handleSearch = async () => {
        try {
            const response = await fetch("http://localhost:8080/api/searchById?id=" + searchTerm);
            if (!response.ok) {
                throw new Error('Supplier not found');
            }
            const data = await response.json();
            setSupplierId(data.id);
            setSupplierName(data.name);
            setSupplierAddress(data.address);
            setContact(data.contact);
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
                <h1 style={{ color: "black", textAlign: "center" }}>UPDATE SUPPLIERS</h1>
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
                        id="search-supplier"
                        label="Search Supplier by ID"
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
                        onClick={handleAddOrUpdateSupplier}
                    >
                        {editingIndex === null ? 'Add' : 'Update'}
                    </Button>
                </Box>
            </Paper>
        </Container>
    );
}

