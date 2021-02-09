import firebase from 'firebase/app'
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyBgOAHgo1qzN_vs36vh2uM2ZDMoqsHZGLA",
    authDomain: "salvation-army-games.firebaseapp.com",
    projectId: "salvation-army-games",
    storageBucket: "salvation-army-games.appspot.com",
    messagingSenderId: "594738284500",
    appId: "1:594738284500:web:c6cabd867900a45d5d7841"
})

export const auth = app.auth()
export default app