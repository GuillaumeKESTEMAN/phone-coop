import type { NextPage } from "next";
import type { BuildQueryParamsType } from "../utils/params";
import Head from "next/head";
import styles from "../styles/receipt.module.css";
import { readParams } from "../utils/params";
import { useRouter } from "next/router";
import QRCode from "../components/QRCode";


const QUERY_PARAMS = {
  token: {
    mode: 'unique',
    type: 'string',
  },
} as const;

export type ReceiptQueryParams = BuildQueryParamsType<
  typeof QUERY_PARAMS
>;

const Home: NextPage = () => {
  const router = useRouter();
  const query = readParams<ReceiptQueryParams>(
    QUERY_PARAMS,
    router.query,
  );

  return (
    <div className={styles.container}>
      <Head>
        <title>Receipt</title>
        <meta name="description" content="Generated by receipt" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
          <h1 className={styles.title}>Get your QR code</h1>
          <p className={styles.p}>Vous avez maintenant votre QR code !</p>
          <p className={styles.p}>Allez à la borne la plus proche pour déposer votre téléphone.</p>
          <QRCode style={{marginTop: 50}} values={{token: query.token,}} />
      </main>
    </div>
  );
};

export default Home;
