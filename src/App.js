import './App.css';
import HomePage from './pages/homepage/HomePage.component';
import { Route, Switch } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/Header.component';
import SignInUp from './pages/sign-in/SignIn-Up';
import { userAuth, createUserProfileDocument } from './firebase/firebase.utils';
import React, { useState, useEffect } from 'react';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  let unsubscribeFromAuth = null;

  useEffect(() => {
    unsubscribeFromAuth = userAuth.onAuthStateChanged(async (userAuth) => {
      createUserProfileDocument(userAuth);
    })
    return () => {
      unsubscribeFromAuth();
    }
  });

  return (
    <div className="App">
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/sign-in' component={SignInUp} />

      </Switch>
    </div>
  );

}
export default App;
