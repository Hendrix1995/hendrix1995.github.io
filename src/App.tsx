import React from "react";
import "./styles/App.css";

import Header from "./view/Header";
import Main from "./view/Main";
import Footer from "./view/Footer";

function App() {
    return (
        <div className="App">
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

export default App;
