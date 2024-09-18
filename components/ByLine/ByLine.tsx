import styles from "./ByLine.module.css";

export default function ByLine( {heading, altText, sizes, srcset, providerName} ) {
  return (
    <div>
      <p className={styles.bylineLabel}>{heading}</p>
      <div>
        <span>
          <a>
            <span>
              {/* <img alt="ABC Radio National" sizes="48px" srcset="https://live-production.wcms.abc-cdn.net.au/b72e54c25b40409156c20bc8bf223c27?impolicy=wcms_crop_resize&cropH=1500&cropW=1500&xPos=0&yPos=0&width=160&height=160 160w, https://live-production.wcms.abc-cdn.net.au/b72e54c25b40409156c20bc8bf223c27?impolicy=wcms_crop_resize&cropH=1500&cropW=1500&xPos=0&yPos=0&width=862&height=862 862w" src="https://live-production.wcms.abc-cdn.net.au/b72e54c25b40409156c20bc8bf223c27?impolicy=wcms_crop_resize&cropH=1500&cropW=1500&xPos=0&yPos=0&width=862&height=862" loading="eager" data-component="Image" ratio="1x1"/> */}
              <img alt={altText} sizes={sizes} srcSet={srcset} loading="eager" data-component="Image" ratio="1x1"/>
            </span>
            <span>
              {providerName}
            </span>
          </a>
        </span>
      </div>
    </div>
  )
}