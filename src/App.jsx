import { useState } from "react";
import "./App.css";
import Users from "./components/Users";
import UserDetails from "./components/UserDetails";

function App() {
  const [userId, setUserId] = useState();
  return (
    <div style={{ display: "flex" }}>
      <div
        style={{ padding: 20, width: "30%", borderRight: "2px solid white" }}
      >
        <Users setUserId={setUserId} />
      </div>
      <div style={{ padding: 20, width: "70%" }}>
        <UserDetails userId={userId} />
      </div>
    </div>
  );
}

export default App;
