import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Chat } from "./components/Chat.jsx";
import { Login } from "./components/Login";
import { Navbar } from "./components/Navbar";
import { Operations } from "./components/Operations";
import { Register } from "./components/Register";
import { useUser } from "./context/UserContext";

function App() {
  const { user } = useUser();

  const Private = (child) => {
    return user.login ? child : <Navigate to="/" />;
  };

  // const Public = (child) => {
  //   return user.login ? child : <Navigate to="/" />;
  // };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/chat" element={Private(<Chat/>)} />
        {/* <Route path="/" element={<Main />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/operations/:id" element={Private(<Operations/>)} />
      </Routes>
    </Router>
  );
}

export default App;
