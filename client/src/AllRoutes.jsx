import App from "./App";
import Home from "./Pages/Home/Home";
import Auth from "./Pages/Auth/Auth";
import AskQuestion from "./Pages/AskQuestion/AskQuestion";
import Questions from "./Pages/Questions/Questions";
import DisplayQuestion from "./Pages/Questions/DisplayQuestion";
import Tags from "./Pages/Tags/Tags";

export const AllRoutes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "Auth",
        element: <Auth />,
      },
      {
        path: "AskQuestion",
        element: <AskQuestion />,
      },
      {
        path: "Questions",
        element: <Questions />,
      },
      {
        path: "Questions/:id",
        element: <DisplayQuestion />,
      },
      {
        path: "Tags",
        element: <Tags />,
      },
      // {
      //   path: "Users",
      //   element: <Users />,
      // },
      // {
      //   path: "Users/:id",
      //   element: <UserProfile />,
      // },
    ],
  },
];
