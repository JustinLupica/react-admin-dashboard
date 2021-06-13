import SideBar from "./components/SideBar/SideBar"
import TopBar from "./components/TopBar/TopBar"
import Home from "./pages/home/Home"
import UserList from "./pages/userList/UserList"
import "./app.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; 

function App() {
  return (
    <Router>
      <TopBar />
      <div className="container">
        <SideBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
