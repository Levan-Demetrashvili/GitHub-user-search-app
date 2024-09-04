import { UserType } from "../../../types/UserContext.types";
import { LinkPropsType } from "../../../types/UserLinks.types";
import styles from "./UserLinks.module.css";

export default function UserLinks({ user }: { user: UserType }) {
  return (
    <div className={styles.userLink}>
      <span className={!user.location ? styles.notAvaliable : ""}>
        <img src='/assets/icons/icon-location.svg' alt='location icon' />
        {user.location || "Not Avaliable"}
      </span>
      <Link linkName={user.twitter_username} baseLinkUrl='https://x.com/' iconSrc='/assets/icons/icon-twitter.svg' />
      <Link linkName={user.blog} baseLinkUrl={user.blog} iconSrc='/assets/icons/icon-website.svg' text={user.blog?.split("/")?.[2]} />
      <Link linkName={user.company} baseLinkUrl='https://github.com/' iconSrc='/assets/icons/icon-company.svg' />
    </div>
  );
}

function Link({ linkName, baseLinkUrl, iconSrc, text = null }: LinkPropsType) {
  return (
    <a className={!linkName ? styles.notAvaliable : ""} href={linkName ? baseLinkUrl + linkName.slice(1) : undefined} target='_blank'>
      <img src={iconSrc} alt='link icon' />
      {text || linkName || "Not Avaliable"}
    </a>
  );
}
