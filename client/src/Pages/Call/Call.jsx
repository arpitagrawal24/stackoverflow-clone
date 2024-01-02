import "../../App.css";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import CallBar from "../../components/CallBar/CallBar";


const Call = ({ slideIn, handleSlideIn }) => {
  return (
    <div className="home-container-1">
      <LeftSidebar slideIn={slideIn} handleSlideIn={handleSlideIn}  />
      <div className="home-container-2">
        <CallBar />
      </div>
    </div>
  );
};

export default Call;
