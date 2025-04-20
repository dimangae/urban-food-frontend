import React, { useState, useEffect } from 'react';
import { Container, Paper, Box, TextField, Button, List, ListItem, MenuItem, Select, FormControl, InputLabel } from '@mui/material';

export default function Payments() {
    const [paymentId, setPaymentId] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');
    const [amount, setAmount] = useState('');
    const [paymentDate, setPaymentDate] = useState('');
    const [payments, setPayments] = useState([]);

    // Automatically set the current date as the default payment date
    useEffect(() => {
        const now = new Date();
        setPaymentDate(now.toISOString().split('T')[0]); // Set default payment date
    }, []);

    const handleAddPayment = () => {
        const newPayment = {
            paymentId,
            paymentMethod,
            amount,
            paymentDate,
        };
        setPayments([...payments, newPayment]);
        // Clear inputs
        setPaymentId('');
        setPaymentMethod('');
        setAmount('');
        setPaymentDate(''); // Reset the field (default value will be re-applied by useEffect)
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
