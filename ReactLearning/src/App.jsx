import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Home from "./component/home/Home";
import RegistrationForm from "./component/account/RegistrationForm";
import SignInForm from "./component/account/SignInForm";
import Dashboard from "./component/dashboard/Dashboard";
import { useSelector } from "react-redux";
import Navbar from "./component/navbar/Navbar";

function App() {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/signin" element={<SignInForm />} />
          <Route
            path="/dashboard"
            element={
              isAuthenticated ? <Dashboard /> : <Navigate to="/signin" />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
