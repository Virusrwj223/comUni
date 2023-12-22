import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from "./components/Search";
import LogReg from "./components/LogReg";
import "./App.css";
import ChapterDir from "./components/ChapterDir";
import QuestionList from "./components/QuestionList";
import DiscussionList from "./components/DiscussionList";
import MyPage from "./components/MyPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LogReg />} />
        <Route path="/search/myPage" element={<MyPage />} />
        <Route path="/search" element={<Search />} />
        <Route path="/search/:isbn" element={<ChapterDir />} />
        <Route path="/search/:isbn/:chapter" element={<QuestionList />} />
        <Route path="/search/:isbn/:chapter/:qn" element={<DiscussionList />} />
      </Routes>
    </Router>
  );
}

export default App;
