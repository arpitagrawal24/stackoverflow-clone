/* eslint-disable react/prop-types */
import { useState } from "react";

import "./RichTextEditor.css";
import Button from "../Button/Button";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import CodeEditor from "../CodeEditor/CodeEditor";


const RichTextEditor = ({
    setQuestionBody,
    questionVedios,
    setQuestionVedios,
    questionCode,
    setQuestionCode,
}) => {
    const [activeButtons, setActiveButtons] = useState([]);

    const [showVideoInput, setShowVideoInput] = useState(false);

    const [showCodeInput, setShowCodeInput] = useState(false);

    return (
        <div className="container">

            <Button
                activeButtons={activeButtons}
                setActiveButtons={setActiveButtons}
                setShowVideoInput={setShowVideoInput}
                setShowCodeInput={setShowCodeInput}
            />

            <div className="editor-content">
                <div
                    className="editor-body"
                    contentEditable="true"
                    onInput={(e) => {
                        setQuestionBody(e.target.innerHTML);
                    }}
                />

                <VideoPlayer
                    showVideoInput={showVideoInput}
                    setShowVideoInput={setShowVideoInput}
                    questionVedios={questionVedios}
                    setQuestionVedios={setQuestionVedios}
                />

                <CodeEditor
                    showCodeInput={showCodeInput}
                    setShowCodeInput={setShowCodeInput}
                    questionCode={questionCode}
                    setQuestionCode={setQuestionCode}
                />

            </div>

        </div>

    )
}

export default RichTextEditor
