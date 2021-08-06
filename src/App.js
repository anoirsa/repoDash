import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import {Switch, Route} from 'react-router-dom';
import HomePage from './components/pages/home/HomePage';
import Announcements from './components/pages/announcements/Announcements';
import BankEnergi from './components/pages/bankenergi/BankEnergi';

function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="others">
          <div className="others-wrapper">
              <Switch>
                <Route path="/" component={HomePage} exact />
                <Route path="/announcements" component={Announcements} exact />
                <Route path="/bankenergi" component={BankEnergi} exact />
              </Switch>
          </div>
        </div>
       </div>
    </div>
  );
}

export default App;
