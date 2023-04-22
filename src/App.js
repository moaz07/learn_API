import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import UserList from "./components/UserList";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log("response:", response);
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <UserList list={data} />
    </div>
  );
}

export default App;
