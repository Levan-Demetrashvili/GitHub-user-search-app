import styles from "./UserLinks.module.css";

export default function UserLinks() {
  return (
    <div className={styles.userLink}>
      <a href='#'>
        <img src='/assets/icons/icon-location.svg' alt='location icon' />
        Örebro, Sweden
      </a>
      <a href='#'>
        <img src='/assets/icons/icon-twitter.svg' alt='twitter icon' />
        @LeonRadley
      </a>
      <a href='#'>
        <img src='/assets/icons/icon-website.svg' alt='website icon' />
        leon.id
      </a>
      <a href='#'>
        <img src='/assets/icons/icon-company.svg' alt='company icon' />
        @locka
      </a>
    </div>
  );
}
