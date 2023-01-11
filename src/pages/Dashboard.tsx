import React, { useEffect } from "react";
import { generateNumberRandom } from "../helpers/common";
import { useAppContext } from "../hooks/useAppContext";
import { useFetchData } from "../hooks/useFetchData";

const Dashboard = () => {
  const { user, characters } = useAppContext();
  const { handleGetCharacters } = useFetchData();

  useEffect(() => {
    const randoms = generateNumberRandom({
      min: 1,
      max: 826,
      total: 8,
    }).toString();
    handleGetCharacters(randoms);
  }, []);
  
  return (
    <div>
      <h1>Dashboard</h1>
      <span>welcome: {user}</span>
      <ul>
        {characters.map((item) => (
          <li key={item.id}>
            <>
              <h5>{item.name}</h5>
              <img
                src={item.image}
                alt=""
                style={{ width: "200px", height: "200px" }}
              />
            </>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
