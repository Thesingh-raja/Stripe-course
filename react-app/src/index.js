import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import { FirebaseAppProvider } from 'reactfire';

export const firebaseConfig = {
  apiKey: "AIzaSyB3lPgDllFtGny-MqXPDsi_w37Q8Ll-txg",
  authDomain: "stripe-js-thesingh.firebaseapp.com",
  databaseURL: "https://stripe-js-thesingh-default-rtdb.firebaseio.com",
  projectId: "stripe-js-thesingh",
  storageBucket: "stripe-js-thesingh.appspot.com",
  messagingSenderId: "928611632978",
  appId: "1:928611632978:web:c3973c8033546f05ad9c8b"
};

export const stripePromise = loadStripe(
  'pk_test_51KY6p7SFFkjxlqDsEQLTXCzYtIwodkNZcGDRTN189nisPyT8eh7r8wfu9SF94k5mkl6GtgmyrGdqeBamLqmhqlpO00E2lcMTpo'
);

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <Elements stripe={stripePromise}>
        <App />
      </Elements>
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
