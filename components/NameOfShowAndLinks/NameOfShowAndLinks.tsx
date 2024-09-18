import styles from "./NameOfShowAndLinks.module.css";
import LinkToABCRadioNational from "@/components/LinkToABCRadioNational/LinkToABCRadioNational";

export default function NameOfShowAndLinks() {
  return (
    <div>
      <LinkToABCRadioNational />
      <h1 className={styles.nameOfShow}>
        {/* "Download This Show" */}
        Download This Show
      </h1>
    </div>
  )
}