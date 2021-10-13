// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFireStore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBMnznZNQL77djBce9YlCBZf9Dc-zRWxNM',
  authDomain: 'instagram-clone-de03f.firebaseapp.com',
  projectId: 'instagram-clone-de03f',
  storageBucket: 'instagram-clone-de03f.appspot.com',
  messagingSenderId: '658317300492',
  appId: '1:658317300492:web:c910f2a9807e2a10e26f29',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFireStore();
const storage = getStorage();

export { app, db, storage };
