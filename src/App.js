import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { auth } from "./base";
import AuthPage from "./AuthPage";
import Home from "./Home";
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState(auth.currentUser);
  useEffect(() => {
    auth.onAuthStateChanged((user) => setUser(user));
  }, []);
  return (
    <Router>
      <div className="App">
        <Route path="/login">
          <AuthPage />
        </Route>
        <Route path="/" exact>
          {user ? <Home /> : <Link to="/login">Login here</Link>}
        </Route>
      </div>
    </Router>
  );
}

export default App;
