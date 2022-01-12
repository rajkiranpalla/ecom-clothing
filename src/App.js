import './App.css';
import { Homepage } from './pages/homepage/Homepage.component';
import { Switch,Route } from 'react-router-dom';
import {ShopPage} from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth,createUserProfileDocument} from './firebase/firebase.utils';
import {Component} from 'react';
import {onSnapshot} from "firebase/firestore";

class App extends Component{

  unsubscribeFromAuth = null;
  constructor(props){
    super(props);

    this.state = {
      currentUser: null
    }
  }

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        onSnapshot(userRef,(doc) =>{
          this.setState({
            currentUser:{
              id: doc.id,
              ...doc.data()
            }
          })
        });
      } 
      this.setState({currentUser:userAuth});
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser}></Header>
        <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
