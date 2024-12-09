import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyA-_1Ro0CAvdQ9zKiLoRsZL3vYGlndnaWs',
  authDomain: 'paytherent.firebaseapp.com',
  projectId: 'paytherent',
  storageBucket: 'paytherent.firebasestorage.app',
  messagingSenderId: '784053923897',
  appId: '1:784053923897:web:47bd70e0ef7f17013b5de8',
  measurementId: 'G-H62254WZ8M',
};

// Firebase 초기화
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
