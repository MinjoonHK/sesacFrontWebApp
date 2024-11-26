import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoginPage } from "../pages/login";
import { SignUpPage } from "../pages/signUp";
import { LoginInputPage } from "../pages/loginInput";
import { ChatUI } from "../pages/chatbot";
import { MainPage } from "../pages/mainPage/UI/mainPage";
import { CalendarPage } from "../pages/calendar";
import { CommunityPage } from "../pages/community/UI/community";
import { CommunityWritePage } from "../pages/community";
import { HomePage } from "../pages/home";
import { DesktopPage } from "../pages/desktop";
import "./App.css"

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

 const mobileRouter = createBrowserRouter([
   { path: "/", element: <LoginPage /> },
   { path: "/login", element: <LoginInputPage /> },
   { path: "/signup", element: <SignUpPage /> },
   { path: "/chat", element: <ChatUI /> },
   {
     path: "/main",
     element: <MainPage />, 
     children: [
       { path: "home", element: <HomePage /> },
       { path: "calendar", element: <CalendarPage /> },
       { path: "community", element: <CommunityPage /> },
       { path: "write", element: <CommunityWritePage /> },
     ],
   },
   { path: "*", element: <div>Page Not Found</div> },
 ]);


  return isMobile ? (
    <RouterProvider router={mobileRouter} />
  ) : (
    <div>
      <DesktopPage/>
    </div>
  );
}

export default App;
