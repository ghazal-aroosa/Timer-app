import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyDSl5ApODUQSmz7ptkh2aHxy95DGnsCMXg",
    authDomain: "timer-app-22dd9.firebaseapp.com",
    databaseURL: "https://timer-app-22dd9.firebaseio.com",
    projectId: "timer-app-22dd9",
    storageBucket: "timer-app-22dd9.appspot.com",
    messagingSenderId: "48540524499",
    appId: "1:48540524499:web:58422e2802b8dca639d926"
}

firebase.initializeApp(config)

export default firebase;