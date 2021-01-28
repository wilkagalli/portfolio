import Head from "next/head";

import Header from "../components/header/Header";
import MenuButton from "../components/menu-button/MenuButton";
import Footer from "../components/footer/Footer";
import Sobre from "../components/sobre/Sobre";
import Skill from "../components/skill/Skill";
import Portfolio from "../components/portfolio/Portfolio";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfólio - Wilka Galli</title>
      </Head>
      <Header>
        <MenuButton />
      </Header>
      <Portfolio></Portfolio>
      <Sobre></Sobre>
      <Skill></Skill>
      <Footer></Footer>
    </div>
  );
}
