import Stats from "./Stats/Stats";
import UserLinks from "./UserLinks/UserLinks";

import styles from "./User.module.css";

export default function User() {
  return (
    <div className={styles.user}>
      <div className={styles.imageBox}>
        <img src='https://avatars.githubusercontent.com/u/63664402?v=4' alt='[user] avatar' />
      </div>
      <div className={styles.about}>
        <section>
          <h1>Leon Radley</h1>
          <span className={styles.dateCreated}>Joined 14 Apr 2020</span>
        </section>
        <span className={styles.userTag}>@leon</span>
        <p className={styles.bio}>I love web technology, interactive design, and building and making beautiful web apps. - Chief Architect at @locka</p>
        <Stats />
        <UserLinks />
      </div>
    </div>
  );
}
