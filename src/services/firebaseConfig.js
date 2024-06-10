import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyC7foasp2TlcOA3ny3hLKpqKKmbE5dSapQ",
  authDomain: "lojahype-19a01.firebaseapp.com",
  projectId: "lojahype-19a01",
  storageBucket: "lojahype-19a01.appspot.com",
  messagingSenderId: "1007712531062",
  appId: "1:1007712531062:web:e980b332211c866a97e557"
};

const app = initializeApp(firebaseConfig);

const storage = getStorage(app);