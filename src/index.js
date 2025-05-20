// Import my CSS
import "./style.css";

// Import bootstrap custom CSS
import './scss/styles.scss';

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap';


if (process.env.NODE_ENV !== 'production') {
   console.log('Looks like we are in development mode!');
 }
