import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import "./AskQuestion.css";
import { askQuestion } from "../../actions/question";
import RichTextEditor from "../../components/RichTextEditor/RichTextEditor";

const AskQuestion = () => {
  const [questionTitle, setQuestionTitle] = useState("");
  const [questionBody, setQuestionBody] = useState("");
  const [questionTags, setQuestionTags] = useState("");
  const [questionVedios, setQuestionVedios] = useState([])
  const [questionCode, setQuestionCode] = useState([])

  const dispatch = useDispatch();
  const User = useSelector((state) => state.currentUserReducer);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (User) {
      if (questionTitle && questionBody && questionTags) {
        dispatch(
          askQuestion(
            {
              questionTitle,
              questionBody,
              questionVedios,
              questionCode,
              questionTags,
              userPosted: User.result.name,
            },
            navigate
          )
        );
      }
      // else alert("Please enter all the fields");
    } else alert("Login to ask question");
  };

  return (
    <div className="ask-question">
      <div className="ask-ques-container">
        <h1>Ask a public Question</h1>
        <div >
          <div className="ask-form-container">
            <label htmlFor="ask-ques-title">
              <h4>Title</h4>
              <p>
                Be specific and imagine you’re asking a question to another
                person
              </p>
              <input
                type="text"
                id="ask-ques-title"
                onChange={(e) => {
                  setQuestionTitle(e.target.value);
                }}
                placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
              />
            </label>
            <label htmlFor="ask-ques-body">
              <h4>Body</h4>
              <p>
                Include all the information someone would need to answer your
                question
              </p>
              <RichTextEditor
                id="ask-ques-body"
                questionBody={questionBody}
                setQuestionBody={setQuestionBody}
                questionVedios={questionVedios}
                setQuestionVedios={setQuestionVedios}
                questionCode={questionCode}
                setQuestionCode={setQuestionCode}
              />
            </label>
            <label htmlFor="ask-ques-tags">
              <h4>Tags</h4>
              <p>Add up to 5 tags to describe what your question is about</p>
              <input
                type="text"
                id="ask-ques-tags"
                onChange={(e) => {
                  setQuestionTags(e.target.value.split(" "));
                }}
                placeholder="e.g. (xml typescript wordpress)"
              />
            </label>
          </div>
          <button
            className="review-btn"
            onClick={handleSubmit}
          >
            Reivew your question
          </button>
        </div>
      </div>
    </div>
  );
};

export default AskQuestion;
