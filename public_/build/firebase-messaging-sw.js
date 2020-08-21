importScripts('https://www.gstatic.com/firebasejs/7.18.0/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/7.18.0/firebase-messaging.js');


firebase.initializeApp({

    apiKey: "AIzaSyDSl5ApODUQSmz7ptkh2aHxy95DGnsCMXg",
    authDomain: "timer-app-22dd9.firebaseapp.com",
    databaseURL: "https://timer-app-22dd9.firebaseio.com",
    projectId: "timer-app-22dd9",
    storageBucket: "timer-app-22dd9.appspot.com",
    messagingSenderId: "48540524499",
    appId: "1:48540524499:web:58422e2802b8dca639d926"
})

firebase.messaging();