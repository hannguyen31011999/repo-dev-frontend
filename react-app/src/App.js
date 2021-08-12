// import AudioComponent from './Playlist/AudioComponent';
// import XucXacComponent from './Xucxac/XucXacComponent';
// import MainGameOtt from './GameOtt/MainGameOtt';
// import MainBMT from "./BookMoviesTickets/MainBMT";
import GuestComponent from "./Guest/GuestComponent";
import GuestTableComponent from "./Guest/GuestTableComponent";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={GuestComponent}>
          </Route>
          <Route path="/guest" component={GuestTableComponent}>
          </Route>
        </Switch>
      </Router>
      {/* <AudioComponent /> */}
      {/* <XucXacComponent /> */}
      {/* <MainGameOtt /> */}
      {/* <MainBMT /> */}
    </div>
  );
}

export default App;
