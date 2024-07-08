import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/login";
import { SignUpPage } from "../pages/signUp";
import { LoginInputPage } from "../pages/loginInput";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/logininput" element={<LoginInputPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </>
  );
}

export default App;
