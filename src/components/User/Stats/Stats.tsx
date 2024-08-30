import styles from "./Stats.module.css";

export default function Stats() {
  return (
    <ul className={styles.userStats}>
      <li className={styles.stat}>
        <p>Repos</p>
        <h2>144</h2>
      </li>
      <li className={styles.stat}>
        <p>Followers</p>
        <h2>106</h2>
      </li>
      <li className={styles.stat}>
        <p>Following</p>
        <h2>39</h2>
      </li>
    </ul>
  );
}
