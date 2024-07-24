import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/login";
import { SignUpPage } from "../pages/signUp";
import { LoginInputPage } from "../pages/loginInput";
import { ChatUI } from "../pages/chatbot";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginInputPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/chat" element={<ChatUI />} />
      </Routes>
    </>
  );
}

export default App;
