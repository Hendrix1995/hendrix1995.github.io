import React, { useState, useEffect } from "react";

import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Project from "./Project";
import Contact from "./Contact";
import Loading from "../components/Loading";

function Main() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setIsLoading(false), 1000);
    }, []);

    return (
        <main>
            {isLoading ? (
                <Loading />
            ) : (
                <>
                    <Home />
                    <About />
                    <Skills />
                    <Project />
                    <Contact />
                </>
            )}
        </main>
    );
}

export default Main;
