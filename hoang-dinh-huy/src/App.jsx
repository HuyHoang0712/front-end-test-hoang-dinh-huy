import { Link, Outlet } from "react-router-dom";
import "./App.css";



function App() {

  return (
    <div className="main-page">
      <nav className="nav-bar">
        <ul>
          <li>
            <Link to="/">Question1</Link>
          </li>
          <li>
            <Link to="/question2">Question2</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
