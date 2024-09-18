import styles from "./MastheadLinks.module.css";

export default function MastheadLinks() {
  return (
    <div className={styles.MastheadLinks}>
      {/* <div>
        <div> */}
          <nav className={styles.navElement}>
            <ul role="list">
              <li className={styles.listElement}>
                <a className={styles.navItemLink}>Home</a>
              </li>
              <li className={styles.listElement}>
                <a className={styles.navItemLink}>Radio</a>
              </li>
              <li className={styles.listElement}>
                <a className={styles.navItemLink}>Podcasts</a>
              </li>
              <li className={styles.listElement}>
                <a className={styles.navItemLink}>News</a>
              </li>
              <li className={styles.listElement}>
                <a className={styles.navItemLink}>Audiobooks</a>
              </li>
              <li className={styles.listElement}>
                <a className={styles.navItemLink}>ABC Listen app</a>
              </li>
            </ul>
          </nav>
        {/* </div>
      </div> */}
    </div>
  )
}