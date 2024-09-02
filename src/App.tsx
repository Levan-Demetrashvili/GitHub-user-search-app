import { UserProvider } from "./context/UserContext";
import Header from "./components/Header/Header";
import SearchUser from "./components/SearchUser/SearchUser";
import User from "./components/User/User";
import styles from "./App.module.css";

function App() {
  return (
    <UserProvider>
      <div className={styles.container}>
        <Header />
        <SearchUser />
        <User />
      </div>
    </UserProvider>
  );
}

export default App;
