import { useUser } from "../../context/UserContext";

import Stats from "./Stats/Stats";
import UserLinks from "./UserLinks/UserLinks";
import Spinner from "../Spinner/Spinner";

import styles from "./User.module.css";

export default function User() {
  const { isLoading, user } = useUser();
  if (isLoading) return <Spinner />;
  if (!user) return null;

  return (
    <div className={styles.user}>
      <div className={styles.imageBox}>
        <img src={user.avatar_url} alt={`${user.name}'s avatar`} />
      </div>
      <div className={styles.about}>
        <section>
          <h1>{user.name}</h1>
          <span className={styles.dateCreated}>{"Joined " + formatDate(user.created_at)}</span>
        </section>
        <span className={styles.userTag}>@{user.login}</span>
        <pre className={styles.bio}>{user.bio || "This profile has no bio"}</pre>
        <Stats user={user} />
        <UserLinks user={user} />
      </div>
    </div>
  );
}

function formatDate(dateStr: string) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(dateStr));
}
