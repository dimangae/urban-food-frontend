import React, { useState } from 'react';
import { Container, Paper, Box, TextField, Button, List, ListItem } from '@mui/material';

export default function DeleteReviews() {
    const [reviews, setReviews] = useState([]); // Initialize with an empty array
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResult, setSearchResult] = useState(null);

    // Handle searching for a review by ID
    const handleSearch = () => {
        const review = reviews.find((review) => review.reviewId === searchTerm);
        if (review) {
            setSearchResult(review);
        } else {
            alert('Review not found');
            setSearchResult(null);
        }
    };

    // Handle deleting the searched review
    const handleDelete = () => {
        if (searchResult) {
            const updatedReviews = reviews.filter((review) => review.reviewId !== searchResult.reviewId);
            setReviews(updatedReviews);
            alert('Review deleted successfully');
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
                <h1 style={{ color: "black", textAlign: "center" }}>DELETE REVIEW</h1>
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
                        id="search-review"
                        label="Search Review by ID"
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
                            <strong>ID: {searchResult.reviewId}</strong><br />
                            <strong>Comment: {searchResult.comment}</strong><br />
                            Rating: {searchResult.rating}
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
                <h2 style={{ textAlign: 'center', color: 'white' }}>Review List</h2>
                <List>
                    {reviews.map((review, index) => (
                        <ListItem key={index}>
                            <Box
                                sx={{
                                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                    padding: '10px',
                                    borderRadius: '5px',
                                    width: '100%',
                                }}
                            >
                                <strong>ID: {review.reviewId}</strong><br />
                                <strong>Comment: {review.comment}</strong><br />
                                Rating: {review.rating}
                            </Box>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Container>
    );
}
