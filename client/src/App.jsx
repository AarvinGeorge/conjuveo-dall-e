import React, { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { logo } from "./assets";
import { Home, CreatePost } from "./pages";
import { Scrollbars } from "react-custom-scrollbars";

const App = () => {
  const [atCommunity, setAtCommunity] = useState(true);
  const [clickedCreate, setClickedCreate] = useState(false);

  const handleCreateClick = () => {
    if (atCommunity === true && clickedCreate === false) {
      setAtCommunity(false);
      setClickedCreate(true);
    }
  };
  const handleLogoClick = () => {
    if (atCommunity === false && clickedCreate === true) {
      setAtCommunity(true);
      setClickedCreate(false);
    }
  };
  
  return (
    <BrowserRouter>
      <Scrollbars style={{ width: "100%", height: "100vh" }} autoHide={true} autoHideTimeout={500}>
        <header className="w-full flex justify-between items-center bg-[#18122B] sm:px-8 px-4 py-4  border-b border-b-[#18122B]">
          <Link to="/" onClick={handleLogoClick}>
            <img
              src={logo}
              alt="logo"
              className="w-28 object-contain color-white fill-white"
            />
          </Link>
          {atCommunity && (
            <Link
              to="/create-post"
              onClick={handleCreateClick}
              className="font-inter font-medium bg-[#03C988]  text-black px-4 py-2 rounded-md"
            >
              Create
            </Link>
          )}
        </header>
        <main className="sm:p-8 px-4 py-8 bg-[#393053] min-h-[calc(100vh-73px)]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-post" element={<CreatePost />} />
          </Routes>
        </main>
      </Scrollbars>
    </BrowserRouter>
  );
};

export default App;
