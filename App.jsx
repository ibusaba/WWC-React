import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import wwcImage from "../img/wwc.jpg"


function App() {
    return (
        <div>
            <Header />
            <Footer />
            <Note />
            <div>
            <img src={wwcImage} alt='women who carry' />
            </div>
        </div>
    );
}

export default App;
