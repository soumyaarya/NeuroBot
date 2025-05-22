console.log("Loading from:", process.env.FIREBASE_SERVICE_ACCOUNT_KEY_PATH);
require("dotenv").config();
const admin = require("firebase-admin");
const path = require('path');
const serviceAccount = require(path.resolve(__dirname, 'firebaseServiceAccount.json.json'));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;
