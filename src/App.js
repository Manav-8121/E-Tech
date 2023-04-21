import React from "react";
import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import HeadlineCards from "./Components/HeadlineCards";
import Electronic from "./Components/Electronic";
import Category from "./Components/Category";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <HeadlineCards />
      <Electronic />
      <Category />
      <Footer />
    </div>
  );
}

export default App;
