import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WatchVideo from "./components/WatchVideo";
import Main from "./components/Main";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      { path: "/", element: <Main /> },
      { path: "watch", element: <WatchVideo /> },
    ],
  },
]);
function App() {
  return (
    <div>
      {/* <Header /> */}
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
