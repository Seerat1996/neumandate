import Login from "./Components/LoginSignUp/Login";
import Registeration from "./Components/LoginSignUp/Registeration";
import { Routes, Route } from "react-router-dom";
import SideBar from "./Components/SideBar/SideBar";
import CreateOffer from "./Components/Pages/CreateOffer";
import Dashboard from "./Components/Pages/Dashboard";
import ManageOffer from "./Components/Pages/ManageOffer";
import Setting from "./Components/Pages/Setting";
import { ContextProvider } from "./Context/ContextProvider";

function App() {
  return (
    <div className="app">
      <SideBar>
        <ContextProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/registration" element={<Registeration />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/createoffer" element={<CreateOffer />} />
            <Route path="/manageoffer" element={<ManageOffer />} />

            <Route path="/setting" element={<Setting />} />
          </Routes>
        </ContextProvider>
      </SideBar>
    </div>
  );
}

export default App;
