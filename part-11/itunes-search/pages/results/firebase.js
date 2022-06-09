import { initializeApp } from 'firebase'

const app = initializeApp({
    apiKey: 'AIzaSyDPGzWI684bV-YJWdidcLao9F9qMeBuA0U',
    authDomain: 'petstore-79d6b.firebaseapp.com',
    databaseURL: 'https://petstore-79d6b-default-rtdb.firebaseio.com/',
    projectId: 'petstore-79d6b',
    storegeBucket: '',
    messagingSenderId: '877252784475'
});

export const db = app.database();
export const productsRef = db.ref('products')