
import { AuthProviders, AuthMethods } from 'angularfire2';

export const FIREBASE_AIRGIG_CONFIG = {
    apiKey: "AIzaSyAbFt-bbnwhZuIxrBa4pYp5iSzFWNQrYj4",
    authDomain: "onyxium-f75e8.firebaseapp.com",
    databaseURL: "https://onyxium-f75e8.firebaseio.com",
    storageBucket: "onyxium-f75e8.appspot.com",
    messagingSenderId: "600801268336"
}


export const FIREBASE_AIRGIG_AUTH_CONFIG = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
};