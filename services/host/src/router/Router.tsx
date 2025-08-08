import App from "@/components/App";
import { createBrowserRouter } from "react-router-dom";
// @ts-ignore
import shopRoutes from "shop/Router.tsx";
// @ts-ignore
import adminRoutes from "admin/Router.tsx";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
        ...shopRoutes,
        ...adminRoutes,
    ],
  }
]);
