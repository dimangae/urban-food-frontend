/*import React, { useState } from 'react';
import { Container, Paper, Box, TextField, Button, List, ListItem } from '@mui/material';

export default function Deletesuppliers() {
    const [suppliers, setSuppliers] = useState([
        // Example suppliers for demonstration
        { supplierId: '123456', supplierName: 'John Doe', supplierAddress: '123 Elm Street', email: 'john@example.com', contact: '1234567890' },
        { supplierId: '789012', supplierName: 'Jane Smith', supplierAddress: '456 Maple Avenue', email: 'jane@example.com', contact: '9876543210' },
    ]);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResult, setSearchResult] = useState(null);

    // Handle searching for a supplier by ID
    const handleSearch = () => {
        const supplier = suppliers.find((supplier) => supplier.supplierId === searchTerm);
        if (supplier) {
            setSearchResult(supplier);
        } else {
            alert('Supplier not found');
            setSearchResult(null);
        }
    };

    // Handle deleting the searched supplier
    const handleDelete = () => {
        if (searchResult) {
            const updatedSuppliers = suppliers.filter((supplier) => supplier.supplierId !== searchResult.supplierId);
            setSuppliers(updatedSuppliers);
            alert('Supplier deleted successfully');
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
                <h1 style={{ color: "black", textAlign: "center" }}>DELETE SUPPLIER</h1>
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
                            <strong>ID: {searchResult.supplierId}</strong><br />
                            <strong>Name: {searchResult.supplierName}</strong><br />
                            Address: {searchResult.supplierAddress}<br />
                            E-mail: {searchResult.email}<br />
                            Contact: {searchResult.contact}
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
                                E-mail: {supplier.email}<br />
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

export default function Deletesuppliers() {
    const [suppliers, setSuppliers] = useState([]); // No initial sample data
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResult, setSearchResult] = useState(null);
    
    //Handle Searching
    const handleSearch = async () => {
        try {
            const response = await fetch("http://localhost:8080/api/searchById?id=" + searchTerm);
            if (!response.ok) {
                throw new Error('Supplier not found');
            }
            const data = await response.json();
            setSearchResult(data);
        } catch (error) {
            alert(error.message);
            setSearchResult(null);
        }
    };

    // Handle deleting the searched supplier
    const handleDelete = async () => {
        try {
            const response = await fetch("http://localhost:8080/api/suppliers/"+searchResult.id, {
                method: 'DELETE',
            });
            console.log(searchResult.id)
            if (!response.ok) {
                throw new Error('Delete failed');
            }

            alert('Supplier deleted successfully');
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
                <h1 style={{ color: "black", textAlign: "center" }}>DELETE SUPPLIER</h1>
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
                            <strong>Name: {searchResult.name}</strong><br />
                            Address: {searchResult.address}<br />
                            Contact: {searchResult.contact}
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
                                E-mail: {supplier.email}<br />
                                Contact: {supplier.contact}
                            </Box>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Container>
    );
}

