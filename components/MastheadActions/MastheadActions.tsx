import styles from "./MastheadActions.module.css";
import SearchBox from "@/components/SearchBox/SearchBox";

export default function MastheadActions() {
  return (
    <div className={styles.MastheadActions}>
      <SearchBox/>
      <div>
        <div className="global-login_loginButtonWrapper__vG7G0">
          <button className="Button_btn___qFSk global-login_globalLoginButton___gnEw Button_ghost__GD9mG" data-component="GlobalLoginButton" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" data-component="AccountCircle" className="icon_icon__9kCSO icon_size24__GkyQ9" aria-hidden="true">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"></circle>
              <circle cx="12" cy="9" r="3" stroke="currentColor" strokeWidth="2"></circle>
              <path stroke="currentColor" strokeLinejoin="round" strokeWidth="2" d="M6 20a5 5 0 0 1 5-5h2a5 5 0 0 1 5 5"></path>
            </svg>
            <span className="ScreenReaderOnly_srOnly__bnJwm" data-component="ScreenReaderOnly">Log In</span>
            <span aria-hidden="true" className="global-login_loginButtonTitle__nhR0m global-login_hideOnMobile__c4MRH">Log In</span>
          </button>
        </div>          
      </div>
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" data-component="Drawer" aria-hidden="true">
          <path stroke="currentColor" strokeWidth="2" d="M21 12H3"></path>
          <path stroke="currentColor" strokeWidth="2" d="M21 6H3"></path>
          <path stroke="currentColor" strokeWidth="2" d="M21 18H3"></path>
        </svg>
      </button>
    </div> 
  )
}