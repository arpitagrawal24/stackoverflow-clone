/* eslint-disable react/prop-types */
import "./Call.css";
import { useState } from 'react';

const Call = ({
    remoteVideoRef,
    currentUserVideoRef,
    remotePeerIdValue,
    makeCall,
    hangUp,
    toggleVideo,
    toggleAudio,
}) => {
    const [isVideoActive, setIsVideoActive] = useState(true);
    const [isAudioActive, setIsAudioActive] = useState(true);

    return (
        <div className="call-container">
            <div className="video-container">
                <video className="remote-video" ref={remoteVideoRef} />
                <video className="current-user-video" ref={currentUserVideoRef} />
            </div>
            <div className="button-container">
                <button
                    onClick={() => makeCall(remotePeerIdValue)}
                    className="call-button"
                >
                    Call
                </button>
                <button onClick={hangUp} className="hang-up-button">
                    Hang Up
                </button>
                <button
                    onClick={() => {
                        toggleVideo();
                        setIsVideoActive(prevState => !prevState);
                    }}
                    className={`toggle-video-button ${isVideoActive ? 'active' : ''}`}
                >
                    Video
                </button>
                <button
                    onClick={() => {
                        toggleAudio();
                        setIsAudioActive(prevState => !prevState);
                    }}
                    className={`toggle-audio-button ${isAudioActive ? 'active' : ''}`}
                >
                    Audio
                </button>
            </div>
        </div>
    );
}

export default Call;
