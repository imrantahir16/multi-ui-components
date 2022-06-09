import "./App.css";
import BoxLoader from "./LoadingSpinner/BoxLoader";
import ClockLoader from "./LoadingSpinner/ClockLoader";
import GlassLoader from "./LoadingSpinner/GlassLoader";
import MinimalBiColored from "./LoadingSpinner/MinimalBiColored";
import PulseLoader from "./LoadingSpinner/PulseLoader";
import SmoothLoader from "./LoadingSpinner/SmoothLoader";
import ThickLoader from "./LoadingSpinner/ThickLoader";
// import FlipBox from "./OtherUI/FlipBox";

function App() {
  return (
    <div className="App">
      <MinimalBiColored />
      <ThickLoader />
      <BoxLoader />
      <SmoothLoader />
      <PulseLoader />
      <ClockLoader />
      <GlassLoader />
      {/* <FlipBox /> */}
    </div>
  );
}

export default App;
