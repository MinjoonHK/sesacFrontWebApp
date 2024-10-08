import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/login";
import { SignUpPage } from "../pages/signUp";
import { LoginInputPage } from "../pages/loginInput";
import { ChatUI } from "../pages/chatbot";
import "./App.css";
import { MainPage } from "../pages/mainPage/UI/mainPage";
import { CalendarPage } from "../pages/calendar";
import { CommunityPage } from "../pages/community/UI/community";
import { CommunityWritePage } from "../pages/community";
import { HomePage } from "../pages/home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginInputPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/chat" element={<ChatUI />} />
        <Route path="/main" element={<MainPage />}>
          <Route path="home" element={<HomePage />} />
          <Route path="calendar" element={<CalendarPage />} />
          <Route path="community" element={<CommunityPage />} />
          <Route path="write" element={<CommunityWritePage />} />
        </Route>
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </>
  );
}

export default App;
