import "./App.css";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { StroreFunction } from "./Store/store";

function App() {
  const { user } = StroreFunction();
  return (
    <>
      <main>
        <Header />
        <Content />
        <Footer />
      </main>
    </>
  );
}

export default App;
