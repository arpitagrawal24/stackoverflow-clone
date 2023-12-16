import { useState, useEffect, useRef } from 'react'
import Peer from 'peerjs';
import Connect from './Connect';
import Call from './Call';


const CallBar = () => {

    const [peerId, setPeerId] = useState('');
    const [remotePeerIdValue, setRemotePeerIdValue] = useState('');
    const [isConnected, setIsConnected] = useState(false);

    // Refs to store references to video elements and PeerJS instance
    const remoteVideoRef = useRef(null);
    const currentUserVideoRef = useRef(null);
    const peerInstance = useRef(null);

    const handleSubmit = () => {
        setIsConnected(true);
    }

    useEffect(() => {
        const initPeer = () => {
            try {

                console.log('Initializing the home Peer...');
                const peer = new Peer();

                peer.on('open', (id) => {
                    console.log(`${id} connected`);
                    setPeerId(id);
                });

                listenToCall(peer);
                peerInstance.current = peer;

            } catch (error) {
                console.error("Error initializing Peer:", error);
            }
        };

        initPeer();
    }, []);

    const listenToCall = (peerInstance) => {
        peerInstance.on("call", (call) => {
            try {
                var getUserMedia =
                    navigator.getUserMedia ||
                    navigator.webkitGetUserMedia ||
                    navigator.mozGetUserMedia;

                getUserMedia(
                    {
                        video: true,
                        audio: true
                    },
                    (mediaStream) => {

                        addLocalVideo(mediaStream);

                        call.answer(mediaStream);
                        call.on("stream", (remoteStream) => {
                            addRemoteVideo(remoteStream);
                        });
                    }
                );
            } catch (err) {
                console.log(`Unable to connect because ${err}`);
            }
        });
    };

    const makeCall = (remotePeerIdValue) => {

        try {
            var getUserMedia = navigator.getUserMedia ||
                navigator.webkitGetUserMedia ||
                navigator.mozGetUserMedia;

            getUserMedia(
                {
                    video: true,
                    audio: true
                },
                (mediaStream) => {

                    addLocalVideo(mediaStream);

                    const call = peerInstance.current.call(remotePeerIdValue, mediaStream);

                    call.on("stream", (remoteStream) => {

                        addRemoteVideo(remoteStream);

                    })
                });
        } catch (err) {
            console.log(`Unable to connect because ${err}`);
        }
    }


    const addLocalVideo = (stream) => {
        currentUserVideoRef.current.srcObject = stream;
        currentUserVideoRef.current.play();
    };

    const addRemoteVideo = (stream) => {
        remoteVideoRef.current.srcObject = stream;
        remoteVideoRef.current.play();
    };

    const hangUp = () => {
        try {
            // Close the current PeerJS connection and stop the local stream
            peerInstance.current.destroy();
            const localStream = currentUserVideoRef.current.srcObject;
            const tracks = localStream.getTracks();
            tracks.forEach(track => track.stop());

            // Reset states or perform any other necessary cleanup
            setIsConnected(false);
            setRemotePeerIdValue('');
        } catch (error) {
            console.error("Error hanging up the call:", error);
        }
    };

    const toggleVideo = () => {
        try {
            const localStream = currentUserVideoRef.current.srcObject;
            const videoTrack = localStream.getVideoTracks()[0];
            videoTrack.enabled = !videoTrack.enabled;
        } catch (error) {
            console.error("Error toggling video:", error);
        }
    };

    const toggleAudio = () => {
        try {
            const localStream = currentUserVideoRef.current.srcObject;
            const audioTrack = localStream.getAudioTracks()[0];
            audioTrack.enabled = !audioTrack.enabled;
        } catch (error) {
            console.error("Error toggling audio:", error);
        }
    };

    return (
        <>
            {
                isConnected ? (

                    <Call
                        remoteVideoRef={remoteVideoRef}
                        currentUserVideoRef={currentUserVideoRef}
                        remotePeerIdValue={remotePeerIdValue}
                        makeCall={makeCall}
                        hangUp={hangUp}
                        toggleVideo={toggleVideo}
                        toggleAudio={toggleAudio}
                    />
                ) : (
                    <Connect
                        peerId={peerId}
                        remotePeerIdValue={remotePeerIdValue}
                        setRemotePeerIdValue={setRemotePeerIdValue}
                        handleSubmit={handleSubmit}
                    />
                )
            }
        </>
    )
}

export default CallBar