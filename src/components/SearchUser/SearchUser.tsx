import { useSearchUser } from "../../context/UserContext";
import styles from "./SearchUser.module.css";

export default function SearchUser() {
  const { username, onInputChange, getUserData } = useSearchUser();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    getUserData();
  }
  return (
    <form className={styles.searchUserForm} onSubmit={handleSubmit}>
      <img src='/assets/icons/icon-search.svg' alt='loupe icon' />
      <input type='text' id='search' placeholder='Search GitHub username...' value={username} onChange={onInputChange} />
      <button className={styles.searchBtn} onClick={getUserData}>
        Search
      </button>
    </form>
  );
}
