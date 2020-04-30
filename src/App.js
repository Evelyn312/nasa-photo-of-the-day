import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";
import Picture from "./components/Picture";
import Date from "./components/Date";
import Explanation from "./components/Explanation";
import InputDate from "./components/InputDate";



function App() {
  const [nasa, setNasa] = useState({});
  const [dateEnteredData, setDateEnteredData] = useState("");
  const [dateEntered, setDateEntered]= useState("");

  const submitDataEntered = (e) =>{
    e.preventDefault(); // stops submit button from reloading page
    setDateEnteredData(dateEntered);
  };

  const onInputChange = (e) =>{
    setDateEntered(e.target.value);
    };

useEffect(() => {
  axios
    .get(`https://api.nasa.gov/planetary/apod?api_key=XJGHyAaG5zRoaigF05VidEAIt4wnJdN74t1jXZt4&date=${dateEnteredData}`)
    .then(response  => {
        setNasa(response.data);
        setDateEnteredData(response.data.date);
        setDateEntered(response.data.date);
    })
    .catch( () => {
      console.log("There is an error");
    });
},[dateEnteredData]);

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
   
      <Date dateforToday={nasa.date}/>
      <InputDate dateEntered={dateEntered} onInputChange={onInputChange} submitDataEntered={submitDataEntered}/>
      
      <Picture image={nasa.hdurl}/>
      <Explanation explanation={nasa.explanation}/>
      
     
    </div>
  );
}

export default App;
