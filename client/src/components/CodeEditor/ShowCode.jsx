/* eslint-disable react/prop-types */
import './CodeEditor.css';

const ShowCode = ({
    questionCode,
}) => {
    return (
        <>
            {questionCode?.length !== 0 ? <h2>Code</h2> : null}
            <div className="editor-show-codes">
                {questionCode && questionCode.map((post, index) => {
                    return (
                        <div key={index} className='editor-show-code'>
                            <div >
                                {post}
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default ShowCode