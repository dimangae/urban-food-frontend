import React, { useState, useEffect } from 'react';
import { Container, Paper, Box, List, ListItem } from '@mui/material';

export default function ViewReviews() {
    const [reviews, setReviews] = useState([]);

    // Fetch reviews from a database
    useEffect(() => {
        const fetchReviews = async () => {
            try {
                // Replace with your API endpoint or database query
                const response = await fetch('https://api.example.com/reviews');
                const data = await response.json();
                setReviews(data);
            } catch (error) {
                console.error('Error fetching reviews:', error);
            }
        };

        fetchReviews();
    }, []);

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
                <h1 style={{ color: "black", textAlign: "center" }}>REVIEWS</h1>
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
                                        <strong>ID: {review.reviewId}</strong><br />
                                        <strong>Comment: {review.comment}</strong><br />
                                        Rating: {review.rating}
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
