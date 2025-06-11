import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Counter } from "./components/Counter/counter";
import { Posts } from "./components/Posts/posts";
import { Users } from "./components/Users/users";
import { Root } from "./components/Root";
import "./App.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          index: true,
          element: <Counter />,
        },
        {
          path: "users",
          element: <Users />,
        },
        {
          path: "posts",
          element: <Posts />,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
