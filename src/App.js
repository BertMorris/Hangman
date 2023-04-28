import { Route, Routes } from "react-router-dom";
import "./App.css";
import Hangman from "./Hangman";
import Leaderboard from "./components/Leaderboard";

function App() {
  return (
    // implementing routes to later handle custom game url
    <Routes>
      <Route path=":customWord?" element={<Hangman />} />
    </Routes>
  );
}

export default App;
