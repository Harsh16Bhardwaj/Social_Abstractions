import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import HomePage from "./home.tsx";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
const Route = createBrowserRouter([
  {
    path:"/Social_Abstractions/",
    element : <HomePage></HomePage>
  },
  {
    path: "/Social_Abstractions/chat",
    element: <App />,
  },
])

createRoot(document.getElementById("root")!).render(
  <StrictMode>
     <RouterProvider router={Route} />
  </StrictMode>
);
