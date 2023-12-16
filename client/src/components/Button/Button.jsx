/* eslint-disable react/prop-types */
import { fontList, buttonList } from "./utils";
import "./Button.css";

const Button = ({
    activeButtons,
    setActiveButtons,
    setShowVideoInput,
    setShowCodeInput,

}) => {

    const handleButtonClick = (action, value = null) => {
        if (action === "createLink") {
            return handleLinkButtonClick();
        }
        else if (action === "formatBlock" && value) {
            // Handle heading commands separately
            if (value.startsWith("H")) {
                document.execCommand("formatBlock", false, value);
            } else {
                // Handle other formatBlock commands
                document.execCommand(action, false, value);
            }
        } else {
            document.execCommand(action, false, value);
        }

        toggleActiveButton(action);
    };

    const toggleActiveButton = (action) => {
        setActiveButtons((prevButtons) => {
            if (prevButtons.includes(action)) {
                // Remove the action from the array if already present
                return prevButtons.filter((item) => item !== action);
            } else {
                // Add the action to the array if not present
                return [...prevButtons, action];
            }
        });
    };

    const handleLinkButtonClick = () => {
        const url = prompt("Enter the URL:");
        if (url) {
            handleButtonClick("createLink", url);
        } else {
            handleButtonClick("unlink");
        }
    };

    return (
        < div className="editor-btns" >

            {/* Buttons with onClick handlers */}

            {buttonList.map((button, index) => (
                <button
                    key={index}
                    onClick={() => handleButtonClick(button.action)}
                    className={`button-${index} ${activeButtons.includes(button.action) ? "bg-gray-300 text-gray-700" : "bg-gray-800 text-white"}`}
                >
                    {button.icon}
                </button>
            ))}

            <button onClick={() => { setShowVideoInput(true) }}> post video </button>
            <button onClick={() => { setShowCodeInput(true) }}> post code </button>

            {/* Select components */}

            <select
                onChange={(e) => handleButtonClick("formatBlock", e.target.value)}
            >
                {["H1", "H2", "H3", "H4", "H5", "H6"].map((heading, index) => (
                    <option key={index} value={`<${heading}>`}>
                        {heading}
                    </option>
                ))}
            </select>

            <select
                onChange={(e) => handleButtonClick("fontName", e.target.value)}
            >
                {fontList.map((font, index) => (
                    <option key={index} value={font}>
                        {font}
                    </option>
                ))}
            </select>

            <select
                onChange={(e) => handleButtonClick("fontSize", e.target.value)}
            >
                {Array.from({ length: 7 }, (_, index) => (
                    <option key={index + 1} value={index + 1}>
                        {index + 1}
                    </option>
                ))}
            </select>

            <div className="color-box">
                <input
                    type="color"
                    className=""
                    onChange={(e) => handleButtonClick("foreColor", e.target.value)}
                />
                <label htmlFor="foreColor">Font Color</label>
            </div>

            <div className="color-box">
                <input
                    type="color"
                    className=""
                    onChange={(e) => handleButtonClick("backColor", e.target.value)}
                />
                <label htmlFor="backColor">Highlight Color</label>
            </div>

        </div >
    )
};

export default Button;
