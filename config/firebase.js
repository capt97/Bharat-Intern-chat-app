import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import Constants from 'expo-constants';

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDdjPWXiXaYz915a4eMBc9R63N1SO0kCPQ",
  authDomain: "trial-67080.firebaseapp.com",
  databaseURL: "https://trial-67080-default-rtdb.firebaseio.com",
  projectId: "trial-67080",
  storageBucket: "trial-67080.appspot.com",
  messagingSenderId: "849864483851",
  appId: "1:849864483851:web:a2ee24df9b88fc625c930e",
  measurementId: "G-99JNSEGVPC"
};

// initialize firebase
initializeApp(firebaseConfig);

export const auth = getAuth();
export const database = getFirestore();