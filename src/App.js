import './App.css';
import { Homepage } from './pages/homepage/Homepage.component';
import { Switch, Route } from 'react-router-dom';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE </h1>
  </div>
);

function App() {
  return (
    <div>
      <Route exact path='/' component={Homepage} />
      <Route exact path='/hats' component={HatsPage} />
    </div>
  );
}

export default App;
