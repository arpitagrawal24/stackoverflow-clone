/* eslint-disable react/prop-types */
import "./Call.css";

const Call = ({
    remoteVideoRef,
    currentUserVideoRef,
    remotePeerIdValue,
    makeCall,
    hangUp,
    toggleVideo,
    toggleAudio,
}) => {
    return (
        <div className="call-container">
            <div className="video-container">
                <video className="remote-video" ref={remoteVideoRef} />
                <video className="current-user-video" ref={currentUserVideoRef} />
            </div>
            <div className="button-container">
                <button onClick={() => makeCall(remotePeerIdValue)} className="call-button">
                    Call
                </button>
                <button onClick={hangUp} className="hang-up-button">
                    Hang Up
                </button>
                <button onClick={toggleVideo} className="toggle-video-button">
                    Toggle Video
                </button>
                <button onClick={toggleAudio} className="toggle-audio-button">
                    Toggle Audio
                </button>
            </div>
        </div>
    );
}

export default Call;
