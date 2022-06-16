import * as React from "react";
import Todo from "./components/Todo";
import { Routes, Route, Link } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoriteMeetupsPage from "./pages/Favorites";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AllMeetupsPage />} />
        <Route path="/new-meetup" element={<NewMeetupPage />} />
        <Route path="/favorite" element={<FavoriteMeetupsPage />} />
      </Routes>
    </div>
  );
}

export default App;
