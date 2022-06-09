import "./App.css";
import BoxLoader from "./LoadingSpinner/BoxLoader";
import MinimalBiColored from "./LoadingSpinner/MinimalBiColored";
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
      {/* <FlipBox /> */}
    </div>
  );
}

export default App;
