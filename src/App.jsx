import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import OneProdact from "./pages/oneProdact/OneProdact";
import SignIn from "./pages/signIn/SignIn";
import Login from "./pages/login/Login";
import Search from "./pages/search/Search";
import { useState } from "react";
import CategoryModal from "./components/categoryModal/CategoryModal";
import Like from "./pages/like/Like";

function App() {
  const [categoryModal, setCategoryModal] = useState(false);

  
  return (
    <>
      <BrowserRouter>

        {
          categoryModal ? <CategoryModal/> : ""
        }

          <Navbar setCategoryModal={setCategoryModal} />

        <Routes>
          <Route path="/" element={<Home categoryModal={categoryModal} />} />
          <Route path="/oneprodact/:id" element={<OneProdact />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/login" element={<Login />} />
          <Route path="/search" element={<Search />} />
          <Route path="/like" element={<Like/>} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </> 
  );
}

export default App;
