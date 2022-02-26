import { Fragment } from "react";
import { useSelector } from "react-redux";
import Auth from "./components/Auth";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./components/Profile";
import Edit from "./components/Edit";

function App() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  return (
    <div className="App">
      {!isAuth && <Auth />}
      {isAuth && (
        <BrowserRouter>
          {isAuth && <Header />}
          <Routes>
            <Route exact path="/" element={<Profile />} />
            <Route exact path="/edit" element={<Edit />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
