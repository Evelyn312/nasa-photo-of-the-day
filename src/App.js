import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";
import Picture from "./components/Picture";
import Date from "./components/Date";
import Explanation from "./components/Explanation";
import InputDate from "./components/InputDate";



function App() {
  const [nasa, setNasa] = useState({});

useEffect(() => {
  axios
    .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
    .then(response  => {
        setNasa(response.data);
    })
    .catch( () => {
      console.log("There is an error");
    });
},[]);

  // console.log("test nasa data", nasa);
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
   
      <Date date={nasa.date}/>
      <InputDate />
      <Picture image={nasa.hdurl}/>
      <Explanation explanation={nasa.explanation}/>
      
     
    </div>
  );
}

export default App;
