import './App.css';
import { Homepage } from './pages/homepage/Homepage.component';
import { Switch,Route } from 'react-router-dom';
import {ShopPage} from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth,createUserProfileDocument} from './firebase/firebase.utils';
import {Component} from 'react';
import {onSnapshot} from "firebase/firestore";
import {connect } from 'react-redux';
import {setCurrentUser} from './redux/user/user-actions';
class App extends Component{

  unsubscribeFromAuth = null;
    constructor(props){
    super(props);
  }

  componentDidMount(){
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        onSnapshot(userRef,(doc) =>{
          setCurrentUser({
              id: doc.id,
              ...doc.data()
            });
        });
      } 
      setCurrentUser(userAuth);
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
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
}

/*
mapDispatchToProps function should return a plain object.
Each field in the object will become a separate prop for your own component, 
and the value should normally be a function that dispatches an action when called.

in this example below the setCurrentUser is a prop which holds a function 
that takes user as a parameter and when called it dispatches a action
*/
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)) 
})
export default connect(null,mapDispatchToProps)(App);
