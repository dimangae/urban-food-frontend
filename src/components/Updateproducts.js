/*import React, { useState } from 'react';
import { Container, Paper, Box, TextField, MenuItem, Button, List, ListItem } from '@mui/material';

export default function Products1() {
    const categories = ['Fruits', 'Vegetables', 'Dairy Products', 'Baked Goods', 'Handmade Crafts', 'Animal Products'];

    const [productName, setProductName] = useState('');
    const [category, setCategory] = useState('');
    const [stock, setStock] = useState('');
    const [price, setPrice] = useState('');
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [editingIndex, setEditingIndex] = useState(null); // To track which product is being edited

    // Generate unique Product ID
    const generateProductId = () => Math.floor(100000 + Math.random() * 900000).toString();

    // Handle adding/updating a product
    const handleAddOrUpdateProduct = () => {
        const newProduct = {
            productId: editingIndex === null ? generateProductId() : products[editingIndex].productId, // Keep the same ID when editing
            productName,
            category,
            stock,
            price,
        };

        if (editingIndex === null) {
            setProducts([...products, newProduct]); // Add new product
        } else {
            const updatedProducts = [...products];
            updatedProducts[editingIndex] = newProduct; // Update existing product
            setProducts(updatedProducts);
            setEditingIndex(null); // Reset editing index
        }

        // Clear input fields
        setProductName('');
        setCategory('');
        setStock('');
        setPrice('');
    };

    // Handle searching for a product by ID
    const handleSearch = () => {
        const index = products.findIndex((product) => product.productId === searchTerm);
        if (index !== -1) {
            setProductName(products[index].productName);
            setCategory(products[index].category);
            setStock(products[index].stock);
            setPrice(products[index].price);
            setEditingIndex(index); // Set the index for editing
        } else {
            alert('Product not found');
            setEditingIndex(null);
        }
    };

    // Styles for the paper
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

    // Styles for the container
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
                <h1 style={{ color: "black", textAlign: "center" }}>UPDATE PRODUCTS</h1>
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
                        id="search-product"
                        label="Search Product by ID"
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
                        id="price"
                        label="Price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        variant="outlined"
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        style={{ marginTop: '20px', width: '20%' }}
                        onClick={handleAddOrUpdateProduct}
                    >
                        {editingIndex === null ? 'Add' : 'Update'}
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
                                    width: '100%',
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
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [editingIndex, setEditingIndex] = useState(null); // To track which product is being edited

    // Handle adding/updating a product
    const handleAddOrUpdateProduct = async () => {
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

        if (editingIndex === null) {
            setProducts([...products, newProduct]);
        } else {
            const updatedProducts = [...products];
            updatedProducts[editingIndex] = newProduct; // Update existing product
            setProducts(updatedProducts);
            setEditingIndex(null);
        }

        try {
            const params = new URLSearchParams({
                supplierId: supplierId,
                name: productName,
                category: category,
                description: description,
                price: price,
                stockQuantity: stock,
                imageUrl: imageUrl,
          }).toString();

            // Replace this URL with your backend API endpoint
            const response = await fetch('http://localhost:8080/api/products/' + productId + '?' + params, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newProduct),
            });

            if (response.ok) {
                alert('Product updated successfully!');
                // Clear input fields
                setProductId('');
                setSupplierId('');
                setProductName('');
                setCategory('');
                setStock('');
                setPrice('');
                setDescription('');
                setImageUrl('');
            } else {
                alert('Failed to update product. Please try again.');
            }
        } catch (error) {
            console.error('Error updating product:', error);
            alert('An error occurred while updating the product.');
        }

        // Clear input fields
        setProductId('');
        setSupplierId('');
        setProductName('');
        setCategory('');
        setStock('');
        setPrice('');
        setDescription('');
        setImageUrl('');
    };

    // Handle searching for a product by ID
    const handleSearch = async () => {
        try {
            const response = await fetch("http://localhost:8080/api/products/" + searchTerm);
            if (!response.ok) {
                throw new Error('Supplier not found');
            }
            const data = await response.json();

            setProductId(data.id);
            setSupplierId(data.supplierId);
            setProductName(data.name);
            setCategory(data.category);
            setStock(data.stockQuantity);
            setPrice(data.price);
            setDescription(data.description);
            setImageUrl(data.imageUrl);
            setEditingIndex(data.id); // Set index for editing
        } catch (error) {
            alert(error.message);
            setEditingIndex(null);
        }
    };

    // Styles for the paper
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

    // Styles for the container
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
                <h1 style={{ color: "black", textAlign: "center" }}>UPDATE PRODUCTS</h1>
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
                        id="search-product"
                        label="Search Product by ID"
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
                        id="description" 
                        label="Description" 
                        value={description}
                        onChange={(e) => setDescription(e.target.value)} 
                        variant="outlined" 
                    />
                    <TextField
                        id="stock"
                        label="Stock"
                        value={stock}
                        onChange={(e) => setStock(e.target.value)}
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
                        onClick={handleAddOrUpdateProduct}
                    >
                        {editingIndex === null ? 'Add' : 'Update'}
                    </Button>
                </Box>
            </Paper>
        </Container>
    );
}

