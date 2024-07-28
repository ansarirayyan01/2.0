import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function useIsOnline() {
    const [isOnline, setIsOnline] = useState(window.navigator.onLine);

    useEffect(() => {
        window.addEventListener("online", () => {
            setIsOnline(true);
        })
        window.addEventListener("offline", () => {
            setIsOnline(false);
        })
    })
    return isOnline;
}

function App() {
  const isOnline = useIsOnline()

  if (isOnline) {
    return <div>You are Online.</div>;
  }
  return <div>You are Offline.</div>;
}

function Track({ todo }) {
  return (
    <div>
      {todo.title}
      <br />
      {todo.description}
    </div>
  );
}

export default App;
