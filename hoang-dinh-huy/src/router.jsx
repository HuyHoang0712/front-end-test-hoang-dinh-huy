import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Question1 from "./pages/Question1/Question1";
import Questions2 from "./pages/Question2";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Question1 />,
      },
      {
        path: "question2",
        element: <Questions2 />,
      },
    ],
  },
]);

export default router;
