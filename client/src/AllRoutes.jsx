import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Auth from "./Pages/Auth/Auth";
import AskQuestion from "./Pages/AskQuestion/AskQuestion";
import Questions from "./Pages/Questions/Questions";
import DisplayQuestion from "./Pages/Questions/DisplayQuestion";
import Tags from "./Pages/Tags/Tags";
import Users from "./Pages/Users/Users";
import UserProfile from "./Pages/UserProfile/UserProfile";
import Call from "./Pages/Call/Call";
import Player from "./Pages/Player/Player";


const AllRoutes = ({ slideIn, handleSlideIn }) => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home slideIn={slideIn} handleSlideIn={handleSlideIn} />}
      />
      <Route path="/Auth" element={<Auth />} />
      <Route path="/AskQuestion" element={<AskQuestion />} />
      <Route
        path="/Questions"
        element={<Questions slideIn={slideIn} handleSlideIn={handleSlideIn} />}
      />
      <Route
        path="/Questions/:id"
        element={
          <DisplayQuestion slideIn={slideIn} handleSlideIn={handleSlideIn} />
        }
      />
      <Route
        path="/Tags"
        element={<Tags slideIn={slideIn} handleSlideIn={handleSlideIn} />}
      />
      <Route
        path="/Users"
        element={<Users slideIn={slideIn} handleSlideIn={handleSlideIn} />}
      />
      <Route
        path="/Users/:id"
        element={
          <UserProfile slideIn={slideIn} handleSlideIn={handleSlideIn} />
        }
      />
      <Route path="/Call"
        element={
          <Call slideIn={slideIn} handleSlideIn={handleSlideIn} />
        } />
        <Route path="/Player"
        element={
          <Player slideIn={slideIn} handleSlideIn={handleSlideIn} />
        } />
    </Routes>
  );
};

export default AllRoutes;