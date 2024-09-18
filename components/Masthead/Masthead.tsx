import styles from "./Masthead.module.css";
import BrandAndMastheadActions from "../BrandAndMastheadActions/BrandAndMastheadActions";
import MastheadLinks from "../MastheadLinks/MastheadLinks";

export default function Masthead() {
  return (
    <header className={styles.header}>
      <div>
        <BrandAndMastheadActions />
        <MastheadLinks />
      </div>
    </header>
  )
}