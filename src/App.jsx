import "./App.scss";
import Hero from "./components/fragments/Hero/Hero";
import Layout from "./components/fragments/Layout/Layout";
import Navbar from "./components/fragments/Navbar/Navbar";
import Skill from "./components/fragments/Skill/Skill";
import WhatIDo from "./components/fragments/WhatIDo/WhatIDo";
import PortfolioFirst from "./components/fragments/Portfolio/First/PortfolioFirst";
import PortfolioSecond from "./components/fragments/Portfolio/Second/PortfolioSecond";
import PortfolioThird from "./components/fragments/Portfolio/Third/PortfolioThird";

function App() {
  return (
    <>
      <Layout>
        <Navbar />
        <Hero />
        <Skill />
        <WhatIDo />
        <PortfolioFirst />
        <PortfolioSecond />
        <PortfolioThird />
      </Layout>
    </>
  );
}

export default App;
