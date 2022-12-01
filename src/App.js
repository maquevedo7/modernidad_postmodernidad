import "./App.css";
import Button from "./components/Button/Button";
import Cards from "./components/Cards/Cards";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
    return (
        <div className="App">
            <Header />
            <Button />
            <Cards />
            <Footer />
        </div>
    );
}

export default App;
