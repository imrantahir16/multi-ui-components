import "./App.css";
import ProductCard from "./cards/ProductCard";
// import BoxLoader from "./LoadingSpinner/BoxLoader";
// import ClockLoader from "./LoadingSpinner/ClockLoader";
// import GlassLoader from "./LoadingSpinner/GlassLoader";
// import MinimalBiColored from "./LoadingSpinner/MinimalBiColored";
// import PulseLoader from "./LoadingSpinner/PulseLoader";
// import SmoothLoader from "./LoadingSpinner/SmoothLoader";
// import ThickLoader from "./LoadingSpinner/ThickLoader";
// import FlipBox from "./OtherUI/FlipBox";

function App() {
  const data = {
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    imageAlt: "Red Nike Shoe",
    title: "Red Nike Shoes",
    secondaryTitle: "Nike",
    price: 299,
    cents: 90,
    review: 267,
  };
  return (
    <div className="App">
      {/* <MinimalBiColored />
      <ThickLoader />
      <BoxLoader />
      <SmoothLoader />
      <PulseLoader />
      <ClockLoader />
      <GlassLoader /> */}
      {/* <FlipBox /> */}
      <ProductCard data={data} />
    </div>
  );
}

export default App;
