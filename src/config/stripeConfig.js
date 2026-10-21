import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(
    'pk_test_51TEYbA2KQVy5oLmaGXgfYyQBWBF1sE8AW8q7ODMapFOgV4T7DQXFGN8S0qXOgwfQraeDPJkPtDLECC8bteCdtm6T00GYDvMh9K'
);


export default stripePromise;