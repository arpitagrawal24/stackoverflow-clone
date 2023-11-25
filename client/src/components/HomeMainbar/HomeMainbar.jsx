import { useLocation, useNavigate } from "react-router-dom";
import "./HomeMainbar.css";
import QuestionList from "./QuestionList";

const HomeMainbar = () => {
  const location = useLocation();
  const user = 1;   // ckeck it later
  const navigate = useNavigate();

  const questionsList = [
    {
      id: 1,
      upVote: 3,
      downVote: 1,
      noOfAnswers: 2,
      questionTitle: "What is a function?",
      questionBody: "It meant to be",
      questionTags: ["java", "node js", "react js", "mongodb"],
      userPosted: "mano",
      askedOn: "jan 1"
    }, {
      id: 2,
      upVote: 0,
      downVote: 0,
      noOfAnswers: 0,
      questionTitle: "What is a function?",
      questionBody: "It meant to be",
      questionTags: ["javascript", "R", "python"],
      userPosted: "mano",
      askedOn: "2023 jan 1"
    }, {
      id: 3,
      upVote: 1,
      downVote: 0,
      noOfAnswers: 0,
      questionTitle: "What is a function?",
      questionBody: "It meant to be",
      questionTags: ["javascript", "R", "python"],
      userPosted: "mano",
      askedOn: "Jan 1"
    }
  ];

  const checkAuth = () => {
    if (user === null) {
      alert("login or signup to ask a question");
      navigate("/Auth");
    } else {
      navigate("/AskQuestion");
    }
  };

  return (
    <div className="main-bar">
      <div className="main-bar-header">
        {location.pathname === "/" ? (
          <h1>Top Questions</h1>
        ) : (
          <h1>All Questions</h1>
        )}
        <button onClick={checkAuth} className="ask-btn">
          Ask Question
        </button>
      </div>
      <div>
        {questionsList.data === null ? (
          <h1>Loading...</h1>
        ) : (
          <>
            {/* <p>{questionsList.data.length} questions</p> */}
            <p>{questionsList.length} questions</p>
            {/* <QuestionList questionsList={questionsList.data} /> */}
            <QuestionList questionsList={questionsList} />
          </>
        )}
      </div>
    </div>
  );
};

export default HomeMainbar;
