import React, { useState, useEffect } from 'react';
import { Container, Paper, Box, List, ListItem, Button, TextField } from '@mui/material';

export default function ViewReviews() {
    const [reviews, setReviews] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResult, setSearchResult] = useState(null);

    // Fetch reviews from a database
    useEffect(() => {
        const fetchReviews = async () => {
            try {
                // Replace with your API endpoint or database query
                const response = await fetch('http://localhost:8080/api/reviews');
                const data = await response.json();
                console.log(data);
                setReviews(data);
            } catch (error) {
                console.error('Error fetching reviews:', error);
            }
        };

        fetchReviews();
    }, []);

    const handleSearch = async () => {
        try {
            const response = await fetch(`http://localhost:8080/api/reviews/`+searchTerm);
            console.log(response);
            if (!response.ok) {
                throw new Error('Review not found');
            }
            const data = await response.json();
            console.log(data);
            setSearchResult(data);
        } catch (error) {
            alert(error.message);
            setSearchResult(null);
        }
    };

    const handleDelete = async () => {
        try {
            const response = await fetch(`http://localhost:8080/api/reviews/delete?reviewId=`+searchResult.id, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('Delete failed');
            }

            alert('Review deleted successfully');
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
                <h1 style={{ color: "black", textAlign: "center" }}>VIEW REVIEW</h1>
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
                        id="search-order"
                        label="Search Order by ID"
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
                            <strong>Customer: {searchResult.customerId}</strong><br />
                            Product Id: {searchResult.productId}<br />
                            Rating: {searchResult.rating}<br />
                            Comment: {searchResult.reviewText}
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
            <Paper elevation={3} style={paperStyle}>
                <h1 style={{ color: "black", textAlign: "center" }}>ALL REVIEWS</h1>
                <Box sx={{ marginTop: '20px', width: '100%' }}>
                    <List>
                        {reviews.length > 0 ? (
                            reviews.map((review, index) => (
                                <ListItem key={index}>
                                    <Box
                                        sx={{
                                            backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                            padding: '10px',
                                            borderRadius: '5px',
                                            width: '100%',
                                        }}
                                    >
                                        <strong>ID: {review.id}</strong><br />
                                        <strong>Customer: {review.customerId}</strong><br />
                                        Product Id: {review.productId}<br />
                                        Rating: {review.rating}<br />
                                        Comment: {review.reviewText}
                                    </Box>
                                </ListItem>
                            ))
                        ) : (
                            <p style={{ textAlign: 'center' }}>No reviews found</p>
                        )}
                    </List>
                </Box>
            </Paper>
        </Container>
    );
}
