import styles from "./SearchBox.module.css";

export default function SearchBox() {
  return (
    <div className={styles.SearchBox}>
      <div>
        <form>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" data-component="Search" aria-hidden="true" data-testid="input-search-icon">
              <path stroke="currentColor" strokeWidth="2" d="m21 21-6.904-6.904m0 0a6.5 6.5 0 1 0-9.192-9.192 6.5 6.5 0 0 0 9.192 9.192Z"></path>
            </svg>
            <input placeholder="Search..."></input>
          </div>
        </form>
      </div>
    </div>
  )
}