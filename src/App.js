import './App.css';
import HomePage from './pages/homepage/HomePage.component';
import { Route, Switch } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/Header.component';
import SignInUp from './pages/sign-in/SignIn-Up';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import React, { useState, useEffect } from 'react';

function App() {
  const [currentUser, setCurrentUser] = useState(null);


  let unsubscribeFromAuth = null;
  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({ 
             id: snapShot.id,
              ...snapShot.data()
             });
        });

      } else {
        setCurrentUser(userAuth);
      }
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
