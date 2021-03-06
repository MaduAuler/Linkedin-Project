import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyFooter from "./components/Footer";

import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfilePage from "./pages/Profile";
import FeedPage from "./pages/FeedPage";
import ErrorPage from "./components/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/profile/:userId" element={<ProfilePage />} />
        <Route path="/" element={<FeedPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <MyFooter />
    </BrowserRouter>
  );
}

export default App;
