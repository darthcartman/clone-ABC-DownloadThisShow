import styles from "./PresenterAndShowName.module.css";
// import Image from "next/image";
// import LinkToABCRadioNational from "../LinkToABCRadioNational/LinkToABCRadioNational";
import PresenterImageContainer from "@/components/PresenterImageContainer/PresenterImageContainer";
import NameOfShowAndLinks from "@/components/NameOfShowAndLinks/NameOfShowAndLinks";
import BroughtAndPresentedBy from "@/components/BroughtAndPresentedBy/BroughtAndPresentedBy";
import ByLine from "@/components/ByLine/ByLine";

export default function PresenterAndShowName() {
  return (
    <div className={styles.PresenterAndShowName}>
      {/* <div>
        <img src="https://live-production.wcms.abc-cdn.net.au/d7a840d67acd65be0a9f082e65497b05?impolicy=wcms_crop_resize&cropH=1500&cropW=1500&xPos=0&yPos=0&width=862&height=862" />
      </div> */}
      <PresenterImageContainer />
      <NameOfShowAndLinks />
      {/* <BroughtAndPresentedBy /> */}
      <div className={styles.broughtAndPresentedBy}>
        <ByLine heading="Brought to you by" altText="ABC Radio National" sizes="48px" srcset="https://live-production.wcms.abc-cdn.net.au/b72e54c25b40409156c20bc8bf223c27?impolicy=wcms_crop_resize&cropH=1500&cropW=1500&xPos=0&yPos=0&width=160&height=160 160w, https://live-production.wcms.abc-cdn.net.au/b72e54c25b40409156c20bc8bf223c27?impolicy=wcms_crop_resize&cropH=1500&cropW=1500&xPos=0&yPos=0&width=862&height=862 862w" providerName="ABC Radio National"/>
        <ByLine heading="Presented by" altText="Marc Fennell" sizes="48px" srcset="https://live-production.wcms.abc-cdn.net.au/04131581793451a98e9b0526b131603a?impolicy=wcms_crop_resize&cropH=2000&cropW=2000&xPos=0&yPos=0&width=160&height=160 160w, https://live-production.wcms.abc-cdn.net.au/04131581793451a98e9b0526b131603a?impolicy=wcms_crop_resize&cropH=2000&cropW=2000&xPos=0&yPos=0&width=862&height=862 862w" providerName="Marc Fennell"/>
      </div>
    </div>
  )
}