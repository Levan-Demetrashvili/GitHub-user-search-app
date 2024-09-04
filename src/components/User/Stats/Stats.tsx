import { UserType } from "../../../types/UserContext.types";
import styles from "./Stats.module.css";

export default function Stats({ user }: { user: UserType }) {
  return (
    <ul className={styles.userStats}>
      <li className={styles.stat}>
        <p>Repos</p>
        <h2>{user.public_repos}</h2>
      </li>
      <li className={styles.stat}>
        <p>Followers</p>
        <h2>{user.followers}</h2>
      </li>
      <li className={styles.stat}>
        <p>Following</p>
        <h2>{user.following}</h2>
      </li>
    </ul>
  );
}
