import { useState } from "react";
import './App.css';
import BackgroundAnimation from './BackgroundAnimation';
import InputShortener from './InputShortener';
import LinkResult from './LinkResult';



function App() {
  const [inputvalue, setInputValue] = useState("sczxzx");

  return (
    <div className="container">
      <InputShortener setInputValue={setInputValue}/>
      <BackgroundAnimation/>
      <LinkResult inputvalue={inputvalue}/>
    </div>
  );
}

export default App;
