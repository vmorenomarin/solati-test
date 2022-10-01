import { BrowserRouter as Router, Route, Navigate } from "react-router-dom";  
import { Navbar } from "./components/Navbar";
import { useUser } from "./context/UserContext";

function App() {
  const { login } = useUser;
  const validation = () => {
    return login ? true : false;
  };

  const Private = (props) => {
    return validation() ? <Route {...props} /> : <Navigate to="/" />;
  };

  const Public = (props) => {
    return !validation() ? <Route {...props} /> : <Navigate to="/" />;
  };

  return (
    <Router>
      <Navbar />
    </Router>
  );
}

export default App;
