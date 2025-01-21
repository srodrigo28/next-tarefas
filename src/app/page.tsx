import Head from "next/head";
import styles from "../styles/home.module.css";
import Image from "next/image";

import heroImg from "../../public/hero.png";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      
      <Head>
        <title>Next.js App</title>
      </Head>

      <h1 className={styles.title}>
        Sistema feito para Organizar seu dia dia
        <br />
        <Link href="/dashboard">
          <span>Tarefa + </span>
        </Link>
      </h1>

      <div className={styles.logoContent}>
        <Image className={styles.hero} alt="Logo Tarefas+" src={heroImg} />
      </div>

      <div className={styles.Containerbox}>
        <section className={styles.box}>
          <span>+12 posts</span>
        </section>
          
        <section className={styles.box}>
          <span>+90 comentários</span>
        </section>
      </div>
    </div>
  );
}
