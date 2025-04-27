import React, { useState, useEffect } from 'react';
import { Container, Paper, Box, TextField, Button, List, ListItem, MenuItem, Select, FormControl, InputLabel } from '@mui/material';

export default function Payments() {
    const [paymentId, setPaymentId] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');
    const [amount, setAmount] = useState('');
    const [paymentDate, setPaymentDate] = useState('');
    const [orderId, setOrderId] = useState('')
    const [payments, setPayments] = useState([]);

    // Automatically set the current date as the default payment date
    useEffect(() => {
        const now = new Date();
        setPaymentDate(now.toISOString().split('T')[0]); // Set default payment date
    }, []);

    const handleAddPayment = async () => {
        const newPayment = { 
            id: paymentId,
            paymentMethod: paymentMethod,
            amount: amount,
            paymentDate: paymentDate,
            orderId: orderId,
        };
        setPayments([...payments, newPayment]);

        try {
            const params = new URLSearchParams({
                id: paymentId,
                paymentMethod: paymentMethod,
                amount: amount,
                paymentDate: paymentDate,
                orderId: orderId,
              }).toString();

            // Replace this URL with your backend API endpoint
            const response = await fetch('http://localhost:8080/api/payments?' + params, 
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(newPayment),
            });

            if (response.ok) {
                alert('Payment added successfully!');
                // Clear inputs
                setPaymentId('');
                setPaymentMethod('');
                setAmount('');
                setPaymentDate('');
                setOrderId('');
            } else {
                alert('Failed to add payment. Please try again.');
            }
        } catch (error) {
            console.error('Error adding payment:', error);
            alert('An error occurred while adding the Payment');
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
        position: 'relative',
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

    const paymentDateStyle = {
        position: 'absolute',
        top: 10, // Aligns at the top within the white box
        right: 10, // Aligns to the right within the white box
        width: '30%', // Reduced width for a smaller field
    };

    return (
        <Container style={containerStyle}>
            <Paper elevation={3} style={paperStyle}>
                {/* Payment Date text field in the top-right corner */}
                <TextField
                    id="payment-date"
                    label="Payment Date"
                    type="date"
                    value={paymentDate} // Default value is set
                    onChange={(e) => setPaymentDate(e.target.value)} // Allows manual changes
                    InputLabelProps={{
                        shrink: true,
                    }}
                    style={paymentDateStyle}
                    variant="outlined"
                    size="small"
                />
                <h1 style={{ color: "black", textAlign: "center" }}>PAYMENTS</h1>
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
                        id="payment-id"
                        label="Payment ID"
                        value={paymentId}
                        onChange={(e) => setPaymentId(e.target.value)}
                        variant="outlined"
                    />
                    <FormControl sx={{ width: '80%' }}>
                        <InputLabel id="payment-method-label">Payment Method</InputLabel>
                        <Select
                            id="payment-method"
                            labelId="payment-method-label"
                            value={paymentMethod}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                            variant="outlined"
                        >
                            <MenuItem value="Cash">Cash</MenuItem>
                            <MenuItem value="Credit Card/Debit Card" disabled>Credit Card/Debit Card</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        id="amount"
                        label="Amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        variant="outlined"
                    />
                    <TextField
                        id="order-id"
                        label="Order ID"
                        value={orderId}
                        onChange={(e) => setOrderId(e.target.value)}
                        variant="outlined"
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        style={{ marginTop: '20px', width: '20%' }}
                        onClick={handleAddPayment}
                    >
                        Add
                    </Button>
                </Box>
            </Paper>
        </Container>
    );
}
