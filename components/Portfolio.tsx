import Head from "next/head";
import Footer from "./Footer";
import Gallery from "./Gallery";
import Header from "./Header";
import Intro from "./Intro";

export default function Portfolio() {
  return (
    <div>
      <Head>
        <title>JINS.DEV - Powered By JH.Lee</title>
      </Head>
      <Header />
      <Intro />
      <Gallery />
      <Footer />
    </div>
  )
}