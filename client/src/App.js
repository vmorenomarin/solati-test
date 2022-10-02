import { BrowserRouter as Router, Route, Navigate } from "react-router-dom";  
import { Login } from "./components/Login";
import { Navbar } from "./components/Navbar";
import { useUser } from "./context/UserContext";

function App() {
  const { user } = useUser();

  const Private = (props) => {
    return user.login ? <Route {...props} /> : <Navigate to="/" />;
  };

  const Public = (props) => {
    return user.login ? <Route {...props} /> : <Navigate to="/login" />;
  };

  return (
    <Router>
      <Navbar />
      <Login></Login>
    </Router>
  );
}

export default App;
