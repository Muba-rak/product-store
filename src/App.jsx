import "./App.css";
import ProductList from "./components/ProductList";
import ProductSlide from "./components/ProductSlide";
import { useFetch } from "./useFetch";
import Loader from "./components/Loader";

function App() {
  const {
    isLoading,
    data: products,
    isError,
  } = useFetch("https://fake-store-api.mock.beeceptor.com/api/products");
  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <h1>Error Fetching products</h1>;
  }
  return (
    <>
      <header>
        <h1>Product Store</h1>
      </header>
      <ProductSlide products={products} />
      <ProductList products={products} />
    </>
  );
}

export default App;
