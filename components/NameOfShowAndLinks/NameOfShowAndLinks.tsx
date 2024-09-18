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
      <div className={styles.buttonsWrapper}>
        <a className={styles.buttonBelowShowTitle}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" data-component="Series" class={styles.icon}>
            <rect width="12" height="8" x="3" y="5" stroke="currentColor" strokeWidth="2" rx="0.5"></rect>
            <path stroke="currentColor" strokeWidth="2" d="M6 16h11.5a.5.5 0 0 0 .5-.5V8"></path>
            <path stroke="currentColor" strokeWidth="2" d="M9 19h11.5a.5.5 0 0 0 .5-.5V11"></path>
          </svg>
          All Episodes
        </a>
        <a className={styles.buttonBelowShowTitle}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" data-component="Mail" class="">
            <path stroke="currentColor" stroke-width="2" d="M20.5 5h-17a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h17a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5Z"></path>
            <path stroke="currentColor" stroke-width="2" d="m21 6.5-8.74 5.34a.5.5 0 0 1-.52 0L3 6.5"></path>
          </svg>
          Contact Us
        </a>
      </div>
    </div>
  )
}