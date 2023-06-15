import "./App.css";
import { Navbar } from "./components/layout/navbar/Navbar";
import { ProductsListContainer } from "./components/pages/itemListContainer/ProductsListContainer";

const App = () => {
  return (
    <div>
      <Navbar />
      <ProductsListContainer />
    </div>
  );
};

export default App;
