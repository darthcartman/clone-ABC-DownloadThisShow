import styles from "./PresenterImageContainer.module.css";

export default function PresenterImageContainer() {
  return (
    <div className={styles.PresenterImageContainer}>
      <img src="https://live-production.wcms.abc-cdn.net.au/d7a840d67acd65be0a9f082e65497b05?impolicy=wcms_crop_resize&cropH=1500&cropW=1500&xPos=0&yPos=0&width=862&height=862" className={styles.PresenterImage} />
      {/* <Image
          className={styles.logo}
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
      /> */}
    </div>
  )
}