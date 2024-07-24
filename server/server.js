const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY);
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post()

app.listen(process.env.PORT, () => console.log('Server is running successfully'))