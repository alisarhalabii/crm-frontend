import { useState } from "react";
import Login from "./Login";
import Dashboard from "./Dashboard";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <div>
      {isAuth ? (
        <Dashboard />
      ) : (
        <Login setIsAuth={setIsAuth} />
      )}
    </div>
  );
}

export default App;