/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from 'react';
import Hammer from 'hammerjs';
import ReactPlayer from 'react-player/file'

const PlayVideo = ({ post }) => {
    const playerRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [playRate, setPlayRate] = useState(1);

    useEffect(() => {
        const player = playerRef.current;

        // Initialize Hammer.js for gesture controls
        const hammer = new Hammer(player.wrapper);

        // Double tap on the right third to move 10 seconds forward
        hammer.on('doubletap', (event) => {
            const { clientX } = event.srcEvent;

            const { width, left } = player.wrapper.getBoundingClientRect();
            const oneThirdWidth = width / 3;

            if (clientX > oneThirdWidth * 2 + left) {
                player.seekTo(player.getCurrentTime() + 10, 'seconds');
            } else if (clientX > oneThirdWidth + left && clientX < oneThirdWidth * 2 + left) {
                setIsPlaying(!isPlaying);
            } else {
                player.seekTo(player.getCurrentTime() - 5, 'seconds');
            }
        });

        // Swipe up logic
        hammer.get('swipe').set({ direction: Hammer.DIRECTION_UP, threshold: 10, velocity: 0.3 });

        // Press and hold to change playback rate
        hammer.on('swipeup', (event) => {
            const { clientX } = event.srcEvent;

            const { width, left } = player.wrapper.getBoundingClientRect();
            const oneThirdWidth = width / 3;

            if (clientX > oneThirdWidth * 2 + left) {
                setPlayRate(2);
                // player.playbackRate = 2;
            } else if (clientX < oneThirdWidth + left) {
                setPlayRate(1);
            }
        });

        // Cleanup event listeners on component unmount
        return () => {
            hammer.destroy();
        };
    }, [isPlaying]);

    return (
        <div>
            
            <ReactPlayer
                ref={playerRef}
                url={post}
                playing={isPlaying}
                controls
                width="100%"
                height="100%"
                playbackRate={playRate}
                className="rounded-lg"
                config={{
                    file: {
                        attributes: {
                            controlsList: "nofullscreen"
                        },
                    }
                }}
            />
            {/* <button onClick={togglePlayPause}>
                {isPlaying ? 'Pause' : 'Play'}
            </button> */}
        </div>
    );
};

export default PlayVideo;
