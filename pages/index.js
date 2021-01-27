import Head from "next/head";
import Header from "../components/header/Header";
import MenuButton from "../components/menu-button/MenuButton";
import MenuWrap from "../components/menu-wrap/MenuWrap";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Header>
        <MenuButton />
        <h1>Meu Portfólio</h1>
      </Header>
    </div>
  );
}
