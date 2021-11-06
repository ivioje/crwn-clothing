import './App.css';
import HomePage from './pages/homepage/HomePage.component';
import { Route, Switch } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/Header.component';
import SignInUp from './pages/sign-in/SignIn-Up';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/sign-in' component={SignInUp} />

      </Switch>
    </div>
  );
}

export default App;
