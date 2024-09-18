import styles from "./SearchBox.module.css";

export default function SearchBox() {
  return (
    <div className={styles.SearchBox}>
      <div>
        <form className={styles.autocompleteForm}>
          <div className={styles.svgAndInputWrapper}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" data-component="Search" className={styles.searchInputIcon} aria-hidden="true" data-testid="input-search-icon">
              <path stroke="currentColor" strokeWidth="2" d="m21 21-6.904-6.904m0 0a6.5 6.5 0 1 0-9.192-9.192 6.5 6.5 0 0 0 9.192 9.192Z"></path>
            </svg>
            <input className={styles.searchBoxInputElement} id="abc-search-input" autoComplete="off" autoCorrect="off" autoCapitalize="off" enterKeyHint="search" placeholder="Search..." maxLength="512" type="search" role="combobox"/>
          </div>
        </form>
      </div>
    </div>
  )
}