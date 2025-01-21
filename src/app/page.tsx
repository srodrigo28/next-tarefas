import Head from "next/head";
import styles from "../styles/home.module.css";
import Image from "next/image";

import heroImg from "../../public/hero.png";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js App</title>
      </Head>

      <div className={styles.logoContent}>
        <Image className={styles.hero} alt="Logo Tarefas+" src={heroImg} />
      </div>
      <h1 className={styles.title}>
        Sistema feito para Organizar seu dia dia
        <br />
        <span>Tarefa + </span>
      </h1>
    </div>
  );
}
