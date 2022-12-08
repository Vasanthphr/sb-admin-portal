import "./css/sb-admin-2.css";
import "./App.css";
import Dashboard from "./Dashboard";
import Users from "./Users";
import Products from "./Products";
import LoginPage from "./LoginPage";
import Portal from "./Portal";
import CreateUser from "./CreateUser";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Userview from "./Userview";
import EditUser from "./Edituser";
import Demo from "./Demo";
import { UserProvider } from "./useContext";
import Profile from "./Profile";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/portal" element={<Portal />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="users" element={<Users />} />
            <Route path="profile" element={<Profile />} />
            <Route path="users/:id" element={<Userview />} />
            <Route path="user/edit/:id" element={<EditUser />} />
            <Route path="products" element={<Products />} />
            <Route path="create-user" element={<CreateUser />} />
          </Route>
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
