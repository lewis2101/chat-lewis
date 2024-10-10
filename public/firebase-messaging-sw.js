importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "AIzaSyDi7uyNybaYjx-16lgS6b-NT8ReNc1uqv8",
  authDomain: "lew1s-ee4d4.firebaseapp.com",
  projectId: "lew1s-ee4d4",
  storageBucket: "lew1s-ee4d4.appspot.com",
  messagingSenderId: "105456170728",
  appId: "1:105456170728:web:6115406d7d4f19cb603b5d",
  measurementId: "G-X46L77FF7D"
});

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler((payload) => {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/firebase-logo.png'
  };

  return self.registration.showNotification(notificationTitle, notificationOptions);
});
