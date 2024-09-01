import styles from "./SearchUser.module.css";

export default function SearchUser() {
  return (
    <form className={styles.searchUserForm}>
      <img src='/assets/icons/icon-search.svg' alt='loupe icon' />
      <input type='text' id='search' placeholder='Search GitHub username...' />
      <button className={styles.searchBtn}>Search</button>
    </form>
  );
}
