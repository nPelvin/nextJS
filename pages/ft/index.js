import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import Link from "next/link";
import HomeBee from "./pages/Home";

export default function Home() {
  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <title>Nigel's FT Tech Project</title>
        <link
          rel="stylesheet"
          href="https://www.ft.com/__origami/service/build/v3/bundles/css?components=o-buttons@^7.0.1,o-header@^9.0.3,o-grid@^6.0.0,o-colors@^6.0.8,o-typography@^7.0.2,o-table@^9.0.2&brand=master&system_code=origami"
        />
      </Head>
      <div>
        <div id="root"><HomeBee /></div>
      </div>
    </div>
  );
}