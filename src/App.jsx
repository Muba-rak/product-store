import "./App.css";
import ProductList from "./components/ProductList";
import ProductSlider from "./components/ProductSlider";

function App() {
  return (
    <>
      <header>
        <h1>Product Store</h1>
      </header>
      <ProductSlider />
      <ProductList />
    </>
  );
}

export default App;
