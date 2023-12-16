/* eslint-disable react/prop-types */
import "./Connect.css";

const Connect = ({
    peerId,
    remotePeerIdValue,
    setRemotePeerIdValue,
    handleSubmit
}) => {
    return (
        <div className="connect-container">
            <h1 className="connect-title">Make a Call</h1>
            <div >
                <label className="user-id-label">Your User ID:</label>
                <h3 className="user-id-value">{peerId}</h3>
            </div>
            <div >
                <label className="receiver-id-label">Receiver User ID:</label>
                <input
                    type="text"
                    placeholder="Enter Receiver's User ID"
                    value={remotePeerIdValue}
                    onChange={(e) => setRemotePeerIdValue(e.target.value)}
                    className="receiver-id-input"
                />
            </div>
            <button
                onClick={handleSubmit}
                className="connect-button"
            >
                Connect
            </button>
        </div>
    );
}

export default Connect;
