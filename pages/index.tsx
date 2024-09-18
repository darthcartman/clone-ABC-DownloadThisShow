// import Head from "next/head";
// import Image from "next/image";
// import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import Masthead from "@/components/Masthead/Masthead";
import PresenterAndShowName from "@/components/PresenterAndShowName/PresenterAndShowName";
import ShowDescription from "@/components/ShowDescription/ShowDescription";
import LatestEpisode from "@/components/LatestEpisode/LatestEpisode";
import PreviousEpisodes from "@/components/PreviousEpisodes/PreviousEpisodes";
import MorePodcasts from "@/components/MorePodcasts/MorePodcasts";
import BackToTop from "@/components/BackToTop/BackToTop";

/*const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
}); */

export default function Home() {
  return (
/*    <img alt="" class="Image_image__5tFYM ContentImage_image__DQ_cq HeroImageWithCTA_contentImage__Q4PAv" srcset="https://live-production.wcms.abc-cdn.net.au/d7a840d67acd65be0a9f082e65497b05?impolicy=wcms_crop_resize&amp;cropH=1500&amp;cropW=1500&amp;xPos=0&amp;yPos=0&amp;width=160&amp;height=160 160w, https://live-production.wcms.abc-cdn.net.au/d7a840d67acd65be0a9f082e65497b05?impolicy=wcms_crop_resize&amp;cropH=1500&amp;cropW=1500&amp;xPos=0&amp;yPos=0&amp;width=862&amp;height=862 862w" src="https://live-production.wcms.abc-cdn.net.au/d7a840d67acd65be0a9f082e65497b05?impolicy=wcms_crop_resize&amp;cropH=1500&amp;cropW=1500&amp;xPos=0&amp;yPos=0&amp;width=862&amp;height=862" loading="eager" data-component="Image"> */
/*      <img src="https://live-production.wcms.abc-cdn.net.au/d7a840d67acd65be0a9f082e65497b05?impolicy=wcms_crop_resize&amp;cropH=1500&amp;cropW=1500&amp;xPos=0&amp;yPos=0&amp;width=862&amp;height=862" > */
    // <body>
    <div className={styles.globalStyles}>
      <Masthead />
      <main className={styles.mainElement}>
        <PresenterAndShowName />
        {/* <div>
          <img src="https://live-production.wcms.abc-cdn.net.au/d7a840d67acd65be0a9f082e65497b05?impolicy=wcms_crop_resize&cropH=1500&cropW=1500&xPos=0&yPos=0&width=862&height=862" />
          <Image
            className={styles.logo}
            src="https://nextjs.org/icons/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
        </div> */}
        <ShowDescription />
        <LatestEpisode />
        <PreviousEpisodes />
        <MorePodcasts />
        <BackToTop />
      </main>
      <footer />
    {/* </body> */}
    </div>
  );
}
