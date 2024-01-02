import "../../App.css";
import "./Player.css";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";

import { useState } from "react";

const Player = ({ slideIn, handleSlideIn }) => {

    const [showVideoInput, setShowVideoInput] = useState(true);
    const [questionVedios, setQuestionVedios] = useState([]);



    return (
        <div className="home-container-1">
            <LeftSidebar slideIn={slideIn} handleSlideIn={handleSlideIn} />
            <div className="home-container-2 player-container">
                <VideoPlayer
                    showVideoInput={showVideoInput}
                    setShowVideoInput={setShowVideoInput}
                    questionVedios={questionVedios}
                    setQuestionVedios={setQuestionVedios}
                />
            </div>
        </div>
    )
}

export default Player
