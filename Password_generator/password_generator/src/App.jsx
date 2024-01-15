import React, { useCallback, useEffect, useRef, useState } from "react";

const App = () => {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef=useRef("")

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
    if (number) str += "0123456789";
    if (character) str += "!@#$%^&*(){}[]";
    for (let i= 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, number, character]);

const copyToClipBoard=useCallback(()=>{
passwordRef.current?.select();
passwordRef.current?.setSelectionRange(0,10)
window.navigator.clipboard.writeText(password)
},[password])
  useEffect(() => {
    passwordGenerator();
  }, [length, number, character]);
  

  return (
    <div>
      <div className="button">
        <input type="text" 
        readOnly
         value={password}
          placeholder="Password" 
          ref={passwordRef}/>
        <button onClick={copyToClipBoard}>COPY</button>
      </div>
      <input
        type="range"
        name="rangedata"
        className="range"
        value={length}
        min={6}
        max={100}
        onChange={(event) => {
          setLength(event.target.value);
        }}
      />
      <label>Length:{length}</label>
      <div className="numbers">
        <input
          type="checkbox"
          className="checkbox1"
          defaultChecked={number}
          onChange={()=>setNumber((prev) => !prev)}
        />
        Numbers
      </div>
      <div className="character">
        <input
          type="checkbox"
          className="checkbox2"
          defaultChecked={character}
          onChange={()=>setCharacter((prev) => !prev)}
        />
        character
      </div>
    </div>
  );
};

export default App;
