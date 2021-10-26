import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum in est
          pariatur saepe impedit. Nulla, accusantium delectus! Ut voluptas
          eveniet esse exercitationem nemo sint doloremque perspiciatis neque.
          Odit, sapiente maxime!
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum in est
          pariatur saepe impedit. Nulla, accusantium delectus! Ut voluptas
          eveniet esse exercitationem nemo sint doloremque perspiciatis neque.
          Odit, sapiente maxime!
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}
