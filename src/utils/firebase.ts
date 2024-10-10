import {initializeApp} from "firebase/app"
import {getAnalytics} from "firebase/analytics"
import {getAuth, signInWithEmailAndPassword} from "firebase/auth"
import {getMessaging, getToken} from 'firebase/messaging'

const VAPID_KEY = 'BK6vSLlivSE9T3tcjEGaOGzPt2ERNxdAlftxYxlI1mCgXhM7jg3HE9z-cMQmfHYMYU78A4QqR5j-AxdaHd6KRlo'

const firebaseConfig = {
  apiKey: "AIzaSyDi7uyNybaYjx-16lgS6b-NT8ReNc1uqv8",
  authDomain: "lew1s-ee4d4.firebaseapp.com",
  projectId: "lew1s-ee4d4",
  storageBucket: "lew1s-ee4d4.appspot.com",
  messagingSenderId: "105456170728",
  appId: "1:105456170728:web:6115406d7d4f19cb603b5d",
  measurementId: "G-X46L77FF7D"
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const analytics = getAnalytics(app)


export const signIntoFireBase = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    return userCredential.user
  } catch (error) {
    console.error('Error signing in:', error)
  }
}

const messaging = getMessaging(app);

export const subscribeUser = async () => {
  try {
    return await getToken(messaging, {vapidKey: VAPID_KEY})
  } catch (e) {
    console.log('Ошибка при получении FCM токена:', e);
  }
}

