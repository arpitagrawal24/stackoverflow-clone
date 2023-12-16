/* eslint-disable react/prop-types */
import { useState } from 'react';
import './CodeEditor.css';
import ShowCode from './ShowCode';

const CodeEditor = ({
    showCodeInput,
    setShowCodeInput,
    questionCode,
    setQuestionCode,
}) => {

    const [codeInput, setCodeInput] = useState('');

    const handleSubmitCode = () => {
        // Save the code to postCode state
        setQuestionCode([...questionCode, codeInput]);
        // Reset code input and hide the text area
        setCodeInput("");
        setShowCodeInput(false);
    };

    return (
        <>
            {showCodeInput && (
                <div className="editor-code">
                    <textarea
                        value={codeInput}
                        onChange={(e) => setCodeInput(e.target.value)}
                        placeholder="Enter your code here..."
                    />
                    <button onClick={handleSubmitCode}>
                        Submit Code
                    </button>
                </div>
            )}


            <ShowCode questionCode={questionCode} />
        </>
    )
}

export default CodeEditor