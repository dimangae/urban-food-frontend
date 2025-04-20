import React, { useState } from 'react';
import { Container, Paper, Box, TextField, Button, List, ListItem, MenuItem, Select, FormControl, InputLabel } from '@mui/material';

export default function UpdatePayments() {
    const [paymentId, setPaymentId] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');
    const [amount, setAmount] = useState('');
    const [paymentDate, setPaymentDate] = useState('');
    const [orderId, setOrderId] = useState('')
    const [payments, setPayments] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [editingIndex, setEditingIndex] = useState(null); // Track which payment is being edited

    // Handle adding/updating a payment
    const handleAddOrUpdatePayment = async () => {
        const newPayment = {
            id: paymentId,
            paymentMethod: paymentMethod,
            amount: amount,
            paymentDate: paymentDate,
            orderId: orderId,
        };

        if (editingIndex === null) {
            setPayments([...payments, newPayment]);
        } else {
            const updatedPayments = [...payments];
            updatedPayments[editingIndex] = newPayment; // Update existing order
            setPayments(updatedPayments);
            setEditingIndex(null);
        }

        try {
            const params = new URLSearchParams({
                id: paymentId,
                paymentMethod: paymentMethod,
                amount: amount,
                paymentDate: paymentDate,
                orderId: orderId,
          }).toString();

            // Replace this URL with your backend API endpoint
            const response = await fetch('http://localhost:8080/api/payments/' + paymentId + '?' + params, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newPayment),
            });

            if (response.ok) {
                alert('Payment updated successfully!');
                // Clear input fields
                setPaymentId('');
                setPaymentMethod('');
                setAmount('');
                setPaymentDate('');
                setOrderId('');
            } else {
                alert('Failed to add payment. Please try again.');
            }
        } catch (error) {
            console.error('Error updating payment:', error);
            alert('An error occurred while updating the payment.');
        }

        // Clear input fields
        setPaymentId('');
        setPaymentMethod('');
        setAmount('');
        setPaymentDate('');
        setOrderId('');
        setEditingIndex(null);
    };

    // Handle searching for a payment by ID
    const handleSearch = async () => {
        try {
            const response = await fetch("http://localhost:8080/api/payments/" + searchTerm);
            if (!response.ok) {
                throw new Error('Order not found');
            }
            const data = await response.json();

            setPaymentId(data.id);
            setPaymentMethod(data.paymentMethod);
            setAmount(data.amount);
            setPaymentDate(data.paymentDate);
            setOrderId(data.orderId);
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
                <h1 style={{ color: "black", textAlign: "center" }}>UPDATE PAYMENTS</h1>
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
                        id="search-payment"
                        label="Search Payment by ID"
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
                            <MenuItem value="Credit Card/Debit Card">Credit Card/Debit Card</MenuItem>
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
                        id="payment-date"
                        label="Payment Date"
                        type="date"
                        value={paymentDate}
                        onChange={(e) => setPaymentDate(e.target.value)}
                        InputLabelProps={{
                            shrink: true,
                        }}
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
                        onClick={handleAddOrUpdatePayment}
                    >
                        {editingIndex === null ? 'Add' : 'Update'}
                    </Button>
                </Box>
            </Paper>
        </Container>
    );
}
