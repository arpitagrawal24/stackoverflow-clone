/* eslint-disable react/prop-types */
import { useState } from 'react';
import './VideoPlayer.css';
import ShowVideo from './ShowVideo';

const VideoPlayer = ({
    showVideoInput,
    setShowVideoInput,
    questionVedios,
    setQuestionVedios,
}) => {

    const [videoInput, setVideoInput] = useState('');

    const handleFileChange = (event) => {
        const file = event.target.files[0];

        if (file) {
            const generatedUrl = URL.createObjectURL(file);
            setVideoInput(generatedUrl);
            console.log(videoInput)
        }
    };

    const handleSubmitVideo = () => {
        if (videoInput !== null) {
            setQuestionVedios([...questionVedios, videoInput])
        }
        setVideoInput("")
        setShowVideoInput(false);
    }

    return (
        <>
            {showVideoInput && (
                <div className="editor-video">
                    <div >
                        <label >Select Video:</label>
                        <input
                            type="file"
                            accept="video/*"
                            onChange={handleFileChange}
                        />
                    </div>
                    <button onClick={handleSubmitVideo}>
                        Submit
                    </button>
                </div>
            )}

            <ShowVideo questionVedios={questionVedios} />
        </>
    )
}

export default VideoPlayer