import TopBar from './Components/TopBar/TopBar.jsx';
import Home from './Pages/Home/Home.jsx';
import Single from './Pages/Single/Single';
import Write from './Pages/Write/Write';
import Settings from './Pages/Settings/Settings';
import Login from './Pages/Login/login';
import Register from './Pages/Register/Register';
import AppQuiz from './Pages/AppQuiz/AppQuiz.jsx';
import {Context} from './context/Context';
import { useContext } from 'react';
import {BrowserRouter as Router, Switch,Route, Link} from 'react-router-dom';

function App() {
const {user}= useContext(Context)
  return(
    <Router>
    
      <TopBar />
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/register">
         { user ? <Home/> :<Register/>}
        </Route>
        <Route path="/login">
          { user? <Home/> : <Login/>}
        </Route>
        <Route path="/quiz">
          {user? <AppQuiz/> :<Register/>}
        </Route>
        <Route path="/write">
        { user ? <Write/> :<Register/>}
        </Route>
        <Route path="/settings">
         {user ? <Settings/>: <Register/>}
        </Route>
        <Route path="/post/:postId">
        <Single/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;



