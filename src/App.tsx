import styles from "./App.module.css";
import Header from "./components/Header/Header";
import SearchUser from "./components/SearchUser/SearchUser";
import User from "./components/User/User";

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <SearchUser />
      <User />
    </div>
  );
}

export default App;
