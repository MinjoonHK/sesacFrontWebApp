import ReactDOM from "react-dom/client";
import App from "./app/App.tsx";
import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_SERVER_URL;

ReactDOM.createRoot(document.getElementById("root")!).render(
    <App />  
);
