import React, { useState } from 'react';
import { Container, Paper, Box, TextField, Button, List, ListItem, MenuItem, Select, FormControl, InputLabel } from '@mui/material';

export default function UpdatePayments() {
    const [paymentId, setPaymentId] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');
    const [amount, setAmount] = useState('');
    const [paymentDate, setPaymentDate] = useState('');
    const [payments, setPayments] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [editingIndex, setEditingIndex] = useState(null); // Track which payment is being edited

    // Handle adding/updating a payment
    const handleAddOrUpdatePayment = () => {
        const newPayment = {
            paymentId,
            paymentMethod,
            amount,
            paymentDate,
        };

        if (editingIndex === null) {
            setPayments([...payments, newPayment]); // Add new payment
        } else {
            const updatedPayments = [...payments];
            updatedPayments[editingIndex] = newPayment; // Update existing payment
            setPayments(updatedPayments);
            setEditingIndex(null); // Reset editing index
        }

        // Clear input fields
        setPaymentId('');
        setPaymentMethod('');
        setAmount('');
        setPaymentDate('');
    };

    // Handle searching for a payment by ID
    const handleSearch = () => {
        const index = payments.findIndex((payment) => payment.paymentId === searchTerm);
        if (index !== -1) {
            setPaymentId(payments[index].paymentId);
            setPaymentMethod(payments[index].paymentMethod);
            setAmount(payments[index].amount);
            setPaymentDate(payments[index].paymentDate);
            setEditingIndex(index); // Set index for editing
        } else {
            alert('Payment not found');
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
            <Box sx={{ marginTop: '20px', width: '80%' }}>
                <h2 style={{ textAlign: 'center', color: 'white' }}>Payment List</h2>
                <List>
                    {payments.map((payment, index) => (
                        <ListItem key={index}>
                            <Box
                                sx={{
                                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                    padding: '10px',
                                    borderRadius: '5px',
                                    width: '100%',
                                }}
                            >
                                <strong>ID: {payment.paymentId}</strong><br />
                                <strong>Method: {payment.paymentMethod}</strong><br />
                                Amount: {payment.amount}<br />
                                Date: {payment.paymentDate}
                            </Box>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Container>
    );
}
