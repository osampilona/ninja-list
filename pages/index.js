import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninjas List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
          vero autem architecto ducimus eligendi dicta reprehenderit eos
          pariatur aperiam incidunt possimus, libero odio a. Consequatur omnis
          eligendi modi voluptatibus veritatis!
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
          vero autem architecto ducimus eligendi dicta reprehenderit eos
          pariatur aperiam incidunt possimus, libero odio a. Consequatur omnis
          eligendi modi voluptatibus veritatis!
        </p>
        <Link href="/ninjas" className={styles.btn}>
          See ninjas listing
        </Link>
      </div>
    </>
  );
}
