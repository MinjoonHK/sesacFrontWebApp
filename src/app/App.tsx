import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
