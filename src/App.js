import './App.css';
import { Homepage } from './pages/homepage/Homepage.component';
import { Switch,Route } from 'react-router-dom';
import {ShopPage} from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

function App() {
  return (
    <div>
      <Header></Header>
      <Switch>
      <Route exact path='/' component={Homepage} />
      <Route exact path='/shop' component={ShopPage} />
      <Route exact path='/signin' component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
