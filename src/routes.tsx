import App from "@/pages"
import GM from "@/pages/gm"
import { createBrowserRouter } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/gm",
    element: <GM />,
  },
])

export default router
