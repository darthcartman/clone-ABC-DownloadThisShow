import styles from "./LinkToABCRadioNational.module.css";

export default function LinkToABCRadioNational() {
  return (
    <p>
      <a href="https://www.abc.net.au/listen/radionational/" className={styles.linkAnchor}>
        <span className={styles.linkText}>ABC Radio National</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" data-component="ArrowRight" 
            //  className="icon_icon__9kCSO AttributionLinks_arrow__WhGX1 icon_size24__GkyQ9">
             className={styles.linkArrow}>
          <path stroke="currentColor" strokeWidth="2" d="m13 19 7-7-7-7"></path>
          <path stroke="currentColor" strokeWidth="2" d="M20 12H3"></path>
        </svg>
      </a>
    </p>
  )
}