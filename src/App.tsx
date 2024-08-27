import styles from "./App.module.css";
import Header from "./components/Header/Header";
import SearchUser from "./components/SearchUser/SearchUser";

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <SearchUser />
    </div>
  );
}

export default App;
