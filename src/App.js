import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
function Animal(props) {
  return (
    <div>
      <ul>
        <li>Id: {props._id}</li>
        <li>Name: {props.name}</li>
        <li>Age: {props.age}</li>
        <li>Species: {props.species}</li>
        <li>Enclosure: {props.enclosure}</li>
      </ul>
    </div>
  );
}

function App() {
  const [animalData, setAnimalData] = useState([]);
  useEffect(() => {
    axios
      .get("https://express-ts-backend.herokuapp.com/zoo")
      .then(function (response) {
        // handle success
        setAnimalData(response.data.animals)
      })
  }, []);
  return (
    <div className="App">
      {animalData.map((animal, index) => <Animal key={index} id={animal.id} name={animal.name} age={animal.age} species={animal.species} enclosure={animal.enclosure}/>)}
    </div>
  );
}

export default App;
