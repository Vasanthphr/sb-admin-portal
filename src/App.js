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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/portal" element={<Portal />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="users/:id" element={<Userview />} />
          <Route path="user/edit/:id" element={<EditUser />} />
          <Route path="products" element={<Products />} />
          <Route path="create-user" element={<CreateUser />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
