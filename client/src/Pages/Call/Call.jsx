import "../../App.css";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import CallBar from "../../components/CallBar/CallBar";


const Call = () => {
  return (
    <div className="home-container-1">
      <LeftSidebar />
      <div className="home-container-2">
        <CallBar />
      </div>
    </div>
  );
};

export default Call;
