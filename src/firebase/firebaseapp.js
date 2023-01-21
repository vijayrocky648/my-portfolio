import {initializeApp} from 'firebase/app'
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    "type": "service_account",
    "projectId": "vijayportfolio-49514",
    "private_key_id": "fca3e756f6b8087f3f07a1e8c4dc7b5c6da45d4d",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCvpo1/o/6OC+Sz\nPvyEpjXgg1kBh/CXwzGdIDqR43Ipj0Q5c2belFF9KcPgwp7lh4kTZysUIsXV4YFO\niHXuaHynWgwjd4o8LIuRNAvYVqJLJl7cOwsZuYQpAFmuaj1RE5csTTZoeWX7Y6B4\nGCA7DFx9RVJHNM2QrtJZBZyLenp6hIoCXx4KQTUMSl60Rnvd7o9g8vC0E1gAO78U\niLT8rS/nWBblE+gQOWGiwzAxScLEO9c65Qq9MmUBAT3sR3TzI9qEhAiRx96IMtAn\nHVsmNzPcffTJBrJFFKDq/WLMX5UkxKrfbR3irzzHwkNuZjij3yMy8/+Q0rha1NJy\naxec/e/BAgMBAAECggEAAk9El4vSvk/qOTAoFl9wIGxhuHsu3vP+XERO+Nmeh+ze\nFwpNLTqSiryImpU8jSSX2RU3dAuUAeC1+FAjite9Yd71f2bkPq/QQv/F8xmKh0Xx\nI+Cz3+n4UqiyRTCY7068Y2T9hOipvmE8PDAHBne+ZJhLgWuwk0k1M133Rb89yowb\nh3wO8IxwqB3+N9Pl5KSE7RsmPE4fz28XIb3EUnZNLAJSzLGrfW1gr5yexsArVqe7\nLOLci+3iPOiIt6TINiPQyHPIZNGCYYZvuXVT7bwJB7FFySu3ROmTQpHs4Urdqbjn\nxKGoCaaiJ8tVHQPjHDYVQvOrUCK+RpNL64DWN9RvtQKBgQDYw6Y5JKobS0tfnRh7\ns4hhBAPCF14x3WAObndd+Q9anVAcHkT3OXUMmYjzp0vU0TXH1Sajs2c0fzkVERBo\ncc7QnUXxe9c8cYtKa0QacxXGeEMpzDsp+/rbkXi1UXamkd/akKdATNysCCszwZ02\nzw6xUbYICMesN/HyJXxy3JMZlQKBgQDPccrQqhA+f9Gq/606wCX+WVjWZViAzKnD\nQ/2Q3+5ypNyXB7oqXgwdfLJcNyAj6219plh0BeDTb/N+lRtQ2r4AZEoXzF6jakJx\nyX+SOhXWVox+XDpuegPPjjFwSxU1ZhcYfBk3upu9QY/PepSJfR8HJam5gHN+ad1O\nuLE7nRgqfQKBgQDAJzADF+1zpJt8dtZtUgljdxudwvlNWuD76hEGzPI/cZTCWFLq\nlZSdRr2QwI0Iay0xqFJIa5DhiKYhdq8E515esAyAtTdn7X98yPnmOH7lIVbohpMr\n9KO8YIiQs1Zq8oVuSyz4Yyp7lgI2Lzweig6MQdML7DyU/kMMVQ6tA7uiwQKBgG2R\n9UZyDVJ1wRFJKv61L1xBZSMZNL4TXDe/WdeD8DatzbYYZsSqGEwa6Tq8A0X1vEd5\n7Y6a7D3CDCL4Lw1t/J3IWzpmwDYgkif3/mIGPDKSVHMJ0/M2j3y55nMhtXoXCmvs\nYIWHE2vLjWJRpNNaO2FTC2rn5hkHYdWKyFJsj68hAoGAevGRc2irAtKlMOxLn9Zz\nq3/tuQuSZZMuu9Bdc1ZCpzObl65Pqt98oi0lLRiLoHPfUnrtG6zPFsOZobWqp5Ng\n93I1AKznGvrZwesVS64tsTmHg7TaZnfrPiCRYE6i9ZSwA73HLvuSSed1M7DllSwo\nY1KP9NpfNBOU00hlHBzYFzs=\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-w9tnb@vijayportfolio-49514.iam.gserviceaccount.com",
    "client_id": "115693206608202665803",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-w9tnb%40vijayportfolio-49514.iam.gserviceaccount.com"
  }
 const FIREBASEAPP =initializeApp(firebaseConfig);

 export default FIREBASEAPP;