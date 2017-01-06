import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './react/containers/AppContainer';

var config = {
  apiKey: "AIzaSyBB_aazFI4lfQHjbV5aT8Sijn7g_QFWVus",
  authDomain: "tabby-birthday.firebaseapp.com",
  databaseURL: "https://tabby-birthday.firebaseio.com",
  storageBucket: "tabby-birthday.appspot.com",
  messagingSenderId: "123817139480"
};
firebase.initializeApp(config);

ReactDOM.render(
  <AppContainer />,
  document.getElementById('app')
);
