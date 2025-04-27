/*
import React from 'react';
import { Container, Paper, Box, TextField, MenuItem, Button } from '@mui/material';

export default function Products1() {
    const categories = ['Burger', 'Koththu', 'Biriyani', 'Fried Rice', 'Roti'];

    const [category, setCategory] = React.useState('');

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
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
        height: '100vh', 
        width: '100vw', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundImage: "url('/images/food.jpg')", // Set your image path
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
                <h1 style={{ color: "black", textAlign: "center" }}>PRODUCTS</h1>
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
                    <TextField id="product-id" label="Product ID" variant="outlined" />
                    <TextField id="product-name" label="Product Name" variant="outlined" />
                    <TextField
                        id="category"
                        select
                        label="Category"
                        value={category}
                        onChange={handleCategoryChange}
                        variant="outlined"
                    >
                        {categories.map((option) => (
                            <MenuItem key={option} value={option}>
                                {option}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField id="stock" label="Stock" variant="outlined" />
                    <TextField id="price" label="Price" variant="outlined" />

                    
                    <Button 
                        variant="contained" 
                        color="primary" 
                        style={{ marginTop: '20px', width: '20%' }}
                    >
                        Add
                    </Button>
                </Box>
            </Paper>
        </Container>
    );
}*/

import React, { useState } from 'react';
import { Container, Paper, Box, TextField, MenuItem, Button, List, ListItem } from '@mui/material';

export default function Products1() {
    const categories = ['Fruits', 'Vegetables', 'Dairy Products', 'Baked Goods', 'Handmade Crafts', 'Animal Products'];

    const [productId, setProductId] = useState(''); // Manually handle Product ID
    const [productName, setProductName] = useState('');
    const [supplierId, setSupplierId] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [stock, setStock] = useState('');
    const [price, setPrice] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [products, setProducts] = useState([]);

    const handleAddProduct = async () => {
        const newProduct = { 
            id: productId,
            supplier_id: supplierId,
            name: productName,
            category: category,
            description: description,
            price: price,
            stock_quantity: stock,
            image_url: imageUrl,
        };
        setProducts([...products, newProduct]);

        try {
            const params = new URLSearchParams({
                id: productId,
                supplierId: supplierId,
                name: productName,
                category: category,
                description: description,
                price: price,
                stockQuantity: stock,
                imageUrl: imageUrl,
              }).toString();

            // Replace this URL with your backend API endpoint
            const response = await fetch('http://localhost:8080/api/products?' + params, 
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(newProduct),
            });

            if (response.ok) {
                alert('Product added successfully!');
                // Clear inputs
                setProductId('');
                setSupplierId('');
                setProductName('');
                setCategory('');
                setStock('');
                setPrice('');
                setDescription('');
                setImageUrl('');
            } else {
                alert('Failed to add product. Please try again.');
            }
        } catch (error) {
            console.error('Error adding product:', error);
            alert('An error occurred while adding the product.');
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
                <h1 style={{ color: "black", textAlign: "center" }}>PRODUCTS</h1>
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
                        id="product-id" 
                        label="Product ID" 
                        value={productId} 
                        onChange={(e) => setProductId(e.target.value)}
                        variant="outlined" 
                    />
                    <TextField 
                        id="supplier-id" 
                        label="Supplier ID" 
                        value={supplierId}
                        onChange={(e) => setSupplierId(e.target.value)} 
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
                        id="category"
                        select
                        label="Category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        variant="outlined"
                    >
                        {categories.map((option) => (
                            <MenuItem key={option} value={option}>
                                {option}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField 
                        id="stock" 
                        label="Stock" 
                        value={stock}
                        onChange={(e) => setStock(e.target.value)} 
                        variant="outlined" 
                    />
                    <TextField 
                        id="description" 
                        label="Description" 
                        value={description}
                        onChange={(e) => setDescription(e.target.value)} 
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
                        id="imageUrl" 
                        label="Image URL" 
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)} 
                        variant="outlined" 
                    />

                    <Button 
                        variant="contained" 
                        color="primary" 
                        style={{ marginTop: '20px', width: '20%' }}
                        onClick={handleAddProduct}
                    >
                        Add 
                    </Button>
                </Box>
            </Paper>

            <Box sx={{ marginTop: '20px', width: '80%' }}>
                <h2 style={{ textAlign: 'center', color: 'white' }}>Product List</h2>
                <List>
                    {products.map((product, index) => (
                        <ListItem key={index}>
                            <Box 
                                sx={{ 
                                    backgroundColor: 'rgba(255, 255, 255, 0.8)', 
                                    padding: '10px', 
                                    borderRadius: '5px',
                                    width: '100%' 
                                }}
                            >
                                <strong>ID: {product.productId}</strong><br />
                                <strong>Name: {product.productName}</strong><br />
                                Category: {product.category}<br />
                                Stock: {product.stock}, Price: {product.price}
                            </Box>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Container>
    );
}
