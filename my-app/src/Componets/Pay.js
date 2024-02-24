import React, { useState } from 'react';
import './Pay.css';

function Pay() {
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add logic to handle form submission, such as sending payment data to a server or payment gateway
    };

    return (
        <div className="payment-form">
            <h2>Payment Details</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="cardNumber">Card Number</label>
                    <input type="text" id="cardNumber" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="expiryDate">Expiry Date</label>
                    <input type="text" id="expiryDate" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="cvv">CVV</label>
                    <input type="text" id="cvv" value={cvv} onChange={(e) => setCvv(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Cardholder Name</label>
                    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="amount">Amount</label>
                    <input type="text" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)} required />
                </div>
                <button type="submit">Pay Now</button>
            </form>
        </div>
    );
}

export default Pay;
