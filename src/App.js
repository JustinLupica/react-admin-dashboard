import SideBar from "./components/SideBar/SideBar"
import TopBar from "./components/TopBar/TopBar"
import Home from "./pages/home/Home"
import "./app.css"

function App() {
  return (
    <div>
      <TopBar />
      <div className="container">
        <SideBar />
        <Home />
      </div>
    </div>
  );
}

export default App;
