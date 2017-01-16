
import { AuthProviders, AuthMethods } from 'angularfire2';

export const FIREBASE_AIRGIG_CONFIG = {
    apiKey: "AIzaSyCJ3osBD8XJZfYr2d3Morb-3HUbHof1SqM",
    authDomain: "project-8445292105089162517.firebaseapp.com",
    databaseURL: "https://project-8445292105089162517.firebaseio.com",
    storageBucket: "project-8445292105089162517.appspot.com",
    messagingSenderId: "184985584199"
}


export const FIREBASE_AIRGIG_AUTH_CONFIG = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
};